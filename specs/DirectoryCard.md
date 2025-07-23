# Component: DirectoryCard

## Intent
A card component for displaying business, instructor, or club directory entries in the Treasure Valley firearms community platform. Must support all design system rules and variants.

## Design System Compliance
- [x] Follows all rules in AI_ENFORCEMENT_CHECKLIST.md
- [x] Uses only approved 26-color palette
- [x] CVA pattern for variants (default, premium, elite, glass)
- [x] No hardcoded colors or fonts
- [x] Responsive and accessible

## Acceptance Criteria
- Supports all required directory fields (name, type, contact, etc.)
- All variants and sizes implemented
- No hardcoded colors or fonts
- Passes accessibility checks (4.5:1 contrast minimum)
- Supports both light and dark themes
- Proper TypeScript interfaces

## Prompt History
> "Generate a Next.js card component for a business directory, using the BGCv4 design system and strict color enforcement."

## Linked Files
- `/src/components/ui/card.tsx`
- `/src/docs/AI_ENFORCEMENT_CHECKLIST.md`
- `/src/app/globals.css`
