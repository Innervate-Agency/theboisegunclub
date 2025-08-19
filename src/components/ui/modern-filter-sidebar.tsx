'use client'

import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { m, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  FunnelIcon as Filter,
  TrophyIcon as Trophy,
  CursorArrowRaysIcon as Target,  // No BullseyeIcon in Heroicons
  SparklesIcon as Crown,
  StarIcon as Medal,
  UsersIcon as Users,
  CurrencyDollarIcon as CurrencyDollar,
  ClockIcon as Clock,
  ChevronDownIcon as ChevronDown,
  ChevronUpIcon as ChevronUp,
  XMarkIcon as X,
  ArrowPathIcon as RotateCw
} from '@heroicons/react/24/outline'

// Note: Since this component receives icon components as props,
// we don't need to import all possible icons here.
// The icons are passed from the parent component.

interface FilterOption {
  id: string
  label: string
  icon: React.ElementType
  count: number
  color?: string
}

interface FilterSection {
  id: string
  title: string
  options: FilterOption[]
  maxVisible?: number
  collapsible?: boolean
}

interface FilterSidebarProps {
  sections: FilterSection[]
  selectedFilters: Record<string, string[]>
  onFilterChange: (sectionId: string, optionId: string) => void
  onClearSection?: (sectionId: string) => void
  onClearAll?: () => void
  className?: string
  totalResults?: number
  filteredResults?: number
  isMobile?: boolean
  isOpen?: boolean
  onClose?: () => void
}

export function ModernFilterSidebar({
  sections,
  selectedFilters,
  onFilterChange,
  onClearSection,
  onClearAll,
  className,
  totalResults = 0,
  filteredResults = 0,
  isMobile = false,
  isOpen = true,
  onClose
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [showAllInSections, setShowAllInSections] = useState<Record<string, boolean>>({})

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }, [])

  const toggleShowAll = useCallback((sectionId: string) => {
    setShowAllInSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }, [])

  const getActiveFilterCount = useCallback(() => {
    return Object.values(selectedFilters).reduce((count, filters) => count + filters.length, 0)
  }, [selectedFilters])

  const isFilterActive = useCallback((sectionId: string, optionId: string) => {
    return selectedFilters[sectionId]?.includes(optionId) || false
  }, [selectedFilters])

  const activeFilterCount = getActiveFilterCount()

  // Render the filter content sections
  const renderFilterContent = () => (
    <>
      {/* Filter Header with Summary - Hidden on mobile since it's in the header */}
      {!isMobile && (
        <div className="space-y-base">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xs">
              <Filter className="size-5 text-muted-foreground" />
              <h3 className="font-rajdhani font-bold text-heading-base text-card-foreground">
                Filters
              </h3>
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-xs bg-nav-events/20 text-nav-events border-nav-events/30">
                  {activeFilterCount}
                </Badge>
              )}
            </div>
            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearAll}
                className="gap-xs text-muted-foreground hover:text-rusty-orange font-rajdhani text-base p-xs"
              >
                <RotateCw className="size-4" />
                Clear All
              </Button>
            )}
          </div>

          {/* Results Summary */}
          {filteredResults !== totalResults && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-base text-muted-foreground font-rajdhani border-l-2 border-nav-events/30 pl-sm"
            >
              Showing {filteredResults.toLocaleString()} of {totalResults.toLocaleString()} events
            </m.div>
          )}
        </div>
      )}

      {/* Mobile Clear All Button */}
      {isMobile && activeFilterCount > 0 && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearAll}
          className="w-full gap-xs font-rajdhani text-lg"
        >
          <RotateCw className="size-4" />
          Clear All Filters ({activeFilterCount})
        </Button>
      )}

      {/* Results Summary for Mobile */}
      {isMobile && filteredResults !== totalResults && (
        <div className="text-lg text-muted-foreground font-rajdhani text-center p-base bg-muted/50 rounded-xs">
          Showing {filteredResults.toLocaleString()} of {totalResults.toLocaleString()} events
        </div>
      )}

      {/* Filter Sections */}
      <div className="space-y-lg">
        {sections.map((section) => {
          const isExpanded = expandedSections[section.id] !== false
          const showAll = showAllInSections[section.id] || false
          const maxVisible = section.maxVisible || 6
          const visibleOptions = showAll ? section.options : section.options.slice(0, maxVisible)
          const hasMoreOptions = section.options.length > maxVisible
          const sectionActiveCount = selectedFilters[section.id]?.length || 0

          return (
            <m.div
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-sm"
            >
              {/* Section Header */}
              <div className="flex items-center justify-between">
                <h4 className="font-rajdhani font-semibold text-body-lg text-card-foreground uppercase tracking-wider">
                  {section.title}
                  {sectionActiveCount > 0 && (
                    <Badge variant="secondary" className="ml-xs bg-nav-events/10 text-nav-events text-sm px-2 py-0.5">
                      {sectionActiveCount}
                    </Badge>
                  )}
                </h4>
                <div className="flex items-center gap-xs">
                  {sectionActiveCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onClearSection?.(section.id)}
                      className="p-0 h-auto text-muted-foreground hover:text-rusty-orange"
                    >
                      <X className="size-4" />
                    </Button>
                  )}
                  {section.collapsible && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSection(section.id)}
                      className="p-0 h-auto text-muted-foreground hover:text-card-foreground"
                    >
                      {isExpanded ? (
                        <ChevronUp className="size-4" />
                      ) : (
                        <ChevronDown className="size-4" />
                      )}
                    </Button>
                  )}
                </div>
              </div>

              {/* Section Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <m.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="space-y-xs overflow-hidden"
                  >
                    {/* Filter Options */}
                    <div className="space-y-xs">
                      {visibleOptions.map((option) => {
                        const isActive = isFilterActive(section.id, option.id)
                        const Icon = option.icon

                        if (!Icon) {
                          console.error('Icon is undefined for option:', option)
                          return null
                        }

                        return (
                          <m.div
                            key={option.id}
                            whileHover={{ x: 2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant={isActive ? "default" : "ghost"}
                              size="sm"
                              onClick={() => onFilterChange(section.id, option.id)}
                              className={cn(
                                "w-full justify-between text-body-base font-rajdhani shadow-none rounded-xs h-10 transition-all duration-200 hover:text-rusty-orange",
                                isActive && "bg-rusty-orange/20 text-rusty-orange hover:bg-rusty-orange/30 border border-rusty-orange/30",
                                !isActive && "hover:bg-muted/50 hover:translate-x-1"
                              )}
                            >
                              <div className="flex items-center gap-xs">
                                <Icon 
                                  className={cn(
                                    "size-3 transition-colors duration-200",
                                    isActive ? "text-nav-events" : "text-muted-foreground",
                                    option.color && !isActive && option.color
                                  )} 
                                />
                                <span className="truncate">{option.label}</span>
                              </div>
                              <Badge 
                                variant="secondary" 
                                size="sm"
                                className={cn(
                                  "text-[10px] px-1.5 py-0.5 min-w-[20px] transition-colors duration-200",
                                  isActive ? "bg-rusty-orange text-white" : "bg-muted text-muted-foreground"
                                )}
                              >
                                {option.count}
                              </Badge>
                            </Button>
                          </m.div>
                        )
                      })}
                    </div>

                    {/* Show More/Less Toggle */}
                    {hasMoreOptions && (
                      <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pt-xs"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleShowAll(section.id)}
                          className="w-full gap-xs text-muted-foreground hover:text-rusty-orange font-rajdhani text-base h-8"
                        >
                          {showAll ? (
                            <>
                              <ChevronUp className="size-4" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="size-4" />
                              Show {section.options.length - maxVisible} More
                            </>
                          )}
                        </Button>
                      </m.div>
                    )}
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          )
        })}
      </div>
    </>
  )

  // Mobile mode returns a full-screen overlay
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          >
            <m.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute left-0 top-0 h-full w-80 max-w-[90vw] bg-background border-r border-border shadow-commanding overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-lg space-y-lg">
                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b border-border pb-base">
                  <div className="flex items-center gap-xs">
                    <Filter className="size-5 text-muted-foreground" />
                    <h3 className="font-rajdhani font-bold text-heading-base text-card-foreground">
                      Filters
                    </h3>
                    {activeFilterCount > 0 && (
                      <Badge variant="secondary" className="ml-xs bg-nav-events/20 text-nav-events border-nav-events/30">
                        {activeFilterCount}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="p-xs text-muted-foreground hover:text-card-foreground"
                  >
                    <X className="size-5" />
                  </Button>
                </div>
                
                {/* Filter Content */}
                {renderFilterContent()}
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    )
  }

  // Desktop mode
  return (
    <div className={cn("w-80 flex-shrink-0", className)}>
      <div className="sticky top-4 space-y-lg">
        {renderFilterContent()}
      </div>
    </div>
  )
}