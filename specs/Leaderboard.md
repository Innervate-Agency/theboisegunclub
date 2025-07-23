# Feature: Leaderboard

## Intent

A leaderboard feature to display top members, scores, or achievements. Must be visually engaging, accessible, and strictly follow the BGCv4 design system.

## Design System Compliance

- [x] Follows all rules in AI_ENFORCEMENT_CHECKLIST.md
- [x] Uses only approved color palette and typography
- [x] Responsive layout for mobile and desktop
- [x] No hardcoded colors or fonts
- [x] Accessible (screen reader, keyboard navigation)

## Acceptance Criteria

- Displays top N members with avatars, names, and scores
- Supports sorting and filtering
- Passes accessibility checks
- All UI elements use design tokens
- TypeScript types for all data

## Prompt History

> "Create a leaderboard page for BGCv4, using the design system and enforcing accessibility and color rules."

## Linked Files

- `/src/components/ui/leaderboard.tsx`
- `/src/docs/AI_ENFORCEMENT_CHECKLIST.md`
- `/src/app/globals.css`
