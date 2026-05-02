import { CaseData } from '@/types';

const case012Endocarditis: CaseData = {
  _id: 'case-012-endocarditis',
  case_id: 'Case 012 - Fever & Productive Cough',
  case_name: 'Fever & Productive Cough',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 28,
    gender: 'M',
    occupation: 'not specified — presented to emergency center',
    chief_complaint: 'Fever with shaking chills for 6 days, productive cough for 2 days',
    presentation: {
      setting: 'Patient comes to the emergency center complaining of 6 days of fever with shaking chills. Over the past 2 days, he has developed a productive cough with greenish sputum occasionally streaked with blood.',
      duration: '6 days (fever); 2 days (cough)',
      hpi: {
        onset: 'Gradual onset 6 days ago with fever and chills; cough started 2 days ago',
        site: 'Generalized — fever with productive cough and pleuritic chest pain',
        character: 'Shaking chills, productive cough (greenish sputum, blood-streaked), pleuritic chest pain',
        radiation: 'No radiation',
        severity: 'Moderate to severe — febrile and tachycardic',
        time_course: 'Progressive worsening over 6 days',
        exacerbating_factors: ['Deep inspiration (pleuritic chest pain)'],
        relieving_factors: [],
      },
    },
    symptoms: {
      respiratory: {
        cough: 'Productive — greenish sputum, occasionally blood-streaked',
        pleuritic_chest_pain: 'With deep inspiration',
        hemoptysis: 'Occasional blood-streaked sputum',
        rales: 'Inspiratory rales bilaterally',
        chest_xray: 'Multiple peripheral ill-defined nodules, some with cavitation',
      },
      cardiovascular: {
        heart_rate: '109 bpm',
        blood_pressure: '128/76 mm Hg',
        murmur: 'Harsh holosystolic murmur at left lower sternal border, louder with inspiration (tricuspid regurgitation)',
        jugular_veins: 'Prominent V waves',
        tachycardia: true,
      },
      constitutional: {
        fever: '102.5 °F',
        chills: 'Shaking chills',
      },
      others: {
        track_marks: 'Linear streaks of induration, hyperpigmentation, and small nodules overlying superficial veins on both forearms',
      },
      negatives: {
        dyspnea: false,
        headache: false,
        abdominal_pain: false,
        urinary_symptoms: false,
        vomiting: false,
        diarrhea: false,
        oral_lesions: false,
        fundoscopic_abnormalities: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant past medical history'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented'],
    },
    social_history: {
      smoking: 'Cigarettes and marijuana regularly',
      alcohol: 'Several beers daily',
      occupation: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may attribute symptoms to a "bad infection" or pneumonia; may be reluctant to disclose IV drug use due to social stigma',
      concerns: 'Worried about persistent fever and blood in sputum — concerned about serious infection',
      expectations: 'Expects antibiotics and treatment for his symptoms',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what features support it?',
      answer: 'Infective endocarditis involving the tricuspid valve with probable septic pulmonary emboli. Supporting features: fever with chills, new holosystolic murmur at LLSB that increases with inspiration (Carvallo sign — indicating tricuspid regurgitation), prominent jugular V waves, track marks suggesting IV drug use (despite denial), multiple cavitating nodular lesions on CXR (septic pulmonary emboli), and hemoptysis.',
    },
    {
      question: 'What are the Duke criteria for diagnosing infective endocarditis?',
      answer: 'Major criteria: (1) Isolation of typical organisms (viridans streptococci, S. aureus, enterococci, S. bovis, HACEK) from two separate blood cultures or persistently positive blood cultures with other organisms. (2) Evidence of endocardial involvement — echocardiographic evidence (oscillating intracardiac mass) or new valvular regurgitation. Minor criteria: predisposing valvular lesion or IV drug use, fever >100.4°F, vascular phenomena (arterial/pulmonary emboli, mycotic aneurysm, Janeway lesions), immunologic phenomena (glomerulonephritis, Osler nodes, Roth spots, positive RF), positive blood cultures not meeting major criteria. Definite endocarditis: 2 major, 1 major + 3 minor, or 5 minor criteria.',
    },
    {
      question: 'How does right-sided endocarditis differ from left-sided endocarditis in presentation?',
      answer: 'Right-sided (tricuspid) endocarditis: causes septic pulmonary emboli rather than systemic emboli. Patients present with pleuritic chest pain, purulent sputum, hemoptysis, and CXR shows multiple peripheral nodular lesions often with cavitation. The tricuspid regurgitation murmur may be absent early in illness. Left-sided (mitral/aortic) endocarditis: presents with systemic emboli (stroke, splenic infarction, renal infarction, peripheral emboli), classic peripheral lesions (Osler nodes, Janeway lesions, Roth spots, splinter hemorrhages), and signs of valvular regurgitation. Left-sided is more commonly caused by S. viridans, while right-sided is predominantly S. aureus.',
    },
    {
      question: 'What is the most important diagnostic step and why?',
      answer: 'Serial blood cultures are the most important step — three blood cultures over a 2-3 hour period before initiating antibiotics in acutely ill patients. If subacute presentation, three cultures over 24 hours maximize yield. Sustained bacteremia is the hallmark of infective endocarditis. Additionally, transthoracic echocardiography (TTE) should be performed, but transesophageal echocardiography (TEE) is preferred for detecting vegetations due to better image quality. If critically ill, antibiotics should not be delayed.',
    },
    {
      question: 'What is the empiric antibiotic treatment for this patient, and what are the indications for surgery?',
      answer: 'Empiric antibiotics should be directed against S. aureus — nafcillin (or vancomycin if MRSA suspected) often with gentamicin initially for synergy. For IV drug users, coverage should prioritize S. aureus. Treatment lasts 4-6 weeks. Surgical indications (valve excision and replacement): intractable CHF from valve dysfunction, >1 serious systemic embolic episode or large vegetation (>10 mm) with high embolic risk, uncontrolled infection (positive cultures after 7 days of therapy), fungal endocarditis, prosthetic valve endocarditis (especially S. aureus), and local suppurative complications (myocardial abscess).',
    },
    {
      question: 'What are the classic peripheral stigmata of endocarditis (FROM JANE)?',
      answer: 'Fever, Roth spots (hemorrhagic retinal lesions with white centers — immune complex vasculitis), Osler nodes (painful palpable erythematous lesions on finger/toe pads — vasculitic immune complexes), Murmur (new or changing), Janeway lesions (painless hemorrhagic macules on palms/soles — septic emboli/microabscesses), Anemia, Nail bed hemorrhages (splinter hemorrhages — nonspecific), Emboli (systemic or pulmonary). These are seen in only 20-25% of cases.',
    },
    {
      question: 'Why is colonoscopy indicated in patients with Streptococcus bovis endocarditis?',
      answer: 'A significant number of patients with S. bovis endocarditis have an underlying colonic adenoma or malignancy. The GI mucosal lesion allows seeding of the valve by GI flora. Therefore, colonoscopy is essential to identify and treat the source. This is a case correlation requiring awareness of the association between S. bovis endocarditis and colorectal cancer.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          adequate: '2-3 marks',
          outstanding: '4 marks',
          elements: [
            'Polite introduction with nonjudgmental approach to sensitive topics (IV drug use)',
            'Avoids medical jargon — explains endocarditis in accessible terms',
            'Shows empathy for the patient\'s febrile illness and discomfort',
            'Uses a nonjudgmental, supportive approach when discussing substance use history',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Onset: 'Gradual — fever 6 days ago, cough started 2 days ago',
            Character: 'Shaking chills, productive cough with greenish sputum, pleuritic chest pain',
            Associated_symptoms: 'Hemoptysis, dyspnea, night sweats, weight loss, anorexia, arthralgias',
            Time_course: 'Progressive over 6 days',
            Exacerbating: 'Deep inspiration (pleuritic)',
            Severity: 'Febrile with significant symptoms',
          },
          specific_history: [
            'IV drug use history — approach nonjudgmentally, ask about frequency, route, substances used',
            'Dental history — recent dental procedures, poor dentition',
            'Recent procedures — catheterization, surgery, dialysis',
            'Prior cardiac history — known valve disease, prior endocarditis, prosthetic valves',
            'Constitutional symptoms — night sweats, weight loss, anorexia',
            'Embolic symptoms — neurological changes, extremity pain, abdominal pain',
          ],
          rule_out_differentials: [
            'Pneumonia — typical consolidation on CXR, responds to antibiotics',
            'Pulmonary tuberculosis — upper lobe infiltrates, cavitation, AFB smear',
            'Lung abscess — solitary cavity with air-fluid level',
            'Septic thrombophlebitis — source of emboli without endocarditis',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies tricuspid valve endocarditis with septic pulmonary emboli',
            'Explains need for serial blood cultures before antibiotics (unless critically ill)',
            'Discusses echocardiography — TTE vs TEE for detecting vegetations',
            'Explains prolonged antibiotic course (4-6 weeks) and monitoring for complications',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think this is just a severe chest infection; may be hesitant to discuss IV drug use',
            concerns: 'Worried about severity of illness, blood in sputum, and potential long-term consequences; fear of judgment regarding substance use',
            expectations: 'Expects treatment for the infection and may need support for substance use disorder',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case012Endocarditis;
