import { CaseData } from '@/types';

const case021IBD: CaseData = {
  _id: 'case-021-ibd',
  case_id: 'Case 021 - Abdominal Pain with Bloody Diarrhea',
  case_name: 'Abdominal Pain with Bloody Diarrhea',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 28,
    gender: 'M',
    occupation: 'Accountant',
    chief_complaint: 'Abdominal pain and diarrhea with blood and mucus',
    presentation: {
      setting: 'Patient comes to the emergency center complaining of abdominal pain and diarrhea for 2 days.',
      duration: 'Current episode 2 days; similar milder episodes over the past 6-8 months',
      hpi: {
        onset: 'Acute onset 2 days ago of abdominal pain and diarrhea',
        site: 'Diffuse abdominal pain',
        character: 'Crampy abdominal pain',
        radiation: 'No radiation',
        severity: 'Moderate to severe',
        time_course: 'Current episode 2 days; prior milder episodes over 6-8 months lasting 24-48 hours with loose, mucoid, bloody stools',
        exacerbating_factors: ['Sudden urge to defecate (tenesmus)'],
        relieving_factors: ['Not relieved by defecation'],
      },
    },
    symptoms: {
      others: {
        diarrhea: true,
        stool_frequency: '10-12 times per day',
        stool_volume: 'Small volume',
        stool_blood: true,
        stool_mucus: true,
        tenesmus: true,
        urgency: true,
        abdominal_pain_crampy: true,
        abdominal_distention: true,
        bowel_sounds: 'Hypoactive',
      },
      constitutional: {
        fever: true,
        temperature: '99°F (37.2°C)',
        heart_rate: '98 bpm',
        blood_pressure: '118/74 mm Hg',
      },
      negatives: {
        vomiting: false,
        guarding: false,
        rebound_tenderness: false,
        jaundice: false,
        oral_ulceration: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior medications', 'No recent travel', 'No sick contacts', 'No family history of GI problems'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Non-smoker',
      alcohol: 'Does not drink alcohol',
      occupation: 'Accountant',
      travel: 'No travel outside the United States',
    },
    family_history: 'Denies any family history of gastrointestinal problems',
    ice: {
      ideas: 'Patient may be concerned about food poisoning or a chronic bowel condition given the recurrent episodes',
      concerns: 'Worried about the recurrent bloody diarrhea, cramping pain, and the need for ongoing treatment',
      expectations: 'Expects a clear diagnosis, relief of symptoms, and a plan to prevent future episodes',
    },
  },
  questions: [
    {
      question: 'What are the key differences between Crohn disease and ulcerative colitis?',
      answer: 'Crohn disease: transmural inflammation, noncontinuous "skip lesions," most commonly affects terminal ileum, fistulas and abscesses common, smoking increases risk, surgery is not curative. Ulcerative colitis: mucosal and submucosal inflammation, continuous pattern starting at rectum extending proximally, limited to colon, hemorrhage and toxic megacolon common, smoking decreases risk, colectomy is curative.',
    },
    {
      question: 'What are the extraintestinal manifestations of inflammatory bowel disease?',
      answer: 'Skin: erythema nodosum, pyoderma gangrenosum. Rheumatologic: arthritis (polyarticular, asymmetric), ankylosing spondylitis. Ocular: uveitis (photophobia, blurred vision). Hepatobiliary: primary sclerosing cholangitis (more common in UC), cholelithiasis (more common in CD), fatty liver. Urologic: nephrolithiasis (calcium oxalate stones after small bowel resection in CD).',
    },
    {
      question: 'What acute complications are associated with ulcerative colitis?',
      answer: 'Acute complications include: severe hemorrhage with possible hemorrhagic shock, fulminant colitis with >10 stools/day, abdominal pain, distention, fever, leukocytosis, tachycardia, and altered mental status; toxic megacolon (colonic diameter >6 cm or cecal diameter >9 cm with systemic toxicity); and colonic perforation with peritonitis (50% mortality, usually from untreated toxic megacolon). Management involves IV fluids, NPO, nasogastric decompression, broad-spectrum antibiotics, corticosteroids, and surgical evaluation for colectomy.',
    },
    {
      question: 'What imaging and endoscopic findings help differentiate UC from CD?',
      answer: 'For UC: barium enema may show "lead pipe colon"; colonoscopy shows continuous inflammation starting at rectum; biopsy shows crypt abscesses with PMN infiltration. For CD: barium studies show "string sign" (strictures); endoscopy shows "cobblestoning" of mucosa; biopsy shows noncaseating granulomas. CT may show bowel wall thickening, fistulas, or abscesses in CD.',
    },
    {
      question: 'How is inflammatory bowel disease treated?',
      answer: 'For mild-to-moderate UC: 5-ASA compounds (sulfasalazine, mesalamine). For severe UC flares: corticosteroids (oral, rectal, or IV) tapered once remission achieved. Immune modulators (6-mercaptopurine, azathioprine, methotrexate, infliximab) for refractory cases. For CD: similar approach with corticosteroids for acute flares, thiopurines or biologics for maintenance. Unlike UC, colectomy is not curative for CD.',
    },
    {
      question: 'What is toxic megacolon and how is it managed?',
      answer: 'Toxic megacolon is characterized by colonic dilation >6 cm (or cecal dilation >9 cm) with systemic toxicity (fever, tachycardia, hypotension, leukocytosis, altered mental status). It is a complication of UC. Management: IV fluids, NPO, nasogastric decompression, broad-spectrum antibiotics, systemic corticosteroids, and prompt surgical consultation for colectomy if no improvement.',
    },
    {
      question: 'What infections must be excluded before diagnosing IBD and what is the gold standard for confirming IBD?',
      answer: 'Infectious causes to exclude: Entamoeba histolytica, Salmonella, Shigella, Escherichia coli, Campylobacter, and Clostridium difficile (can occur without prior antibiotic use). After obtaining stool samples to exclude infection, colonoscopy is the gold standard for diagnosing IBD, allowing visualization of ulcers and biopsy for histologic confirmation.',
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
            'Shows empathy for discomfort from frequent diarrhea and abdominal pain',
            'Addresses patient concerns about recurrent symptoms',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Diffuse abdominal pain',
            Onset: 'Acute 2 days ago; prior episodes over 6-8 months',
            Character: 'Crampy pain, small-volume bloody mucoid stools',
            Radiation: 'Ask about radiation of pain',
            Associated_symptoms: 'Tenesmus, urgency, fever, weight loss, joint pain, eye symptoms, skin rashes',
            Time_course: '2 days current episode; prior episodes milder lasting 24-48 hours',
            Exacerbating_relieving: 'Worse with urge to defecate; not relieved by defecation',
            Severity: 'Moderate to severe — 10-12 bowel movements per day',
          },
          ibd_specific_history: [
            'Family history of IBD',
            'Extra-intestinal symptoms — joint pain, skin lesions, eye inflammation',
            'Travel history and sick contacts',
            'Antibiotic use prior to symptom onset',
            'Smoking history (protective for UC, risk factor for CD)',
          ],
          rule_out_differentials: [
            'Infectious colitis — travel, sick contacts, antibiotic use, fever',
            'Irritable bowel syndrome — pain relieved by defecation, no blood, no weight loss',
            'Ischemic colitis — older age, atherosclerotic disease',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies inflammatory bowel disease as likely diagnosis given young age, chronicity, bloody mucoid stools, and tenesmus',
            'Explains need for stool cultures to exclude infection before proceeding to colonoscopy',
            'Discusses colonoscopy with biopsy as the gold standard for diagnosis',
            'Explains treatment options including corticosteroids for acute flares and maintenance therapy',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may wonder about food poisoning or a chronic digestive condition',
            concerns: 'Fear of chronic disease, worry about bloody stools and cancer risk, impact on daily life and work as an accountant',
            expectations: 'Expects a definitive diagnosis, effective symptom control, and long-term management plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case021IBD;
