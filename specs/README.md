# SpecStory Integration Guide

## Overview
This `/specs` directory integrates with SpecStory to maintain AI prompt history, design rationale, and component specifications alongside your code.

## Workflow for New Components

### 1. Create Spec First
```bash
# Example: Creating a new ServiceCard component
touch specs/ServiceCard.md
```

### 2. Use This Template
```markdown
# Component: [ComponentName]

## Intent
[What is this for? Who uses it? Why does it exist?]

## Design System Compliance
- [ ] Follows all rules in _resources/AI_ENFORCEMENT_CHECKLIST.md
- [ ] Uses only approved 26-color palette
- [ ] CVA pattern for variants (default, premium, elite, glass)
- [ ] No hardcoded colors or fonts
- [ ] Typography: Rajdhani (H1-H2), Noto Sans (body)

## Acceptance Criteria
- [ ] All variants and sizes implemented
- [ ] Passes accessibility checks (4.5:1 contrast minimum)
- [ ] Supports light/dark themes
- [ ] Proper TypeScript interfaces
- [ ] Regional marketplace context (not single club)

## Prompt History
> [Paste your actual LLM prompts here - SpecStory can autosave these]

## Linked Files
- `/src/components/[path]/[component].tsx`
- `/_resources/AI_ENFORCEMENT_CHECKLIST.md`
- `/src/app/globals.css`

## SpecStory Metadata
- Created: [date]
- Last Updated: [date]
- AI Agent: [Claude/Copilot/etc]
- Session ID: [SpecStory will track this]
```

### 3. Let SpecStory Track Context
- SpecStory automatically saves prompts, context, and rationale
- Always reference the checklist and existing patterns
- Link back to component files and Storybook stories

## Integration with Storybook
Each component should have:
1. **Spec file** (this directory)
2. **Implementation** (`src/components/`)
3. **Story file** (`src/stories/`)
4. **Design system compliance** (enforced by checklist)

## Quality Gates
- [ ] Spec exists and follows template
- [ ] All checklist items verified
- [ ] SpecStory session saved with full context
- [ ] Component follows CVA pattern
- [ ] Storybook story references spec

---

**Remember**: This is Innervate Agency's flagship project. Every component should demonstrate world-class design system implementation suitable for Fortune 500 presentation.