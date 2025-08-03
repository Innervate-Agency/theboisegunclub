'use client'

import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Home, Users, Calendar, Target, Trophy, Settings, Shield, Menu, X } from 'lucide-react'

const siteNavigationVariants = cva(
  "w-full transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-card shadow-flat",
        premium: "bg-gradient-to-r from-brass-yellow/5 via-copper-orange/5 to-brass-yellow/5 shadow-md backdrop-blur-sm relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-brass-yellow/40 after:to-transparent",
        elite: "bg-gradient-to-r from-blued-steel/10 via-case-hardened/10 to-blued-steel/10 shadow-elevated backdrop-blur-md relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-case-hardened/50 after:to-transparent",
        glass: "bg-card/80 backdrop-blur-xl shadow-premium",
        gunclub: "bg-shooting-bench shadow-flat relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-tactical-gray/40 after:to-transparent"
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
        <div className="p-md">
          {showLogo && (
            <div className="mb-[var(--space-lg)]">
              <div className="text-heading-sm font-rajdhani text-gunmetal-black">
                <span className="font-extrabold">THE BOISE GUN</span>{' '}
                <span className="font-light">CLUB</span>
              </div>
              <p className="text-body-sm text-case-hardened">Treasure Valley</p>
            </div>
          )}
          
          <div className="space-y-[var(--space-xs)]">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-sm px-base py-sm text-body-sm font-medium text-case-hardened hover:text-gunmetal-black hover:bg-brass-yellow/10 rounded-card transition-all duration-150"
              >
                <item.icon className="h-icon-sm w-icon-sm" />
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
      <div className="w-full max-w-7xl mx-auto px-md">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          {showLogo && (
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-sm">
                <div className="w-[var(--icon-lg)] h-[var(--icon-lg)] bg-brass-yellow rounded-input flex items-center justify-center">
                  <Target className="h-icon-sm w-icon-sm text-gunmetal-black" />
                </div>
                <div>
                  <div className="text-body-lg font-rajdhani text-gunmetal-black">
                    <span className="font-extrabold">THE BOISE GUN</span>{' '}
                    <span className="font-light">CLUB</span>
                  </div>
                  <p className="text-caption text-case-hardened -mt-[var(--space-xs)]">
                    Treasure Valley
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-[var(--space-micro)]">
            {navigationItems.slice(0, 6).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-xs px-base py-xs text-body-sm font-medium text-case-hardened hover:text-gunmetal-black hover:bg-brass-yellow/10 rounded-input transition-all duration-150"
              >
                <item.icon className="h-icon-sm w-icon-sm" />
                {item.label}
              </a>
            ))}
          </div>

          {/* Custom Content / Auth Buttons */}
          <div className="hidden md:flex items-center gap-base">
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
                <X className="h-[var(--icon-base)] w-[var(--icon-base)]" />
              ) : (
                <Menu className="h-[var(--icon-base)] w-[var(--icon-base)]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mega Menu Content */}
        {layout === "mega" && (
          <div className="py-md relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-brass-yellow/30 before:to-transparent">
            <div className="grid grid-cols-3 gap-lg">
              <div>
                <h3 className="text-body-sm font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                  Directory
                </h3>
                <div className="space-y-[var(--space-xs)]">
                  <a href="/directory/shops" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Gun Shops
                  </a>
                  <a href="/directory/ranges" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Shooting Ranges
                  </a>
                  <a href="/directory/instructors" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Instructors
                  </a>
                  <a href="/directory/gunsmiths" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Gunsmiths
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-body-sm font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                  Events
                </h3>
                <div className="space-y-[var(--space-xs)]">
                  <a href="/events/competitions" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Competitions
                  </a>
                  <a href="/events/training" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Training Sessions
                  </a>
                  <a href="/events/social" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Social Events
                  </a>
                  <a href="/events/gun-shows" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Gun Shows
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-body-sm font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                  Resources
                </h3>
                <div className="space-y-[var(--space-xs)]">
                  <a href="/safety" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Safety Guidelines
                  </a>
                  <a href="/training/beginner" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Beginner Resources
                  </a>
                  <a href="/laws" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Idaho Gun Laws
                  </a>
                  <a href="/community" className="block text-body-sm text-case-hardened hover:text-gunmetal-black">
                    Community Forum
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-base relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-brass-yellow/30 before:to-transparent">
            <div className="space-y-[var(--space-xs)]">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-sm px-base py-sm text-body-sm font-medium text-case-hardened hover:text-gunmetal-black hover:bg-brass-yellow/10 rounded-input transition-all duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-icon-sm w-icon-sm" />
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="pt-[var(--space-base)] mt-[var(--space-base)] relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-brass-yellow/30 before:to-transparent">
              <div className="flex flex-col gap-xs">
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
