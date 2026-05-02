import { CaseData } from '@/types';

const case009Syncope: CaseData = {
  _id: 'case-009-syncope',
  case_id: 'Case 009 - Syncope & Bradycardia',
  case_name: 'Syncope & Bradycardia',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 72,
    gender: 'M',
    occupation: 'Not specified — retired',
    chief_complaint: 'Fainted while standing to sing a hymn in church',
    presentation: {
      setting: 'Patient was at church, stood up to sing a hymn, and then fell to the floor. His wife witnessed the episode.',
      duration: 'Loss of consciousness approximately 2-3 minutes, groggy for another 1-2 minutes',
      hpi: {
        onset: 'Sudden — occurred upon standing to sing',
        site: 'Generalized — loss of consciousness',
        character: 'Witnessed syncope without abnormal movements',
        radiation: 'N/A',
        severity: 'Resulted in fall with contusions to face, left arm, and chest wall',
        time_course: 'Episodic — has had prodromal weakness and light-headedness with activity for several months',
        exacerbating_factors: ['Exertion (mowing the lawn)', 'Standing'],
        relieving_factors: ['Spontaneous recovery after 2-3 minutes'],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '35 bpm (severe bradycardia)',
        blood_pressure: '118/72 mm Hg (no orthostatic change)',
        rhythm: 'Regular but bradycardic',
        apical_impulse: 'Nondisplaced',
      },
      others: {
        alert: true,
        oriented: true,
        no_focal_deficits: true,
        no_seizure_activity: true,
      },
      constitutional: {
        temperature: 'Afebrile',
      },
      negatives: {
        palpitations: false,
        chest_pain: false,
        shortness_of_breath: false,
        headache: false,
        abnormal_movements: false,
        confusion_after_event: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Osteoarthritis of the knees'],
      negatives: ['No known heart disease', 'No hypertension', 'No diabetes', 'No prior syncope'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Acetaminophen as needed for osteoarthritis'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may think he simply "fainted" due to heat or standing up too quickly. He may not realize the seriousness of a syncopal episode at his age with bradycardia.',
      concerns: 'Worried about the cause of fainting, especially given he has never experienced this before. Concerned about the contusions from the fall and about future episodes.',
      expectations: 'Expects evaluation to determine why he fainted and wants to prevent future episodes. May need education about pacemaker therapy.',
    },
  },
  questions: [
    {
      question: 'What are the major categories of syncope and how do you differentiate them by history?',
      answer: '(1) Vasovagal/neurocardiogenic — most common in young people, precipitated by emotional stress or pain, with prodromal symptoms (nausea, yawning, diaphoresis). (2) Orthostatic hypotension — occurs upon standing, BP drop >20/10 mm Hg within 3 minutes. (3) Cardiogenic — arrhythmias (bradyarrhythmias like AV block, tachyarrhythmias) or structural (aortic stenosis, HOCM). Often during exertion, recovery may be slow. (4) Neurologic — vertebrobasilar insufficiency, seizures (prolonged postictal period, >5 min loss of consciousness, tongue biting, incontinence).',
    },
    {
      question: 'What are the three types of AV block and how are they distinguished on ECG?',
      answer: 'First-degree AV block: prolonged PR interval >200 ms (conduction delay in AV node, good prognosis, no pacing needed). Second-degree Mobitz type I (Wenckebach): progressive PR lengthening until a dropped beat (AV node level, good prognosis, pacing only if symptomatic). Second-degree Mobitz type II: dropped beats without PR lengthening (below AV node in bundle of His, often progresses to complete heart block, permanent pacing indicated). Third-degree AV block: complete heart block, atria and ventricles beat independently at different rates, atrial rate faster than ventricular escape rhythm, permanent pacing indicated.',
    },
    {
      question: 'What immediate management is indicated for a patient with third-degree AV block presenting with syncope?',
      answer: 'This patient has symptomatic third-degree (complete) heart block with a heart rate of 35 bpm, wide QRS, and syncope. Immediate management: placement of a temporary pacemaker (transcutaneous or transvenous). Atropine or isoproterenol can be used as a temporary measure if the block is at the AV node level, but in this case (wide QRS suggesting infra-nodal block), these are less effective. A permanent pacemaker will ultimately be required.',
    },
    {
      question: 'What causes of syncope are suggested by exertional symptoms?',
      answer: 'Syncope during or immediately after exertion suggests cardiogenic causes: (1) Cardiac outflow obstruction — aortic stenosis (angina, dyspnea, harsh systolic ejection murmur) or hypertrophic obstructive cardiomyopathy. (2) Arrhythmias — exercise-induced ventricular tachycardia or AV block exacerbated by increased demand. This patient\'s history of exercise intolerance (cannot mow the lawn without feeling weak and light-headed) is consistent with cardiogenic syncope due to heart block.',
    },
    {
      question: 'What is carotid sinus hypersensitivity and how is it diagnosed?',
      answer: 'Carotid sinus hypersensitivity is a vagally mediated cause of syncope in older men. Episodes can be triggered by turning the head, wearing a tight collar, or shaving over the carotid sinus area. Pressure over the carotid sinus causes excess vagal activity with cardiac slowing (sinus bradycardia, sinus arrest, or AV block). Diagnosis is suggested by history and can be confirmed by careful carotid massage (after auscultating to exclude bruits). If recurrent syncope due to bradyarrhythmia occurs, a demand pacemaker is often required.',
    },
    {
      question: 'What is the prognosis and treatment of Mobitz type I versus type II AV block?',
      answer: 'Mobitz type I (Wenckebach): generally good prognosis, usually caused by AV nodal dysfunction (e.g., inferior MI, increased vagal tone), pacing not required unless symptomatic. Mobitz type II: poorer prognosis because the block is infra-nodal (bundle of His), often progresses to complete heart block. Permanent pacing is indicated. In this patient, the heart rate is <40 bpm with a wide QRS, suggesting infra-nodal block (type II or third-degree), and he is symptomatic, so permanent pacing is required.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and respectful communication with elderly patient',
            'Avoids medical jargon when explaining AV block and pacemaker',
            'Shows empathy for patient and wife after frightening syncopal episode',
            'Acknowledges the impact of exercise intolerance on quality of life',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Witnessed collapse — obtain collateral from wife about the event',
            Onset: 'Sudden or gradual? Preceded by palpitations, chest pain, dyspnea?',
            Character: 'Ask about seizure-like activity, tongue biting, incontinence, postictal confusion',
            Radiation: 'Head turning, tight collar, shaving (carotid sinus hypersensitivity)',
            Associated_symptoms: 'Prodromal symptoms: nausea, yawning, diaphoresis (vasovagal); palpitations (arrythmia); chest pain (MI/cardiac); dyspnea (PE)',
            Time_course: 'Duration of loss of consciousness? Speed of recovery? Episodes over last several months?',
            Exacerbating_relieving: 'Provoked by standing, exertion, emotional stress, micturition, defecation, coughing',
            Severity: 'Injuries from falls? Frequency of presyncopal episodes?',
          },
          syncope_evaluation: [
            'Witness account of the episode — crucial for diagnosis',
            'Medication review — any new drugs? Antihypertensives? Antiarrhythmics?',
            'Cardiac history — prior MI, heart failure, valvular disease',
            'ECG — evaluate for AV block, prolonged QT, arrhythmias',
            'Orthostatic vital signs',
            'Laboratory evaluation — cardiac enzymes, electrolytes, glucose, CBC',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies third-degree AV block as cause of syncope',
            'Explains the need for temporary and permanent pacemaker',
            'Discusses the different types of AV block and their significance',
            'Addresses safety concerns and prevention of falls from recurrent syncope',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may dismiss episode as simple fainting due to standing or heat in the church',
            concerns: 'Fear of recurrent episodes and serious injury from falls; worry about progressive decline in activity level; anxiety about pacemaker surgery',
            expectations: 'Expects to understand the cause and prevent future episodes; needs education about pacemaker as a safe and effective solution',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case009Syncope;
