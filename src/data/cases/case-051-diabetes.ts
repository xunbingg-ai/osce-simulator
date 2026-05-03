import { CaseData } from '@/types';

const case051Diabetes: CaseData = {
  _id: 'case-051-diabetes',
  case_id: 'Case 051 - Routine Checkup with Elevated Blood Sugar',
  case_name: 'Routine Checkup with Elevated Blood Sugar',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'BP 140/92 mmHg, HR 78 bpm (regular), R 16/min, T 36.8°C, BMI 29 kg/m², SpO₂ 98% on room air',
  patient: {
    age: 52,
    gender: 'F',
    occupation: 'Full-time job (not specified) plus caring for three children',
    chief_complaint: 'Routine yearly physical examination — no current complaints',
    presentation: {
      setting: 'Patient presents for her yearly physical examination at the internal medicine clinic.',
      duration: 'Asymptomatic — found on routine screening',
      hpi: {
        onset: 'Incidental finding on routine fasting glucose during annual physical',
        site: 'N/A — asymptomatic',
        character: 'N/A',
        radiation: 'N/A',
        severity: 'Mild — no hyperglycemic symptoms',
        time_course: 'Unknown duration — newly detected',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      cardiovascular: {
        blood_pressure: '140/92 mm Hg',
      },
      constitutional: {
        bmi: '29 kg/m2',
        obesity: 'Moderate obesity',
      },
      others: {
        acanthosis_nigricans: 'Present at the neck',
        bmi: '29 kg/m2',
        obesity: 'Moderate obesity',
      },
      negatives: {
        polyuria: false,
        polydipsia: false,
        weight_loss: false,
        fatigue: false,
        visual_blurring: false,
        chest_pain: false,
        shortness_of_breath: false,
        headache: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Borderline hypertension', 'Moderate obesity'],
      negatives: ['No known coronary artery disease', 'No prior diabetes diagnosis', 'No prior gestational diabetes'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented'],
    },
    social_history: {
      smoking: 'None',
      alcohol: 'Occasional — 1-2 glasses of wine per week',
      occupation: 'Full-time job with three children — finds it difficult to exercise',
      family: 'Eats out frequently due to busy schedule',
    },
    family_history: 'Mother and older brother have diabetes and hypertension',
    ice: {
      ideas: 'Patient feels well and may not understand the significance of elevated blood sugar. She may believe a number slightly above normal is not concerning.',
      concerns: 'Concerned about having to take daily medications; worried about impact on busy lifestyle; concerned about difficulty making dietary changes due to family eating habits.',
      expectations: 'Expected a routine clean bill of health; may be resistant to lifestyle modification recommendations given previous unsuccessful counseling.',
    },
  },
  sp_script: [
    {
      trigger: 'What brings you in today? / How can I help you? / What is the reason for your visit?',
      trigger_zh: '你今天来看什么？/ 有什么需要帮忙的吗？/ 你来看病的原因是什么？',
      response: "I'm here for my yearly physical. I try to come in every year around this time. I'm feeling fine, just the usual checkup. Nothing specific is wrong.",
      response_zh: '我来做每年的例行体检。每年这个时候我都会来。我感觉挺好的，就是做个常规检查。没有什么特别不舒服的地方。',
    },
    {
      trigger: 'Have you noticed any symptoms? / Any health concerns? / Is anything bothering you?',
      trigger_zh: '你最近有什么不舒服吗？/ 有什么健康问题吗？/ 有什么不舒服的地方吗？',
      response: "No, not really. I feel perfectly fine. I have plenty of energy, I'm sleeping well... everything seems normal. I'm actually surprised you're asking — I thought the whole point of a physical was to make sure everything is okay.",
      response_zh: '没有，我身体很好。精力充沛，睡眠也正常……一切都正常。说实话你问我这个问题我还挺意外的——做体检不就是想确认身体健康吗？',
    },
    {
      trigger: 'Can you tell me about your diet? / What do you typically eat? / Describe your eating habits.',
      trigger_zh: '能说说你的饮食习惯吗？/ 你一般都吃什么？/ 描述一下你的日常饮食。',
      response: "Honestly? We eat out a lot. I have three kids and a full-time job, so by the time I get home, cooking is the last thing I want to do. Fast food, takeout, whatever's quick. I know it's not the healthiest but it's just easier. We're all busy, you know?",
      response_zh: '说实话吗？我们经常在外面吃。我有三个孩子还要上班，回到家的时候根本不想做饭。快餐、外卖，什么快吃什么。我知道不太健康，但是方便。大家不都这么忙吗？',
    },
    {
      trigger: 'Do you exercise regularly? / What about physical activity? / Do you get any exercise?',
      trigger_zh: '你经常锻炼吗？/ 平时有运动吗？/ 有没有运动的习惯？',
      response: "I wish I could. I know I should. But with work and the kids, by the time I sit down it's already 9pm and I'm exhausted. Sometimes I think about joining a gym, but where would I find the time? I barely have time for myself as it is.",
      response_zh: '我也想运动。我知道应该运动。但是上班加上照顾孩子，等我坐下来的时候已经晚上9点了，累得不行。有时候也想过去健身房，但哪有时间啊？连自己的时间都没有。',
    },
    {
      trigger: 'Any family history of medical conditions? / Does anyone in your family have diabetes? / What about your parents\' health?',
      trigger_zh: '家里有人有什么病吗？/ 家里有人得糖尿病吗？/ 你父母的健康怎么样？',
      response: "My mother has diabetes. She's had it for years. And my older brother was diagnosed a few years ago too. They also both have high blood pressure. I guess... sometimes I worry that it could run in the family. But I feel fine, so I try not to think about it too much.",
      response_zh: '我妈妈有糖尿病，很多年了。我哥哥前几年也查出来有糖尿病。他们俩也都有高血压。有时候……我也会担心这个病会不会遗传。但我感觉挺好的，所以尽量不去多想。',
    },
    {
      trigger: 'How stressful would you say your life is? / Tell me about your daily routine. / Do you feel stressed?',
      trigger_zh: '你平时的压力大吗？/ 说说你的一天吧。/ 你觉得压力大吗？',
      response: "Stressful! I work full-time, and I have three kids — two teenagers and a younger one. There's always homework, activities, appointments. I barely have time for myself. I'm constantly running from one thing to another. It's just... a lot. I don't really have time to think about my own health.",
      response_zh: '压力很大！我全职上班，还有三个孩子——两个青少年，一个小的。每天都有作业、课外活动、各种事情。我几乎没有自己的时间。总是忙得团团转。真的……事情太多了。我都没时间考虑自己的健康。',
    },
    {
      trigger: 'Have you tried to lose weight before? / Any previous weight loss efforts? / What have you tried?',
      trigger_zh: '你以前试过减肥吗？/ 以前有减过肥吗？/ 试过什么方法？',
      response: "I've tried. A few times. I saw a nutritionist once, but I just couldn't stick with it. When you're cooking for a family, it's hard to make separate meals. And honestly, when I'm stressed, food is... comforting. I lost some weight once but I gained it all back. Nothing ever really stuck.",
      response_zh: '试过几次。以前看过营养师，但是坚持不下来。给一家人做饭，总不能单独给我自己做一份吧。而且说实话，压力大的时候，吃东西能让我舒服点。有一次瘦了一些，但后来又全胖回来了。从来都没坚持住。',
    },
    {
      trigger: 'What are you most worried about? / Any specific concerns? / Is there anything on your mind?',
      trigger_zh: '你最担心什么？/ 有什么具体担心的事吗？/ 最近有什么心事吗？',
      response: "Well... I know diabetes runs in my family, and I've seen what my mother goes through with her medications and checking her blood sugar every day. I don't want that. I don't want to have to take pills every day for the rest of my life. And I'm worried that if the doctor tells me to change my whole lifestyle... I mean, where do I even start? It feels overwhelming.",
      response_zh: '嗯……我知道我们家有糖尿病史，我也看到我妈妈每天吃药测血糖有多麻烦。我不想那样。我不想下半辈子每天都要吃药。而且我也担心，如果医生让我完全改变生活方式……我都不知道从哪里开始。感觉压力好大。',
    },
    {
      trigger: 'Your blood test shows your blood sugar is elevated. / Your fasting glucose is higher than normal. / I have some results to discuss with you.',
      trigger_zh: '你的血糖检查结果显示血糖偏高。/ 你的空腹血糖高于正常水平。/ 我要跟你谈谈检查结果。',
      response: "What? Really? That doesn't make sense — I feel perfectly fine! I don't have any symptoms at all. I'm not thirsty all the time, I'm not going to the bathroom more than usual, I haven't lost any weight. Are you sure about this? Could it be a mistake? I was just expecting everything to be normal.",
      response_zh: '什么？真的吗？不可能啊——我一点感觉都没有！我没有任何症状。我没有总是口渴，也没有比以前上厕所多，体重也没减。你确定吗？会不会搞错了？我就以为一切都会正常的。',
    },
    {
      trigger: 'Do you take any medications? / Any allergies? / Are you allergic to any medications?',
      trigger_zh: '你在吃什么药吗？/ 有药物过敏吗？/ 对什么药过敏吗？',
      response: "No, I'm not on any medications at all. Never really needed any. And no allergies that I know of.",
      response_zh: '没有，我什么药都没吃。从来不需要吃药。过敏也没有，我知道的没有。',
    },
    {
      trigger: 'Do you smoke? / Any alcohol? / Smoking or drinking?',
      trigger_zh: '你抽烟吗？/ 喝酒吗？/ 抽烟喝酒吗？',
      response: "I don't smoke. I do have a glass of wine maybe once or twice a week, just to unwind after a long day. Nothing excessive — just one glass.",
      response_zh: '我不抽烟。偶尔喝杯红酒，一周一两次吧，就是忙完一天放松一下。不多喝，就一杯。',
    },
    {
      trigger: 'What were you expecting from today\'s visit? / What did you hope to get out of this checkup? / How are you feeling about all this?',
      trigger_zh: '你今天来检查期望什么结果？/ 你希望这次体检得到什么结果？/ 你现在感觉怎么样？',
      response: "I was honestly just expecting to hear that everything's fine, like always. I didn't expect any of this. I guess... I just want to understand what this really means for me. Is this serious? Do I really have diabetes? And what do I have to do about it? I'm just not sure what to think right now.",
      response_zh: '说实话我就想跟以前一样，听到医生说一切正常。没想到会这样。我就想知道……这对我来说到底意味着什么。严重吗？我真的得了糖尿病吗？我需要做什么？我现在脑子有点乱。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis based on the laboratory finding?',
      answer: 'Type 2 diabetes mellitus. The fasting plasma glucose of 140 mg/dL meets the ADA diagnostic criterion of >= 126 mg/dL. Supporting factors include obesity (BMI 29), family history of diabetes, hypertension, and acanthosis nigricans (a skin marker of insulin resistance).',
    },
    {
      part: 'dx',
      question: 'What are the ADA diagnostic criteria for diabetes?',
      answer: 'Four criteria: (1) Hemoglobin A1C >= 6.5%, (2) Fasting plasma glucose >= 126 mg/dL, (3) 2-hour plasma glucose >= 200 mg/dL during 75-g oral glucose tolerance test, (4) Random plasma glucose >= 200 mg/dL in the setting of hyperglycemic symptoms. In the absence of clear hyperglycemia, diagnosis should be confirmed with repeat testing on a subsequent day.',
    },
    {
      part: 'pe',
      question: 'What physical examination findings would be important to assess in this patient? Describe both the positive findings you expect and what you are looking for to rule out complications.',
      answer: 'General: Moderate obesity with central adiposity (BMI 29). Neck/Skin: Acanthosis nigricans — velvety hyperpigmented plaques on the posterior neck, a key marker of insulin resistance. Vital signs: BP 140/92 mmHg (stage 1 hypertension). Cardiovascular: Regular rate and rhythm (HR ~78 bpm), no murmurs, rubs, or gallops; carotid and peripheral pulses intact and symmetric. Fundoscopy: Normal retina — no diabetic retinopathy at this stage. Feet: Normal monofilament sensation, intact dorsalis pedis and posterior tibial pulses, no ulcers, deformities, or calluses. Neurological: Normal deep tendon reflexes, no peripheral neuropathy. Key negatives: No JVD, no carotid bruits, no abdominal bruits, no goiter, no edema.',
    },
    {
      part: 'investigations',
      question: 'What investigations would you order to confirm the diagnosis and assess for diabetic complications?',
      answer: 'Confirm diagnosis: (1) Repeat fasting plasma glucose — 138 mg/dL (confirmed diabetic; ADA threshold >= 126 mg/dL). (2) HbA1C — 7.2% (diagnostic; threshold >= 6.5%). Assess for complications and comorbidities: (3) Lipid panel — LDL 160 mg/dL (elevated), HDL 38 mg/dL (low), triglycerides 280 mg/dL (elevated); consistent with diabetic dyslipidemia. (4) Urine microalbumin-to-creatinine ratio — normal (< 30 mg/g); no evidence of diabetic nephropathy. (5) Serum creatinine 0.8 mg/dL, eGFR > 90 mL/min — normal renal function. (6) LFT — normal. (7) TSH — normal (rule out concomitant thyroid disease). (8) Ophthalmology referral for dilated fundoscopic exam to screen for retinopathy.',
    },
    {
      part: 'investigations',
      question: 'How do you interpret the HbA1C and lipid panel results? What are the glycemic targets?',
      answer: 'HbA1C 7.2% (55 mmol/mol) confirms diabetes — the ADA diagnostic threshold is >= 6.5% (48 mmol/mol). This reflects average blood glucose over the preceding 2-3 months. The general glycemic target is HbA1C < 7% (< 53 mmol/mol), though this should be individualized based on age, hypoglycemia risk, life expectancy, and comorbidities. Lipid panel shows diabetic dyslipidemia: elevated LDL (target < 100 mg/dL, or < 70 mg/dL if high ASCVD risk), low HDL (target > 50 mg/dL in women), and elevated triglycerides (target < 150 mg/dL). This atherogenic lipid profile is characteristic of insulin resistance and confers significant cardiovascular risk.',
    },
    {
      part: 'management',
      question: 'What lifestyle modifications are most important for this patient?',
      answer: 'Weight loss of 5-10% significantly improves insulin sensitivity, lipids, and blood pressure. Dietary changes: reduce calories, saturated fat, and sodium; increase fruits, vegetables, and fiber (DASH or Mediterranean diet). Exercise: at least 150 minutes/week of moderate-intensity activity (e.g., brisk walking 30 min, 5 days/week). Given her busy schedule with work and three children, practical strategies are essential: short walks during lunch breaks, involving the family in meal planning and physical activities, preparing simple healthy meals in advance, and setting realistic incremental goals. Previous unsuccessful counseling suggests a need for a tailored, supportive approach with regular follow-up.',
    },
    {
      part: 'management',
      question: 'Why is cardiovascular risk reduction essential in type 2 diabetes?',
      answer: 'Diabetes confers the same level of risk for coronary events as established coronary artery disease in nondiabetics. The major cause of morbidity and mortality in type 2 diabetes is macrovascular disease (MI, stroke, PAD). Aggressive risk factor modification is essential: BP control (< 130/80 mmHg per ADA guidelines), statin therapy (moderate to high intensity based on ASCVD risk calculation), smoking cessation, and antiplatelet therapy if indicated. Metformin also provides cardiovascular benefit independent of glycemic control.',
    },
    {
      part: 'other',
      question: 'Why is metformin the first-line pharmacotherapy for type 2 diabetes?',
      answer: 'Metformin decreases hepatic gluconeogenesis and improves insulin sensitivity. It is effective, weight-neutral (may cause modest weight loss), inexpensive, and does not cause hypoglycemia when used alone. It also has cardiovascular benefits and is supported by strong evidence. Contraindications: renal insufficiency (Cr > 1.5 in men, > 1.4 in women, or eGFR < 30), liver dysfunction, or conditions predisposing to lactic acidosis.',
    },
  ],
  pe_findings: `**Vital Signs:** BP 140/92 mmHg, HR 78 bpm (regular), R 16/min, T 36.8°C, BMI 29 kg/m², SpO₂ 98% on room air

**General:** Middle-aged woman with moderate obesity and central adiposity. Well-appearing, in no distress. Alert, oriented, and cooperative. Conversant throughout the encounter.

**Neck:** Acanthosis nigricans present — hyperpigmented, velvety plaques on the posterior neck, a classic cutaneous marker of insulin resistance. No lymphadenopathy. No thyromegaly. No carotid bruits. JVP not elevated.

**Cardiovascular:** Regular rate and rhythm. S1 and S2 audible, no murmurs, rubs, or gallops. PMI non-displaced. No heave or thrill. Peripheral pulses: radial, femoral, dorsalis pedis, posterior tibial — all 2+ and symmetric.

**Respiratory:** Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi. Respiratory effort normal.

**Abdomen:** Soft, non-tender, non-distended. No hepatosplenomegaly. No abdominal bruits. Bowel sounds present.

**Fundoscopy:** Optic discs sharp and well-defined. Retina normal — no microaneurysms, hemorrhages, exudates, or cotton-wool spots. No diabetic retinopathy detected.

**Feet:** Skin intact, no ulcers or calluses. Normal monofilament sensation bilaterally (10-g monofilament felt at all tested sites). Dorsalis pedis and posterior tibial pulses palpable bilaterally. No edema, deformities, or nail changes.

**Neurological:** Alert and oriented x3. Cranial nerves grossly intact. Deep tendon reflexes 2+ and symmetric. Sensation to light touch and proprioception intact in both lower extremities. Negative Romberg.

**Key findings:** Acanthosis nigricans (insulin resistance marker), obesity with central adiposity (BMI 29), elevated BP (140/92 mmHg), normal fundoscopy and foot exam (no end-organ damage yet).`,
  investigations: `**Confirmatory Tests:**
• Repeat fasting plasma glucose: 138 mg/dL (elevated — ADA diagnostic threshold >= 126 mg/dL)
• HbA1C: 7.2% (55 mmol/mol) — diagnostic of diabetes (ADA threshold >= 6.5%, or 48 mmol/mol)

**Complication and Comorbidity Screening:**
• Lipid panel: LDL 160 mg/dL (elevated — target < 100 mg/dL), HDL 38 mg/dL (low — target > 50 mg/dL in women), Triglycerides 280 mg/dL (elevated — target < 150 mg/dL) — consistent with diabetic dyslipidemia
• Urine microalbumin-to-creatinine ratio: 12 mg/g (normal — < 30 mg/g; no evidence of diabetic nephropathy)
• Serum creatinine: 0.8 mg/dL, eGFR > 90 mL/min — normal renal function
• LFT (ALT, AST, ALP): within normal limits — no evidence of NAFLD or hepatic impairment
• TSH: 2.1 mIU/L (normal) — no concomitant thyroid dysfunction

**Additional Assessments:**
• ECG: normal sinus rhythm, no ischemic changes — baseline for comparison
• Ophthalmology referral: dilated fundoscopic exam scheduled — no retinopathy expected at this early stage
• Diabetes self-management education: recommended — covers glucose monitoring, medication use, dietary planning, and exercise
• ASCVD risk calculation: 10-year risk estimated at moderate to high given age, hypertension, diabetes, obesity, and dyslipidemia`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and establishes rapport',
            'Avoids medical jargon — explains diabetes and risk factors clearly',
            'Shows empathy regarding difficulty making lifestyle changes with busy family life',
            'Uses non-judgmental approach when discussing previous unsuccessful lifestyle counseling',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Ask about symptoms of hyperglycemia — polyuria, polydipsia, nocturia',
            Onset: 'When did fatigue or other symptoms begin? Any prior glucose testing?',
            Character: 'Ask about diet patterns, meal timing, types of food consumed',
            Radiation: 'Family history — diabetes, hypertension, CAD, stroke',
            Associated_symptoms: 'Blurry vision, frequent infections, slow wound healing, neuropathic symptoms (numbness, tingling in feet)',
            Time_course: 'Duration of obesity, hypertension; prior glucose values',
            Exacerbating_relieving: 'Diet, exercise patterns, stress, sleep quality',
            Severity: 'Impact of lifestyle on daily life; readiness to change',
          },
          specific_history: [
            'Detailed dietary history — typical meals, eating out frequency',
            'Physical activity assessment — barriers to exercise',
            'Prior gestational diabetes history',
            'Cardiovascular risk assessment — smoking, lipids, prior cardiac events',
            'Obstetric history — gestational diabetes, large babies',
            'Sleep history — screen for obstructive sleep apnea',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly diagnoses type 2 diabetes based on ADA criteria',
            'Explains the role of insulin resistance and obesity in diabetes pathophysiology',
            'Discusses lifestyle modification as foundation of therapy',
            'Outlines pharmacotherapy (metformin) and cardiovascular risk reduction plan',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient feels well and may not grasp the seriousness of diabetes as a chronic disease',
            concerns: 'Worried about daily medications, impact on lifestyle, difficulty making changes while caring for family',
            expectations: 'May expect a simple fix rather than lifelong lifestyle changes; needs practical, achievable guidance',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case051Diabetes;
