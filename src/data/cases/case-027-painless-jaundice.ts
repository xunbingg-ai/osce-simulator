import { CaseData } from '@/types';

const case027PainlessJaundice: CaseData = {
  _id: 'case-027-painless-jaundice',
  case_id: 'Case 027 - Painless Jaundice and Weight Loss',
  case_name: 'Painless Jaundice and Weight Loss',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 57,
    gender: 'M',
    occupation: 'Not specified — cigars occasionally',
    chief_complaint: 'Malaise, fatigue, weight loss, generalized itching, and jaundice',
    presentation: {
      setting: 'Patient comes to the clinic complaining of malaise for several weeks with fatigue, depressed mood, loss of appetite, and 20-lb unintentional weight loss.',
      duration: 'Several weeks',
      hpi: {
        onset: 'Gradual onset over several weeks',
        site: 'Generalized',
        character: 'Malaise, fatigue, pruritus, jaundice',
        radiation: 'No radiation',
        severity: 'Moderate — progressive',
        time_course: 'Progressive worsening over weeks',
        exacerbating_factors: ['None clearly identified'],
        relieving_factors: ['Moisturizing lotions and creams not effective for itching'],
      },
    },
    symptoms: {
      constitutional: {
        malaise: true,
        fatigue: true,
        weight_loss: '20 lb unintentional',
        loss_of_appetite: true,
        depressed_mood: true,
      },
      others: {
        pruritus: true,
        icterus: true,
        excoriations: true,
        light_stools: true,
        dark_urine: true,
        scleral_icterus: true,
        flat_affect: true,
        disheveled_appearance: true,
      },
      negatives: {
        fever: false,
        abdominal_pain: false,
        nausea: false,
        vomiting: false,
        diarrhea: false,
        splenomegaly: false,
        abdominal_masses: false,
        rashes: false,
        telangiectasias: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant past medical history', 'No prior surgeries', 'No prior abdominal or biliary surgery'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Multivitamin only'],
    },
    social_history: {
      smoking: 'Cigar smoker',
      alcohol: 'Occasional alcohol use',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely concerned about the cause of his jaundice and weight loss, may suspect cancer',
      concerns: 'Fear of malignancy, worried about prognosis and ability to work and function',
      expectations: 'Expects thorough evaluation to determine the cause and appropriate treatment',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what is the pathophysiology behind the presentation?',
      answer: 'Biliary obstruction, most likely caused by malignancy such as pancreatic cancer. The pattern is cholestatic: elevated alkaline phosphatase (588 IU/L) with conjugated hyperbilirubinemia (direct bilirubin 6 mg/dL), pruritus, acholic stools, and dark urine. The absence of abdominal pain makes gallstone disease less likely, and painless jaundice is suspicious for pancreatic malignancy.',
    },
    {
      question: 'What is the next diagnostic step and what imaging findings would you expect?',
      answer: 'Abdominal imaging, starting with ultrasound to evaluate the biliary tree for ductal dilation, followed by CT scan of the abdomen to visualize the pancreas. Ultrasound is noninvasive and sensitive for gallstones and biliary ductal dilation. CT provides better detail of pancreatic masses, staging, and assessment of resectability.',
    },
    {
      question: 'What risk factors are associated with pancreatic cancer?',
      answer: 'Smoking (strongest risk factor), alcohol use, obesity, advanced age (peak incidence in seventh decade), diabetes mellitus, chronic pancreatitis, and family history. Two-thirds of cases occur in persons older than 65 years.',
    },
    {
      question: 'How do you distinguish between hepatocellular disease and biliary obstruction on laboratory testing?',
      answer: 'Hepatocellular disease: marked elevation of AST and ALT (often >500 IU/L) with relatively mild AlkP elevation. Biliary obstruction: marked elevation of alkaline phosphatase (often >4 times normal) with relatively mild AST/ALT elevation. In this case, AlkP 588 with ALT 175 and AST 140 is consistent with an obstructive pattern.',
    },
    {
      question: 'What are the common causes of conjugated (direct) hyperbilirubinemia?',
      answer: 'Hepatocellular disease: viral hepatitis, drug-induced liver injury, alcoholic hepatitis, cirrhosis, ischemia. Biliary obstruction: gallstones (usually painful), strictures (from prior surgery or inflammation), malignancies (pancreatic cancer, cholangiocarcinoma, ampullary cancer), primary sclerosing cholangitis, primary biliary cirrhosis.',
    },
    {
      question: 'What are the treatment options and prognosis for pancreatic cancer?',
      answer: 'Pancreatic cancer is the fifth leading cause of cancer death. Median survival is 9 months with a 5-year survival of 3%. Most patients (80%) have metastatic disease at diagnosis. For localized disease, surgical resection by pancreaticoduodenectomy (Whipple procedure) offers the best hope for cure. Neoadjuvant chemotherapy is often used. Palliative measures include common bile duct stenting for biliary obstruction. CA 19-9 is used for prognosis and monitoring treatment response.',
    },
    {
      question: 'What is the difference between unconjugated and conjugated hyperbilirubinemia in terms of causes and clinical features?',
      answer: 'Unconjugated (<15% direct): caused by hemolysis or Gilbert syndrome, bilirubin usually <5 mg/dL, no bilirubinuria, normal liver enzymes. Conjugated: caused by hepatocellular disease or biliary obstruction, bilirubinuria present, abnormal liver enzymes. Gilbert syndrome is benign and requires no treatment.',
    },
    {
      question: 'A patient with ulcerative colitis presents with jaundice, fever, and an obstructive liver enzyme pattern. What is the likely diagnosis?',
      answer: 'Primary sclerosing cholangitis (PSC), which is strongly associated with inflammatory bowel disease, particularly ulcerative colitis. PSC causes inflammation and fibrosis of intrahepatic and extrahepatic bile ducts, leading to strictures. Diagnosis is confirmed by ERCP/MRCP showing multiple bile duct strictures. Complications include cholangitis and cholangiocarcinoma.',
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
            'Avoids medical jargon uses terms patient can understand',
            'Shows empathy for patient distress and anxiety about potential malignancy',
            'Communicates sensitively regarding prognosis concerns',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Generalized — jaundice visible in sclera and skin',
            Onset: 'Gradual over several weeks',
            Character: 'Painless jaundice with pruritus, fatigue, weight loss',
            Radiation: 'No radiation',
            Associated_symptoms: 'Pruritus, acholic stools, dark urine, fatigue, weight loss, anorexia',
            Time_course: 'Progressive over weeks to months',
            Exacerbating_relieving: 'Itching not relieved by moisturizers',
            Severity: 'Moderate — noticeable icterus and functional decline',
          },
          specific_history: [
            'Duration and progression of jaundice',
            'Color of stool and urine',
            'Abdominal pain — presence or absence',
            'Weight loss — quantify',
            'Alcohol and smoking history',
            'Prior abdominal or biliary surgery',
            'History of gallstones or pancreatitis',
            'Family history of pancreatic or hepatobiliary cancer',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains likely diagnosis of biliary obstruction with suspicion for malignancy',
            'Discusses need for imaging (ultrasound and CT) to evaluate biliary tree and pancreas',
            'Explains the difference between obstructive and hepatocellular jaundice',
            'Discusses treatment options including surgical and palliative approaches',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely suspects serious illness given unintentional weight loss and jaundice',
            concerns: 'Fear of cancer, concerns about treatment options and prognosis',
            expectations: 'Expects complete diagnostic workup and clear explanation of findings',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case027PainlessJaundice;
