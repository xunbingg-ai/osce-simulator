import { CaseData } from '@/types';

const case054IronDeficiencyAnemia: CaseData = {
  _id: 'case-054-iron-deficiency-anemia',
  case_id: 'Case 054 - Increasing Fatigue and Exercise Intolerance',
  case_name: 'Increasing Fatigue and Exercise Intolerance',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 37.0°C, P 96 bpm, R 18/min, BP 118/70 mmHg',
  patient: {
    age: 52,
    gender: 'M',
    occupation: 'not specified — presents to the office',
    chief_complaint: 'Increasing fatigue for 4-5 months',
    presentation: {
      setting: 'A healthy 52-year-old man presents to the office complaining of increasing fatigue for the past 4 to 5 months. He exercises daily and has noticed shortness of breath while jogging.',
      duration: '4-5 months, progressive',
      hpi: {
        onset: 'Gradual onset over 4-5 months',
        site: 'Generalized — fatigue and exertional dyspnea',
        character: 'Progressive fatigue and shortness of breath with exercise',
        radiation: 'N/A',
        severity: 'Moderate — interferes with daily exercise routine',
        time_course: 'Progressive over 4-5 months',
        exacerbating_factors: ['Exercise (jogging)'],
        relieving_factors: ['Rest'],
      },
    },
    symptoms: {
      constitutional: {
        fatigue: 'Progressive for 4-5 months',
        weight_loss: 'A few pounds intentional with diet and exercise',
      },
      respiratory: {
        dyspnea_on_exertion: 'While jogging',
        denies_orthopnea: true,
        denies_paroxysmal_nocturnal_dyspnea: true,
      },
      cardiovascular: {
        systolic_ejection_murmur: true,
        denies_palpitations: true,
        denies_ankle_swelling: true,
      },
      others: {
        gastrointestinal: {
          abdominal_pain: 'Vague left-sided abdominal pain off and on for a few months, unrelated to food',
          denies_bowel_changes: true,
          denies_melena: true,
          denies_hematochezia: true,
          denies_nausea_vomiting: true,
        },
        musculoskeletal: {
          joint_pain: 'Occasional — uses over-the-counter ibuprofen',
        },
      },
      negatives: {
        fever: false,
        chills: false,
        orthopnea: false,
        paroxysmal_nocturnal_dyspnea: false,
        ankle_swelling: false,
        melena: false,
        hematochezia: false,
        lymphadenopathy: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No chronic medical conditions', 'Generally healthy'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Over-the-counter ibuprofen frequently for joint pain'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Not documented',
    ice: {
      ideas: 'Patient may attribute fatigue to aging or overexertion from daily exercise',
      concerns: 'Worried that progressive fatigue and shortness of breath may signal a serious underlying condition',
      expectations: 'Expects explanation for worsening exercise tolerance and a treatment plan',
    },
  },
  sp_script: [
    {
      trigger: 'What brought you in today? / What happened? / Why are you here?',
      trigger_zh: '今天是什么原因来就诊？/ 发生什么了？/ 为什么来这里？',
      response: "Well, I've always been healthy — I exercise every day, eat right, take care of myself. But for the past 4 or 5 months I've been getting more and more tired. I just can't keep up my routine like I used to. I figured I should get it checked out.",
      response_zh: '我一直都很健康——每天锻炼、饮食均衡、很注意保养身体。但是这四五个月以来越来越累，没法像以前那样坚持锻炼了。我觉得还是来检查一下比较好。',
    },
    {
      trigger: 'Tell me more about the fatigue. How is it affecting your daily life? / Describe how tired you feel.',
      trigger_zh: '详细说一下疲劳的情况。对你的日常生活有什么影响？/ 描述一下有多累。',
      response: "I used to run 5 miles every day, no problem. Now I get winded after half a mile. Half a mile! I have to stop and catch my breath. I'm a fit guy — this is not normal for me. It's really frustrating.",
      response_zh: '我以前每天跑5英里完全没问题。现在跑半英里就开始喘了。半英里！得停下来喘口气。我一直很健壮——这对我来说太不正常了。真的很郁闷。',
    },
    {
      trigger: 'When did this start? / How long has this been going on? / Was it gradual or sudden?',
      trigger_zh: '什么时候开始的？/ 这种情况持续多久了？/ 是慢慢出现的还是突然出现的？',
      response: "It came on gradually. Looking back, I'd say about 4 or 5 months ago I started noticing I was more tired than usual after my runs. But I just pushed through it, figured I was getting older. But it's been getting progressively worse. Now I can barely jog without getting winded.",
      response_zh: '是慢慢出现的。回想起来，大概四五个月前开始注意到跑步后比平时更累。但我一直咬牙坚持，觉得可能是年纪大了。可是越来越严重了，现在稍微一跑就喘。',
    },
    {
      trigger: 'What about shortness of breath? When does it happen? / Do you get short of breath at rest or just with exercise?',
      trigger_zh: '气喘的情况呢？什么时候会气喘？/ 休息的时候也喘还是只有运动的时候喘？',
      response: "Just when I exercise. At rest I'm absolutely fine. I can sit at my desk all day no problem. It's only when I try to run or exert myself that I notice it. That's why I thought maybe I was just pushing too hard for my age.",
      response_zh: '只有运动的时候才会。休息的时候完全正常。在办公室坐一整天都没问题。只有跑步或者用力的时候才会觉得喘。所以我还以为是自己年纪大了运动过量了。',
    },
    {
      trigger: 'Do you have any other symptoms? / Any pain or discomfort anywhere?',
      trigger_zh: '还有其他症状吗？/ 有哪里疼痛或不舒服吗？',
      response: "I get some joint pain now and then — my knees mostly — and I take ibuprofen for it. That's been going on for a while. Oh, and I've had this vague pain on my left side, in my belly area, on and off. Nothing terrible, just comes and goes.",
      response_zh: '我偶尔会有关节痛——主要是膝盖——会吃布洛芬。这个情况有段时间了。另外左边肚子偶尔会有隐隐的疼痛，时好时坏，不算严重。',
    },
    {
      trigger: 'How often do you take ibuprofen? / Can you tell me about your ibuprofen use?',
      trigger_zh: '你多久吃一次布洛芬？/ 能说说你吃布洛芬的情况吗？',
      response: "Pretty much every day for the past year, I'd say. I take a couple of pills when my knees bother me, which is almost daily. I buy the over-the-counter kind, 200 mg tablets. Sometimes I take 2 or 3 at a time. I didn't think it was a big deal — it's just ibuprofen, you can get it anywhere.",
      response_zh: '过去一年基本上每天都在吃。膝盖不舒服的时候就吃几片，几乎天天都吃。我买的是非处方的，200毫克一片。有时候一次吃两三片。我觉得没什么大不了的——不就是布洛芬嘛，哪里都能买到。',
    },
    {
      trigger: 'Tell me about this abdominal pain. / What does the abdominal pain feel like? / When does it happen?',
      trigger_zh: '说说肚子疼的情况。/ 肚子疼是什么感觉？/ 什么时候会疼？',
      response: "It's a dull ache on my left side, kind of vague. It comes and goes, not really related to eating or anything. Sometimes I notice it, sometimes I don't. It doesn't keep me up at night or anything. I figured it was probably just gas or muscle strain from exercising.",
      response_zh: '左边隐隐作痛，位置不太明确。时好时坏，跟吃饭什么的没什么关系。有时候能感觉到，有时候又没感觉。不会疼到睡不着觉。我以为可能就是胀气或者运动拉伤了。',
    },
    {
      trigger: 'Have you noticed any blood in your stool? / Any dark or tarry stools? / Any rectal bleeding?',
      trigger_zh: '大便里有血吗？/ 有没有黑便或柏油样便？/ 有便血吗？',
      response: "No, I haven't seen any blood. My bowel movements have been pretty normal — regular, no pain. I always check because my father had colon cancer, so I've been careful about that. Everything looks normal to me.",
      response_zh: '没有，我没有看到血。大便一直很正常——规律，也不痛。我一直会注意这个，因为我父亲得过结肠癌，所以我在这方面一直很小心。看起来都正常。',
    },
    {
      trigger: 'Tell me about your diet. / What do you typically eat? / Do you eat meat?',
      trigger_zh: '说说你的饮食习惯。/ 你一般吃什么？/ 吃肉吗？',
      response: "I eat a balanced diet. I'm not a vegetarian — I eat meat, chicken, fish. Plenty of vegetables. I try to eat healthy. I don't think my diet is the issue.",
      response_zh: '我饮食挺均衡的。不是素食主义者——吃肉、鸡肉、鱼，蔬菜也吃很多。我尽量吃得健康。我觉得饮食应该不是问题。',
    },
    {
      trigger: 'Any past medical problems? / Have you had any surgeries or chronic conditions? / Do you have any other medical conditions?',
      trigger_zh: '之前有过什么病吗？/ 做过手术或者有慢性病吗？/ 还有其他病史吗？',
      response: "Nothing. I've always been healthy. No surgeries, no chronic conditions, no hospitalizations. I don't even go to the doctor regularly because there's never been a reason to. That's why this whole thing is bothering me — I've never had problems before.",
      response_zh: '没有。我一直很健康。没做过手术，没有慢性病，也没住过院。我平时连医院都不怎么去，因为从没什么毛病。所以这次才让我很困扰——以前从来没出过问题。',
    },
    {
      trigger: 'Any family history of medical problems? / Does anyone in your family have similar issues? / Any family history of cancer or blood disorders?',
      trigger_zh: '家里人有什么病史吗？/ 家里有人有类似的问题吗？/ 家里人得过癌症或血液病吗？',
      response: "Well, my father had colon cancer when he was 68. He was treated and did well, but it was a scary time for our family. That's why I mentioned I'm careful about checking my stool. My mother is still alive, healthy. No one else in the family has had anything like this.",
      response_zh: '我父亲68岁的时候得了结肠癌。治疗后恢复得不错，但那段时间我们全家都很害怕。所以我刚才说我会注意观察大便。我母亲还在，身体不错。家里其他人没有类似的情况。',
    },
    {
      trigger: 'What do you think might be going on? / What are you worried about? / What do you think is causing your symptoms?',
      trigger_zh: '你觉得可能是什么问题？/ 你担心是什么？/ 你觉得是什么原因引起的？',
      response: "I honestly thought I was just getting older — maybe I was overdoing it with the running. But it's gotten to the point where I can't ignore it. Part of me is worried it might be something serious, you know? Given my father's history... I don't want to jump to conclusions, but I can't help wondering.",
      response_zh: '说实话我以为是年纪大了——可能跑步太过了。但是现在已经严重到没法忽视了。我也有点担心会不会是什么严重的病，你知道的。考虑到我父亲的情况……我不想乱猜，但是忍不住会想。',
    },
    {
      trigger: 'What are you hoping we can do today? / Is there anything else you want to ask me? / What do you expect from this visit?',
      trigger_zh: '你今天希望我们做什么？/ 你还有什么想问我吗？/ 你希望这次就诊能达到什么效果？',
      response: "I just want to get back to my normal self. I want to run 5 miles again without getting winded. If there's something wrong, I want to know what it is and get it treated. Whatever tests you need to do, I'm ready. I just want answers.",
      response_zh: '我只想恢复以前的状态。我想重新跑5英里而不气喘。如果真的有问题，我想知道是什么，然后治好它。需要做什么检查我都愿意做。我只想找到答案。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis and why?',
      answer: 'Iron-deficiency anemia secondary to chronic blood loss. The patient has microcytic anemia (Hgb 8.2 g/dL) with pallor on examination, regular NSAID use (ibuprofen) which can cause erosive gastritis, and absent other causes of anemia. In a 52-year-old man, iron-deficiency anemia indicates GI tract blood loss until proven otherwise.',
    },
    {
      part: 'dx',
      question: 'What are the risk factors for iron-deficiency anemia in this patient? What is the significance of his NSAID use and family history?',
      answer: 'Risk factors: (1) Chronic NSAID use — daily ibuprofen for the past year can cause erosive gastritis and chronic microscopic GI bleeding. (2) Age 52 — colon cancer risk increases after age 50. (3) Family history of colon cancer in his father at age 68 — increases his personal risk. (4) Iron-poor diet is less likely given his meat intake. In men and postmenopausal women, iron-deficiency anemia from GI blood loss is the rule — NSAID-induced gastritis and colon cancer must both be considered. NSAIDs can cause both upper GI (gastric erosions/ulcers) and lower GI (colonic) bleeding.',
    },
    {
      part: 'pe',
      question: 'How would you examine this patient? What specific signs of anemia would you look for on physical examination?',
      answer: 'General: assess pallor — conjunctival pallor (most reliable), pale mucous membranes, palmar crease pallor, nail bed pallor. Vital signs: tachycardia (compensatory), normal BP to slightly low. Skin: pallor, koilonychia (spoon nails — pathognomonic for chronic iron deficiency), brittle nails. CV: systolic ejection murmur at left upper sternal border (flow murmur from increased cardiac output in anemia), tachycardia. Abdomen: palpate for masses, organomegaly, tenderness. Left lower quadrant may have vague tenderness. No hepatosplenomegaly expected. Rectal exam: digital rectal exam for masses, guaiac testing of stool for occult blood — this is critical. This patient has guaiac-positive brown stool (occult blood — key finding despite no visible blood per patient).',
    },
    {
      part: 'investigations',
      question: 'What is your next diagnostic step?',
      answer: 'Analyze the complete blood count (CBC), particularly the mean corpuscular volume (MCV), to determine if the anemia is microcytic, normocytic, or macrocytic. Also assess the leukocyte count and platelet count. If microcytic, confirm with iron studies: serum ferritin, total iron-binding capacity (TIBC), and serum iron.',
    },
    {
      part: 'investigations',
      question: 'How do you differentiate iron-deficiency anemia from other microcytic anemias? What additional workup is needed in this patient?',
      answer: 'Iron-deficiency anemia: low ferritin (<15 mcg/L), high TIBC (>360 mcg/dL), low saturation (<10%). Anemia of chronic disease: normal/high ferritin, low TIBC, low saturation. Thalassemia: normal ferritin, normal TIBC, normal/high saturation, abnormal hemoglobin electrophoresis. Sideroblastic anemia: normal/high ferritin, normal TIBC, normal/high saturation, ringed sideroblasts on bone marrow biopsy. For this patient: CBC — Hb 8.2 g/dL, MCV 72 fL (microcytic), RDW elevated (marked anisocytosis). Iron studies — serum iron low, ferritin 8 ng/mL (very low), TIBC elevated, transferrin saturation 6%. Peripheral smear — microcytic hypochromic RBCs, pencil cells. FOBT positive. Additional workup: colonoscopy (age 52 + IDA + family history + occult blood) and upper endoscopy (given NSAID use).',
    },
    {
      part: 'management',
      question: 'What is the treatment for iron-deficiency anemia?',
      answer: 'Oral ferrous sulfate 325 mg two to three times daily (130-195 mg elemental iron). Correction occurs within 6 weeks, but therapy should continue for at least 6 months to replenish iron stores. Side effects include constipation, nausea, and abdominal cramping. Parenteral iron is indicated for malabsorption or intolerance. Most importantly, the underlying cause of iron loss must be identified — in men and postmenopausal women, endoscopic evaluation of the GI tract is required. This patient needs colonoscopy and likely upper endoscopy based on his NSAID use and family history.',
    },
    {
      part: 'other',
      question: 'Why is endoscopic evaluation necessary in this patient? What are the implications of his father having colon cancer?',
      answer: 'In postmenopausal women and adult men, iron-deficiency anemia indicates GI tract blood loss until proven otherwise. Colon cancer is the most serious possibility. This patient uses NSAIDs which may predispose to erosive gastritis. The combination of: (1) iron-deficiency anemia in a 52-year-old man, (2) guaiac-positive stool (occult GI bleeding), (3) daily NSAID use for a year, and (4) first-degree relative with colon cancer mandates both upper and lower GI endoscopy. If a colon cancer is found, treatment is surgical resection. If NSAID-induced gastritis is the cause, treatment includes PPI and discontinuation of NSAIDs. Once iron-deficiency anemia is confirmed, a thorough evaluation including upper and lower GI endoscopy is needed to identify the source of blood loss.',
    },
  ],
  pe_findings: `**Vital Signs:** T 37.0°C, P 96 bpm, R 18/min, BP 118/70 mmHg

**General:** Well-developed, well-nourished middle-aged man in no acute distress. Appears pale. Conjunctival pallor noted. Mucous membranes pale.

**HEENT:** Conjunctivae pale bilaterally. Mucous membranes dry but pale. Oropharynx clear. No icterus. Fundoscopy normal.

**Neck:** Supple. Trachea midline. No lymphadenopathy. Thyroid not enlarged. No JVD.

**Cardiovascular:** Tachycardic at 96 bpm, regular rhythm. Systolic ejection murmur heard best at left upper sternal border, 2/6 intensity, non-radiating — consistent with a flow murmur from anemia. No S3 or S4. Carotid pulses brisk and symmetric. No bruits.

**Respiratory:** Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi. Respiratory effort normal. Chest wall non-tender.

**Abdomen:** Soft, non-distended. Mild tenderness in the left lower quadrant on deep palpation, no guarding or rebound. No masses palpable. No hepatosplenomegaly. Bowel sounds normal. No shifting dullness.

**Rectal:** Normal sphincter tone. No masses palpable on digital rectal exam. Stool is brown and guaiac-positive for occult blood — a critical finding despite the patient denying visible blood.

**Extremities:** No clubbing, cyanosis, or edema. Brisk capillary refill (<2 seconds). Joints without swelling or tenderness.

**Skin:** Pale appearance. Nail examination reveals koilonychia (spoon nails) — thinning and concave scooping of the nails bilaterally, characteristic of chronic iron deficiency. No petechiae or ecchymosis.

**Neurologic:** Cranial nerves II-XII grossly intact. Sensation intact. Motor strength 5/5 throughout. Reflexes 2+ symmetric. Gait normal.

**Key positives:** Conjunctival pallor, pale mucous membranes, tachycardia (96 bpm), systolic ejection murmur (flow murmur of anemia), left lower quadrant tenderness, koilonychia (chronic IDA), guaiac-positive stool (occult GI bleeding despite patient denying visible blood). No hepatosplenomegaly, no lymphadenopathy.`,
  investigations: `**Initial / Core Tests:**
• CBC — Hb 8.2 g/dL (moderate anemia), MCV 72 fL (microcytic), RDW 16.8% (elevated — anisocytosis), WBC and platelets normal
• Iron studies — serum iron low (30 mcg/dL; normal 50-150), ferritin 8 ng/mL (very low; normal 20-300), TIBC elevated (480 mcg/dL; normal 250-400), transferrin saturation 6% (normal 15-50%)
• Peripheral smear — microcytic hypochromic RBCs, pencil cells (elliptocytes), marked anisocytosis
• Reticulocyte count — low for degree of anemia (inappropriately low reticulocyte production index)
• FOBT (fecal occult blood test) — positive (brown stool with occult blood — KEY finding)
• Colonoscopy — indicated urgently (age 52 + iron-deficiency anemia + father with colon cancer at 68 + occult blood)

**Additional / Confirmatory Tests:**
• Esophagogastroduodenoscopy (EGD) — to evaluate for NSAID-induced erosive gastritis, gastric ulcer, or duodenal ulcer as a possible bleeding source
• Celiac panel (anti-tissue transglutaminase antibodies) — to rule out celiac disease as a cause of iron malabsorption
• Vitamin B12 and folate levels — to rule out concomitant nutritional deficiencies
• Hemoglobin electrophoresis — if MCV disproportionately low relative to anemia severity, or if RDW is normal (suspect thalassemia trait)

**Further Work-up (if indicated):**
• Upper GI series with small bowel follow-through — if EGD and colonoscopy are negative (consider angiodysplasia or Meckel diverticulum)
• Capsule endoscopy — if standard upper and lower endoscopy do not reveal a source (consider small bowel lesion such as angiodysplasia, tumor, or Crohn disease)
• Repeat CBC 6 weeks after starting oral iron to assess response (expected Hb rise of 1 g/dL every 2-3 weeks)
• Repeat iron studies after 6 months to confirm repletion of iron stores`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and patient-centered communication',
            'Avoids medical jargon — uses accessible language',
            'Shows empathy toward fatigue and exercise limitations',
            'Addresses patient concerns about progressive symptoms',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Generalized fatigue, exertional dyspnea',
            Onset: 'Gradual over 4-5 months',
            Character: 'Progressive fatigue, shortness of breath when jogging',
            Radiation: 'N/A',
            Associated_symptoms: 'Pallor, occasional joint pain, vague left-sided abdominal pain',
            Time_course: 'Progressive over 4-5 months with intentional weight loss',
            Exacerbating_relieving: 'Worse with exercise; relieved by rest',
            Severity: 'Moderate — interferes with daily exercise routine',
          },
          specific_history: [
            'Quantify exercise tolerance — distance, duration before dyspnea',
            'NSAID use — frequency, duration, dose of ibuprofen (KEY: daily use for past year)',
            'Dietary history — iron intake, vegetarian diet',
            'GI symptoms — abdominal pain, bowel habit changes, blood in stool',
            'History of anemia or prior blood counts',
            'Family history of anemia or GI malignancies (father had colon cancer)',
            'Medication review — any anticoagulants',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies iron-deficiency anemia as most likely diagnosis',
            'Explains need for CBC with MCV to characterize anemia type',
            'Describes iron studies (ferritin, TIBC) for confirmation',
            'Emphasizes need to identify underlying cause (GI evaluation in men)',
            'Outlines treatment plan with oral iron supplementation',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may attribute fatigue to aging or overexertion',
            concerns: 'Concerned that progressive symptoms signal a serious underlying condition, possibly cancer given father\'s history',
            expectations: 'Expects clear diagnosis, explanation, and effective treatment plan to get back to running',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case054IronDeficiencyAnemia;
