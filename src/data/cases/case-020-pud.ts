import { CaseData } from '@/types';

const case020PUD: CaseData = {
  _id: 'case-020-pud',
  case_id: 'Case 020 - Recurrent Upper Abdominal Pain',
  case_name: 'Recurrent Upper Abdominal Pain',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 37,
    gender: 'M',
    occupation: 'Executive',
    chief_complaint: 'Recurrent burning epigastric pain',
    presentation: {
      setting: 'Returns to clinic for follow-up of recurrent upper abdominal pain.',
      duration: 'Intermittent for more than 2 years, worsening over the past 2 months',
      hpi: {
        onset: 'Gradual onset over 2 years ago, increased frequency and severity in past 2 months',
        site: 'Epigastrium (upper abdomen)',
        character: 'Burning pain',
        radiation: 'No radiation to back documented',
        severity: 'Moderate, increasing in frequency and severity',
        time_course: 'Occurs 3-4 times per week, worse on empty stomach, awakens at night, recurs 2-3 hours after eating',
        exacerbating_factors: ['Empty stomach', 'Nighttime', 'Stress at work', 'Increased caffeine intake', 'Take-out foods'],
        relieving_factors: ['Eating food (immediate relief)', 'Over-the-counter antacids'],
      },
    },
    symptoms: {
      others: {
        epigastric_pain: true,
        pain_empty_stomach: true,
        nocturnal_pain: true,
        pain_relieved_by_food: true,
      },
      negatives: {
        gi_bleeding: false,
        weight_loss: false,
        anemia: false,
        vomiting: false,
        dysphagia: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior surgeries'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Occasional OTC antacids (calcium carbonate, aluminum-magnesium hydroxide)'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      occupation: 'Executive — reports increased stress at work',
      family: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely attributes pain to stress, diet, and lifestyle factors',
      concerns: 'Worried about chronic pain persisting for years and potential for serious underlying condition',
      expectations: 'Expects definitive diagnosis and treatment to prevent recurrence',
    },
  },
  questions: [
    {
      question: 'What is the difference in pain pattern between gastric ulcers and duodenal ulcers?',
      answer: 'Duodenal ulcers typically present with pain that is relieved by eating (food stimulates bicarbonate secretion into the duodenum), but worsens 2-5 hours later when acidic gastric contents enter the duodenum. Pain also worsens at night due to circadian stimulation of acid secretion. Gastric ulcers typically present with postprandial abdominal pain, leading to aversion of food, nausea, vomiting, and weight loss. Duodenal ulcer patients may experience weight gain because eating provides relief.',
    },
    {
      question: 'What are the two most common causes of peptic ulcer disease?',
      answer: 'The two major risk factors are chronic Helicobacter pylori infection (associated with 30-60% of gastric ulcers and 50-70% of duodenal ulcers) and chronic use of NSAIDs. H. pylori is a gram-negative microaerophilic bacillus that resides within the gastric mucosa and causes chronic inflammation. NSAIDs cause ulcers by inhibiting COX-1 derived prostaglandins, which impairs gastric defenses.',
    },
    {
      question: 'How do you diagnose Helicobacter pylori infection?',
      answer: 'Noninvasive tests include: serology for H. pylori antibody (useful only if never treated before, as antibodies remain positive for life), urea breath test (demonstrates active infection), and fecal H. pylori antigen test. Invasive testing via endoscopy with biopsy allows histologic examination and culture. The urea breath test and serology are the most commonly used noninvasive tests.',
    },
    {
      question: 'What is triple therapy and when is quadruple therapy preferred for H. pylori eradication?',
      answer: 'Triple therapy consists of amoxicillin (or metronidazole if penicillin allergy), clarithromycin, and a proton pump inhibitor (PPI). Quadruple therapy consists of metronidazole, a tetracycline, a bismuth compound, and a PPI. Quadruple therapy is preferred if the patient has prior macrolide exposure, local clarithromycin resistance rates exceed 15%, or eradication rates with triple therapy are below 85%.',
    },
    {
      question: 'What are the alarm symptoms that warrant prompt endoscopic evaluation in a patient with dyspepsia?',
      answer: 'Alarm symptoms include: age older than 45 years with new-onset dyspepsia, weight loss, recurrent vomiting, dysphagia, evidence of GI bleeding (hematemesis, melena), iron-deficiency anemia, or failure to respond to empiric therapy. These features raise concern for malignancy, particularly gastric adenocarcinoma.',
    },
    {
      question: 'What complications can arise from peptic ulcer disease?',
      answer: 'Approximately 70% of peptic ulcers are asymptomatic until complications develop. Major complications include: hemorrhage (most common, presenting as hematemesis or melena), gastric outlet obstruction (due to stricture formation or mass effect near the pyloric channel), perforation (leading to peritonitis, referred shoulder pain from phrenic nerve irritation), and malignant transformation (5-10% of gastric ulcers are malignant, requiring biopsy).',
    },
    {
      question: 'What is Zollinger-Ellison syndrome and when should it be suspected?',
      answer: 'Zollinger-Ellison syndrome is a gastrin-producing tumor (gastrinoma, usually located in the pancreas) resulting in acid hypersecretion. It should be suspected if patients have ulcers refractory to standard medical therapy, ulcers in unusual locations (eg, jejunum), or ulcers without NSAID use or H. pylori infection. About 25% occur in MEN I syndrome. Diagnosis begins with fasting gastrin level followed by secretin stimulation test. Imaging localizes the tumor.',
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
            'Shows empathy for chronic pain affecting daily life',
            'Addresses patient concerns about the cause of persistent symptoms',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Epigastrium (upper abdomen)',
            Onset: 'Gradual onset >2 years ago, worsening over past 2 months',
            Character: 'Burning pain',
            Radiation: 'Ask about radiation to back (suggests pancreatitis)',
            Associated_symptoms: 'Nausea, vomiting, early satiety, bloating, weight loss, melena, hematemesis',
            Time_course: 'Intermittent for 2+ years, now 3-4 times per week, nocturnal episodes, recurs 2-3 hours after meals',
            Exacerbating_relieving: 'Worse on empty stomach, at night, with stress, caffeine, take-out food. Relieved by eating and antacids',
            Severity: 'Moderate, increasing — ask patient to rate on pain scale',
          },
          alarm_symptoms: [
            'Weight loss — unintentional',
            'GI bleeding — hematemesis, melena, coffee ground emesis',
            'Dysphagia',
            'Recurrent vomiting',
            'Iron-deficiency anemia',
          ],
          rule_out_differentials: [
            'GERD — heartburn, regurgitation, chronic cough',
            'Biliary colic — RUQ pain, fatty meals, 30-60 min duration',
            'Pancreatitis — epigastric pain radiating to back, nausea/vomiting',
            'Gastric cancer — alarm symptoms, age >45',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies peptic ulcer disease as likely diagnosis given pain pattern and H. pylori positive serology',
            'Explains the role of H. pylori testing and the need for eradication therapy',
            'Discusses triple or quadruple therapy for H. pylori eradication with PPI for acid suppression',
            'Advises on alarm symptoms that warrant endoscopy and lifestyle modifications (stress management, diet)',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely links pain to stress at work, poor diet, and caffeine intake',
            concerns: 'Worried about chronic pain persisting for years and possibility of serious disease like cancer',
            expectations: 'Expects a definitive diagnosis and effective treatment to relieve pain and prevent recurrence',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case020PUD;
