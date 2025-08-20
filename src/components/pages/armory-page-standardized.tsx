'use client'

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
import { usePageFilters } from '@/hooks/usePageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { 
  TicketIcon as Ticket,
  ShieldCheckIcon as Shield, 
  BookOpenIcon as BookOpen, 
  CursorArrowRaysIcon as Target, 
  StarIcon as Star, 
  PlusIcon as Plus, 
  ArrowRightIcon as ArrowRight, 
  ChevronRightIcon as CaretRight, 
  EyeIcon as Eye, 
  DocumentTextIcon as FileText, 
  ScaleIcon as Scales, 
  WrenchScrewdriverIcon as Wrench, 
  TrophyIcon as Trophy,
  HeartIcon as Heart, 
  ArrowTrendingUpIcon as TrendUp, 
  ClockIcon as Clock, 
  UsersIcon as Users,
  MagnifyingGlassIcon as Search,
  FunnelIcon as Filter,
  Bars3Icon as Menu,
  XMarkIcon as X,
  CurrencyDollarIcon as CurrencyDollar
} from '@heroicons/react/24/outline'

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
    featured: true,
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
    featured: true,
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
    icon: FileText,
    iconColor: "text-nav-armory",
    iconBgColor: "bg-nav-armory/20",
    title: "New Legal Guide Published",
    description: "Idaho Gun Laws: Complete 2025 Guide now available",
    timeAgo: "2h ago"
  },
  {
    icon: Shield,
    iconColor: "text-rusty-orange",
    iconBgColor: "bg-rusty-orange/20",
    title: "Equipment Review Updated",
    description: "Best Concealed Carry Firearms guide refreshed with new models",
    timeAgo: "4h ago"
  },
  {
    icon: Users,
    iconColor: "text-sagebrush-green",
    iconBgColor: "bg-sagebrush-green/20",
    title: "Community Contribution",
    description: "15 new user reviews added to equipment database",
    timeAgo: "6h ago"
  }
]

// Armory category stats
const armoryCategoryStats = [
  { icon: Scales, title: "Legal Guides", value: "24", subtitle: "Idaho laws", color: "text-nav-armory" },
  { icon: Shield, title: "Equipment Reviews", value: "156", subtitle: "Tested gear", color: "text-nav-armory" },
  { icon: BookOpen, title: "Technical Guides", value: "89", subtitle: "How-to articles", color: "text-nav-armory" },
  { icon: Trophy, title: "Buyer's Guides", value: "45", subtitle: "Purchase advice", color: "text-nav-armory" },
  { icon: Users, title: "User Reviews", value: "1,234", subtitle: "Community input", color: "text-nav-armory" },
  { icon: TrendUp, title: "Monthly Views", value: "45K", subtitle: "Growing readership", color: "text-nav-armory" }
]

export function ArmoryPageStandardized() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)

  // Modern filter system
  const {
    filters,
    filteredItems,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    handleFilterChange,
    handleClearSection,
    handleClearAll
  } = usePageFilters({
    items: armoryArticles,
    searchFilter: (article, query) => {
      const searchTerms = query.toLowerCase()
      return (
        article.title.toLowerCase().includes(searchTerms) ||
        article.excerpt.toLowerCase().includes(searchTerms) ||
        article.category.toLowerCase().includes(searchTerms) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerms))
      )
    },
    categoryFilters: {
      category: (article, selectedCategories) => 
        selectedCategories.includes(article.category.toLowerCase()),
      readTime: (article, selectedTimes) => {
        if (selectedTimes.includes('quick')) return article.readTime <= 5
        if (selectedTimes.includes('medium')) return article.readTime > 5 && article.readTime <= 10
        if (selectedTimes.includes('long')) return article.readTime > 10
        return true
      },
      featured: (article, selectedValues) => 
        selectedValues.includes('featured') ? article.featured : true
    },
    sortFunctions: {
      date: (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
      popularity: (a, b) => b.views - a.views,
      engagement: (a, b) => (b.likes + b.comments) - (a.likes + a.comments),
      alphabetical: (a, b) => a.title.localeCompare(b.title)
    },
    initialSortBy: 'date'
  })

  // Modern filter sidebar configuration
  const filterSections = [
    {
      id: 'category',
      title: 'Category',
      maxVisible: 6,
      collapsible: false,
      options: [
        { id: 'legal', label: 'Legal & Compliance', icon: Scales, count: armoryArticles.filter(a => a.category === 'Legal').length, color: 'text-nav-armory' },
        { id: 'reviews', label: 'Equipment Reviews', icon: Shield, count: armoryArticles.filter(a => a.category === 'Reviews').length, color: 'text-nav-armory' },
        { id: 'technical', label: 'Technical Guides', icon: Wrench, count: armoryArticles.filter(a => a.category === 'Technical').length, color: 'text-nav-armory' },
        { id: 'safety', label: 'Safety Training', icon: Target, count: armoryArticles.filter(a => a.category === 'Safety').length, color: 'text-nav-armory' },
        { id: 'maintenance', label: 'Maintenance', icon: Wrench, count: armoryArticles.filter(a => a.category === 'Maintenance').length, color: 'text-nav-armory' }
      ]
    },
    {
      id: 'readTime',
      title: 'Read Time',
      maxVisible: 3,
      collapsible: false,
      options: [
        { id: 'quick', label: '5 min or less', icon: Clock, count: armoryArticles.filter(a => a.readTime <= 5).length },
        { id: 'medium', label: '6-10 minutes', icon: Clock, count: armoryArticles.filter(a => a.readTime > 5 && a.readTime <= 10).length },
        { id: 'long', label: '10+ minutes', icon: Clock, count: armoryArticles.filter(a => a.readTime > 10).length }
      ]
    },
    {
      id: 'featured',
      title: 'Content Type',
      maxVisible: 2,
      collapsible: false,
      options: [
        { id: 'featured', label: 'Featured Articles', icon: Star, count: armoryArticles.filter(a => a.featured).length, color: 'text-rusty-orange' }
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
          <CaretRight className="h-4 w-4" />
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
          <Scales className="h-4 w-4 mr-xs" />
          Legal Guides
        </Badge>
        <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
          <Shield className="h-4 w-4 mr-xs" />
          Equipment Reviews
        </Badge>
        <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
          <BookOpen className="h-4 w-4 mr-xs" />
          Technical Guides
        </Badge>
      </div>
      
      <p className="text-body text-white/70 max-w-xl lg:max-w-2xl leading-relaxed">
        Your comprehensive resource for Idaho firearms information. From legal guides and equipment reviews to technical articles and buyer's guides.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-base">
        <Button size="lg" className="bg-nav-armory text-white hover:bg-white hover:text-nav-armory font-rajdhani font-bold">
          <Plus className="h-4 w-4 mr-xs" />
          Submit Article
        </Button>
        <Button variant="outline" size="lg" className="border-border text-white hover:bg-card hover:text-nav-armory">
          Browse Guides
        </Button>
      </div>
    </>
  )

  const heroRightContent = armoryArticles.find(a => a.featured) && (
    <Card className="mica-card shadow-present hover:shadow-elevated transition-all duration-300 h-auto min-h-[280px] lg:min-h-[320px]">
      <CardHeader>
        <Badge className="bg-nav-armory/20 text-nav-armory border-nav-armory/30 mb-sm">
          <Star className="h-3 w-3 mr-xs" />
          Featured
        </Badge>
        <h3 className="font-rajdhani font-bold text-heading-sm text-card-foreground line-clamp-2">
          {armoryArticles[0].title}
        </h3>
        <div className="flex items-center gap-sm text-body-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{armoryArticles[0].readTime} min read</span>
          <Eye className="h-3 w-3" />
          <span>{armoryArticles[0].views.toLocaleString()} views</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-body-sm text-muted-foreground line-clamp-3 mb-base">
          {armoryArticles[0].excerpt}
        </p>
        <div className="flex flex-wrap gap-xs mb-base">
          {armoryArticles[0].tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          className="w-full bg-nav-armory text-white hover:bg-nav-armory/90 font-rajdhani font-bold"
        >
          Read Article
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-nav-armory via-nav-armory/90 to-nav-armory/80 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="hero-grid-layout">
              {/* Hero Left Content */}
              <div className="h-full flex flex-col justify-center space-y-lg py-md">
                {heroLeftContent}
              </div>
              
              {/* Hero Right Content */}
              <div className="h-full flex flex-col justify-center">
                {heroRightContent}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full px-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl">
          <div className="flex gap-2xl max-w-[1920px] mx-auto">
            
            {/* Left Sidebar - Modern Filters (Desktop) */}
            <aside className="hidden lg:block">
              <ModernFilterSidebar
                sections={filterSections}
                selectedFilters={filters.selectedFilters}
                onFilterChange={handleFilterChange}
                onClearSection={handleClearSection}
                onClearAll={handleClearAll}
                totalResults={filters.totalResults}
                filteredResults={filters.filteredResults}
              />
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
              {/* Results Header with Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base sm:gap-xl mb-xl sm:mb-2xl lg:mb-3xl">
                <div>
                  <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Article' : 'Articles'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    Idaho firearms knowledge and expertise
                  </p>
                </div>
                
                {/* Search and Filter Controls */}
                <div className="flex flex-col sm:flex-row gap-base sm:gap-base">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full sm:w-80"
                    />
                  </div>
                  
                  {/* Mobile Filter Toggle */}
                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="lg:hidden flex items-center gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                    {Object.values(filters.selectedFilters).flat().length > 0 && (
                      <Badge variant="secondary" className="ml-1 bg-nav-armory/20 text-nav-armory">
                        {Object.values(filters.selectedFilters).flat().length}
                      </Badge>
                    )}
                  </Button>
                </div>
              </div>

              {/* Article Grid */}
              <div className="space-y-xl">
                <BlogList 
                  articles={filteredItems.map(article => ({
                    ...article,
                    sectionPath: "/armory"
                  }))}
                  variant="grid"
                />
              </div>
            </main>
          </div>
        </div>
      </div>

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
                <BookOpen className="h-4 w-4 mr-xs" />
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
                variant="default"
                size="lg"
                className="bg-nav-armory hover:bg-nav-armory/90 text-white border-0 hover:text-white"
              >
                <Plus className="h-4 w-4 mr-xs" />
                Submit Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}