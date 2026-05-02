# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (for local dev only — HMR fails on non-localhost)
npm run build     # Production build (required before sharing via ngrok or deploy)
npm run start     # Start production server (always use -H 0.0.0.0 for sharing)
npm run lint      # ESLint
npx tsc --noEmit  # Type check without emitting
```

For sharing on LAN or ngrok, always use production mode: `npm run build && npx next start -H 0.0.0.0 -p 3000`. Dev mode's Turbopack HMR WebSocket breaks on non-localhost URLs.

## Architecture

This is a **Next.js 16 App Router** (Tailwind CSS 4, TypeScript) OSCE clinical communication simulator. Text-only chat with AI-simulated patients and examiners via DeepSeek v4 flash API. No voice I/O, no auth, no database.

### Data flow

```
Phase 1 (preparation):  Case data from static TS files → UI only, no API
Phase 2 (chat):         User text → POST /api/chat → DeepSeek → AI patient reply
Phase 3 (viva):         User text → POST /api/chat → DeepSeek → AI examiner reply
Phase 4 (feedback):     Full transcript → POST /api/assessment → DeepSeek → Report
```

### Pages (3 routes)

| Route | Type | Role |
|---|---|---|
| `/` | Server component | Landing page + case selector |
| `/case/[caseId]` | Server component (async) | 4-phase overview + "Start Session" |
| `/chat/[caseId]` | Client component (`'use client'`) | Orchestrates all 4 phases via state machine |

The chat page manages phase transitions as a state machine: `preparation → chat → viva → feedback`. Each phase gets its own stopwatch (PreparationPhase, ChatPhase, VivaPhase are client components; FeedbackPhase fetches from `/api/assessment`).

### API routes (2 endpoints)

- `POST /api/chat` — Handles both Phase 2 and Phase 3. Accepts `{ messages, phase: "chat"|"viva", caseId, language? }`. Builds system prompt via `src/lib/prompts.ts` and calls DeepSeek.
- `POST /api/assessment` — Phase 4 feedback. Accepts `{ messages, caseId }`. Tells DeepSeek to return JSON with 4-category scoring (20 marks) plus strengths/improvements.

### Key files

- `src/types/index.ts` — All shared types: `CaseData`, `PatientInfo`, `HPI`, `ChatMessage`, `Phase`, `FeedbackData`, etc.
- `src/lib/deepseek.ts` — Thin wrapper around `POST https://api.deepseek.com/chat/completions`. Reads `DEEPSEEK_API_KEY` from env.
- `src/lib/prompts.ts` — Builds system prompts for AI patient (EN/ZH), AI examiner, and assessment evaluator. The VIVA prompt has a critical anti-leak rule.
- `src/data/cases/index.ts` — Case registry. `getCaseById()` matches by `case_id` field (exact string match after `decodeURIComponent`).
- `src/data/cases/case-*.ts` — 5 structured case files. Each exports a `CaseData` object with patient data, VIVA questions, and 20-mark marking scheme.

### Case data rules

- **`case_id` must not contain `/`** — Next.js routes interpret it as a path separator even when URL-encoded. Use `&` instead.
- **Case titles use chief complaints, not diagnoses** — prevents leaking the answer before VIVA. The `case_name` and `case_id` fields only describe symptoms (e.g., "Chest Pain — Acute Onset", not "Acute Coronary Syndrome").
- **Phase 1 shows minimal info** — only age/gender/chief complaint/setting/vitals. Detailed HPI, history, and ICE are hidden for discovery during Phase 2.
- New cases follow the same `CaseData` structure. Add the file to `src/data/cases/`, then import and add to the `allCases` array in `src/data/cases/index.ts`.

### Stopwatch (not countdown)

All cases are untimed. `src/components/Stopwatch.tsx` is a client component using `setInterval`. Each phase starts its stopwatch independently; elapsed time is for self-reflection only.

### Phase 2 bilingual toggle

Only Phase 2 (history-taking) supports `EN | 中文` switch via `src/components/LanguageToggle.tsx`. Switching changes the DeepSeek system prompt language. Phases 1, 3, and 4 are English-only.

### Tailwind 4 notes

- Uses `@import "tailwindcss"` (v4 syntax, not old `@tailwind base/components/utilities`)
- Cannot `@apply` custom utility classes in v4 — e.g., `.btn-primary` must repeat all utility classes rather than `@apply btn`
- Custom component classes (`.card`, `.btn`, `.btn-primary`, `.btn-secondary`) defined in `src/app/globals.css`

### Next.js 16 notes

- `params` in server component pages is a **Promise** — must `await` before accessing properties
- Client components use `useParams()` from `next/navigation` (synchronous)
