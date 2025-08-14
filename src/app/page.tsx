'use client'

import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { FloatingDiamonds } from '@/components/ui/hero-floating-diamonds'
import { HeroCampfireGlow } from '@/components/ui/hero-campfire-glow'
import { HeroBadge } from '@/components/ui/hero-badge'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { PlatformFeatureCard, platformFeatures } from '@/components/ui/platform-feature-card'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'
import { PlatformValueCard, platformValueCards } from '@/components/ui/platform-value-card'
import { FeaturedEventSpotlight } from '@/components/ui/featured-event-spotlight'
import { IntelWeatherCard } from '@/components/ui/intel-weather-card'
import { MarketplaceDealCard } from '@/components/ui/marketplace-deal-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ParticleSystem } from '@/components/ui/particle-system'
import { motion } from 'framer-motion'
import { 
  ArrowRight,
  Camera,
  ChatsCircle,
  Trophy
} from '@phosphor-icons/react'

export default function HomePage() {
  // Sample data for featured components
  const sampleEvent = {
    eventTitle: "Treasure Valley Precision Championship",
    eventType: "Competition",
    date: "March 15, 2025", 
    time: "8:00 AM - 5:00 PM",
    location: "Meridian, ID",
    venue: "Capital City Shooting Complex",
    description: "Join Idaho's premier long-range precision shooting competition. Open to all skill levels with divisions for beginners through expert marksmen.",
    participantCount: 47,
    maxParticipants: 75,
    difficulty: "All Levels" as const,
    isFeatured: true,
    isUpcoming: true
  }

  const sampleDeal = {
    title: "Vortex Viper PST Gen II 5-25x50 FFP",
    business: "Sportsman's Warehouse",
    location: "Boise, ID",
    originalPrice: 899,
    salePrice: 649,
    discount: 28,
    description: "Professional-grade precision optic with crystal-clear glass and robust construction. Perfect for long-range shooting and hunting applications.",
    category: "Optics",
    condition: "New" as const,
    availability: "Limited" as const,
    expiresAt: "March 20th",
    rating: 4.8,
    reviewCount: 156,
    phone: "(208) 555-0123",
    isVerified: true,
    isFeatured: true
  }

  const activityFeedData = [
    {
      icon: ChatsCircle,
      iconColor: "text-slate-blue",
      iconBgColor: "bg-slate-blue/20",
      title: "New forum discussion",
      description: "Best concealed carry options for Idaho weather conditions",
      timeAgo: "2h ago"
    },
    {
      icon: Camera,
      iconColor: "text-sagebrush-green", 
      iconBgColor: "bg-sagebrush-green/20",
      title: "Range condition update",
      description: "Black's Creek Range - Perfect conditions, light winds",
      timeAgo: "4h ago"
    },
    {
      icon: Trophy,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20", 
      title: "Competition results posted",
      description: "Meridian Monthly Match results are now available",
      timeAgo: "1d ago"
    }
  ]

  return (
    <div className="theme-home flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <SiteNavigation variant="premium" sticky={true} />

      <main className="flex-grow relative">
        {/* Hero Section */}
        <section className="relative">
          {/* Hero Background */}
          <div className="absolute inset-0 bg-rusty-orange" 
               style={{ 
                 minHeight: '750px',
                 height: 'auto',
                 paddingBottom: '200px'
               }}>
            {/* Campfire Glow Effect */}
            <HeroCampfireGlow />
            
            {/* Floating Diamonds */}
            <FloatingDiamonds />
            
            {/* Subtle noise texture */}
            <div className="absolute inset-0 opacity-10"
                 style={{
                   backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%),
                                    radial-gradient(circle at 40% 90%, rgba(255,255,255,0.03) 0%, transparent 50%)`
                 }} />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 pt-2xl pb-3xl">
            <div className="container mx-auto px-lg">
              <div className="text-center space-y-2xl max-w-5xl mx-auto">
                {/* Revolutionary Badge */}
                <HeroBadge />

                {/* Main Headlines */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="space-y-lg"
                >
                  <h1 className="font-rajdhani font-bold text-6xl md:text-7xl lg:text-8xl text-crisp-off-white leading-none">
                    The Boise<br />Gun Club
                  </h1>
                  <p className="font-rajdhani font-medium text-2xl md:text-3xl text-crisp-off-white/90 max-w-4xl mx-auto leading-relaxed">
                    Idaho's gun community, built by gun owners who live here, shoot here, and care about our constitutional rights.
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-lg"
                >
                  <Button 
                    size="xl"
                    className="bg-crisp-off-white text-rusty-orange hover:bg-crisp-off-white/90 font-rajdhani font-bold shadow-hero"
                    animationType="arrow"
                  >
                    Join Our Community
                    <ArrowRight className="ml-sm h-5 w-5" weight="bold" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-crisp-off-white text-crisp-off-white hover:bg-crisp-off-white/10 font-rajdhani font-bold border-2"
                    animationType="arrow"
                  >
                    Explore Directory
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <TrustIndicators />
              </div>
            </div>
          </div>

          {/* Particles */}
          <ParticleSystem />
        </section>

        {/* Platform Features Section */}
        <section className="py-3xl bg-card">
          <div className="container mx-auto px-lg">
            <div className="text-center space-y-xl mb-2xl">
              <Badge variant="slate-blue" size="lg" className="font-rajdhani font-bold">
                Seven Platform Pillars
              </Badge>
              <h2 className="font-rajdhani font-bold text-4xl md:text-5xl text-card-foreground">
                Built for Idaho Gun Owners
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every feature designed around real needs of Treasure Valley shooters, trainers, and firearm enthusiasts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {platformFeatures.map((feature, index) => (
                <PlatformFeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content Grid */}
        <section className="py-3xl bg-muted/30">
          <div className="container mx-auto px-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
              {/* Featured Event */}
              <div className="lg:col-span-2">
                <h3 className="font-rajdhani font-bold text-2xl text-card-foreground mb-lg">
                  Featured Event
                </h3>
                <FeaturedEventSpotlight {...sampleEvent} />
              </div>

              {/* Sidebar */}
              <div className="space-y-xl">
                {/* Weather Intel */}
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-card-foreground mb-base">
                    Range Intel
                  </h3>
                  <IntelWeatherCard />
                </div>

                {/* Activity Feed */}
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-card-foreground mb-base">
                    Community Activity
                  </h3>
                  <div className="space-y-base">
                    {activityFeedData.map((activity, index) => (
                      <ActivityFeedCard key={index} {...activity} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directory Stats */}
        <section className="py-3xl bg-card">
          <div className="container mx-auto px-lg">
            <div className="text-center space-y-xl mb-2xl">
              <Badge variant="sagebrush-green" size="lg" className="font-rajdhani font-bold">
                Growing Network
              </Badge>
              <h2 className="font-rajdhani font-bold text-4xl text-card-foreground">
                Your Local Gun Community
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connecting you with verified, trusted businesses across the Treasure Valley.
              </p>
            </div>

            <DirectoryStatsGrid />
          </div>
        </section>

        {/* Marketplace Deal */}
        <section className="py-3xl bg-muted/30">
          <div className="container mx-auto px-lg">
            <div className="flex items-center justify-between mb-xl">
              <div>
                <h2 className="font-rajdhani font-bold text-3xl text-card-foreground">
                  Featured Marketplace Deal
                </h2>
                <p className="text-muted-foreground">
                  Local deals from verified dealers
                </p>
              </div>
              <Button variant="outline" animationType="arrow">
                View All Deals
              </Button>
            </div>

            <div className="max-w-2xl">
              <MarketplaceDealCard deal={sampleDeal} />
            </div>
          </div>
        </section>

        {/* Platform Values */}
        <section className="py-3xl bg-card">
          <div className="container mx-auto px-lg">
            <div className="text-center space-y-xl mb-2xl">
              <h2 className="font-rajdhani font-bold text-4xl text-card-foreground">
                Why Choose The Boise Gun Club?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're different because we're built by and for the people who actually live and shoot in Idaho.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {platformValueCards.map((card, index) => (
                <PlatformValueCard key={index} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* Contribution CTA */}
        <section className="py-3xl bg-muted/30">
          <div className="container mx-auto px-lg">
            <ContributionCTA />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-3xl">
          <div className="container mx-auto px-lg">
            <JoinMovementCTA />
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}