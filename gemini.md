# Gemini Project Guidelines: Boise Gun Club v4

This document provides the essential context and rules for the AI assistant (Gemini) to follow when working on this project. It is synthesized from the project's core documentation.

## 1. Project Overview & Goal

The project is a modern, sophisticated website for the Boise Gun Club (v4). The primary goal is to create a "flagship quality" site suitable for an agency showcase.

- **Aesthetic:** A fusion of "Stripe-inspired" precision (layered shadows, precise timing, subtle interactions) and "ClickUp-inspired" vibrancy (selective glassmorphism, tasteful gradients, color splashes).
- **Context:** The design must remain professional, authoritative, and safety-focused, appropriate for a gun club.
- **Philosophy:** We practice component-driven development, adhere to convention over configuration, and enforce strictness and clarity through TypeScript.

## 2. Core Technologies

- **Framework:** Next.js (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Animation:** Motion for React (Framer Motion) v12+
- **Language:** TypeScript (Strict Mode)
- **Components:** shadcn/ui methodology

## 3. Architectural Principles

- **Directory Structure:**
    - `src/app/{route}/page.tsx`: Pages should be lean compositions of components.
    - `src/components/ui/`: The single source of truth for base UI components (e.g., `Button`, `Card`).
    - `src/components/common/`: Complex, cross-feature components (e.g., `SiteHeader`).
    - `src/components/{feature-name}/`: Feature-specific components.
    - `src/lib/`: Utilities and shared logic.
    - `src/hooks/`: Custom React hooks.
    - `src/types/`: Global TypeScript definitions.
- **Server vs. Client Components:** Default to Server Components. Only use Client Components (`"use client"`) for interactivity, and keep them as small and isolated as possible.

## 4. Styling: The Tailwind CSS v4 Rulebook

This is a critical section. Adherence is mandatory.

- **NO Hardcoded Values:** Never use hardcoded styles like `text-[#FFF]` or `w-[500px]`.
- **Use CSS Variables via `@theme`:** All design tokens (colors, fonts, shadows, transitions) are defined as CSS custom properties in `src/app/globals.css` under the `@theme` directive.
- **Use v4 Modern Syntax:** Reference theme variables directly as utility classes.
    - **✅ Correct:** `bg-leonard-yellow`, `border-primary/30`, `font-heading`, `shadow-lg`
    - **❌ Incorrect:** `bg-[--color-leonard-yellow]`, `bg-color-primary`, `border-[#F2CB05]`
- **NO `@apply`:** The `@apply` directive is forbidden. Create a reusable component instead.
- **Dark Mode:** Components must support dark mode. Use CSS variables defined for `:root` and `.dark` that are then referenced by theme utilities (e.g., `bg-card`, `text-text`).

## 5. Component Unification (shadcn/ui Method)

- **Single Source of Truth:** The canonical implementation for any UI primitive (like `Button` or `Card`) is its file in `src/components/ui/`.
- **NO WRAPPERS:** Do not create wrapper components for existing UI primitives.
- **Modification Workflow:** To enhance a component, modify its file in `src/components/ui/` directly. Merge new variants, styles, and logic into this single file.
- **Deprecation:** Old, redundant component files must be deleted after their logic has been merged into the `ui/` component.

## 6. Animations (Motion for React)

- **Client Components:** All animation components must be Client Components (`"use client"`).
- **Performance First:**
    - Prioritize animating `transform` and `opacity`.
    - Use `LazyMotion` to reduce bundle size by importing only necessary features (e.g., `domAnimation`).
    - Use an Intersection Observer (`useScrollMotion` hook exists) to trigger animations on view.
- **Accessibility:** Always respect the `prefers-reduced-motion` media query.

## 7. TypeScript Best Practices

- **Strict Mode is Mandatory:** `tsconfig.json` is set to `"strict": true`.
- **Type Everything:** All props, state, hooks, and event handlers must be explicitly typed.
- **NO `any`:** The `any` type is forbidden. Use `unknown` for dynamic values and perform type-checking.

## 8. Git & Documentation

- **Commit Messages:** Use the Conventional Commits format (`feat:`, `fix:`, `refactor:`, `docs:`).
- **Documentation:** All new components must have Storybook stories. All code should be self-documenting via clear naming and JSDoc comments where necessary.

## 9. Forbidden Practices (Summary)

1.  **Do not** use hardcoded colors, fonts, or spacing values in class names.
2.  **Do not** use the `@apply` directive in CSS.
3.  **Do not** use raw HTML elements like `<button>` or `<a>`. Use the components from `src/components/ui`.
4.  **Do not** use the `any` type in TypeScript.
5.  **Do not** create wrapper components for existing `ui/` primitives. Modify them directly.