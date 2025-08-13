# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

**The Boise Gun Club** - Next.js 15 application serving as a comprehensive digital hub for Treasure Valley firearms communities. Built with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Development Commands

### Essential Commands
- `npm run dev` - Development server (Next.js 15)
- `npm run build` - Production build  
- `npm run lint` - ESLint code quality check
- `npm run health` - Project health check
- `npm run storybook` - Component development (port 6006)

### Testing & Quality
- **Testing**: Vitest with Storybook integration (auto-runs via `npm run storybook`)
- **Browser Testing**: Playwright + Chromium
- **Specs**: Additional tests in `/specs/*.spec.ts`

## Architecture

### Core Stack
- **Next.js 15** (App Router, TypeScript)
- **React 19** (Server Components)  
- **Tailwind CSS v4** (CSS-based config)
- **shadcn/ui** ("new-york" style)
- **Framer Motion** (Magic Line navigation, micro-animations)
- **Phosphor Icons** (Primary icon system with tactical aesthetic)

### Path Aliases
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/ui` → `src/components/ui`

## Design System (CRITICAL - ZERO TOLERANCE)

### Color System
- **ONLY** use Boise landscape colors from `src/app/globals.css` (26-color system)
- **FORBIDDEN**: Generic Tailwind (`text-gray-500`), hex codes (`bg-[#F2CB05]`)
- **REQUIRED**: Semantic names (`bg-rusty-orange`, `text-slate-blue`)
- **Theme Classes**: Always use `bg-card`, `text-card-foreground`, `border-border` (never `bg-white`)

### Shadow System (8-Level Semantic)
- **Progression**: `shadow-ghost` → `shadow-whisper` → `shadow-present` → `shadow-elevated` → `shadow-prominent` → `shadow-commanding` → `shadow-hero` → `shadow-modal`
- **Interactive**: Shadows step up on hover (present→elevated, prominent→commanding)

### Tactical Square Aesthetic
- **Main Cards**: `rounded-none` (square tactical)
- **Interactive**: Minimal rounding (buttons `rounded-xs`, badges `rounded-sm`)
- **Hierarchy**: Shadow-first, not border-radius

### Primary Accents
- **Light Theme**: `slate-blue` (CTAs), `sagebrush-green` (success)
- **Dark Theme**: `rusty-orange` (CTAs), `lodgepole-green` (success)

### Typography
- **Display**: Rajdhani (H1-H2, weights 300-800 for site title)
- **Body**: Noto Sans (H3-H6, body text)
- **Accent**: Noto Serif (editorial)

### Animation System (Micro-Interactions)
- **Button Animations**: Context-aware micro-animations (arrow, plus-minus, x-o, chevron)
- **Navigation Effects**: Magic Line sliding with spring physics (bounce: 0.25, stiffness: 130, damping: 9)
- **Icon Interactions**: Subtle wiggle animations (-5°, 5°, 0°) with glow effects
- **Loading States**: Branded spinning Diamond (replaces generic spinners)
- **Performance**: All animations disabled during loading, use currentColor for theming

### Icon System (Phosphor Primary)
- **Primary Library**: Phosphor Icons (@phosphor-icons/react)
- **Fallback Libraries**: Tabler, Heroicons, React Icons for specialized needs
- **Weight System**: Use "bold" weight for navigation (tactical aesthetic)
- **Sizing Standard**: h-4 w-4 for most contexts, h-6 w-6 for prominent elements
- **Tactical Aesthetic**: Angular, geometric icons preferred over rounded alternatives

## Business Context
**The Boise Gun Club** is a regional marketplace/directory platform for the entire Treasure Valley firearms community - NOT a single gun club. Design for scalable systems: directory listings, event aggregation, forum categories.

## Storybook Setup

### File Organization
- **Stories**: `src/stories/*.stories.tsx` - Component stories ONLY
- **Documentation**: `src/docs/*.mdx` - Safe, curated documentation ONLY  
- **NEVER**: Put loose `.mdx` files in `src/stories/` (will break build)

### Commands
- **Before committing**: Run `npm run storybook:fix && npm run storybook`
- **If errors occur**: Run `npm run storybook:reset` to clear cache
- **Framework**: Ensure `.storybook/main.ts` uses `@storybook/nextjs-vite`

## Key Recent Achievements

### Magic Line Navigation System (2025-08-12)
- **Framer Motion Integration**: Professional spring physics with Magic Line sliding indicator
- **Micro-Animation System**: Context-aware button animations (arrow, x-o, plus-minus, chevron)
- **Phosphor Icon Migration**: Complete replacement with tactical angular icons
- **Performance**: Animations disabled during loading, use currentColor for theming

### Design System Implementation
- **26-Color Boise Landscape Palette**: Complete custom color system in `src/app/globals.css`
- **8-Level Shadow System**: Semantic depth hierarchy (ghost → whisper → present → elevated → prominent → commanding → hero → modal)
- **Tactical Square Aesthetic**: Main cards use `rounded-none`, subtle rounding for interactive elements
- **Page-Specific Theming**: Dynamic CSS custom properties for each navigation page

### Component Architecture
- **Button System**: CVA-based with intelligent micro-animations and state management
- **Card Components**: EventCard, VendorCard, ArticleCard with tier-based styling
- **Accessibility Panel**: Performance-optimized with CSS custom properties and debouncing
- **Loading States**: Branded Diamond spinner component

## Key Reference Files

- `src/app/globals.css` - Complete 26-color Boise landscape palette and design tokens
- `src/components/ui/button.tsx` - Enhanced with micro-animation system and animationType props
- `src/components/ui/micro-animations.tsx` - HoverArrow, PlusMinusToggle, XOToggle, ChevronRotate components
- `src/components/ui/site-navigation.tsx` - Magic Line navigation with Framer Motion spring physics
- `src/components/ui/loading-spinner.tsx` - Branded Diamond spinner component
- `src/components/ui/accessibility-panel.tsx` - Performance-optimized with CSS custom properties

## Project Memory

- **Colors**: ONLY use custom 26-color Boise landscape palette from `globals.css` - NEVER generic Tailwind
- **Icons**: Always use Phosphor Icons as primary choice - tactical, angular aesthetic preferred
- **Aesthetic**: Tactical square components (`rounded-none` for cards, minimal rounding for interactive)
- **Animation**: Context-aware micro-interactions - arrows for navigation, toggles for state changes
- **Performance**: All animations disabled during loading, use `currentColor` for theming
- **Navigation**: Magic Line sliding effect is signature feature - never remove without approval
- **Typography**: Rajdhani font weights 300-800 for display, perfect kerning and letter-spacing
- **Development**: Kill dev server before restarting, run in background