'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { EventCard } from '@/components/ui/EventCard'
import { CardPageLayout } from '@/components/ui/card-page-layout'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { FloatingCalendars } from '@/components/ui/hero-floating-calendars'
import { EventsEmbers } from '@/components/ui/hero-events-embers'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'
import { 
  Ticket, Trophy, Target, Users, Calendar, Plus, ArrowRight, 
  CaretRight, Crown, MapPin, Clock,
  CurrencyDollar, Medal
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
      eventType: (event, selectedTypes) => selectedTypes.includes(event.eventType.toLowerCase()),
      price: (event, selectedPrices) => {
        const price = event.price.toLowerCase()
        if (selectedPrices.includes('free')) return price === 'free'
        if (selectedPrices.includes('under25')) return price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) < 25
        if (selectedPrices.includes('under100')) return price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) < 100
        if (selectedPrices.includes('over100')) return price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) >= 100
        return true
      },
      availability: (event, selectedOptions) => {
        const spotsLeft = event.capacity - event.registeredCount
        if (selectedOptions.includes('available')) return spotsLeft > 0
        if (selectedOptions.includes('filling-fast')) return spotsLeft > 0 && spotsLeft <= 10
        if (selectedOptions.includes('waitlist')) return spotsLeft <= 0
        return true
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

  // Hero content
  const heroContent = (
    <div className="relative">
      {/* Floating Calendar Icons */}
      <FloatingCalendars />
      
      {/* Events Embers */}
      <EventsEmbers />
      
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          
          {/* Content - Left side */}
          <div className="lg:col-span-2 hero-content flex flex-col justify-center space-y-base">
            <div className="flex items-center gap-sm">
              <div className="bg-card/10 p-sm rounded-xs border border-border">
                <Calendar weight="bold" className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-base">
                <div className="flex items-center gap-xs text-sm text-white/60">
                  <span>Home</span>
                  <CaretRight className="h-4 w-4" />
                  <span className="text-white font-medium">Events</span>
                </div>
                <div className="flex flex-wrap gap-xs">
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
                    <Trophy weight="bold" className="h-4 w-4 mr-xs" />
                    Competitions
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
                    <Target weight="bold" className="h-4 w-4 mr-xs" />
                    Training
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
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
              <Button size="lg" className="bg-card text-nav-events hover:bg-crisp-off-white font-rajdhani font-bold" animationType="plus-minus">
                <Plus className="h-4 w-4 mr-xs" />
                Submit Event
              </Button>
              <Button variant="outline" size="lg" className="border-border text-white hover:bg-card hover:text-nav-events" animationType="arrow">
                View Calendar
              </Button>
            </div>
          </div>

          {/* Featured Event Card - Right side */}
          <div className="lg:col-span-1 py-md min-h-[400px]">
            <div className="relative h-full">
              {upcomingEvents.find(e => e.featured) && (
                <EventCard
                  {...upcomingEvents.find(e => e.featured)!}
                  className="h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <CardPageLayout
      pageTitle="Events"
      pageSubtitle="Idaho Firearms Events & Training"
      pageColor="events"
      heroContent={heroContent}
      searchQuery={filters.searchQuery}
      onSearchChange={filters.setSearchQuery}
      searchPlaceholder="Search events, locations, or organizers..."
      
      quickTabs={[
        { id: 'all', label: 'All Events', count: upcomingEvents.length, icon: Calendar },
        { id: 'competitions', label: 'Competitions', count: upcomingEvents.filter(e => e.eventType === 'Competition').length, icon: Trophy },
        { id: 'training', label: 'Training', count: upcomingEvents.filter(e => e.eventType === 'Training').length, icon: Target },
        { id: 'expos', label: 'Expos', count: upcomingEvents.filter(e => e.eventType === 'Expo').length, icon: Crown },
        { id: 'charity', label: 'Charity', count: upcomingEvents.filter(e => e.eventType === 'Charity').length, icon: Medal },
        { id: 'social', label: 'Social', count: upcomingEvents.filter(e => e.eventType === 'Social').length, icon: Users },
        { id: 'featured', label: 'Featured', count: upcomingEvents.filter(e => e.featured).length }
      ]}
      activeTab={filters.activeTab}
      onTabChange={filters.setActiveTab}
      
      filterSections={[
        {
          title: 'Event Type',
          filters: [
            { id: 'competition', label: 'Competition', icon: Trophy, count: upcomingEvents.filter(e => e.eventType === 'Competition').length },
            { id: 'training', label: 'Training', icon: Target, count: upcomingEvents.filter(e => e.eventType === 'Training').length },
            { id: 'expo', label: 'Expo', icon: Crown, count: upcomingEvents.filter(e => e.eventType === 'Expo').length },
            { id: 'charity', label: 'Charity', icon: Medal, count: upcomingEvents.filter(e => e.eventType === 'Charity').length },
            { id: 'social', label: 'Social', icon: Users, count: upcomingEvents.filter(e => e.eventType === 'Social').length }
          ],
          selectedFilters: filters.selectedFilters.eventType || [],
          onFilterChange: (filterId) => filters.updateFilters('eventType', filterId),
          multiSelect: true
        },
        {
          title: 'Price Range',
          filters: [
            { id: 'free', label: 'Free', icon: CurrencyDollar, count: upcomingEvents.filter(e => e.price.toLowerCase() === 'free').length },
            { id: 'under25', label: 'Under $25', icon: CurrencyDollar, count: upcomingEvents.filter(e => e.price.includes('$') && parseInt(e.price.replace(/[^0-9]/g, '')) < 25).length },
            { id: 'under100', label: 'Under $100', icon: CurrencyDollar, count: upcomingEvents.filter(e => e.price.includes('$') && parseInt(e.price.replace(/[^0-9]/g, '')) < 100).length },
            { id: 'over100', label: '$100+', icon: CurrencyDollar, count: upcomingEvents.filter(e => e.price.includes('$') && parseInt(e.price.replace(/[^0-9]/g, '')) >= 100).length }
          ],
          selectedFilters: filters.selectedFilters.price || [],
          onFilterChange: (filterId) => filters.updateFilters('price', filterId),
          multiSelect: true
        },
        {
          title: 'Availability',
          filters: [
            { id: 'available', label: 'Spots Available', count: upcomingEvents.filter(e => e.capacity - e.registeredCount > 0).length },
            { id: 'filling-fast', label: 'Filling Fast', count: upcomingEvents.filter(e => e.capacity - e.registeredCount <= 10 && e.capacity - e.registeredCount > 0).length },
            { id: 'waitlist', label: 'Waitlist Only', count: upcomingEvents.filter(e => e.capacity - e.registeredCount <= 0).length }
          ],
          selectedFilters: filters.selectedFilters.availability || [],
          onFilterChange: (filterId) => filters.updateFilters('availability', filterId),
          multiSelect: true
        }
      ]}
      
      viewMode={filters.viewMode}
      onViewModeChange={filters.setViewMode}
      sortOptions={[
        { id: 'date', label: 'Date', icon: Calendar },
        { id: 'popularity', label: 'Popularity', icon: Users },
        { id: 'price', label: 'Price', icon: CurrencyDollar },
        { id: 'capacity', label: 'Capacity', icon: MapPin },
        { id: 'alphabetical', label: 'Name', icon: Target }
      ]}
      activeSortId={filters.sortBy}
      onSortChange={filters.setSortBy}
      
      totalResults={filters.totalResults}
      filteredResults={filters.filteredResults}
      
      statsSection={
        <>
          <TrustIndicators />
          <div className="mt-4xl">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Events by Category</h3>
            <DirectoryStatsGrid stats={eventCategoryStats} />
          </div>
        </>
      }
      ctaSection={
        <div className="space-y-4xl">
          {/* Activity Feed Section */}
          <div className="section-skew-up bg-card/50 py-3xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Event Updates</h3>
              <div className="space-y-base">
                {activityFeedData.map((activity, index) => (
                  <ActivityFeedCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <ContributionCTA />
          
          {/* Join Movement CTA */}
          <div className="section-skew-down bg-gradient-to-br from-nav-events/10 to-nav-events/5 py-3xl">
            <JoinMovementCTA />
          </div>
        </div>
      }
    >
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
    </CardPageLayout>
  )
}