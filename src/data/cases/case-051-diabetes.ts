import { CaseData } from '@/types';

const case051Diabetes: CaseData = {
  _id: 'case-051-diabetes',
  case_id: 'Case 051 - Routine Checkup with Elevated Blood Sugar',
  case_name: 'Routine Checkup with Elevated Blood Sugar',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 52,
    gender: 'F',
    occupation: 'Full-time job (not specified) plus caring for three children',
    chief_complaint: 'Routine yearly physical examination — no current complaints',
    presentation: {
      setting: 'Patient presents for her yearly physical examination at the internal medicine clinic.',
      duration: 'Asymptomatic — found on routine screening',
      hpi: {
        onset: 'Incidental finding on routine fasting glucose during annual physical',
        site: 'N/A — asymptomatic',
        character: 'N/A',
        radiation: 'N/A',
        severity: 'Mild — no hyperglycemic symptoms',
        time_course: 'Unknown duration — newly detected',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: '140/92 mm Hg',
      },
      constitutional: {
        bmi: '29 kg/m2',
        obesity: 'Moderate obesity',
      },
      others: {
        acanthosis_nigricans: 'Present at the neck',
        bmi: '29 kg/m2',
        obesity: 'Moderate obesity',
      },
      negatives: {
        polyuria: false,
        polydipsia: false,
        weight_loss: false,
        fatigue: false,
        visual_blurring: false,
        chest_pain: false,
        shortness_of_breath: false,
        headache: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Borderline hypertension', 'Moderate obesity'],
      negatives: ['No known coronary artery disease', 'No prior diabetes diagnosis', 'No prior gestational diabetes'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      occupation: 'Full-time job with three children — finds it difficult to exercise',
      family: 'Eats out frequently due to busy schedule',
    },
    family_history: 'Mother and older brother have diabetes and hypertension',
    ice: {
      ideas: 'Patient feels well and may not understand the significance of elevated blood sugar. She may believe a number slightly above normal is not concerning.',
      concerns: 'Concerned about having to take daily medications; worried about impact on busy lifestyle; concerned about difficulty making dietary changes due to family eating habits.',
      expectations: 'Expected a routine clean bill of health; may be resistant to lifestyle modification recommendations given previous unsuccessful counseling.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis based on the laboratory finding?',
      answer: 'Type 2 diabetes mellitus. The fasting plasma glucose of 140 mg/dL meets the ADA diagnostic criterion of ≥ 126 mg/dL. Supporting factors include obesity (BMI 29), family history of diabetes, hypertension, and acanthosis nigricans (a skin marker of insulin resistance).',
    },
    {
      question: 'What are the ADA diagnostic criteria for diabetes?',
      answer: 'Four criteria: (1) Hemoglobin A1C ≥ 6.5%, (2) Fasting plasma glucose ≥ 126 mg/dL, (3) 2-hour plasma glucose ≥ 200 mg/dL during 75-g oral glucose tolerance test, (4) Random plasma glucose ≥ 200 mg/dL in the setting of hyperglycemic symptoms. In the absence of clear hyperglycemia, diagnosis should be confirmed with repeat testing on a subsequent day.',
    },
    {
      question: 'What is the next step in management after diagnosing type 2 diabetes?',
      answer: 'Confirm with a repeat fasting glucose or HbA1C. Then initiate lifestyle modification (diet, exercise, weight loss) and start metformin concurrently. Assess for end-organ damage (ophthalmology exam, urine microalbumin, foot exam). Address cardiovascular risk factors: BP control (< 140/90 or < 130/80 based on risk), statin therapy, smoking cessation.',
    },
    {
      question: 'What lifestyle modifications are most important for this patient?',
      answer: 'Weight loss of 5-10% significantly improves insulin sensitivity, lipids, and blood pressure. Dietary changes: reduce calories, saturated fat, and sodium; increase fruits, vegetables, and fiber (DASH diet). Exercise: at least 150 minutes/week of moderate-intensity activity. Given her busy schedule, practical strategies like short walks, meal planning, and family involvement are essential.',
    },
    {
      question: 'Why is metformin the first-line pharmacotherapy for type 2 diabetes?',
      answer: 'Metformin decreases hepatic gluconeogenesis and improves insulin sensitivity. It is effective, weight-neutral (may cause modest weight loss), inexpensive, and does not cause hypoglycemia when used alone. It also has cardiovascular benefits and is supported by strong evidence. Contraindications: renal insufficiency (Cr > 1.5 in men, > 1.4 in women), liver dysfunction, or conditions predisposing to lactic acidosis.',
    },
    {
      question: 'What are the glycemic goals and when should additional therapy be considered?',
      answer: 'General goal: HbA1C < 7% (individualized based on age, hypoglycemia risk, life expectancy, comorbidities). If HbA1C remains above target after 3 months of lifestyle modification and metformin, add a second agent: GLP-1 receptor agonist, SGLT-2 inhibitor, DPP-4 inhibitor, thiazolidinedione, sulfonylurea, or basal insulin. In patients with ASCVD, HF, or CKD, GLP-1 or SGLT-2 inhibitors are preferred.',
    },
    {
      question: 'Why is cardiovascular risk reduction essential in type 2 diabetes?',
      answer: 'Diabetes confers the same level of risk for coronary events as established coronary artery disease in nondiabetics. The major cause of morbidity and mortality in type 2 diabetes is macrovascular disease (MI, stroke, PAD). Aggressive risk factor modification is essential: BP control, statin therapy (moderate to high intensity based on ASCVD risk), smoking cessation, and antiplatelet therapy if indicated.',
    },
    {
      question: 'What routine monitoring and preventive care is needed for diabetic patients?',
      answer: 'HbA1C every 3-6 months. Annual dilated eye exam for retinopathy. Annual urine microalbumin for nephropathy. Annual foot exam for neuropathy (every visit if neuropathy present). BP and lipid monitoring. Vaccinations: annual influenza, pneumococcal, and hepatitis B. Self-management education and nutritional counseling are also essential.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and establishes rapport',
            'Avoids medical jargon — explains diabetes and risk factors clearly',
            'Shows empathy regarding difficulty making lifestyle changes with busy family life',
            'Uses non-judgmental approach when discussing previous unsuccessful lifestyle counseling',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Ask about symptoms of hyperglycemia — polyuria, polydipsia, nocturia',
            Onset: 'When did fatigue or other symptoms begin? Any prior glucose testing?',
            Character: 'Ask about diet patterns, meal timing, types of food consumed',
            Radiation: 'Family history — diabetes, hypertension, CAD, stroke',
            Associated_symptoms: 'Blurry vision, frequent infections, slow wound healing, neuropathic symptoms (numbness, tingling in feet)',
            Time_course: 'Duration of obesity, hypertension; prior glucose values',
            Exacerbating_relieving: 'Diet, exercise patterns, stress, sleep quality',
            Severity: 'Impact of lifestyle on daily life; readiness to change',
          },
          specific_history: [
            'Detailed dietary history — typical meals, eating out frequency',
            'Physical activity assessment — barriers to exercise',
            'Prior gestational diabetes history',
            'Cardiovascular risk assessment — smoking, lipids, prior cardiac events',
            'Obstetric history — gestational diabetes, large babies',
            'Sleep history — screen for obstructive sleep apnea',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly diagnoses type 2 diabetes based on ADA criteria',
            'Explains the role of insulin resistance and obesity in diabetes pathophysiology',
            'Discusses lifestyle modification as foundation of therapy',
            'Outlines pharmacotherapy (metformin) and cardiovascular risk reduction plan',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient feels well and may not grasp the seriousness of diabetes as a chronic disease',
            concerns: 'Worried about daily medications, impact on lifestyle, difficulty making changes while caring for family',
            expectations: 'May expect a simple fix rather than lifelong lifestyle changes; needs practical, achievable guidance',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case051Diabetes;
