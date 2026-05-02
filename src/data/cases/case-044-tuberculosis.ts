import { CaseData } from '@/types';

const case044Tuberculosis: CaseData = {
  _id: 'case-044-tuberculosis',
  case_id: 'Case 044 - Chronic Cough with Weight Loss',
  case_name: 'Chronic Cough with Weight Loss',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 62,
    gender: 'M',
    occupation: 'Not specified — recently emigrated from Cambodia to live with daughter',
    chief_complaint: 'Unintentional weight loss (12 lb) and productive cough over 3 months',
    presentation: {
      setting: 'Patient brought to clinic for 3-month history of unintentional weight loss, diminished appetite, and productive cough. He emigrated from Cambodia to the United States one year ago after his wife died.',
      duration: '3 months',
      hpi: {
        onset: 'Gradual onset over 3 months',
        site: 'Lungs (left midlung fields, right lung)',
        character: 'Productive cough with greenish sputum, low-grade fever',
        radiation: 'N/A',
        severity: 'Moderate — 12-lb unintentional weight loss, diminished appetite, chronic productive cough',
        time_course: 'Progressive over 3 months with low-grade fever',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      respiratory: {
        cough: true,
        sputum_production: true,
        sputum_character: 'Greenish sputum',
        crackles: 'Scattered left midlung fields',
        expiratory_wheeze: 'Faint right-sided',
      },
      constitutional: {
        weight_loss: true,
        weight_loss_amount: '12 lb over 3 months',
        diminished_appetite: true,
        low_grade_fever: true,
        temperature: '100.4 F',
        depressive_symptoms: true,
      },
      negatives: {
        smoking: false,
        vomiting: false,
        diarrhea: false,
        feverish_sensation: false,
        cervical_lymphadenopathy: false,
        supraclavicular_lymphadenopathy: false,
        abdominal_masses: false,
        gi_bleeding: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No known medical conditions', 'No regular medications', 'No smoking history'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Denies smoking history',
      alcohol: 'Not documented',
      family: 'Recently emigrated from Cambodia to the United States to live with daughter after death of wife',
      travel: 'From Cambodia (TB-endemic region)',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may attribute weight loss and fatigue to depression after his wifes death and move to a new country',
      concerns: 'Worried about unintentional weight loss and persistent cough, concerned about what the chest x-ray shows',
      expectations: 'Expects diagnosis and effective treatment to stop the weight loss and cough',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis given the history and chest x-ray findings?',
      answer: 'Pulmonary tuberculosis (reactivation TB). The patient has classic symptoms: low-grade fever, night sweats (likely), weight loss (consumption), and productive cough. He is from Cambodia (TB-endemic region) and has a cavitary lesion on chest x-ray in the upper lobe, characteristic of reactivation TB.',
    },
    {
      question: 'What is the difference between primary TB, reactivation TB, and latent TB?',
      answer: 'Primary TB: develops immediately after infection, usually affects middle and lower lobes, common in children. Reactivation TB: occurs years later when latent infection becomes active, typically involves apical and posterior segments of upper lobes, often cavitary. Latent TB: asymptomatic infection with positive PPD/IGRA but no clinical or radiographic evidence of active disease.',
    },
    {
      question: 'What diagnostic tests should be performed for suspected pulmonary TB?',
      answer: 'Three sputum samples for AFB smear and culture (at least one early morning specimen). NAAT (nucleic acid amplification testing) should be performed on the first sputum specimen for rapid confirmation. Culture is the gold standard but takes 4-8 weeks on solid media or 2-3 weeks on liquid media. A positive AFB smear or NAAT can prompt early treatment initiation.',
    },
    {
      question: 'What is the standard treatment regimen for active pulmonary TB?',
      answer: 'A 2-month intensive phase of four drugs: isoniazid (INH), rifampin, pyrazinamide, and ethambutol. Followed by a 4-month continuation phase of INH and rifampin. Multiple drugs are used to prevent development of resistance. Directly observed therapy (DOT) should be used to ensure compliance. Pyridoxine (vitamin B6) is added to prevent INH-induced peripheral neuropathy.',
    },
    {
      question: 'What are the important adverse effects to monitor during TB treatment?',
      answer: 'INH: hepatitis (monitor LFTs), peripheral neuropathy (prevent with pyridoxine). Rifampin: hepatitis, orange discoloration of body fluids, drug interactions (CYP450 inducer). Pyrazinamide: hepatitis, hyperuricemia (arthralgias). Ethambutol: optic neuritis (test visual acuity and color discrimination monthly). Baseline and monthly LFTs are recommended for patients at risk of hepatotoxicity.',
    },
    {
      question: 'What are the common sites of extrapulmonary TB?',
      answer: 'In decreasing frequency: lymph nodes (scrofula — painless cervical adenopathy), pleura (exudative effusion, may need pleural biopsy), genitourinary tract (sterile pyuria — leukocytes in urine with negative bacterial cultures), bones and joints (Pott disease of the spine), meninges (TB meningitis — high protein, low glucose, lymphocyte-predominant CSF), peritoneum, and miliary TB (hematogenous dissemination with 1-2 mm granulomas).',
    },
    {
      question: 'What is the significance of a positive PPD or IGRA test?',
      answer: 'PPD (tuberculin skin test) and IGRA (interferon-gamma release assay) are screening tests for latent TB infection, not diagnostic for active disease. A positive PPD is defined by induration size that varies by risk group: >5 mm for HIV-positive, immunosuppressed, or close contacts; >10 mm for recent immigrants, IV drug users, or high-risk medical conditions; >15 mm for low-risk persons. IGRAs are preferred for BCG-vaccinated individuals.',
    },
    {
      question: 'What is the management of latent TB infection?',
      answer: 'Treatment of latent TB reduces the lifetime risk of developing reactivation TB. Standard regimen: INH 300 mg daily for 9 months (or rifampin 600 mg daily for 4 months as an alternative). Latent TB is defined by a positive PPD/IGRA with no clinical symptoms and a normal chest radiograph. Treatment is particularly important in recent converters, HIV-positive patients, and those on immunosuppressive therapy (TNF-alpha blockers).',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Communicates sensitively with patient who may have language barriers or cultural considerations',
            'Avoids medical jargon — explains TB in understandable terms',
            'Shows empathy for the patients recent losses (wife, emigration) contributing to symptoms',
            'Addresses stigma concerns associated with TB diagnosis and treatment',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Lungs — left midlung fields crackles, right upper lobe cavitary lesion',
            Onset: 'Gradual onset over 3 months',
            Character: 'Productive cough with greenish sputum, low-grade fever, weight loss, diminished appetite',
            Radiation: 'N/A',
            Associated_symptoms: 'Depressive symptoms, weight loss (12 lb), low-grade fever, fatigue, night sweats (ask about)',
            Time_course: 'Progressive over 3 months, insidious onset',
            Exacerbating_relieving: 'Chronic persistence without significant change',
            Severity: 'Moderate — significant weight loss, persistent productive cough',
          },
          tb_risk_factors: [
            'Country of origin (Cambodia — TB-endemic region)',
            'Recent emigration (<5 years from endemic area)',
            'Chest x-ray findings (cavitary lesion, upper lobe)',
            'Low-grade fever and weight loss',
            'Exposure history to known TB cases',
          ],
          rule_out_differentials: [
            'Lung cancer — age >50, smoking history negative but still consider',
            'Community-acquired pneumonia — more acute onset, no cavitary lesion',
            'Fungal infection (histoplasmosis, coccidioidomycosis) — travel history',
            'Lung abscess — aspiration risk, cavitary lesion',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies pulmonary TB as the most likely diagnosis',
            'Explains need for sputum AFB smears (x3), culture, and NAAT for confirmation',
            'Discusses standard 4-drug regimen (RIPE) with directly observed therapy and pyridoxine',
            'Covers infection control measures (respiratory isolation), contact tracing, and public health reporting',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think TB is a death sentence or may not understand the connection between his symptoms, recent emigration, and past exposure',
            concerns: 'Fear of a contagious, stigmatized disease, concern about prolonged treatment duration and side effects, worry about infecting family',
            expectations: 'Expects effective cure, wants to understand treatment duration and how to avoid infecting daughter and family',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case044Tuberculosis;
