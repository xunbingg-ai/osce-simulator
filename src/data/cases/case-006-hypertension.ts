import { CaseData } from '@/types';

const case006Hypertension: CaseData = {
  _id: 'case-006-hypertension',
  case_id: 'Case 006 - Elevated Blood Pressure & End-Organ Damage',
  case_name: 'Elevated Blood Pressure',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 56,
    gender: 'M',
    occupation: 'Not specified — new patient at clinic',
    chief_complaint: 'New patient visit after optometry found hypertensive retinopathy',
    presentation: {
      setting: 'Patient presents as a new patient after a routine optometry examination revealed hypertensive retinopathy. He was diagnosed with hypertension and hypercholesterolemia 7 years ago at a work screening, prescribed a diuretic, and advised on lifestyle changes, but has not followed up since.',
      duration: '7 years since initial diagnosis, no follow-up in the interim',
      hpi: {
        onset: 'Initially diagnosed 7 years ago at work-related health screening',
        site: 'N/A — asymptomatic',
        character: 'N/A',
        radiation: 'N/A',
        severity: 'Asymptomatic — currently BP 168/98 mm Hg',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure_right_arm: '168/98 mm Hg',
        blood_pressure_left_arm: '170/94 mm Hg',
        heart_rate: '84 bpm',
        s4_gallop: true,
        murmurs: false,
      },
      constitutional: {
        bmi: '30 kg/m2 (obese)',
      },
      negatives: {
        chest_pain: false,
        shortness_of_breath: false,
        dyspnea_on_exertion: false,
        paroxysmal_nocturnal_dyspnea: false,
        thyromegaly: false,
        carotid_bruits: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypertension (diagnosed 7 years ago)', 'Hypercholesterolemia (diagnosed 7 years ago)'],
      negatives: ['No diabetes', 'No known heart disease', 'No prior stroke', 'No kidney disease'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Previously prescribed a diuretic (7 years ago) — not currently taking any medications'],
    },
    social_history: {
      smoking: '1 pack per day since age 15 (41 pack-year history)',
      alcohol: 'Two glasses of wine with dinner daily',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may not understand the seriousness of untreated hypertension since he has been asymptomatic for years. He may think that because he feels fine, his blood pressure is not a problem.',
      concerns: 'Concerned about the optometry findings (retinopathy) — worried about vision loss or eye damage. May be worried about starting medications again after years without treatment.',
      expectations: 'Expects to be evaluated and given a treatment plan; may be reluctant to take daily medication long-term. May need education about silent end-organ damage.',
    },
  },
  questions: [
    {
      question: 'How is hypertension staged and what is this patient\'s stage?',
      answer: 'Elevated BP: 120-129/<80; Stage 1: 130-139/80-89; Stage 2: ≥140/90. This patient has stage 2 hypertension with evidence of end-organ damage (hypertensive retinopathy with AV crossing defects and increased arteriolar light reflex, and S4 gallop suggesting left ventricular hypertrophy). He requires two-drug therapy without further delay.',
    },
    {
      question: 'What initial evaluation is indicated for a patient with newly diagnosed or poorly controlled hypertension?',
      answer: 'Basic tests include urinalysis (for hematuria, proteinuria), albumin/creatinine ratio, serum sodium, potassium, calcium, creatinine (eGFR), fasting glucose, lipid panel (total, HDL, LDL, triglycerides), and ECG. Consider TSH, echocardiogram, and evaluation for secondary causes guided by clinical findings. Assess for end-organ damage: retinopathy, LVH, nephropathy, and cerebrovascular disease.',
    },
    {
      question: 'What are the first-line pharmacologic agents for hypertension, and what are special considerations for this patient?',
      answer: 'First-line agents: thiazide diuretics, calcium channel blockers, ACE inhibitors, and ARBs. For patients of African descent, thiazide diuretics or long-acting CCBs show better efficacy. Beta-blockers are not first-line for monotherapy unless there is a specific indication (e.g., ischemic heart disease). This patient (stage 2) will likely require combination therapy with two agents from different classes. Long-acting formulations providing 24-hour efficacy are preferred.',
    },
    {
      question: 'When should secondary causes of hypertension be suspected, and what are the common etiologies?',
      answer: 'Suspect secondary hypertension with: age of onset <25 or >55, evidence of end-organ damage at presentation, refractory hypertension requiring ≥3 agents, sudden loss of BP control, rising creatinine with ACE inhibitor/ARB use. Common causes: renal parenchymal disease, renovascular hypertension (renal artery stenosis), primary hyperaldosteronism, pheochromocytoma, Cushing syndrome, hyperthyroidism, obstructive sleep apnea, and coarctation of the aorta.',
    },
    {
      question: 'What lifestyle modifications are recommended for hypertension management?',
      answer: 'Weight loss, limitation of alcohol intake (≤2 drinks/day for men), increased aerobic physical activity (≥150 min/week moderate intensity), reduced sodium intake (<2.3 g sodium/day), smoking cessation, and adherence to the DASH diet (rich in fruits, vegetables, legumes, low-fat dairy; low in snacks, sweets, meat, and saturated fat).',
    },
    {
      question: 'What are the compelling indications for specific antihypertensive drug classes?',
      answer: 'ACE inhibitors or ARBs: first-line for diabetes with nephropathy, systolic heart failure, or proteinuric CKD. Beta-blockers: first-line for CAD or history of tachyarrhythmia. Thiazide diuretics or CCBs: preferred initial therapy for African American patients. Alpha-blockers: may be considered for men with concomitant BPH. Spironolactone/eplerenone: for CHF with systolic dysfunction or primary hyperaldosteronism.',
    },
    {
      question: 'What is the significance of the SPRINT trial in hypertension management?',
      answer: 'The SPRINT trial (2015) showed that for patients age ≥50 with at least one other cardiovascular risk factor, a target systolic BP of 120 mm Hg (rather than 140 mm Hg) produced a 30% risk reduction in cardiovascular events, stroke, and cardiovascular death. However, more intensive targets must be balanced against the risk of adverse effects (hypotension, syncope, electrolyte abnormalities, acute kidney injury).',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and patient-centered communication with new patient',
            'Avoids medical jargon — explains terms like retinopathy and LVH in accessible language',
            'Shows empathy regarding years of untreated hypertension without being judgmental',
            'Addresses patient\'s concerns about eye findings and vision loss',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Ask about headache, chest pain, palpitations, vision changes, dyspnea',
            Onset: 'When was hypertension first diagnosed? Has he ever been on consistent treatment?',
            Character: 'Assess severity of lifestyle factors — diet, exercise, salt intake',
            Radiation: 'Family history of hypertension, heart disease, stroke, kidney disease',
            Associated_symptoms: 'Nocturia, hematuria, flank pain (renal); snoring, daytime sleepiness (OSA); muscle weakness, cramps (electrolyte issues)',
            Time_course: 'Review prior BP readings, medications tried, adherence patterns, follow-up patterns',
            Exacerbating_relieving: 'Stress, dietary sodium, NSAID use, decongestant use',
            Severity: 'Quantify smoking pack-years, alcohol intake, assess readiness to change',
          },
          secondary_hypertension_screening: [
            'Renal bruits — suggest renovascular disease',
            'Discordant upper/lower extremity BPs — suggest coarctation',
            'Abdominal masses — polycystic kidney disease',
            'Signs of Cushing syndrome (striae, buffalo hump, central obesity)',
            'Signs of hyperthyroidism (tremor, weight loss, tachycardia)',
            'Signs of OSA (obesity, snoring, daytime somnolence)',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies stage 2 hypertension with end-organ damage',
            'Explains the need for laboratory evaluation and ECG to assess target organ damage',
            'Discusses pharmacotherapy options and the need for combination therapy',
            'Outlines lifestyle modifications and smoking cessation plan',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may believe that absence of symptoms means absence of disease; needs education about silent end-organ damage',
            concerns: 'Worried about vision loss from retinopathy; concerned about taking daily medication after years without treatment',
            expectations: 'Expects a treatment plan; may need reassurance that hypertension can be effectively controlled with consistent treatment',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case006Hypertension;
