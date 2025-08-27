'use client'

import * as React from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { MotionDiv } from '@/components/ui/optimized-motion'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader } from './card'
import { Badge } from './badge'
import { Button } from './button'
import { ArrowRightIcon, BookOpenIcon, BuildingStorefrontIcon, CalendarDaysIcon, MapIcon, MapPinIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline';

// Megamenu section configuration
interface MegamenuSection {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string; weight?: string }>
  colorClass: string
  items: MegamenuItem[]
  featured?: MegamenuFeatured
  quickActions?: MegamenuQuickAction[]
}

interface MegamenuItem {
  href: string
  label: string
  description?: string
  badge?: string
  isNew?: boolean
  icon?: React.ComponentType<{ className?: string; weight?: string }>
}

interface MegamenuFeatured {
  title: string
  description: string
  href: string
  image?: string
  badge?: string
  stats?: { label: string; value: string }[]
}

interface MegamenuQuickAction {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string; weight?: string }>
  colorClass: string
}

// Tactical megamenu data structure
const megamenuSections: MegamenuSection[] = [
  {
    id: 'events',
    title: 'Events & Training',
    description: 'Live events, competitions, and skill development',
    icon: TicketIcon,
    colorClass: 'nav-events',
    items: [
      { href: '/events', label: 'All Events', description: 'Browse upcoming events', icon: CalendarDaysIcon },
      { href: '/events/competitions', label: 'Competitions', description: 'Shooting competitions', badge: '12 Active' },
      { href: '/events/training', label: 'Training Classes', description: 'Skill development', isNew: true },
      { href: '/events/social', label: 'Social Events', description: 'Community gatherings' },
      { href: '/events/archive', label: 'Event Archive', description: 'Past events & results' },
    ],
    featured: {
      title: 'Treasure Valley Precision Championship',
      description: 'Long-range precision shooting competition - All skill levels welcome',
      href: '/events/treasure-valley-precision',
      badge: 'Featured Event',
      stats: [
        { label: 'Participants', value: '47/75' },
        { label: 'Date', value: 'Mar 15' },
        { label: 'Location', value: 'Meridian, ID' }
      ]
    },
    quickActions: [
      { href: '/events/submit', label: 'Submit Event', icon: CalendarDaysIcon, colorClass: 'nav-events' },
      { href: '/events/my-events', label: 'My Events', icon: StarIcon, colorClass: 'nav-events' }
    ]
  },
  {
    id: 'directory',
    title: 'Business Directory',
    description: 'Local firearms businesses and services',
    icon: BookOpenIcon,
    colorClass: 'nav-directory',
    items: [
      { href: '/directory', label: 'All Businesses', description: 'Complete directory', icon: BuildingStorefrontIcon },
      { href: '/directory/gun-stores', label: 'Gun Stores', description: 'Licensed dealers', badge: '45+' },
      { href: '/directory/ranges', label: 'Shooting Ranges', description: 'Practice facilities' },
      { href: '/directory/gunsmiths', label: 'Gunsmiths', description: 'Repair & customization' },
      { href: '/directory/instructors', label: 'Instructors', description: 'Certified training', isNew: true },
      { href: '/directory/verification', label: 'Get Verified', description: 'Business verification' },
    ],
    featured: {
      title: 'Boise Tactical Supply',
      description: 'Full-service firearms dealer with extensive inventory and expert staff',
      href: '/directory/boise-tactical-supply',
      badge: 'Top Rated',
      stats: [
        { label: 'Rating', value: '4.9/5' },
        { label: 'Reviews', value: '127' },
        { label: 'Response', value: '1 hour' }
      ]
    },
    quickActions: [
      { href: '/directory/add-business', label: 'ListBulletIcon Business', icon: BuildingStorefrontIcon, colorClass: 'nav-directory' },
      { href: '/directory/near-me', label: 'Near Me', icon: MapPinIcon, colorClass: 'nav-directory' }
    ]
  },
  {
    id: 'armory',
    title: 'The Armory',
    description: 'Gear reviews, builds, and tactical insights',
    icon: ShieldCheckIcon,
    colorClass: 'nav-armory',
    items: [
      { href: '/armory', label: 'All Reviews', description: 'Latest gear reviews', icon: ShieldCheckIcon },
      { href: '/armory/firearms', label: 'Firearms', description: 'Rifle & pistol reviews', badge: 'Hot' },
      { href: '/armory/optics', label: 'Optics', description: 'Scopes & sights' },
      { href: '/armory/gear', label: 'Tactical Gear', description: 'Accessories & equipment' },
      { href: '/armory/builds', label: 'Build Guides', description: 'Step-by-step builds', isNew: true },
      { href: '/armory/comparisons', label: 'Comparisons', description: 'Side-by-side analysis' },
    ],
    featured: {
      title: 'Vortex Viper PST Gen II Review',
      description: 'In-depth review of this popular precision scope with field testing results',
      href: '/armory/vortex-viper-pst-gen-ii',
      badge: 'Editor\'s Choice',
      stats: [
        { label: 'Views', value: '2.1K' },
        { label: 'Rating', value: '4.8/5' },
        { label: 'Comments', value: '23' }
      ]
    },
    quickActions: [
      { href: '/armory/submit-review', label: 'Submit Review', icon: ShieldCheckIcon, colorClass: 'nav-armory' },
      { href: '/armory/wishlist', label: 'My Wishlist', icon: StarIcon, colorClass: 'nav-armory' }
    ]
  },
  {
    id: 'buysell',
    title: 'Marketplace',
    description: 'Buy, sell, and trade firearms & gear',
    icon: BuildingStorefrontIcon,
    colorClass: 'nav-buysell',
    items: [
      { href: '/buysell', label: 'All Listings', description: 'Browse everything', icon: ShoppingCartIcon },
      { href: '/buysell/firearms', label: 'Firearms', description: 'Licensed sales only', badge: 'Verified' },
      { href: '/buysell/optics', label: 'Optics & Scopes', description: 'Precision equipment' },
      { href: '/buysell/gear', label: 'Gear & Accessories', description: 'All other equipment' },
      { href: '/buysell/deals', label: 'Hot Deals', description: 'Limited time offers', isNew: true },
      { href: '/buysell/wanted', label: 'Wanted Ads', description: 'Looking to buy' },
    ],
    featured: {
      title: 'Glock 19 Gen 5 - Like New',
      description: '9mm, 15+1 capacity, night sights, three magazines included',
      href: '/buysell/glock-19-gen-5',
      badge: 'Hot Deal',
      stats: [
        { label: 'Price', value: '$549' },
        { label: 'Condition', value: 'Like New' },
        { label: 'Views', value: '340' }
      ]
    },
    quickActions: [
      { href: '/buysell/sell', label: 'List Item', icon: BuildingStorefrontIcon, colorClass: 'nav-buysell' },
      { href: '/buysell/watchlist', label: 'Watchlist', icon: EyeIcon, colorClass: 'nav-buysell' }
    ]
  }
]

interface TacticalMegamenuProps {
  isOpen: boolean
  onClose: () => void
  activeSection?: string
  className?: string
}

export function TacticalMegamenu({ 
  isOpen, 
  onClose, 
  activeSection,
  className 
}: TacticalMegamenuProps) {
  const [hoveredSection, setHoveredSection] = React.useState<string | null>(activeSection || null)
  
  const currentSection = React.useMemo(() => {
    return megamenuSections.find(section => section.id === (hoveredSection || activeSection))
  }, [hoveredSection, activeSection])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionDiv
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          
          {/* Megamenu Content */}
          <MotionDiv
            className={cn(
              "absolute top-full left-0 right-0 z-50",
              "bg-card border-b border-border shadow-modal",
              "overflow-hidden",
              className
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex">
                {/* Left Navigation */}
                <div className="w-64 bg-muted/30 border-r border-border">
                  <div className="p-base space-y-xs">
                    {megamenuSections.map((section) => (
                      <button
                        key={section.id}
                        className={cn(
                          "w-full flex items-center gap-sm p-sm rounded-xs text-left transition-all duration-200",
                          "hover:bg-muted/50",
                          hoveredSection === section.id && "bg-muted text-foreground"
                        )}
                        onMouseEnter={() => setHoveredSection(section.id)}
                      >
                        <section.icon className="h-5 w-5 text-muted-foreground" weight="bold" />
                        <div>
                          <div className="font-rajdhani font-medium text-sm">{section.title}</div>
                          <div className="text-xs text-muted-foreground">{section.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-base">
                  <AnimatePresence mode="wait">
                    {currentSection && (
                      <MotionDiv
                        key={currentSection.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-xl"
                      >
                        {/* Navigation Links */}
                        <div className="lg:col-span-2">
                          <h3 className="font-rajdhani font-bold text-xl mb-lg text-foreground">
                            {currentSection.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                            {currentSection.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="group flex items-start gap-sm p-sm rounded-xs hover:bg-muted/30 transition-colors"
                                onClick={onClose}
                              >
                                {item.icon && (
                                  <item.icon className="h-4 w-4 text-muted-foreground mt-0.5 group-hover:text-foreground transition-colors" weight="bold" />
                                )}
                                <div className="flex-1">
                                  <div className="flex items-center gap-xs">
                                    <span className="font-rajdhani font-medium text-sm group-hover:text-foreground transition-colors">
                                      {item.label}
                                    </span>
                                    {item.isNew && (
                                      <Badge variant="outline" className="text-xs bg-nav-events/20 text-nav-events border-nav-events/30">
                                        New
                                      </Badge>
                                    )}
                                    {item.badge && !item.isNew && (
                                      <Badge variant="outline" className="text-xs">
                                        {item.badge}
                                      </Badge>
                                    )}
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                <ArrowRightIcon className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5" />
                              </Link>
                            ))}
                          </div>

                          {/* Quick Actions */}
                          {currentSection.quickActions && (
                            <div className="mt-lg pt-lg border-t border-border/50">
                              <h4 className="font-rajdhani font-medium text-sm text-muted-foreground mb-sm">
                                Quick Actions
                              </h4>
                              <div className="flex gap-sm">
                                {currentSection.quickActions.map((action) => (
                                  <Button
                                    key={action.href}
                                    asChild
                                    size="sm"
                                    variant="outline"
                                    className="gap-xs"
                                    onClick={onClose}
                                  >
                                    <Link href={action.href}>
                                      <action.icon className="h-4 w-4" weight="bold" />
                                      {action.label}
                                    </Link>
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Featured Content */}
                        {currentSection.featured && (
                          <div className="lg:col-span-1">
                            <Card className="h-full border-nav-buysell/20 hover:shadow-elevated transition-all duration-300">
                              <CardHeader className="pb-sm">
                                <div className="flex items-center gap-xs mb-xs">
                                  <Badge className={`bg-${currentSection.colorClass}/20 text-${currentSection.colorClass} border-${currentSection.colorClass}/30`}>
                                    {currentSection.featured.badge}
                                  </Badge>
                                </div>
                                <h4 className="font-rajdhani font-bold text-base leading-tight">
                                  {currentSection.featured.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {currentSection.featured.description}
                                </p>
                              </CardHeader>
                              <CardContent className="pt-0">
                                {currentSection.featured.stats && (
                                  <div className="grid grid-cols-3 gap-sm mb-sm">
                                    {currentSection.featured.stats.map((stat, index) => (
                                      <div key={index} className="text-center">
                                        <div className="font-rajdhani font-bold text-sm text-foreground">
                                          {stat.value}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          {stat.label}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                <Button
                                  asChild
                                  className="w-full gap-xs"
                                  size="sm"
                                  onClick={onClose}
                                >
                                  <Link href={currentSection.featured.href}>
                                    View Details
                                    <ArrowRightIcon className="h-4 w-4" />
                                  </Link>
                                </Button>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  )
}