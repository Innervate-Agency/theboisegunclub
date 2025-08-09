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
  { label: "Home", icon: Home, href: "/", color: "sandy-ochre" },
  { label: "Events", icon: Calendar, href: "/events", color: "slate-blue" },
  { label: "Directory", icon: Users, href: "/directory", color: "sagebrush-green" },
  { label: "Armory", icon: Target, href: "/the-armory", color: "foothills-purple" },
  { label: "Intel", icon: Shield, href: "/intel", color: "high-desert-sage" },
  { label: "Marketplace", icon: Trophy, href: "/marketplace", color: "canyon-clay" },
  { label: "Forums", icon: Settings, href: "https://boisegunclub.com/forums/", color: "info-river" }
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

  // Helper function to check if URL is external
  const isExternalUrl = (url: string) => url.startsWith('http')

  // Helper function to render navigation link
  const renderNavLink = (item: typeof navigationItems[0], className: string, children: React.ReactNode) => {
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

  // Get individual hover classes for each nav item - text color only, no background
  const getHoverClasses = (color: string) => {
    switch(color) {
      case 'sandy-ochre': return 'hover:text-sandy-ochre'
      case 'slate-blue': return 'hover:text-slate-blue'
      case 'sagebrush-green': return 'hover:text-sagebrush-green'
      case 'foothills-purple': return 'hover:text-foothills-purple'
      case 'high-desert-sage': return 'hover:text-high-desert-sage'
      case 'canyon-clay': return 'hover:text-canyon-clay'
      case 'info-river': return 'hover:text-info-river'
      default: return 'hover:text-sandy-ochre'
    }
  }
  
  const getColorBarClass = (color: string) => {
    switch(color) {
      case 'sandy-ochre': return 'bg-sandy-ochre'
      case 'slate-blue': return 'bg-slate-blue'
      case 'sagebrush-green': return 'bg-sagebrush-green'
      case 'foothills-purple': return 'bg-foothills-purple'
      case 'high-desert-sage': return 'bg-high-desert-sage'
      case 'canyon-clay': return 'bg-canyon-clay'
      case 'info-river': return 'bg-info-river'
      default: return 'bg-sandy-ochre'
    }
  }

  const getActiveTextClass = (color: string) => {
    switch(color) {
      case 'sandy-ochre': return 'text-sandy-ochre'
      case 'slate-blue': return 'text-slate-blue'
      case 'sagebrush-green': return 'text-sagebrush-green'
      case 'foothills-purple': return 'text-foothills-purple'
      case 'high-desert-sage': return 'text-high-desert-sage'
      case 'canyon-clay': return 'text-canyon-clay'
      case 'info-river': return 'text-info-river'
      default: return 'text-sandy-ochre'
    }
  }

  return (
    <nav
      className={cn(siteNavigationVariants({ variant, layout, sticky }), className)}
      {...props}
    >
      <div className="w-full max-w-site mx-auto px-[--space-md]">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Logo */}
          {showLogo && (
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-[--space-sm]">
                <div className="w-10 h-10 bg-gradient-to-br from-rusty-orange to-rusty-orange rounded-lg flex flex-col items-center justify-center relative">
                  <div className="text-[10px] font-rajdhani font-black text-dark-chocolate tracking-tight leading-none">
                    TB
                  </div>
                  <div className="text-[10px] font-rajdhani font-black text-dark-chocolate tracking-tight leading-none">
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
            {navigationItems.slice(0, 7).map((item, index) => (
              <React.Fragment key={item.href}>
                {renderNavLink(
                  item,
                  `group relative flex items-center gap-[--space-xs] px-[--space-base] py-[--space-xs] text-sm font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-1 ${
                    pathname === item.href 
                      ? getActiveTextClass(item.color)
                      : `text-muted-foreground ${getHoverClasses(item.color)}`
                  }`,
                  <>
                    <item.icon className="h-3 w-3" />
                    {item.label}
                    
                    {/* Stripe-style center-out underline - thicker and narrower to avoid collisions */}
                    <div className={`absolute bottom-0 left-2 right-2 h-[3px] ${getColorBarClass(item.color)} transition-transform duration-200 origin-center ${
                      pathname === item.href 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </>
                )}
                
                {/* Separator lines between nav items */}
                {index < navigationItems.slice(0, 7).length - 1 && (
                  <div className="h-4 w-px mx-[--space-xs] relative">
                    <div className="absolute inset-0 w-px bg-muted-foreground/30" />
                    <div className="absolute inset-0 w-px bg-card/50 translate-x-px" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Custom Content / Auth Buttons */}
          <div className="hidden md:flex items-center gap-[--space-base]">
            {customContent || (
              <>
                <Button variant="ghost" size="sm" className="shadow-none">
                  Sign In
                </Button>
                <Button variant="ghost" size="sm" className="bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20 shadow-none border border-rusty-orange/30 text-xs">
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
                <X className="h-[--icon-base] w-[--icon-base]" />
              ) : (
                <Menu className="h-[--icon-base] w-[--icon-base]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-[--space-base] relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-rusty-orange/30 before:to-transparent">
            <div className="space-y-[--space-xs]">
              {navigationItems.map((item) => (
                <div key={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {renderNavLink(
                    item,
                    `flex items-center gap-[--space-sm] px-[--space-base] py-[--space-sm] text-body-sm font-medium transition-all duration-150 rounded-[--radius-base] ${
                      pathname === item.href 
                        ? getActiveTextClass(item.color)
                        : `text-muted-foreground ${getHoverClasses(item.color)}`
                    }`,
                    <>
                      <item.icon className="h-[--icon-sm] w-[--icon-sm]" />
                      {item.label}
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-[--space-base] mt-[--space-base] relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-rusty-orange/30 before:to-transparent">
              <div className="flex flex-col gap-[--space-xs]">
                <Button variant="ghost" size="sm" className="justify-start shadow-none">
                  Sign In
                </Button>
                <Button variant="ghost" size="sm" className="justify-start bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20 shadow-none border border-rusty-orange/30 text-xs">
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