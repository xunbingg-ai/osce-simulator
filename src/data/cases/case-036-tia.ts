import { CaseData } from '@/types';

const case036TIA: CaseData = {
  _id: 'case-036-tia',
  case_id: 'Case 36 - Transient Right-Sided Weakness and Speech Difficulty',
  case_name: 'Transient Right-Sided Weakness and Speech Difficulty',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 37.0°C, P 62 bpm (regular), R 16/min, BP 135/87 mmHg, SpO₂ 98% on room air',
  patient: {
    age: 72,
    gender: 'M',
    occupation: 'not specified — presenting to emergency department',
    chief_complaint: 'Acute onset of right facial droop, right arm weakness, and difficulty speaking',
    presentation: {
      setting: 'Patient is seen in the emergency department 6 hours after acute onset of right facial droop, right arm weakness, and speech difficulty that started while sitting at breakfast.',
      duration: '6 hours, nearly resolved by time of evaluation',
      hpi: {
        onset: 'Sudden — 6 hours ago while sitting at breakfast table',
        site: 'Right face, right arm',
        character: 'Facial droop, arm weakness, speech difficulty',
        radiation: 'No radiation',
        severity: 'Mild to moderate — 4/5 strength in right arm; symptoms nearly resolved',
        time_course: 'Symptoms started acutely and have been improving; nearly resolved within hours',
        exacerbating_factors: [],
        relieving_factors: ['Spontaneous resolution'],
      },
    },
    symptoms: {
      cardiovascular: {
        heart_rate: '62 bpm',
        blood_pressure: '135/87 mm Hg',
        s4_gallop: true,
        regular_rhythm: true,
        no_murmurs: true,
        no_carotid_bruits: true,
      },
      others: {
        right_facial_droop: true,
        right_arm_weakness: '4/5',
        speech_difficulty: true,
        intact_cerebellar: true,
        normal_gait: true,
        able_to_elevate_eyebrows: true,
      },
      negatives: {
        headache: false,
        loss_of_consciousness: false,
        abnormal_involuntary_movements: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Long-standing hypertension', 'Myocardial infarction 4 years ago — treated with percutaneous angioplasty'],
      negatives: ['No atrial fibrillation', 'No diabetes documented', 'No prior stroke'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Aspirin 81 mg daily', 'Metoprolol', 'Simvastatin'],
    },
    social_history: {
      smoking: 'Nonsmoker',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may be unsure what caused the episode and whether it will happen again.',
      concerns: 'Fear of having a stroke, worry about permanent disability or recurrence.',
      expectations: 'Expects a clear explanation of what happened and preventive measures to avoid future events.',
    },
  },
  sp_script: [
    {
      trigger: 'What brought you in today? / What happened? / Why are you in the ED?',
      trigger_zh: '你今天怎么来了？/ 发生什么事了？/ 为什么来急诊？',
      response: "Something happened at breakfast. I was sitting there eating, and suddenly my face... the right side just drooped. I couldn't move my right arm properly, and when I tried to speak, the words wouldn't come out right. It scared me, to be honest.",
      response_zh: '吃早饭的时候出事了。我正坐着吃饭呢，突然我的脸……右边就耷拉下来了。右胳膊也不听使唤了，想说话也说不利索。说实话，真把我吓坏了。',
    },
    {
      trigger: 'Can you describe exactly what happened? / Which side was affected?',
      trigger_zh: '能具体说说发生了什么吗？/ 是哪一边？',
      response: "It was all on the right side. My face drooped on the right — I couldn't smile properly, and my right arm just went weak. The hardest part was the speaking. I knew what I wanted to say but the words just wouldn't come out. It all came on very suddenly, just like that.",
      response_zh: '全都是右边。右边的脸耷拉下来了——笑都笑不了，右胳膊也没劲了。最难受的是说话，我想说什么心里都明白，可话就是说不出来。来得特别突然，一下子就那样了。',
    },
    {
      trigger: 'How long did it last? / When did it start getting better?',
      trigger_zh: '持续了多长时间？/ 什么时候开始好转的？',
      response: "It lasted maybe 20, 30 minutes. Then it started getting better bit by bit. By the time the ambulance came, I could move my arm a little again. It's been about six hours now, and I feel almost back to normal.",
      response_zh: '大概持续了20、30分钟吧。然后就慢慢好起来了。救护车来的时候，胳膊已经能稍微动动了。到现在差不多六个小时了，基本上恢复正常了。',
    },
    {
      trigger: 'What were you doing when it started? / Were you active?',
      trigger_zh: '发病的时候你正在做什么？/ 当时在活动吗？',
      response: "Just sitting at the kitchen table eating breakfast. Nothing unusual. I wasn't stressed or upset — just a normal morning. And then, out of nowhere, this happened.",
      response_zh: '就在厨房坐着吃早饭呢，跟平时一样。既不紧张也不生气，就一个很平常的早上。然后突然就成这样了。',
    },
    {
      trigger: 'Has anything like this ever happened before? / Any similar episodes?',
      trigger_zh: '以前有过类似的情况吗？/ 以前出现过吗？',
      response: "Well... now that you mention it, a few weeks ago my left eye went blurry all of a sudden. It was like somebody pulled a curtain down over it. Lasted maybe two or three minutes, then went away. I didn't think much of it at the time — figured maybe I'd stood up too fast. I didn't see a doctor or anything.",
      response_zh: '嗯……你这么一说，几周前我左眼突然模糊了。就像有人拉了个帘子下来似的。大概持续了两三分钟就好了。当时我也没太在意——以为是自己站起来太猛了。也没去看医生。',
    },
    {
      trigger: 'How do you feel now? / Are you still having symptoms?',
      trigger_zh: '现在感觉怎么样？/ 还有症状吗？',
      response: "I feel mostly normal now. My face feels fine, I can move my arm again. But my voice... I feel like I'm still talking a bit slowly. I have to think about what I want to say more carefully. And my arm still feels a tiny bit weak, like it's not quite at full strength yet.",
      response_zh: '基本上恢复正常了。脸没事了，胳膊也能动了。但是说话……我觉得还是有点慢，得想想才能说。胳膊也还是稍微有点没劲，感觉力气还没完全恢复。',
    },
    {
      trigger: 'Do you have any medical conditions? / Any health problems?',
      trigger_zh: '你有什么病史吗？/ 有什么健康问题？',
      response: "I've had high blood pressure for a long time. And I had a heart attack about four years ago — they put a stent in. Other than that, I've been pretty healthy.",
      response_zh: '高血压好多年了。四年前得过一次心梗——放了支架。其他的都还好。',
    },
    {
      trigger: 'What medications do you take? / Any medicines?',
      trigger_zh: '你在吃什么药吗？/ 用些什么药？',
      response: "I take an aspirin every day — 81 milligrams. I also take metoprolol for my blood pressure, and simvastatin for my cholesterol. I take them every day, without fail.",
      response_zh: '每天吃一片阿司匹林——81毫克的。还有美托洛尔控制血压，辛伐他汀降胆固醇。每天都吃，没断过。',
    },
    {
      trigger: 'Do you smoke? / Drink alcohol? / Any drugs?',
      trigger_zh: '你抽烟吗？/ 喝酒吗？',
      response: "No, I don't smoke. I used to, but I quit years ago. I'm retired now, so I keep busy around the house. I don't really drink much either — maybe a glass of wine on special occasions.",
      response_zh: '不抽。以前抽过，但早就戒了。我现在退休了，在家忙活忙活。酒也不怎么喝——逢年过节喝一杯红酒。',
    },
    {
      trigger: 'Any family history of stroke or heart disease? / Anyone in your family with these?',
      trigger_zh: '家里有人得过中风或者心脏病吗？',
      response: "My father had a stroke when he was 75. It was bad — he was never quite the same after that. That's part of why this scared me so much.",
      response_zh: '我爸75岁的时候得过中风。还挺严重的——之后身体一直没恢复好。这也是为什么这次把我吓得不轻。',
    },
    {
      trigger: 'What do you think happened? / What was going through your mind?',
      trigger_zh: '你觉得这是怎么回事？/ 你当时怎么想的？',
      response: "I honestly don't know. I thought maybe it was just a funny turn. But then I remembered my father, and I got really scared. What if it was a mini-stroke or something? I just want to make sure it doesn't happen again, and if it does, that it's not worse.",
      response_zh: '说实话我也不知道。一开始以为就是哪里不对劲。但后来想起我爸的事，就特别害怕。这会不会是轻微中风什么的？我就想确保别再有下次了，就算有也不能更严重了。',
    },
    {
      trigger: 'What are you worried about? / Any specific concerns?',
      trigger_zh: '你在担心什么？/ 有什么顾虑吗？',
      response: "I'm worried this could be the beginning of something worse. What if it happens again but this time it doesn't go away? I'm scared of having a real stroke that leaves me paralyzed or unable to speak. I've seen what that looks like. I don't want to be a burden on my family.",
      response_zh: '我怕这会不会是更严重问题的开始。万一再犯，但这次好不了了怎么办？我真怕得个真中风，落个半身不遂或者话都说不出来。我见过那样的。我不想拖累家里人。',
    },
    {
      trigger: 'What are you hoping we can do for you? / What do you expect from us?',
      trigger_zh: '你希望我们能帮你做什么？/ 你有什么期望？',
      response: "I want to find out what caused this. And I want to make sure it never happens again — or if it does, that we catch it early and it's not as bad. If there's something you can do to prevent a real stroke, I want to know about it. I'll do whatever it takes.",
      response_zh: '我想查清楚到底是什么原因。而且希望这种事再也不会发生——就算万一再犯，也能早点发现，别那么严重。要是有什么办法能预防真正的中风，我想知道。让我做什么都行。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis and why?',
      answer: 'Transient ischemic attack (TIA), most likely caused by atheroembolism from the left internal carotid artery. The patient had acute onset of right-sided neurologic deficits (facial droop, arm weakness, speech difficulty) that fully resolved within hours, now with nearly complete resolution. He also had a prior episode of transient monocular blindness (amaurosis fugax — transient painless loss of vision in one eye, classically described as "a curtain being pulled down," caused by retinal ischemia from cholesterol emboli originating from the ipsilateral carotid artery). This is a form of TIA in the retinal (carotid) circulation and a classic warning sign for future hemispheric stroke. Risk factors: age 72, longstanding hypertension, prior MI, hyperlipidemia. ABCD2 score = 6 (high risk).',
    },
    {
      part: 'dx',
      question: 'What are the three most common causes of ischemic stroke and TIA?',
      answer: '(1) Carotid atherosclerosis (large-vessel disease) — atheroembolism from carotid artery plaques. (2) Cardioembolism — emboli from the heart due to atrial fibrillation, valvular disease, mural thrombus, or patent foramen ovale. (3) Small-vessel disease (lipohyalinosis) — affecting small lenticulostriate arteries, causing lacunar infarcts.',
    },
    {
      part: 'pe',
      question: 'How would you examine this patient? What specific neurological and cardiovascular findings would you look for?',
      answer: 'Full neurological exam: Cranial nerves (subtle right facial asymmetry — lower face weakness with forehead sparing suggests upper motor neuron lesion), motor exam (right arm 4/5 weakness, subtle drift), sensory exam, coordination (finger-to-nose, heel-to-shin), gait assessment, speech assessment (fluency, naming, repetition). Cardiovascular exam: Blood pressure in both arms (difference >20 mmHg suggests aortic arch pathology), carotid auscultation (bruits indicate stenosis — though absence does not exclude), cardiac auscultation (S4 gallop from hypertensive LVH, murmurs suggesting valvular source of embolism), peripheral pulses, fundoscopy (Hollenhorst plaques — cholesterol emboli in retinal arteries). Key: Look for any residual deficits that may still be present despite reported resolution.',
    },
    {
      part: 'investigations',
      question: 'What is the next step in the care of this patient?',
      answer: 'Perform urgent noncontrast CT of the head to exclude intracranial hemorrhage. Although symptoms have resolved, this is essential before any further management. If CT is negative, the focus shifts to secondary prevention: antiplatelet therapy, statin therapy, blood pressure control, and carotid artery imaging (Doppler ultrasound or MR angiography) to assess for carotid stenosis.',
    },
    {
      part: 'investigations',
      question: 'What is the ABCD2 score and how is it used to stratify stroke risk after TIA?',
      answer: 'ABCD2 score assesses 2-day stroke risk after TIA: Age >=60 (1 point), BP >140/90 (1 point), Clinical features — unilateral weakness (2) or speech disturbance without weakness (1), Duration >=60 min (2) or 10-59 min (1), Diabetes (1). Total score 6-7 = high risk (8% at 2 days), 4-5 = moderate risk (4%), 0-3 = low risk (1%). This patient would score high.',
    },
    {
      part: 'management',
      question: 'What secondary prevention measures should be implemented after a TIA?',
      answer: 'Antiplatelet therapy (aspirin, clopidogrel, or aspirin-dipyridamole), high-intensity statin therapy (to reduce stroke and cardiovascular events), blood pressure control (goal <140/90 mm Hg), smoking cessation, diabetes screening and management, weight management, and evaluation for carotid intervention if significant carotid stenosis is found. For symptomatic patients with ipsilateral carotid artery stenosis >70%, carotid endarterectomy (CEA) is highly recommended and reduces the rate of future stroke. For stenosis 50-69%, benefit is less clear and decision is case-by-case. For stenosis <50%, neither CEA nor stenting is recommended.',
    },
    {
      part: 'other',
      question: 'What are the complications and prognosis after a TIA? What is the risk of subsequent stroke?',
      answer: 'TIA is a medical emergency ("warning stroke") — not a benign event. Stroke risk after TIA: ~5% at 48 hours, ~8% at 7 days, ~10-15% at 90 days (highest in first 48 hours). The ABCD2 score stratifies this risk. Half of all strokes that occur within 90 days of TIA happen in the first 48 hours — hence the urgency of evaluation. Complications: subsequent ischemic stroke (most feared — may cause permanent disability, aphasia, hemiparesis), recurrent TIA, cognitive decline (vascular dementia from cumulative ischemic injury), functional decline. Prognosis: With optimal medical management (antiplatelet, statin, BP control) and carotid intervention when indicated, the 90-day stroke risk can be reduced by ~80%. Long-term prognosis depends on: degree of carotid stenosis, control of vascular risk factors, presence of atrial fibrillation, medication adherence, and lifestyle modifications. Patients with TIA have a 10-year risk of stroke, MI, or vascular death of ~30% — aggressive secondary prevention is essential.',
    },
  ],
  pe_findings: `**Vital Signs**: T 37.0°C, P 62 bpm (regular), R 16/min, BP 135/87 mmHg (equal in both arms), SpO₂ 98% on room air

**General**: Elderly male in no acute distress. Alert, cooperative. Appears calm but slightly anxious about recent events. Speech slightly hesitant but fluent and coherent.

**HEENT**: Pupils equal and reactive to light. Fundoscopy — no Hollenhorst plaques visible bilaterally. Mucous membranes moist.

**Neck**: Supple. No carotid bruits auscultated bilaterally. No lymphadenopathy or thyromegaly. JVP not elevated.

**Respiratory**: Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi. Respiratory effort normal.

**Cardiovascular**: Regular rhythm, rate 62 bpm. S1 and S2 audible. S4 gallop present at apex (consistent with longstanding hypertension and reduced LV compliance). No murmurs or rubs. Peripheral pulses: radial 2+, femoral 2+, dorsalis pedis 2+ and symmetric bilaterally.

**Abdomen**: Soft, non-tender, non-distended. Bowel sounds present. No masses or organomegaly.

**Extremities**: Warm, well-perfused. No clubbing, cyanosis, or edema. No calf tenderness or swelling.

**Neurological**: Cranial nerves — subtle residual right facial asymmetry (mild lower face weakness), able to elevate eyebrows symmetrically (forehead sparing — upper motor neuron pattern). Motor — right arm 4+/5 (nearly resolved), left arm 5/5, both legs 5/5. Sensation — intact to light touch throughout. Coordination — finger-to-nose normal bilaterally, heel-to-shin normal bilaterally. Gait — normal, no ataxia. Speech — slightly hesitant but fluent, no aphasia or dysarthria on formal testing.

**Key findings**: Near-complete resolution of right-sided neurologic deficits. Subtle residual right facial asymmetry, minimal right arm weakness (4+/5), S4 gallop. No carotid bruits. Normal fundoscopy.`,
  investigations: `**Imaging:**
• Non-contrast CT head — No evidence of intracranial hemorrhage. No acute infarct. No mass effect. No early ischemic changes. Normal study.
• Carotid Doppler ultrasound — 75% stenosis of the left internal carotid artery (culprit lesion). Right internal carotid artery shows 30-40% stenosis (mild-moderate). Vertebral arteries normal.
• CT angiography (or MR angiography) if needed — Confirms left ICA stenosis of approximately 75%.

**Cardiac Evaluation:**
• ECG — Sinus rhythm, rate 62 bpm. No atrial fibrillation. No ischemic changes. Normal QRS axis, normal intervals.
• Transthoracic echocardiogram — LVEF 55-60%. No wall motion abnormalities. No intracardiac thrombus. No valvular vegetations. Mild LVH (consistent with longstanding hypertension).
• Telemetry monitoring — No arrhythmias detected during observation.

**Laboratory Studies:**
• CBC — Normal. WBC 7.2 × 10⁹/L, Hb 14.1 g/dL, Platelets 220 × 10⁹/L
• Coagulation profile — PT 12.0s, aPTT 30s, INR 1.0 (normal)
• Basic metabolic panel — Na 138 mmol/L, K 4.2 mmol/L, Urea 5.5 mmol/L, Creatinine 82 μmol/L, eGFR >90 mL/min
• Lipid panel — Total cholesterol 6.4 mmol/L, LDL 4.2 mmol/L (elevated), HDL 1.0 mmol/L, Triglycerides 1.8 mmol/L
• Fasting glucose — 5.6 mmol/L (normal)

**Risk Stratification:**
• ABCD2 Score — Age ≥60 (1) + BP >140/90 (1) + Unilateral weakness (2) + Duration ≥60 min (2) + No diabetes (0) = Total 6 → High risk (8.1% stroke risk at 2 days)

**Impression:** Left carotid territory TIA (amaurosis fugax + right hemispheric symptoms) secondary to left ICA stenosis. High ABCD2 score warrants urgent intervention workup.`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and patient-centered communication',
            'Avoids medical jargon — explains stroke and TIA concepts clearly',
            'Shows empathy for patient\'s anxiety about transient symptoms',
            'Addresses fear of future stroke and provides reassurance about preventive measures',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Right face, right arm — left hemisphere (carotid territory)',
            Onset: 'Sudden — 6 hours ago while sitting at breakfast',
            Character: 'Facial droop, arm weakness (4/5), speech difficulty',
            Radiation: 'Ask about prior amaurosis fugax, vision changes',
            Associated_symptoms: 'Headache, loss of consciousness, seizures, palpitations',
            Time_course: 'Symptoms peaked early and are nearly resolved within hours',
            Exacerbating_relieving: 'Ask about prior episodes, transient symptoms',
            Severity: 'Mild residual — NIH Stroke Scale assessment',
          },
          specific_history: [
            'Prior amaurosis fugax — timing, duration, recovery',
            'Cardiovascular risk factors — hypertension, diabetes, hyperlipidemia',
            'Cardiac history — atrial fibrillation, valvular disease, MI',
            'Medication adherence — aspirin, statin, beta-blocker',
            'Family history of stroke or cardiovascular disease',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies TIA as the diagnosis',
            'Explains need for urgent CT head and vascular imaging',
            'Discusses secondary prevention (antiplatelet, statin, BP control)',
            'Explains role of carotid endarterectomy if significant stenosis found',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may think the episode was a minor event not requiring further investigation',
            concerns: 'Fear of disabling stroke, worry about recurrence and permanent disability',
            expectations: 'Expects urgent evaluation and effective preventive treatment',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case036TIA;
