'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MotionDiv } from '@/components/ui/optimized-motion'
import { Button } from './button'
import { Input } from './input'
import { Badge } from './badge'
import { 
  MagnifyingGlassIcon, 
  ChevronDownIcon,
  CalendarDaysIcon,
  MapPinIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  FireIcon,
  UserGroupIcon,
  DocumentTextIcon,
  NewspaperIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface NavigationDropdownProps {
  section: 'events' | 'directory' | 'armory' | 'intel' | 'buysell' | 'forums'
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
  className?: string
}

// Section-specific content configurations
const sectionConfigs = {
  events: {
    title: 'Events',
    subtitle: 'Competitions & Training',
    searchPlaceholder: 'Search events by name, date, or location...',
    micaClass: 'mica-events',
    sections: [
      {
        title: 'Upcoming Events',
        icon: CalendarDaysIcon,
        items: [
          { name: 'Monthly Steel Challenge', href: '/events/steel-challenge', description: 'Fast-paced precision shooting', badge: 'This Weekend' },
          { name: 'Tactical Carbine Course', href: '/events/tactical-carbine', description: 'Advanced rifle training', badge: 'Spots Available' },
          { name: 'Ladies Night Out', href: '/events/ladies-night', description: 'Women-only training session' },
          { name: 'Youth Safety Course', href: '/events/youth-safety', description: 'Hunter education for kids' },
        ]
      },
      {
        title: 'Training Programs',
        icon: TrophyIcon,
        items: [
          { name: 'Concealed Carry Course', href: '/events/ccw-course', description: 'Idaho CCW certification' },
          { name: 'Long Range Precision', href: '/events/long-range', description: 'Extended distance shooting' },
          { name: 'Home Defense Tactics', href: '/events/home-defense', description: 'Practical defense training' },
        ]
      },
      {
        title: 'Quick Actions',
        icon: SparklesIcon,
        items: [
          { name: 'Event Calendar', href: '/events', description: 'Browse all upcoming events' },
          { name: 'Register for Classes', href: '/events/register', description: 'Sign up for training' },
        ]
      }
    ]
  },
  
  directory: {
    title: 'Directory',
    subtitle: 'Local Business Network',
    searchPlaceholder: 'Search businesses by name, service, or location...',
    micaClass: 'mica-directory',
    sections: [
      {
        title: 'Featured Businesses',
        icon: StarIcon,
        items: [
          { name: 'Sportsmans Warehouse', href: '/directory/sportsmans-warehouse', description: 'Full-service outdoor retailer', badge: 'Verified FFL' },
          { name: 'Boise Gun Company', href: '/directory/boise-gun-company', description: 'Custom builds & repairs', badge: '5.0★' },
          { name: 'Idaho Tactical', href: '/directory/idaho-tactical', description: 'Training & consulting', badge: 'Certified' },
        ]
      },
      {
        title: 'Browse by Category',
        icon: BuildingStorefrontIcon,
        items: [
          { name: 'Gun Stores', href: '/directory/gun-stores', description: '127 verified FFLs in Idaho' },
          { name: 'Gunsmiths', href: '/directory/gunsmiths', description: 'Custom work & repairs' },
          { name: 'Training Schools', href: '/directory/training', description: 'Professional instruction' },
          { name: 'Ranges', href: '/directory/ranges', description: 'Indoor & outdoor facilities' },
        ]
      },
      {
        title: 'Popular Locations',
        icon: MapPinIcon,
        items: [
          { name: 'Boise Area', href: '/directory/boise', description: '85+ businesses' },
          { name: 'Treasure Valley', href: '/directory/treasure-valley', description: 'Ada & Canyon Counties' },
          { name: 'North Idaho', href: '/directory/north-idaho', description: 'Coeur d\'Alene & surrounding' },
        ]
      }
    ]
  },
  
  armory: {
    title: 'Armory',
    subtitle: 'Gear Reviews & Insights',
    searchPlaceholder: 'Search reviews, guides, and gear recommendations...',
    micaClass: 'mica-armory',
    sections: [
      {
        title: 'Latest Reviews',
        icon: DocumentTextIcon,
        items: [
          { name: 'Sig P320 Carry Review', href: '/armory/sig-p320-carry', description: 'Comprehensive field testing', badge: 'New' },
          { name: 'AR-15 Build Guide', href: '/armory/ar15-build-guide', description: 'Complete assembly walkthrough', badge: 'Popular' },
          { name: 'Optics Comparison', href: '/armory/optics-2024', description: '2024\'s best scopes & red dots' },
        ]
      },
      {
        title: 'Gear Categories',
        icon: WrenchScrewdriverIcon,
        items: [
          { name: 'Handguns', href: '/armory/handguns', description: 'Pistols & revolvers' },
          { name: 'Rifles', href: '/armory/rifles', description: 'AR-15s, bolt guns, & more' },
          { name: 'Optics', href: '/armory/optics', description: 'Scopes, red dots, & binos' },
          { name: 'Accessories', href: '/armory/accessories', description: 'Holsters, lights, & gear' },
        ]
      },
      {
        title: 'Resources',
        icon: BookOpenIcon,
        items: [
          { name: 'Buying Guides', href: '/armory/guides', description: 'Expert recommendations' },
          { name: 'Maintenance Tips', href: '/armory/maintenance', description: 'Care & cleaning guides' },
        ]
      }
    ]
  },
  
  intel: {
    title: 'Intel',
    subtitle: 'Range Conditions & Data',
    searchPlaceholder: 'Search range info, conditions, and reports...',
    micaClass: 'mica-intel',
    sections: [
      {
        title: 'Current Conditions',
        icon: InformationCircleIcon,
        items: [
          { name: 'Range Status', href: '/intel/range-status', description: 'Live availability updates', badge: 'Live' },
          { name: 'Weather Impact', href: '/intel/weather', description: 'Shooting conditions forecast' },
          { name: 'Fire Restrictions', href: '/intel/fire-danger', description: 'Current danger levels', badge: 'Updated' },
        ]
      },
      {
        title: 'Reports & Data',
        icon: ClockIcon,
        items: [
          { name: 'Range Reports', href: '/intel/reports', description: 'Member-submitted conditions' },
          { name: 'Ballistics Data', href: '/intel/ballistics', description: 'Trajectory & performance' },
          { name: 'Historical Trends', href: '/intel/trends', description: 'Seasonal patterns' },
        ]
      },
      {
        title: 'Resources',
        icon: MapPinIcon,
        items: [
          { name: 'Range Directory', href: '/intel/ranges', description: 'Idaho shooting locations' },
          { name: 'Safety Guidelines', href: '/intel/safety', description: 'Best practices' },
        ]
      }
    ]
  },
  
  buysell: {
    title: 'Buy & Sell',
    subtitle: 'Community Commerce Hub',
    searchPlaceholder: 'Search firearms, accessories, and gear...',
    micaClass: 'mica-buysell',
    sections: [
      {
        title: 'Featured Listings',
        icon: StarIcon,
        items: [
          { name: 'Glock 19 Gen 5', href: '/buysell/glock-19-gen5', description: 'Excellent condition, 500 rounds', badge: '$485' },
          { name: 'Custom AR-15 Build', href: '/buysell/custom-ar15', description: '16" mid-length gas system', badge: '$1,200' },
          { name: 'Vortex Viper PST', href: '/buysell/vortex-viper', description: '6-24x50 FFP scope', badge: '$650' },
        ]
      },
      {
        title: 'Browse Categories',
        icon: BanknotesIcon,
        items: [
          { name: 'Handguns', href: '/buysell/handguns', description: 'Pistols & revolvers for sale' },
          { name: 'Rifles', href: '/buysell/rifles', description: 'Long guns & carbines' },
          { name: 'Optics', href: '/buysell/optics', description: 'Scopes & sighting systems' },
          { name: 'Accessories', href: '/buysell/accessories', description: 'Holsters, mags, & parts' },
        ]
      },
      {
        title: 'Quick Actions',
        icon: SparklesIcon,
        items: [
          { name: 'Post a Listing', href: '/buysell/post', description: 'Sell your gear' },
          { name: 'My Listings', href: '/buysell/my-listings', description: 'Manage your sales' },
        ]
      }
    ]
  },
  
  forums: {
    title: 'Forums',
    subtitle: 'Community Discussion Space',
    searchPlaceholder: 'Search topics, posts, and discussions...',
    micaClass: 'mica-forums',
    sections: [
      {
        title: 'Active Discussions',
        icon: ChatBubbleLeftRightIcon,
        items: [
          { name: 'Best CCW for Idaho Weather', href: '/forums/ccw-idaho-weather', description: 'Concealed carry recommendations', badge: '24 replies' },
          { name: 'Range Day Photos', href: '/forums/range-photos', description: 'Share your shooting sessions', badge: 'New posts' },
          { name: 'Hunting Season Prep', href: '/forums/hunting-prep', description: 'Get ready for fall hunting' },
        ]
      },
      {
        title: 'Popular Categories',
        icon: UserGroupIcon,
        items: [
          { name: 'General Discussion', href: '/forums/general', description: 'Open conversation' },
          { name: 'Buy/Sell/Trade', href: '/forums/marketplace', description: 'Community commerce' },
          { name: 'Technical Q&A', href: '/forums/technical', description: 'Get expert answers' },
          { name: 'Training & Events', href: '/forums/training', description: 'Coordinate & plan' },
        ]
      },
      {
        title: 'Community',
        icon: CheckCircleIcon,
        items: [
          { name: 'New Member Intro', href: '/forums/introductions', description: 'Welcome & meet people' },
          { name: 'Idaho News', href: '/forums/idaho-news', description: 'Local firearms news' },
        ]
      }
    ]
  }
}

export function NavigationDropdown({ section, isOpen, onClose, onToggle, className }: NavigationDropdownProps) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const config = sectionConfigs[section]

  // Click outside to close
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Close on escape key
  React.useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isOpen, onClose])

  // Filter items based on search query
  const filteredSections = React.useMemo(() => {
    if (!searchQuery.trim()) return config.sections

    return config.sections.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(section => section.items.length > 0)
  }, [config.sections, searchQuery])

  if (!isOpen) return null

  return (
    <MotionDiv
      ref={dropdownRef}
      className={cn('absolute top-full left-0 w-screen max-w-4xl z-50', className)}
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={cn('border border-border rounded-xs shadow-commanding overflow-hidden mt-2', config.micaClass)}>
        {/* Header with Search */}
        <div className="p-lg border-b border-border/50">
          <div className="flex items-center justify-between mb-base">
            <div>
              <h3 className="font-rajdhani font-bold text-xl text-foreground">
                {config.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {config.subtitle}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            >
              ×
            </Button>
          </div>
          
          {/* Contextual Search Bar */}
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={config.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-border"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="p-lg">
          {filteredSections.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {filteredSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-sm">
                  <div className="flex items-center gap-xs mb-base">
                    <section.icon className="h-4 w-4 text-muted-foreground" />
                    <h4 className="font-rajdhani font-semibold text-base text-foreground">
                      {section.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-xs">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        onClick={onClose}
                        className="group block p-sm rounded-xs hover:bg-background/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">
                              {item.name}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              size="sm" 
                              className="ml-sm flex-shrink-0 text-xs"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-3xl">
              <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-muted-foreground/50 mb-base" />
              <h4 className="font-rajdhani font-semibold text-lg text-foreground mb-sm">
                No results found
              </h4>
              <p className="text-muted-foreground">
                Try adjusting your search terms or{' '}
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-primary hover:underline"
                >
                  clear your search
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Footer with Browse All Link */}
        <div className="border-t border-border/50 bg-background/30 p-base">
          <Link
            href={`/${section}`}
            onClick={onClose}
            className="group flex items-center justify-center gap-sm text-sm font-rajdhani font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            Browse All {config.title}
            <ChevronDownIcon className="h-3 w-3 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </MotionDiv>
  )
}