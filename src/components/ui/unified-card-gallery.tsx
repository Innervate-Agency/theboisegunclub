'use client'

import React, { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EmptyState } from '@/components/ui/empty-state'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { SidebarCalendar } from '@/components/ui/sidebar-calendar'
import { FunnelIcon, ListBulletIcon, MagnifyingGlassIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

interface UnifiedCardGalleryProps<T> {
  // Data
  items: T[]
  filteredItems: T[]
  paginatedItems: T[]
  
  // Render props
  renderCard: (item: T, index: number) => ReactNode
  
  // Filter management
  filters: Record<string, unknown> // from useCardPageFilters hook
  filterSections: Array<{ id: string; label: string; options: Array<unknown> }>
  onFilterChange: (sectionId: string, optionId: string) => void
  onClearSection: (sectionId: string) => void
  onClearAll: () => void
  
  // Optional components
  showCalendar?: boolean
  calendarEvents?: Array<{ date: string; title: string; id: string }>
  onDateSelect?: (date: Date | null) => void
  
  // Layout options
  mobileFiltersOpen?: boolean
  setMobileFiltersOpen?: (open: boolean) => void
  
  // MagnifyingGlassIcon
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  
  // Empty state
  emptyTitle?: string
  emptyDescription?: string
  
  // Additional UI elements
  showViewToggle?: boolean
  showResultCount?: boolean
  
  // Custom classes
  containerClassName?: string
  gridClassName?: string
}

export function UnifiedCardGallery<T>({
  items,
  filteredItems,
  paginatedItems,
  renderCard,
  filters,
  filterSections,
  onFilterChange,
  onClearSection,
  onClearAll,
  showCalendar = false,
  calendarEvents = [],
  onDateSelect,
  mobileFiltersOpen = false,
  setMobileFiltersOpen,
  searchValue,
  onSearchChange,
  searchPlaceholder = "MagnifyingGlassIcon...",
  emptyTitle = "No Results Found",
  emptyDescription = "Try adjusting your search terms or filters.",
  showViewToggle = true,
  showResultCount = true,
  containerClassName = "",
  gridClassName = ""
}: UnifiedCardGalleryProps<T>) {
  return (
    <section className={`py-mobile-2xl sm:py-4xl bg-background/50 ${containerClassName}`}>
      <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
        <div className="flex flex-col lg:flex-row gap-mobile-lg sm:gap-2xl max-w-[1920px] mx-auto">
          
          {/* Left Sidebar - CalendarDaysIcon and Filters (Desktop) */}
          <aside className="hidden lg:block">
            <div className="space-y-6">
              {/* Optional CalendarDaysIcon */}
              {showCalendar && calendarEvents && onDateSelect && (
                <SidebarCalendar 
                  events={calendarEvents}
                  onDateSelect={onDateSelect}
                />
              )}
              
              {/* Filter Sidebar */}
              <ModernFilterSidebar
                sections={filterSections}
                selectedFilters={filters.selectedFilters}
                onFilterChange={onFilterChange}
                onClearSection={onClearSection}
                onClearAll={onClearAll}
                totalResults={filters.totalResults}
                filteredResults={filters.filteredResults}
              />
            </div>
          </aside>

          {/* Mobile Filter Sidebar */}
          <ModernFilterSidebar
            sections={filterSections}
            selectedFilters={filters.selectedFilters}
            onFilterChange={onFilterChange}
            onClearSection={onClearSection}
            onClearAll={onClearAll}
            totalResults={filters.totalResults}
            filteredResults={filters.filteredResults}
            isMobile={true}
            isOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen?.(false)}
          />

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* MagnifyingGlassIcon and Controls Bar */}
            <div className="space-y-lg mb-mobile-xl sm:mb-2xl">
              <div className="flex flex-col sm:flex-row gap-base">
                {/* MagnifyingGlassIcon */}
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-base top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  <Input
                    type="text"
                    placeholder={searchPlaceholder}
                    value={searchValue}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10 pr-4 h-11 bg-card border-border/50 focus:border-primary"
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center gap-sm">
                  {/* Mobile Filter Toggle */}
                  <Button 
                    variant="outline" 
                    size="default"
                    className="lg:hidden"
                    onClick={() => setMobileFiltersOpen?.(!mobileFiltersOpen)}
                  >
                    <FunnelIcon className="h-4 w-4 mr-2" />
                    Filters
                    {filters.activeFilterCount > 0 && (
                      <span className="ml-2 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                        {filters.activeFilterCount}
                      </span>
                    )}
                  </Button>

                  {/* View Toggle */}
                  {showViewToggle && (
                    <div className="hidden sm:flex items-center bg-muted rounded-md p-1">
                      <Button
                        variant={filters.viewMode === 'grid' ? 'secondary' : 'ghost'}
                        size="sm"
                        onClick={() => filters.setViewMode('grid')}
                        className="px-2"
                      >
                        <Squares2X2Icon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={filters.viewMode === 'list' ? 'secondary' : 'ghost'}
                        size="sm"
                        onClick={() => filters.setViewMode('list')}
                        className="px-2"
                      >
                        <ListBulletIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Sort Dropdown */}
                  <select
                    value={filters.sortBy}
                    onChange={(e) => filters.setSortBy(e.target.value)}
                    className="px-3 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="alphabetical">Sort A-Z</option>
                    <option value="popularity">Sort by Popularity</option>
                  </select>
                </div>
              </div>

              {/* Active Filters & Result Count */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-sm flex-wrap">
                  {filters.activeFilterCount > 0 && (
                    <>
                      <span className="text-sm text-muted-foreground">Active filters:</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClearAll}
                        className="text-xs"
                      >
                        Clear all ({filters.activeFilterCount})
                      </Button>
                    </>
                  )}
                </div>
                
                {showResultCount && (
                  <span className="text-sm text-muted-foreground">
                    Showing {paginatedItems.length} of {filteredItems.length} results
                  </span>
                )}
              </div>
            </div>

            {/* Card Grid */}
            <div className={gridClassName || filters.getGridClassName()}>
              {paginatedItems.length > 0 ? (
                paginatedItems.map((item, index) => renderCard(item, index))
              ) : (
                <div className="col-span-full">
                  <EmptyState 
                    title={emptyTitle}
                    description={emptyDescription}
                    onAction={
                      <Button onClick={filters.clearAllFilters}>
                        Clear All Filters
                      </Button>
                    }
                  />
                </div>
              )}
            </div>

            {/* Pagination */}
            {filters.totalPages > 1 && (
              <div className="mt-2xl flex items-center justify-center gap-sm">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => filters.setCurrentPage(filters.currentPage - 1)}
                  disabled={filters.currentPage === 1}
                >
                  Previous
                </Button>
                
                <div className="flex items-center gap-xs">
                  {Array.from({ length: filters.totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={filters.currentPage === page ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setCurrentPage(page)}
                      className="w-8 h-8 p-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => filters.setCurrentPage(filters.currentPage + 1)}
                  disabled={filters.currentPage === filters.totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  )
}