import { CaseData } from '@/types';

const case049AdrenalInsufficiency: CaseData = {
  _id: 'case-049-adrenal-insufficiency',
  case_id: 'Case 049 - Near-Fainting and Fatigue',
  case_name: 'Near-Fainting and Fatigue',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 58,
    gender: 'F',
    occupation: 'Not specified — plays tennis recreationally',
    chief_complaint: 'Near-fainting spell and fatigue',
    presentation: {
      setting: 'Patient comes to the office after experiencing a near-fainting spell one day ago while playing tennis.',
      duration: 'Acute episode 1 day ago; chronic symptoms over several months',
      hpi: {
        onset: 'Sudden near-fainting episode while playing tennis, with vomiting and lightheadedness',
        site: 'Generalized — systemic symptoms',
        character: 'Near-syncope with orthostatic hypotension, nausea, and mild diffuse abdominal pain',
        radiation: 'N/A',
        severity: 'Severe — orthostatic hypotension (BP drop from 89/62 to 70 mm Hg systolic on standing)',
        time_course: 'Acute worsening of chronic symptoms',
        exacerbating_factors: ['Exercise (tennis) precipitated the near-fainting episode', 'Standing worsens dizziness'],
        relieving_factors: ['Lying down provided some relief'],
      },
    },
    symptoms: {
      constitutional: {
        fatigue: 'Several months of worsening fatigue',
        weight_loss: '10-15 lb unintentional weight loss',
        appetite_loss: true,
        nausea: true,
        fever: 'Low-grade 99.8 °F',
      },
      others: {
        abdominal_pain: 'Mild, intermittent, generalized abdominal pain over several months',
        vomiting: 'Yes — during the acute episode',
        diarrhea: false,
        hyperpigmentation: true,
        skin_creases_hyperpigmented: 'Hyperpigmented creases in hands',
      },
      negatives: {
        fever_above_100: false,
        diarrhea: false,
        peripheral_edema: false,
        guarding: false,
        rebound_tenderness: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypothyroidism — takes levothyroxine'],
      negatives: ['No other significant medical history'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Levothyroxine (for hypothyroidism)'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may attribute symptoms to a viral illness or her thyroid condition.',
      concerns: 'Worried about the fainting episode, weight loss, and persistent fatigue; concerned about possible cancer given unintentional weight loss.',
      expectations: 'Expects diagnostic workup to identify the cause of her symptoms and effective treatment.',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what precipitated the acute presentation?',
      answer: 'Primary adrenal insufficiency (Addison disease) in adrenal crisis. The most common cause is autoimmune adrenalitis. The acute crisis was likely precipitated by the physiologic stress of exercise (playing tennis) and exacerbated by levothyroxine use, which increases metabolic rate and cortisol requirements.',
    },
    {
      question: 'What laboratory findings are characteristic of primary adrenal insufficiency?',
      answer: 'Hyponatremia (Na 121), hyperkalemia (K 5.8), metabolic acidosis (HCO3 16), hypoglycemia (glucose 52), and elevated creatinine (2 mg/dL) due to hypovolemic acute kidney injury. These result from aldosterone deficiency (hyponatremia, hyperkalemia, acidosis) and cortisol deficiency (hypoglycemia).',
    },
    {
      question: 'What is the immediate next step in management?',
      answer: 'After drawing a serum cortisol level to confirm the diagnosis, immediately administer IV fluids (normal saline with 5% glucose) to correct volume depletion and hypoglycemia, plus IV stress-dose corticosteroids (hydrocortisone 100 mg every 6-8 hours). Search for and treat any underlying infection.',
    },
    {
      question: 'How do you distinguish primary from secondary adrenal insufficiency?',
      answer: 'Primary adrenal insufficiency: ACTH is high (negative feedback lost), causing hyperpigmentation (elevated melanocyte-stimulating hormone). Patients have both cortisol and aldosterone deficiency (hyponatremia, hyperkalemia, acidosis). Secondary/tertiary: ACTH is low, no hyperpigmentation (pale skin), aldosterone preserved (renin-angiotensin system intact), so no hyperkalemia or volume depletion.',
    },
    {
      question: 'What is the cosyntropin (ACTH) stimulation test and how do you interpret it?',
      answer: 'Synthetic ACTH (cosyntropin) 250 mcg is given IV. Cortisol is measured at baseline, 30 min, and 60 min. A stimulated level > 18 mcg/dL indicates intact adrenal function. If low, measure ACTH to distinguish primary (high ACTH) from secondary/tertiary (low ACTH) adrenal insufficiency.',
    },
    {
      question: 'Why did levothyroxine likely exacerbate this patient\'s adrenal crisis?',
      answer: 'Thyroid hormone replacement increases the overall metabolic rate, which accelerates urinary cortisol secretion. In a patient with undiagnosed adrenal insufficiency, this can precipitate an adrenal crisis. Ideally, steroid therapy should be initiated before or concurrently with thyroid hormone replacement.',
    },
    {
      question: 'What is the long-term management of primary adrenal insufficiency?',
      answer: 'Glucocorticoid replacement (hydrocortisone 15-25 mg/day in divided doses) and mineralocorticoid replacement (fludrocortisone 0.1-0.2 mg/day). Patients should be educated about stress-dose steroid requirements during illness or surgery. They should wear a medical alert bracelet. Avoid over-treatment to prevent Cushingoid side effects.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and professional demeanor',
            'Avoids medical jargon when explaining adrenal insufficiency',
            'Shows empathy for patient\'s fatigue, weight loss, and frightening fainting episode',
            'Addresses patient concerns about possible cancer and chronic illness',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Ask about specific areas of hyperpigmentation — skin folds, scars, mucous membranes',
            Onset: 'Timeline of fatigue, weight loss, GI symptoms — acute vs chronic',
            Character: 'Nature of abdominal pain, appetite changes, and pigmentation patterns',
            Radiation: 'Ask about symptoms of hypothyroidism, other autoimmune conditions',
            Associated_symptoms: 'Nausea, vomiting, diarrhea, salt craving, dizziness, palpitations, muscle weakness, joint pain',
            Time_course: 'Duration of chronic symptoms — months of fatigue and weight loss',
            Exacerbating_relieving: 'Relationship to meals, stress, exercise, standing',
            Severity: 'Impact on daily functioning, ability to work and exercise',
          },
          specific_history: [
            'History of autoimmune disorders (Hashimoto thyroiditis, type 1 diabetes, vitiligo)',
            'Medication history — chronic steroid use?',
            'Family history of autoimmune adrenal insufficiency',
            'Infection history — TB exposure, fungal infections, HIV risk factors',
            'History of pituitary or hypothalamic disease',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies primary adrenal insufficiency as the diagnosis',
            'Explains the biochemical abnormalities (hyponatremia, hyperkalemia, hypoglycemia, acidosis)',
            'Describes immediate management: IV fluids, glucose, and stress-dose corticosteroids',
            'Discusses long-term hormone replacement and sick-day rules',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may attribute symptoms to viral illness or thyroid issue',
            concerns: 'Fear of cancer due to weight loss; worry about recurrent fainting; concern about lifelong medication dependence',
            expectations: 'Expects a clear diagnosis and effective treatment to restore energy and prevent future episodes',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case049AdrenalInsufficiency;
