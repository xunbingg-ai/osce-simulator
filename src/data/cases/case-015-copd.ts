// src/data/cases/case-015-copd.ts
import { CaseData } from '@/types';

const case015COPD: CaseData = {
  _id: 'case-015-copd',
  case_id: 'Case 015 - Shortness of Breath',
  case_name: 'Shortness of Breath',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 97.6°F (36.4°C), HR 96 bpm, R 30/min, BP 135/85 mmHg, SpO₂ 87% on room air',
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
        temperature: '97.6 °F',
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
      trigger: 'How long have you been short of breath? / When did this start?',
      trigger_zh: '喘不上气有多久了？/ 什么时候开始的？',
      response: "Years... I've been slowly getting worse for years. Just thought it was from smoking, you know? But the last few weeks... it's really bad now. I get winded just walking to the bathroom.",
      response_zh: '好几年了……这些年越来越重。我一直觉得是抽烟抽的。但这几个礼拜……真的太难受了。现在去上个厕所都喘得不行。',
    },
    {
      trigger: 'Are you short of breath right now? / Even when you are sitting still?',
      trigger_zh: '现在也觉得喘吗？/ 坐着不动也喘？',
      response: "Yeah... I can barely get a full breath. Even sitting here like this... I have to lean forward to get enough air.",
      response_zh: '嗯……坐在这儿都喘不上来。得这样往前探着身子才能好点。',
    },
    {
      trigger: 'Do you have a cough? / Are you coughing anything up?',
      trigger_zh: '你咳嗽吗？/ 有痰咳出来吗？',
      response: "Every morning... I cough and cough for a long time. Bring up a lot of phlegm. It's yellow-brown, thick stuff. Been like this for... I don't know, years.",
      response_zh: '每天早上都咳……要咳好半天。痰很多，黄褐色的，很稠。这个样子……有好几年了。',
    },
    {
      trigger: 'Has the phlegm changed recently? / Any difference in color or amount?',
      trigger_zh: '最近痰的颜色或者量有变化吗？',
      response: "It's been more yellow lately... and there's more of it. That's one reason I came in. That and... well, I can barely breathe now.",
      response_zh: '最近更黄了……也更多了。这也是我来看看的原因。还有就是……我现在都快喘不上气了。',
    },
    {
      trigger: 'How do you sleep at night? / Can you lie flat in bed?',
      trigger_zh: '晚上睡觉怎么样？/ 能平躺吗？',
      response: "I can't lie down. I have to sleep in my recliner, sitting up. If I try to lie flat, I feel like I'm drowning. Haven't slept in a bed in months.",
      response_zh: '躺不下来。只能坐靠在椅子里睡。一躺平就觉得要淹死了。好几个月没在床上睡过觉了。',
    },
    {
      trigger: 'Do you smoke? / How much do you smoke? / How long have you smoked?',
      trigger_zh: '你抽烟吗？/ 抽多少？/ 抽了多少年了？',
      response: "Yeah... two packs a day since I was 15. That's 86 pack-years, my last doctor told me. I know I should quit. Tried a few times. Can't seem to do it.",
      response_zh: '抽……一天两包，从15岁开始抽的。上次医生跟我说有86包年了。我知道该戒了。试过几次，就是戒不掉。',
    },
    {
      trigger: 'Have you used any inhalers? / Have you been given any medications?',
      trigger_zh: '用过什么药吗？/ 有用过吸入剂吗？',
      response: "They gave me something at urgent care a while back. Some inhaler. I don't remember the name. It helped a little... maybe? I wasn't using it every day though.",
      response_zh: '之前去急诊，他们给我开了个什么吸入的药。不记得名字了。好像有点用……也许吧。但我没有每天都用。',
    },
    {
      trigger: 'Any other medical problems? / Any other health conditions?',
      trigger_zh: '还有其他什么病吗？/ 有其他健康问题吗？',
      response: "No, not really. Just the breathing. Never been in the hospital for this. Never really saw a doctor about it. Just... figured I was getting older.",
      response_zh: '没有。就是喘不上气。没因为这个住过院。也没正经看过医生。就是……觉得自己老了呗。',
    },
    {
      trigger: 'What do you think is causing this? / What do you think is wrong?',
      trigger_zh: '你觉得是什么原因？/ 你自己觉得是什么问题？',
      response: "I figure it's the smoking. All those years of cigarettes finally catching up. But it never bothered me this much before. Lately it's... different. Worse.",
      response_zh: '我觉得是抽烟抽的。抽了这么多年的烟，现在终于找上门了。但以前从来没那么厉害。最近……不一样了。更重了。',
    },
    {
      trigger: 'What worries you most? / Are you afraid of anything? / Any concerns?',
      trigger_zh: '你最担心什么？/ 你在害怕什么吗？',
      response: "I'm scared I'm going to suffocate. That I won't be able to get enough air and I'll just... stop breathing. My wife found me gasping the other night. She made me come today.",
      response_zh: '我怕我会憋死。怕喘不上来气，然后就……不喘了。前几天晚上我老婆发现我喘得不行。她让我来看的。',
    },
    {
      trigger: 'What are you hoping we can do today? / Any allergies to medications?',
      trigger_zh: '你今天希望我们做什么？/ 有药物过敏吗？',
      response: "I just want to be able to breathe again. To sleep lying down. I don't want to be hooked up to a machine... but if that's what it takes... I don't know. No allergies, by the way.",
      response_zh: '我就想能好好喘气。能躺下来睡觉。我不想插着管子……但如果必须那样的话……我也不知道了。没有药物过敏。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis and what are the next diagnostic steps?',
      answer: 'Chronic obstructive pulmonary disease (COPD) with acute exacerbation. Next diagnostic steps: (1) Arterial blood gas (ABG) to assess oxygenation (PaO2) and ventilation (PaCO2) and acid-base status. (2) Chest x-ray to evaluate lung parenchyma and identify triggers (e.g., pneumonia). (3) Spirometry to confirm diagnosis (FEV1/FVC <0.7 is diagnostic) and classify severity by GOLD stage. (4) Pulse oximetry for continuous monitoring.',
    },
    {
      part: 'dx',
      question: 'What is the difference between chronic bronchitis and emphysema?',
      answer: 'Chronic bronchitis: diagnosed clinically — excessive bronchial mucus secretion with productive cough for ≥3 months in at least 2 consecutive years. Patients are often "blue bloaters" (overweight, edematous, cyanotic) due to chronic hypoxemia. Emphysema: diagnosed pathologically — abnormal permanent enlargement of air spaces distal to terminal bronchioles with wall destruction. Patients are often "pink puffers" (thin, ruddy cheeks, pursed-lip breathing). Most COPD patients have elements of both.',
    },
    {
      part: 'pe',
      question: 'On physical examination, what specific findings would you expect in a patient with advanced COPD, and what signs would help differentiate COPD exacerbation from other causes of acute dyspnea?',
      answer: 'Expected COPD findings: Barrel chest (increased AP diameter), accessory muscle use (sternocleidomastoid, intercostals), tripod positioning, pursed-lip breathing, Hoover sign (inward lower rib cage movement during inspiration), hyperresonance to percussion, distant breath sounds, wheezes and rhonchi bilaterally, prolonged expiration, perioral cyanosis. Signs of cor pulmonale (advanced disease): elevated JVP, tender hepatomegaly, ankle edema. Differentiating signs: Heart failure — S3 gallop, crackles, elevated JVP, displaced PMI. Pneumonia — focal crackles, bronchial breath sounds, egophony, fever. Pneumothorax — unilateral hyperresonance, deviated trachea, sudden onset, absent breath sounds on affected side. Pulmonary embolism — acute onset, pleuritic pain, hemoptysis, DVT signs.',
    },
    {
      part: 'investigations',
      question: 'How do you classify COPD severity using spirometry?',
      answer: 'Using post-bronchodilator FEV1 percent predicted (GOLD staging): GOLD 1 (Mild): FEV1 ≥80% predicted. GOLD 2 (Moderate): FEV1 50-79%. GOLD 3 (Severe): FEV1 30-49%. GOLD 4 (Very severe): FEV1 <30%. FEV1/FVC <0.7 is required for diagnosis of airflow obstruction at all stages. Spirometry also shows reduced FEV1/FVC with minimal reversibility after bronchodilators, distinguishing COPD from asthma.',
    },
    {
      part: 'investigations',
      question: 'What is the hallmark spirometric finding in COPD, and how does it differ from restrictive lung disease?',
      answer: 'Hallmark of COPD (obstructive): decreased FEV1/FVC ratio (<0.7) — disproportionate reduction in expiratory flow relative to lung volume. FVC may be normal or reduced. TLC is normal or increased. In restrictive lung disease: FEV1 and FVC are both reduced proportionally, so FEV1/FVC is normal. The diagnostic hallmark is decreased TLC. Obstructive diseases have difficulty getting air out; restrictive diseases have difficulty getting air in.',
    },
    {
      part: 'management',
      question: 'What is the immediate treatment for an acute COPD exacerbation?',
      answer: '(1) Supplemental oxygen — controlled low-flow nasal oxygen or Venturi mask to correct hypoxemia without causing severe hypercapnia. Monitor for CO2 retention. (2) Bronchodilators — inhaled beta-agonists (e.g., albuterol) and anticholinergics (e.g., ipratropium) via nebulizer. (3) Systemic glucocorticoids to accelerate lung function improvement. (4) Antibiotics if infection is suspected (purulent sputum, fever). (5) Consider noninvasive positive pressure ventilation (BiPAP/CPAP) for severe hypercapnia to avoid intubation. (6) Endotracheal intubation and mechanical ventilation if signs of acute respiratory failure.',
    },
    {
      part: 'other',
      question: 'What are the indications for long-term oxygen therapy in COPD?',
      answer: 'Long-term oxygen therapy (>18 hours/day) is indicated for patients with chronic resting hypoxemia: PaO2 ≤55 mm Hg or SaO2 ≤88% on room air. It is the only therapy (along with smoking cessation) proven to reduce mortality in COPD. For patients with PaO2 56-59 mm Hg or SaO2 89% with evidence of pulmonary hypertension, cor pulmonale, or polycythemia, oxygen therapy may also be considered. Use must be continuous (at least 18 h/day) for mortality benefit.',
    },
    {
      part: 'other',
      question: 'What are the complications of COPD?',
      answer: 'Long-term hypoxemia can cause pulmonary hypertension, secondary erythrocytosis, exercise limitation, and impaired mental functioning. Acute exacerbations may lead to respiratory failure requiring mechanical ventilation. Complications of mechanical ventilation include difficulty extubating, ventilator-associated pneumonia, and pneumothorax. Cor pulmonale (right heart failure from pulmonary hypertension) may develop in advanced disease. Only smoking cessation, supplemental oxygen for chronic hypoxemia, and lung volume reduction surgery in selected patients have been shown to alter natural history and reduce mortality.',
    },
  ],
  pe_findings: `**Vital Signs:** T 97.6°F (36.4°C), HR 96 bpm (regular), R 30/min, BP 135/85 mmHg, SpO₂ 87% on room air

**General:** Patient sitting upright in tripod position, leaning forward with arms braced on knees. Using accessory muscles of respiration — sternocleidomastoid and intercostals visibly contracting. Appears in respiratory distress. Perioral cyanosis noted — lips appear blue-tinged. Thin habitus.

**Respiratory:** Barrel chest — increased anteroposterior diameter of chest wall. Hoover sign present — inward movement of lower rib cage during inspiration. Respiratory rate 30/min, labored. Pursed-lip breathing observed. Accessory muscle use prominent. **Palpation:** Chest wall non-tender. Tactile fremitus decreased bilaterally. **Percussion:** Hyperresonant throughout both lung fields. Diaphragmatic excursion decreased bilaterally. **Auscultation:** Breath sounds distant/hyperresonant throughout. Prolonged expiratory phase. Wheezes heard bilaterally on expiration. Rhonchi present — coarse, low-pitched sounds, especially in dependent areas. No crackles. No pleural rub.

**Cardiovascular:** Heart sounds distant but regular. Rate 96 bpm. No murmurs, gallops, or rubs. Jugular venous pressure not elevated.

**Abdomen:** Soft, non-tender, non-distended. No organomegaly. Bowel sounds present.

**Extremities:** No clubbing. No cyanosis of extremities — capillary refill <2 seconds. No lower extremity edema. No calf tenderness.

**Neurological:** Alert and oriented ×3. Mild anxiety noted but appropriate.

**Key findings:** Tripod positioning, barrel chest, accessory muscle use, Hoover sign, perioral cyanosis, tachypnea (30/min), hyperresonance to percussion, distant breath sounds, wheezes and rhonchi bilaterally, prolonged expiration, SpO₂ 87% on room air.`,
  investigations: `**Arterial Blood Gas (ABG) on room air:**
• pH 7.33 (mild respiratory acidosis)
• PaCO₂ 52 mm Hg (elevated — hypercapnia)
• PaO₂ 58 mm Hg (moderate hypoxemia)
• HCO₃⁻ 28 mmol/L (slightly elevated — metabolic compensation)
• SaO₂ 87% (hypoxemia)

Interpretation: Acute-on-chronic respiratory acidosis with moderate hypoxemia — consistent with acute COPD exacerbation in a patient with chronic CO₂ retention.

**Chest X-ray (PA and lateral):**
• Hyperinflation — flattened hemidiaphragms (below anterior 6th rib) and increased retrosternal air space
• Increased AP diameter on lateral view
• Hyperlucent lung fields
• Reduced vascular markings with possible bullae in upper zones
• No focal consolidation, no pneumothorax, no pleural effusion
• Heart size normal — no evidence of pulmonary edema

**Spirometry (post-bronchodilator):**
• FEV₁/FVC: 0.48 (markedly reduced — normal ≥0.70)
• FEV₁: 0.95 L (32% of predicted — GOLD 3, Severe)
• FVC: 1.98 L (55% of predicted)
• Minimal reversibility after bronchodilator (<12% and <200 mL improvement in FEV₁)
• TLC: increased (consistent with hyperinflation)

Interpretation: Severe airflow obstruction with hyperinflation, minimal bronchodilator reversibility — consistent with GOLD 3 COPD.

**Complete Blood Count (CBC):**
• Hb 16.8 g/dL (elevated — secondary erythrocytosis from chronic hypoxemia)
• WBC 11.5 × 10⁹/L (mild leukocytosis — possible acute exacerbation/infection)
• Platelets 280 × 10⁹/L (normal)

**ECG:**
• Normal sinus rhythm at 96 bpm
• Right axis deviation
• P pulmonale (peaked P waves in II, III, aVF)
• No evidence of ischemia`,
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
