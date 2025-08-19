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
  TicketIcon as Ticket, 
  TrophyIcon as Trophy, 
  CursorArrowRaysIcon as Target,  // Using cursor-arrow-rays as target substitute
  UsersIcon as Users, 
  CalendarIcon as Calendar, 
  PlusIcon as Plus, 
  ArrowRightIcon as ArrowRight, 
  ChevronRightIcon as CaretRight, 
  SparklesIcon as Crown, 
  MapPinIcon as MapPin, 
  ClockIcon as Clock, 
  CheckCircleIcon as CheckCircle, 
  StarIcon as Star,
  CurrencyDollarIcon as CurrencyDollar, 
  MagnifyingGlassIcon as Search, 
  FunnelIcon as Filter
} from '@heroicons/react/24/outline'

// Event data type
// Import comprehensive events data (130+ verified Idaho events)
import { getUpcomingEvents, getFeaturedEvents, type EventData } from '@/lib/comprehensive-events-data'

// Get upcoming events from comprehensive dataset
const upcomingEvents: EventData[] = getUpcomingEvents()

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
    { icon: Star, title: "Charity Events", value: upcomingEvents.filter(e => e.eventType === 'Charity').length.toString(), subtitle: "Fundraising", color: "text-nav-events" },
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
        { id: 'charity', label: 'Charity Events', icon: Star, count: upcomingEvents.filter(e => e.eventType === 'Charity').length, color: 'text-sagebrush-green' },
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
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-base">
                <div className="flex items-center gap-xs text-sm text-white/60">
                  <span>Home</span>
                  <CaretRight className="h-4 w-4" />
                  <span className="text-white font-medium">Events</span>
                </div>
                <div className="flex flex-wrap gap-xs">
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Trophy className="h-4 w-4 mr-xs" />
                    Competitions
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Target className="h-4 w-4 mr-xs" />
                    Training
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Users className="h-4 w-4 mr-xs" />
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
                  <Card className="mica-card border-nav-events/30 hover:shadow-elevated transition-all duration-300 overflow-hidden">
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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
              { id: 'charity', label: 'Charity', count: upcomingEvents.filter(e => e.eventType === 'Charity').length, icon: Star },
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
                    <Filter className="size-4" />
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
                      className="mica-card transition-all duration-300 rounded-xs"
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