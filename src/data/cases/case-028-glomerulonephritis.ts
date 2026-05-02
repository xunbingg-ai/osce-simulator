import { CaseData } from '@/types';

const case028Glomerulonephritis: CaseData = {
  _id: 'case-028-glomerulonephritis',
  case_id: 'Case 028 - Facial Swelling and Dark Urine',
  case_name: 'Facial Swelling and Dark Urine',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 27,
    gender: 'M',
    occupation: 'Not specified',
    chief_complaint: 'Facial and hand swelling for 2 days, reddish-brown urine, decreased urine output',
    presentation: {
      setting: 'Patient presents to the outpatient clinic complaining of facial and hand swelling for 2 days.',
      duration: '2 days',
      hpi: {
        onset: 'Sudden onset 2 days ago',
        site: 'Face, hands, feet',
        character: 'Facial and hand swelling, reddish-brown urine, decreased urine output',
        radiation: 'No radiation',
        severity: 'Moderate to severe — hypertension 164/98 mm Hg',
        time_course: 'Acute over 2 days',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        hypertension: true,
        blood_pressure: '164/98 mm Hg',
        heart_rate: '85 bpm',
      },
      others: {
        decreased_urine_output: true,
        reddish_brown_urine: true,
        hematuria: '3+ on dipstick',
        proteinuria: '2+ on dipstick',
        specific_gravity: '1.025',
        periorbital_edema: true,
        hand_edema: true,
        foot_edema: true,
        facial_edema: true,
      },
      negatives: {
        fever: false,
        fundoscopic_abnormalities: false,
        chest_abnormalities: false,
        abdominal_masses: false,
        abdominal_bruits: false,
        cardiac_displacement: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No history of renal disease', 'No chronic hypertension', 'No nephrotoxin exposure'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Ibuprofen taken 2 weeks ago for fever and sore throat — resolved'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may be concerned about kidney disease or a serious systemic condition',
      concerns: 'Worried about permanent kidney damage and need for long-term treatment',
      expectations: 'Expects diagnosis and treatment to reverse the swelling and resolve symptoms',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what is the next diagnostic step?',
      answer: 'Acute glomerulonephritis (GN). The next step is to examine a freshly spun urine specimen for RBC casts or dysmorphic RBCs, which would confirm glomerular origin of hematuria. The presentation of acute renal failure, hypertension, edema, and hematuria following an upper respiratory infection is highly suggestive of glomerular injury.',
    },
    {
      question: 'How do you differentiate glomerular from nonglomerular hematuria?',
      answer: 'Glomerular hematuria: presence of dysmorphic/fragmented RBCs or RBC casts on microscopy of spun urine, typically accompanied by proteinuria, hypertension, and edema. Nonglomerular hematuria: isomorphic RBCs, no casts, no significant proteinuria. Causes include stones, infection, trauma, or malignancy.',
    },
    {
      question: 'What is the difference between nephritic and nephrotic syndrome?',
      answer: 'Nephritic syndrome: hematuria (with RBC casts), edema, hypertension, mild proteinuria (<1-2 g/d), active urinary sediment, acute renal failure. Nephrotic syndrome: heavy proteinuria (>3.5 g/d), hypoalbuminemia, edema, hyperlipidemia, bland urinary sediment (no RBC casts).',
    },
    {
      question: 'How do you distinguish between poststreptococcal GN and IgA nephropathy?',
      answer: 'Poststreptococcal GN (PSGN): GN develops several weeks after infection, low C3 complement, elevated ASO titers, immune complex-mediated (granular IF staining). IgA nephropathy: GN may present simultaneously with pharyngitis, normal complement levels, negative ASO, mesangial IgA deposition on biopsy.',
    },
    {
      question: 'What serologic markers are used to evaluate the cause of glomerulonephritis?',
      answer: 'Complement levels (C3, C4) — low in SLE, MPGN, postinfectious GN, cryoglobulinemia. ANCA (MPO-ANCA, PR3-ANCA) — positive in vasculitides. ANA — positive in SLE. Anti-GBM antibodies — positive in Goodpasture disease. ASO titers — elevated in PSGN. Blood cultures — positive in endocarditis. Cryoglobulins and hepatitis serologies.',
    },
    {
      question: 'A dehydrated patient with rhabdomyolysis has reddish-dark urine, dipstick 3+ blood, but no RBCs on microscopy. What is the explanation?',
      answer: 'Myoglobinuria. Myoglobin released from damaged muscle cells turns urine dark and causes a positive dipstick reaction for blood, but no intact RBCs are seen microscopically. This differentiates pigmenturia from true hematuria.',
    },
    {
      question: 'What is Goodpasture disease and how does it present?',
      answer: 'Anti-GBM antibody disease, typically affecting young males. Antibodies against type IV collagen in pulmonary alveolar and glomerular basement membranes cause both hemoptysis and hematuria. Diagnosis by positive anti-GBM antibodies and renal biopsy showing linear IgG staining.',
    },
    {
      question: 'What is the treatment approach for acute GN?',
      answer: 'Depends on cause: PSGN — supportive care with BP control and edema management, excellent prognosis. IgA nephropathy — BP control with ACEi/ARB, possibly corticosteroids. Vasculitis-related GN — steroids and cyclophosphamide. Anti-GBM — plasmapheresis plus immunosuppression. Treat underlying systemic disease (endocarditis, SLE, hepatitis).',
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
            'Shows empathy for patient discomfort and anxiety about kidney function',
            'Addresses concerns about potential chronic kidney disease',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Face, hands, feet (dependent edema)',
            Onset: 'Sudden onset 2 days ago',
            Character: 'Periorbital edema, reddish-brown urine, decreased urine output',
            Radiation: 'No radiation — generalized edema',
            Associated_symptoms: 'Hypertension, oliguria, gross hematuria, prior sore throat and fever 2 weeks ago',
            Time_course: 'Acute onset over 2 days',
            Exacerbating_relieving: 'No clear exacerbating or relieving factors',
            Severity: 'Moderate to severe — BP 164/98, significant edema',
          },
          specific_history: [
            'Recent infection — especially streptococcal pharyngitis or skin infection',
            'Timing of infection relative to symptom onset',
            'Medication use — NSAIDs, antibiotics',
            'Family history of renal disease',
            'Systemic symptoms — rash, arthralgias, fever',
            'History of hypertension or renal disease',
            'Gross versus microscopic hematuria',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Explains diagnosis of acute glomerulonephritis and the need for urine microscopy',
            'Discusses serologic workup to identify underlying cause',
            'Explains relationship between recent infection and kidney inflammation',
            'Discusses treatment based on specific etiology and importance of BP control',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may suspect kidney damage or a serious systemic disease',
            concerns: 'Fear of permanent kidney injury, dialysis, or chronic illness',
            expectations: 'Expects clear diagnosis and effective treatment to reverse symptoms',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case028Glomerulonephritis;
