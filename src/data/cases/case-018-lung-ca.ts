// src/data/cases/case-018-lung-ca.ts
import { CaseData } from '@/types';

const case018LungCA: CaseData = {
  _id: 'case-018-lung-ca',
  case_id: 'Case 018 - Hemoptysis with Chronic Cough',
  case_name: 'Hemoptysis with Chronic Cough',
  type: 'general',
  is_general_case: true,
  patient: {
    age: 68,
    gender: 'F',
    occupation: 'not specified',
    chief_complaint: 'Coughing up several tablespoons of bright red blood',
    presentation: {
      setting: 'Patient brought to emergency center after coughing up several tablespoons of bright red blood. For the previous 3-4 months, she has had a chronic nonproductive cough but had not sought medical attention.',
      duration: 'Hemoptysis: acute episode. Chronic cough: 3-4 months.',
      hpi: {
        onset: 'Hemoptysis: acute episode today. Cough: gradual onset 3-4 months ago.',
        site: 'Pulmonary — blood originating from respiratory tract',
        character: 'Bright red blood, several tablespoons. Chronic nonproductive cough.',
        radiation: 'N/A',
        severity: 'Concerning — several tablespoons of frank blood',
        time_course: 'Acute hemoptysis superimposed on chronic cough',
        exacerbating_factors: ['Coughing triggers the bleeding'],
        relieving_factors: ['None documented'],
      },
    },
    symptoms: {
      respiratory: {
        hemoptysis: 'Several tablespoons, bright red blood',
        chronic_cough: '3-4 months, nonproductive (dry)',
        dyspnea: 'Ask about exertional dyspnea, wheezing',
        chest_pain: 'Ask about pleuritic or dull chest pain',
        hoarseness: 'Ask about voice changes (recurrent laryngeal nerve involvement)',
      },
      constitutional: {
        weight_loss: 'Ask about unintentional weight loss',
        loss_of_appetite: 'Ask about',
        fatigue: 'Ask about',
        night_sweats: 'Ask about',
        fever: 'Ask about',
      },
      others: {
        bone_pain_metastasis: 'Ask about (possible bone metastasis)',
        headache_brain_metastasis: 'Ask about (brain metastasis)',
        neurological_symptoms: 'Ask about',
      },
      negatives: {
        known_tb_exposure: false,
        prior_tb: false,
        anticoagulant_use: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Unknown — needs thorough history'],
      negatives: ['Ask about prior respiratory disease, TB, cancer history'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Unknown — ask about anticoagulants, antiplatelets'],
    },
    social_history: {
      smoking: 'Must quantify — key risk factor for lung cancer',
      alcohol: 'Ask about',
      family: 'Ask about living situation, who can help',
    },
    family_history: 'Ask about family history of malignancy, especially lung cancer',
    ice: {
      ideas: 'Patient likely thinks this is something serious — "Why am I coughing up blood?"',
      concerns: 'Fears cancer, fears dying, worried about what this means for her future',
      expectations: 'Wants to know what is causing the bleeding and how to stop it',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why?',
      answer: 'Primary lung cancer, likely squamous cell carcinoma (central location, association with smoking, presents with hemoptysis). An elderly patient with significant smoking history presenting with chronic cough and acute hemoptysis must be evaluated for lung malignancy.',
    },
    {
      question: 'What is the differential diagnosis for hemoptysis?',
      answer: 'Pulmonary: Lung cancer (especially squamous cell), TB, bronchiectasis, acute bronchitis, pneumonia (especially pneumococcal, Klebsiella), lung abscess, aspergilloma, pulmonary embolism with infarction, AVM. Cardiovascular: Mitral stenosis (ruptured bronchial veins), pulmonary edema (pink frothy), pulmonary hypertension. Other: Bleeding disorder, anticoagulant use, Goodpasture syndrome, granulomatosis with polyangiitis, foreign body.',
    },
    {
      question: 'How do you differentiate hemoptysis from hematemesis?',
      answer: 'Hemoptysis: Bright red, frothy/airy, mixed with sputum, alkaline pH, preceded by cough/tickle in throat, history of lung disease. Hematemesis: Dark red/brown (coffee ground), mixed with food particles, acidic pH, preceded by nausea/vomiting, history of GI/liver disease.',
    },
    {
      question: 'What investigations would you order?',
      answer: 'Initial: CXR (mass, nodule, infiltrate, atelectasis, pleural effusion), CBC (anemia, thrombocytopenia), coagulation profile, sputum cytology. Definitive: CT chest with contrast (characterize mass, hilar/mediastinal LAD, staging). Bronchoscopy with biopsy (direct visualization, tissue diagnosis). PET-CT for staging. PFTs if surgery contemplated.',
    },
    {
      question: 'What are the histological types of lung cancer and their characteristics?',
      answer: 'NSCLC (85%): Adenocarcinoma (most common overall, peripheral, non-smokers possible, TTF1+), Squamous cell carcinoma (central, cavitary, hypercalcemia from PTHrP, strongly smoking-related), Large cell carcinoma (peripheral, aggressive). SCLC (15%): Central, aggressive, early metastasis, paraneoplastic syndromes (SIADH, Cushing, Lambert-Eaton), strongly smoking-related, treated with chemotherapy not surgery.',
    },
    {
      question: 'What paraneoplastic syndromes are associated with lung cancer?',
      answer: 'SCLC: SIADH (hyponatremia), ectopic ACTH (Cushing syndrome), Lambert-Eaton myasthenic syndrome. Squamous cell: Hypercalcemia (PTHrP). Adenocarcinoma: Hypertrophic pulmonary osteoarthropathy (HPOA), Trousseau syndrome (migratory thrombophlebitis). Pancoast tumor (superior sulcus): Horner syndrome (ptosis, miosis, anhidrosis) + brachial plexus involvement (C8-T1, hand weakness).',
    },
    {
      question: 'What are the complications to watch for in lung cancer patients?',
      answer: 'SVCO (facial/neck swelling, distended neck veins, dyspnea, headache — emergency), Horner syndrome (Pancoast tumor), malignant pleural effusion, pericardial effusion/tamponade, airway obstruction, hemoptysis (massive — can be fatal), metastases (brain, bone, liver, adrenal), hypercalcemia, thromboembolism (Trousseau syndrome).',
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
            'Calm, empathetic approach — patient is coughing up blood, which is frightening',
            'Avoid jargon — patient may be elderly with limited health literacy',
            'Acknowledge the fear of cancer without jumping to conclusions',
            'Provide reassurance while being honest about the need for workup',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hemoptysis_details: [
            'Amount — quantify (teaspoon, tablespoon, cup)',
            'Frequency — once vs recurrent',
            'Color — bright red vs dark',
            'Mixed with sputum? Frothy?',
            'Duration of this episode',
          ],
          associated_symptoms: [
            'Chest pain — pleuritic? constant? location?',
            'Dyspnea — at rest or exertion?',
            'Weight loss — how much, over what period?',
            'Fever, night sweats (TB vs malignancy)',
            'Hoarseness (recurrent laryngeal nerve)',
            'Bone pain (metastasis)',
            'Headaches, neurological symptoms (brain metastasis)',
          ],
          risk_factors: [
            'Detailed smoking history — pack-years, current vs former',
            'Occupational exposures — asbestos, radon, chemicals, mining',
            'Prior TB or TB exposure',
            'Prior malignancy',
            'Family history of cancer',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains that hemoptysis requires urgent evaluation',
            'Discusses possible causes without prematurely diagnosing cancer',
            'Describes diagnostic workup (CXR → CT → bronchoscopy)',
            'Explains that tissue biopsy is needed for definitive diagnosis',
            'If cancer is found, explains staging and treatment options (surgery, chemotherapy, radiation, immunotherapy)',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient fears this is cancer — especially with chronic cough history',
            concerns: 'Fear of terminal illness, worry about suffering, concern for family',
            expectations: 'Wants clear diagnosis and treatment plan, wants honesty',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case018LungCA;
