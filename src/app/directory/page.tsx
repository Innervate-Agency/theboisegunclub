import { Suspense } from 'react'
import { PageHero } from '@/components/ui/page-hero'
import { VendorCard } from '@/components/ui/VendorCard'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { SiteFooter } from '@/components/ui/site-footer'
import { NavigationFusion } from '@/components/ui/navigation-fusion'
import { NewThemeToggle } from '@/components/ui/NewThemeToggle'
import { Search, MapPin, Filter, Star, Clock, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

// Treasure Valley business directory data with tier-based listings
const directoryListings = [
  {
    id: 1,
    businessName: "Boise Gun Club",
    businessType: "Shooting Range & Club",
    description: "Premier outdoor shooting facility with trap, skeet, and rifle ranges. NRA certified instruction and competition hosting.",
    address: "Boise, ID",
    tier: "gold" as const,
    specialties: ["Trap & Skeet", "Rifle Range", "Training", "Competitions", "Pro Shop"],
    phone: "(208) 555-0123",
    website: "https://boisegunclub.com",
    isVerified: true
  },
  {
    id: 2,
    businessName: "Treasure Valley Gunsmith",
    businessType: "Custom Gunsmith",
    description: "Expert gunsmithing services including custom builds, precision rifle work, and restoration services.",
    address: "Meridian, ID",
    tier: "silver" as const,
    specialties: ["Custom Builds", "Precision Work", "Restoration", "Cerakote Finishing"],
    phone: "(208) 555-0456",
    website: "https://tvgunsmith.com",
    isVerified: true
  },
  {
    id: 3,
    businessName: "Idaho Firearms Academy",
    businessType: "Training Facility",
    description: "Professional firearms training from basic safety to advanced tactical courses. Corporate training available.",
    address: "Nampa, ID",
    tier: "copper" as const,
    specialties: ["CCW Classes", "Basic Safety", "Advanced Tactical", "Corporate Training"],
    phone: "(208) 555-0789",
    website: "https://idahofirearms.edu",
    isVerified: true
  },
  {
    id: 4,
    businessName: "Valley Gun & Pawn",
    businessType: "FFL Dealer",
    description: "Full-service gun store with extensive inventory of new and used firearms, accessories, and ammunition.",
    address: "Caldwell, ID",
    tier: "free" as const,
    specialties: ["New & Used Firearms", "Accessories", "Ammunition", "FFL Transfers"],
    phone: "(208) 555-0321",
    website: "https://valleygunpawn.com",
    isVerified: true
  },
  {
    id: 5,
    businessName: "Precision Rifle Works",
    businessType: "Custom Shop",
    description: "Specialized in long-range precision rifles, custom bolt actions, and competition rifle builds.",
    address: "Eagle, ID",
    tier: "gold" as const,
    specialties: ["Precision Rifles", "Custom Bolt Actions", "Competition Builds", "Load Development"],
    phone: "(208) 555-0987",
    website: "https://precisionrifle.com",
    isVerified: true
  },
  {
    id: 6,
    businessName: "Northwest Firearms Training",
    businessType: "Training Academy",
    description: "Comprehensive firearms education covering everything from basic safety to law enforcement training.",
    address: "Star, ID",
    tier: "copper" as const,
    specialties: ["Basic Safety", "Hunter Education", "Law Enforcement", "Youth Programs"],
    phone: "(208) 555-0654",
    website: "https://nwfirearms.edu",
    isVerified: true
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
        title="Treasure Valley Business Directory"
        subtitle="Building a comprehensive directory of firearms businesses across the region. Join us as a founding partner."
        backgroundPreset="warm"
        primaryAction={{ text: "List Your Business", href: "#business-submission" }}
        secondaryAction={{ text: "Learn More", href: "#about-directory" }}
      />

      {/* Search & Filter Section */}
      <section className="py-[var(--space-xl)] bg-gradient-hero-warm">
        <div className="max-w-6xl mx-auto px-[var(--space-md)]">
          <div className="flex flex-col md:flex-row gap-[var(--space-base)] mb-[var(--space-lg)]">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 icon-sm text-case-hardened" />
                <Input
                  placeholder="Search businesses, services, or locations..."
                  className="bg-white border-brass-yellow/30 focus:border-brass-yellow"
                  style={{paddingLeft: '48px'}}
                />
              </div>
            </div>
            <div className="flex gap-[var(--space-xs)]">
              <Button variant="secondary" className="border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                <MapPin className="icon-sm mr-[var(--space-xs)]" />
                Location
              </Button>
              <Button variant="secondary" className="border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                <Filter className="icon-sm mr-[var(--space-xs)]" />
                Filters
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-[var(--space-xs)]">
            {[
              { label: "All Businesses", value: "all", active: true },
              { label: "FFL Dealers", value: "dealer" },
              { label: "Shooting Ranges", value: "shooting-range" },
              { label: "Training Facilities", value: "training" },
              { label: "Custom Gunsmiths", value: "gunsmith" },
              { label: "Shooting Clubs", value: "club" }
            ].map((category) => (
              <Button
                key={category.value}
                variant={category.active ? "default" : "secondary"}
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

          {/* Membership Tier Filter */}
          <div className="mt-[var(--space-base)] flex flex-wrap gap-[var(--space-xs)]">
            <span className="text-sm font-noto-sans text-case-hardened self-center mr-[var(--space-xs)]">
              Filter by Membership:
            </span>
            {[
              { label: "Gold Partners", value: "gold", color: "bg-brass-yellow" },
              { label: "Silver Members", value: "silver", color: "bg-stainless-steel" },
              { label: "Copper Members", value: "copper", color: "bg-copper-orange" },
              { label: "Free Listings", value: "free", color: "bg-case-hardened" }
            ].map((tier) => (
              <Button
                key={tier.value}
                variant="secondary"
                size="sm"
                className={`border-${tier.value === 'gold' ? 'brass-yellow' : tier.value === 'silver' ? 'stainless-steel' : tier.value === 'copper' ? 'copper-orange' : 'case-hardened'}/30 text-${tier.value === 'gold' ? 'brass-yellow' : tier.value === 'silver' ? 'stainless-steel' : tier.value === 'copper' ? 'copper-orange' : 'case-hardened'} hover:${tier.color} hover:text-white`}
              >
                {tier.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Coming Soon */}
      <section id="about-directory" className="py-[var(--space-xl)]">
        <div className="max-w-6xl mx-auto px-[var(--space-md)]">
          <div className="text-center mb-[var(--space-xl)]">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
              Building Treasure Valley's Definitive Firearms Directory
            </h2>
            <p className="text-lg text-case-hardened font-noto-sans max-w-3xl mx-auto">
              We're creating the most comprehensive directory of firearms businesses in the region. Our research has identified 117+ local businesses across FFLs, ranges, training, gunsmithing, and auction services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)] mb-[var(--space-xl)]">
            <Card className="p-[var(--space-md)] text-center">
              <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Retail Vendors & FFLs
              </h3>
              <p className="text-case-hardened font-noto-sans text-sm mb-[var(--space-base)]">
                Gun stores, sporting goods, and licensed dealers across the valley
              </p>
              <div className="text-2xl font-rajdhani font-bold text-brass-yellow">19+</div>
              <div className="text-sm text-case-hardened">Businesses Identified</div>
            </Card>
            
            <Card className="p-[var(--space-md)] text-center">
              <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Training & Education
              </h3>
              <p className="text-case-hardened font-noto-sans text-sm mb-[var(--space-base)]">
                Certified instructors and training academies
              </p>
              <div className="text-2xl font-rajdhani font-bold text-brass-yellow">9+</div>
              <div className="text-sm text-case-hardened">Training Providers</div>
            </Card>
            
            <Card className="p-[var(--space-md)] text-center">
              <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Ranges & Venues
              </h3>
              <p className="text-case-hardened font-noto-sans text-sm mb-[var(--space-base)]">
                Shooting ranges, clubs, and competition venues
              </p>
              <div className="text-2xl font-rajdhani font-bold text-brass-yellow">9+</div>
              <div className="text-sm text-case-hardened">Shooting Facilities</div>
            </Card>
          </div>

          {/* Business Submission Form */}
          <div id="business-submission" className="bg-gradient-hero-warm rounded-lg border border-brass-yellow/20 p-[var(--space-xl)]">
            <div className="text-center mb-[var(--space-lg)]">
              <h3 className="text-2xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Join as a Founding Partner
              </h3>
              <p className="text-lg text-case-hardened font-noto-sans max-w-2xl mx-auto">
                Be among the first businesses featured in Treasure Valley's premier firearms directory. No cost to join during our launch phase.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-[var(--space-base)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-base)]">
                <Input placeholder="Business Name" className="bg-white border-brass-yellow/30 focus:border-brass-yellow" />
                <Input placeholder="Your Name" className="bg-white border-brass-yellow/30 focus:border-brass-yellow" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-base)]">
                <Input placeholder="Phone Number" className="bg-white border-brass-yellow/30 focus:border-brass-yellow" />
                <Input placeholder="Email Address" className="bg-white border-brass-yellow/30 focus:border-brass-yellow" />
              </div>
              <Input placeholder="Business Address" className="bg-white border-brass-yellow/30 focus:border-brass-yellow" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-base)]">
                <select className="px-[var(--space-base)] py-[var(--space-xs)] border border-brass-yellow/30 rounded-lg bg-white text-sm font-noto-sans">
                  <option>Business Type</option>
                  <option>FFL Dealer / Gun Store</option>
                  <option>Shooting Range</option>
                  <option>Training / Education</option>
                  <option>Gunsmith</option>
                  <option>Shooting Club</option>
                  <option>Auction House</option>
                  <option>Other</option>
                </select>
                <Input placeholder="Website (if applicable)" className="bg-white border-brass-yellow/30 focus:border-brass-yellow" />
              </div>
              <textarea 
                placeholder="Brief description of your business and services..."
                className="w-full px-[var(--space-base)] py-[var(--space-xs)] border border-brass-yellow/30 rounded-lg bg-white text-sm font-noto-sans min-h-[100px] focus:border-brass-yellow focus:outline-none"
              />
              
              <div className="text-center pt-[var(--space-base)]">
                <Button size="lg" className="bg-brass-yellow text-gunmetal-black hover:bg-copper-orange font-rajdhani font-semibold">
                  Submit Business Information
                </Button>
                <p className="text-sm text-case-hardened mt-[var(--space-xs)]">
                  We'll review and contact you within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}