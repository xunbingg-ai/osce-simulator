// src/data/cases/case-004-hf-as.ts
import { CaseData } from '@/types';

const case004HFAS: CaseData = {
  _id: 'case-004-hf-as',
  case_id: 'Case 004 - Progressive Exertional Dyspnea',
  case_name: 'Progressive Exertional Dyspnea',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 72,
    gender: 'M',
    occupation: 'retired (previously able to garden and mow lawn)',
    chief_complaint: 'Worsening exertional dyspnea',
    presentation: {
      setting: 'Patient presents to clinic complaining of progressive exertional dyspnea over several months. Previously able to work in garden and mow lawn, now becomes short of breath after minimal activity.',
      duration: 'Several months, progressive',
      hpi: {
        onset: 'Gradual onset over several months',
        site: 'Not applicable — primary symptom is dyspnea',
        character: 'Exertional dyspnea — feeling of breathlessness and fatigue with activity',
        radiation: 'N/A',
        severity: 'Progressive — from heavy exertion → now minimal activity triggers symptoms',
        time_course: 'Progressive worsening',
        exacerbating_factors: ['Physical exertion', 'Walking', 'Any activity'],
        relieving_factors: ['Rest'],
      },
    },
    symptoms: {
      cardiovascular: {
        exertional_dyspnea: true,
        fatigue: true,
        reduced_exercise_tolerance: true,
        orthopnea: 'Uses 2 pillows at night',
        pnd: 'Wakes at night gasping for air',
        chest_pain: 'Exertional chest pain/pressure occasionally',
        syncope_near_syncope: 'Feels lightheaded with exertion',
        palpitations: false,
        ankle_edema: 'Mild bilateral ankle swelling',
      },
      respiratory: {
        dyspnea_on_exertion: true,
        cough: 'Occasional dry cough when lying flat',
      },
      constitutional: {
        fatigue: true,
        reduced_activity: 'Unable to perform previously tolerated activities',
      },
      negatives: {
        fever: false,
        hemoptysis: false,
        calf_pain: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Known heart murmur for several years — not previously evaluated', 'Hypertension (well-controlled)'],
      negatives: ['No known coronary artery disease', 'No diabetes', 'No rheumatic fever history'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Antihypertensive medication (specific agent not documented)'],
    },
    social_history: {
      smoking: 'Non-smoker',
      alcohol: 'Occasional',
      family: 'Lives with wife, independent lifestyle',
    },
    family_history: 'No known family history of heart disease',
    ice: {
      ideas: 'Patient thinks he is "just getting older" and losing fitness',
      concerns: 'Worried about losing independence, unable to maintain garden and home',
      expectations: 'Hopes for treatment that will restore his ability to be active',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Heart failure due to critical aortic stenosis. The triad of exertional dyspnea, angina, and syncope/near-syncope in an elderly patient with a known heart murmur is classic for aortic stenosis. Progressive symptoms with orthopnea and PND suggest heart failure.',
    },
    {
      question: 'What physical examination findings would you expect?',
      answer: 'Narrow pulse pressure, delayed and diminished carotid upstroke (pulsus parvus et tardus), sustained PMI (LV heave), systolic crescendo-decrescendo murmur at right upper sternal border radiating to carotids, soft or absent S2 (A2 component), possible S4 gallop, signs of heart failure (rales, elevated JVP, ankle edema).',
    },
    {
      question: 'What are the classic symptoms of aortic stenosis?',
      answer: 'The classic triad: 1. Angina (due to increased myocardial O2 demand from LV hypertrophy), 2. Syncope/near-syncope (due to fixed cardiac output unable to increase with exertion → cerebral hypoperfusion), 3. Dyspnea/Heart failure (due to LV systolic and diastolic dysfunction from chronic pressure overload).',
    },
    {
      question: 'What investigations would you order?',
      answer: 'Echocardiogram (TTE) — gold standard: assess valve area, gradient, LV function/hypertrophy. ECG (LVH with strain pattern, LA enlargement). CXR (cardiomegaly, calcified aortic valve, pulmonary congestion). Cardiac catheterization if surgery planned (assess coronary anatomy). BNP/NT-proBNP for heart failure severity.',
    },
    {
      question: 'How do you classify the severity of aortic stenosis on echocardiogram?',
      answer: 'Mild: valve area >1.5 cm², mean gradient <25 mmHg, peak velocity <3.0 m/s. Moderate: valve area 1.0-1.5 cm², mean gradient 25-40 mmHg, peak velocity 3.0-4.0 m/s. Severe: valve area <1.0 cm², mean gradient >40 mmHg, peak velocity >4.0 m/s.',
    },
    {
      question: 'What is the management of symptomatic severe aortic stenosis?',
      answer: 'Surgical aortic valve replacement (SAVR) or transcatheter aortic valve replacement (TAVR) is definitive treatment. TAVR is preferred for elderly/high-surgical-risk patients. Medical management (diuretics for HF symptoms) is palliative only — does not alter disease progression. Vasodilators should be used cautiously as they can cause hypotension in critical AS. Balloon valvuloplasty is a temporary bridge.',
    },
    {
      question: 'What are the stages of heart failure according to ACC/AHA and NYHA?',
      answer: 'ACC/AHA Stages: A (at risk, no structural disease), B (structural disease, no symptoms), C (structural disease with prior/current symptoms), D (refractory HF requiring advanced interventions). NYHA Classes: I (no limitation), II (symptoms with ordinary activity), III (symptoms with minimal activity), IV (symptoms at rest).',
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
            'Polite introduction, establish rapport',
            'Avoid jargon — explain medical terms to elderly patient',
            'Validate patient concern about losing independence',
            'Show empathy for progressive functional decline',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Onset: 'Gradual, over several months',
            Character: 'Exertional dyspnea, fatigue',
            Associated_symptoms: 'Orthopnea, PND, chest pain, lightheadedness, edema',
            Time_course: 'Progressive worsening',
            Exacerbating_relieving: 'Exacerbated by exertion, relieved by rest',
            Severity: 'Now occurs with minimal activity',
          },
          cardiac_history: [
            'Duration and severity of heart murmur',
            'Prior echocardiogram results',
            'History of rheumatic fever',
            'Syncopal or near-syncopal episodes',
          ],
          heart_failure_symptoms: [
            'Orthopnea details — number of pillows, when started',
            'PND — frequency, duration of episodes',
            'Edema — extent, timing, pitting vs non-pitting',
            'Exercise tolerance — quantify distance/time',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies critical aortic stenosis as underlying cause',
            'Explains that symptoms (dyspnea, angina, near-syncope) are due to narrowed valve',
            'Describes need for echocardiogram to confirm and assess severity',
            'Discusses treatment options including TAVR vs surgical AVR',
            'Explains that symptoms indicate severe disease requiring intervention',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient attributes symptoms to aging — educate that this is a treatable condition',
            concerns: 'Fear of losing independence and mobility',
            expectations: 'Wants to resume gardening and normal activities',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case004HFAS;
