import { CaseData } from '@/types';

const case046HIVPJP: CaseData = {
  _id: 'case-046-hiv-pjp',
  case_id: 'Case 046 - Fever and Shortness of Breath in an HIV Patient',
  case_name: 'Fever and Shortness of Breath in an HIV Patient',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 27,
    gender: 'M',
    occupation: 'Not specified — lost job and health insurance',
    chief_complaint: 'Fever, nonproductive cough, and shortness of breath for 3-4 weeks',
    presentation: {
      setting: 'Patient presents to the emergency department with fever, cough, and progressive dyspnea. He has a known history of HIV but discontinued HAART 10 months ago due to inability to afford medications after losing his job.',
      duration: '3-4 weeks of progressive symptoms',
      hpi: {
        onset: 'Gradual onset 3-4 weeks ago with subjective fevers, nonproductive cough, and exertional dyspnea',
        site: 'Respiratory system (lungs)',
        character: 'Nonproductive cough, progressive shortness of breath with minimal exertion, fatigue',
        radiation: 'N/A',
        severity: 'Severe — O2 sat 89% on room air, drops to 80% with minimal exertion, respiratory rate 28',
        time_course: 'Progressive worsening over 3-4 weeks; 5-lb unintentional weight loss over 2 months',
        exacerbating_factors: ['Exertion (walking upstairs) causes severe desaturation and labored breathing'],
        relieving_factors: ['Sitting upright in bed'],
      },
    },
    symptoms: {
      respiratory: {
        cough: true,
        nonproductive_cough: true,
        dyspnea: true,
        dyspnea_on_exertion: true,
        respiratory_rate: '28 breaths/min',
        oxygen_saturation: '89% on room air, drops to 80% with minimal exertion',
        lung_fields: 'Clear to auscultation',
        tachypnea: true,
        labored_breathing: true,
      },
      cardiovascular: {
        heart_rate: '110 bpm',
        blood_pressure: '134/82 mm Hg',
        tachycardia: true,
      },
      constitutional: {
        fever: true,
        temperature: '102.5 F (39.2 C)',
        fatigue: true,
        weight_loss: true,
        weight_loss_amount: '5 lb over 2 months',
        cachectic_appearance: true,
      },
      others: {
        oral_thrush: true,
        white_painless_plaques: true,
        plaques_scrapable: true,
        dysphagia: false,
      },
      negatives: {
        sputum_production: false,
        chest_pain: false,
        headache: false,
      },
    },
    medical_history: {
      chronic_conditions: ['HIV/AIDS — diagnosed 3 years ago with oral thrush, CD4 count unknown', 'Oral candidiasis (thrush) at initial HIV diagnosis'],
      negatives: ['No other significant medical history'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Previously on HAART (discontinued 10 months ago due to cost)'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
      occupation: 'Lost job and health insurance 10 months ago leading to treatment discontinuation',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may not connect his current respiratory symptoms to his underlying HIV and lack of prophylaxis',
      concerns: 'Fear of serious lung infection, worry about his HIV progressing, anxiety about financial barriers to treatment',
      expectations: 'Expects treatment for his breathing difficulty and cough, needs help accessing medications he cannot afford',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and why?',
      answer: 'Pneumocystis jirovecii pneumonia (PJP, formerly PCP). The patient has classic features: subacute onset over weeks (not days), fever, nonproductive cough, exertional dyspnea, severe hypoxia out of proportion to physical findings (clear lung fields), elevated LDH, bilateral interstitial opacities on CXR, oral thrush suggesting CD4 <200 cells/mm3, and no PJP prophylaxis.',
    },
    {
      question: 'What diagnostic test would confirm the diagnosis?',
      answer: 'Definitive diagnosis is made by identifying Pneumocystis organisms from respiratory specimens using silver stain, direct fluorescence antibody (DFA), or polymerase chain reaction (PCR) of sputum or bronchoalveolar lavage (BAL) fluid. Sputum induction with aerosolized hypertonic saline increases sensitivity. If sputum is negative, bronchoscopy with BAL is often needed.',
    },
    {
      question: 'What preventive measure could have significantly reduced the likelihood of developing this disease?',
      answer: 'Prophylactic administration of trimethoprim-sulfamethoxazole (TMP-SMX) once the CD4 count dropped below 200 cells/mm3. TMP-SMX is highly effective for PJP prophylaxis and also prevents toxoplasmosis when CD4 <100. Current guidelines no longer recommend prophylaxis if the patient is on HAART with undetectable viral load, but this patient was not on any treatment.',
    },
    {
      question: 'What is the relationship between CD4 count and specific opportunistic infections?',
      answer: 'CD4 >500: relatively preserved immunity. CD4 <500: increased susceptibility to recurrent pneumonia, TB, vaginal candidiasis, herpes zoster. CD4 <200 (AIDS diagnosis): PJP, toxoplasmosis, cryptococcosis, histoplasmosis. CD4 <50: disseminated MAC, CMV retinitis/colitis/esophagitis, primary CNS lymphoma, progressive multifocal leukoencephalopathy.',
    },
    {
      question: 'What is the treatment for PJP pneumonia?',
      answer: 'First-line treatment is TMP-SMX (trimethoprim-sulfamethoxazole). Alternatives for sulfa allergies include: pentamidine (inhaled or IV), clindamycin plus primaquine, dapsone, or atovaquone. If the patient is hypoxic (PaO2 <70 mm Hg or A-a gradient >35 mm Hg), adjunctive corticosteroids should be given concurrently with antibiotics to reduce pulmonary inflammation.',
    },
    {
      question: 'When should HAART be initiated in this patient?',
      answer: 'HAART should be started within 2 weeks of presentation, ideally after PJP treatment has begun. Guidelines indicate HAART should be restarted in all AIDS patients within 2 weeks except in cases of cryptococcal meningitis (which requires delay). Standard HAART consists of three drugs: two NRTIs plus either an integrase inhibitor, an NNRTI, or a protease inhibitor.',
    },
    {
      question: 'What is immune reconstitution inflammatory syndrome (IRIS)?',
      answer: 'IRIS is a worsening of clinical symptoms occurring within 1-2 months of starting HAART, despite rising CD4 counts. It results from the newly restored immune system mounting an inflammatory response against subclinical opportunistic infections. Symptoms may mimic the original infection. IRIS is managed by continuing HAART and treating the underlying infection; corticosteroids may be used in severe cases.',
    },
    {
      question: 'What are the common causes of respiratory symptoms in AIDS patients at different CD4 levels?',
      answer: 'Any CD4: community-acquired pneumonia (S. pneumoniae is most common). CD4 <200: PJP (most common OI), TB (atypical CXR in advanced AIDS), cryptococcal pneumonia, histoplasmosis. CD4 <100: disseminated MAC, CMV pneumonitis. The subacute course, severe hypoxia, bilateral interstitial opacities, and elevated LDH in this patient make PJP the most likely diagnosis.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Communicates sensitively about HIV status and treatment adherence without judgment',
            'Avoids medical jargon — explains PJP, CD4, and HAART in understandable terms',
            'Shows empathy for the socioeconomic barriers to treatment (job loss, insurance loss)',
            'Addresses the patients fears about HIV progression and serious infection',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Respiratory — bilateral interstitial lung fields',
            Onset: 'Gradual onset 3-4 weeks ago, progressive worsening',
            Character: 'Nonproductive cough, exertional dyspnea, subjective fevers, fatigue',
            Radiation: 'N/A',
            Associated_symptoms: 'Fever, weight loss (5 lb in 2 months), fatigue, oral thrush, hypoxia with exertion',
            Time_course: 'Progressive over 3-4 weeks, now severe (O2 sat 89% RA, 80% on exertion)',
            Exacerbating_relieving: 'Worse on minimal exertion, better sitting upright',
            Severity: 'Severe — significant hypoxia, tachypnea, respiratory distress on minimal exertion',
          },
          hiv_history: [
            'Date of HIV diagnosis and initial CD4 count',
            'Prior OIs or AIDS-defining illnesses',
            'HAART history — what regimen, adherence, duration',
            'Reason for treatment discontinuation',
            'Most recent CD4 count and viral load',
            'History of PJP prophylaxis',
          ],
          infection_workup: [
            'CD4 count and HIV viral load',
            'ABG to quantify hypoxemia and A-a gradient',
            'LDH level (elevated in PJP, although nonspecific)',
            'Sputum induction for microbiology (silver stain, DFA, PCR)',
            'Blood cultures',
            'Consider bronchoscopy with BAL if noninvasive tests negative',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies PJP pneumonia as the most likely diagnosis',
            'Explains need for sputum/BAL for confirmatory diagnosis',
            'Discusses treatment with TMP-SMX and adjunctive corticosteroids if hypoxic',
            'Covers restarting HAART within 2 weeks, need for PJP prophylaxis, and importance of treatment adherence',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may not understand that stopping HAART and not taking prophylaxis directly led to this serious infection',
            concerns: 'Fear of this serious breathing problem, concern about HIV advancing to AIDS, worry about financial barriers to future treatment',
            expectations: 'Expects effective treatment for current infection, needs help navigating medication access and insurance coverage',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case046HIVPJP;
