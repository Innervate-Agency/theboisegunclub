'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import StatCard from '@/components/ui/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Search, ShoppingCart, Filter, ExternalLink, ArrowRight, 
  Store, DollarSign, Package, Star, Eye, Building2, 
  MapPin, Phone, Clock, Shield, TrendingUp, Zap
} from 'lucide-react'

// Marketplace inventory aggregation from local dealers
const marketplaceListings = [
  // Firearms
  {
    id: 1,
    title: "Glock 19 Gen 5",
    description: "9mm, 15+1 capacity, Glock night sights, three magazines included. Excellent condition, barely used.",
    category: "Handguns",
    subcategory: "Semi-Automatic",
    price: 549,
    originalPrice: 599,
    condition: "Like New",
    caliber: "9mm",
    brand: "Glock",
    model: "19 Gen 5",
    vendor: "Valley Gun & Pawn",
    vendorRating: 4.2,
    vendorAddress: "Caldwell, ID",
    vendorPhone: "(208) 555-0321",
    inStock: true,
    quantity: 2,
    lastUpdated: "2025-01-15",
    images: ["/images/marketplace/glock19.jpg"],
    features: ["Night Sights", "3 Magazines", "Case Included"],
    tags: ["Popular", "Concealed Carry", "Reliable"],
    views: 340,
    inquiries: 12,
    featured: true
  },
  {
    id: 2,
    title: "Smith & Wesson M&P 15 Sport II",
    description: "5.56/.223 AR-15 platform rifle. Mid-length gas system, chrome lined barrel, Magpul MOE handguard.",
    category: "Rifles",
    subcategory: "Semi-Automatic",
    price: 679,
    originalPrice: 729,
    condition: "New",
    caliber: "5.56/.223",
    brand: "Smith & Wesson",
    model: "M&P 15 Sport II",
    vendor: "Mountain View Sporting Goods",
    vendorRating: 4.1,
    vendorAddress: "Kuna, ID",
    vendorPhone: "(208) 555-0876",
    inStock: true,
    quantity: 1,
    lastUpdated: "2025-01-12",
    images: ["/images/marketplace/mp15.jpg"],
    features: ["Chrome Lined Barrel", "Magpul Furniture", "10rd Magazine"],
    tags: ["AR-15", "Popular", "Sport Shooting"],
    views: 520,
    inquiries: 8,
    featured: true
  },
  {
    id: 3,
    title: "Remington 700 SPS Tactical",
    description: ".308 Winchester bolt action rifle. Heavy barrel, synthetic stock, excellent for precision shooting.",
    category: "Rifles", 
    subcategory: "Bolt Action",
    price: 675,
    originalPrice: 750,
    condition: "Excellent",
    caliber: ".308 Win",
    brand: "Remington",
    model: "700 SPS Tactical",
    vendor: "Precision Rifle Works",
    vendorRating: 4.9,
    vendorAddress: "Eagle, ID",
    vendorPhone: "(208) 555-0987",
    inStock: true,
    quantity: 1,
    lastUpdated: "2025-01-10",
    images: ["/images/marketplace/rem700.jpg"],
    features: ["Heavy Barrel", "Synthetic Stock", "Bipod Ready"],
    tags: ["Precision", "Long Range", "Tactical"],
    views: 285,
    inquiries: 15,
    featured: false
  },
  
  // Ammunition
  {
    id: 4,
    title: "Federal Premium 9mm 124gr HST",
    description: "Law enforcement grade hollow point ammunition. 50 rounds per box, excellent for personal defense.",
    category: "Ammunition",
    subcategory: "Handgun Ammo",
    price: 32,
    originalPrice: 38,
    condition: "New",
    caliber: "9mm",
    brand: "Federal",
    model: "Premium HST",
    vendor: "Boise Gun Club",
    vendorRating: 4.8,
    vendorAddress: "Boise, ID",
    vendorPhone: "(208) 555-0123",
    inStock: true,
    quantity: 25,
    lastUpdated: "2025-01-14",
    images: ["/images/marketplace/federal-hst.jpg"],
    features: ["50 Round Box", "124gr", "Hollow Point"],
    tags: ["Defense", "Premium", "Law Enforcement"],
    views: 180,
    inquiries: 6,
    featured: false
  },
  {
    id: 5,
    title: "PMC Bronze .223 Remington 55gr",
    description: "Reliable target ammunition. 20 rounds per box, great for range training and practice sessions.",
    category: "Ammunition",
    subcategory: "Rifle Ammo",
    price: 14,
    originalPrice: 16,
    condition: "New",
    caliber: ".223 Rem",
    brand: "PMC",
    model: "Bronze",
    vendor: "Gem State Guns",
    vendorRating: 4.3,
    vendorAddress: "Middleton, ID",
    vendorPhone: "(208) 555-0543",
    inStock: true,
    quantity: 50,
    lastUpdated: "2025-01-13",
    images: ["/images/marketplace/pmc-bronze.jpg"],
    features: ["20 Round Box", "55gr FMJ", "Brass Case"],
    tags: ["Training", "Bulk Available", "Reliable"],
    views: 220,
    inquiries: 4,
    featured: false
  },

  // Accessories
  {
    id: 6,
    title: "Vortex Viper PST Gen II 5-25x50",
    description: "First focal plane rifle scope with illuminated reticle. Perfect for long-range precision shooting.",
    category: "Optics",
    subcategory: "Rifle Scopes",
    price: 899,
    originalPrice: 999,
    condition: "Like New",
    caliber: "Universal",
    brand: "Vortex",
    model: "Viper PST Gen II",
    vendor: "Precision Rifle Works",
    vendorRating: 4.9,
    vendorAddress: "Eagle, ID", 
    vendorPhone: "(208) 555-0987",
    inStock: true,
    quantity: 1,
    lastUpdated: "2025-01-08",
    images: ["/images/marketplace/vortex-scope.jpg"],
    features: ["5-25x Magnification", "50mm Objective", "Illuminated Reticle"],
    tags: ["Premium", "Long Range", "Tactical"],
    views: 425,
    inquiries: 18,
    featured: true
  },
  {
    id: 7,
    title: "Streamlight TLR-1 HL Weapon Light",
    description: "800 lumen tactical weapon light. Fits most pistols and rifles, strobing function included.",
    category: "Accessories",
    subcategory: "Lights & Lasers",
    price: 115,
    originalPrice: 135,
    condition: "Excellent",
    caliber: "Universal",
    brand: "Streamlight",
    model: "TLR-1 HL",
    vendor: "Valley Gun & Pawn",
    vendorRating: 4.2,
    vendorAddress: "Caldwell, ID",
    vendorPhone: "(208) 555-0321",
    inStock: true,
    quantity: 3,
    lastUpdated: "2025-01-11",
    images: ["/images/marketplace/tlr1.jpg"],
    features: ["800 Lumens", "Strobe Function", "Universal Mount"],
    tags: ["Tactical", "Popular", "Law Enforcement"],
    views: 195,
    inquiries: 9,
    featured: false
  },

  // Holsters & Cases
  {
    id: 8,
    title: "Safariland ALS Level II Duty Holster",
    description: "Professional duty holster with automatic locking system. Fits Glock 17/22, right hand draw.",
    category: "Holsters",
    subcategory: "Duty Holsters",
    price: 85,
    originalPrice: 105,
    condition: "Good",
    caliber: "Glock 17/22",
    brand: "Safariland",
    model: "ALS Level II",
    vendor: "Northwest Tactical Academy",
    vendorRating: 4.6,
    vendorAddress: "Star, ID",
    vendorPhone: "(208) 555-0654",
    inStock: true,
    quantity: 2,
    lastUpdated: "2025-01-09",
    images: ["/images/marketplace/safariland.jpg"],
    features: ["Level II Retention", "ALS System", "Right Hand"],
    tags: ["Duty", "Law Enforcement", "Retention"],
    views: 160,
    inquiries: 7,
    featured: false
  }
]

const categories = [
  { label: "All Items", value: "all", count: marketplaceListings.length },
  { label: "Firearms", value: "firearms", count: marketplaceListings.filter(item => item.category === "Handguns" || item.category === "Rifles").length },
  { label: "Ammunition", value: "Ammunition", count: marketplaceListings.filter(item => item.category === "Ammunition").length },
  { label: "Optics", value: "Optics", count: marketplaceListings.filter(item => item.category === "Optics").length },
  { label: "Accessories", value: "Accessories", count: marketplaceListings.filter(item => item.category === "Accessories").length },
  { label: "Holsters", value: "Holsters", count: marketplaceListings.filter(item => item.category === "Holsters").length }
]

const priceRanges = [
  { label: "All Prices", value: "all", count: marketplaceListings.length },
  { label: "Under $50", value: "0-50", count: marketplaceListings.filter(item => item.price < 50).length },
  { label: "$50 - $200", value: "50-200", count: marketplaceListings.filter(item => item.price >= 50 && item.price <= 200).length },
  { label: "$200 - $500", value: "200-500", count: marketplaceListings.filter(item => item.price >= 200 && item.price <= 500).length },
  { label: "$500+", value: "500+", count: marketplaceListings.filter(item => item.price > 500).length }
]

function ProductCard({ item }: { item: typeof marketplaceListings[0] }) {
  const categoryColors = {
    "Handguns": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
    "Rifles": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
    "Ammunition": "bg-rifling-green/20 text-rifling-green border-rifling-green/30",
    "Optics": "bg-scope-blue/20 text-scope-blue border-scope-blue/30",
    "Accessories": "bg-ayu-purple/20 text-ayu-purple border-ayu-purple/30",
    "Holsters": "bg-tactical-gray/20 text-tactical-gray border-tactical-gray/30"
  }

  const conditionColors = {
    "New": "bg-clubhouse-lawn-green/20 text-clubhouse-lawn-green border-clubhouse-lawn-green/30",
    "Like New": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
    "Excellent": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
    "Good": "bg-case-hardened/20 text-case-hardened border-case-hardened/30"
  }

  const savings = item.originalPrice - item.price
  const savingsPercent = Math.round((savings / item.originalPrice) * 100)

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${
      item.featured ? 'ring-2 ring-rusty-orange/30 bg-rusty-orange/5' : ''
    }`}>
      <CardHeader className="pb-base">
        <div className="flex items-start justify-between gap-base mb-xs">
          <div className="flex gap-xs">
            <Badge className={categoryColors[item.category as keyof typeof categoryColors]}>
              {item.category}
            </Badge>
            <Badge className={conditionColors[item.condition as keyof typeof conditionColors]}>
              {item.condition}
            </Badge>
          </div>
          <div className="text-right">
            {item.featured && (
              <Badge className="bg-rusty-orange text-dark-chocolate font-rajdhani font-bold mb-xs">
                Featured
              </Badge>
            )}
            {savings > 0 && (
              <Badge className="bg-rifling-green text-white">
                Save ${savings}
              </Badge>
            )}
          </div>
        </div>
        
        <CardTitle className="font-rajdhani text-xl font-bold text-card-foreground group-hover:text-rusty-orange transition-colors duration-200 leading-tight">
          {item.title}
        </CardTitle>
        
        <div className="flex items-center gap-base">
          <div className="flex items-baseline gap-xs">
            <span className="text-2xl font-rajdhani font-bold text-rusty-orange">
              ${item.price}
            </span>
            {item.originalPrice > item.price && (
              <span className="text-sm text-muted-foreground line-through">
                ${item.originalPrice}
              </span>
            )}
          </div>
          {savingsPercent > 0 && (
            <Badge variant="outline" className="text-rifling-green border-rifling-green/30">
              -{savingsPercent}%
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-base">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
        
        <div className="space-y-xs text-sm">
          <div className="grid grid-cols-2 gap-xs">
            <div className="flex items-center gap-xs">
              <span className="font-medium">Brand:</span>
              <span className="text-muted-foreground">{item.brand}</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="font-medium">Caliber:</span>
              <span className="text-muted-foreground">{item.caliber}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-xs">
          <h4 className="font-medium text-sm">Features:</h4>
          <div className="flex flex-wrap gap-xs">
            {item.features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="pt-xs border-t border-border space-y-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xs">
              <Store className="h-4 w-4 text-rusty-orange" />
              <span className="font-medium text-sm">{item.vendor}</span>
              <div className="flex items-center gap-xs">
                <Star className="h-3 w-3 fill-rusty-orange text-rusty-orange" />
                <span className="text-xs text-muted-foreground">{item.vendorRating}</span>
              </div>
            </div>
            <Badge className={item.inStock ? "bg-clubhouse-lawn-green/20 text-clubhouse-lawn-green border-clubhouse-lawn-green/30" : "bg-safety-red/20 text-safety-red border-safety-red/30"}>
              {item.inStock ? `${item.quantity} Available` : "Out of Stock"}
            </Badge>
          </div>
          
          <div className="flex items-center gap-base text-xs text-muted-foreground">
            <div className="flex items-center gap-xs">
              <MapPin className="h-3 w-3" />
              <span>{item.vendorAddress}</span>
            </div>
            <div className="flex items-center gap-xs">
              <Eye className="h-3 w-3" />
              <span>{item.views} views</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-xs pt-xs">
          <Button 
            className="flex-1 bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
            size="sm"
          >
            <Phone className="h-4 w-4 mr-xs" />
            Contact Dealer
          </Button>
          <Button variant="outline" size="sm" className="flex-shrink-0">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredItems = marketplaceListings.filter(item => {
    const matchesCategory = selectedCategory === "all" || 
      item.category === selectedCategory ||
      (selectedCategory === "firearms" && (item.category === "Handguns" || item.category === "Rifles"))
    
    const matchesPriceRange = selectedPriceRange === "all" || 
      (selectedPriceRange === "0-50" && item.price < 50) ||
      (selectedPriceRange === "50-200" && item.price >= 50 && item.price <= 200) ||
      (selectedPriceRange === "200-500" && item.price >= 200 && item.price <= 500) ||
      (selectedPriceRange === "500+" && item.price > 500)
    
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.vendor.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesPriceRange && matchesSearch
  })

  // Sort by featured first, then by recency
  const sortedItems = filteredItems.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-chocolate/95 to-tactical-gray/90 px-md py-6xl">
        <div className="absolute inset-0 bg-gradient-to-br from-rusty-orange/5 via-transparent to-rusty-orange/8 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-lg">
            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
              <ShoppingCart className="h-4 w-4 mr-xs" />
              Marketplace
            </Badge>
            <h1 className="font-rajdhani text-6xl md:text-7xl font-bold text-range-white leading-tight">
              Treasure Valley <span className="text-rusty-orange">Marketplace</span>
            </h1>
            <p className="text-body-lg text-range-white/80 max-w-3xl mx-auto">
              Browse inventory from local firearms dealers across the Treasure Valley. From firearms and ammunition to accessories and optics - discover great deals from trusted local businesses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-base">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
              >
                <Store className="h-5 w-5 mr-xs" />
                List Your Items
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
              >
                Dealer Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4xl bg-muted/50">
        <div className="container mx-auto max-w-6xl px-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
            <StatCard
              title="Total Items"
              value="1,240+"
              label="In Stock"
              variant="default"
              trend="up"
              trendValue={`${18}%`}
            />
            <StatCard
              title="Local Dealers"
              value="12"
              label="Partners"
              variant="default"
              trend="up"
              trendValue={`${100}%`}
            />
            <StatCard
              title="Avg Savings"
              value="15%"
              label="Off MSRP"
              variant="default"
              trend="up"
              trendValue={`${12}%`}
            />
            <StatCard
              title="Daily Updates"
              value="50+"
              label="New Listings"
              variant="default"
              trend="up"
              trendValue={`${95}%`}
            />
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-6xl px-md">
          <div className="space-y-xl">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-base">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by brand, model, caliber, or dealer..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-xs">
                <Button variant="outline" className="gap-xs">
                  <MapPin className="h-4 w-4" />
                  Near Me
                </Button>
                <Button variant="outline" className="gap-xs">
                  <Filter className="h-4 w-4" />
                  Advanced
                </Button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="space-y-base">
              <h3 className="font-rajdhani text-lg font-bold text-card-foreground">
                Browse by Category
              </h3>
              <div className="flex flex-wrap gap-xs">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className={selectedCategory === category.value ? 
                      "bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange" : 
                      "border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
                    }
                  >
                    {category.label}
                    <Badge variant="secondary" className="ml-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Range Filters */}
            <div className="space-y-base">
              <h3 className="font-rajdhani text-lg font-bold text-card-foreground">
                Filter by Price Range
              </h3>
              <div className="flex flex-wrap gap-xs">
                {priceRanges.map((range) => (
                  <Button
                    key={range.value}
                    variant={selectedPriceRange === range.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPriceRange(range.value)}
                    className={selectedPriceRange === range.value ? 
                      "bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange" : 
                      "border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
                    }
                  >
                    {range.label}
                    <Badge variant="secondary" className="ml-xs">
                      {range.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Listings */}
      <section className="pb-6xl">
        <div className="container mx-auto max-w-6xl px-md">
          <div className="space-y-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">
                Available Items
              </h2>
              <div className="text-muted-foreground">
                {sortedItems.length} {sortedItems.length === 1 ? 'item' : 'items'} found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
              {sortedItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>

            {sortedItems.length === 0 && (
              <div className="text-center py-6xl">
                <div className="space-y-base">
                  <div className="text-6xl">🛒</div>
                  <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
                    No items found
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Try adjusting your search criteria or browse all categories to discover great deals from local dealers.
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedCategory("all")
                      setSelectedPriceRange("all")
                      setSearchQuery("")
                    }}
                    className="bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange"
                  >
                    Show All Items
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-6xl bg-gradient-to-br from-dark-chocolate/95 to-tactical-gray/90">
        <div className="container mx-auto max-w-4xl px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-scale-blue/20 text-scale-blue border-scale-blue/30">
              <Shield className="h-4 w-4 mr-xs" />
              Legal Notice
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-range-white">
              Important <span className="text-rusty-orange">Information</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg text-left max-w-3xl mx-auto">
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-range-white">For Buyers:</h3>
                <ul className="space-y-xs text-range-white/80 text-sm">
                  <li>• All firearm purchases require background check</li>
                  <li>• Must be legally eligible to own firearms</li>
                  <li>• Valid ID required for all transactions</li>
                  <li>• Follow all federal, state, and local laws</li>
                </ul>
              </div>
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-range-white">For Dealers:</h3>
                <ul className="space-y-xs text-range-white/80 text-sm">
                  <li>• Valid FFL required for firearms sales</li>
                  <li>• Maintain accurate inventory records</li>
                  <li>• Update listings within 24 hours</li>
                  <li>• Comply with all ATF regulations</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-range-white/60 max-w-2xl mx-auto">
              The Boise Gun Club Marketplace facilitates connections between buyers and licensed dealers. All transactions must comply with applicable federal, state, and local firearms laws. We do not process payments or handle transfers directly.
            </p>
            <Button 
              size="xl" 
              className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
            >
              Contact Support
              <ArrowRight className="h-5 w-5 ml-xs" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}