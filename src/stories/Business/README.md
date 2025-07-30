# TBGC Business Components

This directory contains business-specific components built for **The Boise Gun Club** - a regional firearms marketplace serving the Treasure Valley. These components implement the complete TBGC design system with business logic baked in.

## Component Philosophy

Unlike generic UI components, these are **business components** built FOR the specific platform they'll be used on. Each component:

- ✅ Uses the complete 1,868-line TBGC design system
- ✅ Implements 4-tier subscription model (Free/Copper/Silver/Gold) 
- ✅ Follows CVA patterns with business-specific variants
- ✅ Includes fire gradient animations and proper shadow hierarchy
- ✅ Integrates TBGC's 26-color firearms heritage palette

## Pricing Tier System

### FREE - $0/month
- Basic directory listing
- Contact information only
- No photos or analytics

### COPPER - $49/month  
- Enhanced with photos
- Basic analytics dashboard
- Verified badge available

### SILVER - $99/month
- Featured placement in search
- Customer review system
- Enhanced hover animations
- Priority support

### GOLD - $199/month
- Fire gradient animations
- Sponsored badge
- Monthly lead tracking
- Premium placement
- Full sponsorship features

## Design System Integration

Every component follows these rules:

```typescript
// ✅ CORRECT: Uses TBGC design system classes
className={cn(
  "bg-leonard-yellow/20", 
  "shadow-container",
  "animate-fire-unfurl"
)}

// ❌ WRONG: Custom implementations
className="bg-[#F2CB05] shadow-lg"
```

## Component Structure

All business components use the CVA pattern:

```typescript
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      tier: {
        free: "basic styling",
        copper: "enhanced with copper-orange accents", 
        silver: "featured with stainless-steel highlights",
        gold: "premium with fire gradients and brass-yellow"
      }
    }
  }
)
```

## Available Components

### VendorCard
Displays vendor/business listings with tier-specific features and styling. Perfect for marketplace directory pages.

**Key Features:**
- Tier-specific visual hierarchy
- Conditional feature display
- Fire gradient animations (Gold tier)
- Responsive design for mobile/tablet/desktop

**Usage:**
```tsx
<VendorCard
  tier="gold"
  businessName="Boise Firearms Depot"
  isSponsored={true}
  monthlyLeads={42}
/>
```

## Business Context

These components serve a regional marketplace with:
- **117+ vendors** across Treasure Valley
- **250,000+ firearm owners** in the region  
- **Multiple business types**: FFLs, ranges, gunsmiths, trainers
- **4-tier subscription model** for monetization

## Development Guidelines

1. **Always reference TBGC_BUSINESS_BLUEPRINT.md** before building
2. **Use business-specific data structures** not generic props
3. **Implement tier logic** in every user-facing component
4. **Follow shadow hierarchy** (containers only, not text/buttons)
5. **Test all 4 tiers** in Storybook stories

## Storybook Stories

Every business component includes comprehensive stories:
- Individual tier examples
- AllTiers comparison view
- Real business data samples
- Responsive grid layouts
- Business type variations (FFL, Range, Gunsmith, etc.)

This ensures components work perfectly for the actual TBGC platform deployment.
