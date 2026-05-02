import { CaseData } from '@/types';

const case033Gout: CaseData = {
  _id: 'case-033-gout',
  case_id: 'Case 33 - Severe Right Knee Pain - Acute Onset',
  case_name: 'Severe Right Knee Pain - Acute Onset',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 48,
    gender: 'M',
    occupation: 'not specified — presenting to office',
    chief_complaint: 'Severe right knee pain',
    presentation: {
      setting: 'Patient comes to the office complaining of severe right knee pain that started abruptly at 2 am and woke him from sleep.',
      duration: '8 hours, acute',
      hpi: {
        onset: 'Sudden — woke from sleep at 2 am',
        site: 'Right knee',
        character: 'Severe pain, warm, swollen, tender — even weight of bed sheets was unbearable',
        radiation: 'No radiation documented',
        severity: 'Severe — cannot fully extend knee due to pain',
        time_course: 'Continuous since onset over 8 hours',
        exacerbating_factors: ['Straightening the knee', 'Weight of bed sheets on knee'],
        relieving_factors: ['Keeping knee bent'],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '104 bpm',
        blood_pressure: '136/78 mm Hg',
        tachycardia: true,
      },
      constitutional: {
        temperature: '99.4 °F',
        weight: '212 lb',
        height: '5 ft 11 in',
      },
      others: {
        right_knee_swollen: true,
        right_knee_erythematous: true,
        right_knee_warm: true,
        right_knee_effusion: true,
        limited_extension: true,
      },
      negatives: {
        fever: false,
        other_joint_swelling: false,
        skin_rash: false,
        prior_knee_surgery: false,
        prior_knee_injury: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypertension — controlled on hydrochlorothiazide'],
      negatives: ['No prior knee surgery', 'No prior knee injury', 'No prior similar knee pain'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Hydrochlorothiazide for hypertension'],
    },
    social_history: {
      smoking: 'Nonsmoker',
      alcohol: 'Moderate social alcohol use',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may be worried about a serious joint infection or injury given the sudden onset and severe pain.',
      concerns: 'Fear of permanent joint damage or a serious underlying condition.',
      expectations: 'Expects immediate pain relief, a clear diagnosis, and effective treatment.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why?',
      answer: 'Acute monoarticular arthritis, most likely gouty arthritis (acute gout). The presentation includes acute onset of severe monoarticular joint pain (knee), with warmth, swelling, erythema, and effusion. A prior self-limited episode involving the first MTP joint (podagra) and use of hydrochlorothiazide (which decreases renal uric acid excretion) further support gout. However, septic arthritis must be ruled out due to the risk of rapid joint destruction.',
    },
    {
      question: 'What is the next diagnostic step?',
      answer: 'Aspiration of the knee joint (arthrocentesis) to send synovial fluid for cell count, Gram stain and culture, and crystal analysis. Inflammatory fluid (WBC >2000/mm3) should be considered infected until proven otherwise.',
    },
    {
      question: 'What are the characteristic crystal findings in gout compared to pseudogout?',
      answer: 'In gout, monosodium urate crystals are needle-shaped and negatively birefringent (yellow under polarizing microscopy). In pseudogout (acute CPP crystal arthritis), calcium pyrophosphate dihydrate crystals are short, rhomboid, and weakly positively birefringent (blue under polarizing microscopy).',
    },
    {
      question: 'What are the most important risk factors for gout?',
      answer: 'Hyperuricemia from various causes: obesity, idiopathic hyperuricemia, renal failure, thiazide diuretics, alcohol use, high-purine diet, tumor lysis syndrome. This patient\'s risk factors include hydrochlorothiazide use and moderate alcohol consumption.',
    },
    {
      question: 'What is the most effective way to prevent recurrent gout attacks?',
      answer: 'Diet modification (avoiding organ-rich foods and alcohol), and urate-lowering therapy such as allopurinol or febuxostat. If possible, switch from thiazide diuretics to another antihypertensive. Uricosuric agents like probenecid can increase uric acid excretion but are ineffective in renal failure and contraindicated with uric acid kidney stones.',
    },
    {
      question: 'What are the stages of gout and their characteristics?',
      answer: 'Stage 1 (Asymptomatic hyperuricemia): elevated uric acid without symptoms; most never develop gout. Stage 2 (Acute gouty arthritis): sudden severe monoarticular pain, often at night in first MTP, ankle, or knee; attacks last hours to 2 weeks. Stage 3 (Intercritical gout): asymptomatic periods between attacks; 60-70% have another attack within 1-2 years. Stage 4 (Chronic tophaceous gout): chronic joint swelling and subcutaneous tophaceous deposits, usually after 10+ years.',
    },
    {
      question: 'How is acute gouty arthritis treated?',
      answer: 'Treatment aims to reduce inflammation: potent NSAIDs (e.g., indomethacin) are mainstay; oral colchicine (limited by GI side effects); or intra-articular/oral glucocorticoids if NSAIDs or colchicine are contraindicated (e.g., renal insufficiency). Urate-lowering therapy should NOT be started during an acute attack because sudden changes in urate levels may precipitate further attacks.',
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
            'Avoids medical jargon — explains joint pain concepts clearly',
            'Shows empathy for severe pain and patient distress',
            'Addresses patient concerns about joint damage and serious illness',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Right knee — ask about other joints, first MTP',
            Onset: 'Sudden, woke from sleep at 2 am',
            Character: 'Severe, warm, swollen, tender — sheets unbearable',
            Radiation: 'Ask about radiation to other areas',
            Associated_symptoms: 'Fever, chills, skin rash, prior similar episodes',
            Time_course: '8 hours, continuous, worsening',
            Exacerbating_relieving: 'Worse with extension, better with knee bent',
            Severity: 'Severe — ask patient to rate 1-10',
          },
          specific_history: [
            'Prior episodes of joint pain — especially great toe (podagra)',
            'Medication history — thiazide diuretics as precipitant',
            'Alcohol use — increases uric acid production',
            'Family history of gout or hyperuricemia',
            'Risk factors for septic arthritis (immunocompromise, recent infection)',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies acute gouty arthritis as most likely diagnosis',
            'Explains need for joint aspiration to rule out septic arthritis',
            'Discusses treatment options for acute attack (NSAIDs, colchicine, steroids)',
            'Explains long-term prevention strategies and urate-lowering therapy',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think this is an infection or injury requiring antibiotics or surgery',
            concerns: 'Fear of permanent joint damage, recurrent attacks, or serious underlying disease',
            expectations: 'Expects immediate pain relief, clear diagnosis, and plan to prevent recurrence',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case033Gout;
