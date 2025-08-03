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

// Real Treasure Valley events data from comprehensive research
const upcomingEvents = [
  {
    id: 1,
    title: "USPSA Match",
    description: "Monthly USPSA practical shooting match at Nampa Rod & Gun Club. Open to all skill levels with multiple divisions.",
    date: "2025-08-05",
    time: "8:00 AM",
    endTime: "3:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennet Road, Nampa, ID",
    category: "competition",
    difficulty: "All Levels",
    price: 15,
    capacity: 80,
    registered: 54,
    organizer: "Idaho Society of Practical Shooters",
    features: ["Multiple Divisions", "All Skill Levels", "Awards Ceremony"],
    image: "/images/events/uspsa-match.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Idaho State Camo Shoot",
    description: "Premier sporting clays event benefiting Ducks Unlimited. Team-based competition with prizes and camaraderie.",
    date: "2025-07-26",
    time: "8:30 AM",
    endTime: "6:00 PM",
    location: "Caldwell Gun Club",
    address: "21840 Pond Ln, Caldwell, ID",
    category: "charity",
    difficulty: "All Levels",
    price: 600,
    capacity: 96,
    registered: 78,
    organizer: "Ducks Unlimited",
    features: ["Team Event", "Lunch Included", "Prizes", "DU Membership"],
    image: "/images/events/sporting-clays.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Steel Challenge",
    description: "Weekly Steel Challenge matches featuring speed and accuracy on reactive steel targets.",
    date: "2025-08-07",
    time: "4:00 PM",
    endTime: "8:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennet Road, Nampa, ID",
    category: "competition",
    difficulty: "Beginner Friendly",
    price: 7,
    capacity: 50,
    registered: 32,
    organizer: "Nampa Rod & Gun Club",
    features: ["Weekly Event", "Steel Targets", "Fun & Fast"],
    image: "/images/events/steel-challenge.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Defensive Pistol Advanced",
    description: "Advanced defensive pistol techniques covering movement, cover, and real-world scenarios.",
    date: "2025-08-16",
    time: "9:00 AM",
    endTime: "5:00 PM",
    location: "Double Tapp Range",
    address: "14010 E Double Tapp Lane, Boise, ID",
    category: "training",
    difficulty: "Advanced",
    price: 285,
    capacity: 12,
    registered: 8,
    organizer: "Simshot",
    features: ["Live Fire", "Advanced Techniques", "Small Class Size"],
    image: "/images/events/defensive-training.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Beginner Pistol Course",
    description: "Professional firearms training covering safety, fundamentals, and marksmanship for new shooters.",
    date: "2025-09-13",
    time: "9:00 AM",
    endTime: "5:00 PM",
    location: "Double Tapp Range",
    address: "14010 E Double Tapp Lane, Boise, ID",
    category: "training",
    difficulty: "Beginner",
    price: 168,
    capacity: 16,
    registered: 11,
    organizer: "Combat Absolute LLC",
    features: ["LEO Instructor", "All Equipment Provided", "Safety Focused"],
    image: "/images/events/pistol-basics.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Great Idaho Gun Show",
    description: "Treasure Valley's largest firearms expo featuring vendors, dealers, and collectors from across the region.",
    date: "2025-09-20",
    time: "9:00 AM",
    endTime: "5:00 PM",
    location: "Ford Idaho Center",
    address: "16200 N Idaho Ctr Blvd, Nampa, ID",
    category: "expo",
    difficulty: "All Ages",
    price: 10,
    capacity: 5000,
    registered: 3200,
    organizer: "Lewis-Clark Trader",
    features: ["200+ Vendors", "Collector Items", "Family Friendly"],
    image: "/images/events/gun-show.jpg",
    featured: true
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
    competition: "bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30",
    training: "bg-scope-blue/20 text-scope-blue border-scope-blue/30",
    charity: "bg-rifling-green/20 text-rifling-green border-rifling-green/30",
    expo: "bg-copper-orange/20 text-copper-orange border-copper-orange/30"
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
          <Button variant="secondary" size="sm">
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
        title="Treasure Valley Events Calendar"
        subtitle="Building a unified calendar for the region's firearms community. Help us launch with real events."
        backgroundPreset="cool"
        primaryAction={{ text: "Submit Your Event", href: "#event-submission" }}
        secondaryAction={{ text: "Learn More", href: "#about-calendar" }}
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
              <Button variant="secondary" className="border-scope-blue/30 text-scope-blue hover:bg-scope-blue hover:text-white">
                <Calendar className="icon-sm mr-[var(--space-xs)]" />
                Date Range
              </Button>
              <Button variant="secondary" className="border-scope-blue/30 text-scope-blue hover:bg-scope-blue hover:text-white">
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
              { label: "Training & Education", value: "training" },
              { label: "Gun Shows & Expos", value: "expo" },
              { label: "Charity Events", value: "charity" }
            ].map((category) => (
              <Button
                key={category.value}
                variant={category.active ? "default" : "secondary"}
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

      {/* Events Calendar Vision */}
      <section id="about-calendar" className="py-[var(--space-xl)]">
        <div className="max-w-6xl mx-auto px-[var(--space-md)]">
          <div className="text-center mb-[var(--space-xl)]">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
              The Unified Events Calendar Vision
            </h2>
            <p className="text-lg text-case-hardened font-noto-sans max-w-3xl mx-auto">
              Our research has identified the events landscape is fragmented across dozens of websites. We're building the definitive calendar for Treasure Valley firearms events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-lg)] mb-[var(--space-xl)]">
            <Card className="p-[var(--space-md)] text-center">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Training & Education
              </h3>
              <p className="text-case-hardened font-noto-sans text-sm mb-[var(--space-base)]">
                CCW classes, safety courses, and advanced training
              </p>
              <div className="text-2xl font-rajdhani font-bold text-scope-blue">50+</div>
              <div className="text-sm text-case-hardened">Annual Events</div>
            </Card>
            
            <Card className="p-[var(--space-md)] text-center">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Competitions
              </h3>
              <p className="text-case-hardened font-noto-sans text-sm mb-[var(--space-base)]">
                USPSA, IDPA, Steel Challenge, and sporting clays
              </p>
              <div className="text-2xl font-rajdhani font-bold text-scope-blue">40+</div>
              <div className="text-sm text-case-hardened">Annual Matches</div>
            </Card>
            
            <Card className="p-[var(--space-md)] text-center">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Gun Shows & Expos
              </h3>
              <p className="text-case-hardened font-noto-sans text-sm mb-[var(--space-base)]">
                Regional gun shows and industry exhibitions
              </p>
              <div className="text-2xl font-rajdhani font-bold text-scope-blue">12+</div>
              <div className="text-sm text-case-hardened">Annual Shows</div>
            </Card>
            
            <Card className="p-[var(--space-md)] text-center">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Community Events
              </h3>
              <p className="text-case-hardened font-noto-sans text-sm mb-[var(--space-base)]">
                Charity shoots, club meetings, and social gatherings
              </p>
              <div className="text-2xl font-rajdhani font-bold text-scope-blue">30+</div>
              <div className="text-sm text-case-hardened">Annual Events</div>
            </Card>
          </div>

          {/* Event Submission Form */}
          <div id="event-submission" className="bg-gradient-hero-cool rounded-lg border border-scope-blue/20 p-[var(--space-xl)]">
            <div className="text-center mb-[var(--space-lg)]">
              <h3 className="text-2xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Submit Your Event
              </h3>
              <p className="text-lg text-case-hardened font-noto-sans max-w-2xl mx-auto">
                Help us launch by submitting your upcoming firearms events. Be featured in our unified calendar at no cost.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-[var(--space-base)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-base)]">
                <Input placeholder="Event Name" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
                <Input placeholder="Organizer Name" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-base)]">
                <Input placeholder="Contact Email" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
                <Input placeholder="Contact Phone" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-base)]">
                <Input type="date" placeholder="Event Date" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
                <Input type="time" placeholder="Start Time" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
                <Input type="time" placeholder="End Time" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
              </div>
              <Input placeholder="Venue Name and Address" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-base)]">
                <select className="px-[var(--space-base)] py-[var(--space-xs)] border border-scope-blue/30 rounded-lg bg-white text-sm font-noto-sans">
                  <option>Event Category</option>
                  <option>Training & Education</option>
                  <option>Competition</option>
                  <option>Gun Show / Expo</option>
                  <option>Charity Event</option>
                  <option>Club Meeting</option>
                  <option>Other</option>
                </select>
                <Input placeholder="Registration Fee (if any)" className="bg-white border-scope-blue/30 focus:border-scope-blue" />
              </div>
              <textarea 
                placeholder="Event description and additional details..."
                className="w-full px-[var(--space-base)] py-[var(--space-xs)] border border-scope-blue/30 rounded-lg bg-white text-sm font-noto-sans min-h-[100px] focus:border-scope-blue focus:outline-none"
              />
              
              <div className="text-center pt-[var(--space-base)]">
                <Button size="lg" className="bg-scope-blue text-white hover:bg-trigger-blue font-rajdhani font-semibold">
                  Submit Event for Review
                </Button>
                <p className="text-sm text-case-hardened mt-[var(--space-xs)]">
                  We'll review and add to the calendar within 24 hours
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