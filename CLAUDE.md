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

### Testing
- Tests are configured with Vitest and run through Storybook integration
- Browser testing uses Playwright with Chromium
- Run tests through Storybook's testing framework

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