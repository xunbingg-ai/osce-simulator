import { CaseData } from '@/types';

const case060OpioidOverdose: CaseData = {
  _id: 'case-060-opioid-overdose',
  case_id: 'Case 060 - Unconsciousness with Respiratory Depression',
  case_name: 'Unconsciousness with Respiratory Depression',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 21,
    gender: 'F',
    occupation: 'College student',
    chief_complaint: 'Unconscious for at least 30 minutes',
    presentation: {
      setting: 'A 21-year-old woman is brought into the emergency department by her college roommate. She has been unconscious for at least 30 minutes. Roommate reports possible drug use at college parties.',
      duration: 'Acute — at least 30 minutes unconscious',
      hpi: {
        onset: 'Sudden — found unconscious',
        site: 'Central nervous system — unconscious, respiratory depression',
        character: 'Unresponsive, stuporous, with bradypnea and miotic pupils',
        radiation: 'N/A',
        severity: 'Severe — unconscious, respiratory rate 8 breaths/min, hypotensive',
        time_course: 'Persistent for at least 30 minutes',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        pallor: 'Somewhat pale',
      },
      cardiovascular: {
        hypotension: true,
        blood_pressure: '90/60 mm Hg',
        heart_rate: '80 bpm',
      },
      respiratory: {
        bradypnea: true,
        respiratory_rate: '8 breaths/min',
        lung_sounds: 'Clear to auscultation',
      },
      others: {
        neurologic: {
          unconsciousness: 'Unconscious for at least 30 minutes',
          stupor: 'Barely opens eyes upon painful stimulus',
          pupils: 'Miotic (pinpoint) and sluggish',
          gag_reflex: 'Normal',
        },
        gastrointestinal: {
          hypoactive_bowel_sounds: true,
          abdomen_nontender: true,
        },
        no_iv_injection_marks: true,
      },
      negatives: {
        fever: false,
        focal_deficits: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No known health conditions', 'No known medications'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None known'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented — possible drug use at college parties',
      family: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient is unconscious and cannot express concerns',
      concerns: 'Roommate is concerned about possible drug overdose and patient safety',
      expectations: 'Expects emergency evaluation and treatment to reverse unconsciousness',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Acute opioid overdose. The patient presents with stupor, respiratory depression (RR 8), miosis (pinpoint pupils), hypotension, and hypoactive bowel sounds. Urine drug screen is positive for opiates. The classic triad of opioid overdose is CNS depression, respiratory depression, and miosis.',
    },
    {
      question: 'What is the next step in therapy?',
      answer: 'Ensure airway, breathing, and circulation (ABC). Assess oxygen saturation, provide bag-mask ventilation if respirations <12/min or hypoxemic. Administer naloxone (opioid antagonist) intravenously starting at 0.04 mg, titrating upward every few minutes until respiratory rate is >12/min. The goal is adequate ventilation, not necessarily normal consciousness.',
    },
    {
      question: 'What are the typical signs of opioid intoxication?',
      answer: 'CNS depression (ranging from euphoria to coma), respiratory depression (bradypnea <12/min), miosis (pinpoint pupils), bradycardia, hypotension, hypothermia, hypoactive bowel sounds, and decreased gag reflex. Absence of miosis does not exclude opioid toxicity — co-ingestion of other drugs may cause mydriasis.',
    },
    {
      question: 'How is naloxone administered and dosed?',
      answer: 'Naloxone 0.04 mg IV initially, titrated every 2-3 minutes until RR >12/min. For apnea or cardiopulmonary arrest, give at least 2 mg. Can also be given IM, SC, or intranasally if no IV access. If no response after 5-10 mg, reconsider the diagnosis. Naloxone is short-acting — effects may wear off before opioid is eliminated, requiring repeat dosing or continuous infusion.',
    },
    {
      question: 'What is the differential diagnosis of stupor and coma?',
      answer: 'Broad differential includes: hypoglycemia (check finger-stick glucose immediately), CNS infection (meningitis, encephalitis), intracranial hemorrhage or mass, stroke, toxic-metabolic disturbances (electrolyte abnormalities, hepatic/uremic encephalopathy), drug intoxications (opioids, benzodiazepines, alcohol, barbiturates, TCAs), hypothermia, and postictal state. Always check glucose first as it is rapidly reversible.',
    },
    {
      question: 'What complications can arise from prolonged immobility in opioid overdose?',
      answer: 'Compartment syndrome and rhabdomyolysis from compressed fascia-bound muscle groups. Myoglobin released from injured muscle can precipitate in renal tubules, causing acute kidney injury. Pressure ulcers, peripheral nerve injuries, and hypothermia are also risks.',
    },
    {
      question: 'What is the role of gastric lavage and activated charcoal in opioid overdose?',
      answer: 'Gastric lavage and activated charcoal are NOT routinely indicated in acute opioid intoxication. They should only be considered if there is strong suspicion of co-ingestion of other drugs for which these measures are proven effective. The focus of treatment is respiratory support and naloxone administration.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Urgent and focused approach for an unconscious patient',
            'Clear communication with emergency team and roommate',
            'Shows empathy toward concerned roommate',
            'Maintains patient dignity during emergency evaluation',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'CNS (unconsciousness), respiratory (bradypnea), eyes (miotic pupils)',
            Onset: 'Sudden — found unconscious at least 30 minutes',
            Character: 'Unresponsive, stuporous, respiratory depression with pinpoint pupils',
            Radiation: 'N/A',
            Associated_symptoms: 'Hypotension, hypoactive bowel sounds, pallor',
            Time_course: 'Persistent unconsciousness for at least 30 minutes',
            Exacerbating_relieving: 'Not applicable',
            Severity: 'Severe — unconscious, RR 8, hypotensive',
          },
          specific_history: [
            'Time of last known well (time of ingestion)',
            'Type and amount of drug ingested',
            'Route of administration',
            'Co-ingestants (alcohol, benzodiazepines)',
            'Past medical history',
            'History of substance use disorder',
            'Prior overdoses',
            'Suicidal ideation or intent',
          ],
          rule_out_differentials: [
            'Hypoglycemia — finger-stick glucose',
            'CNS infection — meningeal signs, fever',
            'Intracranial hemorrhage — CT head',
            'Benzodiazepine or alcohol overdose',
            'Toxic alcohol ingestion (methanol, ethylene glycol)',
            'Carbon monoxide poisoning',
            'Traumatic brain injury',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies opioid overdose based on classic triad',
            'Explains ABC approach and need for respiratory support',
            'Discusses naloxone administration and dosing strategy',
            'Describes need for observation due to short half-life of naloxone',
            'Addresses disposition and referral for substance use treatment',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient is unconscious and cannot express concerns',
            concerns: 'Lethal risk from respiratory depression; roommate anxious about outcome',
            expectations: 'Expects emergency treatment to reverse overdose and prevent complications',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case060OpioidOverdose;
