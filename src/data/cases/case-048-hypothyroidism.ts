import { CaseData } from '@/types';

const case048Hypothyroidism: CaseData = {
  _id: 'case-048-hypothyroidism',
  case_id: 'Case 048 - Menstrual Irregularity',
  case_name: 'Menstrual Irregularity',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 36.8°C, P 62 bpm, R 14/min, BP 108/68 mmHg, SpO₂ 98% on room air',
  patient: {
    age: 38,
    gender: 'F',
    occupation: 'Not specified',
    chief_complaint: 'Menstrual irregularity and secondary amenorrhea',
    presentation: {
      setting: 'Patient presents to the clinic for evaluation of menstrual irregularity.',
      duration: '9 months of lengthening cycles; 3 months of amenorrhea',
      hpi: {
        onset: 'Gradual — cycles began lengthening approximately 9 months ago, with complete cessation of menses for the last 3 months',
        site: 'N/A — gynecologic/reproductive system complaint',
        character: 'Secondary amenorrhea after previously regular 28-30 day cycles',
        radiation: 'N/A',
        severity: 'Moderate — complete amenorrhea for 3 months',
        time_course: 'Progressive over 9 months',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      constitutional: {
        fatigue: true,
        weight_gain: 'Approximately 10 lb over the past year',
        feeling_cold: true,
      },
      others: {
        menstrual_history: 'Regular 28-30 day cycles since menarche at age 12',
        pregnancies: 'Three prior uncomplicated pregnancies and deliveries',
        contraception: 'Bilateral tubal ligation after last pregnancy',
        secondary_amenorrhea: true,
        galactorrhea: 'Slight whitish nipple discharge expressed from breasts',
        hair_thinning: 'Mild thinning of hair',
        coarse_skin: 'Slightly more coarse skin texture',
        constipation: 'Mild — less regular bowel movements recently',
      },
      negatives: {
        headaches: false,
        visual_changes: false,
        hot_flashes: false,
        vaginal_dryness: false,
        hirsutism: false,
        obesity: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior surgeries besides tubal ligation'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['Multivitamins only'],
    },
    social_history: {
      smoking: 'Not documented',
      alcohol: 'Not documented',
    },
    family_history: 'Mother has hypothyroidism (on thyroid replacement therapy)',
    ice: {
      ideas: 'Patient may be concerned about early menopause or a pituitary tumor given the galactorrhea.',
      concerns: 'Worried about fertility implications, possible tumor, or hormonal imbalance; concerned about weight gain and fatigue.',
      expectations: 'Expects blood tests to determine the cause and appropriate treatment to restore normal menstrual cycles.',
    },
  },
  sp_script: [
    {
      trigger: 'What brought you in today? / What happened? / Why are you here?',
      trigger_zh: '今天是什么原因来就诊？/ 发生什么了？/ 为什么来这里？',
      response: "It's my periods. They've been getting further apart — for about nine months now — and I haven't had one at all for three months. That's never happened before. I thought maybe it was stress, but it kept going, so I figured I should get checked out.",
      response_zh: '是我的月经。这九个月来月经越来越稀疏，最近三个月一次都没有来过。以前从来没有过这种情况。我一开始以为是压力大，但一直这样，所以觉得还是来检查一下比较好。',
    },
    {
      trigger: 'Tell me more about your periods. What were they like before? / Describe your normal cycle.',
      trigger_zh: '跟我说说你的月经情况。之前是什么样的？/ 描述一下你以前的周期。',
      response: "They were always regular. Every 28 to 30 days since I was 12 years old. Like clockwork. Lasted about 5 days. Nothing unusual. That's why this is so strange for me — I've never been irregular a day in my life.",
      response_zh: '一直都很规律。从12岁开始就是28到30天一次，特别准时，每次大概5天。所以这次真的很奇怪——我这辈子从来没有不规律过。',
    },
    {
      trigger: 'Have you been pregnant before? / Do you have children? / Any history of pregnancy?',
      trigger_zh: '你以前怀过孕吗？/ 有孩子吗？/ 有怀孕史吗？',
      response: "Yes, I have three children. Three very uncomplicated pregnancies and normal deliveries. After my youngest, I had a tubal ligation — so I know I'm not pregnant. That's not what this is about.",
      response_zh: '有，我有三个孩子。三次怀孕和生产都很顺利。生了最小的孩子之后，我做了输卵管结扎。所以我知道自己不是怀孕了——肯定不是这个原因。',
    },
    {
      trigger: 'Have you noticed any discharge from your breasts? / Any nipple discharge?',
      trigger_zh: '你有没有发现乳房有分泌物？/ 乳头有分泌物吗？',
      response: "Actually... yes. A few months ago I noticed that if I squeeze my nipples, a little whitish fluid comes out. It's not a lot, and there's no pain or anything. I wasn't sure if it meant something, so I didn't really mention it to anyone.",
      response_zh: '有的……几个月前我发现，如果挤一下乳头，会有白色的液体出来。量不多，也不疼。我不确定这算不算问题，所以一直没跟别人提过。',
    },
    {
      trigger: 'How is your energy level? / Any changes in weight? / Have you been feeling tired?',
      trigger_zh: '你精力怎么样？/ 体重有变化吗？/ 你最近觉得很累吗？',
      response: "I've been so tired lately. By the time I get home from work, I just want to go to bed. And I've put on about ten pounds over the past year without really changing what I eat. It's really frustrating — I've never had trouble with my weight before.",
      response_zh: '最近特别累。每天下班回家就想直接上床睡觉。而且这一年体重长了大概十斤，饮食也没怎么变，真让人郁闷——我以前从没有体重问题的。',
    },
    {
      trigger: 'Have you noticed any changes in your hair or skin?',
      trigger_zh: '你有没有注意到头发或皮肤有什么变化？',
      response: "My hair seems thinner than it used to be. More comes out when I brush it. And my skin feels rougher — sort of dry and coarse. I've been using more moisturizer but it doesn't seem to help much.",
      response_zh: '头发好像比以前稀了。梳头的时候掉得更多了。皮肤也觉得比以前粗糙了，又干又粗的。我用了更多的润肤霜，但好像没什么帮助。',
    },
    {
      trigger: 'Do you feel colder than usual? / Are you sensitive to cold?',
      trigger_zh: '你比以前怕冷吗？/ 你对冷敏感吗？',
      response: "Yes, actually! I'm always cold. My husband thinks the house temperature is fine, but I'm sitting there in sweaters and still feel chilly. I never used to be like this.",
      response_zh: '会的！我总是觉得冷。我老公觉得屋里温度刚好，但我穿着毛衣还是觉得凉飕飕的。我以前从来不这样的。',
    },
    {
      trigger: 'Any changes in your bowel habits? / Have you been constipated?',
      trigger_zh: '大便有变化吗？/ 有便秘吗？',
      response: "Now that you mention it, I have been a bit more constipated recently. Nothing terrible or painful, but I'm just not as regular as I used to be. I didn't really think much of it.",
      response_zh: '你这么一说，我最近确实有点便秘。不算严重，也不疼，只是不如以前规律了。我也没太在意。',
    },
    {
      trigger: 'Do you have any other medical conditions? / Any past medical history?',
      trigger_zh: '你还有其他病史吗？/ 以前有过什么病吗？',
      response: "No, I've always been healthy. No surgeries besides my tubal ligation. I don't have any chronic conditions or anything like that. Just the usual checkups.",
      response_zh: '没有，我一直挺健康的。除了输卵管结扎没做过其他手术。没什么慢性病。每年就是做做常规检查。',
    },
    {
      trigger: 'Are you taking any medications? / Any allergies?',
      trigger_zh: '你在吃什么药吗？/ 有过敏史吗？',
      response: "Just a daily multivitamin. No allergies that I know of.",
      response_zh: '就每天吃一片复合维生素。没有过敏史。',
    },
    {
      trigger: 'Do you smoke or drink alcohol? / Any social habits?',
      trigger_zh: '你抽烟喝酒吗？/ 有什么生活习惯？',
      response: "No, I don't smoke. I might have a glass of wine with dinner occasionally, but not very often. I try to stay healthy.",
      response_zh: '不抽烟。偶尔吃饭的时候喝杯红酒，但不常喝。我平时还是比较注意健康的。',
    },
    {
      trigger: 'Does anyone in your family have thyroid problems or autoimmune conditions?',
      trigger_zh: '你家里有人有甲状腺问题或自身免疫疾病吗？',
      response: "Yes, actually — my mother has an underactive thyroid. She's been on medication for it for years. I never really connected that to what I'm feeling, but I suppose it could be related.",
      response_zh: '有的，我妈妈有甲状腺功能减退，吃了好多年的药了。我以前没把这事和我现在的症状联系起来，但也许是有关系的。',
    },
    {
      trigger: 'What are you most worried about? / What do you think might be going on?',
      trigger_zh: '你最担心什么？/ 你觉得可能是什么问题？',
      response: "I've been looking things up online... and I'm worried this could be early menopause. I'm only 38, that seems way too young. Or I've read about... pituitary tumors that can cause these kinds of symptoms. I just want to know what's going on. Even though I'm done having children, the idea that something is wrong with my body... it's unsettling.",
      response_zh: '我在网上查了一下……我担心会不会是早更。我才38岁，应该还不到时候吧。我还看到说……脑垂体瘤也会引起这些症状。我就是想知道到底是怎么回事。虽然我不打算再生孩子了，但知道自己身体出了问题……挺让人不安的。',
    },
    {
      trigger: 'What are you hoping we can do today? / Is there anything else you want to ask me?',
      trigger_zh: '你今天希望我们做什么？/ 你还有什么想问我吗？',
      response: "I'm ready for whatever tests you need. I just want to know what's happening so I can get treatment and feel like myself again. The fatigue and weight gain are really affecting my daily life.",
      response_zh: '需要做什么检查我都愿意做。我只想知道到底怎么回事，赶紧治好，让我恢复以前的状态。这种疲劳和体重增加真的影响到我的日常生活了。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis for this patient? Explain your reasoning including the relevant clinical features.',
      answer: 'Hypothyroidism (likely autoimmune/Hashimoto thyroiditis) presenting with secondary amenorrhea and galactorrhea. The patient is a 38-year-old woman with progressive fatigue, weight gain, cold intolerance, constipation, hair thinning, dry coarse skin, and secondary amenorrhea for 3 months with galactorrhea. She has a positive family history of maternal hypothyroidism. The constellation of hypothyroid symptoms combined with menstrual irregularity and galactorrhea is classic for hypothyroidism — elevated TRH from primary hypothyroidism stimulates prolactin secretion, causing galactorrhea and disrupting the hypothalamic-pituitary-ovarian axis.',
    },
    {
      part: 'dx',
      question: 'What is the diagnostic approach to secondary amenorrhea? What diagnoses should be on your differential?',
      answer: 'First, exclude pregnancy (serum beta-hCG). Then check TSH (to rule out thyroid dysfunction) and prolactin level. Based on results: elevated FSH suggests ovarian failure/premature menopause; elevated prolactin >200 suggests prolactinoma (MRI indicated); low/normal FSH with normal prolactin and TSH suggests hypothalamic hypogonadism (functional hypothalamic amenorrhea from stress, weight loss, excessive exercise) or PCOS. Additional differentials: (1) Asherman syndrome (intrauterine adhesions — history of D&C), (2) Sheehan syndrome (postpartum pituitary necrosis — history of postpartum hemorrhage), (3) drug-induced (antipsychotics, metoclopramide causing hyperprolactinemia).',
    },
    {
      part: 'pe',
      question: 'How would you examine this patient? What specific physical findings are you looking for to confirm your diagnosis and rule out alternative causes?',
      answer: 'General: vital signs (bradycardia, low-normal BP), BMI (weight gain), periorbital puffiness, slowed movements and speech. Neck: thyroid palpation — size (diffusely enlarged/goiter vs normal), consistency (firm in Hashimoto), tenderness, nodules. Skin: dry, coarse, cool to touch — check for pretibial myxedema (Graves, not Hashimoto). Hair: thin, brittle, loss of lateral eyebrow hair (Queen Anne\'s sign). Breasts: check for galactorrhea — gentle compression for expressible discharge; breast exam to rule out masses. Neurologic: deep tendon reflexes — delayed relaxation phase (hung-up reflexes) most prominent at Achilles tendon; this is a classic and nearly pathognomonic sign of hypothyroidism. Fundoscopy: visual fields — rule out bitemporal hemianopia (pituitary mass). Key negatives: no exophthalmos or lid lag (Graves disease), no acne/hirsutism (PCOS), no visual field defects (pituitary tumor).',
    },
    {
      part: 'investigations',
      question: 'What investigations would you order to confirm the diagnosis and identify the underlying etiology? Explain your rationale.',
      answer: 'Initial/Core: (1) TSH — markedly elevated (>20 mIU/L; normal 0.5-4.5) — most sensitive screening test for primary hypothyroidism. (2) Free T4 — low (<0.8 ng/dL) — confirms inadequate thyroid hormone production. (3) Beta-hCG — negative — excludes pregnancy (first step in secondary amenorrhea workup). (4) Prolactin — mildly elevated (~60 ng/mL; normal <25) — TRH stimulates lactotrophs; helps distinguish from prolactinoma. (5) FSH — normal (~5-10 IU/L) — rules out premature ovarian failure. Confirmatory: (6) Anti-thyroid peroxidase (anti-TPO) antibodies — positive (>500 IU/mL) — confirms autoimmune Hashimoto thyroiditis as the underlying etiology. (7) Lipid panel — elevated total cholesterol and LDL — hypothyroidism decreases hepatic LDL receptor expression. (8) CBC — may show mild normocytic anemia. Further work-up: (9) Pituitary MRI — only if prolactin >200 ng/mL, visual field defects, or concerning headaches (not indicated here). (10) Thyroid ultrasound — only if nodules palpable on exam.',
    },
    {
      part: 'investigations',
      question: 'How would you interpret the expected laboratory results? What is the pathophysiological link between hypothyroidism, galactorrhea, and amenorrhea?',
      answer: 'Primary hypothyroidism causes decreased T4 feedback to the hypothalamus, leading to increased TRH secretion. TRH is a prolactin-releasing factor — elevated TRH stimulates pituitary lactotrophs, causing hyperprolactinemia. Prolactin inhibits hypothalamic GnRH secretion, which suppresses the pulsatile release of FSH and LH from the pituitary. This disrupts ovarian follicular development and ovulation, causing anovulation and secondary amenorrhea. Lab interpretation: TSH markedly elevated (confirming primary hypothyroidism), free T4 low, prolactin mildly elevated (not >200 which would suggest prolactinoma), FSH normal (excludes ovarian failure), anti-TPO positive (confirming autoimmune etiology).',
    },
    {
      part: 'management',
      question: 'How would you manage this patient? Outline your treatment plan and expected outcomes.',
      answer: 'Synthetic levothyroxine (T4) replacement is the treatment of choice. Starting dose: 1.6 mcg/kg/day (approximately 100-125 mcg daily for a 70 kg patient). In young, otherwise healthy patients, starting near the full replacement dose is appropriate. If the patient had cardiovascular disease or was elderly, start low (25-50 mcg/day) and titrate gradually every 4-6 weeks. Goal: normalize TSH to the lower half of the reference range (0.5-2.5 mIU/L). Expected outcomes: within 2-4 weeks — improved energy and sense of well-being; 4-8 weeks — TSH normalization allows dose titration; 2-4 months — menstrual cycles typically resume and galactorrhea resolves as prolactin normalizes. Weight loss may occur as metabolic rate normalizes. Lifelong therapy is needed.',
    },
    {
      part: 'other',
      question: 'What is the differential diagnosis for galactorrhea? How would you distinguish hypothyroidism-induced galactorrhea from a prolactinoma?',
      answer: 'Differential: (1) Hypothyroidism (elevated TRH stimulates prolactin — mild prolactin elevation, typically <100 ng/mL). (2) Prolactinoma (prolactin >200 ng/mL, MRI shows pituitary adenoma, may present with visual field defects or headaches). (3) Medications — antipsychotics (dopamine D2 antagonists), metoclopramide, SSRIs, verapamil. (4) Chest wall stimulation or trauma. (5) Chronic renal failure (decreased prolactin clearance). (6) Idiopathic. Key distinguishing features: hypothyroidism-induced galactorrhea is accompanied by classic hypothyroid symptoms (fatigue, cold intolerance, weight gain, constipation, dry skin), TSH is elevated, prolactin is only mildly elevated, and anti-TPO antibodies are positive. In contrast, prolactinoma presents with prolactin >200 ng/mL, normal thyroid function, and may show pituitary mass on MRI. Treatment of hypothyroidism (levothyroxine) will resolve the galactorrhea — no need for dopamine agonists.',
    },
    {
      part: 'other',
      question: 'What complications should be monitored in untreated hypothyroidism, and what is the importance of medication adherence?',
      answer: 'Untreated hypothyroidism can lead to: progressive weight gain, worsening fatigue, depression, cognitive impairment ("brain fog"), carpal tunnel syndrome, hoarseness, obstructive sleep apnea, and infertility. In severe cases: myxedema coma — a life-threatening emergency with hypothermia, bradycardia, hypotension, altered mental status, and hypoventilation — often precipitated by infection, cold exposure, or medication non-adherence. Medication adherence is critical because: (1) levothyroxine has a narrow therapeutic index — under-replacement leaves symptoms, over-replacement causes iatrogenic hyperthyroidism (palpitations, anxiety, osteoporosis, atrial fibrillation risk). (2) Take on empty stomach, 30-60 minutes before breakfast, and at least 4 hours apart from calcium, iron, or antacids which impair absorption. (3) Routine monitoring: check TSH 6-8 weeks after any dose change, then annually once stable.',
    },
  ],
  pe_findings: `**Vital Signs:** T 36.8°C, P 62 bpm, R 14/min, BP 108/68 mmHg, SpO₂ 98% on room air, BMI 26.5 kg/m²

**General:** Mildly overweight female in no acute distress. Mild periorbital puffiness. Movements appear slightly slowed. Speech is normal. Anicteric.

**HEENT:** Pupils equal and reactive to light. No visual field defects on confrontation testing. Extraocular movements intact. No conjunctival injection. Mucous membranes moist. Fundoscopy: Optic discs sharp, no papilledema.

**Neck:** Trachea midline. Thyroid gland is diffusely and symmetrically enlarged (estimated 30-35 g; normal ~20 g). Firm but non-tender to palpation. No discrete nodules palpable. No cervical lymphadenopathy. No thyroid bruits. No JVP elevation.

**Cardiovascular:** Regular rate and rhythm at 62 bpm. No murmurs, rubs, or gallops. Peripheral pulses 2+ and symmetric. No carotid bruits.

**Respiratory:** Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi. Respiratory effort normal.

**Abdomen:** Soft, non-tender, non-distended. Normal bowel sounds. No masses, organomegaly, or ascites.

**Skin:** Dry and coarse texture. Cool to touch. No rashes, lesions, or pretibial myxedema.

**Hair:** Thin and brittle texture. Sparse in the lateral third of both eyebrows (Queen Anne's sign). No alopecia areata.

**Breasts:** Symmetric, no palpable masses. Gentle compression elicits small amount of whitish discharge from both nipples bilaterally.

**Extremities:** No clubbing, cyanosis, or edema. No joint swelling or tenderness.

**Neurologic:** Cranial nerves II-XII grossly intact. Muscle strength 5/5 throughout all extremities. Sensation intact to light touch. Deep tendon reflexes: 2+ symmetrically with notably delayed relaxation phase (hung-up reflexes) — most prominent at the Achilles tendons. This is a classic sign of hypothyroidism. Gait normal. Coordination intact. Negative Romberg.

**Key findings:** Bradycardia (62 bpm), diffusely enlarged non-tender thyroid gland (consistent with Hashimoto thyroiditis), dry coarse skin, thin brittle hair with loss of lateral eyebrow hair, expressible galactorrhea bilaterally, hung-up deep tendon reflexes (delayed relaxation phase — pathognomonic for hypothyroidism).`,
  investigations: `**Initial / Core Tests:**
• TSH — markedly elevated at 25 mIU/L (normal 0.5-4.5 mIU/L) — most sensitive screening test for primary hypothyroidism
• Free T4 — low at 0.4 ng/dL (normal 0.8-1.8 ng/dL) — confirms inadequate thyroid hormone production
• Beta-hCG — negative — excludes pregnancy as cause of amenorrhea (first step in secondary amenorrhea workup)
• Prolactin — mildly elevated at ~60 ng/mL (normal <25 ng/mL) — elevated TRH stimulates lactotrophs; mild elevation distinguishes from prolactinoma
• FSH — normal (5-10 IU/L) — rules out premature ovarian failure / menopause

**Additional / Confirmatory Tests:**
• Anti-thyroid peroxidase (Anti-TPO) antibodies — positive (>500 IU/mL) — confirms autoimmune Hashimoto thyroiditis as the underlying etiology
• Lipid panel — total cholesterol elevated at 6.8 mmol/L, LDL 4.6 mmol/L (hypothyroidism decreases hepatic LDL receptor expression, causing secondary hyperlipidemia)
• CBC — mild normocytic anemia (Hb 11.2 g/dL, MCV 88 fL) — normocytic anemia is common in hypothyroidism due to decreased erythropoietin production and metabolic demand

**Further Work-up (if indicated):**
• Pituitary MRI — indicated only if prolactin is markedly elevated (>200 ng/mL) or if the patient has visual field defects, headaches, or other signs of mass effect (not present here)
• Thyroid ultrasound — indicated only if nodules are palpable on physical exam (no nodules felt in this patient)
• Repeat thyroid function tests in 6-8 weeks after starting levothyroxine to assess response and titrate dose`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and establishes rapport',
            'Avoids medical jargon when explaining hormonal axis',
            'Shows sensitivity when discussing menstrual history and galactorrhea',
            'Addresses patient concerns about possible tumor or early menopause',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Ask about thyroid area — pain, swelling, tenderness; ask about breast exam findings',
            Onset: 'Timeline of menstrual changes, galactorrhea onset relative to other symptoms',
            Character: 'Nature of galactorrhea — spontaneous vs expressed, color, consistency, unilateral vs bilateral',
            Radiation: 'Ask about symptoms of hyperprolactinemia — decreased libido, visual changes, headaches',
            Associated_symptoms: 'Fatigue, cold intolerance, constipation, dry skin, muscle cramps, carpal tunnel syndrome, menopausal symptoms (hot flashes, vaginal dryness)',
            Time_course: 'Duration of symptoms, progression over months',
            Exacerbating_relieving: 'Stress, exercise patterns, diet/nutrition, medication use',
            Severity: 'Impact on daily functioning, quality of life',
          },
          specific_history: [
            'Obstetric history — any postpartum hemorrhage (Sheehan syndrome)',
            'Medication history — any dopamine antagonists, antipsychotics',
            'Exercise and nutrition patterns — possible hypothalamic amenorrhea',
            'Family history of autoimmune disease or thyroid disorders',
            'Previous pregnancies and breastfeeding history',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies hypothyroidism as the most likely cause of oligomenorrhea and galactorrhea',
            'Explains the relationship between thyroid function, prolactin, and menstrual cycles',
            'Describes appropriate diagnostic tests (TSH, free T4, prolactin, anti-TPO antibodies)',
            'Discusses treatment with levothyroxine and expected timeline for symptom improvement',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may be concerned she is entering early menopause or has a pituitary tumor',
            concerns: 'Fertility implications; worry about underlying malignancy; concern about weight gain and fatigue affecting daily life',
            expectations: 'Expects a clear diagnosis from blood tests and effective treatment to restore normal cycles and energy levels',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case048Hypothyroidism;
