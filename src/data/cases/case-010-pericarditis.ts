import { CaseData } from '@/types';

const case010Pericarditis: CaseData = {
  _id: 'case-010-pericarditis',
  case_id: 'Case 010 - Pleuritic Chest Pain',
  case_name: 'Pleuritic Chest Pain',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 27,
    gender: 'F',
    occupation: 'not specified — presented to emergency center',
    chief_complaint: 'Retrosternal chest pain for 2 days',
    presentation: {
      setting: 'Patient presents to the emergency center complaining of retrosternal chest pain for the past 2 days. She is sitting forward on the stretcher taking shallow breaths.',
      duration: '2 days, constant',
      hpi: {
        onset: 'Gradual onset over past 2 days',
        site: 'Retrosternal (central chest)',
        character: 'Constant, sharp chest pain',
        radiation: 'Ask about radiation to trapezius ridge',
        severity: 'Moderate to severe — patient sitting forward and taking shallow breaths',
        time_course: 'Constant over 2 days',
        exacerbating_factors: ['Deep inspiration', 'Lying flat (recumbence)'],
        relieving_factors: ['Sitting up and leaning forward'],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '104 bpm',
        blood_pressure: '118/72 mm Hg',
        pericardial_friction_rub: 'Harsh scratchy sound over apex during systole and diastole',
        neck_veins_not_distended: true,
      },
      respiratory: {
        respiratory_rate: 'Shallow breaths',
        lung_fields: 'Clear to auscultation, mildly tender to palpation',
      },
      constitutional: {
        temperature: '99.4 °F',
        malaise: true,
      },
      others: {
        oral_ulcers: 'Two aphthous ulcers on oral mucosa',
        arthritis: 'Warmth and swelling of PIP joints of both hands',
      },
      negatives: {
        shortness_of_breath: false,
        nausea: false,
        diaphoresis: false,
        fever_high: false,
        cough: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant past medical history', 'No prior cardiac events'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely concerned about possible heart attack given chest pain location and severity',
      concerns: 'Fear of serious cardiac condition — worried about the cause of persistent chest pain',
      expectations: 'Expects pain relief and explanation for her symptoms',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what features support it?',
      answer: 'Acute pericarditis caused by systemic lupus erythematosus (SLE). Supporting features: pleuritic chest pain relieved by sitting forward, pericardial friction rub on auscultation, diffuse ST-segment elevation and PR-segment depression on ECG, finger arthritis, aphthous ulcers, pancytopenia, pyuria, and microhematuria suggesting SLE with multi-organ involvement.',
    },
    {
      question: 'What are the distinguishing ECG features between acute pericarditis and acute myocardial infarction?',
      answer: 'Acute pericarditis: diffuse ST-segment elevation in limb leads and V2-V6 with PR-segment depression. Reciprocal ST depression is absent. No Q waves or loss of R wave amplitude. Acute MI: regional ST elevation in a vascular territory (inferior, anterior, or lateral), often with reciprocal ST depression, and later development of Q waves and loss of R wave amplitude.',
    },
    {
      question: 'Why should thrombolytics be avoided in patients with pericarditis?',
      answer: 'If a patient with pericarditis is mistakenly treated with thrombolytics for suspected MI, the patient may develop pericardial hemorrhage and cardiac tamponade. This is a potentially fatal complication. Clinical clues to differentiate: pericarditis pain is sharp/pleuritic, varies with respiration, relieved by leaning forward, and does not respond to nitrates.',
    },
    {
      question: 'What are the diagnostic criteria for systemic lupus erythematosus (SLE)?',
      answer: 'A patient must meet at least 4 of 11 criteria (96% sensitive and specific): malar rash, discoid rash, photosensitivity, oral or vaginal ulcers, nonerosive arthritis involving 2+ peripheral joints, serositis (pleuritis or pericarditis), renal involvement (proteinuria or cellular casts), neurologic disorder (seizures or psychosis), hematologic disorder (hemolytic anemia, leukopenia, lymphopenia, or thrombocytopenia), immunologic disorder (anti-dsDNA, anti-Smith, or antiphospholipid antibodies), and positive ANA.',
    },
    {
      question: 'What is the next best step in managing this patient, and why?',
      answer: 'An echocardiogram should be performed to assess for pericardial effusion and cardiac tamponade. Although the patient has no clinical signs of tamponade (no JVD, normal cardiac silhouette on CXR), pericarditis can cause effusion, and tamponade is the most serious acute complication. The echocardiogram also provides baseline information for monitoring.',
    },
    {
      question: 'What are the major complications and causes of mortality in SLE?',
      answer: 'Major complications: renal disease (nephritis, chronic renal failure, nephrotic syndrome, end-stage renal disease — historically the most common cause of death), CNS disorders (seizures, psychosis, stroke syndromes, cranial neuropathies), and infections (often related to immunosuppression). Vascular disease including MI is also a common cause of death. Current treatment for lupus nephritis includes high-dose corticosteroids and mycophenolate or cyclophosphamide.',
    },
    {
      question: 'What is the treatment for acute pericarditis, and what is the prognosis?',
      answer: 'Treatment is directed at the underlying cause. For viral or idiopathic pericarditis: aspirin or NSAIDs (e.g., indomethacin) for symptom relief. Colchicine or corticosteroids for refractory symptoms or comorbid conditions. Prognosis is excellent — symptoms typically resolve within days to 2-3 weeks. For uremic pericarditis, urgent dialysis is required. Patients should be monitored for development of pericardial effusion and tamponade.',
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
            'Polite introduction and patient-centered communication',
            'Avoids medical jargon — explains terms like pericarditis and friction rub in accessible language',
            'Shows empathy for patient distress due to persistent chest pain',
            'Addresses patient anxiety about possible heart attack',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Retrosternal central chest',
            Onset: 'Gradual over past 2 days',
            Character: 'Sharp, constant, pleuritic',
            Radiation: 'Ask about radiation to trapezius ridge, neck, arms, back',
            Associated_symptoms: 'Arthralgias, oral ulcers, fever, malaise, rash, photosensitivity, shortness of breath',
            Time_course: 'Constant for 2 days',
            Exacerbating_relieving: 'Worse with deep inspiration and lying flat; relieved by sitting forward',
            Severity: 'Moderate to severe — ask patient to rate on a scale of 1-10',
          },
          specific_history: [
            'Cardiovascular risk factors — smoking, hypertension, diabetes, hypercholesterolemia',
            'Prior cardiac events or known heart disease',
            'Recent viral illness or upper respiratory infection',
            'Autoimmune symptoms — joint pain/swelling, oral ulcers, rash, photosensitivity, hair loss',
            'Family history of autoimmune disease',
            'Medication history — including drug-induced lupus',
            'History of renal disease or hematologic disorders',
          ],
          rule_out_differentials: [
            'ACS/MI — regional ST elevation, cardiac biomarkers (troponin)',
            'Aortic dissection — tearing pain, unequal pulses, widened mediastinum',
            'Pulmonary embolism — dyspnea, pleuritic pain, risk factors',
            'Pneumonia — fever, productive cough, consolidation on CXR',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies acute pericarditis as most likely diagnosis',
            'Explains need for ECG and echocardiogram to confirm and assess for effusion',
            'Discusses differential diagnosis and why MI is less likely',
            'Outlines treatment options — NSAIDs, colchicine, and addressing underlying cause',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely concerned her symptoms represent a heart attack given nature of chest pain',
            concerns: 'Worried about the cause of persistent symptoms, potential for serious underlying disease (SLE), and long-term implications',
            expectations: 'Expects pain relief, clear diagnosis, and reassurance about cardiac health',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case010Pericarditis;
