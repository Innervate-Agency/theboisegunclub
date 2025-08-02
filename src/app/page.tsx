import { Suspense } from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { MegaHero } from '@/components/ui/mega-hero'
import { FeatureGrid } from '@/components/ui/feature-grid'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { VendorCard } from '@/components/ui/VendorCard'
import { SiteFooter } from '@/components/ui/site-footer'
import { SectionDivider } from '@/components/ui/section-divider'
import { EventCard } from '@/components/ui/EventCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { Calendar, MapPin, Users, GraduationCap, ArrowRight, Mail } from 'lucide-react'

// Sample event data for featured events carousel
const featuredEvents = [
  {
    title: "Basic Pistol Safety Course",
    date: "Saturday, January 15, 2025",
    time: "9:00 AM - 3:00 PM", 
    location: "Boise Gun Club - Main Range",
    description: "NRA certified basic pistol safety course covering fundamentals of safe pistol operation. Perfect for beginners and required for many ranges.",
    eventType: "Training",
    capacity: 20,
    registeredCount: 14,
    price: "$125",
    registrationUrl: "https://example.com/register/basic-pistol",
    featured: true
  },
  {
    title: "Treasure Valley Monthly Trap Shoot",
    date: "Sunday, January 23, 2025", 
    time: "10:00 AM - 2:00 PM",
    location: "Sun Valley Gun Club",
    description: "Monthly competitive trap shooting event. All skill levels welcome. Prizes for top performers in each division.",
    eventType: "Competition",
    capacity: 50,
    registeredCount: 32,
    price: "$45",
    registrationUrl: "https://example.com/register/trap-shoot"
  },
  {
    title: "Women's Shooting League Meetup", 
    date: "Wednesday, January 26, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Idaho Firearms Academy",
    description: "Monthly meetup for women interested in shooting sports. Includes skill building exercises and social networking.",
    eventType: "Social",
    capacity: 25,
    registeredCount: 18,
    price: "Free",
    registrationUrl: "https://example.com/register/womens-league"
  },
  {
    title: "Advanced Rifle Marksmanship",
    date: "Saturday, February 5, 2025",
    time: "8:00 AM - 4:00 PM", 
    location: "Meridian Shooting Complex",
    description: "Advanced rifle shooting techniques covering long-range precision, ballistics calculations, and environmental factors.",
    eventType: "Training",
    capacity: 15,
    registeredCount: 8,
    price: "$275",
    registrationUrl: "https://example.com/register/advanced-rifle"
  },
  {
    title: "Youth Hunter Safety Course",
    date: "Saturday, February 12, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Nampa Outdoor Education Center", 
    description: "State-required hunter safety course for youth ages 10-16. Includes classroom instruction and hands-on range time.",
    eventType: "Education",
    capacity: 30,
    registeredCount: 22,
    price: "$35",
    registrationUrl: "https://example.com/register/youth-hunter-safety"
  }
]

// Sample vendor data for featured businesses
const featuredVendors = [
  {
    name: "Valley Gun & Tactical",
    category: "FFL Dealer",
    description: "Full-service firearms dealer specializing in tactical equipment and custom builds.",
    location: "Meridian, ID",
    tier: "free",
    features: ["New & Used Firearms", "Tactical Gear", "Gunsmithing"],
    phone: "(208) 555-0123",
    website: "https://valleygun.com",
    verified: true
  },
  {
    name: "Precision Rifle Works",
    category: "Gunsmith", 
    description: "Custom rifle building and precision gunsmithing services for competitive shooters.",
    location: "Boise, ID",
    tier: "copper",
    features: ["Custom Builds", "Precision Work", "Competition Prep"],
    phone: "(208) 555-0456",
    website: "https://precisionrifle.com", 
    verified: true
  },
  {
    name: "Idaho Firearms Training Center",
    category: "Training Academy",
    description: "Professional firearms training from basic safety to advanced tactical instruction.",
    location: "Nampa, ID", 
    tier: "silver",
    features: ["CCW Classes", "Advanced Training", "Corporate Training"],
    phone: "(208) 555-0789",
    website: "https://idahofirearms.edu",
    verified: true
  },
  {
    name: "Treasure Valley Armory",
    category: "Premium Dealer",
    description: "Premium firearms dealer featuring high-end rifles, custom work, and collector items.",
    location: "Eagle, ID",
    tier: "gold", 
    features: ["Premium Firearms", "Custom Work", "Collector Items", "VIP Service"],
    phone: "(208) 555-0321",
    website: "https://treasurevalleyarmory.com",
    verified: true
  }
]

// Four pillars content for FeatureGrid
const communityPillars = [
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Unified Calendar",
    description: "Never miss an event with our comprehensive calendar aggregating all firearms-related activities across the Treasure Valley."
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Local Directory", 
    description: "Find trusted local businesses including dealers, ranges, training facilities, and gunsmiths all in one place."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Forum",
    description: "Connect with fellow enthusiasts, share experiences, ask questions, and build lasting relationships in our safe space."
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Education Center",
    description: "Access resources for safety training, legal updates, skill development, and continuing education opportunities."
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Site Navigation */}
      <SiteNavigation variant="default" />

      {/* Section Divider */}
      <SectionDivider variant="clean" />

      {/* Mega Hero Section */}
      <section className="px-[var(--space-md)]">
        <MegaHero
          title="The Undisputed Hub for Firearms in the Treasure Valley"
          description="Connecting Idaho's families, professionals, and enthusiasts with a single, trusted resource for events, training, and community. Built on safety-first principles and family-friendly values."
          primaryCTA={{
            text: "View Events Calendar",
            onClick: () => window.location.href = '/events'
          }}
          secondaryCTA={{
            text: "Find a Local Business", 
            onClick: () => window.location.href = '/directory'
          }}
          height="lg"
          backgroundPreset="warm"
        />
      </section>

      {/* Section Divider */}
      <SectionDivider variant="clean" />

      {/* Feature Grid - Four Pillars */}
      <section className="px-[var(--space-md)] py-[var(--space-xl)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-center text-gunmetal-black mb-[var(--space-xl)]">
            A Community Built On
          </h2>
          <FeatureGrid 
            variant="fourColumns"
            features={communityPillars.map(pillar => ({
              icon: pillar.icon,
              title: pillar.title,
              description: pillar.description
            }))}
          />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="clean" />

      {/* Featured Events Carousel */}
      <section className="px-[var(--space-md)] py-[var(--space-xl)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-center text-gunmetal-black mb-[var(--space-xl)]">
            Featured Upcoming Events
          </h2>
          <Suspense fallback={<LoadingSpinner text="Loading events..." />}>
            <Carousel className="w-full">
              <CarouselContent className="-ml-[var(--space-base)]">
                {featuredEvents.map((event, index) => (
                  <CarouselItem key={index} className="pl-[var(--space-base)] md:basis-1/2 lg:basis-1/3">
                    <EventCard
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      description={event.description}
                      eventType={event.eventType}
                      capacity={event.capacity}
                      registeredCount={event.registeredCount}
                      price={event.price}
                      registrationUrl={event.registrationUrl}
                      featured={event.featured}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Suspense>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="clean" />

      {/* Featured Local Businesses */}
      <section className="px-[var(--space-md)] py-[var(--space-xl)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-center text-gunmetal-black mb-[var(--space-xl)]">
            Featured Local Businesses  
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-lg)]">
            {featuredVendors.map((vendor, index) => (
              <VendorCard
                key={index}
                name={vendor.name}
                category={vendor.category}
                description={vendor.description}
                location={vendor.location}
                tier={vendor.tier as "free" | "copper" | "silver" | "gold"}
                features={vendor.features}
                phone={vendor.phone}
                website={vendor.website}
                verified={vendor.verified}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="clean" />

      {/* Newsletter CTA Section */}
      <section className="px-[var(--space-md)] py-[var(--space-xl)] bg-gradient-hero-warm">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-[var(--space-xl)] shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-rajdhani font-bold text-gunmetal-black">
                Stay Informed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-[var(--space-lg)]">
              <p className="text-lg font-noto-sans text-case-hardened">
                Get a weekly digest of all upcoming events and new articles.
              </p>
              <div className="flex flex-col sm:flex-row gap-[var(--space-base)] max-w-md mx-auto">
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white border-brass-yellow/30 focus:border-brass-yellow"
                />
                <Button 
                  variant="solid-primary" 
                  className="gap-[var(--space-xs)] bg-brass-yellow text-gunmetal-black hover:bg-copper-orange"
                >
                  <Mail className="h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="clean" />

      {/* Site Footer */}
      <SiteFooter variant="default" />
    </div>
  )
}