import { CaseData } from '@/types';

const case037Alzheimer: CaseData = {
  _id: 'case-037-alzheimer',
  case_id: 'Case 37 - Progressive Memory Loss and Confusion',
  case_name: 'Progressive Memory Loss and Confusion',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 68,
    gender: 'F',
    occupation: 'retired — previously independent, living alone',
    chief_complaint: 'Memory loss and confusion',
    presentation: {
      setting: 'Patient\'s daughter brings her in due to progressive decline in cognitive function over the last year. The patient has had difficulty caring for herself.',
      duration: 'Progressive over approximately 1 year',
      hpi: {
        onset: 'Gradual — progressive decline over the past year',
        site: 'Cognitive function — memory, orientation, behavior',
        character: 'Memory loss, confusion, social withdrawal, paranoia, neglect of personal hygiene and housekeeping',
        radiation: 'N/A — cognitive decline',
        severity: 'Moderate — MMSE 24/30, oriented to person and place but not time',
        time_course: 'Slowly progressive over 1 year with gradual worsening',
        exacerbating_factors: ['Stress', 'Being alone'],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: 'Within normal limits',
        heart_rate: 'Within normal limits',
      },
      constitutional: {
        temperature: 'Afebrile',
      },
      others: {
        mmse_score: '24/30',
        oriented_to_person: true,
        oriented_to_place: true,
        disoriented_to_time: true,
        cranial_nerves_intact: true,
        motor_intact: true,
        sensory_intact: true,
        cerebellar_normal: true,
        gait_normal: true,
        flat_affect: true,
        withdrawn: true,
        loss_of_interest: true,
        anxiety: true,
        paranoia: true,
        confusion: true,
      },
      negatives: {
        bowel_incontinence: false,
        urinary_incontinence: false,
        headache: false,
        gait_instability: false,
        focal_neurologic_deficits: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypertension — controlled on hydrochlorothiazide'],
      negatives: ['No prior stroke', 'No head trauma', 'No psychiatric history', 'No alcohol use disorder'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Hydrochlorothiazide for hypertension'],
    },
    social_history: {
      smoking: 'Never smoked',
      alcohol: 'Rarely drinks alcohol',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'The patient may not fully recognize the extent of her cognitive decline. Her daughter is likely concerned about progressive dementia.',
      concerns: 'Fear of losing independence, being unable to live alone, and being a burden to family. Paranoia about neighbors reflects underlying anxiety.',
      expectations: 'The daughter expects a diagnosis and treatment to slow cognitive decline, and guidance on care needs.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Alzheimer dementia. The patient presents with slowly progressive cognitive decline over 1 year, with memory loss, confusion, disorientation (person and place intact, but not time), social withdrawal, paranoia, and an MMSE score of 24/30 suggesting moderate cognitive impairment. No focal neurologic deficits, gait instability, or incontinence are present.',
    },
    {
      question: 'What are the best next diagnostic steps?',
      answer: 'Assess for depression (PHQ-9, given flat affect and withdrawal) and rule out reversible causes of dementia: thyroid function tests, vitamin B12 level, and neuroimaging (CT or MRI of the brain). The American Academy of Neurology recommends these routinely. Other optional tests include syphilis serology, HIV assay, and lumbar puncture if indicated.',
    },
    {
      question: 'What is the best treatment for this condition?',
      answer: 'Acetylcholinesterase inhibitors (donepezil, rivastigmine, galantamine) are first-line and can improve cognitive function and global clinical state. For more advanced dementia, memantine (NMDA receptor antagonist) may be added. Antipsychotics (e.g., risperidone) can be used cautiously for psychotic symptoms or aggression. Non-pharmacologic measures include structured environment, routine, and caregiver support.',
    },
    {
      question: 'How does Alzheimer disease differ from vascular (multi-infarct) dementia?',
      answer: 'Alzheimer disease has a gradual, progressive decline. Vascular dementia typically has a stepwise deterioration with abrupt declines following stroke or TIA events, often with focal neurologic deficits, cardiovascular disease, or atrial fibrillation. Alzheimer accounts for ~70% of dementias; vascular dementia is second at 10-20%.',
    },
    {
      question: 'What are potentially reversible causes of dementia that must be ruled out?',
      answer: 'Normal-pressure hydrocephalus (triad: dementia, gait disturbance, urinary incontinence), hypothyroidism, vitamin B12 deficiency, thiamine deficiency (Wernicke encephalopathy), medication side effects, depression (pseudodementia), chronic infections (HIV, neurosyphilis), alcohol use disorder, and intracranial mass lesions.',
    },
    {
      question: 'What are the clinical stages of Alzheimer disease?',
      answer: 'Early (MMSE 25-26): mild forgetfulness, poor concentration, fairly good function, occasional disorientation. Intermediate (MMSE 21-24): drastic recent memory deficits, suspicious, anxious, aware of confusion — matching this patient. Late (MMSE 10-20): cannot remember family names, delusions, hallucinations, agitation, needs substantial care. Advanced (MMSE <10): totally incapacitated, incontinent, all verbal and motor skills deteriorate.',
    },
    {
      question: 'What non-pharmacologic measures are important in managing Alzheimer disease?',
      answer: 'A structured environment with predictability, routine schedules, and family caregiver support. The Alzheimer Association provides resources for families. Judicious pharmacotherapy for depression (SSRIs), insomnia (trazodone), or agitation. Regular medication reconciliation (Beers Criteria) to avoid medications that worsen cognition. Safety measures for wandering, and planning for increasing care needs as the disease progresses.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and patient-centered communication with both patient and daughter',
            'Avoids medical jargon — explains dementia concepts clearly and compassionately',
            'Shows empathy for patient\'s confusion, paranoia, and loss of independence',
            'Addresses caregiver burden and provides family support resources',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Cognitive function — memory, orientation, behavior, personality',
            Onset: 'Gradual, progressive decline over 1 year',
            Character: 'Memory loss, confusion, paranoia, withdrawal, neglect of self-care',
            Radiation: 'Ask about impact on daily activities, safety, social function',
            Associated_symptoms: 'Mood changes, sleep disturbance, hallucinations, incontinence, gait problems',
            Time_course: 'Slowly progressive — no stepwise deterioration',
            Exacerbating_relieving: 'Effect of routine, social interaction, time of day (sundowning)',
            Severity: 'MMSE 24/30 — moderate impairment',
          },
          specific_history: [
            'Detailed cognitive and functional assessment over time',
            'Depression screening — PHQ-9 or geriatric depression scale',
            'Medication review including over-the-counter and supplements',
            'Alcohol and substance use history',
            'Family history of dementia or neurologic disease',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies Alzheimer dementia as most likely diagnosis',
            'Explains evaluation including lab tests and neuroimaging to rule out reversible causes',
            'Discusses acetylcholinesterase inhibitors as treatment options',
            'Provides guidance on safety, caregiver support, and long-term planning',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Daughter may think memory loss is just normal aging; patient may not recognize deficits',
            concerns: 'Fear of progressive decline, loss of independence, caregiver burden, financial and safety issues',
            expectations: 'Expects diagnosis, treatment to slow progression, and guidance on care and safety planning',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case037Alzheimer;
