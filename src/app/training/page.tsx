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
import { Input } from '@/components/ui/input'

const navItems = [
  { label: 'Home', href: '/', icon: <Target className="h-4 w-4" /> },
  { label: 'Directory', href: '/directory', icon: <MapPin className="h-4 w-4" /> },
  { label: 'Events', href: '/events', icon: <Calendar className="h-4 w-4" /> },
  { label: 'Training', href: '/training', icon: <Star className="h-4 w-4" />, active: true }
]

const trainingPrograms = [
  {
    id: 1,
    title: 'Combat Absolute - Beginner Pistol',
    instructor: 'Kyle Gentry (17-year LEO, SWAT)',
    duration: '8 hours',
    level: 'Beginner',
    price: 168,
    rating: 4.9,
    students: 234,
    description: 'Professional firearms training covering safety, fundamentals, and marksmanship for new shooters. Led by 17-year law enforcement veteran.',
    topics: ['Firearm Safety', 'Proper Handling', 'Marksmanship Basics', 'Live Fire Training'],
    nextSession: '2025-09-13',
    location: 'Double Tapp Range',
    certificate: true
  },
  {
    id: 2,
    title: 'Simshot - Defensive Pistol Advanced',
    instructor: 'Certified Instructors',
    duration: '8 hours',
    level: 'Advanced',
    price: 285,
    rating: 4.8,
    students: 156,
    description: 'Advanced defensive pistol techniques covering movement, cover, and real-world scenarios using simulation and live fire.',
    topics: ['Advanced Techniques', 'Movement & Cover', 'Threat Assessment', 'Stress Shooting'],
    nextSession: '2025-08-16',
    location: 'Double Tapp Range',
    certificate: true
  },
  {
    id: 3,
    title: 'Idaho Gun School - Enhanced CCW',
    instructor: 'Terry (Veteran-owned)',
    duration: '6 hours',
    level: 'Intermediate',
    price: 125,
    rating: 4.7,
    students: 892,
    description: 'Veteran-owned school providing Idaho Enhanced Concealed Carry certification with hands-on experience from multiple deployments.',
    topics: ['Idaho CCW Laws', 'Defensive Tactics', 'Legal Considerations', 'Practical Application'],
    nextSession: '2025-08-02',
    location: 'Idaho Gun School, Nampa',
    certificate: true
  },
  {
    id: 4,
    title: 'Idaho Firearms Classes - Family Safety',
    instructor: 'Joe Torok',
    duration: '4 hours',
    level: 'All Levels',
    price: 95,
    rating: 4.6,
    students: 321,
    description: 'Comprehensive family firearms safety course covering secure storage, child safety, and responsible ownership.',
    topics: ['Family Safety', 'Secure Storage', 'Child Education', 'Emergency Procedures'],
    nextSession: '2025-08-10',
    location: 'Private Venues',
    certificate: true
  }
]

const trainingFeatures = [
  {
    title: 'Veteran & LEO Led Training',
    description: 'Learn from experienced law enforcement and military veterans with real-world tactical expertise.',
    icon: Shield,
    link: { text: 'Meet Our Instructors', href: '/training/instructors' }
  },
  {
    title: 'Premier Training Facilities',
    description: 'Train at exclusive venues like Double Tapp Range with state-of-the-art simulation and live-fire capabilities.',
    icon: Target,
    link: { text: 'View Facilities', href: '/training/facilities' }
  },
  {
    title: '15+ Training Organizations',
    description: 'Choose from the largest network of certified firearms instructors and training companies in Treasure Valley.',
    icon: Users,
    link: { text: 'Browse Programs', href: '/training/programs' }
  },
  {
    title: 'Comprehensive Curriculum',
    description: 'From basic safety to advanced tactical training, covering CCW, defensive pistol, carbine, and specialized courses.',
    icon: Award,
    link: { text: 'View Course Catalog', href: '/training/catalog' }
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
        title="Treasure Valley Firearms Training"
        subtitle="Building a comprehensive directory of the region's firearms instructors and training programs"
        backgroundPreset="warm"
        primaryAction={{ text: "List Your Training", href: "#instructor-signup" }}
        secondaryAction={{ text: "Learn More", href: "#about-training" }}
      />

      {/* Training Features */}
      <section className="px-(--space-md) py-(--space-xl) bg-gradient-hero-warm">
        <div className="max-w-site mx-auto">
          <div className="text-center mb-(--space-xl)">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-dark-chocolate mb-(--space-base)">
              Building Treasure Valley's Training Hub
            </h2>
            <p className="text-lg text-warning-amber font-noto-sans max-w-3xl mx-auto">
              We're creating a comprehensive directory of the region's firearms training resources. Help us connect the community with quality instruction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {trainingFeatures.map((feature, index) => (
              <Card key={index} className="p-md text-center hover:shadow-elevated transition-all duration-200">
                <feature.icon className="h-12 w-12 text-sandy-ochre mx-auto mb-(--space-base)" />
                <h3 className="text-lg font-rajdhani font-bold text-dark-chocolate mb-(--space-xs)">
                  {feature.title}
                </h3>
                <p className="text-sm text-warning-amber font-noto-sans">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Directory Vision */}
      <section id="about-training" className="py-(--space-2xl)">
        <div className="max-w-site mx-auto px-(--space-md)">
          <div className="text-center mb-(--space-xl)">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-dark-chocolate mb-(--space-base)">
              Treasure Valley Training Ecosystem
            </h2>
            <p className="text-lg text-warning-amber font-noto-sans max-w-3xl mx-auto">
              Our research has identified 9+ training providers and instructors across the region. We're building the definitive directory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-(--space-xl)">
            <Card className="p-md text-center">
              <h3 className="text-xl font-rajdhani font-bold text-dark-chocolate mb-(--space-base)">
                Basic Safety & CCW
              </h3>
              <p className="text-warning-amber font-noto-sans text-sm mb-(--space-base)">
                NRA basic courses and Idaho Enhanced CCW certification
              </p>
              <div className="text-2xl font-rajdhani font-bold text-sandy-ochre">6+</div>
              <div className="text-sm text-warning-amber">Certified Instructors</div>
            </Card>
            
            <Card className="p-md text-center">
              <h3 className="text-xl font-rajdhani font-bold text-dark-chocolate mb-(--space-base)">
                Advanced Tactical
              </h3>
              <p className="text-warning-amber font-noto-sans text-sm mb-(--space-base)">
                Defensive pistol, carbine, and specialized training
              </p>
              <div className="text-2xl font-rajdhani font-bold text-sandy-ochre">4+</div>
              <div className="text-sm text-warning-amber">Tactical Schools</div>
            </Card>
            
            <Card className="p-md text-center">
              <h3 className="text-xl font-rajdhani font-bold text-dark-chocolate mb-(--space-base)">
                Specialized Programs
              </h3>
              <p className="text-warning-amber font-noto-sans text-sm mb-(--space-base)">
                Women's classes, youth programs, and custom training
              </p>
              <div className="text-2xl font-rajdhani font-bold text-sandy-ochre">3+</div>
              <div className="text-sm text-warning-amber">Specialty Programs</div>
            </Card>
          </div>

          {/* Instructor Signup Form */}
          <div id="instructor-signup" className="bg-gradient-hero-warm rounded-lg border border-sandy-ochre/20 p-(--space-xl)">
            <div className="text-center mb-(--space-lg)">
              <h3 className="text-2xl font-rajdhani font-bold text-dark-chocolate mb-(--space-base)">
                Join Our Training Directory
              </h3>
              <p className="text-lg text-warning-amber font-noto-sans max-w-2xl mx-auto">
                Connect with students across Treasure Valley. List your training programs and certifications at no cost during our launch phase.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-(--space-base)">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-(--space-base)">
                <Input placeholder="Instructor/Organization Name" className="bg-white border-sandy-ochre/30 focus:border-sandy-ochre" />
                <Input placeholder="Contact Name" className="bg-white border-sandy-ochre/30 focus:border-sandy-ochre" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-(--space-base)">
                <Input placeholder="Phone Number" className="bg-white border-sandy-ochre/30 focus:border-sandy-ochre" />
                <Input placeholder="Email Address" className="bg-white border-sandy-ochre/30 focus:border-sandy-ochre" />
              </div>
              <Input placeholder="Primary Training Location" className="bg-white border-sandy-ochre/30 focus:border-sandy-ochre" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-(--space-base)">
                <select className="px-(--space-base) py-(--space-xs) border border-sandy-ochre/30 rounded-lg bg-white text-sm font-noto-sans">
                  <option>Primary Training Type</option>
                  <option>Basic Safety / NRA Courses</option>
                  <option>CCW / Enhanced CCW</option>
                  <option>Defensive Pistol</option>
                  <option>Tactical Carbine</option>
                  <option>Competition Training</option>
                  <option>Youth Programs</option>
                  <option>Women's Programs</option>
                  <option>Law Enforcement</option>
                  <option>Other</option>
                </select>
                <Input placeholder="Website (if applicable)" className="bg-white border-sandy-ochre/30 focus:border-sandy-ochre" />
              </div>
              <Input placeholder="Certifications (NRA, USCCA, etc.)" className="bg-white border-sandy-ochre/30 focus:border-sandy-ochre" />
              <textarea 
                placeholder="Describe your training programs, experience, and qualifications..."
                className="w-full px-(--space-base) py-(--space-xs) border border-sandy-ochre/30 rounded-lg bg-white text-sm font-noto-sans min-h-[100px] focus:border-sandy-ochre focus:outline-none"
              />
              
              <div className="text-center pt-(--space-base)">
                <Button size="lg" className="bg-sandy-ochre text-dark-chocolate hover:bg-rusty-orange font-rajdhani font-semibold">
                  Join Training Directory
                </Button>
                <p className="text-sm text-warning-amber mt-(--space-xs)">
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
