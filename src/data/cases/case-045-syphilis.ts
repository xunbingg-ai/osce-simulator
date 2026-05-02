import { CaseData } from '@/types';

const case045Syphilis: CaseData = {
  _id: 'case-045-syphilis',
  case_id: 'Case 045 - Painless Genital Ulcer',
  case_name: 'Painless Genital Ulcer',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 23,
    gender: 'M',
    occupation: 'Not specified',
    chief_complaint: 'Worried about a lesion on his penis',
    presentation: {
      setting: 'Patient came to the clinic requesting a general checkup but was hesitant to reveal the true reason for visit — a lesion on his penis. He appears nervous.',
      duration: 'Not specified — noticed recently',
      hpi: {
        onset: 'Not specified — discovered the lesion recently',
        site: 'Shaft of the penis',
        character: 'Shallow, clean ulcer without exudates or erythema, nontender to palpation, cartilaginous consistency',
        radiation: 'N/A',
        severity: 'Mild — no pain, no dysuria, no systemic symptoms',
        time_course: 'Persistent — patient worried enough to seek medical attention',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      others: {
        penile_ulcer: true,
        nontender: true,
        clean_base: true,
        cartilaginous_consistency: true,
        no_exudates: true,
        no_erythema: true,
        inguinal_lymphadenopathy: true,
        lymph_nodes_nontender: true,
        bilateral_inguinal_nodes: true,
      },
      negatives: {
        pain: false,
        dysuria: false,
        urethral_discharge: false,
        fever: false,
        rash: false,
      },
    },
    medical_history: {
      chronic_conditions: ['None — generally healthy'],
      negatives: ['No prior STIs', 'No known medical problems'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient is clearly worried about the penile lesion but nervous and reluctant to discuss it openly',
      concerns: 'Fear of STI, embarrassment, concern about what it means for his health and sexual partners',
      expectations: 'Wants the lesion diagnosed and treated, wants reassurance about long-term health implications',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what is the characteristic feature of the ulcer?',
      answer: 'Primary syphilis (chancre). The chancre is characteristically a painless, clean-based ulcer with rolled borders, firm/cartilaginous consistency on palpation, and associated nontender regional lymphadenopathy. It appears at the site of inoculation 1 week to 3 months after exposure and heals spontaneously in 2-6 weeks even without treatment.',
    },
    {
      question: 'What is the differential diagnosis for genital ulcers?',
      answer: 'Syphilis (painless, clean-based, firm, nontender lymph nodes), herpes simplex virus (painful grouped vesicles on erythematous base that ulcerate), chancroid (painful, ragged, exudative ulcer with necrotic base that bleeds easily, suppurative lymph nodes), and superficially infected skin lesions. STIs often present together, so coinfection with gonorrhea, Chlamydia, and HIV should be evaluated.',
    },
    {
      question: 'What is the natural history of untreated syphilis?',
      answer: 'Primary stage: chancre appears 1 week to 3 months after inoculation, resolves in 2-6 weeks. Secondary stage: disseminated infection 2-8 weeks later with maculopapular rash involving palms and soles, condyloma lata, fever, myalgias, lymphadenopathy. Latent stage: asymptomatic period that can last years. Tertiary stage (25-40% of untreated): occurs 1-30 years later with CNS involvement (neurosyphilis), cardiovascular (aortitis, aneurysms), and gummas.',
    },
    {
      question: 'How is syphilis diagnosed?',
      answer: 'Nontreponemal tests (RPR, VDRL) are used for screening — they detect antibodies against lipid antigens and are reported as titers. Positive screening is confirmed with treponemal tests (FTA-ABS, MHA-TP) that detect specific antibodies against T. pallidum. Dark-field microscopy of ulcer scrapings can directly visualize spirochetes but is rarely performed. Early primary syphilis may have negative serology in ~30% of cases.',
    },
    {
      question: 'What is the treatment for syphilis based on stage?',
      answer: 'Primary, secondary, and early latent (<1 year) syphilis: single IM injection of benzathine penicillin G 2.4 million units. Late latent (>1 year) or unknown duration: three weekly IM injections of penicillin G 2.4 million units each. Neurosyphilis: IV penicillin G for 10-14 days. For penicillin-allergic patients (non-pregnant): doxycycline or tetracycline. Pregnant patients with penicillin allergy require desensitization.',
    },
    {
      question: 'How do you monitor response to syphilis treatment?',
      answer: 'Monitor nontreponemal titers (RPR/VDRL). A four-fold decline in titers within 3 months and a negative or near-negative titer after 1 year indicates adequate treatment. Failure of titers to decline four-fold within 6-12 months may indicate treatment failure, reinfection, or undiagnosed tertiary disease. Treponemal tests remain positive for life regardless of treatment.',
    },
    {
      question: 'What is the Jarisch-Herxheimer reaction?',
      answer: 'A reaction occurring shortly after starting syphilis treatment, characterized by fever, myalgia, rigors, rash, headache, and sometimes hypotension. It is believed to result from lysis of infected cells causing a massive inflammatory response. It is self-limited and does not require stopping treatment. Patients should be warned about this possibility before initiating therapy.',
    },
    {
      question: 'What are the indications for lumbar puncture to evaluate for neurosyphilis?',
      answer: 'LP should be performed in any patient with syphilis who develops neurologic or ocular symptoms (meningitis, cranial nerve palsies, dementia, tabes dorsalis). It should also be strongly considered in HIV-infected patients with syphilis who have CD4 <350 cells/mm3 or an RPR titer >1:32, as these conditions greatly increase the risk of CNS infection.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Creates a safe, nonjudgmental environment for discussing sensitive sexual health issues',
            'Avoids medical jargon — explains STI testing and treatment in understandable terms',
            'Demonstrates empathy for the patients anxiety and embarrassment about the lesion',
            'Normalizes the conversation about sexual health to reduce shame and encourage disclosure',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Shaft of penis',
            Onset: 'Not specified — patient noticed recently',
            Character: 'Shallow, clean, nontender ulcer with cartilaginous consistency, rolled borders, no exudates',
            Radiation: 'N/A',
            Associated_symptoms: 'Nontender bilateral inguinal lymphadenopathy; no dysuria, no discharge, no rash, no fever',
            Time_course: 'Persistent — no spontaneous healing noted',
            Exacerbating_relieving: 'Painless — no exacerbating or relieving factors',
            Severity: 'Mild — no pain; moderate psychosocial concern',
          },
          sexual_history: [
            'Number and gender of sexual partners',
            'Type of sexual activity (oral, vaginal, anal)',
            'Condom use',
            'Prior STI history',
            'HIV status and testing history',
            'Partner symptoms or known STI diagnoses',
          ],
          sti_screening: [
            'HIV testing (recommended for all patients with STIs)',
            'Chlamydia and gonorrhea testing (urethral swab or urine)',
            'RPR/VDRL for syphilis screening',
            'Consider hepatitis B and C serology',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies primary syphilis as the likely diagnosis',
            'Explains the need for serologic testing (RPR + confirmatory FTA-ABS) and screening for other STIs including HIV',
            'Discusses treatment with IM penicillin G appropriate for stage (single dose for primary syphilis)',
            'Covers partner notification, sexual abstinence until treatment completion, Jarisch-Herxheimer reaction, and follow-up serology monitoring',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may be worried about the lesion being cancer, a permanent condition, or something shameful',
            concerns: 'Fear of STI stigma, concern about long-term health consequences, worry about transmitting to partner',
            expectations: 'Expects effective treatment, reassurance about cure, clear guidance on partner notification and prevention of future infections',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case045Syphilis;
