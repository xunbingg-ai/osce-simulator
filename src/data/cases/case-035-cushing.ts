import { CaseData } from '@/types';

const case035Cushing: CaseData = {
  _id: 'case-035-cushing',
  case_id: 'Case 35 - Fragility Fracture and Weight Gain',
  case_name: 'Fragility Fracture and Weight Gain',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 57,
    gender: 'M',
    occupation: 'not specified — referred to internal medicine clinic',
    chief_complaint: 'Right radius/ulnar fracture from minor contact',
    presentation: {
      setting: 'Patient is referred to the internal medicine clinic after sustaining a right radius/ulnar fracture from incidental contact with a car door. X-rays showed marked bone demineralization.',
      duration: 'Fracture 1 week ago; fatigue, weakness, weight gain over 2 years; symptoms for 3 months',
      hpi: {
        onset: 'Gradual — fatigue and weakness noticed over 2 years; fracture 1 week ago',
        site: 'Right radius/ulnar (fracture), generalized bone demineralization',
        character: 'Fragility fracture from minor trauma; bone pain not specified',
        radiation: 'No radiation',
        severity: 'Fracture from minimal force (incidental contact)',
        time_course: 'Progressive weight gain and weakness over 2 years; fracture 1 week ago',
        exacerbating_factors: ['Minor trauma caused fracture'],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: '155/95 mm Hg',
        heart_rate: '80 bpm',
        hypertension: true,
      },
      constitutional: {
        temperature: '99 °F',
        weight_gain: '20 lb over 2 years, centripetal',
        bmi: '28 kg/m2',
        fatigue: true,
        weakness: true,
      },
      respiratory: {
        decreased_breath_sounds: 'Right hemithorax',
      },
      others: {
        hba1c: '8.5%',
        hypokalemia: '3.3 mmol/L',
        metabolic_alkalosis: true,
        fracture_from_minor_trauma: true,
        bone_demineralization: true,
      },
      negatives: {
        organomegaly: false,
        murmurs: false,
        adventitious_lung_sounds: false,
      },
    },
    medical_history: {
      chronic_conditions: ['No known medical conditions — has not seen a doctor in 5 years'],
      negatives: ['No known hypertension', 'No known diabetes', 'No known hyperlipidemia', 'No prior fractures'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: '30 pack-year smoking history (current smoker)',
      alcohol: 'No alcohol or illicit drug use',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may attribute fracture to clumsiness or aging, unaware of underlying endocrine condition.',
      concerns: 'May be worried about osteoporosis, cancer, or the meaning of the abnormal lab findings.',
      expectations: 'Expects treatment for the fracture and explanation for why his bones are weak.',
    },
  },
  questions: [
    {
      question: 'What is the cause of this patient\'s bony problem?',
      answer: 'Osteoporosis or osteopenia due to high corticosteroid levels (secondary osteoporosis). The fragility fracture and marked demineralization on x-ray are driven by cortisol excess, which inhibits osteoblast activity and augments osteoclast activity. Cigarette smoking is also a risk factor for osteoporosis.',
    },
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Cushing syndrome, likely paraneoplastic (ectopic ACTH syndrome). Features include fragility fracture, centripetal obesity, hypertension, hypokalemia, metabolic alkalosis, hyperglycemia (HbA1c 8.5%), reddish-purple striae, and a 30 pack-year smoking history suggesting possible small-cell lung carcinoma as the ectopic ACTH source.',
    },
    {
      question: 'What are the next diagnostic steps?',
      answer: '(1) Confirm Cushing syndrome with one of three tests: 24-hour urine-free cortisol, late-night salivary cortisol, or low-dose (1-mg) overnight dexamethasone suppression test. If positive, confirm with a second test. (2) Measure plasma ACTH to differentiate ACTH-dependent vs independent. (3) Obtain chest imaging (CT chest) given high suspicion for ectopic ACTH from lung cancer. (4) DEXA scan to assess bone mineral density.',
    },
    {
      question: 'How do you differentiate between ACTH-dependent and ACTH-independent Cushing syndrome?',
      answer: 'Measure plasma ACTH. Suppressed ACTH (<10 pg/mL) indicates ACTH-independent Cushing syndrome (adrenal adenoma or carcinoma) — proceed with adrenal CT/MRI. Normal or elevated ACTH (>10 pg/mL) indicates ACTH-dependent Cushing syndrome — either Cushing disease (pituitary ACTH-secreting adenoma, 80% of cases) or ectopic ACTH secretion (lung cancer, neuroendocrine tumors).',
    },
    {
      question: 'How is the source of ACTH-dependent Cushing syndrome confirmed?',
      answer: 'Pituitary-protocol MRI (identifies adenoma in ~60% of Cushing disease). If MRI is negative or inconclusive, inferior petrosal sinus sampling (IPSS) is the gold standard. Other tests include high-dose (8-mg) dexamethasone suppression test and CRH stimulation test. Ectopic ACTH syndrome presents with more severe hypercortisolism, hypokalemia, and metabolic alkalosis.',
    },
    {
      question: 'What is the first-line treatment for Cushing syndrome?',
      answer: 'Surgical resection of the causal tumor — transsphenoidal surgery for pituitary adenoma, adrenalectomy for adrenal adenoma, or resection of ectopic ACTH-producing tumor. Medical management (steroidogenesis inhibitors like ketoconazole, metyrapone) is used when surgery is not possible, for persistent hypercortisolism after surgery, or to rapidly lower cortisol in severely ill patients.',
    },
    {
      question: 'How are osteoporosis and osteopenia defined by T score, and what treatments are available?',
      answer: 'T score compares BMD to young healthy adults. Osteoporosis is T score -2.5 or less; osteopenia is T score between -1 and -2.5. Treatment includes adequate calcium (1000-1200 mg/day) and vitamin D (400-800 IU/day), bisphosphonates (alendronate, risedronate), weight-bearing exercise, smoking cessation, and addressing the underlying cause (corticosteroid excess in this case).',
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
            'Avoids medical jargon — explains Cushing syndrome concepts clearly',
            'Shows empathy for patient\'s fatigue, weakness, and concerns about the fracture',
            'Addresses smoking cessation sensitively without judgment',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Right radius/ulnar fracture; generalized bone demineralization',
            Onset: 'Gradual — weight gain and weakness over 2 years; fracture 1 week ago',
            Character: 'Fragility fracture from minor trauma; centripetal weight gain',
            Radiation: 'Ask about back pain suggesting vertebral fractures',
            Associated_symptoms: 'Fatigue, proximal muscle weakness, easy bruising, mood changes, libido',
            Time_course: 'Symptoms progressive over 2 years; first medical visit in 5 years',
            Exacerbating_relieving: 'Ask about steroid medication use (iatrogenic Cushing)',
            Severity: 'Fracture from incidental contact indicating significant bone fragility',
          },
          specific_history: [
            'Smoking history — quantify pack-years',
            'Review all medications including over-the-counter and herbal',
            'Family history of endocrine disorders or lung cancer',
            'Symptoms of hypercortisolism: striae, easy bruising, proximal weakness',
            'Review pulmonary symptoms: cough, dyspnea, hemoptysis',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies Cushing syndrome as underlying diagnosis',
            'Explains need for confirmatory testing (UFC, salivary cortisol, DST)',
            'Discusses imaging to identify source (chest CT, pituitary MRI)',
            'Explains treatment options including surgical resection and medical management',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think the fracture is just bad luck or aging, not recognizing underlying disease',
            concerns: 'Fear of cancer (lung cancer), osteoporosis, and long-term health implications',
            expectations: 'Expects explanation for fragility fracture and comprehensive treatment plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case035Cushing;
