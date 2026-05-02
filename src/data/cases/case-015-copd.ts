import { CaseData } from '@/types';

const case015COPD: CaseData = {
  _id: 'case-015-copd',
  case_id: 'Case 015 - Shortness of Breath',
  case_name: 'Shortness of Breath',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 58,
    gender: 'M',
    occupation: 'not specified — presents to office',
    chief_complaint: 'Shortness of breath, worsening dyspnea on exertion and at rest',
    presentation: {
      setting: 'Patient comes to the office because of shortness of breath. He has experienced mild dyspnea on exertion for a few years, but it has recently worsened with minimal exercise and now occurs at rest. He spends the night sitting up in a chair trying to sleep.',
      duration: 'Years (chronic), with acute worsening over recent weeks',
      hpi: {
        onset: 'Gradual onset years ago with progressive worsening',
        site: 'Respiratory — shortness of breath',
        character: 'Labored breathing, difficulty reclining, productive cough with yellowish-brown sputum each morning',
        radiation: 'N/A',
        severity: 'Severe — dyspnea at rest, cannot lie flat, using accessory muscles of respiration',
        time_course: 'Chronic for years with acute exacerbation; symptoms have worsened significantly in recent weeks and months',
        exacerbating_factors: ['Minimal exertion', 'Lying flat (orthopnea)'],
        relieving_factors: ['Sitting upright (tripod position)'],
      },
    },
    symptoms: {
      respiratory: {
        dyspnea: 'Worsening — on minimal exertion and at rest',
        cough: 'Productive cough with yellowish-brown sputum every morning throughout the year',
        wheezes: 'Bilaterally',
        rhonchi: 'Bilaterally',
        crackles: 'None',
        accessory_muscle_use: true,
        tripod_position: 'Sitting forward, arms braced on knees',
        barrel_chest: 'Increased anteroposterior diameter of chest wall',
        hoover_sign: 'Inward movement of lower rib cage with inspiration',
      },
      cardiovascular: {
        heart_rate: '96 bpm',
        blood_pressure: '135/85 mm Hg',
        heart_sounds: 'Distant but regular',
        jugular_venous_pressure: 'Normal',
      },
      constitutional: {
        temperature: '97.6 °F',
        cyanosis: 'Perioral cyanosis — lips cyanotic',
      },
      negatives: {
        fever: false,
        chills: false,
        chest_pain: false,
        lower_extremity_edema: false,
        clubbing: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Unknown prior inhaler use — prescribed at urgent care but patient does not recall name'],
      negatives: ['No known heart failure', 'No known diabetes'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Prescribed inhalers at urgent care (names not remembered)'],
    },
    social_history: {
      smoking: 'Two packs per day since age 15 (~86 pack-years)',
      alcohol: 'Does not drink',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient has likely attributed his slowly worsening symptoms to aging or his long-term smoking habit',
      concerns: 'Fear of suffocation/smothering — worried that his breathing will continue to worsen',
      expectations: 'Expects effective treatment to relieve his breathing difficulty and allow him to sleep lying down again',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what are the next diagnostic steps?',
      answer: 'Chronic obstructive pulmonary disease (COPD) with acute exacerbation. Next diagnostic steps: (1) Arterial blood gas (ABG) to assess oxygenation (PaO2) and ventilation (PaCO2) and acid-base status. (2) Chest x-ray to evaluate lung parenchyma and identify triggers (e.g., pneumonia). (3) Spirometry to confirm diagnosis (FEV1/FVC <0.7 is diagnostic) and classify severity by GOLD stage. (4) Pulse oximetry for continuous monitoring.',
    },
    {
      question: 'What is the difference between chronic bronchitis and emphysema?',
      answer: 'Chronic bronchitis: diagnosed clinically — excessive bronchial mucus secretion with productive cough for ≥3 months in at least 2 consecutive years. Patients are often "blue bloaters" (overweight, edematous, cyanotic) due to chronic hypoxemia. Emphysema: diagnosed pathologically — abnormal permanent enlargement of air spaces distal to terminal bronchioles with wall destruction. Patients are often "pink puffers" (thin, ruddy cheeks, pursed-lip breathing). Most COPD patients have elements of both.',
    },
    {
      question: 'How do you classify COPD severity using spirometry?',
      answer: 'Using post-bronchodilator FEV1 percent predicted (GOLD staging): GOLD 1 (Mild): FEV1 ≥80% predicted. GOLD 2 (Moderate): FEV1 50-79%. GOLD 3 (Severe): FEV1 30-49%. GOLD 4 (Very severe): FEV1 <30%. FEV1/FVC <0.7 is required for diagnosis of airflow obstruction at all stages. Spirometry also shows reduced FEV1/FVC with minimal reversibility after bronchodilators, distinguishing COPD from asthma.',
    },
    {
      question: 'What is the immediate treatment for an acute COPD exacerbation?',
      answer: '(1) Supplemental oxygen — controlled low-flow nasal oxygen or Venturi mask to correct hypoxemia without causing severe hypercapnia. Monitor for CO2 retention. (2) Bronchodilators — inhaled beta-agonists (e.g., albuterol) and anticholinergics (e.g., ipratropium) via nebulizer. (3) Systemic glucocorticoids to accelerate lung function improvement. (4) Antibiotics if infection is suspected (purulent sputum, fever). (5) Consider noninvasive positive pressure ventilation (BiPAP/CPAP) for severe hypercapnia to avoid intubation. (6) Endotracheal intubation and mechanical ventilation if signs of acute respiratory failure.',
    },
    {
      question: 'What are the indications for long-term oxygen therapy in COPD?',
      answer: 'Long-term oxygen therapy (>18 hours/day) is indicated for patients with chronic resting hypoxemia: PaO2 ≤55 mm Hg or SaO2 ≤88% on room air. It is the only therapy (along with smoking cessation) proven to reduce mortality in COPD. For patients with PaO2 56-59 mm Hg or SaO2 89% with evidence of pulmonary hypertension, cor pulmonale, or polycythemia, oxygen therapy may also be considered. Use must be continuous (at least 18 h/day) for mortality benefit.',
    },
    {
      question: 'What is the hallmark spirometric finding in COPD, and how does it differ from restrictive lung disease?',
      answer: 'Hallmark of COPD (obstructive): decreased FEV1/FVC ratio (<0.7) — disproportionate reduction in expiratory flow relative to lung volume. FVC may be normal or reduced. TLC is normal or increased. In restrictive lung disease: FEV1 and FVC are both reduced proportionally, so FEV1/FVC is normal. The diagnostic hallmark is decreased TLC. Obstructive diseases have difficulty getting air out; restrictive diseases have difficulty getting air in.',
    },
    {
      question: 'What are the complications of COPD?',
      answer: 'Long-term hypoxemia can cause pulmonary hypertension, secondary erythrocytosis, exercise limitation, and impaired mental functioning. Acute exacerbations may lead to respiratory failure requiring mechanical ventilation. Complications of mechanical ventilation include difficulty extubating, ventilator-associated pneumonia, and pneumothorax. Cor pulmonale (right heart failure from pulmonary hypertension) may develop in advanced disease. Only smoking cessation, supplemental oxygen for chronic hypoxemia, and lung volume reduction surgery in selected patients have been shown to alter natural history and reduce mortality.',
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
            'Polite introduction and calm approach for patient in respiratory distress',
            'Avoids medical jargon — explains COPD, oxygen therapy, and inhalers in accessible terms',
            'Shows empathy for the frightening experience of breathlessness',
            'Addresses patient distress and anxiety about inability to breathe',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Respiratory — shortness of breath, cough',
            Onset: 'Gradual over years, acute worsening over weeks',
            Character: 'Labored breathing, productive cough (yellowish-brown sputum), orthopnea',
            Associated_symptoms: 'Wheezing, sputum production (color, volume, consistency), fever, chest pain, hemoptysis, weight loss, ankle swelling',
            Time_course: 'Chronic with acute exacerbation',
            Exacerbating_relieving: 'Worse with exertion, lying flat; better sitting upright, tripod position',
            Severity: 'Severe — dyspnea at rest, orthopnea, accessory muscle use, perioral cyanosis',
          },
          specific_history: [
            'Smoking history — quantify pack-years, current smoking status, readiness to quit',
            'Alpha-1 antitrypsin deficiency — family history, early-onset emphysema without smoking',
            'Occupational exposures — dust, fumes, chemicals',
            'Prior exacerbations — frequency, hospitalizations, intubations',
            'Home medications — inhalers, oxygen use, compliance',
            'Comorbidities — heart failure, diabetes, osteoporosis, depression',
            'Vaccination history — influenza, pneumococcal',
          ],
          rule_out_differentials: [
            'Heart failure — S3 gallop, crackles, elevated JVP, pulmonary edema on CXR',
            'Asthma — reversible airflow obstruction, responds to bronchodilators, younger age',
            'Pneumonia — fever, infiltrate on CXR, acute onset',
            'Bronchogenic carcinoma — hemoptysis, weight loss, focal lesion on CXR',
            'Pulmonary embolism — acute onset dyspnea, pleuritic chest pain, DVT risk factors',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies COPD with acute exacerbation as most likely diagnosis',
            'Explains need for ABG, CXR, and spirometry for diagnosis and severity assessment',
            'Discusses GOLD stage classification and staging-based treatment',
            'Outlines acute management — oxygen, bronchodilators, steroids, antibiotics',
            'Addresses smoking cessation as the single most effective long-term intervention',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may attribute worsening symptoms to aging or long-term smoking; may not fully understand COPD as a progressive disease',
            concerns: 'Fear of suffocation and progressive decline — worried about being unable to breathe and needing a machine to breathe',
            expectations: 'Expects immediate relief of dyspnea and a clear plan to manage the condition long-term',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case015COPD;
