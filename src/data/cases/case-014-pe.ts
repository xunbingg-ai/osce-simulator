import { CaseData } from '@/types';

const case014PE: CaseData = {
  _id: 'case-014-pe',
  case_id: 'Case 014 - Sudden Onset Dyspnea',
  case_name: 'Sudden Onset Dyspnea',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 37.1°C, P 112 bpm, R 28/min, BP 128/84 mmHg, SpO₂ 89% on room air',
  patient: {
    age: 48,
    gender: 'F',
    occupation: 'not specified — at home making dinner',
    chief_complaint: 'Sudden onset of dyspnea',
    presentation: {
      setting: 'Patient was standing in the kitchen making dinner when she suddenly felt as if she could not catch her breath. Brought to emergency center.',
      duration: 'Acute, sudden onset',
      hpi: {
        onset: 'Sudden onset while standing in kitchen',
        site: 'Dyspnea — respiratory; chest pain described as pleuritic',
        character: 'Sudden severe shortness of breath with sharp pleuritic chest pain',
        radiation: 'No radiation',
        severity: 'Severe — brought to emergency',
        time_course: 'Acute onset, persistent',
        exacerbating_factors: ['Deep breathing worsens pain (pleuritic)'],
        relieving_factors: ['None at presentation'],
      },
    },
    symptoms: {
      respiratory: {
        dyspnea: 'Sudden onset, severe',
        pleuritic_chest_pain: 'Sharp, worse with deep breathing',
        cough: 'May be present — possibly with hemoptysis',
        tachypnea: true,
        oxygen_desaturation: 'Likely present',
      },
      cardiovascular: {
        tachycardia: 'Likely present (common PE finding)',
        syncope_near_syncope: 'Possible with large PE',
      },
      constitutional: {
        anxiety: 'Sense of impending doom',
        diaphoresis: 'Possible',
      },
      vte_risks: {
        recent_surgery: 'Unknown — ask about',
        prolonged_immobility: 'Unknown — ask about travel, bed rest',
        prior_dvt_pe: 'Unknown — ask about',
        leg_swelling_pain: 'Ask about unilateral calf swelling/pain',
        cancer_history: 'Unknown — ask about',
        pregnancy_postpartum: 'Unknown — ask about',
        ocp_hrt: 'Unknown — ask about',
      },
      negatives: {
        fever: false,
        wheezing: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Unknown — needs full history'],
      negatives: ['Ask about prior thromboembolic events'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Unknown — ask about OCPs, HRT'],
    },
    social_history: {
      smoking: 'Ask about smoking history',
      alcohol: 'Not documented',
      travel: 'Ask about recent long-distance travel',
      family: 'Not documented',
    },
    family_history: 'Ask about family history of VTE or thrombophilia',
    ice: {
      ideas: 'Patient may think she is having a heart attack or panic attack',
      concerns: 'Terrified by sudden inability to breathe — fears she is dying',
      expectations: 'Expects immediate diagnosis and treatment to relieve dyspnea',
    },
  },
  sp_script: [
    {
      trigger: 'What brought you in today? / What happened? / Why are you in the ED?',
      trigger_zh: '你今天怎么来医院了？/ 发生什么事了？/ 为什么来急诊？',
      response: "I was standing in the kitchen... making dinner. And then... I just couldn't breathe. It came out of nowhere. I felt like someone was—was suffocating me. My husband brought me straight here.",
      response_zh: '我当时在厨房做饭……突然就说不上来话了。喘不上气，一点预兆都没有。就像有人要闷死我一样。我老公马上把我送来了。',
    },
    {
      trigger: 'Can you describe the shortness of breath? / How did it start?',
      trigger_zh: '能描述一下喘不上气的感觉吗？/ 是怎么开始的？',
      response: "It just hit me all of a sudden. One second I was fine, stirring the pot... the next second I couldn't get air in. It's never happened before. I've never felt anything like this. It's terrifying. I still can't really catch my breath.",
      response_zh: '就是突然一下子。前一秒还好好的，在锅里搅东西……下一秒就吸不进气了。以前从来没有过。这种感觉太可怕了。我现在还是喘不上来。',
    },
    {
      trigger: 'Do you have any chest pain? / Any other discomfort?',
      trigger_zh: '有没有胸痛？/ 还有其他不舒服吗？',
      response: "Yes—yes, there's a sharp pain in my chest. Right here. It gets worse when I try to take a deep breath. That's why I'm breathing like this... shallow. Every time I try to breathe in deep, the pain stabs me.",
      response_zh: '有——有，胸口这儿有种锐痛。就在这儿。我一想深呼吸就更疼。所以我只能这么浅浅地喘气……每次想深呼吸，胸口就像被扎了一下。',
    },
    {
      trigger: 'How severe is this? / On a scale of 1-10? / Are you very scared?',
      trigger_zh: '有多严重？/ 1到10分的话？/ 你很害怕吗？',
      response: "I thought I was going to die. I'm not exaggerating. I couldn't breathe and I thought—this is it. I've never been so scared in my whole life. Please, you have to help me. I don't want to die.",
      response_zh: '我以为我要死了。真的。喘不上气的时候我想——完了。我这辈子都没这么害怕过。求求你，一定要救救我。我不想死。',
    },
    {
      trigger: 'Any coughing? / Coughing up blood? / Racing heart? / Sweating?',
      trigger_zh: '有没有咳嗽？/ 咳血吗？/ 心跳得快吗？/ 出汗吗？',
      response: "I've coughed a little... dry cough. No blood, I don't think. But my heart is racing—I can feel it pounding in my chest. And yes, I'm sweating. I feel hot and clammy. And just... this overwhelming feeling that something terrible is wrong.",
      response_zh: '咳了几下……干咳。没有血。但心跳得特别快——能感觉心在胸口砰砰跳。还出汗。又热又黏。还有种……说不出的感觉，就是觉得大事不好了。',
    },
    {
      trigger: 'Has this ever happened before? / Any prior episodes?',
      trigger_zh: '以前有过这种情况吗？',
      response: "Never. Never in my life. I've always been healthy. I don't get sick. I don't go to doctors. That's why this is so scary—it came from nowhere. I was just making dinner.",
      response_zh: '从来没有。我这辈子都没这样过。我一直身体挺好的，不怎么生病，也不怎么看医生。所以才更害怕——毫无征兆就来了。我就是在做晚饭啊。',
    },
    {
      trigger: 'Have you traveled recently? / Any long trips? / Any surgery recently?',
      trigger_zh: '最近出过远门吗？/ 做过手术吗？',
      response: "No surgery. But I did fly back from visiting my sister about ten days ago. It was a long flight—about six hours. I've been tired since then but I thought nothing of it.",
      response_zh: '没做过手术。不过我大概十天前刚坐飞机去看我姐姐。飞了六个小时左右。回来以后一直有点累，但没当回事。',
    },
    {
      trigger: 'Any pain or swelling in your legs? / Any leg symptoms?',
      trigger_zh: '腿有没有疼或者肿？/ 腿有什么不舒服吗？',
      response: "Now that you mention it... my right calf has been a bit sore for a few days. I thought I just pulled a muscle or something. It's not really swollen—just achy. I didn't think it was connected to this.",
      response_zh: '你这么一说……我右小腿这几天是有点酸疼。我以为就是拉伤了之类的。没有很肿——就是酸酸的。没想到跟这个有关系。',
    },
    {
      trigger: 'Do you have any medical conditions? / Any health problems?',
      trigger_zh: '你有什么病史吗？/ 有什么健康问题？',
      response: "No, I'm generally healthy. I don't have high blood pressure, diabetes, nothing like that. I hardly ever get sick. That's why this is so shocking—I don't understand why this is happening to me.",
      response_zh: '没有，我身体一直挺好的。没有高血压、糖尿病那些。我几乎不生病。所以这次才这么吓人——我不明白为什么会这样。',
    },
    {
      trigger: 'Are you on any medications? / Birth control pills? / Any regular medicines?',
      trigger_zh: '你在吃什么药吗？/ 吃避孕药吗？/ 平时吃什么药？',
      response: "The only thing I take is birth control pills. I've been on them for a few years now. I don't take anything else. No blood pressure meds, no diabetes meds, nothing like that.",
      response_zh: '我就吃避孕药。吃了几年了。别的什么都不吃。降压药、降糖药那些都没有。',
    },
    {
      trigger: 'Do you smoke? / Drink alcohol?',
      trigger_zh: '你抽烟吗？/ 喝酒吗？',
      response: "No, I don't smoke. I might have a glass of wine with dinner occasionally but that's it. Nothing regular. I've always taken pretty good care of myself.",
      response_zh: '不抽烟。偶尔吃饭的时候喝杯红酒，就那样。没有不良习惯。我一直挺注意身体的。',
    },
    {
      trigger: 'Any family history of blood clots? / Anyone in your family with similar problems?',
      trigger_zh: '家里有人得过血栓吗？/ 家人有过类似情况吗？',
      response: "Actually... yes. My mother had blood clots in her leg after a surgery. She was in the hospital for it. I never really thought about it... but now I'm worried. Is that related to what's happening to me?",
      response_zh: '说起来……我妈妈以前手术后得过腿上的血栓。还住院了。我以前从没想过这个……但现在我有点担心。这个跟我现在的情况有关系吗？',
    },
    {
      trigger: 'What do you think is happening? / What are you worried about? / Any concerns?',
      trigger_zh: '你觉得你现在是什么情况？/ 你在担心什么？',
      response: "I don't know what to think. At first I thought maybe I was having a heart attack... or a panic attack. But this feels different. I just want to be able to breathe again. Please—I'm so scared. Just help me. Do whatever you need to do, just help me breathe.",
      response_zh: '我不知道。一开始我觉得可能是心脏病……或者是惊恐发作。但感觉不一样。我就想能正常喘气。求求你——我真的好害怕。帮帮我。需要做什么就做吧，只要能让我喘上气就行。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis?',
      answer: 'Pulmonary embolism. Sudden onset dyspnea with pleuritic chest pain in a middle-aged woman requires urgent evaluation for PE. Risk stratification using Wells criteria is needed.',
    },
    {
      part: 'dx',
      question: 'What are the risk factors for venous thromboembolism (VTE)?',
      answer: 'Virchow triad: stasis (immobility, travel, surgery), hypercoagulability (malignancy, pregnancy, OCPs, thrombophilia, smoking), endothelial injury (surgery, trauma, prior DVT). Specific risks: recent surgery, prolonged immobilization, malignancy, pregnancy/postpartum, oral contraceptives/HRT, obesity, smoking, age >60, prior DVT/PE, family history, known thrombophilia.',
    },
    {
      part: 'pe',
      question: 'How would you examine this patient? What specific physical signs would you look for to support or rule out PE?',
      answer: 'General: Tachypneic, tachycardic, anxious, diaphoretic. Vital signs: T 37.1°C, P 112 bpm, R 28/min, BP 128/84 mmHg, SpO₂ 89% on RA. Neck: JVP may be elevated if RV strain present. Respiratory: Tachypnea with shallow breathing. Clear to auscultation — no crackles or wheezes (important negative — distinguishes from pulmonary edema). Cardiovascular: Tachycardia, accentuated P2 (pulmonary component of S2) due to pulmonary hypertension. Right ventricular heave may be felt. Look for signs of RV strain: left parasternal lift, elevated JVP. Lower extremities: Inspect and palpate for unilateral calf swelling, warmth, erythema, or tenderness (Homan sign — low sensitivity, do not rely on it). Measure calf circumference — asymmetry >3 cm suggests DVT. Skin: May be diaphoretic. Check for cyanosis.',
    },
    {
      part: 'investigations',
      question: 'What is the Wells criteria for PE?',
      answer: 'Clinical signs/symptoms of DVT (3 pts), PE is #1 diagnosis or equally likely (3 pts), HR >100 (1.5 pts), immobilization/surgery within 4 weeks (1.5 pts), prior DVT/PE (1.5 pts), hemoptysis (1 pt), malignancy (1 pt). Score: >6 = high probability, 2-6 = moderate, <2 = low. Use PERC rule for very low risk patients.',
    },
    {
      part: 'investigations',
      question: 'What diagnostic tests would you order?',
      answer: 'Initial: pulse oximetry, ABG (A-a gradient, hypocapnia), ECG (sinus tachycardia, S1Q3T3 pattern, RV strain), CXR (usually normal or nonspecific — Westermark sign, Hampton hump). Definitive: CT pulmonary angiography (CTPA) — gold standard. V/Q scan if CTPA contraindicated (renal failure, contrast allergy). D-dimer for low/moderate probability patients (negative rules out PE). Echo may show RV strain/dilation.',
    },
    {
      part: 'management',
      question: 'How do you risk-stratify and manage acute PE?',
      answer: 'Massive PE: Sustained hypotension (SBP <90 mmHg for >15 min) or requiring inotropes, or cardiac arrest — mortality >50%. Treatment: thrombolysis (tPA) or surgical/catheter embolectomy + anticoagulation. Submassive PE: RV dysfunction on echo/CT + elevated troponin/BNP, but normotensive. Treatment: Anticoagulation (heparin/LMWH bridging to warfarin or DOAC). May consider thrombolysis if clinical decompensation. Low-risk PE: Normotensive, no RV dysfunction, normal biomarkers. Treatment: DOAC (rivaroxaban, apixaban) or LMWH to warfarin. IVC filter if anticoagulation contraindicated. Duration: 3-6 months for provoked, extended/lifelong for unprovoked/recurrent or ongoing risk factors.',
    },
    {
      part: 'other',
      question: 'What is the S1Q3T3 pattern on ECG?',
      answer: 'Classic but not sensitive PE finding: S wave in lead I, Q wave and inverted T wave in lead III. Represents acute right heart strain. Other ECG findings: sinus tachycardia, right axis deviation, RBBB, P pulmonale, T wave inversion in V1-V4 (RV strain pattern).',
    },
  ],
  pe_findings: `**Vital Signs:** T 37.1°C, P 112 bpm (regular), R 28/min, BP 128/84 mmHg, SpO₂ 89% on room air (desaturates to 85% with minimal exertion)

**General:** Middle-aged woman in visible respiratory distress. Anxious, diaphoretic, sitting upright and splinting — unwilling to lie flat. Appears frightened. Speaking in short, breathless sentences.

**Neck:** JVP measured at 6 cm H₂O (mildly elevated — suggests right heart strain). No carotid bruits. No lymphadenopathy.

**Respiratory:** Tachypneic at 28/min with shallow breathing pattern. Chest expansion symmetric. Percussion note resonant bilaterally. Auscultation: clear lung fields bilaterally — no crackles, wheezes, or rhonchi. No pleural rub. Important negative: absence of crackles helps distinguish PE from pulmonary edema or pneumonia.

**Cardiovascular:** Tachycardic, regular rhythm, rate 112. PMI non-displaced. S1 and S2 audible with accentuated P2 (loud pulmonary component). No S3 or S4. No murmurs. Right ventricular heave palpable at left sternal border (RV strain). Peripheral pulses: radial, femoral, dorsalis pedis all 2+ and symmetric.

**Abdomen:** Soft, non-tender, non-distended. Bowel sounds present. No masses or organomegaly. No hepatic tenderness.

**Extremities:** Right calf appears slightly fuller than left. Right calf tenderness on deep palpation. Calf circumference: right 38 cm, left 36 cm (2 cm difference). No erythema, warmth, or pitting edema. Left leg normal. No clubbing or cyanosis.

**Neurological:** Alert and oriented ×3. Cranial nerves grossly intact. Moving all four limbs.

**Key findings:** Tachypnea (28/min), tachycardia (112 bpm), hypoxia (SpO₂ 89% RA), elevated JVP, loud P2, right ventricular heave, right calf tenderness with mild asymmetry.`,
  investigations: `**Arterial Blood Gas (on room air):**
• pH 7.48 (respiratory alkalosis — hyperventilation)
• PaCO₂ 30 mmHg (hypocapnia)
• PaO₂ 62 mmHg (hypoxemia)
• HCO₃ 24 mmol/L (normal)
• A-a gradient significantly widened — calculated at approximately 48 mmHg (normal <10-20 mmHg for her age)

**ECG:**
• Sinus tachycardia at 112 bpm
• S1Q3T3 pattern — S wave in lead I, Q wave in lead III, inverted T wave in lead III
• Right axis deviation
• T wave inversion in V1-V3 (RV strain pattern)
• No ST elevation or pathologic Q waves (rules out acute MI)

**Chest X-ray (portable):**
• Normal cardiac silhouette — no cardiomegaly
• Clear lung fields bilaterally — no consolidation, no effusion, no pneumothorax
• No widened mediastinum (rules out aortic dissection)
• No Hampton hump or Westermark sign visible (these are uncommon findings)
• Important: a normal CXR in a hypoxic, dyspneic patient increases suspicion for PE

**D-dimer:**
• Elevated at 2.8 μg/mL (normal <0.5 μg/mL) — high sensitivity, low specificity
• Supports need for definitive imaging given moderate-to-high pre-test probability

**CT Pulmonary Angiography (CTPA):**
• Filling defect in the right lower lobe pulmonary artery — consistent with acute pulmonary embolism
• No evidence of right ventricular strain on CT (RV:LV ratio normal)
• No other pulmonary pathology identified

**Lower Extremity Venous Doppler Ultrasound:**
• Acute DVT in the right popliteal vein — non-compressible segment with intraluminal thrombus
• No DVT in the left leg
• This confirms the source of the embolus

**Laboratory:**
• CBC: WBC 9.2 × 10⁹/L (normal), Hb 13.5 g/dL (normal), Platelets 280 × 10⁹/L (normal)
• Troponin I: 0.02 ng/mL (normal — no myocardial injury)
• BNP: 65 pg/mL (mildly elevated — suggests some RV stretch but not severe)
• Coagulation profile: PT 12.0s, aPTT 30s, INR 1.1 (normal baseline)
• Renal function: Urea 4.8 mmol/L, Creatinine 76 μmol/L, eGFR >90 mL/min (normal — safe for contrast)

**Summary:** Acute pulmonary embolism (right lower lobe) with proximal DVT (right popliteal vein) in a patient with OCP use, recent long-distance travel, and family history of VTE. This is a provoked PE. Patient is normotensive with no RV strain → classified as low-risk PE.`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          adequate: '2-3 marks',
          outstanding: '4 marks',
          elements: [
            'Calm, reassuring approach for acutely dyspneic patient',
            'Avoid jargon — explain what a PE is in accessible terms',
            'Acknowledge the frightening nature of sudden dyspnea',
            'Keep patient informed of what is happening during workup',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Onset: 'Sudden, while standing in kitchen',
            Character: 'Severe dyspnea with pleuritic chest pain',
            Associated_symptoms: 'Cough, hemoptysis, palpitations, anxiety, sense of doom',
            Time_course: 'Acute onset, persistent',
            Exacerbating: 'Deep breathing (pleuritic)',
            Severity: 'Severe — brought to emergency',
          },
          vte_risk_factors: [
            'Recent surgery or hospitalization',
            'Prolonged travel or immobilization',
            'Prior DVT or PE',
            'Malignancy',
            'Pregnancy or postpartum status',
            'Oral contraceptives or HRT use',
            'Family history of VTE or thrombophilia',
            'Smoking',
          ],
          symptoms_of_dvt: [
            'Unilateral leg swelling or pain',
            'Calf tenderness',
            'Erythema or warmth of leg',
          ],
          rule_out_differentials: [
            'ACS/MI — ECG, troponin',
            'Pneumothorax — CXR',
            'Pneumonia — fever, CXR findings',
            'Aortic dissection — unequal pulses, widened mediastinum',
            'Anxiety/panic attack — diagnosis of exclusion',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly suspects PE based on acute dyspnea and pleuritic pain',
            'Calculates Wells score and pre-test probability',
            'Explains diagnostic algorithm (D-dimer vs CTPA)',
            'Discusses anticoagulation options and duration',
            'Addresses need to identify underlying cause',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think this is a heart attack or "just anxiety"',
            concerns: 'Fear of dying — sudden dyspnea is terrifying',
            expectations: 'Expects quick diagnosis, symptom relief, and clear treatment plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case014PE;
