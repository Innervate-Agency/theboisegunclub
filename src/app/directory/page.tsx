'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { VendorCard } from '@/components/ui/VendorCard'
import StatCard from '@/components/ui/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { 
  Search, MapPin, Filter, Star, Clock, Plus, Building2, 
  Target, Shield, ArrowRight, Users, TrendingUp, Phone,
  ChevronRight, Eye, Award, CheckCircle, Zap, MessageSquare
} from 'lucide-react'

// Treasure Valley firearms business directory with tier-based listings
const directoryListings = [
  // Gold Tier - Premium Partners
  {
    businessName: "Boise Gun Club",
    businessType: "Premier Shooting Range & Club",
    description: "Treasure Valley's premier outdoor shooting facility with trap, skeet, sporting clays, and rifle ranges. NRA certified instruction and competition hosting with full pro shop.",
    address: "123 Range Road, Boise, ID 83704",
    phone: "(208) 555-0123",
    website: "https://boisegunclub.com",
    hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    rating: 4.8,
    reviewCount: 127,
    tier: "gold" as const,
    specialties: ["Trap & Skeet", "Rifle Range", "NRA Training", "Competitions", "Pro Shop"],
    isVerified: true,
    isSponsored: true,
    monthlyLeads: 245,
    imageUrl: "/images/vendors/boise-gun-club.jpg"
  },
  {
    businessName: "Precision Rifle Works",
    businessType: "Custom Precision Shop",
    description: "Specialized in long-range precision rifles, custom bolt actions, and competition rifle builds. Award-winning gunsmith with 20+ years experience.",
    address: "456 Precision Ave, Eagle, ID 83616",
    phone: "(208) 555-0987",
    website: "https://precisionrifle.com",
    hours: "Tue-Fri: 9AM-6PM, Sat: 9AM-3PM",
    rating: 4.9,
    reviewCount: 89,
    tier: "gold" as const,
    specialties: ["Precision Rifles", "Custom Bolt Actions", "Competition Builds", "Load Development", "Cerakote"],
    isVerified: true,
    isSponsored: true,
    monthlyLeads: 156,
    imageUrl: "/images/vendors/precision-rifle.jpg"
  },

  // Silver Tier - Enhanced Listings
  {
    businessName: "Treasure Valley Gunsmith",
    businessType: "Full-Service Custom Gunsmith",
    description: "Expert gunsmithing services including custom builds, precision rifle work, restoration services, and Cerakote finishing for modern and vintage firearms.",
    address: "789 Craft Lane, Meridian, ID 83642",
    phone: "(208) 555-0456",
    website: "https://tvgunsmith.com",
    hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM",
    rating: 4.7,
    reviewCount: 64,
    tier: "silver" as const,
    specialties: ["Custom Builds", "Precision Work", "Restoration", "Cerakote Finishing", "Threading"],
    isVerified: true,
    imageUrl: "/images/vendors/tv-gunsmith.jpg"
  },
  {
    businessName: "Northwest Tactical Academy",
    businessType: "Professional Training Facility",
    description: "Comprehensive firearms education covering everything from basic safety to advanced tactical training. Corporate training and law enforcement instruction available.",
    address: "321 Training Blvd, Star, ID 83669",
    phone: "(208) 555-0654",
    website: "https://nwtactical.edu",
    hours: "Mon-Sat: 8AM-6PM, Classes by appointment",
    rating: 4.6,
    reviewCount: 92,
    tier: "silver" as const,
    specialties: ["Basic Safety", "Hunter Education", "Tactical Training", "Corporate Training", "CCW Classes"],
    isVerified: true,
    imageUrl: "/images/vendors/nw-tactical.jpg"
  },

  // Copper Tier - Standard Enhanced
  {
    businessName: "Idaho Firearms Academy",
    businessType: "Training & Education Center",
    description: "Professional firearms training from basic safety to advanced courses. NRA certified instructors with focus on safety and practical application.",
    address: "567 Academy Dr, Nampa, ID 83687",
    phone: "(208) 555-0789",
    website: "https://idahofirearms.edu",
    hours: "Mon-Fri: 9AM-6PM, Weekend classes available",
    rating: 4.5,
    reviewCount: 73,
    tier: "copper" as const,
    specialties: ["CCW Classes", "Basic Safety", "Advanced Courses", "Hunter Education"],
    isVerified: true,
    imageUrl: "/images/vendors/idaho-firearms.jpg"
  },
  {
    businessName: "Mountain West Shooting Sports",
    businessType: "Indoor Shooting Range",
    description: "Modern indoor facility with 25-yard pistol lanes and training areas. Retail shop with firearms, ammunition, and accessories.",
    address: "432 Sports Complex Dr, Caldwell, ID 83605",
    phone: "(208) 555-0321",
    website: "https://mwshooting.com",
    hours: "Daily: 10AM-9PM",
    rating: 4.4,
    reviewCount: 88,
    tier: "copper" as const,
    specialties: ["Indoor Range", "Retail Shop", "Lane Rentals", "Basic Training"],
    isVerified: true,
    imageUrl: "/images/vendors/mw-shooting.jpg"
  },

  // Free Tier - Basic Listings
  {
    businessName: "Collector's Corner FFL",
    businessType: "FFL Transfer Services",
    description: "Licensed FFL dealer providing transfer services, background checks, and basic gunsmith work. Family-owned business serving the community for 15+ years.",
    address: "123 Main St, Middleton, ID 83644",
    phone: "(208) 555-0147",
    website: "",
    hours: "Mon-Fri: 10AM-6PM, Sat: 10AM-4PM",
    rating: 4.2,
    reviewCount: 35,
    tier: "free" as const,
    specialties: ["FFL Transfers", "Background Checks", "Basic Gunsmith"],
    isVerified: true
  },
  {
    businessName: "Valley Tactical Supply",
    businessType: "Tactical Gear & Accessories",
    description: "Tactical equipment, accessories, holsters, and gear for law enforcement and civilian use. Custom Kydex work and equipment consultation.",
    address: "789 Industrial Way, Garden City, ID 83714",
    phone: "(208) 555-0852",
    website: "https://valleytactical.com",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-5PM",
    rating: 4.3,
    reviewCount: 42,
    tier: "free" as const,
    specialties: ["Tactical Gear", "Holsters", "Custom Kydex", "Consultation"],
    isVerified: true
  },
  {
    businessName: "High Country Outfitters",
    businessType: "Hunting & Sporting Goods",
    description: "Complete hunting outfitter with firearms, archery equipment, hunting gear, and guided hunting services throughout Idaho's wilderness areas.",
    address: "654 Wilderness Rd, Kuna, ID 83634",
    phone: "(208) 555-0963",
    website: "https://highcountryid.com",
    hours: "Mon-Sat: 8AM-7PM, Sun: 10AM-5PM",
    rating: 4.1,
    reviewCount: 28,
    tier: "free" as const,
    specialties: ["Hunting Gear", "Archery", "Guided Hunts", "Wilderness Gear"],
    isVerified: false
  }
]

export default function DirectoryPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTier, setSelectedTier] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

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

  // Directory stats
  const totalBusinesses = directoryListings.length
  const verifiedBusinesses = directoryListings.filter(b => b.isVerified).length
  const averageRating = (directoryListings.reduce((sum, b) => sum + b.rating, 0) / totalBusinesses).toFixed(1)
  const totalReviews = directoryListings.reduce((sum, b) => sum + b.reviewCount, 0)

  const businessTypeFilters = [
    { id: "all", label: "All Categories", icon: Building2 },
    { id: "dealer", label: "Dealers & FFLs", icon: Shield },
    { id: "range", label: "Shooting Ranges", icon: Target },
    { id: "training", label: "Training & Education", icon: Award },
    { id: "gunsmith", label: "Gunsmiths", icon: Zap },
    { id: "tactical", label: "Tactical & Gear", icon: MessageSquare }
  ]

  const tierFilters = [
    { id: "all", label: "All Tiers", color: "default" },
    { id: "gold", label: "Gold Partners", color: "warning" },
    { id: "silver", label: "Silver Enhanced", color: "secondary" },
    { id: "copper", label: "Copper Standard", color: "tertiary" },
    { id: "free", label: "Free Listings", color: "default" }
  ]

  return (
    <>
      <SiteNavigation variant="premium" sticky={true} />
      <div className="min-h-screen bg-background theme-directory">
        {/* Directory Hero - Content Left, Card Right (Layout 1) */}
        <section className="relative overflow-hidden bg-gradient-directory-hero px-md py-lg">
          <div className="container mx-auto max-w-site relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
              {/* Content - Left side */}
              <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
                {/* Top Header - Icon, Breadcrumbs & Badges Chunk */}
                <div className="flex items-center gap-base">
                  <div className="bg-white/10 p-base rounded-sm border border-white/20">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-base">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-xs text-sm text-white/60">
                      <span>Home</span>
                      <ChevronRight className="h-4 w-4" />
                      <span className="text-white font-medium">Directory</span>
                    </div>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-xs">
                      <Badge className="bg-white/10 text-white border-white/20">
                        <Building2 className="h-4 w-4 mr-xs" />
                        Verified Businesses
                      </Badge>
                      <Badge className="bg-white/10 text-white border-white/20">
                        <Award className="h-4 w-4 mr-xs" />
                        Partnership Tiers
                      </Badge>
                      <Badge className="bg-white/10 text-white border-white/20">
                        <MapPin className="h-4 w-4 mr-xs" />
                        Local Focus
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Titles - H1 & H2 Butt Buddies */}
                <div className="space-y-xs">
                  <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                    Idaho Gun Stores & <span className="text-white">FFL Dealers Directory</span>
                  </h1>
                  <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                    Licensed Firearms Dealers in Boise & Treasure Valley
                  </h2>
                </div>
                
                {/* Chunky Description */}
                <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
                  Find licensed FFLs, shooting ranges, training facilities, and gunsmiths throughout the Treasure Valley. All businesses are verified and categorized by partnership tier for trusted, professional service.
                </p>
                
                {/* Buttons */}
                <div className="flex gap-base">
                  <Button 
                    size="lg" 
                    className="bg-white text-nav-directory hover:bg-white/90 font-rajdhani font-bold"
                  >
                    <Plus className="h-4 w-4 mr-xs" />
                    List Your Business
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white hover:text-nav-directory"
                  >
                    Partnership Info
                  </Button>
                </div>
              </div>
              
              {/* Featured Business Spotlight - Right side */}
              <div className="lg:col-span-1 py-md min-h-[400px]">
                <div className="relative h-full">
                  <Card className="mica border-nav-directory/30 hover:shadow-elevated transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Gold Partnership Badge */}
                    <div className="absolute top-0 right-0 z-20">
                      <Badge className="bg-gradient-to-r from-nav-directory to-nav-directory text-gruvbox-bg-dark font-rajdhani font-bold text-xs rounded-bl-sm rounded-tr-none">
                        <Award className="h-3 w-3 mr-xs" />
                        GOLD PARTNER
                      </Badge>
                    </div>
                    
                    {/* Business Header */}
                    <CardHeader className="pb-sm space-y-xs">
                      <div className="flex items-start gap-sm">
                        <div className="bg-nav-directory/10 p-sm rounded-sm border border-nav-directory/20">
                          <Building2 className="h-8 w-8 text-nav-directory" />
                        </div>
                        <div className="flex-1 space-y-xs">
                          <h3 className="font-rajdhani text-lg font-bold text-card-foreground leading-tight">Boise Rifle & Pistol Club</h3>
                          <div className="flex items-center gap-xs text-xs text-muted-foreground">
                            <Star className="h-3 w-3 fill-nav-directory text-nav-directory" />
                            <span className="font-medium">4.9</span>
                            <span>•</span>
                            <span>Since 1954</span>
                            <span>•</span>
                            <span>NRA Certified</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 space-y-sm">
                      {/* Services */}
                      <div className="space-y-xs">
                        <h4 className="font-rajdhani font-bold text-nav-directory text-sm">Premium Services</h4>
                        <div className="grid grid-cols-2 gap-xs text-xs">
                          <div className="flex items-center gap-xs">
                            <CheckCircle className="h-3 w-3 text-nav-directory" />
                            <span className="text-card-foreground">Indoor Range</span>
                          </div>
                          <div className="flex items-center gap-xs">
                            <CheckCircle className="h-3 w-3 text-nav-directory" />
                            <span className="text-card-foreground">Training</span>
                          </div>
                          <div className="flex items-center gap-xs">
                            <CheckCircle className="h-3 w-3 text-nav-directory" />
                            <span className="text-card-foreground">Gunsmithing</span>
                          </div>
                          <div className="flex items-center gap-xs">
                            <CheckCircle className="h-3 w-3 text-nav-directory" />
                            <span className="text-card-foreground">Retail Shop</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Special Offers */}
                      <div className="bg-nav-directory/5 p-xs rounded-sm border border-nav-directory/20">
                        <div className="flex items-center gap-xs mb-xs">
                          <Zap className="h-3 w-3 text-nav-directory" />
                          <span className="font-rajdhani font-bold text-nav-directory text-xs">SPECIAL OFFER</span>
                        </div>
                        <p className="text-xs text-card-foreground">New member signup: First month FREE + complimentary safety course</p>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="space-y-xs pt-xs border-t border-border/50">
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 text-nav-directory" />
                          <span>6205 Hill Road, Boise, ID</span>
                        </div>
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <Phone className="h-3 w-3 text-nav-directory" />
                          <span>(208) 555-0198</span>
                        </div>
                      </div>
                      
                      {/* Premium CTA */}
                      <Button 
                        className="w-full bg-gradient-to-r from-nav-directory to-nav-directory text-gruvbox-bg-dark hover:from-nav-directory/90 hover:to-nav-directory/90 font-rajdhani font-bold"
                        size="sm"
                      >
                        <ArrowRight className="h-4 w-4 mr-xs" />
                        VIEW BUSINESS
                      </Button>
                    </CardContent>
                    
                    {/* Bottom Accent Bar */}
                    <div className="h-1 bg-gradient-to-r from-nav-directory to-nav-directory"></div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search-First Section */}
        <section className="py-xl bg-card/50">
          <div className="container mx-auto max-w-site px-md">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
              <div className="lg:col-span-3">
                <div className="space-y-base">
                  <h2 className="font-rajdhani text-2xl font-bold text-card-foreground">Find Local Firearms Businesses</h2>
                  <div className="flex flex-col sm:flex-row gap-base">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search businesses, services, or locations..."
                        className="pl-10 h-12"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-xs">
                      <Button variant="outline" className="gap-xs h-12">
                        <MapPin className="h-4 w-4" />
                        Near Me
                      </Button>
                      <Button variant="outline" className="gap-xs h-12">
                        <Filter className="h-4 w-4" />
                        Filters
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="space-y-base">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-base">
                  <div className="text-center p-base bg-card rounded-sm border">
                    <div className="font-rajdhani text-2xl font-bold text-nav-directory">{totalBusinesses}+</div>
                    <div className="text-sm text-muted-foreground">Local Businesses</div>
                  </div>
                  <div className="text-center p-base bg-card rounded-sm border">
                    <div className="font-rajdhani text-2xl font-bold text-nav-directory">{averageRating}</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-site mx-auto px-md py-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2xl">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-lg">
            
            {/* Business Type Filters */}
            <Card className="mica shadow-present rounded-xs">
              <CardHeader className="pb-base">
                <CardTitle className="font-rajdhani text-xl flex items-center gap-sm text-card-foreground">
                  <Filter className="size-5" />
                  Business Type
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-xs">
                  {businessTypeFilters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={selectedType === filter.id ? "solid" : "ghost"}
                      onClick={() => setSelectedType(filter.id)}
                      className="w-full justify-start gap-sm font-rajdhani font-medium shadow-none rounded-xs"
                    >
                      {React.createElement(filter.icon, { className: "size-4" })}
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tier Filters */}
            <Card className="mica shadow-present rounded-xs">
              <CardHeader className="pb-base">
                <CardTitle className="font-rajdhani text-xl flex items-center gap-sm text-card-foreground">
                  <Award className="size-5" />
                  Membership Tier
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-xs">
                  {tierFilters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={selectedTier === filter.id ? "solid" : "ghost"}
                      onClick={() => setSelectedTier(filter.id)}
                      className="w-full justify-start font-rajdhani font-medium shadow-none rounded-xs"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Directory Info */}
            <Card className="mica shadow-present rounded-xs border-nav-directory/20">
              <CardContent className="pt-base">
                <div className="space-y-base text-center">
                  <div className="space-y-xs">
                    <Target className="size-8 text-nav-directory mx-auto" />
                    <h3 className="font-rajdhani font-bold text-lg text-card-foreground">
                      List Your Business
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Join Idaho's premier firearms directory and connect with thousands of responsible gun owners.
                    </p>
                  </div>
                  <Button className="w-full shadow-elevated hover:shadow-prominent rounded-xs">
                    <Plus className="size-4 mr-xs" />
                    Get Listed
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Listings */}
          <div className="lg:col-span-3 space-y-lg">
            
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base">
              <div>
                <h2 className="font-rajdhani text-2xl font-bold text-card-foreground">
                  {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'Business' : 'Businesses'} Found
                </h2>
                <p className="text-muted-foreground">
                  {selectedType !== "all" && `Filtered by: ${businessTypeFilters.find(f => f.id === selectedType)?.label}`}
                  {selectedTier !== "all" && ` • ${tierFilters.find(f => f.id === selectedTier)?.label}`}
                  {searchQuery && ` • Search: "${searchQuery}"`}
                </p>
              </div>
              
              <div className="flex items-center gap-sm">
                <Button variant="outline" className="shadow-none rounded-xs">
                  <MapPin className="size-4 mr-xs" />
                  Map View
                </Button>
              </div>
            </div>

            {/* Business Cards Grid */}
            <div className="grid gap-lg">
              {filteredBusinesses.length > 0 ? (
                filteredBusinesses.map((business, index) => (
                  <VendorCard
                    key={index}
                    businessName={business.businessName}
                    businessType={business.businessType}
                    description={business.description}
                    address={business.address}
                    phone={business.phone}
                    website={business.website}
                    hours={business.hours}
                    rating={business.rating}
                    reviewCount={business.reviewCount}
                    tier={business.tier}
                    specialties={business.specialties}
                    isVerified={business.isVerified}
                    isSponsored={business.isSponsored}
                    monthlyLeads={business.monthlyLeads}
                    imageUrl={business.imageUrl}
                    className="mica shadow-present hover:shadow-elevated transition-all duration-300 rounded-xs"
                  />
                ))
              ) : (
                <Card className="mica shadow-present rounded-xs">
                  <CardContent className="py-2xl text-center">
                    <div className="space-y-base">
                      <Search className="size-12 text-muted-foreground mx-auto" />
                      <div className="space-y-sm">
                        <h3 className="font-rajdhani font-bold text-xl text-card-foreground">
                          No businesses found
                        </h3>
                        <p className="text-muted-foreground">
                          Try adjusting your filters or search terms to find more results.
                        </p>
                      </div>
                      <Button 
                        onClick={() => {
                          setSelectedType("all")
                          setSelectedTier("all") 
                          setSearchQuery("")
                        }}
                        className="rounded-xs shadow-none"
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Load More */}
            {filteredBusinesses.length > 0 && (
              <div className="text-center pt-lg">
                <Button variant="outline" className="shadow-none rounded-xs">
                  <Eye className="size-4 mr-xs" />
                  Load More Results
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
      <SiteFooter currentPage="directory" />
    </>
  )
}