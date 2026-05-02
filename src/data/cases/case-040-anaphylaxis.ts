import { CaseData } from '@/types';

const case040Anaphylaxis: CaseData = {
  _id: 'case-040-anaphylaxis',
  case_id: 'Case 040 - Facial Swelling and Difficulty Breathing After Injection',
  case_name: 'Facial Swelling and Difficulty Breathing After Injection',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 25,
    gender: 'M',
    occupation: 'Not specified',
    chief_complaint: 'Facial swelling and difficulty breathing after penicillin injection',
    presentation: {
      setting: 'Patient was being seen in the office for a 2-day history of low-grade fever and sore throat. After evaluation, he was given an intramuscular injection of penicillin for presumed streptococcal pharyngitis. Within minutes, he developed acute swelling of the face and difficulty breathing.',
      duration: 'Minutes after penicillin injection — acute onset',
      hpi: {
        onset: 'Sudden onset within minutes after IM penicillin injection',
        site: 'Face, lips, throat, skin (generalized)',
        character: 'Facial and lip edema, wheezing, diffuse urticarial lesions, dyspnea',
        radiation: 'N/A',
        severity: 'Life-threatening — dyspneic, hypotensive, tachycardic, wheezing diffusely',
        time_course: 'Acute, minutes after injection, rapidly progressive',
        exacerbating_factors: ['Penicillin injection (trigger)'],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        tachycardia: true,
        heart_rate: '130 bpm',
        blood_pressure: '90/47 mm Hg',
        hypotension: true,
      },
      respiratory: {
        respiratory_rate: '28 breaths/min, shallow',
        dyspnea: true,
        wheezing: true,
        oxygen_saturation: 'On oxygen by face mask',
      },
      others: {
        facial_edema: true,
        lip_edema: true,
        urticaria: true,
        angioedema: true,
      },
      constitutional: {
        frightened: true,
        sense_of_impending_doom: true,
      },
      negatives: {
        fever: false,
        known_allergies: false,
      },
    },
    medical_history: {
      chronic_conditions: ['None — otherwise healthy'],
      negatives: ['No known prior allergic reactions', 'No known drug allergies', 'Takes no regular medications'],
    },
    drug_history: {
      allergies: 'Previously unknown — now allergic to penicillin',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely does not understand why this severe reaction happened — he was only being treated for a sore throat',
      concerns: 'Fear of suffocation, fear of dying, extreme anxiety from rapid onset of swelling and breathing difficulty',
      expectations: 'Expects immediate relief of breathing difficulty and explanation of what happened',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why?',
      answer: 'Anaphylaxis due to penicillin hypersensitivity. The patient developed classic features of IgE-mediated immediate hypersensitivity within minutes of penicillin injection: facial angioedema, diffuse urticaria, bronchospasm (wheezing), hypotension, and tachycardia.',
    },
    {
      question: 'What is the first priority in management and why?',
      answer: 'Immediate intramuscular epinephrine (1:1000, 0.3-0.5 mL) injected in the anterolateral thigh. Epinephrine acts on alpha-adrenergic receptors to induce vasoconstriction (reversing hypotension and angioedema) and on beta-adrenergic receptors to induce bronchodilation, increase myocardial contractility, and prevent further mast cell degranulation. IM route in the thigh is preferred over subcutaneous or deltoid for faster absorption.',
    },
    {
      question: 'What is the difference between anaphylaxis and anaphylactoid reactions?',
      answer: 'Anaphylaxis is an IgE-mediated type I hypersensitivity reaction requiring prior sensitization, causing mast cell degranulation and release of histamine and other mediators. Anaphylactoid reactions produce the same clinical picture but are not IgE-mediated — they result from direct mast cell and basophil degranulation (e.g., iodinated contrast media, opiates). The treatment is the same for both.',
    },
    {
      question: 'What are the clinical manifestations of anaphylaxis by system?',
      answer: 'Cardiovascular: arrhythmias, bradycardia, cardiac arrest, hypotension, tachycardia. Dermatologic: angioedema, cyanosis, flushing, pruritus, urticaria. Gastrointestinal: abdominal cramping, diarrhea, nausea/vomiting. Neurologic: dizziness, seizures, syncope, weakness. Pulmonary: bronchorrhea, dyspnea, nasal congestion, rhinorrhea, sneezing, stridor, tachypnea, wheezing. Other: diaphoresis, hoarseness, laryngeal edema, sense of impending doom.',
    },
    {
      question: 'What additional treatments beyond epinephrine are important in managing anaphylaxis?',
      answer: 'Assess ABCs first — intubate if airway compromised. Administer oxygen, place patient recumbent with legs elevated. Give IV normal saline for volume replacement. Diphenhydramine 50 mg IV/PO every 4 hours as needed. Consider H2 blockers (ranitidine), albuterol for bronchospasm, glucagon if patient is on beta-blockers, and systemic corticosteroids to prevent delayed reactions. Atropine for symptomatic bradycardia.',
    },
    {
      question: 'How do you approach a patient with a reported penicillin allergy when penicillin is the preferred treatment?',
      answer: 'Take a careful history — distinguish true IgE-mediated allergy (hives, throat tightening, swelling, difficulty breathing) from non-IgE adverse effects (rash, nausea). If history suggests anaphylaxis, avoid penicillin and cephalosporins (10% cross-reactivity). If unclear, consider penicillin skin testing. If penicillin is the only option (e.g., neurosyphilis in pregnancy), desensitization protocols can be used.',
    },
    {
      question: 'What is serum sickness and how does it differ from anaphylaxis?',
      answer: 'Serum sickness is a type III hypersensitivity reaction caused by immune complex formation, occurring 7-10 days after primary exposure or 2-4 days after secondary exposure to a foreign serum or drug. It presents with fever, polyarthralgia, urticaria, lymphadenopathy, and sometimes glomerulonephritis. Unlike anaphylaxis, it is not IgE-mediated, has a delayed onset, and is usually self-limiting. Treatment is symptomatic (antihistamines, NSAIDs).',
    },
    {
      question: 'What is the management of erythema multiforme major (Stevens-Johnson syndrome) and how does it differ from anaphylaxis?',
      answer: 'SJS is a severe type IV hypersensitivity reaction involving two or more mucosal surfaces, often drug-induced (sulfonamides, NSAIDs). Management involves withdrawal of the offending agent, treatment of concurrent infections, aggressive fluid resuscitation, and supportive care similar to burn management. Unlike anaphylaxis, SJS develops over days, not minutes, and is not treated with epinephrine. Corticosteroid use is controversial.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Calm, reassuring communication with patient who is frightened and in distress',
            'Avoids jargon — uses terms patient can understand about allergic reaction',
            'Acknowledges the patients fear and anxiety about the sudden severe reaction',
            'Demonstrates urgency without causing panic',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Face, lips, throat, skin (generalized urticaria)',
            Onset: 'Sudden — within minutes after IM penicillin injection',
            Character: 'Facial and lip edema, diffuse wheezing, urticarial lesions, dyspnea',
            Radiation: 'N/A',
            Associated_symptoms: 'Hypotension, tachycardia, tachypnea, sense of impending doom, anxiety',
            Time_course: 'Acute, minutes after trigger, rapidly progressive over minutes',
            Exacerbating_relieving: 'No relieving factors identified; triggered by penicillin injection',
            Severity: 'Life-threatening — assess ABCs, vital signs, oxygen saturation',
          },
          history_of_allergy: [
            'Prior allergic reactions to medications',
            'Penicillin or cephalosporin exposure history',
            'Other drug allergies (NSAIDs, sulfa)',
            'History of asthma, eczema, or hay fever (atopy risk factor)',
            'Prior food allergies (peanuts, shellfish)',
          ],
          rule_out_differentials: [
            'Vasovagal syncope — bradycardia, not urticaria or bronchospasm',
            'Panic attack — no urticaria, angioedema, or hypotension',
            'Hereditary angioedema — no urticaria, no hypotension, family history',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies anaphylaxis as the diagnosis and explains the mechanism',
            'Explains the critical need for immediate IM epinephrine and why (alpha and beta effects)',
            'Discusses comprehensive management beyond epinephrine (fluids, antihistamines, steroids, airway)',
            'Advises on future penicillin avoidance, medical alert identification, and EpiPen prescription',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may not understand that this was an allergic reaction to a common antibiotic',
            concerns: 'Fear of death or permanent harm from the reaction, worry about future drug reactions',
            expectations: 'Expects the reaction to be stopped quickly and wants to know how to avoid this in the future',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case040Anaphylaxis;
