# CLAUDE.md

## 🚀 PRODUCTION STATUS: LAUNCH-READY

### **DATABASE & INFRASTRUCTURE COMPLETE**
- **PostgreSQL Backend**: 281 verified Idaho firearms businesses
- **Serper API**: Real-time Google Reviews with 7-day caching
- **Dynamic Pages**: All business pages at `/directory/[slug]`
- **Production Ready**: Docker + Next.js 15 + React 19

### **DESIGN SYSTEM UNIFIED**
- **Heroicons Migration**: Complete icon system standardization
- **Shadow Progression**: whisper → hero (levels 1-7)
- **Tactical Aesthetic**: Square components, orange hover states
- **Mobile-First**: 60% traffic optimization

## Tech Stack
- **Next.js 15** + React 19 + TypeScript + Tailwind CSS v4
- **Icons**: Heroicons (cube-transparent, ticket, identification, plus-circle, map, banknotes, chat-bubble-bottom-center-text)
- **Database**: PostgreSQL with 281 Idaho businesses

## Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - Code quality check

## Design System Rules
- **Colors**: Only Boise landscape palette from `globals.css` (26-color system)
- **Shadows**: Use shadow-whisper → shadow-hero progression (levels 1-7)
- **Components**: Square tactical aesthetic, rounded-none for cards
- **Icons**: Heroicons ONLY - no Phosphor, Lucide, or other libraries

## Key Files
- `src/app/page.tsx` - Home page (16-line pattern)
- `src/app/globals.css` - 26-color Boise palette + shadow system
- `src/components/ui/site-navigation.tsx` - Main nav with Heroicons
- `src/components/pages/*` - Page components (directory, events, etc.)

## Project Memory
- **Authentic Data**: 100% verified Idaho businesses - NEVER use placeholder data
- **API Integration**: Always use Google Reviews API via Serper - NEVER hardcode reviews
- **Community Voice**: Platform built by Idaho gun owners, for Idaho gun owners
- **Mobile-First**: Navigation integrity maintained across breakpoints
- **Shadow Progression**: Cards use shadow-whisper → shadow-hero on hover

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

### Hero Layout System Memory (Critical Fixes Applied)
- **CSS Height Constraints**: NEVER use `max-height` on `.hero-grid-layout` - causes content overflow
- **Hero Button Visibility**: ALWAYS use `bg-nav-[page] text-white hover:bg-white hover:text-nav-[page]` pattern
- **Badge Icon Management**: ALWAYS use `hideIcon={true}` on hero badges to prevent auto-generated icons
- **Filter Sidebar Architecture**: Events page uses direct implementation, Directory uses CardPageLayout
- **Component Consistency**: EventTicker displays 8 events with 30s scroll cycle and hover pause
- **Hero Card Variants**: Use compact versions in hero sections - remove tall gradient sections and info grids