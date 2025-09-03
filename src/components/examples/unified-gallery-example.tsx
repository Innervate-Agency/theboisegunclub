'use client'

import React from 'react'
import { UnifiedGalleryContainer, useUnifiedGallery } from '@/components/ui/unified-gallery-container'
import { UnifiedEventCard } from '@/components/ui/unified-event-card'
import type { EventData } from '@/lib/comprehensive-events-data'

/**
 * Example: Unified Gallery Integration
 * 
 * DEMONSTRATES COMPLETE SYSTEM:
 * - Filter integration with useUnifiedGallery
 * - Consistent view mode handling
 * - Unified card rendering
 * - Section-specific theming
 */

interface UnifiedGalleryExampleProps {
  events: EventData[]
}

export function UnifiedGalleryExample({ events }: UnifiedGalleryExampleProps) {
  
  const {
    // Filter state
    searchQuery,
    activeTab,
    selectedFilters,
    viewMode,
    sortBy,
    
    // Actions
    setSearchQuery,
    setActiveTab,
    updateFilters,
    setViewMode,
    setSortBy,
    
    // Results
    filteredItems: filteredEvents,
    isLoading,
    totalResults,
    filteredResults,
    
    // Utilities
    getGridClassName
  } = useUnifiedGallery<EventData>({
    items: events,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'grid',
    
    // Filter functions
    searchFilter: (event, query) => {
      const searchTerms = query.toLowerCase()
      return (
        event.title.toLowerCase().includes(searchTerms) ||
        event.description.toLowerCase().includes(searchTerms) ||
        event.location.toLowerCase().includes(searchTerms) ||
        event.eventType.toLowerCase().includes(searchTerms)
      )
    },
    
    tabFilter: (event, tab) => {
      switch (tab) {
        case 'competitions': return event.eventType === 'Competition'
        case 'training': return event.eventType === 'Training'  
        case 'upcoming': return new Date(event.date) > new Date()
        case 'all':
        default: return true
      }
    },
    
    customFilters: {
      eventType: (event, types) => types.includes(event.eventType),
      location: (event, locations) => locations.some(loc => event.location.includes(loc))
    },
    
    sortFunctions: {
      'date': (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      'title': (a, b) => a.title.localeCompare(b.title),
      'type': (a, b) => a.eventType.localeCompare(b.eventType),
      'default': (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    }
  })
  
  return (
    <div className="space-y-lg">
      {/* Filter Controls (would be in header/sidebar) */}
      <div className="bg-card rounded-lg p-lg border border-border">
        <div className="flex flex-col sm:flex-row gap-md items-start sm:items-center justify-between">
          
          {/* Search */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-md py-sm border border-border rounded-lg bg-background"
            />
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex gap-xs">
            {(['grid', 'dense', 'card', 'list'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-sm py-xs rounded capitalize ${
                  viewMode === mode 
                    ? 'bg-nav-events text-white' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-md py-sm border border-border rounded-lg bg-background"
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
            <option value="type">Sort by Type</option>
          </select>
        </div>
        
        {/* Results Summary */}
        <div className="mt-md pt-md border-t border-border text-sm text-muted-foreground">
          Showing {filteredResults} of {totalResults} events in {viewMode} view
        </div>
      </div>
      
      {/* Unified Gallery */}
      <UnifiedGalleryContainer
        items={events}
        filteredItems={filteredEvents}
        viewMode={viewMode}
        isLoading={isLoading}
        section="events"
        renderItem={(event) => (
          <UnifiedEventCard
            key={event.slug}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            eventType={event.eventType}
            registrationUrl={event.registrationUrl}
            price={event.price}
            slug={event.slug}
            viewMode={viewMode}
          />
        )}
        emptyStateMessage="No events found"
        emptyStateAction={{
          label: "Browse All Events",
          href: "/events"
        }}
      />
    </div>
  )
}