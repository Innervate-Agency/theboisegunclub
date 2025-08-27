'use client'

import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Bars3Icon, CalendarDaysIcon, Cog6ToothIcon, HomeIcon, ShieldCheckIcon, Cog6ToothIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';

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
      sticky: false
    }
  }
)

const navigationItems = [
  { label: "Home", icon: Home, href: "/", color: "rusty-orange" },
  { label: "Events", icon: CalendarDaysIcon, href: "/events", color: "slate-blue" },
  { label: "Directory", icon: UsersIcon, href: "/directory", color: "ayu-green" },
  { label: "Guides", icon: CursorArrowRaysIcon, href: "/guides", color: "ayu-purple" },
  { label: "Intel", icon: ShieldCheckIcon, href: "/intel", color: "ayu-red" },
  { label: "Marketplace", icon: TrophyIcon, href: "/marketplace", color: "ayu-teal" },
  { label: "Community", icon: Settings, href: "/community", color: "ayu-teal" }
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

  // Get individual hover classes for each nav item
  const getHoverClasses = (color: string) => {
    switch(color) {
      case 'rusty-orange': return 'hover:text-rusty-orange hover:bg-rusty-orange/10'
      case 'slate-blue': return 'hover:text-slate-blue hover:bg-slate-blue/10'
      case 'ayu-green': return 'hover:text-ayu-green hover:bg-ayu-green/10'
      case 'ayu-purple': return 'hover:text-ayu-purple hover:bg-ayu-purple/10'
      case 'ayu-red': return 'hover:text-ayu-red hover:bg-ayu-red/10'
      case 'ayu-teal': return 'hover:text-ayu-teal hover:bg-ayu-teal/10'
      default: return 'hover:text-rusty-orange hover:bg-rusty-orange/10'
    }
  }
  
  const getColorBarClass = (color: string) => {
    switch(color) {
      case 'rusty-orange': return 'bg-rusty-orange'
      case 'slate-blue': return 'bg-slate-blue'
      case 'ayu-green': return 'bg-ayu-green'
      case 'ayu-purple': return 'bg-ayu-purple'
      case 'ayu-red': return 'bg-ayu-red'
      case 'ayu-teal': return 'bg-ayu-teal'
      default: return 'bg-rusty-orange'
    }
  }

  return (
    <nav
      className={cn(siteNavigationVariants({ variant, layout, sticky }), className)}
      {...props}
    >
      <div className="w-full max-w-site mx-auto px-md">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Logo */}
          {showLogo && (
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-sm">
                <div className="w-10 h-button-lg bg-gradient-to-br from-sandy-ochre to-rusty-orange rounded-xs flex flex-col items-center justify-center relative">
                  <div className="text-[10px] font-rajdhani font-black text-dark-chocolate tracking-tight leading-none">
                    TB
                  </div>
                  <div className="text-[10px] font-rajdhani font-black text-dark-chocolate tracking-tight leading-none">
                    GC
                  </div>
                </div>
                <div>
                  <div className="text-heading-lg font-rajdhani text-card-foreground tracking-[0.2em] leading-none">
                    <span className="font-rajdhani font-bold">THEBOISE</span>
                    <span className="font-light">GUNCLUB</span>
                  </div>
                  <p className="text-body-xs font-noto-sans text-muted-foreground mt-0">
                    A TREASURE VALLEY COLLECTIVE
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navigationItems.slice(0, 6).map((item, index) => (
              <React.Fragment key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative flex items-center gap-xs px-base py-xs text-body-sm font-medium text-muted-foreground transition-all duration-200  ${getHoverClasses(item.color)}`}
                >
                  <item.icon className="size-3" />
                  {item.label}
                  
                  {/* Individual color bar at bottom edge of navbar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${getColorBarClass(item.color)} scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left -mb-base`} />
                </Link>
                
                {/* Separator lines between nav items */}
                {index < navigationItems.slice(0, 6).length - 1 && (
                  <div className="h-4 w-px mx-xs relative">
                    <div className="absolute inset-0 w-px bg-muted-foreground/30" />
                    <div className="absolute inset-0 w-px bg-card/50 translate-x-px" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Custom Content / Auth Buttons */}
          <div className="hidden md:flex items-center gap-base">
            {customContent || (
              <>
                <Button variant="ghost" size="sm" className="shadow-none">
                  Sign In
                </Button>
                <Button variant="ghost" size="sm" className="bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20 shadow-none border border-rusty-orange/30 text-body-xs">
                  60-Day Free Trial
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
                <XMarkIcon className="h-icon-base w-icon-base" />
              ) : (
                <Bars3Icon className="h-icon-base w-icon-base" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-base relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-sandy-ochre/30 before:to-transparent">
            <div className="space-y-xs">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-sm px-base py-sm text-body-sm font-medium text-muted-foreground transition-all duration-150 rounded-input ${getHoverClasses(item.color)}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-icon-sm w-icon-sm" />
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="pt-base mt-base relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-sandy-ochre/30 before:to-transparent">
              <div className="flex flex-col gap-xs">
                <Button variant="ghost" size="sm" className="justify-start shadow-none">
                  Sign In
                </Button>
                <Button variant="ghost" size="sm" className="justify-start bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20 shadow-none border border-rusty-orange/30 text-body-xs">
                  60-Day Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}