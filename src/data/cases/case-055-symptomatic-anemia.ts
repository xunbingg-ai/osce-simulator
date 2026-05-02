import { CaseData } from '@/types';

const case055SymptomaticAnemia: CaseData = {
  _id: 'case-055-symptomatic-anemia',
  case_id: 'Case 055 - Abdominal Discomfort with Black Tarry Stools',
  case_name: 'Abdominal Discomfort with Black Tarry Stools',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 62,
    gender: 'M',
    occupation: 'not specified — presents to emergency department',
    chief_complaint: 'Sudden onset abdominal discomfort and black tarry stools',
    presentation: {
      setting: 'Patient presents to the emergency department with sudden onset of abdominal discomfort and passage of several large, black, tarry stools. He had an NSTEMI 3 weeks ago and was discharged on aspirin, clopidogrel, atorvastatin, and metoprolol.',
      duration: 'Acute — same day',
      hpi: {
        onset: 'Sudden onset',
        site: 'Epigastric abdominal discomfort',
        character: 'Abdominal discomfort with melena; associated chest pain similar to prior NSTEMI symptoms',
        radiation: 'Chest pain — no radiation specified',
        severity: 'Severe — hemoglobin 5.9 g/dL, orthostatic hypotension',
        time_course: 'Acute onset, ongoing',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        pallor: 'Pale and diaphoretic',
      },
      cardiovascular: {
        chest_pain: 'Similar to prior NSTEMI — angina at rest',
        tachycardia: true,
        heart_rate: '104 bpm',
        blood_pressure_supine: '124/92 mm Hg',
        blood_pressure_standing: '95/70 mm Hg',
        orthostatic_hypotension: true,
        systolic_murmur: 'Soft systolic murmur at right sternal border',
        s4_gallop: true,
      },
      others: {
        gastrointestinal: {
          abdominal_pain: 'Mild epigastric tenderness',
          melena: 'Black, sticky stool — positive for occult blood',
        },
      },
      negatives: {
        fever: false,
        st_segment_changes: false,
        elevated_cardiac_biomarkers: false,
        ventricular_ectopy: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Recent NSTEMI (3 weeks ago)'],
      negatives: ['Coronary angiography showed no significant stenosis', 'No known prior anemia'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Aspirin', 'Clopidogrel', 'Atorvastatin', 'Metoprolol'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may think he is having another heart attack given chest pain similar to prior NSTEMI',
      concerns: 'Frightened by recurrent chest pain and concerned about severity of blood loss',
      expectations: 'Expects immediate evaluation and treatment for both chest pain and bleeding',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis?',
      answer: 'Unstable angina precipitated by anemia secondary to acute upper GI blood loss. The patient has melena, orthostatic hypotension, and hemoglobin of 5.9 g/dL. The chest pain and ECG findings are likely due to decreased oxygen supply to the heart from severe anemia rather than a new acute coronary syndrome.',
    },
    {
      question: 'What is the next step in management?',
      answer: 'Immediate transfusion with packed red blood cells (PRBCs). Restoration of oxygen-carrying capacity is critical to avoid myocardial necrosis. Each unit of PRBCs typically increases hemoglobin by 1 g/dL. The patient should be monitored carefully in a critical care setting for volume overload given his cardiac history.',
    },
    {
      question: 'What are the possible complications of blood transfusion?',
      answer: 'Acute hemolytic transfusion reaction (ABO incompatibility from clerical error — medical emergency), febrile nonhemolytic transfusion reaction, transfusion-related acute lung injury (TRALI), anaphylaxis, volume overload, infection transmission (hepatitis C 1:103,000, HIV 1:700,000, hepatitis B 1:66,000), iron overload with frequent transfusions, and delayed hemolytic reactions.',
    },
    {
      question: 'What are the indications for PRBC transfusion?',
      answer: 'Acute surgical or nonsurgical blood loss with hemodynamic compromise, anemia with end-organ effects (syncope, angina pectoris), and critical illness to improve oxygen-carrying capacity. There is no absolute threshold, but hemoglobin <7 g/dL in the absence of ongoing ischemia, or <8 g/dL with cardiac ischemia, are commonly used triggers.',
    },
    {
      question: 'When are platelet transfusions and fresh frozen plasma indicated?',
      answer: 'Platelets: When platelet count <50,000/mm3 with significant bleeding, or <10,000/mm3 for spontaneous bleeding risk. Contraindicated in TTP. FFP: To reverse warfarin anticoagulation, for clotting factor deficiencies, and in DIC with active bleeding. Cryoprecipitate: For fibrinogen replacement in hemophilia A and von Willebrand disease.',
    },
    {
      question: 'What alternatives to transfusion exist?',
      answer: 'Erythropoietin for renal failure-related anemia or preoperative autologous donation, cell savers during surgery to salvage and reinfuse blood, minimizing phlebotomy for lab tests, and optimizing preoperative hemoglobin with iron and erythropoietin. These are especially relevant for patients who refuse blood products.',
    },
    {
      question: 'How do you manage an acute hemolytic transfusion reaction?',
      answer: 'Immediately stop the transfusion. Maintain IV access with normal saline (avoid lactated Ringer or dextrose-containing fluids). Monitor urine output, give diuretics if not hypotensive. Check LDH, indirect bilirubin, haptoglobin for hemolysis, and coagulation tests for DIC. In severe cases, dialysis may be needed. This is a medical emergency.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Calm and reassuring approach for a patient with chest pain and bleeding',
            'Avoids medical jargon — explains condition in accessible terms',
            'Acknowledges patient distress from both chest pain and blood loss',
            'Addresses fear of recurrent heart attack and keeps patient informed',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Epigastric abdominal discomfort with chest pain',
            Onset: 'Sudden onset',
            Character: 'Abdominal discomfort with melena; chest pain similar to prior NSTEMI',
            Radiation: 'Ask about radiation of chest pain',
            Associated_symptoms: 'Melena, orthostatic dizziness, diaphoresis, palpitations',
            Time_course: 'Acute — ongoing',
            Exacerbating_relieving: 'Not relieved by prior cardiac medications',
            Severity: 'Severe — hemoglobin 5.9 g/dL, orthostatic hypotension',
          },
          specific_history: [
            'Quantity and frequency of melena',
            'History of peptic ulcer disease or GI bleeding',
            'Medication compliance and timing of last doses',
            'Chest pain characteristics — compare to prior NSTEMI',
            'Prior history of anemia or transfusion',
            'Any history of bleeding disorders',
          ],
          rule_out_differentials: [
            'Acute MI — serial cardiac enzymes, ECG monitoring',
            'Recurrent NSTEMI — troponin I levels',
            'Gastric or duodenal ulcer perforation',
            'Esophageal varices (if liver disease history)',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies unstable angina precipitated by anemia from GI bleed',
            'Explains need for immediate PRBC transfusion to restore oxygen delivery',
            'Discusses risks and benefits of blood transfusion',
            'Describes need for upper GI endoscopy to identify bleeding source',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think he is having another heart attack',
            concerns: 'Fear of recurrent cardiac event, anxiety about blood loss and need for transfusion',
            expectations: 'Expects immediate pain relief, blood transfusion, and a clear management plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case055SymptomaticAnemia;
