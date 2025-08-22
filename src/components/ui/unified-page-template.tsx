'use client'

import React, { ReactNode } from 'react'
import { Badge } from './badge'
import { Button } from './button'
import { Input } from './input'
import { Card, CardContent } from './card'
import { 
  DropdownBars3Icon, 
  DropdownBars3IconContent, 
  DropdownBars3IconItem, 
  DropdownBars3IconTrigger 
} from './dropdown-menu'
import { cn } from '@/lib/utils'
import { TrustIndicators } from './trust-indicators'
import { DirectoryStatsGrid } from './directory-stats-grid'
import { ArrowUpIcon, ArrowUpIcon as SortAsc, ChevronDownIcon, ChevronDownIconIcon, ChevronDownIconIcon as ChevronDownIcon, FunnelIcon, FunnelIcon as FunnelIcon, ListBulletIcon, ListBulletIconBulletIcon, MagnifyingGlassIcon, MagnifyingGlassIcon as MagnifyingGlassIcon, QuestionMarkCheckCheckCircleIconIcon, QuestionMarkCheckCheckCircleIconIcon as Grid, RectangleGroupIcon, Squares2X2Icon as CardView, Squares2X2Icon as DenseView } from '@heroicons/react/24/outline'

export interface QuickTab {
  id: string
  label: string
  count?: number
  icon?: React.ComponentType<{ className?: string; weight?: string }>
}

export interface FunnelIconOption {
  id: string
  label: string
  count?: number
  icon?: React.ComponentType<{ className?: string; weight?: string }>
}

export interface FunnelIconSection {
  title: string
  filters: FunnelIconOption[]
  selectedFunnelIcons: string[]
  onFunnelIconChange: (filterId: string) => void
  multiSelect?: boolean
}

export interface SortOption {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string; weight?: string }>
}

export type ViewMode = 'grid' | 'list' | 'card' | 'dense'

export interface StatItem {
  icon: React.ComponentType<{ className?: string; weight?: string }>
  title: string
  value: string
  subtitle: string
  color: string
}

export interface UnifiedPageTemplateProps {
  // Page identity
  pageTitle: string
  pageSubtitle: string
  pageColor: string // CSS class for theme color (e.g., 'nav-events', 'nav-directory')
  
  // Hero section
  heroContent: ReactNode
  
  // MagnifyingGlassIcon and filtering
  searchQuery: string
  onMagnifyingGlassIconChange: (query: string) => void
  searchPlaceholder?: string
  
  // Quick filter tabs
  quickTabs: QuickTab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  
  // Left sidebar filters
  filterSections?: FunnelIconSection[]
  
  // View controls
  viewMode?: ViewMode
  onViewModeChange?: (mode: ViewMode) => void
  sortOptions?: SortOption[]
  activeSortId?: string
  onSortChange?: (sortId: string) => void
  
  // Stats section
  stats?: StatItem[]
  
  // Content
  children: ReactNode
  
  // Results info
  totalResults: number
  filteredResults: number
  
  // Additional sections
  rightSidebar?: ReactNode
  bottomCTA?: ReactNode
  
  // Styling
  className?: string
}

export function UnifiedPageTemplate({
  pageTitle,
  pageSubtitle,
  pageColor,
  heroContent,
  searchQuery,
  onMagnifyingGlassIconChange,
  searchPlaceholder = "MagnifyingGlassIcon...",
  quickTabs,
  activeTab,
  onTabChange,
  filterSections = [],
  viewMode = 'grid',
  onViewModeChange,
  sortOptions = [],
  activeSortId,
  onSortChange,
  stats = [],
  children,
  totalResults,
  filteredResults,
  rightSidebar,
  bottomCTA,
  className
}: UnifiedPageTemplateProps) {
  
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br from-background via-background to-${pageColor}/5`}>
        {heroContent}
      </section>

      {/* Stats Section */}
      {stats.length > 0 && (
        <section className="py-lg section-bg-muted border-b border-border/50">
          <div className="container mx-auto max-w-site px-md">
            <TrustIndicators />
            <div className="mt-4xl">
              <h3 className="font-rajdhani font-bold text-heading-xl text-foreground mb-xl text-center">
                {pageTitle} Statistics
              </h3>
              <DirectoryStatsGrid stats={stats} />
            </div>
          </div>
        </section>
      )}

      {/* MagnifyingGlassIcon and Quick Tabs Section */}
      <section className={`py-lg section-bg-${pageColor}-neutral border-b border-border/50`}>
        <div className="container mx-auto max-w-site px-md">
          {/* MagnifyingGlassIcon Bar */}
          <div className="flex flex-col sm:flex-row gap-md items-center justify-between mb-lg">
            <div className="relative flex-1 w-full sm:max-w-md">
              <MagnifyingGlassIcon  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={searchPlaceholder}
                className="pl-10 rounded-xs shadow-none border-border/50 focus:border-border"
                value={searchQuery}
                onChange={(e) => onMagnifyingGlassIconChange(e.target.value)}
              />
            </div>
            
            {/* Results Count */}
            <div className="text-body-sm text-muted-foreground">
              Showing {filteredResults} of {totalResults} results
            </div>
          </div>

          {/* Quick FunnelIcon Tabs */}
          <div className="flex flex-wrap gap-xs">
            {quickTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => onTabChange(tab.id)}
                className="gap-xs font-rajdhani shadow-none rounded-xs"
              >
                {tab.icon && React.createElement(tab.icon, { 
                  weight: "bold", 
                  className: "size-3" 
                })}
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
      </section>

      {/* Main Content Section */}
      <section className="py-xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="flex flex-col lg:flex-row gap-xl">
            
            {/* Left Sidebar FunnelIcons */}
            {filterSections.length > 0 && (
              <aside className="w-full lg:w-80 shrink-0">
                <div className="sticky top-6">
                  <Card className="mica shadow-present">
                    <CardContent className="p-lg">
                      <div className="flex items-center gap-xs mb-lg">
                        <FunnelIcon  className="h-4 w-4 text-muted-foreground" />
                        <h3 className="font-rajdhani font-semibold text-heading-sm text-card-foreground">
                          FunnelIcons
                        </h3>
                      </div>
                      {filterSections.map((section, index) => (
                        <div key={index} className="space-y-sm">
                          <h4 className="font-rajdhani font-semibold text-body-sm text-card-foreground uppercase tracking-wider">
                            {section.title}
                          </h4>
                          <div className="space-y-xs">
                            {section.filters.map((filter) => (
                              <Button
                                key={filter.id}
                                variant={section.selectedFunnelIcons.includes(filter.id) ? "default" : "ghost"}
                                size="sm"
                                onClick={() => section.onFunnelIconChange(filter.id)}
                                className="w-full justify-between text-body-xs font-rajdhani shadow-none rounded-xs h-8"
                              >
                                <div className="flex items-center gap-xs">
                                  {filter.icon && React.createElement(filter.icon, { 
                                    weight: "bold", 
                                    className: "size-3" 
                                  })}
                                  <span>{filter.label}</span>
                                </div>
                                {filter.count && (
                                  <Badge variant="outline" size="sm">
                                    {filter.count}
                                  </Badge>
                                )}
                              </Button>
                            ))}
                          </div>
                          {index < filterSections.length - 1 && (
                            <div className="border-t border-border/30 pt-md mt-md" />
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* View Controls */}
              {(onViewModeChange || sortOptions.length > 0) && (
                <div className="flex items-center justify-between mb-lg">
                  <div className="flex items-center gap-xs">
                    <span className="text-body-sm text-muted-foreground font-rajdhani font-semibold">
                      View:
                    </span>
                    
                    {/* View Mode Toggle */}
                    {onViewModeChange && (
                      <div className="flex rounded-xs overflow-hidden border border-border shadow-none">
                        <Button
                          variant={viewMode === 'dense' ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => onViewModeChange('dense')}
                          className="rounded-none border-none shadow-none"
                          title="Dense Grid - Maximum items"
                        >
                          <ListBulletIcon  className="size-4" />
                        </Button>
                        <Button
                          variant={viewMode === 'grid' ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => onViewModeChange('grid')}
                          className="rounded-none border-none shadow-none"
                          title="Standard Grid"
                        >
                          <Squares2X2Icon  className="size-4" />
                        </Button>
                        <Button
                          variant={viewMode === 'card' ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => onViewModeChange('card')}
                          className="rounded-none border-none shadow-none"
                          title="Large Cards"
                        >
                          <RectangleGroupIcon  className="size-4" />
                        </Button>
                        <Button
                          variant={viewMode === 'list' ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => onViewModeChange('list')}
                          className="rounded-none border-none shadow-none"
                          title="ListBulletIcon View"
                        >
                          <ListBulletIcon  className="size-4" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Sort Dropdown */}
                  {sortOptions.length > 0 && onSortChange && (
                    <DropdownBars3Icon>
                      <DropdownBars3IconTrigger asChild>
                        <Button variant="outline" className="gap-xs shadow-none rounded-xs">
                          <SortAsc  className="size-4" />
                          Sort by {sortOptions.find(s => s.id === activeSortId)?.label || 'Default'}
                          <ChevronDownIcon  className="size-3" />
                        </Button>
                      </DropdownBars3IconTrigger>
                      <DropdownBars3IconContent align="end">
                        {sortOptions.map((option) => (
                          <DropdownBars3IconItem key={option.id} onClick={() => onSortChange(option.id)}>
                            {option.icon && React.createElement(option.icon, { className: "size-4 mr-xs" })}
                            {option.label}
                          </DropdownBars3IconItem>
                        ))}
                      </DropdownBars3IconContent>
                    </DropdownBars3Icon>
                  )}
                </div>
              )}

              {/* Content Area */}
              <div className="mb-4xl">
                {children}
              </div>
            </main>

            {/* Right Sidebar */}
            {rightSidebar && (
              <aside className="w-full lg:w-80 shrink-0">
                <div className="sticky top-6">
                  {rightSidebar}
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      {bottomCTA && (
        <section className="py-4xl bg-muted/30 border-t border-border/50">
          <div className="container mx-auto max-w-site px-md">
            {bottomCTA}
          </div>
        </section>
      )}
    </div>
  )
}