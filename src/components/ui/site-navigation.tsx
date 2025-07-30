'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Home, Users, Calendar, Target, Trophy, Settings, Shield, Menu, X } from 'lucide-react'

const siteNavigationVariants = cva(
  "w-full transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-card shadow-sm",
        premium: "bg-gradient-to-r from-brass-yellow/5 via-copper-orange/5 to-brass-yellow/5 shadow-md backdrop-blur-sm relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-brass-yellow/40 after:to-transparent",
        elite: "bg-gradient-to-r from-blued-steel/10 via-case-hardened/10 to-blued-steel/10 shadow-lg backdrop-blur-md relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-case-hardened/50 after:to-transparent",
        glass: "bg-card/80 backdrop-blur-xl shadow-xl",
        gunclub: "bg-shooting-bench shadow-sm relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-tactical-gray/40 after:to-transparent"
      },
      layout: {
        horizontal: "relative",
        vertical: "flex flex-col min-h-screen w-64",
        mega: "relative"
      },
      sticky: {
        true: "sticky top-0 z-50",
        false: "relative"
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
  { label: "Home", icon: Home, href: "/" },
  { label: "Directory", icon: Users, href: "/directory" },
  { label: "Events", icon: Calendar, href: "/events" },
  { label: "Training", icon: Target, href: "/training" },
  { label: "Competitions", icon: Trophy, href: "/competitions" },
  { label: "Safety", icon: Shield, href: "/safety" },
  { label: "Settings", icon: Settings, href: "/settings" }
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  if (layout === "vertical") {
    return (
      <nav
        className={cn(siteNavigationVariants({ variant, layout, sticky }), className)}
        {...props}
      >
        <div className="p-6">
          {showLogo && (
            <div className="mb-8">
              <div className="text-xl font-rajdhani text-gunmetal-black">
                <span className="font-extrabold">THE BOISE GUN</span>{' '}
                <span className="font-light">CLUB</span>
              </div>
              <p className="text-sm text-case-hardened">Treasure Valley</p>
            </div>
          )}
          
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-case-hardened hover:text-gunmetal-black hover:bg-brass-yellow/10 rounded-lg transition-all duration-150"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav
      className={cn(siteNavigationVariants({ variant, layout, sticky }), className)}
      {...props}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          {showLogo && (
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brass-yellow rounded-md flex items-center justify-center">
                  <Target className="h-4 w-4 text-gunmetal-black" />
                </div>
                <div>
                  <div className="text-lg font-rajdhani text-gunmetal-black">
                    <span className="font-extrabold">THE BOISE GUN</span>{' '}
                    <span className="font-light">CLUB</span>
                  </div>
                  <p className="text-xs text-case-hardened -mt-1">
                    Treasure Valley
                  </p>
                </div>
              </a>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.slice(0, 6).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-case-hardened hover:text-gunmetal-black hover:bg-brass-yellow/10 rounded-md transition-all duration-150"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>

          {/* Custom Content / Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {customContent || (
              <>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="accent" size="sm">
                  Join Now
                </Button>
              </>
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
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mega Menu Content */}
        {layout === "mega" && (
          <div className="py-6 relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-brass-yellow/30 before:to-transparent">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-rajdhani font-bold text-gunmetal-black mb-4">
                  Directory
                </h3>
                <div className="space-y-2">
                  <a href="/directory/shops" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Gun Shops
                  </a>
                  <a href="/directory/ranges" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Shooting Ranges
                  </a>
                  <a href="/directory/instructors" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Instructors
                  </a>
                  <a href="/directory/gunsmiths" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Gunsmiths
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-rajdhani font-bold text-gunmetal-black mb-4">
                  Events
                </h3>
                <div className="space-y-2">
                  <a href="/events/competitions" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Competitions
                  </a>
                  <a href="/events/training" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Training Sessions
                  </a>
                  <a href="/events/social" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Social Events
                  </a>
                  <a href="/events/gun-shows" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Gun Shows
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-rajdhani font-bold text-gunmetal-black mb-4">
                  Resources
                </h3>
                <div className="space-y-2">
                  <a href="/safety" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Safety Guidelines
                  </a>
                  <a href="/training/beginner" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Beginner Resources
                  </a>
                  <a href="/laws" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Idaho Gun Laws
                  </a>
                  <a href="/community" className="block text-sm text-case-hardened hover:text-gunmetal-black">
                    Community Forum
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-brass-yellow/30 before:to-transparent">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-case-hardened hover:text-gunmetal-black hover:bg-brass-yellow/10 rounded-md transition-all duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="pt-4 mt-4 relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-brass-yellow/30 before:to-transparent">
              <div className="flex flex-col gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button variant="accent" size="sm" className="justify-start">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
