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

// Sample events data - this would come from props or API
const upcomingEvents: EventData[] = [
  {
    title: "USPSA Monthly Match",
    description: "Monthly USPSA practical shooting match at Nampa Rod & Gun Club. Open to all skill levels with multiple divisions including Production, Limited, and Open.",
    date: "Saturday, August 9, 2025",
    time: "8:00 AM - 3:00 PM",
    location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
    eventType: "Competition",
    capacity: 80,
    registeredCount: 54,
    registrationUrl: "https://practiscore.com/idaho-uspsa",
    price: "$15",
    featured: true,
    slug: "uspsa-monthly-match-august"
  },
  {
    title: "Idaho State Camo Shoot",
    description: "Premier sporting clays event benefiting Ducks Unlimited. Team-based competition with lunch, prizes, and great camaraderie in the firearms community.",
    date: "Saturday, July 26, 2025",
    time: "8:30 AM - 6:00 PM",
    location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
    eventType: "Charity",
    capacity: 96,
    registeredCount: 78,
    registrationUrl: "https://www.ducksunlimited.org/events",
    price: "$600 (Team of 4)",
    featured: true,
    slug: "idaho-state-camo-shoot-2025"
  },
  {
    title: "Great Idaho Gun Show",
    description: "Treasure Valley's largest firearms expo featuring 200+ vendors, dealers, and collectors from across the region. Family-friendly event with something for everyone.",
    date: "Saturday-Sunday, September 20-21, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Ford Idaho Center, 16200 N Idaho Ctr Blvd, Nampa, ID",
    eventType: "Expo",
    capacity: 5000,
    registeredCount: 3200,
    registrationUrl: "https://lewisclarktrader.com/gun-shows",
    price: "$10",
    featured: true,
    slug: "great-idaho-gun-show-september"
  },
  {
    title: "Steel Challenge Weekly",
    description: "Weekly Steel Challenge matches featuring speed and accuracy on reactive steel targets. Fast-paced, fun format perfect for new and experienced shooters.",
    date: "Thursday, August 7, 2025",
    time: "4:00 PM - 8:00 PM",
    location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
    eventType: "Competition",
    capacity: 50,
    registeredCount: 32,
    registrationUrl: "https://nampagunclub.org/steel-challenge",
    price: "$12",
    featured: false,
    slug: "steel-challenge-weekly"
  },
  {
    title: "Monthly Club Social",
    description: "Monthly social gathering for TBGC members and community. Guest speakers, equipment swap meet, and networking opportunity.",
    date: "Thursday, August 14, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Boise Gun Club, 123 Range Road, Boise, ID",
    eventType: "Social",
    capacity: 75,
    registeredCount: 43,
    registrationUrl: "https://tbgc.com/social",
    price: "Free",
    featured: false,
    slug: "monthly-club-social"
  }
]

export function EventsPageStandardized() {
  // Activity feed data for events
  const activityFeedData = [
    {
      icon: Trophy,
      iconColor: "text-nav-events",
      iconBgColor: "bg-nav-events/20",
      title: "USPSA Match Results Posted",
      description: "February monthly match winners and scores are now available",
      timeAgo: "3h ago"
    },
    {
      icon: Ticket,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20",
      title: "New Event Added",
      description: "Idaho State 3-Gun Championship registration now open",
      timeAgo: "5h ago"
    },
    {
      icon: Users,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20",
      title: "Community Meetup",
      description: "Monthly social gathering moved to larger venue due to demand",
      timeAgo: "1d ago"
    }
  ]

  // Events category stats for directory grid
  const eventCategoryStats = [
    { icon: Trophy, title: "Competitions", value: "24", subtitle: "This month", color: "text-nav-events" },
    { icon: Target, title: "Training Classes", value: "18", subtitle: "Scheduled", color: "text-nav-events" },
    { icon: Crown, title: "Gun Shows", value: "6", subtitle: "Upcoming", color: "text-nav-events" },
    { icon: Users, title: "Social Events", value: "12", subtitle: "This quarter", color: "text-nav-events" },
    { icon: Medal, title: "Charity Shoots", value: "8", subtitle: "Planned", color: "text-nav-events" },
    { icon: Calendar, title: "Demo Days", value: "5", subtitle: "Available", color: "text-nav-events" }
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
          
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
              <Button size="lg" className="bg-white text-nav-events hover:bg-crisp-off-white font-rajdhani font-bold" animationType="plus-minus">
                <Plus className="h-4 w-4 mr-xs" />
                Submit Event
              </Button>
              <Button variant="outline" size="lg" className="border-border text-white hover:bg-white hover:text-nav-events" animationType="arrow">
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