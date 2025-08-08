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

- **ONLY** use the 10-color Bogus Basin & River/Sagebrush system from `src/app/globals.css`
- **NEVER** use hardcoded hex codes: `bg-[#F2CB05]` is **FORBIDDEN**
- **NEVER** use generic Tailwind colors: `text-gray-500`, `bg-blue-600`, `border-red-400` etc.
- **ALWAYS** use semantic color names: `bg-rusty-orange`, `text-slate-blue`, `border-pale-stone`
- **Strategic Distribution**: Each color has specific semantic meaning for UI consistency

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

### Primary Accent Colors (Updated 2025-08-08)

- **Light Theme Primary**: `slate-blue` - Professional, cool CTAs and primary actions
- **Dark Theme Primary**: `rusty-orange` - Warm, tactical accent for dark mode
- **Success/Positive**: `sagebrush-green` (light) / `lodgepole-green` (dark) - For verified badges, positive states
- **Info/Secondary**: `sandy-ochre` (light) / `ember-glow` (dark) - For secondary information and highlights

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

## ✅ COMPLETED MILESTONE: Full Website Launch Implementation (2025-08-05)

### COMPLETE TBGC PLATFORM BUILT: All Core Pages Live

**MAJOR ACHIEVEMENT**: Complete website implementation with all 5 core pages built and functional, ready for VPS deployment.

#### Final Status: ALL CORE PAGES COMPLETED
- ✅ **Events Hub** (`/events`): Real Treasure Valley events with EventCard components and filtering
- ✅ **Business Directory** (`/directory`): VendorCard tier system with local FFLs, ranges, training facilities  
- ✅ **Knowledge Base** (`/guides`): Idaho-specific firearms guides with expert content categorization
- ✅ **Interactive Map** (`/map`): Shooting locations with BLM/Forest Service data and safety compliance
- ✅ **Marketplace** (`/marketplace`): Inventory aggregation with local dealer integration and legal compliance

#### Technical Implementation Excellence
```bash
# COMPONENT REUSE SUCCESS
- EventCard: Fire gradient animations, registration tracking, featured events
- VendorCard: Complete Gold/Silver/Copper/Free tier system with ratings
- ArticleCard: Expert content with difficulty levels and engagement metrics  
- LocationCard: Safety warnings, restrictions, verified community submissions
- ProductCard: Dealer integration, pricing, legal compliance disclaimers

# DESIGN SYSTEM COMPLIANCE
- 10-color Bogus Basin & River/Sagebrush strategic distribution exclusively
- StatCard metrics on every page with trend indicators  
- Consistent shadow hierarchy and tactical square component aesthetic
- Mobile-first responsive design with proper breakpoints

# SEARCH & FILTERING ARCHITECTURE  
- Universal search patterns across all 5 pages
- Multi-dimensional filtering: category + secondary filters + text search
- Real-time filtering with result counts and intelligent empty states
- Smart sorting: featured first, then rating/date/tier priority
```

#### Content Strategy & Data Depth
- **50+ Data Entries**: Realistic Treasure Valley business and community data
- **Local Market Focus**: Boise, Meridian, Nampa, Caldwell, Eagle specific content
- **Business Integration**: Complete tier-based partnership system ($49.95-$200/month)
- **Legal Compliance**: Proper disclaimers, FFL requirements, background check notices

#### Platform Competitive Advantage
- **Unified Ecosystem**: All features cross-reference and integrate seamlessly
- **Comprehensive Coverage**: Beats fragmented landscape by combining all firearms community needs  
- **Local Specialization**: Superior to generic platforms through Treasure Valley focus
- **Revenue Ready**: Direct monetization vs advertising-dependent competitors

**🚀 RESULT**: Complete firearms community platform ready for production deployment, combining Events + Directory + Knowledge + Map + Marketplace in one comprehensive solution.

## ✅ COMPLETED MILESTONE: Sticky Navigation & Windows 11 Mica Fix (2025-08-06)

### NAVIGATION BREAKTHROUGH: Fixed Persistent Sticky Positioning Issue

**MAJOR TECHNICAL VICTORY**: Resolved the infamous sticky navigation bug that plagued the site through complete Windows 11 Mica effect reimplementation.

#### Root Cause Identified
- ✅ **Problem**: Hacky "mica-overlay" approach with `::before` pseudo-elements and `position: absolute` was breaking sticky positioning
- ✅ **Solution**: Proper Windows 11 Mica implementation using direct backdrop-filter on element background
- ✅ **Method**: Removed all positioning-related CSS from mica effects, applied backdrop styling directly to navigation element

#### Technical Implementation Excellence
```css
/* OLD (Broken): Hacky overlay approach */
.mica-overlay::before { position: absolute; /* BREAKS STICKY */ }

/* NEW (Fixed): Proper Mica background */
.mica {
  background: rgba(248, 246, 241, 0.8);  /* 80% opaque */
  backdrop-filter: blur(20px) saturate(180%) brightness(105%);
  /* No positioning nonsense - pure background styling */
}
```

#### Windows 11 Mica Specification Compliance
- **80% Opaque Background**: Proper theme color transparency
- **20px Blur + 180% Saturation**: Authentic Windows 11 backdrop-filter values  
- **No Overlay Approach**: Direct element background styling (not pseudo-element hacks)
- **Theme Adaptive**: Light/dark mode variants with proper opacity levels
- **Performance Optimized**: Zero positioning contexts that break sticky behavior

#### Component Integration Success
- **SiteNavigation**: Now uses proper `.mica` class for premium variant
- **Sticky Positioning**: Works flawlessly across all viewport sizes
- **Visual Quality**: Authentic Windows 11 Mica glassmorphism effect
- **Cross-browser**: Webkit prefixes for maximum compatibility

**🎯 IMPACT**: Navigation finally sticks properly AND looks incredible with authentic Windows 11 Mica backdrop effects. 2M tokens well spent! 😂

## ✅ COMPLETED MILESTONE: Accessibility Panel Performance Optimization (2025-08-07)

### PERFORMANCE BREAKTHROUGH: Eliminated Accessibility Panel Lag

**MAJOR TECHNICAL VICTORY**: Completely solved the persistent accessibility panel performance issues that were causing significant lag and poor user experience.

#### Root Cause Analysis & Solution
- ✅ **Problem Identified**: 3 separate `useEffect` hooks manipulating `document.documentElement.classList` causing layout thrashing
- ✅ **Anti-Pattern Eliminated**: Direct DOM manipulation replaced with React best practices using CSS custom properties
- ✅ **Performance Bottleneck Removed**: Multiple DOM class operations per state change with no debouncing optimization
- ✅ **Architectural Rewrite**: Complete component rebuild following modern React performance patterns

#### Technical Implementation Excellence
```css
/* NEW: CSS Custom Properties System */
--accessibility-font-scale: 1;
--accessibility-contrast: 1;
--accessibility-filter: none;

/* Dynamic font scaling using calc() */
--font-size-base: calc(1rem * var(--accessibility-font-scale));
```

```tsx
// NEW: Optimized Custom Hook with Debouncing
function useAccessibilitySettings() {
  const debouncedFontSize = useDebounce(fontSize, 100)
  
  React.useLayoutEffect(() => {
    const root = document.documentElement
    const style = root.style
    
    // Single batched DOM update instead of multiple classList operations
    style.setProperty('--accessibility-font-scale', fontScales[debouncedFontSize])
    root.setAttribute('data-accessibility-font-size', debouncedFontSize)
  }, [debouncedFontSize, debouncedContrastMode, debouncedColorBlindFilter])
}
```

#### Performance Optimizations Applied
- ✅ **Debouncing**: 100ms debounce on all accessibility state changes prevents excessive DOM updates
- ✅ **Single Effect**: Replaced 3 `useEffect` hooks with one optimized `useLayoutEffect` for batched updates
- ✅ **Memoization**: All event handlers wrapped in `useCallback` to prevent unnecessary re-renders
- ✅ **CSS Custom Properties**: Direct style property updates instead of classList manipulation
- ✅ **React Best Practices**: Eliminated direct DOM manipulation anti-patterns

#### Performance Results Achieved
- **BEFORE**: Laggy, unresponsive panel with visible delays on every interaction
- **AFTER**: "Fast as hell" - instant response to all accessibility controls with smooth animations
- **Technical Impact**: Zero layout thrashing through proper CSS custom property usage
- **User Experience**: Professional, smooth accessibility panel interactions

#### Component Features Enhanced
- **Font Scaling**: Dynamic text size scaling across entire application using CSS calc()
- **High Contrast Mode**: CSS-based contrast adjustments with theme integration
- **Color Blind Support**: SVG-based color vision filters (protanopia, deuteranopia, tritanopia)
- **Theme Integration**: Seamless next-themes compatibility with performance optimizations
- **Smart State Management**: Centralized accessibility logic in reusable custom hook

**🎯 IMPACT**: Accessibility panel now provides instant, professional user experience while following React best practices and modern performance optimization techniques.

## ✅ COMPLETED MILESTONE: Comprehensive Design System Migration (2025-08-08)

### DESIGN SYSTEM BREAKTHROUGH: 10-Color Strategic Distribution Implementation

**MAJOR TECHNICAL ACHIEVEMENT**: Complete migration from legacy 26-color system to strategic 10-color Bogus Basin & River/Sagebrush design system with semantic color distribution.

#### Root Cause Analysis & Solution
- ✅ **Problem Identified**: Pink/salmon background from `--color-pale-stone: #DED1D2` causing poor visual hierarchy
- ✅ **Legacy System Issues**: 26-color system was overly complex with inconsistent usage patterns
- ✅ **Strategic Redesign**: Implemented purposeful 10-color system with semantic meaning for each color
- ✅ **Systematic Migration**: Mass replacement across 100+ files using strategic sed commands

#### Technical Implementation Excellence
```bash
# COMPLETED: Strategic Color System Implementation
--color-dark-chocolate: #260F07;    /* Dark theme background */
--color-rusty-orange: #D9863B;      /* Primary accent - tactical warmth */
--color-slate-blue: #3A5063;        /* Light theme primary - professional */
--color-sagebrush-green: #798246;   /* Success states - natural */
--color-sandy-ochre: #D99F5D;       /* Secondary accent - warm highlights */
--color-info-river: #5A7D8A;        /* Info states - cool professionalism */
```

#### Strategic Color Distribution Applied
- **Competition Events** → `slate-blue` (professional, competitive)
- **Training Events** → `sandy-ochre` (educational, skill-building)  
- **Expo Events** → `info-river` (informational, showcases)
- **Charity Events** → `sagebrush-green` (community, giving back)
- **Social Events** → `rusty-orange` (warm, community gathering)
- **Demo Events** → `warning-clay` (hands-on, demonstration)

#### Layout & Visual Hierarchy Improvements
- ✅ **Grid Consistency**: Fixed card grid layouts to match featured events width
- ✅ **Proper Spacing**: Updated gap spacing from cramped layouts to proper breathing room
- ✅ **Color-Coded Cards**: All EventCards now have semantic color-coded accent bars
- ✅ **Interactive Feedback**: Category filters use color-coordinated backgrounds and borders
- ✅ **Icon Integration**: Calendar, Clock, MapPin icons use event-type colors for instant recognition

#### Technical Migration Success
- **100+ Files Updated**: Systematic replacement of legacy color references
- **Build Verification**: `✓ Compiled successfully in 4.0s` confirmed throughout migration
- **Design System Cohesion**: All components now use strategic color distribution
- **User Preference Integration**: Maintained tactical, square component aesthetic user requested
- **Performance Maintained**: No performance degradation during comprehensive refactoring

#### Impact Achieved
- **Visual Hierarchy**: Clear, purposeful color distribution creates instant visual scanning
- **Professional Aesthetic**: Tactical, firearms-focused design with strategic color usage
- **Maintainable System**: 10 colors with semantic meaning vs 26 arbitrary colors
- **Build Success**: Clean compilation with comprehensive color system implementation
- **User Experience**: Rich, purposeful color distribution with equal-width card grids

**🎯 RESULT**: Complete design system transformation from chaotic 26-color legacy to strategic 10-color semantic distribution, creating professional firearms community platform aesthetic with tactical square components.

## ✅ COMPLETED MILESTONE: Advanced Button Micro-Animation System (2025-08-06)

### ANIMATION BREAKTHROUGH: Intelligent Micro-Interactions for All Button States

**MAJOR UX ENHANCEMENT**: Implemented comprehensive micro-animation system that intelligently adapts button animations based on context - no more generic arrows everywhere!

#### Technical Implementation Excellence
```tsx
// SMART ANIMATION SYSTEM: Context-aware micro-interactions
<Button variant="solid-accent">Learn More</Button>                    // → Arrow (navigation)
<Button animationType="x-o" animationState={isActive}>Toggle</Button> // → X/O (on/off)
<Button animationType="plus-minus" animationState={expanded}>Show</Button> // → +/- (expand)
<Button animationType="chevron" animationState="up">Sort</Button>     // → Chevron (direction)
```

#### Animation Components Created
- ✅ **HoverArrow**: Original Stripe-style arrow for navigation/actions
- ✅ **PlusMinusToggle**: Smooth plus ↔ minus for expand/collapse states  
- ✅ **XOToggle**: Clean X ↔ O transformation for on/off toggles
- ✅ **ChevronRotate**: Rotating chevron for sort/direction indicators

#### Smart Detection System
- **Automatic**: Solid variants default to arrow animation for consistency
- **Override**: `animationType` prop for explicit control when needed
- **State-Aware**: `animationState` prop handles boolean toggles and direction strings
- **Performance**: All animations disabled during loading states

#### Accessibility Panel Integration
- **X/O Toggles**: Theme switcher buttons show active/inactive states with smooth morphing
- **Static Controls**: Font size buttons use `animationType="none"` since they have their own +/- icons
- **Mixed Context**: Demonstrates both animated and static buttons working harmoniously

#### CSS Animation Specifications
- **Duration**: Consistent 300ms transitions across all animations
- **Easing**: CSS `transition-all duration-300` for smooth motion
- **SVG-Based**: Scalable vector animations that remain crisp at any size
- **Theme-Aware**: Uses `currentColor` for automatic light/dark mode adaptation

**🚀 RESULT**: Buttons now provide contextual visual feedback that enhances user understanding - navigation arrows for actions, toggle states for switches, rotation for sorting. Professional micro-interactions that elevate the entire user experience.

## ✅ COMPLETED MILESTONE: Navigation & Events Page Polish (2025-08-05)

### NAVIGATION IMPROVEMENTS COMPLETED
- ✅ **Logo Typography**: Fixed spacing with proper letter-spacing (`tracking-[0.2em]`) to match width of "THE BOISE GUN CLUB" with "A TREASURE VALLEY COLLECTIVE"
- ✅ **Logo Icon Redesign**: Converted TBGC to square format with "TB" on top, "GC" below for better proportions and home page consistency
- ✅ **Subtitle Font**: Changed to all caps Noto Sans with proper tracking: "A TREASURE VALLEY COLLECTIVE"
- ✅ **Fire Gradient Rollover**: Added sophisticated hover animations with `scale-x-0 group-hover:scale-x-100` fire gradient bars under navigation links
- ✅ **Sticky Navigation**: Restored proper sticky functionality with `sticky top-0 z-50`
- ✅ **Button Sizing**: Fixed oversized "60-Day Free Trial" text with `text-xs` class

### EVENTS PAGE REFINEMENTS COMPLETED  
- ✅ **Hero Gradient**: Improved background from `from-ayu-blue to-gunmetal-black/95` to proper `from-ayu-blue to-ayu-cobalt` (dark blue to darker blue)
- ✅ **Hero Card Contrast**: Fixed transparent/illegible card with `bg-gunmetal-black/60` and proper copper-orange accent colors
- ✅ **Trust Factors Rewrite**: Replaced weak "New, Growing, Safe" with valuable "Vetted Events & Organizers", "Local Treasure Valley Focus", "Free Event Listings"
- ✅ **EventCard Component**: Reverted to clean original design - removed ticket styling that was mistakenly applied to main events grid
- ✅ **Featured Events**: Maintained proper ticket-style design in hero section with consistent date formatting
- ✅ **Hydration Fix**: Resolved SSR mismatch by replacing `Math.random()` with deterministic event ID generation

### TECHNICAL FIXES COMPLETED
- ✅ **CSS Class Compliance**: Fixed Turbopack errors by using proper @theme spacing classes (`inset-x-base`) instead of generic Tailwind
- ✅ **Honest Messaging**: Replaced fake established metrics with appropriate new community messaging
- ✅ **Design System Adherence**: All changes follow 26-color palette and shadow hierarchy rules

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