import { CaseData } from '@/types';

const case041UTISepsis: CaseData = {
  _id: 'case-041-uti-sepsis',
  case_id: 'Case 041 - Confusion and Fever in an Elderly Woman',
  case_name: 'Confusion and Fever in an Elderly Woman',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 84,
    gender: 'F',
    occupation: 'Retired — residing in long-term care facility',
    chief_complaint: 'Increased confusion, combativeness, and fever',
    presentation: {
      setting: 'Patient was brought to the emergency department by ambulance from her long-term care facility for increased confusion, combativeness, and fever.',
      duration: 'Acute change from baseline mental status',
      hpi: {
        onset: 'Acute — brought in for increased confusion and combativeness',
        site: 'Systemic — altered mental status',
        character: 'Lethargic but agitated when disturbed, combative with staff, not at baseline per family',
        radiation: 'N/A',
        severity: 'Severe — hypotensive (BP 76/32), tachycardic (HR 130), febrile (100.5 F)',
        time_course: 'Acute onset, persistent, not improving without intervention',
        exacerbating_factors: [],
        relieving_factors: ['Partial response to 2 L normal saline — BP improved to 95/58'],
      },
    },
    symptoms: {
      cardiovascular: {
        tachycardia: true,
        heart_rate: '130 bpm',
        blood_pressure: '76/32 mm Hg (improved to 95/58 after 2 L NS)',
        neck_veins: 'Flat',
        extremities: 'Warm and pink (inappropriately well-perfused despite hypotension)',
      },
      respiratory: {
        respiratory_rate: '24 breaths/min',
        oxygen_saturation: '95% on room air',
        lung_fields: 'Clear bilaterally',
      },
      constitutional: {
        fever: true,
        temperature: '100.5 F',
        altered_mental_status: true,
        lethargy: true,
        agitation: true,
      },
      negatives: {
        cough: false,
        chest_pain: false,
        abdominal_pain: false,
        murmur_or_gallop: false,
        jvd_elevated: false,
        pulmonary_edema: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Alzheimer disease', 'Hypertension (well controlled)'],
      negatives: ['No prior MI', 'No heart failure documented'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Antihypertensives (unspecified)'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      family: 'Residing in long-term care facility',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Family may not understand why she is suddenly confused and agitated — this may be attributed to her dementia rather than a new acute illness',
      concerns: 'Family worried about rapid deterioration and change from baseline mental status',
      expectations: 'Expects an explanation for the acute confusion and effective treatment',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what type of shock does this patient have?',
      answer: 'Septic shock secondary to a urinary tract infection. The patient has distributive shock (early warm phase), characterized by warm, well-perfused extremities despite significant hypotension, along with flat neck veins, clear lung fields, leukocytosis, elevated lactate, and urinalysis findings consistent with UTI.',
    },
    {
      question: 'How do you differentiate the four types of shock?',
      answer: 'Hypovolemic shock: volume loss, flat neck veins, clear lungs, cold/clammy extremities. Cardiogenic shock: pump failure, elevated JVD, pulmonary edema, cold extremities. Distributive shock: vasodilation, warm extremities initially, can have various causes (septic, anaphylactic, neurogenic). Obstructive shock: mechanical obstruction (PE, tamponade, tension pneumothorax).',
    },
    {
      question: 'Why is altered mental status a particularly important presenting sign in elderly patients?',
      answer: 'Elderly and institutionalized patients often present with less obvious symptoms of infection. Common manifestations include confusion or combativeness rather than localizing symptoms. Mental status or behavioral changes in the elderly should be considered strong indicators for serious illness, and a thorough workup should investigate infectious etiologies even without localizing signs.',
    },
    {
      question: 'What is the significance of warm, well-perfused extremities in this patient with hypotension?',
      answer: 'Warm extremities in the setting of hypotension suggest distributive shock (early septic shock), where peripheral vasodilation causes inappropriately preserved perfusion. Both hypovolemic and cardiogenic shock typically cause profound peripheral vasoconstriction, resulting in cold, clammy extremities. Early recognition of warm-phase septic shock is critical because delayed treatment leads to the cold phase (vasoconstriction, myocardial depression), which carries a poor prognosis.',
    },
    {
      question: 'What are the diagnostic criteria for a UTI and what do the urinalysis findings indicate?',
      answer: 'UTI is diagnosed based on symptoms plus urinary findings. The urinalysis showed 2+ leukocyte esterase (marker for pyuria), negative nitrites (not all bacteria produce nitrates), and microscopy showing 20-50 WBC/HPF with many bacteria. In symptomatic patients, >10^5 CFU/mL from a clean-catch specimen is diagnostic. For catheterized specimens, >10^2 CFU/mL is considered significant.',
    },
    {
      question: 'What is the immediate management for this patient with septic shock?',
      answer: 'Immediate management includes the Surviving Sepsis Campaign Hour-1 bundle: measure lactate level, obtain blood cultures before antibiotics, administer broad-spectrum antibiotics, begin aggressive IV fluid resuscitation (30 mL/kg crystalloid), and start vasopressors if hypotension persists despite fluids (norepinephrine is the agent of choice). Source control (treating the UTI) is essential.',
    },
    {
      question: 'What is the qSOFA score and how is it used?',
      answer: 'qSOFA (quick SOFA) is a rapid bedside assessment of three variables: Glasgow Coma Score <15 (1 point), systolic blood pressure <100 mm Hg (1 point), and respiratory rate >22 breaths/min (1 point). The presence of 2 or more of these criteria is associated with high mortality and organ dysfunction from sepsis. This patient meets all 3 criteria (altered mental status, SBP 76, RR 24).',
    },
    {
      question: 'How is asymptomatic bacteriuria managed and why?',
      answer: 'Asymptomatic bacteriuria is characterized by positive urine culture without clinical symptoms. Outside of pregnancy and immunocompromised patients (e.g., transplant recipients), no treatment is indicated — no adverse outcomes have been demonstrated from untreated asymptomatic bacteriuria, and treatment offers no benefit. This patient requires treatment because she has clear signs of systemic infection (sepsis).',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Communicates clearly and respectfully with elderly patient and concerned family',
            'Avoids medical jargon — explains shock and infection in understandable terms',
            'Shows empathy for the family witnessing an acute change in cognitive function',
            'Addresses the seriousness of the situation with appropriate urgency',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Systemic — urinary tract source suspected',
            Onset: 'Acute — change from baseline mental status, brought to ED by ambulance',
            Character: 'Confusion, combativeness, lethargy alternating with agitation',
            Radiation: 'N/A',
            Associated_symptoms: 'Fever, hypotension, tachycardia, tachypnea, warm extremities',
            Time_course: 'Acute decompensation, partially responsive to fluids',
            Exacerbating_relieving: 'Partially improved with IV fluid bolus',
            Severity: 'Critical — hypotensive, altered mental status, elevated lactate',
          },
          shock_differentiation: [
            'Warm and well-perfused extremities suggest distributive (not hypovolemic or cardiogenic) shock',
            'Flat neck veins rule out cardiogenic shock (no elevated JVD)',
            'Clear lung fields rule out pulmonary edema from cardiogenic shock',
            'No history or signs of hemorrhage or volume loss',
          ],
          infection_evaluation: [
            'Urinalysis with microscopy for WBCs, bacteria, leukocyte esterase, nitrites',
            'Blood cultures (2 sets) and urine culture before antibiotics',
            'Chest x-ray to rule out pneumonia as source',
            'Lactate level for severity assessment',
            'WBC with differential including bands',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies septic shock secondary to UTI as the diagnosis',
            'Explains need for immediate broad-spectrum antibiotics and fluid resuscitation',
            'Discusses vasopressor support (norepinephrine) if fluids insufficient',
            'Emphasizes importance of source control and response monitoring (lactate clearance)',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Family may attribute confusion to dementia rather than recognizing it as a sign of acute infection',
            concerns: 'Family worried about the rapid deterioration, change in mental status, and potential for permanent decline',
            expectations: 'Expects aggressive treatment to restore baseline function and clear explanation of the cause of acute change',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case041UTISepsis;
