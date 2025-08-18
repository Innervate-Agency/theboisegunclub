'use client'

import React, { useState, useMemo } from 'react'
import { Badge } from './badge'
import { Button } from './button'
import { Input } from './input'
import { VendorCard } from './VendorCard'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './dropdown-menu'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination'

// Phosphor Icons - Primary choice for tactical aesthetic
import { 
  MagnifyingGlass as Search, 
  MapPin, 
  Funnel as Filter, 
  Plus, 
  Buildings as Building2,
  Target, 
  Shield, 
  ArrowRight, 
  Phone,
  CaretRight as ChevronRight, 
  Eye, 
  Medal as Award, 
  CheckCircle, 
  Lightning as Zap, 
  ChatCircle as MessageSquare,
  List,
  GridFour as Grid,
  SquaresFour as CardView,
  SortAscending as SortAsc,
  SortDescending as SortDesc,
  CaretDown as ChevronDown
} from '@phosphor-icons/react'

// Enhanced CTA Components from homepage
import { TrustIndicators } from './trust-indicators'
import { DirectoryStatsGrid } from './directory-stats-grid'
import { PlatformValueCard, platformValueCards } from './platform-value-card'
import { JoinMovementCTA } from './join-movement-cta'

// Treasure Valley firearms business directory with tier-based listings
const directoryListings = [
  // Gold Tier - Premium Partners
  {
    businessName: "Independence Indoor Shooting",
    businessType: "Premier Indoor Shooting Range",
    description: "The region's largest and most modern indoor facility. Three ranges, including a 100-yard range, retail pro shop, and full-service gunsmithing.",
    address: "2749 E Gala Ct, Meridian, ID 83642",
    phone: "(208) 576-4867",
    website: "https://www.iishooting.com/",
    hours: "Mon-Sat: 10AM-8PM, Sun: 10AM-6PM",
    tier: "gold" as const,
    specialties: ["100-Yard Indoor Range", "Tactical Range", "Gunsmithing", "Retail Pro Shop", "Training Academy"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/independence-indoor.jpg",
    slug: "independence-indoor-shooting"
  },
  {
    businessName: "Precision Rifle Works",
    businessType: "Custom Precision Shop",
    description: "Specialized in long-range precision rifles, custom bolt actions, and competition rifle builds. Award-winning gunsmith with 20+ years experience.",
    address: "456 Precision Ave, Eagle, ID 83616",
    phone: "(208) 555-0987",
    website: "https://precisionrifle.com",
    hours: "Tue-Fri: 9AM-6PM, Sat: 9AM-3PM",
    tier: "gold" as const,
    specialties: ["Precision Rifles", "Custom Bolt Actions", "Competition Builds", "Load Development", "Cerakote"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/precision-rifle.jpg",
    slug: "precision-rifle-works"
  },
  {
    businessName: "Nampa Rod & Gun Club",
    businessType: "Private Shooting Club",
    description: "Idaho's premier private shooting club with 100+ year history serving the Treasure Valley firearms community. Multiple ranges, competitions, and training programs.",
    address: "7990 Bennet Road, Nampa, ID 83687",
    phone: "(208) 466-3647",
    website: "https://nampagunclub.org",
    hours: "Wednesday-Sunday: 9AM-6PM, Monday-Tuesday: Closed",
    tier: "gold" as const,
    specialties: ["USPSA Competition", "Precision Rifle Training", "Trap & Skeet Leagues", "Youth Development", "Hunter Safety Education"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/nampa-gun-club.jpg",
    slug: "nampa-rod-gun-club"
  },

  // Silver Tier - Enhanced Listings
  {
    businessName: "Black's Creek Public Shooting Range",
    businessType: "Public Outdoor Range",
    description: "Free public shooting range managed by Idaho Fish & Game. 100-yard and 200-yard rifle ranges, 25-yard pistol range, and shotgun pattern board.",
    address: "4465 Blacks Creek Road, Meridian, ID 83642",
    phone: "(208) 334-3736",
    website: "https://idfg.idaho.gov/shooting-ranges",
    hours: "Wed-Sun: 9AM-5PM (Closed Mon-Tue)",
    tier: "silver" as const,
    specialties: ["100-Yard Range", "200-Yard Range", "Pistol Range", "Shotgun Pattern Board", "Free Public Access"],
    isVerified: true,
    imageUrl: "/images/vendors/blacks-creek.jpg"
  },
  {
    businessName: "Treasure Valley Tactical",
    businessType: "Tactical Training & Gear",
    description: "Professional tactical training academy and gear outfitter. Specializing in defensive pistol, carbine, and tactical gear sales.",
    address: "789 Tactical Blvd, Caldwell, ID 83605",
    phone: "(208) 555-0456",
    website: "https://tvtactical.com",
    hours: "Mon-Fri: 10AM-7PM, Sat: 9AM-5PM",
    tier: "silver" as const,
    specialties: ["Tactical Training", "Defensive Pistol", "Carbine Training", "Tactical Gear", "Night Vision"],
    isVerified: true,
    imageUrl: "/images/vendors/tv-tactical.jpg"
  },

  // Copper Tier - Standard Enhanced
  {
    businessName: "Boise Gun Exchange",
    businessType: "Gun Store & FFL Dealer",
    description: "Full-service gun store with extensive inventory of new and used firearms. FFL transfers, gunsmithing, and ammunition sales.",
    address: "321 Gun Store Way, Boise, ID 83704",
    phone: "(208) 555-0789",
    website: "https://boisegunexchange.com",
    hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    tier: "copper" as const,
    specialties: ["New Firearms", "Used Firearms", "FFL Transfers", "Ammunition", "Basic Gunsmithing"],
    isVerified: true,
    imageUrl: "/images/vendors/boise-gun-exchange.jpg"
  },
  {
    businessName: "Meridian Shooting Sports",
    businessType: "Indoor Range & Training",
    description: "Modern indoor shooting facility with 12 climate-controlled lanes, retail shop, and training programs for all skill levels.",
    address: "654 Range Road, Meridian, ID 83642",
    phone: "(208) 555-0123",
    hours: "Daily: 9AM-9PM",
    tier: "copper" as const,
    specialties: ["Indoor Range", "Climate Controlled", "Training Programs", "Retail Shop", "Firearm Rentals"],
    isVerified: false,
    imageUrl: "/images/vendors/meridian-shooting.jpg"
  },

  // Free Tier - Basic Listings  
  {
    businessName: "Idaho Gun Works",
    businessType: "Gunsmith Services",
    description: "Professional gunsmith specializing in repairs, modifications, and custom work. Family-owned business serving the Treasure Valley since 1995.",
    address: "987 Smith Street, Nampa, ID 83651",
    phone: "(208) 555-0321",
    hours: "Mon-Fri: 8AM-5PM",
    tier: "free" as const,
    specialties: ["Gunsmithing", "Repairs", "Modifications", "Custom Work", "Restoration"],
    isVerified: false,
    imageUrl: "/images/vendors/placeholder.jpg"
  }
]

export function DirectoryPageComponent() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTier, setSelectedTier] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'card'>('grid')
  const [sortBy, setSortBy] = useState<'name' | 'tier' | 'newest'>('tier')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = viewMode === 'grid' ? 12 : viewMode === 'card' ? 6 : 8

  // Filter businesses based on selections
  const filteredBusinesses = directoryListings.filter(business => {
    const matchesType = selectedType === "all" || 
      (selectedType === "dealer" && (business.businessType.toLowerCase().includes("dealer") || business.businessType.toLowerCase().includes("gun") || business.businessType.toLowerCase().includes("ffl"))) ||
      (selectedType === "range" && (business.businessType.toLowerCase().includes("range") || business.businessType.toLowerCase().includes("shooting"))) ||
      (selectedType === "training" && (business.businessType.toLowerCase().includes("training") || business.businessType.toLowerCase().includes("academy") || business.businessType.toLowerCase().includes("education"))) ||
      (selectedType === "gunsmith" && (business.businessType.toLowerCase().includes("gunsmith") || business.businessType.toLowerCase().includes("custom"))) ||
      (selectedType === "tactical" && (business.businessType.toLowerCase().includes("tactical") || business.businessType.toLowerCase().includes("gear")))
    
    const matchesTier = selectedTier === "all" || business.tier === selectedTier
    
    const matchesSearch = searchQuery === "" || 
      business.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.businessType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesType && matchesTier && matchesSearch
  })

  // Sort businesses
  const sortedBusinesses = useMemo(() => {
    const sorted = [...filteredBusinesses].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.businessName.localeCompare(b.businessName)
        case 'tier':
          const tierOrder = { 'gold': 0, 'silver': 1, 'copper': 2, 'free': 3 }
          return tierOrder[a.tier] - tierOrder[b.tier]
        case 'newest':
          // Placeholder sorting by name reverse order - would use dateAdded field when available
          return b.businessName.localeCompare(a.businessName)
        default:
          return 0
      }
    })
    return sorted
  }, [filteredBusinesses, sortBy])

  // Pagination
  const totalPages = Math.ceil(sortedBusinesses.length / itemsPerPage)
  const paginatedBusinesses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return sortedBusinesses.slice(startIndex, startIndex + itemsPerPage)
  }, [sortedBusinesses, currentPage, itemsPerPage])

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedType, selectedTier, searchQuery, sortBy])

  // Directory stats
  const totalBusinesses = directoryListings.length

  const businessTypeFilters = [
    { id: "all", label: "All Categories", icon: Building2, count: directoryListings.length },
    { id: "dealer", label: "Dealers & FFLs", icon: Shield, count: directoryListings.filter(b => b.businessType.toLowerCase().includes("dealer") || b.businessType.toLowerCase().includes("gun") || b.businessType.toLowerCase().includes("ffl")).length },
    { id: "range", label: "Shooting Ranges", icon: Target, count: directoryListings.filter(b => b.businessType.toLowerCase().includes("range") || b.businessType.toLowerCase().includes("shooting")).length },
    { id: "training", label: "Training & Education", icon: Award, count: directoryListings.filter(b => b.businessType.toLowerCase().includes("training") || b.businessType.toLowerCase().includes("academy") || b.businessType.toLowerCase().includes("education")).length },
    { id: "gunsmith", label: "Gunsmiths", icon: Zap, count: directoryListings.filter(b => b.businessType.toLowerCase().includes("gunsmith") || b.businessType.toLowerCase().includes("custom")).length },
    { id: "tactical", label: "Tactical & Gear", icon: MessageSquare, count: directoryListings.filter(b => b.businessType.toLowerCase().includes("tactical") || b.businessType.toLowerCase().includes("gear")).length }
  ]

  const tierFilters = [
    { id: "all", label: "All Tiers", count: directoryListings.length },
    { id: "gold", label: "Gold Partners", count: directoryListings.filter(b => b.tier === 'gold').length },
    { id: "silver", label: "Silver Enhanced", count: directoryListings.filter(b => b.tier === 'silver').length },
    { id: "copper", label: "Copper Standard", count: directoryListings.filter(b => b.tier === 'copper').length },
    { id: "free", label: "Free Listings", count: directoryListings.filter(b => b.tier === 'free').length }
  ]

  const getGridClassName = () => {
    switch (viewMode) {
      case 'grid': {
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-lg"
      }
      case 'card': {
        return "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg"
      }
      case 'list': {
        return "grid gap-sm"
      }
      default: {
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-lg"
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-directory-hero px-md py-lg">
            <div className="container mx-auto max-w-site relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
                {/* Content - Left side */}
                <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
                  <div className="flex items-center gap-base">
                    <div className="bg-card/10 p-base rounded-xs border border-border">
                      <Building2 weight="bold" className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-base">
                      <div className="flex items-center gap-xs text-sm text-white/60">
                        <span>Home</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-white font-medium">Directory</span>
                      </div>
                      <div className="flex flex-wrap gap-xs">
                        <Badge className="bg-card/10 text-white border-border rounded-xs">
                          <Shield weight="bold" className="h-4 w-4 mr-xs" />
                          FFLs & Dealers
                        </Badge>
                        <Badge className="bg-card/10 text-white border-border rounded-xs">
                          <Target weight="bold" className="h-4 w-4 mr-xs" />
                          Ranges
                        </Badge>
                        <Badge className="bg-card/10 text-white border-border rounded-xs">
                          <Award weight="bold" className="h-4 w-4 mr-xs" />
                          Training
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                      Idaho Firearms Businesses & Services
                    </h1>
                    <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                      Your hub for Treasure Valley FFLs, ranges, training, and gunsmiths.
                    </h2>
                  </div>
                  <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
                    Connect with Idaho's premier firearms community. Find trusted FFLs, ranges, training facilities, and gunsmiths in the Treasure Valley.
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-base">
                    <Button size="lg" className="bg-card text-nav-directory hover:bg-crisp-off-white font-rajdhani font-bold" animationType="plus-minus">
                      <Plus className="h-4 w-4 mr-xs" />
                      List Business
                    </Button>
                    <Button variant="outline" size="lg" className="border-border text-white hover:bg-card hover:text-nav-directory" animationType="arrow">
                      View Map
                    </Button>
                  </div>
                </div>

                {/* Featured Business - Right side */}
                <div className="lg:col-span-1 py-md min-h-[400px]">
                  <Card variant="fire" className="w-full max-w-sm shadow-hero">
                    <CardContent className="p-base">
                      <div className="space-y-base text-center">
                        <div className="space-y-xs">
                          <Badge variant="nav-directory" size="sm">
                            <Shield weight="bold" className="h-3 w-3 mr-xs" />
                            Featured Gold Partner
                          </Badge>
                          <h3 className="font-rajdhani font-bold text-body-xl text-card-foreground">
                            Independence Indoor
                          </h3>
                          <p className="text-body-sm text-muted-foreground">
                            Premier 100-yard indoor facility with full-service pro shop and gunsmithing.
                          </p>
                          <div className="flex items-center justify-center gap-xs text-body-xs text-muted-foreground">
                            <span>Since 1954</span>
                            <span>•</span>
                            <span>NRA Certified</span>
                          </div>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="space-y-xs pt-xs border-t border-border/50">
                          <div className="flex items-center gap-xs text-body-xs text-muted-foreground">
                            <MapPin weight="bold" className="h-3 w-3 text-nav-directory" />
                            <span>2749 E Gala Ct, Meridian, ID</span>
                          </div>
                          <div className="flex items-center gap-xs text-body-xs text-muted-foreground">
                            <Phone weight="bold" className="h-3 w-3 text-nav-directory" />
                            <span>(208) 576-4867</span>
                          </div>
                        </div>
                        
                        {/* Premium CTA */}
                        <Button 
                          className="w-full bg-gradient-to-r from-nav-directory to-nav-directory text-gruvbox-bg-dark hover:from-nav-directory/90 hover:to-nav-directory/90 font-rajdhani font-bold"
                          size="sm"
                        >
                          <ArrowRight weight="bold" className="h-4 w-4 mr-xs" />
                          VIEW BUSINESS
                        </Button>
                      </div>
                    </CardContent>
                    
                    {/* Bottom Accent Bar */}
                    <div className="h-1 bg-gradient-to-r from-nav-directory to-nav-directory"></div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Controls - Now as page background section */}
          <section className="py-lg section-bg-directory-neutral border-b border-border/50">
            <div className="container mx-auto max-w-site px-md">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
                
                {/* Business Type Filters */}
                <div className="lg:col-span-2">
                  <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground mb-sm">
                    Business Categories
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-xs">
                    {businessTypeFilters.map((filter) => (
                      <Button
                        key={filter.id}
                        variant={selectedType === filter.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedType(filter.id)}
                        className="justify-start gap-xs text-body-xs font-rajdhani shadow-none rounded-xs"
                      >
                        {React.createElement(filter.icon, { 
                          weight: "bold", 
                          className: "size-3" 
                        })}
                        <span className="hidden sm:inline">{filter.label}</span>
                        <Badge variant="secondary" size="sm" className="ml-auto">
                          {filter.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Tier Filters */}
                <div>
                  <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground mb-sm">
                    Membership Tiers
                  </h3>
                  <div className="space-y-xs">
                    {tierFilters.map((filter) => (
                      <Button
                        key={filter.id}
                        variant={selectedTier === filter.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTier(filter.id)}
                        className="w-full justify-between text-body-xs font-rajdhani shadow-none rounded-xs"
                      >
                        <span>{filter.label}</span>
                        <Badge variant="secondary" size="sm">
                          {filter.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* List Business CTA */}
                <div className="space-y-sm">
                  <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground">
                    Join Directory
                  </h3>
                  <div className="p-sm bg-nav-directory/5 rounded-xs border border-nav-directory/20">
                    <div className="space-y-xs text-center">
                      <Target weight="bold" className="size-5 text-nav-directory mx-auto" />
                      <h4 className="font-rajdhani font-bold text-body-sm text-card-foreground">
                        List Your Business
                      </h4>
                      <p className="text-body-xs text-muted-foreground leading-relaxed">
                        Join Idaho's premier firearms directory.
                      </p>
                      <Button size="sm" className="w-full shadow-none">
                        <Plus weight="bold" className="size-3 mr-xs" />
                        Get Listed
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content - Full Width with Enhanced Spacing */}
          <div className="w-full py-4xl">
            <div className="container mx-auto max-w-site px-md">
              {/* Results Header with Controls */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-lg mb-2xl">
              <div>
                <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                  {sortedBusinesses.length} {sortedBusinesses.length === 1 ? 'Business' : 'Businesses'} Found
                </h2>
                <p className="text-muted-foreground">
                  {selectedType !== "all" && `Filtered by: ${businessTypeFilters.find(f => f.id === selectedType)?.label}`}
                  {selectedTier !== "all" && ` • ${tierFilters.find(f => f.id === selectedTier)?.label}`}
                  {searchQuery && ` • Search: "${searchQuery}"`}
                </p>
              </div>
              
              {/* View Controls */}
              <div className="flex items-center gap-sm">
                {/* View Mode Toggle */}
                <div className="flex items-center border rounded-xs">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-none border-none shadow-none"
                  >
                    <Grid weight="bold" className="size-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'card' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('card')}
                    className="rounded-none border-none shadow-none"
                  >
                    <CardView weight="bold" className="size-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
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
                      Sort by {sortBy === 'tier' ? 'Tier' : sortBy === 'name' ? 'Name' : 'Newest'}
                      <ChevronDown weight="bold" className="size-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSortBy('tier')}>
                      <Award className="size-4 mr-xs" />
                      Sort by Tier
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy('name')}>
                      <SortAsc className="size-4 mr-xs" />
                      Sort by Name
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy('newest')}>
                      <SortDesc className="size-4 mr-xs" />
                      Sort by Newest
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Map View Button */}
                <Button variant="outline" className="gap-xs shadow-none rounded-xs">
                  <MapPin weight="bold" className="size-4" />
                  Map View
                </Button>
              </div>
            </div>

              {/* Business Grid - Full Width Responsive */}
              <div className={getGridClassName()}>
              {paginatedBusinesses.length > 0 ? (
                paginatedBusinesses.map((business, index) => (
                  <VendorCard
                    key={`${business.businessName}-${index}`}
                    businessName={business.businessName}
                    businessType={business.businessType}
                    description={business.description}
                    address={business.address}
                    phone={business.phone}
                    website={business.website}
                    hours={business.hours}
                    tier={business.tier}
                    specialties={business.specialties}
                    isVerified={business.isVerified}
                    verificationStatus={business.isVerified ? 'Fully Verified' : 'ATF Record Only - Unverified'}
                    isSponsored={business.isSponsored}
                    imageUrl={business.imageUrl}
                    googlePlaceId={business.googlePlaceId}
                    className="mica shadow-present hover:shadow-prominent transition-all duration-300 rounded-xs"
                  />
                ))
              ) : (
                <div className="col-span-full">
                  <Card variant="default" className="mica rounded-xs">
                    <CardContent className="py-2xl text-center">
                      <div className="space-y-base">
                        <Eye weight="bold" className="size-12 text-muted-foreground mx-auto" />
                        <div className="space-y-xs">
                          <h3 className="font-rajdhani text-body-xl font-bold text-card-foreground">No Businesses Found</h3>
                          <p className="text-muted-foreground">Try adjusting your search terms or filters to find what you're looking for.</p>
                        </div>
                        <Button 
                          onClick={() => {
                            setSelectedType("all")
                            setSelectedTier("all") 
                            setSearchQuery("")
                          }}
                          className="shadow-elevated hover:shadow-prominent"
                        >
                          Clear All Filters
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                )
              }
            </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-4xl">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }

                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink 
                            onClick={() => setCurrentPage(pageNumber)}
                            isActive={currentPage === pageNumber}
                            className="cursor-pointer"
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              )}
            </div>
          </div>
        </div>

    {/* Trust Indicators - Real Stats Section */}
    <section className="py-xl section-bg-directory-cool section-skew-subtle">
      <div className="container mx-auto max-w-site px-md text-center">
        <h2 className="text-heading-xl font-rajdhani font-bold text-card-foreground mb-base">
          Treasure Valley's Trusted Business Network
        </h2>
        <TrustIndicators className="mb-lg" />
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with verified firearms businesses across the Treasure Valley. From FFLs to training facilities, find trusted partners in Idaho's shooting sports community.
        </p>
      </div>
    </section>

    {/* Directory Stats Grid Section */}
    <section className="py-xl section-bg-directory-neutral section-skew-down">
      <div className="container mx-auto max-w-site px-md">
        <div className="text-center mb-xl">
          <h2 className="text-heading-2xl font-rajdhani font-bold text-card-foreground mb-base">
            By the Numbers
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Real businesses serving the Idaho firearms community
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <DirectoryStatsGrid />
        </div>
      </div>
    </section>

    {/* Platform Value Cards Section */}
    <section className="py-4xl section-bg-directory-cool section-skew-up">
      <div className="container mx-auto max-w-site px-md">
        <div className="text-center mb-xl">
          <h2 className="text-heading-2xl font-rajdhani font-bold text-card-foreground mb-base">
            Why Choose Local
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Support Idaho businesses that understand our community values and provide personalized service you can trust.
          </p>
        </div>
        <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
          {platformValueCards.slice(0, 3).map((card, index) => (
            <PlatformValueCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>

    {/* Join Movement CTA */}
    <section className="py-4xl section-bg-sharp">
      <div className="container mx-auto max-w-site px-md">
        <JoinMovementCTA />
      </div>
    </section>
    </div>
  )
}