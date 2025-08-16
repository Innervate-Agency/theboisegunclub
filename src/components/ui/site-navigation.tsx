'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { AuthButton } from '@/components/auth/auth-button'
import { useAuth } from '@/components/auth/auth-context'
import { 
  Diamond, 
  Ticket,
  AddressBook,
  Shield,
  MapTrifold,
  Storefront,
  Users
} from '@phosphor-icons/react'

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
      sticky: false
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
  const pathname = usePathname()
  const { getForumUrl, isAuthenticated } = useAuth()

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
    switch(itemColor) {
      case 'nav-home': return 'bg-nav-home'
      case 'nav-events': return 'bg-nav-events'
      case 'nav-directory': return 'bg-nav-directory'
      case 'nav-armory': return 'bg-nav-armory'
      case 'nav-intel': return 'bg-nav-intel'
      case 'nav-marketplace': return 'bg-nav-marketplace'
      case 'nav-forums': return 'bg-nav-forums'
      default: return 'bg-rusty-orange'
    }
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
      <div className="w-full max-w-site mx-auto px-md">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Logo */}
          {showLogo && (
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-sm">
                <div className="flex items-center gap-sm">
                  {React.createElement(getCurrentPageIcon(), { 
                    className: `size-8 ${getCurrentPageColor()} -rotate-[28deg]`, 
                    weight: "bold" 
                  })}
                  <div>
                    <div className="text-heading-lg font-rajdhani text-card-foreground leading-none uppercase">
                      <span className="font-[800]">The Boise</span> <span className="font-[300]">Gun Club</span>
                    </div>
                    <p className="text-heading-sm font-rajdhani font-[500] text-muted-foreground leading-[0.8] lowercase tracking-wider text-center -mt-3">
                      {currentPageSubtitle}
                    </p>
                  </div>
                </div>
              </Link>
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
                      <motion.div
                        layoutId="navbar-magic-line"
                        className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${getMagicLineColor(item.color)}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          stiffness: 130,
                          damping: 9,
                          duration: 0.3,
                        }}
                      />
                    )}
                    
                    {/* Icon Glow Effect */}
                    {isHovered && (
                      <motion.div
                        className={`absolute inset-0 rounded-sm ${getMagicLineColor(item.color)}/20 blur-md -z-10`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.3, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
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
                      <motion.div 
                        className="flex items-center gap-xs"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ 
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                          }}
                        >
                          <item.icon className="size-4" weight="bold" />
                        </motion.div>
                        {item.label}
                      </motion.div>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-base relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-rusty-orange/30 before:to-transparent">
            <div className="space-y-xs">
              {navigationItems.map((item) => (
                <div key={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {renderNavLink(
                    item,
                    `flex items-center gap-sm px-sm py-sm text-body-sm font-rajdhani font-medium transition-all duration-150 rounded-base ${
                      pathname === item.href 
                        ? getActiveTextClass(item.color)
                        : `text-muted-foreground ${getHoverClasses(item.color)}`
                    }`,
                    <>
                      <item.icon className="size-4" weight="bold" />
                      {item.label}
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-base mt-base relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-rusty-orange/30 before:to-transparent">
              <div className="flex flex-col gap-xs">
                <AuthButton variant="default" showTrialButton={false} className="flex-col items-stretch" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}