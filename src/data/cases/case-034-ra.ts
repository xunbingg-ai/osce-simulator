import { CaseData } from '@/types';

const case034RA: CaseData = {
  _id: 'case-034-ra',
  case_id: 'Case 34 - Symmetric Joint Pain and Stiffness',
  case_name: 'Symmetric Joint Pain and Stiffness',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 32,
    gender: 'F',
    occupation: 'nurse',
    chief_complaint: 'Intermittent pain, stiffness, and swelling in both hands and wrists',
    presentation: {
      setting: 'Patient presents to the office with a 1-year history of intermittent episodes of pain, stiffness, and swelling in both hands and wrists.',
      duration: 'Approximately 1 year, episodic',
      hpi: {
        onset: 'Gradual onset over the past year',
        site: 'Bilateral hands (PIP joints, MCP joints), wrists, now also knees and ankles',
        character: 'Pain, stiffness, and swelling — inflammatory pattern',
        radiation: 'No radiation — symmetric joint distribution',
        severity: 'Moderate to severe — interfering with work and daily activities',
        time_course: 'Episodes last several weeks then resolve; progressive involvement of more joints',
        exacerbating_factors: ['Prolonged inactivity', 'Morning — worst in early hours'],
        relieving_factors: ['Movement and activity over several hours'],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: '120/70 mm Hg',
        heart_rate: '82 bpm',
      },
      constitutional: {
        malaise: true,
        fatigue: true,
        temperature: 'Afebrile',
        hemoglobin: '11.2 g/dL',
        hematocrit: '32.5%',
      },
      others: {
        pip_joint_swelling: true,
        mcp_joint_swelling: true,
        wrist_swelling: true,
        knee_swelling: true,
        morning_stiffness_hours: true,
        joint_tenderness: true,
        joint_redness: true,
      },
      negatives: {
        fever: false,
        chills: false,
        skin_rash: false,
        weight_loss: false,
        hepatosplenomegaly: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No prior autoimmune disease', 'No recent infections', 'No chronic conditions'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: [],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      occupation: 'nurse',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may be concerned about having a chronic autoimmune condition given the persistent and progressive nature of symptoms.',
      concerns: 'Worried about long-term disability, ability to continue working as a nurse, and progressive joint deformity.',
      expectations: 'Expects a definitive diagnosis and treatment to control symptoms and prevent disease progression.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why?',
      answer: 'Rheumatoid arthritis (RA). The patient presents with chronic, symmetric, peripheral polyarthritis affecting PIP joints, MCP joints, wrists, and knees, with morning stiffness lasting more than 1 hour, elevated ESR, mild normocytic anemia, and constitutional symptoms (malaise, fatigue). This pattern is classic for RA.',
    },
    {
      question: 'What is the next diagnostic step?',
      answer: 'Test for rheumatoid factor (RF) and anti-CCP (cyclic citrullinated peptide) antibodies. RF is found in 80-85% of RA patients but is not highly specific. Anti-CCP antibodies have similar sensitivity but approximately 95% specificity for RA.',
    },
    {
      question: 'How does rheumatoid arthritis differ from osteoarthritis in terms of joint involvement?',
      answer: 'RA typically affects wrists, MCP joints, and PIP joints while sparing DIP joints. It is inflammatory with morning stiffness >1 hour. OA typically affects DIP joints (Heberden nodes), PIP joints (Bouchard nodes), and weight-bearing joints (knees, hips). OA is degenerative, non-inflammatory, and morning stiffness is brief (<30 minutes).',
    },
    {
      question: 'What are the extra-articular manifestations of rheumatoid arthritis?',
      answer: 'Vasculitic lesions (ischemic ulcers), ocular manifestations (keratoconjunctivitis sicca/Sjogren syndrome), respiratory (interstitial lung disease), cardiac (pericarditis), neurologic (cervical spine instability, carpal tunnel syndrome), hematologic (anemia of chronic disease), and Felty syndrome (RA + splenomegaly + leukopenia + thrombocytopenia).',
    },
    {
      question: 'What are the first-line treatment options for rheumatoid arthritis?',
      answer: 'Disease-modifying antirheumatic drugs (DMARDs) are the cornerstone. Methotrexate is typically first-line due to rapid onset and tolerability. Other nonbiologic DMARDs include hydroxychloroquine, sulfasalazine, and leflunomide. NSAIDs and corticosteroids provide symptom relief but do not alter disease progression.',
    },
    {
      question: 'What biologic agents are used in rheumatoid arthritis and what are their risks?',
      answer: 'TNF antagonists (etanercept, infliximab, adalimumab, golimumab, certolizumab), anakinra (IL-1 receptor antagonist), abatacept (CTLA-4-Ig), rituximab (anti-CD20), tocilizumab (anti-IL-6), and JAK inhibitors (tofacitinib, baricitinib). Key risk is increased infection, especially reactivation of latent tuberculosis — screening is mandatory before starting TNF antagonists.',
    },
    {
      question: 'What are the ACR/EULAR classification criteria for rheumatoid arthritis?',
      answer: 'Scoring based on four domains: (1) Number and site of involved joints (0-5 points), (2) Serologic abnormality — RF or anti-CCP (0-3 points), (3) Elevated acute-phase reactants — ESR or CRP (0-1 point), (4) Symptom duration at least 6 weeks (0-1 point). Definitive diagnosis requires a score of at least 6 out of 10.',
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
            'Avoids medical jargon — explains arthritis concepts clearly',
            'Shows empathy for patient\'s chronic pain and impact on daily life and work',
            'Addresses patient concerns about long-term disability and prognosis',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Bilateral hands, wrists, knees, ankles — PIP, MCP joints',
            Onset: 'Gradual over past year with episodic pattern',
            Character: 'Inflammatory pain with swelling, redness, stiffness',
            Radiation: 'Ask about progression to other joints',
            Associated_symptoms: 'Malaise, fatigue, fever, weight loss, skin rash, eye symptoms',
            Time_course: 'Episodes lasting weeks; morning stiffness >1 hour',
            Exacerbating_relieving: 'Worse with inactivity; improves with movement',
            Severity: 'Moderate to severe — interfering with work as a nurse',
          },
          specific_history: [
            'Duration of morning stiffness',
            'Pattern of joint involvement — symmetric vs asymmetric',
            'Family history of autoimmune disease',
            'Occupational impact on nursing duties',
            'Review of systems for extra-articular manifestations',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies rheumatoid arthritis as most likely diagnosis',
            'Explains diagnostic testing (RF, anti-CCP, ESR, imaging)',
            'Discusses DMARD therapy and importance of early treatment',
            'Explains prognosis and need for long-term rheumatology follow-up',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may be worried about having a crippling, untreatable form of arthritis',
            concerns: 'Fear of progressive joint deformity, disability, inability to work as a nurse',
            expectations: 'Expects effective treatment to control symptoms and maintain quality of life',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case034RA;
