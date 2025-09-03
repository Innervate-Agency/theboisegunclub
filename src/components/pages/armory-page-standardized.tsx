'use client'

/**
 * ArmoryPageStandardized - Pure Content Component
 * 
 * OPTIMIZED FOR MVP:
 * - Comprehensive Idaho firearms knowledge base and guides
 * - Legal information, safety guides, and technical content
 * - Searchable article system with category filtering
 * - Mobile-first responsive design with clear readability
 * - Professional tactical aesthetic aligned with site design
 */

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { BlogList } from '@/components/ui/blog-article'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { ContentBridgeSection } from '@/components/ui/content-bridge-section'
import { armoryContentBridge } from '@/lib/content-bridge-armory'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { EnhancedPagination } from '@/components/ui/enhanced-pagination'
import { CardSkeleton } from '@/components/ui/card-skeleton'
import { ArrowRightIcon, ArrowTrendingUpIcon, Bars3Icon, BookOpenIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, CurrencyDollarIcon, CursorArrowRaysIcon, DocumentTextIcon, EyeIcon, FunnelIcon, HeartIcon, MagnifyingGlassIcon, PlusIcon, ScaleIcon, ShieldCheckIcon, StarIcon, TicketIcon, TrophyIcon, UsersIcon, WrenchScrewdriverIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Blog articles for The Armory - Idaho firearms content
const armoryArticles = [
  // Legal & Compliance
  {
    id: 'idaho-gun-laws-complete-2025-guide',
    title: "Idaho Gun Laws: Complete 2025 Guide",
    excerpt: "Comprehensive overview of Idaho's firearms laws, including constitutional carry, concealed carry permits, prohibited locations, and recent legislative updates for Idaho residents.",
    category: "Legal",
    author: {
      name: "Legal Team",
      title: "Legal Experts",
      bio: "Idaho firearms law specialists"
    },
    publishDate: "2025-01-15",
    readTime: 12,
    views: 2840,
    likes: 127,
    comments: 23,
    featured: false,
    tags: ["Constitutional Carry", "CCW", "State Laws", "Permits"],
    image: "/images/Fractal/25.webp"
  },
  {
    id: 'federal-vs-state-gun-laws-in-idaho',
    title: "Federal vs. State Gun Laws in Idaho",
    excerpt: "Understanding the interaction between federal firearms regulations and Idaho state law, including areas where federal law takes precedence.",
    category: "Legal",
    author: {
      name: "Legal Team",
      title: "Legal Experts"
    },
    publishDate: "2025-01-10",
    readTime: 8,
    views: 1567,
    likes: 89,
    comments: 15,
    featured: false,
    tags: ["Federal Law", "State Law", "Compliance"],
    image: "/images/Fractal/26.webp"
  },
  
  // Equipment Reviews
  {
    id: 'best-concealed-carry-guns-2025',
    title: "Best Concealed Carry Firearms for Idaho 2025",
    excerpt: "In-depth review of top concealed carry options for Idaho residents, considering local laws, climate, and practical everyday carry scenarios.",
    category: "Reviews",
    author: {
      name: "Mike Johnson",
      title: "Equipment Specialist"
    },
    publishDate: "2025-01-12",
    readTime: 15,
    views: 3421,
    likes: 234,
    comments: 67,
    featured: false,
    tags: ["CCW", "Reviews", "Handguns"],
    image: "/images/Fractal/27.webp"
  },
  {
    id: 'ar-15-vs-ar-10-idaho-hunting',
    title: "AR-15 vs AR-10: Idaho Hunting Applications",
    excerpt: "Comparing modern sporting rifles for Idaho big game hunting, including caliber selection, optics, and legal considerations.",
    category: "Reviews",
    author: {
      name: "Jake Wilson",
      title: "Hunting Guide"
    },
    publishDate: "2025-01-08",
    readTime: 10,
    views: 2156,
    likes: 145,
    comments: 38,
    featured: false,
    tags: ["Hunting", "Rifles", "Reviews"],
    image: "/images/Fractal/28.webp"
  },
  
  // Technical Guides
  {
    id: 'zeroing-rifle-high-altitude',
    title: "Zeroing Your Rifle for Idaho's High Altitude",
    excerpt: "Technical guide on properly zeroing firearms at Idaho's varying elevations, from Treasure Valley to mountain hunting areas.",
    category: "Technical",
    author: {
      name: "Tom Anderson",
      title: "Precision Shooter"
    },
    publishDate: "2025-01-05",
    readTime: 7,
    views: 1234,
    likes: 98,
    comments: 21,
    featured: false,
    tags: ["Zeroing", "Technical", "Rifles"],
    image: "/images/Fractal/29.webp"
  },
  {
    id: 'ammunition-storage-idaho-climate',
    title: "Ammunition Storage in Idaho's Climate",
    excerpt: "Best practices for long-term ammunition storage considering Idaho's dry climate and temperature variations.",
    category: "Technical",
    author: {
      name: "Storage Expert",
      title: "Technical Writer"
    },
    publishDate: "2025-01-03",
    readTime: 6,
    views: 987,
    likes: 67,
    comments: 12,
    featured: false,
    tags: ["Storage", "Ammunition", "Climate"],
    image: "/images/Fractal/30.webp"
  }
]

// Activity feed data for armory
const armoryActivityFeedData = [
  {
    icon: DocumentTextIcon,
    iconColor: "text-nav-armory",
    iconBgColor: "bg-nav-armory/20",
    title: "New Legal Guide Published",
    description: "Idaho Gun Laws: Complete 2025 Guide now available",
    timeAgo: "2h ago"
  },
  {
    icon: ShieldCheckIcon,
    iconColor: "text-rusty-orange",
    iconBgColor: "bg-rusty-orange/20",
    title: "Equipment Review Updated",
    description: "Best Concealed Carry Firearms guide refreshed with new models",
    timeAgo: "4h ago"
  },
  {
    icon: UsersIcon,
    iconColor: "text-sagebrush-green",
    iconBgColor: "bg-sagebrush-green/20",
    title: "Community Contribution",
    description: "15 new user reviews added to equipment database",
    timeAgo: "6h ago"
  }
]

// Armory category stats
const armoryCategoryStats = [
  { icon: ScaleIcon, title: "Legal Guides", value: "24", subtitle: "Idaho laws", color: "text-nav-armory" },
  { icon: ShieldCheckIcon, title: "Equipment Reviews", value: "156", subtitle: "Tested gear", color: "text-nav-armory" },
  { icon: BookOpenIcon, title: "Technical Guides", value: "89", subtitle: "How-to articles", color: "text-nav-armory" },
  { icon: TrophyIcon, title: "Buyer's Guides", value: "45", subtitle: "Purchase advice", color: "text-nav-armory" },
  { icon: UsersIcon, title: "User Reviews", value: "1,234", subtitle: "Community input", color: "text-nav-armory" },
  { icon: ArrowTrendingUpIcon, title: "Monthly Views", value: "45K", subtitle: "Growing readership", color: "text-nav-armory" }
]

export function ArmoryPageStandardized() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)

  // Filter configuration using Events page pattern
  const filters = useCardPageFilters({
    items: armoryArticles,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'grid',
    initialItemsPerPage: 12,
    perPageOptions: [8, 12, 24, 48],
    enableInfiniteScroll: false,
    
    // MagnifyingGlassIcon filter function
    searchFilter: (article, query) => {
      const searchTerms = query.toLowerCase()
      return (
        article.title.toLowerCase().includes(searchTerms) ||
        article.excerpt.toLowerCase().includes(searchTerms) ||
        article.category.toLowerCase().includes(searchTerms) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerms))
      )
    },
    
    // Tab filter function
    tabFilter: (article, activeTab) => {
      switch (activeTab) {
        case 'legal': return article.category === 'Legal'
        case 'reviews': return article.category === 'Reviews'
        case 'technical': return article.category === 'Technical'
        case 'featured': return article.featured
        default: return true
      }
    },
    
    // Custom filters
    customFilters: {
      category: (article, selectedCategories) => {
        if (selectedCategories.length === 0) return true
        return selectedCategories.includes(article.category.toLowerCase())
      },
      readTime: (article, selectedTimes) => {
        if (selectedTimes.length === 0) return true
        if (selectedTimes.includes('quick')) return article.readTime <= 5
        if (selectedTimes.includes('medium')) return article.readTime > 5 && article.readTime <= 10
        if (selectedTimes.includes('long')) return article.readTime > 10
        return true
      },
      featured: (article, selectedValues) => {
        if (selectedValues.length === 0) return true
        return selectedValues.includes('featured') ? article.featured : true
      }
    },
    
    // Sort functions
    sortFunctions: {
      date: (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
      popularity: (a, b) => b.views - a.views,
      engagement: (a, b) => (b.likes + b.comments) - (a.likes + a.comments),
      alphabetical: (a, b) => a.title.localeCompare(b.title)
    }
  })

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

  // Modern filter sidebar configuration
  const filterSections = [
    {
      id: 'category',
      title: 'Category',
      maxVisible: 6,
      collapsible: false,
      options: [
        { id: 'legal', label: 'Legal & Compliance', icon: ScaleIcon, count: armoryArticles.filter(a => a.category === 'Legal').length, color: 'text-nav-armory' },
        { id: 'reviews', label: 'Equipment Reviews', icon: ShieldCheckIcon, count: armoryArticles.filter(a => a.category === 'Reviews').length, color: 'text-nav-armory' },
        { id: 'technical', label: 'Technical Guides', icon: WrenchScrewdriverIcon, count: armoryArticles.filter(a => a.category === 'Technical').length, color: 'text-nav-armory' },
        { id: 'safety', label: 'Safety Training', icon: CursorArrowRaysIcon, count: armoryArticles.filter(a => a.category === 'Safety').length, color: 'text-nav-armory' },
        { id: 'maintenance', label: 'Maintenance', icon: WrenchScrewdriverIcon, count: armoryArticles.filter(a => a.category === 'Maintenance').length, color: 'text-nav-armory' }
      ]
    },
    {
      id: 'readTime',
      title: 'Read Time',
      maxVisible: 3,
      collapsible: false,
      options: [
        { id: 'quick', label: '5 min or less', icon: ClockIcon, count: armoryArticles.filter(a => a.readTime <= 5).length },
        { id: 'medium', label: '6-10 minutes', icon: ClockIcon, count: armoryArticles.filter(a => a.readTime > 5 && a.readTime <= 10).length },
        { id: 'long', label: '10+ minutes', icon: ClockIcon, count: armoryArticles.filter(a => a.readTime > 10).length }
      ]
    },
    {
      id: 'featured',
      title: 'Content Type',
      maxVisible: 2,
      collapsible: false,
      options: [
        { id: 'featured', label: 'Featured Articles', icon: StarIcon, count: armoryArticles.filter(a => a.featured).length, color: 'text-rusty-orange' }
      ]
    }
  ]

  // Hero content sections - clean separation of concerns
  const heroLeftContent = (
    <>
      {/* Breadcrumbs - more breathing room */}
      <div className="mb-lg">
        <div className="flex items-center gap-xs text-sm text-white/60">
          <span>Home</span>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="text-white font-medium">The Armory</span>
        </div>
      </div>

      {/* Title and Subtitle - very tight spacing */}
      <div className="space-y-0">
        <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-none">
          THE ARMORY: IDAHO FIREARMS KNOWLEDGE HUB
        </h1>
        <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-none mt-1">
          equipment reviews, legal guides & technical resources
        </h2>
      </div>

      {/* Badges below title/subtitle */}
      <div className="flex flex-wrap gap-xs">
        <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
          <ScaleIcon className="h-4 w-4 mr-xs" />
          Legal Guides
        </Badge>
        <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
          <ShieldCheckIcon className="h-4 w-4 mr-xs" />
          Equipment Reviews
        </Badge>
        <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
          <BookOpenIcon className="h-4 w-4 mr-xs" />
          Technical Guides
        </Badge>
      </div>
      
      {/* Paragraph moved closer to badges */}
      <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed mt-base">
        Your comprehensive resource for Idaho firearms information. From legal guides and equipment reviews to technical articles and buyer's guides.
      </p>
      
      <div className="flex gap-base">
        <Button className="bg-nav-armory text-white hover:bg-white hover:text-nav-armory font-rajdhani font-bold" animationType="plus-minus">
          <PlusIcon className="h-4 w-4 mr-xs" />
          Submit Article
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/10 font-rajdhani font-bold" animationType="chevron">
          Browse Guides
        </Button>
      </div>
    </>
  )

  const heroRightContent = armoryArticles.find(a => a.featured) && (() => {
    const featuredArticle = armoryArticles.find(a => a.featured)!
    return (
      <Card className="mica-card border-nav-armory/30 shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-armory/20 to-nav-armory/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-armory to-nav-armory"></div>
        
        <CardContent className="p-sm relative z-10">
          <div className="flex items-center justify-between mb-base">
            <Badge className="bg-nav-armory/20 text-nav-armory border-nav-armory/30 font-rajdhani font-bold text-[10px]">
              <StarIcon className="h-3 w-3 mr-xs" />
              FEATURED ARTICLE
            </Badge>
            <div className="flex items-center gap-xs text-xs text-muted-foreground">
              <ShieldCheckIcon className="h-3 w-3 text-nav-armory" />
              <span>Verified</span>
            </div>
          </div>
          
          <div className="space-y-base">
            <div>
              <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight mb-xs">{featuredArticle.title}</h3>
              <div className="flex items-center gap-xs text-xs text-muted-foreground">
                <ClockIcon className="h-3 w-3 text-nav-armory" />
                <span>{featuredArticle.readTime} min read</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {featuredArticle.excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-base border-t border-border">
              <div className="space-y-xs">
                <div className="flex items-center gap-xs">
                  <EyeIcon className="h-3 w-3 text-nav-armory" />
                  <span className="text-xs text-muted-foreground">{featuredArticle.views.toLocaleString()} views</span>
                </div>
              </div>
              <Button 
                className="bg-gradient-to-r from-nav-armory to-nav-armory text-gruvbox-bg-dark hover:from-nav-armory hover:to-nav-armory font-rajdhani font-bold text-xs"
                size="sm"
              >
                READ ARTICLE
                <ArrowRightIcon className="h-3 w-3 ml-xs" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  })()

  // Hero content - matching Events page pattern exactly
  const heroContent = (
    <section className="relative overflow-hidden bg-gradient-armory-hero px-md py-lg">
      {/* Background Elements - matching Events structure */}
      
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side - 2/3 width */}
          <div className="h-full flex flex-col justify-center space-y-mobile-lg sm:space-y-lg py-mobile-md sm:py-md">
            {heroLeftContent}
          </div>
          
          {/* Featured Article Card - Right side - Compact Hero Version */}
          <div className="py-mobile-md sm:py-md">
            <div className="relative">
              {heroRightContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-background">
      {heroContent}
      
      {/* Armory Ticker - TODO: Create armory-specific ticker component */}
      
      {/* Armory Content Section - Unified Layout with cards left, content right */}
      <ContentBridgeSection {...armoryContentBridge} />

      {/* Main Content Area */}
      <section className="py-mobile-2xl sm:py-4xl bg-background/50">
        <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
          <div className="flex flex-col lg:flex-row gap-mobile-lg sm:gap-2xl max-w-[1920px] mx-auto">
            
            {/* Left Sidebar - Filters (Desktop) */}
            <aside className="hidden lg:block">
              <div className="space-y-6">
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
              {/* MagnifyingGlassIcon and Category Controls */}
              <div className="mb-xl space-y-lg">
                {/* MagnifyingGlassIcon Bar */}
                <div className="relative max-w-2xl">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="MagnifyingGlassIcon articles, guides, and reviews..."
                    className="pl-10 h-12 text-body-base shadow-none"
                    value={filters.searchQuery}
                    onChange={(e) => filters.setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Quick Filter Tabs */}
                <div className="flex flex-wrap gap-xs">
                  {[
                    { id: 'all', label: 'All Articles', count: armoryArticles.length, icon: BookOpenIcon },
                    { id: 'legal', label: 'Legal', count: armoryArticles.filter(a => a.category === 'Legal').length, icon: ScaleIcon },
                    { id: 'reviews', label: 'Reviews', count: armoryArticles.filter(a => a.category === 'Reviews').length, icon: ShieldCheckIcon },
                    { id: 'technical', label: 'Technical', count: armoryArticles.filter(a => a.category === 'Technical').length, icon: WrenchScrewdriverIcon },
                    { id: 'featured', label: 'Featured', count: armoryArticles.filter(a => a.featured).length }
                  ].map((tab) => (
                    <Button
                      key={tab.id}
                      variant={filters.activeTab === tab.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => filters.setActiveTab(tab.id)}
                      className="gap-xs font-rajdhani shadow-none rounded-xs"
                    >
                      {tab.icon && React.createElement(tab.icon, { 
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

              {/* Results Header with Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base sm:gap-xl mb-xl sm:mb-2xl lg:mb-3xl">
                <div>
                  <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Article' : 'Articles'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filters.filteredResults !== filters.totalResults && `Filtered from ${filters.totalResults} total • `}
                    {filters.searchQuery && `MagnifyingGlassIcon: "${filters.searchQuery}"`}
                  </p>
                </div>
                
                {/* View Controls */}
                <div className="flex items-center gap-sm sm:gap-base">
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
                      <Badge variant="outline" className="ml-xs bg-nav-armory/20 text-nav-armory border-nav-armory/30 text-xs">
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
                    <option value="popularity">Sort by Views</option>
                    <option value="engagement">Sort by Engagement</option>
                    <option value="alphabetical">Sort A-Z</option>
                  </select>
                </div>
              </div>

              {/* Card Grid/ListBulletIcon Content with Loading State */}
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
                      filters.paginatedItems.map((article, index) => (
                        <BlogList 
                          key={`${article.title}-${index}`}
                          articles={[{
                            ...article,
                            sectionPath: "/armory"
                          }]}
                          variant="card"
                        />
                      ))
                    ) : (
                      <div className="col-span-full">
                        <EmptyState 
                          title="No Articles Found"
                          description="Try adjusting your search terms or filters to find relevant content."
                          onAction={
                            <Button onClick={handleClearAll}>
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

      {/* Bottom Sections */}
      <div className="space-y-4xl mt-4xl">
        {/* Stats Section */}
        <TrustIndicators />
        <div className="container mx-auto px-4">
          <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Content Categories</h3>
          <DirectoryStatsGrid stats={armoryCategoryStats} />
        </div>

        {/* Activity Feed Section */}
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Updates</h3>
              <div className="space-y-base">
                {armoryActivityFeedData.map((activity, index) => (
                  <ActivityFeedCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <ContributionCTA />
        
        {/* Submit Content CTA */}
        <div className="section-skew-down bg-gradient-to-br from-nav-armory/10 to-nav-armory/5 py-3xl">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-base">
              <Badge className="bg-nav-armory/20 text-nav-armory border-nav-armory/30">
                <BookOpenIcon className="h-4 w-4 mr-xs" />
                Contribute
              </Badge>
              <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                Share Your Knowledge
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Have insights about Idaho gun laws, equipment reviews, or technical guides? 
                Share your expertise with the community.
              </p>
              <Button 
                variant="outline" className="bg-nav-armory hover:bg-nav-armory/90 text-white border-0 hover:text-white"
              >
                <PlusIcon className="h-4 w-4 mr-xs" />
                Submit Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}