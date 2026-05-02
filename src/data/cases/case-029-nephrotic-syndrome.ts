import { CaseData } from '@/types';

const case029NephroticSyndrome: CaseData = {
  _id: 'case-029-nephrotic-syndrome',
  case_id: 'Case 029 - Persistent Leg and Ankle Swelling',
  case_name: 'Persistent Leg and Ankle Swelling',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 58,
    gender: 'F',
    occupation: 'Not specified',
    chief_complaint: 'Persistent swelling of feet and ankles for 2-3 months',
    presentation: {
      setting: 'Patient presents to the office complaining of persistent swelling of her feet and ankles, now unable to put on her shoes.',
      duration: '2-3 months',
      hpi: {
        onset: 'Gradual onset approximately 2-3 months ago with mild ankle swelling',
        site: 'Feet, ankles, legs, hands, periorbital region',
        character: 'Painless pitting edema progressively worsening',
        radiation: 'No radiation — dependent edema',
        severity: 'Moderate to severe — unable to wear shoes, gained 20-25 lb',
        time_course: 'Progressive worsening over 2-3 months',
        exacerbating_factors: ['Prolonged standing'],
        relieving_factors: ['Borrowed diuretic pills from friend provided temporary relief'],
      },
    },
    symptoms: {
      constitutional: {
        weight_gain: '20-25 lb over last few months',
      },
      others: {
        foamy_urine: true,
        proteinuria: '3+ on dipstick',
        glycosuria: '2+ on dipstick',
        periorbital_edema: true,
        pitting_edema_hands: true,
        pitting_edema_feet: true,
        pitting_edema_legs: true,
        diminished_sensation_feet_and_legs: 'Reduced light touch to midcalf',
        diabetic_retinopathy: true,
        hard_exudates: true,
        dot_hemorrhages: true,
      },
      negatives: {
        dysuria: false,
        urinary_frequency: false,
        urinary_urgency: false,
        fever: false,
        joint_pain: false,
        skin_rashes: false,
        gastrointestinal_symptoms: false,
        hematuria: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Type 2 diabetes mellitus for 27 years'],
      negatives: ['No regular medical follow-up', 'Does not monitor blood glucose at home'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Sulfonylurea agent for diabetes'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may think her swelling is due to dietary issues or her diabetes getting worse',
      concerns: 'Worried about worsening kidney function and long-term complications of diabetes',
      expectations: 'Expects medication to relieve the swelling and prevent recurrence',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what is the underlying cause?',
      answer: 'Nephrotic syndrome as a consequence of diabetic nephropathy. The patient has long-standing uncontrolled type 2 diabetes (27 years), heavy proteinuria (3+ on dipstick, foamy urine), edema, and evidence of microvascular disease (diabetic retinopathy with hard exudates and dot hemorrhages, peripheral neuropathy).',
    },
    {
      question: 'What is the strongest risk factor for this condition and what might have prevented it?',
      answer: 'Long-standing diabetes without tight glycemic control is the strongest risk factor. Prevention would include regular medical follow-up, tight glycemic control with regular HbA1c monitoring, and early treatment with ACE inhibitors or ARBs, even before microalbuminuria develops.',
    },
    {
      question: 'What is the best intervention to slow disease progression?',
      answer: 'Angiotensin inhibition with either an ACE inhibitor or ARB. These agents reduce proteinuria and slow progression of diabetic nephropathy independent of blood pressure control by reducing intraglomerular filtration pressure and proteinuria. Strict BP control with goal <130/80 mmHg is also essential.',
    },
    {
      question: 'What are the four classic features of nephrotic syndrome?',
      answer: '1. Heavy proteinuria (>3.5 g per 24 hours), 2. Hypoalbuminemia (<3 g/dL), 3. Hyperlipidemia, and 4. Edema. The proteinuria leads to loss of albumin and other serum proteins, decreased oncotic pressure, and subsequent fluid retention.',
    },
    {
      question: 'What is the best screening test for early diabetic nephropathy and when should it be performed?',
      answer: 'Urine microalbuminuria screening — albumin-to-creatinine ratio of 30-300 mg/g on a random urine sample. This detects early nephropathy before it becomes detectable on standard dipstick (which only detects macroalbuminuria >300 mg/d). All diabetic patients should be screened annually.',
    },
    {
      question: 'How does blood pressure control affect the progression of diabetic nephropathy?',
      answer: 'Strict blood pressure control (<130/80 mmHg) is essential to slow progression. ACE inhibitors and ARBs have renoprotective effects independent of BP control. Additional agents may include nondihydropyridine calcium channel blockers, beta-blockers, or diuretics if needed.',
    },
    {
      question: 'What are the complications of nephrotic syndrome beyond edema?',
      answer: 'Hypercoagulability (loss of antithrombin III, proteins C and S) leading to venous thromboembolism including renal vein thrombosis (flank pain, hematuria, increased proteinuria). Hypogammaglobulinemia with increased infection risk (especially pneumococcal). Iron deficiency anemia from hypotransferrinemia. Vitamin D deficiency from loss of vitamin D-binding protein.',
    },
    {
      question: 'A diabetic patient with proteinuria, BP 140/82, and retinopathy is found to have 2+ protein on dipstick. What is the best treatment?',
      answer: 'Start an ACE inhibitor (e.g., lisinopril) to reduce proteinuria and slow progression of nephropathy. Diabetic patients with proteinuria and retinopathy almost certainly have diabetic nephropathy. ACE inhibitors are first-line for renoprotection even without hypertension. Changing sulfonylureas or referring to cardiology is not indicated.',
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
            'Shows empathy for patient frustration with chronic disease',
            'Addresses concerns about diabetes complications and kidney disease',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Feet, ankles, legs, hands, periorbital',
            Onset: 'Gradual over 2-3 months',
            Character: 'Painless pitting edema, progressive',
            Radiation: 'No radiation — dependent edema',
            Associated_symptoms: 'Foamy urine, weight gain, diabetic retinopathy, peripheral neuropathy',
            Time_course: 'Slowly progressive over months',
            Exacerbating_relieving: 'Worse with prolonged standing; diuretics helped temporarily',
            Severity: 'Moderate to severe — unable to wear shoes, 20-25 lb weight gain',
          },
          specific_history: [
            'Duration and control of diabetes — HbA1c history',
            'Regular medical follow-up and medication compliance',
            'Other microvascular complications — retinopathy, neuropathy',
            'Foamy urine — duration and progression',
            'Weight changes and dietary history',
            'Cardiovascular risk factors and history',
            'Previous urine or kidney function tests',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains diagnosis of nephrotic syndrome due to diabetic nephropathy',
            'Discusses need for HbA1c monitoring, urine albumin-to-creatinine ratio, and renal function tests',
            'Explains role of ACE inhibitor/ARB in slowing disease progression',
            'Discusses lifestyle modifications including glycemic control, BP control, and cardiovascular risk reduction',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think the swelling is a separate problem from her diabetes',
            concerns: 'Fear of kidney failure, dialysis, and worsening disability from edema',
            expectations: 'Expects medication to relieve symptoms and prevent further decline',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case029NephroticSyndrome;
