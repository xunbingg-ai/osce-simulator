import { CaseData } from '@/types';

const case038TemporalArteritis: CaseData = {
  _id: 'case-038-temporal-arteritis',
  case_id: 'Case 38 - Severe Unilateral Headache',
  case_name: 'Severe Unilateral Headache',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 59,
    gender: 'F',
    occupation: 'not specified — presenting to clinic',
    chief_complaint: 'Severe right-sided headache for 3 weeks',
    presentation: {
      setting: 'Patient comes to the clinic concerned about a brain tumor due to a severe right-sided headache lasting 3 weeks.',
      duration: '3 weeks, constant',
      hpi: {
        onset: 'Gradual onset 3 weeks ago',
        site: 'Right side of head — temporal region',
        character: 'Constant, occasionally throbbing, mostly dull ache — worse at night when lying on that side',
        radiation: 'No radiation',
        severity: '8 out of 10',
        time_course: 'Continuous for 3 weeks, worse at night',
        exacerbating_factors: ['Lying on right side of head on pillow', 'Chewing food (jaw claudication)'],
        relieving_factors: ['None reported'],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: '126/75 mm Hg',
        heart_rate: '88 bpm',
        s4_gallop: true,
      },
      constitutional: {
        temperature: '100.4 °F',
        low_grade_fever: true,
        aches: 'Shoulders, hips, thighs',
      },
      others: {
        visual_acuity_normal: true,
        visual_fields_intact: true,
        fundoscopic_arteriolar_narrowing: true,
        no_papilledema: true,
        no_focal_deficits: true,
        scalp_tenderness: 'Moderate over right side',
        jaw_claudication: true,
      },
      negatives: {
        nausea: false,
        vomiting: false,
        photophobia: false,
        visual_disturbances: false,
        joint_swelling: false,
        joint_deformity: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypertension — controlled with hydrochlorothiazide', 'Arthritis of neck, shoulders, and hips — treated with ibuprofen'],
      negatives: ['No prior similar headaches', 'No vision loss', 'No prior diagnosis of migraine'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Hydrochlorothiazide', 'Ibuprofen as needed for stiffness and aches'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient is very concerned she might have a brain tumor given the severe, persistent headache different from her usual stress headaches.',
      concerns: 'Fear of brain tumor, vision loss, or other serious intracranial pathology.',
      expectations: 'Expects brain imaging to rule out tumor and effective treatment for pain relief.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Giant cell (temporal) arteritis (GCA). The patient is over 50 with new-onset severe unilateral headache, scalp tenderness, jaw claudication, low-grade fever, and stiffness/achiness of the shoulder and hip girdles (suggesting associated polymyalgia rheumatica). ESR is expected to be markedly elevated.',
    },
    {
      question: 'What is the best next step to confirm the diagnosis?',
      answer: 'Check erythrocyte sedimentation rate (ESR). An elevated ESR (>50 mm/h) is the best screening test and is highly suggestive of GCA. C-reactive protein (CRP) may also be elevated. Definitive diagnosis is confirmed by temporal artery biopsy, though a negative biopsy does not completely rule out GCA due to segmental involvement.',
    },
    {
      question: 'What is the most feared complication of giant cell arteritis, and how is it prevented?',
      answer: 'Permanent vision loss (up to 20% of patients) due to ophthalmic artery involvement. This can be prevented by prompt initiation of high-dose corticosteroids (prednisone 40-60 mg daily) as soon as the diagnosis is suspected, even before biopsy confirmation. Steroids may prevent but usually do not reverse visual loss.',
    },
    {
      question: 'What is polymyalgia rheumatica and how is it related to giant cell arteritis?',
      answer: 'Polymyalgia rheumatica (PMR) is an inflammatory condition characterized by bilateral aching and stiffness of the neck, shoulders, hips, and thighs, with significantly elevated ESR. It is closely associated with GCA — up to 50% of GCA patients have PMR symptoms. Treatment for PMR alone is lower-dose prednisone (10-20 mg daily), while GCA requires 40-60 mg daily.',
    },
    {
      question: 'What is the SNOOP mnemonic for red flags indicating serious underlying causes of headache?',
      answer: 'S — Systemic symptoms (fever, cancer, HIV, immunocompromise). N — Neurologic signs or symptoms (altered mental status, focal deficits, seizures, meningismus). O — Onset new (especially age >40) or sudden (thunderclap). O — Other associated conditions (head trauma, headache awakens from sleep, worse with Valsalva or exertion). P — Previous headache history with progressive change in pattern or severity.',
    },
    {
      question: 'What treatment is recommended for giant cell arteritis, and how should it be monitored?',
      answer: 'High-dose corticosteroids (prednisone 40-60 mg daily) are the drugs of choice. Steroid dosage should be gradually tapered when discontinuing, but relapse is common. Monitor for complications of corticosteroid therapy including hyperglycemia, bone loss (osteoporosis prophylaxis needed), and neutropenia. If symptoms return during taper, the dose should be increased.',
    },
    {
      question: 'How does the headache of giant cell arteritis differ from migraine headache?',
      answer: 'GCA occurs in patients >50 years old, headache is unilateral (often temporal), constant with nocturnal worsening, scalp tenderness, and associated jaw claudication. ESR is markedly elevated. Migraine is more common in younger women, often unilateral and throbbing with aura, nausea, photophobia, and phonophobia, with normal ESR. Migraine responds to triptans and NSAIDs, while GCA requires corticosteroids.',
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
            'Avoids medical jargon — explains arteritis concepts clearly',
            'Shows empathy for patient\'s pain and fear of brain tumor',
            'Reassures patient while addressing concerns seriously',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Right temporal region — ask about scalp tenderness, affected side',
            Onset: '3 weeks ago — gradual but persistent',
            Character: 'Constant dull ache with occasional throbbing, worse at night',
            Radiation: 'Ask about radiation to jaw, eye, or other areas',
            Associated_symptoms: 'Jaw claudication, vision changes, fever, weight loss, myalgias',
            Time_course: 'Continuous for 3 weeks, progressive',
            Exacerbating_relieving: 'Worse lying on pillow, worse with chewing',
            Severity: '8/10 — severe',
          },
          specific_history: [
            'Prior headache history and pattern changes',
            'Symptoms of polymyalgia rheumatica — stiffness in shoulders, neck, hips',
            'Visual symptoms — transient vision loss, double vision, blurring',
            'Constitutional symptoms — fever, weight loss, malaise',
            'Medication history and response to previous treatments',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies giant cell arteritis as likely diagnosis rather than brain tumor',
            'Explains need for ESR and temporal artery biopsy',
            'Discusses urgent need for high-dose corticosteroids to prevent vision loss',
            'Explains monitoring and long-term management of steroid therapy',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient believes she has a brain tumor — needs explanation of alternative diagnosis',
            concerns: 'Fear of brain tumor, vision loss, and permanent damage',
            expectations: 'Expects imaging but needs education that GCA is the more likely diagnosis requiring prompt steroid treatment',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case038TemporalArteritis;
