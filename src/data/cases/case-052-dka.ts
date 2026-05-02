import { CaseData } from '@/types';

const case052DKA: CaseData = {
  _id: 'case-052-dka',
  case_id: 'Case 052 - Confusion and Abdominal Pain',
  case_name: 'Confusion and Abdominal Pain',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 18,
    gender: 'F',
    occupation: 'Student',
    chief_complaint: 'Confusion and strange behavior with abdominal pain and vomiting',
    presentation: {
      setting: 'Patient is brought to the emergency department by her mother for confusion and strange behavior.',
      duration: 'Acute — hours; prodromal symptoms — 2-3 weeks',
      hpi: {
        onset: 'Acute confusion, abdominal pain, and vomiting this morning',
        site: 'Generalized — diffuse abdominal pain with altered mental status',
        character: 'Confusion, strange behavior, abdominal pain, vomiting, deep and rapid breathing',
        radiation: 'N/A — diffuse abdominal pain',
        severity: 'Severe — confused, not aware of day of week, significant metabolic acidosis',
        time_course: 'Prodromal fatigue and nocturia for 2-3 weeks; acute deterioration this morning',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        weight_loss: '20 lb unintentional weight loss over recent weeks',
        fatigue: 'Complaining of fatigue for 2-3 weeks',
        confusion: true,
        abdominal_pain: 'Mild diffuse tenderness',
        vomiting: true,
        nocturia: 'Getting up several times at night to urinate',
      },
      respiratory: {
        respiratory_rate: '24 breaths/min, deep and rapid',
        kussmaul_respirations: true,
      },
      cardiovascular: {
        heart_rate: '118 bpm supine; 145 bpm standing',
        blood_pressure: '125/84 mm Hg supine; 110/80 mm Hg standing',
        orthostatic_hypotension: true,
        neck_veins: 'Flat',
        mucous_membranes: 'Dry',
      },
      others: {
        confusion: true,
        focal_deficits: false,
        fundoscopic_exam: 'Normal',
      },
      negatives: {
        fever: false,
        focal_neurologic_deficit: false,
        guarding: false,
        rebound_tenderness: false,
        hematuria: false,
        pyuria: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['Always been healthy', 'No significant medical history', 'No prior diabetes diagnosis', 'No prior hospitalizations'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Mother may think the patient has a severe infection, drug use, or a psychiatric condition given the confusion and strange behavior.',
      concerns: 'Fear of permanent brain damage or serious illness; worried about weight loss and the acute deterioration.',
      expectations: 'Expects immediate diagnostic tests and treatment; concerned about hospitalization but understands the severity.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what is the underlying pathophysiology?',
      answer: 'Diabetic ketoacidosis (DKA) presenting as new-onset type 1 diabetes mellitus. Pathophysiology: absolute insulin deficiency leads to unchecked glycogenolysis, gluconeogenesis, and lipolysis. Free fatty acids are oxidized to ketoacids (acetoacetate, beta-hydroxybutyrate), causing anion gap metabolic acidosis. Hyperglycemia causes osmotic diuresis leading to severe volume depletion and electrolyte losses.',
    },
    {
      question: 'What are the diagnostic criteria for DKA?',
      answer: '(1) Hyperglycemia — glucose > 250 mg/dL (this patient: 475), (2) Metabolic acidosis — pH < 7.3 (this patient: 7.12), (3) Low serum bicarbonate (this patient: 9 mEq/L), (4) Anion gap > 12 (this patient: Na 131 - (Cl 95 + HCO3 9) = 27), (5) Elevated serum ketones — 3+ ketones in urine. Also: Kussmaul respirations, hypovolemia, altered mental status.',
    },
    {
      question: 'What is the immediate management of DKA?',
      answer: '(1) Fluid resuscitation: 1-2 L of isotonic NS over the first hour, then 250-500 mL/h. (2) Insulin: IV bolus 0.1 U/kg, then continuous infusion 0.1 U/kg/h. (3) Monitor glucose hourly — target decrease of 80-100 mg/dL/h. (4) Potassium replacement once K < 5 mEq/L and urine output established — add 20-40 mEq/L to fluids. (5) Identify and treat precipitating cause.',
    },
    {
      question: 'What are the common precipitating factors for DKA?',
      answer: 'New-onset diabetes (most common in this patient), inadequate insulin treatment or nonadherence, infection (pneumonia, UTI), pancreatitis, volume depletion, cocaine use, pregnancy, myocardial infarction, cerebrovascular accident, trauma, and medications (glucocorticoids). In established diabetics, the most common precipitant is infection or insulin nonadherence.',
    },
    {
      question: 'Why is potassium monitoring critical in DKA management?',
      answer: 'Total body potassium is depleted due to osmotic diuresis, but serum K may be normal or elevated initially due to acidosis shifting K extracellularly. As insulin is given and acidosis corrected, K shifts intracellularly, causing rapid drop in serum K. Potassium must be added to IV fluids once serum K < 5 mEq/L. Goal is to maintain serum K 4-5 mEq/L. Cardiac monitoring is recommended.',
    },
    {
      question: 'What are the causes of high anion gap metabolic acidosis (MUDPILES)?',
      answer: 'Methanol, Uremia, DKA (diabetic ketoacidosis), Propylene glycol, Iron/Isoniazid/Infection, Lactic acidosis, Ethylene glycol, Salicylates. This patient\'s DKA is confirmed by the combination of hyperglycemia, ketonuria, low pH, low bicarbonate, and elevated anion gap.',
    },
    {
      question: 'When should bicarbonate therapy be considered in DKA?',
      answer: 'Bicarbonate therapy is controversial and generally not recommended unless arterial pH < 7.0, or in cases of cardiac instability or severe hyperkalemia. Risks include worsening hypokalemia, paradoxical CNS acidosis, and delayed ketone clearance. This patient\'s pH of 7.12 does not warrant bicarbonate.',
    },
    {
      question: 'How do you transition from IV insulin infusion to subcutaneous insulin?',
      answer: 'Once the anion gap is closed (bicarbonate > 18, anion gap < 12), the patient is eating, and glucose is stable, transition to subcutaneous insulin. Give subcutaneous insulin approximately 30 minutes before stopping the IV infusion to avoid rebound acidosis. For new-onset type 1 diabetes, a basal-bolus regimen (long-acting + rapid-acting insulin) is typically initiated.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction to patient and concerned mother',
            'Avoids medical jargon — explains DKA and diabetes in understandable terms',
            'Shows empathy for patient\'s acute illness and mother\'s distress',
            'Addresses family concerns about confusion, weight loss, and long-term implications',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Ask about polydipsia, polyuria, nocturia over recent weeks',
            Onset: 'Timeline of weight loss, fatigue, and acute deterioration',
            Character: 'Nature of abdominal pain — diffuse vs localized; breathing pattern',
            Radiation: 'Ask about recent infections, illnesses, stressors',
            Associated_symptoms: 'Nausea, vomiting, abdominal pain, fruity breath odor, blurred vision, fatigue, weakness, weight loss',
            Time_course: 'Duration of prodromal symptoms before acute deterioration',
            Exacerbating_relieving: 'Recent illnesses, medication compliance if known diabetic, stress, dietary changes',
            Severity: 'Level of consciousness, pain severity, ability to tolerate oral intake',
          },
          specific_history: [
            'Family history of type 1 or type 2 diabetes',
            'Recent infections, febrile illnesses',
            'Menstrual history and pregnancy test',
            'History of similar episodes',
            'Access to healthcare and social support',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies DKA as the diagnosis in new-onset type 1 diabetes',
            'Explains the pathophysiology: insulin deficiency leading to hyperglycemia, ketosis, and metabolic acidosis',
            'Describes immediate management: IV fluids, insulin infusion, electrolyte monitoring',
            'Discusses long-term implications: lifelong insulin therapy, glucose monitoring, and diabetes education',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Mother may think this is a severe infection, drug use, or psychiatric issue',
            concerns: 'Fear of permanent damage from confusion; concern about lifelong diabetes diagnosis; worry about ability to manage insulin therapy',
            expectations: 'Expects immediate life-saving treatment and clear plan for long-term management and education',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case052DKA;
