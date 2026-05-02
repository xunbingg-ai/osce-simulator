import { CaseData } from '@/types';

const case059AlcoholWithdrawal: CaseData = {
  _id: 'case-059-alcohol-withdrawal',
  case_id: 'Case 059 - Acute Agitation and Confusion in Hospitalized Patient',
  case_name: 'Acute Agitation and Confusion in Hospitalized Patient',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 57,
    gender: 'M',
    occupation: 'Attorney',
    chief_complaint: 'Acute agitation, combativeness, and confusion 2 days after hospital admission',
    presentation: {
      setting: 'A 57-year-old man was admitted to the hospital 2 days ago following a motor vehicle accident. He suffered multiple contusions and a femur fracture repaired 24 hours ago. He now develops acute agitation, combativeness, hallucinations, and autonomic instability.',
      duration: 'Acute — onset this evening',
      hpi: {
        onset: 'Acute onset this evening, 2 days after admission',
        site: 'Central nervous system — altered mental status, hallucinations',
        character: 'Agitated, combative, disoriented, auditory and tactile hallucinations, autonomic hyperactivity',
        radiation: 'N/A',
        severity: 'Severe — febrile (100.8 F), tachycardic (122 bpm), hypertensive (168/110 mm Hg)',
        time_course: 'Acute onset, fluctuating',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        fever: '100.8 F',
        diaphoresis: 'Mildly diaphoretic',
      },
      cardiovascular: {
        tachycardia: true,
        heart_rate: '122 bpm',
        hypertension: true,
        blood_pressure: '168/110 mm Hg',
      },
      respiratory: {
        tachypnea: true,
        respiratory_rate: '28 breaths/min',
        oxygen_saturation: '98% on room air',
        lung_sounds: 'Clear to auscultation',
      },
      others: {
        neurologic: {
          agitation: 'Agitated and combative — pulled out IV line',
          disorientation: 'Disoriented to place and time',
          hallucinations: 'Auditory hallucinations; tactile hallucinations',
          tremulousness: true,
          dilated_pupils: 'Dilated but reactive',
        },
        normal_ct_head: 'No intracranial bleeding on admission CT',
        abdomen_benign: true,
      },
      negatives: {
        focal_neurologic_deficits: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No prior medical problems', 'No dementia', 'No psychiatric illness'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Morphine as needed for pain', 'Subcutaneous enoxaparin for DVT prophylaxis'],
    },
    social_history: {
      smoking: 'Does not smoke',
      alcohol: 'Three to four mixed drinks every day after work, sometimes more on weekends',
      family: 'Family contacted by phone',
    },
    family_history: 'Not documented — no known family history of psychiatric illness',
    ice: {
      ideas: 'Patient is confused and may not understand why he is agitated or where he is',
      concerns: 'Family is very concerned about acute change in mental status from baseline',
      expectations: 'Expects rapid evaluation to identify cause and treatment to calm and stabilize the patient',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Delirium due to alcohol withdrawal, likely delirium tremens (DT). The patient has acute onset of agitation, disorientation, hallucinations, autonomic instability (fever, tachycardia, hypertension, tachypnea, diaphoresis, tremor) 48-72 hours after hospitalization (and thus alcohol cessation). Family confirms heavy daily alcohol use. CT head was normal, ruling out intracranial bleed.',
    },
    {
      question: 'What should be your next step?',
      answer: 'Immediately investigate and treat reversible causes of delirium: check for hypoxia, hypoglycemia, electrolyte disturbances, infection, and intracranial pathology. Given the history of daily alcohol use and timing (48-72 hours since last drink), alcohol withdrawal delirium is most likely. Administer benzodiazepines (lorazepam or diazepam), with aggressive upward titration until sedation is achieved.',
    },
    {
      question: 'What are the stages of alcohol withdrawal?',
      answer: 'Tremulousness (6 hours): Tremor, anxiety, insomnia, GI upset, diaphoresis. Withdrawal seizures (6-48 hours): Generalized tonic-clonic seizures, often in clusters. Alcoholic hallucinosis (12-48 hours): Visual, auditory, or tactile hallucinations with intact sensorium. Delirium tremens (48-96 hours): Hallucinations, agitation, tremor, autonomic hyperactivity — mortality 5-10% without treatment.',
    },
    {
      question: 'What is the treatment for alcohol withdrawal delirium?',
      answer: 'Benzodiazepines are the drugs of choice. Use either a long-acting agent (diazepam, chlordiazepoxide) titrated to symptom control, or shorter-acting agents (lorazepam, oxazepam) for patients with liver impairment. Supportive care: IV fluids, electrolyte replacement (magnesium, phosphate), and thiamine + B vitamins to prevent Wernicke encephalopathy. Initial aggressive dosing followed by rapid taper over 48-72 hours.',
    },
    {
      question: 'What causes delirium in hospitalized patients?',
      answer: 'Most common: drug toxicity (especially anticholinergics, sedatives, narcotics in elderly), infection, electrolyte disturbances (hyponatremia, hypoglycemia), and withdrawal from alcohol or sedatives. Other causes: hypoxia, hypoglycemia, intracranial hemorrhage, meningitis, hepatic/uremic encephalopathy, and postictal states. Delirium is a medical emergency requiring urgent investigation.',
    },
    {
      question: 'How do you distinguish delirium from dementia?',
      answer: 'Delirium: acute onset (hours to days), fluctuating consciousness, inattention, disorganized thinking, caused by medical condition/medication/withdrawal. Dementia: chronic onset (months to years), stable cognitive deficits, typically no fluctuation, no acute medical trigger. A patient can have both — acute delirium may unmask underlying dementia.',
    },
    {
      question: 'What are the nonpharmacologic interventions for managing a delirious patient?',
      answer: 'Frequent reorientation, reassurance from familiar persons, constant supervision, providing sensory aids (glasses, hearing aids), maintaining sleep-wake cycle, adequate hydration and nutrition. Physical restraints as last resort to prevent harm. Haloperidol or atypical antipsychotics (risperidone) for severe agitation with psychotic symptoms, but use cautiously.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Calm but urgent approach for an acutely agitated patient',
            'Clear communication with nursing staff and family members',
            'Shows empathy for patient distress and family concern',
            'Maintains patient dignity while ensuring safety',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Central nervous system — altered mental status',
            Onset: 'Acute onset this evening, 48 hours after admission',
            Character: 'Agitation, combativeness, disorientation, auditory and tactile hallucinations, tremor',
            Radiation: 'N/A',
            Associated_symptoms: 'Fever, tachycardia, hypertension, tachypnea, diaphoresis, dilated pupils',
            Time_course: 'Acute, fluctuating',
            Exacerbating_relieving: 'Not applicable',
            Severity: 'Severe — autonomic instability, risk of mortality 5-10%',
          },
          specific_history: [
            'Time of last alcohol drink (key to diagnosis)',
            'Quantity and duration of daily alcohol use',
            'Prior history of withdrawal symptoms or DT',
            'Past medical history — dementia, psychiatric illness',
            'Medication list — especially sedatives, narcotics',
            'Head trauma details — CT scan results',
            'History of seizures',
            'Collateral history from family',
          ],
          rule_out_differentials: [
            'Intracranial hemorrhage — CT head',
            'CNS infection — meningitis, encephalitis',
            'Hypoglycemia — finger-stick glucose',
            'Hypoxia — pulse oximetry, ABG',
            'Electrolyte disturbances — hyponatremia, hypercalcemia',
            'Drug toxicity — narcotics, anticholinergics',
            'Sepsis — fever, source evaluation',
            'Thyrotoxicosis',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Identifies delirium and recognizes alcohol withdrawal as most likely cause',
            'Explains need to rule out other serious causes',
            'Discusses treatment with benzodiazepines',
            'Describes supportive care including thiamine and electrolyte replacement',
            'Addresses need for close monitoring due to mortality risk',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient is confused and unable to understand the situation',
            concerns: 'Family is very concerned about sudden change in mental status from baseline normal function',
            expectations: 'Expects rapid stabilization, identification of cause, and clear communication about the plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case059AlcoholWithdrawal;
