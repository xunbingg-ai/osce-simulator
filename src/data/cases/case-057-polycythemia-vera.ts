import { CaseData } from '@/types';

const case057PolycythemiaVera: CaseData = {
  _id: 'case-057-polycythemia-vera',
  case_id: 'Case 057 - Progressive Headaches, Dizziness, and Blurred Vision',
  case_name: 'Progressive Headaches, Dizziness, and Blurred Vision',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 55,
    gender: 'F',
    occupation: 'not specified — comes to the clinic',
    chief_complaint: 'Progressive headaches, dizziness, and blurred vision for 6 months',
    presentation: {
      setting: 'A 55-year-old woman comes to the clinic complaining of 6 months of progressive dull headaches and dizziness. She also endorses occasional blurred vision. She has a history of hypertension treated with metoprolol.',
      duration: '6 months, progressive',
      hpi: {
        onset: 'Gradual onset over 6 months',
        site: 'Head — dull headaches, dizziness, blurred vision',
        character: 'Progressive dull headaches with associated dizziness and intermittent blurred vision',
        radiation: 'N/A',
        severity: 'Moderate — progressive, affecting daily function',
        time_course: 'Progressive over 6 months',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        flushed_face: true,
      },
      cardiovascular: {
        hypertension: 'History of hypertension, on metoprolol',
        leg_swelling: 'Right leg swollen compared to left (likely DVT)',
      },
      respiratory: {
        normal_oxygen_saturation: true,
      },
      others: {
        neurologic: {
          headache: 'Progressive dull headaches for 6 months',
          dizziness: true,
          blurred_vision: 'Occasional',
        },
        ophthalmologic: {
          retinal_vein_plethora: 'Bilateral plethora of retinal veins on fundoscopy',
        },
        hepatomegaly: 'Liver palpable 3 cm below costal margin',
        splenomegaly: 'Dullness at lowest intercostal space in left axillary line',
      },
      negatives: {
        fever: false,
        hypoxemia: false,
        nystagmus: false,
        focal_neurologic_deficits: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypertension'],
      negatives: ['No other chronic conditions'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Metoprolol for hypertension'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may attribute headaches and dizziness to stress, aging, or poorly controlled blood pressure',
      concerns: 'Worried about progressive neurologic symptoms and possibility of stroke or brain tumor',
      expectations: 'Expects thorough evaluation to explain symptoms and effective treatment',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Polycythemia vera (PV). The patient has elevated hemoglobin (17 g/dL) and hematocrit (51%) with trilineage increase, signs of hyperviscosity (headaches, dizziness, blurred vision, retinal vein plethora, flushed face), hepatosplenomegaly, and a likely DVT of the right leg. Normal oxygen saturation rules out secondary polycythemia.',
    },
    {
      question: 'What is your next diagnostic step?',
      answer: 'Serum erythropoietin (EPO) level, JAK2 V617F mutation testing, peripheral blood smear, and bone marrow biopsy. Low EPO suggests primary polycythemia; elevated EPO suggests secondary cause. JAK2 mutation is positive in >95% of PV cases. Bone marrow biopsy shows hypercellularity with trilineage growth.',
    },
    {
      question: 'What is the next step in therapy?',
      answer: 'Low-dose aspirin and therapeutic phlebotomy to maintain hematocrit <42% in women. For this patient with a history of thrombosis (DVT), cytoreductive therapy with hydroxyurea can be considered if symptoms are not controlled by phlebotomy. Therapeutic anticoagulation for DVT is also necessary.',
    },
    {
      question: 'How do you differentiate primary from secondary polycythemia?',
      answer: 'Primary polycythemia (PV): low EPO, positive JAK2 mutation, normal O2 saturation. Secondary polycythemia: elevated EPO, negative JAK2, caused by chronic hypoxia (COPD, OSA, OHS, right-to-left shunt, high altitude, heavy smoking), EPO-producing tumors (hepatocellular carcinoma, renal cell carcinoma, pheochromocytoma), or performance-enhancing drugs (testosterone, EPO).',
    },
    {
      question: 'What are the diagnostic criteria for polycythemia vera?',
      answer: 'Major criteria: (1) Hb >16.5 g/dL in men, >16 g/dL in women, or Hct >49% in men, >48% in women; (2) Bone marrow hypercellularity with trilineage proliferation; (3) JAK2 V617F mutation. Minor criterion: Low serum EPO level. Diagnosis requires all 3 major criteria, OR 2 major + 1 minor criterion.',
    },
    {
      question: 'What are the clinical features and complications of PV?',
      answer: 'Symptoms: Headache, dizziness, blurred vision, pruritis (especially after warm showers), erythromelalgia (burning pain, redness, warmth in hands/feet), fatigue, night sweats. Signs: Plethora, retinal vein engorgement, hepatosplenomegaly. Complications: Increased risk of thrombosis (DVT, PE, stroke, arterial thrombus), bleeding, and progression to acute myeloid leukemia or myelofibrosis.',
    },
    {
      question: 'What are the treatment goals and options for PV?',
      answer: 'Two main goals: (1) Reduce microvascular symptoms (pruritis, erythromelalgia) and (2) Reduce thrombotic events. Low-dose aspirin for all patients without contraindications. Therapeutic phlebotomy to Hct <45% (men) or <42% (women). Cytoreduction: First-line hydroxyurea for high-risk patients (>60 years or history of thrombosis). Second-line ruxolitinib (JAK inhibitor). Interferon alfa for patients <40 years and pregnant women.',
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
            'Avoids medical jargon — explains terms like polycythemia clearly',
            'Shows empathy for progressive headaches and visual symptoms',
            'Addresses patient concerns about neurologic symptoms and DVT',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Head (diffuse), eyes (blurred vision), right leg (swelling)',
            Onset: 'Gradual over 6 months',
            Character: 'Dull progressive headaches with dizziness and intermittent blurred vision',
            Radiation: 'N/A',
            Associated_symptoms: 'Flushed face, hepatosplenomegaly, right leg swelling (DVT), pruritis, erythromelalgia',
            Time_course: 'Progressive over 6 months',
            Exacerbating_relieving: 'Not specified',
            Severity: 'Moderate — progressively worsening',
          },
          specific_history: [
            'Duration and progression of headaches, dizziness, blurred vision',
            'History of thrombosis — DVT, PE, stroke',
            'Symptoms of hyperviscosity — pruritis after warm showers, erythromelalgia',
            'Smoking history',
            'Cardiac or pulmonary disease history (for secondary polycythemia)',
            'Medication history — testosterone, EPO use',
            'Family history of myeloproliferative neoplasms',
          ],
          rule_out_differentials: [
            'Secondary polycythemia — hypoxia, COPD, OSA, cardiac shunt',
            'Relative polycythemia — dehydration, diuretic use',
            'Essential thrombocythemia — isolated thrombocytosis',
            'Primary myelofibrosis — teardrop cells, leukoerythroblastosis',
            'EPO-producing tumor — renal cell carcinoma, hepatocellular carcinoma',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies polycythemia vera as most likely diagnosis',
            'Explains diagnostic workup (EPO, JAK2 mutation, bone marrow biopsy)',
            'Discusses treatment with phlebotomy and low-dose aspirin',
            'Addresses need for cytoreductive therapy in high-risk patients',
            'Explains risk of thrombosis and importance of hematocrit control',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may attribute symptoms to stress, aging, or blood pressure issues',
            concerns: 'Fears of stroke, brain tumor, or serious neurologic condition given headaches and visual disturbances',
            expectations: 'Expects thorough workup, clear diagnosis, and effective treatment to relieve symptoms',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case057PolycythemiaVera;
