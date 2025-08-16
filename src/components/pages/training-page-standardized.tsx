'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CardPageLayout } from '@/components/ui/card-page-layout'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { 
  Target, Shield, Trophy, Users, Clock, Star, 
  BookOpen, CheckCircle, MapPin, Calendar,
  CurrencyDollar, Medal, Plus, ArrowRight,
  CaretRight, GraduationCap
} from '@phosphor-icons/react'

// Training data type
interface TrainingData {
  id: number
  title: string
  instructor: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  price: number
  rating: number
  students: number
  description: string
  topics: string[]
  nextSession: string
  location: string
  certificate: boolean
  trainingType: 'Basic Safety' | 'CCW' | 'Defensive Pistol' | 'Tactical Carbine' | 'Competition' | 'Youth' | 'Women' | 'LEO' | 'Specialized'
  featured: boolean
  slug: string
}

// Sample training data - this would come from props or API
const trainingPrograms: TrainingData[] = [
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
    certificate: true,
    trainingType: 'Basic Safety',
    featured: true,
    slug: 'combat-absolute-beginner-pistol'
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
    certificate: true,
    trainingType: 'Defensive Pistol',
    featured: true,
    slug: 'simshot-defensive-pistol-advanced'
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
    certificate: true,
    trainingType: 'CCW',
    featured: true,
    slug: 'idaho-gun-school-enhanced-ccw'
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
    certificate: true,
    trainingType: 'Basic Safety',
    featured: false,
    slug: 'idaho-firearms-classes-family-safety'
  },
  {
    id: 5,
    title: 'Tactical Carbine Fundamentals',
    instructor: 'Combat Absolute Team',
    duration: '6 hours',
    level: 'Intermediate',
    price: 220,
    rating: 4.8,
    students: 89,
    description: 'Introduction to tactical carbine handling, movement, and engagement techniques for defensive purposes.',
    topics: ['Carbine Basics', 'Movement Drills', 'Target Engagement', 'Malfunction Clearance'],
    nextSession: '2025-08-24',
    location: 'Double Tapp Range',
    certificate: true,
    trainingType: 'Tactical Carbine',
    featured: false,
    slug: 'tactical-carbine-fundamentals'
  },
  {
    id: 6,
    title: 'Women\'s Introduction to Handguns',
    instructor: 'Sarah Mitchell (NRA Certified)',
    duration: '4 hours',
    level: 'Beginner',
    price: 120,
    rating: 4.9,
    students: 167,
    description: 'Women-only course focusing on handgun basics, safety, and confidence building in a supportive environment.',
    topics: ['Handgun Types', 'Safe Handling', 'Shooting Fundamentals', 'Self-Defense Basics'],
    nextSession: '2025-08-18',
    location: 'Caldwell Gun Club',
    certificate: true,
    trainingType: 'Women',
    featured: false,
    slug: 'womens-introduction-handguns'
  }
]

// Training Card Component
function TrainingCard({ training, className = '' }: { training: TrainingData, className?: string }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-sagebrush-green text-white'
      case 'Intermediate': return 'bg-rusty-orange text-white'
      case 'Advanced': return 'bg-slate-blue text-white'
      default: return 'bg-weathered-bronze text-white'
    }
  }

  const getPriceColor = (price: number) => {
    if (price === 0) return 'text-sagebrush-green'
    if (price < 150) return 'text-weathered-bronze'
    if (price < 250) return 'text-rusty-orange'
    return 'text-slate-blue'
  }

  return (
    <Card className={`mica shadow-present hover:shadow-prominent transition-all duration-300 rounded-xs h-full ${className}`}>
      <CardHeader className="space-y-sm">
        <div className="flex items-start justify-between gap-sm">
          <div className="flex-1 min-w-0">
            <h3 className="font-rajdhani font-bold text-heading-sm text-card-foreground line-clamp-2 mb-xs">
              {training.title}
            </h3>
            <p className="text-muted-foreground text-body-xs mb-sm">
              by {training.instructor}
            </p>
          </div>
          {training.featured && (
            <Badge className="bg-golden-amber text-deep-forest shrink-0">
              <Star weight="fill" className="h-3 w-3 mr-xs" />
              Featured
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-sm text-body-xs text-muted-foreground">
          <div className="flex items-center gap-xs">
            <Clock weight="bold" className="h-3 w-3" />
            {training.duration}
          </div>
          <div className="flex items-center gap-xs">
            <MapPin weight="bold" className="h-3 w-3" />
            {training.location}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge className={`${getLevelColor(training.level)} rounded-xs text-xs`}>
            {training.level}
          </Badge>
          <div className="text-right">
            <div className={`font-rajdhani font-bold text-body-base ${getPriceColor(training.price)}`}>
              ${training.price}
            </div>
            <div className="text-body-xs text-muted-foreground">per person</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-sm">
        <p className="text-body-sm text-card-foreground line-clamp-3">
          {training.description}
        </p>

        <div className="flex flex-wrap gap-xs">
          {training.topics.slice(0, 3).map((topic, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
          {training.topics.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{training.topics.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-sm border-t border-border">
          <div className="flex items-center gap-sm text-body-xs text-muted-foreground">
            <div className="flex items-center gap-xs">
              <Star weight="fill" className="h-3 w-3 text-golden-amber" />
              {training.rating}
            </div>
            <div className="flex items-center gap-xs">
              <Users weight="bold" className="h-3 w-3" />
              {training.students}
            </div>
            {training.certificate && (
              <div className="flex items-center gap-xs">
                <Medal weight="bold" className="h-3 w-3 text-sagebrush-green" />
                Cert
              </div>
            )}
          </div>
          <div className="text-body-xs text-muted-foreground">
            Next: {new Date(training.nextSession).toLocaleDateString()}
          </div>
        </div>

        <div className="flex gap-xs pt-sm">
          <Button size="sm" variant="outline" className="flex-1 border-nav-training/30 text-nav-training hover:bg-nav-training hover:text-white hover:border-nav-training transition-all duration-300 font-rajdhani font-bold" animationType="arrow">
            Learn More
          </Button>
          <Button size="sm" variant="outline" className="shrink-0 border-nav-training/30 text-nav-training hover:bg-nav-training hover:text-white hover:border-nav-training transition-all duration-300">
            <Calendar weight="bold" className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function TrainingPageStandardized() {
  // Filter configuration
  const filters = useCardPageFilters({
    items: trainingPrograms,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'card',
    itemsPerPage: 12,
    
    // Search filter function
    searchFilter: (training, query) => {
      const searchTerms = query.toLowerCase()
      return (
        training.title.toLowerCase().includes(searchTerms) ||
        training.description.toLowerCase().includes(searchTerms) ||
        training.instructor.toLowerCase().includes(searchTerms) ||
        training.location.toLowerCase().includes(searchTerms) ||
        training.topics.some(topic => topic.toLowerCase().includes(searchTerms))
      )
    },
    
    // Tab filter function
    tabFilter: (training, activeTab) => {
      switch (activeTab) {
        case 'basic': return training.trainingType === 'Basic Safety'
        case 'ccw': return training.trainingType === 'CCW'
        case 'defensive': return training.trainingType === 'Defensive Pistol'
        case 'tactical': return training.trainingType === 'Tactical Carbine'
        case 'specialized': return ['Women', 'Youth', 'LEO', 'Specialized'].includes(training.trainingType)
        case 'featured': return training.featured
        default: return true
      }
    },
    
    // Custom filters
    customFilters: {
      level: (training, selectedLevels) => selectedLevels.includes(training.level.toLowerCase().replace(' ', '')),
      price: (training, selectedPrices) => {
        if (selectedPrices.includes('free')) return training.price === 0
        if (selectedPrices.includes('under150')) return training.price < 150
        if (selectedPrices.includes('under250')) return training.price < 250
        if (selectedPrices.includes('over250')) return training.price >= 250
        return true
      },
      duration: (training, selectedDurations) => {
        const hours = parseInt(training.duration)
        if (selectedDurations.includes('short')) return hours <= 4
        if (selectedDurations.includes('medium')) return hours > 4 && hours <= 8
        if (selectedDurations.includes('long')) return hours > 8
        return true
      },
      certificate: (training, selectedOptions) => {
        if (selectedOptions.includes('certified')) return training.certificate
        return true
      }
    },
    
    // Sort functions
    sortFunctions: {
      date: (a, b) => new Date(a.nextSession).getTime() - new Date(b.nextSession).getTime(),
      popularity: (a, b) => b.students - a.students,
      price: (a, b) => a.price - b.price,
      rating: (a, b) => b.rating - a.rating,
      alphabetical: (a, b) => a.title.localeCompare(b.title)
    }
  })

  // Hero content
  const heroContent = (
    <div className="container mx-auto max-w-site relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
        {/* Content - Left side */}
        <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
          <div className="flex items-center gap-base">
            <div className="bg-card/10 p-base rounded-xs border border-border">
              <GraduationCap weight="bold" className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-base">
              <div className="flex items-center gap-xs text-sm text-white/60">
                <span>Home</span>
                <CaretRight className="h-4 w-4" />
                <span className="text-white font-medium">Training</span>
              </div>
              <div className="flex flex-wrap gap-xs">
                <Badge className="bg-card/10 text-white border-border rounded-xs">
                  <Shield weight="bold" className="h-4 w-4 mr-xs" />
                  Basic Safety
                </Badge>
                <Badge className="bg-card/10 text-white border-border rounded-xs">
                  <Target weight="bold" className="h-4 w-4 mr-xs" />
                  Advanced
                </Badge>
                <Badge className="bg-card/10 text-white border-border rounded-xs">
                  <Medal weight="bold" className="h-4 w-4 mr-xs" />
                  Certified
                </Badge>
              </div>
            </div>
          </div>
          <div className="space-y-xs">
            <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
              Treasure Valley Firearms Training
            </h1>
            <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
              Professional Instruction from Veterans & Law Enforcement
            </h2>
          </div>
          <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
            Connect with certified instructors and training programs across the Treasure Valley. From basic safety to advanced tactical skills, find the right training for your needs.
          </p>
          <div className="flex gap-base">
            <Button size="lg" className="bg-white text-nav-training hover:bg-crisp-off-white font-rajdhani font-bold" animationType="plus-minus">
              <Plus className="h-4 w-4 mr-xs" />
              List Training
            </Button>
            <Button variant="outline" size="lg" className="border-border text-white hover:bg-white hover:text-nav-training" animationType="arrow">
              View Calendar
            </Button>
          </div>
        </div>

        {/* Featured Training Card - Right side */}
        <div className="lg:col-span-1 py-md min-h-[400px]">
          <div className="relative h-full">
            {trainingPrograms.find(t => t.featured) && (
              <TrainingCard
                training={trainingPrograms.find(t => t.featured)!}
                className="h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <CardPageLayout
      pageTitle="Training"
      pageSubtitle="Treasure Valley Firearms Training"
      pageColor="training"
      heroContent={heroContent}
      searchQuery={filters.searchQuery}
      onSearchChange={filters.setSearchQuery}
      searchPlaceholder="Search training programs, instructors, or locations..."
      
      quickTabs={[
        { id: 'all', label: 'All Training', count: trainingPrograms.length, icon: GraduationCap },
        { id: 'basic', label: 'Basic Safety', count: trainingPrograms.filter(t => t.trainingType === 'Basic Safety').length, icon: Shield },
        { id: 'ccw', label: 'CCW', count: trainingPrograms.filter(t => t.trainingType === 'CCW').length, icon: CheckCircle },
        { id: 'defensive', label: 'Defensive', count: trainingPrograms.filter(t => t.trainingType === 'Defensive Pistol').length, icon: Target },
        { id: 'tactical', label: 'Tactical', count: trainingPrograms.filter(t => t.trainingType === 'Tactical Carbine').length, icon: Trophy },
        { id: 'specialized', label: 'Specialized', count: trainingPrograms.filter(t => ['Women', 'Youth', 'LEO', 'Specialized'].includes(t.trainingType)).length, icon: Users },
        { id: 'featured', label: 'Featured', count: trainingPrograms.filter(t => t.featured).length }
      ]}
      activeTab={filters.activeTab}
      onTabChange={filters.setActiveTab}
      
      filterSections={[
        {
          title: 'Skill Level',
          filters: [
            { id: 'beginner', label: 'Beginner', count: trainingPrograms.filter(t => t.level === 'Beginner').length },
            { id: 'intermediate', label: 'Intermediate', count: trainingPrograms.filter(t => t.level === 'Intermediate').length },
            { id: 'advanced', label: 'Advanced', count: trainingPrograms.filter(t => t.level === 'Advanced').length },
            { id: 'alllevels', label: 'All Levels', count: trainingPrograms.filter(t => t.level === 'All Levels').length }
          ],
          selectedFilters: filters.selectedFilters.level || [],
          onFilterChange: (filterId) => filters.updateFilters('level', filterId),
          multiSelect: true
        },
        {
          title: 'Price Range',
          filters: [
            { id: 'free', label: 'Free', icon: CurrencyDollar, count: trainingPrograms.filter(t => t.price === 0).length },
            { id: 'under150', label: 'Under $150', icon: CurrencyDollar, count: trainingPrograms.filter(t => t.price < 150).length },
            { id: 'under250', label: 'Under $250', icon: CurrencyDollar, count: trainingPrograms.filter(t => t.price < 250).length },
            { id: 'over250', label: '$250+', icon: CurrencyDollar, count: trainingPrograms.filter(t => t.price >= 250).length }
          ],
          selectedFilters: filters.selectedFilters.price || [],
          onFilterChange: (filterId) => filters.updateFilters('price', filterId),
          multiSelect: true
        },
        {
          title: 'Duration',
          filters: [
            { id: 'short', label: '4 hours or less', icon: Clock, count: trainingPrograms.filter(t => parseInt(t.duration) <= 4).length },
            { id: 'medium', label: '5-8 hours', icon: Clock, count: trainingPrograms.filter(t => parseInt(t.duration) > 4 && parseInt(t.duration) <= 8).length },
            { id: 'long', label: '8+ hours', icon: Clock, count: trainingPrograms.filter(t => parseInt(t.duration) > 8).length }
          ],
          selectedFilters: filters.selectedFilters.duration || [],
          onFilterChange: (filterId) => filters.updateFilters('duration', filterId),
          multiSelect: true
        },
        {
          title: 'Certification',
          filters: [
            { id: 'certified', label: 'Certificate Provided', icon: Medal, count: trainingPrograms.filter(t => t.certificate).length }
          ],
          selectedFilters: filters.selectedFilters.certificate || [],
          onFilterChange: (filterId) => filters.updateFilters('certificate', filterId),
          multiSelect: false
        }
      ]}
      
      viewMode={filters.viewMode}
      onViewModeChange={filters.setViewMode}
      sortOptions={[
        { id: 'date', label: 'Next Session', icon: Calendar },
        { id: 'popularity', label: 'Students', icon: Users },
        { id: 'price', label: 'Price', icon: CurrencyDollar },
        { id: 'rating', label: 'Rating', icon: Star },
        { id: 'alphabetical', label: 'Name', icon: BookOpen }
      ]}
      activeSortId={filters.sortBy}
      onSortChange={filters.setSortBy}
      
      totalResults={filters.totalResults}
      filteredResults={filters.filteredResults}
      
      statsSection={<TrustIndicators />}
      ctaSection={<ContributionCTA />}
    >
      <div className={filters.getGridClassName()}>
        {filters.paginatedItems.length > 0 ? (
          filters.paginatedItems.map((training, index) => (
            <TrainingCard
              key={`${training.title}-${index}`}
              training={training}
            />
          ))
        ) : (
          <div className="col-span-full">
            <EmptyState 
              title="No Training Programs Found"
              description="Try adjusting your search terms or filters to find training programs."
              action={
                <Button onClick={filters.clearAllFilters}>
                  Clear All Filters
                </Button>
              }
            />
          </div>
        )}
      </div>
    </CardPageLayout>
  )
}