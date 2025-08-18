# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## 🚀 PRODUCTION DEPLOYMENT STATUS - READY FOR GO-LIVE! 🚀

### **DATABASE INTEGRATION COMPLETE - 2025-08-18**

#### 🎯 **DATABASE INTEGRATION COMPLETE** ✅ PRODUCTION-READY
- **PostgreSQL Backend**: 281 verified Idaho firearms businesses with complete data pipeline
- **Hybrid Architecture**: 90% static generation + 10% dynamic content (reviews, real-time stats)
- **Real Business Data**: Authentic FFL dealers, gun shops, ranges, gunsmiths across Treasure Valley
- **Dynamic Page Generation**: All 281 business pages accessible at `/directory/[slug]`
- **Google Reviews Integration**: SerpAPI with 7-day caching for authentic customer feedback
- **Docker Deployment Ready**: Production-ready containerization with multi-stage builds

#### 🏗️ **SCALABLE INFRASTRUCTURE** ✅ PRODUCTION-GRADE
- **Database Schema**: Comprehensive PostgreSQL with full-text search, advanced indexing
- **API Service Layer**: Type-safe database access with static/dynamic data separation
- **CSV Import Pipeline**: Automated processing from 6 data sources (FFL retail, county directories)
- **Health Monitoring**: Complete system health checks for production validation
- **Performance Optimization**: Next.js standalone builds, React 19 compiler, bundle optimization

#### 📊 **VERIFIED PRODUCTION DATA** ✅ COMPLETE
- **281 Total Businesses**: Real Idaho firearms community directory
- **Geographic Coverage**: Treasure Valley (Boise 51, Nampa 43, Meridian 23) + statewide
- **Business Categories**: FFL Dealers (220), Tactical/Training (19), Gunsmiths (18), others
- **Data Quality**: Verified addresses, phone numbers, services, specialties
- **SEO Ready**: Individual metadata and structured data for all business pages

#### 🎨 **DESIGN SYSTEM MATURITY** ✅ STABLE
- **26-Color Idaho Landscape Palette**: Zero tolerance enforcement with Design Bible documentation
- **8-Level Shadow Hierarchy**: Semantic progression with tactical square aesthetic
- **Mobile-First Responsive**: 60% mobile traffic optimization with progressive enhancement
- **Interactive Card System**: Ghost state implementation with tactical theme adaptation
- **Optimized CSS**: 1,081-line globals.css with 62% size reduction maintaining functionality

**DEPLOYMENT STATUS**: Database integration complete, 281 business pages generated, production-ready!

---

## Project Overview

**The Boise Gun Club** - Next.js 15 application serving as a comprehensive digital hub for Treasure Valley firearms communities. Built with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components.

### Business Context
Regional marketplace/directory platform for the entire Treasure Valley firearms community - NOT a single gun club. **Community-focused platform** built by Idaho gun owners, for Idaho gun owners, emphasizing authentic voice over corporate messaging.

---

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

---

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

---

## Design System (CRITICAL - ZERO TOLERANCE)

**📚 Complete Reference**: See **[Design Bible](docs/DESIGN_BIBLE.md)** for comprehensive implementation guide with citations and examples.

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
- **Loading States**: Idaho Tumbleweed system for all loading scenarios
- **Performance**: All animations disabled during loading, use currentColor for theming

### Icon System (Phosphor Primary)
- **Primary Library**: Phosphor Icons (@phosphor-icons/react)
- **Fallback Libraries**: Tabler, Heroicons, React Icons for specialized needs
- **Weight System**: Use "bold" weight for navigation (tactical aesthetic)
- **Sizing Standard**: h-4 w-4 for most contexts, h-6 w-6 for prominent elements

---

## API Integration System

### Authentic Data Integration (CRITICAL)
- **100% Verified Idaho Businesses**: All directory listings use real, verified Idaho firearms businesses
- **No Hardcoded Reviews**: ALL rating and review data dynamically fetched from Google Reviews API
- **Real Event Calendar**: Only authentic Idaho events dated after August 16, 2025
- **Environment Variables**: All API keys secured in environment variables (SERPAPI_KEY, OPENWEATHER_API_KEY)

### Google Reviews Service
- **File**: `src/lib/google-reviews-service.ts`
- **API**: SerpApi for Google Reviews data
- **Caching**: 7-day memory cache to minimize API calls
- **Fallback**: Authentic local data when API unavailable
- **Usage**: NEVER use hardcoded rating/reviewCount - always call fetchGoogleReviews()

### Weather Service
- **File**: `src/lib/weather-service.ts` 
- **API**: OpenWeatherMap for real-time Idaho weather
- **Security**: Environment variable for API key
- **Location**: Idaho-specific weather data for range conditions

---

## Navigation Architecture

### Template System (Critical - Use These Patterns)
- **ArticlePageTemplate**: Unified template for articles, events, guides with breadcrumbs
- **BusinessDetailTemplate**: Comprehensive business profiles with reviews and verification
- **MarketplaceProductTemplate**: Product detail pages with specifications and vendor info

### Dynamic Routing Patterns
- **Events**: `/events/[slug]` - Article-style event details
- **Directory**: `/directory/[slug]` - Business profiles  
- **Armory**: `/the-armory/[slug]` - Equipment reviews
- **Guides**: `/guides/[slug]` - Legal/safety guides
- **Marketplace**: `/marketplace/[id]` - Product details

### CTA Functionality Standards
- **Suggest Article**: `mailto:content@boiseguncollective.com`
- **List Items/Training**: `mailto:marketplace@boiseguncollective.com`
- **Contact Support**: `mailto:support@boiseguncollective.com`
- **Join Community**: `mailto:info@boiseguncollective.com`

---

## Mobile-First Responsive Design

### Breakpoint Strategy
- **320px-639px**: Compact mobile layout
- **640px-767px**: Enhanced mobile with more spacing  
- **768px-1023px**: Tablet layout with sidebar options
- **1024px+**: Full desktop experience

### Navigation Principles (CRITICAL)
- **Navigation Integrity**: Navigation components ALWAYS stay single row
- **Scale, Don't Break**: Reduce button/icon sizes rather than wrapping
- **Progressive Typography**: Text scales down gracefully on smaller screens
- **Touch Accessibility**: 44px minimum touch targets maintained

### Loading System
- **Idaho Tumbleweed**: Use for all loading states (buttons, pages, forms, files)
- **Variants Available**: ButtonTumbleweed, LoadingTumbleweed, PageLoadingTumbleweed, etc.
- **Mobile Optimized**: Animations work smoothly across all devices

---

## Key Reference Files

### Core Platform & Design
- `src/app/page.tsx` - **Home page with authentic Idaho community data**
- `src/app/globals.css` - **Optimized 26-color Boise landscape palette (1,081 lines, 62% reduction)**
- `src/components/ui/site-navigation.tsx` - **Mobile-responsive navigation with tactical megamenu foundation**
- `src/components/ui/hero-overhang-section.tsx` - **Responsive treasure chest navigation (FIXED: null safety)**

### Authentic Data Pages
- `src/components/pages/directory-page-standardized.tsx` - **84 verified Idaho businesses**
- `src/components/pages/events-page-standardized.tsx` - **18+ authentic Idaho events through 2026**
- `src/components/pages/marketplace-page-standardized.tsx` - **Real Idaho dealers and products**
- `src/hooks/useRealStats.ts` - **Updated statistics with verified data counts**

### API Services
- `src/lib/google-reviews-service.ts` - **Google Reviews API with 7-day caching**
- `src/lib/weather-service.ts` - **OpenWeatherMap integration for Idaho weather**

### Template System
- `src/components/ui/article-page-template.tsx` - **Unified article template**
- `src/components/ui/business-detail-template.tsx` - **Business profile template**
- `src/components/ui/marketplace-product-template.tsx` - **Product detail template**

### Animation & Loading
- `src/components/ui/idaho-tumbleweed.tsx` - **Complete tumbleweed loading system**
- `src/components/ui/comprehensive-loading.tsx` - **Loading scenarios for all use cases**
- `src/components/ui/tactical-megamenu.tsx` - **Foundation megamenu component**

---

## Project Memory

### Core Principles
- **Authentic Data**: 100% verified Idaho businesses and events - NEVER use sample/placeholder data
- **API Integration**: ALWAYS use Google Reviews API for ratings - NEVER hardcode review data  
- **Community Voice**: Platform messaging emphasizes authentic Idaho gun owner voice
- **Colors**: ONLY use custom 26-color Boise landscape palette from `globals.css` - NEVER generic Tailwind
- **Icons**: Always use Phosphor Icons as primary choice - tactical, angular aesthetic preferred

### Technical Standards
- **Aesthetic**: Tactical square components (`rounded-none` for cards, minimal rounding for interactive)
- **Animation**: Idaho Tumbleweed for ALL loading states, context-aware micro-interactions
- **Mobile-First**: Navigation integrity maintained across all breakpoints, 44px touch targets
- **Performance**: Animations disabled during loading, lazy-loaded heavy components
- **CSS Architecture**: Optimized globals.css (1,081 lines), unified mica design tokens

### Navigation System Memory (Critical Implementation)
- **Navigation Integrity**: NEVER break navigation into multiple rows - scale down instead
- **Template Architecture**: ALWAYS use proper templates for content types
- **Card Navigation**: ALL card components must have Link navigation to detail pages
- **Touch-First**: All interactive elements meet 44px minimum touch target requirements
- **Responsive Scaling**: Icons, text, and spacing scale progressively from mobile to desktop
- **Error Handling**: ALL DOM style access must include null safety checks