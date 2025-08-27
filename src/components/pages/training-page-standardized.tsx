'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { EnhancedPagination } from '@/components/ui/enhanced-pagination'
import { CardSkeleton } from '@/components/ui/card-skeleton'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { AcademicCapIcon, ArrowRightIcon, BookOpenIcon, CalendarDaysIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, CurrencyDollarIcon, CursorArrowRaysIcon, FunnelIcon, ListBulletIcon, MagnifyingGlassIcon, MapPinIcon, PlusIcon, RectangleGroupIcon, ShieldCheckIcon, SparklesIcon, Squares2X2Icon, StarIcon, TicketIcon, TrophyIcon, UsersIcon, ViewColumnsIcon, WindowIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Simple color mapping for training filter categories
const getFilterColor = (category: string, type: string): string => {
  switch (category) {
    case 'skillLevel':
      if (type === 'beginner') return 'bg-sagebrush-green'
      if (type === 'intermediate') return 'bg-sandy-ochre'
      if (type === 'advanced') return 'bg-rusty-orange'
      return 'bg-slate-blue'
    case 'price':
      if (type === 'free') return 'bg-sagebrush-green'
      if (type === 'under150') return 'bg-sandy-ochre'
      if (type === 'under250') return 'bg-rusty-orange'
      return 'bg-weathered-gold'
    case 'duration':
      if (type === 'short') return 'bg-sagebrush-green'
      if (type === 'medium') return 'bg-sandy-ochre'
      return 'bg-rusty-orange'
    case 'certificate':
      return 'bg-nav-training'
    default:
      return 'bg-muted'
  }
}

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
    topics: ['Firearm Safety', 'Proper Handling', 'Marksmanship Basics', 'Live FireIcon Training'],
    nextSession: '2025-09-13',
    location: 'Double Tapp Range',
    certificate: true,
    trainingType: 'Basic Safety',
    featured: false,
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
    featured: false,
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
    featured: false,
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
    topics: ['Carbine Basics', 'Movement Drills', 'CursorArrowRaysIcon Engagement', 'Malfunction Clearance'],
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
              <StarIcon className="h-3 w-3 mr-xs" />
              Featured
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-sm text-body-xs text-muted-foreground">
          <div className="flex items-center gap-xs">
            <ClockIcon className="h-3 w-3" />
            {training.duration}
          </div>
          <div className="flex items-center gap-xs">
            <MapPinIcon className="h-3 w-3" />
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
              <StarIcon className="h-3 w-3 text-golden-amber" />
              {training.rating}
            </div>
            <div className="flex items-center gap-xs">
              <UsersIcon className="h-3 w-3" />
              {training.students}
            </div>
            {training.certificate && (
              <div className="flex items-center gap-xs">
                <CheckCircleIcon className="h-3 w-3 text-sagebrush-green" />
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
            <CalendarDaysIcon className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Training category statistics for the stats grid based on actual data
const trainingCategoryStats = [
  { icon: ShieldCheckIcon, title: "Basic Safety", value: trainingPrograms.filter(t => t.trainingType === 'Basic Safety').length.toString(), subtitle: "Beginner courses", color: "text-nav-training" },
  { icon: CheckCircleIcon, title: "CCW", value: trainingPrograms.filter(t => t.trainingType === 'CCW').length.toString(), subtitle: "Concealed carry", color: "text-nav-training" },
  { icon: CursorArrowRaysIcon, title: "Defensive", value: trainingPrograms.filter(t => t.trainingType === 'Defensive Pistol').length.toString(), subtitle: "Pistol training", color: "text-nav-training" },
  { icon: TrophyIcon, title: "Tactical", value: trainingPrograms.filter(t => t.trainingType === 'Tactical Carbine').length.toString(), subtitle: "Carbine courses", color: "text-nav-training" },
  { icon: UsersIcon, title: "Specialized", value: trainingPrograms.filter(t => ['Women', 'Youth', 'LEO', 'Specialized'].includes(t.trainingType)).length.toString(), subtitle: "Custom programs", color: "text-nav-training" },
  { icon: GraduationCap, title: "Total Training", value: trainingPrograms.length.toString(), subtitle: "Available courses", color: "text-nav-training" }
]

// Training activity feed data
const trainingActivityFeedData = [
  {
    icon: TrophyIcon,
    iconColor: "text-nav-training",
    iconBgColor: "bg-nav-training/20",
    title: "New Tactical Carbine Course",
    description: "Advanced tactical carbine training now available at Double Tapp Range",
    timeAgo: "2h ago"
  },
  {
    icon: ShieldCheckIcon,
    iconColor: "text-rusty-orange",
    iconBgColor: "bg-rusty-orange/20",
    title: "Instructor Certification",
    description: "Kyle Gentry adds force-on-force training to curriculum",
    timeAgo: "4h ago"
  },
  {
    icon: UsersIcon,
    iconColor: "text-sagebrush-green",
    iconBgColor: "bg-sagebrush-green/20",
    title: "Record Enrollment",
    description: "50+ students completed CCW training this month",
    timeAgo: "6h ago"
  }
]

export function TrainingPageStandardized() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)
  
  // Filter configuration
  const filters = useCardPageFilters({
    items: trainingPrograms,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'grid',
    initialItemsPerPage: 12,
    perPageOptions: [8, 12, 24, 48],
    enableInfiniteScroll: false,
    
    // MagnifyingGlassIcon filter function
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
      level: (training, selectedLevels) => {
        if (selectedLevels.length === 0) return true
        return selectedLevels.some(level => {
          switch (level) {
            case 'beginner': return training.level === 'Beginner'
            case 'intermediate': return training.level === 'Intermediate'
            case 'advanced': return training.level === 'Advanced'
            case 'all-levels': return training.level === 'All Levels'
            default: return false
          }
        })
      },
      price: (training, selectedPrices) => {
        if (selectedPrices.length === 0) return true
        return selectedPrices.some(price => {
          switch (price) {
            case 'free': return training.price === 0
            case 'under150': return training.price < 150
            case 'under250': return training.price < 250
            case 'over250': return training.price >= 250
            default: return false
          }
        })
      },
      duration: (training, selectedDurations) => {
        if (selectedDurations.length === 0) return true
        const hours = parseInt(training.duration)
        return selectedDurations.some(duration => {
          switch (duration) {
            case 'short': return hours <= 4
            case 'medium': return hours > 4 && hours <= 8
            case 'long': return hours > 8
            default: return false
          }
        })
      },
      certificate: (training, selectedOptions) => {
        if (selectedOptions.length === 0) return true
        return selectedOptions.some(option => {
          switch (option) {
            case 'certified': return training.certificate
            default: return false
          }
        })
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

  // Modern filter sidebar configuration - Training-specific filters
  const filterSections = [
    {
      id: 'level',
      title: 'Skill Level',
      maxVisible: 4,
      collapsible: true,
      options: [
        { id: 'beginner', label: 'Beginner', count: trainingPrograms.filter(t => t.level === 'Beginner').length, color: getFilterColor('skillLevel', 'beginner') },
        { id: 'intermediate', label: 'Intermediate', count: trainingPrograms.filter(t => t.level === 'Intermediate').length, color: getFilterColor('skillLevel', 'intermediate') },
        { id: 'advanced', label: 'Advanced', count: trainingPrograms.filter(t => t.level === 'Advanced').length, color: getFilterColor('skillLevel', 'advanced') },
        { id: 'all-levels', label: 'All Levels', count: trainingPrograms.filter(t => t.level === 'All Levels').length, color: getFilterColor('skillLevel', 'all-levels') }
      ]
    },
    {
      id: 'price',
      title: 'Price Range',
      maxVisible: 4,
      collapsible: true,
      options: [
        { id: 'free', label: 'Free', count: trainingPrograms.filter(t => t.price === 0).length, color: getFilterColor('price', 'free') },
        { id: 'under150', label: 'Under $150', count: trainingPrograms.filter(t => t.price < 150).length, color: getFilterColor('price', 'under150') },
        { id: 'under250', label: 'Under $250', count: trainingPrograms.filter(t => t.price < 250).length, color: getFilterColor('price', 'under250') },
        { id: 'over250', label: '$250+', count: trainingPrograms.filter(t => t.price >= 250).length, color: getFilterColor('price', 'over250') }
      ]
    },
    {
      id: 'duration',
      title: 'Duration',
      maxVisible: 3,
      collapsible: true,
      options: [
        { id: 'short', label: '4 hours or less', count: trainingPrograms.filter(t => parseInt(t.duration) <= 4).length, color: getFilterColor('duration', 'short') },
        { id: 'medium', label: '5-8 hours', count: trainingPrograms.filter(t => parseInt(t.duration) > 4 && parseInt(t.duration) <= 8).length, color: getFilterColor('duration', 'medium') },
        { id: 'long', label: '8+ hours', count: trainingPrograms.filter(t => parseInt(t.duration) > 8).length, color: getFilterColor('duration', 'long') }
      ]
    },
    {
      id: 'certificate',
      title: 'Certification',
      maxVisible: 1,
      collapsible: true,
      options: [
        { id: 'certified', label: 'Certificate Provided', count: trainingPrograms.filter(t => t.certificate).length, color: getFilterColor('certificate', 'certified') }
      ]
    }
  ]

  const handleFilterChange = (sectionId: string, optionId: string) => {
    filters.updateFilters(sectionId, optionId)
  }

  const handleClearSection = (sectionId: string) => {
    filters.clearFilterSection(sectionId)
  }

  const handleClearAll = () => {
    filters.clearAllFilters()
  }

  const getActiveFilterCount = () => {
    return Object.values(filters.selectedFilters).reduce((count, filterArray) => count + filterArray.length, 0)
  }

  // Hero content - working direct implementation like events page
  const heroContent = (
    <section className="relative overflow-hidden bg-gradient-training-hero px-md py-lg">
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side - 2/3 width */}
          <div className="h-full flex flex-col justify-center space-y-mobile-lg sm:space-y-lg py-mobile-md sm:py-md">
            {/* Breadcrumbs - more breathing room */}
            <div className="mb-lg">
              <div className="flex items-center gap-xs text-sm text-white/60">
                <span>Home</span>
                <ChevronRightIcon className="h-4 w-4" />
                <span className="text-white font-medium">Training</span>
              </div>
            </div>

            {/* Title and Subtitle - very tight spacing */}
            <div className="space-y-0">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-none">
                IDAHO FIREARMS TRAINING
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-none mt-1">
                professional instruction from veterans & law enforcement
              </h2>
            </div>

            {/* Badges below title/subtitle */}
            <div className="flex flex-wrap gap-xs">
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <ShieldCheckIcon className="h-4 w-4 mr-xs" />
                Safety
              </Badge>
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <CursorArrowRaysIcon className="h-4 w-4 mr-xs" />
                Tactical
              </Badge>
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <GraduationCap className="h-4 w-4 mr-xs" />
                Certified
              </Badge>
            </div>
            
            {/* Paragraph moved closer to badges */}
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed mt-base">
              Connect with certified instructors and training programs across the Treasure Valley. From basic safety to advanced tactical skills, find the right training for your needs.
            </p>
            
            <div className="flex gap-base">
              <Button className="bg-nav-training text-white hover:bg-white hover:text-nav-training font-rajdhani font-bold" animationType="plus-minus">
                <PlusIcon className="h-4 w-4 mr-xs" />
                ListBulletIcon Training
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 font-rajdhani font-bold" animationType="chevron">
                View CalendarDaysIcon
              </Button>
            </div>
          </div>
          
          {/* Featured Training Card - Right side - Compact Hero Version */}
          <div className="py-mobile-md sm:py-md">
            <div className="relative">
              {trainingPrograms.find(t => t.featured) && (() => {
                const featuredTraining = trainingPrograms.find(t => t.featured)!
                return (
                  <Card className="mica-card border-nav-training/30 shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-training/20 to-nav-training/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-training to-nav-training"></div>
                    
                    <CardContent className="p-sm relative z-10">
                      <div className="flex items-center justify-between mb-base">
                        <Badge className="bg-nav-training/20 text-nav-training border-nav-training/30 font-rajdhani font-bold text-[10px]">
                          <StarIcon className="h-3 w-3 mr-xs" />
                          FEATURED TRAINING
                        </Badge>
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <CheckCircleIcon className="h-3 w-3 text-nav-training" />
                          <span>Certified</span>
                        </div>
                      </div>
                      
                      <div className="space-y-base">
                        <div>
                          <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight mb-xs">{featuredTraining.title}</h3>
                          <div className="flex items-center gap-xs text-xs text-muted-foreground">
                            <GraduationCap className="h-3 w-3 text-nav-training" />
                            <span>{featuredTraining.instructor}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {featuredTraining.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-base border-t border-border">
                          <div className="space-y-xs">
                            <div className="flex items-center gap-xs">
                              <ClockIcon className="h-3 w-3 text-nav-training" />
                              <span className="text-xs text-muted-foreground">{featuredTraining.duration}</span>
                            </div>
                            <div className="flex items-center gap-xs">
                              <CurrencyDollarIcon className="h-3 w-3 text-nav-training" />
                              <span className="text-xs font-rajdhani font-bold">${featuredTraining.price}</span>
                            </div>
                          </div>
                          <Button 
                            className="bg-gradient-to-r from-nav-training to-nav-training text-gruvbox-bg-dark hover:from-nav-training hover:to-nav-training font-rajdhani font-bold text-xs"
                            size="sm"
                          >
                            VIEW DETAILS
                            <ArrowRightIcon className="h-3 w-3 ml-xs" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-background">
      {heroContent}
      
      {/* Main Content Area */}
      <section className="py-mobile-2xl sm:py-4xl bg-background/50">
        <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
          <div className="flex flex-col lg:flex-row gap-mobile-lg sm:gap-2xl max-w-[1920px] mx-auto">
            
            {/* Left Sidebar - Filters (Desktop) */}
            <aside className="hidden lg:block">
              <div className="space-y-6">
                {/* Modern Filter Sidebar - Now fully collapsible */}
                <ModernFilterSidebar
                  sections={filterSections}
                  selectedFilters={filters.selectedFilters}
                  onFilterChange={handleFilterChange}
                  onClearSection={handleClearSection}
                  onClearAll={handleClearAll}
                  totalResults={filters.totalResults}
                  filteredResults={filters.filteredResults}
                />
              </div>
            </aside>

            {/* Mobile Filter Sidebar */}
            <ModernFilterSidebar
              sections={filterSections}
              selectedFilters={filters.selectedFilters}
              onFilterChange={handleFilterChange}
              onClearSection={handleClearSection}
              onClearAll={handleClearAll}
              totalResults={filters.totalResults}
              filteredResults={filters.filteredResults}
              isMobile={true}
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
            
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* MagnifyingGlassIcon and Category Controls */}
              <div className="mb-xl space-y-lg">
                {/* MagnifyingGlassIcon Bar */}
                <div className="relative max-w-2xl">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="MagnifyingGlassIcon training programs, instructors, or locations..."
                    className="pl-10 h-12 text-body-base shadow-none"
                    value={filters.searchQuery}
                    onChange={(e) => filters.setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Quick Filter Tabs */}
                <div className="flex flex-wrap gap-xs">
                  {[
                    { id: 'all', label: 'All Training', count: trainingPrograms.length, icon: GraduationCap },
                    { id: 'basic', label: 'Basic Safety', count: trainingPrograms.filter(t => t.trainingType === 'Basic Safety').length, icon: ShieldCheckIcon },
                    { id: 'ccw', label: 'CCW', count: trainingPrograms.filter(t => t.trainingType === 'CCW').length, icon: CheckCircleIcon },
                    { id: 'defensive', label: 'Defensive', count: trainingPrograms.filter(t => t.trainingType === 'Defensive Pistol').length, icon: CursorArrowRaysIcon },
                    { id: 'tactical', label: 'Tactical', count: trainingPrograms.filter(t => t.trainingType === 'Tactical Carbine').length, icon: TrophyIcon },
                    { id: 'specialized', label: 'Specialized', count: trainingPrograms.filter(t => ['Women', 'Youth', 'LEO', 'Specialized'].includes(t.trainingType)).length, icon: UsersIcon },
                    { id: 'featured', label: 'Featured', count: trainingPrograms.filter(t => t.featured).length }
                  ].map((tab) => (
                    <Button
                      key={tab.id}
                      variant={filters.activeTab === tab.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => filters.setActiveTab(tab.id)}
                      className="gap-xs font-rajdhani shadow-none rounded-xs"
                    >
                      {tab.icon && React.createElement(tab.icon, { 
                        className: "size-3" 
                      })}
                      {tab.label}
                      {tab.count && (
                        <Badge variant="outline" size="sm" className="ml-xs">
                          {tab.count}
                        </Badge>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Results Header with Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base sm:gap-xl mb-xl sm:mb-2xl lg:mb-3xl">
                <div>
                  <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Training Program' : 'Training Programs'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filters.filteredResults !== filters.totalResults && `Filtered from ${filters.totalResults} total • `}
                    {filters.searchQuery && `MagnifyingGlassIcon: "${filters.searchQuery}" • `}
                    From basic safety to advanced tactical training
                  </p>
                </div>
                
                {/* View Controls - Mobile responsive */}
                <div className="flex items-center gap-sm sm:gap-base">
                  {/* Enhanced View Mode Toggle - Multiple Layouts */}
                  <div className="hidden sm:flex items-center border rounded-xs overflow-x-auto">
                    <Button
                      variant={filters.viewMode === 'compact' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('compact')}
                      className="rounded-none border-none shadow-none"
                      title="Compact - 4-6 items per row"
                    >
                      <Squares2X2Icon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'dense' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('dense')}
                      className="rounded-none border-none shadow-none"
                      title="Dense Grid - Maximum items"
                    >
                      <ListBulletIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('grid')}
                      className="rounded-none border-none shadow-none"
                      title="Standard Grid"
                    >
                      <Squares2X2Icon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'card' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('card')}
                      className="rounded-none border-none shadow-none"
                      title="Large Cards"
                    >
                      <RectangleGroupIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('list')}
                      className="rounded-none border-none shadow-none"
                      title="ListBulletIcon View"
                    >
                      <ListBulletIcon className="size-4" />
                    </Button>
                  </div>

                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="gap-xs font-rajdhani lg:hidden"
                  >
                    <FunnelIcon className="size-4" />
                    Filters
                    {getActiveFilterCount() > 0 && (
                      <Badge variant="outline" className="ml-xs bg-nav-training/20 text-nav-training border-nav-training/30 text-xs">
                        {getActiveFilterCount()}
                      </Badge>
                    )}
                  </Button>
                  
                  {/* Sort Dropdown */}
                  <select
                    value={filters.sortBy}
                    onChange={(e) => filters.setSortBy(e.target.value)}
                    className="bg-background border border-border rounded-xs px-base py-xs text-sm font-rajdhani"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="popularity">Sort by Students</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="alphabetical">Sort A-Z</option>
                  </select>
                </div>
              </div>

              {/* Card Grid/ListBulletIcon Content with Loading State */}
              <div className="mb-4xl">
                {filters.isLoading ? (
                  <CardSkeleton 
                    viewMode={filters.viewMode} 
                    count={filters.itemsPerPage} 
                    className={filters.getGridClassName()}
                  />
                ) : (
                  <div className={filters.getGridClassName()}>
                    {filters.paginatedItems.length > 0 ? (
                      filters.paginatedItems.map((training, index) => (
                        <TrainingCard
                          key={`${training.title}-${index}`}
                          training={training}
                          className="transition-all duration-300 rounded-xs"
                        />
                      ))
                    ) : (
                      <div className="col-span-full">
                        <EmptyState 
                          title="No Training Programs Found"
                          description="Try adjusting your search terms or filters to find training programs."
                          onAction={
                            <Button onClick={filters.clearAllFilters}>
                              Clear All Filters
                            </Button>
                          }
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Enhanced Pagination */}
              <EnhancedPagination
                currentPage={filters.currentPage}
                totalPages={filters.totalPages}
                onPageChange={filters.setCurrentPage}
                totalItems={filters.totalResults}
                itemsPerPage={filters.itemsPerPage}
                filteredItems={filters.filteredResults}
                variant="full"
                showItemsInfo={true}
                perPageOptions={filters.perPageOptions}
                onPerPageChange={filters.setItemsPerPage}
                isLoading={filters.isLoading}
                enableKeyboardNavigation={true}
              />
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}