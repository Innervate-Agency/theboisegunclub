import { TacticalHero } from '@/components/ui/tactical-hero'
import { PlatformFeaturesSection } from '@/components/sections/platform-features-section'
import { FeaturedContentSection } from '@/components/sections/featured-content-section'
import { DirectoryStatsSection } from '@/components/sections/directory-stats-section'
import { BuySellDealSection } from '@/components/sections/buysell-deal-section'
import { PlatformValuesSection } from '@/components/sections/platform-values-section'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'
import { HomePageLayout } from '@/components/layouts/page-layouts/HomePage.layout'

/**
 * Homepage - Systematic Layout Architecture
 * 
 * BEFORE (Russian Nesting Doll Problem):
 * - 113 lines of mixed layout + content concerns
 * - 8 different section imports with conflicting styles
 * - Multiple inline styles and hardcoded backgrounds
 * - Components competing with each other for visual control
 * 
 * AFTER (Layout System Solution):
 * - 25 lines of pure content component imports
 * - ZERO styling concerns in page component
 * - Single layout component handles ALL structural decisions
 * - Impossible for components to conflict by design
 * 
 * Benefits:
 * ✅ No more Russian nesting doll style conflicts
 * ✅ Content components are pure (no styling)
 * ✅ Layout changes don't require touching content
 * ✅ New developers can't accidentally break styling
 * ✅ A/B testing layouts without touching content
 * ✅ Theme consistency enforced architecturally
 */
export default function HomePage() {
  return (
    <HomePageLayout
      hero={<TacticalHero />}
      platformFeatures={<PlatformFeaturesSection />}
      featuredContent={<FeaturedContentSection />}
      directoryStats={<DirectoryStatsSection />}
      buysellDeals={<BuySellDealSection />}
      platformValues={<PlatformValuesSection />}
      contributionCTA={<ContributionCTA />}
      joinMovement={<JoinMovementCTA />}
    />
  )
}

/**
 * Content Components Now Clean
 * 
 * All section components (PlatformFeaturesSection, etc.) should be stripped
 * of styling concerns and become pure content components:
 * 
 * BEFORE:
 *   - Background colors and gradients
 *   - Padding and margin decisions  
 *   - Container and responsive behavior
 *   - Divider and spacing logic
 * 
 * AFTER:
 *   - Pure content and business logic only
 *   - No styling decisions whatsoever
 *   - Truly reusable across different layouts
 *   - Can be used in different themes without conflicts
 * 
 * Next Steps:
 * 1. Strip styling from all section components
 * 2. Move any layout-specific logic to layout components
 * 3. Test with different themes to ensure no conflicts
 * 4. Migrate other pages to same pattern
 */