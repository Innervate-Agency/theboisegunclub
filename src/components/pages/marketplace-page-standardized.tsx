'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MarketplaceDealCard } from '@/components/ui/marketplace-deal-card'
import { CardPageLayout } from '@/components/ui/card-page-layout'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { 
  ShoppingCart, CurrencyDollar, Package, Star, Target, 
  Shield, Storefront, MapPin, Phone, CheckCircle, Crown,
  TrendUp, Lightning, Buildings, CaretRight, ArrowRight
} from '@phosphor-icons/react'

// Marketplace deal data type
interface MarketplaceDeal {
  title: string
  business: string
  location: string
  originalPrice: number
  salePrice: number
  discount: number
  description: string
  category: string
  condition: 'New' | 'Used' | 'Refurbished'
  availability: 'In Stock' | 'Limited' | 'Last Few'
  expiresAt?: string
  rating?: number
  reviewCount?: number
  phone?: string
  isVerified?: boolean
  isFeatured?: boolean
  imageUrl?: string
  slug?: string
  href?: string
  manufacturer?: string
  model?: string
}

// Sample marketplace deals
const marketplaceDeals: MarketplaceDeal[] = [
  {
    title: "Vortex Viper PST Gen II 5-25x50 FFP",
    business: "Sportsman's Warehouse",
    location: "Boise, ID",
    originalPrice: 899,
    salePrice: 649,
    discount: 28,
    description: "Professional-grade precision optic with crystal-clear glass and robust construction. Perfect for long-range shooting and hunting applications.",
    category: "Optics",
    condition: "New",
    availability: "Limited",
    expiresAt: "March 20th",
    rating: 4.8,
    reviewCount: 156,
    phone: "(208) 555-0123",
    isVerified: true,
    isFeatured: true,
    manufacturer: "Vortex",
    model: "Viper PST Gen II"
  },
  {
    title: "Glock 19 Gen 5",
    business: "Valley Gun & Pawn", 
    location: "Caldwell, ID",
    originalPrice: 599,
    salePrice: 549,
    discount: 8,
    description: "9mm, 15+1 capacity, Glock night sights, three magazines included. Excellent condition, barely used.",
    category: "Firearms",
    condition: "Like New",
    availability: "In Stock",
    rating: 4.2,
    reviewCount: 89,
    phone: "(208) 555-0321",
    isVerified: true,
    isFeatured: true,
    manufacturer: "Glock",
    model: "19 Gen 5"
  },
  {
    title: "Federal Premium 9mm 124gr HST",
    business: "Boise Gun Club",
    location: "Boise, ID", 
    originalPrice: 38,
    salePrice: 32,
    discount: 16,
    description: "Law enforcement grade hollow point ammunition. 50 rounds per box, excellent for personal defense.",
    category: "Ammunition",
    condition: "New",
    availability: "In Stock",
    rating: 4.8,
    reviewCount: 234,
    phone: "(208) 555-0123",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Federal",
    model: "Premium HST"
  }
]

export function MarketplacePageStandardized() {
  // Activity feed data for marketplace
  const activityFeedData = [
    {
      icon: CurrencyDollar,
      iconColor: "text-nav-marketplace",
      iconBgColor: "bg-nav-marketplace/20",
      title: "Price Drop Alert",
      description: "Vortex Viper PST Gen II reduced by $100",
      timeAgo: "1h ago"
    },
    {
      icon: Package,
      iconColor: "text-rusty-orange", 
      iconBgColor: "bg-rusty-orange/20",
      title: "New Inventory",
      description: "Valley Gun & Pawn added 12 new firearms",
      timeAgo: "3h ago"
    },
    {
      icon: Star,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20", 
      title: "Popular Item",
      description: "Glock 19 Gen 5 viewed 340 times today",
      timeAgo: "5h ago"
    }
  ]

  // Marketplace category stats
  const marketplaceCategoryStats = [
    { icon: Target, title: "Firearms", value: "84", subtitle: "Available now", color: "text-nav-marketplace" },
    { icon: Package, title: "Ammunition", value: "156", subtitle: "In stock", color: "text-nav-marketplace" },
    { icon: Crown, title: "Optics", value: "67", subtitle: "Premium brands", color: "text-nav-marketplace" },
    { icon: Shield, title: "Accessories", value: "92", subtitle: "Tactical gear", color: "text-nav-marketplace" },
    { icon: Storefront, title: "Dealers", value: "12", subtitle: "Verified partners", color: "text-nav-marketplace" },
    { icon: CheckCircle, title: "Reviews", value: "1.2K", subtitle: "User ratings", color: "text-nav-marketplace" }
  ]

  // Filter configuration
  const filters = useCardPageFilters({
    items: marketplaceDeals,
    initialTab: 'all',
    initialSortBy: 'featured',
    initialViewMode: 'grid',
    itemsPerPage: 12,
    
    searchFilter: (deal, query) => {
      if (!deal) return false
      const searchTerms = query.toLowerCase()
      return (
        deal.title?.toLowerCase().includes(searchTerms) ||
        deal.description?.toLowerCase().includes(searchTerms) ||
        deal.business?.toLowerCase().includes(searchTerms) ||
        deal.category?.toLowerCase().includes(searchTerms) ||
        deal.manufacturer?.toLowerCase().includes(searchTerms) ||
        deal.model?.toLowerCase().includes(searchTerms)
      )
    },
    
    tabFilter: (deal, activeTab) => {
      if (!deal) return false
      switch (activeTab) {
        case 'firearms': return deal.category === 'Firearms'
        case 'ammunition': return deal.category === 'Ammunition'
        case 'optics': return deal.category === 'Optics'
        case 'accessories': return deal.category === 'Accessories'
        case 'featured': return deal.isFeatured || false
        default: return true
      }
    },
    
    customFilters: {
      category: (deal, selectedCategories) => deal && selectedCategories.includes(deal.category?.toLowerCase()),
      condition: (deal, selectedConditions) => deal && selectedConditions.includes(deal.condition?.toLowerCase()),
      price: (deal, selectedPrices) => {
        if (!deal || !deal.salePrice) return false
        if (selectedPrices.includes('under50')) return deal.salePrice < 50
        if (selectedPrices.includes('50-200')) return deal.salePrice >= 50 && deal.salePrice <= 200  
        if (selectedPrices.includes('200-500')) return deal.salePrice >= 200 && deal.salePrice <= 500
        if (selectedPrices.includes('over500')) return deal.salePrice > 500
        return true
      }
    },
    
    // Sort functions
    sortFunctions: {
      featured: (a, b) => {
        // Sort by featured status first, then by discount
        const aFeatured = a.isFeatured ? 1 : 0
        const bFeatured = b.isFeatured ? 1 : 0
        if (bFeatured !== aFeatured) return bFeatured - aFeatured
        return (b.discount || 0) - (a.discount || 0)
      },
      price: (a, b) => (a.salePrice || 0) - (b.salePrice || 0),
      discount: (a, b) => (b.discount || 0) - (a.discount || 0),
      rating: (a, b) => (b.rating || 0) - (a.rating || 0),
      alphabetical: (a, b) => a.title.localeCompare(b.title),
      newest: (a, b) => {
        // For now, sort by featured then by discount as a proxy for "newest"
        const aFeatured = a.isFeatured ? 1 : 0
        const bFeatured = b.isFeatured ? 1 : 0
        if (bFeatured !== aFeatured) return bFeatured - aFeatured
        return (b.discount || 0) - (a.discount || 0)
      }
    }
  })

  // Sample deal for featured card
  const featuredDeal = marketplaceDeals.find(deal => deal.isFeatured) || marketplaceDeals[0]

  // Hero content with marketplace theming - standardized layout
  const heroContent = (
    <div className="relative">
      {/* Floating marketplace elements */}
      <div className="absolute top-8 right-12 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 left-16 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-16 right-20 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto max-w-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
          
          {/* Content - Left side */}
          <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
            {/* Top Header - Icon, Breadcrumbs & Badges Chunk */}
            <div className="flex items-center gap-base">
              <div className="bg-card/10 p-base rounded-xs border border-border">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-base">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-xs text-sm text-white/60">
                  <span>Home</span>
                  <CaretRight className="h-4 w-4" />
                  <span className="text-white font-medium">Marketplace</span>
                </div>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-xs">
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
                    <Storefront className="h-4 w-4 mr-xs" />
                    Local Dealers
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
                    <Shield className="h-4 w-4 mr-xs" />
                    FFL Compliant
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs">
                    <Star className="h-4 w-4 mr-xs" />
                    Verified Vendors
                  </Badge>
                </div>
              </div>
            </div>

            {/* Titles - H1 & H2 Butt Buddies */}
            <div className="space-y-xs">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                Idaho Firearms & <span className="text-white">Ammo Marketplace</span>
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                Buy from Verified Local Dealers in the Treasure Valley
              </h2>
            </div>
            
            {/* Chunky Description */}
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
              Browse real-time inventory from licensed dealers across the Treasure Valley. All transactions are FFL-compliant with verified vendor partners.
            </p>
            
            {/* Buttons */}
            <div className="flex gap-base">
              <Link href="mailto:marketplace@boiseguncollective.com?subject=List Items in Marketplace&body=I'd like to list items in The Boise Gun Club marketplace:%0A%0AItem details:%0ABusiness information:%0AContact information:">
                <Button 
                  size="lg" 
                  className="bg-white text-nav-marketplace hover:bg-crisp-off-white font-rajdhani font-bold"
                  animationType="plus-minus"
                >
                  <Storefront className="h-4 w-4 mr-xs" />
                  List Your Items
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border text-white hover:bg-white hover:text-nav-marketplace"
                animationType="arrow"
              >
                View All Deals
              </Button>
            </div>
          </div>
          
          {/* Featured Deal Card - Right side */}
          <div className="lg:col-span-1 py-md min-h-[400px]">
            <div className="relative h-full">
              <Card className="mica border-nav-marketplace/30 hover:shadow-elevated transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-marketplace/20 to-nav-marketplace/10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-marketplace to-nav-marketplace"></div>
                
                <CardHeader className="pb-xs relative z-10">
                  <div className="flex items-center justify-between mb-xs">
                    <Badge className="bg-nav-marketplace/20 text-nav-marketplace border-nav-marketplace/30 font-rajdhani font-bold text-[10px]">
                      <Star className="h-3 w-3 mr-xs" />
                      FEATURED DEAL
                    </Badge>
                    <div className="flex items-center gap-xs text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-nav-marketplace" />
                      <span>Verified</span>
                    </div>
                  </div>
                  
                  <div className="space-y-xs">
                    <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">{featuredDeal.title}</h3>
                    <div className="flex items-center gap-xs text-xs text-muted-foreground">
                      <Storefront className="h-3 w-3 text-nav-marketplace" />
                      <span>{featuredDeal.business} • {featuredDeal.condition}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-base relative z-10">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {featuredDeal.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-xs">
                      <div className="flex items-center gap-xs">
                        <span className="text-2xl font-bold text-nav-marketplace font-rajdhani">${featuredDeal.salePrice}</span>
                        <span className="text-sm text-muted-foreground line-through">${featuredDeal.originalPrice}</span>
                      </div>
                      <div className="text-xs text-nav-marketplace font-medium">{featuredDeal.discount}% OFF</div>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-nav-marketplace to-nav-marketplace text-gruvbox-bg-dark hover:from-nav-marketplace hover:to-nav-marketplace font-rajdhani font-bold text-xs"
                      size="sm"
                    >
                      VIEW DEAL
                      <ArrowRight className="h-3 w-3 ml-xs" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <CardPageLayout
      pageTitle="Marketplace"
      pageSubtitle="Idaho Firearms & Ammo Marketplace"
      pageColor="marketplace"
      heroContent={heroContent}
      searchQuery={filters.searchQuery}
      onSearchChange={filters.setSearchQuery}
      searchPlaceholder="Search firearms, ammo, optics, or dealers..."
      
      quickTabs={[
        { id: 'all', label: 'All Items', count: marketplaceDeals.length, icon: ShoppingCart },
        { id: 'firearms', label: 'Firearms', count: marketplaceDeals.filter(d => d.category === 'Firearms').length, icon: Target },
        { id: 'ammunition', label: 'Ammunition', count: marketplaceDeals.filter(d => d.category === 'Ammunition').length, icon: Package },
        { id: 'optics', label: 'Optics', count: marketplaceDeals.filter(d => d.category === 'Optics').length, icon: Crown },
        { id: 'accessories', label: 'Accessories', count: marketplaceDeals.filter(d => d.category === 'Accessories').length, icon: Shield },
        { id: 'featured', label: 'Featured', count: marketplaceDeals.filter(d => d && d.isFeatured).length }
      ]}
      activeTab={filters.activeTab}
      onTabChange={filters.setActiveTab}
      
      filterSections={[
        {
          title: 'Category',
          filters: [
            { id: 'firearms', label: 'Firearms', icon: Target, count: marketplaceDeals.filter(d => d.category === 'Firearms').length },
            { id: 'ammunition', label: 'Ammunition', icon: Package, count: marketplaceDeals.filter(d => d.category === 'Ammunition').length },
            { id: 'optics', label: 'Optics', icon: Crown, count: marketplaceDeals.filter(d => d.category === 'Optics').length },
            { id: 'accessories', label: 'Accessories', icon: Shield, count: marketplaceDeals.filter(d => d.category === 'Accessories').length }
          ],
          selectedFilters: filters.selectedFilters.category || [],
          onFilterChange: (filterId) => filters.updateFilters('category', filterId),
          multiSelect: true
        },
        {
          title: 'Condition',
          filters: [
            { id: 'new', label: 'New', count: marketplaceDeals.filter(d => d.condition === 'New').length },
            { id: 'used', label: 'Used', count: marketplaceDeals.filter(d => d.condition === 'Used').length },
            { id: 'refurbished', label: 'Refurbished', count: marketplaceDeals.filter(d => d.condition === 'Refurbished').length }
          ],
          selectedFilters: filters.selectedFilters.condition || [],
          onFilterChange: (filterId) => filters.updateFilters('condition', filterId),
          multiSelect: true
        },
        {
          title: 'Price Range',
          filters: [
            { id: 'under50', label: 'Under $50', icon: CurrencyDollar, count: marketplaceDeals.filter(d => d.salePrice < 50).length },
            { id: '50-200', label: '$50 - $200', icon: CurrencyDollar, count: marketplaceDeals.filter(d => d.salePrice >= 50 && d.salePrice <= 200).length },
            { id: '200-500', label: '$200 - $500', icon: CurrencyDollar, count: marketplaceDeals.filter(d => d.salePrice >= 200 && d.salePrice <= 500).length },
            { id: 'over500', label: '$500+', icon: CurrencyDollar, count: marketplaceDeals.filter(d => d.salePrice > 500).length }
          ],
          selectedFilters: filters.selectedFilters.price || [],
          onFilterChange: (filterId) => filters.updateFilters('price', filterId),
          multiSelect: true
        }
      ]}
      
      viewMode={filters.viewMode}
      onViewModeChange={filters.setViewMode}
      sortOptions={[
        { id: 'featured', label: 'Featured First', icon: Star },
        { id: 'price-low', label: 'Price: Low to High', icon: CurrencyDollar },
        { id: 'price-high', label: 'Price: High to Low', icon: CurrencyDollar },
        { id: 'newest', label: 'Newest First', icon: Package },
        { id: 'discount', label: 'Best Deals', icon: TrendUp }
      ]}
      activeSortId={filters.sortBy}
      onSortChange={filters.setSortBy}
      
      totalResults={filters.totalResults}
      filteredResults={filters.filteredResults}
      
      statsSection={
        <>
          <TrustIndicators />
          <div className="mt-4xl">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Marketplace Categories</h3>
            <DirectoryStatsGrid stats={marketplaceCategoryStats} />
          </div>
        </>
      }
      ctaSection={
        <div className="space-y-4xl">
          {/* Activity Feed Section */}
          <div className="section-skew-up bg-card/50 py-3xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Marketplace Activity</h3>
              <div className="space-y-base">
                {activityFeedData.map((activity, index) => (
                  <ActivityFeedCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <ContributionCTA />
          
          {/* Legal notice */}
          <div className="section-skew-down bg-gradient-to-br from-nav-marketplace/10 to-nav-marketplace/5 py-3xl">
            <div className="text-center space-y-base">
              <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
                <Shield weight="bold" className="h-4 w-4 mr-xs" />
                Legal Notice
              </Badge>
              <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                FFL Compliant Transactions
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All firearm purchases require background checks and must comply with federal, state, and local laws. 
                We facilitate connections between buyers and licensed dealers.
              </p>
            </div>
          </div>
        </div>
      }
    >
      <div className={filters.getGridClassName()}>
        {filters.paginatedItems.length > 0 ? (
          filters.paginatedItems.map((deal, index) => (
            <MarketplaceDealCard
              key={`${deal.title}-${index}`}
              deal={deal}
              className="transition-all duration-300 rounded-xs"
            />
          ))
        ) : (
          <div className="col-span-full">
            <EmptyState 
              title="No Items Found"
              description="Try adjusting your search terms or filters to find great deals."
              action={
                <Button onClick={filters.clearAllFilters}>
                  Clear All Filters
                </Button>
              }
            />
          </div>
        )}
      </div>
    </CardPageLayout>
  )
}