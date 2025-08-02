import { Suspense } from 'react'
import { PageHero } from '@/components/ui/page-hero'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { SiteFooter } from '@/components/ui/site-footer'
import { NavigationFusion } from '@/components/ui/navigation-fusion'
import { NewThemeToggle } from '@/components/ui/NewThemeToggle'
import { EventImage } from '@/components/ui/UnsplashImage'
import { 
  Calendar, Clock, MapPin, Users, Trophy, Target, 
  Filter, Search, Star, DollarSign, Info 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "Monthly Trap Shooting Competition",
    description: "Join us for our monthly trap shooting competition open to all skill levels. Prizes for top shooters in each division.",
    date: "2024-02-15",
    time: "9:00 AM",
    endTime: "4:00 PM",
    location: "Boise Gun Club",
    address: "1234 Range Road, Boise, ID",
    category: "competition",
    difficulty: "All Levels",
    price: 35,
    capacity: 64,
    registered: 42,
    organizer: "Boise Gun Club",
    features: ["Prizes", "Lunch Included", "Equipment Rental"],
    image: "/images/events/trap-competition.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Basic Pistol Safety Course",
    description: "NRA-certified basic pistol safety course covering fundamentals, safety, and marksmanship basics.",
    date: "2024-02-18",
    time: "10:00 AM",
    endTime: "3:00 PM",
    location: "Idaho Firearms Academy",
    address: "5678 Training Way, Nampa, ID",
    category: "training",
    difficulty: "Beginner",
    price: 125,
    capacity: 16,
    registered: 12,
    organizer: "Idaho Firearms Academy",
    features: ["NRA Certified", "Certificate", "Materials Included"],
    image: "/images/events/pistol-training.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Concealed Carry Workshop",
    description: "Comprehensive CCW course covering legal aspects, defensive tactics, and practical shooting skills.",
    date: "2024-02-22",
    time: "8:00 AM",
    endTime: "5:00 PM",
    location: "Treasure Valley Training Center",
    address: "9012 Tactical Drive, Meridian, ID",
    category: "training",
    difficulty: "Intermediate",
    price: 185,
    capacity: 20,
    registered: 18,
    organizer: "Treasure Valley Training",
    features: ["CCW Permit", "Live Fire", "Legal Briefing"],
    image: "/images/events/ccw-workshop.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Youth Clay Shooting Clinic",
    description: "Introduction to clay shooting for youth ages 12-17. Safety-focused with certified instructors.",
    date: "2024-02-25",
    time: "1:00 PM",
    endTime: "5:00 PM",
    location: "Valley Shooting Sports",
    address: "3456 Sports Lane, Caldwell, ID",
    category: "youth",
    difficulty: "Beginner",
    price: 45,
    capacity: 24,
    registered: 16,
    organizer: "Valley Shooting Sports",
    features: ["Youth Program", "Safety Focused", "Equipment Provided"],
    image: "/images/events/youth-clinic.jpg",
    featured: false
  }
]

const navItems = [
  { label: 'Home', href: '/', icon: <Search className="h-4 w-4" /> },
  { label: 'Directory', href: '/directory', icon: <MapPin className="h-4 w-4" /> },
  { label: 'Events', href: '/events', icon: <Clock className="h-4 w-4" />, active: true },
  { label: 'Training', href: '/training', icon: <Star className="h-4 w-4" /> }
]

function EventCard({ event }: { event: typeof upcomingEvents[0] }) {
  const spotsLeft = event.capacity - event.registered
  const isAlmostFull = spotsLeft <= 5
  const categoryColors = {
    competition: "bg-trophy-gold/20 text-trophy-gold border-trophy-gold/30",
    training: "bg-scope-blue/20 text-scope-blue border-scope-blue/30",
    youth: "bg-rifling-green/20 text-rifling-green border-rifling-green/30",
    social: "bg-copper-orange/20 text-copper-orange border-copper-orange/30"
  }

  return (
    <Card className={`group hover:shadow-lg transition-all duration-200 overflow-hidden ${
      event.featured ? 'ring-2 ring-brass-yellow/30' : ''
    }`}>
      {/* Event Image */}
      <div className="relative aspect-video">
        <EventImage
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          priority={event.featured}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge className={categoryColors[event.category as keyof typeof categoryColors]}>
            {event.category}
          </Badge>
        </div>
        
        {/* Featured Badge */}
        {event.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-brass-yellow text-gunmetal-black font-rajdhani font-bold">
              Featured
            </Badge>
          </div>
        )}
        
        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <Badge className="bg-black/80 text-white">
            ${event.price}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-[var(--space-md)] space-y-[var(--space-base)]">
        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black group-hover:text-brass-yellow transition-colors duration-200 mb-[var(--space-xs)]">
            {event.title}
          </h3>
          <p className="text-sm text-case-hardened font-noto-sans leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Event Details */}
        <div className="space-y-[var(--space-xs)] text-sm text-case-hardened">
          <div className="flex items-center gap-[var(--space-xs)]">
            <Calendar className="icon-xs text-brass-yellow" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center gap-[var(--space-xs)]">
            <Clock className="icon-xs text-brass-yellow" />
            <span>{event.time} - {event.endTime}</span>
          </div>
          
          <div className="flex items-center gap-[var(--space-xs)]">
            <MapPin className="icon-xs text-brass-yellow" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center gap-[var(--space-xs)]">
            <Users className="icon-xs text-brass-yellow" />
            <span>{event.registered}/{event.capacity} registered</span>
            {isAlmostFull && (
              <Badge variant="outline" className="text-xs border-safety-red/30 text-safety-red">
                Almost Full
              </Badge>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-[var(--space-xs)]">
          {event.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs border-brass-yellow/30 text-brass-yellow">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-[var(--space-xs)] pt-[var(--space-xs)]">
          <Button 
            size="sm" 
            className="flex-1 bg-brass-yellow text-gunmetal-black hover:bg-copper-orange font-rajdhani font-semibold"
          >
            Register
          </Button>
          <Button variant="outline" size="sm">
            <Info className="icon-xs" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function EventsPage() {
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
        title="Events & Training"
        subtitle="Discover competitions, training courses, and community events"
        backgroundPreset="cool"
        primaryAction={{ text: "Create Event", href: "/events/create" }}
        secondaryAction={{ text: "View Calendar", href: "/events/calendar" }}
      />

      {/* Search & Filter Section */}
      <section className="py-[var(--space-xl)] bg-gradient-hero-cool">
        <div className="max-w-6xl mx-auto px-[var(--space-md)]">
          <div className="flex flex-col md:flex-row gap-[var(--space-base)] mb-[var(--space-lg)]">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 icon-sm text-case-hardened" />
                <Input
                  placeholder="Search events by name, location, or type..."
                  className="pl-[var(--space-2xl)] bg-white border-scope-blue/30 focus:border-scope-blue"
                />
              </div>
            </div>
            <div className="flex gap-[var(--space-xs)]">
              <Button variant="outline" className="border-scope-blue/30 text-scope-blue hover:bg-scope-blue hover:text-white">
                <Calendar className="icon-sm mr-[var(--space-xs)]" />
                Date Range
              </Button>
              <Button variant="outline" className="border-scope-blue/30 text-scope-blue hover:bg-scope-blue hover:text-white">
                <Filter className="icon-sm mr-[var(--space-xs)]" />
                Filters
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-[var(--space-xs)]">
            {[
              { label: "All Events", value: "all", active: true },
              { label: "Competitions", value: "competition" },
              { label: "Training", value: "training" },
              { label: "Youth Programs", value: "youth" },
              { label: "Social Events", value: "social" }
            ].map((category) => (
              <Button
                key={category.value}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={
                  category.active
                    ? "bg-scope-blue text-white"
                    : "border-scope-blue/30 text-scope-blue hover:bg-scope-blue hover:text-white"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-[var(--space-xl)]">
        <div className="max-w-6xl mx-auto px-[var(--space-md)]">
          <div className="mb-[var(--space-md)] flex items-center justify-between">
            <h2 className="text-2xl font-rajdhani font-bold text-gunmetal-black">
              Upcoming Events
            </h2>
            <select className="px-[var(--space-base)] py-[var(--space-xs)] border border-gray-300 rounded-lg bg-white text-sm font-noto-sans">
              <option>Sort by Date</option>
              <option>Sort by Location</option>
              <option>Sort by Category</option>
              <option>Sort by Price</option>
            </select>
          </div>

          <Suspense fallback={<LoadingSpinner text="Loading events..." />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </Suspense>

          {/* Load More */}
          <div className="text-center mt-[var(--space-xl)]">
            <Button size="lg" className="bg-scope-blue text-white hover:bg-trigger-blue font-rajdhani font-semibold">
              Load More Events
            </Button>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}