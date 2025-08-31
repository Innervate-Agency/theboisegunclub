import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { TacticalHero } from '@/components/ui/tactical-hero'
import { PlatformFeaturesSection } from '@/components/sections/platform-features-section'
import { FeaturedContentSection } from '@/components/sections/featured-content-section'
import { DirectoryStatsSection } from '@/components/sections/directory-stats-section'
import { BuySellDealSection } from '@/components/sections/buysell-deal-section'
import { PlatformValuesSection } from '@/components/sections/platform-values-section'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'
import { WesternSection, WesternDivider } from '@/components/ui/western-dividers'
import { SimpleStickyNav } from '@/components/ui/simple-sticky-nav'

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      
      {/* Simple Sticky Navigation */}
      <SimpleStickyNav />
      
      <div className="theme-home min-h-screen">
      
      <main className="flex-grow relative">
        {/* Hero Section - Full width with beautiful gradient */}
        <section id="hero">
          <TacticalHero />
        </section>

        {/* Platform Features with Bruno Sand Dunes divider */}
        <WesternSection
          bottomDivider="bruno-sand-dunes"
          bgVariant="background"
          dividerColor="var(--background)"
          className="py-3xl"
        >
          <div id="platform-features" className="container mx-auto px-lg">
            <PlatformFeaturesSection />
          </div>
        </WesternSection>

        {/* Featured Content with matching background */}
        <section 
          id="featured-content" 
          className="py-3xl bg-muted-subtle"
        >
          <div className="container mx-auto px-lg">
            <FeaturedContentSection />
          </div>
        </section>

        {/* Directory Stats with Snake River Canyon divider */}
        <WesternSection
          bottomDivider="snake-river-canyon"
          bgVariant="background"
          dividerColor="var(--background)"
          className="py-3xl"
        >
          <div id="directory-stats" className="container mx-auto px-lg">
            <DirectoryStatsSection />
          </div>
        </WesternSection>

        {/* Buy/Sell Deals with gradient background */}
        <section 
          id="buysell-deals"
          className="py-3xl bg-gradient-buysell-events text-foreground"
        >
          <div className="container mx-auto px-lg">
            <BuySellDealSection />
          </div>
        </section>

        {/* Platform Values with Frank Church Wilderness divider */}
        <WesternSection
          bottomDivider="frank-church-wilderness"
          bgVariant="card"
          dividerColor="var(--card)"
          className="py-3xl"
        >
          <div id="platform-values" className="container mx-auto px-lg">
            <PlatformValuesSection />
          </div>
        </WesternSection>

        {/* Contribution CTA with muted background */}
        <WesternSection
          bottomDivider="bruno-sand-dunes"
          bgVariant="muted-soft"
          dividerColor="rgb(from var(--muted) r g b / 0.3)"
          className="py-3xl"
        >
          <div id="contribution-cta" className="container mx-auto px-lg text-foreground">
            <ContributionCTA />
          </div>
        </WesternSection>

        {/* Join Movement Section with gradient */}
        <section 
          id="join-movement"
          className="py-3xl bg-gradient-home-movement text-foreground"
        >
          <div className="container mx-auto px-lg">
            <JoinMovementCTA />
          </div>
        </section>
      </main>

      <SiteFooter currentPage="home" />
      </div>
    </>
  )
}