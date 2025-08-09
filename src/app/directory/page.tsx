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
    businessName: "Caldwell Gun Club",
    businessType: "Shooting Range & Club",
    description: "Established shooting club with outdoor ranges for rifle, pistol, and sporting clays. Member and public shooting with regular competitions.",
    address: "21840 Pond Ln, Caldwell, ID 83607",
    phone: "(208) 555-0432",
    website: "https://caldwellgunclub.org",
    hours: "Wed-Sun: 9AM-5PM, Members: 24/7 access",
    rating: 4.4,
    reviewCount: 51,
    tier: "copper" as const,
    specialties: ["Sporting Clays", "Rifle Range", "Pistol Range", "Competitions", "Memberships"],
    isVerified: true,
    imageUrl: "/images/vendors/caldwell-gun.jpg"
  },

  // Free Tier - Basic Listings
  {
    businessName: "Valley Gun & Pawn",
    businessType: "FFL Dealer & Pawn Shop",
    description: "Full-service gun store with extensive inventory of new and used firearms, accessories, ammunition, and FFL transfer services.",
    address: "890 Main St, Caldwell, ID 83605",
    phone: "(208) 555-0321",
    website: "https://valleygunpawn.com",
    hours: "Mon-Sat: 9AM-7PM, Sun: 11AM-5PM",
    rating: 4.2,
    reviewCount: 38,
    tier: "free" as const,
    specialties: ["New & Used Firearms", "Accessories", "Ammunition", "FFL Transfers"],
    isVerified: true,
    imageUrl: "/images/vendors/valley-gun.jpg"
  },
  {
    businessName: "Mountain View Sporting Goods",
    businessType: "Sporting Goods & Firearms",
    description: "Local sporting goods store specializing in hunting and shooting sports equipment, firearms, and outdoor gear for the Treasure Valley.",
    address: "432 Sports Way, Kuna, ID 83634",
    phone: "(208) 555-0876",
    website: "https://mvfirearms.com",
    hours: "Mon-Sat: 9AM-6PM, Sun: 12PM-5PM",
    rating: 4.1,
    reviewCount: 29,
    tier: "free" as const,
    specialties: ["Hunting Gear", "Firearms Sales", "Ammunition", "Outdoor Equipment"],
    isVerified: true,
    imageUrl: "/images/vendors/mountain-view.jpg"
  },
  {
    businessName: "Gem State Guns",
    businessType: "FFL Dealer",
    description: "Local firearms dealer specializing in transfers, consignments, and custom orders. Personalized service for all your firearms needs.",
    address: "123 Liberty St, Middleton, ID 83644",
    phone: "(208) 555-0543",
    website: "https://gemstateguns.com",
    hours: "Tue-Sat: 10AM-6PM, Closed Sun-Mon",
    rating: 4.3,
    reviewCount: 22,
    tier: "free" as const,
    specialties: ["FFL Transfers", "Custom Orders", "Consignments", "Accessories"],
    isVerified: true,
    imageUrl: "/images/vendors/gem-state.jpg"
  }
]

const businessTypes = [
  { label: "All Businesses", value: "all", count: directoryListings.length },
  { label: "FFL Dealers", value: "dealer", count: directoryListings.filter(b => b.businessType.toLowerCase().includes("dealer") || b.businessType.toLowerCase().includes("gun")).length },
  { label: "Shooting Ranges", value: "range", count: directoryListings.filter(b => b.businessType.toLowerCase().includes("range") || b.businessType.toLowerCase().includes("club")).length },
  { label: "Training", value: "training", count: directoryListings.filter(b => b.businessType.toLowerCase().includes("training") || b.businessType.toLowerCase().includes("academy")).length },
  { label: "Gunsmiths", value: "gunsmith", count: directoryListings.filter(b => b.businessType.toLowerCase().includes("gunsmith") || b.businessType.toLowerCase().includes("custom")).length },
]

const tierFilters = [
  { label: "Gold Partners", value: "gold", count: directoryListings.filter(b => b.tier === "gold").length, color: "rusty-orange" },
  { label: "Silver Members", value: "silver", count: directoryListings.filter(b => b.tier === "silver").length, color: "stainless-steel" },
  { label: "Copper Members", value: "copper", count: directoryListings.filter(b => b.tier === "copper").length, color: "rusty-orange" },
  { label: "Free Listings", value: "free", count: directoryListings.filter(b => b.tier === "free").length, color: "muted-foreground" }
]

export default function DirectoryPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTier, setSelectedTier] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredBusinesses = directoryListings.filter(business => {
    const matchesType = selectedType === "all" || 
      (selectedType === "dealer" && (business.businessType.toLowerCase().includes("dealer") || business.businessType.toLowerCase().includes("gun") || business.businessType.toLowerCase().includes("pawn"))) ||
      (selectedType === "range" && (business.businessType.toLowerCase().includes("range") || business.businessType.toLowerCase().includes("club"))) ||
      (selectedType === "training" && (business.businessType.toLowerCase().includes("training") || business.businessType.toLowerCase().includes("academy"))) ||
      (selectedType === "gunsmith" && (business.businessType.toLowerCase().includes("gunsmith") || business.businessType.toLowerCase().includes("custom")))
    
    const matchesTier = selectedTier === "all" || business.tier === selectedTier
    
    const matchesSearch = searchQuery === "" || 
      business.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.businessType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesType && matchesTier && matchesSearch
  })

  // Sort by tier priority (gold > silver > copper > free) then by rating
  const sortedBusinesses = filteredBusinesses.sort((a, b) => {
    const tierOrder = { gold: 4, silver: 3, copper: 2, free: 1 }
    const tierDiff = tierOrder[b.tier] - tierOrder[a.tier]
    if (tierDiff !== 0) return tierDiff
    return (b.rating || 0) - (a.rating || 0)
  })

  return (
    <>
      <SiteNavigation variant="premium" sticky={true} />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb Hero - Left Aligned */}
        <section className="bg-gradient-to-r from-dark-chocolate/95 to-warm-stone/90 border-b border-border/20">
          <div className="container mx-auto max-w-site px-md py-lg">
            <div className="flex items-center gap-xs text-sm text-range-white/60 mb-base">
              <span>Home</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-rusty-orange">Directory</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-center">
              <div className="lg:col-span-2 space-y-base">
                <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30 w-fit">
                  <Building2 className="h-4 w-4 mr-xs" />
                  Business Directory
                </Badge>
                <h1 className="font-rajdhani text-4xl md:text-5xl font-bold text-range-white leading-tight">
                  Treasure Valley Directory
                </h1>
                <p className="text-body-lg text-range-white/80 max-w-2xl">
                  Connect with verified firearms businesses across Idaho. From FFLs and ranges to training and custom work.
                </p>
                <div className="flex gap-base">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
                  >
                    <Plus className="h-4 w-4 mr-xs" />
                    List Your Business
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
                  >
                    Partnership Info
                  </Button>
                </div>
              </div>
              
              {/* Featured Business Spotlight */}
              <div className="lg:col-span-1">
                <Card className="bg-white/5 border-rusty-orange/30 hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="pb-xs">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-rusty-orange text-dark-chocolate font-rajdhani font-bold">
                        <Award className="h-3 w-3 mr-xs" />
                        Gold Partner
                      </Badge>
                      <div className="flex items-center gap-xs text-xs text-range-white/60">
                        <Star className="h-3 w-3 fill-rusty-orange text-rusty-orange" />
                        <span>4.8</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-xs">
                    <h3 className="font-rajdhani font-bold text-range-white text-lg">Boise Gun Club</h3>
                    <p className="text-sm text-range-white/80">Premier Shooting Range & Club</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-xs text-xs text-range-white/60">
                        <TrendingUp className="h-3 w-3" />
                        <span>245 leads this month</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-rusty-orange hover:text-rusty-orange p-0">
                        View Details <ArrowRight className="h-3 w-3 ml-xs" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                  <div className="text-center p-base bg-card rounded-button border">
                    <div className="font-rajdhani text-2xl font-bold text-rusty-orange">127+</div>
                    <div className="text-sm text-muted-foreground">Local Businesses</div>
                  </div>
                  <div className="text-center p-base bg-card rounded-button border">
                    <div className="font-rajdhani text-2xl font-bold text-rusty-orange">4.6</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Type Categories */}
        <section className="py-xl">
          <div className="container mx-auto max-w-site px-md">
            <div className="space-y-base">
              <h2 className="font-rajdhani text-2xl font-bold text-card-foreground">Browse by Category</h2>
              <div className="flex flex-wrap gap-xs">
                {businessTypes.map((type) => (
                  <Button
                    key={type.value}
                    variant={selectedType === type.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type.value)}
                    className={selectedType === type.value ? 
                      "bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange" : 
                      "border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
                    }
                  >
                    {type.label}
                    <Badge variant="secondary" className="ml-xs">
                      {type.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Partners & Trust Signals */}
        <section className="py-xl bg-muted/30">
          <div className="container mx-auto max-w-site px-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
              
              {/* Partnership Tiers */}
              <div className="space-y-base">
                <div className="flex items-center justify-between">
                  <h2 className="font-rajdhani text-2xl font-bold text-card-foreground">Partnership Tiers</h2>
                  <Button variant="ghost" className="text-rusty-orange hover:text-rusty-orange">
                    View All <ArrowRight className="h-4 w-4 ml-xs" />
                  </Button>
                </div>
                
                <div className="space-y-base">
                  {tierFilters.map((tier) => (
                    <Card key={tier.value} className="p-base hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-base">
                          <div className={`w-3 h-3 rounded-full bg-${tier.color}`}></div>
                          <div>
                            <h3 className="font-medium text-card-foreground">{tier.label}</h3>
                            <div className="text-sm text-muted-foreground">
                              {tier.count} businesses • Enhanced features & visibility
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setSelectedTier(tier.value)}
                          className="text-rusty-orange hover:text-rusty-orange"
                        >
                          Browse
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Trust Signals & Community */}
              <div className="space-y-base">
                <h2 className="font-rajdhani text-2xl font-bold text-card-foreground">Why Choose Directory Partners</h2>
                
                <Card className="p-lg bg-gradient-to-br from-rusty-orange/5 to-rusty-orange/5">
                  <div className="space-y-base">
                    <div className="flex items-center gap-base">
                      <div className="bg-rusty-orange/20 p-base rounded-full">
                        <CheckCircle className="h-6 w-6 text-rusty-orange" />
                      </div>
                      <div>
                        <div className="font-rajdhani text-2xl font-bold text-card-foreground">100%</div>
                        <div className="text-sm text-muted-foreground">Verified Businesses</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Every business in our directory is verified for licensing, insurance, and community standing.
                    </p>
                  </div>
                </Card>

                <div className="space-y-base">
                  <h3 className="font-medium text-card-foreground">Trust Features</h3>
                  {[
                    { icon: Shield, label: "FFL License Verified", desc: "All dealers verified with ATF database" },
                    { icon: Star, label: "Customer Reviews", desc: "Real reviews from verified customers" },
                    { icon: Award, label: "Community Endorsed", desc: "Recommended by local enthusiasts" }
                  ].map((feature, i) => (
                    <Card key={i} className="p-base">
                      <div className="flex items-center gap-base">
                        <feature.icon className="h-5 w-5 text-rusty-orange" />
                        <div>
                          <h4 className="font-medium text-sm">{feature.label}</h4>
                          <div className="text-xs text-muted-foreground">{feature.desc}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-base bg-rifling-green/10 border-rifling-green/20">
                  <div className="flex items-center gap-xs text-rifling-green">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-medium">Instant Contact & Booking</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-xs">
                    Direct phone, email, and website access with verified contact information.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

      {/* Directory Listings */}
      <section className="pb-6xl">
        <div className="container mx-auto max-w-6xl px-md">
          <div className="space-y-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">
                {selectedType === "all" ? "All Businesses" : businessTypes.find(t => t.value === selectedType)?.label}
              </h2>
              <div className="text-muted-foreground">
                {sortedBusinesses.length} {sortedBusinesses.length === 1 ? 'business' : 'businesses'} found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
              {sortedBusinesses.map((business, index) => (
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
                />
              ))}
            </div>

            {sortedBusinesses.length === 0 && (
              <div className="text-center py-6xl">
                <div className="space-y-base">
                  <div className="text-6xl">🏢</div>
                  <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
                    No businesses found
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Try adjusting your search criteria or browse all businesses to discover local firearms providers in the Treasure Valley.
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedType("all")
                      setSelectedTier("all")
                      setSearchQuery("")
                    }}
                    className="bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange"
                  >
                    Show All Businesses
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-6xl bg-gradient-to-br from-dark-chocolate/95 to-warm-stone/90">
        <div className="container mx-auto max-w-4xl px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
              <Shield className="h-4 w-4 mr-xs" />
              Partnership Program
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-range-white">
              Join as a <span className="text-rusty-orange">Partner</span>
            </h2>
            <p className="text-body-lg text-range-white/80 max-w-2xl mx-auto">
              Get enhanced visibility, lead generation, and exclusive benefits in Treasure Valley's premier firearms business directory. Multiple partnership tiers available.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-base text-left">
              <Card className="p-lg bg-white/5 border-rusty-orange/20">
                <CardHeader className="pb-base">
                  <CardTitle className="text-rusty-orange font-rajdhani">Gold Partner</CardTitle>
                </CardHeader>
                <CardContent className="space-y-xs text-range-white/80">
                  <div className="flex items-center gap-xs"><Shield className="h-4 w-4 text-rusty-orange" /> Enhanced listing with priority placement</div>
                  <div className="flex items-center gap-xs"><TrendingUp className="h-4 w-4 text-rusty-orange" /> Lead generation tracking</div>
                  <div className="flex items-center gap-xs"><Star className="h-4 w-4 text-rusty-orange" /> Sponsored badge and featured placement</div>
                </CardContent>
              </Card>
              <Card className="p-lg bg-white/5 border-stainless-steel/20">
                <CardHeader className="pb-base">
                  <CardTitle className="text-stainless-steel font-rajdhani">Silver Member</CardTitle>
                </CardHeader>
                <CardContent className="space-y-xs text-range-white/80">
                  <div className="flex items-center gap-xs"><Shield className="h-4 w-4 text-stainless-steel" /> Enhanced listing with extra details</div>
                  <div className="flex items-center gap-xs"><Users className="h-4 w-4 text-stainless-steel" /> Customer review management</div>
                  <div className="flex items-center gap-xs"><MapPin className="h-4 w-4 text-stainless-steel" /> Map integration and hours display</div>
                </CardContent>
              </Card>
              <Card className="p-lg bg-white/5 border-rusty-orange/20">
                <CardHeader className="pb-base">
                  <CardTitle className="text-rusty-orange font-rajdhani">Copper Member</CardTitle>
                </CardHeader>
                <CardContent className="space-y-xs text-range-white/80">
                  <div className="flex items-center gap-xs"><Building2 className="h-4 w-4 text-rusty-orange" /> Standard enhanced listing</div>
                  <div className="flex items-center gap-xs"><Phone className="h-4 w-4 text-rusty-orange" /> Contact information display</div>
                  <div className="flex items-center gap-xs"><Target className="h-4 w-4 text-rusty-orange" /> Specialty tags and categories</div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-base justify-center">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
              >
                Start Partnership
                <ArrowRight className="h-5 w-5 ml-xs" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <SiteFooter />
  </>
)
}