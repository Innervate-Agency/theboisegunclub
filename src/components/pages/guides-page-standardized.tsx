'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { GuideCard, type GuideData } from '@/components/ui/GuideCard'
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
import { ArrowRightIcon, BookOpenIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, CursorArrowRaysIcon, DocumentTextIcon, EyeIcon, FunnelIcon, HeartIcon, InformationCircleIcon, ListBulletIcon, MagnifyingGlassIcon, PlusIcon, RectangleGroupIcon, ScaleIcon, ShieldCheckIcon, Squares2X2Icon, StarIcon, TrophyIcon, UsersIcon, ViewColumnsIcon, WindowIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Simple color mapping for guides filter categories
const getFilterColor = (category: string, type: string): string => {
  switch (category) {
    case 'category':
      if (type === 'legal') return 'bg-rusty-orange'
      if (type === 'safety') return 'bg-sagebrush-green'
      if (type === 'training') return 'bg-nav-training'
      if (type === 'competition') return 'bg-nav-events'
      if (type === 'equipment') return 'bg-weathered-gold'
      return 'bg-slate-blue'
    case 'difficulty':
      if (type === 'beginner') return 'bg-sagebrush-green'
      if (type === 'intermediate') return 'bg-sandy-ochre'
      if (type === 'advanced') return 'bg-rusty-orange'
      return 'bg-slate-blue'
    case 'readTime':
      if (type === 'quick') return 'bg-sagebrush-green'
      if (type === 'short') return 'bg-sandy-ochre'
      if (type === 'medium') return 'bg-rusty-orange'
      return 'bg-weathered-gold'
    case 'author':
      if (type === 'attorney') return 'bg-rusty-orange'
      if (type === 'instructor') return 'bg-nav-training'
      if (type === 'competitor') return 'bg-nav-events'
      if (type === 'leo') return 'bg-slate-blue'
      return 'bg-sandy-ochre'
    default:
      return 'bg-muted'
  }
}

// Using GuideData type from GuideCard component

// Comprehensive guides dataset (similar to events structure)
const guidesData: GuideData[] = [
  {
    id: 'idaho-constitutional-carry-2025',
    title: 'Idaho Constitutional Carry: Complete Legal Guide 2025',
    description: 'Comprehensive guide to Idaho\'s constitutional carry laws, including where you can and cannot carry, reciprocity with other states, and important legal considerations.',
    excerpt: 'Everything you need to know about carrying firearms in Idaho under constitutional carry laws.',
    category: 'Legal',
    difficulty: 'All Levels',
    readTime: 12,
    author: 'Attorney Sarah Mitchell',
    publishDate: '2025-01-15',
    lastUpdated: '2025-01-15',
    views: 15420,
    likes: 342,
    tags: ['constitutional carry', 'idaho law', 'concealed carry', 'legal guide'],
    featured: false,
    verified: true,
    slug: 'idaho-constitutional-carry-2025'
  },
  {
    id: 'home-defense-planning',
    title: 'Home Defense Planning: A Complete Idaho Guide',
    description: 'Step-by-step guide to planning your home defense strategy, including weapon selection, positioning, legal considerations, and family safety protocols.',
    excerpt: 'Create a comprehensive home defense plan that protects your family while staying within Idaho law.',
    category: 'Safety',
    difficulty: 'Beginner',
    readTime: 18,
    author: 'Tactical Instructor Mike Reynolds',
    publishDate: '2025-01-12',
    lastUpdated: '2025-01-12',
    views: 8750,
    likes: 216,
    tags: ['home defense', 'safety', 'tactical planning', 'family protection'],
    featured: false,
    verified: true,
    slug: 'home-defense-planning'
  },
  {
    id: 'ccw-reciprocity-map-2025',
    title: 'Idaho CCW Reciprocity Map & Travel Guide 2025',
    description: 'Interactive guide to concealed carry reciprocity for Idaho permit holders, including state-by-state breakdown and travel tips.',
    excerpt: 'Know your concealed carry rights when traveling outside Idaho with our comprehensive reciprocity guide.',
    category: 'Legal',
    difficulty: 'Intermediate',
    readTime: 8,
    author: 'Legal Team',
    publishDate: '2025-01-10',
    lastUpdated: '2025-01-10',
    views: 12300,
    likes: 187,
    tags: ['ccw', 'reciprocity', 'travel', 'permits'],
    featured: false,
    verified: true,
    slug: 'ccw-reciprocity-map-2025'
  },
  {
    id: 'uspsa-competition-prep',
    title: 'USPSA Competition Preparation Guide',
    description: 'Complete guide to preparing for your first USPSA match, including equipment requirements, training drills, and match day procedures.',
    excerpt: 'Get ready for your first USPSA competition with this comprehensive preparation guide.',
    category: 'Competition',
    difficulty: 'Beginner',
    readTime: 15,
    author: 'USPSA Master Class Shooter John Davis',
    publishDate: '2025-01-08',
    lastUpdated: '2025-01-08',
    views: 6540,
    likes: 128,
    tags: ['uspsa', 'competition', 'training', 'preparation'],
    featured: false,
    verified: true,
    slug: 'uspsa-competition-prep'
  },
  {
    id: 'firearm-safety-fundamentals',
    title: 'Firearm Safety Fundamentals: The Four Rules & Beyond',
    description: 'Master the fundamental rules of firearm safety with practical examples, common mistakes to avoid, and advanced safety protocols.',
    excerpt: 'Essential safety guide covering the four fundamental rules and advanced safety protocols every gun owner must know.',
    category: 'Safety',
    difficulty: 'All Levels',
    readTime: 10,
    author: 'NRA Certified Instructor Lisa Thompson',
    publishDate: '2025-01-05',
    lastUpdated: '2025-01-05',
    views: 9870,
    likes: 298,
    tags: ['safety', 'fundamentals', 'training', 'nra'],
    featured: false,
    verified: true,
    slug: 'firearm-safety-fundamentals'
  },
  {
    id: 'precision-rifle-basics',
    title: 'Precision Rifle Shooting: From Beginner to Competitor',
    description: 'Comprehensive guide to precision rifle shooting, covering equipment selection, fundamentals, training progression, and competition preparation.',
    excerpt: 'Master precision rifle shooting with this complete guide from basic fundamentals to competitive shooting.',
    category: 'Training',
    difficulty: 'Intermediate',
    readTime: 22,
    author: 'PRS Competitor Mark Johnson',
    publishDate: '2025-01-03',
    lastUpdated: '2025-01-03',
    views: 7210,
    likes: 156,
    tags: ['precision rifle', 'long range', 'prs', 'training'],
    featured: false,
    verified: true,
    slug: 'precision-rifle-basics'
  },
  {
    id: 'idaho-hunting-regulations-2025',
    title: 'Idaho Hunting Regulations & License Guide 2025',
    description: 'Complete guide to Idaho hunting regulations, license requirements, seasons, and legal hunting practices for 2025.',
    excerpt: 'Stay compliant with Idaho hunting laws and regulations with our comprehensive 2025 guide.',
    category: 'Legal',
    difficulty: 'All Levels',
    readTime: 14,
    author: 'Idaho Fish & Game Liaison',
    publishDate: '2025-01-01',
    lastUpdated: '2025-01-01',
    views: 11200,
    likes: 234,
    tags: ['hunting', 'regulations', 'idaho fish and game', 'licenses'],
    featured: false,
    verified: true,
    slug: 'idaho-hunting-regulations-2025'
  },
  {
    id: 'defensive-pistol-training',
    title: 'Defensive Pistol Training: Essential Skills & Drills',
    description: 'Master defensive pistol skills with proven training methods, drills, and techniques used by law enforcement and military.',
    excerpt: 'Develop essential defensive pistol skills with this comprehensive training guide.',
    category: 'Training',
    difficulty: 'Intermediate',
    readTime: 16,
    author: 'Former LEO Instructor Dave Wilson',
    publishDate: '2024-12-28',
    lastUpdated: '2024-12-28',
    views: 5690,
    likes: 142,
    tags: ['defensive shooting', 'pistol training', 'self defense', 'drills'],
    featured: false,
    verified: true,
    slug: 'defensive-pistol-training'
  },
  {
    id: 'gun-storage-safety-guide',
    title: 'Safe Gun Storage: Protecting Your Family & Firearms',
    description: 'Comprehensive guide to safe firearm storage, including legal requirements, storage options, and best practices for families.',
    excerpt: 'Learn proper firearm storage techniques to keep your family safe while ensuring quick access when needed.',
    category: 'Safety',
    difficulty: 'All Levels',
    readTime: 11,
    author: 'Child Safety Expert Dr. Amanda Clark',
    publishDate: '2024-12-25',
    lastUpdated: '2024-12-25',
    views: 8340,
    likes: 201,
    tags: ['gun storage', 'child safety', 'security', 'family'],
    featured: false,
    verified: true,
    slug: 'gun-storage-safety-guide'
  },
  {
    id: 'idpa-shooting-guide',
    title: 'IDPA Competition: Rules, Equipment & Training',
    description: 'Complete guide to IDPA competition shooting, including rules, equipment requirements, and training strategies for success.',
    excerpt: 'Get started in IDPA competition with this comprehensive guide to rules, gear, and training.',
    category: 'Competition',
    difficulty: 'Beginner',
    readTime: 13,
    author: 'IDPA Safety Officer Tom Anderson',
    publishDate: '2024-12-22',
    lastUpdated: '2024-12-22',
    views: 4870,
    likes: 98,
    tags: ['idpa', 'competition', 'training', 'rules'],
    featured: false,
    verified: true,
    slug: 'idpa-shooting-guide'
  },
  {
    id: 'concealed-carry-clothing',
    title: 'Concealed Carry Clothing & Gear Selection',
    description: 'Choose the right clothing and gear for effective concealed carry, including holster selection, clothing tips, and seasonal considerations.',
    excerpt: 'Master concealed carry with the right clothing choices and gear selection for Idaho\'s climate.',
    category: 'Equipment',
    difficulty: 'Beginner',
    readTime: 9,
    author: 'CCW Instructor Jennifer Lee',
    publishDate: '2024-12-20',
    lastUpdated: '2024-12-20',
    views: 6120,
    likes: 143,
    tags: ['concealed carry', 'holsters', 'clothing', 'gear'],
    featured: false,
    verified: true,
    slug: 'concealed-carry-clothing'
  },
  {
    id: 'reloading-basics-guide',
    title: 'Ammunition Reloading: Beginner\'s Complete Guide',
    description: 'Learn ammunition reloading from scratch, including equipment selection, safety protocols, and step-by-step reloading processes.',
    excerpt: 'Start reloading your own ammunition safely and effectively with this comprehensive beginner\'s guide.',
    category: 'Technical',
    difficulty: 'Beginner',
    readTime: 20,
    author: 'Master Reloader Robert Kim',
    publishDate: '2024-12-18',
    lastUpdated: '2024-12-18',
    views: 7890,
    likes: 189,
    tags: ['reloading', 'ammunition', 'handloading', 'safety'],
    featured: false,
    verified: true,
    slug: 'reloading-basics-guide'
  }
]

export function GuidesPageStandardized() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)

  // Activity feed data for guides based on real guide data
  const activityFeedData = [
    {
      icon: BookOpen,
      iconColor: "text-nav-intel",
      iconBgColor: "bg-nav-intel/20",
      title: "New Guide Published",
      description: "Idaho Constitutional Carry: Complete Legal Guide 2025",
      timeAgo: "2h ago"
    },
    {
      icon: CheckCircle,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20",
      title: "Guide Updated",
      description: "CCW Reciprocity Map refreshed with 2025 changes",
      timeAgo: "4h ago"
    },
    {
      icon: Users,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20",
      title: "Community Verified",
      description: "Home Defense Planning guide reviewed by certified instructors",
      timeAgo: "6h ago"
    }
  ]

  // Guides category stats based on actual guide data
  const guideCategoryStats = [
    { icon: Scales, title: "Legal Guides", value: guidesData.filter(g => g.category === 'Legal').length.toString(), subtitle: "Idaho laws", color: "text-nav-intel" },
    { icon: Shield, title: "Safety Guides", value: guidesData.filter(g => g.category === 'Safety').length.toString(), subtitle: "Best practices", color: "text-nav-intel" },
    { icon: Target, title: "Training Guides", value: guidesData.filter(g => g.category === 'Training').length.toString(), subtitle: "Skill development", color: "text-nav-intel" },
    { icon: Trophy, title: "Competition Guides", value: guidesData.filter(g => g.category === 'Competition').length.toString(), subtitle: "Match prep", color: "text-nav-intel" },
    { icon: Eye, title: "Total Views", value: `${Math.round(guidesData.reduce((sum, g) => sum + g.views, 0) / 1000)}K`, subtitle: "Active readers", color: "text-nav-intel" },
    { icon: Heart, title: "Total Guides", value: guidesData.length.toString(), subtitle: "Comprehensive library", color: "text-nav-intel" }
  ]

  // Filter configuration
  const filters = useCardPageFilters({
    items: guidesData,
    initialTab: 'all',
    initialSortBy: 'date',
    initialViewMode: 'grid',
    initialItemsPerPage: 12,
    perPageOptions: [8, 12, 24, 48],
    enableInfiniteScroll: false,
    
    // Search filter function
    searchFilter: (guide, query) => {
      const searchTerms = query.toLowerCase()
      return (
        guide.title.toLowerCase().includes(searchTerms) ||
        guide.description.toLowerCase().includes(searchTerms) ||
        guide.excerpt.toLowerCase().includes(searchTerms) ||
        guide.category.toLowerCase().includes(searchTerms) ||
        guide.tags.some(tag => tag.toLowerCase().includes(searchTerms))
      )
    },
    
    // Tab filter function
    tabFilter: (guide, activeTab) => {
      switch (activeTab) {
        case 'legal': return guide.category === 'Legal'
        case 'safety': return guide.category === 'Safety'
        case 'training': return guide.category === 'Training'
        case 'competition': return guide.category === 'Competition'
        case 'equipment': return guide.category === 'Equipment'
        case 'technical': return guide.category === 'Technical'
        case 'featured': return guide.featured
        default: return true
      }
    },
    
    // Custom filters
    customFilters: {
      category: (guide, selectedCategories) => {
        if (selectedCategories.length === 0) return true
        return selectedCategories.includes(guide.category.toLowerCase())
      },
      difficulty: (guide, selectedDifficulties) => {
        if (selectedDifficulties.length === 0) return true
        return selectedDifficulties.includes(guide.difficulty.toLowerCase().replace(' ', '-'))
      },
      readTime: (guide, selectedTimes) => {
        if (selectedTimes.length === 0) return true
        return selectedTimes.some(time => {
          switch (time) {
            case 'quick': return guide.readTime <= 5
            case 'short': return guide.readTime > 5 && guide.readTime <= 10
            case 'medium': return guide.readTime > 10 && guide.readTime <= 20
            case 'long': return guide.readTime > 20
            default: return false
          }
        })
      },
      author: (guide, selectedAuthors) => {
        if (selectedAuthors.length === 0) return true
        const authorType = guide.author.toLowerCase()
        return selectedAuthors.some(type => {
          switch (type) {
            case 'attorney': return authorType.includes('attorney') || authorType.includes('legal')
            case 'instructor': return authorType.includes('instructor') || authorType.includes('certified')
            case 'competitor': return authorType.includes('competitor') || authorType.includes('shooter')
            case 'leo': return authorType.includes('leo') || authorType.includes('former')
            case 'expert': return authorType.includes('expert') || authorType.includes('master')
            default: return false
          }
        })
      }
    },
    
    // Sort functions
    sortFunctions: {
      date: (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
      popularity: (a, b) => b.views - a.views,
      readTime: (a, b) => a.readTime - b.readTime,
      alphabetical: (a, b) => a.title.localeCompare(b.title)
    }
  })

  // Modern filter sidebar configuration - Comprehensive guide filters
  const filterSections = [
    {
      id: 'category',
      title: 'Guide Categories',
      maxVisible: 6,
      collapsible: true,
      options: [
        { id: 'legal', label: 'Legal Guides', count: guidesData.filter(g => g.category === 'Legal').length, color: getFilterColor('category', 'legal') },
        { id: 'safety', label: 'Safety Guides', count: guidesData.filter(g => g.category === 'Safety').length, color: getFilterColor('category', 'safety') },
        { id: 'training', label: 'Training Guides', count: guidesData.filter(g => g.category === 'Training').length, color: getFilterColor('category', 'training') },
        { id: 'competition', label: 'Competition Guides', count: guidesData.filter(g => g.category === 'Competition').length, color: getFilterColor('category', 'competition') },
        { id: 'equipment', label: 'Equipment Guides', count: guidesData.filter(g => g.category === 'Equipment').length, color: getFilterColor('category', 'equipment') },
        { id: 'technical', label: 'Technical Guides', count: guidesData.filter(g => g.category === 'Technical').length, color: getFilterColor('category', 'technical') }
      ]
    },
    {
      id: 'difficulty',
      title: 'Difficulty Level',
      maxVisible: 4,
      collapsible: true,
      options: [
        { id: 'beginner', label: 'Beginner', count: guidesData.filter(g => g.difficulty === 'Beginner').length, color: getFilterColor('difficulty', 'beginner') },
        { id: 'intermediate', label: 'Intermediate', count: guidesData.filter(g => g.difficulty === 'Intermediate').length, color: getFilterColor('difficulty', 'intermediate') },
        { id: 'advanced', label: 'Advanced', count: guidesData.filter(g => g.difficulty === 'Advanced').length, color: getFilterColor('difficulty', 'advanced') },
        { id: 'all-levels', label: 'All Levels', count: guidesData.filter(g => g.difficulty === 'All Levels').length, color: getFilterColor('difficulty', 'all-levels') }
      ]
    },
    {
      id: 'readTime',
      title: 'Reading Time',
      maxVisible: 4,
      collapsible: true,
      options: [
        { id: 'quick', label: 'Quick Read (≤5 min)', count: guidesData.filter(g => g.readTime <= 5).length, color: getFilterColor('readTime', 'quick') },
        { id: 'short', label: 'Short (6-10 min)', count: guidesData.filter(g => g.readTime > 5 && g.readTime <= 10).length, color: getFilterColor('readTime', 'short') },
        { id: 'medium', label: 'Medium (11-20 min)', count: guidesData.filter(g => g.readTime > 10 && g.readTime <= 20).length, color: getFilterColor('readTime', 'medium') },
        { id: 'long', label: 'Long (20+ min)', count: guidesData.filter(g => g.readTime > 20).length, color: getFilterColor('readTime', 'long') }
      ]
    },
    {
      id: 'author',
      title: 'Author Type',
      maxVisible: 5,
      collapsible: true,
      options: [
        { id: 'attorney', label: 'Legal Experts', count: guidesData.filter(g => g.author.toLowerCase().includes('attorney') || g.author.toLowerCase().includes('legal')).length, color: getFilterColor('author', 'attorney') },
        { id: 'instructor', label: 'Certified Instructors', count: guidesData.filter(g => g.author.toLowerCase().includes('instructor') || g.author.toLowerCase().includes('certified')).length, color: getFilterColor('author', 'instructor') },
        { id: 'competitor', label: 'Competitors', count: guidesData.filter(g => g.author.toLowerCase().includes('competitor') || g.author.toLowerCase().includes('shooter')).length, color: getFilterColor('author', 'competitor') },
        { id: 'leo', label: 'Law Enforcement', count: guidesData.filter(g => g.author.toLowerCase().includes('leo') || g.author.toLowerCase().includes('former')).length, color: getFilterColor('author', 'leo') },
        { id: 'expert', label: 'Subject Experts', count: guidesData.filter(g => g.author.toLowerCase().includes('expert') || g.author.toLowerCase().includes('master')).length, color: getFilterColor('author', 'expert') }
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
    <section className="relative overflow-hidden bg-gradient-to-br from-nav-intel to-dark-chocolate px-md py-lg">
      {/* Background Elements - can add guides-specific background elements later */}
      
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side - 2/3 width */}
          <div className="h-full flex flex-col justify-center space-y-mobile-lg sm:space-y-lg py-mobile-md sm:py-md">
            {/* Breadcrumbs - more breathing room */}
            <div className="mb-lg">
              <div className="flex items-center gap-xs text-sm text-white/60">
                <span>Home</span>
                <CaretRight className="h-4 w-4" />
                <span className="text-white font-medium">Guides</span>
              </div>
            </div>

            {/* Title and Subtitle - very tight spacing */}
            <div className="space-y-0">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-none">
                IDAHO FIREARMS GUIDES & RESOURCES
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-none mt-1">
                legal information, safety protocols & training resources
              </h2>
            </div>

            {/* Badges below title/subtitle */}
            <div className="flex flex-wrap gap-xs">
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <ScaleIcon className="h-4 w-4 mr-xs" />
                Legal
              </Badge>
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <ShieldCheckIcon className="h-4 w-4 mr-xs" />
                Safety
              </Badge>
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <CursorArrowRaysIcon className="h-4 w-4 mr-xs" />
                Training
              </Badge>
            </div>
            
            {/* Paragraph moved closer to badges */}
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed mt-base">
              Comprehensive guides for Idaho gun owners. From legal requirements and safety protocols to training tips and competition preparation.
            </p>
            
            <div className="flex gap-base">
              <Button className="bg-nav-intel text-white hover:bg-white hover:text-nav-intel font-rajdhani font-bold" animationType="plus-minus">
                <PlusIcon className="h-4 w-4 mr-xs" />
                Submit Guide
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 font-rajdhani font-bold" animationType="chevron">
                Browse Library
              </Button>
            </div>
          </div>
          
          {/* Featured Guide Card - Right side - Compact Hero Version */}
          <div className="py-mobile-md sm:py-md">
            <div className="relative">
              {guidesData.find(g => g.featured) && (() => {
                const featuredGuide = guidesData.find(g => g.featured)!
                return (
                  <Card className="mica-card border-nav-intel/30 shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-intel/20 to-nav-intel/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-intel to-nav-intel"></div>
                    
                    <CardContent className="p-sm relative z-10">
                      <div className="flex items-center justify-between mb-base">
                        <Badge className="bg-nav-intel/20 text-nav-intel border-nav-intel/30 font-rajdhani font-bold text-[10px]">
                          <StarIcon className="h-3 w-3 mr-xs" />
                          FEATURED GUIDE
                        </Badge>
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <CheckCircleIcon className="h-3 w-3 text-nav-intel" />
                          <span>Verified</span>
                        </div>
                      </div>
                      
                      <div className="space-y-base">
                        <div>
                          <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight mb-xs">{featuredGuide.title}</h3>
                          <div className="flex items-center gap-xs text-xs text-muted-foreground">
                            <ClockIcon className="h-3 w-3 text-nav-intel" />
                            <span>{featuredGuide.readTime} min read</span>
                            <EyeIcon className="h-3 w-3 text-nav-intel" />
                            <span>{featuredGuide.views.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {featuredGuide.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-base border-t border-border">
                          <div className="space-y-xs">
                            <div className="flex items-center gap-xs">
                              <Badge variant="outline" className="text-[10px] h-4">
                                {featuredGuide.category}
                              </Badge>
                              <Badge variant="outline" className="text-[10px] h-4">
                                {featuredGuide.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <Button 
                            className="bg-gradient-to-r from-nav-intel to-nav-intel text-gruvbox-bg-dark hover:from-nav-intel hover:to-nav-intel font-rajdhani font-bold text-xs"
                            size="sm"
                          >
                            READ GUIDE
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
                {/* Stats Grid - Moved to sidebar */}
                <div className="bg-card/50 rounded-xs p-base">
                  <h3 className="font-rajdhani font-bold text-heading-sm text-card-foreground mb-base">
                    Guide Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-base">
                    {guideCategoryStats.slice(0, 4).map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-xs">
                          <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </div>
                        <div className="text-lg font-rajdhani font-bold text-card-foreground">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Modern Filter Sidebar */}
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
              {/* Search and Category Controls */}
              <div className="mb-xl space-y-lg">
                {/* Search Bar */}
                <div className="relative max-w-2xl">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search guides, topics, or categories..."
                    className="pl-10 h-12 text-body-base shadow-none"
                    value={filters.searchQuery}
                    onChange={(e) => filters.setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Quick Filter Tabs */}
                <div className="flex flex-wrap gap-xs">
                  {[
                    { id: 'all', label: 'All Guides', count: guidesData.length, icon: BookOpen },
                    { id: 'legal', label: 'Legal', count: guidesData.filter(g => g.category === 'Legal').length, icon: Scales },
                    { id: 'safety', label: 'Safety', count: guidesData.filter(g => g.category === 'Safety').length, icon: Shield },
                    { id: 'training', label: 'Training', count: guidesData.filter(g => g.category === 'Training').length, icon: Target },
                    { id: 'competition', label: 'Competition', count: guidesData.filter(g => g.category === 'Competition').length, icon: Trophy },
                    { id: 'equipment', label: 'Equipment', count: guidesData.filter(g => g.category === 'Equipment').length, icon: Star },
                    { id: 'featured', label: 'Featured', count: guidesData.filter(g => g.featured).length }
                  ].map((tab) => (
                    <Button
                      key={tab.id}
                      variant={filters.activeTab === tab.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => filters.setActiveTab(tab.id)}
                      className="gap-xs font-rajdhani shadow-none rounded-xs"
                    >
                      {tab.icon && React.createElement(tab.icon, { 
                        weight: "bold", 
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
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Guide' : 'Guides'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filters.filteredResults !== filters.totalResults && `Filtered from ${filters.totalResults} total • `}
                    {filters.searchQuery && `Search: "${filters.searchQuery}"`}
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
                      title="List View"
                    >
                      <ListView className="size-4" />
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
                      <Badge variant="outline" className="ml-xs bg-nav-intel/20 text-nav-intel border-nav-intel/30 text-xs">
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
                    <option value="popularity">Sort by Popularity</option>
                    <option value="readTime">Sort by Read Time</option>
                    <option value="alphabetical">Sort A-Z</option>
                  </select>
                </div>
              </div>

              {/* Card Grid/List Content with Loading State */}
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
                      filters.paginatedItems.map((guide, index) => (
                        <GuideCard
                          key={`${guide.id}-${index}`}
                          guide={guide}
                        />
                      ))
                    ) : (
                      <div className="col-span-full">
                        <EmptyState 
                          title="No Guides Found"
                          description="Try adjusting your search terms or filters to find guides."
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