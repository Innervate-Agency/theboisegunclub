'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CardPageLayout } from '@/components/ui/card-page-layout'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { BlogList } from '@/components/ui/blog-article'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { 
  Shield, BookOpen, Target, Star, Plus, ArrowRight, 
  CaretRight, Eye, FileText, Scales, Wrench, Trophy,
  Heart, TrendUp, Clock, Users
} from '@phosphor-icons/react'

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
  // Filter configuration for articles
  const filters = useCardPageFilters({
    items: armoryArticles,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'grid',
    itemsPerPage: 12,
    
    searchFilter: (article, query) => {
      const searchTerms = query.toLowerCase()
      return (
        article.title.toLowerCase().includes(searchTerms) ||
        article.excerpt.toLowerCase().includes(searchTerms) ||
        article.category.toLowerCase().includes(searchTerms) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerms))
      )
    },
    
    tabFilter: (article, activeTab) => {
      switch (activeTab) {
        case 'legal': return article.category === 'Legal'
        case 'reviews': return article.category === 'Reviews'
        case 'technical': return article.category === 'Technical'
        case 'featured': return article.featured
        default: return true
      }
    },
    
    customFilters: {
      category: (article, selectedCategories) => 
        selectedCategories.includes(article.category.toLowerCase()),
      readTime: (article, selectedTimes) => {
        if (selectedTimes.includes('quick')) return article.readTime <= 5
        if (selectedTimes.includes('medium')) return article.readTime > 5 && article.readTime <= 10
        if (selectedTimes.includes('long')) return article.readTime > 10
        return true
      }
    },
    
    sortFunctions: {
      date: (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
      popularity: (a, b) => b.views - a.views,
      engagement: (a, b) => (b.likes + b.comments) - (a.likes + a.comments),
      alphabetical: (a, b) => a.title.localeCompare(b.title)
    }
  })

  // Hero content
  const heroContent = (
    <div className="relative">
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side */}
          <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
            <div className="flex items-center gap-base">
              <div className="bg-card/10 p-base rounded-xs border border-border">
                <Shield weight="bold" className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-base">
                <div className="flex items-center gap-xs text-sm text-white/60">
                  <span>Home</span>
                  <CaretRight className="h-4 w-4" />
                  <span className="text-white font-medium">The Armory</span>
                </div>
                <div className="flex flex-wrap gap-xs">
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
                    <Scales weight="bold" className="h-4 w-4 mr-xs" />
                    Legal Guides
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
                    <Shield weight="bold" className="h-4 w-4 mr-xs" />
                    Equipment Reviews
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
                    <BookOpen weight="bold" className="h-4 w-4 mr-xs" />
                    Technical Guides
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-xs">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                The Armory: Idaho Firearms Knowledge Hub
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                Equipment Reviews, Legal Guides & Technical Resources
              </h2>
            </div>
            
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
              Your comprehensive resource for Idaho firearms information. From legal guides and equipment reviews to technical articles and buyer's guides.
            </p>
            
            <div className="flex gap-base">
              <Button size="lg" className="bg-card text-nav-armory hover:bg-crisp-off-white font-rajdhani font-bold" animationType="plus-minus">
                <Plus className="h-4 w-4 mr-xs" />
                Submit Article
              </Button>
              <Button variant="outline" size="lg" className="border-border text-white hover:bg-card hover:text-nav-armory" animationType="arrow">
                Browse Guides
              </Button>
            </div>
          </div>

          {/* Featured Article Card - Right side */}
          <div className="lg:col-span-1 py-md min-h-[400px]">
            <div className="relative h-full">
              {armoryArticles.find(a => a.featured) && (
                <Card className="mica shadow-present hover:shadow-elevated transition-all duration-300 h-full">
                  <CardHeader>
                    <Badge className="bg-nav-armory/20 text-nav-armory border-nav-armory/30 mb-sm">
                      <Star weight="fill" className="h-3 w-3 mr-xs" />
                      Featured
                    </Badge>
                    <h3 className="font-rajdhani font-bold text-heading-sm text-card-foreground line-clamp-2">
                      {armoryArticles[0].title}
                    </h3>
                    <div className="flex items-center gap-sm text-body-xs text-muted-foreground">
                      <Clock weight="bold" className="h-3 w-3" />
                      <span>{armoryArticles[0].readTime} min read</span>
                      <Eye weight="bold" className="h-3 w-3" />
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
                      animationType="arrow"
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <CardPageLayout
      pageTitle="The Armory"
      pageSubtitle="Idaho Firearms Knowledge Hub"
      pageColor="armory"
      heroContent={heroContent}
      searchQuery={filters.searchQuery}
      onSearchChange={filters.setSearchQuery}
      searchPlaceholder="Search articles, guides, or reviews..."
      
      quickTabs={[
        { id: 'all', label: 'All Articles', count: armoryArticles.length, icon: BookOpen },
        { id: 'legal', label: 'Legal', count: armoryArticles.filter(a => a.category === 'Legal').length, icon: Scales },
        { id: 'reviews', label: 'Reviews', count: armoryArticles.filter(a => a.category === 'Reviews').length, icon: Shield },
        { id: 'technical', label: 'Technical', count: armoryArticles.filter(a => a.category === 'Technical').length, icon: Wrench },
        { id: 'featured', label: 'Featured', count: armoryArticles.filter(a => a.featured).length }
      ]}
      activeTab={filters.activeTab}
      onTabChange={filters.setActiveTab}
      
      filterSections={[
        {
          title: 'Category',
          filters: [
            { id: 'legal', label: 'Legal & Compliance', icon: Scales, count: armoryArticles.filter(a => a.category === 'Legal').length },
            { id: 'reviews', label: 'Equipment Reviews', icon: Shield, count: armoryArticles.filter(a => a.category === 'Reviews').length },
            { id: 'technical', label: 'Technical Guides', icon: Wrench, count: armoryArticles.filter(a => a.category === 'Technical').length }
          ],
          selectedFilters: filters.selectedFilters.category || [],
          onFilterChange: (filterId) => filters.updateFilters('category', filterId),
          multiSelect: true
        },
        {
          title: 'Read Time',
          filters: [
            { id: 'quick', label: '5 min or less', icon: Clock, count: armoryArticles.filter(a => a.readTime <= 5).length },
            { id: 'medium', label: '5-10 min', icon: Clock, count: armoryArticles.filter(a => a.readTime > 5 && a.readTime <= 10).length },
            { id: 'long', label: '10+ min', icon: Clock, count: armoryArticles.filter(a => a.readTime > 10).length }
          ],
          selectedFilters: filters.selectedFilters.readTime || [],
          onFilterChange: (filterId) => filters.updateFilters('readTime', filterId),
          multiSelect: true
        }
      ]}
      
      viewMode={filters.viewMode}
      onViewModeChange={filters.setViewMode}
      sortOptions={[
        { id: 'date', label: 'Latest', icon: Clock },
        { id: 'popularity', label: 'Most Viewed', icon: Eye },
        { id: 'engagement', label: 'Most Engaged', icon: Heart },
        { id: 'alphabetical', label: 'A-Z', icon: BookOpen }
      ]}
      activeSortId={filters.sortBy}
      onSortChange={filters.setSortBy}
      
      totalResults={filters.totalResults}
      filteredResults={filters.filteredResults}
      
      statsSection={
        <>
          <TrustIndicators />
          <div className="mt-4xl">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Content Categories</h3>
            <DirectoryStatsGrid stats={armoryCategoryStats} />
          </div>
        </>
      }
      ctaSection={
        <div className="space-y-4xl">
          {/* Activity Feed Section */}
          <div className="section-skew-up bg-card/50 py-3xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Updates</h3>
              <div className="space-y-base">
                {armoryActivityFeedData.map((activity, index) => (
                  <ActivityFeedCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <ContributionCTA />
          
          {/* Submit Content CTA */}
          <div className="section-skew-down bg-gradient-to-br from-nav-armory/10 to-nav-armory/5 py-3xl">
            <div className="text-center space-y-base">
              <Badge className="bg-nav-armory/20 text-nav-armory border-nav-armory/30">
                <BookOpen weight="bold" className="h-4 w-4 mr-xs" />
                Contribute
              </Badge>
              <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                Share Your Knowledge
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have expertise in firearms, equipment, or Idaho gun laws? 
                Submit your article to help the community.
              </p>
              <Button 
                className="bg-nav-armory text-white hover:bg-nav-armory/90 font-rajdhani font-bold"
                animationType="arrow"
              >
                <Plus className="h-4 w-4 mr-xs" />
                Submit Article
              </Button>
            </div>
          </div>
        </div>
      }
    >
      <BlogList 
        articles={filters.paginatedItems.map(article => ({
          ...article,
          sectionPath: "/armory"
        }))}
        viewMode={filters.viewMode}
      />
    </CardPageLayout>
  )
}