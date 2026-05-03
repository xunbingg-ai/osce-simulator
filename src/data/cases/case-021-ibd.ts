import { CaseData } from '@/types';

const case021IBD: CaseData = {
  _id: 'case-021-ibd',
  case_id: 'Case 021 - Abdominal Pain with Bloody Diarrhea',
  case_name: 'Abdominal Pain with Bloody Diarrhea',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 37.2°C, P 98 bpm, R 18/min, BP 118/74 mmHg, SpO₂ 98% on room air',
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
        temperature: '37.2°C',
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
      trigger: 'How often are you having diarrhea? / How many times a day?',
      trigger_zh: '一天拉几次？/ 频率怎么样？',
      response: "A lot... I've lost count. Probably 10 to 12 times a day. But it's not like normal diarrhea — it's just small amounts each time, with blood and this slimy mucus stuff. And I feel like I can never fully empty my bowels.",
      response_zh: '很多次……我数不清了。大概一天十到十二次吧。但不是普通的拉肚子——每次量很少，带有血和黏糊糊的东西。而且总觉得拉不干净。',
    },
    {
      trigger: 'Have you noticed any blood in your stool? / What does the stool look like?',
      trigger_zh: '大便里有血吗？/ 大便是什么样的？',
      response: "Yeah, there's definitely blood — it's bright red, mixed in with the stool. And there's this mucus too, it's kind of slimy. Sorry, this is a bit embarrassing to talk about.",
      response_zh: '有，明显有血——鲜红色的，混在大便里。还有粘液，滑滑的那种。不好意思，说这个有点难为情。',
    },
    {
      trigger: 'Do you feel a strong urge to go? / Any straining when you go?',
      trigger_zh: '是不是有强烈的便意？/ 上厕所的时候费劲吗？',
      response: "Yes, when I feel the urge I have to go right away — I can't hold it. And then when I sit on the toilet, I strain but barely anything comes out, just a little bit of blood and mucus. It's really frustrating and uncomfortable.",
      response_zh: '是的，一有感觉就得马上去——憋不住。而且坐在马桶上使劲拉也拉不出多少，就一点血和粘液。真的很烦人，也很不舒服。',
    },
    {
      trigger: 'Have you had a fever? / Any fevers or chills? / Any nausea or vomiting?',
      trigger_zh: '发烧了吗？/ 有发烧或发冷吗？/ 有恶心或呕吐吗？',
      response: "I felt a bit warm last night, but I didn't check my temperature. No chills though. And I've been feeling tired and achy all over. No nausea or vomiting — just the stomach pain and the running to the bathroom.",
      response_zh: '昨晚觉得有点热，但没量体温。没有发冷。就是觉得浑身没劲，酸疼。不恶心也不吐——就是肚子疼和不停地跑厕所。',
    },
    {
      trigger: 'Have you had anything like this before? / Prior episodes?',
      trigger_zh: '以前有过这种情况吗？',
      response: "Actually... yes. I've had similar episodes over the past 6 to 8 months. But they were milder — just some loose stools with a bit of blood for a day or two, and then it would go away on its own. I thought it was just food poisoning or something. But this time is way worse and it's not going away.",
      response_zh: '其实……有过。过去六到八个月也出现过类似的情况，但没那么严重——就是拉几天肚子，带点血，然后自己就好了。我以为是吃坏东西了。但这次严重多了，而且一直不好。',
    },
    {
      trigger: 'Do you have any other medical conditions? / Any past medical history?',
      trigger_zh: '你还有其他病吗？/ 有什么病史吗？',
      response: "No, I've always been healthy. Never been in the hospital for anything. No surgeries. I don't really get sick much at all. This is really unusual for me.",
      response_zh: '没有，我一直挺健康的。从来没住过院，也没做过手术。平时很少生病。这次对我来说真的很不正常。',
    },
    {
      trigger: 'Are you taking any medications? / Any drug allergies?',
      trigger_zh: '你在吃什么药吗？/ 有药物过敏吗？',
      response: "No, I'm not on any medications. And I don't have any allergies that I know of.",
      response_zh: '没有，我没吃药。也没有什么过敏的。',
    },
    {
      trigger: 'Do you smoke? / Do you drink alcohol? / What about your diet and lifestyle?',
      trigger_zh: '你抽烟吗？/ 喝酒吗？/ 饮食和生活习惯怎么样？',
      response: "I don't smoke and I don't drink. I'm an accountant so I sit at a desk all day and I order takeout a lot. Tax season has been really stressful lately. I've been eating more fast food and convenience meals. I don't know if that's related to all this.",
      response_zh: '我不抽烟也不喝酒。我是做会计的，整天坐着，经常叫外卖。报税季压力特别大。最近快餐和方便食品吃得多。不知道跟这个有没有关系。',
    },
    {
      trigger: 'Any family history of bowel problems? / Anyone in your family with similar issues?',
      trigger_zh: '家里人有过肠道问题吗？/ 家人有类似情况吗？',
      response: "Not that I know of. My parents are healthy. No one in my family has had anything like this, as far as I'm aware.",
      response_zh: '据我所知没有。我父母身体都挺好的。没听说家里人有这种情况。',
    },
    {
      trigger: 'What do you think might be going on? / What are you worried about?',
      trigger_zh: '你觉得可能是什么问题？/ 你在担心什么？',
      response: "I honestly don't know. At first I thought it was food poisoning, but it keeps coming back. I'm worried there's something chronic going on. I need answers and I need this to stop.",
      response_zh: '说实话我不知道。一开始以为是食物中毒，但反复发作。我担心是不是有什么慢性病。我需要知道到底是什么问题，需要让这个停下来。',
    },
    {
      trigger: 'What worries you most about this? / Any specific concerns?',
      trigger_zh: '你最担心的是什么？/ 有什么特别担心的吗？',
      response: "I'm scared about what this means for my job — I'm an accountant and I can't be running to the bathroom every hour during tax season. And honestly... seeing blood in my stool is frightening. What if it's something serious? I just want to know what's wrong and get it treated.",
      response_zh: '我担心影响工作——我是做会计的，报税季不可能一小时跑一趟厕所。说实话……看到大便里有血真的很吓人。万一是严重的问题呢？我只想知道到底是什么问题，赶紧治好。',
    },
    {
      trigger: 'What are you hoping we can do for you today? / What were you expecting from this visit?',
      trigger_zh: '你今天希望我们做什么？/ 你对这次就诊有什么期望？',
      response: "I want to find out what's causing this. I need something to stop the pain and the diarrhea. And I want a plan so this doesn't keep happening — I can't keep missing work every few months because of this.",
      response_zh: '我想知道到底是什么引起的。我需要止住疼痛和腹泻。我想要一个方案，不要让这个反复发作——我不能每隔几个月就因此耽误工作。',
    },
  ],
  questions: [
    {
      part: 'dx',
      question: 'What is the most likely diagnosis for this patient? Explain your reasoning including the relevant clinical features.',
      answer: 'Inflammatory bowel disease (IBD), most likely ulcerative colitis (UC). The patient is a young adult (28-year-old male) with recurrent episodes of crampy abdominal pain and small-volume bloody, mucoid diarrhea with tenesmus and urgency. The symptoms have recurred over 6-8 months with spontaneous remissions, and the current episode is more severe. The presence of blood and mucus, tenesmus, urgency, and low-grade fever points toward colonic inflammation. The chronic relapsing pattern, young age, and absence of infectious causes make IBD the most likely diagnosis.',
    },
    {
      part: 'dx',
      question: 'What are your differential diagnoses, and what key features would help differentiate them from IBD?',
      answer: '(1) Infectious colitis (Salmonella, Shigella, Campylobacter, E. coli, C. difficile) — typically acute onset with sick contacts or recent antibiotic use; usually self-limited; stool cultures and C. diff toxin assay will distinguish. (2) Irritable bowel syndrome (IBS) — pain relieved by defecation, no blood in stool, no weight loss, no nocturnal symptoms, no fever or elevated inflammatory markers. (3) Ischemic colitis — more common in older patients with vascular risk factors; acute onset of pain followed by bloody diarrhea. (4) Diverticulitis — left lower quadrant pain, fever, no bloody diarrhea typically, CT shows diverticular inflammation.',
    },
    {
      part: 'pe',
      question: 'How would you examine this patient? What specific physical findings are you looking for, and what signs would help confirm or rule out your differential diagnoses?',
      answer: 'General: vital signs (fever, tachycardia suggest severity), overall appearance (hydration status, pallor). Abdominal exam: inspection for distension; auscultation for bowel sounds (hypoactive in severe colitis); palpation for tenderness (especially lower quadrants), guarding, rebound, or masses. Rectal exam: gross blood or mucus, tenderness, sphincter tone. Extraintestinal manifestations: Skin — examine lower extremities for erythema nodosum (tender red nodules on shins) and pyoderma gangrenosum (ulcerative lesions). Joints — check for synovitis or arthritis. Eyes — inspect for conjunctival injection or uveitis. Oral cavity — look for aphthous ulcers. Key negatives: no guarding/rebound makes perforation or toxic megacolon less likely.',
    },
    {
      part: 'investigations',
      question: 'What investigations would you order for this patient? Prioritize by urgency and explain your rationale.',
      answer: 'Initial/Core: (1) Stool cultures — rule out Salmonella, Shigella, Campylobacter, E. coli O157:H7, and Yersinia. (2) C. difficile toxin assay — can occur without prior antibiotics. (3) Ova and parasite exam — exclude Entamoeba histolytica. (4) CBC — for anemia (chronic blood loss), leukocytosis (inflammation), thrombocytosis (reactive). (5) CRP and ESR — assess degree of systemic inflammation. (6) Electrolytes, renal function — assess dehydration from diarrhea. Confirmatory: (7) Colonoscopy with biopsy — gold standard; visualize mucosa (continuous erythematous, friable, granular from rectum proximally) and obtain histology (crypt abscesses, no granulomas in UC). (8) Abdominal X-ray — rule out toxic megacolon (colonic diameter >6 cm). (9) Stool lactoferrin or calprotectin — confirms inflammatory diarrhea.',
    },
    {
      part: 'investigations',
      question: 'What do you expect to find on colonoscopy and biopsy? How would the findings differentiate ulcerative colitis from Crohn disease?',
      answer: 'Ulcerative colitis: continuous inflammation starting at the rectum and extending proximally to the sigmoid colon (may extend more proximally but always contiguous). Mucosa appears erythematous, friable, granular with loss of vascular pattern and contact bleeding. Histology shows crypt abscesses with neutrophil infiltration, goblet cell depletion, and inflammation limited to mucosa and submucosa. No granulomas. Crohn disease: skip lesions (patchy inflammation separated by normal mucosa), deep fissuring ulcers, cobblestone mucosa. Transmural inflammation with noncaseating granulomas (pathognomonic). Can affect any part of GI tract, most commonly terminal ileum and right colon. Fistulas, abscesses, and strictures are complications of Crohn disease.',
    },
    {
      part: 'management',
      question: 'How would you manage this patient? Outline your acute and long-term management plan.',
      answer: 'Acute management for flare: (1) IV fluids for rehydration. (2) Corticosteroids — IV methylprednisolone for moderate-severe flare, then oral taper once improved. (3) Mesalamine (5-ASA) compounds — oral and/or rectal for mild-moderate UC. (4) Antibiotics only if concurrent infection suspected. (5) Monitor for toxic megacolon — serial abdominal exams and X-rays. Long-term maintenance: (1) Mesalamine — first-line maintenance therapy for UC. (2) Immunomodulators (azathioprine, 6-mercaptopurine) — for steroid-dependent or refractory cases. (3) Biologics (anti-TNF: infliximab, adalimumab) — for moderate-severe disease not responding to conventional therapy. (4) Surgery — total proctocolectomy is curative for UC; indicated for refractory disease, dysplasia/cancer, or complications (toxic megacolon, hemorrhage). Unlike UC, Crohn disease is not cured by surgery.',
    },
    {
      part: 'other',
      question: 'What are the extraintestinal manifestations of IBD? Which ones are associated with IBD activity?',
      answer: 'Skin: erythema nodosum (tender red nodules on shins — correlates with disease activity), pyoderma gangrenosum (ulcerative lesions — may not correlate with activity). Joints: peripheral arthritis (asymmetric, migratory, correlates with activity), axial arthropathy (ankylosing spondylitis, sacroiliitis — independent of activity). Eyes: episcleritis (mild, correlates with activity), uveitis (more serious, may be independent). Hepatobiliary: primary sclerosing cholangitis (PSC — strongly associated with UC, independent of activity, increases cholangiocarcinoma risk), fatty liver, cholelithiasis (more common in Crohn). Metabolic: osteoporosis from chronic inflammation and steroid use. Thromboembolic: increased risk of DVT/PE during active flares.',
    },
    {
      part: 'other',
      question: 'What is toxic megacolon? How would you recognize and manage this complication?',
      answer: 'Toxic megacolon is a life-threatening complication of severe colitis (more common in UC) characterized by colonic dilation >6 cm (or cecal dilation >9 cm) with systemic toxicity. Recognition: worsening abdominal pain and distension, fever, tachycardia, hypotension, leukocytosis, altered mental status, and loss of haustrations on abdominal X-ray. Management: (1) Immediate IV fluids and resuscitation. (2) NPO with nasogastric tube decompression. (3) Broad-spectrum IV antibiotics. (4) High-dose IV corticosteroids. (5) Avoid antidiarrheals, anticholinergics, and narcotics (can worsen ileus). (6) Frequent surgical evaluation — urgent colectomy if no improvement within 24-48 hours or if perforation occurs. Mortality reaches 50% if perforation occurs.',
    },
  ],
  pe_findings: `**Vital Signs:** T 37.2°C, P 98 bpm, R 18/min, BP 118/74 mmHg, SpO₂ 98% on room air

**General:** Young male in mild distress. Anxious but cooperative. No pallor or jaundice.

**HEENT:** Pupils equal and reactive to light. Mucous membranes moist. No oral ulcers or aphthous lesions noted. No conjunctival injection.

**Neck:** Supple, non-tender. No lymphadenopathy. No thyromegaly. No JVD.

**Respiratory:** Clear to auscultation bilaterally. No crackles, wheezes, or rhonchi. Respiratory effort normal.

**Cardiovascular:** Regular rate and rhythm at 98 bpm. No murmurs, rubs, or gallops. Peripheral pulses 2+ and symmetric.

**Abdomen:** Mild diffuse distention. Tenderness to palpation, most notable in lower quadrants. No guarding or rebound tenderness. Bowel sounds hypoactive. No masses or organomegaly. No costovertebral angle tenderness.

**Rectal Exam:** Not performed (deferred). Gross blood and mucus noted on perianal inspection.

**Skin:** No erythema nodosum noted on lower extremities. No pyoderma gangrenosum. No rash or jaundice.

**Musculoskeletal:** No joint swelling, erythema, or tenderness. Full range of motion in all joints.

**Neurological:** Alert and oriented ×3. Cranial nerves intact. Sensation and motor function grossly intact.

**Key findings:** Mild diffuse abdominal tenderness (lower quadrants), hypoactive bowel sounds, tachycardia (98 bpm), low-grade fever (37.2°C). No peritoneal signs (no guarding/rebound — toxic megacolon less likely). No extraintestinal manifestations identified.`,
  investigations: `**Initial / Core Tests:**
• Stool cultures — negative for Salmonella, Shigella, Campylobacter, Escherichia coli O157:H7, Yersinia — rules out common infectious colitis
• Clostridium difficile toxin assay — negative — excludes C. difficile infection (can occur without prior antibiotics)
• Ova and parasite exam — negative — excludes Entamoeba histolytica and other parasitic infections
• Stool lactoferrin — elevated — confirms inflammatory (not secretory) diarrhea
• CBC — Hb 13.2 g/dL (mild anemia — chronic blood loss), WBC 11.8 × 10⁹/L (mild leukocytosis — active inflammation), Platelets 380 × 10⁹/L (reactive thrombocytosis — acute phase response)
• CRP — 45 mg/L (markedly elevated; normal <5 mg/L) — quantifies systemic inflammation
• ESR — 62 mm/hr (markedly elevated; normal <15 mm/hr) — supports active inflammatory process
• Electrolytes, renal function, LFTs — within normal limits — assesses hydration and baseline organ function
• Abdominal X-ray — no evidence of toxic megacolon (colonic diameter within normal limits); no free air under diaphragm

**Additional / Confirmatory Tests:**
• Colonoscopy with biopsy — continuous erythematous, friable, granular mucosa from rectum extending proximally to sigmoid colon; loss of normal vascular pattern; contact bleeding with minimal trauma. Histopathology: crypt abscesses with neutrophil infiltration, marked inflammatory cell infiltration of lamina propria (mucosa and submucosa), goblet cell depletion. Changes confined to mucosa — consistent with ulcerative colitis. No granulomas seen (rules out Crohn disease)
• Chest X-ray — normal. No evidence of tuberculosis (important before biologic therapy)

**Further Work-up (if indicated):**
• Calprotectin (stool) — quantifies intestinal inflammation; useful for monitoring disease activity and predicting relapse
• MR enterography — if small bowel involvement suspected (more relevant for Crohn disease); assesses for fistulas, abscesses, strictures
• Serologic markers (p-ANCA, ASCA) — p-ANCA positive in UC (~60-70%), ASCA positive in Crohn (~60-70%); supportive but not diagnostic
• Bone density scan (DXA) — baseline if long-term corticosteroid use anticipated
• Colonoscopic surveillance — begins 8-10 years after diagnosis to screen for dysplasia/colorectal cancer (UC-associated CRC risk increases with disease duration and extent)`,
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
