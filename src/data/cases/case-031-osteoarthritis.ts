import { CaseData } from '@/types';

const case031Osteoarthritis: CaseData = {
  _id: 'case-031-osteoarthritis',
  case_id: 'Case 031 - Joint Pain and Swelling',
  case_name: 'Joint Pain and Swelling',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 56,
    gender: 'F',
    occupation: 'Not specified',
    chief_complaint: 'Gradually progressive nonpainful enlargement of terminal joint on left hand and right knee pain',
    presentation: {
      setting: 'Patient presents to the office complaining of gradually progressive nonpainful enlargement of the terminal joint on her left hand over 9 months, and right knee pain that worsens with activity.',
      duration: '9 months for hand; chronic for knee',
      hpi: {
        onset: 'Gradual onset over 9 months for hand joint; longstanding for knee',
        site: 'Left distal interphalangeal (DIP) joint of hand, right knee',
        character: 'Nontender bony enlargement, knee pain with crepitus and stiffness, locking sensation',
        radiation: 'No radiation — localized to affected joints',
        severity: 'Mild to moderate — some stiffness with typing, knee pain after long walks',
        time_course: 'Slowly progressive over months to years',
        exacerbating_factors: ['Typing (hand stiffness)', 'Long walks (knee pain)'],
        relieving_factors: ['Afternoon rest (stiffness improves)'],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: '130/85 mm Hg',
        heart_rate: '80 bpm',
      },
      others: {
        left_dip_enlargement: true,
        nontender_bony_enlargement: true,
        right_knee_crepitus: true,
        decreased_knee_rom: true,
        knee_locking: 'Occasional',
        stiffness_afternoon: true,
      },
      negatives: {
        fever: false,
        joint_redness: false,
        joint_warmth: false,
        morning_stiffness: false,
        synovitis: false,
        joint_swelling: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Obesity — BMI 43.3 kg/m2'],
      negatives: ['No prior joint disease', 'No prior joint surgery', 'No prior joint injury'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may be concerned about arthritis and worry it might be rheumatoid arthritis',
      concerns: 'Fear of progressive joint damage, disability, and loss of hand function',
      expectations: 'Expects diagnosis and treatment to relieve pain and prevent worsening',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what features support it?',
      answer: 'Osteoarthritis (OA) / degenerative joint disease. Supporting features: gradual progressive onset, nontender bony enlargement of DIP joint (Heberden node), activity-related knee pain with crepitus, no synovitis or redness, obesity as a major risk factor, and afternoon rather than morning stiffness.',
    },
    {
      question: 'What is the next diagnostic step and what would you expect to find?',
      answer: 'Obtain ESR and plain x-rays of the hand and knee. In OA: ESR is normal (helping rule out inflammatory arthritis). X-ray findings include joint space narrowing, osteophytes (most specific), subchondral sclerosis, and subchondral cysts. Early OA may show only subtle changes.',
    },
    {
      question: 'What is the best initial treatment?',
      answer: 'NSAIDs or acetaminophen for pain management. NSAIDs are superior to acetaminophen for pain control but carry GI and cardiovascular risks. For patients with cardiovascular disease, gastric ulcers, or CKD, topical NSAIDs (diclofenac, lidocaine, capsaicin) are preferred. Duloxetine is also approved for knee OA.',
    },
    {
      question: 'What are the most important risk factors and how can OA be prevented?',
      answer: 'Risk factors: obesity, repeated joint trauma, age (>40), female gender, and genetic factors. Prevention: weight loss (even modest reduction improves lower extremity joint pain), regular exercise to maintain joint mobility and muscle strength, and physical therapy.',
    },
    {
      question: 'How do you differentiate osteoarthritis from rheumatoid arthritis?',
      answer: 'OA: DIP and PIP joints affected, morning stiffness <30 minutes, worsens with activity, no synovitis, normal ESR, osteophytes on x-ray. RA: MCP and PIP joints affected (spares DIP), morning stiffness >1 hour, improves with activity, synovitis present, elevated ESR and rheumatoid factor, erosions on x-ray.',
    },
    {
      question: 'What are the characteristic x-ray findings in osteoarthritis?',
      answer: 'Osteophytes (bone spurs) — the most specific finding. Joint space narrowing (from cartilage loss). Subchondral sclerosis (increased bone density under cartilage). Subchondral cysts (fluid-filled cavities in bone). These findings may not be present in early disease.',
    },
    {
      question: 'When should surgery be considered for OA?',
      answer: 'Surgery is reserved for severe cases: intractable pain despite optimal medical therapy, major joint instability, loose body in the joint (joint mouse), or severe functional limitation. Total joint arthroplasty (e.g., knee replacement) is recommended for severe symptomatic OA when nonpharmacologic and medical therapy have failed.',
    },
    {
      question: 'What non-pharmacologic treatments are effective for OA?',
      answer: 'Patient education is critical. Weight loss for overweight patients. Regular exercise to improve flexibility and strengthen supporting muscles. Physical therapy with heat application. Canes and walkers to offload affected joints (reduce hip forces by up to 50%). Maintaining full range of motion. Multiple short periods of rest rather than prolonged inactivity.',
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
            'Avoids medical jargon uses terms patient can understand',
            'Shows empathy for pain and functional limitations',
            'Addresses concerns about progressive disability and need for surgery',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Left DIP joint and right knee',
            Onset: 'Gradual — 9 months for hand, chronic for knee',
            Character: 'Nontender bony enlargement, activity-related knee pain with crepitus',
            Radiation: 'Localized to affected joints',
            Associated_symptoms: 'Stiffness with typing, knee locking sensation, crepitus, decreased ROM',
            Time_course: 'Slowly progressive',
            Exacerbating_relieving: 'Worse with activity (walking, typing); improved with rest',
            Severity: 'Mild to moderate',
          },
          specific_history: [
            'Pattern of joint involvement — which joints affected',
            'Timing of stiffness — morning versus later in day',
            'Duration of morning stiffness',
            'Effect of activity on symptoms',
            'History of joint trauma or overuse',
            'Weight history and BMI',
            'Occupation and physical demands',
            'Impact on daily function and quality of life',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains diagnosis of osteoarthritis and how it differs from inflammatory arthritis',
            'Discusses role of x-ray and blood tests in diagnosis',
            'Explains treatment options including lifestyle modifications, medications, and surgery',
            'Discusses importance of weight loss and exercise in managing symptoms',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may worry this is rheumatoid arthritis or another serious inflammatory condition',
            concerns: 'Fear of progressive joint damage, disability, and needing joint replacement surgery',
            expectations: 'Expects pain relief and strategies to maintain function and prevent progression',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case031Osteoarthritis;
