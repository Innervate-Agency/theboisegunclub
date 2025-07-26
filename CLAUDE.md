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
- **Test Command**: No standalone test command - tests run through Storybook dev server
- **Test Setup**: Configured in `vitest.config.ts` with Storybook addon integration

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
- **ALWAYS** use Tailwind v4 syntax: `bg-leonard-yellow/20` not `bg-[var(--color-leonard-yellow)]`
- **Color Map**: Available in `src/lib/utils.ts` as `brandColors` object

### Component Patterns
- **CVA Components**: All UI components use Class Variance Authority pattern from `src/components/ui/_component-pattern.tsx`
- **Required Variants**: Use `default | premium | elite | glass` with proper Leonard Yellow/Lahoma Orange gradients
- **Component Reference**: Always check existing specs in `_resources/specs/` before creating components

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

### Before Starting Storybook:
1. **If MDX errors occur**: Run `npm run storybook:reset` to clear cache and rebuild
2. **Configuration issues**: Run `npm run storybook:fix` for automated fixes
3. **Framework conflicts**: Ensure `.storybook/main.ts` uses `@storybook/nextjs-vite`
4. **Preview conflicts**: Keep ONLY `.storybook/preview.tsx` (delete any preview.ts)

### Common Error Fixes:
- **"MDX parse failed"** → Missing `@storybook/addon-docs` in main.ts or backticks in MDX content
- **"Webpack compilation error"** → Run `npm run storybook:reset` to clear cache
- **"Multiple preview files"** → Delete `.storybook/preview.ts`, keep `preview.tsx`
- **"Framework mismatch"** → Use `@storybook/nextjs-vite` not `@storybook/nextjs`
- **"Vite parsing errors"** → Escape backticks in MDX files or use code blocks

### Required Storybook Configuration:
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

### Prevention Rules:
- **NEVER** manually edit Storybook config without running the fix script after
- **ALWAYS** run `npm run storybook:fix` after configuration changes
- **NEVER** mix `@storybook/nextjs` and `@storybook/nextjs-vite`
- **ALWAYS** include `@storybook/addon-docs` for MDX support in Storybook 9

## Key Reference Files
- `src/app/globals.css` - Complete 26-color palette and design tokens
- `src/components/ui/_component-pattern.tsx` - CVA component template
- `_resources/specs/` - Component specifications
- `.github/copilot-instructions.md` - Additional AI coding guidelines
- `scripts/fix-storybook.js` - Automated Storybook configuration fixer