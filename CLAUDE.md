# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **The Boise Gun Club** - a Next.js 15 application serving as a comprehensive digital hub for Treasure Valley firearms communities. The project uses React 19, TypeScript, and Tailwind CSS with extensive UI components based on shadcn/ui and Radix UI primitives.

## Development Commands

### Core Development

- `npm run dev` - Start development server with Turbopack (uses --turbopack flag)
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - ESLint with auto-fix
- `npm run health` - Project health check
- `npm run fix` - Quick fixes script
- `npm run sync:docs` - Sync design documentation
- `npm run ammo-list` - Generate ammo list

### Storybook (Component Development)

- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` - Build Storybook for production
- `npm run storybook:reset` - Clear cache and rebuild (fix broken builds)
- `npm run storybook:check` - Validate configuration (smoke test)  
- `npm run storybook:fix` - Automated configuration fix script
- `npm run storybook:validate` - Validate file organization (run before adding files)

### Testing

- **Primary**: Tests are configured with Vitest and run through Storybook integration
- **Browser Testing**: Uses Playwright with Chromium (`@vitest/browser`)
- **Test Execution**: Tests auto-run when Storybook stories are loaded via `npm run storybook`
- **Test Setup**: Configured in `vitest.config.ts` with Storybook addon integration
- **No Standalone Tests**: All testing happens through Storybook's Vitest integration

## Architecture & Structure

### Core Technologies

- **Next.js 15** with App Router (TypeScript)
- **React 19** with RSC (React Server Components)
- **Tailwind CSS v4** for styling
- **shadcn/ui** component system with "new-york" style
- **Framer Motion** for animations
- **next-themes** for theme management

### Project Structure

```
src/
├── app/           # Next.js App Router (layout, pages)
├── components/    # React components
│   ├── ui/        # shadcn/ui components (80+ components)
│   └── marketing/ # Business-specific components
├── lib/           # Utilities (cn function for class merging)
├── hooks/         # Custom React hooks
├── stories/       # Storybook stories for all components
└── docs/          # Project documentation
```

### Key Configuration Files

- `components.json` - shadcn/ui configuration with path aliases
- `tsconfig.json` - TypeScript with `@/*` path mapping to `./src/*`
- `vitest.config.ts` - Testing setup integrated with Storybook

### Component System

- **Base**: shadcn/ui components in `/src/components/ui/`
- **Custom**: Business components like `FacilityCard`, `StatCard`, `AnimatedSplashCard`
- **Layout**: Navigation, hero sections, footers
- **Styling**: Uses CSS variables, supports dark/light themes
- **Icons**: Lucide React and Radix UI icons

### Typography & Fonts

- **Primary**: Noto Sans (body text)
- **Display**: Rajdhani (headings, weights 300-700)
- **Serif**: Noto Serif (accent text)
- All fonts use `display: 'swap'` optimization

### Development Patterns

- TypeScript strict mode enabled
- CSS-in-JS with Tailwind utilities
- Component-first architecture with extensive Storybook coverage
- Form handling with React Hook Form + Zod validation
- Responsive design with mobile-first approach

### Path Aliases

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/ui` → `src/components/ui`

Use these patterns when adding new components or features to maintain consistency with the existing codebase.

## Design System Enforcement

### Critical Color Rules (ZERO TOLERANCE)

- **ONLY** use the 26 approved colors from `src/app/globals.css` (Leonard Yellow through Clubhouse Lawn Green)
- **NEVER** use hardcoded hex codes: `bg-[#F2CB05]` is **FORBIDDEN**
- **NEVER** use generic Tailwind colors: `text-gray-500`, `bg-blue-600`, `border-red-400` etc.
- **ALWAYS** use Tailwind v4 syntax: `bg-leonard-yellow/20` not `bg-[var(--color-leonard-yellow)]`
- **Color Map**: Available in `src/lib/utils.ts` as `brandColors` object

### Critical Shadow Rules (ZERO TOLERANCE)

- **CONSISTENT SHADOWS**: ALL components use `shadow-sm hover:shadow-md` regardless of tier
- **NEVER** use shadow depth for tier indication: `shadow-lg`, `shadow-xl`, `shadow-2xl` are **FORBIDDEN** for premium variants
- **PREMIUM FEATURES**: Express through background overlays (`before:` pseudo-elements) and gradient accents (`after:` pseudo-elements)
- **STRATEGIC RESTRAINT**: Avoid visual noise - consistent shadow depth maintains professional appearance
- **SPACING**: Use `gap-8` for card grids, not `gap-6` or smaller for proper breathing room

### Critical Border Rules (ZERO TOLERANCE - NEW POLICY)

- **BORDERS ARE RESTRICTED**: Only use borders for alerts, badges, sonner/toast, form inputs, tables, and explicit outline variants
- **USE SHADOWS INSTEAD**: Cards, modals, dropdowns, navigation, and content containers must use shadows for visual separation
- **SHADOW HIERARCHY**: `shadow-xs` (minimal) → `shadow-sm` (default) → `shadow-md` (interactive) → `shadow-lg` (elevated) → `shadow-xl` (hero)
- **EXCEPTION**: `outlined` variants can use borders when explicitly requesting outline styling

### Primary Accent Colors (Updated 2025-07-28)

- **Light Theme Primary**: `copper-orange` - Perfect contrast on light backgrounds
- **Dark Theme Primary**: `brass-yellow` - Optimal visibility on dark backgrounds  
- **Success/Positive**: `clubhouse-lawn-green` - For verified badges, positive states
- **Fire Gradients**: `from-copper-orange to-brass-yellow` - For hover animations and accents

### Theme-Aware Component Classes (REQUIRED)

All components MUST use theme-aware classes for dark/light mode support:

```tsx
// ✅ CORRECT - Theme-aware
className="bg-card text-card-foreground border-border"

// ❌ WRONG - Hardcoded colors  
className="bg-white text-black border-gray-200"
```

**Required Theme Classes:**
- `bg-card` instead of `bg-white`
- `text-card-foreground` instead of `text-black` or `text-gray-900`
- `text-muted-foreground` instead of `text-gray-500` or `text-gray-600`
- `border-border` instead of `border-gray-200`
- `bg-muted` instead of `bg-gray-50` or `bg-gray-100`

### Component Patterns

- **CVA Components**: All UI components use Class Variance Authority pattern from `src/components/ui/_component-pattern.tsx`
- **Required Variants**: Use `default | premium | elite | glass` with proper copper-orange/brass-yellow gradients
- **Fire Animations**: Use `h-1 bg-gradient-to-r from-copper-orange to-brass-yellow` for bottom accent bars
- **Component Reference**: Always check existing specs in `specs/` before creating components
- **Design Validation**: Reference `_resources/specs/` directory for detailed component specifications

### Tailwind CSS v4 Compliance (ENFORCED)

- **NO INLINE STYLES**: Never use `style="..."` attributes - use arbitrary values instead: `top-[117px]`
- **PROPER @theme USAGE**: Use `@theme` directive, not `@theme inline` 
- **CSS-BASED CONFIG**: No `tailwind.config.js` - all configuration in CSS files
- **ARBITRARY VALUES**: Use `className="top-[117px]"` instead of inline styles

### Typography Hierarchy

- **Display**: Rajdhani (headings H1-H2, weights 300-700)
- **Primary**: Noto Sans (body text, H3-H6)
- **Serif**: Noto Serif (accent/editorial text)
- All fonts use `display: 'swap'` optimization

## Business Context

This is **The Boise Gun Club** - a regional marketplace/directory platform serving the entire Treasure Valley firearms community. This is NOT a single gun club website but a comprehensive digital hub for multiple user types: vendors, clubs, ranges, enthusiasts, and families. Design decisions should reflect scalable systems: directory listings, event aggregation, forum categories.

## Storybook - BULLETPROOF SETUP (CRITICAL - READ FIRST)

### 🔒 **BULLETPROOF FILE ORGANIZATION**

- **Stories**: `src/stories/*.stories.tsx` - Component stories ONLY
- **Documentation**: `src/docs/*.mdx` - Safe, curated documentation ONLY  
- **NEVER**: Put loose `.mdx` files in `src/stories/` (will break build)

### 🛡️ **SAFEGUARDS AGAINST BREAKAGE**

1. **Before adding ANY file**: Run `npm run storybook:validate`
2. **Before committing**: Run `npm run storybook:fix && npm run storybook`
3. **Documentation rule**: ONLY put `.mdx` files in `src/docs/`
4. **Story rule**: ONLY put `.stories.*` files in `src/stories/`

### Before Starting Storybook

1. **If MDX errors occur**: Run `npm run storybook:reset` to clear cache and rebuild
2. **Configuration issues**: Run `npm run storybook:fix` for automated fixes
3. **Framework conflicts**: Ensure `.storybook/main.ts` uses `@storybook/nextjs-vite`
4. **Preview conflicts**: Keep ONLY `.storybook/preview.tsx` (delete any preview.ts)

### Common Error Fixes

- **"MDX parse failed"** → Missing `@storybook/addon-docs` in main.ts or backticks in MDX content
- **"Webpack compilation error"** → Run `npm run storybook:reset` to clear cache
- **"Multiple preview files"** → Delete `.storybook/preview.ts`, keep `preview.tsx`
- **"Framework mismatch"** → Use `@storybook/nextjs-vite` not `@storybook/nextjs`
- **"Vite parsing errors"** → Escape backticks in MDX files or use code blocks

### Required Storybook Configuration

```typescript
// .storybook/main.ts - EXACT CONFIGURATION
import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: [
    // BULLETPROOF: Only load .stories files and curated docs
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/docs/*.mdx', // Safe, curated documentation only
  ],
  addons: [
    '@storybook/addon-docs', // REQUIRED for MDX support
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: { name: '@storybook/nextjs-vite', options: {} },
  docs: { autodocs: 'tag' },
  staticDirs: ['../public'],
};
```

### Prevention Rules

- **NEVER** manually edit Storybook config without running the fix script after
- **ALWAYS** run `npm run storybook:fix` after configuration changes
- **NEVER** mix `@storybook/nextjs` and `@storybook/nextjs-vite`
- **ALWAYS** include `@storybook/addon-docs` for MDX support in Storybook 9

## ✅ COMPLETED MIGRATION: Storybook Design System Restoration (2025-08-03)

### MIGRATION COMPLETE: 100% Success

**CRITICAL ISSUE RESOLVED**: Complete restoration of Storybook design system after systematic migration from broken arbitrary value syntax to proper design token utilities.

#### Final Status: ALL PHASES COMPLETED
- ✅ **Storybook Migration**: 88 story files completely fixed (52 → 0 problematic files)
- ✅ **Shadow System**: Proper Stripe-inspired shadows restored (`--shadow-flat` with real depth)
- ✅ **Card Components**: All arbitrary syntax replaced with utility classes
- ✅ **Build Validation**: Both Next.js and Storybook builds passing
- ✅ **Design Tokens**: All 390+ utility classes properly generated and functional

#### What Was Accomplished
```bash
# COMPLETED: Storybook Story Migration
find src/stories -name "*.stories.tsx" -exec sed -i 's/gap-\[var(--space-md)\]/gap-md/g' {} \;
find src/stories -name "*.stories.tsx" -exec sed -i 's/p-\[var(--space-lg)\]/p-lg/g' {} \;
find src/stories -name "*.stories.tsx" -exec sed -i 's/space-y-\[var(--space-xl)\]/space-y-xl/g' {} \;
# ... and 10+ more spacing/shadow pattern replacements

# COMPLETED: Shadow System Restoration
--shadow-flat: 0 6px 12px -2px rgba(50, 50, 93, 0.25), 0 3px 7px -3px rgba(0, 0, 0, 0.3);

# COMPLETED: Card Component Cleanup
# Replaced p-[var(--card-padding)] with p-md throughout card.tsx
```

#### Impact Achieved
- **VISUAL RESTORATION**: Cards, buttons, and components now have proper shadows and spacing
- **DESIGN CONSISTENCY**: All components use systematic `shadow-flat` → `shadow-elevated` progression
- **CODE QUALITY**: Zero arbitrary value syntax remaining in Storybook stories
- **PERFORMANCE**: Proper utility class usage instead of CSS variable hacks
- **MAINTAINABILITY**: Single source of truth for all design values

#### Migration Method
- **Systematic sed commands**: Ensured consistency across all files
- **Build validation**: Verified functionality after each change
- **Pattern-based replacement**: Comprehensive coverage of all arbitrary syntax
- **Quality assurance**: Manual verification of critical components

**🎉 RESULT**: Complete design system restoration with professional Stripe-inspired shadows and proper component hierarchy.

## ✅ COMPLETED MILESTONE: Professional Splash Page (2025-08-04)

### SPLASH PAGE TRANSFORMATION COMPLETE: LandingPage.stories.tsx

**CRITICAL ACHIEVEMENT**: Complete professional splash page redesign with enhanced visual hierarchy, proper spacing, and compelling conversion-focused content.

#### Final Status: ALL REQUIREMENTS COMPLETED
- ✅ **Hero Section**: Premium glassmorphism background with single-line title and balanced content
- ✅ **Feature Cards**: 4 main platform features with fire gradient rollovers
- ✅ **Problem Section**: 6 ayu-colored problem cards with varied descriptive badges  
- ✅ **Solution Section**: Dedicated section with comprehensive solution overview
- ✅ **CTA Section**: Professional opaque form with founding member messaging
- ✅ **Content Strategy**: Eliminated repetition, unique messaging per section
- ✅ **Visual Polish**: Consistent py-4xl spacing, proper card hierarchy, strategic color usage

#### Key Improvements Achieved
```bash
# HERO ENHANCEMENTS
- Single-line title: "THE BOISE GUN CLUB" with font weights (800/300)
- VendorCard-style glassmorphism background with brass-yellow/copper-orange overlay
- Balanced 4-point feature list to match StatCards visual weight

# CARD INTERACTIONS  
- Fire gradient bottom bars on hover (VendorCard-style implementation)
- 6 ayu colors for problem cards: ayu-red, ayu-blue, ayu-green, ayu-cobalt, ayu-purple, ayu-yellow
- Descriptive badges: Fragmentation, Isolation, Discovery, Education, Heritage, Advocacy

# LAYOUT RESTRUCTURE
- Merged 6 problem cards into Platform Features section (eliminated awkward gap)
- Dedicated Solution section with proper py-4xl spacing
- Opaque CTA form with proper Input component variant="default" size="lg"
```

#### Content Strategy Success
- **Hero**: Strategic business positioning and scale (250K+ gun owners, 4-tier model)
- **Features**: Technical differentiation and advanced capabilities
- **Problems**: Market gaps and specific pain points with varied categories
- **Solution**: Professional tools and comprehensive platform benefits  
- **CTA**: Launch urgency with partnership integration and founding member exclusivity

#### Business Integration
- **Partnership messaging** integrated into CTA description
- **Coming Soon** messaging with "Launch In Progress" 
- **Founding member perks** with proper brass-yellow star icons
- **Professional conversion flow** with opaque form and gradient button

**🎯 RESULT**: Professional, conversion-focused splash page ready for MVP launch with proper TBGC design system implementation and strategic business messaging.

## Key Reference Files

- `src/app/globals.css` - Complete 26-color palette and design tokens
- `src/components/ui/_component-pattern.tsx` - CVA component template
- `specs/` - Component specifications and requirements
- `.github/copilot-instructions.md` - Additional AI coding guidelines
- `scripts/` - Automation scripts for health checks, fixes, and validation
- `scripts/fix-storybook.js` - Automated Storybook configuration fixer
- **MIGRATION_PROGRESS.md** - Detailed sed command tracking and violation inventory

## Project Memory

- The user prefers that all styling use their custom 26-color Idaho Firearms Heritage palette instead of generic Tailwind CSS classes.
- The user prefers using design tokens and a restrained styling approach to ensure UI components look and function great.
- Badges should have no shadows and instead use a very light outline in the same color (darker than the badge fill), and colors must come from the global.css palette.

## Storybook Stories Guidance

- When writing Storybook stories, use shared input story components rather than custom ones; buttons should follow flat style rules without shadows; ensure proper text hierarchy with titles larger than descriptions; apply design system rules consistently in Dialog and Tabs stories.