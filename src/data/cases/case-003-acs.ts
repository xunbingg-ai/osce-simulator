// src/data/cases/case-003-acs.ts
import { CaseData } from '@/types';

const case003ACS: CaseData = {
  _id: 'case-003-acs',
  case_id: 'Case 003 - Chest Pain — Acute Onset',
  case_name: 'Chest Pain — Acute Onset',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 37.0°C, P 116 bpm, R 22/min, BP 166/102 mmHg, SpO₂ 96% on room air',
  patient: {
    age: 56,
    gender: 'M',
    occupation: 'not specified — presenting to emergency department',
    chief_complaint: 'Chest discomfort',
    presentation: {
      setting: 'Patient comes to the emergency department complaining of chest discomfort that woke him from sleep 3 hours earlier.',
      duration: '3 hours, persistent',
      hpi: {
        onset: 'Woke from sleep 3 hours ago with sudden onset',
        site: 'Retrosternal (central chest)',
        character: 'Severe retrosternal pressure, described as squeezing/heavy',
        radiation: 'No specific radiation documented',
        severity: 'Severe — patient appears uncomfortable and diaphoretic',
        time_course: 'Continuous since onset, not relieved',
        exacerbating_factors: [],
        relieving_factors: ['Not relieved by rest'],
      },
    },
    symptoms: {
      cardiovascular: {
        tachycardia: true,
        heart_rate: '116 bpm',
        blood_pressure: '166/102 mm Hg',
        diaphoresis: true,
        s4_gallop: true,
        murmurs: false,
        rubs: false,
      },
      respiratory: {
        respiratory_rate: '22 breaths/min',
        oxygen_saturation: '96% on room air',
        lung_fields: 'Clear',
      },
      constitutional: {
        discomfort: true,
      },
      negatives: {
        fever: false,
        jvd_elevated: false,
        pulmonary_edema: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Hypercholesterolemia'],
      negatives: ['No prior MI', 'No known diabetes', 'No known hypertension'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None documented — likely statin for hypercholesterolemia'],
    },
    social_history: {
      smoking: '40 pack-year smoking history',
      alcohol: 'Not documented',
      family: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient likely concerned about heart attack given severity of symptoms',
      concerns: 'Fear of serious cardiac event, worried about survival',
      expectations: 'Expects immediate pain relief and medical intervention',
    },
  },
  sp_script: [
    {
      trigger: 'What brought you in today? / What happened? / Why are you in the ED?',
      trigger_zh: '你哪里不舒服？/ 发生什么了？/ 为什么来急诊？',
      response: "I woke up... about three hours ago. This pain in my chest. It just came on, all of a sudden. It's really bad. I've never felt anything like this before.",
      response_zh: '我三个小时前醒过来……胸口突然就疼起来了。特别疼，我以前从来没有过这种感觉。',
    },
    {
      trigger: 'Can you describe the pain? / What does it feel like? / Where exactly?',
      trigger_zh: '能描述一下疼痛吗？/ 是什么感觉？/ 具体在哪个位置？',
      response: "It's right here, in the middle of my chest... like someone's squeezing me, or like there's a heavy weight sitting on me. It's pressure, really heavy pressure. And it won't go away.",
      response_zh: '就在胸口正中间……像有人在使劲挤我的胸口，又像压了一块很重的东西。闷闷的，很重的压迫感。而且一直不下去。',
    },
    {
      trigger: 'Does the pain go anywhere? / Does it spread? / Radiation?',
      trigger_zh: '疼痛有没有放射到其他地方？/ 有没有串到别处？',
      response: "No, I don't think so. It's just... it's right here in the middle. It doesn't really go anywhere else.",
      response_zh: '好像没有。就是……就在正中间这里。没有往别的地方跑。',
    },
    {
      trigger: 'On a scale of 1-10, how bad? / Rate the pain / How severe?',
      trigger_zh: '如果1到10分，你觉得有多疼？/ 疼痛程度怎么样？',
      response: "I'd say it's a 9... maybe a 10. It's the worst pain I've ever had. Nothing makes it better. I tried laying still but it doesn't help.",
      response_zh: '我觉得有9分……可能10分。我这辈子没这么疼过。怎么都不管用。我躺着不动也没用。',
    },
    {
      trigger: 'Were you doing anything when it started? / What were you doing?',
      trigger_zh: '疼痛开始的时候你在做什么？/ 当时在干什么？',
      response: "No, I was just... I was sleeping. It woke me up. I was just laying in bed and then suddenly this pain hit me. I thought maybe it was just indigestion at first, but it just kept getting worse.",
      response_zh: '没有，我就是……在睡觉。疼把我弄醒了。我正躺着，突然就疼起来了。一开始我还以为是吃坏东西了，但越来越严重。',
    },
    {
      trigger: 'Any sweating? / Nausea? / Shortness of breath? / Other symptoms?',
      trigger_zh: '有没有出汗？/ 恶心？/ 喘不上气？/ 还有其他不舒服吗？',
      response: "Yeah, I'm sweating a lot. Look at me, I'm soaked. And I feel a little sick to my stomach... like I might throw up. And it's a bit hard to catch my breath.",
      response_zh: '有，我出了好多汗。你看我衣服都湿了。胃也有点不舒服……有点想吐。呼吸也有点费劲。',
    },
    {
      trigger: 'Have you ever had anything like this before? / Previous chest pain? / Previous heart problems?',
      trigger_zh: '以前有过类似的情况吗？/ 以前胸口疼过吗？/ 有过心脏问题吗？',
      response: "No, never. I've never had chest pain before. I mean, I've always been... I thought I was healthy. I go to work every day. This just doesn't make sense.",
      response_zh: '没有，从来没有。我以前从没胸口疼过。我一直觉得自己……挺健康的。每天照常上班。这事我真想不通。',
    },
    {
      trigger: 'Do you have any medical conditions? / Any health problems? / High blood pressure? / Diabetes?',
      trigger_zh: '你有什么病史吗？/ 有什么健康问题？/ 有高血压或糖尿病吗？',
      response: "They told me my cholesterol is high. That's it. I don't have high blood pressure or diabetes, nothing like that. I'm not on any medicine really, except... I think my doctor gave me something for the cholesterol but I don't always take it.",
      response_zh: '他们说我胆固醇高。就这个。没有高血压糖尿病，都没有。我也没吃什么药，就是……医生好像给我开了降胆固醇的药，但我不是每次都记得吃。',
    },
    {
      trigger: 'Do you smoke? / Drink alcohol? / Any drugs?',
      trigger_zh: '你抽烟吗？/ 喝酒吗？/ 用药物吗？',
      response: "Yeah, I smoke. Been smoking for... maybe 40 years now. About a pack a day, sometimes two. I know I should quit. I don't really drink much and I don't do any drugs.",
      response_zh: '抽，我抽烟。抽了大概……40 年了。一天一包，有时候两包。我知道该戒了。酒不怎么喝，也不碰别的东西。',
    },
    {
      trigger: 'Any family history of heart disease? / Anyone in your family with heart problems?',
      trigger_zh: '家里有没有心脏病的？/ 家人有心脏问题吗？',
      response: "My dad... he had some heart issues when he got older. But he was in his 70s. I'm only 56. I didn't think I'd have to worry about this now.",
      response_zh: '我爸……他年纪大了以后心脏有些问题。但他都70多岁了。我才56。我以为我现在不用操心这种事。',
    },
    {
      trigger: 'What do you think is happening? / What are you worried about? / Any concerns?',
      trigger_zh: '你觉得现在是什么情况？/ 你在担心什么？/ 有什么顾虑？',
      response: "I don't know... I'm scared, honestly. Could this be a heart attack? That's what I keep thinking. Am I going to be okay? I've got a family. Please, I just... I just want the pain to stop.",
      response_zh: '我不知道……说实话我很害怕。这会不会是心脏病？我一直在想这个。我会没事吗？我还有家人。求你了，我……我就是想让这个疼停下来。',
    },
    {
      trigger: 'Any allergies? / Allergic to any medications?',
      trigger_zh: '有药物过敏吗？',
      response: "No, no allergies that I know of. I can take whatever you need to give me for the pain. Please.",
      response_zh: '没有，我不知道有什么过敏。治这个疼需要用什么药你们尽管用。拜托了。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis, and what are your differential diagnoses for this patient? Explain your reasoning for each.',
      answer: 'Most likely: Acute ST-segment elevation myocardial infarction (STEMI). Acute onset severe retrosternal pressure lasting >30 min, unrelieved by rest, with CV risk factors (hypercholesterolemia, 40-pack-year smoking), tachycardia, hypertension, diaphoresis, S4 gallop. ECG would show ST elevations. DDx: (1) Aortic dissection — would expect ripping/tearing pain radiating to back, unequal pulses, widened mediastinum on CXR; (2) Acute pericarditis — pleuritic pain relieved by leaning forward, pericardial rub, diffuse ST elevation; (3) Pulmonary embolism — sudden dyspnea, hypoxia, calf pain/swelling, risk factors; (4) Esophageal spasm — relation to meals, may respond to nitroglycerin.',
    },
    {
      part: 'dx',
      question: 'What are the three components required for diagnosing an acute MI, and how do you differentiate STEMI, NSTEMI, and Unstable Angina?',
      answer: 'Three components: (1) Typical chest pain persisting >30 min, (2) Typical ECG findings (ST elevation or new LBBB), (3) Elevated cardiac biomarkers (troponin I/T, CK-MB). ≥2 of 3 required. Differentiation: STEMI = ST elevation + elevated biomarkers (transmural infarction); NSTEMI = no ST elevation + elevated biomarkers (subendocardial infarction); Unstable Angina = no ST elevation + normal biomarkers (ischemia without necrosis).',
    },
    {
      part: 'pe',
      question: 'What physical examination would you perform on this patient, and what specific signs are you looking for to confirm your diagnosis and rule out differentials?',
      answer: 'Full cardiovascular exam: Vital signs (tachycardia, hypertension), general appearance (diaphoresis, distress), JVP (elevated in RV infarction or tamponade), carotid pulses (unequal in aortic dissection), precordial exam (S4 gallop — reduced LV compliance in ischemia; new murmurs — MR from papillary muscle dysfunction; pericardial rub — pericarditis), lung auscultation (crackles — LV failure/pulmonary edema). Check bilateral arm BP (difference >20mmHg suggests dissection). Check peripheral pulses (unequal in dissection). Lower extremity exam for DVT signs (PE).',
    },
    {
      part: 'investigations',
      question: 'What investigations would you order immediately for this patient? Prioritize by urgency.',
      answer: 'Immediate (minutes): (1) 12-lead ECG — within 10 min of presentation, look for ST elevation ≥1mm in ≥2 contiguous leads, new LBBB; (2) Cardiac biomarkers — high-sensitivity troponin I/T on arrival and at 3-6h; CK-MB if troponin unavailable. Within first hour: (3) CXR — rule out aortic dissection (widened mediastinum), pulmonary edema, alternative causes; (4) CBC, coagulation profile, renal function (before anticoagulation/PCI); (5) Lipid panel, glucose. Bedside echo if available — assess wall motion, valves, pericardial effusion.',
    },
    {
      part: 'investigations',
      question: 'How would you localize the infarct territory on ECG? Describe the coronary anatomy and corresponding ECG leads.',
      answer: 'Inferior (RCA — 80%): ST elevation in II, III, aVF. Often with sinus bradycardia, AV block. Right-sided leads V4R if inferior STEMI suspected → RV infarction. Anterior/Anteroseptal (LAD): ST elevation in V1-V4. Can cause LV dysfunction, cardiogenic shock. Lateral (LCX): ST elevation in I, aVL, V5, V6. Isolated lateral STEMI easily missed. Posterior: ST depression in V1-V2 with tall R waves (reciprocal changes) — use posterior leads V7-V9. Reciprocal ST depression is a useful confirmatory sign.',
    },
    {
      part: 'management',
      question: 'What is your immediate management plan for this patient? Include both acute treatment and reperfusion strategy.',
      answer: 'Acute management (MONA-BASH): Morphine (pain relief — reduces sympathetic drive), Oxygen (only if SpO₂ <90%), Nitroglycerin (if no hypotension, RV infarction, or recent PDE5i use), Aspirin 325mg chewable (immediate), Beta-blockers (early, unless HF/shock/bradycardia), ACE inhibitors (within 24h, especially anterior MI, LV dysfunction), Statin (high-intensity, atorvastatin 80mg), Heparin (anticoagulation — UFH or LMWH). Reperfusion: Primary PCI within 90 min of first medical contact is preferred. If PCI not available within 120 min: fibrinolytic therapy (tenecteplase) if no contraindications. Time is muscle — every 30 min delay increases mortality.',
    },
    {
      part: 'management',
      question: 'What are the indications and absolute contraindications for fibrinolytic therapy in STEMI?',
      answer: 'Indications: Ischemic chest pain, ST elevation ≥1mm in ≥2 contiguous leads (or new LBBB), within 12h of symptom onset, PCI not available within 120 min. Absolute contraindications: Any prior intracranial hemorrhage, active internal bleeding, ischemic stroke within 3 months, known cerebral vascular lesion (AVM, aneurysm), suspected aortic dissection, recent major surgery/trauma (within 3 weeks), severe uncontrolled hypertension (BP >180/110).',
    },
    {
      part: 'other',
      question: 'What are the potential complications of acute MI, categorized by time course?',
      answer: 'Early (<24h): Ventricular arrhythmias (VT/VF — most common cause of pre-hospital death), cardiogenic shock (if >40% LV involved), acute heart failure, heart block (especially inferior MI with RCA occlusion). Days 1-7: Papillary muscle rupture/dysfunction → acute mitral regurgitation, ventricular septal rupture (new holosystolic murmur + hemodynamic collapse), ventricular free wall rupture (usually fatal — tamponade), pericarditis (post-infarction, days 1-3). Late (>2 weeks): Ventricular aneurysm, Dressler syndrome (autoimmune pericarditis — weeks to months), chronic heart failure.',
    },
    {
      part: 'other',
      question: 'What secondary prevention measures would you recommend for this patient after discharge?',
      answer: 'Lifestyle: Smoking cessation (single most effective — reduces events by >50%), cardiac rehabilitation, Mediterranean diet, regular exercise. Medications: Dual antiplatelet therapy (aspirin + ticagrelor/clopidogrel for 12 months post-PCI), high-intensity statin (atorvastatin 80mg), beta-blocker (especially if LV dysfunction), ACE inhibitor/ARB (especially if anterior MI, LVEF <40%), aldosterone antagonist (if LVEF <40% + HF or DM). Monitoring: Screen for depression (~20% post-MI — SSRIs if needed). Consider ICD if LVEF remains <35% at 40 days post-MI despite optimal medical therapy.',
    },
  ],
  pe_findings: `Vital Signs: T 37.0°C, P 116 bpm (regular), R 22/min, BP 166/102 mmHg (equal in both arms), SpO₂ 96% on room air

General: Middle-aged male in visible distress. Diaphoretic — skin clammy and moist. Anxious, guarding chest. Lying still on gurney.

HEENT: Pupils equal and reactive. Mucous membranes moist.

Neck: JVP not elevated — measured at 4 cm H₂O. No carotid bruits. No lymphadenopathy or thyromegaly.

Respiratory: Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi. Respiratory effort mildly increased.

Cardiovascular: Tachycardic, regular rhythm, rate 116. PMI non-displaced. S1 and S2 audible. S4 gallop present at apex (reflecting reduced LV compliance from ischemia). No S3. No murmurs or pericardial rub. Peripheral pulses: radial, femoral, dorsalis pedis — all 2+ and symmetric bilaterally.

Abdomen: Soft, non-tender, non-distended. Bowel sounds present. No masses or organomegaly.

Extremities: Warm, well-perfused. No clubbing, cyanosis, or edema. No calf tenderness or swelling.

Neurological: Alert and oriented ×3. Cranial nerves grossly intact. Moving all four limbs.

Key findings: Tachycardia (116 bpm), hypertension (166/102), S4 gallop, diaphoresis, bilateral equal arm BP, clear lung fields.`,
  investigations: `**Immediate (within 10 minutes):**
• 12-lead ECG — ST-segment elevation ≥2mm in leads V2-V4 (anteroseptal) with reciprocal ST depression in II, III, aVF → consistent with acute anteroseptal STEMI
• High-sensitivity Troponin I — elevated at 2.8 ng/mL (normal <0.04 ng/mL), consistent with myocardial necrosis

**Within First Hour:**
• CBC — WBC 11.2 × 10⁹/L (mild leukocytosis — stress response), Hb 14.8 g/dL, Platelets 245 × 10⁹/L
• Coagulation profile — PT 12.5s, aPTT 28s, INR 1.1 (baseline — before anticoagulation)
• Renal function — Urea 5.2 mmol/L, Creatinine 88 μmol/L, eGFR >90 mL/min (normal — safe for contrast)
• Electrolytes — Na 139 mmol/L, K 4.1 mmol/L (normal — cardiac stability)
• Random glucose — 7.8 mmol/L (mild stress hyperglycemia)
• Lipid panel — Total cholesterol 6.8 mmol/L, LDL 4.9 mmol/L, HDL 0.9 mmol/L, Triglycerides 2.1 mmol/L
• Chest X-ray — Normal cardiac silhouette. No pulmonary edema. Mediastinum not widened. Clear lung fields.

**Bedside Echocardiogram (if available):**
• Hypokinesis of anterior wall and septum. LVEF estimated 45-50%. No significant valvular abnormality. No pericardial effusion.

**Diagnosis confirmed:** Acute anteroseptal ST-segment elevation myocardial infarction (STEMI). Activate cardiac catheterization lab for primary PCI.`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and patient-centered communication',
            'Avoids medical jargon — uses terms patient can understand',
            'Acknowledges patient distress (severe pain, diaphoresis, visible anxiety)',
            'Addresses patient fear of heart attack — "I\'m scared, am I going to be okay?" and reassures calmly',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Retrosternal (central chest)',
            Onset: 'Sudden, woke from sleep 3 hours ago',
            Character: 'Severe pressure/squeezing/heavy — "worst pain ever, 9-10/10"',
            Radiation: 'No radiation — but ask specifically about arm, jaw, neck, back',
            Associated_symptoms: 'Diaphoresis, nausea, mild dyspnea, palpitations, sense of impending doom',
            Time_course: 'Continuous × 3 hours, progressive worsening, not relieved',
            Exacerbating_relieving: 'Not relieved by rest or lying still',
            Severity: '9-10/10',
          },
          cardiovascular_risk_factors: [
            'Smoking — 40 pack-years (major risk factor)',
            'Hypercholesterolemia — duration, statin compliance (intermittent)',
            'No known hypertension or diabetes',
            'Family history of heart disease (father)',
          ],
          rule_out_differentials: [
            'Aortic dissection — check bilateral arm BP, radiation to back, unequal pulses',
            'Acute pericarditis — pleuritic pain, positional relief, pericardial rub',
            'Pulmonary embolism — sudden dyspnea, calf pain/swelling, risk factors',
            'Esophageal spasm/GERD — relation to meals, response to antacids',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies ACS/STEMI as most likely diagnosis with clinical reasoning',
            'Explains need for immediate 12-lead ECG (within 10 min) and serial cardiac biomarkers',
            'Discusses reperfusion options — primary PCI preferred (door-to-balloon ≤90 min) vs fibrinolysis if delay >120 min',
            'Explains importance of time-to-treatment — "time is muscle," every 30 min delay increases mortality',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient fears this is a heart attack — validate: "Given your symptoms, we are taking this very seriously and checking for that right now."',
            concerns: 'Fear of death, worried about family — reassure that a team is working on him and treatments are very effective when given quickly',
            expectations: 'Expects immediate pain relief and intervention — explain the plan step by step: ECG → medications for pain → likely procedure to open the blocked artery',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case003ACS;
