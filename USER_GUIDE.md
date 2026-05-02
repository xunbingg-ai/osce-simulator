# OSCE Simulator — 使用指南

## 简介

OSCE Simulator 是一个 AI 驱动的临床沟通技能模拟平台。你可以与 AI 模拟的病人和考官进行交互，练习病史采集和临床推理，获取 AI 生成的个性化反馈。

目前包含 **5 个病例**，涵盖心血管和呼吸系统常见主诉。

## 访问网站

本地开发：`http://localhost:3000`（运行 `npm run dev`）

在线部署：`https://osce-simulator-beta.vercel.app/`

## 使用流程

每个病例的完整练习包含 **4 个阶段**：

### Phase 1：准备阶段

进入病例后，你会看到简要的患者信息卡片：
- 年龄、性别、职业
- 主诉
- 就诊场景（1-2 句话）
- 初诊生命体征（如有）
- 任务说明

**注意**：此阶段仅展示极少信息——这模拟的是真实 OSCE 考试中你进门前看到的场景。详细的病史（既往史、用药史、社会史、家族史等）需要你在 Phase 2 中通过问诊获取。

右侧是沟通技巧提示，复习后点击 **"Enter the Room — Start History-Taking"** 进入下一阶段。

顶部秒表会记录你的准备用时。

### Phase 2：病史采集

在此阶段，你通过文字与 **AI 模拟病人** 交互，采集病史。

**操作方式**：
- 在底部输入框键入问题，按 **Enter** 发送
- 按 **Shift+Enter** 换行
- 输入框上方有字数计数器（限 500 字符）
- AI 思考时显示旋转加载图标

**语言切换**：
聊天区域上方有 **EN | 中文** 切换按钮。切换后：
- 输入框占位文字变为对应语言
- AI 病人以对应语言回复
- **仅 Phase 2 支持中英文切换**，其他阶段均为英文

**结束 Phase 2**：
点击 **"Proceed to VIVA"** 可随时结束问诊，进入下一阶段。系统会弹出确认框，因为进入 VIVA 后无法返回问诊。

### Phase 3：VIVA 问答

AI 考官（Examiner）会逐一提问，评估你的临床推理能力。

**规则**：
- 考官每次问一个问题
- 你回答后，考官给出简短反馈，然后问下一题
- 全部问题问完后，考官提示 "The viva session is now complete"
- 点击 **"Get Feedback"** 查看评估报告

考官**不会在提问中泄露答案**——诊断只会在 Phase 4 的反馈中揭晓。

### Phase 4：反馈报告

系统调用 AI 分析你的完整对话记录，生成评估报告。

**评分维度**（总分 20，每项 4 分）：

| 维度 | 评估内容 |
|---|---|
| Language, Manner & Empathy | 礼貌程度、是否使用通俗语言、是否展现同理心 |
| Information Gathering | SOCRATES 覆盖度、系统回顾完整性、危险因素采集 |
| Clinical Knowledge & Information | 诊断正确性、检查方案、管理计划 |
| Addressing Patient Concerns | 是否回应 ICE（想法、担忧、期望） |

**反馈选项卡**：
- **Overview**：总体评分 + 详细分数 + 优点 + 改进方向
- **Consultation**：Phase 2 问诊表现总结
- **VIVA**：Phase 3 临床推理表现总结

## 病例列表

| 编号 | 主诉 | 系统 |
|---|---|---|
| Case 003 | Chest Pain — Acute Onset | Cardiovascular |
| Case 004 | Progressive Exertional Dyspnea | Cardiovascular |
| Case 008 | Palpitations and Shortness of Breath | Cardiovascular |
| Case 014 | Sudden Onset Dyspnea | Pulmonary |
| Case 018 | Hemoptysis with Chronic Cough | Pulmonary |

## 秒表说明

每个阶段顶部有秒表，记录你的用时。秒表**不做评分的依据**，仅作为你自我反思的参考。你可以花费任意时间。

## 常见问题

**Q：为什么 Phase 1 只显示这么少的信息？**
A：这是故意设计的。真实 OSCE 考试中，你在进门前只知道主诉和场景，其余信息需要通过问诊获取。Phase 1 模拟的正是"门卡"信息。

**Q：为什么病例标题看起来不像诊断？**
A：病例以主诉命名而不是诊断，防止在 VIVA 阶段之前泄露答案。你需要在问诊和推理中自己得出结论。

**Q：Phase 2 中 AI 病人的回答可信吗？**
A：AI 基于病例数据中的结构化病史回答问题，信息是准确的。但 AI 的表现可能存在轻微差异。

**Q：网络访问需要翻墙吗？**
A：Vercel 服务器在中国大陆被墙，需要 VPN。局域网 IP 访问不需要翻墙。
