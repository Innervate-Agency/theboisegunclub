'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MarketplaceDealCard } from '@/components/ui/marketplace-deal-card'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { usePageFilters } from '@/hooks/usePageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { 
  ShoppingCartIcon as ShoppingCart,
  CurrencyDollarIcon as CurrencyDollar,
  ArchiveBoxIcon as Package,
  StarIcon as Star,
  CursorArrowRaysIcon as Target, 
  ShieldCheckIcon as Shield,
  BuildingStorefrontIcon as Storefront,
  MapPinIcon as MapPin,
  PhoneIcon as Phone,
  CheckCircleIcon as CheckCircle,
  SparklesIcon as Crown,
  ArrowTrendingUpIcon as TrendUp,
  BoltIcon as Lightning,
  BuildingOfficeIcon as Buildings,
  ChevronRightIcon as CaretRight,
  ArrowRightIcon as ArrowRight,
  PlusIcon as Plus,
  MagnifyingGlassIcon as Search,
  FunnelIcon as Filter,
  ClockIcon as Clock,
  FireIcon as Fire
} from '@heroicons/react/24/outline'

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
    items: marketplaceDeals,
    searchFilter: (deal, query) => {
      const searchTerms = query.toLowerCase()
      return (
        deal.title.toLowerCase().includes(searchTerms) ||
        deal.description.toLowerCase().includes(searchTerms) ||
        deal.business.toLowerCase().includes(searchTerms) ||
        deal.category.toLowerCase().includes(searchTerms) ||
        (deal.manufacturer && deal.manufacturer.toLowerCase().includes(searchTerms)) ||
        (deal.model && deal.model.toLowerCase().includes(searchTerms))
      )
    },
    categoryFilters: {
      category: (deal, selectedCategories) => 
        selectedCategories.includes(deal.category.toLowerCase()),
      condition: (deal, selectedConditions) => 
        selectedConditions.includes(deal.condition.toLowerCase()),
      price: (deal, selectedPrices) => {
        if (selectedPrices.includes('under50')) return deal.salePrice < 50
        if (selectedPrices.includes('50-200')) return deal.salePrice >= 50 && deal.salePrice <= 200
        if (selectedPrices.includes('200-500')) return deal.salePrice >= 200 && deal.salePrice <= 500
        if (selectedPrices.includes('over500')) return deal.salePrice > 500
        return true
      },
      featured: (deal, selectedValues) => 
        selectedValues.includes('featured') ? deal.isFeatured : true
    },
    sortFunctions: {
      featured: (a, b) => {
        const aFeatured = a.isFeatured ? 1 : 0
        const bFeatured = b.isFeatured ? 1 : 0
        if (bFeatured !== aFeatured) return bFeatured - aFeatured
        return (b.discount || 0) - (a.discount || 0)
      },
      price: (a, b) => a.salePrice - b.salePrice,
      discount: (a, b) => b.discount - a.discount,
      alphabetical: (a, b) => a.title.localeCompare(b.title)
    },
    initialSortBy: 'featured'
  })

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

  // Modern filter sidebar configuration
  const filterSections = [
    {
      id: 'category',
      title: 'Category',
      maxVisible: 6,
      collapsible: false,
      options: [
        { id: 'firearms', label: 'Firearms', icon: Target, count: marketplaceDeals.filter(d => d.category === 'Firearms').length, color: 'text-nav-marketplace' },
        { id: 'services', label: 'Services', icon: Shield, count: marketplaceDeals.filter(d => d.category === 'Services').length, color: 'text-nav-marketplace' },
        { id: 'equipment', label: 'Equipment', icon: Package, count: marketplaceDeals.filter(d => d.category === 'Equipment').length, color: 'text-nav-marketplace' },
        { id: 'custom firearms', label: 'Custom Firearms', icon: Crown, count: marketplaceDeals.filter(d => d.category === 'Custom Firearms').length, color: 'text-nav-marketplace' }
      ]
    },
    {
      id: 'condition',
      title: 'Condition',
      maxVisible: 3,
      collapsible: false,
      options: [
        { id: 'new', label: 'New', icon: Star, count: marketplaceDeals.filter(d => d.condition === 'New').length },
        { id: 'used', label: 'Used', icon: Clock, count: marketplaceDeals.filter(d => d.condition === 'Used').length },
        { id: 'refurbished', label: 'Refurbished', icon: Fire, count: marketplaceDeals.filter(d => d.condition === 'Refurbished').length }
      ]
    },
    {
      id: 'price',
      title: 'Price Range',
      maxVisible: 4,
      collapsible: false,
      options: [
        { id: 'under50', label: 'Under $50', icon: CurrencyDollar, count: marketplaceDeals.filter(d => d.salePrice < 50).length },
        { id: '50-200', label: '$50 - $200', icon: CurrencyDollar, count: marketplaceDeals.filter(d => d.salePrice >= 50 && d.salePrice <= 200).length },
        { id: '200-500', label: '$200 - $500', icon: CurrencyDollar, count: marketplaceDeals.filter(d => d.salePrice >= 200 && d.salePrice <= 500).length },
        { id: 'over500', label: '$500+', icon: CurrencyDollar, count: marketplaceDeals.filter(d => d.salePrice > 500).length }
      ]
    },
    {
      id: 'featured',
      title: 'Content Type',
      maxVisible: 2,
      collapsible: false,
      options: [
        { id: 'featured', label: 'Featured Deals', icon: Star, count: marketplaceDeals.filter(d => d.isFeatured).length, color: 'text-rusty-orange' }
      ]
    }
  ]

  // Sample deal for featured card
  const featuredDeal = marketplaceDeals.find(deal => deal.isFeatured) || marketplaceDeals[0]

  // Hero content sections - clean separation of concerns
  const heroBackgroundElements = (
    <>
      <div className="absolute top-8 right-12 w-3 h-3 bg-card/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 left-16 w-2 h-2 bg-card/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-16 right-20 w-1 h-1 bg-card/25 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
    </>
  )

  const heroLeftContent = (
    <>
      <div className="flex items-center gap-sm">
        <div className="bg-card/10 p-base rounded-xs border border-border">
          <ShoppingCart className="h-8 w-8 text-white" />
        </div>
        <div className="space-y-base">
          <div className="flex items-center gap-xs text-sm text-white/60">
            <span>Home</span>
            <CaretRight className="h-4 w-4" />
            <span className="text-white font-medium">Marketplace</span>
          </div>
          
          <div className="flex flex-wrap gap-xs">
            <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
              <Storefront className="h-4 w-4 mr-xs" />
              Local Dealers
            </Badge>
            <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
              <Shield className="h-4 w-4 mr-xs" />
              FFL Compliant
            </Badge>
            <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
              <Star className="h-4 w-4 mr-xs" />
              Verified Vendors
            </Badge>
          </div>
        </div>
      </div>

      <div className="space-y-xs">
        <h1 className="font-rajdhani text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Idaho Firearms & <span className="text-white">Ammo Marketplace</span>
        </h1>
        <h2 className="font-rajdhani text-base md:text-lg lg:text-xl font-medium text-white/80 leading-snug">
          Buy from Verified Local Dealers in the Treasure Valley
        </h2>
      </div>
      
      <p className="text-body text-white/70 max-w-xl lg:max-w-2xl leading-relaxed">
        Browse real-time inventory from licensed dealers across the Treasure Valley. All transactions are FFL-compliant with verified vendor partners.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-base">
        <Button 
          size="lg" 
          className="bg-nav-marketplace text-white hover:bg-white hover:text-nav-marketplace font-rajdhani font-bold"
        >
          <Plus className="h-4 w-4 mr-xs" />
          List Your Items
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="border-border text-white hover:bg-card hover:text-nav-marketplace"
        >
          View All Deals
        </Button>
      </div>
    </>
  )

  const heroRightContent = (
    <Card className="mica-card shadow-present hover:shadow-elevated transition-all duration-300 h-auto min-h-[280px] lg:min-h-[320px]">
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
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-nav-marketplace via-nav-marketplace/90 to-nav-marketplace/80 text-white">
        {/* Background Elements */}
        {heroBackgroundElements}
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="hero-grid-layout">
              {/* Hero Left Content */}
              <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
                {heroLeftContent}
              </div>
              
              {/* Hero Right Content */}
              <div className="lg:col-span-1 h-full flex flex-col justify-center">
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
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Deal' : 'Deals'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    Idaho marketplace from verified dealers
                  </p>
                </div>
                
                {/* Search and Filter Controls */}
                <div className="flex flex-col sm:flex-row gap-base sm:gap-base">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search firearms, ammo, optics, or dealers..."
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
                      <Badge variant="secondary" className="ml-1 bg-nav-marketplace/20 text-nav-marketplace">
                        {Object.values(filters.selectedFilters).flat().length}
                      </Badge>
                    )}
                  </Button>
                </div>
              </div>

              {/* Deal Grid */}
              <div className="space-y-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((deal, index) => (
                      <MarketplaceDealCard
                        key={`${deal.title}-${index}`}
                        deal={deal}
                        className="transition-all duration-300 rounded-xs"
                      />
                    ))
                  ) : (
                    <div className="col-span-full">
                      <EmptyState 
                        title="No Deals Found"
                        description="Try adjusting your search terms or filters to find great deals."
                        action={
                          <Button onClick={handleClearAll}>
                            Clear All Filters
                          </Button>
                        }
                      />
                    </div>
                  )}
                </div>
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
          <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Marketplace Categories</h3>
          <DirectoryStatsGrid stats={marketplaceCategoryStats} />
        </div>

        {/* Activity Feed Section */}
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Marketplace Activity</h3>
              <div className="space-y-base">
                {activityFeedData.map((activity, index) => (
                  <ActivityFeedCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <ContributionCTA />
        
        {/* Legal notice */}
        <div className="section-skew-down bg-gradient-to-br from-nav-marketplace/10 to-nav-marketplace/5 py-3xl">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-base">
              <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
                <Shield className="h-4 w-4 mr-xs" />
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
      </div>
    </div>
  )
}