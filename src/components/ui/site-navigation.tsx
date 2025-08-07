'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
        premium: "mica",
        elite: "mica-modal after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-case-hardened/50 after:to-transparent",
        glass: "mica-card",
        gunclub: "bg-shooting-bench shadow-flat after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-tactical-gray/40 after:to-transparent"
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
  { label: "Home", icon: Home, href: "/", color: "copper-orange" },
  { label: "Events", icon: Calendar, href: "/events", color: "ayu-blue" },
  { label: "Directory", icon: Users, href: "/directory", color: "ayu-green" },
  { label: "Guides", icon: Target, href: "/guides", color: "ayu-purple" },
  { label: "Map", icon: Shield, href: "/map", color: "ayu-red" },
  { label: "Marketplace", icon: Trophy, href: "/marketplace", color: "ayu-teal" },
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
  const pathname = usePathname()

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  // Get individual hover classes for each nav item - text color only, no background
  const getHoverClasses = (color: string) => {
    switch(color) {
      case 'copper-orange': return 'hover:text-copper-orange'
      case 'ayu-blue': return 'hover:text-ayu-blue'
      case 'ayu-green': return 'hover:text-ayu-green'
      case 'ayu-purple': return 'hover:text-ayu-purple'
      case 'ayu-red': return 'hover:text-ayu-red'
      case 'ayu-teal': return 'hover:text-ayu-teal'
      default: return 'hover:text-copper-orange'
    }
  }
  
  const getColorBarClass = (color: string) => {
    switch(color) {
      case 'copper-orange': return 'bg-copper-orange'
      case 'ayu-blue': return 'bg-ayu-blue'
      case 'ayu-green': return 'bg-ayu-green'
      case 'ayu-purple': return 'bg-ayu-purple'
      case 'ayu-red': return 'bg-ayu-red'
      case 'ayu-teal': return 'bg-ayu-teal'
      default: return 'bg-copper-orange'
    }
  }

  const getActiveTextClass = (color: string) => {
    switch(color) {
      case 'copper-orange': return 'text-copper-orange'
      case 'ayu-blue': return 'text-ayu-blue'
      case 'ayu-green': return 'text-ayu-green'
      case 'ayu-purple': return 'text-ayu-purple'
      case 'ayu-red': return 'text-ayu-red'
      case 'ayu-teal': return 'text-ayu-teal'
      default: return 'text-copper-orange'
    }
  }

  return (
    <nav
      className={cn(siteNavigationVariants({ variant, layout, sticky }), className)}
      {...props}
    >
      <div className="w-full max-w-7xl mx-auto px-md">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Logo */}
          {showLogo && (
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-brass-yellow to-copper-orange rounded-lg flex flex-col items-center justify-center relative">
                  <div className="text-[10px] font-rajdhani font-black text-gunmetal-black tracking-tight leading-none">
                    TB
                  </div>
                  <div className="text-[10px] font-rajdhani font-black text-gunmetal-black tracking-tight leading-none">
                    GC
                  </div>
                </div>
                <div>
                  <div className="text-lg font-rajdhani text-card-foreground tracking-[0.2em] leading-none">
                    <span className="font-bold">THEBOISE</span>
                    <span className="font-light">GUNCLUB</span>
                  </div>
                  <p className="text-xs font-noto-sans text-muted-foreground mt-0">
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
                  className={`group relative flex items-center gap-xs px-base py-xs text-sm font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-1 ${
                    pathname === item.href 
                      ? getActiveTextClass(item.color)
                      : `text-muted-foreground ${getHoverClasses(item.color)}`
                  }`}
                >
                  <item.icon className="h-3 w-3" />
                  {item.label}
                  
                  {/* Stripe-style center-out underline - thicker and narrower to avoid collisions */}
                  <div className={`absolute bottom-0 left-2 right-2 h-[3px] ${getColorBarClass(item.color)} transition-transform duration-200 origin-center ${
                    pathname === item.href 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
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
                <Button variant="ghost" size="sm" className="bg-copper-orange/10 text-copper-orange hover:bg-copper-orange/20 shadow-none border border-copper-orange/30 text-xs">
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
                <X className="h-icon-base w-icon-base" />
              ) : (
                <Menu className="h-icon-base w-icon-base" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-base relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-brass-yellow/30 before:to-transparent">
            <div className="space-y-xs">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-sm px-base py-sm text-body-sm font-medium transition-all duration-150 rounded-input ${
                    pathname === item.href 
                      ? getActiveTextClass(item.color)
                      : `text-muted-foreground ${getHoverClasses(item.color)}`
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-icon-sm w-icon-sm" />
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="pt-base mt-base relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-brass-yellow/30 before:to-transparent">
              <div className="flex flex-col gap-xs">
                <Button variant="ghost" size="sm" className="justify-start shadow-none">
                  Sign In
                </Button>
                <Button variant="ghost" size="sm" className="justify-start bg-copper-orange/10 text-copper-orange hover:bg-copper-orange/20 shadow-none border border-copper-orange/30 text-xs">
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