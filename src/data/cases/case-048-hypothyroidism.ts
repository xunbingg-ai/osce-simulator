import { CaseData } from '@/types';

const case048Hypothyroidism: CaseData = {
  _id: 'case-048-hypothyroidism',
  case_id: 'Case 048 - Menstrual Irregularity',
  case_name: 'Menstrual Irregularity',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 36.8°C (98.2°F), P 62 bpm, R 14/min, BP 108/68 mmHg, BMI 26.5 kg/m²',
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
      trigger: 'Do you have any headaches or changes in your vision?',
      trigger_zh: '你有头痛或视力变化吗？',
      response: "No, nothing like that. My vision has been fine, and I don't get headaches more than just the occasional normal one.",
      response_zh: '没有，没有这些情况。视力一直很好，头痛也没有比以前多，偶尔会痛一下而已。',
    },
    {
      trigger: 'What are you most worried about? / What do you think might be going on?',
      trigger_zh: '你最担心什么？/ 你觉得可能是什么问题？',
      response: "I've been looking things up online... and I'm worried this could be early menopause. I'm only 38, that seems way too young. Or I've read about... pituitary tumors that can cause these kinds of symptoms. I just want to know what's going on. Even though I'm done having children, the idea that something is wrong with my body... it's unsettling.",
      response_zh: '我在网上查了一下……我担心会不会是早更。我才38岁，应该还不到时候吧。我还看到说……脑垂体瘤也会引起这些症状。我就是想知道到底是怎么回事。虽然我不打算再生孩子了，但知道自己身体出了问题……挺让人不安的。',
    },
    {
      trigger: 'Does anyone in your family have thyroid problems or autoimmune conditions?',
      trigger_zh: '你家里有人有甲状腺问题或自身免疫疾病吗？',
      response: "Yes, actually — my mother has an underactive thyroid. She's been on medication for it for years. I never really connected that to what I'm feeling, but I suppose it could be related.",
      response_zh: '有的，我妈妈有甲状腺功能减退，吃了好多年的药了。我以前没把这事和我现在的症状联系起来，但也许是有关系的。',
    },
    {
      trigger: 'Are you taking any medications? / Any allergies? / Any other medical conditions?',
      trigger_zh: '你在吃什么药吗？/ 有过敏史吗？/ 还有其他病史吗？',
      response: "Just a daily multivitamin. No allergies that I know of. And I don't have any other medical conditions — I've always been healthy.",
      response_zh: '就每天吃一片复合维生素。没有过敏史。我也没什么其他病，身体一直挺好的。',
    },
    {
      trigger: 'Is there anything else you want to ask me? / Any other concerns?',
      trigger_zh: '你还有什么想问我吗？/ 还有其他担心的事吗？',
      response: "Just... what do you think this could be? I'm ready for whatever tests you need. I just want to know what's happening so I can get treatment and feel like myself again.",
      response_zh: '我就是想知道……你觉得我可能是什么问题？需要做什么检查我都愿意做。我只想知道到底怎么回事，赶紧治好，让我恢复以前的状态。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis and underlying etiology?',
      answer: 'Oligomenorrhea and galactorrhea due to hypothyroidism. The most likely etiology is primary hypothyroidism, most often caused by autoimmune (Hashimoto) thyroiditis. Hypothyroidism leads to elevated TRH, which stimulates prolactin secretion, causing galactorrhea and menstrual irregularities.',
    },
    {
      part: 'dx',
      question: 'What is the diagnostic approach to secondary amenorrhea?',
      answer: 'First, exclude pregnancy (serum beta-hCG). Then check TSH (to rule out thyroid disease) and prolactin level. Based on results, evaluate further: elevated FSH suggests ovarian failure; elevated prolactin > 200 suggests pituitary adenoma (MRI indicated); low/normal FSH with normal prolactin and TSH suggests hypothalamic hypogonadism or PCOS.',
    },
    {
      part: 'pe',
      question: 'What physical examination findings would you expect in this patient, and what specific signs would support the diagnosis?',
      answer: 'Vital signs: mild bradycardia (heart rate 58-64 bpm) or low-normal heart rate due to reduced metabolic rate, blood pressure normal to slightly low. General: mild weight gain (BMI 26.5), periorbital puffiness, movements and speech may be slightly slowed. Neck: thyroid gland — diffusely and symmetrically enlarged (goiter), firm but non-tender to palpation, no discrete nodules — consistent with autoimmune thyroiditis (Hashimoto). Skin: dry, coarse, cool to touch. Hair: thin, brittle, with possible thinning of the lateral third of the eyebrows (Queen Anne\'s sign). Breasts: symmetric, no masses; expressible galactorrhea — small amount of whitish discharge from both nipples with gentle pressure. Neurologic: delayed relaxation phase of deep tendon reflexes (hung-up reflexes) — most prominent at the Achilles tendon; this is a classic and nearly pathognomonic sign of hypothyroidism. No exophthalmos or pretibial myxedema (these are features of Graves disease, not Hashimoto).',
    },
    {
      part: 'investigations',
      question: 'What laboratory tests would confirm the diagnosis?',
      answer: 'Elevated TSH with low free T4 confirms primary hypothyroidism. Prolactin level may be mildly elevated due to TRH stimulation. Anti-thyroid peroxidase (anti-TPO) antibodies are typically positive in Hashimoto thyroiditis. If prolactin is markedly elevated (> 200), pituitary MRI is indicated.',
    },
    {
      part: 'investigations',
      question: 'How would you interpret the complete laboratory results, and what additional tests are indicated?',
      answer: 'TSH: markedly elevated at approximately 25 mIU/L (normal 0.5-4.5) — the most sensitive test for primary hypothyroidism. Free T4: low at approximately 0.4 ng/dL (normal 0.8-1.8) — confirms inadequate thyroid hormone production. Anti-TPO antibodies: positive (e.g., >500 IU/mL) — confirms autoimmune Hashimoto thyroiditis as the underlying etiology. Prolactin: mildly elevated at approximately 60 ng/mL (normal <25 ng/mL) — this is secondary to elevated TRH, which stimulates both TSH and prolactin secretion from pituitary lactotrophs. Prolactin >200 would suggest a prolactinoma requiring MRI. FSH: normal — helps rule out premature ovarian failure. Beta-hCG: negative — excludes pregnancy. Lipid panel: total cholesterol and LDL elevated — hypothyroidism decreases hepatic LDL receptor expression, causing secondary hyperlipidemia. CBC: may show mild normocytic anemia (common in hypothyroidism). Thyroid ultrasound is indicated only if nodules are palpable on exam.',
    },
    {
      part: 'management',
      question: 'What is the treatment for hypothyroidism and what is the goal of therapy?',
      answer: 'Synthetic levothyroxine (T4) replacement is the treatment of choice — once-daily dosing at 1.6 mcg/kg (typically 100-150 mcg daily). In older patients or those with cardiovascular disease, start low (25-50 mcg/day) and increase gradually every 4-6 weeks. The goal is normalized TSH (ideally in the lower half of the reference range) and relief of symptoms.',
    },
    {
      part: 'other',
      question: 'How does hypothyroidism cause galactorrhea and menstrual irregularities? What is the differential diagnosis for galactorrhea?',
      answer: 'In primary hypothyroidism, the hypothalamus increases thyrotropin-releasing hormone (TRH) to stimulate the pituitary. TRH also stimulates prolactin secretion from lactotroph cells. Hyperprolactinemia then inhibits hypothalamic GnRH secretion, leading to menstrual irregularities and galactorrhea. The differential diagnosis for galactorrhea includes: (1) Hypothyroidism (elevated TRH stimulates prolactin — as in this case), (2) Prolactinoma (prolactin >200, MRI indicated), (3) Medications (antipsychotics, metoclopramide, SSRIs, verapamil), (4) Chest wall stimulation or trauma, (5) Chronic renal failure, (6) Idiopathic. The presence of fatigue, weight gain, cold intolerance, hair thinning, and constipation in this patient points toward hypothyroidism rather than a primary pituitary cause.',
    },
  ],
  pe_findings: `Vital Signs: T 36.8°C (98.2°F), P 62 bpm, R 14/min, BP 108/68 mmHg, BMI 26.5 kg/m²

**General:** Mildly overweight female in no acute distress. Mild periorbital puffiness. Movements appear slightly slowed. Speech is normal. Anicteric.

**Neck:** Trachea midline. Thyroid gland is diffusely and symmetrically enlarged (estimated 30-35 g; normal ~20 g). Firm but non-tender to palpation. No discrete nodules palpable. No cervical lymphadenopathy. No thyroid bruits. No JVP elevation.

**Skin:** Dry and coarse texture. Cool to touch. No rashes, lesions, or pretibial myxedema.

**Hair:** Thin and brittle texture. Sparse in the lateral third of both eyebrows (Queen Anne's sign). No alopecia areata.

**Breasts:** Symmetric, no palpable masses. Gentle compression elicits small amount of whitish discharge from both nipples bilaterally.

**Cardiovascular:** Regular rate and rhythm at 62 bpm. No murmurs, rubs, or gallops. Peripheral pulses 2+ and symmetric. No carotid bruits.

**Respiratory:** Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi. Respiratory effort normal.

**Abdomen:** Soft, non-tender, non-distended. Normal bowel sounds. No masses, organomegaly, or ascites.

**Neurologic:** Cranial nerves II-XII grossly intact. Muscle strength 5/5 throughout all extremities. Sensation intact to light touch. Deep tendon reflexes: 2+ symmetrically with notably delayed relaxation phase (hung-up reflexes) — most prominent at the Achilles tendons. This is a classic sign of hypothyroidism. Gait normal. Coordination intact.

**Extremities:** No clubbing, cyanosis, or edema.

**Key findings:** Bradycardia (62 bpm), diffusely enlarged non-tender thyroid gland (consistent with Hashimoto thyroiditis), dry coarse skin, thin brittle hair with loss of lateral eyebrow hair, expressible galactorrhea bilaterally, hung-up deep tendon reflexes (delayed relaxation phase — pathognomonic for hypothyroidism).`,
  investigations: `Initial Testing (Core):
• TSH — markedly elevated at 25 mIU/L (normal 0.5-4.5 mIU/L) — confirms primary hypothyroidism
• Free T4 — low at 0.4 ng/dL (normal 0.8-1.8 ng/dL) — confirms inadequate thyroid hormone production
• Beta-hCG — negative — excludes pregnancy as cause of amenorrhea
• Prolactin — mildly elevated at ~60 ng/mL (normal <25 ng/mL) — elevated TRH stimulates lactotrophs
• FSH — normal (5-10 IU/L) — rules out premature ovarian failure / menopause

Confirmatory Testing:
• Anti-thyroid peroxidase (Anti-TPO) antibodies — positive (>500 IU/mL) — confirms autoimmune Hashimoto thyroiditis as the underlying etiology
• Lipid panel — total cholesterol elevated at 6.8 mmol/L, LDL 4.6 mmol/L (hypothyroidism decreases hepatic LDL receptor expression, causing secondary hyperlipidemia)
• CBC — mild normocytic anemia (Hb 11.2 g/dL, MCV 88 fL) — normocytic anemia is common in hypothyroidism due to decreased erythropoietin production and metabolic demand

Further Work-up (if indicated):
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
