# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 3000
- `npm run dev:turbo` - Development server with Turbo mode
- `npm run build` - Production build
- `npm run build:strict` - Build with strict TypeScript checking
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run strict` - Toggle strict TypeScript mode

### Testing & Analysis
- `npm run health` - Run health check
- `npm run analyze` - Analyze build output
- `npm run bundle:analyze` - Detailed bundle analysis
- `npm run lighthouse` - Generate Lighthouse performance report

### Database & Data Processing
- PostgreSQL connection via `DATABASE_URL` environment variable
- Key scripts:
  - `scripts/generate-ffl-data.js` - Import FFL data to database
  - `scripts/postgresql-import-businesses.js` - Import business directory
  - `scripts/test-google-reviews.js` - Test Google Reviews API integration

## Architecture

### Core Stack
- **Framework**: Next.js 15 with React 19, TypeScript, Tailwind CSS v4
- **Database**: PostgreSQL with 594 privacy-filtered Idaho firearms businesses
- **APIs**: 
  - Serper API for Google Reviews (7-day caching)
  - OpenWeatherMap for Idaho weather conditions
- **Icons**: Heroicons (primary), with legacy Phosphor references being migrated

### Data Flow Architecture
1. **Static Data (90%)**: Pre-generated from PostgreSQL at build time
   - Business directory pages at `/directory/[slug]`
   - Event pages at `/events/[slug]`
   - Guide pages at `/guides/[slug]`

2. **Dynamic Data (10%)**: Runtime API calls
   - Google Reviews via `src/lib/google-reviews-service.ts`
   - Weather data via `src/lib/weather-service.ts`
   - Real-time inventory/availability

### Component Architecture
- **Templates**: Unified page templates in `src/components/ui/`
  - `article-page-template.tsx` - Articles, events, guides
  - `business-detail-template.tsx` - Business profiles
  - `marketplace-product-template.tsx` - Product details

- **Design System**: 
  - 26-color Boise landscape palette (`src/app/globals.css`)
  - Shadow progression system (whisper → hero, levels 1-7)
  - Tactical square aesthetic (`rounded-none` for cards)
  - Mobile-first responsive (60% traffic optimization)

### Authentication & Security
- OAuth2 integration planned (see `.env.local.example`)
- Environment variables:
  - `SERPAPI_KEY` - Google Reviews API
  - `OPENWEATHER_API_KEY` - Weather API
  - `DATABASE_URL` - PostgreSQL connection

## Critical Development Rules

### NEVER Do This
- **NEVER** use placeholder/sample data - only verified Idaho businesses
- **NEVER** hardcode reviews/ratings - always fetch from Google Reviews API
- **NEVER** use generic Tailwind colors - only Boise landscape palette
- **NEVER** break navigation into multiple rows on mobile - scale down instead
- **NEVER** commit API keys or secrets

### ALWAYS Do This
- **ALWAYS** use Heroicons for new icon implementations
- **ALWAYS** maintain 44px minimum touch targets for mobile
- **ALWAYS** use shadow progression for card hover states
- **ALWAYS** fetch dynamic data through service layers
- **ALWAYS** preserve tactical square aesthetic for main components

## Environment Setup
1. Copy `.env.local.example` to `.env.local`
2. Add required API keys:
   - `SERPAPI_KEY` for Google Reviews
   - `OPENWEATHER_API_KEY` for weather data
   - `DATABASE_URL` for PostgreSQL

## Database Management
- Connection pool configured in `src/lib/database/index.ts`
- Max 20 connections, 30s idle timeout
- Business data schema includes FFL licensing, services, hours, certifications

## Performance Optimizations
- React Compiler enabled for automatic memoization
- Optimized package imports for Radix UI and Heroicons
- Standalone Docker output mode
- Image formats: AVIF and WebP with 1-year cache
- Bundle splitting for vendor, framer-motion, and radix-ui chunks

## Loading & Animation
- Idaho Tumbleweed system for all loading states (`src/components/ui/idaho-tumbleweed.tsx`)
- Context-aware micro-animations with spring physics
- Animations disabled during loading for performance