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
  ArrowRightIcon,
  LightBulbIcon,
  SparklesIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { useTacticalTracker } from '@/hooks/useTacticalTracker'
import { adaptiveRecommendations } from '@/lib/adaptive-recommendations'

interface NavigationDropdownProps {
  section: 'home' | 'events' | 'directory' | 'armory' | 'intel' | 'buysell' | 'forums'
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
  triggerRef?: React.RefObject<HTMLElement>
  className?: string
}

// Section-specific themes and metadata
const sectionConfigs = {
  home: {
    title: 'Dashboard',
    subtitle: 'Your Community Hub',
    searchPlaceholder: 'Search your activity, favorites, and settings...',
    micaClass: 'mica-navbar',
    heroColor: 'from-nav-home to-nav-home',
    accentColor: 'text-nav-home',
    description: 'Your personalized gateway to the Treasure Valley gun community'
  },
  events: {
    title: 'Events',
    subtitle: 'Competitions & Training',
    searchPlaceholder: 'Search events by name, date, or location...',
    micaClass: 'mica-events',
    heroColor: 'from-nav-events to-nav-events',
    accentColor: 'text-nav-events',
    description: 'Discover training, competitions, and community events across Treasure Valley'
  },
  directory: {
    title: 'Directory',
    subtitle: 'Local Business Network',
    searchPlaceholder: 'Search businesses by name, service, or location...',
    micaClass: 'mica-directory',
    heroColor: 'from-nav-directory to-nav-directory',
    accentColor: 'text-nav-directory',
    description: '594+ verified Idaho firearms businesses and service providers'
  },
  armory: {
    title: 'The Armory',
    subtitle: 'Gear Reviews & Insights',
    searchPlaceholder: 'Search reviews, guides, and gear recommendations...',
    micaClass: 'mica-armory',
    heroColor: 'from-nav-armory to-nav-armory',
    accentColor: 'text-nav-armory',
    description: 'Expert reviews, buying guides, and tactical knowledge base'
  },
  intel: {
    title: 'Intel',
    subtitle: 'Range Conditions & Data',
    searchPlaceholder: 'Search range info, conditions, and reports...',
    micaClass: 'mica-intel',
    heroColor: 'from-nav-intel to-nav-intel',
    accentColor: 'text-nav-intel',
    description: 'Real-time range conditions, weather data, and tactical intelligence'
  },
  buysell: {
    title: 'Buy & Sell',
    subtitle: 'Community Commerce Hub',
    searchPlaceholder: 'Search firearms, accessories, and gear...',
    micaClass: 'mica-buysell',
    heroColor: 'from-nav-buysell to-nav-buysell',
    accentColor: 'text-nav-buysell',
    description: 'Local deals direct from Treasure Valley gun owners and dealers'
  },
  forums: {
    title: 'Forums',
    subtitle: 'Community Discussion Space',
    searchPlaceholder: 'Search topics, posts, and discussions...',
    micaClass: 'mica-forums',
    heroColor: 'from-nav-forums to-nav-forums',
    accentColor: 'text-nav-forums',
    description: 'Idaho-focused discussions without coastal politics or corporate agenda'
  }
}

export function NavigationDropdownEnhanced({ 
  section, 
  isOpen, 
  onClose, 
  onToggle,
  triggerRef,
  className 
}: NavigationDropdownProps) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null)
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const config = sectionConfigs[section]
  const { stats } = useTacticalTracker()
  
  // Get personalized recommendations
  const personalizedContent = React.useMemo(() => {
    return adaptiveRecommendations.getRecommendationsForSection(section, {
      sectionsVisited: stats.sectionsVisited,
      brassCasings: stats.brassCasings,
      rangeTime: stats.rangeTime,
      achievements: stats.achievements,
      totalSessions: stats.totalSessions
    }, pathname)
  }, [section, stats, pathname])


  // Click outside to close - disabled to prevent conflicts, handled by parent
  React.useEffect(() => {
    // Temporarily disable click-outside detection to debug the hover/click conflict
    // The parent navigation component will handle closing behavior
    return
  }, [isOpen, onClose, triggerRef])

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

  // Filter personalized content based on search query
  const filteredContent = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return personalizedContent
    }

    const query = searchQuery.toLowerCase()
    return {
      recommended: personalizedContent.recommended.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      ),
      quickActions: personalizedContent.quickActions.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      ),
      trending: personalizedContent.trending.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      )
    }
  }, [personalizedContent, searchQuery])

  if (!isOpen) return null

  return (
    <MotionDiv
      ref={dropdownRef}
      className={cn('absolute top-full left-0 w-screen max-w-2xl z-50 -mt-1', className)}
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.96 }}
      transition={{ 
        duration: 0.15, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        damping: 25,
        stiffness: 300
      }}
    >
      {/* Background element for backdrop-filter to blur - needs content behind the dropdown */}
      <div className="fixed inset-0 bg-gradient-to-br from-background/10 via-muted/20 to-accent/10 -z-20" />
      <div className="absolute -inset-2 bg-gradient-to-br from-background/30 via-muted/40 to-accent/30 rounded-lg opacity-60 -z-10" />
      
      <div 
        className={cn('border border-border/20 rounded-xs shadow-present overflow-hidden mt-2', config.micaClass)}
        style={{
          backdropFilter: 'blur(16px) saturate(1.8) contrast(1.05) !important',
          WebkitBackdropFilter: 'blur(16px) saturate(1.8) contrast(1.05) !important'
        }}
      >
        {/* Compact Hero Header */}
        <div className={cn('relative p-lg bg-gradient-to-r', config.heroColor)}>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-sm">
              <div className="space-y-micro">
                <h2 className="font-rajdhani font-black text-2xl text-white drop-shadow-lg">
                  {config.title}
                </h2>
                <p className="text-white/90 text-body-sm font-medium max-w-sm">
                  {config.description}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-7 w-7 p-0 text-white/70 hover:text-white hover:bg-white/10 rounded-xs"
              >
                ×
              </Button>
            </div>
            
            {/* Compact Search Bar */}
            <div className="relative max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
              <Input
                type="text"
                placeholder={config.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-xs bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/15 focus:border-white/40 rounded-xs h-9 text-sm"
              />
            </div>
          </div>
          
          {/* Subtle tactical grid overlay */}
          <div className="absolute inset-0 opacity-3">
            <div className="grid grid-cols-8 gap-3 h-full">
              {Array.from({length: 24}).map((_, i) => (
                <div key={i} className="border-r border-b border-white/20" />
              ))}
            </div>
          </div>
        </div>

        {/* Compact Personalized Content Grid */}
        <div className="p-base relative">
          {(filteredContent.recommended.length > 0 || filteredContent.quickActions.length > 0 || filteredContent.trending.length > 0) ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-base">
              
              {/* For You - Personalized Recommendations */}
              {filteredContent.recommended.length > 0 && (
                <div className="space-y-base">
                  <div className="flex items-center gap-sm mb-base">
                    <div className={`p-xs rounded-xs ${config.accentColor.replace('text-', 'bg-')}/20`}>
                      <LightBulbIcon className={`h-4 w-4 ${config.accentColor}`} />
                    </div>
                    <h3 className="font-rajdhani font-bold text-lg text-foreground">
                      For You
                    </h3>
                    <Badge variant="secondary" size="sm" className="text-xs font-semibold">
                      Personalized
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-xs max-w-md">
                    {filteredContent.recommended.slice(0, 3).map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={onClose}
                        className="group relative block p-sm rounded-none bg-card/60 border border-border/30 hover:border-border/50 transition-all duration-300 hover:translate-x-1 text-foreground arrow-link"
                      >
                        {/* Tactical accent bar */}
                        <div className={`absolute left-0 top-0 w-1 h-full ${config.accentColor.replace('text-', 'bg-')}/60 group-hover:w-1.5 transition-all duration-200`} />
                        
                        <div className="flex items-start gap-sm">
                          {/* Item icon/indicator */}
                          <div className={`flex-shrink-0 p-xs rounded-xs ${config.accentColor.replace('text-', 'bg-')}/20 mt-micro`}>
                            <div className={`w-2 h-2 rounded-full ${config.accentColor.replace('text-', 'bg-')}`} />
                          </div>
                          
                          <div className="flex-1 min-w-0 space-y-micro">
                            <div className="flex items-center gap-xs">
                              <h4 className="font-rajdhani font-bold text-body-sm text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </h4>
                              {item.badge && (
                                <Badge 
                                  variant="secondary"
                                  size="sm" 
                                  className="text-xs font-bold ml-auto"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="text-body-xs text-muted-foreground leading-tight line-clamp-2">
                              {item.description}
                            </p>
                            {item.basedOn && (
                              <p className="text-body-xs text-muted-foreground/60 italic font-medium">
                                💡 {item.basedOn}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Combined Quick Actions & Trending */}
              <div className="space-y-base">
                {/* Quick Actions */}
                {filteredContent.quickActions.length > 0 && (
                  <div>
                    <div className="flex items-center gap-sm mb-sm">
                      <div className="p-xs rounded-xs bg-secondary/20">
                        <SparklesIcon className="h-4 w-4 text-secondary" />
                      </div>
                      <h3 className="font-rajdhani font-bold text-base text-foreground">
                        Quick Actions
                      </h3>
                    </div>
                    
                    <div className="space-y-xs">
                      {filteredContent.quickActions.slice(0, 2).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={onClose}
                          className="group block p-sm rounded-none border-l-2 border-l-secondary/40 border-r border-t border-b border-border/30 hover:border-l-secondary hover:border-border/50 bg-card/40 hover:bg-card/60 transition-all duration-300 hover:translate-x-1 arrow-link"
                        >
                          <div className="flex items-center gap-sm">
                            <div className="flex-shrink-0 p-1 rounded-xs bg-secondary/30">
                              <SparklesIcon className="h-3 w-3 text-secondary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-rajdhani font-bold text-body-sm text-foreground group-hover:text-secondary transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-body-xs text-muted-foreground/90 leading-tight mt-micro">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Trending */}
                {filteredContent.trending.length > 0 && (
                  <div>
                    <div className="flex items-center gap-sm mb-sm">
                      <div className="p-xs rounded-xs bg-destructive/20">
                        <FireIcon className="h-4 w-4 text-destructive" />
                      </div>
                      <h3 className="font-rajdhani font-bold text-base text-foreground">
                        Trending
                      </h3>
                    </div>
                    
                    <div className="space-y-xs">
                      {filteredContent.trending.slice(0, 2).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={onClose}
                          className="group relative block p-sm rounded-none border border-destructive/40 hover:border-destructive/60 bg-card/40 hover:bg-card/60 transition-all duration-300 hover:translate-x-1 arrow-link overflow-hidden"
                        >
                          {/* Trending flame effect */}
                          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-destructive/30 to-transparent rounded-bl-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                          
                          <div className="flex items-center gap-sm">
                            <div className="flex-shrink-0 p-1 rounded-xs bg-destructive/40">
                              <FireIcon className="h-3 w-3 text-destructive" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-xs mb-micro">
                                <h4 className="font-rajdhani font-bold text-body-sm text-foreground group-hover:text-destructive transition-colors">
                                  {item.name}
                                </h4>
                                {item.badge && (
                                  <Badge variant="destructive" size="sm" className="text-xs font-bold">
                                    🔥 {item.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-body-xs text-muted-foreground/90 leading-tight">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-3xl">
              <MagnifyingGlassIcon className="mx-auto h-16 w-16 text-muted-foreground/30 mb-lg" />
              <h4 className="font-rajdhani font-bold text-2xl text-foreground mb-sm">
                No results found
              </h4>
              <p className="text-muted-foreground text-body-base mb-lg">
                Try adjusting your search terms or{' '}
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-primary hover:underline font-semibold"
                >
                  clear your search
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Compact Footer */}
        <div className="border-t border-border/30 bg-background/10 backdrop-blur-sm">
          <div className="p-base flex items-center justify-between">
            <Link
              href={`/${section}`}
              onClick={onClose}
              className="group flex items-center gap-sm px-base py-sm bg-primary/10 hover:bg-primary/20 rounded-none border border-primary/20 hover:border-primary/40 transition-all duration-200 hover:translate-x-1"
            >
              <span className="font-rajdhani font-bold text-body-sm text-primary">
                Browse All {config.title}
              </span>
              <ArrowRightIcon className="h-3 w-3 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center gap-xs text-body-xs text-muted-foreground/70">
              <span className="font-rajdhani font-semibold text-primary/80">TacticalTracker™</span>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}