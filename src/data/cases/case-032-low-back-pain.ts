import { CaseData } from '@/types';

const case032LowBackPain: CaseData = {
  _id: 'case-032-low-back-pain',
  case_id: 'Case 032 - Low Back Pain',
  case_name: 'Low Back Pain',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 45,
    gender: 'F',
    occupation: 'House cleaner',
    chief_complaint: 'Low back pain radiating down right leg',
    presentation: {
      setting: 'Patient presents to the office with low back pain, requesting an x-ray. She works cleaning homes and has had this pain off and on for several years, with acute worsening over the past 2 days after vigorous vacuuming.',
      duration: '2 days (acute exacerbation of chronic pain)',
      hpi: {
        onset: 'Acute worsening 2 days ago after vigorous vacuuming of a rug',
        site: 'Right lower back radiating down posterior right thigh to knee',
        character: 'Sharp pain with radiation down leg',
        radiation: 'Down posterior right thigh to knee',
        severity: 'Severe — worse than ever before, difficulty maneuvering onto exam table',
        time_course: 'Off and on for years, acute worsening for 2 days',
        exacerbating_factors: ['Vigorous vacuuming', 'Movement'],
        relieving_factors: ['Lying flat on back with legs slightly elevated', 'Ibuprofen 400 mg'],
      },
    },
    symptoms: {
      others: {
        low_back_pain: true,
        right_leg_radiation: true,
        positive_straight_leg_raise_right: true,
        normal_strength: true,
        normal_sensation: true,
        normal_reflexes: true,
        no_numbness: true,
        no_tingling: true,
      },
      negatives: {
        fever: false,
        bowel_bladder_dysfunction: false,
        saddle_anesthesia: false,
        weight_loss: false,
        night_pain: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Obesity — moderately obese'],
      negatives: ['No significant medical history', 'No prior back surgery'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Ibuprofen 400 mg as needed for pain'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      occupation: 'House cleaner',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient thinks she needs an x-ray for her back pain and wants to understand the cause',
      concerns: 'Worried about a serious spine problem and her ability to continue working as a house cleaner',
      expectations: 'Expects imaging to diagnose the problem and medication for pain relief',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what features support it?',
      answer: 'Musculoskeletal low back pain with possible sciatica without neurologic deficits. Supporting features: acute exacerbation of chronic pain after physical activity, pain radiating down posterior leg (sciatic distribution), positive straight leg raise test, but normal motor strength, sensation, and reflexes. No red flag symptoms are present.',
    },
    {
      question: 'What is your next step in management?',
      answer: 'Conservative management: encourage continuation of usual activity while avoiding twisting motions or heavy lifting. Scheduled NSAIDs (not just PRN) and/or muscle relaxants. Massage or physical therapy may help. Follow up in 4 weeks. Long-term advice includes weight loss and back-strengthening exercises. No imaging is indicated at this point as there are no red flag symptoms.',
    },
    {
      question: 'What are the red flag symptoms for serious causes of low back pain?',
      answer: 'Weight loss, fever/chills, age <20 or >50, constant/non-mechanical pain (not relieved by rest or position change), night pain, significant neurologic symptoms (motor weakness, saddle anesthesia), history of cancer, IV drug use, immunocompromise, bowel or bladder dysfunction, and trauma. These require urgent evaluation with imaging.',
    },
    {
      question: 'When are imaging studies indicated for low back pain?',
      answer: 'Imaging is not indicated for uncomplicated acute low back pain without red flags in the first 4-6 weeks. After 4-6 weeks of conservative management without improvement, plain x-rays may be considered. MRI is reserved for patients with concerning neurologic findings, red flag symptoms, or when surgical intervention is being considered (persistent radicular pain or neurologic deficits).',
    },
    {
      question: 'What is cauda equina syndrome and how does it present?',
      answer: 'A surgical emergency caused by compression of multiple sacral nerve roots. Presenting features: low back pain with saddle anesthesia (decreased sensation in the perineal/buttock area), bowel or bladder dysfunction (urinary retention, incontinence), lower extremity weakness, and loss of ankle reflexes. Requires immediate MRI and surgical decompression to prevent permanent neurologic damage.',
    },
    {
      question: 'What is the prognosis for acute low back pain with sciatica?',
      answer: 'Excellent — 90% of patients recover within 4-6 weeks with conservative management. Bed rest is not beneficial and may be harmful. Maintaining usual activity as tolerated is superior to bed rest. Patients without disability or nerve root compression can maintain judicious activity.',
    },
    {
      question: 'A 70-year-old woman presents with low back pain, weight loss, generalized weakness, elevated ESR, anemia, hypercalcemia, and renal impairment. What is the most likely diagnosis?',
      answer: 'Multiple myeloma. The combination of lytic bone lesions causing back pain, hypercalcemia, renal failure, anemia, and elevated ESR (from immunoglobulin production) is characteristic. Plain radiographs may show lytic lesions, but bone scans are often negative because the lesions are purely osteolytic.',
    },
    {
      question: 'What are the common causes of low back pain that require specific workup beyond conservative management?',
      answer: 'Cancer (multiple myeloma, bony metastasis from lung/breast/prostate), compression fracture (osteoporosis, steroid use), infection (diskitis, osteomyelitis, epidural abscess — fever, IV drug use), inflammatory back pain (ankylosing spondyloarthritis — improves with activity, morning stiffness), and spinal stenosis (neurogenic claudication).',
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
            'Shows empathy for pain and difficulty with daily activities and work',
            'Addresses patient request for x-ray and explains rationale for conservative management',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Right lower back, radiating down posterior right thigh to knee',
            Onset: 'Acute worsening 2 days ago on a background of chronic intermittent pain',
            Character: 'Sharp pain radiating down leg in sciatic distribution',
            Radiation: 'Down posterior right thigh to knee',
            Associated_symptoms: 'Difficulty moving, positive straight leg raise, no numbness or tingling',
            Time_course: 'Off and on for years; acute severe exacerbation for 2 days',
            Exacerbating_relieving: 'Worse with vacuuming/movement; relieved by lying flat with legs elevated and ibuprofen',
            Severity: 'Severe — worst episode ever, difficulty with movement',
          },
          specific_history: [
            'Occupation and physical demands',
            'Precipitating activity',
            'Past episodes — frequency and duration',
            'Neurologic symptoms — numbness, tingling, weakness',
            'Bowel or bladder dysfunction',
            'Systemic symptoms — fever, weight loss, night sweats',
            'History of cancer or trauma',
            'Prior treatments and response',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains diagnosis of musculoskeletal low back pain with sciatica without neurologic compromise',
            'Discusses why imaging is not necessary at this stage without red flag symptoms',
            'Explains conservative management plan including activity modification and scheduled NSAIDs',
            'Discusses warning signs that would warrant return for re-evaluation',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient believes she needs an x-ray to diagnose a serious spine problem',
            concerns: 'Fear of serious injury, worry about ability to work and support herself',
            expectations: 'Expects imaging to identify the problem and effective pain treatment',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case032LowBackPain;
