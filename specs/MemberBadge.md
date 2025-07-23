# Component: MemberBadge

## Intent
A badge component for displaying member status, achievements, or roles. Must strictly follow the BGCv4 design system and support all badge variants.

## Design System Compliance
- [x] Follows all rules in AI_ENFORCEMENT_CHECKLIST.md
- [x] Uses only approved 26-color palette
- [x] CVA pattern for variants (default, premium, elite, glass, status)
- [x] No hardcoded colors or fonts
- [x] Responsive and accessible

## Acceptance Criteria
- All badge variants and sizes implemented
- No hardcoded colors or fonts
- Passes accessibility checks (4.5:1 contrast minimum)
- Supports both light and dark themes
- Proper TypeScript interfaces

## Prompt History
> "Generate a Next.js badge component for member status, using the BGCv4 design system and strict color enforcement."

## Linked Files
- `/src/components/ui/badge.tsx`
- `/src/docs/AI_ENFORCEMENT_CHECKLIST.md`
- `/src/app/globals.css`
