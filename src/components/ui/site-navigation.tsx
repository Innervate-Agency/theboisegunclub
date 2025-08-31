'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { MotionDiv } from '@/components/ui/optimized-motion'
import { BanknotesIcon, Bars3Icon, BookOpenIcon, BuildingStorefrontIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, CubeTransparentIcon, IdentificationIcon, MapIcon, MapPinIcon, PlusCircleIcon, ShieldCheckIcon, SparklesIcon, TicketIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IndustryMegamenu } from './industry-megamenu'
import { AuthButton } from '@/components/auth/auth-button'
import { NavbarWeatherWidget } from './navbar-weather-widget'
import { NavigationTexture } from './textured-background'
import { useAuth } from '@/components/auth/auth-context'
import { useTacticalTracker } from '@/hooks/useTacticalTracker'
import { useKonamiCode } from '@/hooks/useKonamiCode'
import { useNightOpsTheme } from '@/hooks/useNightOpsTheme'

const siteNavigationVariants = cva(
  "w-full transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "mica-navbar shadow-whisper",
        premium: "mica-navbar shadow-present",
        elite: "mica-modal shadow-prominent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-warning-amber/50 after:to-transparent",
        glass: "mica-card shadow-elevated",
        gunclub: "mica shadow-present after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-warm-stone/40 after:to-transparent"
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

const navigationItems = [
  { label: "Home", icon: CubeTransparentIcon, href: "/", color: "nav-home" },
  { label: "Events", icon: TicketIcon, href: "/events", color: "nav-events" },
  { label: "Directory", icon: IdentificationIcon, href: "/directory", color: "nav-directory" },
  { label: "Armory", icon: PlusCircleIcon, href: "/armory", color: "nav-armory" },
  { label: "Intel", icon: MapPinIcon, href: "/intel", color: "nav-intel" },
  { label: "Buy & Sell", icon: BanknotesIcon, href: "/buysell", color: "nav-buysell" },
  { label: "Forums", icon: ChatBubbleLeftRightIcon, href: "/forums", color: "nav-forums", isForumLink: true }
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false)
  const [activeMegaSection, setActiveMegaSection] = React.useState<string>()
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null)
  const [logoClickCount, setLogoClickCount] = React.useState(0)
  const [showIdahoFacts, setShowIdahoFacts] = React.useState(false)
  const [showKonamiNotification, setShowKonamiNotification] = React.useState(false)
  const pathname = usePathname()
  const { getForumUrl, isAuthenticated } = useAuth()
  const { fireBrass, visitSection } = useTacticalTracker()
  const { isNightOps, activateNightOps, toggleNightOps } = useNightOpsTheme()
  
  // Konami code easter egg
  const { isActivated, progress, totalSteps, reset } = useKonamiCode({
    onComplete: () => {
      activateNightOps()
      setShowKonamiNotification(true)
      // Hide notification after 5 seconds
      setTimeout(() => setShowKonamiNotification(false), 5000)
    },
    resetOnComplete: true
  })

  // Track section visits and fire brass on navigation
  React.useEffect(() => {
    // Only fire brass and track section on pathname changes, not on every render
    // Determine current section and track visit
    let currentSection = 'home'
    if (pathname.startsWith('/events')) currentSection = 'events'
    else if (pathname.startsWith('/directory')) currentSection = 'directory'
    else if (pathname.startsWith('/armory')) currentSection = 'armory'
    else if (pathname.startsWith('/intel')) currentSection = 'intel'
    else if (pathname.startsWith('/buysell')) currentSection = 'buysell'
    else if (pathname.startsWith('/forums')) currentSection = 'forums'
    
    // FireIcon brass for page navigation
    fireBrass()
    
    // Track section visit
    visitSection(currentSection)
  }, [pathname]) // Only depend on pathname, not the functions

  // Idaho facts easter egg
  const idahoFacts = [
    "Idaho produces 1/3 of all potatoes grown in the US",
    "Hell's Canyon is the deepest river gorge in North America",
    "Idaho has over 3,100 miles of fishable streams and rivers",
    "The state motto is 'Esto Perpetua' - Let it be perpetual",
    "Idaho has 63 shooting ranges and firearms training facilities",
    "Boise is known as the 'City of Trees' with over 180,000 trees",
    "Idaho leads the nation in trout production"
  ]

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

  // Get current page color based on pathname
  const getCurrentPageColor = () => {
    if (pathname === '/') return 'text-nav-home'
    if (pathname.startsWith('/events')) return 'text-nav-events'
    if (pathname.startsWith('/directory')) return 'text-nav-directory'
    if (pathname.startsWith('/armory')) return 'text-nav-armory'
    if (pathname.startsWith('/intel')) return 'text-nav-intel'
    if (pathname.startsWith('/buysell')) return 'text-nav-buysell'
    if (pathname.startsWith('/forums')) return 'text-nav-forums'
    return 'text-rusty-orange' // fallback
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

  // Mega menu handlers
  const handleMegaMenuOpen = (section?: string) => {
    setActiveMegaSection(section)
    setIsMegaMenuOpen(true)
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  const handleMegaMenuClose = () => {
    setIsMegaMenuOpen(false)
    setActiveMegaSection(undefined)
  }

  // Create personalization context
  const personalizationContext = React.useMemo(() => ({
    userId: isAuthenticated ? 'user-123' : undefined, // Replace with actual user ID
    userType: isAuthenticated ? 'member' : 'visitor' as const,
    location: {
      city: 'Boise',
      state: 'ID'
    },
    recentViews: [], // Would come from user data/localStorage
    preferences: {
      favoriteCategories: [],
      notifications: true,
      darkMode: isNightOps,
      compactMode: false
    },
    bookmarks: [] // Would come from user data
  }), [isAuthenticated, isNightOps])

  // Get current page subtitle based on pathname (memoized for performance)
  const currentPageSubtitle = React.useMemo(() => {
    if (pathname === '/') return 'Treasure Valley Collective'
    if (pathname.startsWith('/events')) return 'Your Trusted Event Source'
    if (pathname.startsWith('/directory')) return 'Local Business Network'
    if (pathname.startsWith('/armory')) return 'Gear Reviews & Insights'
    if (pathname.startsWith('/intel')) return 'Range Conditions & Data'
    if (pathname.startsWith('/buysell')) return 'Community Commerce Hub'
    if (pathname.startsWith('/forums')) return 'Community Discussion Space'
    return 'Treasure Valley Collective' // fallback
  }, [pathname])

  // Get background color for magic line based on hovered/active path
  const getMagicLineColor = (itemColor: string) => {
    const colorMap = {
      'nav-home': 'bg-nav-home',
      'nav-events': 'bg-nav-events',
      'nav-directory': 'bg-nav-directory',
      'nav-armory': 'bg-nav-armory',
      'nav-intel': 'bg-nav-intel',
      'nav-buysell': 'bg-nav-buysell',
      'nav-forums': 'bg-nav-forums'
    }
    
    const result = colorMap[itemColor as keyof typeof colorMap] || 'bg-rusty-orange'
    // Debug log for development
    if (process.env.NODE_ENV === 'development') {
    }
    return result
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMegaMenuOpen) {
      setIsMegaMenuOpen(false)
    }
  }

  // Helper function to check if URL is external
  const isExternalUrl = (url: string) => url.startsWith('http')

  // Helper function to render navigation link
  const renderNavLink = (item: typeof navigationItems[0], className: string, children: React.ReactNode) => {
    // Special handling for forum links
    if (item.isForumLink) {
      const handleForumClick = async (e: React.MouseEvent) => {
        e.preventDefault()
        
        if (isAuthenticated) {
          // Get authenticated forum URL
          const forumUrl = await getForumUrl()
          if (forumUrl) {
            window.open(forumUrl, '_blank')
          } else {
            // Fallback to regular forum URL
            window.open('https://boisegunclub.com/forums/', '_blank')
          }
        } else {
          // Open forum as guest
          window.open('https://boisegunclub.com/forums/', '_blank')
        }
      }

      return (
        <button 
          onClick={handleForumClick}
          className={className}
        >
          {children}
        </button>
      )
    }

    const isExternal = isExternalUrl(item.href)
    
    if (isExternal) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      )
    }
    
    return (
      <Link href={item.href} className={className}>
        {children}
      </Link>
    )
  }

  // Get individual hover classes for each nav item - 1970s theme-aware colors
  const getHoverClasses = (color: string) => {
    switch(color) {
      case 'nav-home': return 'hover:text-nav-home'
      case 'nav-events': return 'hover:text-nav-events'
      case 'nav-directory': return 'hover:text-nav-directory'
      case 'nav-armory': return 'hover:text-nav-armory'
      case 'nav-intel': return 'hover:text-nav-intel'
      case 'nav-buysell': return 'hover:text-nav-buysell'
      case 'nav-forums': return 'hover:text-nav-forums'
      default: return 'hover:text-nav-home'
    }
  }

  const getActiveTextClass = (color: string) => {
    switch(color) {
      case 'nav-home': return 'text-nav-home'
      case 'nav-events': return 'text-nav-events'
      case 'nav-directory': return 'text-nav-directory'
      case 'nav-armory': return 'text-nav-armory'
      case 'nav-intel': return 'text-nav-intel'
      case 'nav-buysell': return 'text-nav-buysell'
      case 'nav-forums': return 'text-nav-forums'
      default: return 'text-nav-home'
    }
  }

  return (
    <nav
      className={cn(siteNavigationVariants({ variant, layout, sticky }), "site-navigation", className)}
      {...props}
    >
      
      <div className="w-full max-w-site mx-auto px-mobile-sm sm:px-md container-mobile">
        <div className="relative flex items-center justify-between h-14 sm:h-16 touch-target">
          
          {/* Logo */}
          {showLogo && (
            <div className="flex items-center relative">
              <div 
                onClick={handleLogoClick}
                className="flex items-center gap-xs sm:gap-sm cursor-pointer"
                title={logoClickCount > 0 ? `${7 - logoClickCount} clicks to Idaho facts` : 'Click 7 times for Idaho facts'}
              >
                <div className="flex items-center gap-xs sm:gap-sm">
                  <MotionDiv
                    key={pathname} // This triggers re-render on route change
                    className={getCurrentPageColor()}
                    initial={{ 
                      rotate: 0,
                      scale: 1
                    }}
                    animate={{ 
                      rotate: 332, // Single spin landing at ~28 degrees off-kilter (360-28=332)
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      times: [0, 0.7, 1]
                    }}
                    whileHover={{ 
                      rotate: [332, 325, 340, 332], // Hover wiggle from tilted position
                      transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    style={{ 
                      transform: 'translate3d(0,0,0)', // Force GPU acceleration
                      willChange: 'transform' // Only transform, not auto
                    }}
                  >
                    {React.createElement(getCurrentPageIcon(), { 
                      className: "size-6 sm:size-8"
                    })}
                  </MotionDiv>
                  <div className="hidden sm:block">
                    <div className="text-heading-base sm:text-heading-lg font-rajdhani text-card-foreground leading-none uppercase">
                      <span className="font-[800]">The Boise</span> <span className="font-[300]">Gun Club</span>
                    </div>
                    <p className="text-heading-xs sm:text-heading-sm font-rajdhani font-[500] text-muted-foreground leading-[0.8] lowercase tracking-wider text-center -mt-2 sm:-mt-3">
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
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card border border-nav-home p-lg rounded-xs shadow-prominent z-50 max-w-md"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="text-center space-y-sm">
                    <div className="text-nav-home font-rajdhani font-bold text-lg">
                      🏔️ Idaho Facts
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
              
              {/* Konami Code Night Ops Notification */}
              {showKonamiNotification && (
                <MotionDiv
                  className="absolute top-full right-0 mt-2 bg-card border border-secondary p-lg rounded-xs shadow-commanding z-50 max-w-sm"
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="text-center space-y-sm">
                    <div className="text-secondary font-rajdhani font-bold text-lg">
                      🌙 NIGHT OPS ACTIVATED
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      Konami Code detected! Night vision tactical theme engaged.
                    </div>
                    <div className="text-xs text-secondary/70">
                      Toggle with the button in the navigation bar
                    </div>
                  </div>
                </MotionDiv>
              )}
            </div>
          )}

          {/* Desktop Navigation - Magic Line Edition */}
          <div className="hidden md:flex items-center relative">
            {navigationItems.slice(0, 7).map((item, index) => {
              const isActive = pathname === item.href
              const isHovered = hoveredPath === item.href
              const shouldShowLine = item.href === (hoveredPath || pathname)
              
              return (
                <React.Fragment key={item.href}>
                  <div 
                    className="relative px-sm py-0"
                    onMouseEnter={() => setHoveredPath(item.href)}
                    onMouseLeave={() => setHoveredPath(pathname)}
                  >
                    {/* Tactical Equipment Case Highlight - Always visible on hover/active */}
                    {(isHovered || isActive) && (
                      <MotionDiv
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                      >
                        {/* Document-style Tactical Brackets */}
                        {/* Top Left - Standard square bracket */}
                        <div className={`absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                        
                        {/* Top Right - Standard bracket with filled square accent */}
                        <div className={`absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                        
                        
                        {/* Bottom Left - Standard square bracket */}
                        <div className={`absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                        
                        {/* Bottom Right - Standard square bracket */}
                        <div className={`absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                      </MotionDiv>
                    )}
                    
                    {renderNavLink(
                      item,
                      `relative z-10 flex items-center gap-xs px-xs py-xs text-body-base font-rajdhani font-semibold transition-all duration-200 ${
                        isActive
                          ? getActiveTextClass(item.color)
                          : isHovered 
                            ? getActiveTextClass(item.color)
                            : `text-muted-foreground ${getHoverClasses(item.color)}`
                      }`,
                      <MotionDiv 
                        className="flex items-center gap-xs"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <MotionDiv
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.12, ease: "easeOut" }
                          }}
                          whileTap={{ 
                            scale: 0.98,
                            transition: { duration: 0.08 }
                          }}
                        >
                          <item.icon className="size-4" />
                        </MotionDiv>
                        {item.label.toUpperCase()}
                      </MotionDiv>
                    )}
                  </div>
                  
                  {/* Separator lines between nav items - now with subtle glow */}
                  {index < navigationItems.slice(0, 7).length - 1 && (
                    <div className="h-4 w-px mx-xs relative">
                      <div className="absolute inset-0 w-px bg-muted-foreground/20" />
                      <div className="absolute inset-0 w-px bg-card/30 translate-x-px" />
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>

          {/* Custom Content / Auth Buttons */}
          <div className="hidden md:flex items-center gap-base">
            {/* Mega Menu Trigger Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleMegaMenuOpen()}
              className={cn(
                "flex items-center gap-xs px-sm py-xs text-body-base font-rajdhani font-semibold transition-all duration-200",
                isMegaMenuOpen 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-primary"
              )}
              title="Open comprehensive site menu"
            >
              <Bars3Icon className="size-4" />
              MENU
            </Button>
            
            {/* Night Ops Toggle (only show if activated) */}
            {isNightOps && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleNightOps}
                className="text-xs font-rajdhani font-bold tracking-wider"
                title="Toggle Night Ops Mode (Konami Code Unlocked)"
              >
                🌙 NIGHT OPS
              </Button>
            )}
            
            <NavbarWeatherWidget />
            
            {customContent || (
              <AuthButton variant="forum-aware" showTrialButton={false} />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-[var(--icon-base)] w-[var(--icon-base)]" />
              ) : (
                <Bars3Icon className="h-[var(--icon-base)] w-[var(--icon-base)]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced for touch */}
        {isMobileMenuOpen && (
          <MotionDiv 
            className="md:hidden py-mobile-lg sm:py-lg relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-rusty-orange/30 before:to-transparent"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="space-y-sm">
              {navigationItems.map((item) => (
                <div key={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {renderNavLink(
                    item,
                    `flex items-center gap-sm px-mobile-md sm:px-lg py-mobile-md sm:py-lg text-body-base font-rajdhani font-semibold transition-all duration-150 rounded-xs touch-target ${
                      pathname === item.href 
                        ? `${getActiveTextClass(item.color)} bg-muted/30`
                        : `text-muted-foreground ${getHoverClasses(item.color)} hover:bg-muted/20`
                    }`,
                    <>
                      <item.icon className="size-5" />
                      <div className="flex flex-col">
                        <span>{item.label.toUpperCase()}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.label === 'Events' && 'Competitions & Training'}
                          {item.label === 'Directory' && 'Local Businesses'}
                          {item.label === 'Armory' && 'Gear Reviews'}
                          {item.label === 'Intel' && 'Range Conditions'}
                          {item.label === 'Buy & Sell' && 'Community Commerce'}
                          {item.label === 'Forums' && 'Community Discussion'}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-mobile-lg sm:pt-lg mt-mobile-lg sm:mt-lg relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-rusty-orange/30 before:to-transparent">
              <div className="flex flex-col gap-sm">
                <NavbarWeatherWidget />
                <AuthButton variant="outline" showTrialButton={false} className="flex-col items-stretch touch-target" />
              </div>
            </div>
          </MotionDiv>
        )}
      </div>

      {/* Industry-Leading Mega Menu */}
      <IndustryMegamenu
        isOpen={isMegaMenuOpen}
        onClose={handleMegaMenuClose}
        activeSection={activeMegaSection}
        personalizationContext={personalizationContext}
        className="relative z-50"
      />
    </nav>
  )
}