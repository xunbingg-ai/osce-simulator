import { CaseData } from '@/types';

const case024Cirrhosis: CaseData = {
  _id: 'case-024-cirrhosis',
  case_id: 'Case 024 - Progressive Abdominal Swelling',
  case_name: 'Progressive Abdominal Swelling',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 60,
    gender: 'M',
    occupation: 'Construction worker',
    chief_complaint: 'Progressive abdominal swelling and diffuse discomfort for 4 weeks',
    presentation: {
      setting: 'Patient presents to the emergency department with progressive abdominal swelling and diffuse discomfort for 4 weeks.',
      duration: '4 weeks',
      hpi: {
        onset: 'Gradual onset 4 weeks ago, progressive',
        site: 'Abdomen (diffuse)',
        character: 'Progressive swelling and diffuse discomfort',
        radiation: 'No radiation',
        severity: 'Moderate',
        time_course: 'Progressive worsening over 4 weeks; dark urine over recent months',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        fever: true,
        temperature: '100.3°F (37.9°C)',
        heart_rate: '90 bpm',
        blood_pressure: '90/60 mm Hg',
        fatigue: true,
      },
      others: {
        abdominal_distention: true,
        ascites: true,
        fluid_wave: true,
        diffuse_dullness_to_percussion: true,
        mild_diffuse_tenderness: true,
        hypoactive_bowel_sounds: true,
        telangiectasias: true,
        telangiectasias_location: 'Cheeks and upper anterior chest',
        scleral_icterus: true,
        mucosal_icterus: true,
      },
      negatives: {
        pitting_edema: false,
        peripheral_edema: false,
        skin_jaundice: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Heavy alcohol use'],
      negatives: ['No IV drug use', 'No known viral hepatitis'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Heavy daily alcohol use — drinks approximately 12 cans of beer per day; reports never feeling the need to stop',
      occupation: 'Construction worker — spends at least 8 hours a day working outside',
      family: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may attribute abdominal swelling to weight gain or a gastrointestinal issue',
      concerns: 'May not fully recognize the severity of his condition; concerned about progressive abdominal swelling and discomfort',
      expectations: 'Expects relief from abdominal distention and treatment for the swelling',
    },
  },
  questions: [
    {
      question: 'How is liver cirrhosis diagnosed?',
      answer: 'Diagnosis is based on history, physical exam, laboratory findings (elevated AST:ALT ratio >2 in alcoholics, elevated bilirubin, prolonged PT, hypoalbuminemia, thrombocytopenia, macrocytic anemia), and imaging (ultrasound showing nodular liver). Liver biopsy is the gold standard for histologic diagnosis. Noninvasive methods include elastography to assess liver stiffness and serum biomarker panels.',
    },
    {
      question: 'What are the common etiologies of liver cirrhosis?',
      answer: 'Alcoholic cirrhosis is one of the most common forms in the United States. Other causes include: chronic hepatitis C, chronic hepatitis B, autoimmune hepatitis, hemochromatosis, Wilson disease, alpha-1-antitrypsin deficiency, and nonalcoholic steatohepatitis (NASH). The quantity and duration of alcohol intake, as well as gender, genetic predisposition, and concurrent HCV infection, contribute to progression.',
    },
    {
      question: 'What is the serum ascites-albumin gradient (SAAG) and how is it used?',
      answer: 'SAAG = serum albumin minus ascitic albumin. High gradient (>1.1 g/dL) indicates portal hypertension (cirrhosis, portal vein thrombosis, Budd-Chiari syndrome, CHF, constrictive pericarditis). Low gradient (<1.1 g/dL) indicates non-portal hypertension causes (peritoneal carcinomatosis, tuberculous peritonitis, pancreatic ascites, nephrotic syndrome).',
    },
    {
      question: 'How is spontaneous bacterial peritonitis diagnosed and treated?',
      answer: 'SBP is diagnosed by paracentesis showing >250 neutrophils/mm3 in ascitic fluid, with or without positive culture. Cultures often yield a single organism (E. coli, Klebsiella, enterococci). Empiric therapy includes IV ampicillin/sulbactam or a third-generation cephalosporin (cefotaxime). Oral fluoroquinolones for uncomplicated cases. Prophylaxis for prior SBP or high-risk patients.',
    },
    {
      question: 'What are the major complications of cirrhosis?',
      answer: 'Complications include: portal hypertension (varices, splenomegaly), ascites, spontaneous bacterial peritonitis (SBP), hepatic encephalopathy (confusion, asterixis, elevated ammonia), variceal bleeding (esophageal/gastric varices — potentially massive hemorrhage), hepatorenal syndrome (progressive renal failure in advanced cirrhosis), and hepatocellular carcinoma.',
    },
    {
      question: 'What is the MELD score and how is it used?',
      answer: 'The Model for End-Stage Liver Disease (MELD) score uses serum bilirubin, serum creatinine, and INR to predict survival and prioritize patients for liver transplantation. The Child-Turcotte-Pugh system (classes A, B, C) is an older scoring system. Liver transplantation is the only definitive treatment for advanced cirrhosis.',
    },
    {
      question: 'What is hepatorenal syndrome and how is it managed?',
      answer: 'Hepatorenal syndrome is progressive renal decline in patients with significant ascites and advanced cirrhosis, thought to be related to multifactorial renal vasoconstriction. It presents with low urine Na (<10 mEq/L), normal urinalysis, and no obstruction on renal ultrasound. Treatment is difficult and prognosis is poor. Definitive treatment is liver transplantation. TIPS and dialysis may bridge to transplant.',
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
            'Avoids medical jargon — uses terms patient can understand',
            'Shows nonjudgmental approach when discussing alcohol history',
            'Addresses patient concerns about abdominal swelling',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Abdomen (diffuse)',
            Onset: 'Gradual onset 4 weeks ago, progressive',
            Character: 'Progressive swelling, diffuse discomfort',
            Radiation: 'No radiation',
            Associated_symptoms: 'Dark urine, telangiectasias, scleral icterus, low-grade fever, easy bruising, fatigue, confusion, GI bleeding',
            Time_course: 'Progressive worsening over 4 weeks',
            Exacerbating_relieving: 'Not affected by position or activity',
            Severity: 'Moderate — progressive and disabling',
          },
          alcohol_history: [
            'Quantity and duration of alcohol use — 12 cans beer/day',
            'CAGE questionnaire for alcohol use disorder',
            'Last alcohol use',
            'Prior attempts to quit or cut down',
            'Withdrawal symptoms',
          ],
          rule_out_differentials: [
            'Congestive heart failure — JVD, peripheral edema, dyspnea',
            'Malignancy — peritoneal carcinomatosis, weight loss, lymphadenopathy',
            'Nephrotic syndrome — periorbital edema, proteinuria',
            'Tuberculous peritonitis — night sweats, weight loss, exposure history',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies ascites secondary to portal hypertension from alcoholic liver cirrhosis as likely diagnosis',
            'Explains need for diagnostic paracentesis to evaluate ascitic fluid and rule out SBP',
            'Discusses management including alcohol cessation, sodium restriction, diuretics (spironolactone with loop diuretic)',
            'Explains complications, prognosis, and role of liver transplantation',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think abdominal swelling is due to weight gain or a minor digestive issue',
            concerns: 'May minimize the severity of the condition; concerns about lifestyle changes and alcohol cessation',
            expectations: 'Expects treatment to relieve abdominal swelling and discomfort',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case024Cirrhosis;
