# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 3000
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm run lighthouse` - Generate Lighthouse performance report

### Database
- `scripts/generate-ffl-data.js` - Import FFL data to PostgreSQL
- `scripts/test-google-reviews.js` - Test Google Reviews API integration

## Architecture

### Core Stack
- **Framework**: Next.js 15 with React 19, TypeScript, Tailwind CSS v4
- **Database**: PostgreSQL with 594 privacy-filtered Idaho firearms businesses
- **APIs**: Serper API (Google Reviews), OpenWeatherMap (weather data)
- **Icons**: Heroicons (primary)

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

## Critical Development Rules

### NEVER Do This
- **NEVER** use placeholder/sample data - only verified Idaho businesses
- **NEVER** hardcode reviews/ratings - always fetch from Google Reviews API
- **NEVER** use generic Tailwind colors - only Boise landscape palette
- **NEVER** break navigation into multiple rows on mobile - scale down instead
- **NEVER** commit API keys or secrets
- **NEVER** create files unless absolutely necessary for achieving your goal
- **NEVER** proactively create documentation files unless explicitly requested

### ALWAYS Do This
- **ALWAYS** use Heroicons for new icon implementations
- **ALWAYS** maintain 44px minimum touch targets for mobile
- **ALWAYS** use shadow progression for card hover states
- **ALWAYS** fetch dynamic data through service layers
- **ALWAYS** preserve tactical square aesthetic for main components
- **ALWAYS** prefer editing existing files to creating new ones

## Environment Setup
1. Copy `.env.local.example` to `.env.local`
2. Add required API keys: `SERPAPI_KEY`, `OPENWEATHER_API_KEY`, `DATABASE_URL`

## Development Notes
- Dev server always running on port 3000 - use curl for testing
- Don't run builds unless absolutely necessary (waste tokens)
- User is always watching/debugging live - no need to check if fixes work
- End completions with "Check to see if this is fixed now, give me any errors you may find"