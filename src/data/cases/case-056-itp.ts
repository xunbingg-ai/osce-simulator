import { CaseData } from '@/types';

const case056ITP: CaseData = {
  _id: 'case-056-itp',
  case_id: 'Case 056 - Bleeding from Nose and Mouth with Skin Spots',
  case_name: 'Bleeding from Nose and Mouth with Skin Spots',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 26,
    gender: 'F',
    occupation: 'not specified — presents to emergency department',
    chief_complaint: 'Bleeding from nose and mouth with reddish spots on legs',
    presentation: {
      setting: 'A 26-year-old woman presents to the emergency department complaining of bleeding from her nose and mouth that started last night. She also noticed small reddish spots on her lower extremities this morning.',
      duration: '1 day, acute onset',
      hpi: {
        onset: 'Sudden onset last night',
        site: 'Epistaxis, gingival bleeding, petechiae on lower extremities',
        character: 'Active bleeding from nose and gums; 1-mm flat reddish spots (petechiae) on legs',
        radiation: 'N/A',
        severity: 'Moderate — platelet count 18,000/mm3',
        time_course: 'Acute, since last night',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        anxiety: 'Somewhat anxious',
      },
      others: {
        hematologic: {
          epistaxis: 'Bright red blood oozing from nose',
          gingival_bleeding: 'Bright red blood oozing from gums',
          petechiae: 'Multiple 1-mm flat reddish spots on lower extremities',
        },
      },
      negatives: {
        fever: false,
        chills: false,
        nausea: false,
        vomiting: false,
        abdominal_pain: false,
        joint_pain: false,
        lymphadenopathy: false,
        hepatosplenomegaly: false,
        pallor: false,
        jaundice: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No current medical problems', 'No prior bleeding episodes', 'No easy bruising', 'No hemarthroses'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'No family history of abnormal bleeding',
    ice: {
      ideas: 'Patient may be frightened by sudden unexplained bleeding and unsure of the cause',
      concerns: 'Worried about serious underlying blood disorder or cancer; anxious about ongoing bleeding',
      expectations: 'Expects immediate evaluation to find the cause of bleeding and treatment to stop it',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Immune thrombocytopenic purpura (ITP). The patient presents with isolated thrombocytopenia (platelets 18,000/mm3), mucosal bleeding (epistaxis, gingival bleeding), and petechiae. PT and PTT are normal. She has no systemic symptoms, lymphadenopathy, or splenomegaly. Recent URI 2 weeks ago is a common antecedent.',
    },
    {
      question: 'What is the next diagnostic step?',
      answer: 'Peripheral blood smear to rule out other causes of thrombocytopenia. Check for pseudothrombocytopenia (platelet clumping), schistocytes (suggesting TTP/HUS), blasts (suggesting leukemia), and other cell line abnormalities. Also test for HIV, hepatitis C, ANA, and direct Coombs test to evaluate for secondary causes.',
    },
    {
      question: 'What is the best initial treatment?',
      answer: 'Oral corticosteroids (prednisone). Adults with ITP and platelet count <30,000/mcL or with bleeding should be treated with glucocorticoids. IVIg is reserved for severe cases with platelets <10,000/mcL or life-threatening bleeding. Platelet transfusions are usually ineffective in ITP due to rapid destruction.',
    },
    {
      question: 'How does ITP differ from TTP, HUS, and DIC?',
      answer: 'ITP: Isolated thrombocytopenia, normal PT/PTT, antiplatelet antibodies. TTP: Pentad of thrombocytopenia, microangiopathic hemolytic anemia, fever, neurologic deficits, renal failure; normal PT/PTT; schistocytes on smear; ADAMTS13 deficiency. HUS: Similar to TTP but primarily renal involvement, often post-diarrheal (E. coli O157:H7). DIC: Thrombocytopenia + prolonged PT/PTT + low fibrinogen + elevated D-dimer; triggered by sepsis, trauma, or malignancy.',
    },
    {
      question: 'What are the treatment options for chronic refractory ITP?',
      answer: 'IVIg for rapid platelet count increase, anti-D immune globulin (Rh+ patients), rituximab (anti-CD20 monoclonal antibody targeting antibody-producing B cells), and splenectomy (removes site of platelet destruction). Patients undergoing splenectomy should receive pneumococcal, meningococcal, and H. influenzae vaccines at least 2 weeks prior.',
    },
    {
      question: 'What drugs commonly cause thrombocytopenia?',
      answer: 'Common culprits: H2 blockers (ranitidine, cimetidine), quinine, sulfonamides, heparin (HIT — causes thrombosis not bleeding), gold therapy, and many chemotherapeutic agents. Diagnosis is clinical — platelet count improves within 7-10 days of stopping the offending drug.',
    },
    {
      question: 'What is heparin-induced thrombocytopenia (HIT) and how is it managed?',
      answer: 'HIT is an immune-mediated disorder caused by antibodies against the heparin-platelet factor 4 complex. Platelet count falls 5-10 days after heparin exposure. Unlike other drug-induced thrombocytopenias, HIT causes thrombosis, not bleeding. Treatment: discontinue ALL heparin (including LMWH), and use alternative anticoagulants such as argatroban, fondaparinux, or bivalirudin.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Calm and reassuring approach for a patient with acute bleeding',
            'Avoids medical jargon — explains thrombocytopenia in accessible terms',
            'Acknowledges patient anxiety about sudden unexplained bleeding',
            'Provides clear explanation of diagnostic and treatment plan',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Epistaxis, gingival bleeding, petechiae on lower extremities',
            Onset: 'Sudden onset last night',
            Character: 'Active mucosal bleeding with flat 1-mm reddish spots (petechiae)',
            Radiation: 'N/A',
            Associated_symptoms: 'Recent URI 2 weeks ago; no fever, chills, abdominal pain, joint pain',
            Time_course: 'Acute, less than 24 hours',
            Exacerbating_relieving: 'No provocative factors identified',
            Severity: 'Moderate — platelets 18,000/mm3 with active mucosal bleeding',
          },
          specific_history: [
            'Prior history of bleeding or easy bruising',
            'Family history of bleeding disorders',
            'Medication history — any drugs that cause thrombocytopenia',
            'Recent infections or vaccinations',
            'History of autoimmune disorders',
            'Review of systems for SLE, HIV risk factors',
            'Menstrual history — menorrhagia',
          ],
          rule_out_differentials: [
            'TTP/HUS — fever, neuro symptoms, renal failure, schistocytes',
            'Acute leukemia — blasts on smear, other cytopenias',
            'Aplastic anemia — pancytopenia',
            'DIC — prolonged PT/PTT, low fibrinogen',
            'Drug-induced thrombocytopenia',
            'Hypersplenism — splenomegaly',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies ITP as most likely diagnosis',
            'Explains need for peripheral smear to confirm diagnosis',
            'Discusses first-line treatment with oral corticosteroids',
            'Describes escalation options (IVIg, rituximab, splenectomy) for refractory cases',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may be frightened by spontaneous bleeding and unsure of cause',
            concerns: 'Fear of serious blood disorder, leukemia, or cancer; concern about risk of life-threatening bleeding',
            expectations: 'Expects immediate treatment to stop bleeding and a clear long-term management plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case056ITP;
