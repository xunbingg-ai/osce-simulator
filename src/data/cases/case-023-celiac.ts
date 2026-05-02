import { CaseData } from '@/types';

const case023Celiac: CaseData = {
  _id: 'case-023-celiac',
  case_id: 'Case 023 - Chronic Diarrhea with Weight Loss',
  case_name: 'Chronic Diarrhea with Weight Loss',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 38,
    gender: 'M',
    occupation: 'Not specified',
    chief_complaint: 'Intermittent diarrhea with unintentional weight loss for 9-12 months',
    presentation: {
      setting: 'Patient presents for evaluation of chronic diarrhea.',
      duration: '9-12 months',
      hpi: {
        onset: 'Gradual onset 9-12 months ago',
        site: 'Abdomen (diffuse)',
        character: 'Large volume, nonbloody, greasy stools with mild cramping',
        radiation: 'No radiation',
        severity: 'Moderate',
        time_course: 'Intermittent over 9-12 months, persistent despite PPI trial and lactose avoidance',
        exacerbating_factors: ['Eating'],
        relieving_factors: [],
      },
    },
    symptoms: {
      others: {
        chronic_diarrhea: true,
        stool_character: 'Large volume, nonbloody, greasy (steatorrhea)',
        abdominal_cramping: true,
        glossitis: true,
        rash: true,
        rash_description: 'Papulovesicular lesions on elbows, knees, and abdomen (dermatitis herpetiformis)',
        pruritus: true,
        excoriations: true,
      },
      constitutional: {
        weight_loss: true,
        weight_loss_amount: 'More than 20 lb',
        appetite_good: true,
        fever: false,
      },
      negatives: {
        bloody_stool: false,
        oral_lesions: false,
        abdominal_tenderness: false,
        organomegaly: false,
        occult_blood: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior surgeries'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Tried PPI daily for several months — no improvement', 'Attempted lactose avoidance — no improvement'],
    },
    social_history: {
      smoking: 'Non-smoker',
      alcohol: 'Occasional beer on weekends, not regular',
      family: 'Unknown — adopted, does not know family medical history',
    },
    family_history: 'Unknown — patient was adopted',
    ice: {
      ideas: 'Patient may think symptoms are related to diet or stress given the intermittent nature',
      concerns: 'Worried about unintentional weight loss and chronic symptoms that have not responded to over-the-counter treatments',
      expectations: 'Expects a definitive diagnosis and effective treatment to resolve symptoms',
    },
  },
  questions: [
    {
      question: 'What is the initial evaluation and management of acute infectious diarrhea?',
      answer: 'Most cases are mild and self-limited, managed with oral rehydration and antimotility agents (loperamide). Evaluation is indicated for: profuse watery diarrhea with hypovolemia, grossly bloody stools, fever, symptoms lasting >48 hours, severe abdominal pain, age >70, hospitalization, or recent antibiotic use. Evaluation includes fecal leukocytes/lactoferrin, stool culture for Salmonella, Shigella, and Campylobacter, and C. difficile toxin if recent antibiotic use.',
    },
    {
      question: 'What are the indications for antibiotic treatment of acute diarrhea?',
      answer: 'Empiric antibiotics (quinolones) are indicated for inflammatory diarrhea with suspected invasive bacterial infection (bloody stools, fever). Exceptions: enterohemorrhagic E. coli (EHEC) — antibiotics are NOT recommended due to increased risk of hemolytic uremic syndrome (HUS). Giardiasis is treated with metronidazole or tinidazole. C. difficile is treated with oral vancomycin.',
    },
    {
      question: 'What is the difference between osmotic and secretory diarrhea?',
      answer: 'Osmotic diarrhea occurs due to unabsorbed solute drawing water into the gut lumen (high stool osmotic gap >75 mOsm/kg, low Na <70 mEq/L, low fecal pH <6 with carbohydrate malabsorption). It resolves with fasting. Secretory diarrhea results from abnormal water and electrolyte secretion (low osmotic gap <50 mOsm/kg), persists during fasting and at night, and can be caused by hormone-producing tumors (carcinoid, VIPoma, gastrinoma), infections, or laxatives.',
    },
    {
      question: 'How is celiac disease diagnosed?',
      answer: 'Initial screening: serum tissue transglutaminase (tTG)-IgA and endomysial (EMA)-IgA antibodies. Gold standard: endoscopic examination with small-bowel biopsy showing villous atrophy and crypt hyperplasia. All testing should be done while the patient is on a gluten-rich diet for at least several weeks as mucosal abnormalities and serologic titers improve after gluten withdrawal.',
    },
    {
      question: 'What is the best treatment for celiac disease and what are the complications if untreated?',
      answer: 'The mainstay of treatment is strict adherence to a gluten-free diet. Nutritional deficiencies should be corrected. Patients should be evaluated for bone loss using DEXA scan. Complications of untreated celiac disease include: malnutrition, osteoporosis, iron-deficiency anemia, vitamin deficiencies, increased risk of GI tract malignancies and T-cell lymphoma.',
    },
    {
      question: 'What is the association between dermatitis herpetiformis and celiac disease?',
      answer: 'Dermatitis herpetiformis is a pruritic, papulovesicular rash on extensor surfaces (elbows, knees, buttocks, abdomen) that is strongly associated with celiac disease. It is considered the cutaneous manifestation of gluten sensitivity. The rash and GI symptoms both improve with a gluten-free diet.',
    },
    {
      question: 'What are the risk factors for celiac disease?',
      answer: 'Risk factors include: family history of celiac disease, autoimmune conditions (type 1 diabetes, autoimmune thyroiditis), genetic predisposition (HLA-DQ2 and HLA-DQ8 gene subtypes), Down syndrome, Turner syndrome, and northern European ancestry.',
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
            'Shows empathy for chronic symptoms affecting quality of life',
            'Addresses patient concerns about unintentional weight loss',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Diffuse abdominal cramping',
            Onset: 'Gradual onset 9-12 months ago, intermittent',
            Character: 'Large volume, greasy, nonbloody stools (steatorrhea)',
            Radiation: 'No radiation',
            Associated_symptoms: 'Weight loss, glossitis, itchy rash on elbows and knees, abdominal cramping, bloating, flatulence',
            Time_course: 'Intermittent over 9-12 months, no response to PPI or lactose avoidance',
            Exacerbating_relieving: 'Worse with eating, no clear relieving factors',
            Severity: 'Moderate — causing significant weight loss (>20 lb)',
          },
          malabsorption_history: [
            'Weight loss despite good appetite',
            'Vitamin deficiency symptoms — glossitis, neuropathy, anemia',
            'Bone pain or fractures (osteoporosis)',
            'Rash — timing and relationship to meals',
            'Family history of celiac or autoimmune disease',
          ],
          rule_out_differentials: [
            'Lactose intolerance — osmotic diarrhea, resolves with fasting',
            'Irritable bowel syndrome — no weight loss, pain relieved with defecation',
            'Chronic pancreatitis — abdominal pain, alcohol history, pancreatic calcifications',
            'Inflammatory bowel disease — bloody stools, fever, systemic symptoms',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies celiac disease as the likely diagnosis given steatorrhea, weight loss, glossitis, and dermatitis herpetiformis',
            'Explains need for serologic testing (tTG-IgA and EMA-IgA) followed by endoscopic biopsy',
            'Discusses gluten-free diet as the mainstay of treatment',
            'Explains importance of nutritional assessment including DEXA scan and vitamin deficiency screening',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may attribute diarrhea to diet or stress given the intermittent nature',
            concerns: 'Worried about significant weight loss and chronic nature of symptoms; concerned about the itchy rash',
            expectations: 'Expects a clear diagnosis, effective treatment, and dietary guidance',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case023Celiac;
