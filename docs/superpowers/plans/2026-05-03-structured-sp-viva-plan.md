# Structured SP Script & VIVA Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Phase 2 history-taking with structured SP dialogue scripts and Phase 3 VIVA with sequenced parts (dx→PE→investigations→management→other), result cards for PE/investigation findings, using PMGP Case 2 as the first template case.

**Architecture:** Extend `CaseData` with 4 optional fields (`sp_script`, `vital_signs`, `pe_findings`, `investigations`), add `part` to `VivaQuestion`, rewrite prompt builders for structured SP persona+script and sequenced VIVA, add result card rendering in VivaPhase. All new fields optional → backward compatible.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS 4, DeepSeek API

---

## File Map

| File | Responsibility |
|---|---|
| `src/types/index.ts` | All shared types — add `SPDialogue`, extend `VivaQuestion`, extend `CaseData` |
| `src/lib/prompts.ts` | AI prompt builders — rewrite chat & viva builders |
| `src/components/VivaPhase.tsx` | VIVA UI — result card parsing & rendering |
| `src/data/cases/case-pmgp-c2-fatigue.ts` | PMGP Case 2 static data (new) |
| `src/data/cases/index.ts` | Case registry — register new case |

---

### Task 1: Extend Type Definitions

**Files:**
- Modify: `src/types/index.ts`

- [ ] **Step 1: Add SPDialogue interface and extend VivaQuestion, CaseData**

After `HPI` interface (line 11), insert `SPDialogue`:

```typescript
export interface SPDialogue {
  trigger: string;
  trigger_zh: string;
  response: string;
  response_zh: string;
}
```

On `VivaQuestion` (line 57), add optional `part` field:

```typescript
export interface VivaQuestion {
  part?: 'dx' | 'pe' | 'investigations' | 'management' | 'other';
  question: string;
  answer: string | string[] | Record<string, unknown>;
}
```

On `CaseData` (line 64), add 4 optional fields after `marking_scheme`:

```typescript
export interface CaseData {
  _id: string;
  case_id: string;
  case_name: string;
  type: CaseType;
  is_general_case: boolean;
  patient: PatientInfo;
  questions: VivaQuestion[];
  marking_scheme: MarkingScheme;
  vital_signs?: string;
  sp_script?: SPDialogue[];
  pe_findings?: string;
  investigations?: string;
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: No errors. `part` is optional — all 60 existing cases without `part` default to `undefined`, which the prompt builder treats as `'other'`.

- [ ] **Step 3: Commit**

```bash
git add src/types/index.ts
git commit -m "feat: add SPDialogue, optional VivaQuestion.part, and optional CaseData fields for structured SP/VIVA"
```

---

### Task 2: Rewrite Prompt Builders

**Files:**
- Modify: `src/lib/prompts.ts`

- [ ] **Step 1: Update buildPatientSummary to include vital_signs**

Replace the existing `buildPatientSummary` function (lines 5-24) with:

```typescript
function buildPatientSummary(caseData: CaseData): string {
  const p = caseData.patient;
  const lines: string[] = [
    `Age: ${p.age}`,
    `Gender: ${p.gender === 'M' ? 'Male' : 'Female'}`,
    `Occupation: ${p.occupation}`,
    `Chief complaint: ${p.chief_complaint}`,
    `Presenting scenario: ${p.presentation.setting}`,
  ];
  if (caseData.vital_signs) {
    lines.push(`Vital Signs: ${caseData.vital_signs}`);
  }
  lines.push(
    `Pain details: ${p.presentation.hpi.onset}. ${p.presentation.hpi.site}. ${p.presentation.hpi.character}. Severity: ${p.presentation.hpi.severity}.`,
    `Past medical history: ${p.medical_history.chronic_conditions.join(', ') || 'None significant'}`,
    `Medications: ${p.drug_history.medications.join(', ') || 'None'}`,
    `Allergies: ${p.drug_history.allergies}`,
    `Smoking: ${p.social_history.smoking}`,
    `Alcohol: ${p.social_history.alcohol}`,
    `Family history: ${p.family_history}`,
    `ICE - Ideas: ${p.ice.ideas}`,
    `ICE - Concerns: ${p.ice.concerns}`,
    `ICE - Expectations: ${p.ice.expectations}`,
  );
  return lines.join('\n');
}
```

- [ ] **Step 2: Rewrite buildChatSystemPrompt with script support**

Replace the existing function (lines 26-54) with:

```typescript
export function buildChatSystemPrompt(caseData: CaseData, language: Language): string {
  const summary = buildPatientSummary(caseData);

  // Build script section if sp_script exists
  let scriptSection = '';
  if (caseData.sp_script && caseData.sp_script.length > 0) {
    const dialogues = caseData.sp_script
      .map((d, i) => {
        if (language === 'zh') {
          return `Trigger ${i + 1}: "${d.trigger_zh}"\nScripted response: "${d.response_zh}"`;
        }
        return `Trigger ${i + 1}: "${d.trigger}"\nScripted response: "${d.response}"`;
      })
      .join('\n\n');
    scriptSection = `
CORE DIALOGUE SCRIPT:
The following are specific trigger-response pairs. When the student's question matches a trigger, use the corresponding scripted response. If no trigger matches, improvise naturally from your persona knowledge base.

${dialogues}`;
  }

  if (language === 'zh') {
    return `你现在是一个OSCE（客观结构化临床考试）临床技能考核中的模拟病人。请严格按照以下信息来扮演这个角色。

${summary}
${scriptSection}

重要规则：
1. 用中文自然地回答医学生的问题。使用日常用语，不要使用医学术语。
2. 只提供学生主动询问的信息。如果他们没问到某个方面，不要主动提供。
3. 你有轻度不适但总体配合检查。
4. 当被问及你的想法、担忧和期望时，请根据上述ICE部分回答。
5. 保持角色一致。不要跳出角色进行解释或给出医学建议。
6. 如果你不清楚的问题或学生询问的不是你应该知道的信息，可以说"我不太清楚"或"我不知道"。
7. 如果学生的问题与某个核心对话剧本匹配，优先使用剧本中的回答。`;
  }

  return `You are a simulated patient for an OSCE (Objective Structured Clinical Examination) clinical skills assessment. Stay in character based on the following information:

${summary}
${scriptSection}

Important rules:
1. Respond naturally to the medical student's questions. Use layperson language — do NOT use medical terminology.
2. Only provide information that the student specifically asks about. Do not volunteer unasked information.
3. You are in mild discomfort but cooperative with the examination.
4. When asked about your ideas, concerns, and expectations, respond according to the ICE section above.
5. Stay in character at all times. Do not break character to explain things or give medical advice.
6. If you're unsure about something or the student asks something you wouldn't know as this patient, say "I'm not sure" or "I don't know."
7. When the student's question matches a trigger topic in the core dialogue script, use the scripted response.`;
}
```

- [ ] **Step 3: Rewrite buildVivaSystemPrompt with part-based sequencing**

Replace the existing function (lines 56-82) with:

```typescript
export function buildVivaSystemPrompt(caseData: CaseData): string {
  // Group questions by part
  const partOrder: Array<{ part: string; label: string }> = [
    { part: 'dx', label: 'DIAGNOSIS & DIFFERENTIAL DIAGNOSIS' },
    { part: 'pe', label: 'PHYSICAL EXAMINATION' },
    { part: 'investigations', label: 'INVESTIGATIONS' },
    { part: 'management', label: 'MANAGEMENT' },
    { part: 'other', label: 'ADDITIONAL QUESTIONS' },
  ];

  const grouped: Record<string, string[]> = {};
  for (const { part, label } of partOrder) {
    const qs = caseData.questions
      .filter(q => (q.part || 'other') === part)
      .map((q, i) => `${i + 1}. ${q.question}`);
    if (qs.length > 0) {
      grouped[label] = qs;
    }
  }

  const questionBlocks = Object.entries(grouped)
    .map(([label, qs]) => `--- ${label} ---\n${qs.join('\n')}`)
    .join('\n\n');

  const hasPeFindings = !!caseData.pe_findings;
  const hasInvestigations = !!caseData.investigations;

  return `You are an OSCE examiner conducting a viva voce (oral examination) for a medical student.

Case: ${caseData.case_name}
${caseData.patient.age}-year-old ${caseData.patient.gender === 'M' ? 'male' : 'female'} presenting with ${caseData.patient.chief_complaint}.

Your question bank is divided into sections. Ask questions in EXACT SECTION ORDER:

${questionBlocks}

IMPORTANT — SECTION TRANSITION TAGS:
- After you finish ALL questions in a section and have given feedback on the last answer, append the section transition tag on its own line.
${hasPeFindings ? '- After the last PHYSICAL EXAMINATION question is fully answered and you have given feedback, end your message with:\n[PART: pe]\n' : ''}
${hasInvestigations ? '- After the last INVESTIGATIONS question is fully answered and you have given feedback, end your message with:\n[PART: investigations]\n' : ''}

CRITICAL RULE — DO NOT LEAK ANSWERS:
- NEVER mention the diagnosis, differential diagnoses, or any clinical findings in your question.
- NEVER embed hints about the correct answer in how you phrase the question.
- NEVER say things like "What is the most likely diagnosis, which is X?"
- Your questions must be neutral and exam-like.

Rules:
1. Start from the first section. Ask ONE question at a time. Wait for the student's answer before moving on.
2. After each student answer, give brief constructive feedback (1-2 sentences), then ask the next question.
3. If the answer is incomplete, probe gently before moving on. Do NOT fill in the missing parts yourself until the student has had a chance to respond.
4. If the student gives an excellent answer, acknowledge it briefly.
5. Transition between sections using the section transition tags exactly as specified above.
6. After ALL questions in ALL sections have been asked and answered, say "The viva session is now complete. Thank you." and stop.
7. Stay focused and professional. Do not go off-topic.`;
}
```

- [ ] **Step 4: Type check**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/lib/prompts.ts
git commit -m "feat: rewrite prompts with SP script support and part-sequenced VIVA"
```

---

### Task 3: Add Result Cards to VivaPhase

**Files:**
- Modify: `src/components/VivaPhase.tsx`

- [ ] **Step 1: Add result state variables**

After existing state declarations (line 19), add:

```typescript
const [showPeResults, setShowPeResults] = useState(false);
const [showInvestigationResults, setShowInvestigationResults] = useState(false);
```

- [ ] **Step 2: Parse [PART: ...] tags when receiving examiner replies**

In `startViva` callback (line 27), after `setMessages([examinerMessage])` (line 57), add:

```typescript
if (data.reply.includes('[PART: pe]')) {
  setShowPeResults(true);
}
if (data.reply.includes('[PART: investigations]')) {
  setShowInvestigationResults(true);
}
```

In `handleSend` callback (line 71), after `setMessages((prev) => [...prev, examinerMessage])` (line 117), add:

```typescript
if (data.reply.includes('[PART: pe]')) {
  setShowPeResults(true);
}
if (data.reply.includes('[PART: investigations]')) {
  setShowInvestigationResults(true);
}
```

- [ ] **Step 3: Add helper to strip tags from displayed content**

Add a helper function at the top of the component (after the interface, before the component function):

```typescript
function stripPartTag(content: string): string {
  return content.replace(/\n?\[PART: (?:pe|investigations)\]\n?/g, '').trim();
}
```

- [ ] **Step 4: Render result cards in the message list**

In the messages map (line 176), after the closing `</div>` of the examiner message bubble (the `bg-purple-50` div), insert the result card logic. Find the pattern where examiner messages are rendered — after the message content `{msg.content}` is displayed, add result card rendering for that message:

Inside the messages loop, after the examiner message bubble is closed (after line 204), add:

```typescript
{msg.role === 'examiner' && msg.content.includes('[PART: pe]') && caseData.pe_findings && showPeResults && (
  <div className="flex justify-start mt-2">
    <div className="ml-11 max-w-[80%] bg-gray-50 rounded-xl border-l-4 border-teal-500 p-4">
      <h4 className="text-sm font-bold text-teal-700 mb-2">Physical Examination Findings</h4>
      <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{caseData.pe_findings}</p>
    </div>
  </div>
)}
{msg.role === 'examiner' && msg.content.includes('[PART: investigations]') && caseData.investigations && showInvestigationResults && (
  <div className="flex justify-start mt-2">
    <div className="ml-11 max-w-[80%] bg-gray-50 rounded-xl border-l-4 border-purple-500 p-4">
      <h4 className="text-sm font-bold text-purple-700 mb-2">Investigation Results</h4>
      <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{caseData.investigations}</p>
    </div>
  </div>
)}
```

And below them, add fallback for missing data (after the above blocks):

```typescript
{msg.role === 'examiner' && msg.content.includes('[PART: pe]') && !caseData.pe_findings && showPeResults && (
  <div className="flex justify-start mt-2">
    <div className="ml-11 max-w-[80%] bg-gray-50 rounded-xl border-l-4 border-teal-500 p-4">
      <p className="text-sm text-gray-500 italic">No physical examination findings data available for this case.</p>
    </div>
  </div>
)}
{msg.role === 'examiner' && msg.content.includes('[PART: investigations]') && !caseData.investigations && showInvestigationResults && (
  <div className="flex justify-start mt-2">
    <div className="ml-11 max-w-[80%] bg-gray-50 rounded-xl border-l-4 border-purple-500 p-4">
      <p className="text-sm text-gray-500 italic">No investigation results data available for this case.</p>
    </div>
  </div>
)}
```

- [ ] **Step 5: Apply stripPartTag to displayed content**

In the examiner message bubble, change `{msg.content}` to `{stripPartTag(msg.content)}` so the tag is not visible.

- [ ] **Step 6: Type check**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/VivaPhase.tsx
git commit -m "feat: add PE and investigation result cards to VIVA phase"
```

---

### Task 4: Create PMGP Case 2 Data File

**Files:**
- Create: `src/data/cases/case-pmgp-c2-fatigue.ts`

- [ ] **Step 1: Write the complete case data file**

```typescript
// src/data/cases/case-pmgp-c2-fatigue.ts
import { CaseData } from '@/types';

const casePMGPC2Fatigue: CaseData = {
  _id: 'case-pmgp-c2-fatigue',
  case_id: 'PMGP CBL1 Case 2 - Fatigue',
  case_name: 'Fatigue — Progressive Exertional',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 37°C (98.7°F), P 102 bpm, R 16/min, BP 126/76 mmHg, BMI 24.1 kg/m²',
  patient: {
    age: 55,
    gender: 'M',
    occupation: 'Roofing business owner and manager',
    chief_complaint: 'Fatigue for 2 months',
    presentation: {
      setting: 'Mr. Chen comes to your clinic presenting with fatigue for the past two months.',
      duration: '2 months, progressive',
      hpi: {
        onset: 'Gradual onset over 2 months, getting worse',
        site: 'Generalized — whole body fatigue and weakness',
        character: 'Constant tiredness, drained and weak, not refreshed by sleep. Heart pounding on exertion.',
        radiation: 'N/A',
        severity: 'Significant — previously able to carry 30kg up ladders, now gets tired walking up 7-8 steps',
        time_course: 'Continuous, worsening over 2 months',
        exacerbating_factors: ['Physical exertion (walking up stairs, work activities)'],
        relieving_factors: ['Sitting down to rest (but only temporarily — fatigue returns on resuming activity)'],
      },
    },
    symptoms: {
      cardiovascular: {
        palpitations: true,
        heart_pounding_on_exertion: true,
        chest_pain: false,
        dyspnea: false,
        orthopnea: false,
        edema: false,
      },
      constitutional: {
        fatigue: true,
        fever: false,
        chills: false,
        weight_loss: false,
        night_sweats: false,
      },
      respiratory: {
        cough: false,
        wheezing: false,
        hemoptysis: false,
      },
      negatives: {
        polyuria: false,
        polydipsia: false,
        heat_cold_intolerance: false,
        headache: false,
        visual_changes: false,
        jaundice: false,
        nausea_vomiting: false,
        dysuria: false,
        joint_pain: false,
        paresthesias: false,
        rash: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hemorrhoids (for years, intermittent)'],
      negatives: ['No known chronic diseases', 'No prior hospitalizations or surgeries'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None — no regular medications or herbal remedies'],
    },
    social_history: {
      smoking: 'Never smoked',
      alcohol: 'Special occasions only, small amounts',
      occupation: 'Owns and manages family roofing business. Wife and two adult children also work there.',
      family: 'Lives with wife of 26 years. Two grown children live locally.',
    },
    family_history: 'Father died of MI at age 77. Mother alive at 81 with hypertension and osteoarthritis. Two younger sisters and one younger brother — all healthy. No family history of thalassemia, cancer, or mental illness.',
    ice: {
      ideas: 'Thinks it might just be stress or aging — "never been sick a day in my life"',
      concerns: 'Frustrated that sleep does not help, worried this is affecting his ability to run his business',
      expectations: 'Wants to find out what is wrong and get back to normal energy levels',
    },
  },
  sp_script: [
    {
      trigger: 'What brought you in today? / Why are you here?',
      trigger_zh: '今天是什么原因让您来就诊？/ 您哪里不舒服？',
      response: "Well, for the past two months, I've just been getting more and more tired all the time. I have to ask my employees to do stuff for me that I've always been able to do. And at the end of the day, I'm just done. I mean, I crash as soon as dinner's over. I think that's why my wife's on my case to come in. I don't like to go to doctors. It's just really not like me to feel this way. I've never been sick a day in my life.",
      response_zh: '嗯，过去这两个月，我觉得自己越来越容易累。以前我自己能做的活儿，现在都得让员工帮忙做。一天忙完我就彻底不行了。基本上吃完晚饭我就撑不住，马上就倒头睡觉。我想这也是我太太一直催我来医院的原因。我其实不喜欢看医生。这样子感觉很不像我自己，我以前几乎没生过什么病。',
    },
    {
      trigger: 'Tell me more about your fatigue / Describe the tiredness',
      trigger_zh: '能多说说这种疲劳的感觉吗？/ 是什么样的累？',
      response: "You know, I run a roofing business, and I've always been able to run up and down two-story ladders carrying 30-kg packs of roofing shingles. Now, I get tired even walking up seven or eight steps to the porch. And it's not like sitting and resting seems to help — I'm just as drained after I get up.",
      response_zh: '我是做屋顶工程生意的，以前我经常扛着 30 公斤一包的屋顶瓦片，上下两层楼高的梯子都没问题。现在，就算只是爬个七八级台阶上门廊，我都觉得很累。而且坐下休息似乎也没什么用，休息完站起来还是一样觉得精疲力尽。',
    },
    {
      trigger: 'Are you out of breath? / Any pain? / What does it feel like when exerting?',
      trigger_zh: '会不会气喘？/ 有疼痛吗？/ 活动的时候具体什么感觉？',
      response: "Not out of breath really. Just drained and weak. My heart seems to be pounding and I just want to sit. I don't really have any pain.",
      response_zh: '也不是真的气喘，就是觉得人很虚，很没力气。心跳得有点厉害，只想坐下来休息。倒也没有什么疼痛。',
    },
    {
      trigger: 'Any stress lately? / Work been harder? / Life changes?',
      trigger_zh: '最近压力大吗？/ 工作更辛苦了？/ 生活有什么变化？',
      response: "No, not really. Now that I manage the business, I let my son and the other guys do the real heavy stuff. It hasn't been any more stressful than usual. My family's doing fine.",
      response_zh: '倒也没有。现在我主要是负责管理这个生意，重活一般都让儿子和其他工人来干。压力也没有比以前更大。家里情况也都挺好的。',
    },
    {
      trigger: 'How is your sleep? / Are you sleeping enough?',
      trigger_zh: '睡眠怎么样？/ 睡得够不够？',
      response: "Yeah. More than enough, really. I told you I can't stay awake after dinner, and I sleep right through to the morning. And it's not as if the sleep actually helps me. In the morning I'm just as spent as I was the day before. It is really getting me down.",
      response_zh: '睡得挺多，甚至可以说是太多了。我刚才说过，晚饭后我都撑不住，很快就睡着，一直睡到早上。可问题是，睡了也不见得好转。第二天早上起来还是跟前一天一样累。这件事真的让我很沮丧。',
    },
    {
      trigger: 'Any snoring? / Daytime sleepiness?',
      trigger_zh: '打呼噜吗？/ 白天会困吗？',
      response: "My wife sometimes complains that I snore. But I don't feel sleepy during the day — just tired and wiped out.",
      response_zh: '我太太有时抱怨我打呼噜。但我白天不觉得困——就是人很累很疲乏。',
    },
    {
      trigger: 'Any fever? / Weight changes? / Infections?',
      trigger_zh: '有没有发烧？/ 体重变化？/ 最近感染过吗？',
      response: 'No fever, no chills, no weight loss that I have noticed. No recent infections.',
      response_zh: '没有发烧，没有发冷，体重也没什么变化。最近也没有感冒感染什么的。',
    },
    {
      trigger: 'Any blood in stool? / Bowel changes? / GI symptoms?',
      trigger_zh: '大便有血吗？/ 排便有什么变化？/ 消化系统有什么问题？',
      response: 'I do notice some blood in my stool. I have had hemorrhoids for years, so I sometimes get some bleeding after I use the bathroom.',
      response_zh: '我有注意到大便里有一点血。我痔疮好多年了，所以有时候上完厕所会有点出血。',
    },
    {
      trigger: 'Is it bright red blood? / How much? / Mixed in stool?',
      trigger_zh: '血是鲜红色的吗？/ 量多吗？/ 是混在大便里面的吗？',
      response: "Yeah, it's just a little bit though. It's really just some drops or a streak on the toilet paper. It doesn't hurt or anything. I'm pretty sure it's just from hemorrhoids. My dad had them too.",
      response_zh: '是的，但量不多。基本上就是几滴，或者在卫生纸上有一点血痕。也不疼什么的。我挺确定这只是痔疮，我父亲以前也有痔疮。',
    },
    {
      trigger: 'How long have you had the bleeding? / Has it changed?',
      trigger_zh: '出血有多久了？/ 有没有变化？',
      response: "I've had it off and on for years, but I guess it's happened a little more often this past year. It's really nothing much.",
      response_zh: '断断续续好几年了吧，不过这一年好像稍微频繁了一点。但真的不算什么大问题。',
    },
    {
      trigger: 'Feeling down? / Depressed? / Anxious? / Enjoying life?',
      trigger_zh: '情绪怎么样？/ 有没有情绪低落？/ 焦虑？',
      response: "I don't have much time to do things I enjoy outside of work, and my fatigue has made this more difficult lately. But I wouldn't say I'm depressed.",
      response_zh: '工作以外我没太多时间做自己喜欢的事情，最近因为太疲劳，这些事情就更难做到了。但我不觉得自己抑郁了。',
    },
    {
      trigger: 'Any medications? / Allergies?',
      trigger_zh: '在吃任何药物吗？/ 过敏吗？',
      response: "I'm not taking any medications. No allergies that I know of.",
      response_zh: '我没在吃任何药。也没有过敏。',
    },
    {
      trigger: 'Chest pain? / Difficulty breathing? / Leg swelling?',
      trigger_zh: '胸痛吗？/ 呼吸困难吗？/ 腿肿吗？',
      response: 'No chest pain, no trouble breathing, no swelling in my legs.',
      response_zh: '没有胸痛，呼吸没问题，腿也不肿。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'Write a summary statement and present your most likely diagnosis with differential diagnoses, ranked by likelihood. Explain your reasoning for each.',
      answer: 'Working diagnosis: Iron deficiency anemia secondary to chronic GI blood loss (most likely from hemorrhoids, but colorectal neoplasia must be excluded). Key supporting features: 2-month progressive fatigue, exertional palpitations, tachycardia (P 104), pale conjunctivae, history of intermittent hematochezia. DDx ranked: 1. Anemia (iron deficiency from GI loss), 2. Occult malignancy (colorectal cancer), 3. Obstructive sleep apnea (snoring, but no daytime somnolence), 4. Coronary artery disease (exertional symptoms in 55M, but no chest pain, symptoms not relieved by rest → less typical), 5. Depression (negative PHQ-2, patient attributes reduced activities to fatigue not mood).',
    },
    {
      part: 'dx',
      question: 'What are the key features that differentiate iron deficiency anemia from anemia of chronic disease?',
      answer: 'Iron deficiency: low serum iron, low ferritin (<30 ng/mL), high TIBC, low transferrin saturation, elevated sTfR. ACD: low serum iron, normal/high ferritin, low/normal TIBC, low transferrin saturation, normal sTfR. Ferritin is the most discriminatory — low in IDA, normal/elevated in ACD.',
    },
    {
      part: 'pe',
      question: 'How would you examine this patient? What physical examination would you perform, and what specific signs are you looking for?',
      answer: 'Head-to-toe exam looking for signs of anemia (pallor, pale conjunctivae, tachycardia), cardiac disease (murmurs, gallops, JVP), liver disease (jaundice, ascites, hepatomegaly), thyroid disease (goiter, nodules), and malignancy (lymphadenopathy, abdominal masses). Essential: rectal exam for hemorrhoid assessment and fecal occult blood testing. Also: vital signs including orthostatic measurements.',
    },
    {
      part: 'investigations',
      question: 'What investigations would you order to work up this patient\'s fatigue? Please categorize them as initial core tests, reasonable additional tests, and further work-up if initial testing is unrevealing.',
      answer: 'Initial core: CBC with peripheral smear and reticulocyte count, iron studies (serum iron, ferritin, TIBC, transferrin saturation), lipid panel, fasting glucose/HbA1c, FOBT or colonoscopy. Reasonable additional: B12 and folate, ECG, urinalysis, TSH. Further if initial unrevealing: sleep study (polysomnography), stress test, LFT, RFT, ESR.',
    },
    {
      part: 'investigations',
      question: 'This patient has rectal bleeding and is 55 years old. What is your approach to colorectal cancer screening in this patient, and how would you respond if he refuses colonoscopy?',
      answer: 'At age 55 with new or worsening rectal bleeding, colonoscopy is indicated for direct visualization and biopsy. If he refuses: acknowledge his perspective (he believes it is just hemorrhoids), explain that guidelines recommend screening at his age regardless of symptoms, discuss FIT/fecal immunochemical test as a less invasive alternative, emphasize that the purpose is to rule out serious causes — not to dismiss his hemorrhoid diagnosis. Document the refusal and arrange follow-up. Respect patient autonomy.',
    },
    {
      part: 'management',
      question: 'How would you manage this patient? Outline your management plan including both specific treatment and broader care.',
      answer: '1. Identify and treat underlying cause: complete anemia work-up → identify source of GI bleeding → iron supplementation if iron deficiency confirmed. 2. Persuade patient regarding colonoscopy for CRC screening. 3. Address patient concerns: validate hemorrhoid history but explain need to exclude other causes. 4. ASCVD risk factor management based on lipid/glucose results. 5. Consider sleep study if work-up unrevealing and snoring persists. 6. Follow-up plan: review lab results, reassess symptoms, monitor hemoglobin response to treatment.',
    },
    {
      part: 'other',
      question: 'What are the common causes of iron deficiency anemia in adult males?',
      answer: '1. Chronic GI blood loss — most common (peptic ulcer disease, gastritis, angiodysplasia, colorectal cancer, hemorrhoids). 2. Decreased iron absorption (gastrectomy, celiac disease, chronic PPI use). 3. Inadequate dietary intake (rare as sole cause in males). In adult males and postmenopausal females, GI blood loss is the presumed cause until proven otherwise.',
    },
  ],
  pe_findings: `Vital Signs: T 37°C (98.7°F), P 104 bpm, R 16/min, BP 126/76 mmHg, BMI 24.1 kg/m²

General: Well-appearing, physically fit male.

HEENT: Pupils equal, round, and reactive. Conjunctivae are pale. Oropharynx moist without tonsillar enlargement. Nares clear with normal-sized turbinates.

Neck: Supple. No adenopathy, thyromegaly, or bruits.

Respiratory: Clear to auscultation bilaterally. No wheezing or added sounds.

Cardiovascular: Regular rhythm, rate 104. No murmurs or gallops.

Abdomen: Soft, nondistended, nontender throughout. Bowel sounds present. No palpable masses. *Patient refused rectal exam.*

MSK: No joint swelling.

Skin: No rashes or suspicious lesions. Normal skin turgor and hair distribution. No alopecia.

Neurological: Muscle strength 5/5 bilaterally in upper and lower extremities. Deep tendon reflexes 2+ at patellar tendons bilaterally. No ankle clonus. Gait symmetric.

Extremities: No clubbing, cyanosis, or edema.

Key findings: Tachycardia (104 bpm), pale conjunctivae. Patient refused rectal exam.`,
  investigations: `**Initial Work-up (Core):**
• CBC with peripheral smear and reticulocyte count — assess for anemia, RBC morphology, bone marrow response
• Iron studies: serum iron, ferritin, TIBC, transferrin saturation — evaluate iron deficiency
• Lipid panel — ASCVD risk assessment
• Fasting glucose / HbA1c — screen for diabetes
• Fecal occult blood test (FOBT) or Colonoscopy — screen for colorectal cancer (given age 55 + rectal bleeding)

**Reasonable yet Debatable:**
• Vitamin B12 and Folate — evaluate for macrocytic anemia / nutritional deficiency
• ECG — assess for cardiac cause (tachycardia, ischemia)
• Urinalysis — screen for renal disease, hematuria
• TSH — rule out hypothyroidism

**Further Work-up if Initial Does Not Reveal a Cause:**
• Sleep study (polysomnography) — evaluate for OSAS
• Stress test (exercise ECG / stress echo) — evaluate for CAD
• LFT (liver function tests) — screen for hepatic disease
• RFT (renal function tests: urea, creatinine, electrolytes) — screen for renal disease
• ESR — inflammatory marker

*Note: Mr. Chen refused colonoscopy ("I don't have time for that, I believe it's just my hemorrhoids") but agreed to all blood tests. PHQ-2 screening is negative. He will return with lab results in the afternoon session (CBL2 — Managing New Diagnosis).*`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and patient-centered communication',
            'Avoids medical jargon — uses terms patient can understand',
            'Acknowledges patient frustration with fatigue affecting work and life',
            'Validates patient concern about hemorrhoids while explaining need for further work-up',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          fatigue_history: [
            'Onset, duration, progression',
            'Exertional component — ask about specific activities and limitations',
            'Associated symptoms: palpitations, dyspnea, chest pain',
            'Sleep history: quantity, quality, snoring, daytime somnolence',
            'Stress, mood, anhedonia — PHQ-2/9 screening',
          ],
          ros_targeted: [
            'GI: rectal bleeding details — color, amount, frequency, relationship to stool, pain',
            'Constitutional: fever, weight loss, night sweats',
            'CV: chest pain, orthopnea, edema',
            'GU: polyuria, polydipsia',
            'Thyroid: heat/cold intolerance, skin/hair changes',
          ],
          rule_out_differentials: [
            'Colorectal cancer — age 55 + rectal bleeding = must screen',
            'CAD — exertional symptoms in 55M, but no chest pain, not relieved by rest',
            'OSAS — snoring but no daytime somnolence',
            'Depression — reduced recreational activities but PHQ-2 negative',
            'Diabetes — no polyuria/polydipsia, normal BMI',
            'Hypothyroidism — no typical symptoms, higher prevalence in females',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies iron deficiency anemia as most likely diagnosis',
            'Explains work-up plan: CBC, iron studies, CRC screening',
            'Discusses importance of colonoscopy despite hemorrhoid history',
            'Addresses management plan including iron supplementation and follow-up',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient thinks it might be stress or aging — gently explain that progressive exertional fatigue at his age warrants investigation',
            concerns: 'Worried about impact on work and life — acknowledge and reassure that identifying the cause is the first step to recovery',
            expectations: 'Wants to get back to normal — set realistic timeline for work-up and treatment',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default casePMGPC2Fatigue;
```

- [ ] **Step 2: Type check the new case file in isolation**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/cases/case-pmgp-c2-fatigue.ts
git commit -m "feat: add PMGP CBL1 Case 2 — Fatigue with structured SP script and VIVA"
```

---

### Task 5: Register New Case

**Files:**
- Modify: `src/data/cases/index.ts`

- [ ] **Step 1: Import and register**

Add import after the last case import (after line 60):

```typescript
import casePMGPC2Fatigue from './case-pmgp-c2-fatigue';
```

Add to `allCases` array (after line 123, before `];`):

```typescript
  casePMGPC2Fatigue,
```

- [ ] **Step 2: Type check full project**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: Successful production build.

- [ ] **Step 4: Commit**

```bash
git add src/data/cases/index.ts
git commit -m "feat: register PMGP Case 2 in case registry"
```

---

### Task 6: Manual Verification

- [ ] **Step 1: Start production server**

```bash
npm run build && npx next start -H 0.0.0.0 -p 3000
```

- [ ] **Step 2: Verify landing page shows new case**

Navigate to `http://localhost:3000`. Confirm "Fatigue — Progressive Exertional" appears in case list.

- [ ] **Step 3: Verify Phase 1 (Preparation)**

Click into the new case. Confirm: age 55, male, vital signs displayed, chief complaint "Fatigue for 2 months", setting description visible.

- [ ] **Step 4: Verify Phase 2 (History Taking)**

Start chat session. Test scripted responses:
- Ask "What brought you in today?" → AI responds with scripted opening
- Ask "Tell me more about your fatigue" → AI responds with scripted fatigue details
- Ask about blood in stool → AI responds with scripted hemorrhoid response
- Ask an unscripted question (e.g., "Do you have any pets?") → AI improvises naturally

Switch to 中文 → ask same questions in Chinese → AI responds with Chinese scripted responses.

- [ ] **Step 5: Verify Phase 2 → Phase 3 transition**

Click "Proceed to VIVA" → confirm "Begin VIVA Session" → VIVA starts.

- [ ] **Step 6: Verify Phase 3 (VIVA) with result cards**

- Examiner asks diagnosis question first (PART dx)
- Answer → feedback → next dx question
- When dx section ends and PE section completes: examiner message contains `[PART: pe]` → **PE Findings result card appears** (teal left border, with VS, HEENT, CV findings)
- Answer investigation questions → examiner message contains `[PART: investigations]` → **Investigation Results card appears** (purple left border, with CBC/iron/lipid/glucose/FOBT lists)
- Management question → other questions → "viva session is now complete"

- [ ] **Step 7: Verify Phase 4 (Feedback)**

After VIVA complete, click "Get Feedback" → assessment loads from `/api/assessment` → 4-category scores display.

- [ ] **Step 8: Verify backward compatibility**

Navigate to Case 003 (ACS). Confirm Phase 2 and Phase 3 still work normally — no result cards for old cases (no `pe_findings`/`investigations` fields).

- [ ] **Step 9: Final commit if any fixes made**

```bash
git add -A
git commit -m "chore: verification fixes for structured SP/VIVA redesign"
```
