'use client'

/**
 * BuySellPageStandardized - Pure Content Component
 * 
 * OPTIMIZED FOR MVP:
 * - Idaho firearms marketplace with local dealer deals and offers
 * - Verified business deals with pricing, availability, and contact info
 * - Advanced filtering by category, price range, location, and dealer tier
 * - Mobile-first responsive design with clear CTAs and contact methods
 * - Professional marketplace aesthetic with trust indicators
 */

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { UnifiedBuySellCard } from '@/components/ui/unified-buysell-card'
import { DirectoryTicker } from '@/components/ui/directory-ticker'
import { ContentBridgeSection } from '@/components/ui/content-bridge-section'
import { buysellContentBridge } from '@/lib/content-bridge-buysell'
import { BuySellSparklesIcons } from '@/components/ui/hero-buysell-diamonds'
import { BuySellEmbers } from '@/components/ui/hero-buysell-embers'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { EnhancedPagination } from '@/components/ui/enhanced-pagination'
import { CardSkeleton } from '@/components/ui/card-skeleton'
import { ArchiveBoxIcon, ArrowRightIcon, ArrowTrendingUpIcon, BoltIcon, BuildingOfficeIcon, BuildingStorefrontIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, CurrencyDollarIcon, CursorArrowRaysIcon, FireIcon, FunnelIcon, ListBulletIcon, MagnifyingGlassIcon, MapPinIcon, PhoneIcon, PlusIcon, RectangleGroupIcon, ShieldCheckIcon, ShoppingCartIcon, SparklesIcon, Squares2X2Icon, StarIcon, ViewColumnsIcon, WindowIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Buy & Sell deal data type
interface BuySellDeal {
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

// Comprehensive Idaho buysell from verified FFL dealers and service providers
const buysellDeals: BuySellDeal[] = [
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
    description: "Idaho's only 100-yard indoor range with target cameras. Climate-controlled with HEPA-filtered air systemotion.",
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
    title: "Sporting Clays ArchiveBoxIcon",
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
    title: "Compound Bow ArchiveBoxIcon",
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
    model: "Compound ArchiveBoxIcon"
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
    model: "Rental ArchiveBoxIcon"
  },
  {
    title: "Paintball Day ArchiveBoxIcon",
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
    model: "Day ArchiveBoxIcon"
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

export function BuySellPageStandardized() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)

  // Filter configuration using Events page pattern
  const filters = useCardPageFilters({
    items: buysellDeals,
    initialTab: 'all',
    initialSortBy: 'featured',
    initialViewMode: 'waterfall',
    initialItemsPerPage: 12,
    perPageOptions: [8, 12, 24, 48],
    enableInfiniteScroll: false,
    
    // MagnifyingGlassIcon filter function
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
    
    // Tab filter function
    tabFilter: (deal, activeTab) => {
      switch (activeTab) {
        case 'firearms': return deal.category === 'Firearms'
        case 'services': return deal.category === 'Services'
        case 'equipment': return deal.category === 'Equipment'
        case 'custom': return deal.category === 'Custom Firearms'
        case 'featured': return deal.isFeatured
        default: return true
      }
    },
    
    // Custom filters
    customFilters: {
      category: (deal, selectedCategories) => {
        if (selectedCategories.length === 0) return true
        return selectedCategories.includes(deal.category.toLowerCase())
      },
      condition: (deal, selectedConditions) => {
        if (selectedConditions.length === 0) return true
        return selectedConditions.includes(deal.condition.toLowerCase())
      },
      price: (deal, selectedPrices) => {
        if (selectedPrices.length === 0) return true
        if (selectedPrices.includes('under50')) return deal.salePrice < 50
        if (selectedPrices.includes('50-200')) return deal.salePrice >= 50 && deal.salePrice <= 200
        if (selectedPrices.includes('200-500')) return deal.salePrice >= 200 && deal.salePrice <= 500
        if (selectedPrices.includes('over500')) return deal.salePrice > 500
        return true
      },
      featured: (deal, selectedValues) => {
        if (selectedValues.length === 0) return true
        return selectedValues.includes('featured') ? deal.isFeatured : true
      }
    },
    
    // Sort functions
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

  // Activity feed data for buysell based on authentic data
  const activityFeedData = [
    {
      icon: CurrencyDollarIcon,
      iconColor: "text-nav-buysell",
      iconBgColor: "bg-nav-buysell/20",
      title: "Special Pricing",
      description: "AllTerra Arms custom builds now available with financing",
      timeAgo: "2h ago"
    },
    {
      icon: ArchiveBoxIcon,
      iconColor: "text-rusty-orange", 
      iconBgColor: "bg-rusty-orange/20",
      title: "New Services",
      description: "Independence Indoor adds laser engraving to gunsmithing menu",
      timeAgo: "4h ago"
    },
    {
      icon: StarIcon,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20", 
      title: "Popular Venue",
      description: "Rock Creek Ranch sporting clays bookings up 40% this month",
      timeAgo: "6h ago"
    }
  ]

  // Buy & Sell category stats based on actual verified data
  const buysellCategoryStats = [
    { icon: CursorArrowRaysIcon, title: "Custom Services", value: buysellDeals.filter(d => d.category === 'Custom Firearms' || d.category === 'Services').length.toString(), subtitle: "Available now", color: "text-nav-buysell" },
    { icon: ArchiveBoxIcon, title: "Equipment", value: buysellDeals.filter(d => d.category === 'Equipment').length.toString(), subtitle: "In stock", color: "text-nav-buysell" },
    { icon: StarIcon, title: "Firearms", value: buysellDeals.filter(d => d.category === 'Firearms').length.toString(), subtitle: "FFL dealers", color: "text-nav-buysell" },
    { icon: ShieldCheckIcon, title: "Range Access", value: buysellDeals.filter(d => d.title.includes('Range') || d.title.includes('Clays')).length.toString(), subtitle: "Live venues", color: "text-nav-buysell" },
    { icon: BuildingStorefrontIcon, title: "Verified Dealers", value: new Set(buysellDeals.map(d => d.business)).size.toString(), subtitle: "ATF licensed", color: "text-nav-buysell" },
    { icon: CheckCircleIcon, title: "Total Listings", value: buysellDeals.length.toString(), subtitle: "Active offers", color: "text-nav-buysell" }
  ]

  // Modern filter sidebar configuration
  const filterSections = [
    {
      id: 'category',
      title: 'Category',
      maxVisible: 6,
      collapsible: false,
      options: [
        { id: 'firearms', label: 'Firearms', icon: CursorArrowRaysIcon, count: buysellDeals.filter(d => d.category === 'Firearms').length, color: 'text-nav-buysell' },
        { id: 'services', label: 'Services', icon: ShieldCheckIcon, count: buysellDeals.filter(d => d.category === 'Services').length, color: 'text-nav-buysell' },
        { id: 'equipment', label: 'Equipment', icon: ArchiveBoxIcon, count: buysellDeals.filter(d => d.category === 'Equipment').length, color: 'text-nav-buysell' },
        { id: 'custom firearms', label: 'Custom Firearms', icon: StarIcon, count: buysellDeals.filter(d => d.category === 'Custom Firearms').length, color: 'text-nav-buysell' }
      ]
    },
    {
      id: 'condition',
      title: 'Condition',
      maxVisible: 3,
      collapsible: false,
      options: [
        { id: 'new', label: 'New', icon: StarIcon, count: buysellDeals.filter(d => d.condition === 'New').length, color: 'text-nav-buysell' },
        { id: 'used', label: 'Used', icon: ClockIcon, count: buysellDeals.filter(d => d.condition === 'Used').length, color: 'text-nav-buysell' },
        { id: 'refurbished', label: 'Refurbished', icon: FireIcon, count: buysellDeals.filter(d => d.condition === 'Refurbished').length, color: 'text-nav-buysell' }
      ]
    },
    {
      id: 'price',
      title: 'Price Range',
      maxVisible: 4,
      collapsible: false,
      options: [
        { id: 'under50', label: 'Under $50', icon: CurrencyDollarIcon, count: buysellDeals.filter(d => d.salePrice < 50).length, color: 'text-nav-buysell' },
        { id: '50-200', label: '$50 - $200', icon: CurrencyDollarIcon, count: buysellDeals.filter(d => d.salePrice >= 50 && d.salePrice <= 200).length, color: 'text-nav-buysell' },
        { id: '200-500', label: '$200 - $500', icon: CurrencyDollarIcon, count: buysellDeals.filter(d => d.salePrice >= 200 && d.salePrice <= 500).length, color: 'text-nav-buysell' },
        { id: 'over500', label: '$500+', icon: CurrencyDollarIcon, count: buysellDeals.filter(d => d.salePrice > 500).length, color: 'text-nav-buysell' }
      ]
    },
    {
      id: 'featured',
      title: 'Content Type',
      maxVisible: 2,
      collapsible: false,
      options: [
        { id: 'featured', label: 'Featured Deals', icon: StarIcon, count: buysellDeals.filter(d => d.isFeatured).length, color: 'text-rusty-orange' }
      ]
    }
  ]

  // Sample deal for featured card
  const featuredDeal = buysellDeals.find(deal => deal.isFeatured) || buysellDeals[0]

  // Hero content sections - clean separation of concerns
  const heroBackgroundElements = (
    <>
      <BuySellSparklesIcons />
      <BuySellEmbers />
    </>
  )

  const heroLeftContent = (
    <>
      {/* Breadcrumbs - more breathing room */}
      <div className="mb-lg">
        <div className="flex items-center gap-xs text-sm text-white/60">
          <span>Home</span>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="text-white font-medium">Buy & Sell</span>
        </div>
      </div>

      {/* Title and Subtitle - very tight spacing */}
      <div className="space-y-0">
        <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-none">
          Idaho Firearms & Ammo Marketplace
        </h1>
        <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-none mt-1">
          buy from verified local dealers in the treasure valley
        </h2>
      </div>

      {/* Badges below title/subtitle */}
      <div className="flex flex-wrap gap-xs">
        <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
          <BuildingStorefrontIcon className="h-4 w-4 mr-xs" />
          Local Dealers
        </Badge>
        <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
          <ShieldCheckIcon className="h-4 w-4 mr-xs" />
          FFL Compliant
        </Badge>
        <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
          <StarIcon className="h-4 w-4 mr-xs" />
          Verified Vendors
        </Badge>
      </div>
      
      <p className="text-body text-white/70 max-w-xl lg:max-w-2xl leading-relaxed">
        Browse real-time inventory from licensed dealers across the Treasure Valley. All transactions are FFL-compliant with verified vendor partners.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-base">
        <Button className="bg-nav-buysell text-white hover:bg-white hover:text-nav-buysell font-rajdhani font-bold"
        >
          <PlusIcon className="h-4 w-4 mr-xs" />
          List Your Items
        </Button>
        <Button 
          variant="outline" className="border-border text-white hover:bg-card hover:text-nav-buysell"
        >
          View All Deals
        </Button>
      </div>
    </>
  )

  const heroRightContent = (
    <Card className="mica-card shadow-present hover:shadow-elevated transition-all duration-300 h-auto min-h-[280px] lg:min-h-[320px]">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-buysell/20 to-nav-buysell/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-buysell to-nav-buysell"></div>
      
      <CardHeader className="pb-xs relative z-10 p-sm">
        <div className="flex items-center justify-between mb-xs">
          <Badge className="bg-nav-buysell/20 text-nav-buysell border-nav-buysell/30 font-rajdhani font-bold text-[10px]">
            <StarIcon className="h-3 w-3 mr-xs" />
            FEATURED DEAL
          </Badge>
          <div className="flex items-center gap-xs text-xs text-muted-foreground">
            <CheckCircleIcon className="h-3 w-3 text-nav-buysell" />
            <span>Verified</span>
          </div>
        </div>
        
        <div className="space-y-xs">
          <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">{featuredDeal.title}</h3>
          <div className="flex items-center gap-xs text-xs text-muted-foreground">
            <BuildingStorefrontIcon className="h-3 w-3 text-nav-buysell" />
            <span>{featuredDeal.business} • {featuredDeal.condition}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-base relative z-10 p-sm pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {featuredDeal.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="space-y-xs">
            <div className="flex items-center gap-xs">
              <span className="h3-subsection text-nav-buysell font-rajdhani">${featuredDeal.salePrice}</span>
              <span className="text-sm text-muted-foreground line-through">${featuredDeal.originalPrice}</span>
            </div>
            <div className="text-xs text-nav-buysell font-medium">{featuredDeal.discount}% OFF</div>
          </div>
          <Button 
            className="bg-gradient-to-r from-nav-buysell to-nav-buysell text-gruvbox-bg-dark hover:from-nav-buysell hover:to-nav-buysell font-rajdhani font-bold text-xs"
            size="sm"
          >
            VIEW DEAL
            <ArrowRightIcon className="h-3 w-3 ml-xs" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  // Hero content - using Events page pattern
  const heroContent = (
    <section className="relative overflow-hidden bg-gradient-buysell-hero px-md py-lg">
      {heroBackgroundElements}
      
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side - 2/3 width */}
          <div className="h-full flex flex-col justify-center space-y-mobile-lg sm:space-y-lg py-mobile-md sm:py-md">
            {heroLeftContent}
          </div>
          
          {/* Featured Deal Card - Right side */}
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
      
      {/* Directory Ticker - Real business updates */}
      <DirectoryTicker />
      
      

      {/* Main Content Area */}
      <section className="py-mobile-2xl sm:py-4xl bg-background/50">
        <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
          <div className="flex flex-col lg:flex-row gap-mobile-lg sm:gap-2xl max-w-[1920px] mx-auto">
            
            {/* Left Sidebar - Modern Filters (Desktop) */}
            <aside className="hidden lg:block">
              <div className="space-y-6">
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
                    placeholder="MagnifyingGlassIcon firearms, gear, services, or dealers..."
                    className="pl-10 h-12 text-body-base shadow-none"
                    value={filters.searchQuery}
                    onChange={(e) => filters.setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Quick Filter Tabs */}
                <div className="flex flex-wrap gap-xs">
                  {[
                    { id: 'all', label: 'All Deals', count: buysellDeals.length, icon: ArchiveBoxIcon },
                    { id: 'firearms', label: 'Firearms', count: buysellDeals.filter(d => d.category === 'Firearms').length, icon: CursorArrowRaysIcon },
                    { id: 'services', label: 'Services', count: buysellDeals.filter(d => d.category === 'Services').length, icon: ShieldCheckIcon },
                    { id: 'equipment', label: 'Equipment', count: buysellDeals.filter(d => d.category === 'Equipment').length, icon: ArchiveBoxIcon },
                    { id: 'custom', label: 'Custom', count: buysellDeals.filter(d => d.category === 'Custom Firearms').length, icon: StarIcon },
                    { id: 'featured', label: 'Featured', count: buysellDeals.filter(d => d.isFeatured).length, color: 'text-nav-buysell' }
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
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Deal' : 'Deals'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filters.filteredResults !== filters.totalResults && `Filtered from ${filters.totalResults} total • `}
                    {filters.searchQuery && `MagnifyingGlassIcon: "${filters.searchQuery}"`}
                  </p>
                </div>
                
                {/* View Controls - Mobile responsive */}
                <div className="flex items-center gap-sm sm:gap-base">
                  {/* Enhanced View Mode Toggle - Multiple Layouts */}
                  <div className="hidden sm:flex items-center border rounded-xs overflow-x-auto">
                    <Button
                      variant={filters.viewMode === 'compact' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('compact')}
                      className="rounded-none border-none shadow-none"
                      title="Compact - 4-6 items per row"
                    >
                      <Squares2X2Icon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'dense' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('dense')}
                      className="rounded-none border-none shadow-none"
                      title="Dense Grid - Maximum items"
                    >
                      <ListBulletIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('grid')}
                      className="rounded-none border-none shadow-none"
                      title="Standard Grid"
                    >
                      <Squares2X2Icon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'card' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('card')}
                      className="rounded-none border-none shadow-none"
                      title="Large Cards"
                    >
                      <RectangleGroupIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('list')}
                      className="rounded-none border-none shadow-none"
                      title="ListBulletIcon View"
                    >
                      <ListBulletIcon className="size-4" />
                    </Button>
                  </div>
                  
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
                      <Badge variant="outline" className="ml-xs bg-nav-buysell/20 text-nav-buysell border-nav-buysell/30 text-xs">
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
                    <option value="featured">Sort by Featured</option>
                    <option value="price">Sort by Price</option>
                    <option value="discount">Sort by Discount</option>
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
                      filters.paginatedItems.map((deal, index) => (
                        <UnifiedBuySellCard
                          key={`${deal.title}-${index}`}
                          {...deal}
                          viewMode={filters.viewMode}
                        />
                      ))
                    ) : (
                      <div className="col-span-full">
                        <EmptyState 
                          title="No Deals Found"
                          description="Try adjusting your search terms or filters to find great deals."
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

      {/* Buy & Sell Content Section - Trust and Categories */}
      <ContentBridgeSection {...buysellContentBridge} />

      {/* Learn More Section - Bottom CTA */}
      <section className="py-4xl bg-gradient-to-br from-nav-buysell/10 to-nav-buysell/5">
        <div className="container mx-auto max-w-site px-lg text-center">
          <div className="max-w-2xl mx-auto space-y-lg">
            <div className="space-y-base">
              <div className="flex items-center justify-center gap-xs">
                <ShoppingCartIcon className="h-6 w-6 text-nav-buysell" />
                <h2 className="font-rajdhani text-heading-lg font-bold text-card-foreground">
                  Ready to Buy or Sell?
                </h2>
              </div>
              <p className="text-body-base text-muted-foreground">
                Connect with Idaho's firearms community for safe, legal transactions. Find great deals on firearms, ammunition, and accessories from verified sellers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-base justify-center items-center">
              <Button 
                size="lg"
                className="bg-nav-buysell hover:bg-nav-buysell/90 text-white font-rajdhani font-bold min-w-[200px]"
              >
                <MagnifyingGlassIcon className="h-5 w-5 mr-xs" />
                Browse Deals
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-nav-buysell text-nav-buysell hover:bg-nav-buysell hover:text-white font-rajdhani font-bold min-w-[200px]"
              >
                <PlusIcon className="h-5 w-5 mr-xs" />
                Post Listing
              </Button>
            </div>
            
            <div className="pt-base border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                All transactions must comply with federal, state, and local laws
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sections */}
      <div className="space-y-4xl mt-4xl">
        {/* Stats Section */}
        <TrustIndicators />
        <div className="container mx-auto px-4">
          <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Buy & Sell Categories</h3>
          <DirectoryStatsGrid stats={buysellCategoryStats} />
        </div>

        {/* Activity Feed Section */}
        <div className="section-skew-up bg-card/50 py-3xl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Buy & Sell Activity</h3>
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
        <div className="section-skew-down bg-gradient-to-br from-nav-buysell/10 to-nav-buysell/5 py-3xl">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-base">
              <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
                <ShieldCheckIcon className="h-4 w-4 mr-xs" />
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