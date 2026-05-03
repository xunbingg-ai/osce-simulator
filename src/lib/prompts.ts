// src/lib/prompts.ts
import { CaseData, Language } from '@/types';
import { DeepSeekMessage } from './deepseek';

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

export function buildChatSystemPrompt(caseData: CaseData, language: Language): string {
  const summary = buildPatientSummary(caseData);

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

export function buildVivaSystemPrompt(caseData: CaseData): string {
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
- When you finish the LAST question in a section and have given feedback, you MUST:
  1. Append the section transition tag
  2. IMMEDIATELY continue in the SAME message by asking the first question of the NEXT section
  Example: "That's correct. [PART: pe] Now, moving on — [first investigation question]"
- NEVER end a message with just the transition tag — always follow it with the next question.
${hasPeFindings ? '- After the last PHYSICAL EXAMINATION question, append:\n[PART: pe]\nand immediately ask the first INVESTIGATIONS question in the same message.\n' : ''}
${hasInvestigations ? '- After the last INVESTIGATIONS question, append:\n[PART: investigations]\nand immediately ask the first MANAGEMENT question in the same message.\n' : ''}

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

export function buildAssessmentSystemPrompt(
  caseData: CaseData,
  transcript: string
): string {
  return `You are an OSCE examiner evaluating a medical student's performance. Analyze the following consultation transcript and provide a structured assessment.

CASE: ${caseData.case_name}
PATIENT SUMMARY: ${buildPatientSummary(caseData)}

MARKING SCHEME (Total: ${caseData.marking_scheme.total_marks} marks):
${JSON.stringify(caseData.marking_scheme.categories, null, 2)}

TRANSCRIPT:
${transcript}

Provide your assessment as a JSON object with exactly this structure (no markdown, no extra text):
{
  "overall_performance": "Good" | "Satisfactory" | "Needs Improvement",
  "language_manner_empathy": { "score": <0-4>, "comment": "<brief specific feedback>" },
  "gather_information": { "score": <0-4>, "comment": "<brief specific feedback>" },
  "provide_information": { "score": <0-4>, "comment": "<brief specific feedback>" },
  "address_concerns": { "score": <0-4>, "comment": "<brief specific feedback>" },
  "strengths": ["<list of things done well>"],
  "areas_for_improvement": ["<list of specific suggestions>"],
  "chat_performance": { "summary": "<1 paragraph about history-taking>" },
  "viva_performance": { "summary": "<1 paragraph about clinical reasoning>" }
}

Reply with ONLY the JSON object. No explanation, no markdown formatting.`;
}
