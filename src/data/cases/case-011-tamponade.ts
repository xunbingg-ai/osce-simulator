import { CaseData } from '@/types';

const case011Tamponade: CaseData = {
  _id: 'case-011-tamponade',
  case_id: 'Case 011 - Chest Pain & Dyspnea',
  case_name: 'Chest Pain & Dyspnea',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 42,
    gender: 'M',
    occupation: 'not specified — recently diagnosed with non-Hodgkin lymphoma',
    chief_complaint: 'Chest pain and dyspnea for 2 days',
    presentation: {
      setting: 'Patient presents to the emergency center with 2 days of worsening chest pain and dyspnea. He was diagnosed with non-Hodgkin lymphoma 6 weeks ago and treated with mediastinal radiation, most recently 1 week ago.',
      duration: '2 days, worsening',
      hpi: {
        onset: 'Gradual worsening over 2 days',
        site: 'Chest — constant pain, unrelated to activity',
        character: 'Constant chest pain with dyspnea on minimal exertion',
        radiation: 'Not specified',
        severity: 'Severe — appears uncomfortable and diaphoretic',
        time_course: 'Worsening over 2 days',
        exacerbating_factors: ['Minimal exertion'],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '115 bpm with thready pulse',
        blood_pressure: '108/86 mm Hg',
        pulsus_paradoxus: 'Systolic BP drops to 86 mm Hg on inspiration (drop >10 mmHg)',
        jugular_venous_distension: 'Distended to angle of jaw',
        heart_sounds: 'Faint, distant',
        diaphoresis: true,
      },
      respiratory: {
        dyspnea: 'Short of breath with minimal exertion',
        respiratory_rate: '22 breaths/min',
        lung_fields: 'Clear to auscultation',
      },
      constitutional: {
        appears_uncomfortable: true,
      },
      negatives: {
        fever: false,
        cough: false,
        leg_edema: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Non-Hodgkin lymphoma with mediastinal lymphadenopathy, diagnosed 6 weeks ago'],
      negatives: ['No other medical or surgical history'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None — takes no medications'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may think his chest pain and breathlessness relate to his lymphoma or radiation treatment',
      concerns: 'Fear that his cancer has worsened or spread — worried about the acute change in his condition',
      expectations: 'Expects urgent evaluation and relief of symptoms',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what clinical features support it?',
      answer: 'Pericardial effusion causing cardiac tamponade. Supporting features: Beck triad (hypotension, elevated JVD, and small/quiet heart), pulsus paradoxus (systolic BP drop >10 mmHg on inspiration), tachycardia, dyspnea on exertion, history of mediastinal radiation (risk factor for pericardial disease), and cardiomegaly on chest x-ray suggesting large pericardial effusion.',
    },
    {
      question: 'How do you measure pulsus paradoxus, and what is its significance?',
      answer: 'Use a manual BP cuff inflated above systolic pressure, then deflate slowly. Note the pressure when the first Korotkoff sound is heard during expiration only, then when it is heard during both expiration and inspiration. The difference is the pulsus paradoxus. A drop of >10 mmHg is abnormal. Pulsus paradoxus is sensitive but not specific for cardiac tamponade — it can also be seen in obstructive lung disease. In severe tamponade, it can be detected by palpation as diminished or absent peripheral pulses during inspiration.',
    },
    {
      question: 'What is Beck triad, and what type of tamponade does it describe?',
      answer: 'Beck triad consists of: (1) hypotension, (2) elevated jugular venous pressure, and (3) small, quiet heart. This triad describes acute cardiac tamponade with rapid fluid accumulation, as seen in cardiac trauma or ventricular rupture. When fluid accumulates slowly, the presentation may resemble heart failure with dyspnea, cardiomegaly, hepatomegaly, and peripheral edema.',
    },
    {
      question: 'How do you distinguish cardiac tamponade from constrictive pericarditis and restrictive cardiomyopathy?',
      answer: 'Cardiac tamponade: pulsus paradoxus present, Kussmaul sign absent, acute onset, low-voltage ECG with electrical alternans. Constrictive pericarditis: pulsus paradoxus absent, Kussmaul sign present (JVP rises with inspiration), pericardial knock, chronic progressive weakness, pericardial calcification on CXR, thickened pericardium on imaging. Restrictive cardiomyopathy: no pulsus paradoxus or Kussmaul sign, progressive dyspnea and edema, normal pericardium on MRI, may require endomyocardial biopsy for diagnosis.',
    },
    {
      question: 'What is the immediate treatment for cardiac tamponade?',
      answer: 'Urgent pericardiocentesis (percutaneous, possibly echocardiographically guided) or surgical pericardial window to drain the effusion and relieve pericardial pressure. While awaiting the procedure, intravenous fluids should be given to maintain intravascular volume and cardiac output, as these patients are preload-dependent. Diuretics, nitrates, and morphine should be avoided as they may worsen hypotension.',
    },
    {
      question: 'What are the potential cardiac complications of thoracic malignancies and radiation therapy?',
      answer: 'Both the malignancy itself and radiation therapy can cause: pericardial effusion with or without tamponade, constrictive pericarditis (months to years after radiation), and restrictive cardiomyopathy from myocardial fibrosis. Radiation can also accelerate coronary artery disease. This patient is at risk for all of these given his mediastinal lymphoma and recent radiation therapy.',
    },
    {
      question: 'What is Kussmaul sign and in which conditions is it found?',
      answer: 'Kussmaul sign is an increase (or lack of decrease) in jugular venous pressure during inspiration. Normally, JVP decreases with inspiration due to negative intrathoracic pressure drawing blood into the chest. Kussmaul sign is seen in constrictive pericarditis and restrictive cardiomyopathy due to severe diastolic restriction preventing blood from entering the right heart. It can be seen in both conditions but is absent in cardiac tamponade.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          adequate: '2-3 marks',
          outstanding: '4 marks',
          elements: [
            'Calm and reassuring approach for acutely unwell patient',
            'Avoids medical jargon — explains tamponade and pericardiocentesis in accessible terms',
            'Acknowledges patient discomfort and distress',
            'Addresses anxiety about underlying malignancy and acute deterioration',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Chest pain — diffuse, constant',
            Onset: 'Worsening over 2 days',
            Character: 'Constant pain with severe dyspnea on exertion',
            Radiation: 'Ask about radiation to neck, arms, back',
            Associated_symptoms: 'Orthopnea, paroxysmal nocturnal dyspnea, palpitations, light-headedness, syncope, peripheral edema',
            Time_course: 'Progressive worsening over 2 days',
            Exacerbating_relieving: 'Worse with exertion; ask about effect of position on symptoms',
            Severity: 'Severe — appears uncomfortable and diaphoretic',
          },
          specific_history: [
            'Oncology history — type and stage of lymphoma, radiation field and dosage, chemotherapy',
            'Timing of last radiation treatment (1 week ago)',
            'Cardiac history — prior pericarditis, heart failure, CAD',
            'Symptoms of constrictive pericarditis — chronic fatigue, edema, ascites',
          ],
          rule_out_differentials: [
            'Constrictive pericarditis — chronic course, Kussmaul sign, pericardial knock',
            'Restrictive cardiomyopathy — amyloidosis, prior radiation',
            'Heart failure — pulmonary edema, S3 gallop, response to diuretics',
            'Pulmonary embolism — acute dyspnea, pleuritic pain, DVT risk factors',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies cardiac tamponade as most likely diagnosis',
            'Explains need for urgent echocardiogram and pericardiocentesis',
            'Discusses the relationship between malignancy, radiation therapy, and pericardial disease',
            'Outlines treatment options — pericardiocentesis versus surgical window',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may attribute symptoms to his lymphoma progressing or treatment side effects',
            concerns: 'Fear that cancer has worsened — worried about the acute, life-threatening nature of his current symptoms',
            expectations: 'Expects urgent treatment to relieve breathing difficulty and clear explanation of the connection to his cancer treatment',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case011Tamponade;
