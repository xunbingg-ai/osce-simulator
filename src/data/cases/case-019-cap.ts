import { CaseData } from '@/types';

const case019CAP: CaseData = {
  _id: 'case-019-cap',
  case_id: 'Case 019 - Productive Cough with Fever',
  case_name: 'Productive Cough with Fever',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 44,
    gender: 'M',
    occupation: 'Not specified — presenting to emergency department',
    chief_complaint: 'Shaking chills, fever, and productive cough',
    presentation: {
      setting: 'Patient presents to the emergency department with sudden onset of shaking chills, fever, and productive cough.',
      duration: '1 week of mild symptoms with acute worsening over the past 24 hours',
      hpi: {
        onset: 'Sudden onset last night with shaking chills and fever',
        site: 'Right-sided chest pain',
        character: 'Productive cough with nonbloody sputum production',
        radiation: 'No radiation',
        severity: 'Moderate — patient is comfortable except when coughing',
        time_course: 'Mild nasal congestion and generalized achiness for 1 week; acute worsening last night with fever, fatigue, productive cough, and right-sided chest pain',
        exacerbating_factors: ['Walking (exertional dyspnea when walking dog)', 'Coughing'],
        relieving_factors: [],
      },
    },
    symptoms: {
      respiratory: {
        cough: true,
        sputum_production: true,
        sputum_character: 'Nonbloody',
        chest_pain: true,
        chest_pain_pleuritic: true,
        dyspnea_on_exertion: true,
        respiratory_rate: 'Normal',
        oxygen_saturation: '100% on room air',
        breath_sounds: 'Bronchial breath sounds and end-inspiratory crackles in right lower lung field',
      },
      constitutional: {
        fever: true,
        temperature: '39°C (102.2°F)',
        chills: true,
        shaking_chills: true,
        fatigue: true,
        generalized_achiness: true,
      },
      negatives: {
        hemoptysis: false,
        hypoxia: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Mild intermittent asthma', 'Hypertension', 'Hyperlipidemia'],
      negatives: ['No prior pneumonia', 'No COPD', 'No diabetes', 'No immunosuppression'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Lisinopril', 'Atorvastatin'],
    },
    social_history: {
      smoking: '20 pack-year smoking history (1 pack per day for 20 years)',
      alcohol: '2-3 glasses of wine per week',
      family: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely thinks he has a severe chest infection or flu given the fever and cough',
      concerns: 'Worried about the severity of symptoms including high fever, chest pain, and difficulty breathing on exertion',
      expectations: 'Expects a diagnosis, treatment including medication to relieve symptoms, and guidance on recovery',
    },
  },
  questions: [
    {
      question: 'What is the most likely causative organism in community-acquired pneumonia for this patient demographic?',
      answer: 'Streptococcus pneumoniae is the most common isolate. Other possible organisms include Haemophilus influenzae, Staphylococcus aureus, group A streptococci, Moraxella catarrhalis, viruses, Mycoplasma pneumoniae, Chlamydia pneumoniae, and Legionella species.',
    },
    {
      question: 'What clinical criteria are used to determine inpatient versus outpatient therapy for CAP?',
      answer: 'The CURB-65 score: Confusion (1 point), Urea >20 mg/dL (1 point), Respiratory rate >30 breaths/min (1 point), Blood pressure systolic <90 mm Hg (1 point), Age >65 (1 point). Score 0-1: outpatient treatment. Score 2: hospitalization. Score 3 or greater: assess for ICU admission. The Pneumonia Severity Index (PSI) can also be used but is more laborious.',
    },
    {
      question: 'What is the role of chest x-ray in the diagnosis of pneumonia?',
      answer: 'Chest radiography is required to diagnose CAP, define the extent of pneumonia, and look for complications such as parapneumonic effusion or lung abscess. The pattern of infiltration can yield diagnostic clues: dense lobar consolidation suggests S. pneumoniae, diffuse interstitial opacities suggest viral or Pneumocystis pneumonia, and cavitation suggests necrotizing infection.',
    },
    {
      question: 'What is the difference between chemical pneumonitis and infectious aspiration pneumonia?',
      answer: 'Chemical pneumonitis is a noninfectious, chemically induced inflammation caused by inhalation of acidic gastric contents in patients with decreased consciousness. Treatment is supportive. If patients fail to improve within 48 hours, antibiotics can be started. Infectious aspiration pneumonia is a pulmonary infection caused by aspiration of colonized oropharyngeal secretions, seen in patients with impaired swallowing. Treatment is antibiotics covering oral anaerobes, gram-negative organisms, S. pneumoniae, and H. influenzae.',
    },
    {
      question: 'What empiric antibiotic therapy is appropriate for outpatient CAP?',
      answer: 'For outpatient treatment of CAP, options include macrolide antibiotics (azithromycin), doxycycline, or antipneumococcal fluoroquinolones (moxifloxacin or levofloxacin). Antibiotics should be administered for a minimum of 5 days. For hospitalized patients, intravenous third-generation cephalosporin plus a macrolide (or antipneumococcal fluoroquinolone) is typically used.',
    },
    {
      question: 'What are the major risk factors for developing community-acquired pneumonia?',
      answer: 'Common CAP risk factors include alcohol abuse, smoking, chronic obstructive pulmonary disease (COPD), immunosuppression, and recent influenza infection. Additional epidemiologic risk factors include specific exposures such as bird exposure (C. psittaci), travel to endemic areas (coccidioidomycosis), and HIV/AIDS (P. jiroveci).',
    },
    {
      question: 'What is the appropriate next step after clinical diagnosis of pneumonia in this patient and why?',
      answer: 'The next step is to confirm with chest x-ray, then risk stratify using CURB-65. This patient is 44 (0 points), has no confusion, normal respiratory rate, normal blood pressure — CURB-65 score 0. He can be safely treated as an outpatient with oral antibiotics, antipyretics, cough suppressants, and close follow-up in 1-2 weeks.',
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
            'Acknowledges patient discomfort (fever, productive cough, chest pain)',
            'Addresses patient concerns about severity of illness',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Right lower chest / lung field',
            Onset: 'Sudden onset last night with shaking chills',
            Character: 'Productive cough with nonbloody sputum, pleuritic chest pain',
            Radiation: 'Ask about radiation of chest pain',
            Associated_symptoms: 'Fever, chills, dyspnea on exertion, fatigue, generalized achiness, nasal congestion',
            Time_course: '1 week of mild symptoms, acute worsening over 24 hours',
            Exacerbating_relieving: 'Worse with walking and coughing; no relieving factors identified',
            Severity: 'Moderate — ask patient to rate cough and chest pain severity',
          },
          risk_factors: [
            'Smoking history — 20 pack-years',
            'Asthma history',
            'Recent influenza-like illness',
            'Immunocompromised status',
            'Recent hospitalization or antibiotic use',
          ],
          rule_out_differentials: [
            'Influenza — seasonal pattern, myalgias, rapid onset',
            'Acute bronchitis — less systemic toxicity, no consolidation on x-ray',
            'Pulmonary embolism — dyspnea, pleuritic pain, risk factors',
            'Lung cancer — weight loss, hemoptysis, smoking history',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies community-acquired pneumonia as the most likely diagnosis',
            'Explains need for chest x-ray to confirm and assess extent of consolidation',
            'Discusses appropriate empiric antibiotic therapy and symptomatic treatment',
            'Explains risk stratification (CURB-65) and rationale for outpatient vs inpatient management',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely thinks this is a severe chest infection or flu',
            concerns: 'Fear of serious illness, concern about the high fever and chest pain, worry about ability to breathe',
            expectations: 'Expects effective treatment to relieve symptoms and clear guidance on recovery and follow-up',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case019CAP;
