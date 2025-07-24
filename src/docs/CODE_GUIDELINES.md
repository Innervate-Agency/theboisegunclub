# Code Guidelines: Technical Standards

This document defines the technical standards and development practices for the Boise Gun Club v4 project. These guidelines ensure consistency, maintainability, and quality across the codebase.

## 1. Core Philosophy

1. **Component-Driven:** Our UI is built from a hierarchy of reusable components. Pages are compositions of these components, not monolithic blocks of code.
2. **Convention Over Configuration:** We follow established patterns and conventions to minimize boilerplate and cognitive overhead.
3. **Single Responsibility:** Each component, hook, or utility has a single, well-defined purpose.
4. **Strictness and Clarity:** We use TypeScript's strict mode and explicit typing to catch errors early and make our code self-documenting.

## 2. Project & Component Architecture

We use a feature-based architecture within the Next.js App Router.

### 2.1. Directory Structure

- `src/app/`: Contains all routes and pages. The `page.tsx` file for any given route should be lean, focusing only on fetching data and composing components.
- `src/components/ui/`: "Dumb" UI primitives that are globally reusable (e.g., `Button`, `Input`, `Card`). These should be highly generic and styleable.
- `src/components/common/`: More complex components that are used across multiple features (e.g., `SiteHeader`, `PageTitle`).
- `src/components/{feature-name}/`: Components that are specific to a single feature or page (e.g., `src/components/membership/MembershipCard`).
- `src/lib/`: Utility functions, API helpers, and other shared logic.
- `src/hooks/`: Custom hooks that encapsulate reusable logic.
- `src/types/`: Global TypeScript type definitions and interfaces.

### 2.2. Page Composition: The Gold Standard

The `page.tsx` file should do as little as possible. Its primary role is to assemble the UI by importing and arranging the necessary components. Logic, state, and complex JSX should be encapsulated within those components.

**Example (`src/app/about/page.tsx`):**

```tsx
// GOOD: A clean, declarative page composition
import { AboutHero } from '@/components/about/AboutHero';
import { OurHistory } from '@/components/about/OurHistory';
import { BoardOfDirectors } from '@/components/about/BoardOfDirectors';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurHistory />
      <BoardOfDirectors />
    </main>
  );
}
```

### 2.3. Server vs. Client Components

- **Default to Server Components:** All components are Server Components by default. Use them for fetching data and accessing server-side resources.
- **Opt-in to Client Components:** Only use Client Components when you need interactivity (e.g., `onClick`, `useState`, `useEffect`). Add `"use client";` to the top of the file to make it a Client Component.
- **Isolate Interactivity:** Keep Client Components as small as possible. Create specific interactive components rather than making an entire page a client component.

## 3. Styling with Tailwind CSS v4

We use Tailwind CSS v4's CSS-first configuration. All styling rules are defined in `src/app/globals.css`.

### 3.1. Design Tokens & Theming

**There are no hardcoded hex codes.** All colors, fonts, and other design tokens must be defined as CSS variables under the `@theme` directive.

**Example (`src/app/globals.css`):**

```css
@import "tailwindcss";

@theme {
  --color-primary: #F2CB05; /* Leonard Yellow */
  --color-secondary: #0A0A0A; /* Rich Black */
  --color-text-light: #FFFFFF;
  --color-text-dark: #0A0A0A;

  --font-heading: "Rajdhani", sans-serif;
  --font-body: "Noto Sans", sans-serif;
  --font-serif: "Noto Serif", serif;
}
```

### 3.2. Light & Dark Mode

We use **CSS variables with theme switching** strategy for dark mode. The `dark` class or `[data-theme="dark"]` selector activates it. All components must support both modes.

- **Define Theme Variables:** Use CSS variables in `@layer base` for theme-aware colors.
- **Override in Dark Mode:** Use `.dark` or `[data-theme="dark"]` selector to override variables.
- **Reference in Components:** Use the CSS variables with Tailwind v4 syntax.

**Example (`globals.css`):**
```css
@layer base {
  :root {
    --color-card: hsl(0 0% 100%);
    --color-text: hsl(0 0% 0%);
  }

  .dark, [data-theme="dark"] {
    --color-card: hsl(207 97% 12%);
    --color-text: hsl(0 0% 100%);
  }
}
```

**Example (Component using Tailwind v4 Modern Syntax):**
```tsx
// ✅ GOOD: Uses theme-aware colors with v4 syntax
<div className="bg-card text-text">
  ...
</div>

// ✅ With opacity modifiers
<div className="border-leonard-yellow/30 bg-lahoma-orange/10">
  ...
</div>
```

### 3.3. Forbidden Practices

1. **NO Hardcoded Colors/Styles:** Do not use `text-[#FFF]`, `border-[#F2CB05]`, etc. Use theme variables: `bg-leonard-yellow`
2. **NO Raw HTML Elements:** Do not use `<button>`, `<a>`, etc. directly. Use the corresponding component from `src/components/ui`.
3. **NO Gratuitous `text-center`:** Only use `text-center` when the design explicitly calls for it. Do not use it as a crutch for layout.
4. **NO `@apply`:** `@apply` is forbidden. It creates CSS bloat and defeats the purpose of a utility-first framework. If you need to reuse styles, create a component.

## 4. Animations with Motion for React (Framer Motion)

Animations should be purposeful and performant. **Note:** Framer Motion is now "Motion for React" and requires v12+ for React 19 compatibility.

### 4.1. Creating Animation Components

Since Motion requires client-side logic, any component using it must be a Client Component (`"use client"`). To keep server components clean, wrap motion elements in their own client components.

**Example (`src/components/effects/FadeIn.tsx`):**

```tsx
"use client";
import { motion } from 'framer-motion';

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

### 4.2. Performance & Bundle Size (2025 Standards)

- **Animate `transform` and `opacity`:** Prioritize these properties for GPU-accelerated, smooth animations.
- **Use `LazyMotion`:** To reduce the bundle size, only import the animation features you need.
- **Mobile Optimization:** Reduce animation complexity on mobile devices.
- **Intersection Observer:** Only animate elements when they come into view.

```tsx
"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";

<LazyMotion features={domAnimation}>
  <m.div animate={{ x: 100 }}>
    Hello
  </m.div>
</LazyMotion>
```

### 4.3. Performance Monitoring

- Use browser DevTools Performance tab to identify bottlenecks
- Monitor animation performance with React DevTools
- Respect `prefers-reduced-motion` for accessibility

## 5. TypeScript Best Practices

### 5.1. Strict Mode is Mandatory

The `tsconfig.json` must have `"strict": true`.

### 5.2. Type Everything

- **Props:** All component props must be explicitly typed with an `interface` or `type`.
- **State:** Use `useState<MyType>(...)` to type state.
- **Hooks:** Custom hooks must have typed inputs and outputs.
- **Events:** Use React's event types, e.g., `React.MouseEvent<HTMLButtonElement>`.
- **Avoid `any`:** Do not use `any`. Use `unknown` for values that are truly dynamic and perform type-checking.

### 5.3. Type Organization

Global types that are shared across the application should reside in the `src/types` directory. Component-specific types can be co-located with the component file.

## 6. Component Unification Strategy

This project follows the shadcn/ui methodology where `src/components/ui/{component}.tsx` files are the single source of truth.

### 6.1. The Methodology

We will not create wrapper components. We will follow the intended shadcn/ui workflow by directly modifying the base components. For each component (e.g., `Button`, `Card`, `Badge`):

1. **Identify the Source:** The `src/components/ui/{component}.tsx` file is the single source of truth.
2. **Merge and Enhance:** The styles, variants, and additional features from any custom components will be merged directly into the `src/components/ui` file.
3. **Consolidate Exports:** The file should export the component and any specialized variations as named exports from the same file.
4. **Update Stories:** The corresponding Storybook file will be updated to import only from the unified `src/components/ui` component.
5. **Deprecate and Delete:** Once a component has been unified, old redundant files will be deleted.

### 6.2. Refactoring Priority

**High Priority (Core UI):**
1. Button
2. Card
3. Tooltip
4. Select
5. Checkbox

**Medium Priority (Extended UI):**
6. Accordion
7. Avatar
8. Dropdown Menu
9. Popover
10. Sheet

**Low Priority (Specialized):**
11. Calendar
12. Command
13. Slider
14. Toggle
15. Pagination

## 7. Git & Documentation Standards

### 7.1. Commit Messages

Use conventional commit format with descriptive messages:

```
feat: add glassmorphism variants to Card component
fix: resolve dark mode contrast issues in Button
docs: update component API documentation
refactor: unify Badge component variants
```

### 7.2. Documentation Requirements

- All components must have comprehensive Storybook stories
- README files should include usage examples and API documentation
- Type definitions should be self-documenting with JSDoc comments
- Breaking changes must be documented in CHANGELOG.md

### 7.3. Code Reviews

- All PRs require review before merging
- Code must pass TypeScript checks and ESLint rules
- Storybook stories must be updated with component changes
- Accessibility guidelines must be followed (WCAG AA compliance)

## 8. Performance Standards

### 8.1. Bundle Optimization

- Use dynamic imports for large components
- Implement code splitting at the route level
- Optimize images with Next.js Image component
- Use LazyMotion for animations

### 8.2. Accessibility

- All interactive elements must be keyboard accessible
- Proper ARIA labels and roles required
- Color contrast ratios must meet WCAG AA standards
- Screen reader compatibility testing required

This document is the authoritative source for all technical standards. Any deviations must be documented and approved through the standard review process.