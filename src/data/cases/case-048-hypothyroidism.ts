import { CaseData } from '@/types';

const case048Hypothyroidism: CaseData = {
  _id: 'case-048-hypothyroidism',
  case_id: 'Case 048 - Menstrual Irregularity',
  case_name: 'Menstrual Irregularity',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 38,
    gender: 'F',
    occupation: 'Not specified',
    chief_complaint: 'Menstrual irregularity and secondary amenorrhea',
    presentation: {
      setting: 'Patient presents to the clinic for evaluation of menstrual irregularity.',
      duration: '9 months of lengthening cycles; 3 months of amenorrhea',
      hpi: {
        onset: 'Gradual — cycles began lengthening approximately 9 months ago, with complete cessation of menses for the last 3 months',
        site: 'N/A — gynecologic/reproductive system complaint',
        character: 'Secondary amenorrhea after previously regular 28-30 day cycles',
        radiation: 'N/A',
        severity: 'Moderate — complete amenorrhea for 3 months',
        time_course: 'Progressive over 9 months',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        fatigue: true,
        weight_gain: 'Approximately 10 lb over the past year',
        feeling_cold: 'Not explicitly reported',
      },
      others: {
        menstrual_history: 'Regular 28-30 day cycles since menarche at age 12',
        pregnancies: 'Three prior uncomplicated pregnancies and deliveries',
        contraception: 'Bilateral tubal ligation after last pregnancy',
        secondary_amenorrhea: true,
        galactorrhea: 'Slight whitish nipple discharge expressed from breasts',
        hair_thinning: 'Mild thinning of hair',
        coarse_skin: 'Slightly more coarse skin texture',
      },
      negatives: {
        headaches: false,
        visual_changes: false,
        hot_flashes: false,
        vaginal_dryness: false,
        hirsutism: false,
        obesity: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior surgeries besides tubal ligation'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Multivitamins only'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may be concerned about early menopause or a pituitary tumor given the galactorrhea.',
      concerns: 'Worried about fertility implications, possible tumor, or hormonal imbalance; concerned about weight gain and fatigue.',
      expectations: 'Expects blood tests to determine the cause and appropriate treatment to restore normal menstrual cycles.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and underlying etiology?',
      answer: 'Oligomenorrhea and galactorrhea due to hypothyroidism. The most likely etiology is primary hypothyroidism, most often caused by autoimmune (Hashimoto) thyroiditis. Hypothyroidism leads to elevated TRH, which stimulates prolactin secretion, causing galactorrhea and menstrual irregularities.',
    },
    {
      question: 'What is the diagnostic approach to secondary amenorrhea?',
      answer: 'First, exclude pregnancy (serum beta-hCG). Then check TSH (to rule out thyroid disease) and prolactin level. Based on results, evaluate further: elevated FSH suggests ovarian failure; elevated prolactin > 200 suggests pituitary adenoma (MRI indicated); low/normal FSH with normal prolactin and TSH suggests hypothalamic hypogonadism or PCOS.',
    },
    {
      question: 'What laboratory tests would confirm the diagnosis?',
      answer: 'Elevated TSH with low free T4 confirms primary hypothyroidism. Prolactin level may be mildly elevated due to TRH stimulation. Anti-thyroid peroxidase (anti-TPO) antibodies are typically positive in Hashimoto thyroiditis. If prolactin is markedly elevated (> 200), pituitary MRI is indicated.',
    },
    {
      question: 'How does hypothyroidism cause galactorrhea?',
      answer: 'In primary hypothyroidism, the hypothalamus increases thyrotropin-releasing hormone (TRH) to stimulate the pituitary. TRH also stimulates prolactin secretion from lactotroph cells. Hyperprolactinemia then inhibits hypothalamic GnRH secretion, leading to menstrual irregularities and galactorrhea.',
    },
    {
      question: 'What is the treatment for hypothyroidism and what is the goal of therapy?',
      answer: 'Synthetic levothyroxine (T4) replacement is the treatment of choice — once-daily dosing at 1.6 mcg/kg (typically 100-150 mcg daily). In older patients or those with cardiovascular disease, start low (25-50 mcg/day) and increase gradually every 4-6 weeks. The goal is normalized TSH (ideally in the lower half of the reference range) and relief of symptoms.',
    },
    {
      question: 'What are the common causes of secondary amenorrhea?',
      answer: 'Pregnancy (most common), hypothalamic disorders (nutrition, excessive exercise, stress — > 45%), PCOS (30%), pituitary adenomas/prolactinomas (18%), premature ovarian failure, thyroid disease, and adult-onset adrenal hyperplasia. PCOS is characterized by anovulation, hyperandrogenism (hirsutism, acne), and insulin resistance.',
    },
    {
      question: 'What is the differential diagnosis for galactorrhea?',
      answer: 'Galactorrhea can be caused by: (1) Hypothyroidism (elevated TRH stimulates prolactin), (2) Prolactinoma (prolactin > 200), (3) Medications (antipsychotics, metoclopramide, SSRIs), (4) Chest wall stimulation, (5) Chronic renal failure, (6) Idiopathic. The presence of fatigue, weight gain, and hair thinning in this patient points toward hypothyroidism.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and establishes rapport',
            'Avoids medical jargon when explaining hormonal axis',
            'Shows sensitivity when discussing menstrual history and galactorrhea',
            'Addresses patient concerns about possible tumor or early menopause',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Ask about thyroid area — pain, swelling, tenderness; ask about breast exam findings',
            Onset: 'Timeline of menstrual changes, galactorrhea onset relative to other symptoms',
            Character: 'Nature of galactorrhea — spontaneous vs expressed, color, consistency, unilateral vs bilateral',
            Radiation: 'Ask about symptoms of hyperprolactinemia — decreased libido, visual changes, headaches',
            Associated_symptoms: 'Fatigue, cold intolerance, constipation, dry skin, muscle cramps, carpal tunnel syndrome, menopausal symptoms (hot flashes, vaginal dryness)',
            Time_course: 'Duration of symptoms, progression over months',
            Exacerbating_relieving: 'Stress, exercise patterns, diet/nutrition, medication use',
            Severity: 'Impact on daily functioning, quality of life',
          },
          specific_history: [
            'Obstetric history — any postpartum hemorrhage (Sheehan syndrome)',
            'Medication history — any dopamine antagonists, antipsychotics',
            'Exercise and nutrition patterns — possible hypothalamic amenorrhea',
            'Family history of autoimmune disease or thyroid disorders',
            'Previous pregnancies and breastfeeding history',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies hypothyroidism as the most likely cause of oligomenorrhea and galactorrhea',
            'Explains the relationship between thyroid function, prolactin, and menstrual cycles',
            'Describes appropriate diagnostic tests (TSH, free T4, prolactin, anti-TPO antibodies)',
            'Discusses treatment with levothyroxine and expected timeline for symptom improvement',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may be concerned she is entering early menopause or has a pituitary tumor',
            concerns: 'Fertility implications; worry about underlying malignancy; concern about weight gain and fatigue affecting daily life',
            expectations: 'Expects a clear diagnosis from blood tests and effective treatment to restore normal cycles and energy levels',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case048Hypothyroidism;
