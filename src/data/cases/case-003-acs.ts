// src/data/cases/case-003-acs.ts
import { CaseData } from '@/types';

const case003ACS: CaseData = {
  _id: 'case-003-acs',
  case_id: 'Case 003 - Chest Pain — Acute Onset',
  case_name: 'Chest Pain — Acute Onset',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 56,
    gender: 'M',
    occupation: 'not specified — presenting to emergency department',
    chief_complaint: 'Chest discomfort',
    presentation: {
      setting: 'Patient comes to the emergency department complaining of chest discomfort that woke him from sleep 3 hours earlier.',
      duration: '3 hours, persistent',
      hpi: {
        onset: 'Woke from sleep 3 hours ago with sudden onset',
        site: 'Retrosternal (central chest)',
        character: 'Severe retrosternal pressure, described as squeezing/heavy',
        radiation: 'No specific radiation documented',
        severity: 'Severe — patient appears uncomfortable and diaphoretic',
        time_course: 'Continuous since onset, not relieved',
        exacerbating_factors: [],
        relieving_factors: ['Not relieved by rest'],
      },
    },
    symptoms: {
      cardiovascular: {
        tachycardia: true,
        heart_rate: '116 bpm',
        blood_pressure: '166/102 mm Hg',
        diaphoresis: true,
        s4_gallop: true,
        murmurs: false,
        rubs: false,
      },
      respiratory: {
        respiratory_rate: '22 breaths/min',
        oxygen_saturation: '96% on room air',
        lung_fields: 'Clear',
      },
      constitutional: {
        discomfort: true,
      },
      negatives: {
        fever: false,
        jvd_elevated: false,
        pulmonary_edema: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypercholesterolemia'],
      negatives: ['No prior MI', 'No known diabetes', 'No known hypertension'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented — likely statin for hypercholesterolemia'],
    },
    social_history: {
      smoking: '40 pack-year smoking history',
      alcohol: 'Not documented',
      family: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely concerned about heart attack given severity of symptoms',
      concerns: 'Fear of serious cardiac event, worried about survival',
      expectations: 'Expects immediate pain relief and medical intervention',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why?',
      answer: 'Acute ST-segment elevation myocardial infarction (STEMI). The patient presents with acute onset severe retrosternal pressure lasting >30 minutes, unrelieved by rest, with cardiovascular risk factors (hypercholesterolemia, 40-pack-year smoking), tachycardia, hypertension, diaphoresis, S4 gallop, and ECG showing ST-segment elevations.',
    },
    {
      question: 'What are the three components required for diagnosing an acute MI?',
      answer: '1. Typical chest pain persisting >30 minutes, 2. Typical ECG findings (ST elevation or new LBBB), 3. Elevated cardiac biomarker levels (troponin I/T, CK-MB). Diagnosis requires at least 2 of 3.',
    },
    {
      question: 'What is the difference between STEMI, NSTEMI, and Unstable Angina?',
      answer: 'STEMI: ST elevation on ECG + elevated cardiac biomarkers (transmural infarction). NSTEMI: No ST elevation + elevated cardiac biomarkers (subendocardial infarction). Unstable Angina: No ST elevation + normal cardiac biomarkers (ischemia without necrosis).',
    },
    {
      question: 'What are the indications and contraindications for thrombolytic therapy?',
      answer: 'Indications: Ischemic chest pain, ST elevation >1mm in ≥2 contiguous leads, no contraindications, age <75, within 12 hours of onset. Contraindications: Recent major surgery, active internal bleeding, suspected aortic dissection, severe hypertension, prior hemorrhagic stroke.',
    },
    {
      question: 'What immediate medical therapies should be administered for STEMI?',
      answer: 'MONA-BASH: Morphine (pain relief), Oxygen (if hypoxic), Nitroglycerin, Aspirin 325mg chewable, Beta-blockers, ACE inhibitors, Statins, Heparin (anticoagulation). PCI within 90 minutes is preferred if available.',
    },
    {
      question: 'What complications can occur after an acute MI?',
      answer: 'Early (<24h): Ventricular arrhythmias (VT/VF), cardiogenic shock, heart block. Days 1-7: Papillary muscle rupture/dysfunction → mitral regurgitation, ventricular septal rupture, ventricular free wall rupture (usually fatal), pericarditis. Late (>2 weeks): Ventricular aneurysm, Dressler syndrome.',
    },
    {
      question: 'How do you localize the infarction territory on ECG?',
      answer: 'Inferior (RCA): ST elevation in II, III, aVF — often with sinus bradycardia. Anterior (LAD): ST elevation in V2-V4. Lateral (LCX): ST elevation in I, aVL, V5, V6. Posterior: ST depression in V1-V2 with tall R waves.',
    },
    {
      question: 'What secondary prevention measures are recommended post-MI?',
      answer: 'Smoking cessation (most important — reduces events by >50%), aspirin, beta-blockers, statins, ACE inhibitors, aldosterone antagonists (if LVEF <40% + HF or DM). Screen for depression (~20% post-MI). Consider ICD if LVEF <40%.',
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
            'Avoids medical jargon — uses terms patient can understand',
            'Acknowledges patient distress (severe pain, diaphoresis, anxiety)',
            'Addresses fear of heart attack and reassures patient',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Retrosternal',
            Onset: 'Sudden, woke from sleep 3 hours ago',
            Character: 'Severe pressure/squeezing',
            Radiation: 'Ask about radiation to arm, jaw, neck, back',
            Associated_symptoms: 'Diaphoresis, nausea/vomiting, dyspnea, palpitations, sense of impending doom',
            Time_course: 'Continuous × 3 hours, not relieved',
            Exacerbating_relieving: 'Not relieved by rest; ask about effect of position, breathing',
            Severity: 'Severe — ask patient to rate 1-10',
          },
          cardiovascular_risk_factors: [
            'Smoking history — quantify pack-years',
            'Hypercholesterolemia — duration, medications, compliance',
            'Hypertension history',
            'Diabetes mellitus',
            'Family history of premature CAD',
            'Prior cardiac events or symptoms',
          ],
          rule_out_differentials: [
            'Aortic dissection — unequal pulses, widened mediastinum',
            'Acute pericarditis — pleuritic pain, pericardial rub, diffuse ST elevation',
            'Pulmonary embolism — dyspnea, calf pain/swelling, risk factors',
            'Esophageal spasm/GERD — relation to meals, lying down',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies ACS/STEMI as most likely diagnosis',
            'Explains need for immediate ECG and serial cardiac biomarkers',
            'Discusses reperfusion options (PCI vs thrombolytics)',
            'Explains importance of time-to-treatment ("time is muscle")',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely thinks this is a heart attack — validate this concern',
            concerns: 'Fear of death, concern about long-term health impact, worry about family',
            expectations: 'Expects immediate treatment, pain relief, and clear plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case003ACS;
