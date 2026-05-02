import { CaseData } from '@/types';

const case022Diverticulitis: CaseData = {
  _id: 'case-022-diverticulitis',
  case_id: 'Case 022 - Left Lower Quadrant Abdominal Pain',
  case_name: 'Left Lower Quadrant Abdominal Pain',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 61,
    gender: 'M',
    occupation: 'Not specified — presenting to emergency center',
    chief_complaint: 'Worsening left lower quadrant abdominal pain for 3 days',
    presentation: {
      setting: 'Patient comes to the emergency center complaining of 3 days of worsening abdominal pain.',
      duration: '3 days',
      hpi: {
        onset: 'Began 3 days ago as intermittent crampy pain',
        site: 'Left lower quadrant',
        character: 'Began as intermittent crampy, now steady and moderately severe',
        radiation: 'No radiation documented',
        severity: 'Moderate to severe',
        time_course: 'Started as intermittent crampy pain, progressed to steady and moderately severe over 3 days',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      others: {
        abdominal_pain: true,
        pain_location: 'Left lower quadrant',
        nausea: true,
        vomiting: false,
        constipation: true,
        no_bowel_movements_since: '2 days',
        bowel_sounds: 'Hypoactive',
        abdominal_distention: true,
        voluntary_guarding: true,
        rectal_tenderness: true,
      },
      constitutional: {
        fever: true,
        temperature: '100.2°F (37.9°C)',
        heart_rate: '98 bpm',
        blood_pressure: '110/72 mm Hg',
      },
      negatives: {
        vomiting: false,
        occult_blood: false,
        pallor: false,
        jaundice: false,
        rebound_tenderness: false,
        pneumoperitoneum: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No prior GI illnesses', 'No prior abdominal surgeries'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      family: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely concerned about the cause of worsening abdominal pain and constipation',
      concerns: 'Worried about a serious abdominal condition that may require surgery',
      expectations: 'Expects pain relief, diagnosis, and effective treatment',
    },
  },
  questions: [
    {
      question: 'What are the complications of diverticular disease?',
      answer: 'Complicated diverticulitis occurs in 25% of cases: abscess (15%), perforation (10%), stricture (5%), and fistula (1%). Diverticular hemorrhage is the most common cause of hematochezia in patients older than 60 years, typically presenting as painless passage of bright red blood, usually self-limited.',
    },
    {
      question: 'What therapy is appropriate for acute diverticulitis and how does it differ between uncomplicated and complicated cases?',
      answer: 'Uncomplicated diverticulitis: outpatient management with bowel rest and oral antibiotics (quinolone plus metronidazole, or amoxicillin-clavulanate for 7-10 days), clear liquids. Complicated diverticulitis: inpatient management with NPO, IV hydration, IV broad-spectrum antibiotics (piperacillin-tazobactam or ceftriaxone plus metronidazole), and CT imaging. Surgical intervention for peritonitis, uncontrolled sepsis, perforation, or clinical deterioration.',
    },
    {
      question: 'What are the indications for surgical intervention in diverticulitis?',
      answer: 'Emergent surgical indications include generalized peritonitis, uncontrolled sepsis, perforation, and clinical deterioration. Elective sigmoid resection is indicated for low surgical risk patients with complicated diverticulitis or those with two or more episodes of uncomplicated diverticulitis. Surgical options include abdominal washout, CT-guided percutaneous drainage of abscesses, and bowel resection.',
    },
    {
      question: 'How do you differentiate between inpatient and outpatient management for diverticulitis?',
      answer: 'Inpatient therapy is indicated for elderly or immunosuppressed patients, those with significant comorbidities, high fever or significant leukocytosis, need for narcotic pain control, signs of peritonitis, or inability to tolerate oral intake. Outpatient management is appropriate for select patients with less severe presentation, ability to tolerate oral antibiotics, and absence of significant comorbid conditions.',
    },
    {
      question: 'What prevention and follow-up strategies are recommended after acute diverticulitis?',
      answer: 'Prevention includes a high-fiber diet, increased fluid intake, routine exercise, smoking cessation, and possible anti-inflammatory medications (mesalamine) or probiotics. Colonoscopy should be performed at least 6 weeks after resolution of acute episode to evaluate for colorectal carcinoma. Avoidance of nuts and seeds is traditionally advised but data supporting this is lacking.',
    },
    {
      question: 'What is the preferred imaging modality for diagnosing diverticulitis and why?',
      answer: 'CT scan is the preferred modality of choice. Findings include inflamed sigmoid diverticula, bowel wall thickening >4 mm, pericolic fat stranding, or diverticular abscess. Plain films can identify pneumoperitoneum. Barium enema and endoscopy are contraindicated in the acute phase due to risk of perforation. Endoscopy should be reserved for at least 6 weeks after resolution.',
    },
    {
      question: 'What other diagnoses should be considered in a patient presenting with left lower quadrant pain and how do they differ?',
      answer: 'Key differentials include: bowel perforation (pneumoperitoneum on x-ray), ischemic colitis (bleeding, atherosclerotic disease, pain out of proportion to exam), colon cancer (age-appropriate screening needed after resolution), and "painful diverticular disease without diverticulitis" (symptoms but no evidence of inflammation).',
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
            'Acknowledges patient discomfort from progressive abdominal pain',
            'Addresses concerns about potential need for surgery',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Left lower quadrant',
            Onset: 'Intermittent crampy pain starting 3 days ago, now steady',
            Character: 'Crampy initially, now steady and moderately severe',
            Radiation: 'Ask about radiation to groin, back, or flank',
            Associated_symptoms: 'Nausea, vomiting, fever, chills, diarrhea, constipation, dysuria, urinary frequency',
            Time_course: '3 days, progressing from intermittent to steady pain',
            Exacerbating_relieving: 'Ask about effect of eating, movement, defecation',
            Severity: 'Moderate to severe — ask patient to rate 1-10',
          },
          risk_factors: [
            'Age >60',
            'Low-fiber diet, high red meat consumption',
            'Obesity and sedentary lifestyle',
            'Aspirin and NSAID use',
            'Smoking',
          ],
          rule_out_differentials: [
            'Bowel perforation — check for pneumoperitoneum on x-ray',
            'Ischemic colitis — bleeding, atherosclerotic disease, pain out of proportion',
            'Colon cancer — age-appropriate screening needed',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies acute sigmoid diverticulitis as most likely diagnosis',
            'Explains need for CT scan to confirm diagnosis and rule out complications',
            'Discusses inpatient vs outpatient management based on severity and risk factors',
            'Explains indications for surgical intervention if complications arise',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may be worried about appendicitis or colon cancer given the abdominal pain',
            concerns: 'Fear of serious complication like perforation, concern about need for surgery or colostomy',
            expectations: 'Expects effective treatment, pain relief, and clear follow-up plan including colon cancer screening',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case022Diverticulitis;
