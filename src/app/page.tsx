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
import { RecessedSectionPair } from '@/components/ui/recessed-section-pair'
import { SimpleStickyNav } from '@/components/ui/simple-sticky-nav'

export default function HomePage() {
  return (
    <div className="theme-home min-h-screen">
      <SiteNavigation />
      
      {/* Simple Sticky Navigation */}
      <SimpleStickyNav />
      
      <main className="flex-grow relative">
        {/* Hero Section - Full width with beautiful gradient */}
        <section id="hero">
          <TacticalHero />
        </section>

        {/* Platform Features with Diagonal Carve-out */}
        <RecessedSectionPair
          topSection={<PlatformFeaturesSection />}
          bottomSection={<FeaturedContentSection />}
          topSectionId="platform-features"
          bottomSectionId="featured-content"
          cutoutVariant="diagonal"
          topBgColor="bg-background"
          bottomBgColor="bg-muted/20"
          recessDepth="medium"
        />

        {/* Directory Stats with Zigzag Transition */}
        <RecessedSectionPair
          topSection={<DirectoryStatsSection />}
          bottomSection={
            <div 
              style={{
                background: 'linear-gradient(135deg, var(--nav-marketplace) 0%, var(--nav-events) 100%)',
                color: 'var(--foreground)'
              }}
            >
              <div className="container mx-auto px-lg">
                <MarketplaceDealSection />
              </div>
            </div>
          }
          topSectionId="directory-stats"
          bottomSectionId="marketplace-deals"
          cutoutVariant="zigzag"
          topBgColor="bg-background"
          bottomBgColor=""
          recessDepth="deep"
        />

        {/* Platform Values with Angular Cut */}
        <RecessedSectionPair
          topSection={
            <div 
              style={{
                backgroundColor: 'var(--card)',
                color: 'var(--card-foreground)'
              }}
            >
              <div className="container mx-auto px-lg">
                <PlatformValuesSection />
              </div>
            </div>
          }
          bottomSection={
            <div 
              style={{
                backgroundColor: 'rgb(from var(--muted) r g b / 0.3)',
                color: 'var(--foreground)'
              }}
            >
              <div className="container mx-auto px-lg">
                <ContributionCTA />
              </div>
            </div>
          }
          topSectionId="platform-values"
          bottomSectionId="contribution-cta"
          cutoutVariant="angular"
          topBgColor=""
          bottomBgColor=""
          recessDepth="medium"
        />

        {/* Join Movement Section with gradient */}
        <section 
          id="join-movement"
          className="py-3xl"
          style={{
            background: 'linear-gradient(135deg, var(--background) 0%, var(--nav-home) 100%)',
            color: 'var(--foreground)'
          }}
        >
          <div className="container mx-auto px-lg">
            <JoinMovementCTA />
          </div>
        </section>
      </main>

      <SiteFooter currentPage="home" />
    </div>
  )
}