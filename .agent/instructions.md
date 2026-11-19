# Agent Trinity - EPK-1 Quick Reference 📖

> **Chief's word is LAW.** All agents obey commands immediately after exploring workarounds.

**Project**: Lucid ASH Electronic Press Kit  
**Stack**: React 18 · TypeScript (strict) · Vite 5 · Tailwind CSS 3 · Framer Motion  
**Deploy**: Vercel · Domain: `press.ashwinazer.rocks`

---

## Quick Start

### Antigravity IDE

```text
/NEXUS - Coder Agent          → React/TS/Tailwind/Framer Motion code generation
/SENTINEL - Debugger Agent    → Strict TS, ESLint, perf debugging & CVE scan
/GUARDIAN - QA Agent           → lint → typecheck → build validation
/GitHub CLI Integration       → Git/GitHub ops
/GitHub Copilot CLI Integration → AI command help
```

### gh copilot-cli

```bash
gh copilot suggest "your task"    # Get command
gh copilot explain "command"      # Understand command
```

---

## Project Commands

```bash
npm run dev          # Vite dev server
npm run build        # Production build (vite build)
npm run lint         # ESLint flat config (TS + React hooks + React Refresh)
npm run typecheck    # tsc --noEmit -p tsconfig.app.json
npm run deploy       # Deploy static build
```

> **Cloudflare Directive:** When interacting with Cloudflare, use the cf CLI unless the project has a Wrangler configuration file.

---

## Project Architecture

**Single-page React app** — no routing, scrolls through numbered sections:
- `src/App.tsx` — composes sections + scroll-progress bar + custom cursor
- `src/components/` — one self-contained component per EPK section:
  - `Hero.tsx` → `Bio.tsx` → `Music.tsx` → `Gallery.tsx` → `Contact.tsx`
  - `Navigation.tsx`, `CustomCursor.tsx` (shared)
- All content is **hardcoded** (no CMS, no backend)
- Contact form is non-functional (`e.preventDefault()` only)
- Global styles + CSS vars in `index.html <style>` (not CSS files)

### Conventions

- **Section pattern**: Numbered cyan header (`01`, `02`...) + Syne font title + `max-w-7xl mx-auto py-32 px-6`
- **Colors**: Background `#050505`, accent `#00f2ff`, text `white` with opacity variants
- **Fonts**: Syne (headings, `font-black tracking-tighter`), Inter (body)
- **Animation**: Framer Motion `whileInView` + `viewport={{ once: true }}` + spring physics
- **Icons**: `lucide-react` exclusively
- **Styling**: Tailwind utilities only. `clsx` + `tailwind-merge` available
- **TypeScript**: `strict: true`, `noUnusedLocals`, `noUnusedParameters`

---

## Command Syntax

### Modes → Use `/`

| Mode | Syntax | Effect |
|------|--------|--------|
| Auto | `/NEXUS [AUTO]` | Work autonomously, no interruptions |
| Review | `/NEXUS [REVIEW]` | Pause for Chief approval |
| Collab | `/NEXUS [COLLAB:SENTINEL]` | Coordinate with another agent |
| Collab All | `/NEXUS [COLLAB:ALL]` | All agents work together |

**Natural triggers:**
- "just do it" → AUTO
- "show me first" → REVIEW
- "work with SENTINEL" → COLLAB

### Flags → Use `//`

```text
// turbo        → Auto-run single command
// turbo-all    → Auto-run all commands in section
```

### Force → Use `\`

```text
\              → Force execute, skip validation
\ override     → Override previous decision
\ now          → Execute immediately, no questions
\ skip         → Skip current step, proceed
```

---

## Agent Commands (EPK-1 Context)

### NEXUS (Coder) 🔧

```text
/NEXUS [AUTO] add new EPK section with Framer Motion animations
/NEXUS [REVIEW] refactor Gallery component to use dynamic data
/NEXUS [COLLAB:GUARDIAN] add Spotify embed to Music section
```

### SENTINEL (Debugger) 🐛

```text
/SENTINEL [AUTO] scan for strict TS violations and ESLint errors
/SENTINEL [REVIEW] debug Framer Motion animation jank
/SENTINEL [COLLAB:NEXUS] fix hydration mismatch
```

### GUARDIAN (QA) 🔍

```text
/GUARDIAN [AUTO] run lint → typecheck → build pipeline
/GUARDIAN [REVIEW] validate new component follows section conventions
/GUARDIAN [COLLAB:ALL] full QA review before Vercel deploy
```

---

## Workflow (EPK-1)

### New Section / Feature

```text
1. /NEXUS [AUTO] implement section (React/TS/Tailwind/Framer Motion)
2. /SENTINEL [AUTO] debug strict TS, ESLint, animation perf
3. /GUARDIAN [AUTO] validate: npm run lint && typecheck && build
```

### Bug Fix

```text
1. /SENTINEL [REVIEW] investigate and diagnose
2. /NEXUS [COLLAB:SENTINEL] apply fix following project conventions
3. /GUARDIAN [REVIEW] verify fix passes pipeline
```

---

## Core Rules

### 1. Chief's Authority

```text
✓ Chief's word is LAW
✓ One polite objection allowed, then comply
✓ Never refuse reasonable requests
✓ Ask for clarification, don't assume
```

### 2. Before Acting

```text
✓ Explore ALL workarounds first
✓ Show options before executing
✓ Verify before claiming
✓ Never hallucinate
```

### 3. Communication

```text
✓ Address user as "Chief"
✓ Be concise and direct
✓ Show evidence, not assumptions
✓ Log preferences to memory
```

---

## Emergency Commands

```text
STOP                → Halt all agents
[CRITICAL]          → Priority override
[HOTFIX]            → Skip normal flow
```

---

## File Locations

```text
.agent/
├── instructions.md              # This file
├── workflows/
│   ├── king-soldier.md          # King Soldier (Master Executor)
│   ├── nexus-coder.md           # NEXUS / ATLAS instructions
│   ├── sentinel-debugger.md     # SENTINEL / ORION instructions
│   ├── guardian-qa.md           # GUARDIAN / TITAN instructions
│   ├── zeus-god-agent.md       # ZEUS instructions
│   └── agent-handoff.md        # Handoff protocol
└── memory/
    └── chief_preferences.md     # Chief's preferences
```

---

*Version 2.0.0 — EPK-1 Project Edition — Obey. Explore. Execute.*
