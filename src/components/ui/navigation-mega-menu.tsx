'use client'

import * as React from 'react'
import Link from 'next/link'
import { MotionDiv } from '@/components/ui/optimized-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TicketIcon, 
  IdentificationIcon, 
  PlusCircleIcon, 
  MapPinIcon, 
  BanknotesIcon, 
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  ArrowRightIcon,
  StarIcon,
  FireIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

const megaMenuSections = [
  {
    id: 'events',
    title: 'Events & Training',
    icon: TicketIcon,
    color: 'from-slate-blue/20 to-slate-blue/5',
    borderColor: 'border-slate-blue/30',
    accentColor: 'text-slate-blue',
    items: [
      { label: 'Upcoming Events', href: '/events', description: 'Next training and competitions', badge: 'Hot' },
      { label: 'Event Calendar', href: '/events/calendar', description: 'Full calendar view' },
      { label: 'Past Events', href: '/events/archive', description: 'Previous event results' },
      { label: 'Training Programs', href: '/events/training', description: 'Skill development courses' }
    ]
  },
  {
    id: 'directory',
    title: 'Business Directory',
    icon: IdentificationIcon,
    color: 'from-sagebrush-green/20 to-sagebrush-green/5',
    borderColor: 'border-sagebrush-green/30',
    accentColor: 'text-sagebrush-green',
    items: [
      { label: 'All Businesses', href: '/directory', description: 'Complete business directory' },
      { label: 'Gun Stores', href: '/directory?category=retail', description: 'Licensed firearms dealers', badge: 'Verified' },
      { label: 'Ranges', href: '/directory?category=range', description: 'Shooting ranges and facilities' },
      { label: 'Gunsmiths', href: '/directory?category=gunsmith', description: 'Professional services' }
    ]
  },
  {
    id: 'armory',
    title: 'Gear & Reviews',
    icon: PlusCircleIcon,
    color: 'from-rusty-orange/20 to-rusty-orange/5',
    borderColor: 'border-rusty-orange/30',
    accentColor: 'text-rusty-orange',
    items: [
      { label: 'Gear Reviews', href: '/armory', description: 'Community gear reviews' },
      { label: 'Recommendations', href: '/armory/recommendations', description: 'Top-rated equipment', badge: 'Popular' },
      { label: 'Maintenance Guides', href: '/armory/guides', description: 'Care and maintenance' },
      { label: 'New Releases', href: '/armory/new', description: 'Latest gear announcements' }
    ]
  },
  {
    id: 'intel',
    title: 'Intel & Knowledge',
    icon: MapPinIcon,
    color: 'from-nav-intel/20 to-nav-intel/5',
    borderColor: 'border-nav-intel/30',
    accentColor: 'text-nav-intel',
    items: [
      { label: 'Training Guides', href: '/intel', description: 'Educational content' },
      { label: 'Legal Updates', href: '/intel/legal', description: 'Idaho firearms law', badge: 'Updated' },
      { label: 'Safety Resources', href: '/intel/safety', description: 'Safety best practices' },
      { label: 'Shooting Locations', href: '/intel/locations', description: 'BLM and public areas' }
    ]
  },
  {
    id: 'marketplace',
    title: 'Buy & Sell',
    icon: BanknotesIcon,
    color: 'from-sandy-ochre/20 to-sandy-ochre/5',
    borderColor: 'border-sandy-ochre/30',
    accentColor: 'text-sandy-ochre',
    items: [
      { label: 'Browse Listings', href: '/buysell', description: 'All marketplace items' },
      { label: 'Post Listing', href: '/buysell/post', description: 'Sell your items' },
      { label: 'My Listings', href: '/buysell/my-listings', description: 'Manage your posts' },
      { label: 'Saved Items', href: '/buysell/saved', description: 'Bookmarked listings' }
    ]
  },
  {
    id: 'community',
    title: 'Forums & Community',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-warm-stone/20 to-warm-stone/5',
    borderColor: 'border-warm-stone/30',
    accentColor: 'text-warm-stone',
    items: [
      { label: 'General Discussion', href: '/forums/general', description: 'Open community chat' },
      { label: 'Technical Q&A', href: '/forums/technical', description: 'Technical questions' },
      { label: 'Local Events', href: '/forums/events', description: 'Community-organized events' },
      { label: 'Show & Tell', href: '/forums/showcase', description: 'Share your builds' }
    ]
  }
]

export function MegaMenu({ isOpen, onClose, className }: MegaMenuProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <MotionDiv
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />
      
      {/* Mega Menu Panel */}
      <MotionDiv
        className={cn(
          "fixed top-16 left-0 right-0 z-50 mega-menu-panel",
          className
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="mega-menu-container">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-rajdhani text-2xl font-bold text-foreground">
                  Explore The Boise Gun Club
                </h2>
                <p className="text-muted-foreground mt-1">
                  Your complete firearms community platform
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <XMarkIcon className="h-5 w-5" />
              </Button>
            </div>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {megaMenuSections.map((section, sectionIndex) => {
                const Icon = section.icon
                return (
                  <MotionDiv
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: sectionIndex * 0.1, 
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={cn(
                      "mega-menu-section group",
                      `bg-gradient-to-br ${section.color}`,
                      `border ${section.borderColor}`,
                      "hover:shadow-lg transition-all duration-300"
                    )}
                  >
                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        "bg-background/50 border border-border/50"
                      )}>
                        <Icon className={cn("h-5 w-5", section.accentColor)} />
                      </div>
                      <div>
                        <h3 className={cn(
                          "font-rajdhani font-bold text-lg",
                          section.accentColor
                        )}>
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    {/* Section Items */}
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="block p-3 rounded-lg hover:bg-background/50 transition-colors group/item"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                                  {item.label}
                                </h4>
                                {item.badge && (
                                  <Badge 
                                    size="xs" 
                                    className={cn(
                                      "bg-primary/20 text-primary border-primary/30",
                                      item.badge === 'Hot' && "bg-red-500/20 text-red-600 border-red-500/30",
                                      item.badge === 'Popular' && "bg-yellow-500/20 text-yellow-600 border-yellow-500/30",
                                      item.badge === 'Updated' && "bg-green-500/20 text-green-600 border-green-500/30"
                                    )}
                                  >
                                    {item.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5 group-hover/item:text-foreground/70 transition-colors">
                                {item.description}
                              </p>
                            </div>
                            <ArrowRightIcon className="h-4 w-4 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-all duration-200 transform group-hover/item:translate-x-1" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </MotionDiv>
                )
              })}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Need help? Check out our <Link href="/help" className="text-primary hover:underline">Help Center</Link>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <StarIcon className="h-3 w-3" />
                  <span>Idaho's Premier Firearms Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </>
  )
}
