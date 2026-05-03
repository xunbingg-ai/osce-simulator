// src/data/cases/case-015-copd.ts
import { CaseData } from '@/types';

const case015COPD: CaseData = {
  _id: 'case-015-copd',
  case_id: 'Case 015 - Shortness of Breath',
  case_name: 'Shortness of Breath',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 36.4°C, P 96 bpm, R 30/min, BP 135/85 mmHg, SpO₂ 87% on room air',
  patient: {
    age: 58,
    gender: 'M',
    occupation: 'not specified — presents to office',
    chief_complaint: 'Shortness of breath, worsening dyspnea on exertion and at rest',
    presentation: {
      setting: 'Patient comes to the office because of shortness of breath. He has experienced mild dyspnea on exertion for a few years, but it has recently worsened with minimal exercise and now occurs at rest. He spends the night sitting up in a chair trying to sleep.',
      duration: 'Years (chronic), with acute worsening over recent weeks',
      hpi: {
        onset: 'Gradual onset years ago with progressive worsening',
        site: 'Respiratory — shortness of breath',
        character: 'Labored breathing, difficulty reclining, productive cough with yellowish-brown sputum each morning',
        radiation: 'N/A',
        severity: 'Severe — dyspnea at rest, cannot lie flat, using accessory muscles of respiration',
        time_course: 'Chronic for years with acute exacerbation; symptoms have worsened significantly in recent weeks and months',
        exacerbating_factors: ['Minimal exertion', 'Lying flat (orthopnea)'],
        relieving_factors: ['Sitting upright (tripod position)'],
      },
    },
    symptoms: {
      respiratory: {
        dyspnea: 'Worsening — on minimal exertion and at rest',
        cough: 'Productive cough with yellowish-brown sputum every morning throughout the year',
        wheezes: 'Bilaterally',
        rhonchi: 'Bilaterally',
        crackles: 'None',
        accessory_muscle_use: true,
        tripod_position: 'Sitting forward, arms braced on knees',
        barrel_chest: 'Increased anteroposterior diameter of chest wall',
        hoover_sign: 'Inward movement of lower rib cage with inspiration',
      },
      cardiovascular: {
        heart_rate: '96 bpm',
        blood_pressure: '135/85 mm Hg',
        heart_sounds: 'Distant but regular',
        jugular_venous_pressure: 'Normal',
      },
      constitutional: {
        temperature: '36.4 °C',
        cyanosis: 'Perioral cyanosis — lips cyanotic',
      },
      negatives: {
        fever: false,
        chills: false,
        chest_pain: false,
        lower_extremity_edema: false,
        clubbing: false,
      },
    },
    medical_history: {
      chronic_conditions: ['Unknown prior inhaler use — prescribed at urgent care but patient does not recall name'],
      negatives: ['No known heart failure', 'No known diabetes'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Prescribed inhalers at urgent care (names not remembered)'],
    },
    social_history: {
      smoking: 'Two packs per day since age 15 (~86 pack-years)',
      alcohol: 'Does not drink',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient has likely attributed his slowly worsening symptoms to aging or his long-term smoking habit',
      concerns: 'Fear of suffocation/smothering — worried that his breathing will continue to worsen',
      expectations: 'Expects effective treatment to relieve his breathing difficulty and allow him to sleep lying down again',
    },
  },
  sp_script: [
    {
      trigger: 'What brought you in today? / How can I help you? / What is going on?',
      trigger_zh: '今天来看什么？/ 你怎么了？/ 有什么不舒服？',
      response: "I... I can't breathe. It's gotten so much worse. I've been short of breath for years, but now... even sitting here, I feel like I'm suffocating.",
      response_zh: '我……我喘不上气。越来越严重了。我喘了好几年了，但现在……就算坐在这儿，也觉得快要憋死了。',
    },
    {
      trigger: 'Tell me more about this shortness of breath. When did it start? / How long has this been going on?',
      trigger_zh: '详细说说喘不上气的情况。什么时候开始的？/ 持续多久了？',
      response: "Years... I've been slowly getting worse for years. Just thought it was from smoking, you know? But the last few weeks... it's really bad now. I get winded just walking to the bathroom. And even sitting here talking to you, I feel like I can't get enough air.",
      response_zh: '好几年了……这些年越来越重。我一直觉得是抽烟抽的。但这几个礼拜……真的太难受了。现在去上个厕所都喘得不行。就算坐在这儿跟你说话，也觉得气不够用。',
    },
    {
      trigger: 'What does the breathing feel like? / Do you have a cough? / Are you coughing anything up?',
      trigger_zh: '喘不上气是什么感觉？/ 你咳嗽吗？/ 有痰咳出来吗？',
      response: "Every morning... I cough and cough for a long time. Bring up a lot of phlegm. It's yellow-brown, thick stuff. Been like this for... I don't know, years. And my chest feels tight, like there's a band around it. I breathe and it's just... hard work.",
      response_zh: '每天早上都咳……要咳好半天。痰很多，黄褐色的，很稠。这个样子……有好几年了。胸口也觉得紧紧的，像被什么东西勒着。每次喘气都特别……费劲。',
    },
    {
      trigger: 'On a scale of 1-10, how bad is your breathing right now? / How severe is it?',
      trigger_zh: '如果1到10分，你现在喘不上气能打几分？/ 严重到什么程度？',
      response: "Right now? Maybe a 7 or 8... It's bad. I can't take a full deep breath no matter how hard I try. A few weeks ago it was more like a 4 or 5. It's getting worse fast.",
      response_zh: '现在吗？大概7分或8分……很严重。我怎么用力都吸不满一口气。几周前也就四五分。越来越严重了。',
    },
    {
      trigger: 'Any swelling in your ankles or legs? / Have you noticed any weight change? / Any chest pain?',
      trigger_zh: '脚踝或腿有没有肿？/ 体重有变化吗？/ 胸口疼吗？',
      response: "No, no swelling in my legs. And no chest pain either. I haven't really been checking my weight... can't say I've noticed much change. Just the breathing — that's the main thing.",
      response_zh: '没有，腿没有肿。胸口也不疼。体重我没太注意……好像没什么变化。就是喘不上气——这是最主要的。',
    },
    {
      trigger: 'How do you sleep at night? / Can you lie flat in bed?',
      trigger_zh: '晚上睡觉怎么样？/ 能平躺吗？',
      response: "I can't lie down. I have to sleep in my recliner, sitting up. If I try to lie flat, I feel like I'm drowning. Haven't slept in a bed in months. My wife found me gasping for air the other night — that's what finally made me come in.",
      response_zh: '躺不下来。只能坐靠在椅子里睡。一躺平就觉得要淹死了。好几个月没在床上睡过觉了。前几天晚上我老婆发现我喘得不行——这才逼我来看的。',
    },
    {
      trigger: 'Do you have any other medical problems? / Any other health conditions? / Have you been to the hospital for this before?',
      trigger_zh: '你还有其他什么病吗？/ 有什么其他健康问题吗？/ 以前因为这个住过院吗？',
      response: "No, not really. Just the breathing. Never been in the hospital for this. Never really saw a doctor about it. Just... figured I was getting older. I don't have diabetes or heart problems or anything like that.",
      response_zh: '没有。就是喘不上气。没因为这个住过院。也没正经看过医生。就是……觉得自己老了呗。糖尿病、心脏病那些都没有。',
    },
    {
      trigger: 'Have you used any inhalers? / Are you taking any medications? / Any allergies to medications?',
      trigger_zh: '用过什么药吗？/ 你有在吃什么药吗？/ 有药物过敏吗？',
      response: "They gave me something at urgent care a while back. Some inhaler. I don't remember the name. It helped a little... maybe? I wasn't using it every day though. And no, I'm not allergic to anything that I know of.",
      response_zh: '之前去急诊，他们给我开了个什么吸入的药。不记得名字了。好像有点用……也许吧。但我没有每天都用。过敏的话，我知道的没有。',
    },
    {
      trigger: 'Do you smoke? / How much do you smoke? / How long have you smoked? / Do you drink alcohol?',
      trigger_zh: '你抽烟吗？/ 抽多少？/ 抽了多少年了？/ 喝酒吗？',
      response: "Yeah... two packs a day since I was 15. That's 86 pack-years, my last doctor told me. I know I should quit. Tried a few times. Can't seem to do it. I don't drink, never really did.",
      response_zh: '抽……一天两包，从15岁开始抽的。上次医生跟我说有86包年了。我知道该戒了。试过几次，就是戒不掉。酒不喝，从来不喝。',
    },
    {
      trigger: 'Does anyone in your family have breathing problems or lung disease? / Any family history of similar issues?',
      trigger_zh: '你家里有人有呼吸问题或肺病吗？/ 家人有类似情况吗？',
      response: "Not that I know of. My parents didn't have breathing problems. But nobody in my family smoked like I did either. I'm probably the only one who ended up like this.",
      response_zh: '据我所知没有。我父母没有呼吸问题。但家里也没人像我抽这么多烟。可能就我一个人弄成这样了。',
    },
    {
      trigger: 'What do you think is causing this? / What do you think is wrong?',
      trigger_zh: '你觉得是什么原因？/ 你自己觉得是什么问题？',
      response: "I figure it's the smoking. All those years of cigarettes finally catching up. But it never bothered me this much before. Lately it's... different. Worse. Maybe I did some real damage this time.",
      response_zh: '我觉得是抽烟抽的。抽了这么多年的烟，现在终于找上门了。但以前从来没那么厉害。最近……不一样了。更重了。可能这次真的伤到根子了。',
    },
    {
      trigger: 'What worries you most? / Are you afraid of anything? / Any concerns?',
      trigger_zh: '你最担心什么？/ 你在害怕什么吗？',
      response: "I'm scared I'm going to suffocate. That I won't be able to get enough air and I'll just... stop breathing. I'm not ready to go yet. I've got family. I just keep thinking... what if it doesn't get better? What if this is it?",
      response_zh: '我怕我会憋死。怕喘不上来气，然后就……不喘了。我还不想走。我还有家人。我一直在想……要是好不了了怎么办？要是就这样了怎么办？',
    },
    {
      trigger: 'What are you hoping we can do today? / What would you like us to do?',
      trigger_zh: '你今天希望我们做什么？/ 你希望我们怎么帮你？',
      response: "I just want to be able to breathe again. To sleep lying down. I want to wake up and not feel like I'm gasping. I don't know if you can fix years of damage... but at least make it so I can get through the day without feeling like I'm drowning.",
      response_zh: '我就想能好好喘气。能躺下来睡觉。我希望早上醒来不用觉得自己快憋死了。我不知道这么多年的损伤还能不能治……但至少让我能正常过日子，不用天天觉得像要淹死一样。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis for this patient? Explain your reasoning including the relevant clinical features that support your diagnosis.',
      answer: 'Chronic obstructive pulmonary disease (COPD) with acute exacerbation. The patient is a 58-year-old male with an 86-pack-year smoking history presenting with progressive dyspnea on minimal exertion and at rest, chronic productive cough with yellowish-brown sputum, orthopnea requiring sleeping upright in a chair, use of accessory muscles, and perioral cyanosis. SpO₂ is 87% on room air. The chronic progressive course with acute worsening, coupled with the massive smoking history, makes COPD the most likely diagnosis.',
    },
    {
      part: 'dx',
      question: 'What are your differential diagnoses for his acute deterioration, and how would you differentiate them clinically?',
      answer: '(1) Heart failure — look for S3 gallop, crackles, elevated JVP, displaced PMI, and pulmonary edema on CXR. (2) Pneumonia — check for fever, focal crackles, bronchial breath sounds, and infiltrate on CXR. (3) Pulmonary embolism — consider if acute onset dyspnea, pleuritic chest pain, hemoptysis, or DVT risk factors present. (4) Asthma — typically younger age at onset, reversible airflow obstruction, symptom variability, and atopic history. Differentiating features: COPD has gradual onset, fixed airflow limitation, and strong smoking association. Asthma has episodic/reversible symptoms and responds well to bronchodilators.',
    },
    {
      part: 'pe',
      question: 'How would you examine this patient? What specific physical findings are you looking for, and what signs would help confirm your diagnosis or suggest an alternative cause?',
      answer: 'General inspection: tripod positioning, accessory muscle use, pursed-lip breathing, perioral cyanosis, barrel chest, Hoover sign (inward lower rib cage movement during inspiration). Vital signs: tachypnea, low SpO₂. Chest: hyperresonance to percussion, decreased diaphragmatic excursion, distant breath sounds, prolonged expiration, wheezes and rhonchi bilaterally. Cardiovascular: distant heart sounds, look for signs of cor pulmonale (elevated JVP, hepatojugular reflux, ankle edema). Differentiating signs: S3 gallop/crackles suggest heart failure; focal crackles/egophony suggest pneumonia; asymmetrical findings suggest pneumothorax or effusion.',
    },
    {
      part: 'investigations',
      question: 'What investigations would you order for this patient? Prioritize by urgency and explain your rationale for each test.',
      answer: 'Immediate: (1) Arterial blood gas (ABG) — assess oxygenation (PaO₂), ventilation (PaCO₂), and acid-base status to determine severity and need for respiratory support. (2) Chest X-ray (PA and lateral) — evaluate for pneumonia, pneumothorax, bullae, or heart failure as triggers or mimics. (3) Complete blood count — check for leukocytosis suggesting infection; elevated Hb suggests secondary erythrocytosis from chronic hypoxemia. Within 24-72 hours: (4) Spirometry (post-bronchodilator) — confirm diagnosis (FEV₁/FVC <0.7) and classify GOLD stage. (5) ECG — assess for right heart strain (P pulmonale, right axis deviation). (6) Sputum culture if purulent sputum to guide antibiotic therapy.',
    },
    {
      part: 'investigations',
      question: 'How would you interpret the ABG results and spirometry findings? What GOLD stage does this patient likely have?',
      answer: 'ABG on room air: pH 7.33 (mild respiratory acidosis), PaCO₂ 52 mmHg (elevated — hypercapnia), PaO₂ 58 mmHg (moderate hypoxemia), HCO₃⁻ 28 mmol/L (slightly elevated — metabolic compensation). Pattern: acute-on-chronic respiratory acidosis. Spirometry (post-bronchodilator): FEV₁/FVC 0.48 (<0.70 — obstructive pattern), FEV₁ 32% of predicted — consistent with GOLD 3 (Severe) COPD. Minimal bronchodilator reversibility (<12% and <200 mL improvement) — this distinguishes COPD from asthma. TLC increased (hyperinflation).',
    },
    {
      part: 'management',
      question: 'How would you manage this patient during this acute exacerbation? Outline your immediate and short-term management plan.',
      answer: 'Immediate: (1) Controlled supplemental oxygen — titrate to target SpO₂ 88-92% (avoid excessive O₂ which can worsen hypercapnia by reducing hypoxic drive). (2) Bronchodilators — inhaled short-acting beta-agonist (albuterol) combined with anticholinergic (ipratropium) via nebulizer. (3) Systemic corticosteroids — prednisone 40 mg daily for 5 days to accelerate recovery and reduce relapse risk. (4) Antibiotics — indicated given purulent sputum (yellowish-brown) and suspected infection; consider amoxicillin-clavulanate or doxycycline. (5) Noninvasive positive pressure ventilation (BiPAP) if pH <7.35 with PaCO₂ >45 despite initial therapy. (6) Monitor for deterioration — intubation if worsening acidosis, decreased consciousness, or hemodynamic instability.',
    },
    {
      part: 'management',
      question: 'What is your long-term management plan for this patient? Include smoking cessation strategies and maintenance therapy.',
      answer: 'Smoking cessation is the single most effective intervention — counsel, offer nicotine replacement therapy (patches/gum) or pharmacotherapy (varenicline/bupropion), and arrange follow-up. Maintenance pharmacotherapy: long-acting bronchodilators — LAMA (tiotropium) plus LABA (salmeterol/formoterol) combination. Inhaled corticosteroids (ICS) may be added if frequent exacerbations (≥2/year) or eosinophilic phenotype. Pulmonary rehabilitation — exercise training, education, and nutritional counseling. Vaccinations — annual influenza vaccine, pneumococcal vaccine (PCV20), and COVID-19 vaccine. Long-term oxygen therapy (>18 h/day) if PaO₂ ≤55 mmHg or SpO₂ ≤88% at rest (only therapy proven to reduce mortality in advanced COPD).',
    },
    {
      part: 'other',
      question: 'What are the indications for long-term oxygen therapy in COPD, and what complications would you monitor for in advanced disease?',
      answer: 'Long-term oxygen therapy (>18 hours/day) is indicated for chronic resting hypoxemia: PaO₂ ≤55 mmHg or SaO₂ ≤88% on room air. It is the only therapy (along with smoking cessation) proven to reduce mortality in COPD. For patients with PaO₂ 56-59 mmHg or SaO₂ 89% with evidence of pulmonary hypertension, cor pulmonale, or polycythemia, oxygen therapy may also be considered. Complications of advanced COPD include: pulmonary hypertension and cor pulmonale (right heart failure), secondary erythrocytosis, acute exacerbations leading to respiratory failure, ventilator-associated complications, and increased risk of lung cancer.',
    },
    {
      part: 'other',
      question: 'What is the role of pulmonary rehabilitation and surgery in COPD management?',
      answer: 'Pulmonary rehabilitation is a cornerstone of COPD management — it improves exercise capacity, reduces dyspnea, decreases hospitalizations, and improves quality of life. Components include exercise training, education on self-management, nutritional counseling, and psychosocial support. Surgical options for selected patients: lung volume reduction surgery (LVRS) — for upper lobe emphysema with low exercise capacity after rehabilitation; bullectomy — for giant bullae causing compression of adjacent lung; lung transplantation — for selected very severe (GOLD 4) patients who fail maximal medical therapy.',
    },
  ],
  pe_findings: `**Vital Signs:** T 36.4°C, P 96 bpm (regular), R 30/min, BP 135/85 mmHg, SpO₂ 87% on room air

**General:** Patient sitting upright in tripod position, leaning forward with arms braced on knees. Using accessory muscles of respiration — sternocleidomastoid and intercostals visibly contracting. Appears in respiratory distress. Perioral cyanosis noted — lips appear blue-tinged. Thin habitus.

**HEENT:** Pupils equal and reactive to light. Mucous membranes dry. No pallor or jaundice.

**Neck:** Trachea midline. No jugular venous distension. No cervical lymphadenopathy. No thyromegaly. No carotid bruits.

**Respiratory:** Barrel chest — increased anteroposterior diameter of chest wall. Hoover sign present — inward movement of lower rib cage during inspiration. Respiratory rate 30/min, labored. Pursed-lip breathing observed. Accessory muscle use prominent. Palpation: Chest wall non-tender. Tactile fremitus decreased bilaterally. Percussion: Hyperresonant throughout both lung fields. Diaphragmatic excursion decreased bilaterally. Auscultation: Breath sounds distant/hyperresonant throughout. Prolonged expiratory phase. Wheezes heard bilaterally on expiration. Rhonchi present — coarse, low-pitched sounds, especially in dependent areas. No crackles. No pleural rub.

**Cardiovascular:** Heart sounds distant but regular. Rate 96 bpm. No murmurs, gallops, or rubs. Jugular venous pressure not elevated. No hepatojugular reflux.

**Abdomen:** Soft, non-tender, non-distended. No organomegaly. Bowel sounds present.

**Extremities:** No clubbing. No cyanosis of extremities — capillary refill <2 seconds. No lower extremity edema. No calf tenderness or swelling.

**Skin:** Warm to touch. No rashes, lesions, or jaundice.

**Neurological:** Alert and oriented ×3. Mild anxiety noted but appropriate. No asterixis.

**Key findings:** Tripod positioning, barrel chest, accessory muscle use, Hoover sign, perioral cyanosis, tachypnea (30/min), hyperresonance to percussion, distant breath sounds, wheezes and rhonchi bilaterally, prolonged expiration, SpO₂ 87% on room air.`,
  investigations: `**Initial / Core Tests:**
• Arterial Blood Gas (ABG) on room air — pH 7.33, PaCO₂ 52 mmHg (elevated), PaO₂ 58 mmHg (moderate hypoxemia), HCO₃⁻ 28 mmol/L, SaO₂ 87% — acute-on-chronic respiratory acidosis with moderate hypoxemia; guides need for ventilation support
• Chest X-ray (PA and lateral) — hyperinflation (flattened hemidiaphragms, increased retrosternal air space), hyperlucent lung fields, reduced vascular markings with possible bullae in upper zones; no focal consolidation, no pneumothorax, no pleural effusion — rules out pneumonia/pneumothorax, confirms hyperinflation
• Complete Blood Count — Hb 16.8 g/dL (elevated — secondary erythrocytosis from chronic hypoxemia), WBC 11.5 × 10⁹/L (mild leukocytosis — possible acute exacerbation/infection), Platelets 280 × 10⁹/L (normal)
• ECG — normal sinus rhythm at 96 bpm, right axis deviation, P pulmonale (peaked P waves in II, III, aVF); no evidence of ischemia — assesses for right heart strain

**Additional / Confirmatory Tests:**
• Spirometry (post-bronchodilator) — FEV₁/FVC 0.48 (markedly reduced; normal ≥0.70), FEV₁ 0.95 L (32% of predicted — GOLD 3 Severe), FVC 1.98 L (55% of predicted), minimal reversibility (<12% and <200 mL improvement in FEV₁), TLC increased — confirms severe airflow obstruction with hyperinflation, distinguishes COPD from asthma
• Sputum culture and Gram stain — sent for microbiological analysis to identify bacterial pathogen (if purulent) and guide antibiotic selection

**Further Work-up (if indicated):**
• Alpha-1 antitrypsin level — indicated if early-onset emphysema (<45 years), minimal smoking history, or family history of emphysema; low level suggests AAT deficiency as underlying cause
• High-resolution CT chest — quantifies emphysema extent, evaluates for bullae, and screens for bronchogenic carcinoma (high-risk smoker)
• Echocardiogram — if signs of cor pulmonale (elevated JVP, edema, right ventricular heave) to assess right ventricular function and pulmonary artery pressure
• 6-minute walk test — functional assessment for pulmonary rehabilitation planning`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          adequate: '2-3 marks',
          outstanding: '4 marks',
          elements: [
            'Polite introduction and calm approach for patient in respiratory distress',
            'Avoids medical jargon — explains COPD, oxygen therapy, and inhalers in accessible terms',
            'Shows empathy for the frightening experience of breathlessness',
            'Addresses patient distress and anxiety about inability to breathe',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Respiratory — shortness of breath, cough',
            Onset: 'Gradual over years, acute worsening over weeks',
            Character: 'Labored breathing, productive cough (yellowish-brown sputum), orthopnea',
            Associated_symptoms: 'Wheezing, sputum production (color, volume, consistency), fever, chest pain, hemoptysis, weight loss, ankle swelling',
            Time_course: 'Chronic with acute exacerbation',
            Exacerbating_relieving: 'Worse with exertion, lying flat; better sitting upright, tripod position',
            Severity: 'Severe — dyspnea at rest, orthopnea, accessory muscle use, perioral cyanosis',
          },
          specific_history: [
            'Smoking history — quantify pack-years, current smoking status, readiness to quit',
            'Alpha-1 antitrypsin deficiency — family history, early-onset emphysema without smoking',
            'Occupational exposures — dust, fumes, chemicals',
            'Prior exacerbations — frequency, hospitalizations, intubations',
            'Home medications — inhalers, oxygen use, compliance',
            'Comorbidities — heart failure, diabetes, osteoporosis, depression',
            'Vaccination history — influenza, pneumococcal',
          ],
          rule_out_differentials: [
            'Heart failure — S3 gallop, crackles, elevated JVP, pulmonary edema on CXR',
            'Asthma — reversible airflow obstruction, responds to bronchodilators, younger age',
            'Pneumonia — fever, infiltrate on CXR, acute onset',
            'Bronchogenic carcinoma — hemoptysis, weight loss, focal lesion on CXR',
            'Pulmonary embolism — acute onset dyspnea, pleuritic chest pain, DVT risk factors',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies COPD with acute exacerbation as most likely diagnosis',
            'Explains need for ABG, CXR, and spirometry for diagnosis and severity assessment',
            'Discusses GOLD stage classification and staging-based treatment',
            'Outlines acute management — oxygen, bronchodilators, steroids, antibiotics',
            'Addresses smoking cessation as the single most effective long-term intervention',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may attribute worsening symptoms to aging or long-term smoking; may not fully understand COPD as a progressive disease',
            concerns: 'Fear of suffocation and progressive decline — worried about being unable to breathe and needing a machine to breathe',
            expectations: 'Expects immediate relief of dyspnea and a clear plan to manage the condition long-term',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case015COPD;
