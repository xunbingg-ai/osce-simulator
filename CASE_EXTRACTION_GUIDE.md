# 添加新病例指南

## 概述

本文档说明如何从 *Case Files Internal Medicine* 教材（或其他来源）提取病例并添加到 OSCE Simulator 病例库中。

## 前置准备

- PDF 文件：`Case Files Internal Medicine Eugene C Toy Gabriel M Aisenberg Z-Library.pdf`（在项目根目录 `D:\OSCE_web\`）
- Python 环境，已安装 PyPDF2：
  ```bash
  pip install PyPDF2
  ```

## 步骤一：在 PDF 中定位目标病例

1. 用 PyPDF2 查看第 24-26 页（书的 Listing of Cases）找到目标病例的页码：

```python
import PyPDF2
reader = PyPDF2.PdfReader(r'D:\OSCE_web\Case Files Internal Medicine.pdf')
# 病例列表在第 23-26 页（0-indexed: 22-25）
for i in range(22, 26):
    text = reader.pages[i].extract_text()
    if text:
        print(text)
```

输出会列出所有 60 个病例、所属系统和起始页码（书中页码，不是 PDF 页码）。

2. 搜索目标病例的标题，找到精确的 PDF 页码：

```python
# 搜索包含 "CASE N" 的页面（N 为病例编号）
for i in range(40, 260):
    text = reader.pages[i].extract_text()
    if text and 'CASE X' in text:  # X 替换为病例编号
        print(f'PDF page {i+1}')
        print(text[:300])
        break
```

3. 确定病例结束位置（找到下一个 "CASE N+1"）以获取完整范围。

## 步骤二：提取原始文本

```python
import PyPDF2, sys
sys.stdout.reconfigure(encoding='utf-8')

reader = PyPDF2.PdfReader(r'D:\OSCE_web\Case Files Internal Medicine.pdf')
# 替换 start 和 end 为实际 PDF 页码（0-indexed）
start = 65  # 病例起始页
end = 80    # 下一病例起始页 - 1

case_text = ''
for i in range(start, end + 1):
    text = reader.pages[i].extract_text()
    if text:
        case_text += text + '\n'

# 保存原始文本
case_name = 'case-XXX'  # 替换
with open(rf'D:\OSCE_web\_{case_name}_raw.txt', 'w', encoding='utf-8') as f:
    f.write(case_text)
print(f'{len(case_text)} chars extracted')
```

## 步骤三：阅读并分析病例内容

每个病例包含以下结构：

1. **病例摘要（Vignette）**：患者主诉、病史摘要、检查结果
2. **参考答案**：诊断和下一步治疗
3. **Analysis**：学习目标和考虑因素
4. **Approach to the Disease**：定义、临床方法、表格、算法
5. **Comprehension Questions**：4 道选择题及答案
6. **Clinical Pearls**：关键知识点
7. **References**：参考文献

你需要从中提取：
- 患者信息（年龄、性别、职业、主诉、现病史、系统回顾、既往史、用药史、社会史、家族史）
- VIVA 问题（从 Comprehension Questions 和病例中的问题改编）
- ICE（教材可能没有直接给出，需要从病例上下文中合理推断）

## 步骤四：创建结构化病例文件

在 `src/data/cases/` 中创建新文件，命名格式：`case-NNN-short-name.ts`

```typescript
// src/data/cases/case-NNN-short-name.ts
import { CaseData } from '@/types';

const caseNNN: CaseData = {
  _id: 'case-NNN-short-name',           // 唯一标识，kebab-case
  case_id: 'Case NNN - Chief Complaint', // 显示在病例列表中，以主诉命名
  case_name: 'Chief Complaint',          // 简短名称
  type: 'regular',                       // 'regular' 或 'general'
  is_general_case: false,                // 与 type 对应
  patient: {
    age: 0,
    gender: 'M',
    occupation: '...',
    chief_complaint: '...',
    presentation: {
      setting: '...',
      duration: '...',
      hpi: {
        onset: '...',
        site: '...',
        character: '...',
        radiation: '...',
        severity: '...',
        exacerbating_factors: [],
        relieving_factors: [],
      },
    },
    symptoms: {
      respiratory: { /* ... */ },
      cardiovascular: { /* ... */ },
      constitutional: { /* ... */ },
      negatives: { /* ... */ },
    },
    medical_history: {
      chronic_conditions: [],
      negatives: [],
    },
    drug_history: {
      allergies: 'NKDA',
      medications: [],
    },
    social_history: {
      smoking: '...',
      alcohol: '...',
    },
    family_history: '...',
    ice: {
      ideas: '...',
      concerns: '...',
      expectations: '...',
    },
  },
  questions: [
    {
      question: '...',
      answer: '...',
    },
    // 建议每个病例包含 5-8 个 VIVA 问题
  ],
  marking_scheme: {
    total_marks: 20,
    categories: {
      language_manner_empathy: {
        max_score: 4,
        criteria: {
          elements: ['...', '...'],
        },
      },
      gather_additional_information: {
        max_score: 4,
        criteria: {
          hpi_socrates: { /* ... */ },
          /* ... */
        },
      },
      provide_accurate_appropriate_information: {
        max_score: 4,
        criteria: {
          elements: ['...', '...'],
        },
      },
      addressing_patient_concerns: {
        max_score: 4,
        criteria: {
          ice: {
            ideas: '...',
            concerns: '...',
            expectations: '...',
          },
          biopsychosocial_aspects: true,
        },
      },
    },
  },
};

export default caseNNN;
```

完整类型定义参见 `src/types/index.ts`，完整病例示例参见 `src/data/cases/case-003-acs.ts`。

## 步骤五：注册病例

编辑 `src/data/cases/index.ts`，在 `allCases` 数组中添加新病例：

```typescript
import caseNNN from './case-NNN-short-name';  // 添加 import

export const allCases: CaseData[] = [
  case003ACS,
  case004HFAS,
  case008AFMS,
  case014PE,
  case018LungCA,
  caseNNN,   // 添加这一行
];
```

## 步骤六：验证

```bash
# 类型检查
npx tsc --noEmit

# 构建验证
npm run build
```

两者都应无错误通过。

## 关键规则

### case_id 命名
- **只使用主诉，不使用诊断**（防止 VIVA 前泄露答案）
- **不能包含 `/`**（Next.js 路由会将其解析为路径分隔符）
- 格式：`Case NNN - Chief Complaint`

示例：
- `Case 003 - Chest Pain — Acute Onset` ✅
- `Case 003 - Acute Coronary Syndrome` ❌（泄露诊断）
- `Case 004 - Heart Failure / Aortic Stenosis` ❌（含 `/`）

### Phase 1 信息控制
- Phase 1 展示的信息在 `PreparationPhase.tsx` 组件中
- 该组件自动从 `CaseData.patient` 中抽取 age/gender/chief_complaint/setting/vitals
- `symptoms.cardiovascular` 和 `symptoms.respiratory` 中的字段会被渲染为"初诊生命体征"
- 确保这些字段的值是 string 类型（如 `'116 bpm'`），而非 boolean

### ICE 推断
教材原文通常不直接给出 ICE。从以下线索推断：
- **Ideas**：患者的陈述暗示他们对自己病情的理解
- **Concerns**：从社会史中推断（如家庭责任、工作需求）
- **Expectations**：从就诊场景中推断

### VIVA 问题
- 从 Comprehension Questions 改编为开放式问答
- 补充鉴别诊断、检查方案、治疗方案、并发症等 OSCE 常见考点
- 每个病例建议 5-8 题

### marking_scheme 评分标准
- 每项 `criteria` 是 `Record<string, unknown>` 类型
- `provide_accurate_appropriate_information` 的 criteria 必须用 `{ elements: [...] }` 包裹（不能是裸数组）
- 根据病例内容定制评分要素

## 已提取的原始文本参考

以下文件是之前提取的原始病例文本，可作为参考：

| 文件 | 病例 |
|---|---|
| `_case3_raw.txt` | Case 3: ACS |
| `_case4_raw.txt` | Case 4: Heart Failure / Aortic Stenosis |
| `_case8_raw.txt` | Case 8: Atrial Fibrillation / Mitral Stenosis |
| `_case14_raw.txt` | Case 14: Pulmonary Embolism |
| `_case18_raw.txt` | Case 18: Hemoptysis / Lung Cancer |

注意：这些原始文本中的病例标题包含诊断（如 "Acute Coronary Syndrome"），创建结构化数据时需替换为主诉。
