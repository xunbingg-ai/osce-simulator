import { CaseData } from '@/types';

const case058SickleCellCrisis: CaseData = {
  _id: 'case-058-sickle-cell-crisis',
  case_id: 'Case 058 - Abdominal and Leg Pain with Chest Pain and Shortness of Breath',
  case_name: 'Abdominal and Leg Pain with Chest Pain and Shortness of Breath',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 25,
    gender: 'M',
    occupation: 'not specified — admitted to hospital',
    chief_complaint: 'Abdominal and bilateral lower extremity pain with chest pain and shortness of breath',
    presentation: {
      setting: 'A 25-year-old African American man with known sickle cell disease is admitted with abdominal and bilateral lower extremity pain. He has had 6 admissions in the past year for pain crises. He now also complains of chest pain worse on inspiration.',
      duration: 'Acute — current episode',
      hpi: {
        onset: 'Acute onset',
        site: 'Abdomen, bilateral lower extremities, chest (pleuritic)',
        character: 'Abdominal and bilateral leg pain typical of prior crises; new pleuritic chest pain',
        radiation: 'Chest pain worse on inspiration',
        severity: 'Severe — requiring hospital admission with O2 supplementation',
        time_course: 'Acute, ongoing',
        exacerbating_factors: ['Inspiration (chest pain)'],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        fever: '101 F',
      },
      respiratory: {
        chest_pain: 'Pleuritic — worse on inspiration',
        dyspnea: true,
        oxygen_saturation: '92% on 2 L/min nasal cannula',
        lung_auscultation: 'Bronchial breath sounds and egophony at right lung base',
      },
      cardiovascular: {
        tachycardia: true,
        heart_rate: '100 bpm',
      },
      others: {
        musculoskeletal: {
          extremity_pain: 'Bilateral lower extremities',
          abdominal_pain: true,
          tenderness_on_palpation: 'Extremities tender',
        },
      },
      negatives: {
        focal_neurologic_deficits: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Sickle cell disease', 'Frequent pain crises — 6 admissions last year'],
      negatives: ['Last discharged 2 months ago'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Not specified — likely includes penicillin prophylaxis, folic acid'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented — known sickle cell disease',
    ice: {
      ideas: 'Patient recognizes this as another pain crisis but is concerned about the new chest pain and breathing difficulty',
      concerns: 'Fears this may be more serious than prior crises; worried about recurrent hospitalizations and long-term complications',
      expectations: 'Expects effective pain relief, treatment for breathing difficulty, and prevention of future crises',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Acute chest syndrome (ACS) in a patient with sickle cell disease. The patient has fever, chest pain (pleuritic), respiratory symptoms, hypoxia (92% on 2L), and signs of consolidation (bronchial breath sounds, egophony at right lung base). ACS is a vaso-occlusive crisis in the lungs and can be caused by infection or pulmonary infarction.',
    },
    {
      question: 'What is the most appropriate next step in management?',
      answer: 'Obtain a chest radiograph and start empiric antibiotic therapy. Blood and sputum cultures should be collected. Treatment is supportive: oxygen to maintain saturation, IV fluid hydration, broad-spectrum antibiotics (third-generation cephalosporin + macrolide), analgesia, and incentive spirometry.',
    },
    {
      question: 'What are the potential complications of acute chest syndrome?',
      answer: 'Respiratory failure requiring mechanical ventilation, progressive hypoxemia, multi-organ dysfunction, and death. ACS is a leading cause of mortality in sickle cell disease. Prompt recognition and treatment are essential.',
    },
    {
      question: 'What are the best treatment options for acute chest syndrome?',
      answer: 'Oxygen therapy, pain control with NSAIDs and narcotics, broad-spectrum antibiotics (cefotaxime + azithromycin for coverage of S. pneumoniae, Mycoplasma, Chlamydia), IV hydration, incentive spirometry to prevent atelectasis, and blood transfusion (simple transfusion for mild symptoms, exchange transfusion for severe disease or worsening hypoxia).',
    },
    {
      question: 'What is the pathophysiology of sickle cell disease and what triggers sickling?',
      answer: 'Autosomal recessive disorder with substitution of valine for glutamic acid at position 6 of the beta-globin chain, producing hemoglobin S. Under deoxygenation, HbS polymerizes, distorting RBCs into sickle shape. Triggers: hypoxia, acidosis, dehydration, cold exposure, infection, and venous stasis.',
    },
    {
      question: 'What are the chronic complications of sickle cell disease?',
      answer: 'Autosplenism/infarction (increased risk of encapsulated organism infections), pain crises, acute chest syndrome, aplastic crisis (parvovirus B19), stroke (hemorrhagic or ischemic), pigmented gallstones, papillary necrosis of the kidney, priapism, pulmonary hypertension, heart failure, Salmonella osteomyelitis, and leg ulcers.',
    },
    {
      question: 'How does hydroxyurea help in sickle cell disease?',
      answer: 'Hydroxyurea increases hemoglobin F (fetal hemoglobin) production, which decreases hemoglobin S concentration and reduces sickling. This reduces the frequency of pain crises and acute chest syndrome episodes. Decitabine has similar effects. Both are antineoplastic agents that stimulate HbF production.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Calm and reassuring approach for a patient in severe pain and respiratory distress',
            'Avoids medical jargon — explains condition in accessible terms',
            'Acknowledges the severity of pain and breathing difficulty',
            'Addresses patient frustration with recurrent hospitalizations',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Abdomen, bilateral lower extremities (pain); chest (pleuritic)',
            Onset: 'Acute onset',
            Character: 'Typical sickle pain in abdomen and legs; new sharp pleuritic chest pain',
            Radiation: 'Chest pain worse on inspiration',
            Associated_symptoms: 'Fever, dyspnea, cough, hypoxia',
            Time_course: 'Acute, current episode superimposed on frequent prior crises',
            Exacerbating_relieving: 'Worse with inspiration; no relieving factors identified',
            Severity: 'Severe — requiring hospital admission, O2 at 2 L/min',
          },
          specific_history: [
            'Number and frequency of prior pain crises',
            'Prior episodes of acute chest syndrome',
            'Baseline hemoglobin and oxygen saturation',
            'Infection history — fever, cough, sputum production',
            'Medication adherence — penicillin prophylaxis, hydroxyurea',
            'Transfusion history',
            'Immunization status — pneumococcal vaccine',
          ],
          rule_out_differentials: [
            'Pneumonia — may coexist with ACS, treat empirically',
            'Pulmonary embolism — consider if atypical presentation',
            'Aplastic crisis — check reticulocyte count',
            'Splenic sequestration — check spleen size, hemoglobin drop',
            'Osteomyelitis — focal bone pain, especially Salmonella',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies acute chest syndrome in sickle cell disease',
            'Explains need for chest X-ray and empiric antibiotics',
            'Discusses supportive care including oxygen, hydration, and pain control',
            'Describes indications for simple vs exchange transfusion',
            'Addresses prevention strategies including hydroxyurea',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may recognize this as a pain crisis but is concerned by new chest pain and breathing trouble',
            concerns: 'Fear of serious complication like respiratory failure; frustration with frequent hospitalizations and impact on life',
            expectations: 'Expects effective pain relief, treatment for breathing difficulty, and strategies to reduce future crises',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case058SickleCellCrisis;
