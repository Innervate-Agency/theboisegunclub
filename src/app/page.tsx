import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { TacticalHero } from '@/components/ui/tactical-hero'
import { PlatformFeaturesSection } from '@/components/sections/platform-features-section'
import { FeaturedContentSection } from '@/components/sections/featured-content-section'
import { DirectoryStatsSection } from '@/components/sections/directory-stats-section'
import { MarketplaceDealSection } from '@/components/sections/marketplace-deal-section'
import { PlatformValuesSection } from '@/components/sections/platform-values-section'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'

export default function HomePage() {
  return (
    <div className="theme-home min-h-screen">
      <SiteNavigation />
      <main className="flex-grow relative">
        <TacticalHero />
        <PlatformFeaturesSection />
        <FeaturedContentSection />
        <DirectoryStatsSection />
        <MarketplaceDealSection />
        <PlatformValuesSection />
        <section className="py-3xl bg-muted/30"><div className="container mx-auto px-lg"><ContributionCTA /></div></section>
        <section className="py-3xl"><div className="container mx-auto px-lg"><JoinMovementCTA /></div></section>
      </main>
      <SiteFooter currentPage="home" />
    </div>
  )
}