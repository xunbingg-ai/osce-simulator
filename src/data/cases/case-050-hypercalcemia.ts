import { CaseData } from '@/types';

const case050Hypercalcemia: CaseData = {
  _id: 'case-050-hypercalcemia',
  case_id: 'Case 050 - Arm Pain and Swelling After a Fall',
  case_name: 'Arm Pain and Swelling After a Fall',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 63,
    gender: 'F',
    occupation: 'Not specified',
    chief_complaint: 'Left upper arm pain and swelling after a fall',
    presentation: {
      setting: 'Patient is brought to the emergency center for left upper arm pain and swelling following a fall at home.',
      duration: 'Acute arm pain — hours; prodromal symptoms — 2 months',
      hpi: {
        onset: 'Sudden onset of arm pain after fall; progressive fatigue and confusion over 2 months',
        site: 'Left midhumerus — pain, swelling, deformity',
        character: 'Sharp pain at fracture site; progressive fatigue and absentmindedness',
        radiation: 'Localized to left upper arm',
        severity: 'Moderate to severe pain from fracture',
        time_course: 'Arm pain acute; constitutional symptoms progressive over 2 months',
        exacerbating_factors: ['Movement of left arm'],
        relieving_factors: ['Immobilization'],
      },
    },
    symptoms: {
      constitutional: {
        fatigue: 'Progressive fatigue over 2 months',
        weight_loss: true,
        appetite_loss: true,
        confusion: 'Absentmindedness',
      },
      others: {
        nocturia: 'Several times per night',
        polydipsia: 'Increased thirst',
        fracture_left_humerus: true,
        lytic_lesions: 'Suspected in proximal humerus and skull',
      },
      negatives: {
        fever: false,
        diabetes_glucose_test_negative: true,
        carotid_bruits: false,
        thyroid_normal: true,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No diabetes', 'No prior fractures', 'No known malignancy'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      occupation: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient and family may think the fall caused the fracture in a frail elderly person, unaware of the underlying bone disease.',
      concerns: 'Concerned about the fracture, need for surgery, and the possibility of cancer given weight loss and fatigue.',
      expectations: 'Expects treatment for the fracture and pain relief; may not anticipate the need for a full workup for underlying disease.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and underlying etiology?',
      answer: 'Symptomatic hypercalcemia (serum calcium 13 mg/dL) with pathologic fracture of the left humerus. The most likely underlying etiology is multiple myeloma, given the combination of hypercalcemia, lytic bone lesions, anemia (Hb 9.2), and renal insufficiency (creatinine 2.1). Other possibilities include bony metastases from solid tumors.',
    },
    {
      question: 'What is the first step in managing this patient\'s hypercalcemia?',
      answer: 'IV normal saline fluid resuscitation. The patient is clinically dehydrated (dry mucous membranes, prerenal azotemia with creatinine 2.1). Volume expansion improves renal perfusion and enhances urinary calcium excretion. This should be initiated in the emergency department even before definitive diagnosis.',
    },
    {
      question: 'How do you distinguish malignancy-related hypercalcemia from primary hyperparathyroidism?',
      answer: 'Malignancy: Acute onset, symptomatic, high calcium with suppressed PTH (low or undetectable). PTHrP may be elevated in solid tumors. Primary hyperparathyroidism: Chronic, often asymptomatic, elevated PTH with low phosphate. Most common in otherwise well patients on routine screening.',
    },
    {
      question: 'What diagnostic tests would confirm multiple myeloma?',
      answer: 'Serum protein electrophoresis (SPEP) and urine protein electrophoresis (UPEP) for monoclonal gammopathy (M-spike). Immunofixation to confirm the monoclonal protein. Bone marrow biopsy showing > 10% clonal plasma cells. Skeletal survey for lytic lesions. Additional labs: serum free light chains, beta-2 microglobulin.',
    },
    {
      question: 'What are the classic features of multiple myeloma?',
      answer: 'The classic triad: bone pain from lytic lesions, anemia, and renal insufficiency. Other features: hypercalcemia (from osteoclast activation), recurrent infections (from hypogammaglobulinemia), and an elevated globulin fraction on serum chemistries with monoclonal gammopathy on electrophoresis.',
    },
    {
      question: 'What additional therapies are available for severe hypercalcemia?',
      answer: 'Bisphosphonates (pamidronate, zoledronic acid) — inhibit osteoclast activity, effect in 1-2 days. Calcitonin — rapid onset but tachyphylaxis. Glucocorticoids — effective in cancer-induced and granulomatous hypercalcemia but slower onset. Dialysis — for severe cases with renal insufficiency. Loop diuretics (furosemide) after volume repletion to enhance calciuresis.',
    },
    {
      question: 'What is MGUS and how does it relate to multiple myeloma?',
      answer: 'Monoclonal gammopathy of undetermined significance (MGUS) is a benign precursor condition with monoclonal immunoglobulin production without end-organ damage. It affects up to 1% of people > 50 and 10% > 75. Approximately 1% per year progress to multiple myeloma. MGUS requires no therapy, while symptomatic myeloma requires chemotherapy (dexamethasone, thalidomide/lenalidomide, bortezomib) and evaluation for stem cell transplant.',
    },
    {
      question: 'What are the symptoms of hypercalcemia?',
      answer: 'Mild (< 12 mg/dL): often asymptomatic. Moderate to severe (> 13 mg/dL): CNS symptoms (lethargy, confusion, stupor, coma), GI symptoms (anorexia, nausea, constipation, peptic ulcer), renal effects (polyuria, nocturia, polydipsia, prerenal azotemia, nephrolithiasis), and musculoskeletal complaints (weakness, arthralgias). The mnemonic for hyperparathyroidism: stones, moans, groans, bones, and psychiatric overtones.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and calm, reassuring demeanor',
            'Avoids medical jargon — explains terms like hypercalcemia and lytic lesions clearly',
            'Shows empathy for pain from fracture and anxiety about underlying cause',
            'Addresses patient and family concerns about possible malignancy',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Bone pain — location, nature, exacerbating factors; ask about back pain',
            Onset: 'Timeline of fatigue, confusion, nocturia, weight loss',
            Character: 'Type of pain — dull ache vs sharp; mental status changes',
            Radiation: 'Ask about other bone pain, spinal cord compression symptoms',
            Associated_symptoms: 'Polyuria, polydipsia, constipation, nausea, anorexia, confusion, recurrent infections, easy bruising or bleeding',
            Time_course: 'Rate of progression of constitutional symptoms over 2 months',
            Exacerbating_relieving: 'Activity, rest, effect of hydration on symptoms',
            Severity: 'Pain scale; functional impairment; level of consciousness',
          },
          specific_history: [
            'History of prior fractures or bone pain',
            'Family history of osteoporosis, malignancy, or hypercalcemia',
            'Medication history — thiazides, lithium, calcium/vitamin D supplements',
            'History of granulomatous disease (sarcoidosis, TB)',
            'Review of systems for other malignancy symptoms',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies hypercalcemia with pathologic fracture as the presentation',
            'Explains differential diagnosis and the likelihood of multiple myeloma',
            'Describes appropriate diagnostic workup (SPEP, UPEP, bone marrow biopsy, PTH, PTHrP)',
            'Discusses immediate management (IV fluids) and definitive treatment options',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think the fall simply caused a fracture in an aging bone',
            concerns: 'Fear of cancer diagnosis; worry about need for surgery on the arm; concern about prognosis and treatment',
            expectations: 'Expects pain relief and fracture management; may need guidance on the importance of full diagnostic workup',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case050Hypercalcemia;
