import { CaseData } from '@/types';

const case005AorticDissection: CaseData = {
  _id: 'case-005-aortic-dissection',
  case_id: 'Case 005 - Severe Retrosternal Chest Pain',
  case_name: 'Retrosternal Chest Pain',
  type: 'regular',
  is_general_case: false,
  patient: {
    age: 42,
    gender: 'M',
    occupation: 'Basketball coach at a local high school',
    chief_complaint: 'Sudden onset of severe retrosternal chest pain',
    presentation: {
      setting: 'Patient was mowing the lawn at home when he experienced sudden severe chest pain. Paramedics administered three doses of sublingual nitroglycerin en route without relief.',
      duration: '1 hour',
      hpi: {
        onset: 'Sudden onset while mowing the lawn 1 hour ago',
        site: 'Retrosternal (central chest)',
        character: 'Initially described as a tearing sensation, now sharp and constant',
        radiation: 'Referred to the back',
        severity: 'Severe — unrelieved by nitroglycerin',
        time_course: 'Constant since onset',
        exacerbating_factors: [],
        relieving_factors: ['Not relieved by nitroglycerin', 'Unrelated to movement'],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '118 bpm, tachycardic and regular',
        blood_pressure_right_arm: '156/64 mm Hg',
        blood_pressure_left_arm: '188/74 mm Hg',
        murmur: 'Soft early diastolic murmur at right sternal border',
        bounding_pulses: true,
        diaphoresis: true,
      },
      respiratory: {
        chest_clear: true,
      },
      others: {
        pectus_excavatum: true,
        tall_stature: true,
        long_extremities: true,
      },
      negatives: {
        fever: false,
        neurologic_deficits: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypertension'],
      negatives: ['No known cardiac disease', 'No prior chest pain', 'No known diabetes', 'No known hyperlipidemia'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Enalapril for hypertension'],
    },
    social_history: {
      smoking: 'Does not smoke',
      alcohol: 'Does not drink alcohol',
      family: 'No cardiac disease in family',
      occupation: 'Basketball coach — usually very physically active',
    },
    family_history: 'No cardiac disease in family',
    ice: {
      ideas: 'Patient likely fears he is having a heart attack given the severity of chest pain and the fact that paramedics administered nitroglycerin.',
      concerns: 'Fear of dying, concern about the escalating pain that is unrelieved by medication, worry about his ability to return to an active lifestyle.',
      expectations: 'Expects immediate pain relief and a definitive diagnosis; wants to understand what is happening to him.',
    },
  },
  questions: [
    {
      question: 'What clinical features distinguish aortic dissection from acute myocardial infarction?',
      answer: 'Aortic dissection pain is typically maximal at onset (vs building over minutes in MI), described as tearing or ripping (vs pressure/squeezing), often radiates to the back, and is not relieved by nitrates. Physical findings may include unequal blood pressures in arms, aortic insufficiency murmur, bounding pulses, and signs of connective tissue disease (tall stature, pectus excavatum). Chest x-ray shows widened mediastinum. Importantly, anticoagulation or thrombolytics for MI would be devastating in dissection.',
    },
    {
      question: 'What is the Stanford classification of aortic dissections and how does it guide management?',
      answer: 'Stanford type A involves the ascending aorta (may extend anywhere). Type B does not involve the ascending aorta. Type A dissections require urgent surgical repair with replacement of the involved aorta and sometimes the aortic valve — without surgery, mortality is 90%. Type B dissections are initially managed medically with beta-blockers and blood pressure control, reserving surgery for complications such as rupture or branch artery ischemia.',
    },
    {
      question: 'What immediate medical therapy should be administered for suspected aortic dissection?',
      answer: 'Intravenous beta-blockers (metoprolol, esmolol, or labetalol) are first-line to reduce heart rate to ~60 bpm and systolic BP to <120 mm Hg, thereby reducing arterial shear stress (dP/dT). If hypertension is refractory, sodium nitroprusside may be added, but it is not used initially due to risk of cyanide toxicity, especially with renal insufficiency.',
    },
    {
      question: 'What imaging modalities can confirm the diagnosis of aortic dissection?',
      answer: 'Transesophageal echocardiography (TEE), CT angiography, and magnetic resonance angiography (MRA). The best initial study is the one that can be obtained and interpreted most quickly. TEE is preferred for hemodynamically unstable patients or those with renal insufficiency. CT angiography is widely used for stable patients.',
    },
    {
      question: 'What genetic syndromes predispose to aortic dissection?',
      answer: 'Marfan syndrome (FBN1/TGFβR2 mutation — fibrillin-1 defect) presents with tall stature, long extremities, joint hypermobility, pectus deformity, and scoliosis. Other syndromes include Ehlers-Danlos (COL3A1), Loeys-Dietz (TGFβR1/R2), bicuspid aortic valve, and Turner syndrome. Cystic medial degeneration of the elastic layer predisposes to dissection.',
    },
    {
      question: 'What are the complications of a descending (type B) aortic dissection managed medically?',
      answer: 'Potential complications include: rupture into the pleural space causing hemothorax/exsanguination, branch artery occlusion causing organ ischemia (bowel, kidney, spinal cord), propagation of the dissection, and aneurysm formation. Surgery is indicated for rupture, rapid expansion, refractory hypertension, or end-organ ischemia.',
    },
    {
      question: 'What is the screening recommendation for abdominal aortic aneurysm (AAA)?',
      answer: 'Men between ages 65 and 75 with a smoking history should undergo one-time ultrasound screening for AAA. AAA is defined as aortic dilation >3 cm. The risk of rupture increases with size: annual rupture risk is 1-2% for aneurysms <5.5 cm but 10-20% for 6-cm aneurysms. Elective repair is indicated at ≥5.5 cm or expansion >1 cm/year.',
    },
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and calm demeanor in emergency setting',
            'Avoids medical jargon — explains condition in understandable terms',
            'Shows empathy for patient\'s severe pain and fear',
            'Acknowledges the seriousness of the situation while providing reassurance about immediate management',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Retrosternal chest — ask about radiation to neck, jaw, back, or extremities',
            Onset: 'Sudden, maximal at onset — key differentiating feature from MI',
            Character: 'Tearing or ripping sensation — classic for dissection',
            Radiation: 'Radiation to back is highly suggestive of aortic dissection (vs anterior chest in MI)',
            Associated_symptoms: 'Syncope, stroke symptoms, leg pain/weakness (branch occlusion), hoarseness, Horner syndrome',
            Time_course: 'Progressive, constant since onset 1 hour ago',
            Exacerbating_relieving: 'Not relieved by nitroglycerin — key distinction from anginal pain',
            Severity: 'Severe — 10/10, ask patient to rate',
          },
          risk_factors_and_differentials: [
            'Marfan syndrome features — tall stature, pectus, joint hypermobility, scoliosis',
            'Hypertension history and control',
            'Family history of aortic disease or sudden cardiac death',
            'Cocaine or amphetamine use',
            'Prior cardiac surgery or catheterization',
            'Recent fluoroquinolone use',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies aortic dissection as the probable diagnosis based on presentation',
            'Explains need for urgent imaging (CT angiography or TEE) to confirm diagnosis',
            'Discusses immediate medical management with IV beta-blockers',
            'Explains the difference between type A (surgical) and type B (medical) dissections',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient likely believes he is having a heart attack given chest pain and nitroglycerin administration',
            concerns: 'Fear of death, concern about the unrelieved pain, worry about long-term health and ability to return to active coaching job',
            expectations: 'Expects immediate pain relief and definitive treatment; needs clear explanation of why this is different from a heart attack',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case005AorticDissection;
