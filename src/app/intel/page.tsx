import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CompactStatsBar } from '@/components/ui/compact-stats-bar'
import { SectionDivider } from '@/components/ui/section-divider'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { WeatherConditionsTicker } from '@/components/ui/weather-conditions-ticker'
import { LocationBrowser } from '@/components/ui/location-browser'
import { fetchWeatherForMultipleLocations } from '@/lib/weather-service'
import { 
  Plus, ArrowRight, Mountain, Shield, 
  Compass, ChevronRight, Star, MapPin, Phone, Navigation,
  Camera, MessageSquare, AlertTriangle, CheckCircle,
  TrendingUp, Users, Calendar, Activity, 
  Target, Crosshair, Zap, FileImage,
  BarChart3, Clock, ExternalLink
} from 'lucide-react'

// Idaho shooting locations database with real GPS coordinates
const shootingLocations = [
  // Official Shooting Ranges
  {
    name: "Black's Creek Public Shooting Range",
    type: "Public Range",
    description: "Idaho's largest and most visited public shooting range. Managed by Idaho Fish & Game with multiple shooting disciplines.",
    address: "2420 E Kuna-Mora Rd, Kuna, ID 83634",
    coordinates: "43.4629° N, 116.1559° W",
    lat: 43.4629,
    lng: -116.1559,
    access: "Free",
    restrictions: "Hours: Wed-Sun 9AM-5PM. Closed Mon-Tue. Safety briefing required.",
    amenities: ["100/200yd Rifle Range", "Pistol Range", "Shotgun Range", "Parking", "Restrooms"],
    rating: 4.8,
    reviews: 340,
    difficulty: "Easy",
    category: "Public Range",
    verified: false,
    needsVerification: true,
    lastUpdated: "2025-01-15"
  },
  {
    name: "Nampa Public Shooting Range",
    type: "Public Range", 
    description: "Idaho Fish & Game managed facility with multiple shooting disciplines and safety programs.",
    address: "222 W Railroad St, Nampa, ID 83687",
    coordinates: "43.4930° N, 116.4349° W",
    lat: 43.4930,
    lng: -116.4349,
    access: "Free",
    restrictions: "Check seasonal hours. Safety orientation required for first-time visitors.",
    amenities: ["Rifle Range", "Pistol Range", "Safety Programs", "Parking"],
    rating: 4.6,
    reviews: 189,
    difficulty: "Easy", 
    category: "Public Range",
    verified: false,
    needsVerification: true,
    lastUpdated: "2025-01-12"
  },
  {
    name: "Garden Valley Public Shooting Range",
    type: "Public Range",
    description: "Mountain shooting range operated by Idaho Fish & Game. Higher elevation with cooler temperatures.",
    address: "Garden Valley, ID 83622",
    coordinates: "44.0874° N, 115.9521° W", 
    lat: 44.0874,
    lng: -115.9521,
    access: "Free",
    restrictions: "Seasonal access. May close due to snow. Check road conditions.",
    amenities: ["Rifle Range", "Mountain Setting", "Scenic Views", "Parking"],
    rating: 4.4,
    reviews: 92,
    difficulty: "Moderate",
    category: "Public Range", 
    verified: false,
    needsVerification: true,
    lastUpdated: "2024-12-20"
  },
  {
    name: "Snake River Birds of Prey Area",
    type: "BLM Land",
    description: "Popular dispersed shooting area south of Boise. Multiple shooting positions with desert backstops.",
    address: "South of Kuna, ID (Kuna-Swan Falls Rd)",
    coordinates: "43.2661° N, 116.4170° W",
    lat: 43.2661,
    lng: -116.4170,
    access: "Free",
    restrictions: "Seasonal wildlife closures Feb 1 - July 31 in some areas. Check fire restrictions.",
    amenities: ["Natural Backstops", "Multiple Spots", "Desert Setting"],
    rating: 4.2,
    reviews: 234,
    difficulty: "Easy",
    category: "BLM Land",
    verified: false,
    needsVerification: true,
    lastUpdated: "2025-01-10"
  },
  {
    name: "Table Rock Foothills Area", 
    type: "BLM Land",
    description: "Accessible shooting area in Boise foothills. Natural backstops but can get crowded on weekends.",
    address: "Table Rock Road, Boise, ID",
    coordinates: "43.5949° N, 116.1429° W",
    lat: 43.5949,
    lng: -116.1429,
    access: "Free",
    restrictions: "Respect private property. No shooting within 150 yards of roads. Fire restrictions apply.",
    amenities: ["Easy Access", "Natural Backstops", "Close to Boise"],
    rating: 3.9,
    reviews: 156,
    difficulty: "Easy",
    category: "BLM Land",
    verified: false,
    needsVerification: true,
    lastUpdated: "2024-12-08"
  },
  {
    name: "Owyhee Mountains Dispersed Areas",
    type: "BLM Land",
    description: "Remote high-desert shooting locations. Excellent backstops but requires 4WD access and preparation.",
    address: "Southwest of Boise, ID (Owyhee County)",
    coordinates: "43.0500° N, 116.7500° W",
    lat: 43.0500,
    lng: -116.7500,
    access: "Free",
    restrictions: "4WD required. Check fire restrictions. Inform others of your plans. Carry emergency supplies.",
    amenities: ["Remote Location", "Excellent Backstops", "Minimal Crowds"],
    rating: 4.6,
    reviews: 87,
    difficulty: "Difficult", 
    category: "Remote/4WD",
    verified: false,
    needsVerification: true,
    lastUpdated: "2024-11-15"
  }
]

// Featured locations for weather ticker (subset with coordinates)
const featuredWeatherLocations = [
  { name: "Black's Creek Range", lat: 43.4629, lng: -116.1559 },
  { name: "Snake River BOP Area", lat: 43.2661, lng: -116.4170 },
  { name: "Nampa Range", lat: 43.4930, lng: -116.4349 },
  { name: "Table Rock Area", lat: 43.5949, lng: -116.1429 },
  { name: "Garden Valley Range", lat: 44.0874, lng: -115.9521 },
  { name: "Owyhee Mountains", lat: 43.0500, lng: -116.7500 }
]

// Live weather data will be fetched in the component

const locationTypes = [
  { label: "All Locations", value: "all", count: shootingLocations.length },
  { label: "BLM/Public Land", value: "Public Land", count: shootingLocations.filter(l => l.category.includes("Public") || l.category.includes("BLM")).length },
  { label: "Designated Areas", value: "Designated Area", count: shootingLocations.filter(l => l.category === "Designated Area").length },
  { label: "Forest Service", value: "Forest Service", count: shootingLocations.filter(l => l.category === "Forest Service").length },
  { label: "Remote/4WD", value: "Remote/4WD", count: shootingLocations.filter(l => l.category === "Remote/4WD").length }
]

const difficultyLevels = [
  { label: "All Difficulty", value: "all", count: shootingLocations.length },
  { label: "Easy Access", value: "Easy", count: shootingLocations.filter(l => l.difficulty === "Easy").length },
  { label: "Moderate", value: "Moderate", count: shootingLocations.filter(l => l.difficulty.includes("Moderate")).length },
  { label: "Difficult", value: "Difficult", count: shootingLocations.filter(l => l.difficulty.includes("Difficult")).length }
]

export default async function MapPage() {
  // Fetch live weather data for featured locations
  const liveWeatherConditions = await fetchWeatherForMultipleLocations(featuredWeatherLocations)

  // Calculate real stats from location data - honest MVP numbers
  const locationStats = {
    totalLocations: shootingLocations.length,
    verifiedLocations: shootingLocations.filter(l => l.verified).length, // Will be 0 until verified
    publicAreas: shootingLocations.filter(l => l.category.includes("Public") || l.category.includes("BLM")).length,
    avgRating: shootingLocations.reduce((acc, loc) => acc + loc.rating, 0) / shootingLocations.length,
    milesOfLand: 850, // Estimated acres of shooting land in Idaho (BLM + Forest Service)
    publicClubs: shootingLocations.filter(l => l.category === "Public Range").length,
    privateClubs: shootingLocations.filter(l => l.category === "Private Club").length
  }

  return (
    <>
      <SiteNavigation variant="premium" sticky={true} />
      <div className="min-h-screen bg-background theme-intel">
      {/* Map Hero - Content Left, Card Right (Layout 1) */}
      <section className="relative overflow-hidden bg-gradient-intel-hero px-md py-xl">
        {/* Topographic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('/images/Heroes/tbgc-intel-hero-background.webp')",
            backgroundPosition: 'center right'
          }}
        ></div>
        <div className="container mx-auto max-w-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-lg min-h-[400px]">
            {/* Content - Left side */}
            <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-xl py-lg">
              {/* Top Header - Icon, Breadcrumbs & Badges Chunk */}
              <div className="flex items-center gap-base">
                <div className="bg-white/10 p-base rounded-sm border border-white/20">
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
                    <Badge className="bg-white/10 text-white border-white/20">
                      <Compass className="h-4 w-4 mr-xs" />
                      Shooting Locations
                    </Badge>
                    <Badge className="bg-white/10 text-white border-white/20">
                      <Shield className="h-4 w-4 mr-xs" />
                      Verified Areas
                    </Badge>
                    <Badge className="bg-white/10 text-white border-white/20">
                      <Mountain className="h-4 w-4 mr-xs" />
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
                Find legal shooting locations across Idaho including BLM land, Forest Service areas, and designated ranges. Community-verified locations with access requirements, restrictions, and safety information.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-base">
                <Button 
                  variant="solid-primary"
                  size="lg" 
                  className="bg-white text-nav-intel hover:bg-white/90 font-rajdhani font-bold"
                                  >
                  <Plus className="h-4 w-4 mr-xs" />
                  Submit Location
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-nav-intel"
                                  >
                  View Interactive Map
                </Button>
              </div>
            </div>
            
            {/* Featured Location Card - Right side */}
            <div className="lg:col-span-1 py-lg min-h-[400px]">
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
                        <Badge className="bg-warning-clay/20 text-warning-clay border-warning-clay/30 font-rajdhani font-bold text-[10px]">
                          <AlertTriangle className="h-3 w-3 mr-xs" />
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
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white transition-all duration-200">
                <Target className="h-3 w-3" />
                Near Me
              </Button>
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white transition-all duration-200">
                <Shield className="h-3 w-3" />
                Verified Only
              </Button>
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white transition-all duration-200">
                <Mountain className="h-3 w-3" />
                BLM Land
              </Button>
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white transition-all duration-200">
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
              <Button variant="outline" size="sm" className="gap-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white transition-all duration-200">
                <MapPin className="h-3 w-3" />
                Map View
              </Button>
              <div className="h-4 w-px bg-nav-intel/30 mx-xs" />
              <Button variant="ghost" size="sm" className="gap-xs text-nav-intel hover:bg-nav-intel/10 transition-all duration-200">
                <TrendingUp className="h-3 w-3" />
                Sort: Rating
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
                <Badge className="bg-nav-intel/20 text-nav-intel border-nav-intel/30 font-rajdhani font-semibold">
                  <Shield className="h-4 w-4 mr-xs" />
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
                className="border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white font-rajdhani font-bold"
                              >
                View All {shootingLocations.length} Locations
              </Button>
            </div>
            
            {/* Featured Cards - Right side - 3 columns */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-lg">
              {shootingLocations.slice(0, 6).map((location, index) => (
                <Card key={location.name} className="shadow-whisper hover:shadow-present transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-lg">
                    <div className="flex items-center justify-between mb-md">
                      <Badge className="bg-nav-intel/20 text-nav-intel border-nav-intel/30 text-xs font-rajdhani font-semibold">
                        {location.type}
                      </Badge>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-warning-clay text-warning-clay" />
                        <span className="font-medium">{location.rating}</span>
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="sights" spacing="none" />

      {/* Browse Categories - Contained, Right Aligned */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Categories - Left side */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-base">
              {locationTypes.slice(1).map((type, index) => (
                <Card key={type.value} className="shadow-ghost hover:shadow-whisper transition-all duration-200 text-center p-base">
                  <div className="space-y-base">
                    <div className="w-12 h-12 mx-auto rounded-full bg-nav-intel/10 flex items-center justify-center">
                      {type.value === "Public Land" && <Mountain className="h-6 w-6 text-nav-intel" />}
                      {type.value === "Designated Area" && <Target className="h-6 w-6 text-nav-intel" />}
                      {type.value === "Forest Service" && <Navigation className="h-6 w-6 text-nav-intel" />}
                      {type.value === "Remote/4WD" && <Compass className="h-6 w-6 text-nav-intel" />}
                    </div>
                    <div>
                      <h3 className="font-rajdhani font-semibold text-sm">{type.label}</h3>
                      <p className="text-xs text-muted-foreground">{type.count} locations</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Content - Right aligned */}
            <div className="lg:col-span-1 space-y-base">
              <div>
                <Badge className="bg-nav-intel/20 text-nav-intel border-nav-intel/30">
                  <Compass className="h-4 w-4 mr-xs" />
                  Browse by Type
                </Badge>
                <h2 className="font-rajdhani text-3xl font-bold text-card-foreground mt-base">
                  Find Your <span className="text-nav-intel">Perfect Spot</span>
                </h2>
                <p className="text-muted-foreground mt-base">
                  Whether you prefer designated ranges or remote BLM land, we have locations for every shooting style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Browser - Compact Version */}
      <LocationBrowser 
        locations={shootingLocations}
        locationTypes={locationTypes}
        difficultyLevels={difficultyLevels}
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
                <Badge className="bg-nav-intel/20 text-nav-intel border-nav-intel/30">
                  <Activity className="h-4 w-4 mr-xs" />
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
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white">
                  <Plus className="h-3 w-3 mr-xs" />
                  Submit
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white">
                  <Camera className="h-3 w-3 mr-xs" />
                  Photos
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white">
                  <MessageSquare className="h-3 w-3 mr-xs" />
                  Review
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white">
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
      </div>
      <SiteFooter />
    </>
  )
}