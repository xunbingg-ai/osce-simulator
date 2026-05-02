import { CaseData } from '@/types';

const case054IronDeficiencyAnemia: CaseData = {
  _id: 'case-054-iron-deficiency-anemia',
  case_id: 'Case 054 - Increasing Fatigue and Exercise Intolerance',
  case_name: 'Increasing Fatigue and Exercise Intolerance',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 52,
    gender: 'M',
    occupation: 'not specified — presents to the office',
    chief_complaint: 'Increasing fatigue for 4-5 months',
    presentation: {
      setting: 'A healthy 52-year-old man presents to the office complaining of increasing fatigue for the past 4 to 5 months. He exercises daily and has noticed shortness of breath while jogging.',
      duration: '4-5 months, progressive',
      hpi: {
        onset: 'Gradual onset over 4-5 months',
        site: 'Generalized — fatigue and exertional dyspnea',
        character: 'Progressive fatigue and shortness of breath with exercise',
        radiation: 'N/A',
        severity: 'Moderate — interferes with daily exercise routine',
        time_course: 'Progressive over 4-5 months',
        exacerbating_factors: ['Exercise (jogging)'],
        relieving_factors: ['Rest'],
      },
    },
    symptoms: {
      constitutional: {
        fatigue: 'Progressive for 4-5 months',
        weight_loss: 'A few pounds intentional with diet and exercise',
      },
      respiratory: {
        dyspnea_on_exertion: 'While jogging',
        denies_orthopnea: true,
        denies_paroxysmal_nocturnal_dyspnea: true,
      },
      cardiovascular: {
        systolic_ejection_murmur: true,
        denies_palpitations: true,
        denies_ankle_swelling: true,
      },
      others: {
        gastrointestinal: {
          abdominal_pain: 'Vague left-sided abdominal pain off and on for a few months, unrelated to food',
          denies_bowel_changes: true,
          denies_melena: true,
          denies_hematochezia: true,
          denies_nausea_vomiting: true,
        },
        musculoskeletal: {
          joint_pain: 'Occasional — uses over-the-counter ibuprofen',
        },
      },
      negatives: {
        fever: false,
        chills: false,
        orthopnea: false,
        paroxysmal_nocturnal_dyspnea: false,
        ankle_swelling: false,
        melena: false,
        hematochezia: false,
        lymphadenopathy: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No chronic medical conditions', 'Generally healthy'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Over-the-counter ibuprofen frequently for joint pain'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may attribute fatigue to aging or overexertion from daily exercise',
      concerns: 'Worried that progressive fatigue and shortness of breath may signal a serious underlying condition',
      expectations: 'Expects explanation for worsening exercise tolerance and a treatment plan',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why?',
      answer: 'Iron-deficiency anemia secondary to chronic blood loss. The patient has microcytic anemia (Hgb 8.2 g/dL) with pallor on examination, regular NSAID use (ibuprofen) which can cause erosive gastritis, and absent other causes of anemia. In a 52-year-old man, iron-deficiency anemia indicates GI tract blood loss until proven otherwise.',
    },
    {
      question: 'What is your next diagnostic step?',
      answer: 'Analyze the complete blood count (CBC), particularly the mean corpuscular volume (MCV), to determine if the anemia is microcytic, normocytic, or macrocytic. Also assess the leukocyte count and platelet count. If microcytic, confirm with iron studies: serum ferritin, total iron-binding capacity (TIBC), and serum iron.',
    },
    {
      question: 'What are the risk factors for iron-deficiency anemia?',
      answer: 'NSAID or anticoagulant use, iron-poor dietary intake, GI disorders (celiac disease, autoimmune gastritis), menorrhagia in women, pregnancy, gastrectomy, malabsorption syndromes, and GI malignancies. In men and postmenopausal women, GI blood loss is the most common cause.',
    },
    {
      question: 'How do you differentiate iron-deficiency anemia from other microcytic anemias?',
      answer: 'Iron-deficiency anemia: low ferritin (<15 mcg/L), high TIBC (>360 mcg/dL), low saturation (<10%). Anemia of chronic disease: normal/high ferritin, low TIBC, low saturation. Thalassemia: normal ferritin, normal TIBC, normal/high saturation, abnormal hemoglobin electrophoresis. Sideroblastic anemia: normal/high ferritin, normal TIBC, normal/high saturation, ringed sideroblasts on bone marrow biopsy.',
    },
    {
      question: 'What is the treatment for iron-deficiency anemia?',
      answer: 'Oral ferrous sulfate 325 mg two to three times daily (130-195 mg elemental iron). Correction occurs within 6 weeks, but therapy should continue for at least 6 months to replenish iron stores. Side effects include constipation, nausea, and abdominal cramping. Parenteral iron is indicated for malabsorption or intolerance. Most importantly, the underlying cause of iron loss must be identified — in men and postmenopausal women, endoscopic evaluation of the GI tract is required.',
    },
    {
      question: 'Why is endoscopic evaluation necessary in this patient?',
      answer: 'In postmenopausal women and adult men, iron-deficiency anemia indicates GI tract blood loss until proven otherwise. Colon cancer is the most serious possibility. This patient uses NSAIDs which may predispose to erosive gastritis. Once iron-deficiency anemia is confirmed, a thorough evaluation including upper and lower GI endoscopy is needed to identify the source of blood loss.',
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
            'Avoids medical jargon — uses accessible language',
            'Shows empathy toward fatigue and exercise limitations',
            'Addresses patient concerns about progressive symptoms',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Generalized fatigue, exertional dyspnea',
            Onset: 'Gradual over 4-5 months',
            Character: 'Progressive fatigue, shortness of breath when jogging',
            Radiation: 'N/A',
            Associated_symptoms: 'Pallor, occasional joint pain, vague left-sided abdominal pain',
            Time_course: 'Progressive over 4-5 months with intentional weight loss',
            Exacerbating_relieving: 'Worse with exercise; relieved by rest',
            Severity: 'Moderate — interferes with daily exercise routine',
          },
          specific_history: [
            'Quantify exercise tolerance — distance, duration before dyspnea',
            'NSAID use — frequency, duration, dose of ibuprofen',
            'Dietary history — iron intake, vegetarian diet',
            'GI symptoms — abdominal pain, bowel habit changes, blood in stool',
            'History of anemia or prior blood counts',
            'Family history of anemia or GI malignancies',
            'Medication review — any anticoagulants',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies iron-deficiency anemia as most likely diagnosis',
            'Explains need for CBC with MCV to characterize anemia type',
            'Describes iron studies (ferritin, TIBC) for confirmation',
            'Emphasizes need to identify underlying cause (GI evaluation in men)',
            'Outlines treatment plan with oral iron supplementation',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may attribute fatigue to aging or overexertion',
            concerns: 'Concerned that progressive symptoms signal a serious underlying condition, possibly cancer',
            expectations: 'Expects clear diagnosis, explanation, and effective treatment plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case054IronDeficiencyAnemia;
