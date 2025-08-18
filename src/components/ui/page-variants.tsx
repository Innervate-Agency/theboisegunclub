'use client'

import React, { ReactNode } from 'react'
import { UnifiedPageTemplate, UnifiedPageTemplateProps, QuickTab, FunnelIconSection, SortOption, StatItem } from './unified-page-template'
import { TrustIndicators } from './trust-indicators'
import { ContributionCTA } from './contribution-cta'
import { ChartBarIconFeedCard } from './activity-feed-card'
import { JoinMovementCTA } from './join-movement-cta'

// Common interface for all page variants
interface PageVariantBaseProps {
  searchQuery: string
  onMagnifyingGlassIconChange: (query: string) => void
  quickTabs: QuickTab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  children: ReactNode
  totalResults: number
  filteredResults: number
}

// Directory Page Variant
interface DirectoryPageVariantProps extends PageVariantBaseProps {
  heroContent: ReactNode
  filterSections?: FunnelIconSection[]
  viewMode?: 'grid' | 'list' | 'card' | 'dense'
  onViewModeChange?: (mode: 'grid' | 'list' | 'card' | 'dense') => void
  sortOptions?: SortOption[]
  activeSortId?: string
  onSortChange?: (sortId: string) => void
  stats?: StatItem[]
  activityFeed?: any[]
}

export function DirectoryPageVariant({
  heroContent,
  searchQuery,
  onMagnifyingGlassIconChange,
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
  activityFeed = []
}: DirectoryPageVariantProps) {
  const bottomCTA = (
    <div className="space-y-4xl">
      {/* ChartBarIcon Feed Section */}
      {activityFeed.length > 0 && (
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Updates</h3>
            <div className="space-y-base">
              {activityFeed.map((activity, index) => (
                <ChartBarIconFeedCard key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <ContributionCTA />
      
      {/* Join Movement CTA */}
      <JoinMovementCTA />
    </div>
  )

  return (
    <UnifiedPageTemplate
      pageTitle="Directory"
      pageSubtitle="Idaho Firearms Business Directory"
      pageColor="nav-directory"
      heroContent={heroContent}
      searchQuery={searchQuery}
      onMagnifyingGlassIconChange={onMagnifyingGlassIconChange}
      searchPlaceholder="MagnifyingGlassIcon businesses, locations, or services..."
      quickTabs={quickTabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      filterSections={filterSections}
      viewMode={viewMode}
      onViewModeChange={onViewModeChange}
      sortOptions={sortOptions}
      activeSortId={activeSortId}
      onSortChange={onSortChange}
      stats={stats}
      totalResults={totalResults}
      filteredResults={filteredResults}
      bottomCTA={bottomCTA}
    >
      {children}
    </UnifiedPageTemplate>
  )
}

// Events Page Variant
interface EventsPageVariantProps extends PageVariantBaseProps {
  heroContent: ReactNode
  filterSections?: FunnelIconSection[]
  viewMode?: 'grid' | 'list' | 'card' | 'dense'
  onViewModeChange?: (mode: 'grid' | 'list' | 'card' | 'dense') => void
  sortOptions?: SortOption[]
  activeSortId?: string
  onSortChange?: (sortId: string) => void
  stats?: StatItem[]
  activityFeed?: any[]
}

export function EventsPageVariant({
  heroContent,
  searchQuery,
  onMagnifyingGlassIconChange,
  quickTabs,
  activeTab,
  onTabChange,
  filterSections = [],
  viewMode = 'card',
  onViewModeChange,
  sortOptions = [],
  activeSortId,
  onSortChange,
  stats = [],
  children,
  totalResults,
  filteredResults,
  activityFeed = []
}: EventsPageVariantProps) {
  const bottomCTA = (
    <div className="space-y-4xl">
      {/* ChartBarIcon Feed Section */}
      {activityFeed.length > 0 && (
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Event Updates</h3>
            <div className="space-y-base">
              {activityFeed.map((activity, index) => (
                <ChartBarIconFeedCard key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <ContributionCTA />
      <JoinMovementCTA />
    </div>
  )

  return (
    <UnifiedPageTemplate
      pageTitle="Events CalendarIcon"
      pageSubtitle="Idaho Firearms Events & Competitions"
      pageColor="nav-events"
      heroContent={heroContent}
      searchQuery={searchQuery}
      onMagnifyingGlassIconChange={onMagnifyingGlassIconChange}
      searchPlaceholder="MagnifyingGlassIcon events, venues, or types..."
      quickTabs={quickTabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      filterSections={filterSections}
      viewMode={viewMode}
      onViewModeChange={onViewModeChange}
      sortOptions={sortOptions}
      activeSortId={activeSortId}
      onSortChange={onSortChange}
      stats={stats}
      totalResults={totalResults}
      filteredResults={filteredResults}
      bottomCTA={bottomCTA}
    >
      {children}
    </UnifiedPageTemplate>
  )
}

// Training Page Variant
interface TrainingPageVariantProps extends PageVariantBaseProps {
  heroContent: ReactNode
  filterSections?: FunnelIconSection[]
  viewMode?: 'grid' | 'list' | 'card' | 'dense'
  onViewModeChange?: (mode: 'grid' | 'list' | 'card' | 'dense') => void
  sortOptions?: SortOption[]
  activeSortId?: string
  onSortChange?: (sortId: string) => void
  stats?: StatItem[]
  activityFeed?: any[]
}

export function TrainingPageVariant({
  heroContent,
  searchQuery,
  onMagnifyingGlassIconChange,
  quickTabs,
  activeTab,
  onTabChange,
  filterSections = [],
  viewMode = 'card',
  onViewModeChange,
  sortOptions = [],
  activeSortId,
  onSortChange,
  stats = [],
  children,
  totalResults,
  filteredResults,
  activityFeed = []
}: TrainingPageVariantProps) {
  const bottomCTA = (
    <div className="space-y-4xl">
      {/* ChartBarIcon Feed Section */}
      {activityFeed.length > 0 && (
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Training Updates</h3>
            <div className="space-y-base">
              {activityFeed.map((activity, index) => (
                <ChartBarIconFeedCard key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <ContributionCTA />
      
      {/* Instructor Spotlight */}
      <div className="section-skew-down bg-gradient-to-br from-nav-training/10 to-nav-training/5 py-3xl">
        <div className="text-center space-y-base">
          <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
            Certified Idaho Instructors
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All training programs are led by certified instructors with years of experience. 
            From basic safety to advanced tactical training, learn from the best in Idaho.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <UnifiedPageTemplate
      pageTitle="Training"
      pageSubtitle="Treasure Valley Firearms Training"
      pageColor="nav-training"
      heroContent={heroContent}
      searchQuery={searchQuery}
      onMagnifyingGlassIconChange={onMagnifyingGlassIconChange}
      searchPlaceholder="MagnifyingGlassIcon training programs, instructors, or locations..."
      quickTabs={quickTabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      filterSections={filterSections}
      viewMode={viewMode}
      onViewModeChange={onViewModeChange}
      sortOptions={sortOptions}
      activeSortId={activeSortId}
      onSortChange={onSortChange}
      stats={stats}
      totalResults={totalResults}
      filteredResults={filteredResults}
      bottomCTA={bottomCTA}
    >
      {children}
    </UnifiedPageTemplate>
  )
}

// Armory Page Variant (Blog/DocumentTextIcon style)
interface ArmoryPageVariantProps extends PageVariantBaseProps {
  heroContent: ReactNode
  filterSections?: FunnelIconSection[]
  viewMode?: 'grid' | 'list' | 'card' | 'dense'
  onViewModeChange?: (mode: 'grid' | 'list' | 'card' | 'dense') => void
  sortOptions?: SortOption[]
  activeSortId?: string
  onSortChange?: (sortId: string) => void
  stats?: StatItem[]
  activityFeed?: any[]
}

export function ArmoryPageVariant({
  heroContent,
  searchQuery,
  onMagnifyingGlassIconChange,
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
  activityFeed = []
}: ArmoryPageVariantProps) {
  const bottomCTA = (
    <div className="space-y-4xl">
      {/* ChartBarIcon Feed Section */}
      {activityFeed.length > 0 && (
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Updates</h3>
            <div className="space-y-base">
              {activityFeed.map((activity, index) => (
                <ChartBarIconFeedCard key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <ContributionCTA />
      
      {/* Submit Content CTA */}
      <div className="section-skew-down bg-gradient-to-br from-nav-armory/10 to-nav-armory/5 py-3xl">
        <div className="text-center space-y-base">
          <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
            Share Your Knowledge
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have expertise in firearms, equipment, or Idaho gun laws? 
            Submit your article to help the community.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <UnifiedPageTemplate
      pageTitle="The Armory"
      pageSubtitle="Idaho Firearms Knowledge Hub"
      pageColor="nav-armory"
      heroContent={heroContent}
      searchQuery={searchQuery}
      onMagnifyingGlassIconChange={onMagnifyingGlassIconChange}
      searchPlaceholder="MagnifyingGlassIcon articles, guides, or reviews..."
      quickTabs={quickTabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      filterSections={filterSections}
      viewMode={viewMode}
      onViewModeChange={onViewModeChange}
      sortOptions={sortOptions}
      activeSortId={activeSortId}
      onSortChange={onSortChange}
      stats={stats}
      totalResults={totalResults}
      filteredResults={filteredResults}
      bottomCTA={bottomCTA}
    >
      {children}
    </UnifiedPageTemplate>
  )
}

// Marketplace Page Variant
interface MarketplacePageVariantProps extends PageVariantBaseProps {
  heroContent: ReactNode
  filterSections?: FunnelIconSection[]
  viewMode?: 'grid' | 'list' | 'card' | 'dense'
  onViewModeChange?: (mode: 'grid' | 'list' | 'card' | 'dense') => void
  sortOptions?: SortOption[]
  activeSortId?: string
  onSortChange?: (sortId: string) => void
  stats?: StatItem[]
  activityFeed?: any[]
}

export function MarketplacePageVariant({
  heroContent,
  searchQuery,
  onMagnifyingGlassIconChange,
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
  activityFeed = []
}: MarketplacePageVariantProps) {
  const bottomCTA = (
    <div className="space-y-4xl">
      {/* ChartBarIcon Feed Section */}
      {activityFeed.length > 0 && (
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Marketplace Updates</h3>
            <div className="space-y-base">
              {activityFeed.map((activity, index) => (
                <ChartBarIconFeedCard key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <ContributionCTA />
      <JoinMovementCTA />
    </div>
  )

  return (
    <UnifiedPageTemplate
      pageTitle="Marketplace"
      pageSubtitle="Idaho Firearms Marketplace"
      pageColor="nav-marketplace"
      heroContent={heroContent}
      searchQuery={searchQuery}
      onMagnifyingGlassIconChange={onMagnifyingGlassIconChange}
      searchPlaceholder="MagnifyingGlassIcon firearms, accessories, or sellers..."
      quickTabs={quickTabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      filterSections={filterSections}
      viewMode={viewMode}
      onViewModeChange={onViewModeChange}
      sortOptions={sortOptions}
      activeSortId={activeSortId}
      onSortChange={onSortChange}
      stats={stats}
      totalResults={totalResults}
      filteredResults={filteredResults}
      bottomCTA={bottomCTA}
    >
      {children}
    </UnifiedPageTemplate>
  )
}

// Guides Page Variant (Legal/Educational)
interface GuidesPageVariantProps extends PageVariantBaseProps {
  heroContent: ReactNode
  filterSections?: FunnelIconSection[]
  viewMode?: 'grid' | 'list' | 'card' | 'dense'
  onViewModeChange?: (mode: 'grid' | 'list' | 'card' | 'dense') => void
  sortOptions?: SortOption[]
  activeSortId?: string
  onSortChange?: (sortId: string) => void
  stats?: StatItem[]
  activityFeed?: any[]
}

export function GuidesPageVariant({
  heroContent,
  searchQuery,
  onMagnifyingGlassIconChange,
  quickTabs,
  activeTab,
  onTabChange,
  filterSections = [],
  viewMode = 'list',
  onViewModeChange,
  sortOptions = [],
  activeSortId,
  onSortChange,
  stats = [],
  children,
  totalResults,
  filteredResults,
  activityFeed = []
}: GuidesPageVariantProps) {
  const bottomCTA = (
    <div className="space-y-4xl">
      {/* ChartBarIcon Feed Section */}
      {activityFeed.length > 0 && (
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Guide Updates</h3>
            <div className="space-y-base">
              {activityFeed.map((activity, index) => (
                <ChartBarIconFeedCard key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <ContributionCTA />
      
      {/* Legal Disclaimer */}
      <div className="section-skew-down bg-gradient-to-br from-nav-guides/10 to-nav-guides/5 py-3xl">
        <div className="text-center space-y-base">
          <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
            Legal InformationCheckCheckCircleIconIconrmation
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All legal guides are for informational purposes only and do not constitute legal advice. 
            Always consult with a qualified attorney for specific legal questions.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <UnifiedPageTemplate
      pageTitle="Guides"
      pageSubtitle="Idaho Firearms Legal & Safety Guides"
      pageColor="nav-guides"
      heroContent={heroContent}
      searchQuery={searchQuery}
      onMagnifyingGlassIconChange={onMagnifyingGlassIconChange}
      searchPlaceholder="MagnifyingGlassIcon legal guides, safety tips, or topics..."
      quickTabs={quickTabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      filterSections={filterSections}
      viewMode={viewMode}
      onViewModeChange={onViewModeChange}
      sortOptions={sortOptions}
      activeSortId={activeSortId}
      onSortChange={onSortChange}
      stats={stats}
      totalResults={totalResults}
      filteredResults={filteredResults}
      bottomCTA={bottomCTA}
    >
      {children}
    </UnifiedPageTemplate>
  )
}

// HomeIcon Page Variant (Dashboard style)
interface HomeIconPageVariantProps {
  heroContent: ReactNode
  stats?: StatItem[]
  featuredContent?: ReactNode
  recentChartBarIcon?: any[]
  bottomCTA?: ReactNode
}

export function HomeIconPageVariant({
  heroContent,
  stats = [],
  featuredContent,
  recentChartBarIcon = [],
  bottomCTA
}: HomeIconPageVariantProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-slate-blue/5">
        {heroContent}
      </section>

      {/* Stats Section */}
      {stats.length > 0 && (
        <section className="py-lg section-bg-muted border-b border-border/50">
          <div className="container mx-auto max-w-site px-md">
            <TrustIndicators />
            <div className="mt-4xl">
              <h3 className="font-rajdhani font-bold text-heading-xl text-foreground mb-xl text-center">
                Platform Statistics
              </h3>
              {/* Use DirectoryStatsGrid here but need to import it */}
            </div>
          </div>
        </section>
      )}

      {/* Featured Content Section */}
      {featuredContent && (
        <section className="py-xl">
          <div className="container mx-auto max-w-site px-md">
            {featuredContent}
          </div>
        </section>
      )}

      {/* Recent ChartBarIcon Section */}
      {recentChartBarIcon.length > 0 && (
        <section className="py-xl bg-muted/30">
          <div className="container mx-auto max-w-site px-md">
            <h3 className="font-rajdhani font-bold text-heading-xl text-foreground mb-xl text-center">
              Recent ChartBarIcon
            </h3>
            <div className="space-y-base">
              {recentChartBarIcon.map((activity, index) => (
                <ChartBarIconFeedCard key={index} {...activity} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      {bottomCTA && (
        <section className="py-4xl bg-background border-t border-border/50">
          <div className="container mx-auto max-w-site px-md">
            {bottomCTA}
          </div>
        </section>
      )}
    </div>
  )
}