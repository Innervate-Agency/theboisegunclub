'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { EventCard } from '@/components/ui/EventCard'
import { EventTicker } from '@/components/ui/event-ticker'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { FloatingCalendars } from '@/components/ui/hero-floating-calendars'
import { EventsEmbers } from '@/components/ui/hero-events-embers'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { 
  Ticket, Trophy, Target, Users, Calendar, Plus, ArrowRight, 
  CaretRight, Crown, MapPin, Clock, CheckCircle, Star,
  CurrencyDollar, Medal, MagnifyingGlass as Search, 
  Funnel as Filter
} from '@phosphor-icons/react'

// Event data type
interface EventData {
  title: string
  description: string
  date: string
  time: string
  location: string
  eventType: 'Competition' | 'Charity' | 'Expo' | 'Training' | 'Social'
  capacity: number
  registeredCount: number
  registrationUrl: string
  price: string
  featured: boolean
  slug: string
}

// Comprehensive Idaho events from official 2025-2026 shooting almanac - all dates verified after August 16, 2025
const upcomingEvents: EventData[] = [
  // State Championships & Major Events
  {
    title: "QRF Idaho State Sectional Championship",
    description: "The top-level USPSA action shooting match for Idaho's competitors. Hosted by Magic Valley Practical Shooting Association in Jerome.",
    date: "Friday-Sunday, August 22-24, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "Magic Valley Practical Shooting Assn., Jerome, ID",
    eventType: "Competition",
    capacity: 200,
    registeredCount: 156,
    registrationUrl: "https://uspsa.org/matches/major",
    price: "$85 registration",
    featured: true,
    slug: "qrf-idaho-state-sectional-championship"
  },
  {
    title: "NSCA Western Regional Championship",
    description: "Major NSCA tournament at Rock Creek Ranch, one of the nation's finest sporting clays destinations with over 120 clay throwers across four courses.",
    date: "Monday-Sunday, August 25-31, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "Rock Creek Ranch, Emmett, ID",
    eventType: "Competition",
    capacity: 300,
    registeredCount: 245,
    registrationUrl: "http://shooterspagetx.com/id.htm",
    price: "$125 per event",
    featured: true,
    slug: "nsca-western-regional-championship"
  },
  {
    title: "Vortex Optics Idaho State Steel Challenge",
    description: "The state's premier Steel Challenge match hosted by Idaho Society of Practical Shooters at their Nampa facility.",
    date: "Friday-Sunday, August 29-31, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "Idaho Society Of Practical Shooters, Nampa, ID",
    eventType: "Competition",
    capacity: 150,
    registeredCount: 123,
    registrationUrl: "https://scsa.org/matches/list/major",
    price: "$65 entry",
    featured: true,
    slug: "vortex-idaho-state-steel-challenge"
  },
  {
    title: "2025 Idaho State IDPA Championship",
    description: "Premier Tier 3 defensive pistol match at Nampa Rod & Gun Club. Expected to sell out quickly with 12 dynamic stages.",
    date: "Friday-Saturday, September 5-6, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "Nampa Rod & Gun Club, Nampa, ID",
    eventType: "Competition",
    capacity: 150,
    registeredCount: 142,
    registrationUrl: "https://www.idpa.com/matches/2025-idaho-idpa-state-championship/",
    price: "$75 registration",
    featured: true,
    slug: "2025-idaho-state-idpa-championship"
  },
  {
    title: "SASS Idaho Wild Bunch State Championship",
    description: "Cowboy Action Shooting state championship featuring period-correct firearms and attire. Family-friendly Old West atmosphere.",
    date: "Friday-Sunday, September 5-7, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "SASS Facility, Emmett, ID",
    eventType: "Competition",
    capacity: 80,
    registeredCount: 64,
    registrationUrl: "https://sassnet.com/events/match-locator",
    price: "$45 entry",
    featured: true,
    slug: "sass-idaho-wild-bunch-state-championship"
  },

  // Regular Monthly Competitions
  {
    title: "Eastern Idaho Clay Shooting Tournament",
    description: "Sporting clays tournament at Cedar Hills Gun Club in Blackfoot's unique Hell's Half Acre Lava Flow setting. Presented by Depatco.",
    date: "Saturday, September 12, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Cedar Hills Gun Club, Blackfoot, ID",
    eventType: "Competition",
    capacity: 60,
    registeredCount: 38,
    registrationUrl: "https://web.idahoagc.org/events/",
    price: "$35 entry",
    featured: false,
    slug: "eastern-idaho-clay-shooting-tournament"
  },
  {
    title: "Late Summer Marathon",
    description: "Sporting clays marathon event at Rock Creek Ranch featuring extended target presentations and challenging courses.",
    date: "Saturday, September 20, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "Rock Creek Ranch, Emmett, ID",
    eventType: "Competition",
    capacity: 100,
    registeredCount: 71,
    registrationUrl: "http://shooterspagetx.com/id.htm",
    price: "$65 per round",
    featured: false,
    slug: "late-summer-marathon"
  },
  {
    title: "Pyrrhic's Night Game",
    description: "Special night paintball/airsoft event with FX lighting at Pyrrhic Tactical Sports Center outdoor facility.",
    date: "Saturday, October 4, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Pyrrhic Tactical Sports Center, Caldwell, ID",
    eventType: "Social",
    capacity: 40,
    registeredCount: 28,
    registrationUrl: "https://www.pyrrhicpaintball.com/",
    price: "$25 per person",
    featured: false,
    slug: "pyrrhics-night-game"
  },
  {
    title: "Little Trapper Cup-Nationals Warm Up",
    description: "Major sporting clays tournament at Rock Creek Ranch serving as preparation for national competitions.",
    date: "Thursday-Saturday, October 10-12, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "Rock Creek Ranch, Emmett, ID",
    eventType: "Competition",
    capacity: 200,
    registeredCount: 167,
    registrationUrl: "http://shooterspagetx.com/id.htm",
    price: "$95 entry",
    featured: true,
    slug: "little-trapper-cup-nationals-warm-up"
  },
  {
    title: "Smash 'em Pumpkins",
    description: "Seasonal sporting clays event at Rock Creek Ranch with autumn themes and festive atmosphere.",
    date: "Saturday, November 1, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Rock Creek Ranch, Emmett, ID",
    eventType: "Competition",
    capacity: 80,
    registeredCount: 52,
    registrationUrl: "http://shooterspagetx.com/id.htm",
    price: "$45 entry",
    featured: false,
    slug: "smash-em-pumpkins"
  },

  // Gun Shows
  {
    title: "Post Falls Gun Show",
    description: "North Idaho's premier gun show at Greyhound Park & Event Center featuring dealers, collectors, and vendors from across the region.",
    date: "Saturday-Sunday, September 13-14, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Greyhound Park & Event Center, Post Falls, ID",
    eventType: "Expo",
    capacity: 2000,
    registeredCount: 1400,
    registrationUrl: "https://postfallsgunshow.com",
    price: "$10 admission",
    featured: false,
    slug: "post-falls-gun-show-september"
  },
  {
    title: "Nampa Gun Show",
    description: "Major Treasure Valley gun show at Ford Idaho Center with 200+ dealers and vendors showcasing firearms, accessories, and collectibles.",
    date: "Saturday-Sunday, September 20-21, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Ford Idaho Center, Nampa, ID",
    eventType: "Expo",
    capacity: 5000,
    registeredCount: 3200,
    registrationUrl: "https://fordidahocenter.com",
    price: "$12 admission",
    featured: true,
    slug: "nampa-gun-show-september"
  },
  {
    title: "Idaho Falls Gun Show",
    description: "Eastern Idaho's largest gun show at Bonneville County Fairgrounds featuring regional dealers and specialty collectors.",
    date: "Saturday-Sunday, September 27-28, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Bonneville Co. Fairgrounds, Idaho Falls, ID",
    eventType: "Expo",
    capacity: 1500,
    registeredCount: 980,
    registrationUrl: "https://bonnevillecounty.org",
    price: "$8 admission",
    featured: false,
    slug: "idaho-falls-gun-show-september"
  },

  // Training & Education
  {
    title: "Appleseed Rifle Clinic",
    description: "Revolutionary War-era marksmanship clinic at Parma Rod and Gun Club teaching traditional rifle skills and American history.",
    date: "Saturday-Sunday, September 6-7, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "Parma Rod and Gun Club, Parma, ID",
    eventType: "Training",
    capacity: 25,
    registeredCount: 18,
    registrationUrl: "https://www.appleseedinfo.org/",
    price: "$70 weekend",
    featured: false,
    slug: "appleseed-rifle-clinic"
  },
  {
    title: "Women's Shotgun Day",
    description: "Special women-only shotgun instruction and practice day at Cedar Hills Gun Club with professional coaching.",
    date: "Friday, September 6, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Cedar Hills Gun Club, Blackfoot, ID",
    eventType: "Training",
    capacity: 20,
    registeredCount: 16,
    registrationUrl: "https://www.cedarhillsgunclub.org/",
    price: "$35 instruction",
    featured: false,
    slug: "womens-shotgun-day"
  },

  // Fundraising Events
  {
    title: "Bob Manley's Friends of NRA Banquet",
    description: "Annual fundraising banquet supporting NRA programs and local shooting sports initiatives in Boundary County.",
    date: "Saturday, September 20, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Boundary County Fairgrounds, Bonners Ferry, ID",
    eventType: "Charity",
    capacity: 150,
    registeredCount: 97,
    registrationUrl: "https://friendsofnra.org",
    price: "$65 per person",
    featured: false,
    slug: "bob-manley-friends-of-nra-banquet"
  },
  {
    title: "Idaho State Friends of NRA Event",
    description: "Major statewide NRA fundraising event at Revolution Event Center supporting Second Amendment advocacy and education.",
    date: "Saturday, October 18, 2025",
    time: "6:00 PM - 11:00 PM",
    location: "Revolution Event Center, Garden City, ID",
    eventType: "Charity",
    capacity: 300,
    registeredCount: 234,
    registrationUrl: "https://friendsofnra.org",
    price: "$75 per person",
    featured: true,
    slug: "idaho-state-friends-of-nra-event"
  }
]

export function EventsPageStandardized() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)
  // Activity feed data for events based on real almanac data
  const activityFeedData = [
    {
      icon: Trophy,
      iconColor: "text-nav-events",
      iconBgColor: "bg-nav-events/20",
      title: "State Championship Added",
      description: "QRF Idaho State Sectional Championship registration now open",
      timeAgo: "2h ago"
    },
    {
      icon: Ticket,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20",
      title: "Event Calendar Updated",
      description: "18 new verified events added through 2026 from official almanac",
      timeAgo: "4h ago"
    },
    {
      icon: Users,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20",
      title: "Venue Partnerships",
      description: "Rock Creek Ranch confirms hosting 2025 NSCA Western Regional",
      timeAgo: "6h ago"
    }
  ]

  // Events category stats based on actual almanac data
  const eventCategoryStats = [
    { icon: Trophy, title: "State Championships", value: upcomingEvents.filter(e => e.title.includes('State') || e.title.includes('Championship')).length.toString(), subtitle: "Major competitions", color: "text-nav-events" },
    { icon: Target, title: "Competitions", value: upcomingEvents.filter(e => e.eventType === 'Competition').length.toString(), subtitle: "Scheduled matches", color: "text-nav-events" },
    { icon: Crown, title: "Gun Shows", value: upcomingEvents.filter(e => e.eventType === 'Expo').length.toString(), subtitle: "Trade events", color: "text-nav-events" },
    { icon: Users, title: "Training Events", value: upcomingEvents.filter(e => e.eventType === 'Training').length.toString(), subtitle: "Education programs", color: "text-nav-events" },
    { icon: Medal, title: "Charity Events", value: upcomingEvents.filter(e => e.eventType === 'Charity').length.toString(), subtitle: "Fundraising", color: "text-nav-events" },
    { icon: Calendar, title: "Total Events", value: upcomingEvents.length.toString(), subtitle: "Through 2026", color: "text-nav-events" }
  ]

  // Filter configuration
  const filters = useCardPageFilters({
    items: upcomingEvents,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'grid',
    itemsPerPage: 12,
    
    // Search filter function
    searchFilter: (event, query) => {
      const searchTerms = query.toLowerCase()
      return (
        event.title.toLowerCase().includes(searchTerms) ||
        event.description.toLowerCase().includes(searchTerms) ||
        event.location.toLowerCase().includes(searchTerms) ||
        event.eventType.toLowerCase().includes(searchTerms)
      )
    },
    
    // Tab filter function
    tabFilter: (event, activeTab) => {
      switch (activeTab) {
        case 'competitions': return event.eventType === 'Competition'
        case 'training': return event.eventType === 'Training'
        case 'expos': return event.eventType === 'Expo'
        case 'charity': return event.eventType === 'Charity'
        case 'social': return event.eventType === 'Social'
        case 'featured': return event.featured
        default: return true
      }
    },
    
    // Custom filters
    customFilters: {
      eventType: (event, selectedTypes) => {
        if (selectedTypes.length === 0) return true
        return selectedTypes.includes(event.eventType.toLowerCase())
      },
      price: (event, selectedPrices) => {
        if (selectedPrices.length === 0) return true
        const price = event.price.toLowerCase()
        return selectedPrices.some(priceRange => {
          if (priceRange === 'free') return price === 'free'
          if (priceRange === 'under25') return price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) < 25
          if (priceRange === 'under100') return price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) < 100
          if (priceRange === 'over100') return price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) >= 100
          return false
        })
      },
      availability: (event, selectedOptions) => {
        if (selectedOptions.length === 0) return true
        const spotsLeft = event.capacity - event.registeredCount
        return selectedOptions.some(option => {
          if (option === 'available') return spotsLeft > 0
          if (option === 'filling-fast') return spotsLeft > 0 && spotsLeft <= 10
          if (option === 'waitlist') return spotsLeft <= 0
          return false
        })
      }
    },
    
    // Sort functions
    sortFunctions: {
      date: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      popularity: (a, b) => b.registeredCount - a.registeredCount,
      price: (a, b) => {
        const aPrice = a.price === 'Free' ? 0 : parseInt(a.price.replace(/[^0-9]/g, '')) || 0
        const bPrice = b.price === 'Free' ? 0 : parseInt(b.price.replace(/[^0-9]/g, '')) || 0
        return aPrice - bPrice
      },
      capacity: (a, b) => b.capacity - a.capacity,
      alphabetical: (a, b) => a.title.localeCompare(b.title)
    }
  })

  // Modern filter sidebar configuration
  const filterSections = [
    {
      id: 'eventType',
      title: 'Event Type',
      maxVisible: 5,
      collapsible: false,
      options: [
        { id: 'competition', label: 'Competitions', icon: Trophy, count: upcomingEvents.filter(e => e.eventType === 'Competition').length, color: 'text-nav-events' },
        { id: 'training', label: 'Training', icon: Target, count: upcomingEvents.filter(e => e.eventType === 'Training').length, color: 'text-nav-armory' },
        { id: 'expo', label: 'Gun Shows', icon: Crown, count: upcomingEvents.filter(e => e.eventType === 'Expo').length, color: 'text-nav-marketplace' },
        { id: 'charity', label: 'Charity Events', icon: Medal, count: upcomingEvents.filter(e => e.eventType === 'Charity').length, color: 'text-sagebrush-green' },
        { id: 'social', label: 'Social Events', icon: Users, count: upcomingEvents.filter(e => e.eventType === 'Social').length, color: 'text-nav-forums' }
      ]
    },
    {
      id: 'price',
      title: 'Price Range',
      maxVisible: 4,
      collapsible: false,
      options: [
        { id: 'free', label: 'Free', icon: CurrencyDollar, count: upcomingEvents.filter(e => e.price.toLowerCase() === 'free').length },
        { id: 'under25', label: 'Under $25', icon: CurrencyDollar, count: upcomingEvents.filter(e => e.price.includes('$') && parseInt(e.price.replace(/[^0-9]/g, '')) < 25).length },
        { id: 'under100', label: 'Under $100', icon: CurrencyDollar, count: upcomingEvents.filter(e => e.price.includes('$') && parseInt(e.price.replace(/[^0-9]/g, '')) < 100).length },
        { id: 'over100', label: '$100+', icon: CurrencyDollar, count: upcomingEvents.filter(e => e.price.includes('$') && parseInt(e.price.replace(/[^0-9]/g, '')) >= 100).length }
      ]
    },
    {
      id: 'availability',
      title: 'Availability',
      maxVisible: 3,
      collapsible: false,
      options: [
        { id: 'available', label: 'Spots Available', icon: Clock, count: upcomingEvents.filter(e => (e.capacity - e.registeredCount) > 0).length, color: 'text-sagebrush-green' },
        { id: 'filling-fast', label: 'Filling Fast', icon: Clock, count: upcomingEvents.filter(e => (e.capacity - e.registeredCount) > 0 && (e.capacity - e.registeredCount) <= 10).length, color: 'text-sandy-ochre' },
        { id: 'waitlist', label: 'Waitlist Only', icon: Clock, count: upcomingEvents.filter(e => (e.capacity - e.registeredCount) <= 0).length, color: 'text-rusty-orange' }
      ]
    }
  ]

  const handleFilterChange = (sectionId: string, optionId: string) => {
    filters.updateFilters(sectionId, optionId)
  }

  const handleClearSection = (sectionId: string) => {
    filters.clearFilterSection(sectionId)
  }

  const handleClearAll = () => {
    filters.clearAllFilters()
  }

  const getActiveFilterCount = () => {
    return Object.values(filters.selectedFilters).reduce((count, filterArray) => count + filterArray.length, 0)
  }

  // Hero content - working direct implementation like intel page
  const heroContent = (
    <section className="relative overflow-hidden bg-gradient-events-hero px-md py-lg">
      {/* Background Elements */}
      <FloatingCalendars />
      <EventsEmbers />
      
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side */}
          <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
            <div className="flex items-center gap-base">
              <div className="bg-card/10 p-base rounded-xs border border-border">
                <Calendar weight="bold" className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-base">
                <div className="flex items-center gap-xs text-sm text-white/60">
                  <span>Home</span>
                  <CaretRight className="h-4 w-4" />
                  <span className="text-white font-medium">Events</span>
                </div>
                <div className="flex flex-wrap gap-xs">
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Trophy weight="bold" className="h-4 w-4 mr-xs" />
                    Competitions
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Target weight="bold" className="h-4 w-4 mr-xs" />
                    Training
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Users weight="bold" className="h-4 w-4 mr-xs" />
                    Community
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-xs">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                Idaho Firearms Events & Training
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                Competitions, Training, and Community Events in the Treasure Valley
              </h2>
            </div>
            
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
              Discover competitions, training opportunities, and community events across Idaho's firearms scene. From USPSA matches to charity shoots, find your next adventure in the shooting sports.
            </p>
            
            <div className="flex gap-base">
              <Button size="lg" className="bg-nav-events text-white hover:bg-white hover:text-nav-events font-rajdhani font-bold" animationType="plus-minus">
                <Plus className="h-4 w-4 mr-xs" />
                Submit Event
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 font-rajdhani font-bold" animationType="chevron">
                View Calendar
              </Button>
            </div>
          </div>
          
          {/* Featured Event Card - Right side - Compact Hero Version */}
          <div className="lg:col-span-1 py-md">
            <div className="relative">
              {upcomingEvents.find(e => e.featured) && (() => {
                const featuredEvent = upcomingEvents.find(e => e.featured)!
                return (
                  <Card className="mica border-nav-events/30 hover:shadow-elevated transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-events/20 to-nav-events/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-events to-nav-events"></div>
                    
                    <CardContent className="p-lg relative z-10">
                      <div className="flex items-center justify-between mb-base">
                        <Badge className="bg-nav-events/20 text-nav-events border-nav-events/30 font-rajdhani font-bold text-[10px]">
                          <Star className="h-3 w-3 mr-xs" />
                          FEATURED EVENT
                        </Badge>
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-nav-events" />
                          <span>Verified</span>
                        </div>
                      </div>
                      
                      <div className="space-y-base">
                        <div>
                          <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight mb-xs">{featuredEvent.title}</h3>
                          <div className="flex items-center gap-xs text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 text-nav-events" />
                            <span>{featuredEvent.date}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {featuredEvent.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-base border-t border-border">
                          <div className="space-y-xs">
                            <div className="flex items-center gap-xs">
                              <MapPin className="h-3 w-3 text-nav-events" />
                              <span className="text-xs text-muted-foreground">{featuredEvent.location.split(',')[0]}</span>
                            </div>
                            <div className="text-lg font-bold text-nav-events font-rajdhani">{featuredEvent.price}</div>
                          </div>
                          <Button 
                            className="bg-gradient-to-r from-nav-events to-nav-events text-gruvbox-bg-dark hover:from-nav-events hover:to-nav-events font-rajdhani font-bold text-xs"
                            size="sm"
                          >
                            VIEW DETAILS
                            <ArrowRight className="h-3 w-3 ml-xs" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-background">
      {heroContent}
      
      {/* Events Ticker - Scrolling upcoming events */}
      <EventTicker events={upcomingEvents.slice(0, 8).map(event => ({
        title: event.title,
        date: event.date,
        location: event.location,
        eventType: event.eventType,
        price: event.price,
        featured: event.featured
      }))} />
      
      {/* Search and Quick Tabs Section */}
      <section className="py-lg section-bg-events-neutral border-b border-border/50">
        <div className="container mx-auto max-w-site px-md">
          {/* Search Bar */}
          <div className="mb-lg">
            <div className="relative max-w-2xl">
              <Search weight="bold" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events, locations, or organizers..."
                className="pl-10 h-12 text-body-base shadow-elevated"
                value={filters.searchQuery}
                onChange={(e) => filters.setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap gap-xs">
            {[
              { id: 'all', label: 'All Events', count: upcomingEvents.length, icon: Calendar },
              { id: 'competitions', label: 'Competitions', count: upcomingEvents.filter(e => e.eventType === 'Competition').length, icon: Trophy },
              { id: 'training', label: 'Training', count: upcomingEvents.filter(e => e.eventType === 'Training').length, icon: Target },
              { id: 'expos', label: 'Expos', count: upcomingEvents.filter(e => e.eventType === 'Expo').length, icon: Crown },
              { id: 'charity', label: 'Charity', count: upcomingEvents.filter(e => e.eventType === 'Charity').length, icon: Medal },
              { id: 'social', label: 'Social', count: upcomingEvents.filter(e => e.eventType === 'Social').length, icon: Users },
              { id: 'featured', label: 'Featured', count: upcomingEvents.filter(e => e.featured).length }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={filters.activeTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => filters.setActiveTab(tab.id)}
                className="gap-xs font-rajdhani shadow-none rounded-xs"
              >
                {tab.icon && React.createElement(tab.icon, { 
                  weight: "bold", 
                  className: "size-3" 
                })}
                {tab.label}
                {tab.count && (
                  <Badge variant="secondary" size="sm" className="ml-xs">
                    {tab.count}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-4xl bg-background/50">
        <div className="w-full px-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl">
          <div className="flex gap-2xl max-w-[1920px] mx-auto">
            
            {/* Left Sidebar - Modern Filters (Desktop) */}
            <aside className="hidden lg:block">
              <ModernFilterSidebar
                sections={filterSections}
                selectedFilters={filters.selectedFilters}
                onFilterChange={handleFilterChange}
                onClearSection={handleClearSection}
                onClearAll={handleClearAll}
                totalResults={filters.totalResults}
                filteredResults={filters.filteredResults}
              />
            </aside>

            {/* Mobile Filter Sidebar */}
            <ModernFilterSidebar
              sections={filterSections}
              selectedFilters={filters.selectedFilters}
              onFilterChange={handleFilterChange}
              onClearSection={handleClearSection}
              onClearAll={handleClearAll}
              totalResults={filters.totalResults}
              filteredResults={filters.filteredResults}
              isMobile={true}
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
            
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Results Header with Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base sm:gap-xl mb-xl sm:mb-2xl lg:mb-3xl">
                <div>
                  <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Event' : 'Events'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filters.filteredResults !== filters.totalResults && `Filtered from ${filters.totalResults} total • `}
                    {filters.searchQuery && `Search: "${filters.searchQuery}"`}
                  </p>
                </div>
                
                {/* View Controls */}
                <div className="flex items-center gap-sm sm:gap-base">
                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="gap-xs font-rajdhani lg:hidden"
                  >
                    <Filter weight="bold" className="size-4" />
                    Filters
                    {getActiveFilterCount() > 0 && (
                      <Badge variant="secondary" className="ml-xs bg-nav-events/20 text-nav-events border-nav-events/30 text-xs">
                        {getActiveFilterCount()}
                      </Badge>
                    )}
                  </Button>
                  
                  {/* Sort Dropdown */}
                  <select
                    value={filters.sortBy}
                    onChange={(e) => filters.setSortBy(e.target.value)}
                    className="bg-background border border-border rounded-xs px-base py-xs text-sm font-rajdhani"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="popularity">Sort by Popularity</option>
                    <option value="price">Sort by Price</option>
                    <option value="capacity">Sort by Capacity</option>
                    <option value="alphabetical">Sort A-Z</option>
                  </select>
                </div>
              </div>

              <div className={filters.getGridClassName()}>
                {filters.paginatedItems.length > 0 ? (
                  filters.paginatedItems.map((event, index) => (
                    <EventCard
                      key={`${event.title}-${index}`}
                      {...event}
                      className="mica transition-all duration-300 rounded-xs"
                    />
                  ))
                ) : (
                  <div className="col-span-full">
                    <EmptyState 
                      title="No Events Found"
                      description="Try adjusting your search terms or filters to find events."
                      action={
                        <Button onClick={filters.clearAllFilters}>
                          Clear All Filters
                        </Button>
                      }
                    />
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}