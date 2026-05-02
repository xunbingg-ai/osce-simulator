import { CaseData } from '@/types';

const case043Meningitis: CaseData = {
  _id: 'case-043-meningitis',
  case_id: 'Case 043 - Fever with Headache and Neck Stiffness',
  case_name: 'Fever with Headache and Neck Stiffness',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 20,
    gender: 'M',
    occupation: 'College student',
    chief_complaint: 'Fever, severe headache, and neck stiffness for 3 days',
    presentation: {
      setting: 'Patient presents to the emergency department. He is lying on his side with his arm covering his eyes; the room light is turned off.',
      duration: '3 days, progressively worsening',
      hpi: {
        onset: 'Gradual onset 3 days ago with fever, body aches, and headache',
        site: 'Head (diffuse headache), neck (stiffness)',
        character: 'Severe, progressively worsening headache with photophobia and nausea',
        radiation: 'N/A',
        severity: 'Severe — patient covering eyes, light off, unable to touch chin to chest without pain',
        time_course: 'Progressive worsening over 3 days',
        exacerbating_factors: ['Light (photophobia)', 'Passive neck flexion (nuchal rigidity)'],
        relieving_factors: ['Dark room', 'Lying still on side'],
      },
    },
    symptoms: {
      constitutional: {
        fever: true,
        temperature: '102.3 F',
        body_aches: true,
        malaise: true,
      },
      others: {
        headache: true,
        photophobia: true,
        nuchal_rigidity: true,
        neck_pain_on_flexion: true,
        unable_to_touch_chin_to_chest: true,
        no_focal_deficits: true,
        nausea: true,
        vomiting: false,
      },
      respiratory: {
        rhinorrhea: true,
        cough: false,
        nasal_congestion: false,
      },
      negatives: {
        rash: false,
        diarrhea: false,
        focal_neurologic_deficit: false,
      },
    },
    medical_history: {
      chronic_conditions: ['None — otherwise healthy college student'],
      negatives: ['No known ill contacts', 'No immunosuppression', 'No recent head trauma or surgery'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      family: 'College student — living in dormitory or close quarters',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely thinks this is a severe flu or bad headache, but is becoming increasingly concerned as symptoms worsen',
      concerns: 'Fear of serious neurologic condition, worried about the severe headache and light sensitivity',
      expectations: 'Expects diagnosis and pain relief for the severe headache',
    },
  },
  questions: [
    {
      question: 'What is the most concerning diagnosis and what diagnostic test is needed?',
      answer: 'Meningitis, especially bacterial meningitis. Lumbar puncture for CSF analysis is the diagnostic test of choice. CSF should be examined for opening pressure, WBC count with differential, glucose, protein, Gram stain, and culture.',
    },
    {
      question: 'What are the indications for CT head before lumbar puncture?',
      answer: 'CT head before LP is indicated if the patient has: immunocompromised state, new-onset seizures, papilledema, altered mental status, or focal neurologic deficit. This patient has no focal deficits and is otherwise immunocompetent, so LP can be performed without preceding imaging. If LP would be delayed by CT, blood cultures should be drawn and antibiotics started immediately.',
    },
    {
      question: 'How do the CSF findings differ between bacterial and viral meningitis?',
      answer: 'Bacterial meningitis: high opening pressure, elevated WBC with neutrophil predominance, low glucose (<40 mg/dL), elevated protein. Gram stain may show organisms. Viral meningitis: normal to slightly elevated opening pressure, elevated WBC with lymphocyte predominance, normal glucose, normal to slightly elevated protein. Enteroviruses are the most common cause of viral meningitis.',
    },
    {
      question: 'What empiric antibiotics should be started for community-acquired bacterial meningitis?',
      answer: 'Empiric therapy is vancomycin plus a third-generation cephalosporin (ceftriaxone or cefotaxime). Ampicillin should be added if Listeria monocytogenes is a concern (elderly, immunocompromised, pregnant women, neonates). For this immunocompetent 20-year-old, vancomycin plus ceftriaxone is appropriate.',
    },
    {
      question: 'What is the role of corticosteroids in the treatment of bacterial meningitis?',
      answer: 'Glucocorticoids (dexamethasone) should be administered just before or concurrent with the first dose of antibiotics to reduce CNS inflammation and neurologic deficits. Studies show decreased mortality in S. pneumoniae meningitis and reduced hearing loss and neurologic sequelae overall. They do not significantly affect overall mortality.',
    },
    {
      question: 'What prevention strategies are available for bacterial meningitis?',
      answer: 'Vaccines are available for H. influenzae type b, S. pneumoniae, and N. meningitidis. The meningococcal vaccine is recommended for college students living in dormitories and military recruits. For close contacts of confirmed meningococcal meningitis cases, chemoprophylaxis with rifampin (twice daily for 2 days) or a single dose of ciprofloxacin is recommended.',
    },
    {
      question: 'What are Kernig and Brudzinski signs and what do they indicate?',
      answer: 'Kernig sign: with the patient supine, hips and knees flexed, passive knee extension elicits pain. Brudzinski sign: supine patient flexes hips and knees when the neck is passively flexed. Neither sign is very sensitive for meningeal irritation, but they are highly specific when present. The most sensitive finding is nuchal rigidity (inability to touch chin to chest).',
    },
    {
      question: 'What are the most common causes of bacterial meningitis by age group?',
      answer: 'Neonates: Group B Streptococcus, E. coli, L. monocytogenes. 1-23 months: S. pneumoniae, N. meningitidis, H. influenzae type b. 2-18 years: N. meningitidis, S. pneumoniae. 19-59 years: S. pneumoniae, N. meningitidis. 60+ years: S. pneumoniae, L. monocytogenes, Group B Streptococcus. S. pneumoniae is the most common isolate overall in adults.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Speaks gently and respectfully — patient is photophobic and in significant pain',
            'Avoids medical jargon — explains LP and meningitis in understandable terms',
            'Acknowledges the patients discomfort (severe headache, photophobia, neck pain)',
            'Communicates the seriousness of the condition without causing panic',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Diffuse headache, neck stiffness',
            Onset: 'Gradual onset 3 days ago, progressive worsening',
            Character: 'Severe, constant headache with photophobia, neck pain on flexion',
            Radiation: 'N/A',
            Associated_symptoms: 'Fever, body aches, nausea, rhinorrhea, photophobia, nuchal rigidity',
            Time_course: 'Progressive over 3 days, no improvement',
            Exacerbating_relieving: 'Worse with light and neck movement; better in dark, lying still',
            Severity: 'Severe — patient covering eyes, unable to touch chin to chest',
          },
          risk_factor_assessment: [
            'Age and living situation (college dorm — meningococcus risk)',
            'Immunocompromised status (HIV, chemotherapy, transplant)',
            'Recent head trauma or neurosurgery',
            'CSF rhinorrhea or otorrhea',
            'Recent antibiotic use',
            'Vaccination history (pneumococcal, meningococcal, H. influenzae)',
          ],
          rule_out_differentials: [
            'Subarachnoid hemorrhage — sudden worst headache of life, no fever',
            'Brain abscess — focal neurologic deficits, may have fever',
            'Viral encephalitis — altered mental status, seizures, focal findings',
            'Rocky Mountain spotted fever — rash, tick exposure',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies bacterial meningitis as the most concerning diagnosis',
            'Explains need for urgent LP with CSF analysis and when CT is needed first',
            'Discusses empiric antibiotic therapy (vancomycin + ceftriaxone) and role of steroids',
            'Emphasizes importance of blood cultures, rapid treatment, and reporting/chemoprophylaxis for close contacts',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think this is just a severe flu or migraine due to the photophobia and headache',
            concerns: 'Fear of serious brain infection, worry about permanent damage, pain from the severe headache',
            expectations: 'Expects effective pain relief and treatment; wants to know if this is contagious to roommates',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case043Meningitis;
