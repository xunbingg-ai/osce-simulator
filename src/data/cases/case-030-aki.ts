import { CaseData } from '@/types';

const case030AKI: CaseData = {
  _id: 'case-030-aki',
  case_id: 'Case 030 - Acute Kidney Injury After Angiography',
  case_name: 'Acute Kidney Injury After Angiography',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 54,
    gender: 'M',
    occupation: 'Not specified',
    chief_complaint: 'Decreased urine output after coronary angiography',
    presentation: {
      setting: 'Patient admitted to the coronary care unit with worsening angina and hypertension, underwent coronary angiography. The next day urine output diminished to 200 mL over 24 hours.',
      duration: '24 hours post-procedure',
      hpi: {
        onset: 'Acute onset within 24 hours of coronary angiography',
        site: 'Renal',
        character: 'Oliguria, rising creatinine',
        radiation: 'No radiation',
        severity: 'Moderate to severe — creatinine rose from 1.6 to 2.9 mg/dL',
        time_course: 'Acute decline over 24 hours post-angiography',
        exacerbating_factors: ['Contrast dye exposure during angiography', 'ACE inhibitor therapy', 'Pre-existing diabetic kidney disease'],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '56 bpm',
        blood_pressure: '109/65 mm Hg',
        s4_gallop: true,
      },
      others: {
        oliguria: '200 mL over 24 hours',
        elevated_creatinine: '2.9 mg/dL (baseline 1.6)',
        elevated_bun: '69 mg/dL',
        potassium: '5.3 mEq/L',
        no_murmur: true,
        no_friction_rub: true,
        flat_neck_veins: true,
        diabetic_retinopathy: true,
        dot_hemorrhages: true,
        hard_exudates: true,
      },
      negatives: {
        fever: false,
        peripheral_edema: false,
        rashes: false,
        abdominal_masses: false,
        abdominal_bruits: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Type 2 diabetes mellitus', 'Coronary artery disease', 'Chronic kidney disease (baseline Cr 1.6)'],
      negatives: ['No significant coronary stenosis on angiography'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Intravenous nitroglycerin', 'Aspirin', 'Beta-blockers', 'ACE inhibitors', 'Iodinated radiocontrast for angiography'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely concerned about sudden decrease in kidney function after a procedure',
      concerns: 'Fear of permanent kidney damage and need for dialysis',
      expectations: 'Expects treatment to restore kidney function and prevent long-term harm',
    },
  },
  questions: [
    {
      question: 'What is the patient\'s new clinical problem and what is the most likely etiology?',
      answer: 'Acute kidney injury (AKI), evidenced by increased creatinine from 1.6 to 2.9 mg/dL and oliguria (200 mL/24h). The most likely etiology is contrast-induced nephropathy, given the timing after coronary angiography. Contributing factors include pre-existing chronic kidney disease (diabetic nephropathy), ACE inhibitor therapy, and possible hypotension from aggressive blood pressure management.',
    },
    {
      question: 'What is the strongest risk factor for this condition and what might have prevented it?',
      answer: 'Pre-existing kidney disease (baseline creatinine 1.6 mg/dL indicating underlying CKD from diabetic nephropathy) is the strongest risk factor. Prevention would have included intravenous hydration with normal saline prior to angiography, using minimal contrast volume, considering iso-osmolar contrast, and possibly holding ACE inhibitors and metformin before the procedure.',
    },
    {
      question: 'What is the next diagnostic step and what would you expect to find?',
      answer: 'Urinalysis and urine chemistries to categorize the AKI as prerenal, intrinsic renal, or postrenal. This includes urine specific gravity/osmolality, FENa, urinary sodium, and microscopy for casts and cells. In contrast-induced ATN, expected findings: isosthenuria (SG ~1.010), FENa >2%, urinary sodium >20 mEq/L, and muddy brown granular casts on microscopy.',
    },
    {
      question: 'What are the three main categories of AKI and how are they differentiated?',
      answer: 'Prerenal: decreased renal perfusion (BUN:Cr >20, FENa <1%, urinary Na <20, concentrated urine, normal sediment). Intrinsic renal: ATN (FENa >2%, urinary Na >20, isosthenuria, muddy brown granular casts), GN (RBC casts, proteinuria), interstitial nephritis (WBC casts, eosinophiluria). Postrenal: obstruction, hydronephrosis on ultrasound, isosthenuria, variable sediment.',
    },
    {
      question: 'How is hyperkalemia in AKI managed?',
      answer: 'Emergent if ECG shows peaked T waves: IV calcium gluconate to stabilize cardiac membranes (does not lower K+ but protects heart). Then shift K+ intracellularly: IV insulin (10 units) + 50% glucose (50-100 mL), beta-agonist nebulizer (albuterol), or IV sodium bicarbonate if metabolic acidosis present. Definitive removal: loop diuretics, potassium-binding resins (sodium polystyrene sulfonate, patiromer), or dialysis.',
    },
    {
      question: 'What are the indications for urgent hemodialysis in AKI? (AEIOU mnemonic)',
      answer: 'A: severe metabolic Acidosis refractory to medical therapy. E: severe Electrolyte disturbances (hyperkalemia refractory to medical management). I: Ingestions of dialyzable toxins. O: fluid Overload (pulmonary edema) refractory to diuretics. U: Uremic symptoms (pericarditis, encephalopathy, bleeding). Uremic pericarditis is a particularly urgent indication.',
    },
    {
      question: 'A patient with cervical cancer history presents with acute oliguric renal failure. Urinalysis shows SG 1.010, no cells or casts, FENa 2%. What is the most likely cause and the best next step?',
      answer: 'Postrenal AKI due to bilateral ureteral obstruction from metastatic cervical cancer. The isosthenuric urine with bland sediment and FENa >1% is consistent with postrenal failure. Best next step: renal ultrasound to assess for hydronephrosis. IV fluids would not help and IV contrast could worsen renal function.',
    },
    {
      question: 'What is the role of FENa in differentiating prerenal failure from ATN?',
      answer: 'FENa (fractional excretion of sodium) = (UNa × PCr) / (PNa × UCr) × 100. Prerenal: FENa <1% (intact tubules avidly reabsorb sodium). ATN: FENa >2% (damaged tubules cannot reabsorb sodium). Limitations: diuretics increase FENa (mimicking ATN), early GN may have low FENa, and nonoliguric ATN may have FENa <1%.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and patient-centered communication',
            'Avoids medical jargon uses terms patient can understand',
            'Shows empathy for patient anxiety about acute kidney function decline',
            'Addresses concerns about dialysis and long-term kidney prognosis',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Renal function — elevated creatinine and BUN',
            Onset: 'Acute within 24 hours of coronary angiography',
            Character: 'Oliguria, rising creatinine from 1.6 to 2.9 mg/dL',
            Radiation: 'No radiation',
            Associated_symptoms: 'Oliguria, elevated potassium (5.3), low CO2 (19), hypertension treated to 109/65',
            Time_course: 'Abrupt decline over 24 hours post-procedure',
            Exacerbating_relieving: 'Worsened by contrast, ACE inhibitor, possible hypotension',
            Severity: 'Moderate — Cr 2.9, oliguria 200 mL/24h',
          },
          specific_history: [
            'Baseline renal function prior to admission',
            'Details of contrast exposure — type and volume',
            'Medication list — ACE inhibitors, NSAIDs, metformin, diuretics',
            'Blood pressure trends during hospitalization',
            'Urine output — precise measurement',
            'History of diabetes and diabetic nephropathy',
            'Prior episodes of AKI',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains diagnosis of acute kidney injury and likely contrast-induced cause',
            'Discusses need for urinalysis and urine electrolytes to categorize AKI type',
            'Explains management including holding nephrotoxic medications and optimizing volume status',
            'Discusses indications for dialysis and expected recovery',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely worried his kidneys are failing permanently',
            concerns: 'Fear of needing dialysis, concern about impact on his diabetes and heart disease',
            expectations: 'Expects treatment to reverse kidney injury and reassurance about recovery',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case030AKI;
