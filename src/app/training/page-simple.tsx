import { Suspense } from 'react'
import { PageHero } from '@/components/ui/page-hero'
import { FeatureGrid } from '@/components/ui/feature-grid'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { SiteFooter } from '@/components/ui/site-footer'
import { NavigationFusion } from '@/components/ui/navigation-fusion'
import { NewThemeToggle } from '@/components/ui/NewThemeToggle'
import { 
  Target, Shield, Award, Users, Clock, Star, 
  BookOpen, CheckCircle, MapPin, Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const navItems = [
  { label: 'Home', href: '/', icon: <Target className="h-4 w-4" /> },
  { label: 'Directory', href: '/directory', icon: <MapPin className="h-4 w-4" /> },
  { label: 'Events', href: '/events', icon: <Calendar className="h-4 w-4" /> },
  { label: 'Training', href: '/training', icon: <Star className="h-4 w-4" />, active: true }
]

const trainingPrograms = [
  {
    id: 1,
    title: 'Basic Firearms Safety',
    instructor: 'Mike Wilson',
    duration: '4 hours',
    level: 'Beginner',
    price: 85,
    rating: 4.9,
    students: 127,
    description: 'Essential safety course covering firearm handling, storage, and basic marksmanship fundamentals.',
    topics: ['Gun Safety Rules', 'Proper Handling', 'Storage Guidelines', 'Basic Shooting'],
    nextSession: '2024-02-18',
    location: 'Idaho Firearms Academy',
    certificate: true
  }
]

const trainingFeatures = [
  {
    title: 'NRA Certified Instructors',
    description: 'All our instructors are NRA certified with years of experience in firearms education and safety.',
    icon: Award,
    link: { text: 'Meet Our Instructors', href: '/training/instructors' }
  }
]

export default function TrainingPage() {
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
        title="Training Programs"
        subtitle="Professional firearms education for all skill levels"
        backgroundPreset="warm"
        primaryAction={{ text: "Browse All Courses", href: "/training/courses" }}
        secondaryAction={{ text: "Find Instructors", href: "/training/instructors" }}
      />

      {/* Training Features */}
      <FeatureGrid
        title="Why Train With Us?"
        subtitle="Professional Excellence"
        description="Our certified instructors and comprehensive programs ensure you receive the highest quality firearms education in a safe, supportive environment."
        features={trainingFeatures}
        variant="warm"
        cardVariant="branded"
      />

      {/* Popular Courses */}
      <section className="py-[var(--space-2xl)] bg-gradient-hero-warm">
        <div className="max-w-site mx-auto px-[var(--space-md)]">
          <div className="text-center mb-[var(--space-xl)]">
            <p className="text-sm font-rajdhani font-semibold text-rusty-orange mb-[var(--space-xs)] tracking-wide uppercase">
              Popular Courses
            </p>
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-dark-chocolate mb-[var(--space-base)]">
              Featured Training Programs
            </h2>
            <p className="text-lg text-warning-amber font-noto-sans max-w-3xl mx-auto">
              Choose from our most popular courses designed to build skills and confidence at every level.
            </p>
          </div>

          <Suspense fallback={<LoadingSpinner text="Loading training programs..." />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-lg">
              {trainingPrograms.map((program) => (
                <Card key={program.id} className="group hover:shadow-elevated transition-all duration-200 overflow-hidden">
                  <div className="p-md space-y-[var(--space-base)]">
                    <div>
                      <h3 className="text-xl font-rajdhani font-bold text-primary group-hover:text-accent transition-colors duration-200 mb-[var(--space-xs)]">
                        {program.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-noto-sans">
                        with {program.instructor}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground font-noto-sans leading-relaxed">
                      {program.description}
                    </p>

                    <div className="flex gap-[var(--space-xs)] pt-[var(--space-xs)]">
                      <Button 
                        size="sm" 
                        className="flex-1"
                      >
                        Enroll Now
                      </Button>
                      <Button variant="secondary" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}
