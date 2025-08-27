'use client'

import React from 'react'
import { UnifiedCardGallery } from './unified-card-gallery'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'

interface StandardizedPageLayoutProps<T> {
  // Hero content
  heroContent: React.ReactNode
  
  // Ticker component (optional)
  tickerComponent?: React.ReactNode
  
  // Data
  items: T[]
  
  // Card rendering
  renderCard: (item: T, index: number) => React.ReactNode
  
  // Filter configuration
  filterSections: any[]
  
  // MagnifyingGlassIcon configuration
  searchPlaceholder?: string
  searchFunction: (item: T, searchTerm: string) => boolean
  
  // Tab configuration (optional)
  tabs?: Array<{ id: string; label: string; count?: number }>
  tabFilter?: (item: T, activeTab: string) => boolean
  
  // Custom filters
  customFilters?: Record<string, (item: T, selectedValues: string[]) => boolean>
  
  // Sort functions
  sortFunctions?: Record<string, (a: T, b: T) => number>
  
  // CalendarDaysIcon configuration (optional)
  showCalendar?: boolean
  calendarEvents?: Array<{ date: string; title: string; id: string }>
  
  // Empty state
  emptyTitle?: string
  emptyDescription?: string
  
  // Additional sections after gallery
  additionalSections?: React.ReactNode
  
  // Page-specific class names
  containerClassName?: string
}

export function StandardizedPageLayout<T>({
  heroContent,
  tickerComponent,
  items,
  renderCard,
  filterSections,
  searchPlaceholder = "MagnifyingGlassIcon...",
  searchFunction,
  tabs,
  tabFilter,
  customFilters = {},
  sortFunctions = {
    date: (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    alphabetical: (a: any, b: any) => {
      const aName = a.title || a.businessName || a.name || ''
      const bName = b.title || b.businessName || b.name || ''
      return aName.localeCompare(bName)
    },
    popularity: (a: any, b: any) => {
      const aScore = a.registeredCount || a.reviewCount || a.views || 0
      const bScore = b.registeredCount || b.reviewCount || b.views || 0
      return bScore - aScore
    }
  },
  showCalendar = false,
  calendarEvents,
  emptyTitle = "No Results Found",
  emptyDescription = "Try adjusting your search terms or filters.",
  additionalSections,
  containerClassName = ""
}: StandardizedPageLayoutProps<T>) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)
  const [selectedCalendarDate, setSelectedCalendarDate] = React.useState<Date | null>(null)

  // Initialize filters with useCardPageFilters hook
  const filters = useCardPageFilters({
    items,
    initialViewMode: 'grid',
    itemsPerPage: 12,
    
    // MagnifyingGlassIcon filter
    searchFilter: searchFunction,
    
    // Tab filter (if provided)
    tabFilter: tabFilter || (() => true),
    
    // Custom filters
    customFilters,
    
    // Sort functions
    sortFunctions
  })

  // Handle filter changes
  const handleFilterChange = (sectionId: string, optionId: string) => {
    filters.toggleFilter(sectionId, optionId)
  }

  const handleClearSection = (sectionId: string) => {
    filters.clearSection(sectionId)
  }

  const handleClearAll = () => {
    filters.clearAllFilters()
  }

  return (
    <div className={`min-h-screen bg-background ${containerClassName}`}>
      {/* Hero Section */}
      {heroContent}
      
      {/* Optional Ticker */}
      {tickerComponent}
      
      {/* Main Gallery Section */}
      <UnifiedCardGallery
        items={items}
        filteredItems={filters.filteredItems}
        paginatedItems={filters.paginatedItems}
        renderCard={renderCard}
        filters={filters}
        filterSections={filterSections}
        onFilterChange={handleFilterChange}
        onClearSection={handleClearSection}
        onClearAll={handleClearAll}
        showCalendar={showCalendar}
        calendarEvents={calendarEvents}
        onDateSelect={setSelectedCalendarDate}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        searchValue={filters.searchTerm}
        onSearchChange={filters.setSearchTerm}
        searchPlaceholder={searchPlaceholder}
        emptyTitle={emptyTitle}
        emptyDescription={emptyDescription}
        showViewToggle={true}
        showResultCount={true}
      />
      
      {/* Additional Sections (CTAs, etc.) */}
      {additionalSections}
    </div>
  )
}