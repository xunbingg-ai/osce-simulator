import { CaseData } from '@/types';

const case053Graves: CaseData = {
  _id: 'case-053-graves',
  case_id: 'Case 053 - Unintentional Weight Loss',
  case_name: 'Unintentional Weight Loss',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 37,
    gender: 'F',
    occupation: 'Not specified — previously healthy',
    chief_complaint: 'Unintentional weight loss over the past 3 months',
    presentation: {
      setting: 'Patient presents to the clinic for unintentional weight loss.',
      duration: '3 months, progressive',
      hpi: {
        onset: 'Gradual onset over 3 months — 15 lb weight loss without diet or activity changes',
        site: 'Systemic',
        character: 'Weight loss despite excellent appetite; feeling well otherwise',
        radiation: 'N/A',
        severity: 'Moderate — 15 lb unintentional loss',
        time_course: 'Progressive over 3 months',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '108 bpm',
        blood_pressure: '142/82 mm Hg',
        murmur: '2/6 systolic ejection murmur',
      },
      others: {
        goiter: 'Large, smooth, nontender thyroid gland',
        exophthalmos: 'Protuberant eyes, staring appearance',
        appetite: 'Excellent',
        loose_stools: 'Occasional loose stools',
        skin: 'Warm and dry',
        tremor: 'Fine resting tremor of fingers',
      },
      negatives: {
        fatigue: false,
        heat_intolerance: false,
        cold_intolerance: false,
        fever: false,
        diarrhea: false,
        anorexia: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['Previously healthy', 'No significant medical history'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may be pleased with the weight loss at first, but is now concerned about why it is happening despite eating well.',
      concerns: 'Worried about possible cancer or serious illness causing the weight loss; concerned about the tremor and palpitations affecting daily life.',
      expectations: 'Expects blood tests to determine the cause and effective treatment to address symptoms.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and how would you confirm it?',
      answer: 'Thyrotoxicosis due to Graves disease. The combination of unintentional weight loss, tachycardia, exophthalmos, diffuse goiter, and fine tremor is classic. Diagnosis is confirmed by a low TSH and elevated free T4. Additional testing: thyroid-stimulating immunoglobulins (TSI) are elevated in Graves disease; radioactive iodine uptake scan shows diffusely increased uptake.',
    },
    {
      question: 'What are the treatment options for Graves disease?',
      answer: 'Three main options: (1) Antithyroid drugs — methimazole (preferred) or propylthiouracil (PTU), which inhibit thyroid hormone synthesis. Used for 1-2 years with 20-30% remission rate. (2) Radioactive iodine ablation — most common definitive treatment in the US, administered as oral sodium-131I, causes thyroid ablation over 6-18 weeks, results in hypothyroidism requiring lifelong levothyroxine. (3) Subtotal thyroidectomy — reserved for large goiters with obstructive symptoms, pregnancy, or contraindications to other therapies.',
    },
    {
      question: 'How would treatment differ if the patient were pregnant?',
      answer: 'Radioactive iodine is contraindicated in pregnancy (risk of miscarriage and birth defects). Methimazole is contraindicated in the first trimester (teratogenic). PTU can be used during pregnancy as it has low transplacental transfer. Beta-blockers (propranolol) can be used for symptom control. Close monitoring of maternal and fetal thyroid function is essential.',
    },
    {
      question: 'What is the pathophysiology of Graves disease?',
      answer: 'Graves disease is an autoimmune disorder caused by autoantibodies (thyroid-stimulating immunoglobulins) that bind to and activate the TSH receptor on thyroid follicular cells. This stimulates uncontrolled thyroid hormone synthesis and secretion as well as thyroid growth (goiter). The ophthalmopathy (exophthalmos) is caused by TSH receptor-directed antibodies that stimulate orbital fibroblasts and adipocytes.',
    },
    {
      question: 'What are the signs and symptoms of hyperthyroidism by organ system?',
      answer: 'Cardiac: tachycardia, palpitations, widened pulse pressure, flow murmurs, atrial fibrillation (10-20%). Dermatologic: warm moist skin, fine hair, sweating. Eyes: lid lag, wide-eyed stare, exophthalmos, periorbital edema, diplopia. GI: weight loss despite increased appetite, hyperdefecation. Neuromuscular: tremor, nervousness, brisk reflexes, proximal muscle weakness, insomnia. Reproductive: oligomenorrhea, reduced fertility.',
    },
    {
      question: 'What is thyroid storm and how is it managed?',
      answer: 'Thyroid storm is a life-threatening decompensated thyrotoxicosis with tachycardia > 140 bpm, fever (104-106 °F), agitation, delirium, vomiting, and diarrhea, often triggered by infection, surgery, or trauma. Management: supportive care with IV fluids, beta-blockers (propranolol) for adrenergic symptoms, antithyroid drugs (PTU or methimazole), iodine solution to block hormone release, glucocorticoids, and treatment of the precipitating cause.',
    },
    {
      question: 'What other causes of hyperthyroidism should be considered?',
      answer: '(1) Toxic multinodular goiter — in older patients, irregular nodules, normal to increased iodine uptake. (2) Autonomous hyperfunctioning adenoma (hot nodule) — single nodule > 3 cm, increased uptake on scan. (3) Thyroiditis (subacute, postpartum, painless) — destruction of tissue releasing preformed hormone, low iodine uptake. (4) Factitious or iatrogenic thyrotoxicosis — exogenous thyroid hormone. (5) Medications — amiodarone, iodine load.',
    },
    {
      question: 'What complications can occur after treatment of Graves disease?',
      answer: 'After radioactive iodine: most patients develop hypothyroidism requiring lifelong levothyroxine (30% in first year, 3%/year thereafter). Ophthalmopathy may worsen after radioactive iodine — glucocorticoids can prevent this. After surgery: recurrent laryngeal nerve injury, hypoparathyroidism. After antithyroid drugs: rash, allergic reactions, arthritis, hepatitis, agranulocytosis (rare but serious — patient should be warned to report sore throat or fever).',
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
            'Avoids medical jargon — explains thyroid function and autoimmune disease clearly',
            'Shows empathy for patient\'s concern about unintentional weight loss',
            'Addresses patient concerns about possible cancer and eye symptoms',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Neck — ask about thyroid pain, swelling, difficulty swallowing or breathing',
            Onset: 'Timeline of weight loss, palpitations, tremor, eye changes',
            Character: 'Nature of loose stools, palpitations — constant vs episodic',
            Radiation: 'Ask about vision changes, diplopia, periorbital edema',
            Associated_symptoms: 'Heat intolerance, sweating, palpitations, anxiety, insomnia, irritability, menstrual changes, increased appetite, dyspnea on exertion',
            Time_course: 'Three months of progressive symptoms',
            Exacerbating_relieving: 'Stress, physical activity, recent infections',
            Severity: 'Functional impact — ability to work, exercise, sleep',
          },
          specific_history: [
            'Family history of thyroid disease or autoimmune disorders',
            'Recent pregnancy or postpartum status',
            'Medication history — amiodarone, iodine contrast, lithium, thyroid hormone supplements',
            'Review of systems for other autoimmune conditions',
            'Dietary history — iodine intake, weight changes',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies Graves disease as the cause of thyrotoxicosis',
            'Explains diagnostic approach (TSH, free T4, TSI, radioactive iodine scan)',
            'Discusses treatment options and their risks and benefits',
            'Explains special considerations for pregnancy if applicable',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may initially be unconcerned about weight loss but now worried about underlying cause',
            concerns: 'Fear of cancer; concern about eye changes being permanent; worry about heart symptoms; concern about treatment side effects',
            expectations: 'Expects effective treatment to control symptoms and prevent long-term complications',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case053Graves;
