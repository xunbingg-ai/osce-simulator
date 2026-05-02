import { CaseData } from '@/types';

const case014PE: CaseData = {
  _id: 'case-014-pe',
  case_id: 'Case 014 - Sudden Onset Dyspnea',
  case_name: 'Sudden Onset Dyspnea',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 48,
    gender: 'F',
    occupation: 'not specified — at home making dinner',
    chief_complaint: 'Sudden onset of dyspnea',
    presentation: {
      setting: 'Patient was standing in the kitchen making dinner when she suddenly felt as if she could not catch her breath. Brought to emergency center.',
      duration: 'Acute, sudden onset',
      hpi: {
        onset: 'Sudden onset while standing in kitchen',
        site: 'Dyspnea — respiratory; chest pain described as pleuritic',
        character: 'Sudden severe shortness of breath with sharp pleuritic chest pain',
        radiation: 'No radiation',
        severity: 'Severe — brought to emergency',
        time_course: 'Acute onset, persistent',
        exacerbating_factors: ['Deep breathing worsens pain (pleuritic)'],
        relieving_factors: ['None at presentation'],
      },
    },
    symptoms: {
      respiratory: {
        dyspnea: 'Sudden onset, severe',
        pleuritic_chest_pain: 'Sharp, worse with deep breathing',
        cough: 'May be present — possibly with hemoptysis',
        tachypnea: true,
        oxygen_desaturation: 'Likely present',
      },
      cardiovascular: {
        tachycardia: 'Likely present (common PE finding)',
        syncope_near_syncope: 'Possible with large PE',
      },
      constitutional: {
        anxiety: 'Sense of impending doom',
        diaphoresis: 'Possible',
      },
      vte_risks: {
        recent_surgery: 'Unknown — ask about',
        prolonged_immobility: 'Unknown — ask about travel, bed rest',
        prior_dvt_pe: 'Unknown — ask about',
        leg_swelling_pain: 'Ask about unilateral calf swelling/pain',
        cancer_history: 'Unknown — ask about',
        pregnancy_postpartum: 'Unknown — ask about',
        ocp_hrt: 'Unknown — ask about',
      },
      negatives: {
        fever: false,
        wheezing: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Unknown — needs full history'],
      negatives: ['Ask about prior thromboembolic events'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Unknown — ask about OCPs, HRT'],
    },
    social_history: {
      smoking: 'Ask about smoking history',
      alcohol: 'Not documented',
      travel: 'Ask about recent long-distance travel',
      family: 'Not documented',
    },
    family_history: 'Ask about family history of VTE or thrombophilia',
    ice: {
      ideas: 'Patient may think she is having a heart attack or panic attack',
      concerns: 'Terrified by sudden inability to breathe — fears she is dying',
      expectations: 'Expects immediate diagnosis and treatment to relieve dyspnea',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Pulmonary embolism. Sudden onset dyspnea with pleuritic chest pain in a middle-aged woman requires urgent evaluation for PE. Risk stratification using Wells criteria is needed.',
    },
    {
      question: 'What are the risk factors for venous thromboembolism (VTE)?',
      answer: 'Virchow triad: stasis (immobility, travel, surgery), hypercoagulability (malignancy, pregnancy, OCPs, thrombophilia, smoking), endothelial injury (surgery, trauma, prior DVT). Specific risks: recent surgery, prolonged immobilization, malignancy, pregnancy/postpartum, oral contraceptives/HRT, obesity, smoking, age >60, prior DVT/PE, family history, known thrombophilia.',
    },
    {
      question: 'What is the Wells criteria for PE?',
      answer: 'Clinical signs/symptoms of DVT (3 pts), PE is #1 diagnosis or equally likely (3 pts), HR >100 (1.5 pts), immobilization/surgery within 4 weeks (1.5 pts), prior DVT/PE (1.5 pts), hemoptysis (1 pt), malignancy (1 pt). Score: >6 = high probability, 2-6 = moderate, <2 = low. Use PERC rule for very low risk patients.',
    },
    {
      question: 'What diagnostic tests would you order?',
      answer: 'Initial: pulse oximetry, ABG (A-a gradient, hypocapnia), ECG (sinus tachycardia, S1Q3T3 pattern, RV strain), CXR (usually normal or nonspecific — Westermark sign, Hamptons hump). Definitive: CT pulmonary angiography (CTPA) — gold standard. V/Q scan if CTPA contraindicated (renal failure, contrast allergy). D-dimer for low/moderate probability patients (negative rules out PE). Echo may show RV strain/dilation.',
    },
    {
      question: 'How do you risk-stratify PE severity?',
      answer: 'Massive PE: Sustained hypotension (SBP <90 mmHg for >15 min) or requiring inotropes, or cardiac arrest — mortality >50%. Submassive PE: RV dysfunction on echo/CT + elevated troponin/BNP, but normotensive. Low-risk PE: Normotensive, no RV dysfunction, normal biomarkers. This determines treatment (thrombolytics vs anticoagulation alone).',
    },
    {
      question: 'What is the management of acute PE?',
      answer: 'Massive PE: Thrombolysis (tPA) or surgical/catheter embolectomy + anticoagulation. Submassive PE: Anticoagulation (heparin/LMWH bridging to warfarin or DOAC). Low-risk PE: DOAC (rivaroxaban, apixaban) or LMWH → warfarin. IVC filter if anticoagulation is contraindicated. Duration: 3-6 months for provoked, extended/lifelong for unprovoked/recurrent or ongoing risk factors.',
    },
    {
      question: 'What is the S1Q3T3 pattern on ECG?',
      answer: 'Classic but not sensitive PE finding: S wave in lead I, Q wave and inverted T wave in lead III. Represents acute right heart strain. Other ECG findings: sinus tachycardia, right axis deviation, RBBB, P pulmonale, T wave inversion in V1-V4 (RV strain pattern).',
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
            'Calm, reassuring approach for acutely dyspneic patient',
            'Avoid jargon — explain what a PE is in accessible terms',
            'Acknowledge the frightening nature of sudden dyspnea',
            'Keep patient informed of what is happening during workup',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Onset: 'Sudden, while standing in kitchen',
            Character: 'Severe dyspnea with pleuritic chest pain',
            Associated_symptoms: 'Cough, hemoptysis, palpitations, anxiety, sense of doom',
            Time_course: 'Acute onset, persistent',
            Exacerbating: 'Deep breathing (pleuritic)',
            Severity: 'Severe — brought to emergency',
          },
          vte_risk_factors: [
            'Recent surgery or hospitalization',
            'Prolonged travel or immobilization',
            'Prior DVT or PE',
            'Malignancy',
            'Pregnancy or postpartum status',
            'Oral contraceptives or HRT use',
            'Family history of VTE or thrombophilia',
            'Smoking',
          ],
          symptoms_of_dvt: [
            'Unilateral leg swelling or pain',
            'Calf tenderness',
            'Erythema or warmth of leg',
          ],
          rule_out_differentials: [
            'ACS/MI — ECG, troponin',
            'Pneumothorax — CXR',
            'Pneumonia — fever, CXR findings',
            'Aortic dissection — unequal pulses, widened mediastinum',
            'Anxiety/panic attack — diagnosis of exclusion',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly suspects PE based on acute dyspnea and pleuritic pain',
            'Calculates Wells score and pre-test probability',
            'Explains diagnostic algorithm (D-dimer vs CTPA)',
            'Discusses anticoagulation options and duration',
            'Addresses need to identify underlying cause',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think this is a heart attack or "just anxiety"',
            concerns: 'Fear of dying — sudden dyspnea is terrifying',
            expectations: 'Expects quick diagnosis, symptom relief, and clear treatment plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case014PE;
