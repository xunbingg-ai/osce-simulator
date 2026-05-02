import { CaseData } from '@/types';

const case025Pancreatitis: CaseData = {
  _id: 'case-025-pancreatitis',
  case_id: 'Case 025 - Severe Epigastric Pain Radiating to Back',
  case_name: 'Severe Epigastric Pain Radiating to Back',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 42,
    gender: 'F',
    occupation: 'Not specified — presenting to emergency department',
    chief_complaint: 'Severe steady epigastric pain radiating to the back with nausea and vomiting for 24 hours',
    presentation: {
      setting: 'Patient presents to the emergency department complaining of 24 hours of severe, steady epigastric abdominal pain radiating to her back with several episodes of nausea and vomiting.',
      duration: '24 hours',
      hpi: {
        onset: 'Sudden onset 24 hours ago',
        site: 'Epigastrium, also right upper quadrant',
        character: 'Severe, steady pain',
        radiation: 'Radiates to the back',
        severity: 'Severe',
        time_course: 'Continuous for 24 hours; prior similar but milder episodes in the evening after heavy meals that resolved spontaneously within 1-2 hours',
        exacerbating_factors: ['Heavy meals (prior episodes)', 'Eating (current episode)'],
        relieving_factors: ['Prior episodes resolved spontaneously within 1-2 hours; leaning forward may provide relief'],
      },
    },
    symptoms: {
      constitutional: {
        fever: false,
        heart_rate: '104 bpm',
        blood_pressure: '115/74 mm Hg',
        respiratory_rate: '22 breaths/min',
        diaphoresis: true,
      },
      others: {
        epigastric_pain: true,
        pain_radiating_to_back: true,
        right_upper_quadrant_pain: true,
        nausea: true,
        vomiting: true,
        hypoactive_bowel_sounds: true,
        abdominal_distention: true,
        scleral_icterus: true,
      },
      negatives: {
        occult_blood: false,
        organomegaly: false,
        pneumoperitoneum: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior surgeries', 'No alcohol use', 'No smoking'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Non-smoker',
      alcohol: 'Does not drink alcohol',
      family: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely concerned about the severe pain that is not resolving unlike prior episodes',
      concerns: 'Worried about what is causing the severe pain and why it is not going away on its own this time',
      expectations: 'Expects immediate pain relief, diagnosis of the underlying cause, and treatment to prevent recurrence',
    },
  },
  questions: [
    {
      question: 'What are the causes, clinical features, and prognostic factors in acute pancreatitis?',
      answer: 'Causes: gallstones (most common, 40-70%), alcohol (25-35%), hypertriglyceridemia, ERCP, medications, hypercalcemia, trauma. Clinical features: severe epigastric pain radiating to back, nausea/vomiting, relieved by leaning forward, elevated lipase/amylase. Poor prognostic factors: age >60, organ failure (renal, respiratory), SIRS criteria, BUN >25 mg/dL, impaired mental status, pleural effusion.',
    },
    {
      question: 'What are the principles of treatment and complications of acute pancreatitis?',
      answer: 'Treatment is supportive: pancreatic rest (NPO), IV hydration, adequate narcotic analgesia. ERCP with papillotomy within 24-48 hours for gallstone pancreatitis. Complications: phlegmon, pancreatic necrosis, pancreatic abscess (develops 2-3 weeks, mortality ~100% if not drained), pancreatic pseudocyst (fluid collection without epithelial lining, usually resolves if <6 cm), ARDS, hypovolemic shock (most common cause of early death).',
    },
    {
      question: 'What are the complications of gallstones?',
      answer: 'Biliary colic (intermittent RUQ pain after fatty meals), acute cholecystitis (persistent RUQ pain, fever, leukocytosis, gallbladder wall thickening), choledocholithiasis (common bile duct stone with jaundice), cholangitis (RUQ pain, jaundice, fever/Charcot triad, requires urgent biliary decompression), and gallstone pancreatitis (most common cause of acute pancreatitis).',
    },
    {
      question: 'What are the indications for ERCP in gallstone pancreatitis?',
      answer: 'ERCP with papillotomy to remove bile duct stones is indicated within 24-48 hours in gallstone pancreatitis, especially with evidence of biliary obstruction (elevated bilirubin, dilated bile duct) or cholangitis. It may lessen the severity of gallstone pancreatitis and reduce complications.',
    },
    {
      question: 'What is the difference between acute cholecystitis and cholangitis?',
      answer: 'Acute cholecystitis: inflammation of gallbladder from cystic duct obstruction by a stone. Presents with persistent RUQ pain, fever, leukocytosis, positive Murphy sign. Treated with NPO, IV fluids, antibiotics, and cholecystectomy within 48-72 hours. Cholangitis: infection of biliary tree from common bile duct obstruction. Presents with Charcot triad (RUQ pain, jaundice, fever/chills). Requires urgent biliary decompression via ERCP.',
    },
    {
      question: 'What scoring systems are used to predict severity in acute pancreatitis?',
      answer: 'Several scoring systems exist: SIRS criteria (temperature, heart rate, respiratory rate, WBC count — >=2 criteria indicates SIRS), BISAP (Bedside Index for Severity in Acute Pancreatitis) score, and APACHE II score. The presence of organ failure, age >60, BUN >25 mg/dL, and pleural effusion are associated with higher mortality. Amylase level does NOT correlate with severity.',
    },
    {
      question: 'What is the most important immediate therapeutic step in acute pancreatitis and why?',
      answer: 'Intravenous fluid hydration is the most important immediate step. Patients are volume depleted from vomiting, poor oral intake, and third-spacing of fluids into the peritoneal cavity. Hypovolemic shock is the most common cause of early death in pancreatitis. Aggressive IV fluid replacement is needed to maintain intravascular volume and support blood pressure.',
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
            'Avoids medical jargon — uses terms patient can understand',
            'Acknowledges patient distress from severe pain',
            'Reassures patient that treatment will be provided promptly',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Epigastric and right upper quadrant',
            Onset: 'Sudden onset 24 hours ago',
            Character: 'Severe, steady pain',
            Radiation: 'To the back',
            Associated_symptoms: 'Nausea, vomiting, diaphoresis, scleral icterus, fever, chills',
            Time_course: 'Continuous 24 hours; prior similar episodes after heavy meals that resolved in 1-2 hours',
            Exacerbating_relieving: 'Worse with eating; prior episodes resolved spontaneously; leaning forward may help',
            Severity: 'Severe — ask patient to rate 1-10',
          },
          gallstone_history: [
            'Prior similar episodes after heavy meals (biliary colic)',
            'Known gallstones',
            'Fatty food intolerance',
            'Jaundice, dark urine, clay-colored stools',
          ],
          rule_out_differentials: [
            'Perforated peptic ulcer — peritonitis, pneumoperitoneum on x-ray',
            'Acute cholecystitis — fever, RUQ pain, Murphy sign, no lipase elevation',
            'Bowel obstruction — obstipation, air-fluid levels on x-ray',
            'Myocardial infarction — ECG changes, cardiac biomarkers',
            'Aortic dissection — tearing pain, unequal pulses, widened mediastinum',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies acute pancreatitis as the most likely diagnosis based on epigastric pain radiating to back and elevated lipase',
            'Explains gallstones as the likely underlying etiology given hyperbilirubinemia and prior biliary colic',
            'Discusses need for RUQ ultrasound to confirm gallstones and assess for complications',
            'Describes immediate management including IV fluids, pain control, and NPO with pancreatic rest',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely concerned about the severe pain not resolving compared to prior milder episodes',
            concerns: 'Fear of serious condition requiring surgery, worry about recurrence after recovery',
            expectations: 'Expects immediate pain relief, diagnosis of cause, and treatment to prevent future episodes',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case025Pancreatitis;
