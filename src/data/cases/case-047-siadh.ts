import { CaseData } from '@/types';

const case047SIADH: CaseData = {
  _id: 'case-047-siadh',
  case_id: 'Case 047 - Confusion and Lethargy',
  case_name: 'Confusion and Lethargy',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 65,
    gender: 'F',
    occupation: 'Retired — not specified',
    chief_complaint: 'Increasing confusion and lethargy over the past week',
    presentation: {
      setting: 'Patient is brought to the emergency department by her family for increasing confusion and lethargy over the past week.',
      duration: '1 week, progressive',
      hpi: {
        onset: 'Gradual onset over the past week, worsening progressively',
        site: 'Generalized — altered mental status',
        character: 'Increasing confusion and lethargy, difficult to arouse, reacts only to painful stimuli',
        radiation: 'N/A — no focal neurologic deficits',
        severity: 'Severe — stuporous state, only responsive to painful stimuli',
        time_course: 'Progressive worsening over 1 week',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        afebrile: true,
        lethargy: true,
        confusion: true,
      },
      others: {
        decreased_deep_tendon_reflexes: 'Symmetrically decreased',
        motor_deficits: false,
        focal_neurologic_deficit: false,
        response_to_pain: 'Reacts only to painful stimuli',
      },
      cardiovascular: {
        blood_pressure: '136/82 mm Hg',
        heart_rate: '84 bpm regular',
        jugular_venous_pressure: 'Normal',
        extremity_edema: false,
      },
      respiratory: {
        respiratory_rate: '14 breaths/min, unlabored',
      },
      negatives: {
        fever: false,
        recent_illness: false,
        seizures: false,
        headache: false,
        motor_deficits: false,
        edema: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Recently diagnosed with limited-stage small-cell lung cancer — has not begun cancer treatment'],
      negatives: ['No prior neurologic conditions', 'No prior electrolyte disturbances', 'No recent infections or illnesses'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Not taking any medications'],
    },
    social_history: {
      smoking: 'Not documented — likely history given lung cancer diagnosis',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Family may be concerned about stroke or brain metastases given the altered mental status and known lung cancer diagnosis.',
      concerns: 'Fear of cancer spreading to the brain; concern about permanent neurologic damage; worry that treatment may not be effective.',
      expectations: 'Expects immediate diagnostic workup and treatment to improve mental status; hopes for a treatable cause.',
    },
  },
  questions: [
    {
      question: 'What is the most likely cause of this patient\'s altered mental status?',
      answer: 'Severe hyponatremia (serum sodium 108 mmol/L) causing cerebral edema and neurologic symptoms. The hyponatremia is most likely due to syndrome of inappropriate antidiuretic hormone secretion (SIADH) secondary to her small-cell lung cancer (paraneoplastic syndrome).',
    },
    {
      question: 'How do you differentiate SIADH from other causes of hyponatremia?',
      answer: 'SIADH is a diagnosis of exclusion. Key criteria include: (1) Hypotonic hyponatremia (low serum osmolality), (2) Urine that is not maximally dilute (urine osmolality > 100 mOsm/kg), (3) Elevated urine sodium (> 40 mmol/L), (4) Clinical euvolemia (no edema, normal JVP), (5) Normal adrenal and thyroid function. This patient has serum osmolality 220 mOsm/kg, urine osmolality 400 mOsm/kg, urine sodium 50 mEq/L, and no signs of volume overload or depletion.',
    },
    {
      question: 'What is the appropriate initial therapy for this patient?',
      answer: 'Because the patient has severe neurologic symptoms (stupor), rapid partial correction with hypertonic (3%) saline is indicated. The goal is to increase serum sodium by 4-6 mmol/L in the first 24 hours — NOT to correct to normal levels. This should be done in an ICU setting with close monitoring.',
    },
    {
      question: 'What is the most serious complication of overly rapid correction of hyponatremia?',
      answer: 'Osmotic demyelination syndrome (formerly called central pontine myelinolysis). Rapid correction causes the brain to shrink rapidly as it loses fluid, triggering demyelination of cerebellar and pontine neurons, which can cause quadriplegia, pseudobulbar palsies, locked-in syndrome, coma, or death. Chronic hyponatremia must be corrected slowly (≤ 4-6 mEq/L in 24 hours).',
    },
    {
      question: 'How do you clinically assess volume status in a patient with hyponatremia?',
      answer: 'Volume status (total body sodium) is assessed by history and physical examination: (1) Hypovolemia — history of vomiting, diarrhea, sweating; flat neck veins, dry mucous membranes, diminished urine output. (2) Hypervolemia — edema, elevated JVP, seen in heart failure, cirrhosis, nephrotic syndrome. (3) Euvolemia — no signs of either, as in SIADH. This patient is euvolemic with normal JVP and no edema.',
    },
    {
      question: 'What laboratory findings support the diagnosis of SIADH?',
      answer: 'Low serum osmolality (< 280 mOsm/kg), inappropriately concentrated urine (urine osmolality > 100 mOsm/kg, often > serum osmolality), elevated urine sodium (> 40 mmol/L), low BUN and low uric acid levels, with normal adrenal and thyroid function. This patient has serum osmolality 220, urine osmolality 400, and urine sodium 50.',
    },
    {
      question: 'What are the causes of hypotonic hyponatremia by volume status?',
      answer: 'Hypovolemic: GI losses (vomiting, diarrhea), diuretics, salt-losing nephropathy, adrenal insufficiency. Hypervolemic: Heart failure, cirrhosis, nephrotic syndrome, renal failure. Euvolemic: SIADH (most common), hypothyroidism, adrenal insufficiency (cortisol deficiency), psychogenic polydipsia. SIADH can be caused by pulmonary disease, CNS disease, pain, postoperative state, or paraneoplastic syndromes (especially small-cell lung cancer).',
    },
    {
      question: 'What is the long-term management approach for SIADH?',
      answer: 'For asymptomatic patients, free water restriction is the mainstay. For symptomatic patients, hypertonic saline acutely. Address the underlying cause (treat the cancer if paraneoplastic). Vasopressin antagonists (tolvaptan, conivaptan) can be used for chronic hypervolemic hyponatremia in heart failure or cirrhosis. Demeclocycline can induce nephrogenic diabetes insipidus in refractory cases.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction to patient and concerned family members',
            'Avoids medical jargon — explains hyponatremia in understandable terms',
            'Shows empathy for family distress over patient\'s altered mental status and cancer diagnosis',
            'Addresses family concerns about stroke or brain metastases with reassurance and clear explanation',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Ask about headache, nausea, vomiting — early signs of cerebral edema',
            Onset: 'Timeline of confusion progression — acute vs chronic',
            Character: 'Nature of confusion — waxing and waning vs progressively worsening',
            Radiation: 'Ask about cancer history — lung cancer diagnosis, staging, planned treatment',
            Associated_symptoms: 'Nausea, vomiting, headache, seizures, weakness, changes in urination, thirst',
            Time_course: 'Rate of symptom development over the past week',
            Exacerbating_relieving: 'Medication use, fluid intake, recent illnesses',
            Severity: 'Level of consciousness — Glasgow Coma Scale, ability to follow commands',
          },
          specific_history: [
            'Lung cancer details — type, stage, planned treatment',
            'Medication history — any drugs that can cause hyponatremia (SSRIs, diuretics, carbamazepine)',
            'Recent fluid intake — excessive water drinking?',
            'Review of systems for vomiting, diarrhea, sweating (volume depletion)',
            'History of thyroid disease or adrenal insufficiency',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies severe hyponatremia due to SIADH as the cause of altered mental status',
            'Explains the pathophysiology of SIADH in the context of small-cell lung cancer (paraneoplastic syndrome)',
            'Describes appropriate treatment with hypertonic saline and the dangers of overcorrection',
            'Discusses monitoring plan and need for ICU-level care',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Family may believe the confusion is due to brain metastases from the lung cancer',
            concerns: 'Fear of permanent brain damage; worry that cancer has spread; anxiety about prognosis',
            expectations: 'Expects immediate diagnostic tests and treatment to reverse the confusion',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case047SIADH;
