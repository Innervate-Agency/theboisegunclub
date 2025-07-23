# AI Coding Agent Instructions

## Project Overview
The Boise Gun Club is a comprehensive Next.js platform serving as the unified digital hub for the entire Treasure Valley firearms community. This is a **regional marketplace/directory platform**, not a single gun club website.

## Critical Design System Rules (ZERO TOLERANCE)
- **ONLY** use the 26 approved colors from `src/app/globals.css` (Leonard Yellow through Clubhouse Lawn Green)
- **NEVER** use hardcoded hex codes: `bg-[#F2CB05]` is **FORBIDDEN** 
- **ALWAYS** use Tailwind v4 syntax: `bg-leonard-yellow/20` not `bg-[var(--color-leonard-yellow)]`
- **FOLLOW** typography hierarchy: Rajdhani (H1-H2), Noto Sans (H3-H6), Noto Serif (editorial)

## Architecture Patterns
- **CVA Components**: All UI components use Class Variance Authority pattern from `src/components/ui/_component-pattern.tsx`
- **Server/Client Split**: Default to Server Components, add `"use client"` only for interactivity
- **Design System Enforcement**: Every component must reference `_resources/AI_ENFORCEMENT_CHECKLIST.md`

## Required Workflow
1. **Always check existing spec** in `_resources/specs/` before creating components
2. **Reference the component pattern** from `src/components/ui/_component-pattern.tsx`
3. **Verify design compliance** against `_resources/AI_ENFORCEMENT_CHECKLIST.md`
4. **Use established variants**: `default | premium | elite | glass` with proper Leonard Yellow/Lahoma Orange gradients

## Key Files & Patterns
- `src/app/globals.css` - Complete 26-color palette and design tokens
- `src/lib/utils.ts` - Contains `cn()` helper and `brandColors` map
- `_resources/design-system-extract/` - Portable design system for new projects
- `_resources/CLAUDE.md` - Development commands and architecture notes

## Common Commands
```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript checking
```

## Business Context
Design for **multiple user types**: vendors, clubs, ranges, enthusiasts, families. Plan **scalable systems**: directory listings, event aggregation, forum categories. This is Innervate Agency's flagship project demonstrating world-class design and development.

## Forbidden Behaviors
❌ **DO NOT** design for single organization needs  
❌ **DO NOT** use generic "premium" styling without Leonard Yellow/Lahoma Orange  
❌ **DO NOT** break established component patterns  
❌ **DO NOT** ignore the regional marketplace scope