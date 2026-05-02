// src/data/cases/case-008-af-ms.ts
import { CaseData } from '@/types';

const case008AFMS: CaseData = {
  _id: 'case-008-af-ms',
  case_id: 'Case 008 - Palpitations and Shortness of Breath',
  case_name: 'Palpitations and Shortness of Breath',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 26,
    gender: 'F',
    occupation: 'Nigerian national (recent immigrant)',
    chief_complaint: 'Sudden onset palpitations, severe shortness of breath, and coughing',
    presentation: {
      setting: 'Patient presents to the emergency center with sudden onset of palpitations, severe shortness of breath, and coughing.',
      duration: 'Acute, sudden onset',
      hpi: {
        onset: 'Sudden onset',
        site: 'Palpitations — sensation in chest; dyspnea — respiratory',
        character: 'Rapid, irregular heartbeat sensation; severe dyspnea; cough',
        radiation: 'N/A',
        severity: 'Severe enough to bring patient to emergency',
        time_course: 'Acute episode',
        exacerbating_factors: ['Any exertion worsens dyspnea'],
        relieving_factors: ['None documented'],
      },
    },
    symptoms: {
      cardiovascular: {
        palpitations: 'Sudden onset, rapid and irregular',
        dyspnea: 'Severe',
        orthopnea: 'Unable to lie flat',
        chest_discomfort: 'Possible associated chest discomfort',
      },
      respiratory: {
        cough: 'Present — may be dry or with frothy sputum (pulmonary edema)',
        dyspnea: 'Severe',
        hemoptysis: 'Possible in mitral stenosis',
      },
      constitutional: {
        anxiety: 'Likely anxious due to acute symptoms',
      },
      negatives: {
        fever: false,
        calf_pain: false,
      },
    },
    medical_history: {
      chronic_conditions: ['History of "heart problems" — details unclear, possibly rheumatic heart disease'],
      negatives: ['No known coronary artery disease', 'No hypertension', 'No diabetes'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None or unknown — from Nigeria, limited medical records'],
    },
    social_history: {
      smoking: 'Non-smoker',
      alcohol: 'Not documented',
      family: 'Recently immigrated from Nigeria',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely does not understand the cause of her symptoms',
      concerns: 'Fear — acute severe symptoms, in unfamiliar healthcare system',
      expectations: 'Wants immediate relief of frightening symptoms and explanation',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Atrial fibrillation with rapid ventricular response, likely secondary to underlying mitral stenosis (rheumatic heart disease). In a young woman from a region where rheumatic fever is endemic, presenting with acute onset palpitations and dyspnea, mitral stenosis with AF is the most likely diagnosis.',
    },
    {
      question: 'What are the typical ECG findings in atrial fibrillation?',
      answer: 'Absent P waves, irregularly irregular R-R intervals, narrow QRS complexes (unless concurrent bundle branch block or aberrancy), fibrillatory baseline (f waves) may be visible, ventricular rate typically 100-180 bpm if uncontrolled.',
    },
    {
      question: 'What are the physical examination findings in mitral stenosis?',
      answer: 'Loud S1 (early disease, diminishes as valve calcifies), opening snap (OS) after S2 (closer OS-S2 interval indicates more severe MS), low-pitched diastolic rumble at apex (best heard in left lateral decubitus), pre-systolic accentuation (if in sinus rhythm). Signs of right heart failure in advanced disease (elevated JVP, hepatomegaly, ascites, edema). Malar flush ("mitral facies").',
    },
    {
      question: 'What complications can occur with mitral stenosis?',
      answer: 'Atrial fibrillation (due to LA enlargement), systemic embolism (especially stroke — from LA stasis and thrombus), pulmonary hypertension → right heart failure, pulmonary edema/hemoptysis (due to elevated LA pressure rupturing bronchial veins), infective endocarditis, Ortner syndrome (hoarseness from recurrent laryngeal nerve compression by enlarged LA).',
    },
    {
      question: 'How would you manage acute atrial fibrillation with rapid ventricular response?',
      answer: 'Rate control: beta-blockers (metoprolol) or calcium channel blockers (diltiazem) IV. If hemodynamically unstable → immediate DC cardioversion. Anticoagulation (heparin) if duration >48h or unknown, to prevent thromboembolism. Rhythm control (cardioversion or antiarrhythmics) if symptomatic despite rate control. Treat underlying cause (mitral stenosis).',
    },
    {
      question: 'What are the treatment options for symptomatic mitral stenosis?',
      answer: 'Percutaneous mitral balloon valvuloplasty (PMBV) — first-line if valve morphology is suitable (pliable, non-calcified, no significant MR, no LA thrombus). Surgical commissurotomy (open or closed). Mitral valve replacement if valve is severely calcified or regurgitant. Medical management: diuretics for congestion, beta-blockers/CCBs for rate control in AF, anticoagulation for AF or prior embolism.',
    },
    {
      question: 'What is rheumatic heart disease and how does it cause mitral stenosis?',
      answer: 'Rheumatic heart disease is a late complication of acute rheumatic fever (caused by Group A Streptococcus pharyngitis). Autoimmune cross-reactivity between streptococcal M proteins and cardiac tissues → inflammation of heart valves. Mitral valve is most commonly affected. Chronic inflammation → commissural fusion, leaflet thickening/calcification, chordal shortening → progressive stenosis over years to decades. Most common in developing countries.',
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
            'Calm, reassuring approach for acutely symptomatic young patient',
            'Avoid jargon — explain in accessible terms',
            'Acknowledge fear and anxiety of acute presentation',
            'Cultural sensitivity — patient is recent immigrant, may have communication barriers',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Onset: 'Sudden onset of palpitations',
            Character: 'Rapid, irregular heartbeat, severe dyspnea',
            Associated_symptoms: 'Cough, orthopnea, possible hemoptysis, chest discomfort',
            Time_course: 'Acute episode',
            Duration: 'How long has this episode lasted? Prior episodes?',
          },
          specific_history: [
            'Childhood history — recurrent sore throats, rheumatic fever, joint pains',
            'Prior diagnosis of heart murmur or valve disease',
            'Prior episodes of palpitations or dyspnea',
            'Medications — any anticoagulation?',
            'Pregnancy history (MS symptoms may first present during pregnancy)',
            'Embolic symptoms — TIA, stroke-like episodes',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains relationship between mitral stenosis and atrial fibrillation',
            'Discusses need for echocardiogram to assess valve and rhythm',
            'Describes rate vs rhythm control strategies',
            'Explains importance of anticoagulation to prevent stroke',
            'Addresses potential need for valve intervention (balloon valvuloplasty vs surgery)',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely does not understand her condition — educate appropriately',
            concerns: 'Fear from acute, frightening symptoms; in unfamiliar healthcare system',
            expectations: 'Wants relief of symptoms and clear explanation of her condition',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case008AFMS;
