import { CaseData } from '@/types';

const case026Hepatitis: CaseData = {
  _id: 'case-026-hepatitis',
  case_id: 'Case 026 - Nausea Vomiting and Jaundice',
  case_name: 'Nausea Vomiting and Jaundice',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 28,
    gender: 'M',
    occupation: 'Not specified',
    chief_complaint: 'Nausea, vomiting, abdominal pain, fever, and muscle aches for 5 days',
    presentation: {
      setting: 'Patient presents to the clinic complaining of a 5-day history of nausea, vomiting, diffuse abdominal pain, fever, and muscle aches.',
      duration: '5 days',
      hpi: {
        onset: 'Gradual onset over 5 days',
        site: 'Diffuse abdominal pain',
        character: 'Diffuse abdominal pain with nausea and vomiting',
        radiation: 'No radiation',
        severity: 'Moderate to severe',
        time_course: 'Continuous over 5 days, progressively worsening',
        exacerbating_factors: ['Movement', 'Eating'],
        relieving_factors: ['Tolerating liquids only'],
      },
    },
    symptoms: {
      constitutional: {
        fever: true,
        myalgias: true,
        temperature: '100.8 F',
        heart_rate: '98 bpm',
        blood_pressure: '120/74 mm Hg',
      },
      others: {
        jaundice: true,
        nausea: true,
        vomiting: true,
        abdominal_pain: true,
        loss_of_appetite: true,
        hepatomegaly: true,
        tender_liver: true,
        liver_size: '12 cm',
      },
      negatives: {
        diarrhea: false,
        recent_travel: false,
        illicit_drug_use: false,
        abdominal_distention: false,
        peripheral_edema: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior liver disease', 'No prior surgeries'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Acetaminophen 30 tablets per day for past 2 days for fever and body aches', 'No regular medications or supplements'],
    },
    social_history: {
      smoking: 'Non-smoker',
      alcohol: 'Occasional alcohol use, none since illness began',
      travel: 'No travel outside the United States',
    },
    family_history: 'No significant family history',
    ice: {
      ideas: 'Patient may be concerned about the cause of his symptoms, including possible infection or serious liver condition',
      concerns: 'Worried about severity of liver damage, potential for permanent injury, and sexual health implications',
      expectations: 'Expects diagnosis of the underlying cause and effective treatment to resolve symptoms',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis in this case and what are the possible contributing etiologies?',
      answer: 'Acute hepatitis, either viral infection or toxic injury. The markedly elevated transaminases (ALT 3440, AST 2705) indicate extensive hepatic necrosis. Possible etiologies include viral hepatitis (given sexual history with 12 lifetime partners and inconsistent barrier use) and acetaminophen toxicity (30 tablets per day for 2 days), which may exacerbate underlying viral hepatitis.',
    },
    {
      question: 'What is the most important immediate diagnostic test and why?',
      answer: 'Serum acetaminophen level. Acetaminophen toxicity can greatly exacerbate liver injury but is treatable with N-acetylcysteine (NAC). The level should be plotted on a nomogram based on time since last ingestion to determine risk of hepatotoxicity and need for antidote therapy.',
    },
    {
      question: 'What management considerations are important if fulminant hepatic failure develops?',
      answer: 'If fulminant liver failure is suspected, the patient should be transferred to a liver transplant center for evaluation, as fulminant hepatic failure can be rapidly fatal. Key features include progressive encephalopathy (graded I-IV), worsening coagulopathy, rising bilirubin, ascites, hypoglycemia, hyperammonemia, and lactic acidosis. Mortality for comatose patients is approximately 80% without emergent transplant.',
    },
    {
      question: 'A healthcare worker with protective anti-HBsAb after vaccination experiences a needlestick injury from a hepatitis B-positive patient. What serology findings indicate the worker is protected?',
      answer: 'Positive anti-HBsAb with negative HBsAg and negative anti-HBc IgG. Anti-HBsAb alone indicates vaccination-induced immunity. Prior infection would show both anti-HBsAb and anti-HBc IgG positive. Acute infection would show HBsAg or anti-HBc IgM positive. The worker needs only reassurance and no postexposure prophylaxis.',
    },
    {
      question: 'How is acetaminophen toxicity treated and what is the mechanism of action of the antidote?',
      answer: 'N-acetylcysteine (NAC) is the antidote. It functions by providing cysteine to replenish glutathione stores, which detoxify the toxic metabolite produced by cytochrome P450. Ideally started within 10 hours of ingestion and continued for 72 hours. Gastric decontamination with charcoal may help within 4 hours of ingestion. Patients with levels above the nomogram treatment line require NAC therapy.',
    },
    {
      question: 'What serologic studies are used to diagnose acute hepatitis A, B, and C infections?',
      answer: 'Hepatitis A: Anti-HAV IgM. Hepatitis B: HBsAg (surface antigen) and anti-HBc IgM (core antibody, positive during the window period when HBsAg disappears before anti-HBs appears). Hepatitis C: Anti-HCV antibody (may be negative for several weeks initially, so HCV RNA assay is useful for early diagnosis).',
    },
    {
      question: 'What prevention measures are available for hepatitis A and B?',
      answer: 'Hepatitis A: Vaccine (2 doses 6 months apart, >90% efficacy). Postexposure prophylaxis with hepatitis A immunoglobulin plus first vaccine dose within 2 weeks for household and intimate contacts. Hepatitis B: Vaccine (3 doses over 6 months, >90% efficacy) recommended for healthcare workers, those with chronic hepatitis C, and all infants. Postexposure prophylaxis with HBIg for needlestick injuries and newborns of infected mothers, plus concurrent first vaccine dose.',
    },
    {
      question: 'A patient ingests 4 g of acetaminophen 8 hours prior, with a serum level of 30 mcg/mL. Based on the nomogram, what is the appropriate management?',
      answer: 'Observation. The level of 30 mcg/mL at 8 hours falls below the treatment line on the nomogram, indicating low risk of hepatotoxicity. No NAC is needed. The patient should be observed and monitored. This demonstrates the importance of the nomogram in guiding treatment decisions.',
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
            'Shows empathy for patient discomfort and anxiety',
            'Addresses patient concerns about liver disease prognosis',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Diffuse abdomen, right upper quadrant',
            Onset: 'Gradual over 5 days',
            Character: 'Nausea, vomiting, diffuse abdominal pain, fever, myalgias',
            Radiation: 'No radiation of pain',
            Associated_symptoms: 'Jaundice, loss of appetite, dark urine, muscle aches',
            Time_course: 'Continuous progression over 5 days',
            Exacerbating_relieving: 'Worse with movement and eating; able to tolerate liquids',
            Severity: 'Moderate to severe — patient appears uncomfortable',
          },
          specific_history: [
            'Sexual history — number of partners, barrier use',
            'Medication history — acetaminophen dose and timing',
            'Illicit drug use — IV drug use risk for hepatitis B and C',
            'Travel history',
            'Blood transfusion history',
            'Alcohol intake',
            'Exposure to toxins or supplements',
            'Immunization history for hepatitis A and B',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains likely diagnosis of acute hepatitis with discussion of viral versus toxic etiology',
            'Discusses need for acetaminophen level and viral serologies',
            'Explains treatment options including NAC for acetaminophen toxicity',
            'Discusses monitoring for fulminant hepatic failure and possible transplant evaluation',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think this is a serious infection or liver problem',
            concerns: 'Fear of permanent liver damage, sexually transmitted infection, and prognosis',
            expectations: 'Expects clear diagnosis and effective treatment plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case026Hepatitis;
