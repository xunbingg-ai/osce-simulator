import { CaseData } from '@/types';

const case002MetabolicSyndrome: CaseData = {
  _id: 'case-002-metabolic-syndrome',
  case_id: 'Case 002 - Annual Checkup & Cardiovascular Risk Assessment',
  case_name: 'Cardiovascular Risk Assessment',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 46,
    gender: 'M',
    occupation: 'Autoworker (formerly in Michigan)',
    chief_complaint: 'Annual checkup — no current complaints',
    presentation: {
      setting: 'Patient presents to the internal medicine clinic for an annual checkup after recently moving from Michigan.',
      duration: 'Asymptomatic — routine annual examination',
      hpi: {
        onset: 'N/A — asymptomatic',
        site: 'N/A',
        character: 'N/A',
        radiation: 'N/A',
        severity: 'N/A',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: '140/85 mm Hg',
        heart_rate: '70 bpm regular',
        heart_sounds: 'Normal S1 and S2, no murmurs, gallops, or rubs',
      },
      respiratory: {
        lung_fields: 'Clear to auscultation bilaterally',
      },
      constitutional: {
        bmi: '27 kg/m2',
        temperature: '98 °F',
      },
      negatives: {
        chest_pain: false,
        shortness_of_breath: false,
        headache: false,
        visual_disturbances: false,
        carotid_bruits: false,
        abdominal_bruits: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypertension diagnosed 6 years ago, without known complications'],
      negatives: ['No diabetes', 'No known heart disease', 'No prior stroke or TIA'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Lisinopril/hydrochlorothiazide (adherent, checks BP weekly)'],
    },
    social_history: {
      smoking: '10 cigarettes per day (open to quitting)',
      alcohol: 'Not specified',
    },
    family_history: 'Not available — previous medical records unavailable due to recent move',
    ice: {
      ideas: 'Patient believes his blood pressure is well-controlled because his "numbers are normal" on home monitoring.',
      concerns: 'May be unaware of the cumulative cardiovascular risk from his multiple risk factors; primarily concerned about establishing care at a new clinic.',
      expectations: 'Expects routine checkup and continuation of current medications; may not anticipate lifestyle modification or additional medication recommendations.',
    },
  },
  questions: [
    {
      question: 'What is metabolic syndrome and what are the diagnostic criteria?',
      answer: 'Metabolic syndrome is a constellation of interconnected risk factors that increase one\'s chances of developing diabetes, stroke, and heart disease. Diagnosis requires three of five criteria: (1) Central obesity (waist circumference ≥37 inches in men, ≥31 inches in women), (2) Triglycerides ≥150 mg/dL, (3) Fasting blood sugar ≥100 mg/dL, (4) Hypertension (SBP ≥130 or DBP ≥85 mm Hg), (5) Reduced HDL (≤40 mg/dL in men, ≤50 mg/dL in women).',
    },
    {
      question: 'How do you use the ASCVD risk calculator and what factors does it include?',
      answer: 'The ASCVD 10-year risk calculator estimates the risk of myocardial infarction or stroke over 10 years. Components include age, sex, race, total cholesterol, HDL cholesterol, systolic blood pressure, treatment for hypertension, diabetes status, and smoking status. It helps identify patients who would benefit from primary prevention with statins and other interventions.',
    },
    {
      question: 'What lifestyle modifications should be recommended for this patient?',
      answer: 'Lifestyle modification is the mainstay of treatment. Key recommendations include: (1) Smoking cessation — use the 5A approach (Ask, Advise, Assess, Assist, Arrange); combination of counseling and pharmacotherapy (nicotine replacement, bupropion, varenicline) is most effective. (2) Moderate-intensity physical activity for at least 150 minutes per week. (3) Modest weight loss of 5-10% improves insulin sensitivity, lipids, and blood pressure. (4) DASH diet rich in fruits, vegetables, fiber, unsaturated fats, and low in saturated fats and sodium.',
    },
    {
      question: 'When should pharmacotherapy be initiated for metabolic syndrome?',
      answer: 'Pharmacotherapy is offered when lifestyle modifications are insufficient. Using the ASCVD risk calculator: borderline risk (5-7.5%) with CKD, metabolic syndrome, DM, or other risk factors — start moderate-intensity statins. Intermediate risk (7.5-20%) — moderate- or high-intensity statins. High risk (>20%) — high-intensity statin. For impaired glucose tolerance, consider metformin. For BP >140/90, initiate antihypertensives (ACE inhibitors or ARBs are preferred in metabolic syndrome as they improve insulin sensitivity).',
    },
    {
      question: 'What is the role of bariatric surgery in metabolic syndrome?',
      answer: 'Bariatric surgery should be offered to patients with BMI >35 and DM, hypertension, or severe sleep apnea when lifestyle modifications have been insufficient. It has been associated with improvement in fasting glucose, blood pressure, obesity, waist circumference, and cholesterol levels.',
    },
    {
      question: 'Why are ACE inhibitors and ARBs preferred in patients with metabolic syndrome?',
      answer: 'Angiotensin II increases reactive oxygen species production, impairs nitric oxide generation, and augments hepatic gluconeogenesis and insulin resistance. ACE inhibitors and ARBs not only improve hypertension but also reduce development of new-onset diabetes mellitus by improving insulin sensitivity.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and establishes rapport with new patient',
            'Avoids medical jargon when discussing risk factors',
            'Shows empathy regarding smoking habit and asks about readiness to quit without judgment',
            'Addresses patient\'s perception that BP is "normal" and explains need for comprehensive risk assessment',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Review of symptoms — ask about chest pain, palpitations, shortness of breath, claudication',
            Onset: 'When was hypertension first diagnosed? Any prior complications?',
            Character: 'Ask about headaches, vision changes, fatigue, sleep quality',
            Radiation: 'Family history of premature CAD, diabetes, stroke',
            Associated_symptoms: 'Polyuria, polydipsia, nocturia (signs of diabetes), daytime sleepiness (OSA), erectile dysfunction',
            Time_course: 'Review prior BP readings, medication compliance, dietary and exercise habits',
            Exacerbating_relieving: 'Stress, diet, salt intake, physical activity level',
            Severity: 'Quantify smoking pack-years, assess readiness to quit using 5A approach',
          },
          additional_history: [
            'Previous medication list and adherence',
            'Dietary habits and sodium intake',
            'Physical activity level and exercise capacity',
            'Family history of cardiovascular disease and diabetes',
            'Sleep quality — screen for obstructive sleep apnea',
            'Review previous lab results if available',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains metabolic syndrome and its significance for cardiovascular risk',
            'Discusses ASCVD risk calculation and what the score means',
            'Outlines lifestyle modification plan (smoking cessation, diet, exercise)',
            'Explains when pharmacotherapy (statins, metformin, antihypertensives) would be indicated',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient thinks his BP is well-controlled and may not understand the cumulative risk of multiple risk factors',
            concerns: 'Concern about starting new medications; worry about health implications of smoking; anxiety about being a new patient without prior records',
            expectations: 'Expects continuation of current medications and reassurance; may not anticipate need for statin or diabetes screening',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case002MetabolicSyndrome;
