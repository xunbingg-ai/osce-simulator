# OSCE Case Migration Guide v2 — Complete SP & VIVA Content Creation

> 基于 Case 003 ACS 的验证经验，系统化地将现有 case 迁移至结构化 SP 剧本 + VIVA 分段格式

---

## 0. Prerequisites: Reference Template

迁移时始终参考已通过验证的模板 case：

| Template | File |
|---|---|
| PMGP Case 2 (Fatigue) | `case-pmgp-c2-fatigue.ts` |
| Case 003 ACS (Chest Pain) | `case-003-acs.ts` |

---

## 1. vital_signs

一行字符串，格式固定：

```typescript
vital_signs: 'T __°C, P __ bpm, R __/min, BP __/__ mmHg, SpO₂ __% (room air or O₂)',
```

从 `patient.symptoms` 中提取 VS 数据。如果没有记录，从诊断推断合理值。

---

## 2. sp_script — SP 对话剧本

### 2.1 格式

每个 dialogue 必须有中英双语：

```typescript
{
  trigger: 'English trigger question / alternative phrasing',
  trigger_zh: '中文触发问题 / 另一种问法',
  response: 'English scripted patient response.',
  response_zh: '中文脚本回答。',
}
```

### 2.2 对话覆盖清单（必须覆盖以下 12-15 个场景）

按此顺序排列：

| # | 场景 | Trigger 示例 |
|---|---|---|
| 1 | **Opening** — 为什么来就诊 | "What brought you in today?" |
| 2 | **Chief complaint detail** — 症状具体描述 | "Can you describe the pain/fatigue/etc?" |
| 3 | **Symptom character** — 感觉/性质 | "What does it feel like?" |
| 4 | **Severity/timeline** — 程度/时间线 | "How bad is it? When did it start?" |
| 5 | **Associated symptoms** — 伴随症状（针对该诊断的关键阳性症状） | "Any sweating? Nausea? Fever?" |
| 6 | **Key ROS positive** — 系统回顾关键阳性（该 case 特有的） | "Any blood in stool? Cough?" |
| 7 | **Key ROS follow-up** — 阳性发现的追问 | "Tell me more about that..." |
| 8 | **Past medical history** | "Any medical conditions?" |
| 9 | **Medications/allergies** | "Are you taking any medications?" |
| 10 | **Social history** — 吸烟/饮酒/职业/生活 | "Do you smoke? Drink?" |
| 11 | **Family history** | "Anyone in your family with similar issues?" |
| 12 | **ICE — Ideas** — 患者自己认为是什么 | "What do you think is causing this?" |
| 13 | **ICE — Concerns** — 担心什么 | "What worries you most?" |
| 14 | **ICE — Expectations** — 希望得到什么 | "What are you hoping we can do today?" |

### 2.3 SP 人设（Patient Voice）关键原则

- **使用日常口语，不是书面语**。Response 读起来应该像一个真实患者在说话。
- **符合场景设定**：ED 患者说话短促、痛苦；门诊患者说话完整、悠闲。
- **不要泄露诊断**：患者说自己感受到的症状，不说医学术语。
- **中英双语质量对等**：中文版本同样是自然口语，不是机翻。

### 2.4 按场景定制 SP 语气

| 场景 | 语气 |
|---|---|
| ED 急性胸痛 (ACS) | 短句子，痛苦，恐惧，气喘吁吁 |
| 门诊慢阻肺 (COPD) | 短句，夹着喘息，多年老烟枪的无奈，恐惧但略带宿命感 |
| 年轻 IBD | 尴尬，担心工作，对反复发作感到困扰 |
| 中年甲减 | 日常语气，略微担心但不恐慌 |
| 体检发现糖尿病 | 无症状所以不太在意，对治疗方案有抵触 |
| 终末期/重症 | 虚弱，句子简短，可能需要家属代述 |

### 2.5 绝对禁止

- ❌ SP 对话中不能出现诊断名称
- ❌ 不能主动提供未被询问的信息
- ❌ 不能使用医学术语（患者不会说"dyspnea on exertion"，他们说"I get out of breath when I walk"）
- ❌ 中文版本不能用翻译腔

---

## 3. questions — VIVA 问题结构

### 3.1 Part 分配规则

每个 case 必须按此顺序分配:

```
dx (1-2 questions)
  ↓
pe (1 question)          ← 必须至少 1 个 PE 问题
  ↓
investigations (1-2 questions)
  ↓
management (1-2 questions)
  ↓
other (1-2 questions)
```

总计 6-9 个 questions。

### 3.2 每部分的问题类型

**dx — Diagnosis & Differential Diagnosis:**
- Q1: "What is the most likely diagnosis? Explain your reasoning including relevant clinical features."
- Q2 (optional): "What are your differential diagnoses and how would you differentiate them?"

**pe — Physical Examination:**
- "How would you examine this patient? What specific physical findings are you looking for, and what signs would help rule in or rule out your differential diagnoses?"

**investigations — Investigations:**
- Q1: "What investigations would you order? Prioritize by urgency and explain your rationale."
- Q2 (optional): 针对该 case 的特殊检查问题（如 "How do you interpret this ABG?" 或 "What are the indications for colonoscopy in this patient?"）

**management — Management:**
- Q1: "How would you manage this patient? Outline your acute and long-term management plan."
- Q2 (optional): 具体治疗方案细节

**other — Additional:**
- 并发症、流行病学、预后、预防等

### 3.3 绝对规则

- 每个 question 必须有 `part` 标签
- 问题必须是 **neutral and exam-like** — 不能包含诊断提示
- PE 问题必须**至少 1 个**
- 所有问题顺序必须按 part 排列：dx → pe → investigations → management → other

---

## 4. pe_findings — 体格检查结果

### 4.1 格式模板

```typescript
pe_findings: `**Vital Signs:** T __°C, HR __ bpm (regular/irregular), R __/min, BP __/__ mmHg, SpO₂ __%

**General:** [外观、体型、营养状态、有无痛苦表情]

**HEENT:** [结膜颜色、黏膜、瞳孔]

**Neck:** [甲状腺、颈静脉、淋巴结、颈动脉]

**Respiratory:** [视诊/触诊/叩诊/听诊]

**Cardiovascular:** [心率、心律、心音、杂音、奔马律、摩擦音]

**Abdomen:** [外形、压痛、反跳痛、肌紧张、肠鸣音、脏器肿大、直肠检查]

**MSK / Extremities:** [关节、肢体、水肿、杵状指]

**Skin:** [皮疹、色素沉着、温度、弹性]

**Neurological:** [意识、颅神经、肌力、反射、步态]

**Key findings:** [一句话总结最关键阳性体征]`,
```

### 4.2 关键规则

- `**加粗**` 用于 section header（如 `**Vital Signs:**`），会被 markdown renderer 渲染为粗体
- 每行用空行分隔各系统
- PE 结果必须与诊断一致（如贫血 → pale conjunctivae，COPD → barrel chest + hyperresonance）
- 包含 relevant negatives（如 "No murmurs or gallops" "No guarding or rebound"）
- 如果患者拒绝某项检查（如 rectal exam），要记录

---

## 5. investigations — 辅助检查结果

### 5.1 格式模板（三段式）

```typescript
investigations: `**Initial / Core Tests:**
• [检查名称] — [结果] — [解读/目的]
• ...

**Additional / Confirmatory Tests:**
• [检查名称] — [结果] — [解读/目的]
• ...

**Further Work-up (if indicated):**
• [检查名称] — [结果] — [解读/目的]
• ...

*Note: [特殊说明 — 如患者拒绝某检查，或后续随访计划]*`,
```

### 5.2 关键规则

- `**粗体**` section header + `•` bullet items — 会被 markdown renderer 渲染
- 检查结果数值必须与诊断一致
- 每项检查都要有目的说明
- 如果有特殊说明（如患者拒绝检查），加在末尾的 *italic note* 中
- 不需要列出所有可能的检查 — 聚焦于该 case 的核心检查

### 5.3 常见检查数值参考

| Condition | Key Lab Findings |
|---|---|
| ACS/STEMI | cTnI elevated (>0.04), ST elevation on ECG, mild leukocytosis |
| COPD | ABG: hypoxemia + hypercapnia, CXR: hyperinflation, flat diaphragms |
| IBD | CRP/ESR elevated, stool cultures negative, colonoscopy: continuous inflammation |
| Hypothyroidism | TSH ↑↑, free T4 ↓, anti-TPO positive, prolactin mildly ↑ |
| Diabetes T2 | FPG ≥126, HbA1C ≥6.5%, diabetic dyslipidemia |
| IDA | Hb ↓, MCV ↓, ferritin ↓↓, TIBC ↑, transferrin sat ↓ |

---

## 6. marking_scheme — 保持不变

现有的 `marking_scheme` 不需要修改，保留原样即可。

---

## 7. Migration Checklist

每个 case 迁移完成后，检查以下项目：

### sp_script
- [ ] 12-15 个 dialogue pairs
- [ ] 每个有中英双语 trigger + response
- [ ] 覆盖：opening → symptom detail → associated → ROS positive → PMH → meds → social → family → ICE
- [ ] 使用自然口语，符合场景人设
- [ ] 不会泄露诊断

### VIVA questions
- [ ] 每个 question 有 `part` 标签
- [ ] 顺序：dx → pe → investigations → management → other
- [ ] 至少 1 个 PE 问题
- [ ] 问题措辞 neutral，无诊断提示

### pe_findings
- [ ] `**section headers**` 格式
- [ ] 所有系统覆盖（至少：VS, General, HEENT/Neck, Resp, CV, Abdomen, Extremities, Neuro）
- [ ] 包含 relevant negatives
- [ ] 关键阳性体征正确

### investigations
- [ ] 三段式格式
- [ ] `**section headers**` + `• bullets`
- [ ] 检查结果数值合理
- [ ] 每项有目的说明

### 构建
- [ ] `npx tsc --noEmit` 通过
- [ ] `npm run build` 通过

---

## 8. VIVA System Prompt — 已知问题和配置

### 8.1 English-only rule（已配置）

VIVA prompt 的 Rules #1 已设置：
```
ALL communication MUST be in English. This is an English-language medical examination. 
Never use Chinese or any other language, regardless of what language the student uses.
```

### 8.2 Section transition tag behavior（已配置）

标签只在学生答案+反馈后发送，不在提问时发送。Prompt 中有明确的正反例。

### 8.3 Markdown rendering（已配置）

`pe_findings` 和 `investigations` 字段中的 `**bold**`、`• bullets` 会被前端 `renderMarkdown()` 渲染为 HTML。

---

## 9. Common Pitfalls

| Pitfall | Fix |
|---|---|
| SP response 太像教科书 | 重写为自然口语，加入犹豫词（"well...", "I don't know...", "I guess..."） |
| PE 问题被跳过 | 确保至少 1 个 `part: 'pe'` question |
| AI 考官在 part 标签后不继续提问 | Prompt 已修复 — 标签后必须立即接下一题 |
| `[PART: ...]` 标签在提问时发出 | Prompt 已修复 — 明确写了 WRONG pattern |
| Markdown 不渲染 | `renderMarkdown()` 已处理 CRLF |
| VIVA 中使用中文 | Prompt Rule #1 已加 English-only |
