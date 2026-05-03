# Case File Format Specification

Reference for writing `src/data/cases/case-NNN-slug.ts` files.

---

## Complete CaseData Structure

```typescript
const caseNNNSlug: CaseData = {
  _id: 'case-NNN-slug',
  case_id: 'Case NNN — Chief Complaint Description',  // NO "/" — use "—" or "&" instead
  case_name: 'Chief Complaint Description',            // Symptom language, NOT diagnosis
  type: 'regular',                                      // or 'general'
  is_general_case: false,
  vital_signs: 'T __°C, P __ bpm, R __/min, BP __/__ mmHg, SpO₂ __%',
  patient: { /* PatientInfo — see below */ },
  sp_script: [ /* SPDialogue[] — see below */ ],
  questions: [ /* VivaQuestion[] — see below */ ],
  pe_findings: `...`,   // String with **bold** section headers
  investigations: `...`, // String with **bold** headers + • bullets
  marking_scheme: { /* MarkingScheme — see below */ },
};
```

---

## SPDialogue Format (sp_script)

Each dialogue must have bilingual trigger + response:

```typescript
{
  trigger: 'English trigger question / alternative phrasing',
  trigger_zh: '中文触发问题 / 另一种问法',
  response: 'English scripted patient response.',
  response_zh: '中文脚本回答。',
}
```

### Required Dialogue Scenes (12-15 total, in this order)

| # | Scene | Purpose |
|---|---|---|
| 1 | **Opening** | Why patient came in |
| 2 | **Chief complaint detail** | Describe the symptom more |
| 3 | **Symptom character** | What it feels like |
| 4 | **Severity/timeline** | How bad, how long |
| 5 | **Associated symptoms** | Key positives for this diagnosis |
| 6 | **Key ROS positive #1** | Primary system-specific finding |
| 7 | **Key ROS follow-up** | Deeper questions about the finding |
| 8 | **Past medical history** | Chronic conditions, prior events |
| 9 | **Medications & allergies** | What they take, what they react to |
| 10 | **Social history** | Smoking, alcohol, occupation, living |
| 11 | **Family history** | Relevant familial conditions |
| 12 | **ICE — Ideas** | What patient thinks is wrong |
| 13 | **ICE — Concerns** | What patient is worried about |
| 14 | **ICE — Expectations** | What patient hopes for |

### Patient Voice by Scenario

| Setting | Tone | Speech pattern |
|---|---|---|
| ED (acute MI, dissection) | Frightened, urgent | Short sentences, breathless, "I've never felt this before" |
| ED (IBD, acute pain) | Distressed, embarrassed | Worried about work, "this has been happening but never this bad" |
| Clinic (COPD, chronic) | Resigned, weary | Years of dealing with it, "I thought it was just getting older" |
| Clinic (hypothyroid, gradual) | Mildly concerned | Normal pace, "I noticed it was getting worse" |
| Routine (diabetes, asymptomatic) | Casual, dismissive | "I feel fine actually", resistant to lifestyle changes |
| Routine (health maint) | Relaxed, chatty | Open to discussion, curious |

### SP Script Prohibitions
- Never use the diagnosis name in responses
- Never volunteer unasked information
- Never use medical jargon (patients say "short of breath" not "dyspnea")
- Chinese must be natural spoken language, not translationese

---

## VivaQuestion Format (questions)

```typescript
{
  part: 'dx' | 'pe' | 'investigations' | 'management' | 'other',
  question: 'Neutral exam-style question — no diagnostic hints',
  answer: 'Detailed answer with clinical reasoning',
}
```

### Part Distribution (7-9 questions total)

**ALL 5 part types are MANDATORY.** Every case MUST have at least 1 question for each part. Missing any category is a build blocker — the case is incomplete without it.

| Part | Count | Required | Question Type |
|---|---|---|---|
| `'dx'` | 1-2 | **Mandatory** | Most likely diagnosis + reasoning; differential diagnosis differentiation |
| `'pe'` | 1 | **Mandatory** | "How would you examine this patient? What specific signs would you look for?" |
| `'investigations'` | 1-2 | **Mandatory** | Investigations to order + rationale; special test interpretation |
| `'management'` | 1-2 | **Mandatory** | Acute and long-term management plan |
| `'other'` | 1-2 | **Mandatory** | Complications, epidemiology, prognosis, prevention, guidelines |

Rules:
- ALL questions must have a `part` label — no exceptions
- Questions must be in strict order: dx → pe → investigations → management → other
- PE question must start with "How would you examine this patient?"
- Questions must NOT hint at the answer in their wording
- **Post-writing check:** Count the unique `part` values — must be exactly 5: `{dx, pe, investigations, management, other}`

---

## pe_findings Format

String with `**bold**` section headers. Template:

```
**Vital Signs:** T __°C, HR __ bpm, R __/min, BP __/__, SpO₂ __%

**General:** appearance, nutritional status, distress level

**HEENT:** conjunctivae, pupils, mucosa, oropharynx

**Neck:** thyroid, JVP, lymph nodes, carotids

**Respiratory:** inspection, palpation, percussion, auscultation

**Cardiovascular:** rate, rhythm, heart sounds, murmurs, gallops, rubs

**Abdomen:** inspection, auscultation, palpation, percussion, special tests

**Musculoskeletal:** joints, strength

**Skin:** rashes, lesions, turgor, hair distribution

**Neurological:** mental status, cranial nerves, motor, sensory, reflexes, gait

**Extremities:** clubbing, cyanosis, edema, pulses

**Key findings:** one-line summary of most important positives
```

Rules:
- Cover ALL systems listed above, even if findings are normal
- Include relevant negatives (e.g., "No murmurs or gallops")
- Values must be consistent with the diagnosis
- Note if patient refused any exam (e.g., "Patient refused rectal exam.")

---

## investigations Format

Three-tier structure with `**bold**` headers and `•` bullets:

```
**Initial / Core Tests:**
• Test name — result — purpose/interpretation
• Test name — result — purpose/interpretation

**Additional / Confirmatory Tests:**
• Test name — result — purpose/interpretation

**Further Work-up (if indicated):**
• Test name — result — purpose/interpretation

*Note: any special circumstances (patient refusal, follow-up plans)*
```

Rules:
- Results must be consistent with the diagnosis
- Every test should have a purpose/interpretation
- Include relevant negatives (e.g., "Stool cultures: negative — rules out infectious colitis")
- If source material doesn't specify results, create clinically plausible values

---

## MarkingScheme Format

4 categories, 20 marks total, unchanged from existing pattern:

```typescript
marking_scheme: {
  total_marks: 20,
  categories: {
    language_manner_empathy: {
      max_score: 4,
      criteria: {
        elements: [
          'Polite introduction and patient-centered communication',
          'Avoids medical jargon',
          'Acknowledges patient's specific distress',
          'Addresses patient's specific ICE concerns',
        ],
      },
    },
    gather_additional_information: {
      max_score: 4,
      criteria: {
        hpi_socrates: { /* SOCRATES details */ },
        specific_history: [ /* case-specific questions */ ],
        rule_out_differentials: [ /* key differentials to ask about */ ],
      },
    },
    provide_accurate_appropriate_information: {
      max_score: 4,
      criteria: {
        elements: [ /* key information to convey */ ],
      },
    },
    addressing_patient_concerns: {
      max_score: 4,
      criteria: {
        ice: {
          ideas: '...',
          concerns: '...',
          expectations: '...',
        },
        biopsychosocial_aspects: true,
      },
    },
  },
}
```

---

## PatientInfo Structure (for reference)

The `patient` field follows the existing `PatientInfo` type. The most important fields for SP script creation:

- `patient.presentation.setting` — one sentence describing the clinical scenario
- `patient.presentation.hpi` — SOCRATES pain/symptom breakdown
- `patient.symptoms` — system-by-system findings (used to build SP knowledge base)
- `patient.medical_history` / `drug_history` / `social_history` / `family_history` — used for those dialogues
- `patient.ice` — used for the ICE dialogues

The existing case already has these — layer in `sp_script`, `vital_signs`, `pe_findings`, `investigations` on top.
