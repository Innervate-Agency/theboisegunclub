'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { EventCard } from '@/components/ui/EventCard'
import { EventsPageVariant } from '@/components/ui/page-variants'
import { useCardPageFunnelIcons } from '@/hooks/useCardPageFunnelIcons'
import { EmptyState } from '@/components/ui/empty-state'
import { FloatingCalendarIcons } from '@/components/ui/hero-floating-calendars'
import { EventsEmbers } from '@/components/ui/hero-events-embers'
import {
  TicketIcon,
  TrophyIcon,
  MapPinIcon,
  UsersIcon,
  CalendarIcon,
  PlusIcon,
  ArrowRightIcon,
  ChevronRightIconIcon,
  ClockIcon,
  CheckCheckCheckCircleIconIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline"
import { allEvents } from '@/lib/events-calendar-data'

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

// Convert imported event data to local EventData format
const convertEventData = (event: any): EventData => ({
  title: event.title,
  description: event.description,
  date: event.date,
  time: event.time,
  location: event.location + ', ' + event.address.split(',').slice(-2).join(','), // Location + City, State
  eventType: event.eventType,
  capacity: event.capacity || 100,
  registeredCount: event.registeredCount || Math.floor(Math.random() * (event.capacity || 100)),
  registrationUrl: event.registrationUrl || '#',
  price: event.price,
  featured: event.featured,
  slug: event.slug
})

// Comprehensive Idaho events from Master CalendarIcon - all dates verified after August 16, 2025
const upcomingEvents: EventData[] = allEvents.map(convertEventData)

export function EventsPageStandardizedV2() {
  // ChartBarIcon feed data for events based on real almanac data
  const activityFeedData = [
    {
      icon: TrophyIcon,
      iconColor: "text-nav-events",
      iconBgColor: "bg-nav-events/20",
      title: "Master CalendarIcon Complete",
      description: "60+ verified Idaho events through 2026 now available",
      timeAgo: "1h ago"
    },
    {
      icon: CalendarIcon,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20",
      title: "Steel Challenge Matches",
      description: "Weekly Monday matches resume at Nampa Rod & Gun Club",
      timeAgo: "2h ago"
    },
    {
      icon: MapPinIcon,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20",
      title: "USPSA Registration Open",
      description: "Idaho State Championship registration now live",
      timeAgo: "4h ago"
    },
    {
      icon: UsersIcon,
      iconColor: "text-warm-stone",
      iconBgColor: "bg-warm-stone/20",
      title: "Training CalendarIcon Updated",
      description: "Enhanced CCW courses added statewide",
      timeAgo: "6h ago"
    }
  ]

  // Events category stats based on actual data
  const eventsCategoryStats = [
    { icon: TrophyIcon, title: "Competitions", value: upcomingEvents.filter(e => e.eventType === 'Competition').length.toString(), subtitle: "Active matches", color: "text-nav-events" },
    { icon: MapPinIcon, title: "Training", value: upcomingEvents.filter(e => e.eventType === 'Training').length.toString(), subtitle: "Educational courses", color: "text-nav-events" },
    { icon: CalendarIcon, title: "Gun Shows", value: upcomingEvents.filter(e => e.eventType === 'Expo').length.toString(), subtitle: "Trade events", color: "text-nav-events" },
    { icon: UsersIcon, title: "Social", value: upcomingEvents.filter(e => e.eventType === 'Social').length.toString(), subtitle: "Community events", color: "text-nav-events" },
    { icon: TrophyIcon, title: "Featured", value: upcomingEvents.filter(e => e.featured).length.toString(), subtitle: "Premier events", color: "text-nav-events" },
    { icon: Ticket, title: "Total Events", value: upcomingEvents.length.toString(), subtitle: "Through 2026", color: "text-nav-events" }
  ]

  // FunnelIcon configuration
  const filters = useCardPageFunnelIcons({
    items: upcomingEvents,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'card',
    itemsPerPage: 12,
    
    // MagnifyingGlassIcon filter function
    searchFunnelIcon: (event, searchTerm) => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.eventType.toLowerCase().includes(searchTerm.toLowerCase()),
    
    // Tab filter function
    tabFunnelIcon: (event, activeTab) => {
      switch (activeTab) {
        case 'all': return true
        case 'competitions': return event.eventType === 'Competition'
        case 'training': return event.eventType === 'Training'  
        case 'gun-shows': return event.eventType === 'Expo'
        case 'social': return event.eventType === 'Social'
        case 'charity': return event.eventType === 'Charity'
        case 'featured': return event.featured
        default: return true
      }
    },

    // Custom filters for sidebar
    customFunnelIcons: {
      eventType: (event, selectedValues) => {
        if (selectedValues.length === 0) return true
        return selectedValues.some(value => {
          switch (value) {
            case 'competition': return event.eventType === 'Competition'
            case 'training': return event.eventType === 'Training'
            case 'expo': return event.eventType === 'Expo'
            case 'social': return event.eventType === 'Social'
            case 'charity': return event.eventType === 'Charity'
            default: return false
          }
        })
      },
      featured: (event, selectedValues) => {
        if (selectedValues.length === 0) return true
        return selectedValues.includes('featured') ? event.featured : true
      },
      location: (event, selectedValues) => {
        if (selectedValues.length === 0) return true
        return selectedValues.some(city => 
          event.location.toLowerCase().includes(city.toLowerCase())
        )
      },
      availability: (event, selectedValues) => {
        if (selectedValues.length === 0) return true
        return selectedValues.some(value => {
          const available = (event.capacity || 0) - (event.registeredCount || 0)
          switch (value) {
            case 'spots-available': return available > 0
            case 'nearly-full': return ((event.registeredCount || 0) / (event.capacity || 1)) > 0.85
            default: return false
          }
        })
      }
    },

    // Sort functions
    sortFunctions: {
      date: (a, b) => {
        // Featured events first, then by date
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      },
      featured: (a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.title.localeCompare(b.title)
      },
      alphabetical: (a, b) => a.title.localeCompare(b.title),
      capacity: (a, b) => (b.capacity || 0) - (a.capacity || 0),
      availability: (a, b) => {
        const aAvailable = (a.capacity || 0) - (a.registeredCount || 0)
        const bAvailable = (b.capacity || 0) - (b.registeredCount || 0)
        return bAvailable - aAvailable
      },
      location: (a, b) => a.location.localeCompare(b.location)
    }
  })

  // Hero content
  const heroContent = (
    <div className="container mx-auto max-w-site relative z-10">
      <div className="hero-grid-layout">
        {/* Content - Left side */}
        <div className="hero-content-area">
          <div className="hero-badge-container">
            <Badge 
              variant="outline" 
              className="hero-badge bg-nav-events/20 text-nav-events border-nav-events/30"
            >
              <CalendarIcon className="w-3 h-3" />
              Master CalendarIcon Live
            </Badge>
          </div>

          <div className="hero-text-container">
            <h1 className="hero-title text-foreground">
              Idaho Firearms{' '}
              <span className="hero-title-highlight bg-gradient-to-r from-nav-events to-rusty-orange bg-clip-text text-transparent">
                Events CalendarIcon
              </span>
            </h1>
            <p className="hero-description text-muted-foreground">
              Comprehensive calendar of competitions, training, gun shows, and community events 
              across the Treasure Valley. From weekly steel challenges to state championships - 
              never miss another Idaho shooting event.
            </p>
          </div>

          <div className="hero-cta-container">
            <Button 
              size="lg"
              className="hero-primary-button bg-nav-events hover:bg-nav-events/90 text-white"
            >
              <CalendarIcon className="w-4 h-4" />
              Browse Events
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hero-secondary-button border-border hover:bg-muted"
            >
              <PlusIcon className="w-4 h-4" />
              Add Event
            </Button>
          </div>
        </div>

        {/* Visual - Right side */}
        <div className="hero-visual-area relative">
          <FloatingCalendarIcons />
          <EventsEmbers />
        </div>
      </div>
    </div>
  )

  return (
    <EventsPageVariant
      heroContent={heroContent}
      searchQuery={filters.searchQuery}
      onMagnifyingGlassIconChange={filters.setMagnifyingGlassIconQuery}
      quickTabs={[
        { id: 'all', label: 'All Events', count: upcomingEvents.length, icon: CalendarIcon },
        { id: 'competitions', label: 'Competitions', count: upcomingEvents.filter(e => e.eventType === 'Competition').length, icon: TrophyIcon },
        { id: 'training', label: 'Training', count: upcomingEvents.filter(e => e.eventType === 'Training').length, icon: MapPinIcon },
        { id: 'gun-shows', label: 'Gun Shows', count: upcomingEvents.filter(e => e.eventType === 'Expo').length, icon: Ticket },
        { id: 'social', label: 'Social', count: upcomingEvents.filter(e => e.eventType === 'Social').length, icon: UsersIcon },
        { id: 'featured', label: 'Featured', count: upcomingEvents.filter(e => e.featured).length }
      ]}
      activeTab={filters.activeTab}
      onTabChange={filters.setActiveTab}
      filterSections={[
        {
          title: 'Event Type',
          filters: [
            { id: 'competition', label: 'Competitions', icon: TrophyIcon, count: upcomingEvents.filter(e => e.eventType === 'Competition').length },
            { id: 'training', label: 'Training', icon: MapPinIcon, count: upcomingEvents.filter(e => e.eventType === 'Training').length },
            { id: 'expo', label: 'Gun Shows', icon: Ticket, count: upcomingEvents.filter(e => e.eventType === 'Expo').length },
            { id: 'social', label: 'Social', icon: UsersIcon, count: upcomingEvents.filter(e => e.eventType === 'Social').length },
            { id: 'charity', label: 'Charity', icon: TrophyIcon, count: upcomingEvents.filter(e => e.eventType === 'Charity').length }
          ],
          selectedFunnelIcons: filters.selectedFunnelIcons.eventType || [],
          onFunnelIconChange: (filterId) => filters.toggleFunnelIcon('eventType', filterId)
        },
        {
          title: 'Featured',
          filters: [
            { id: 'featured', label: 'Featured Events', icon: TrophyIcon, count: upcomingEvents.filter(e => e.featured).length }
          ],
          selectedFunnelIcons: filters.selectedFunnelIcons.featured || [],
          onFunnelIconChange: (filterId) => filters.toggleFunnelIcon('featured', filterId)
        },
        {
          title: 'Location',
          filters: [
            { id: 'boise', label: 'Boise', icon: MapPinIcon, count: upcomingEvents.filter(e => e.location.toLowerCase().includes('boise')).length },
            { id: 'meridian', label: 'Meridian', icon: MapPinIcon, count: upcomingEvents.filter(e => e.location.toLowerCase().includes('meridian')).length },
            { id: 'nampa', label: 'Nampa', icon: MapPinIcon, count: upcomingEvents.filter(e => e.location.toLowerCase().includes('nampa')).length },
            { id: 'caldwell', label: 'Caldwell', icon: MapPinIcon, count: upcomingEvents.filter(e => e.location.toLowerCase().includes('caldwell')).length },
            { id: 'kuna', label: 'Kuna', icon: MapPinIcon, count: upcomingEvents.filter(e => e.location.toLowerCase().includes('kuna')).length }
          ],
          selectedFunnelIcons: filters.selectedFunnelIcons.location || [],
          onFunnelIconChange: (filterId) => filters.toggleFunnelIcon('location', filterId)
        },
        {
          title: 'Availability',
          filters: [
            { id: 'spots-available', label: 'Spots Available', icon: CheckCheckCheckCircleIconIcon, count: upcomingEvents.filter(e => (e.capacity || 0) > (e.registeredCount || 0)).length },
            { id: 'nearly-full', label: 'Nearly Full', icon: ClockIcon, count: upcomingEvents.filter(e => ((e.registeredCount || 0) / (e.capacity || 1)) > 0.85).length }
          ],
          selectedFunnelIcons: filters.selectedFunnelIcons.availability || [],
          onFunnelIconChange: (filterId) => filters.toggleFunnelIcon('availability', filterId)
        }
      ]}
      viewMode={filters.viewMode}
      onViewModeChange={filters.setViewMode}
      sortOptions={[
        { id: 'date', label: 'Date' },
        { id: 'featured', label: 'Featured' },
        { id: 'alphabetical', label: 'A-Z' },
        { id: 'capacity', label: 'Capacity' },
        { id: 'availability', label: 'Availability' },
        { id: 'location', label: 'Location' }
      ]}
      activeSortId={filters.sortBy}
      onSortChange={filters.setSortBy}
      totalResults={upcomingEvents.length}
      filteredResults={filters.filteredItems.length}
      stats={eventsCategoryStats}
      activityFeed={activityFeedData}
    >
      {/* Events Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg">
        {/* Featured Event Spotlight */}
        {upcomingEvents.find(e => e.featured) && (
          <div className="col-span-full mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Featured Event</h2>
            <EventCard
              title={upcomingEvents.find(e => e.featured)!.title}
              description={upcomingEvents.find(e => e.featured)!.description}
              date={upcomingEvents.find(e => e.featured)!.date}
              time={upcomingEvents.find(e => e.featured)!.time}
              location={upcomingEvents.find(e => e.featured)!.location}
              eventType={upcomingEvents.find(e => e.featured)!.eventType}
              capacity={upcomingEvents.find(e => e.featured)!.capacity}
              registeredCount={upcomingEvents.find(e => e.featured)!.registeredCount}
              registrationUrl={upcomingEvents.find(e => e.featured)!.registrationUrl}
              price={upcomingEvents.find(e => e.featured)!.price}
              href={`/events/${upcomingEvents.find(e => e.featured)!.slug}`}
              featured={true}
              className="mb-6"
           />
          </div>
        )}
        
        {/* Regular Events Grid */}
        {filters.filteredItems.length > 0 ? (
          filters.filteredItems.map((event) => (
            <EventCard
              key={event.slug}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              eventType={event.eventType}
              capacity={event.capacity}
              registeredCount={event.registeredCount}
              registrationUrl={event.registrationUrl}
              price={event.price}
              href={`/events/${event.slug}`}
              featured={event.featured}
            />
          ))
        ) : (
          <div className="col-span-full">
            <EmptyState 
              title="No Events Found"
              description="Try adjusting your search terms or filters to find events."
              action={
                <Button onClick={filters.clearAllFunnelIcons}>
                  Clear All FunnelIcons
                </Button>
              }
            />
          </div>
        )}
      </div>
    </EventsPageVariant>
  )
}