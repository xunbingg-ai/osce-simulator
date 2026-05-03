---
name: case-migration
description: Use whenever the user wants to create, migrate, add, or convert an OSCE case to the structured SP script + VIVA format. This skill MUST be used when the user: (1) provides raw patient data from any source (PDF, Word doc, clinical notes, textbook vignette, conversational description) and wants it turned into a case file, (2) asks to migrate/convert/update an existing case to the new structured format, (3) mentions "sp_script", "pe_findings", "case migration", "structured case format", "PMGP format", or "case-migration-guide" in the context of creating or converting cases. Covers full workflow: clinical data extraction → case file generation → registration → build verification → testing checklist. Do NOT use for: asking about case format structure, debugging VIVA behavior, editing UI components, or clinical knowledge questions unrelated to case file creation.
---

# OSCE Case Migration

Convert raw patient information into a complete, working OSCE case file following the structured SP script + VIVA format. The workflow covers: input analysis → case generation → registration → build verification → testing checklist.

---

## Step 0: Understand the Input

Determine what you're working with:

| Input type | What to do |
|---|---|
| PDF file | Read with Read tool (or extract text via `pypdf` in Python if large), then proceed |
| Word .docx | Extract text via PowerShell (unzip and parse document.xml), then proceed |
| Plain text | Proceed directly |
| User description | Ask targeted follow-up questions to fill gaps, then proceed |

If the raw material contains multiple cases, ask the user which ONE to work on first.

---

## Step 1: Extract and Structure Clinical Data

From the raw input, extract these elements. Ask the user to confirm or fill gaps for anything unclear:

1. **Patient demographics**: age, gender, occupation
2. **Chief complaint**: what symptom brought them in (use symptom language, NOT diagnosis)
3. **Setting**: ED / clinic / routine checkup / ward
4. **Vital signs**: T, P, R, BP, SpO₂, BMI if available
5. **HPI timeline**: duration, onset pattern, progression
6. **HPI character**: how the patient describes their symptom (for SP script)
7. **Key ROS positives**: system-specific positive findings (each gets a follow-up dialogue)
8. **Key ROS negatives**: relevant negatives for differential diagnosis
9. **Past medical history**: chronic conditions, surgeries, hospitalizations
10. **Drug history**: medications, allergies
11. **Social history**: smoking, alcohol, occupation details, living situation
12. **Family history**: relevant familial conditions
13. **ICE**: patient's Ideas, Concerns, Expectations
14. **PE findings**: from the source material, or infer from the diagnosis
15. **Investigation results**: from the source material, or infer from the diagnosis
16. **VIVA questions**: from the source, or write based on the diagnosis's key teaching points
17. **Marking scheme**: criteria for each of the 4 categories

For items 14-15, if the source material doesn't include them, use your clinical knowledge to create plausible findings consistent with the diagnosis.

---

## Step 2: Generate the Case File

Read `references/case-format.md` for the exact file structure, field specifications, and SP script dialogue patterns.

Create `src/data/cases/case-NNN-slug.ts` where:
- `NNN` = the next available case number (check existing files in `src/data/cases/`)
- `slug` = short kebab-case descriptor of the chief complaint

The `case_id` field must NOT contain `/` — use `&` if needed (Next.js routing constraint).
The `case_name` must use chief complaint language, NOT the diagnosis (prevents answer leakage).

### SP Script Quality Rules
- 12-15 bilingual dialogue pairs covering all 14 scenes (see case-format.md)
- Natural conversational language — the patient sounds like a real person
- Tailor patient voice to the clinical scenario (ED = short/urgent/frightened; clinic = calm/descriptive; asymptomatic = casual/dismissive)
- Responses match the diagnosis-appropriate patient persona
- Chinese is natural spoken Chinese, not translationese

### VIVA Question Rules
- Every question has a `part` label: `'dx' | 'pe' | 'investigations' | 'management' | 'other'`
- Strict order: dx (1-2) → pe (1+) → investigations (1-2) → management (1-2) → other (1-2)
- At least 1 PE question with `part: 'pe'`
- Questions are neutral and exam-like — no diagnostic hints in question wording
- Total 6-9 questions

---

## Step 3: Register the Case

Read `src/data/cases/index.ts` to see the current imports and `allCases` array.

1. Add an import statement in alphabetical/numerical order among existing imports
2. Add the case to the `allCases` array

---

## Step 4: Verify

Run these commands in order. Do NOT proceed past a failure.

```bash
# 1. Type check
npx tsc --noEmit

# 2. Production build
npm run build
```

If either fails, fix the errors and re-run. Common issues:
- Missing `part` field on a question → add it
- Type mismatch on `CaseData` fields → check against `src/types/index.ts`
- Import path wrong → verify the relative path

---

## Step 5: Testing Checklist

After build passes, present this checklist to the user:

```
### Manual Verification

Start server: npm run build && npx next start -H 0.0.0.0 -p 3000

**Phase 2 (History Taking):**
- [ ] Opening question → AI responds with scripted opening
- [ ] Core symptom question → AI uses scripted response
- [ ] Key ROS positive question → AI uses scripted response
- [ ] Unscripted question → AI improvises naturally (doesn't break)
- [ ] Switch to 中文 → AI responds in Chinese with scripted Chinese responses
- [ ] AI does NOT volunteer information the student didn't ask for
- [ ] AI does NOT use medical jargon (patient voice is maintained)

**Phase 3 (VIVA):**
- [ ] Examiner starts with dx questions (not pe or investigations)
- [ ] PE question → student answers → feedback → [PART: pe] → PE result card appears → next question asked in same message
- [ ] Investigation question → student answers → feedback → [PART: investigations] → investigation result card appears → next question asked in same message
- [ ] PE/Inv result cards do NOT appear during the question — only after answer + feedback
- [ ] Management question follows investigations
- [ ] Other questions follow management
- [ ] Examiner asks ONE question at a time
- [ ] Examiner uses English only
- [ ] Examiner does NOT number questions ("Question 1:", "Q2:", etc.)
- [ ] VIVA ends with "The viva session is now complete. Thank you."

**Phase 4 (Feedback):**
- [ ] Assessment loads and displays 4-category scores
- [ ] Strengths and areas for improvement are relevant

**Existing Cases:**
- [ ] Navigate to an old (non-migrated) case → still works normally
```

---

## Step 6: Commit

After all verification passes:

```bash
git add src/data/cases/case-NNN-slug.ts src/data/cases/index.ts
git commit -m "feat: add Case NNN — [Case Name] with structured SP script and VIVA"
```

---

## Reference Files

- `references/case-format.md` — Complete field specification, SP script patterns, PE/Inv templates
- `src/types/index.ts` — CaseData and related type definitions
- `src/data/cases/case-003-acs.ts` — Gold standard template case (ACS/STEMI)
- `src/data/cases/case-pmgp-c2-fatigue.ts` — PMGP Case 2 template (Fatigue/Anemia)
- `src/lib/prompts.ts` — Chat and VIVA prompt builders (for understanding how data is used)
