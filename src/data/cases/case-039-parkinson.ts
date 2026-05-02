import { CaseData } from '@/types';

const case039Parkinson: CaseData = {
  _id: 'case-039-parkinson',
  case_id: 'Case 39 - Progressive Right-Sided Stiffness',
  case_name: 'Progressive Right-Sided Stiffness',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 50,
    gender: 'M',
    occupation: 'former college football player',
    chief_complaint: 'Increasing stiffness on the right side of the body',
    presentation: {
      setting: 'Patient comes to the office complaining of difficulty completing daily duties due to progressive right-sided stiffness over 18 months.',
      duration: '18 months, progressive',
      hpi: {
        onset: 'Gradual — started 18 months ago',
        site: 'Right side of body — right arm primarily',
        character: 'Stiffness, difficulty initiating movement, must consciously command right arm to move',
        radiation: 'Right-sided only — no left-sided symptoms',
        severity: 'Moderate — started using left arm more often for tasks',
        time_course: 'Slowly progressive over 18 months',
        exacerbating_factors: ['Repetitive movements of right hand'],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: '121/80 mm Hg',
        heart_rate: '88 bpm',
      },
      constitutional: {
        temperature: '99 °F',
      },
      others: {
        hyposmia: true,
        rigidity: true,
        difficulty_repetitive_movements: true,
        flexed_posture: 'Bent forward at waist',
        decreased_arm_swing: 'Right arm does not swing while walking',
        no_atrophy: true,
        no_fasciculation: true,
        normal_strength: true,
        normal_sensation: true,
        normal_equilibrium: true,
        no_tremor: true,
      },
      negatives: {
        headache: false,
        vision_loss: false,
        incontinence: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No known chronic conditions', 'No prior neurologic deficits', 'No hypertension', 'No diabetes'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: [],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      occupation: 'Former college football player — multiple concussions without neurologic deficits',
    },
    family_history: 'Older brother recently diagnosed with Parkinson disease; both parents have hypertension',
    ice: {
      ideas: 'Patient may attribute symptoms to aging or previous football injuries.',
      concerns: 'Worried about progressive disability, inability to perform daily tasks, and the significance of symptoms given his brother\'s Parkinson diagnosis.',
      expectations: 'Expects a clear diagnosis and treatment to improve function and slow progression.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Parkinson disease (PD). The patient presents with gradually progressive right-sided rigidity and bradykinesia (difficulty initiating movement, slow repetitive movements), hyposmia (decreased sense of smell), flexed posture, and decreased arm swing — classic early motor features of PD. He has a family history (brother with PD) and prior head trauma (concussions) as possible risk factors.',
    },
    {
      question: 'What is the next diagnostic step?',
      answer: 'Brain MRI to rule out other causes of parkinsonism (secondary Parkinson disease). While PD is a clinical diagnosis and MRI is not diagnostic, it is important to exclude other possibilities such as normal-pressure hydrocephalus, lacunar infarcts, progressive supranuclear palsy, or brain tumors. Laboratory tests (thyroid, B12, RPR) are normal, supporting primary PD.',
    },
    {
      question: 'What is the next step in therapy?',
      answer: 'Consider initiation of therapy with amantadine or a monoamine oxidase type B inhibitor (MAO-B inhibitor) for mild symptoms. If no improvement or if symptoms progress, carbidopa/levodopa can be introduced. For this patient with mild-to-moderate symptoms affecting daily function, pharmacologic therapy is appropriate.',
    },
    {
      question: 'What are the four cardinal symptoms of Parkinson disease (TRAP)?',
      answer: 'T — Tremor (resting tremor, 4-6 Hz, pill-rolling, lessens with purposeful movement). R — Rigidity (cogwheel or lead-pipe rigidity on passive motion). A — Akinesia/Bradykinesia (difficulty initiating movements, slowness). P — Postural instability (impaired reflexes, tendency to fall — typically develops later). This patient presents with rigidity and bradykinesia but no tremor and no postural instability.',
    },
    {
      question: 'How does Parkinson disease differ from essential tremor?',
      answer: 'PD tremor is a resting tremor (present when not engaged in activities, lessens with purposeful movement), 4-6 Hz, typically begins unilaterally. Essential tremor is an action/postural tremor during purposeful movements (e.g., writing, drinking), often bilateral, with no other parkinsonian features (rigidity, bradykinesia, postural instability). PD also has nonmotor features like hyposmia, depression, and sleep disturbances.',
    },
    {
      question: 'What are the main pharmacologic treatment options for Parkinson disease?',
      answer: 'Four main drug classes: (1) MAO-B inhibitors (selegiline, rasagiline) and amantadine — low potency, for mild disease. (2) Dopamine agonists (pramipexole, ropinirole, rotigotine) — intermediate potency, for moderate disease. (3) Levodopa/carbidopa — highest potency, most effective for motor symptoms. (4) Deep-brain stimulation — surgical option for advanced disease when medications are inadequate. All treatments are symptomatic only — they do not alter disease progression.',
    },
    {
      question: 'What is deep-brain stimulation and when is it indicated?',
      answer: 'DBS involves placing thin electrodes in the thalamus, subthalamus, or globus pallidus interna connected to an impulse generator battery implanted under the collarbone or abdomen. It delivers high-frequency electrical stimulation. DBS is considered when motor symptoms are not adequately controlled with medications, typically after 4+ years of PD. It improves motor function and can reduce medication requirements.',
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
            'Avoids medical jargon — explains parkinsonism concepts clearly',
            'Shows empathy for patient\'s frustration with progressive stiffness and functional limitation',
            'Addresses concerns about family history and prognosis',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Right side — right arm, right-sided rigidity',
            Onset: 'Gradual onset 18 months ago',
            Character: 'Stiffness, difficulty initiating movement, bradykinesia',
            Radiation: 'Ask about spread to left side or lower extremities',
            Associated_symptoms: 'Tremor, hyposmia, mood changes, sleep disturbances, constipation',
            Time_course: 'Slowly progressive over 18 months',
            Exacerbating_relieving: 'Ask about medication response, effect of stress or fatigue',
            Severity: 'Moderate — uses left arm more, impacts daily activities',
          },
          specific_history: [
            'Family history of Parkinson disease (brother diagnosed)',
            'History of head trauma/concussions (football player)',
            'Medication history — any prior dopamine-blocking agents',
            'Nonmotor symptoms — depression, sleep (REM behavior disorder), constipation',
            'Functional impact on occupation and daily activities',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies Parkinson disease as the most likely diagnosis',
            'Explains need for brain MRI to rule out secondary causes',
            'Discusses pharmacologic treatment options (amantadine, MAO-B, levodopa)',
            'Explains prognosis and that treatment is symptomatic, not curative',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think symptoms are from aging or old football injuries',
            concerns: 'Worried about progressive disability, given brother\'s Parkinson diagnosis and his own declining function',
            expectations: 'Expects effective treatment to improve symptoms and maintain independence',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case039Parkinson;
