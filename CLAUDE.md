# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 3000 (primary command)
- `npm run dev:turbo` - Development with Turbo mode for faster builds
- `npm run build` - Production build (avoid unless necessary per workflow)
- `npm run build:strict` - Build with strict TypeScript checking
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix linting issues
- `npm run strict` - Toggle TypeScript strict mode

### Testing & Quality
- `npm run vitest` - Run Vitest tests (Storybook integration + browser testing)
- `npm run storybook` - Launch Storybook dev server on port 6006
- `npm run storybook:check` - Smoke test Storybook build
- `npm run health` - Run comprehensive health checks
- `npm run lighthouse` - Generate Lighthouse performance report

### Analysis & Security
- `npm run analyze` - Bundle analysis and performance metrics
- `npm run security:audit` - Security vulnerability scanning
- `npm run quality:check` - Code quality assessment
- `npm run audit:fort-knox` - Comprehensive security audit
- `npm run fortress:complete` - Full security and component analysis suite

### Database & Data
- `scripts/generate-ffl-data.js` - Import 594 Idaho FFL businesses to PostgreSQL
- `scripts/test-google-reviews.js` - Test Google Reviews API integration
- `scripts/generate-ammo-list.js` - Generate ammunition catalog data

## Architecture

### Core Stack
- **Framework**: Next.js 15 with React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Database**: PostgreSQL with 594 privacy-filtered Idaho firearms businesses
- **APIs**: Serper API (Google Reviews), OpenWeatherMap (weather data), Custom Auth APIs
- **Testing**: Vitest + Storybook integration with Playwright browser testing
- **UI Components**: Radix UI primitives with custom design system
- **Icons**: Heroicons (primary), Phosphor Icons, Tabler Icons available

### Authentication Architecture
- **JWT-based authentication** with role-based access control (admin/moderator/member/guest)
- **Forum integration** via `forumUserId` linking to external forum system
- **API Routes**: `/api/auth/token`, `/api/auth/user`, `/api/auth/authorize`
- **User sessions** with `lastActive` tracking and avatar support
- **Mock users** available for development (admin, gunsmith_mike, tactical_trader, etc.)

### Layout System Architecture
**Russian Nesting Doll Problem = 100% ELIMINATED**

Layout System Components:
- **HomePageLayout** - Multi-section homepage with specialized sections
- **StandardPageLayout** - Generic layout for main pages (Events, Directory, Intel, Armory, BuySell)
- **ArticlePageLayout** - Articles, guides, blog posts with hero/content/sidebar structure
- **DetailPageLayout** - Business profiles, locations, products with flexible content areas
- **PageContainer & SectionContainer** - Compound components handling ALL structural decisions

Key Architectural Principles:
- **Single Source of Truth**: Layout components handle 100% of structural decisions
- **Pure Content Components**: Template components contain ZERO styling concerns
- **Theme Isolation**: `.theme-{page} .section-{type}` prevents style conflicts
- **Sticky Navigation**: Applied site-wide with `variant="premium"` mica styling

### Design System
- **26-Color Boise Landscape Palette** - Complete color system (`src/app/globals.css`)
- **Shadow Progression** - 7-level depth system (whisper → hero)
- **Typography** - Rajdhani (headings) + Noto Sans (body)
- **Mica Glassmorphism** - mica-overlay, mica-card, mica-modal variants
- **Mobile-First** - 60% traffic optimization with 44px touch targets
- **Tactical Square Aesthetic** - rounded-none for cards, military/tactical feel

### Testing & Quality Architecture
- **Vitest Configuration**: Browser testing with Playwright, Storybook integration
- **Test Structure**: Stories as tests via `@storybook/addon-vitest` plugin
- **Browser Testing**: Chromium-based with headless mode for CI
- **Quality Tools**: ESLint, TypeScript strict mode, comprehensive health checks
- **Security Scanning**: Fort Knox audit suite, vulnerability scanning, code quality metrics

### Data Management
- **FFL Database**: 594 Idaho firearms businesses with privacy filtering
- **Business Types**: Auto-categorized (Gun Store, Shooting Range, Gunsmith, Tactical/Training)
- **Location Data**: City-based grouping with slug generation for URLs
- **Review Integration**: Google Reviews API via Serper for real business ratings
- **Weather Data**: OpenWeatherMap integration for shooting condition forecasts

## Critical Development Rules

### NEVER Do This
- **NEVER** use placeholder/sample data - only verified Idaho businesses
- **NEVER** hardcode reviews/ratings - always fetch from Google Reviews API
- **NEVER** use generic Tailwind colors - only Boise landscape palette
- **NEVER** break navigation into multiple rows on mobile - scale down instead
- **NEVER** commit API keys or secrets
- **NEVER** create files unless absolutely necessary for achieving your goal
- **NEVER** proactively create documentation files unless explicitly requested
- **NEVER** mix icon libraries - use hierarchy below

### ALWAYS Do This
- **ALWAYS** use Heroicons for new icon implementations (primary choice)
- **ALWAYS** use Phosphor Icons if Heroicons lacks needed icon (secondary)
- **ALWAYS** maintain 44px minimum touch targets for mobile
- **ALWAYS** use shadow progression for card hover states
- **ALWAYS** fetch dynamic data through service layers
- **ALWAYS** preserve tactical square aesthetic for main components
- **ALWAYS** prefer editing existing files to creating new ones
- **ALWAYS** run `npm run lint` before completing tasks
- **ALWAYS** test authentication flows with mock users if modifying auth

## Environment Setup
1. Copy `.env.local.example` to `.env.local`
2. Add required API keys: `SERPAPI_KEY`, `OPENWEATHER_API_KEY`, `DATABASE_URL`

## Development Workflow
- **Dev server always running** on port 3000 - use curl for testing pages
- **Avoid builds** unless absolutely necessary (waste tokens per user preference)
- **User is watching live** - no need to check if fixes work, they will report issues
- **End completions** with "Check to see if this is fixed now, give me any errors you may find"

## Key File References
- **CLAUDE.md** - This file (development guidelines)
- **src/app/globals.css** - 2800+ line design system with 26-color Boise palette
- **CHANGELOG.md** - Project evolution and technical milestones
- **src/lib/auth.ts** - Authentication system with mock users for development
- **vitest.config.ts** - Testing configuration with Storybook + browser testing

## Script Ecosystem
- **Health & Analysis**: `health`, `analyze`, `quality:check` for project diagnostics
- **Security Suite**: `audit:fort-knox`, `scan:vulnerability`, `fortress:complete`
- **Storybook Workflow**: `storybook`, `storybook:check`, `storybook:fix`
- **Data Management**: FFL data import, Google Reviews testing, ammunition catalogs
- **Performance**: Lighthouse reports, bundle analysis, performance monitoring

## Testing Patterns
- **Vitest + Storybook**: Stories serve as visual and interaction tests
- **Browser Testing**: Playwright integration for real browser validation
- **Component Testing**: Use `npm run vitest` for comprehensive test suite
- **Mock Data**: Authentication uses mock users, businesses use real Idaho FFL data