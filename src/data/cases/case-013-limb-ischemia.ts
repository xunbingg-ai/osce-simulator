import { CaseData } from '@/types';

const case013LimbIschemia: CaseData = {
  _id: 'case-013-limb-ischemia',
  case_id: 'Case 013 - Severe Leg Pain & Numbness',
  case_name: 'Severe Leg Pain & Numbness',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 58,
    gender: 'M',
    occupation: 'not specified — presents to emergency center',
    chief_complaint: 'Severe pain in left calf and foot',
    presentation: {
      setting: 'Patient presents to the emergency center complaining of severe pain in his left calf and foot that woke him from sleep. He has a history of chronic stable angina, hypercholesterolemia, and hypertension.',
      duration: 'Sudden onset — acute worsening of chronic symptoms',
      hpi: {
        onset: 'Sudden onset — woke from sleep with severe pain',
        site: 'Left calf and foot',
        character: 'Severe pain, numbness, inability to move toes',
        radiation: 'No radiation described — localized to left distal leg and foot',
        severity: 'Severe — foot is numb, cannot move toes',
        time_course: 'Acute worsening; patient had chronic progressive claudication for years with recent rest pain at night',
        exacerbating_factors: ['Walking (claudication) — can walk only 100 ft before stopping'],
        relieving_factors: ['Previously relieved by sitting up and hanging feet off bed (rest pain), but not this time'],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '72 bpm',
        blood_pressure: '125/74 mm Hg',
        right_carotid_bruit: true,
        bilateral_femoral_bruits: true,
        S4_gallop: true,
        apical_impulse: 'Nondisplaced',
        murmurs: 'None',
      },
      others: {
        left_distal_leg: 'Pale and cold to touch',
        capillary_refill: 'Very slow',
        left_pedal_pulses: 'Absent',
        right_pedal_pulses: 'Diminished but present',
        femoral_popliteal_pulses: 'Palpable bilaterally',
      },
      negatives: {
        fever: false,
        abdominal_tenderness: false,
        abdominal_masses: false,
        chest_pain_at_presentation: false,
        dyspnea: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Chronic stable angina', 'Hypercholesterolemia', 'Hypertension'],
      negatives: ['No prior MI documented', 'No known diabetes mellitus'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Aspirin', 'Atenolol', 'Simvastatin'],
    },
    social_history: {
      smoking: 'Not quantified but significant — smoking is the single most important risk factor for PAD',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may recognize that his leg pain has progressed beyond his usual claudication and is now far more severe',
      concerns: 'Fear of losing his leg — worried about permanent damage and possible amputation',
      expectations: 'Expects urgent treatment to relieve the severe pain and restore blood flow to his foot',
    },
  },
  questions: [
    {
      question: 'What is the most likely diagnosis and what features support it?',
      answer: 'Acute limb ischemia due to acute arterial occlusion (either thrombotic occlusion or embolism from a proximal source). Supporting features: sudden onset of the "6 Ps" — Pain (severe), Pallor (pale foot), Pulselessness (absent left pedal pulses), Paresthesia (numbness), Poikilothermia (cold to touch), and Paralysis (cannot move toes). The patient also has evidence of diffuse atherosclerotic disease (angina, carotid bruit, femoral bruits, chronic claudication).',
    },
    {
      question: 'What is the significance of rest pain in peripheral vascular disease?',
      answer: 'Rest pain is a warning sign of critical limb ischemia, indicating severely compromised blood flow. It typically occurs at night and is relieved by sitting up and dangling the legs (using gravity to assist blood flow). The ankle-brachial index (ABI) in critical leg ischemia is usually ≤0.40. Rest pain signals that the limb is at risk and revascularization should be considered.',
    },
    {
      question: 'What are the "6 Ps" of acute arterial occlusion?',
      answer: 'Pain (sudden, severe), Pallor (pale skin), Pulselessness (absent pulses distal to occlusion), Paresthesia (numbness/tingling), Poikilothermia (coolness of the extremity), and Paralysis (inability to move — a late sign indicating severe and persistent ischemia). The first five signs occur relatively quickly; paralysis indicates irreversible damage if not promptly treated.',
    },
    {
      question: 'What is the management of acute arterial occlusion?',
      answer: 'This is a medical emergency requiring rapid restoration of arterial supply. Initial management: anticoagulation with heparin to prevent thrombus propagation, place the affected limb below the horizontal plane without pressure. Urgent conventional arteriography to identify the occlusion location and plan revascularization. Options: surgical thromboembolectomy (especially for large proximal artery occlusion), arterial bypass grafting, or catheter-directed intra-arterial thrombolytic therapy (localized infusion has fewer bleeding complications than systemic therapy).',
    },
    {
      question: 'What are the major risk factors for peripheral arterial disease, and what is the single most important intervention?',
      answer: 'Major risk factors: cigarette smoking (strongest risk factor) and diabetes mellitus. Hypertension, dyslipidemia, and elevated homocysteine also contribute. The single most important intervention: smoking cessation. It reduces the risk of fatal or nonfatal MI by up to 50% — more than any other medical or surgical intervention. Other key treatments: antiplatelet therapy (aspirin/clopidogrel), statins, BP control, diabetes management, and supervised exercise programs to promote collateral circulation.',
    },
    {
      question: 'What is the ankle-brachial index (ABI) and how is it interpreted?',
      answer: 'ABI is the ratio of ankle to brachial systolic blood pressure, measured by Doppler ultrasound. Normal: 0.9-1.4. Claudication: 0.41-0.90. Critical limb ischemia: ≤0.40. Values >1.4 suggest noncompressible calcified vessels (common in diabetes). ABI is the most commonly used test to evaluate for PAD and helps determine severity.',
    },
    {
      question: 'What are less common causes of peripheral arterial insufficiency?',
      answer: '(1) Thromboangiitis obliterans (Buerger disease) — inflammatory condition of small/medium arteries in young male smokers, affects upper or lower extremities. (2) Fibromuscular dysplasia — hyperplastic disorder in women, usually affects renal/carotid arteries. (3) Takayasu arteritis — large-vessel vasculitis in younger women, affects aortic branches (especially subclavian), causes arm claudication and Raynaud phenomenon with constitutional symptoms. (4) Cholesterol embolism — may complicate intra-arterial procedures, causing livedo reticularis, digital ischemia, and renal involvement.',
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
            'Calm, reassuring approach for patient in severe pain and distress',
            'Avoids medical jargon — explains ischemia and claudication in accessible terms',
            'Shows empathy for the severity of the pain and fear of potential limb loss',
            'Addresses patient concerns about ambulation and quality of life',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Left calf and foot',
            Onset: 'Sudden — woke from sleep',
            Character: 'Severe pain, then numbness and inability to move toes',
            Radiation: 'Proximal extent of symptoms — thigh, buttock?',
            Associated_symptoms: 'Previous claudication distance, rest pain, paresthesias, skin changes, ulcers, gangrene',
            Time_course: 'Years of progressive claudication, recent rest pain, now acute severe pain',
            Exacerbating_relieving: 'Precipitants for acute worsening? New medications, hydration status, recent procedures?',
            Severity: 'Severe — foot numb, cannot move toes (critical ischemia)',
          },
          specific_history: [
            'Smoking history — quantify pack-years',
            'Diabetes — known diagnosis, glucose control',
            'Cardiac history — angina, MI, heart failure, arrhythmias (especially atrial fibrillation — source of emboli)',
            'Prior vascular procedures or surgeries',
            'History of DVT or PE',
            'Medications — antiplatelets, statins, antihypertensives',
            'Functional status — walking distance, activities of daily living',
          ],
          rule_out_differentials: [
            'Deep vein thrombosis — swelling, warmth, not pulseless/pale',
            'Acute neuropathy — no pulse deficit or color change',
            'Gout/pseudogout — inflammatory signs, joint involvement',
            'Cellulitis — erythema, warmth, fever',
            'Phlegmasia cerulea dolens — massive DVT with venous gangrene',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies acute limb ischemia as most likely diagnosis',
            'Explains need for urgent angiography and revascularization',
            'Discusses medical management — heparin, pain control, limb positioning',
            'Addresses long-term risk factor modification — especially smoking cessation, antiplatelet therapy, and statin use',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely understands this is different from his usual claudication and represents a serious worsening',
            concerns: 'Fear of losing the leg/amputation, worried about long-term disability, concerned about underlying heart disease',
            expectations: 'Expects urgent intervention to save the leg and effective pain management',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case013LimbIschemia;
