import { CaseData } from '@/types';

const case001HealthMaint: CaseData = {
  _id: 'case-001-health-maint',
  case_id: 'Case 001 - Routine Health Maintenance',
  case_name: 'Health Maintenance',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 66,
    gender: 'F',
    occupation: 'not specified — presents for routine physical examination',
    chief_complaint: 'Routine physical examination',
    presentation: {
      setting: 'Patient comes for a routine physical examination. She reports going through menopause at age 51.',
      duration: 'Asymptomatic — routine visit',
      hpi: {
        onset: 'N/A — routine examination',
        site: 'N/A',
        character: 'N/A',
        radiation: 'N/A',
        severity: 'N/A',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        weight: '140 lb',
        height: '5 ft 4 in',
        temperature: '98 °F',
      },
      cardiovascular: {
        blood_pressure: '120/70 mm Hg',
        heart_rate: '70 bpm',
      },
      negatives: {
        breast_masses: false,
        breast_discharge: false,
        thyroid_abnormal: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No hypertension', 'No diabetes', 'No hyperlipidemia', 'No known chronic conditions'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: [],
    },
    social_history: {
      smoking: '30 pack-year smoking history (current smoker)',
      alcohol: 'Not documented',
    },
    family_history: 'Unremarkable — no significant family history documented',
    ice: {
      ideas: 'Patient may believe she is in good health and that the visit is merely routine.',
      concerns: 'May be concerned about breast cancer risk or other age-related health issues, given she has not had significant medical issues previously.',
      expectations: 'Expects a standard physical examination and reassurance that she is healthy; may not be aware of screening recommendations.',
    },
  },
  questions: [
    {
      question: 'What are the essential components of health maintenance for a 66-year-old woman?',
      answer: 'Three components: (1) Cancer screening (mammography every 2 years until age 74, colon cancer screening every 10 years with colonoscopy until age 75, and lung cancer screening with low-dose CT chest if smoking history), (2) Immunizations (tetanus booster every 10 years, pneumococcal vaccine, herpes zoster vaccine, yearly influenza immunization), (3) Behavioral counseling (smoking cessation, regular exercise, moderate alcohol use) and screening for common diseases (dyslipidemia, blood glucose, osteoporosis).',
    },
    {
      question: 'What is the most common cause of mortality in women over 65, and what screenings address this risk?',
      answer: 'Cardiovascular disease is the most common cause of mortality in women over 65. Screening includes annual blood pressure checks, lipid panel testing (starting at age 45 or earlier with risk factors), and blood glucose screening. Lifestyle modifications including exercise, diet, and smoking cessation are also critical.',
    },
    {
      question: 'Why is lung cancer screening indicated for this patient, and what modality is used?',
      answer: 'This patient is a current smoker with a 30 pack-year history. The USPSTF recommends annual low-dose CT chest screening for adults aged 55-80 with a ≥30 pack-year smoking history who are current smokers or have quit within the past 15 years. Low-dose CT has been shown to reduce lung cancer mortality in high-risk populations.',
    },
    {
      question: 'At what age can cervical cancer screening be stopped, and why?',
      answer: 'Cervical cancer screening (Pap smears) can be stopped at age 65 if all previous Pap smears have been normal, as in this patient. The risk of developing cervical cancer decreases significantly after age 65 in women with a history of normal screenings, and the harms of continued screening may outweigh the benefits.',
    },
    {
      question: 'What immunizations should be offered to this 66-year-old patient?',
      answer: 'Annual influenza vaccine, pneumococcal vaccine (PCV13 at age 65 followed by PPSV23 one year later), herpes zoster vaccine (recombinant for patients over age 50 or live-attenuated for immunocompetent patients over age 60), and tetanus-diphtheria-pertussis (Td/Tdap) booster if not within the last 10 years.',
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
            'Avoids medical jargon — explains screening in accessible terms',
            'Shows empathy for patient\'s health concerns and lifestyle habits',
            'Addresses smoking cessation sensitively without judgment',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Review systems — ask about chest pain, shortness of breath, changes in bowel/bladder, vision changes',
            Onset: 'When did she last have screening tests? Last mammogram, Pap smear, colonoscopy?',
            Character: 'Assess overall wellbeing, energy level, exercise capacity',
            Radiation: 'Ask about family history of cancer or heart disease in more detail',
            Associated_symptoms: 'Bone pain, weight changes, vision changes, bruising/bleeding, fatigue',
            Time_course: 'Review immunization history — tetanus, influenza, pneumococcal, zoster',
            Exacerbating_relieving: 'Review diet, exercise habits, sleep quality',
            Severity: 'Assess readiness to quit smoking using 5A approach',
          },
          risk_factor_assessment: [
            'Smoking history — quantify pack-years, assess readiness to quit',
            'Menopausal history and hormone therapy use',
            'Family history of breast, ovarian, colon cancer',
            'Diet and physical activity assessment',
            'Alcohol consumption',
            'Osteoporosis risk factors',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains age-appropriate cancer screening recommendations clearly',
            'Discusses immunization schedule and rationale',
            'Provides smoking cessation counseling and resources',
            'Outlines cardiovascular risk reduction strategies',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think she is fully healthy and does not need additional tests or interventions',
            concerns: 'Fear of discovering cancer through screening, concern about radiation exposure from mammograms and CT scans',
            expectations: 'Expects reassurance and quick visit; may need education on importance of preventive care',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case001HealthMaint;
