import { CaseData } from '@/types';

const case036TIA: CaseData = {
  _id: 'case-036-tia',
  case_id: 'Case 36 - Transient Right-Sided Weakness and Speech Difficulty',
  case_name: 'Transient Right-Sided Weakness and Speech Difficulty',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 72,
    gender: 'M',
    occupation: 'not specified — presenting to emergency department',
    chief_complaint: 'Acute onset of right facial droop, right arm weakness, and difficulty speaking',
    presentation: {
      setting: 'Patient is seen in the emergency department 6 hours after acute onset of right facial droop, right arm weakness, and speech difficulty that started while sitting at breakfast.',
      duration: '6 hours, nearly resolved by time of evaluation',
      hpi: {
        onset: 'Sudden — 6 hours ago while sitting at breakfast table',
        site: 'Right face, right arm',
        character: 'Facial droop, arm weakness, speech difficulty',
        radiation: 'No radiation',
        severity: 'Mild to moderate — 4/5 strength in right arm; symptoms nearly resolved',
        time_course: 'Symptoms started acutely and have been improving; nearly resolved within hours',
        exacerbating_factors: [],
        relieving_factors: ['Spontaneous resolution'],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '62 bpm',
        blood_pressure: '135/87 mm Hg',
        s4_gallop: true,
        regular_rhythm: true,
        no_murmurs: true,
        no_carotid_bruits: true,
      },
      others: {
        right_facial_droop: true,
        right_arm_weakness: '4/5',
        speech_difficulty: true,
        intact_cerebellar: true,
        normal_gait: true,
        able_to_elevate_eyebrows: true,
      },
      negatives: {
        headache: false,
        loss_of_consciousness: false,
        abnormal_involuntary_movements: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Long-standing hypertension', 'Myocardial infarction 4 years ago — treated with percutaneous angioplasty'],
      negatives: ['No atrial fibrillation', 'No diabetes documented', 'No prior stroke'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Aspirin 81 mg daily', 'Metoprolol', 'Simvastatin'],
    },
    social_history: {
      smoking: 'Nonsmoker',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may be unsure what caused the episode and whether it will happen again.',
      concerns: 'Fear of having a stroke, worry about permanent disability or recurrence.',
      expectations: 'Expects a clear explanation of what happened and preventive measures to avoid future events.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why?',
      answer: 'Transient ischemic attack (TIA), most likely caused by atheroembolism from the left internal carotid artery. The patient had acute onset of right-sided neurologic deficits (facial droop, arm weakness, speech difficulty) that fully resolved within hours, now with nearly complete resolution. He also had a prior episode of transient monocular blindness (amaurosis fugax) in the left eye, which is classic for carotid territory TIA.',
    },
    {
      question: 'What is the next step in the care of this patient?',
      answer: 'Perform urgent noncontrast CT of the head to exclude intracranial hemorrhage. Although symptoms have resolved, this is essential before any further management. If CT is negative, the focus shifts to secondary prevention: antiplatelet therapy, statin therapy, blood pressure control, and carotid artery imaging (Doppler ultrasound or MR angiography) to assess for carotid stenosis.',
    },
    {
      question: 'What is amaurosis fugax and what does it indicate?',
      answer: 'Amaurosis fugax is transient monocular blindness, often described as a gray shade being pulled down over one eye, caused by retinal ischemia. It is most often due to emboli (Hollenhorst plaques — cholesterol emboli) originating from the ipsilateral carotid artery. It is a form of TIA in the retinal circulation and a warning sign for future stroke.',
    },
    {
      question: 'What is the ABCD2 score and how is it used to stratify stroke risk after TIA?',
      answer: 'ABCD2 score assesses 2-day stroke risk after TIA: Age >=60 (1 point), BP >140/90 (1 point), Clinical features — unilateral weakness (2) or speech disturbance without weakness (1), Duration >=60 min (2) or 10-59 min (1), Diabetes (1). Total score 6-7 = high risk (8% at 2 days), 4-5 = moderate risk (4%), 0-3 = low risk (1%). This patient would score high.',
    },
    {
      question: 'When is carotid endarterectomy indicated for patients with TIA?',
      answer: 'For symptomatic patients (TIA or stroke) with ipsilateral carotid artery stenosis >70%, CEA is highly recommended and reduces the rate of future stroke. For stenosis 50-69%, benefit is less clear and decision is case-by-case. For stenosis <50%, neither CEA nor stenting is recommended. Surgery should be performed at a center with low morbidity and mortality.',
    },
    {
      question: 'What are the three most common causes of ischemic stroke and TIA?',
      answer: '(1) Carotid atherosclerosis (large-vessel disease) — atheroembolism from carotid artery plaques. (2) Cardioembolism — emboli from the heart due to atrial fibrillation, valvular disease, mural thrombus, or patent foramen ovale. (3) Small-vessel disease (lipohyalinosis) — affecting small lenticulostriate arteries, causing lacunar infarcts.',
    },
    {
      question: 'What secondary prevention measures should be implemented after a TIA?',
      answer: 'Antiplatelet therapy (aspirin, clopidogrel, or aspirin-dipyridamole), high-intensity statin therapy (to reduce stroke and cardiovascular events), blood pressure control (goal <140/90 mm Hg), smoking cessation, diabetes screening and management, weight management, and evaluation for carotid intervention (CEA or stenting) if significant carotid stenosis is found.',
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
            'Avoids medical jargon — explains stroke and TIA concepts clearly',
            'Shows empathy for patient\'s anxiety about transient symptoms',
            'Addresses fear of future stroke and provides reassurance about preventive measures',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Right face, right arm — left hemisphere (carotid territory)',
            Onset: 'Sudden — 6 hours ago while sitting at breakfast',
            Character: 'Facial droop, arm weakness (4/5), speech difficulty',
            Radiation: 'Ask about prior amaurosis fugax, vision changes',
            Associated_symptoms: 'Headache, loss of consciousness, seizures, palpitations',
            Time_course: 'Symptoms peaked early and are nearly resolved within hours',
            Exacerbating_relieving: 'Ask about prior episodes, transient symptoms',
            Severity: 'Mild residual — NIH Stroke Scale assessment',
          },
          specific_history: [
            'Prior amaurosis fugax — timing, duration, recovery',
            'Cardiovascular risk factors — hypertension, diabetes, hyperlipidemia',
            'Cardiac history — atrial fibrillation, valvular disease, MI',
            'Medication adherence — aspirin, statin, beta-blocker',
            'Family history of stroke or cardiovascular disease',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies TIA as the diagnosis',
            'Explains need for urgent CT head and vascular imaging',
            'Discusses secondary prevention (antiplatelet, statin, BP control)',
            'Explains role of carotid endarterectomy if significant stenosis found',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think the episode was a minor event not requiring further investigation',
            concerns: 'Fear of disabling stroke, worry about recurrence and permanent disability',
            expectations: 'Expects urgent evaluation and effective preventive treatment',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case036TIA;
