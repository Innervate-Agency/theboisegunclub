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
**The Boise Gun Club** is a regional marketplace/directory platform for the entire Treasure Valley firearms community - NOT a single gun club. **Community-focused platform** built by Idaho gun owners, for Idaho gun owners, emphasizing authentic voice over corporate messaging. Design for scalable systems: directory listings, event aggregation, forum categories.

## Storybook Setup

### File Organization
- **Stories**: `src/stories/*.stories.tsx` - Component stories ONLY
- **Documentation**: `src/docs/*.mdx` - Safe, curated documentation ONLY  
- **NEVER**: Put loose `.mdx` files in `src/stories/` (will break build)

### Commands
- **Before committing**: Run `npm run storybook:fix && npm run storybook`
- **If errors occur**: Run `npm run storybook:reset` to clear cache
- **Framework**: Ensure `.storybook/main.ts` uses `@storybook/nextjs-vite`

## Navigation Architecture

### Template System (Critical - Use These Patterns)
- **ArticlePageTemplate**: Unified template for articles, events, guides with breadcrumbs, author info, and section-specific theming
- **BusinessDetailTemplate**: Comprehensive business profiles with reviews, contact info, and verification badges
- **MarketplaceProductTemplate**: Product detail pages with specifications, vendor info, and related products

### Dynamic Routing Patterns
- **Events**: `/events/[slug]` - Article-style event details using ArticlePageTemplate
- **Directory**: `/directory/[slug]` - Business profiles using BusinessDetailTemplate  
- **Armory**: `/the-armory/[slug]` - Equipment reviews using ArticlePageTemplate
- **Guides**: `/guides/[slug]` - Legal/safety guides using ArticlePageTemplate
- **Marketplace**: `/marketplace/[id]` - Product details using MarketplaceProductTemplate

### Card-to-Detail Navigation
- **EventCard**: `href` prop → `/events/[slug]` with auto-slug generation
- **VendorCard**: `href` prop → `/directory/[slug]` with proper click handling
- **BlogCard**: `sectionPath` prop for multi-section use (Armory, Guides)
- **ProductCard**: Link navigation → `/marketplace/[id]` for product details

### Breadcrumb Implementation
- **Consistent Components**: Always use shadcn/ui Breadcrumb, BreadcrumbList, BreadcrumbItem
- **Template Integration**: All detail templates include proper breadcrumb navigation
- **Section Theming**: Breadcrumbs use section-specific color classes (nav-events, nav-armory, etc.)

### CTA Functionality Standards
- **Suggest Article**: `mailto:content@boiseguncollective.com` with structured templates
- **List Items/Training**: `mailto:marketplace@boiseguncollective.com` for business applications
- **Contact Support**: `mailto:support@boiseguncollective.com` for user assistance
- **Join Community**: `mailto:info@boiseguncollective.com` for community onboarding

## Key Recent Achievements

### Comprehensive Navigation System Implementation (2025-08-15)
- **Complete Platform Connectivity**: Every card component now links to detailed pages
- **Template Architecture**: Unified ArticlePageTemplate, BusinessDetailTemplate, MarketplaceProductTemplate system
- **Dynamic Routing**: [slug]/[id] patterns across all major sections (Events, Directory, Armory, Guides, Marketplace)
- **Breadcrumb Standardization**: shadcn/ui Breadcrumb components throughout platform
- **CTA Functionality**: Converted all placeholder buttons to functional mailto engagement
- **SEO Enhancement**: Individual pages for all content with proper metadata and routing
- **Type Safety**: Full TypeScript implementation with proper navigation prop interfaces

### Modern Footer Redesign & LLC Integration (2025-08-14)
- **Multi-Tier "Fat Footer"**: Complete redesign following 2024-2025 modern patterns with newsletter CTA, 5-column architecture, and comprehensive navigation
- **LLC Branding Integration**: Updated copyright to "Boise Gun Collective, LLC" with professional contact information (info@boiseguncollective.com)
- **Phosphor Icon Migration**: Complete footer icon consistency using tactical Phosphor icons with weight="bold"
- **Page-Specific Accent Bar**: Dynamic colored strip using navigation color system (home=golden, events=orange, directory=cyan, etc.)
- **Micro-Animation System**: HoverArrow newsletter button, social icon hover effects, back-to-top FAB with smooth scroll
- **Rajdhani Typography**: Consistent font application throughout entire footer for professional brand cohesion
- **Tactical Square Aesthetic**: rounded-none containers with shadow-elevated hierarchy maintaining design system integrity

### Authentic Community Home Page Redesign (2025-08-14)
- **Community-Focused Messaging**: Complete transformation from corporate platform to authentic Idaho gun owner voice
- **Seven Platform Pillars**: Strategic restructuring around 7 core features (Directory, Forums, Events, Intel, Marketplace, Armory, Training)
- **Mission-Driven Content**: Emphasis on community benefits, contribution opportunities, and genuine local ownership
- **Idaho Steward Voice**: Implementation of down-to-earth, anti-corporate messaging that resonates with Treasure Valley gun owners
- **Community Contribution**: Clear pathways for members to contribute (forum participation, range photos, firearm reviews)

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

### Core Platform & Design
- `src/app/page.tsx` - **Home page with authentic community messaging and 7-pillar platform structure**
- `src/app/globals.css` - Complete 26-color Boise landscape palette and design tokens
- `_resources/docs/AI Persona & Writing Guidelines_ _The Idaho Steward_.md` - Community voice and messaging guidelines
- `_resources/docs/Idaho Shooting and Sporting Venues.md` - Local venue data and community statistics

### Navigation Templates & Routing (New Architecture)
- `src/components/ui/article-page-template.tsx` - **Unified template for events, guides, armory articles**
- `src/components/ui/business-detail-template.tsx` - **Business profile template with reviews and verification**
- `src/components/ui/marketplace-product-template.tsx` - **Product detail template with specifications**
- `src/app/events/[slug]/page.tsx` - **Dynamic event routing using ArticlePageTemplate**
- `src/app/directory/[slug]/page.tsx` - **Business profile routing using BusinessDetailTemplate**
- `src/app/guides/[slug]/page.tsx` - **Guide article routing using ArticlePageTemplate**
- `src/app/marketplace/[id]/page.tsx` - **Product detail routing using MarketplaceProductTemplate**

### Enhanced Card Components
- `src/components/ui/EventCard.tsx` - **Event cards with Link navigation and slug generation**
- `src/components/ui/VendorCard.tsx` - **Business cards with profile linking and click handling**
- `src/components/ui/blog-article.tsx` - **BlogCard with sectionPath support for Armory/Guides**

### UI System & Animations
- `src/components/ui/button.tsx` - Enhanced with micro-animation system and animationType props
- `src/components/ui/micro-animations.tsx` - HoverArrow, PlusMinusToggle, XOToggle, ChevronRotate components
- `src/components/ui/site-navigation.tsx` - Magic Line navigation with Framer Motion spring physics
- `src/components/ui/hero-overhang-section.tsx` - **Treasure chest opening navigation with dynamic colored shadows**
- `src/components/ui/treasure-chest-glow.tsx` - **Animated radial gradient with pulsing effects for hero bottom**
- `src/components/ui/site-footer.tsx` - Modern "fat footer" with LLC branding, Phosphor icons, and micro-animations
- `src/components/ui/loading-spinner.tsx` - Branded Diamond spinner component
- `src/components/ui/accessibility-panel.tsx` - Performance-optimized with CSS custom properties

## Project Memory

- **Community Voice**: Platform messaging emphasizes authentic Idaho gun owner voice - anti-corporate, genuine, down-to-earth
- **Seven Platform Pillars**: Always reference the 7 core features (Directory, Forums, Events, Intel, Marketplace, Armory, Training)
- **Community Contribution**: Encourage user participation through forums, range photos, firearm reviews, and local knowledge sharing
- **Colors**: ONLY use custom 26-color Boise landscape palette from `globals.css` - NEVER generic Tailwind
- **Icons**: Always use Phosphor Icons as primary choice - tactical, angular aesthetic preferred
- **Aesthetic**: Tactical square components (`rounded-none` for cards, minimal rounding for interactive)
- **Animation**: Context-aware micro-interactions - arrows for navigation, toggles for state changes
- **Performance**: All animations disabled during loading, use `currentColor` for theming
- **Navigation**: Magic Line sliding effect is signature feature - never remove without approval
- **Homepage Overhang**: Treasure chest opening effect with 6-button navigation, dynamic colored shadows, and wave animations
- **Color Shadows**: Use diffused shadows (120px spread, 0.15 opacity) - NEVER plastic-y full-color shadows
- **Piano Key Effect**: Buttons lift up (-translate-y-1) and scale (0.98) with staggered color wave (border→icon→text)
- **Typography**: Rajdhani font weights 300-800 for display, perfect kerning and letter-spacing
- **Home Page**: Mission-driven content structure with trust indicators (8 locations, 150+ businesses, 5K+ members)
- **Development**: Kill dev server before restarting, run in background

### Navigation System Memory (Critical Implementation)
- **Template Architecture**: ALWAYS use ArticlePageTemplate for articles/events/guides, BusinessDetailTemplate for business profiles, MarketplaceProductTemplate for products
- **Card Navigation**: ALL card components must have Link navigation to detail pages - EventCard→/events/[slug], VendorCard→/directory/[slug], BlogCard with sectionPath support
- **Breadcrumb Standards**: Use shadcn/ui Breadcrumb components throughout, section-specific theming (nav-events, nav-armory colors)
- **Dynamic Routing**: [slug]/[id] patterns across all major sections with proper generateStaticParams and metadata
- **CTA Functionality**: NO placeholder buttons - all CTAs use structured mailto links (content@, marketplace@, support@, info@boiseguncollective.com)
- **Link Implementation**: Next.js Link components with proper event handling (preventDefault/stopPropagation for nested interactions)
- **Slug Generation**: Automatic URL-friendly slug creation with fallback patterns for all content types