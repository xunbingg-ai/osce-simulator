import { CaseData } from '@/types';

const case016Asthma: CaseData = {
  _id: 'case-016-asthma',
  case_id: 'Case 016 - Chronic Cough',
  case_name: 'Chronic Cough',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 37,
    gender: 'M',
    occupation: 'not specified — recently started exercise program including jogging',
    chief_complaint: 'Cough for 3 months, worsening with exercise and at night',
    presentation: {
      setting: 'Patient presents to the office with a complaint of cough that began approximately 3 months ago. It has become progressively more annoying. He recently started an exercise program after a sedentary lifestyle.',
      duration: '3 months, progressive',
      hpi: {
        onset: 'Gradual onset approximately 3 months ago',
        site: 'Respiratory — cough',
        character: 'Nonproductive (dry) cough, worse at night and after exercise',
        radiation: 'N/A',
        severity: 'Moderate — progressive, interfering with exercise tolerance',
        time_course: 'Progressive over 3 months',
        exacerbating_factors: ['Night-time (nocturnal cough)', 'Exercise (especially jogging)'],
        relieving_factors: [],
      },
    },
    symptoms: {
      respiratory: {
        cough: 'Nonproductive, worse at night and after exercise',
        wheezes: 'Occasional expiratory wheezes on forced expiration',
        dyspnea_on_exertion: 'Runs out of breath earlier than previously',
        chest_radiograph: 'Normal',
      },
      cardiovascular: {
        blood_pressure: '134/78 mm Hg',
      },
      constitutional: {
        exercise_intolerance: true,
      },
      negatives: {
        fever: false,
        hemoptysis: false,
        weight_loss: false,
        nasal_congestion: false,
        headaches: false,
        sputum_production: false,
        smoking: false,
        prior_lung_disease: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior lung disease'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented — no ACE inhibitors (important cause of chronic cough)'],
    },
    social_history: {
      smoking: 'Nonsmoker',
      alcohol: 'Not documented',
      occupation: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may think the cough is due to being out of shape or having a lingering respiratory infection',
      concerns: 'Worried that the cough and exercise intolerance indicate an underlying lung problem',
      expectations: 'Expects a diagnosis and effective treatment to allow him to continue his exercise program',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and how would you confirm it?',
      answer: 'Bronchial asthma (likely cough-variant asthma). The diagnosis is confirmed by spirometry demonstrating reversible airflow obstruction: FEV1/FVC <0.7 with improvement in FEV1 or FVC of >12% and >200 mL after bronchodilator inhalation. If spirometry is normal, bronchoprovocation testing with methacholine (positive if FEV1 drops by 20%) can confirm bronchial hyperresponsiveness. A normal chest radiograph and absence of ACE inhibitor use further support the diagnosis.',
    },
    {
      question: 'What are the three most common causes of chronic cough in an immunocompetent nonsmoker with a normal chest radiograph?',
      answer: '(1) Upper airway cough syndrome (UACS) due to postnasal drip syndrome — the most common cause. Often presents with throat clearing, nasal discharge, sensation of liquid in throat. Treated with first-generation antihistamine plus decongestant for nonallergic causes, or newer antihistamines plus nasal corticosteroids for allergic rhinitis. (2) Asthma — especially cough-variant asthma, where cough may be the only symptom. Confirmed by spirometry with reversibility or methacholine challenge. (3) Gastroesophageal reflux disease (GERD) — cough may be the sole manifestation, sometimes without perceived reflux. Treated with lifestyle modification and proton pump inhibitors.',
    },
    {
      question: 'What is cough-variant asthma and how is it managed?',
      answer: 'Cough-variant asthma presents with a dry cough as the predominant or only symptom, without classic wheezing. It is worse at night, with exercise, and during respiratory infections. Diagnosis requires spirometry with bronchodilator reversibility or a positive methacholine challenge. Management follows a stepwise approach: Step 1 (mild intermittent): short-acting inhaled beta-2 agonist as needed. Step 2 (mild persistent): low-dose inhaled corticosteroid (preferred) or leukotriene modifier. Step 3 (moderate persistent): low-medium dose inhaled steroid plus long-acting beta-2 agonist (LABA). Step 4 (severe persistent): high-dose inhaled steroid plus LABA, with oral steroids if needed.',
    },
    {
      question: 'What is the initial diagnostic workup for chronic cough?',
      answer: 'Step 1: Discontinue ACE inhibitor if the patient is using one (cough may resolve after the first dose or after months of therapy). Step 2: Chest radiograph to rule out tumor, infection, or structural lung disease. Step 3: Avoid environmental irritants. If persistent, evaluate for the three most common causes: UACS (trial of antihistamine/decongestant), asthma (spirometry ± methacholine challenge), and GERD (empiric PPI trial). Response to empiric therapy often confirms the diagnosis. If suspicion for carcinoma is high, proceed to high-resolution CT thorax or bronchoscopy.',
    },
    {
      question: 'What is the role of GERD in chronic cough, and how is it treated?',
      answer: 'GERD can cause chronic cough through aspiration and vagal stimulation. It may be clinically silent — cough can be the sole manifestation, sometimes without heartburn or dyspepsia. Treatment: lifestyle modification (low-fat diet, head-of-bed elevation, avoid caffeine/alcohol/chocolate, weight reduction) plus medical therapy with H2 receptor antagonists (e.g., famotidine) or proton pump inhibitors (e.g., omeprazole). Full resolution of cough may require 2-3 months of therapy. If no response, consider 24-hour esophageal pH monitoring or EGD to confirm diagnosis.',
    },
    {
      question: 'What is the stepped approach to asthma management?',
      answer: 'Step 1 (Mild intermittent): symptoms <2x/week, no daily medication, short-acting beta-2 agonist (SABA) as needed. Step 2 (Mild persistent): symptoms >2x/week but <1x/day, nocturnal >2x/month — low-dose inhaled corticosteroid (ICS), alternative cromolyn/leukotriene modifier. Step 3 (Moderate persistent): daily symptoms, nocturnal >1x/week — low-medium dose ICS + LABA (preferred) or medium-dose ICS, alternative leukotriene modifier/theophylline. Step 4 (Severe persistent): continual symptoms, frequent nocturnal — high-dose ICS + LABA, add oral steroids if needed. All steps: SABA for quick relief.',
    },
    {
      question: 'When should a pulmonologist be consulted for chronic cough?',
      answer: 'Referral to a pulmonologist is recommended when diagnostic and empiric therapy options for the three most common causes (UACS, asthma, GERD) have been exhausted without resolution. Additionally, refer if there is high suspicion for bronchogenic carcinoma (hemoptysis, weight loss, smoking history, focal findings on CXR), if high-resolution CT or bronchoscopy is being considered, or if the cough is accompanied by other concerning findings such as clubbing or lymphadenopathy.',
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
            'Polite introduction and attentive listening to the patient\'s history',
            'Avoids medical jargon — explains asthma, spirometry, and bronchoprovocation in accessible terms',
            'Shows empathy for how chronic cough interferes with daily activities and exercise goals',
            'Addresses patient concerns about exercise limitations',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Respiratory — cough',
            Onset: 'Gradual onset 3 months ago',
            Character: 'Nonproductive (dry) cough',
            Associated_symptoms: 'Wheezing, dyspnea, sputum production, postnasal drip, throat clearing, nasal discharge, heartburn, regurgitation, dyspepsia',
            Time_course: 'Progressive over 3 months',
            Exacerbating_relieving: 'Worse at night, with exercise, cold air, or after meals',
            Severity: 'Progressive — interfering with exercise program',
          },
          specific_history: [
            'Medication history — ACE inhibitors (captopril, lisinopril, enalapril) are a common cause',
            'Environmental exposures — occupational irritants, pets, dust, mold, seasonal allergens',
            'Postnasal drip symptoms — nasal congestion, sinus pain, frequent throat clearing',
            'GERD symptoms — heartburn, regurgitation, sour taste in mouth, dyspepsia',
            'Smoking history — quantify pack-years (patient is nonsmoker)',
            'Occupational history — possible occupational asthma from workplace exposures',
            'Exercise history — timing and severity of cough related to exercise',
          ],
          rule_out_differentials: [
            'Postinfectious cough — recent respiratory infection, self-limited',
            'ACE inhibitor-induced cough — medication history',
            'Bronchogenic carcinoma — hemoptysis, weight loss, smoking history, focal CXR finding',
            'Tuberculosis — night sweats, weight loss, hemoptysis, apical CXR changes',
            'Sarcoidosis — cough, arthralgias, erythema nodosum, bilateral hilar lymphadenopathy',
            'Heart failure — orthopnea, paroxysmal nocturnal dyspnea, crackles, elevated JVP, S3',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies asthma (likely cough-variant) as most likely diagnosis',
            'Explains need for spirometry with bronchodilator reversibility testing and possible methacholine challenge',
            'Discusses the three most common causes of chronic cough (UACS, asthma, GERD)',
            'Outlines stepwise management approach based on asthma severity',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may have attributed the cough to being out of shape or a lingering infection; may not have considered asthma as a cause',
            concerns: 'Worried that the progressive symptoms indicate a serious underlying lung condition and may prevent him from continuing exercise',
            expectations: 'Expects a clear diagnosis and simple treatment to control cough so he can resume jogging and daily activities without limitation',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case016Asthma;
