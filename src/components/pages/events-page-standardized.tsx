'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { EventCard } from '@/components/ui/EventCard'
import { EventTicker } from '@/components/ui/event-ticker'
import { EventsContentSection } from '@/components/ui/events-content-section'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { EnhancedPagination } from '@/components/ui/enhanced-pagination'
import { CardSkeleton } from '@/components/ui/card-skeleton'
import { FloatingCalendars } from '@/components/ui/hero-floating-calendars'
import { EventsEmbers } from '@/components/ui/hero-events-embers'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'
import { SidebarCalendar } from '@/components/ui/sidebar-calendar'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { ArrowRightIcon, CalendarDaysIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, CursorArrowRaysIcon, FunnelIcon, ListBulletIcon, MagnifyingGlassIcon, MapPinIcon, PlusIcon, RectangleGroupIcon, SparklesIcon, Squares2X2Icon, StarIcon, TicketIcon, TrophyIcon, UsersIcon, ViewColumnsIcon, WindowIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Simple color mapping for filter categories
const getFilterColor = (category: string, type: string): string => {
  switch (category) {
    case 'discipline':
      // Use shooting sport specific colors
      if (type.includes('pistol') || type.includes('uspsa') || type.includes('idpa')) return 'bg-nav-events'
      if (type.includes('3gun') || type.includes('multigun')) return 'bg-rusty-orange'
      if (type.includes('trap') || type.includes('skeet') || type.includes('sporting')) return 'bg-nav-marketplace'
      if (type.includes('cowboy') || type.includes('sass') || type.includes('western')) return 'bg-sandy-ochre'
      if (type.includes('league') || type.includes('training') || type.includes('expo') || type.includes('charity')) return 'bg-nav-forums'
      return 'bg-nav-events'
    case 'skillLevel':
      // Progressive difficulty colors
      if (type === 'beginner') return 'bg-sagebrush-green'
      if (type === 'intermediate') return 'bg-sandy-ochre'
      if (type === 'advanced') return 'bg-rusty-orange'
      if (type === 'youth') return 'bg-lodgepole-green'
      return 'bg-slate-blue'
    case 'equipment':
      return 'bg-weathered-gold'
    case 'matchLevel':
      // Hierarchical importance colors
      if (type === 'club') return 'bg-nav-forums'
      if (type === 'state') return 'bg-nav-events'
      if (type === 'regional') return 'bg-sagebrush-green'
      if (type === 'national') return 'bg-rusty-orange'
      return 'bg-lodgepole-green'
    case 'registration':
      // Status-appropriate colors
      if (type === 'open') return 'bg-sagebrush-green'
      if (type === 'closing') return 'bg-sandy-ochre'
      if (type === 'waitlist') return 'bg-rusty-orange'
      return 'bg-slate-blue'
    default:
      return 'bg-muted'
  }
}

// Event data type
// Import comprehensive events data (130+ verified Idaho events)
import { getUpcomingEvents, getFeaturedEvents, type EventData } from '@/lib/comprehensive-events-data'

// Get upcoming events from comprehensive dataset
const upcomingEvents: EventData[] = getUpcomingEvents()

export function EventsPageStandardized() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)
  const [selectedCalendarDate, setSelectedCalendarDate] = React.useState<Date | undefined>(undefined)
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

  // Apply calendar date filter before passing to main filters
  const calendarFilteredEvents = React.useMemo(() => {
    if (!selectedCalendarDate) return upcomingEvents
    
    const selectedDateStr = selectedCalendarDate.toDateString()
    return upcomingEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.toDateString() === selectedDateStr
    })
  }, [selectedCalendarDate])

  // Filter configuration
  const filters = useCardPageFilters({
    items: calendarFilteredEvents,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'grid',
    initialItemsPerPage: 12,
    perPageOptions: [8, 12, 24, 48],
    enableInfiniteScroll: false,
    
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
      discipline: (event, selectedDisciplines) => {
        if (selectedDisciplines.length === 0) return true
        const desc = event.description.toLowerCase()
        const title = event.title.toLowerCase()
        return selectedDisciplines.some(discipline => {
          switch (discipline) {
            case 'uspsa': return desc.includes('uspsa') || title.includes('uspsa')
            case 'idpa': return desc.includes('idpa') || title.includes('idpa')
            case '3gun': return desc.includes('3-gun') || desc.includes('3gun') || desc.includes('multi-gun') || title.includes('3-gun')
            case 'prs': return desc.includes('prs') || desc.includes('precision') || title.includes('prs')
            case 'steel': return desc.includes('steel') || title.includes('steel')
            case 'nrl22': return desc.includes('nrl') || desc.includes('rimfire') || desc.includes('.22') || title.includes('nrl')
            case 'trap': return desc.includes('trap') || desc.includes('ata') || desc.includes('pita') || title.includes('trap')
            case 'skeet': return desc.includes('skeet') || desc.includes('5-stand') || desc.includes('five stand') || title.includes('skeet')
            case 'sporting': return desc.includes('sporting clays') || desc.includes('fitasc') || title.includes('sporting')
            case 'continental': return desc.includes('continental') || desc.includes('bunker') || desc.includes('olympic trap')
            case 'league': return desc.includes('league') || title.includes('league')
            case 'cowboy': return desc.includes('cowboy') || desc.includes('sass') || title.includes('cowboy')
            case 'benchrest': return desc.includes('benchrest') || desc.includes('f-class') || title.includes('benchrest')
            case 'training': return event.eventType === 'Training'
            case 'expo': return event.eventType === 'Expo'
            default: return false
          }
        })
      },
      skillLevel: (event, selectedLevels) => {
        if (selectedLevels.length === 0) return true
        const desc = event.description.toLowerCase()
        const title = event.title.toLowerCase()
        return selectedLevels.some(level => {
          switch (level) {
            case 'beginner': return desc.includes('beginner') || desc.includes('new shooter') || desc.includes('intro') || title.includes('beginner')
            case 'intermediate': return desc.includes('intermediate') || title.includes('intermediate')
            case 'advanced': return desc.includes('advanced') || desc.includes('master') || title.includes('advanced')
            case 'all-levels': return desc.includes('all levels') || desc.includes('open') || title.includes('open')
            case 'youth': return desc.includes('youth') || desc.includes('junior') || title.includes('youth')
            default: return false
          }
        })
      },
      equipment: (event, selectedEquipment) => {
        if (selectedEquipment.length === 0) return true
        const desc = event.description.toLowerCase()
        const title = event.title.toLowerCase()
        return selectedEquipment.some(equipment => {
          switch (equipment) {
            case 'pistol': return desc.includes('pistol') || desc.includes('handgun') || title.includes('pistol')
            case 'rifle': return (desc.includes('rifle') || title.includes('rifle')) && !desc.includes('pistol') && !title.includes('pistol')
            case 'shotgun': return desc.includes('shotgun') || desc.includes('trap') || desc.includes('skeet') || title.includes('shotgun')
            case 'multigun': return desc.includes('3-gun') || desc.includes('2-gun') || desc.includes('multi') || title.includes('3-gun')
            case 'rimfire': return desc.includes('.22') || desc.includes('rimfire') || title.includes('.22')
            case 'centerfire': return desc.includes('centerfire') || title.includes('centerfire')
            default: return false
          }
        })
      },
      matchLevel: (event, selectedLevels) => {
        if (selectedLevels.length === 0) return true
        const desc = event.description.toLowerCase()
        const title = event.title.toLowerCase()
        return selectedLevels.some(level => {
          switch (level) {
            case 'club': return desc.includes('club') || desc.includes('local') || desc.includes('weekly') || title.includes('club')
            case 'state': return desc.includes('state') && desc.includes('championship') || title.includes('state')
            case 'regional': return desc.includes('regional') || desc.includes('area') || title.includes('regional')
            case 'national': return desc.includes('national') || title.includes('national')
            case 'special': return event.eventType === 'Charity' || desc.includes('charity') || desc.includes('benefit') || title.includes('charity')
            default: return false
          }
        })
      },
      registration: (event, selectedStatuses) => {
        if (selectedStatuses.length === 0) return true
        return selectedStatuses.some(status => {
          switch (status) {
            case 'open': return event.capacity && event.registeredCount && (event.capacity - event.registeredCount) > 10
            case 'closing': {
              const daysUntil = Math.floor((new Date(event.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
              return daysUntil <= 7 && daysUntil > 0
            }
            case 'waitlist': return event.capacity && event.registeredCount && (event.capacity - event.registeredCount) <= 0
            case 'walkins': return event.description.toLowerCase().includes('walk-in') || event.description.toLowerCase().includes('walkin') || !event.registrationUrl
            default: return false
          }
        })
      }
    },
    
    // Sort functions
    sortFunctions: {
      date: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      popularity: (a, b) => b.registeredCount - a.registeredCount,
      capacity: (a, b) => b.capacity - a.capacity,
      alphabetical: (a, b) => a.title.localeCompare(b.title)
    }
  })

  // Modern filter sidebar configuration - Comprehensive shooting sports filters
  const filterSections = [
    {
      id: 'discipline',
      title: 'Discipline/Format',
      maxVisible: 7,
      collapsible: true,
      isCategory: true,
      categories: [
        {
          id: 'pistol-rifle',
          title: 'Pistol & Rifle',
          color: getFilterColor('discipline', 'pistol-rifle'),
          options: [
            { id: 'uspsa', label: 'USPSA', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('uspsa')).length, color: getFilterColor('discipline', 'uspsa') },
            { id: 'idpa', label: 'IDPA', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('idpa')).length, color: getFilterColor('discipline', 'idpa') },
            { id: 'prs', label: 'PRS/Precision Rifle', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('prs') || e.description.toLowerCase().includes('precision')).length, color: getFilterColor('discipline', 'prs') },
            { id: 'steel', label: 'Steel Challenge', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('steel')).length, color: getFilterColor('discipline', 'steel') },
            { id: 'nrl22', label: 'NRL22/Rimfire', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('nrl') || e.description.toLowerCase().includes('rimfire') || e.description.toLowerCase().includes('.22')).length, color: getFilterColor('discipline', 'nrl22') },
            { id: 'benchrest', label: 'Benchrest/F-Class', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('benchrest') || e.description.toLowerCase().includes('f-class')).length, color: getFilterColor('discipline', 'benchrest') }
          ]
        },
        {
          id: '3gun',
          title: '3-Gun',
          color: getFilterColor('discipline', '3gun'),
          options: [
            { id: '3gun', label: '3-Gun Competition', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('3-gun') || e.description.toLowerCase().includes('3gun')).length, color: getFilterColor('discipline', '3gun') },
            { id: '2gun', label: '2-Gun Competition', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('2-gun') || e.description.toLowerCase().includes('2gun')).length, color: getFilterColor('discipline', '2gun') },
            { id: 'multigun', label: 'Multi-gun Events', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('multi-gun') || e.description.toLowerCase().includes('multigun')).length, color: getFilterColor('discipline', 'multigun') }
          ]
        },
        {
          id: 'trap',
          title: 'Trap',
          color: getFilterColor('discipline', 'trap'),
          options: [
            { id: 'ata-trap', label: 'ATA Trap', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('ata') && e.description.toLowerCase().includes('trap')).length, color: getFilterColor('discipline', 'ata-trap') },
            { id: 'pita-trap', label: 'PITA Trap', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('pita') && e.description.toLowerCase().includes('trap')).length, color: getFilterColor('discipline', 'pita-trap') },
            { id: 'continental', label: 'Continental/Bunker', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('continental') || e.description.toLowerCase().includes('bunker') || e.description.toLowerCase().includes('olympic trap')).length, color: getFilterColor('discipline', 'continental') },
            { id: 'wobble-trap', label: 'Wobble Trap', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('wobble')).length, color: getFilterColor('discipline', 'wobble-trap') }
          ]
        },
        {
          id: 'skeet',
          title: 'Skeet',
          color: getFilterColor('discipline', 'skeet'),
          options: [
            { id: 'american-skeet', label: 'American Skeet', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('skeet') && !e.description.toLowerCase().includes('5-stand')).length, color: getFilterColor('discipline', 'american-skeet') },
            { id: '5stand', label: '5-Stand', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('5-stand') || e.description.toLowerCase().includes('five stand')).length, color: getFilterColor('discipline', '5stand') },
            { id: 'international-skeet', label: 'International Skeet', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('international skeet')).length, color: getFilterColor('discipline', 'international-skeet') }
          ]
        },
        {
          id: 'sporting-clays',
          title: 'Sporting Clays',
          color: getFilterColor('discipline', 'sporting-clays'),
          options: [
            { id: 'nsca-sporting', label: 'NSCA Sporting Clays', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('sporting clays') || e.description.toLowerCase().includes('nsca')).length, color: getFilterColor('discipline', 'nsca-sporting') },
            { id: 'fitasc', label: 'FITASC', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('fitasc')).length, color: getFilterColor('discipline', 'fitasc') },
            { id: 'super-sporting', label: 'Super Sporting', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('super sporting')).length, color: getFilterColor('discipline', 'super-sporting') }
          ]
        },
        {
          id: 'cowboy-action',
          title: 'Cowboy Action',
          color: getFilterColor('discipline', 'cowboy-action'),
          options: [
            { id: 'sass', label: 'SASS Events', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('sass')).length, color: getFilterColor('discipline', 'sass') },
            { id: 'cowboy-general', label: 'Cowboy Action', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('cowboy') && !e.description.toLowerCase().includes('sass')).length, color: getFilterColor('discipline', 'cowboy-general') },
            { id: 'western-events', label: 'Western Events', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('western')).length, color: getFilterColor('discipline', 'western-events') }
          ]
        },
        {
          id: 'leagues-misc',
          title: 'Leagues & Misc',
          color: getFilterColor('discipline', 'leagues-misc'),
          options: [
            { id: 'league', label: 'League Shoots', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('league')).length, color: getFilterColor('discipline', 'league') },
            { id: 'training', label: 'Training/Clinics', count: upcomingEvents.filter(e => e.eventType === 'Training').length, color: getFilterColor('discipline', 'training') },
            { id: 'expo', label: 'Gun Shows/Expos', count: upcomingEvents.filter(e => e.eventType === 'Expo').length, color: getFilterColor('discipline', 'expo') },
            { id: 'fun-shoots', label: 'Fun Shoots', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('fun shoot')).length, color: getFilterColor('discipline', 'fun-shoots') },
            { id: 'charity', label: 'Charity Events', count: upcomingEvents.filter(e => e.eventType === 'Charity').length, color: getFilterColor('discipline', 'charity') }
          ]
        }
      ]
    },
    {
      id: 'skillLevel',
      title: 'Skill Level',
      maxVisible: 5,
      collapsible: true,
      options: [
        { id: 'beginner', label: 'Beginner Friendly', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('beginner') || e.description.toLowerCase().includes('new shooter') || e.description.toLowerCase().includes('intro')).length, color: getFilterColor('skillLevel', 'beginner') },
        { id: 'intermediate', label: 'Intermediate', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('intermediate')).length, color: getFilterColor('skillLevel', 'intermediate') },
        { id: 'advanced', label: 'Advanced', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('advanced') || e.description.toLowerCase().includes('master')).length, color: getFilterColor('skillLevel', 'advanced') },
        { id: 'all-levels', label: 'Open to All', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('all levels') || e.description.toLowerCase().includes('open')).length, color: getFilterColor('skillLevel', 'all-levels') },
        { id: 'youth', label: 'Youth Programs', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('youth') || e.description.toLowerCase().includes('junior')).length, color: getFilterColor('skillLevel', 'youth') }
      ]
    },
    {
      id: 'equipment',
      title: 'Equipment Type',
      maxVisible: 6,
      collapsible: true,
      options: [
        { id: 'pistol', label: 'Pistol Only', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('pistol') || e.description.toLowerCase().includes('handgun')).length, color: getFilterColor('equipment', 'pistol') },
        { id: 'rifle', label: 'Rifle Only', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('rifle') && !e.description.toLowerCase().includes('pistol')).length, color: getFilterColor('equipment', 'rifle') },
        { id: 'shotgun', label: 'Shotgun Only', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('shotgun') || e.description.toLowerCase().includes('trap') || e.description.toLowerCase().includes('skeet')).length, color: getFilterColor('equipment', 'shotgun') },
        { id: 'multigun', label: 'Multi-gun', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('3-gun') || e.description.toLowerCase().includes('2-gun') || e.description.toLowerCase().includes('multi')).length, color: getFilterColor('equipment', 'multigun') },
        { id: 'rimfire', label: 'Rimfire (.22LR)', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('.22') || e.description.toLowerCase().includes('rimfire')).length, color: getFilterColor('equipment', 'rimfire') },
        { id: 'centerfire', label: 'Centerfire', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('centerfire')).length, color: getFilterColor('equipment', 'centerfire') }
      ]
    },
    {
      id: 'matchLevel',
      title: 'Match Level',
      maxVisible: 5,
      collapsible: true,
      options: [
        { id: 'club', label: 'Club/Local', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('club') || e.description.toLowerCase().includes('local') || e.description.toLowerCase().includes('weekly')).length, color: getFilterColor('matchLevel', 'club') },
        { id: 'state', label: 'State Championship', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('state') && e.description.toLowerCase().includes('championship')).length, color: getFilterColor('matchLevel', 'state') },
        { id: 'regional', label: 'Regional/Area', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('regional') || e.description.toLowerCase().includes('area')).length, color: getFilterColor('matchLevel', 'regional') },
        { id: 'national', label: 'National', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('national')).length, color: getFilterColor('matchLevel', 'national') },
        { id: 'special', label: 'Special/Charity', count: upcomingEvents.filter(e => e.eventType === 'Charity' || e.description.toLowerCase().includes('charity') || e.description.toLowerCase().includes('benefit')).length, color: getFilterColor('matchLevel', 'special') }
      ]
    },
    {
      id: 'registration',
      title: 'Registration Status',
      maxVisible: 4,
      collapsible: true,
      options: [
        { id: 'open', label: 'Registration Open', count: upcomingEvents.filter(e => e.capacity && e.registeredCount && (e.capacity - e.registeredCount) > 10).length, color: getFilterColor('registration', 'open') },
        { id: 'closing', label: 'Closing Soon', count: upcomingEvents.filter(e => {
          const daysUntil = Math.floor((new Date(e.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
          return daysUntil <= 7 && daysUntil > 0;
        }).length, color: getFilterColor('registration', 'closing') },
        { id: 'waitlist', label: 'Waitlist Available', count: upcomingEvents.filter(e => e.capacity && e.registeredCount && (e.capacity - e.registeredCount) <= 0).length, color: getFilterColor('registration', 'waitlist') },
        { id: 'walkins', label: 'Walk-ins Welcome', count: upcomingEvents.filter(e => e.description.toLowerCase().includes('walk-in') || e.description.toLowerCase().includes('walkin') || !e.registrationUrl).length, color: getFilterColor('registration', 'walkins') }
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
          {/* Content - Left side - 2/3 width */}
          <div className="h-full flex flex-col justify-center space-y-mobile-lg sm:space-y-lg py-mobile-md sm:py-md">
            {/* Breadcrumbs - more breathing room */}
            <div className="mb-lg">
              <div className="flex items-center gap-xs text-sm text-white/60">
                <span>Home</span>
                <CaretRight className="h-4 w-4" />
                <span className="text-white font-medium">Events</span>
              </div>
            </div>

            {/* Title and Subtitle - very tight spacing */}
            <div className="space-y-0">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-none">
                IDAHO FIREARMS EVENTS & TRAINING
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-none mt-1">
                competitions, training, and community events in the treasure valley
              </h2>
            </div>

            {/* Badges below title/subtitle */}
            <div className="flex flex-wrap gap-xs">
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <TrophyIcon className="h-4 w-4 mr-xs" />
                Competitions
              </Badge>
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <CursorArrowRaysIcon className="h-4 w-4 mr-xs" />
                Training
              </Badge>
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <UsersIcon className="h-4 w-4 mr-xs" />
                Community
              </Badge>
            </div>
            
            {/* Paragraph moved closer to badges */}
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed mt-base">
              Discover competitions, training opportunities, and community events across Idaho's firearms scene. From USPSA matches to charity shoots, find your next adventure in the shooting sports.
            </p>
            
            <div className="flex gap-base">
              <Button className="bg-nav-events text-white hover:bg-white hover:text-nav-events font-rajdhani font-bold" animationType="plus-minus">
                <PlusIcon className="h-4 w-4 mr-xs" />
                Submit Event
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 font-rajdhani font-bold" animationType="chevron">
                View Calendar
              </Button>
            </div>
          </div>
          
          {/* Featured Event Card - Right side - Compact Hero Version */}
          <div className="py-mobile-md sm:py-md">
            <div className="relative">
              {upcomingEvents.find(e => e.featured) && (() => {
                const featuredEvent = upcomingEvents.find(e => e.featured)!
                return (
                  <Card className="mica-card border-nav-events/30 shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-events/20 to-nav-events/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-events to-nav-events"></div>
                    
                    <CardContent className="p-sm relative z-10">
                      <div className="flex items-center justify-between mb-base">
                        <Badge className="bg-nav-events/20 text-nav-events border-nav-events/30 font-rajdhani font-bold text-[10px]">
                          <StarIcon className="h-3 w-3 mr-xs" />
                          FEATURED EVENT
                        </Badge>
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <CheckCircleIcon className="h-3 w-3 text-nav-events" />
                          <span>Verified</span>
                        </div>
                      </div>
                      
                      <div className="space-y-base">
                        <div>
                          <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight mb-xs">{featuredEvent.title}</h3>
                          <div className="flex items-center gap-xs text-xs text-muted-foreground">
                            <CalendarDaysIcon className="h-3 w-3 text-nav-events" />
                            <span>{featuredEvent.date}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {featuredEvent.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-base border-t border-border">
                          <div className="space-y-xs">
                            <div className="flex items-center gap-xs">
                              <MapPinIcon className="h-3 w-3 text-nav-events" />
                              <span className="text-xs text-muted-foreground">{featuredEvent.location.split(',')[0]}</span>
                            </div>
                          </div>
                          <Button 
                            className="bg-gradient-to-r from-nav-events to-nav-events text-gruvbox-bg-dark hover:from-nav-events hover:to-nav-events font-rajdhani font-bold text-xs"
                            size="sm"
                          >
                            VIEW DETAILS
                            <ArrowRightIcon className="h-3 w-3 ml-xs" />
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
      
      {/* Events Ticker - Live upcoming events */}
      <EventTicker />
      
      {/* Events Content Section - SEO and Community Engagement */}
      <EventsContentSection />

      {/* Main Content Area */}
      <section className="py-mobile-2xl sm:py-4xl bg-background/50">
        <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
          <div className="flex flex-col lg:flex-row gap-mobile-lg sm:gap-2xl max-w-[1920px] mx-auto">
            
            {/* Left Sidebar - Calendar and Filters (Desktop) */}
            <aside className="hidden lg:block">
              <div className="space-y-6">
                {/* Compact Sidebar Calendar - Moved to top for better visibility */}
                <SidebarCalendar 
                  events={upcomingEvents.map(event => ({
                    title: event.title,
                    date: event.date,
                    eventType: event.eventType,
                    featured: event.featured
                  }))}
                  onDateSelect={setSelectedCalendarDate}
                />
                
                {/* Modern Filter Sidebar - Now fully collapsible */}
                <ModernFilterSidebar
                  sections={filterSections}
                  selectedFilters={filters.selectedFilters}
                  onFilterChange={handleFilterChange}
                  onClearSection={handleClearSection}
                  onClearAll={handleClearAll}
                  totalResults={filters.totalResults}
                  filteredResults={filters.filteredResults}
                />
              </div>
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
              {/* Search and Category Controls */}
              <div className="mb-xl space-y-lg">
                {/* Search Bar */}
                <div className="relative max-w-2xl">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search events, locations, or organizers..."
                    className="pl-10 h-12 text-body-base shadow-none"
                    value={filters.searchQuery}
                    onChange={(e) => filters.setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Quick Filter Tabs */}
                <div className="flex flex-wrap gap-xs">
                  {[
                    { id: 'all', label: 'All Events', count: upcomingEvents.length, color: 'bg-muted' },
                    { id: 'competitions', label: 'Competitions', count: upcomingEvents.filter(e => e.eventType === 'Competition').length, color: 'bg-nav-events' },
                    { id: 'training', label: 'Training', count: upcomingEvents.filter(e => e.eventType === 'Training').length, color: 'bg-sagebrush-green' },
                    { id: 'expos', label: 'Expos', count: upcomingEvents.filter(e => e.eventType === 'Expo').length, color: 'bg-nav-marketplace' },
                    { id: 'charity', label: 'Charity', count: upcomingEvents.filter(e => e.eventType === 'Charity').length, color: 'bg-rusty-orange' },
                    { id: 'social', label: 'Social', count: upcomingEvents.filter(e => e.eventType === 'Social').length, color: 'bg-nav-forums' },
                    { id: 'featured', label: 'Featured', count: upcomingEvents.filter(e => e.featured).length, color: 'bg-weathered-gold' }
                  ].map((tab) => (
                    <Button
                      key={tab.id}
                      variant={filters.activeTab === tab.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => filters.setActiveTab(tab.id)}
                      className="gap-xs font-rajdhani shadow-none rounded-xs"
                    >
                      <div className={`w-3 h-3 rounded-full ${tab.color}`} />
                      {tab.label}
                      {tab.count && (
                        <Badge variant="outline" size="sm" className="ml-xs">
                          {tab.count}
                        </Badge>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Results Header with Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base sm:gap-xl mb-xl sm:mb-2xl lg:mb-3xl">
                <div>
                  <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Event' : 'Events'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filters.filteredResults !== filters.totalResults && `Filtered from ${filters.totalResults} total • `}
                    {filters.searchQuery && `Search: "${filters.searchQuery}" • `}
                    {selectedCalendarDate && `Date: ${selectedCalendarDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}`}
                  </p>
                </div>
                
                {/* View Controls - Mobile responsive */}
                <div className="flex items-center gap-sm sm:gap-base">
                  {/* Enhanced View Mode Toggle - Multiple Layouts */}
                  <div className="hidden sm:flex items-center border rounded-xs overflow-x-auto">
                    <Button
                      variant={filters.viewMode === 'compact' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('compact')}
                      className="rounded-none border-none shadow-none"
                      title="Compact - 4-6 items per row"
                    >
                      <Squares2X2Icon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'dense' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('dense')}
                      className="rounded-none border-none shadow-none"
                      title="Dense Grid - Maximum items"
                    >
                      <ListBulletIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('grid')}
                      className="rounded-none border-none shadow-none"
                      title="Standard Grid"
                    >
                      <Squares2X2Icon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'card' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('card')}
                      className="rounded-none border-none shadow-none"
                      title="Large Cards"
                    >
                      <RectangleGroupIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('list')}
                      className="rounded-none border-none shadow-none"
                      title="List View"
                    >
                      <ListView className="size-4" />
                    </Button>
                  </div>
                  {/* Clear Date Filter Button */}
                  {selectedCalendarDate && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedCalendarDate(undefined)}
                      className="gap-xs font-rajdhani text-nav-events border-nav-events/30 hover:bg-nav-events/10"
                    >
                      <XMarkIcon className="size-3" />
                      Clear Date
                    </Button>
                  )}

                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="gap-xs font-rajdhani lg:hidden"
                  >
                    <FunnelIcon className="size-4" />
                    Filters
                    {getActiveFilterCount() > 0 && (
                      <Badge variant="outline" className="ml-xs bg-nav-events/20 text-nav-events border-nav-events/30 text-xs">
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
                    <option value="capacity">Sort by Capacity</option>
                    <option value="alphabetical">Sort A-Z</option>
                  </select>
                </div>
              </div>

              {/* Card Grid/List Content with Loading State */}
              <div className="mb-4xl">
                {filters.isLoading ? (
                  <CardSkeleton 
                    viewMode={filters.viewMode} 
                    count={filters.itemsPerPage} 
                    className={filters.getGridClassName()}
                  />
                ) : (
                  <div className={filters.getGridClassName()}>
                    {filters.paginatedItems.length > 0 ? (
                      filters.paginatedItems.map((event, index) => (
                        <EventCard
                          key={`${event.title}-${index}`}
                          {...event}
                          className="transition-all duration-300 rounded-xs"
                        />
                      ))
                    ) : (
                      <div className="col-span-full">
                        <EmptyState 
                          title="No Events Found"
                          description="Try adjusting your search terms or filters to find events."
                          onAction={
                            <Button onClick={filters.clearAllFilters}>
                              Clear All Filters
                            </Button>
                          }
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Enhanced Pagination */}
              <EnhancedPagination
                currentPage={filters.currentPage}
                totalPages={filters.totalPages}
                onPageChange={filters.setCurrentPage}
                totalItems={filters.totalResults}
                itemsPerPage={filters.itemsPerPage}
                filteredItems={filters.filteredResults}
                variant="full"
                showItemsInfo={true}
                perPageOptions={filters.perPageOptions}
                onPerPageChange={filters.setItemsPerPage}
                isLoading={filters.isLoading}
                enableKeyboardNavigation={true}
              />
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}