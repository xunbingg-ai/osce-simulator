import { CaseData } from '@/types';

const case021IBD: CaseData = {
  _id: 'case-021-ibd',
  case_id: 'Case 021 - Abdominal Pain with Bloody Diarrhea',
  case_name: 'Abdominal Pain with Bloody Diarrhea',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 99°F (37.2°C), P 98 bpm, R 18/min, BP 118/74 mmHg, SpO₂ 98% on room air',
  patient: {
    age: 28,
    gender: 'M',
    occupation: 'Accountant',
    chief_complaint: 'Abdominal pain and diarrhea with blood and mucus',
    presentation: {
      setting: 'Patient comes to the emergency center complaining of abdominal pain and diarrhea for 2 days.',
      duration: 'Current episode 2 days; similar milder episodes over the past 6-8 months',
      hpi: {
        onset: 'Acute onset 2 days ago of abdominal pain and diarrhea',
        site: 'Diffuse abdominal pain',
        character: 'Crampy abdominal pain',
        radiation: 'No radiation',
        severity: 'Moderate to severe',
        time_course: 'Current episode 2 days; prior milder episodes over 6-8 months lasting 24-48 hours with loose, mucoid, bloody stools',
        exacerbating_factors: ['Sudden urge to defecate (tenesmus)'],
        relieving_factors: ['Not relieved by defecation'],
      },
    },
    symptoms: {
      others: {
        diarrhea: true,
        stool_frequency: '10-12 times per day',
        stool_volume: 'Small volume',
        stool_blood: true,
        stool_mucus: true,
        tenesmus: true,
        urgency: true,
        abdominal_pain_crampy: true,
        abdominal_distention: true,
        bowel_sounds: 'Hypoactive',
      },
      constitutional: {
        fever: true,
        temperature: '99°F (37.2°C)',
        heart_rate: '98 bpm',
        blood_pressure: '118/74 mm Hg',
      },
      negatives: {
        vomiting: false,
        guarding: false,
        rebound_tenderness: false,
        jaundice: false,
        oral_ulceration: false,
      },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: ['No significant medical history', 'No prior medications', 'No recent travel', 'No sick contacts', 'No family history of GI problems'],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: ['None'],
    },
    social_history: {
      smoking: 'Non-smoker',
      alcohol: 'Does not drink alcohol',
      occupation: 'Accountant',
      travel: 'No travel outside the United States',
    },
    family_history: 'Denies any family history of gastrointestinal problems',
    ice: {
      ideas: 'Patient may be concerned about food poisoning or a chronic bowel condition given the recurrent episodes',
      concerns: 'Worried about the recurrent bloody diarrhea, cramping pain, and the need for ongoing treatment',
      expectations: 'Expects a clear diagnosis, relief of symptoms, and a plan to prevent future episodes',
    },
  },
  sp_script: [
    {
      trigger: 'What brought you in today? / How can I help you? / What happened?',
      trigger_zh: '你今天哪里不舒服？/ 发生什么了？',
      response: "I've been having really bad abdominal pain and diarrhea for the past 2 days. It came on suddenly and it's just not getting better. I finally came to the ER because I couldn't take it anymore.",
      response_zh: '我过去两天肚子疼得厉害，还拉肚子。突然就开始了，一直不见好。我实在受不了了才来急诊的。',
    },
    {
      trigger: 'Can you describe the pain? / Where is the pain? / What does it feel like?',
      trigger_zh: '能描述一下疼痛吗？/ 哪里疼？/ 是什么感觉？',
      response: "It's all over my abdomen, a crampy kind of pain. It comes and goes but it's there most of the time. It's not sharp, more like a dull ache that gets worse when I feel like I need to go to the bathroom.",
      response_zh: '整个肚子都疼，一阵一阵的绞痛。时好时坏，但大部分时间都疼。不是刺痛，更像是一种钝痛，想上厕所的时候会更厉害。',
    },
    {
      trigger: 'How often are you having diarrhea? / How many times a day? / Stool frequency?',
      trigger_zh: '一天拉几次？/ 频率怎么样？',
      response: "A lot... I've lost count. Probably 10 to 12 times a day. But it's not like normal diarrhea — it's just small amounts each time, with blood and this slimy mucus stuff. And I feel like I can never fully empty my bowels.",
      response_zh: '很多次……我数不清了。大概一天十到十二次吧。但不是普通的拉肚子——每次量很少，带有血和黏糊糊的东西。而且总觉得拉不干净。',
    },
    {
      trigger: 'Have you noticed any blood in your stool? / Blood or mucus? / What does the stool look like?',
      trigger_zh: '大便里有血或粘液吗？/ 大便是什么样的？',
      response: "Yeah, there's definitely blood — it's bright red, mixed in with the stool. And there's this mucus too, it's kind of slimy. Sorry, this is a bit embarrassing to talk about.",
      response_zh: '有，明显有血——鲜红色的，混在大便里。还有粘液，滑滑的那种。不好意思，说这个有点难为情。',
    },
    {
      trigger: 'Do you feel a strong urge to go? / Any straining when you go? / Tenesmus?',
      trigger_zh: '是不是有强烈的便意？/ 上厕所的时候费劲吗？',
      response: "Yes, when I feel the urge I have to go right away — I can't hold it. And then when I sit on the toilet, I strain but barely anything comes out, just a little bit of blood and mucus. It's really frustrating and uncomfortable.",
      response_zh: '是的，一有感觉就得马上去——憋不住。而且坐在马桶上使劲拉也拉不出多少，就一点血和粘液。真的很烦人，也很不舒服。',
    },
    {
      trigger: 'When did this episode start? / How long has this been going on? / Duration?',
      trigger_zh: '这次从什么时候开始的？/ 持续多久了？',
      response: "It started about 2 days ago, pretty suddenly. I woke up with cramping and it's been non-stop since then. I've barely slept and I haven't been able to eat properly.",
      response_zh: '大概两天前开始的，挺突然的。醒来就肚子绞痛，然后一直没停过。几乎没怎么睡，也没好好吃东西。',
    },
    {
      trigger: 'Have you had anything like this before? / Prior episodes? / Has this happened before?',
      trigger_zh: '以前有过这种情况吗？',
      response: "Actually... yes. I've had similar episodes over the past 6 to 8 months. But they were milder — just some loose stools with a bit of blood for a day or two, and then it would go away on its own. I thought it was just food poisoning or something. But this time is way worse and it's not going away.",
      response_zh: '其实……有过。过去六到八个月也出现过类似的情况，但没那么严重——就是拉几天肚子，带点血，然后自己就好了。我以为是吃坏东西了。但这次严重多了，而且一直不好。',
    },
    {
      trigger: 'Have you had a fever? / Any fevers or chills? / Temperature?',
      trigger_zh: '发烧了吗？/ 有发烧或发冷吗？',
      response: "I felt a bit warm last night, but I didn't check my temperature. No chills though. And I've been feeling tired and achy all over.",
      response_zh: '昨晚觉得有点热，但没量体温。没有发冷。就是觉得浑身没劲，酸疼。',
    },
    {
      trigger: 'What do you think might be going on? / What are you worried about? / Any concerns?',
      trigger_zh: '你觉得可能是什么问题？/ 你在担心什么？',
      response: "I honestly don't know. At first I thought it was food poisoning, but it keeps coming back. I'm worried there's something chronic going on. And I'm scared about what this means for my job — I'm an accountant and I can't be running to the bathroom every hour during tax season. I need answers and I need this to stop.",
      response_zh: '说实话我不知道。一开始以为是食物中毒，但反复发作。我担心是不是有什么慢性病。也害怕影响工作——我是做会计的，报税季不可能一小时跑一趟厕所。我需要知道到底是什么问题，需要让这个停下来。',
    },
    {
      trigger: 'Any family history of bowel problems? / Any family members with similar issues? / Family history?',
      trigger_zh: '家里人有过肠道问题吗？/ 家人有类似情况吗？',
      response: "Not that I know of. My parents are healthy. No one in my family has had anything like this, as far as I'm aware.",
      response_zh: '据我所知没有。我父母身体都挺好的。没听说家里人有这种情况。',
    },
    {
      trigger: 'How has your diet been? / Any recent stress? / What do you typically eat? / Lifestyle?',
      trigger_zh: '饮食怎么样？/ 最近压力大吗？/ 平时都吃些什么？',
      response: "I eat pretty normally... I mean, I'm an accountant so I sit at a desk all day and I order takeout a lot. Tax season has been really stressful lately. I've been eating more fast food and convenience meals. I don't know if that's related to all this.",
      response_zh: '饮食还算正常……我是会计嘛，整天坐着，经常叫外卖。报税季压力特别大。最近快餐和方便食品吃得多。不知道跟这个有没有关系。',
    },
    {
      trigger: 'Are you taking any medications? / Any allergies? / Meds or drug allergies?',
      trigger_zh: '你在吃什么药吗？/ 有过敏史吗？',
      response: "No, I'm not on any medications. And I don't have any allergies that I know of. I don't smoke and I don't drink alcohol either. I'm pretty healthy... or at least I thought I was.",
      response_zh: '没有，我没吃药。也没有什么过敏的。我不抽烟，也不喝酒。我一直挺健康的……至少以前是这么觉得。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What are the key differences between Crohn disease and ulcerative colitis?',
      answer: 'Crohn disease: transmural inflammation, noncontinuous "skip lesions," most commonly affects terminal ileum, fistulas and abscesses common, smoking increases risk, surgery is not curative. Ulcerative colitis: mucosal and submucosal inflammation, continuous pattern starting at rectum extending proximally, limited to colon, hemorrhage and toxic megacolon common, smoking decreases risk, colectomy is curative.',
    },
    {
      part: 'other',
      question: 'What are the extraintestinal manifestations of inflammatory bowel disease?',
      answer: 'Skin: erythema nodosum, pyoderma gangrenosum. Rheumatologic: arthritis (polyarticular, asymmetric), ankylosing spondylitis. Ocular: uveitis (photophobia, blurred vision). Hepatobiliary: primary sclerosing cholangitis (more common in UC), cholelithiasis (more common in CD), fatty liver. Urologic: nephrolithiasis (calcium oxalate stones after small bowel resection in CD).',
    },
    {
      part: 'dx',
      question: 'What acute complications are associated with ulcerative colitis?',
      answer: 'Acute complications include: severe hemorrhage with possible hemorrhagic shock, fulminant colitis with >10 stools/day, abdominal pain, distention, fever, leukocytosis, tachycardia, and altered mental status; toxic megacolon (colonic diameter >6 cm or cecal diameter >9 cm with systemic toxicity); and colonic perforation with peritonitis (50% mortality, usually from untreated toxic megacolon). Management involves IV fluids, NPO, nasogastric decompression, broad-spectrum antibiotics, corticosteroids, and surgical evaluation for colectomy.',
    },
    {
      part: 'investigations',
      question: 'What imaging and endoscopic findings help differentiate UC from CD?',
      answer: 'For UC: barium enema may show "lead pipe colon"; colonoscopy shows continuous inflammation starting at rectum; biopsy shows crypt abscesses with PMN infiltration. For CD: barium studies show "string sign" (strictures); endoscopy shows "cobblestoning" of mucosa; biopsy shows noncaseating granulomas. CT may show bowel wall thickening, fistulas, or abscesses in CD.',
    },
    {
      part: 'management',
      question: 'How is inflammatory bowel disease treated?',
      answer: 'For mild-to-moderate UC: 5-ASA compounds (sulfasalazine, mesalamine). For severe UC flares: corticosteroids (oral, rectal, or IV) tapered once remission achieved. Immune modulators (6-mercaptopurine, azathioprine, methotrexate, infliximab) for refractory cases. For CD: similar approach with corticosteroids for acute flares, thiopurines or biologics for maintenance. Unlike UC, colectomy is not curative for CD.',
    },
    {
      part: 'management',
      question: 'What is toxic megacolon and how is it managed?',
      answer: 'Toxic megacolon is characterized by colonic dilation >6 cm (or cecal dilation >9 cm) with systemic toxicity (fever, tachycardia, hypotension, leukocytosis, altered mental status). It is a complication of UC. Management: IV fluids, NPO, nasogastric decompression, broad-spectrum antibiotics, systemic corticosteroids, and prompt surgical consultation for colectomy if no improvement.',
    },
    {
      part: 'investigations',
      question: 'What infections must be excluded before diagnosing IBD and what is the gold standard for confirming IBD?',
      answer: 'Infectious causes to exclude: Entamoeba histolytica, Salmonella, Shigella, Escherichia coli, Campylobacter, and Clostridium difficile (can occur without prior antibiotic use). After obtaining stool samples to exclude infection, colonoscopy is the gold standard for diagnosing IBD, allowing visualization of ulcers and biopsy for histologic confirmation.',
    },
    {
      part: 'pe',
      question: 'What physical examination findings would you expect in a patient presenting with acute ulcerative colitis?',
      answer: 'Vital signs: low-grade fever, tachycardia may be present if severe. General: patient may appear in mild distress, anxious. Abdomen: mild diffuse distention, tenderness to palpation especially in lower quadrants, hypoactive bowel sounds. No guarding or rebound tenderness unless perforation has occurred. Rectal exam: may reveal gross blood or mucus, mild tenderness. Skin: check for erythema nodosum (tender red nodules on shins) and pyoderma gangrenosum (ulcerative skin lesions). Joints: assess for synovitis or arthritis. Eyes: examine for conjunctival injection or uveitis. Oral cavity: inspect for aphthous ulcers (more common in Crohn disease). Key negatives: if no peritoneal signs, toxic megacolon or perforation is less likely.',
    },
  ],
  pe_findings: `**Vital Signs:** T 99°F (37.2°C), P 98 bpm, R 18/min, BP 118/74 mmHg, SpO₂ 98% on room air

**General:** Young male in mild distress. Anxious but cooperative. No pallor or jaundice. Mucous membranes moist.

**Abdomen:** Mild diffuse distention. Tenderness to palpation, most notable in lower quadrants. No guarding or rebound tenderness. Bowel sounds hypoactive. No masses or organomegaly. No costovertebral angle tenderness.

**Skin:** No erythema nodosum noted on lower extremities. No pyoderma gangrenosum. No rash.

**Musculoskeletal:** No joint swelling, erythema, or tenderness. Full range of motion in all joints.

**Eyes:** No conjunctival injection or uveitis. Pupils equal and reactive to light.

**Oral Cavity:** No oral ulcers noted. Mucous membranes moist.

**Rectal Exam:** Not performed (deferred).

**Key Negatives:** No guarding, no rebound tenderness, no oral ulcers, no skin lesions, no joint swelling, no eye inflammation.`,
  investigations: `**Stool Studies (to rule out infectious causes):**
• Stool cultures — negative for Salmonella, Shigella, Campylobacter, Escherichia coli O157:H7
• Ova and parasite exam — negative
• Clostridium difficile toxin assay — negative
• Stool lactoferrin — elevated (consistent with inflammatory diarrhea)

**Laboratory Studies:**
• CBC — Hb 13.2 g/dL (mild anemia), WBC 11.8 × 10⁹/L (mild leukocytosis), Platelets 380 × 10⁹/L (reactive thrombocytosis)
• CRP — 45 mg/L (markedly elevated, normal <5 mg/L)
• ESR — 62 mm/hr (markedly elevated, normal <15 mm/hr)
• Electrolytes, renal function, LFTs — within normal limits

**Imaging and Endoscopy:**
• Chest X-ray — normal. No evidence of tuberculosis or other infection.
• Abdominal X-ray — no evidence of toxic megacolon (colonic diameter within normal limits)
• Colonoscopy — continuous erythematous, friable, granular mucosa starting from the rectum and extending proximally to the sigmoid colon. Loss of normal vascular pattern. Contact bleeding noted with minimal trauma.
• Histopathology (biopsy) — Crypt abscesses with neutrophil infiltration, marked inflammatory cell infiltration of lamina propria (mucosa and submucosa), goblet cell depletion. Changes confined to mucosa — consistent with ulcerative colitis. No granulomas seen (ruling out Crohn disease).`,
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: [
            'Polite introduction and patient-centered communication',
            'Avoids medical jargon — uses terms patient can understand',
            'Shows empathy for discomfort from frequent diarrhea and abdominal pain',
            'Addresses patient concerns about recurrent symptoms',
          ],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: {
            Site: 'Diffuse abdominal pain',
            Onset: 'Acute 2 days ago; prior episodes over 6-8 months',
            Character: 'Crampy pain, small-volume bloody mucoid stools',
            Radiation: 'Ask about radiation of pain',
            Associated_symptoms: 'Tenesmus, urgency, fever, weight loss, joint pain, eye symptoms, skin rashes',
            Time_course: '2 days current episode; prior episodes milder lasting 24-48 hours',
            Exacerbating_relieving: 'Worse with urge to defecate; not relieved by defecation',
            Severity: 'Moderate to severe — 10-12 bowel movements per day',
          },
          ibd_specific_history: [
            'Family history of IBD',
            'Extra-intestinal symptoms — joint pain, skin lesions, eye inflammation',
            'Travel history and sick contacts',
            'Antibiotic use prior to symptom onset',
            'Smoking history (protective for UC, risk factor for CD)',
          ],
          rule_out_differentials: [
            'Infectious colitis — travel, sick contacts, antibiotic use, fever',
            'Irritable bowel syndrome — pain relieved by defecation, no blood, no weight loss',
            'Ischemic colitis — older age, atherosclerotic disease',
          ],
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: [
            'Correctly identifies inflammatory bowel disease as likely diagnosis given young age, chronicity, bloody mucoid stools, and tenesmus',
            'Explains need for stool cultures to exclude infection before proceeding to colonoscopy',
            'Discusses colonoscopy with biopsy as the gold standard for diagnosis',
            'Explains treatment options including corticosteroids for acute flares and maintenance therapy',
          ],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: 'Patient may wonder about food poisoning or a chronic digestive condition',
            concerns: 'Fear of chronic disease, worry about bloody stools and cancer risk, impact on daily life and work as an accountant',
            expectations: 'Expects a definitive diagnosis, effective symptom control, and long-term management plan',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default case021IBD;
