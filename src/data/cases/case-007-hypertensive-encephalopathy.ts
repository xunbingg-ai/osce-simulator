import { CaseData } from '@/types';

const case007HypertensiveEncephalopathy: CaseData = {
  _id: 'case-007-hypertensive-encephalopathy',
  case_id: 'Case 007 - Confusion & Severely Elevated Blood Pressure',
  case_name: 'Confusion & Elevated Blood Pressure',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 39,
    gender: 'M',
    occupation: 'Not specified',
    chief_complaint: 'Confusion and agitation — found wandering in the street',
    presentation: {
      setting: 'Patient was brought to the emergency center by ambulance after being found wandering in a disoriented state. History obtained from his wife.',
      duration: 'Acute confusion — several months of prodromal symptoms',
      hpi: {
        onset: 'Acute confusion today; intermittent headaches and palpitations for several months',
        site: 'Head — generalized headache',
        character: 'Confusion, agitation, disorientation',
        radiation: 'N/A',
        severity: 'Severe — patient does not recognize his wife',
        time_course: 'Progressive over months with acute worsening today',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '110 bpm',
        blood_pressure: '215/132 mm Hg (both arms)',
        bounding_pulses: true,
      },
      respiratory: {
        respiratory_rate: '26 breaths/min',
        oxygen_saturation: '98% on room air',
      },
      others: {
        confused: true,
        agitated: true,
        disoriented: true,
        dilated_pupils: true,
        papilledema: true,
        retinal_hemorrhages: 'Scattered',
        brisk_reflexes: true,
        tremor: true,
        recognizes_wife: false,
      },
      constitutional: {
        diaphoretic: true,
        temperature: 'Afebrile',
      },
      negatives: {
        thyromegaly: false,
        focal_neurologic_deficits: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Recently diagnosed hypertension (3 weeks ago)'],
      negatives: ['No known prior hypertension', 'No known heart disease', 'No known diabetes'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: [
        'Clonidine twice daily (prescribed 3 weeks ago, taken for 2 weeks, stopped due to sedation)',
        'Metoprolol twice daily (started 5 days ago after clonidine was discontinued)',
      ],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely does not understand what is happening due to his confused state. His wife may suspect a stroke or brain problem given his altered mental status.',
      concerns: 'Wife is extremely concerned about husband\'s sudden change in mental status and strange behavior. Family fears a brain tumor, stroke, or psychiatric condition.',
      expectations: 'Expects immediate evaluation and treatment to restore normal mental status. Wants to understand why this happened and how to prevent recurrence.',
    },
  },
  questions: [
    {
      question: 'What is the difference between hypertensive urgency and hypertensive emergency?',
      answer: 'Hypertensive urgency: BP >180/110 mm Hg without evidence of acute end-organ damage. Can be managed with oral agents and outpatient follow-up. Hypertensive emergency: elevated BP with acute end-organ damage (encephalopathy, MI, aortic dissection, stroke, renal failure, pulmonary edema). Requires immediate hospitalization, parenteral medications, and close monitoring. This patient has a hypertensive emergency with encephalopathy.',
    },
    {
      question: 'What is the pathophysiology of hypertensive encephalopathy and how does cerebral autoregulation change in chronic hypertension?',
      answer: 'Cerebral blood flow is autoregulated over a range of mean arterial pressures (60-120 mm Hg in normotensives). In chronic hypertension, the autoregulation curve shifts rightward, requiring higher pressures to maintain perfusion. When BP exceeds the autoregulatory range, endothelial dysfunction occurs, the blood-brain barrier becomes permeable, leading to vasogenic edema and microhemorrhages, especially in the parieto-occipital regions (posterior reversible encephalopathy syndrome).',
    },
    {
      question: 'How should blood pressure be lowered in hypertensive encephalopathy, and what are the risks of overly aggressive treatment?',
      answer: 'BP should be lowered gradually and carefully. Goal: reduce mean arterial pressure by no more than 20% or to a diastolic BP of 110-120 mm Hg in the first hour, with further 15% reduction over the next 23 hours. Rapid normalization can cause cerebral hypoperfusion, ischemia, or infarction because of the right-shifted autoregulation curve. Parenteral agents (e.g., sodium nitroprusside, labetalol) are used with continuous arterial pressure monitoring.',
    },
    {
      question: 'What features of this case suggest pheochromocytoma as the underlying etiology?',
      answer: 'The patient is relatively young (39), has paroxysmal symptoms (intermittent headaches, palpitations, light-headedness), and presents with a hyperadrenergic state (tachycardia, diaphoresis, dilated pupils, tremor, bounding pulses). He was recently started on a beta-blocker (metoprolol) which can worsen hypertension in pheochromocytoma due to unopposed alpha-adrenergic stimulation. Clonidine withdrawal may also contribute.',
    },
    {
      question: 'How is pheochromocytoma diagnosed and treated?',
      answer: 'Diagnosis: elevated 24-hour urinary metanephrines and catecholamines, or elevated plasma-free metanephrines. Imaging: CT or MRI of the adrenal glands (~90% are adrenal). If negative, use 123I-MIBG scintigraphy. Treatment: surgical resection preceded by 2 weeks of alpha-blockade (phenoxybenzamine) to control BP and prevent intraoperative hypertensive crises. Beta-blockade is added only after alpha-blockade is established to avoid unopposed alpha stimulation.',
    },
    {
      question: 'What other diagnoses must be excluded before diagnosing hypertensive encephalopathy?',
      answer: 'Hypertensive encephalopathy is a diagnosis of exclusion. Other causes of altered mental status with hypertension must be ruled out: intracranial hemorrhage (excluded by CT), subarachnoid hemorrhage (excluded by CT and CSF analysis showing no xanthochromia), meningitis/encephalitis (excluded by lumbar puncture with normal CSF), ischemic stroke, mass lesion, seizure disorder, metabolic derangements, and drug intoxication (negative urine drug screen).',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Calm, reassuring demeanor in emergency setting',
            'Avoids medical jargon when speaking to family',
            'Shows empathy for the patient\'s confused and agitated state and family\'s distress',
            'Provides clear explanations to the wife about the evaluation process',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Headache — onset, location, quality, severity',
            Onset: 'When did confusion start? Progression over hours? Any lucid intervals?',
            Character: 'Ask about palpitations — episodic or continuous? Triggers?',
            Radiation: 'Ask about chest pain, back pain (aortic dissection), vision changes',
            Associated_symptoms: 'Nausea/vomiting, seizure activity, focal weakness, speech changes, incontinence',
            Time_course: 'Timeline of antihypertensive changes — clonidine stopped, metoprolol started',
            Exacerbating_relieving: 'Relationship to activity, stress, meals, medication timing',
            Severity: 'Worst headache of life? Rate confusion from family\'s perspective',
          },
          rule_out_critical_differentials: [
            'Intracranial hemorrhage — CT head',
            'Subarachnoid hemorrhage — CT then lumbar puncture',
            'CNS infection — lumbar puncture, CSF analysis',
            'Ischemic stroke — focal neurologic deficits, CT/MRI',
            'Drug intoxication — urine drug screen',
            'Aortic dissection — unequal pulses, widened mediastinum, chest/back pain',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Recognizes hypertensive emergency with encephalopathy',
            'Explains need for ICU admission and continuous BP monitoring',
            'Discusses cautious BP lowering to avoid cerebral hypoperfusion',
            'Considers pheochromocytoma as underlying etiology and explains diagnostic workup',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Family may think the patient had a stroke or brain tumor given altered mental status',
            concerns: 'Wife is terrified by husband\'s sudden confusion and disorientation; concerned about permanent brain damage',
            expectations: 'Expects urgent evaluation to find the cause; needs reassurance that BP can be controlled and mental status may improve with treatment',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case007HypertensiveEncephalopathy;
