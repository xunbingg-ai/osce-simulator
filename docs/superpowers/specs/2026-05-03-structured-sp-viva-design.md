# Spec: Structured SP Script & VIVA Redesign

**Date:** 2026-05-03
**Status:** Draft
**Scope:** Phase 2 (History Taking) + Phase 3 (VIVA) redesign for realistic OSCE simulation

---

## 1. Motivation

Current OSCE simulator uses generic structured data (SOCRATES HPI, organ-system checkboxes) to drive AI patient and examiner. This produces adequate but generic interactions. The PMGP CBL1 Case 2 document demonstrates a richer format: specific trigger questions with scripted SP responses, structured VIVA with sequenced parts (diagnosis → PE → investigations → management → other), and physical exam/investigation findings displayed as reference after student answers.

**Goal:** Adopt the PMGP Case 2 format as the standard for all cases, while keeping code changes minimal.

**Implementation path:** PMGP Case 2 template → 3-5 typical cases → all 60 cases.

---

## 2. Design Principles

- **Minimal code changes.** Prefer extending existing structures over creating new ones.
- **Static data drives behavior.** Case data, not code, should define SP script detail and VIVA sequence.
- **Results always shown.** PE findings and investigation results are displayed regardless of student answer correctness — they are reference material, not conditional feedback.
- **Don't volunteer.** AI patient in Phase 2 only reveals information the student specifically asks about.

---

## 3. Type Changes (`src/types/index.ts`)

### 3.1 New: SPDialogue

```typescript
export interface SPDialogue {
  trigger: string;       // Trigger question / topic area (EN)
  trigger_zh: string;    // Trigger question / topic area (ZH)
  response: string;      // Scripted patient response (EN)
  response_zh: string;   // Scripted patient response (ZH)
}
```

### 3.2 Modified: VivaQuestion

Add `part` field to sequence questions:

```typescript
export interface VivaQuestion {
  part: 'dx' | 'pe' | 'investigations' | 'management' | 'other';
  question: string;
  answer: string | string[] | Record<string, unknown>;
}
```

### 3.3 Modified: CaseData

Add optional fields:

```typescript
export interface CaseData {
  // ... all existing fields unchanged ...
  vital_signs?: string;           // e.g. "T 37°C, P 102, R 16, BP 126/76, BMI 24.1"
  sp_script?: SPDialogue[];       // Phase 2 structured dialogue pairs
  pe_findings?: string;           // PE findings (markdown table or text)
  investigations?: string;        // Investigation plan + results (markdown)
}
```

All new fields are optional — existing 60 cases continue to work without them.

### 3.4 ChatMessage

**No changes.** Result panels are triggered by parsing `[PART: ...]` tags in message content at render time in VivaPhase — no type changes needed.

---

## 4. Phase 2 Changes (History Taking)

### 4.1 System Prompt (`src/lib/prompts.ts`)

Rewrite `buildChatSystemPrompt()`:

- **Persona section** (from existing `buildPatientSummary`): age, occupation, chief complaint, vitals, setting
- **Script section** (from `sp_script`): the SPDialogue pairs injected as "core dialogue guidance" — AI instructed to use these exact responses when student's question matches a trigger, but to improvise naturally for unscripted questions
- **Persona background section** (from patient data): ROS responses, medical/family/social history, ICE — treated as the AI patient's "knowledge base" that the student must discover by asking
- **Rules**: stay in character, layperson language, don't volunteer unasked info, match trigger → use scripted response, no trigger match → improvise from knowledge base

When `sp_script` is absent, fall back to existing generic persona prompt (backward compatible).

`buildPatientSummary()` is updated to include `vital_signs` if present.

### 4.2 Frontend

**No changes to ChatPhase.tsx.** The bilingual toggle continues to work — `sp_script` entries have both `trigger`/`trigger_zh` and `response`/`response_zh`.

---

## 5. Phase 3 Changes (VIVA Examination)

### 5.1 System Prompt (`src/lib/prompts.ts`)

Rewrite `buildVivaSystemPrompt()`:

**Sequenced questioning with part labels:**

```
You are an OSCE examiner. Ask questions in this EXACT order:

PART dx: [questions with part='dx']
PART pe: [questions with part='pe']
PART investigations: [questions with part='investigations']
PART management: [questions with part='management']
PART other: [questions with part='other']

Rules:
1. Start with PART dx. Ask ONE question at a time.
2. After each student answer, give brief feedback (1-2 sentences).
3. When transitioning to a NEW part, end your previous message with the exact tag [PART: <name>].
   Example: at the end of your last dx question's feedback, append "[PART: pe]".
   Example: at the end of your last pe question's feedback, append "[PART: investigations]".
4. After the final PART other question, say "The viva session is now complete. Thank you."
5. NEVER mention the diagnosis or findings in your questions.
```

**Key change:** The `[PART: pe]` and `[PART: investigations]` tags in the examiner's message are parsed by the frontend to trigger result panel display.

When `questions` lack `part` field (old cases), the VIVA prompt falls back to current behavior — ask all questions in order as a flat list.

### 5.2 API Route (`src/app/api/chat/route.ts`)

**No structural changes needed.** The VIVA response is returned as before. The `[PART: ...]` tag travels in the reply text and is parsed client-side.

### 5.3 VivaPhase Component (`src/components/VivaPhase.tsx`)

**New: Result Panel logic.**

Two new boolean states: `showPeResults` and `showInvestigationResults`.

When a new examiner message arrives from the API:
1. Check if `data.reply` contains `[PART: pe]` → set `showPeResults = true`
2. Check if `data.reply` contains `[PART: investigations]` → set `showInvestigationResults = true`

**Message rendering:**
- Before displaying an examiner message, strip any `[PART: ...]` tag from the content
- After the message bubble that contained the tag, insert a **Result Card**

**Result Card** (inline in VivaPhase, no separate file):
- Light gray background (`bg-gray-50`), left border colored: teal for PE, purple for investigations
- Title: "Physical Examination Findings" / "Investigation Results"
- Content: render `caseData.pe_findings` or `caseData.investigations` as formatted text with `whitespace-pre-wrap`
- Always visible once shown; does not collapse
- If the tag exists but the corresponding `caseData` field is null/undefined, show fallback: "No findings data available for this case."

---

## 6. PMGP Case 2 Data File

New file: `src/data/cases/case-pmgp-c2-fatigue.ts`

Structure follows the extended `CaseData` interface with:
- `sp_script`: ~15 dialogue pairs extracted from the PMGP Case 2 markdown (opening, fatigue details, exertional symptoms, stress, sleep, ROS GI follow-ups)
- `vital_signs`: string with VS data
- `questions`: 6-7 questions with `part` labels
- `pe_findings`: markdown table of PE findings
- `investigations`: markdown of investigation plan (initial / debatable / further)

---

## 7. Files Changed

| File | Change Type | Description |
|---|---|---|
| `src/types/index.ts` | Modify | Add `SPDialogue`, `part` on `VivaQuestion`, new optional `CaseData` fields |
| `src/lib/prompts.ts` | Modify | Rewrite chat & VIVA prompt builders; update `buildPatientSummary` |
| `src/components/VivaPhase.tsx` | Modify | Parse `[PART: ...]` tags, render Result Cards |
| `src/data/cases/case-pmgp-c2-fatigue.ts` | New | PMGP Case 2 data |
| `src/data/cases/index.ts` | Modify | Import + register new case |

**5 files modified, 1 new file. No changes to API route or ChatPhase.**

---

## 8. Backward Compatibility

- All new `CaseData` fields are optional — existing 60 cases work unchanged
- `VivaQuestion.part` defaults to `'other'` if absent → flat list behavior in prompt
- `sp_script` absent → existing persona-only prompt used
- `pe_findings` / `investigations` absent → no result panels shown

---

## 9. Edge Cases

- **Old case without `part` labels:** VIVA prompt treats all questions as flat list; no `[PART: ...]` tags emitted; no result panels
- **New case with `part` labels but missing `pe_findings`:** The `[PART: pe]` tag still appears but no panel content → show a fallback message "No findings data available"
- **Student skips ahead:** If student asks about investigations during PE section, AI examiner handles naturally and continues sequence
- **Empty `sp_script`:** Falls back to generic persona-only behavior

---

## 10. Verification Plan

1. Start PMGP Case 2 → Phase 1 shows patient summary + vitals
2. Phase 2: Ask questions matching script triggers → AI responds with scripted answers; ask unscripted question → AI improvises from persona
3. Phase 2 → Phase 3 transition: works as before
4. Phase 3: Examiner asks dx questions → feedback → `[PART: pe]` tag → PE result card appears
5. Phase 3: Examiner asks investigation questions → feedback → `[PART: investigations]` tag → investigation result card appears
6. Phase 3: Management + other questions → viva complete
7. Phase 4: Assessment still works
8. Existing cases (e.g., Case 003 ACS) still function normally
