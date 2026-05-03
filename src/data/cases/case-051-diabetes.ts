import { CaseData } from '@/types';

const case051Diabetes: CaseData = {
  _id: 'case-051-diabetes',
  case_id: 'Case 051 - Routine Checkup with Elevated Blood Sugar',
  case_name: 'Routine Checkup with Elevated Blood Sugar',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'BP 140/92 mmHg, P 78 bpm, R 16/min, T 36.8°C, BMI 29 kg/m², SpO₂ 98% on room air',
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
      trigger: 'Have you noticed any increased thirst or needing to urinate more often? / Any changes in your vision? / Blurry vision at all?',
      trigger_zh: '你有没有觉得口渴或者小便比以前多？/ 视力有变化吗？/ 有没有觉得视力模糊？',
      response: "No, nothing like that. I drink normally, go to the bathroom the usual amount. My vision is fine — I don't wear glasses or anything. Everything seems perfectly normal to me.",
      response_zh: '没有，没有这些情况。喝水正常，上厕所也正常。视力也很好——我都不戴眼镜。我觉得一切都正常。',
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
      trigger: 'Any family history of medical conditions? / Does anyone in your family have diabetes?',
      trigger_zh: '家里有人有什么病吗？/ 家里有人得糖尿病吗？',
      response: "My mother has diabetes. She's had it for years. And my older brother was diagnosed a few years ago too. They also both have high blood pressure. I guess... sometimes I worry that it could run in the family. But I feel fine, so I try not to think about it too much.",
      response_zh: '我妈妈有糖尿病，很多年了。我哥哥前几年也查出来有糖尿病。他们俩也都有高血压。有时候……我也会担心这个病会不会遗传。但我感觉挺好的，所以尽量不去多想。',
    },
    {
      trigger: 'Do you have any other medical conditions? / Any past medical history? / Any previous health issues?',
      trigger_zh: '你还有其他病史吗？/ 以前有过什么健康问题吗？',
      response: "Not really. I've always been pretty healthy. They told me my blood pressure was a bit high at my last checkup, but nothing too serious. No surgeries, no hospital stays. I haven't really been sick much at all.",
      response_zh: '没什么大病。我一直还算健康。上次体检医生说我血压有点高，但不严重。没做过手术，没住过院。平时很少生病。',
    },
    {
      trigger: 'Are you taking any medications? / Any allergies?',
      trigger_zh: '你在吃什么药吗？/ 有药物过敏吗？',
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
      trigger: 'How stressful would you say your life is? / Tell me about your daily routine.',
      trigger_zh: '你平时的压力大吗？/ 说说你的一天吧。',
      response: "Stressful! I work full-time, and I have three kids — two teenagers and a younger one. There's always homework, activities, appointments. I barely have time for myself. I'm constantly running from one thing to another. It's just... a lot. I don't really have time to think about my own health.",
      response_zh: '压力很大！我全职上班，还有三个孩子——两个青少年，一个小的。每天都有作业、课外活动、各种事情。我几乎没有自己的时间。总是忙得团团转。真的……事情太多了。我都没时间考虑自己的健康。',
    },
    {
      trigger: 'Have you tried to lose weight before? / Any previous weight loss efforts?',
      trigger_zh: '你以前试过减肥吗？/ 以前有减过肥吗？',
      response: "I've tried. A few times. I saw a nutritionist once, but I just couldn't stick with it. When you're cooking for a family, it's hard to make separate meals. And honestly, when I'm stressed, food is... comforting. I lost some weight once but I gained it all back. Nothing ever really stuck.",
      response_zh: '试过几次。以前看过营养师，但是坚持不下来。给一家人做饭，总不能单独给我自己做一份吧。而且说实话，压力大的时候，吃东西能让我舒服点。有一次瘦了一些，但后来又全胖回来了。从来都没坚持住。',
    },
    {
      trigger: 'What do you think could be going on? / What are you most worried about?',
      trigger_zh: '你觉得可能是什么问题？/ 你最担心什么？',
      response: "Well... I know diabetes runs in my family, and I've seen what my mother goes through with her medications and checking her blood sugar every day. I don't want that. I don't want to have to take pills every day for the rest of my life. And I'm worried that if the doctor tells me to change my whole lifestyle... I mean, where do I even start? It feels overwhelming.",
      response_zh: '嗯……我知道我们家有糖尿病史，我也看到我妈妈每天吃药测血糖有多麻烦。我不想那样。我不想下半辈子每天都要吃药。而且我也担心，如果医生让我完全改变生活方式……我都不知道从哪里开始。感觉压力好大。',
    },
    {
      trigger: 'Your blood test shows your blood sugar is elevated. / Your fasting glucose is higher than normal.',
      trigger_zh: '你的血糖检查结果显示血糖偏高。/ 你的空腹血糖高于正常水平。',
      response: "What? Really? That doesn't make sense — I feel perfectly fine! I don't have any symptoms at all. I'm not thirsty all the time, I'm not going to the bathroom more than usual, I haven't lost any weight. Are you sure about this? Could it be a mistake? I was just expecting everything to be normal.",
      response_zh: '什么？真的吗？不可能啊——我一点感觉都没有！我没有任何症状。我没有总是口渴，也没有比以前上厕所多，体重也没减。你确定吗？会不会搞错了？我就以为一切都会正常的。',
    },
    {
      trigger: 'What were you hoping to get out of this visit? / What are your expectations now?',
      trigger_zh: '你这次来看诊希望得到什么结果？/ 你现在有什么期望？',
      response: "I was honestly just expecting to hear that everything's fine, like always. I didn't expect any of this. I guess... I just want to understand what this really means for me. Is this serious? Do I really have diabetes? And what do I have to do about it? I'm just not sure what to think right now.",
      response_zh: '说实话我就想跟以前一样，听到医生说一切正常。没想到会这样。我就想知道……这对我来说到底意味着什么。严重吗？我真的得了糖尿病吗？我需要做什么？我现在脑子有点乱。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis for this patient? Explain your reasoning including the relevant clinical features.',
      answer: 'Type 2 diabetes mellitus. The patient is a 52-year-old woman with obesity (BMI 29 kg/m²), hypertension (BP 140/92 mmHg), strong family history of diabetes (mother and brother), and acanthosis nigricans (a cutaneous marker of insulin resistance). She is asymptomatic but screening fasting glucose was elevated. The combination of obesity, hypertension, family history, and acanthosis nigricans places her at high risk for type 2 diabetes. The absence of symptoms does not exclude diabetes — many patients are asymptomatic at diagnosis.',
    },
    {
      part: 'dx',
      question: 'What are the ADA diagnostic criteria for diabetes? Which criteria apply to this patient?',
      answer: 'Four diagnostic criteria (any one is sufficient; confirm with repeat testing if asymptomatic): (1) Hemoglobin A1C ≥6.5% (48 mmol/mol). (2) Fasting plasma glucose ≥126 mg/dL (7.0 mmol/L) — this is the criterion that applies to this patient (fasting glucose 140 mg/dL). (3) 2-hour plasma glucose ≥200 mg/dL (11.1 mmol/L) during 75-g oral glucose tolerance test. (4) Random plasma glucose ≥200 mg/dL (11.1 mmol/L) in the presence of hyperglycemic symptoms. In the absence of clear hyperglycemia (as in this asymptomatic patient), diagnosis should be confirmed with repeat testing on a subsequent day before labeling the patient with diabetes.',
    },
    {
      part: 'pe',
      question: 'How would you examine this patient? What specific physical findings are you looking for to support the diagnosis and assess for complications?',
      answer: 'General: assess body habitus — central adiposity (waist circumference), BMI. Vital signs: BP (elevated 140/92 — stage 1 hypertension), heart rate. Neck/Skin: inspect for acanthosis nigricans (velvety hyperpigmented plaques at posterior neck — marker of insulin resistance). Cardiovascular: regular rate and rhythm, check for murmurs, carotid bruits, peripheral pulses. Fundoscopy: dilated fundoscopic exam — look for diabetic retinopathy (microaneurysms, hemorrhages, exudates, cotton-wool spots). Feet: inspect for ulcers, calluses, deformities; monofilament sensation testing for peripheral neuropathy; palpate dorsalis pedis and posterior tibial pulses. Neurological: deep tendon reflexes, vibration sense, proprioception — assess for peripheral neuropathy. Key negatives: no retinopathy at this early stage, no foot ulcers, no neuropathy likely.',
    },
    {
      part: 'investigations',
      question: 'What investigations would you order to confirm the diagnosis and assess for diabetic complications? Prioritize by urgency and explain your rationale.',
      answer: 'Confirm diagnosis: (1) Repeat fasting plasma glucose — 138 mg/dL (confirmed; ADA threshold ≥126 mg/dL). (2) HbA1C — 7.2% (55 mmol/mol; diagnostic threshold ≥6.5%) — reflects average glucose over 2-3 months and is used for both diagnosis and monitoring. Assess for complications and comorbidities: (3) Lipid panel — LDL 160 mg/dL (elevated), HDL 38 mg/dL (low), Triglycerides 280 mg/dL (elevated) — screens for diabetic dyslipidemia, a major cardiovascular risk factor. (4) Urine microalbumin-to-creatinine ratio — screens for diabetic nephropathy (early detection allows intervention). (5) Serum creatinine and eGFR — assess baseline renal function (important for medication safety, especially metformin). (6) LFT — screens for NAFLD (common in type 2 diabetes). (7) TSH — rules out concomitant thyroid dysfunction. (8) ECG — baseline cardiac assessment. (9) Ophthalmology referral for dilated fundoscopic exam.',
    },
    {
      part: 'investigations',
      question: 'How would you interpret the HbA1C and lipid panel results? What are the target values for this patient?',
      answer: 'HbA1C 7.2% (55 mmol/mol) confirms diabetes. Glycemic target: generally HbA1C <7% (<53 mmol/mol) per ADA guidelines, though targets should be individualized. For this relatively healthy patient with new diagnosis, a target of <6.5-7% is reasonable. Lipid panel shows diabetic dyslipidemia: LDL 160 mg/dL (target <100 mg/dL, or <70 mg/dL if high ASCVD risk), HDL 38 mg/dL (low; target >50 mg/dL in women), Triglycerides 280 mg/dL (elevated; target <150 mg/dL). This atherogenic lipid profile (high LDL, low HDL, high triglycerides) is characteristic of insulin resistance and confers significant cardiovascular risk — even more so given her hypertension, obesity, and family history.',
    },
    {
      part: 'management',
      question: 'How would you manage this patient? Outline your acute and long-term management plan including lifestyle and pharmacotherapy.',
      answer: 'Lifestyle modification is the foundation: (1) Weight loss of 5-10% significantly improves insulin sensitivity, glycemic control, lipids, and BP. Practical approach: small achievable goals, involve family in meal planning, prepare simple healthy meals. (2) Dietary changes: reduce calories, saturated fat, sodium, and refined carbohydrates; increase fruits, vegetables, fiber, whole grains (Mediterranean or DASH diet). (3) Physical activity: at least 150 min/week moderate-intensity (e.g., brisk walking 30 min, 5 days/week). Given her busy schedule, practical strategies: short walks during lunch, family activities on weekends. Pharmacotherapy: (4) Metformin — first-line therapy; start 500 mg once daily with dinner, titrate to 500-1000 mg twice daily as tolerated. Benefits: weight-neutral, no hypoglycemia alone, cardiovascular benefit. (5) Statin therapy — indicated in all diabetic patients age 40-75 with CVD risk factors (she qualifies); moderate-to-high intensity statin (atorvastatin 10-20 mg or rosuvastatin 5-10 mg) for primary prevention. (6) Antihypertensive therapy — target BP <130/80 mmHg per ADA; consider ACE inhibitor or ARB (also renoprotective).',
    },
    {
      part: 'management',
      question: 'Why is cardiovascular risk reduction essential in type 2 diabetes, and what specific interventions are most important?',
      answer: 'Diabetes confers a 2-4 fold increased risk of cardiovascular events, and the major cause of morbidity and mortality in type 2 diabetes is macrovascular disease (MI, stroke, PAD). Aggressive risk factor modification is essential and often more impactful than glucose lowering alone: (1) BP control (<130/80 mmHg) — ACE inhibitors or ARBs are first-line (also provide renoprotection). (2) Statin therapy — moderate-to-high intensity for primary prevention in patients age 40-75 with ASCVD risk factors; reduces CV events by ~25-30% regardless of baseline LDL. (3) Antiplatelet therapy — low-dose aspirin for secondary prevention only; not routinely recommended for primary prevention in diabetics without high CV risk. (4) Smoking cessation. (5) Glycemic control — metformin reduces CV events in overweight patients. (6) SGLT2 inhibitors or GLP-1 receptor agonists — recommended for patients with established CVD or high CV risk, independent of glycemic effect.',
    },
    {
      part: 'other',
      question: 'Why is metformin the first-line pharmacotherapy for type 2 diabetes? What are its contraindications?',
      answer: 'Metformin is first-line because: (1) It effectively lowers glucose by decreasing hepatic gluconeogenesis and improving peripheral insulin sensitivity. (2) Weight-neutral or modest weight loss — important since many patients with type 2 diabetes are overweight. (3) Does not cause hypoglycemia when used as monotherapy. (4) Has demonstrated cardiovascular benefit — UKPDS showed reduced MI and diabetes-related mortality. (5) Affordable and widely available. (6) Long safety record. Contraindications: (1) Renal impairment — eGFR <30 mL/min (risk of lactic acidosis; use reduced dose if eGFR 30-45). (2) Severe liver disease. (3) Acute or chronic metabolic acidosis. (4) Severe infection, dehydration, or hemodynamic instability. (5) IV contrast administration (hold metformin on day of contrast and for 48 hours thereafter if eGFR <60 due to risk of contrast-induced nephropathy).',
    },
  ],
  pe_findings: `**Vital Signs:** BP 140/92 mmHg, P 78 bpm (regular), R 16/min, T 36.8°C, BMI 29 kg/m², SpO₂ 98% on room air

**General:** Middle-aged woman with moderate obesity and central adiposity. Well-appearing, in no distress. Alert, oriented, and cooperative. Conversant throughout the encounter.

**HEENT:** Pupils equal and reactive to light. Fundoscopy: Optic discs sharp and well-defined. Retina normal — no microaneurysms, hemorrhages, exudates, or cotton-wool spots. No diabetic retinopathy detected. Mucous membranes moist. No xanthelasma.

**Neck:** Acanthosis nigricans present — hyperpigmented, velvety plaques on the posterior neck, a classic cutaneous marker of insulin resistance. No lymphadenopathy. No thyromegaly. No carotid bruits. JVP not elevated.

**Cardiovascular:** Regular rate and rhythm. S1 and S2 audible, no murmurs, rubs, or gallops. PMI non-displaced. No heave or thrill. Peripheral pulses: radial, femoral, dorsalis pedis, posterior tibial — all 2+ and symmetric.

**Respiratory:** Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi. Respiratory effort normal.

**Abdomen:** Soft, non-tender, non-distended. No hepatosplenomegaly. No abdominal bruits. Bowel sounds present.

**Skin:** Acanthosis nigricans on posterior neck (as above). No skin ulcers, rashes, or infections. Good skin turgor. No evidence of xanthomas or eruptive xanthomas.

**Feet and Extremities:** Skin intact, no ulcers or calluses. Normal monofilament sensation bilaterally (10-g monofilament felt at all tested sites). Dorsalis pedis and posterior tibial pulses palpable bilaterally. No edema, deformities, or nail changes. No clubbing or cyanosis.

**Neurological:** Alert and oriented ×3. Cranial nerves grossly intact. Deep tendon reflexes 2+ and symmetric. Sensation to light touch and proprioception intact in both lower extremities. Negative Romberg. Normal gait.

**Key findings:** Acanthosis nigricans (insulin resistance marker), obesity with central adiposity (BMI 29), elevated BP (140/92 mmHg), normal fundoscopy and foot exam (no end-organ damage yet).`,
  investigations: `**Initial / Core Tests:**
• Repeat fasting plasma glucose — 138 mg/dL (elevated; ADA diagnostic threshold ≥126 mg/dL) — confirms diabetes after initial abnormal screening
• HbA1C — 7.2% (55 mmol/mol) — diagnostic of diabetes (ADA threshold ≥6.5% or 48 mmol/mol); also provides baseline for monitoring glycemic control
• Lipid panel — LDL 160 mg/dL (elevated; target <100 mg/dL), HDL 38 mg/dL (low; target >50 mg/dL in women), Triglycerides 280 mg/dL (elevated; target <150 mg/dL) — screens for diabetic dyslipidemia, an atherogenic pattern characteristic of insulin resistance
• Serum creatinine / eGFR — 0.8 mg/dL, eGFR >90 mL/min — normal renal function; establishes baseline before metformin initiation
• Urine microalbumin-to-creatinine ratio — 12 mg/g (normal; <30 mg/g) — screens for early diabetic nephropathy
• LFT (ALT, AST, ALP) — within normal limits — screens for non-alcoholic fatty liver disease (NAFLD); establishes baseline for medication safety
• TSH — 2.1 mIU/L (normal) — rules out concomitant thyroid dysfunction (common comorbidity)

**Additional / Confirmatory Tests:**
• ECG — normal sinus rhythm, no ischemic changes — baseline cardiac assessment for comparison
• Ophthalmology referral (dilated fundoscopic exam) — scheduled; no retinopathy expected at this early stage — essential annual screening for diabetic retinopathy
• ASCVD risk calculation — 10-year risk estimated at moderate to high given age (52), hypertension, diabetes, obesity, smoking status, and dyslipidemia — guides statin and antiplatelet therapy decisions

**Further Work-up (if indicated):**
• Diabetes self-management education (DSME) — recommended for all newly diagnosed patients; covers glucose monitoring, medication use, dietary planning, exercise, and sick-day management
• Foot exam (comprehensive) — monofilament testing, pulse palpation, inspection for deformities — annual screening for diabetic peripheral neuropathy and peripheral arterial disease
• Sleep apnea screening — consider if symptoms of OSA (snoring, daytime sleepiness); high prevalence in obese patients with type 2 diabetes
• Hepatitis B and C screening — recommended at diabetes diagnosis (increased risk from glucose monitoring and shared devices)
• Lipid panel and HbA1C — repeat in 3-6 months after initiating therapy to assess response`,
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
