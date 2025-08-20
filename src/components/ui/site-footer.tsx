'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { FooterStats } from "@/components/ui/footer-stats"
import { FooterNewsletter } from "@/components/ui/footer-newsletter"
import { BrassCounter } from "@/components/ui/brass-counter"
import { Card } from "@/components/ui/card"
import {
  MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ViewfinderCircleIcon, 
  ShieldCheckIcon, UsersIcon, ChevronUpIcon, QuestionMarkCircleIcon, 
  HeartIcon, CubeTransparentIcon, TicketIcon, BookOpenIcon, MapIcon, BuildingStorefrontIcon
} from '@heroicons/react/24/outline'
import { 
  DesertMesaSVG, BoiseFoothillsSVG, SouthBoiseDesertSVG, MountainPineSVG,
  HellsCanyonSVG, SnakeRiverCanyonSVG, CascadeSawtoothsSVG
} from '@/components/ui/idaho-landscapes'

const siteFooterVariants = cva(
  "w-full mt-auto rounded-none shadow-elevated",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-t border-border",
        dark: "bg-background text-foreground border-t border-border",
        minimal: "bg-card text-card-foreground border-t border-border"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface SiteFooterProps 
  extends React.ComponentProps<"footer">,
    VariantProps<typeof siteFooterVariants> {
  showNewsletter?: boolean
  currentPage?: 'home' | 'events' | 'directory' | 'armory' | 'intel' | 'marketplace' | 'forums' | 'training' | 'guides'
}

export function SiteFooter({
  className,
  variant,
  showNewsletter = true,
  currentPage = 'home',
  ...props
}: SiteFooterProps) {
  const [showBackToTop, setShowBackToTop] = React.useState(false)
  const pathname = usePathname()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  // Show back to top when scrolled down
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pageThemeMap = {
    '/': { icon: CubeTransparentIcon, color: 'text-nav-home', accent: 'bg-nav-home' },
    '/events': { icon: TicketIcon, color: 'text-nav-events', accent: 'bg-nav-events' },
    '/directory': { icon: BookOpenIcon, color: 'text-nav-directory', accent: 'bg-nav-directory' },
    '/armory': { icon: ShieldCheckIcon, color: 'text-nav-armory', accent: 'bg-nav-armory' },
    '/intel': { icon: MapIcon, color: 'text-nav-intel', accent: 'bg-nav-intel' },
    '/marketplace': { icon: BuildingStorefrontIcon, color: 'text-nav-marketplace', accent: 'bg-nav-marketplace' },
    '/forums': { icon: UsersIcon, color: 'text-nav-forums', accent: 'bg-nav-forums' },
  }

  const currentPageTheme = pageThemeMap[pathname as keyof typeof pageThemeMap] || pageThemeMap['/']
  
  const isDark = variant === "dark"
  const textColor = "text-foreground"
  const mutedColor = "text-muted-foreground"
  const linkHoverColor = "hover:text-primary"
  
  // Page-specific Idaho landscape mapping
  const pageLandscapeMap = {
    'home': BoiseFoothillsSVG,
    'events': SnakeRiverCanyonSVG,
    'directory': SouthBoiseDesertSVG,
    'armory': CascadeSawtoothsSVG,
    'intel': HellsCanyonSVG,
    'marketplace': DesertMesaSVG,
    'forums': MountainPineSVG,
    'training': MountainPineSVG,
    'guides': BoiseFoothillsSVG
  }
  
  // Get the appropriate landscape component for current page
  const LandscapeComponent = pageLandscapeMap[currentPage] || BoiseFoothillsSVG
  
  return (
    <>
      <footer className={cn(siteFooterVariants({ variant }), "relative overflow-hidden", className)} {...props}>
        {/* Page-specific accent bar - Full width */}
        <div className={cn("h-1 w-full relative z-10", currentPageTheme.accent)} />
        
        <div className="max-w-[1440px] mx-auto">
          {/* Dynamic Idaho Landscape Background */}
          <LandscapeComponent opacity={0.05} animated={true} />
          
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Newsletter and Navigation Section */}
          {showNewsletter && (
            <div className="py-20 border-b border-border relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Left Column: Stats */}
                <div>
                  <FooterStats />
                </div>
                
                {/* Right Column: Newsletter and Search */}
                <div>
                  <FooterNewsletter />
                </div>
                
              </div>
            </div>
          )}
          
          {/* Main Footer Content */}
          <div className="py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Brand & Contact */}
              <Card
                variant="tactical"
                tacticalTheme="home"
                showCategoryIcon={true}
                category="contact"
                type="headquarters"
                content="business contact information"
                className="lg:col-span-1 p-md group"
              >
                <div className="mb-6">
                  {React.createElement(currentPageTheme.icon, { 
                    className: `size-12 ${currentPageTheme.color} -rotate-[28deg] mb-4`
                  })}
                  <div className="text-heading-xl font-rajdhani text-card-foreground leading-none uppercase">
                    <span className="font-[800]">The Boise</span> <span className="font-[300]">Gun Club</span>
                  </div>
                  <p className="text-body-base font-rajdhani font-[400] text-muted-foreground leading-none lowercase tracking-wider">
                    Treasure Valley Collective
                  </p>
                </div>
                <p className={cn("text-body-base leading-relaxed mb-6 font-rajdhani", mutedColor)}>
                  Treasure Valley's premier firearms community hub. Connecting enthusiasts, businesses, and ranges across the region.
                </p>
                <div className="space-y-3">
                  <a href="tel:+12085556867" className={cn("flex items-center gap-3 text-body-base transition-colors font-rajdhani", mutedColor, linkHoverColor)}>
                    <PhoneIcon className="h-5 w-5" />
                    <span>(208) 555-GUNS</span>
                  </a>
                  <a href="mailto:info@boiseguncollective.com" className={cn("flex items-center gap-3 text-body-base transition-colors font-rajdhani", mutedColor, linkHoverColor)}>
                    <EnvelopeIcon className="h-5 w-5" />
                    <span>info@boiseguncollective.com</span>
                  </a>
                  <div className={cn("flex items-center gap-3 text-body-base font-rajdhani", mutedColor)}>
                    <MapPinIcon className="h-5 w-5" />
                    <span>Boise, Idaho</span>
                  </div>
                </div>
              </Card>
              
              {/* Quick Links */}
              <Card
                variant="tactical"
                tacticalTheme="directory"
                showCategoryIcon={true}
                category="navigation"
                type="links"
                content="site navigation menu"
                className="p-md group surface-handled"
              >
                <h4 className={cn("text-body-lg font-rajdhani font-bold mb-4", textColor)}>
                  Quick Links
                </h4>
                <ul className="space-y-0">
                  {[
                    { name: "Business Directory", href: "/directory", icon: BookOpenIcon, color: "hover:text-nav-directory" },
                    { name: "Events Calendar", href: "/events", icon: TicketIcon, color: "hover:text-nav-events" },
                    { name: "Marketplace", href: "/marketplace", icon: BuildingStorefrontIcon, color: "hover:text-nav-marketplace" },
                    { name: "The Armory", href: "/armory", icon: ShieldCheckIcon, color: "hover:text-nav-armory" },
                    { name: "Training Hub", href: "/training", icon: ShieldCheckIcon, color: "hover:text-nav-armory" },
                    { name: "Intel Center", href: "/intel", icon: MapIcon, color: "hover:text-nav-intel" }
                  ].map((link, index, array) => {
                    const Icon = link.icon
                    return (
                      <React.Fragment key={link.name}>
                        <li>
                          <a 
                            href={link.href}
                            className={cn(
                              "flex items-center gap-3 text-body-base transition-all duration-300 font-rajdhani group py-2", 
                              mutedColor,
                              link.color
                            )}
                          >
                            <Icon 
                              className={cn(
                                "h-5 w-5 transition-all duration-300",
                                mutedColor,
                                link.color
                              )} 
                            />
                            <span>{link.name}</span>
                          </a>
                        </li>
                        
                        {/* Elegant divider between items (same as navbar) */}
                        {index < array.length - 1 && (
                          <li className="flex justify-center py-1">
                            <div className="w-4 h-px mx-xs relative">
                              <div className="absolute inset-0 h-px bg-muted-foreground/20" />
                              <div className="absolute inset-0 h-px bg-card/30 translate-y-px" />
                            </div>
                          </li>
                        )}
                      </React.Fragment>
                    )
                  })}
                </ul>
              </Card>
              
              {/* Resources */}
              <Card
                variant="tactical"
                tacticalTheme="armory"
                showCategoryIcon={true}
                category="training"
                type="resources"
                content="educational materials and guides"
                className="p-md group tactical-worn"
              >
                <h4 className={cn("text-body-lg font-rajdhani font-bold mb-4", textColor)}>
                  Resources
                </h4>
                <ul className="space-y-0">
                  {[
                    { name: "Firearms Training", href: "/training", icon: ShieldCheckIcon, color: "hover:text-nav-armory" },
                    { name: "Safety Courses", href: "/training?type=safety", icon: ViewfinderCircleIcon, color: "hover:text-nav-armory" },
                    { name: "Range Directory", href: "/directory?type=ranges", icon: MapPinIcon, color: "hover:text-nav-directory" },
                    { name: "Guides & Articles", href: "/guides", icon: GlobeAltIcon, color: "hover:text-nav-intel" },
                    { name: "Legal Resources", href: "/intel", icon: ShieldCheckIcon, color: "hover:text-nav-intel" },
                    { name: "Equipment Reviews", href: "/armory", icon: UsersIcon, color: "hover:text-nav-armory" }
                  ].map((resource, index, array) => {
                    const Icon = resource.icon
                    return (
                      <React.Fragment key={resource.name}>
                        <li>
                          <a 
                            href={resource.href}
                            className={cn(
                              "flex items-center gap-3 text-body-base transition-all duration-300 font-rajdhani group py-2", 
                              mutedColor,
                              resource.color
                            )}
                          >
                            <Icon 
                              className={cn(
                                "h-5 w-5 transition-all duration-300",
                                mutedColor,
                                resource.color
                              )} 
                            />
                            <span>{resource.name}</span>
                          </a>
                        </li>
                        
                        {/* Elegant divider between items (same as navbar) */}
                        {index < array.length - 1 && (
                          <li className="flex justify-center py-1">
                            <div className="w-4 h-px mx-xs relative">
                              <div className="absolute inset-0 h-px bg-muted-foreground/20" />
                              <div className="absolute inset-0 h-px bg-card/30 translate-y-px" />
                            </div>
                          </li>
                        )}
                      </React.Fragment>
                    )
                  })}
                </ul>
              </Card>
              
              {/* Support */}
              <Card
                variant="tactical"
                tacticalTheme="intel"
                showCategoryIcon={true}
                category="support"
                type="help"
                content="customer support and assistance"
                className="p-md group surface-base"
              >
                <h4 className={cn("text-body-lg font-rajdhani font-bold mb-4", textColor)}>
                  Support
                </h4>
                <ul className="space-y-0">
                  {[
                    { name: "Help Center", href: "/help", icon: QuestionMarkCircleIcon, color: "hover:text-nav-intel" },
                    { name: "Contact Us", href: "/contact", icon: EnvelopeIcon, color: "hover:text-nav-home" },
                    { name: "Privacy Policy", href: "/privacy", icon: ShieldCheckIcon, color: "hover:text-nav-intel" },
                    { name: "Terms of Service", href: "/terms", icon: GlobeAltIcon, color: "hover:text-nav-intel" },
                    { name: "Cookie Policy", href: "/cookies", icon: ShieldCheckIcon, color: "hover:text-nav-intel" },
                    { name: "Accessibility", href: "/accessibility", icon: HeartIcon, color: "hover:text-nav-home" }
                  ].map((support, index, array) => {
                    const Icon = support.icon
                    return (
                      <React.Fragment key={support.name}>
                        <li>
                          <a 
                            href={support.href}
                            className={cn(
                              "flex items-center gap-3 text-body-base transition-all duration-300 font-rajdhani group py-2", 
                              mutedColor,
                              support.color
                            )}
                          >
                            <Icon 
                              className={cn(
                                "h-5 w-5 transition-all duration-300",
                                mutedColor,
                                support.color
                              )} 
                            />
                            <span>{support.name}</span>
                          </a>
                        </li>
                        
                        {/* Elegant divider between items (same as navbar) */}
                        {index < array.length - 1 && (
                          <li className="flex justify-center py-1">
                            <div className="w-4 h-px mx-xs relative">
                              <div className="absolute inset-0 h-px bg-muted-foreground/20" />
                              <div className="absolute inset-0 h-px bg-card/30 translate-y-px" />
                            </div>
                          </li>
                        )}
                      </React.Fragment>
                    )
                  })}
                </ul>
              </Card>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border py-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-lg">
              {/* Copyright with Brass Counter */}
              <div className="flex flex-col sm:flex-row items-center gap-sm">
                <div className={cn("text-body-base font-rajdhani font-medium", mutedColor)}>
                  Copyright © 2025 - Boise Gun Collective, LLC - All rights reserved
                </div>
                <BrassCounter />
              </div>
              
              {/* Legal Links */}
              <div className="flex items-center gap-md text-body-sm font-rajdhani">
                {[
                  { name: "Privacy", href: "/privacy" },
                  { name: "Terms", href: "/terms" },
                  { name: "Help", href: "/help" }
                ].map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a 
                      href={link.href}
                      className={cn(
                        "transition-colors duration-200", 
                        mutedColor,
                        linkHoverColor
                      )}
                    >
                      {link.name}
                    </a>
                    {index < 2 && <span className="text-muted-foreground">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </footer>
      
      {/* Back to Top FAB */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-commanding transition-all duration-300",
            "hover:shadow-hero hover:scale-110 group",
            isDark 
              ? "bg-primary text-primary-foreground hover:bg-primary/90" 
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          title="Back to top"
        >
          <ChevronUpIcon className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  )
}
