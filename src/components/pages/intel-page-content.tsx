'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CompactStatsBar } from '@/components/ui/compact-stats-bar'
import { SectionDivider } from '@/components/ui/section-divider'
import { WeatherConditionsTicker } from '@/components/ui/weather-conditions-ticker'
import { EnhancedLocationBrowser } from '@/components/ui/enhanced-location-browser'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { shootingLocations, getLocationStats } from '@/lib/intel-locations-data'
import { 
  Plus, Shield, 
  Compass, ChevronRight, Star, MapPin, Navigation,
  Camera, MessageSquare, AlertTriangle,
  TrendingUp, 
  Target,
  BarChart3
} from 'lucide-react'

interface IntelPageContentProps {
  liveWeatherConditions: any[]
  allWeatherData: any[]
}

export function IntelPageContent({ liveWeatherConditions, allWeatherData }: IntelPageContentProps) {
  const locationStats = getLocationStats()

  return (
    <div className="min-h-screen bg-background">
      {/* Map Hero - Content Left, Card Right (Layout 1) */}
      <section className="relative overflow-hidden bg-gradient-intel-hero px-md py-lg">
        {/* Topographic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('/images/Heroes/tbgc-intel-hero-background.webp')",
            backgroundPosition: 'center right'
          }}
        ></div>
        <div className="container mx-auto max-w-site relative z-10">
          <div className="hero-grid-layout">
            {/* Content - Left side */}
            <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
              {/* Top Header - Icon, Breadcrumbs & Badges Chunk */}
              <div className="flex items-center gap-base">
                <div className="bg-card/10 p-base rounded-xs border border-border">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-base">
                  {/* Breadcrumbs */}
                  <div className="flex items-center gap-xs text-sm text-white/60">
                    <span>Home</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-white font-medium">Intel</span>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-xs">
                    <Badge className="bg-card/10 text-white border-border rounded-xs">
                      <MapPin className="h-4 w-4 mr-xs" />
                      Shooting Locations
                    </Badge>
                    <Badge className="bg-card/10 text-white border-border rounded-xs">
                      <Shield className="h-4 w-4 mr-xs" />
                      Verified Areas
                    </Badge>
                    <Badge className="bg-card/10 text-white border-border rounded-xs">
                      <MapPin className="h-4 w-4 mr-xs" />
                      BLM & Forest Service
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Titles - H1 & H2 Butt Buddies */}
              <div className="space-y-xs">
                <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                  Idaho Shooting Locations & <span className="text-white">Ranges Map</span>
                </h1>
                <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                  BLM Land & Public Shooting Areas Near Boise
                </h2>
              </div>
              
              {/* Chunky Description */}
              <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
                Find legal shooting locations across Idaho including BLM land, Forest Service areas, and designated ranges. Community-verified locations with access requirements and safety information.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-base">
                <Button 
                  variant="solid-primary"
                  size="lg" 
                  className="bg-card text-nav-intel hover:bg-card/90 font-rajdhani font-bold"
                >
                  <Plus className="h-4 w-4 mr-xs" />
                  Submit Location
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-border text-white hover:bg-card hover:text-nav-intel"
                >
                  View Interactive Map
                </Button>
              </div>
            </div>
            
            {/* Featured Location Card - Right side */}
            <div className="lg:col-span-1 py-md min-h-[400px]">
              <div className="relative h-full">
                <Card className="mica border-nav-intel/30 shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                  {/* Hero Image Background */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full bg-nav-intel/10 opacity-20 rounded-xs" />
                    <div className="absolute inset-0 bg-gradient-to-br from-nav-intel/10 to-nav-intel/30" />
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-intel/20 to-nav-intel/10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-intel to-nav-intel"></div>
                  
                  <CardHeader className="pb-xs relative z-10">
                    <div className="flex items-center justify-between mb-xs">
                      <div className="flex items-center gap-xs">
                        <Badge variant="intel-unverified" size="xs">
                          UNVERIFIED
                        </Badge>
                      </div>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-nav-intel text-nav-intel" />
                        <span>4.5</span>
                      </div>
                    </div>
                    
                    <div className="space-y-xs">
                      <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">Lucky Peak Area</h3>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 text-nav-intel" />
                        <span>Near Lucky Peak Dam, ID</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-base relative z-10">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      Established shooting area with improved backstops and designated firing lines. Popular with locals and well-maintained.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <Navigation className="h-3 w-3 text-nav-intel" />
                        <span>Free Access</span>
                      </div>
                      <Button 
                        variant="solid-primary"
                        className="bg-gradient-to-r from-nav-intel to-nav-intel text-gruvbox-bg-dark hover:from-nav-intel hover:to-nav-intel font-rajdhani font-bold text-xs"
                        size="sm"
                      >
                        VIEW DETAILS
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Conditions Ticker - Live Data with Caching */}
      <WeatherConditionsTicker conditions={liveWeatherConditions} />

      {/* Compact Stats Bar - Stripe Style */}
      <section className="py-base bg-background border-b">
        <div className="container mx-auto max-w-site px-md">
          <CompactStatsBar stats={locationStats} />
        </div>
      </section>

      {/* Quick Access Toolbar */}
      <section className="py-xl bg-muted/30 border-b border-nav-intel/10">
        <div className="container mx-auto max-w-site px-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-base">
            {/* Quick Filters */}
            <div className="flex flex-wrap items-center gap-xs">
              <span className="text-sm font-medium text-nav-intel mr-base">Quick Access:</span>
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate transition-all duration-200">
                <Target className="h-3 w-3" />
                Near Me
              </Button>
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate transition-all duration-200">
                <Shield className="h-3 w-3" />
                Verified Only
              </Button>
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate transition-all duration-200">
                <MapPin className="h-3 w-3" />
                BLM Land
              </Button>
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate transition-all duration-200">
                <Navigation className="h-3 w-3" />
                Public Ranges
              </Button>
            </div>
            
            {/* View Toggle & Sort */}
            <div className="flex items-center gap-xs">
              <Button variant="ghost" size="sm" className="gap-xs text-nav-intel hover:bg-nav-intel/10 transition-all duration-200">
                <BarChart3 className="h-3 w-3" />
                List View
              </Button>
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate transition-all duration-200">
                <MapPin className="h-3 w-3" />
                Map View
              </Button>
              <div className="h-4 w-px bg-nav-intel/30 mx-xs" />
              <Button variant="ghost" size="sm" className="gap-xs text-nav-intel hover:bg-nav-intel/10 transition-all duration-200">
                <TrendingUp className="h-3 w-3" />
                Sort: Distance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="crosshair" spacing="none" />

      {/* Featured Locations - Full Width, Left Aligned */}
      <section className="py-4xl bg-gradient-to-br from-background to-muted/5">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Content - Left aligned */}
            <div className="lg:col-span-1 space-y-xl">
              <div className="space-y-lg">
                <Badge variant="intel-location" size="md">
                  Featured Locations
                </Badge>
                <h2 className="font-rajdhani text-6xl font-bold text-card-foreground leading-tight">
                  Most Popular <span className="text-nav-intel">Shooting Areas</span>
                </h2>
                <p className="text-body-lg text-muted-foreground leading-relaxed max-w-md">
                  Top-rated locations from across the Treasure Valley with detailed access information and community feedback.
                </p>
              </div>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate font-rajdhani font-bold"
              >
                View All {shootingLocations.length} Locations
              </Button>
            </div>
            
            {/* Featured Cards - Right side - 2x3 Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-lg">
              {shootingLocations.slice(0, 6).map((location, _index) => {
                const locationSlug = location.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').trim().replace(/^-|-$/g, '')
                return (
                <Link key={location.name} href={`/intel/locations/${locationSlug}`} className="block">
                  <Card variant="tactical" tacticalTheme="intel" className="tactical-card-mobile tactical-card-hover shadow-whisper">
                  <CardHeader className="pb-lg">
                    <div className="flex items-center justify-between mb-md">
                      <Badge variant="intel-location" size="xs">
                        {location.type}
                      </Badge>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        {location.verified && (
                          <>
                            <Shield className="h-3 w-3 text-nav-intel" />
                            <span className="font-medium">Verified</span>
                          </>
                        )}
                      </div>
                    </div>
                    <h3 className="font-rajdhani font-bold text-xl leading-tight text-card-foreground">{location.name}</h3>
                  </CardHeader>
                  <CardContent className="space-y-lg">
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {location.description}
                    </p>
                    <div className="flex items-center justify-between pt-md border-t border-border">
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <MapPin className="h-4 w-4 text-nav-intel" />
                        <span className="font-medium">{location.access}</span>
                      </div>
                      <Button 
                        variant="solid-primary"
                        size="sm" 
                        className="bg-nav-intel text-white hover:bg-nav-intel/90 font-rajdhani font-bold"
                      >
                        Details
                      </Button>
                    </div>
                  </CardContent>
                  </Card>
                </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="sights" spacing="none" />

      {/* MAIN SEARCHABLE ARCHIVE SYSTEM - Enhanced Location Browser */}
      <EnhancedLocationBrowser 
        locations={shootingLocations}
        weatherData={allWeatherData}
      />

      {/* Section Divider */}
      <SectionDivider variant="target" spacing="none" />

      {/* Community Activity - Full Width, Left Aligned */}
      <section className="py-4xl bg-gradient-to-br from-nav-intel/5 to-nav-intel/10">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Content - Left aligned */}
            <div className="lg:col-span-1 space-y-base">
              <div>
                <Badge variant="intel-weather" size="md">
                  Live Updates
                </Badge>
                <h2 className="font-rajdhani text-3xl font-bold text-card-foreground mt-base">
                  Community <span className="text-nav-intel">Activity</span>
                </h2>
                <p className="text-muted-foreground mt-base">
                  Real-time updates from our community including new locations, safety alerts, and verified information.
                </p>
              </div>
              
              {/* Verification Stats - Honest Numbers */}
              <div className="grid grid-cols-3 gap-xs">
                <div className="bg-card/50 p-xs rounded-sm text-center border border-nav-intel/20">
                  <p className="text-lg font-bold text-nav-intel font-rajdhani">{locationStats.verifiedLocations}</p>
                  <p className="text-xs text-muted-foreground">Verified</p>
                </div>
                <div className="bg-card/50 p-xs rounded-sm text-center border border-nav-intel/20">
                  <p className="text-lg font-bold text-warning-clay font-rajdhani">{locationStats.totalLocations - locationStats.verifiedLocations}</p>
                  <p className="text-xs text-muted-foreground">Need Review</p>
                </div>
                <div className="bg-card/50 p-xs rounded-sm text-center border border-nav-intel/20">
                  <p className="text-lg font-bold text-nav-intel font-rajdhani">0</p>
                  <p className="text-xs text-muted-foreground">In Progress</p>
                </div>
              </div>
            </div>
            
            {/* Activity Feed - Right side */}
            <div className="lg:col-span-2 space-y-base">
              <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                <div className="flex items-start gap-base p-base">
                  <div className="w-8 h-8 rounded-full bg-nav-intel/20 flex items-center justify-center flex-shrink-0">
                    <Plus className="h-4 w-4 text-nav-intel" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-xs">
                      <p className="font-medium text-card-foreground text-sm">New location submitted: Table Rock Area</p>
                      <span className="text-xs text-muted-foreground">2h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Waiting for community verification</p>
                  </div>
                </div>
              </Card>
              
              <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                <div className="flex items-start gap-base p-base">
                  <div className="w-8 h-8 rounded-full bg-warning-clay/20 flex items-center justify-center flex-shrink-0">
                    <Camera className="h-4 w-4 text-warning-clay" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-xs">
                      <p className="font-medium text-card-foreground text-sm">Photos needed: Snake River Area</p>
                      <span className="text-xs text-muted-foreground">6h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Help verify access conditions and backstops</p>
                  </div>
                </div>
              </Card>
              
              <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                <div className="flex items-start gap-base p-base">
                  <div className="w-8 h-8 rounded-full bg-warning-clay/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-4 w-4 text-warning-clay" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-xs">
                      <p className="font-medium text-card-foreground text-sm">6 locations need verification</p>
                      <span className="text-xs text-muted-foreground">1d ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Community help needed to verify safety and access info</p>
                  </div>
                </div>
              </Card>
              
              {/* Contribute Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-xs mt-base">
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate">
                  <Plus className="h-3 w-3 mr-xs" />
                  Submit
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate">
                  <Camera className="h-3 w-3 mr-xs" />
                  Photos
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate">
                  <MessageSquare className="h-3 w-3 mr-xs" />
                  Review
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate">
                  <AlertTriangle className="h-3 w-3 mr-xs" />
                  Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-4xl bg-gradient-to-br from-dark-chocolate/95 to-warm-stone/90">
        <div className="container mx-auto max-w-site px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-canyon-clay/20 text-canyon-clay border-canyon-clay/30">
              <Shield className="h-4 w-4 mr-xs" />
              Safety First
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-crisp-off-white">
              Shoot <span className="text-rusty-orange">Responsibly</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg text-left max-w-3xl mx-auto">
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-crisp-off-white">Before You Go:</h3>
                <ul className="space-y-xs text-crisp-off-white/80">
                  <li className="flex items-center gap-xs">• Check current fire restrictions</li>
                  <li className="flex items-center gap-xs">• Verify seasonal closures</li>
                  <li className="flex items-center gap-xs">• Bring adequate backstop if needed</li>
                  <li className="flex items-center gap-xs">• Pack out all trash and targets</li>
                </ul>
              </div>
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-crisp-off-white">Safety Rules:</h3>
                <ul className="space-y-xs text-crisp-off-white/80">
                  <li className="flex items-center gap-xs">• Follow the four fundamental rules</li>
                  <li className="flex items-center gap-xs">• Be aware of your surroundings</li>
                  <li className="flex items-center gap-xs">• Respect private property</li>
                  <li className="flex items-center gap-xs">• Report unsafe conditions</li>
                </ul>
              </div>
            </div>
            <Button 
              variant="solid-accent"
              size="xl" 
              className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
            >
              Submit New Location
            </Button>
          </div>
        </div>
      </section>

        {/* Trust Indicators - Real Location Data */}
        <section className="py-xl section-bg-intel-premium section-skew-subtle">
          <div className="container mx-auto max-w-site px-md text-center">
            <h2 className="text-heading-xl font-rajdhani font-bold text-card-foreground mb-base">
              Idaho's Premier Shooting Intelligence Hub
            </h2>
            <TrustIndicators className="mb-lg" />
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time conditions, verified locations, and community-contributed intel for safe and responsible shooting across Idaho's public lands.
            </p>
          </div>
        </section>

        {/* Community Contribution CTA */}
        <section className="py-4xl section-bg-sharp">
          <div className="container mx-auto max-w-site px-md">
            <ContributionCTA />
          </div>
        </section>
    </div>
  )
}