import { CaseData } from '@/types';

const case042NeutropenicFever: CaseData = {
  _id: 'case-042-neutropenic-fever',
  case_id: 'Case 042 - Fever After Chemotherapy',
  case_name: 'Fever After Chemotherapy',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 24,
    gender: 'M',
    occupation: 'Not specified — undergoing treatment for acute lymphoblastic leukemia',
    chief_complaint: 'Fever with shaking chills for the past 12 hours',
    presentation: {
      setting: 'Patient presents to the emergency department with fever and shaking chills. He is being treated for acute lymphoblastic leukemia, and his most recent chemotherapy was 7 days ago.',
      duration: '12 hours of fever and chills',
      hpi: {
        onset: 'Sudden onset 12 hours ago with fever and shaking chills',
        site: 'Systemic — fever, suspected catheter-related',
        character: 'High fever (103 F) with shaking chills, ill-appearing',
        radiation: 'N/A',
        severity: 'Severe — febrile, tachycardic, neutropenic (ANC 286/mm3)',
        time_course: '12 hours of fever; yesterday had a 20-30 minute episode of shaking chills about 10 minutes after flushing his central venous catheter',
        exacerbating_factors: ['Central line flush yesterday triggered shaking chills'],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        tachycardia: true,
        heart_rate: '122 bpm',
        blood_pressure: '118/65 mm Hg',
        soft_systolic_murmur: 'Left sternal border',
      },
      respiratory: {
        respiratory_rate: '22 breaths/min',
        lung_fields: 'Clear to auscultation',
        cough: false,
        dyspnea: false,
      },
      constitutional: {
        fever: true,
        temperature: '103 F',
        chills: true,
        shaking_chills: true,
        ill_appearing: true,
        skin_warm_moist: true,
      },
      negatives: {
        cough: false,
        dyspnea: false,
        headache: false,
        abdominal_pain: false,
        diarrhea: false,
        rash: false,
        perirectal_abnormalities: false,
        catheter_erythema: false,
        catheter_purulent_discharge: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Acute lymphoblastic leukemia', 'Status post chemotherapy (hyperfractionated cyclophosphamide, vincristine, doxorubicin, dexamethasone) 7 days ago'],
      negatives: ['No sick contacts', 'No recent travel'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Chemotherapy regimen — hyperfractionated cyclophosphamide, vincristine, doxorubicin, dexamethasone'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may not realize how serious fever can be in the setting of neutropenia after chemotherapy',
      concerns: 'Worried about the fever and chills, concerned about interruption of cancer treatment',
      expectations: 'Expects treatment for the fever and wants to continue his cancer therapy',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why is this a medical emergency?',
      answer: 'Neutropenic fever with possible central venous catheter infection. The patient has severe neutropenia (ANC 286/mm3) 7 days after chemotherapy (typical nadir), presents with fever, and had chills after flushing his catheter yesterday. Fever in a neutropenic patient is a medical emergency because 5-10% of cancer patients die from neutropenia-associated infection, and the absence of WBCs means the patient may not manifest typical inflammatory signs.',
    },
    {
      question: 'What is the definition of neutropenia and how is the ANC calculated?',
      answer: 'Neutropenia is defined as an ANC (absolute neutrophil count) less than 1000 cells/mm3. It is considered severe when ANC is less than 500 cells/mm3. The ANC is calculated by multiplying the total WBC count by the percentage of neutrophils (including bands). This patient has WBC 1100 with 10% neutrophils and 16% band forms = 1100 x (0.10 + 0.16) = 286/mm3.',
    },
    {
      question: 'What are the common sources of infection in neutropenic patients?',
      answer: 'The skin and oral cavity (gram-positive bacteria — Staphylococcus, Streptococcus) and the bowel (gram-negative enteric flora including Pseudomonas aeruginosa) are the most common sources. Central venous catheters are also common sources of infection. Because of the absence of WBCs, patients may not mount typical inflammatory signs such as purulence, erythema, or radiologic infiltrates.',
    },
    {
      question: 'What empiric antibiotic therapy should be initiated and why?',
      answer: 'Broad-spectrum IV antibiotics must be started within 60 minutes. Empiric coverage should include antipseudomonal coverage (cefepime, imipenem, or meropenem). Given the central line and chills after flushing, vancomycin should be added to cover gram-positive organisms including MRSA. Blood cultures should be drawn from the catheter and peripheral vein before antibiotics.',
    },
    {
      question: 'When should antifungal therapy be considered in neutropenic fever?',
      answer: 'Antifungal therapy (fluconazole or amphotericin B) should be added if the patient continues to have persistent fever despite 5-7 days of broad-spectrum antibacterial therapy and no source has been identified. Fungal infections (especially Candida and Aspergillus) become a concern in prolonged neutropenia.',
    },
    {
      question: 'When should a central venous catheter be removed in the setting of suspected infection?',
      answer: 'Catheter removal is indicated for: tunnel infection (erythema overlying the subcutaneous tract), infections caused by S. aureus, gram-negative organisms, fungi, or nontuberculous mycobacteria, persistent bacteremia after 48-72 hours of appropriate antibiotics, and critically ill or hemodynamically unstable patients. For coagulase-negative Staphylococcus, response to antibiotics without removal is possible in up to 80% of cases.',
    },
    {
      question: 'What preventive measures can reduce the risk of infection in neutropenic patients?',
      answer: 'Prophylactic G-CSF (filgrastim) to shorten the duration and depth of neutropenia. Immunization against pneumococcus and influenza (live vaccines contraindicated). Prophylactic oral quinolones if ANC <100 for >7 days. Antiviral prophylaxis for HSV/VZV in high-risk patients. Hand hygiene, avoiding sick contacts, careful oral hygiene, avoiding rectal examinations, and proper catheter care.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Communicates urgency without causing excessive alarm',
            'Avoids jargon — explains neutropenia and fever in understandable terms',
            'Shows empathy for the patients ordeal with cancer treatment and this complication',
            'Addresses concerns about prognosis and cancer treatment continuation',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Systemic — suspected catheter-related bloodstream infection',
            Onset: 'Sudden onset 12 hours ago; similar episode yesterday after catheter flush',
            Character: 'High fever (103 F), shaking chills, ill-appearing',
            Radiation: 'N/A',
            Associated_symptoms: 'Tachycardia, tachypnea, warm moist skin; no localizing symptoms',
            Time_course: 'Progressive over 12 hours; chemotherapy 7 days ago (at WBC nadir)',
            Exacerbating_relieving: 'Chills temporally related to catheter flush yesterday',
            Severity: 'Severe — neutropenic fever is a medical emergency',
          },
          source_evaluation: [
            'Catheter examination — tunnel tract, exit site, port pocket',
            'Skin and soft tissue examination for cellulitis',
            'Oral examination for mucositis',
            'Perirectal examination (defer digital if neutropenic)',
            'Chest x-ray — may be negative even with pneumonia',
            'Urinalysis — may be negative even with UTI',
          ],
          microbiologic_workup: [
            'Blood cultures from catheter AND peripheral vein simultaneously',
            'Urine culture',
            'Sputum culture if productive cough develops',
            'Catheter tip culture if removed',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies neutropenic fever with possible catheter-related infection',
            'Explains the need for STAT blood cultures and broad-spectrum antibiotics within 60 minutes',
            'Discusses the role of catheter removal based on organism and clinical status',
            'Educates on preventive measures including G-CSF and prophylactic antibiotics',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may not connect the fever to his low white blood cell count or the catheter',
            concerns: 'Fear of treatment delays affecting cancer prognosis, concern about the seriousness of this fever episode',
            expectations: 'Expects rapid treatment of the fever and reassurance about continuing cancer therapy',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case042NeutropenicFever;
