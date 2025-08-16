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
  // Note: rating and reviewCount will be dynamically fetched from Google Reviews API
  phone?: string
  isVerified?: boolean
  isFeatured?: boolean
  imageUrl?: string
  slug?: string
  href?: string
  manufacturer?: string
  model?: string
}

// Comprehensive Idaho marketplace from verified FFL dealers and service providers
const marketplaceDeals: MarketplaceDeal[] = [
  // Premium Custom Services
  {
    title: "Custom Precision Rifle Build",
    business: "AllTerra Arms",
    location: "Boise, ID",
    originalPrice: 3500,
    salePrice: 3200,
    discount: 9,
    description: "High-end custom rifle builder with nationwide service area. Comprehensive gunsmithing on precision platforms with exceptional accuracy guarantees.",
    category: "Custom Firearms",
    condition: "New",
    availability: "Limited",
    expiresAt: "October 15th",
    phone: "(208) 608-5179",
    isVerified: true,
    isFeatured: true,
    manufacturer: "AllTerra",
    model: "Custom Precision"
  },
  {
    title: "Cerakote Coating Service",
    business: "Independence Indoor Shooting",
    location: "Meridian, ID",
    originalPrice: 175,
    salePrice: 150,
    discount: 14,
    description: "Professional Cerakote application at the region's premier indoor facility. Multiple color options and custom patterns available.",
    category: "Services",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 576-4867",
    isVerified: true,
    isFeatured: true,
    manufacturer: "Cerakote",
    model: "Professional Application"
  },
  {
    title: "Winchester Model 70 Restoration",
    business: "Eubanks Gunsmithing",
    location: "Homedale, ID",
    originalPrice: 850,
    salePrice: 750,
    discount: 12,
    description: "True artisan specializing in vintage Winchester shotguns and ventilated ribs. Master craftsman with decades of experience.",
    category: "Services",
    condition: "Refurbished",
    availability: "Limited",
    expiresAt: "November 30th",
    phone: "(208) 337-4212",
    isVerified: true,
    isFeatured: true,
    manufacturer: "Winchester",
    model: "Model 70 Restoration"
  },

  // Firearms from Verified FFLs
  {
    title: "AR-15 Custom Build",
    business: "Idaho Arms & Ammo",
    location: "Meridian, ID",
    originalPrice: 1200,
    salePrice: 1095,
    discount: 9,
    description: "Modern AR-15 platform build with strong focus on quality components. Ultrasonic cleaning service available.",
    category: "Firearms",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 809-0939",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Custom",
    model: "AR-15 Build"
  },
  {
    title: "Vintage Firearms Collection",
    business: "Buckhorn Gun & Pawn",
    location: "Boise, ID",
    originalPrice: 750,
    salePrice: 650,
    discount: 13,
    description: "Treasure Valley institution with over 40 years of service. Extensive collection of vintage and collectible firearms.",
    category: "Firearms",
    condition: "Used",
    availability: "In Stock",
    phone: "(208) 377-2535",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Various",
    model: "Vintage Collection"
  },
  {
    title: "Class III NFA Items",
    business: "Boise Tactical",
    location: "Boise, ID",
    originalPrice: 2500,
    salePrice: 2350,
    discount: 6,
    description: "Licensed Class III dealer with extensive NFA inventory. Full SOT services available for suppressors and SBRs.",
    category: "Firearms",
    condition: "New",
    availability: "Limited",
    phone: "(208) 323-4444",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Various",
    model: "NFA Items"
  },

  // Training and Range Services
  {
    title: "100-Yard Indoor Range Access",
    business: "Independence Indoor Shooting",
    location: "Meridian, ID",
    originalPrice: 35,
    salePrice: 30,
    discount: 14,
    description: "Idaho's only 100-yard indoor range with target cameras. Climate-controlled with HEPA-filtered air system.",
    category: "Services",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 576-4867",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Independence",
    model: "Range Time"
  },
  {
    title: "Sporting Clays Package",
    business: "Rock Creek Ranch",
    location: "Emmett, ID",
    originalPrice: 85,
    salePrice: 75,
    discount: 12,
    description: "One of the nation's finest sporting clays destinations. Over 120 clay throwers across four distinct courses.",
    category: "Services",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 996-3555",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Rock Creek",
    model: "Sporting Clays"
  },
  {
    title: "Trap & Skeet Sessions",
    business: "Caldwell Shotgun Complex",
    location: "Caldwell, ID",
    originalPrice: 25,
    salePrice: 20,
    discount: 20,
    description: "Treasure Valley's hub for trap, 5-stand, and sporting clays. Open to public with regular league events.",
    category: "Services",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 459-2616",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Caldwell",
    model: "Shotgun Sports"
  },

  // Archery Equipment and Services
  {
    title: "Bow Tuning & Setup",
    business: "Endless Archery",
    location: "Nampa, ID",
    originalPrice: 65,
    salePrice: 55,
    discount: 15,
    description: "Largest indoor archery facility in Treasure Valley with 54 lanes. Professional coaching and 24-hour member access.",
    category: "Services",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 466-4374",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Professional",
    model: "Bow Services"
  },
  {
    title: "Compound Bow Package",
    business: "Archery Central",
    location: "Caldwell, ID",
    originalPrice: 450,
    salePrice: 395,
    discount: 12,
    description: "Community-focused pro shop known for knowledgeable staff and expert bow tuning services.",
    category: "Equipment",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 629-9564",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Various",
    model: "Compound Package"
  },

  // Tactical Sports
  {
    title: "Airsoft Equipment Rental",
    business: "Pyrrhic Tactical Sports",
    location: "Caldwell, ID",
    originalPrice: 45,
    salePrice: 35,
    discount: 22,
    description: "6-acre outdoor field and two-floor indoor arena. Equipment rental and group packages available.",
    category: "Equipment",
    condition: "Refurbished",
    availability: "In Stock",
    phone: "(208) 629-6229",
    isVerified: true,
    isFeatured: false,
    manufacturer: "Various",
    model: "Rental Package"
  },
  {
    title: "Paintball Day Package",
    business: "ForestFire Paintball",
    location: "Caldwell, ID",
    originalPrice: 55,
    salePrice: 45,
    discount: 18,
    description: "Six distinct themed fields including 'Castle' and 'Domination'. Weekend open-play sessions available.",
    category: "Services",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 629-6229",
    isVerified: true,
    isFeatured: false,
    manufacturer: "ForestFire",
    model: "Day Package"
  },

  // Public Range Access
  {
    title: "Public Range Day Pass",
    business: "Black's Creek Public Shooting Range",
    location: "Kuna, ID",
    originalPrice: 15,
    salePrice: 12,
    discount: 20,
    description: "Idaho's largest public outdoor range. 36 benches from 5-200 yards plus 500-meter long-range facility.",
    category: "Services",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 342-9614",
    isVerified: true,
    isFeatured: false,
    manufacturer: "IDFG",
    model: "Range Pass"
  },
  {
    title: "Airgun Range Session",
    business: "Nampa Public Shooting Range",
    location: "Nampa, ID",
    originalPrice: 12,
    salePrice: 10,
    discount: 17,
    description: "Unique IDFG facility focused on high-power airguns and archery. Supervised range with professional instruction.",
    category: "Services",
    condition: "New",
    availability: "In Stock",
    phone: "(208) 442-4414",
    isVerified: true,
    isFeatured: false,
    manufacturer: "IDFG",
    model: "Airgun Session"
  }
]

export function MarketplacePageStandardized() {
  // Activity feed data for marketplace based on authentic data
  const activityFeedData = [
    {
      icon: CurrencyDollar,
      iconColor: "text-nav-marketplace",
      iconBgColor: "bg-nav-marketplace/20",
      title: "Special Pricing",
      description: "AllTerra Arms custom builds now available with financing",
      timeAgo: "2h ago"
    },
    {
      icon: Package,
      iconColor: "text-rusty-orange", 
      iconBgColor: "bg-rusty-orange/20",
      title: "New Services",
      description: "Independence Indoor adds laser engraving to gunsmithing menu",
      timeAgo: "4h ago"
    },
    {
      icon: Star,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20", 
      title: "Popular Venue",
      description: "Rock Creek Ranch sporting clays bookings up 40% this month",
      timeAgo: "6h ago"
    }
  ]

  // Marketplace category stats based on actual verified data
  const marketplaceCategoryStats = [
    { icon: Target, title: "Custom Services", value: marketplaceDeals.filter(d => d.category === 'Custom Firearms' || d.category === 'Services').length.toString(), subtitle: "Available now", color: "text-nav-marketplace" },
    { icon: Package, title: "Equipment", value: marketplaceDeals.filter(d => d.category === 'Equipment').length.toString(), subtitle: "In stock", color: "text-nav-marketplace" },
    { icon: Crown, title: "Firearms", value: marketplaceDeals.filter(d => d.category === 'Firearms').length.toString(), subtitle: "FFL dealers", color: "text-nav-marketplace" },
    { icon: Shield, title: "Range Access", value: marketplaceDeals.filter(d => d.title.includes('Range') || d.title.includes('Clays')).length.toString(), subtitle: "Live venues", color: "text-nav-marketplace" },
    { icon: Storefront, title: "Verified Dealers", value: new Set(marketplaceDeals.map(d => d.business)).size.toString(), subtitle: "ATF licensed", color: "text-nav-marketplace" },
    { icon: CheckCircle, title: "Total Listings", value: marketplaceDeals.length.toString(), subtitle: "Active offers", color: "text-nav-marketplace" }
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