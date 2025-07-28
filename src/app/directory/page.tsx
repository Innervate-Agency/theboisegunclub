import { Suspense } from 'react'
import { PageHero } from '@/components/ui/page-hero'
import { DirectoryCard } from '@/components/ui/directory-card'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { SiteFooter } from '@/components/ui/site-footer'
import { NavigationFusion } from '@/components/ui/navigation-fusion'
import { NewThemeToggle } from '@/components/ui/NewThemeToggle'
import { Search, MapPin, Filter, Star, Clock, Phone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Sample directory data
const directoryListings = [
  {
    id: 1,
    name: "Boise Gun Club",
    category: "shooting-range",
    description: "Premier outdoor shooting facility with trap, skeet, and rifle ranges. NRA certified instruction available.",
    location: "Boise, ID",
    rating: 4.8,
    reviewCount: 127,
    priceRange: "$$",
    features: ["Outdoor Range", "Training", "Equipment Rental", "Pro Shop"],
    hours: "8AM - 6PM",
    phone: "(208) 555-0123",
    website: "https://boisegunclub.com",
    verified: true,
    image: "/images/directory/boise-gun-club.jpg"
  },
  {
    id: 2,
    name: "Treasure Valley Gunsmith",
    category: "gunsmith",
    description: "Expert gunsmithing services including custom builds, repairs, and restoration work.",
    location: "Meridian, ID",
    rating: 4.9,
    reviewCount: 89,
    priceRange: "$$$",
    features: ["Custom Work", "Repairs", "Restoration", "Cerakote"],
    hours: "9AM - 5PM",
    phone: "(208) 555-0456",
    website: "https://tvgunsmith.com",
    verified: true,
    image: "/images/directory/gunsmith.jpg"
  },
  {
    id: 3,
    name: "Idaho Firearms Academy",
    category: "training",
    description: "Professional firearms training from basic safety to advanced tactical courses.",
    location: "Nampa, ID",
    rating: 4.7,
    reviewCount: 203,
    priceRange: "$$",
    features: ["CCW Classes", "Basic Training", "Advanced Courses", "Group Training"],
    hours: "7AM - 8PM",
    phone: "(208) 555-0789",
    website: "https://idahofirearms.edu",
    verified: true,
    image: "/images/directory/training.jpg"
  },
  {
    id: 4,
    name: "Valley Gun & Pawn",
    category: "dealer",
    description: "Full-service gun store with new and used firearms, accessories, and ammunition.",
    location: "Caldwell, ID",
    rating: 4.5,
    reviewCount: 156,
    priceRange: "$$",
    features: ["New & Used", "Accessories", "Ammo", "Transfers"],
    hours: "10AM - 7PM",
    phone: "(208) 555-0321",
    website: "https://valleygunpawn.com",
    verified: true,
    image: "/images/directory/gun-store.jpg"
  }
]

const navItems = [
  { label: 'Home', href: '/', icon: <Search className="h-4 w-4" /> },
  { label: 'Directory', href: '/directory', icon: <MapPin className="h-4 w-4" />, active: true },
  { label: 'Events', href: '/events', icon: <Clock className="h-4 w-4" /> },
  { label: 'Training', href: '/training', icon: <Star className="h-4 w-4" /> }
]

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <NavigationFusion 
          items={navItems}
          variant="glass"
          orientation="horizontal"
        />
      </div>

      {/* Theme Toggle */}
      <NewThemeToggle variant="floating" />

      {/* Page Hero */}
      <PageHero
        title="Business Directory"
        subtitle="Find trusted firearms businesses across Treasure Valley"
        backgroundPreset="warm"
        primaryAction={{ text: "List Your Business", href: "/directory/add" }}
        secondaryAction={{ text: "View Map", href: "/directory/map" }}
      />

      {/* Search & Filter Section */}
      <section className="py-12 bg-gradient-hero-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 icon-sm text-case-hardened" />
                <Input
                  placeholder="Search businesses, services, or locations..."
                  className="pl-10 bg-white border-brass-yellow/30 focus:border-brass-yellow"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                <MapPin className="icon-sm mr-2" />
                Location
              </Button>
              <Button variant="outline" className="border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                <Filter className="icon-sm mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "All", value: "all", active: true },
              { label: "Gun Stores", value: "dealer" },
              { label: "Shooting Ranges", value: "shooting-range" },
              { label: "Training", value: "training" },
              { label: "Gunsmiths", value: "gunsmith" },
              { label: "Clubs", value: "club" }
            ].map((category) => (
              <Button
                key={category.value}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={
                  category.active
                    ? "bg-brass-yellow text-gunmetal-black"
                    : "border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Listings */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-rajdhani font-bold text-gunmetal-black">
              {directoryListings.length} Businesses Found
            </h2>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-noto-sans">
              <option>Sort by Relevance</option>
              <option>Sort by Rating</option>
              <option>Sort by Distance</option>
              <option>Sort by Name</option>
            </select>
          </div>

          <Suspense fallback={<LoadingSpinner text="Loading directory..." />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {directoryListings.map((listing) => (
                <DirectoryCard
                  key={listing.id}
                  name={listing.name}
                  category={listing.category}
                  description={listing.description}
                  location={listing.location}
                  rating={listing.rating}
                  reviewCount={listing.reviewCount}
                  priceRange={listing.priceRange}
                  features={listing.features}
                  verified={listing.verified}
                  imageUrl={listing.image}
                  onViewDetails={() => console.log('View details for', listing.name)}
                  onContact={() => console.log('Contact', listing.name)}
                />
              ))}
            </div>
          </Suspense>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-brass-yellow text-gunmetal-black hover:bg-copper-orange font-rajdhani font-semibold">
              Load More Businesses
            </Button>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}