'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { MotionDiv } from '@/components/ui/optimized-motion'
import { Menu, X } from 'lucide-react'
import { AuthButton } from '@/components/auth/auth-button'
import { useAuth } from '@/components/auth/auth-context'
import { useTacticalTracker } from '@/hooks/useTacticalTracker'
import { useKonamiCode } from '@/hooks/useKonamiCode'
import { useNightOpsTheme } from '@/hooks/useNightOpsTheme'
import { 
  CubeTransparentIcon as Diamond, 
  TicketIcon as Ticket,
  IdentificationIcon as AddressBook,
  PlusCircleIcon as Shield,
  MapIcon as MapTrifold,
  BanknotesIcon as Storefront,
  ChatBubbleBottomCenterTextIcon as Users
} from '@heroicons/react/24/outline'

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
  { label: "Home", icon: Diamond, href: "/", color: "nav-home" },
  { label: "Events", icon: Ticket, href: "/events", color: "nav-events" },
  { label: "Directory", icon: AddressBook, href: "/directory", color: "nav-directory" },
  { label: "Armory", icon: Shield, href: "/armory", color: "nav-armory" },
  { label: "Intel", icon: MapTrifold, href: "/intel", color: "nav-intel" },
  { label: "Marketplace", icon: Storefront, href: "/marketplace", color: "nav-marketplace" },
  { label: "Forums", icon: Users, href: "/forums", color: "nav-forums", isForumLink: true }
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
    else if (pathname.startsWith('/marketplace')) currentSection = 'marketplace'
    else if (pathname.startsWith('/forums')) currentSection = 'forums'
    
    // Fire brass for page navigation
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
    if (pathname.startsWith('/marketplace')) return 'text-nav-marketplace'
    if (pathname.startsWith('/forums')) return 'text-nav-forums'
    return 'text-rusty-orange' // fallback
  }

  // Get current page icon component based on pathname
  const getCurrentPageIcon = () => {
    if (pathname === '/') return Diamond
    if (pathname.startsWith('/events')) return Ticket
    if (pathname.startsWith('/directory')) return AddressBook
    if (pathname.startsWith('/armory')) return Shield
    if (pathname.startsWith('/intel')) return MapTrifold
    if (pathname.startsWith('/marketplace')) return Storefront
    if (pathname.startsWith('/forums')) return Users
    return Diamond // fallback
  }

  // Get current page subtitle based on pathname (memoized for performance)
  const currentPageSubtitle = React.useMemo(() => {
    if (pathname === '/') return 'Treasure Valley Collective'
    if (pathname.startsWith('/events')) return 'Your Trusted Event Source'
    if (pathname.startsWith('/directory')) return 'Local Business Network'
    if (pathname.startsWith('/armory')) return 'Gear Reviews & Insights'
    if (pathname.startsWith('/intel')) return 'Range Conditions & Data'
    if (pathname.startsWith('/marketplace')) return 'Community Commerce Hub'
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
      'nav-marketplace': 'bg-nav-marketplace',
      'nav-forums': 'bg-nav-forums'
    }
    
    const result = colorMap[itemColor as keyof typeof colorMap] || 'bg-rusty-orange'
    // Debug log for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Magic line color for ${itemColor}: ${result}`)
    }
    return result
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

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
      case 'nav-marketplace': return 'hover:text-nav-marketplace'
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
      case 'nav-marketplace': return 'text-nav-marketplace'
      case 'nav-forums': return 'text-nav-forums'
      default: return 'text-nav-home'
    }
  }

  return (
    <nav
      className={cn(siteNavigationVariants({ variant, layout, sticky }), "site-navigation", className)}
      {...props}
    >
      <div className="w-full max-w-site mx-auto px-sm sm:px-md">
        <div className="relative flex items-center justify-between h-14 sm:h-16">
          
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
                    className="relative px-micro py-micro"
                    onMouseEnter={() => setHoveredPath(item.href)}
                    onMouseLeave={() => setHoveredPath(pathname)}
                  >
                    {/* Magic Line - Individual per item but shared layoutId */}
                    {shouldShowLine && (
                      <MotionDiv
                        layoutId="navbar-magic-line"
                        className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${getMagicLineColor(item.color)} shadow-sm`}
                        style={{
                          // Fallback inline styles to ensure visibility
                          backgroundColor: `var(--${item.color})`,
                          minHeight: '4px' // Ensure minimum visibility
                        }}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          stiffness: 130,
                          damping: 9,
                          duration: 0.3,
                        }}
                      />
                    )}
                    
                    {/* Tactical Equipment Case Highlight */}
                    {isHovered && (
                      <MotionDiv
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        {/* Main case border - thinner for navbar */}
                        <div className={`absolute inset-0 rounded-sm border ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-70`} />
                        
                        {/* Tactical corner brackets - thinner for navbar */}
                        <div className={`absolute top-0 left-0 w-2 h-2 border-l border-t ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                        <div className={`absolute top-0 right-0 w-2 h-2 border-r border-t ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                        <div className={`absolute bottom-0 left-0 w-2 h-2 border-l border-b ${getMagicLineColor(item.color).replace('bg-', 'border-')} opacity-90`} />
                        
                        {/* Bottom-right corner with document cutout */}
                        <div className={`absolute bottom-0 right-0 w-2 h-2 opacity-90`}>
                          <div 
                            className={`w-full h-full border ${getMagicLineColor(item.color).replace('bg-', 'border-')}`}
                            style={{
                              clipPath: 'polygon(0 0, 60% 0, 100% 40%, 100% 100%, 0 100%)'
                            }}
                          />
                        </div>
                        
                        {/* Tactical latches/clasps */}
                        <div className={`absolute top-1 right-1 w-1 h-1 ${getMagicLineColor(item.color)} rounded-full opacity-80`} />
                        <div className={`absolute bottom-1 left-1 w-1 h-1 ${getMagicLineColor(item.color)} rounded-full opacity-80`} />
                        
                        {/* Western document texture - subtle paper grain effect */}
                        <div className="absolute inset-1 opacity-10">
                          <div className="w-full h-full bg-gradient-to-br from-transparent via-current/5 to-transparent" />
                        </div>
                      </MotionDiv>
                    )}
                    
                    {renderNavLink(
                      item,
                      `relative z-10 flex items-center gap-xs px-xs py-xs text-body-base font-rajdhani font-medium transition-all duration-200 ${
                        isActive
                          ? getActiveTextClass(item.color)
                          : isHovered 
                            ? getActiveTextClass(item.color)
                            : `text-muted-foreground ${getHoverClasses(item.color)}`
                      }`,
                      <MotionDiv 
                        className="flex items-center gap-xs"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MotionDiv
                          whileHover={{ 
                            y: [-1, 0],
                            transition: { duration: 0.2, ease: "easeOut" }
                          }}
                          whileTap={{ 
                            scale: 0.95,
                            transition: { duration: 0.1 }
                          }}
                        >
                          <item.icon className="size-4" weight="bold" />
                        </MotionDiv>
                        {item.label}
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
                <X className="h-[var(--icon-base)] w-[var(--icon-base)]" />
              ) : (
                <Menu className="h-[var(--icon-base)] w-[var(--icon-base)]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced for touch */}
        {isMobileMenuOpen && (
          <MotionDiv 
            className="md:hidden py-lg relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-rusty-orange/30 before:to-transparent"
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
                    `flex items-center gap-sm px-lg py-lg text-body-base font-rajdhani font-medium transition-all duration-150 rounded-xs min-h-[44px] ${
                      pathname === item.href 
                        ? `${getActiveTextClass(item.color)} bg-muted/30`
                        : `text-muted-foreground ${getHoverClasses(item.color)} hover:bg-muted/20`
                    }`,
                    <>
                      <item.icon className="size-5" weight="bold" />
                      <div className="flex flex-col">
                        <span>{item.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.label === 'Events' && 'Competitions & Training'}
                          {item.label === 'Directory' && 'Local Businesses'}
                          {item.label === 'Armory' && 'Gear Reviews'}
                          {item.label === 'Intel' && 'Range Conditions'}
                          {item.label === 'Marketplace' && 'Buy & Sell'}
                          {item.label === 'Forums' && 'Community Discussion'}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-lg mt-lg relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-rusty-orange/30 before:to-transparent">
              <div className="flex flex-col gap-sm">
                <AuthButton variant="default" showTrialButton={false} className="flex-col items-stretch min-h-[44px]" />
              </div>
            </div>
          </MotionDiv>
        )}
      </div>
    </nav>
  )
}