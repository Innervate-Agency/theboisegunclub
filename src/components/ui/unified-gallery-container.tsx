'use client'

import * as React from 'react'
import { cn } from "@/lib/utils"
import { useCardPageFilters, type FilterState } from "@/hooks/useCardPageFilters"
import type { ViewMode } from '@/components/ui/card-page-layout'

/**
 * Unified Gallery Container
 * 
 * INTEGRATES WITH FILTER SYSTEM:
 * - Unified view mode handling across all sections
 * - Consistent grid layouts and spacing
 * - Integrated with useCardPageFilters hook
 * - Responsive breakpoints and mobile optimization
 */

export interface UnifiedGalleryContainerProps<T> {
  // Filter integration
  items: T[]
  filteredItems: T[]
  viewMode: ViewMode
  isLoading: boolean
  
  // Rendering
  renderItem: (item: T, index: number) => React.ReactNode
  
  // Configuration
  section: 'events' | 'directory' | 'armory' | 'intel' | 'buysell' | 'forums'
  emptyStateMessage?: string
  emptyStateAction?: {
    label: string
    href: string
  }
  
  // Layout
  className?: string
  containerClassName?: string
}

export function UnifiedGalleryContainer<T>({
  items,
  filteredItems,
  viewMode,
  isLoading,
  renderItem,
  section,
  emptyStateMessage = "No items found",
  emptyStateAction,
  className,
  containerClassName
}: UnifiedGalleryContainerProps<T>) {
  
  // Get grid class based on view mode - Modern 2025 Options
  const getGridClassName = (viewMode: ViewMode): string => {
    switch (viewMode) {
      case 'waterfall':
        // Natural flow masonry layout - Pinterest/Medium style
        return "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-lg space-y-0 [&>*]:break-inside-avoid [&>*]:mb-lg"
      case 'grid':
        // Equal height grid - Traditional card layout
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg [grid-auto-rows:1fr]"
      case 'list':
        // Compact list view - Information dense
        return "flex flex-col gap-sm divide-y divide-border"
      case 'compact':
        // Dense information display - Maximum items per row
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-md [grid-auto-rows:min-content]"
      case 'table':
        // Tabular data view - Structured information
        return "flex flex-col gap-0 border border-border rounded-lg overflow-hidden"
      default:
        return "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-lg space-y-0 [&>*]:break-inside-avoid [&>*]:mb-lg"
    }
  }
  
  // Get section theme colors
  const getSectionTheme = (section: string) => {
    const themeMap = {
      events: 'nav-events',
      directory: 'nav-directory',
      armory: 'nav-armory', 
      intel: 'nav-intel',
      buysell: 'nav-buysell',
      forums: 'nav-forums'
    }
    return themeMap[section as keyof typeof themeMap] || 'nav-events'
  }
  
  const sectionColor = getSectionTheme(section)
  
  // Loading state
  if (isLoading) {
    return (
      <div className={cn("flex items-center justify-center py-3xl", containerClassName)}>
        <div className="flex flex-col items-center gap-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }
  
  // Empty state
  if (!filteredItems || filteredItems.length === 0) {
    return (
      <div className={cn("flex items-center justify-center py-3xl", containerClassName)}>
        <div className="text-center space-y-lg max-w-md">
          <div className={`mx-auto w-16 h-16 rounded-lg bg-${sectionColor}/10 flex items-center justify-center`}>
            <div className={`w-8 h-8 rounded bg-${sectionColor}/20`} />
          </div>
          <div className="space-y-sm">
            <h3 className="font-rajdhani font-bold text-xl text-card-foreground">
              {emptyStateMessage}
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms
            </p>
          </div>
          {emptyStateAction && (
            <a 
              href={emptyStateAction.href}
              className={cn(
                "inline-flex items-center justify-center px-lg py-md rounded-lg font-rajdhani font-bold transition-colors",
                `bg-${sectionColor} text-white hover:bg-${sectionColor}/90`
              )}
            >
              {emptyStateAction.label}
            </a>
          )}
        </div>
      </div>
    )
  }
  
  // Main gallery grid
  return (
    <div className={cn(containerClassName)}>
      <div className={cn(getGridClassName(viewMode), className)}>
        {filteredItems.map((item, index) => (
          <div key={index} className={cn(
            // Base responsive behavior - crucial h-full for CSS Grid
            "w-full h-full",
            // View-specific adjustments
            viewMode === 'masonry' && "break-inside-avoid mb-lg",
            viewMode === 'magazine' && index === 0 && "col-span-12 sm:col-span-8",
            viewMode === 'magazine' && index === 1 && "col-span-12 sm:col-span-4",
            viewMode === 'magazine' && index > 1 && "col-span-12 sm:col-span-6 lg:col-span-4",
            viewMode === 'table' && "border-b border-border last:border-b-0"
          )}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      
      {/* Results summary for accessibility */}
      <div className="sr-only">
        {filteredItems.length} of {items.length} items displayed in {viewMode} view
      </div>
    </div>
  )
}

/**
 * Hook for unified gallery state management
 * Wraps useCardPageFilters with gallery-specific defaults
 */
export function useUnifiedGallery<T>(props: Parameters<typeof useCardPageFilters<T>>[0]) {
  return useCardPageFilters({
    initialViewMode: 'grid',
    initialItemsPerPage: 12,
    perPageOptions: [12, 24, 48, 96],
    ...props
  })
}