'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { MotionDiv } from '@/components/ui/optimized-motion'
import { MegaMenu } from '@/components/ui/navigation-mega-menu'
import { 
  BanknotesIcon, 
  Bars3Icon, 
  BookOpenIcon, 
  BuildingStorefrontIcon, 
  ChatBubbleLeftRightIcon, 
  CubeTransparentIcon, 
  ShieldCheckIcon, 
  TicketIcon, 
  XMarkIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  FireIcon,
  LightBulbIcon,
  IdentificationIcon,
  PlusCircleIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { AuthButton } from '@/components/auth/auth-button'
import { NavbarWeatherWidget } from './navbar-weather-widget'
import { NavigationTexture } from './textured-background'
import { useAuth } from '@/components/auth/auth-context'

const siteNavigationVariants = cva(
  "w-full transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-card shadow-flat",
        premium: "mica-overlay after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-rusty-orange/40 after:to-transparent",
        elite: "mica-modal after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-warning-amber/50 after:to-transparent",
        glass: "mica-card",
        gunclub: "bg-card-surface shadow-flat after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-warm-stone/40 after:to-transparent"
      },
      layout: {
        horizontal: "",
        vertical: "flex flex-col min-h-screen w-64",
        mega: ""
      },
      sticky: {
        true: "sticky top-0 z-50",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      layout: "horizontal",
      sticky: true
    }
  }
)

// Navigation items with enhanced configuration
const navigationItems = [
  {
    label: 'Home',
    href: '/',
    icon: CubeTransparentIcon,
    color: 'rusty-orange',
    description: 'Your community dashboard',
    dropdownContent: [
      { label: 'Dashboard', href: '/dashboard', description: 'Personal activity center' },
      { label: 'Recent Activity', href: '/activity', description: 'Latest community updates' },
      { label: 'Bookmarks', href: '/bookmarks', description: 'Saved items and favorites' },
      { label: 'Settings', href: '/settings', description: 'Account preferences' }
    ]
  },
  {
    label: 'Events',
    href: '/events', 
    icon: TicketIcon,
    color: 'slate-blue',
    description: 'Competitions & training',
    dropdownContent: [
      { label: 'Upcoming Events', href: '/events', description: 'Next training and competitions' },
      { label: 'Event Calendar', href: '/events/calendar', description: 'Full calendar view' },
      { label: 'Past Events', href: '/events/archive', description: 'Previous event results' },
      { label: 'Submit Event', href: '/events/submit', description: 'Add your event' }
    ]
  },
  {
    label: 'Directory',
    href: '/directory',
    icon: IdentificationIcon,
    color: 'ayu-green', 
    description: 'Local gun businesses',
    dropdownContent: [
      { label: 'All Businesses', href: '/directory', description: 'Complete business directory' },
      { label: 'Gun Stores', href: '/directory?category=retail', description: 'Licensed firearms dealers' },
      { label: 'Ranges', href: '/directory?category=range', description: 'Shooting ranges and facilities' },
      { label: 'Gunsmiths', href: '/directory?category=gunsmith', description: 'Professional gunsmiths' },
      { label: 'Training', href: '/directory?category=training', description: 'Certified instructors' }
    ]
  },
  {
    label: 'Armory',
    href: '/armory',
    icon: PlusCircleIcon,
    color: 'ayu-purple',
    description: 'Gear reviews & guides',
    dropdownContent: [
      { label: 'Gear Reviews', href: '/armory', description: 'Community gear reviews' },
      { label: 'Recommendations', href: '/armory/recommendations', description: 'Top-rated equipment' },
      { label: 'Maintenance Guides', href: '/armory/guides', description: 'Care and maintenance' },
      { label: 'New Gear', href: '/armory/new', description: 'Latest gear releases' }
    ]
  },
  {
    label: 'Intel',
    href: '/intel',
    icon: MapPinIcon,
    color: 'ayu-red',
    description: 'Knowledge & training',
    dropdownContent: [
      { label: 'Training Guides', href: '/intel', description: 'Educational content' },
      { label: 'Legal Updates', href: '/intel/legal', description: 'Idaho firearms law' },
      { label: 'Safety Resources', href: '/intel/safety', description: 'Safety best practices' },
      { label: 'Techniques', href: '/intel/techniques', description: 'Shooting techniques' }
    ]
  },
  {
    label: 'Buy & Sell',
    href: '/buysell',
    icon: BanknotesIcon,
    color: 'ayu-teal',
    description: 'Marketplace',
    dropdownContent: [
      { label: 'Browse Listings', href: '/buysell', description: 'All marketplace items' },
      { label: 'Post Listing', href: '/buysell/post', description: 'Sell your items' },
      { label: 'My Listings', href: '/buysell/my-listings', description: 'Manage your posts' },
      { label: 'Saved Items', href: '/buysell/saved', description: 'Items you\'re watching' }
    ]
  },
  {
    label: 'Forums',
    href: '/forums',
    icon: ChatBubbleLeftRightIcon,
    color: 'warm-stone',
    description: 'Community discussion',
    dropdownContent: [
      { label: 'General Discussion', href: '/forums/general', description: 'Open community chat' },
      { label: 'Technical Q&A', href: '/forums/technical', description: 'Technical questions' },
      { label: 'Local Events', href: '/forums/events', description: 'Community-organized events' },
      { label: 'Buy/Sell/Trade', href: '/forums/trade', description: 'Trading discussions' }
    ]
  }
]

export interface SiteNavigationProps 
  extends React.ComponentProps<"nav">,
    VariantProps<typeof siteNavigationVariants> {
  showLogo?: boolean
  customContent?: React.ReactNode
}

export function SiteNavigation({
  className,
  variant,
  layout,
  sticky,
  showLogo = true,
  customContent,
  ...props
}: SiteNavigationProps) {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null)
  const [logoClickCount, setLogoClickCount] = React.useState(0)
  const [showIdahoFacts, setShowIdahoFacts] = React.useState(false)
  const [isStuck, setIsStuck] = React.useState(false)
  const [dropdownPosition, setDropdownPosition] = React.useState<{ top: number; left: number } | null>(null)
  
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const navRef = React.useRef<HTMLElement>(null)

  // Simple scroll detection for stuck state
  React.useEffect(() => {
    if (!sticky) return

    const handleScroll = () => {
      setIsStuck(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sticky])

  // Idaho facts for logo easter egg
  const idahoFacts = [
    "Idaho produces 1/3 of all potatoes grown in the US",
    "Hell's Canyon is the deepest river gorge in North America",
    "Idaho has over 3,100 miles of fishable streams and rivers",
    "The state motto is 'Esto Perpetua' - Let it be perpetual",
    "Idaho has 63 shooting ranges and firearms training facilities",
    "Boise is known as the 'City of Trees' with over 180,000 trees",
    "Idaho leads the nation in trout production"
  ]

  // Get current page color based on pathname
  const getCurrentPageColor = () => {
    if (pathname === '/') return 'text-nav-home'
    if (pathname.startsWith('/events')) return 'text-nav-events'
    if (pathname.startsWith('/directory')) return 'text-nav-directory'
    if (pathname.startsWith('/armory')) return 'text-nav-armory'
    if (pathname.startsWith('/intel')) return 'text-nav-intel'
    if (pathname.startsWith('/buysell')) return 'text-nav-buysell'
    if (pathname.startsWith('/forums')) return 'text-nav-forums'
    return 'text-nav-home' // fallback
  }

  // Get current page icon component based on pathname
  const getCurrentPageIcon = () => {
    if (pathname === '/') return CubeTransparentIcon
    if (pathname.startsWith('/events')) return TicketIcon
    if (pathname.startsWith('/directory')) return IdentificationIcon
    if (pathname.startsWith('/armory')) return PlusCircleIcon
    if (pathname.startsWith('/intel')) return MapPinIcon
    if (pathname.startsWith('/buysell')) return BanknotesIcon
    if (pathname.startsWith('/forums')) return ChatBubbleLeftRightIcon
    return CubeTransparentIcon // fallback
  }

  // Get current page subtitle based on pathname
  const currentPageSubtitle = React.useMemo(() => {
    if (pathname === '/') return 'treasure valley collective'
    if (pathname.startsWith('/events')) return 'your trusted event source'
    if (pathname.startsWith('/directory')) return 'local business network'
    if (pathname.startsWith('/armory')) return 'gear reviews & insights'
    if (pathname.startsWith('/intel')) return 'range conditions & data'
    if (pathname.startsWith('/buysell')) return 'community commerce hub'
    if (pathname.startsWith('/forums')) return 'community discussion space'
    return 'treasure valley collective' // fallback
  }, [pathname])

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1
    setLogoClickCount(newCount)
    
    if (newCount === 7) {
      setShowIdahoFacts(true)
      setLogoClickCount(0)
      // Hide after 5 seconds
      setTimeout(() => setShowIdahoFacts(false), 5000)
    }
  }

  // Color utility functions - using proper navigation colors
  const getHoverClasses = (color: string) => {
    switch(color) {
      case 'rusty-orange': return 'hover:text-nav-home hover:bg-nav-home/10'
      case 'slate-blue': return 'hover:text-nav-events hover:bg-nav-events/10'
      case 'ayu-green': return 'hover:text-nav-directory hover:bg-nav-directory/10'
      case 'ayu-purple': return 'hover:text-nav-armory hover:bg-nav-armory/10'
      case 'ayu-red': return 'hover:text-nav-intel hover:bg-nav-intel/10'
      case 'ayu-teal': return 'hover:text-nav-buysell hover:bg-nav-buysell/10'
      case 'warm-stone': return 'hover:text-nav-forums hover:bg-nav-forums/10'
      default: return 'hover:text-nav-home hover:bg-nav-home/10'
    }
  }

  const getActiveTextClass = (color: string) => {
    switch(color) {
      case 'rusty-orange': return 'text-nav-home'
      case 'slate-blue': return 'text-nav-events'
      case 'ayu-green': return 'text-nav-directory'
      case 'ayu-purple': return 'text-nav-armory'
      case 'ayu-red': return 'text-nav-intel'
      case 'ayu-teal': return 'text-nav-buysell'
      case 'warm-stone': return 'text-nav-forums'
      default: return 'text-nav-home'
    }
  }

  const getMagicLineColor = (color: string) => {
    switch(color) {
      case 'rusty-orange': return 'bg-nav-home'
      case 'slate-blue': return 'bg-nav-events'
      case 'ayu-green': return 'bg-nav-directory'
      case 'ayu-purple': return 'bg-nav-armory'
      case 'ayu-red': return 'bg-nav-intel'
      case 'ayu-teal': return 'bg-nav-buysell'
      case 'warm-stone': return 'bg-nav-forums'
      default: return 'bg-nav-home'
    }
  }

  const getSectionMicaClass = (color: string) => {
    switch(color) {
      case 'rusty-orange': return 'mica-navbar'
      case 'slate-blue': return 'mica-events'
      case 'ayu-green': return 'mica-directory'
      case 'ayu-purple': return 'mica-armory'
      case 'ayu-red': return 'mica-intel'
      case 'ayu-teal': return 'mica-buysell'
      case 'warm-stone': return 'mica-forums'
      default: return 'mica-navbar'
    }
  }

  // Simple hover management - no competing systems
  // Calculate dropdown position outside the navbar
  const calculateDropdownPosition = (triggerElement: HTMLElement) => {
    const rect = triggerElement.getBoundingClientRect()
    return {
      top: rect.bottom + 4, // 4px gap like mt-1
      left: rect.left
    }
  }

  const handleNavHover = (sectionKey: string | null, triggerElement?: HTMLElement) => {
    console.log('handleNavHover called:', sectionKey, !!triggerElement)
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (sectionKey && triggerElement) {
      // Add a small delay before showing dropdown to prevent accidental triggers
      timeoutRef.current = setTimeout(() => {
        const position = calculateDropdownPosition(triggerElement)
        console.log('Setting dropdown position:', position)
        setDropdownPosition(position)
        setActiveDropdown(sectionKey)
      }, 200) // 200ms delay for more intentional hover
    } else {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null)
        setDropdownPosition(null)
      }, 150)
    }
  }

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setActiveDropdown(null)
  }

  return (
    <nav 
      ref={navRef}
      className={cn(
        siteNavigationVariants({ variant, layout, sticky }),
        "site-navigation transition-all duration-300 border-b border-border/50",
        sticky ? "sticky top-0 z-50" : "relative", // Force sticky classes
        isStuck && "shadow-lg", // Add shadow when stuck
        className
      )}
      {...props}
    >
      {/* Clean background - no texture noise */}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Badass Logo with Dynamic Theming */}
          {showLogo && (
            <div className="flex items-center relative">
              <div 
                onClick={handleLogoClick}
                className="flex items-center gap-xs sm:gap-sm cursor-pointer"
                title={logoClickCount > 0 ? `${7 - logoClickCount} clicks to Idaho facts` : 'Click 7 times for Idaho facts'}
              >
                <div className="flex items-center gap-xs sm:gap-sm">
                  <MotionDiv
                    key={pathname} // This triggers re-render on route change for flip animation
                    className={getCurrentPageColor()}
                    initial={{ 
                      rotateY: -90,
                      scale: 0.8,
                      rotate: -25
                    }}
                    animate={{ 
                      rotateY: 0,
                      scale: 1,
                      rotate: -25
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 0.4
                    }}
                  >
                    {React.createElement(getCurrentPageIcon(), { 
                      className: "size-6 sm:size-8"
                    })}
                  </MotionDiv>
                  <div className="hidden sm:block">
                    <div className="text-heading-base sm:text-heading-lg font-rajdhani text-card-foreground leading-none uppercase text-left">
                      <span className="font-[800]">THE BOISE</span> <span className="font-[300]">GUN CLUB</span>
                    </div>
                    <p className="text-heading-xs sm:text-heading-sm font-rajdhani font-[500] text-muted-foreground leading-[0.8] lowercase tracking-wider text-left -mt-2 sm:-mt-3">
                      {currentPageSubtitle}
                    </p>
                  </div>
                  {/* Mobile-only abbreviated logo */}
                  <div className="block sm:hidden">
                    <div className="text-heading-sm font-rajdhani text-card-foreground leading-none uppercase font-[800]">
                      BGC
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Idaho Facts Easter Egg */}
              {showIdahoFacts && (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute top-full left-0 mt-2 bg-popover border border-border rounded-lg p-4 shadow-lg z-50 w-80"
                >
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-accent-foreground flex items-center gap-2">
                      <SparklesIcon className="w-4 h-4" />
                      Idaho Fact
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {idahoFacts[Math.floor(Math.random() * idahoFacts.length)]}
                    </div>
                    <div className="text-xs text-muted-foreground/70">
                      Click the logo 7 times again for another fact!
                    </div>
                  </div>
                </MotionDiv>
              )}
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0">
            {navigationItems.slice(0, 7).map((item, index) => {
              const sectionKey = item.label.toLowerCase().replace(' & ', '').replace(' ', '')
              const isDropdownOpen = activeDropdown === sectionKey
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              const isHovered = hoveredPath === item.href
              const Icon = item.icon

              return (
                <React.Fragment key={item.href}>
                  <div 
                    className="relative px-0.5 py-0 mx-1"
                    onMouseEnter={(e) => {
                      setHoveredPath(item.href)
                      handleNavHover(sectionKey, e.currentTarget)
                    }}
                    onMouseLeave={() => {
                      setHoveredPath(null)
                      handleNavHover(null)
                    }}
                  >
                    {/* Tactical Equipment Case Highlight */}
                    {(isHovered || isActive || isDropdownOpen) && (
                      <MotionDiv
                        className="absolute inset-0 -z-10 rounded"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                      >
                        {/* Tactical Brackets with Animation */}
                        <MotionDiv
                          className="absolute top-0 left-0 flex flex-col justify-between h-full"
                          animate={{
                            x: isHovered || isDropdownOpen ? -16 : 0
                          }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <div className={`w-3 h-3 border-l-2 border-t-2 ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                          <div className={`w-3 h-3 border-l-2 border-b-2 ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                        </MotionDiv>
                        
                        <MotionDiv
                          className="absolute top-0 right-0 flex flex-col justify-between h-full"
                          animate={{
                            x: isHovered || isDropdownOpen ? 4 : 0
                          }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <div className={`w-3 h-3 border-r-2 border-t-2 ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                          <div className={`w-3 h-3 border-r-2 border-b-2 ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                        </MotionDiv>
                      </MotionDiv>
                    )}

                    <div className="relative z-10">
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between w-full px-1 py-0.5 text-body-base font-rajdhani font-semibold transition-all duration-300 gap-sm ${
                          isActive || isDropdownOpen
                            ? getActiveTextClass(item.color)
                            : isHovered 
                              ? getActiveTextClass(item.color)
                              : `text-muted-foreground ${getHoverClasses(item.color)}`
                        }`}
                      >
                        <div className="flex items-center relative">
                          <MotionDiv
                            className="relative"
                            animate={{
                              paddingLeft: isHovered || isDropdownOpen ? '16px' : '0px',
                              marginLeft: isHovered || isDropdownOpen ? '-16px' : '0px'
                            }}
                            transition={{ duration: 0.25 }}
                          >
                            <MotionDiv
                              animate={{ 
                                x: isHovered || isDropdownOpen ? -16 : 0 
                              }}
                              transition={{ duration: 0.25 }}
                              className="flex items-center gap-sm whitespace-nowrap"
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span>{item.label}</span>
                            </MotionDiv>
                            
                            {/* Arrow reveal system - positioned absolutely to slide out from under text */}
                            <MotionDiv
                              className="absolute top-1/2 -translate-y-1/2 -right-1"
                              animate={{ 
                                x: isHovered || isDropdownOpen ? -4 : 16,
                                opacity: isHovered || isDropdownOpen ? 1 : 0
                              }}
                              transition={{ duration: 0.25 }}
                            >
                              <MotionDiv
                                animate={{ 
                                  rotate: isDropdownOpen ? 90 : 0
                                }}
                                transition={{ 
                                  duration: 0.3, 
                                  ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth rotation
                                }}
                              >
                                <ArrowRightIcon className="w-3 h-3" />
                              </MotionDiv>
                            </MotionDiv>
                          </MotionDiv>
                        </div>
                      </Link>
                    </div>

                  </div>
                  
                  {/* Separator lines */}
                  {index < navigationItems.slice(0, 7).length - 1 && (
                    <div className="h-4 w-px mx-1 relative">
                      <div className="absolute inset-0 w-px bg-muted-foreground/20" />
                      <div className="absolute inset-0 w-px bg-card/30 translate-x-px" />
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <NavbarWeatherWidget />
            </div>
            
            {/* Mega Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary"
              onClick={() => setActiveDropdown(activeDropdown ? null : 'mega')}
            >
              <Bars3Icon className="h-4 w-4" />
              <span className="font-rajdhani font-medium">Menu</span>
            </Button>
            
            {/* Simplified Auth Button */}
            <Button
              variant="outline"
              size="sm"
              className="font-rajdhani font-medium"
            >
              Login
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 py-4"
          >
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                const Icon = item.icon

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-3 px-3 py-2 rounded-md transition-colors w-full',
                      'hover:bg-accent hover:text-accent-foreground',
                      isActive && 'bg-accent text-accent-foreground'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="flex-1">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </MotionDiv>
        )}
      </div>

      {customContent && (
        <div className="border-t border-border/50">
          {customContent}
        </div>
      )}

      {/* Navigation Dropdowns */}
      {activeDropdown && activeDropdown !== 'mega' && (
        <MotionDiv
          className="absolute left-0 right-0 bg-card mica-overlay border-t border-border/20 shadow-deep z-40"
          style={{
            top: '100%'
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {(() => {
            const currentItem = navigationItems.find(item => 
              item.label.toLowerCase().replace(' & ', '').replace(' ', '') === activeDropdown
            )
            if (!currentItem?.dropdownContent) return null
            
            return (
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentItem.dropdownContent.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      className="flex flex-col p-3 rounded-md hover:bg-accent/50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="font-rajdhani font-semibold text-sm text-foreground group-hover:text-primary mb-1">
                        {dropdownItem.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {dropdownItem.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })()}
        </MotionDiv>
      )}

      {/* Tactical Mega Menu */}
      <MegaMenu 
        isOpen={activeDropdown === 'mega'}
        onClose={() => setActiveDropdown(null)}
      />

    </nav>
  )
}