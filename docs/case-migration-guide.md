# Case Migration Guide: Structured SP Script & VIVA Format

> 将现有 60 个 case 迁移至 PMGP Case 2 格式的系统指南

---

## 1. Overview

PMGP Case 2 (`case-pmgp-c2-fatigue.ts`) 是模板。每个 case 需要新增/改写以下内容：

| 字段 | 说明 | 是否必须 |
|---|---|---|
| `vital_signs` | 生命体征字符串 | 推荐 |
| `sp_script` | Phase 2 SP 对话剧本（Q&A 对） | **必须** |
| `questions[].part` | VIVA 问题分段标签 | **必须** |
| `pe_findings` | 体格检查结果 | **必须** |
| `investigations` | 辅助检查方案与结果 | **必须** |

---

## 2. Step 1: Write SP Script (`sp_script`)

### 2.1 原则

SP 剧本是模拟病人的"对话脚本"，指导 AI SP 如何回应考生的提问。

- **每个 dialogue 是一个 trigger → response 对**
- **trigger**：考生可能问的方向（不是精确匹配，AI 做语义匹配）
- **response**：AI SP 应该使用的回答
- **必须中英双语**：`trigger` / `trigger_zh`、`response` / `response_zh`
- **不要主动提供信息**：剧本只覆盖考生主动询问的问题
- **使用日常用语**：不说医学术语

### 2.2 对话结构模板

一个完整的 `sp_script` 应覆盖以下对话场景：

```
1. Opening（开场）
   - 患者为什么来就诊
   - 症状持续时间、起病方式

2. Core Symptom Details（核心症状细节）
   - 症状的具体感受
   - 加重/缓解因素
   - 对日常生活的影响

3. Associated Symptoms（伴随症状追问）
   - 与该症状常见鉴别诊断相关的 ROS 问题
   - 每个系统 1-2 个追问

4. Key ROS Findings（关键系统回顾阳性发现）
   - 该 case 特有的阳性发现（如血便、心悸等）
   - 每个阳性发现都应有对应的追问对话

5. Past Medical / Drug History（既往史/用药史）

6. Family / Social History（家族史/社会史）

7. ICE（想法、担忧、期望）
```

### 2.3 编写示例

参考 PMGP Case 2 的 13 个 dialogue 条目：

```typescript
sp_script: [
  {
    trigger: 'What brought you in today? / Why are you here?',
    trigger_zh: '今天是什么原因让您来就诊？/ 您哪里不舒服？',
    response: "Well, for the past two months, I've just been getting more and more tired...",
    response_zh: '嗯，过去这两个月，我觉得自己越来越容易累...',
  },
  // ... 其余 12 个
]
```

### 2.4 从现有 CaseData 提取 SP 剧本

现有 case 的 `patient.presentation.hpi` 和 `patient.symptoms` 字段包含结构化数据。提取步骤：

1. **阅读现有 `patient.presentation.setting`**：作为 opening response 的基础
2. **展开 `hpi` 字段**：onset → 开场回答，character → 症状描述，exacerbating/relieving → 追问回答
3. **展开 `symptoms` 字段**：每个阳性发现 → 一个追问 dialogue
4. **展开 `medical_history`、`social_history`、`family_history`** → 对应追问
5. **展开 `ice`** → ICE 追问

### 2.5 质量检查清单

- [ ] 每个 dialogue 都有中英双语
- [ ] Response 使用自然口语（不是书面语）
- [ ] 不会主动泄露诊断信息
- [ ] 至少覆盖：开场、核心症状、2+ 系统追问、既往史、ICE
- [ ] 典型 case 应有 8-15 个 dialogue

---

## 3. Step 2: Add VIVA Question Part Labels

### 3.1 Part 分类

给 `questions` 数组中每个 question 添加 `part` 字段：

| Part | 含义 | 顺序 |
|---|---|---|
| `'dx'` | Diagnosis & differential diagnosis | 1 |
| `'pe'` | Physical examination | 2 |
| `'investigations'` | Investigations / work-up | 3 |
| `'management'` | Management plan | 4 |
| `'other'` | Additional questions | 5 |

### 3.2 改写规则

- 现有 questions 的**第一个问题**通常是最可能的诊断 → `part: 'dx'`
- 如果有鉴别诊断相关的问题 → 也归入 `'dx'`
- 体格检查相关问题 → `part: 'pe'`（每个 case 至少应有 1 个 PE 问题）
- 辅助检查问题 → `part: 'investigations'`（至少 1 个）
- 治疗方案问题 → `part: 'management'`
- 其余问题 → `part: 'other'`

### 3.3 示例

```typescript
// Before:
{ question: 'What is the most likely diagnosis?', answer: '...' }

// After:
{ part: 'dx', question: 'What is the most likely diagnosis and why? Explain your reasoning.', answer: '...' }
```

---

## 4. Step 3: Write PE Findings (`pe_findings`)

### 4.1 格式

纯文本字符串，建议使用以下模板：

```
Vital Signs: T __°C, P __ bpm, R __/min, BP __/__ mmHg

General: [外观描述]

HEENT: [头眼耳鼻喉检查发现]

Neck: [颈部检查]

Respiratory: [呼吸系统听诊]

Cardiovascular: [心血管检查]

Abdomen: [腹部检查]

MSK: [肌肉骨骼]

Skin: [皮肤]

Neurological: [神经系统]

Extremities: [四肢]

Key findings: [总结关键阳性体征]
```

### 4.2 数据来源

- **现有 `patient.symptoms`**：心血管、呼吸系统的阳性发现对应 PE 发现
- **病例原始资料**：如果有 tutor version PDF，提取 PE 部分
- **医学知识推断**：根据诊断推断预期 PE 发现（如贫血 → 结膜苍白、心动过速）

### 4.3 质量检查

- [ ] 关键阳性体征正确（与诊断相符）
- [ ] 阴性体征也有记录（relevant negatives）
- [ ] 血压、心率等数值合理
- [ ] 特殊操作记录（如 rectal exam）

---

## 5. Step 4: Write Investigations (`investigations`)

### 5.1 格式

三段式结构：

```
**Initial Work-up (Core):**
• [检查1] — [目的]
• [检查2] — [目的]

**Reasonable yet Debatable:**
• [检查1] — [目的]

**Further Work-up if Initial Does Not Reveal a Cause:**
• [检查1] — [目的]
```

### 5.2 常见检查清单

| 类别 | 检查 |
|---|---|
| 血液 | CBC, peripheral smear, reticulocyte count |
| 铁代谢 | Iron studies (serum iron, ferritin, TIBC, TSAT) |
| 维生素 | B12, folate |
| 代谢 | Lipid panel, fasting glucose / HbA1c |
| 甲状腺 | TSH |
| 肝肾功 | LFT, RFT (urea, creatinine, electrolytes) |
| 炎症 | ESR, CRP |
| 心脏 | ECG, stress test, echo |
| 呼吸 | CXR, sleep study |
| 癌症筛查 | FOBT / FIT, colonoscopy, imaging |
| 尿液 | Urinalysis |

### 5.3 质量检查

- [ ] 初始检查针对最可能的诊断
- [ ] 鉴别诊断对应的检查也被覆盖
- [ ] 有"further work-up"层级
- [ ] 每项检查都有目的说明

---

## 6. Step 5: Add Vital Signs (`vital_signs`)

格式示例：

```typescript
vital_signs: 'T 37°C (98.7°F), P 102 bpm, R 16/min, BP 126/76 mmHg, BMI 24.1 kg/m²'
```

从原始病例资料或 PE findings 中提取。

---

## 7. Migration Workflow

### Phase 1: Pilot（先做 3-5 个，验证模板）

选择不同类型（不同系统、不同复杂度）的 case：

| Case | 系统 | 复杂度 | 原因 |
|---|---|---|---|
| Case 003 ACS | CV | 中 | 急诊场景，症状明确 |
| Case 015 COPD | Resp | 中 | 慢性病，长期病史 |
| Case 021 IBD | GI | 中高 | 多系统症状，需详细 ROS |
| Case 048 Hypothyroidism | Endo | 中 | 非特异性症状，鉴别诊断重要 |
| Case 051 Diabetes | Endo | 中 | 常见病，并发症追问 |

### Phase 2: 批量迁移（其余 55 个）

按系统分组，逐系统迁移：

1. CV (Cases 3-13)
2. Resp (Cases 14-19)
3. GI (Cases 20-27)
4. Renal (Cases 28-30)
5. MSK (Cases 31-34)
6. Endo (Cases 35, 47-53)
7. Neuro (Cases 36-39)
8. ID (Cases 40-46)
9. Heme (Cases 54-58)
10. Toxicology (Cases 59-60)
11. Health Maint (Cases 1-2)

### 每迁移完一个系统，测试验证后提交。

---

## 8. Quick Reference: Before/After

### Before（现有 case 结构）:
```typescript
const case003ACS: CaseData = {
  _id: 'case-003-acs',
  case_id: 'Case 003 - Chest Pain — Acute Onset',
  case_name: 'Chest Pain — Acute Onset',
  type: 'regular',
  is_general_case: false,
  patient: { /* structured data */ },
  questions: [
    { question: 'What is the most likely diagnosis?', answer: '...' },
    { question: 'What are the three components...', answer: '...' },
    // ... flat list
  ],
  marking_scheme: { /* 4 categories */ },
};
```

### After（迁移后）:
```typescript
const case003ACS: CaseData = {
  _id: 'case-003-acs',
  case_id: 'Case 003 - Chest Pain — Acute Onset',
  case_name: 'Chest Pain — Acute Onset',
  type: 'regular',
  is_general_case: false,
  vital_signs: 'T 37.2°C, P 116 bpm, R 22/min, BP 166/102 mmHg',  // NEW
  patient: { /* structured data — unchanged */ },
  sp_script: [ /* 10-15 dialogue pairs */ ],                        // NEW
  questions: [
    { part: 'dx', question: '...', answer: '...' },                 // MODIFIED
    { part: 'pe', question: '...', answer: '...' },
    { part: 'investigations', question: '...', answer: '...' },
    { part: 'management', question: '...', answer: '...' },
    { part: 'other', question: '...', answer: '...' },
  ],
  pe_findings: `Vital Signs: ...`,                                  // NEW
  investigations: `**Initial Work-up:** ...`,                       // NEW
  marking_scheme: { /* unchanged */ },
};
```

---

## 9. Testing Each Migrated Case

每迁移完一个 case，执行以下验证：

```bash
# 1. Type check
npx tsc --noEmit

# 2. Build
npm run build

# 3. Start server
npx next start -H 0.0.0.0 -p 3000

# 4. 浏览器测试:
#    - Phase 2: 用中文和英文各问几个 trigger 问题 → 确认 AI 给出 scripted response
#    - Phase 2: 问一个不在剧本内的问题 → 确认 AI 可以自由发挥
#    - Phase 3: 确认 VIVA 按 dx → pe → investigations → management → other 顺序
#    - Phase 3: 确认 PE 和 investigation 结果卡片正确显示
```
