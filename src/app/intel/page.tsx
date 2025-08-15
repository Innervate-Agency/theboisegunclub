import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CompactStatsBar } from '@/components/ui/compact-stats-bar'
import { SectionDivider } from '@/components/ui/section-divider'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { WeatherConditionsTicker } from '@/components/ui/weather-conditions-ticker'
import { EnhancedLocationBrowser } from '@/components/ui/enhanced-location-browser'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { fetchWeatherForMultipleLocations } from '@/lib/weather-service'
import { 
  Plus, Mountain, Shield, 
  Compass, ChevronRight, Star, MapPin, Navigation,
  Camera, MessageSquare, AlertTriangle,
  TrendingUp, 
  Target,
  BarChart3
} from 'lucide-react'

// Comprehensive Idaho shooting locations database with detailed metadata
const shootingLocations = [
  // Designated Public Ranges - Idaho Fish & Game Managed
  {
    name: "Black's Creek Public Shooting Range",
    type: "Public Range",
    description: "Idaho's premier public shooting facility managed by Idaho Fish & Game. Features multiple disciplines with excellent safety infrastructure and community programs.",
    address: "2420 E Kuna-Mora Rd, Kuna, ID 83634",
    coordinates: "43.4629° N, 116.1559° W",
    lat: 43.4629,
    lng: -116.1559,
    access: "Free Public Access",
    hours: "Wed-Sun: 9AM-5PM (Closed Mon-Tue)",
    restrictions: "Mandatory safety briefing for first-time visitors. No steel targets during high fire danger. Lead ammunition restrictions.",
    amenities: ["100-yard rifle range", "200-yard rifle range", "25-yard pistol range", "Shotgun pattern board", "Restrooms", "Parking for 50+ vehicles", "Covered shooting benches", "Target stands provided"],
    distanceFromBoise: 18.5,


    difficulty: "Easy",
    category: "Public Range",
    verified: true,
    elevation: 2654,
    bestWindConditions: "Early morning (7-10 AM)",
    lastUpdated: "2025-01-15",
    weatherPriority: "high"
  },
  {
    name: "Independence Indoor Shooting",
    type: "Indoor Range", 
    description: "Premier indoor facility featuring climate-controlled environments and advanced ventilation. Perfect for precision work and training regardless of weather.",
    address: "2701 S Vista Ave, Boise, ID 83705",
    coordinates: "43.5684° N, 116.2494° W",
    lat: 43.5684,
    lng: -116.2494,
    access: "$25 lane rental",
    hours: "Mon-Sat: 10AM-9PM, Sun: 10AM-6PM",
    restrictions: "Eye and ear protection required. Range ammunition only. No steel-core or armor-piercing. Age restrictions for unsupervised minors.",
    amenities: ["25-yard climate-controlled lanes", "Advanced ventilation system", "Target systems", "Rental firearms available", "Pro shop", "Gunsmith services", "Training classes", "Private instruction"],
    distanceFromBoise: 3.2,


    difficulty: "Easy", 
    category: "Indoor Range",
    verified: true,
    elevation: 2785,
    bestWindConditions: "N/A - Indoor facility",
    lastUpdated: "2025-01-14",
    weatherPriority: "low"
  },
  {
    name: "George Nourse Park Range",
    type: "Municipal Range",
    description: "City of Boise managed outdoor range in east Boise. Well-maintained facility with regular community events and training programs.",
    address: "901 N Collister Dr, Boise, ID 83703",
    coordinates: "43.6398° N, 116.2089° W", 
    lat: 43.6398,
    lng: -116.2089,
    access: "Free with Boise residency, $10 non-resident",
    hours: "Daylight hours, check seasonal schedule",
    restrictions: "Boise city limits. Safety rules strictly enforced. No rapid fire. Supervised ranges only.",
    amenities: ["50-yard rifle range", "25-yard pistol range", "Benches and target stands", "Parking", "Restrooms nearby", "Regular safety officers"],
    distanceFromBoise: 5.8,


    difficulty: "Easy",
    category: "Municipal Range", 
    verified: true,
    elevation: 2812,
    bestWindConditions: "Morning hours (6-10 AM)",
    lastUpdated: "2024-12-28",
    weatherPriority: "medium"
  },
  // BLM Dispersed Shooting Areas
  {
    name: "Snake River Birds of Prey Area",
    type: "BLM Dispersed",
    description: "Expansive BLM area with multiple established shooting positions. Excellent natural backstops and varied terrain for different disciplines.",
    address: "Kuna-Swan Falls Rd, south of Kuna, ID",
    coordinates: "43.2661° N, 116.4170° W",
    lat: 43.2661,
    lng: -116.4170,
    access: "Free BLM Access",
    hours: "Sunrise to sunset year-round",
    restrictions: "Wildlife closure Feb 1 - July 31 in nesting areas. Fire restrictions May-October. Pack out all trash. No glass targets. 150-yard minimum from roads.",
    amenities: ["Natural rock backstops", "Multiple shooting positions", "Varied distances", "Desert environment", "Established access roads", "Popular with local clubs"],
    distanceFromBoise: 28.3,


    difficulty: "Moderate",
    category: "BLM Land",
    verified: true,
    elevation: 2340,
    bestWindConditions: "Early morning, late evening",
    lastUpdated: "2025-01-08",
    weatherPriority: "high"
  },
  {
    name: "Table Rock Area - Boise Foothills", 
    type: "BLM Dispersed",
    description: "Popular foothills location with excellent elevation and backstops. Close to Boise but can be busy on weekends. Multiple established positions.",
    address: "Table Rock Rd, Boise, ID 83712",
    coordinates: "43.5949° N, 116.1429° W",
    lat: 43.5949,
    lng: -116.1429,
    access: "Free BLM Access",
    hours: "Sunrise to sunset, year-round",
    restrictions: "Respect private property boundaries. Fire restrictions apply. No shooting within 150 yards of roads or trails. Pack out all trash.",
    amenities: ["Natural hillside backstops", "Multiple positions", "Easy 2WD access", "Scenic mountain views", "Close to Boise", "Popular area"],
    distanceFromBoise: 12.1,


    difficulty: "Easy",
    category: "BLM Land",
    verified: true,
    elevation: 3245,
    bestWindConditions: "Morning hours (6-10 AM)",
    lastUpdated: "2024-12-15",
    weatherPriority: "high"
  },
  {
    name: "Lucky Peak Area - East Boise",
    type: "Forest Service",
    description: "Forest Service land near Lucky Peak Dam with established shooting areas. Higher elevation provides cooler temperatures and less wind.",
    address: "Lucky Peak Dam Rd, Boise, ID 83716",
    coordinates: "43.5234° N, 116.0654° W", 
    lat: 43.5234,
    lng: -116.0654,
    access: "Free Forest Service Access",
    hours: "Sunrise to sunset, seasonal closures possible",
    restrictions: "Forest Service regulations. Fire restrictions May-September. No target shooting within 150 yards of water. Seasonal wildlife closures possible.",
    amenities: ["Mountain backstops", "Cooler temperatures", "Less crowded", "Forest setting", "Multiple positions", "Good for long-range"],
    distanceFromBoise: 16.7,


    difficulty: "Moderate",
    category: "Forest Service",
    verified: true,
    elevation: 3890,
    bestWindConditions: "Early morning, evening",
    lastUpdated: "2024-11-30",
    weatherPriority: "high"
  },
  {
    name: "Emmett Area - Squaw Creek",
    type: "BLM Dispersed",
    description: "Northern Treasure Valley location with excellent backstops and less pressure. Good for those seeking quieter shooting opportunities.",
    address: "Squaw Creek Rd, near Emmett, ID 83617",
    coordinates: "43.8456° N, 116.4823° W",
    lat: 43.8456,
    lng: -116.4823,
    access: "Free BLM Access",
    hours: "Sunrise to sunset year-round",
    restrictions: "BLM regulations apply. Fire restrictions in summer. Pack out trash. No glass targets. Be aware of private property boundaries.",
    amenities: ["Natural backstops", "Less crowded", "Good access road", "Multiple positions", "Varied terrain", "Northern valley views"],
    distanceFromBoise: 32.5,


    difficulty: "Easy",
    category: "BLM Land",
    verified: false,
    elevation: 2456,
    bestWindConditions: "Morning hours",
    lastUpdated: "2024-10-22",
    weatherPriority: "medium",
    needsVerification: true
  },
  // Remote/Advanced Areas
  {
    name: "Owyhee Mountains - Jump Creek",
    type: "Remote BLM",
    description: "Remote high-desert location requiring preparation and 4WD access. Excellent for long-range shooting with minimal interference.",
    address: "Jump Creek Rd, Owyhee County, ID",
    coordinates: "43.0234° N, 116.7892° W",
    lat: 43.0234,
    lng: -116.7892,
    access: "Free BLM Access (4WD required)",
    hours: "Sunrise to sunset, weather dependent",
    restrictions: "4WD vehicle required. Inform others of plans. Carry emergency supplies. Fire restrictions critical. Remote area - no services.",
    amenities: ["Excellent long-range backstops", "Minimal crowds", "High-desert environment", "Multiple canyons", "Advanced shooting opportunities"],
    distanceFromBoise: 67.2,


    difficulty: "Difficult", 
    category: "Remote/4WD",
    verified: false,
    elevation: 4123,
    bestWindConditions: "Early morning",
    lastUpdated: "2024-09-18",
    weatherPriority: "high",
    needsVerification: true
  },
  {
    name: "CJ Strike Reservoir Area",
    type: "BLM Dispersed",
    description: "Southwestern Idaho location with good backstops and water access nearby. Popular with camping shooters and multi-day enthusiasts.",
    address: "CJ Strike Dam Rd, Bruneau, ID 83604",
    coordinates: "42.9567° N, 115.9234° W", 
    lat: 42.9567,
    lng: -115.9234,
    access: "Free BLM Access",
    hours: "24/7 access, daylight shooting only",
    restrictions: "BLM regulations. Seasonal fire restrictions. Water safety regulations near reservoir. Pack out all trash.",
    amenities: ["Natural backstops", "Water access nearby", "Camping opportunities", "Less crowded", "Good for extended trips"],
    distanceFromBoise: 89.4,


    difficulty: "Moderate",
    category: "BLM Land",
    verified: false,
    elevation: 2698,
    bestWindConditions: "Morning and evening",
    lastUpdated: "2024-08-15",
    weatherPriority: "medium",
    needsVerification: true
  },
  // Northern Areas
  {
    name: "Payette National Forest - Banks",
    type: "Forest Service",
    description: "Mountain forest location with cooler temperatures and excellent backstops. Seasonal access with potential snow closure in winter.",
    address: "Banks-Lowman Rd, Banks, ID 83602",
    coordinates: "44.0891° N, 116.1123° W",
    lat: 44.0891,
    lng: -116.1123,
    access: "Free Forest Service Access",
    hours: "Sunrise to sunset, seasonal closures",
    restrictions: "Forest Service regulations. Seasonal road closures Nov-May. Fire restrictions summer. No target shooting within 150 yards of roads/trails/water.",
    amenities: ["Mountain environment", "Cooler temperatures", "Forest setting", "Good backstops", "Less crowded", "Scenic area"],
    distanceFromBoise: 52.3,


    difficulty: "Moderate",
    category: "Forest Service",
    verified: false,
    elevation: 4567,
    bestWindConditions: "Sheltered, variable",
    lastUpdated: "2024-07-20",
    weatherPriority: "high",
    needsVerification: true
  },
  {
    name: "Caldwell - Deer Flat Area",
    type: "BLM Dispersed",
    description: "Western Treasure Valley location with good access and established positions. Popular with Nampa and Caldwell area shooters.",
    address: "Lake Ave, near Caldwell, ID 83607",
    coordinates: "43.6234° N, 116.7345° W", 
    lat: 43.6234,
    lng: -116.7345,
    access: "Free BLM Access",
    hours: "Sunrise to sunset year-round",
    restrictions: "BLM regulations. Respect wildlife refuge boundaries. Fire restrictions apply. No shooting near water areas.",
    amenities: ["Established positions", "Good access road", "Western valley location", "Less pressure than eastern areas"],
    distanceFromBoise: 28.9,


    difficulty: "Easy",
    category: "BLM Land",
    verified: false,
    elevation: 2298,
    bestWindConditions: "Morning hours",
    lastUpdated: "2024-06-12",
    weatherPriority: "medium",
    needsVerification: true
  },
  // Central Idaho - Advanced
  {
    name: "Boise National Forest - Pine",
    type: "Forest Service",
    description: "High-elevation forest location offering cooler shooting conditions and excellent long-range opportunities. Requires mountain driving skills.",
    address: "Pine-Featherville Rd, Pine, ID 83647",
    coordinates: "43.4523° N, 115.2167° W",
    lat: 43.4523,
    lng: -115.2167,
    access: "Free Forest Service Access",
    hours: "Sunrise to sunset, seasonal access",
    restrictions: "Mountain road access. Seasonal snow closures. Forest Service regulations. Fire restrictions critical. High elevation conditions.",
    amenities: ["High elevation", "Cooler conditions", "Long-range opportunities", "Mountain scenery", "Advanced terrain", "Less accessible"],
    distanceFromBoise: 78.6,


    difficulty: "Difficult",
    category: "Forest Service",
    verified: false,
    elevation: 5234,
    bestWindConditions: "Variable mountain conditions",
    lastUpdated: "2024-05-30",
    weatherPriority: "high",
    needsVerification: true
  }
]

// High-priority weather monitoring locations for ticker display - OUTDOOR ONLY
const featuredWeatherLocations = [
  { name: "Black's Creek Public Shooting Range", lat: 43.4629, lng: -116.1559 },
  { name: "Snake River Birds of Prey Area", lat: 43.2661, lng: -116.4170 },
  { name: "Table Rock Area - Boise Foothills", lat: 43.5949, lng: -116.1429 },
  { name: "Lucky Peak Area - East Boise", lat: 43.5234, lng: -116.0654 },
  { name: "Owyhee Mountains - Jump Creek", lat: 43.0234, lng: -116.7892 }
]

// Weather monitoring: outdoor locations only for API efficiency
// Indoor ranges excluded - weather doesn't affect climate-controlled facilities
// Free tier: 1000 calls/day = ~20 locations max (48 calls/day per location)

export default async function MapPage() {
  // Fetch live weather data for featured locations (ticker display)
  const liveWeatherConditions = await fetchWeatherForMultipleLocations(featuredWeatherLocations)
  
  // Fetch weather data for OUTDOOR locations only (exclude indoor ranges)
  const outdoorLocationCoords = shootingLocations
    .filter(loc => loc.category !== 'Indoor Range' && loc.weatherPriority !== 'low')
    .map(loc => ({
      name: loc.name,
      lat: loc.lat,
      lng: loc.lng
    }))
  const allWeatherData = await fetchWeatherForMultipleLocations(outdoorLocationCoords)

  // Calculate real stats from location data - honest MVP numbers
  const locationStats = {
    totalLocations: shootingLocations.length,
    verifiedLocations: shootingLocations.filter(l => l.verified).length, // Will be 0 until verified
    publicAreas: shootingLocations.filter(l => l.category.includes("Public") || l.category.includes("BLM")).length,
    milesOfLand: 850, // Estimated acres of shooting land in Idaho (BLM + Forest Service)
    publicClubs: shootingLocations.filter(l => l.category === "Public Range").length,
    privateClubs: shootingLocations.filter(l => l.category === "Private Club").length
  }

  return (
    <>
      <SiteNavigation variant="premium" sticky={true} />
      <div className="min-h-screen bg-background theme-intel">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
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
                Find legal shooting locations across Idaho including BLM land, Forest Service areas, and designated ranges. Community-verified locations with access requirements and safety information.
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
                  className="border-border text-white hover:bg-white hover:text-nav-intel"
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
                <Mountain className="h-3 w-3" />
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
              {shootingLocations.slice(0, 6).map((location, _index) => (
                <Card key={location.name} className="shadow-whisper hover:shadow-present transition-all duration-300 overflow-hidden">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="sights" spacing="none" />

      {/* Enhanced Location Browser with Weather Integration */}
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
      <SiteFooter currentPage="intel" />
    </>
  )
}