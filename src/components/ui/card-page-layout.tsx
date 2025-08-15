'use client'

import React, { ReactNode } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Badge } from './badge'
import { Card, CardContent } from './card'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './dropdown-menu'
import { cn } from '@/lib/utils'
import { 
  Search, 
  Filter,
  Grid3X3 as Grid,
  List,
  SquaresFour as CardView,
  SortAscending as SortAsc,
  CaretDown as ChevronDown
} from '@phosphor-icons/react'

export interface FilterOption {
  id: string
  label: string
  count?: number
  icon?: React.ComponentType<{ className?: string; weight?: string }>
}

export interface QuickTab {
  id: string
  label: string
  count?: number
  icon?: React.ComponentType<{ className?: string; weight?: string }>
}

export interface SortOption {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string; weight?: string }>
}

export type ViewMode = 'grid' | 'list' | 'card'

export interface CardPageLayoutProps {
  // Page identity
  pageTitle: string
  pageSubtitle: string
  pageColor: string // CSS class for theme color (e.g., 'nav-events', 'nav-directory')
  
  // Hero section
  heroContent: ReactNode
  
  // Search and filtering
  searchQuery: string
  onSearchChange: (query: string) => void
  searchPlaceholder?: string
  
  // Quick filter tabs
  quickTabs: QuickTab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  
  // Left sidebar filters
  filterSections: Array<{
    title: string
    filters: FilterOption[]
    selectedFilters: string[]
    onFilterChange: (filterId: string) => void
    multiSelect?: boolean
  }>
  
  // View controls
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  sortOptions: SortOption[]
  activeSortId: string
  onSortChange: (sortId: string) => void
  
  // Content
  children: ReactNode
  
  // Results info
  totalResults: number
  filteredResults: number
  
  // Additional sections
  statsSection?: ReactNode
  ctaSection?: ReactNode
  
  // Styling
  className?: string
}

export function CardPageLayout({
  pageTitle,
  pageSubtitle,
  pageColor,
  heroContent,
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Search...",
  quickTabs,
  activeTab,
  onTabChange,
  filterSections,
  viewMode,
  onViewModeChange,
  sortOptions,
  activeSortId,
  onSortChange,
  children,
  totalResults,
  filteredResults,
  statsSection,
  ctaSection,
  className
}: CardPageLayoutProps) {

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-${pageColor}-hero px-md py-lg`}>
        {heroContent}
      </section>

      {/* Search and Quick Tabs Section */}
      <section className={`py-lg section-bg-${pageColor}-neutral border-b border-border/50`}>
        <div className="container mx-auto max-w-site px-md">
          {/* Search Bar */}
          <div className="mb-lg">
            <div className="relative max-w-2xl">
              <Search weight="bold" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={searchPlaceholder}
                className="pl-10 h-12 text-body-base shadow-elevated"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* Quick Filter Tabs */}
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
      <section className="py-4xl">
        <div className="container mx-auto max-w-7xl px-md">
          <div className="flex gap-xl">
            
            {/* Left Sidebar - Filters */}
            <aside className="w-80 flex-shrink-0 hidden lg:block">
              <div className="sticky top-4 space-y-lg">
                <Card className="mica shadow-present rounded-xs">
                  <CardContent className="p-lg">
                    <div className="space-y-lg">
                      <div className="flex items-center gap-xs">
                        <Filter weight="bold" className="size-4 text-muted-foreground" />
                        <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground">
                          Filters
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
                                variant={section.selectedFilters.includes(filter.id) ? "default" : "ghost"}
                                size="sm"
                                onClick={() => section.onFilterChange(filter.id)}
                                className="w-full justify-between text-body-xs font-rajdhani shadow-none rounded-xs h-8"
                              >
                                <div className="flex items-center gap-xs">
                                  {filter.icon && React.createElement(filter.icon, { 
                                    weight: "bold", 
                                    className: "size-3" 
                                  })}
                                  {filter.label}
                                </div>
                                {filter.count && (
                                  <Badge variant="secondary" size="sm">
                                    {filter.count}
                                  </Badge>
                                )}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Results Header with Controls */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-lg mb-2xl">
                <div>
                  <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                    {filteredResults} {filteredResults === 1 ? 'Result' : 'Results'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredResults !== totalResults && `Filtered from ${totalResults} total • `}
                    {searchQuery && `Search: "${searchQuery}"`}
                  </p>
                </div>
                
                {/* View Controls */}
                <div className="flex items-center gap-sm">
                  {/* View Mode Toggle */}
                  <div className="flex items-center border rounded-xs">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => onViewModeChange('grid')}
                      className="rounded-none border-none shadow-none"
                    >
                      <Grid weight="bold" className="size-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'card' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => onViewModeChange('card')}
                      className="rounded-none border-none shadow-none"
                    >
                      <CardView weight="bold" className="size-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => onViewModeChange('list')}
                      className="rounded-none border-none shadow-none"
                    >
                      <List weight="bold" className="size-4" />
                    </Button>
                  </div>

                  {/* Sort Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-xs shadow-none rounded-xs">
                        <SortAsc weight="bold" className="size-4" />
                        Sort by {sortOptions.find(s => s.id === activeSortId)?.label || 'Default'}
                        <ChevronDown weight="bold" className="size-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {sortOptions.map((option) => (
                        <DropdownMenuItem key={option.id} onClick={() => onSortChange(option.id)}>
                          {option.icon && React.createElement(option.icon, { className: "size-4 mr-xs" })}
                          {option.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Card Grid/List Content */}
              <div className="mb-4xl">
                {children}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {statsSection && (
        <section className={`py-xl section-bg-${pageColor}-cool section-skew-subtle`}>
          <div className="container mx-auto max-w-site px-md">
            {statsSection}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {ctaSection && (
        <section className="py-4xl section-bg-sharp">
          <div className="container mx-auto max-w-site px-md">
            {ctaSection}
          </div>
        </section>
      )}
    </div>
  )
}