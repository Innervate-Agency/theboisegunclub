import { HeroSection } from '@/components/marketing/hero-section'
import { ServiceGrid } from '@/components/marketing/service-grid'
import { CTASection } from '@/components/marketing/cta-section'
import { FeatureGrid } from '@/components/ui/feature-grid'
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel'
import { SiteFooter } from '@/components/ui/site-footer'
import { NavigationFusion } from '@/components/ui/navigation-fusion'
import { NewThemeToggle } from '@/components/ui/NewThemeToggle'
import { Target, Shield, Users, Calendar } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/', icon: <Target className="h-4 w-4" />, active: true },
  { label: 'Directory', href: '/directory', icon: <Shield className="h-4 w-4" /> },
  { label: 'Events', href: '/events', icon: <Calendar className="h-4 w-4" /> },
  { label: 'About', href: '/about', icon: <Users className="h-4 w-4" /> }
]

const features = [
  {
    title: 'Comprehensive Directory',
    description: 'Find every gun shop, shooting range, instructor, and gunsmith across the Treasure Valley. All businesses verified and regularly updated.',
    icon: Target,
    link: { text: 'Browse Directory', href: '/directory' }
  },
  {
    title: 'Event Calendar',
    description: 'Never miss a competition, training session, or community gathering with our unified event calendar.',
    icon: Calendar,
    link: { text: 'View Events', href: '/events' }
  },
  {
    title: 'Community Hub',
    description: 'Connect with thousands of firearms enthusiasts throughout the Treasure Valley. Share experiences and find shooting partners.',
    icon: Users,
    link: { text: 'Join Community', href: '/community' }
  }
]

const testimonials = [
  {
    name: 'John Rodriguez',
    role: 'Community Member',
    content: 'This platform has transformed how I connect with the local firearms community. Finding quality businesses and events has never been easier.',
    rating: 5,
    avatar: 'https://github.com/shadcn.png'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Range Owner',
    content: 'Being part of this directory has significantly increased our visibility. The unified platform makes it easy for customers to find us.',
    rating: 5
  },
  {
    name: 'Mike Thompson',
    role: 'Firearms Instructor',
    content: "I've connected with dozens of new students through this platform. It's become an essential tool for growing my training business.",
    rating: 5
  }
]

export default function HomePage() {
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

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServiceGrid />
        
        {/* Features Section */}
        <FeatureGrid
          title="Why Choose Our Platform?"
          subtitle="Treasure Valley's Firearms Hub"
          description="Since 2017, we've been connecting the region's firearms community. Discover local businesses, find expert services, and connect with fellow enthusiasts."
          features={features}
          variant="warm"
        />
        
        {/* Testimonials */}
        <TestimonialCarousel
          title="What Our Community Says"
          subtitle="Success Stories"
          testimonials={testimonials}
          variant="default"
        />
        
        <CTASection />
      </main>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}