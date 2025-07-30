# The Boise Gun Club

A comprehensive digital hub for the Treasure Valley firearms community - serving vendors, clubs, ranges, enthusiasts, and families through a scalable marketplace and directory platform.

## 🎯 Project Overview

**The Boise Gun Club** is not a single gun club website, but a regional platform connecting the entire Treasure Valley firearms ecosystem. Built with Next.js 15, React 19, and a bulletproof design system featuring 80+ components with complete Storybook coverage.

### Key Features

- **Vendor Directory**: Multi-tier listings (Free, Copper, Silver, Gold)
- **Event Aggregation**: Community-wide firearms events and training
- **Forum Categories**: Discussion spaces for different user types
- **Component Library**: 80+ professionally designed UI components
- **Design System**: 26-color TBGC palette with strategic restraint philosophy

## 🚀 Quick Start

### Development Server

```bash
npm run dev          # Start with Turbopack
npm run build        # Production build
npm run lint         # Code quality check
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Storybook Development

```bash
npm run storybook              # Start component development server
npm run build-storybook        # Build static Storybook
npm run storybook:reset        # Clear cache and rebuild (fix issues)
npm run storybook:validate     # Validate file organization
npm run storybook:fix          # Automated configuration fixes
```

Visit [http://localhost:6006](http://localhost:6006) for component development.

## 🏗️ Architecture

### Core Technologies

- **Next.js 15** with App Router and React Server Components
- **React 19** with modern concurrent features
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with CSS-based configuration
- **shadcn/ui** component system ("new-york" style)
- **Storybook v9** with hierarchical organization
- **Vitest + Playwright** for browser testing

### Project Structure

```
src/
├── app/              # Next.js App Router (layouts, pages)
├── components/       # Component library
│   ├── ui/           # 80+ shadcn/ui base components
│   └── marketing/    # Business-specific components
├── lib/              # Utilities and configuration
├── hooks/            # Custom React hooks
├── stories/          # Storybook organization
│   ├── Foundation/   # Colors, typography, spacing
│   ├── Components/   # Individual component stories
│   ├── Patterns/     # Composite component patterns
│   └── Pages/        # Full page demonstrations
└── docs/             # Curated documentation
```

## 🎨 Design System

### TBGC Color Palette

The design system enforces **26 approved colors** with zero tolerance for generic Tailwind colors:

**Primary Accents:**
- `copper-orange` - Light theme primary
- `brass-yellow` - Dark theme primary  
- `clubhouse-lawn-green` - Success states

**Fire Gradients:**
- `from-copper-orange to-brass-yellow` - Hover animations and accents

### Component Patterns

All components follow the **Class Variance Authority (CVA)** pattern with:

- **Required Variants**: `default | premium | elite | glass`
- **Theme-Aware Classes**: `bg-card`, `text-card-foreground`, `border-border`
- **Strategic Restraint**: Purposeful styling avoiding "gaudy" effects
- **Typography Hierarchy**: Rajdhani (display), Noto Sans (body), Noto Serif (accent)

### Shadow Hierarchy

- **Containers**: Get shadows for depth
- **Nested Elements**: Stay flat to avoid shadow stacking
- **Interaction States**: Subtle elevation changes on hover

## 🧩 Component Library

### Base Components (shadcn/ui)
80+ professionally styled components including:
- Form controls (Button, Input, Select, Textarea)
- Data display (Card, Badge, Table, Avatar)
- Navigation (Breadcrumb, Tabs, Pagination)
- Feedback (Alert, Toast, Progress, Skeleton)
- Overlay (Dialog, Sheet, Popover, Tooltip)

### Business Components
- **VendorCard**: 4-tier pricing system with verified badges
- **FacilityCard**: Range and club information display
- **StatCard**: Metrics and KPI visualization
- **TestimonialCarousel**: Community feedback showcase
- **AnimatedSplashCard**: Hero section components

### Layout Components
- **SiteNavigation**: Responsive header with theme toggle
- **SiteFooter**: Multi-section footer with links
- **PageHero**: Consistent page header patterns
- **StatsShowcase**: Metric display grids

## 📋 Development Guidelines

### Required Practices

1. **Design System Compliance**
   - Use only the 26 approved TBGC colors
   - Apply theme-aware classes for dark/light mode
   - Follow CVA component patterns

2. **Code Standards**
   - TypeScript strict mode required
   - No inline styles - use Tailwind arbitrary values
   - Path aliases: `@/components`, `@/lib`, `@/hooks`

3. **Testing Strategy**
   - Vitest + Playwright browser testing
   - Storybook integration for component testing
   - Visual regression testing through Storybook

4. **Storybook Organization**
   - **Foundation**: Design tokens and primitives
   - **Components**: Individual component stories
   - **Patterns**: Composite component demonstrations  
   - **Pages**: Full page layout examples

### Forbidden Practices

- ❌ Hardcoded hex colors: `bg-[#F2CB05]`
- ❌ Generic Tailwind colors: `text-gray-500`, `bg-blue-600`
- ❌ Inline styles: `style="color: red"`
- ❌ Non-theme-aware classes: `bg-white`, `text-black`

## 🔧 Configuration Files

### Key References

- `components.json` - shadcn/ui configuration with path aliases
- `src/app/globals.css` - Complete 26-color palette and design tokens
- `src/components/ui/_component-pattern.tsx` - CVA component template
- `vitest.config.ts` - Testing setup with Storybook integration
- `.storybook/main.ts` - Bulletproof Storybook configuration

### Path Aliases

```typescript
// tsconfig.json paths
"@/components/*": ["./src/components/*"]
"@/lib/*": ["./src/lib/*"]
"@/hooks/*": ["./src/hooks/*"]
"@/ui/*": ["./src/components/ui/*"]
```

## 📖 Documentation

### Component Documentation
Each component includes:
- Comprehensive Storybook stories with all variants
- TypeScript interface documentation
- Usage examples and best practices
- Accessibility compliance notes

### Business Context
Detailed specifications in `_resources/specs/` covering:
- User personas and use cases
- Pricing tier implementations
- Brand guidelines and voice
- Scalability considerations

## 🚢 Deployment

### Development Workflow

1. **Component Development**: Use Storybook for isolated development
2. **Integration Testing**: Vitest + Playwright browser tests
3. **Build Validation**: `npm run build` and `npm run lint`
4. **Visual Testing**: Storybook visual regression tests

### Production Build

```bash
npm run build        # Next.js production build
npm run start        # Start production server
```

### Storybook Deployment

```bash
npm run build-storybook    # Static Storybook build
```

## 🤝 Contributing

### Before Adding Components

1. Run `npm run storybook:validate` to check file organization
2. Follow the CVA pattern from `_component-pattern.tsx`
3. Use only approved TBGC colors and theme-aware classes
4. Add comprehensive Storybook stories with proper categorization

### Troubleshooting

- **Storybook Build Issues**: Run `npm run storybook:reset`
- **Configuration Conflicts**: Run `npm run storybook:fix`
- **Missing Dependencies**: Check `package.json` for required versions

---

**The Boise Gun Club** - Connecting the Treasure Valley firearms community through thoughtful design and robust engineering.