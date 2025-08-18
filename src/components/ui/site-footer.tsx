'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BrassCounter } from "@/components/ui/brass-counter"
import { Card } from "@/components/ui/card"
import { 
  MapPin, Phone, Envelope, Globe, CrosshairSimple, Shield, Users,
  CaretUp, Question, Heart, Diamond, Ticket, AddressBook, MapTrifold, Storefront
} from '@phosphor-icons/react'
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
  const [newsletterEmail, setNewsletterEmail] = React.useState("")
  const [isSubscribing, setIsSubscribing] = React.useState(false)
  const [showBackToTop, setShowBackToTop] = React.useState(false)
  const pathname = usePathname()
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    // Real newsletter signup - send to community email
    const subject = encodeURIComponent('Newsletter Subscription Request')
    const body = encodeURIComponent(
      `I would like to subscribe to The Boise Gun Club newsletter.\n\nEmail: ${newsletterEmail}\n\nThank you!`
    )
    const mailtoUrl = `mailto:info@boiseguncollective.com?subject=${subject}&body=${body}`
    
    // Open mailto link
    window.location.href = mailtoUrl
    
    // Clear form and show success
    setNewsletterEmail("")
    setIsSubscribing(false)
  }
  
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
    '/': { icon: Diamond, color: 'text-nav-home', accent: 'bg-nav-home' },
    '/events': { icon: Ticket, color: 'text-nav-events', accent: 'bg-nav-events' },
    '/directory': { icon: AddressBook, color: 'text-nav-directory', accent: 'bg-nav-directory' },
    '/armory': { icon: Shield, color: 'text-nav-armory', accent: 'bg-nav-armory' },
    '/intel': { icon: MapTrifold, color: 'text-nav-intel', accent: 'bg-nav-intel' },
    '/marketplace': { icon: Storefront, color: 'text-nav-marketplace', accent: 'bg-nav-marketplace' },
    '/forums': { icon: Users, color: 'text-nav-forums', accent: 'bg-nav-forums' },
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
        {/* Dynamic Idaho Landscape Background */}
        <LandscapeComponent opacity={0.05} animated={true} />
        
        {/* Page-specific accent bar */}
        <div className={cn("h-1 relative z-10", currentPageTheme.accent)} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Newsletter CTA Section */}
          {showNewsletter && (
            <div className="py-12 border-b border-border text-center relative z-10">
              <div className="max-w-2xl mx-auto">
                <h2 className={cn("text-heading-xl font-rajdhani font-bold mb-2", textColor)}>
                  Stay on Target
                </h2>
                <p className={cn("text-body-lg mb-6 font-rajdhani", mutedColor)}>
                  Join 5,000+ members for exclusive updates, events, and insights from the Treasure Valley firearms community.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubscribing}
                    animationType={isSubscribing ? "none" : "arrow"}
                    loading={isSubscribing}
                    className={cn(
                      "font-rajdhani font-semibold group whitespace-nowrap",
                      isDark ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    {isSubscribing ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-lg mt-lg text-body-sm text-muted-foreground font-rajdhani">
                  <span className="flex items-center gap-1">
                    <Users weight="bold" className="h-4 w-4" />
                    5,000+ Members
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield weight="bold" className="h-4 w-4" />
                    100+ Local Partners  
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart weight="bold" className="h-4 w-4" />
                    Est. 2017
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {/* Main Footer Content */}
          <div className="py-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand & Contact */}
              <Card
                variant="tactical"
                tacticalTheme="home"
                showCategoryIcon={true}
                category="contact"
                type="headquarters"
                content="business contact information"
                className="lg:col-span-1 p-lg"
              >
                <div className="mb-6">
                  {React.createElement(currentPageTheme.icon, { 
                    className: `size-12 ${currentPageTheme.color} -rotate-[28deg] mb-4`, 
                    weight: "bold" 
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
                    <Phone weight="bold" className="h-5 w-5" />
                    <span>(208) 555-GUNS</span>
                  </a>
                  <a href="mailto:info@boiseguncollective.com" className={cn("flex items-center gap-3 text-body-base transition-colors font-rajdhani", mutedColor, linkHoverColor)}>
                    <Envelope weight="bold" className="h-5 w-5" />
                    <span>info@boiseguncollective.com</span>
                  </a>
                  <div className={cn("flex items-center gap-3 text-body-base font-rajdhani", mutedColor)}>
                    <MapPin weight="bold" className="h-5 w-5" />
                    <span>Boise, Idaho</span>
                  </div>
                </div>
              </Card>
              
              {/* Quick Links */}
              <Card
                variant="tactical" tacticalTheme="home"
                tacticalTheme="directory"
                showCategoryIcon={true}
                category="navigation"
                type="links"
                content="site navigation menu"
                className="p-lg"
              >
                <h4 className={cn("text-body-lg font-rajdhani font-bold mb-4", textColor)}>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Business Directory", href: "/directory", icon: AddressBook, color: "hover:text-nav-directory" },
                    { name: "Events Calendar", href: "/events", icon: Ticket, color: "hover:text-nav-events" },
                    { name: "Marketplace", href: "/marketplace", icon: Storefront, color: "hover:text-nav-marketplace" },
                    { name: "The Armory", href: "/armory", icon: Shield, color: "hover:text-nav-armory" },
                    { name: "Training Hub", href: "/training", icon: Shield, color: "hover:text-nav-armory" },
                    { name: "Intel Center", href: "/intel", icon: MapTrifold, color: "hover:text-nav-intel" }
                  ].map((link) => {
                    const Icon = link.icon
                    return (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className={cn(
                            "flex items-center gap-3 text-body-base transition-all duration-300 font-rajdhani group", 
                            mutedColor,
                            link.color
                          )}
                        >
                          <Icon 
                            weight="bold" 
                            className={cn(
                              "h-5 w-5 transition-all duration-300",
                              mutedColor,
                              link.color
                            )} 
                          />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </Card>
              
              {/* Resources */}
              <Card
                variant="tactical" tacticalTheme="home"
                tacticalTheme="armory"
                showCategoryIcon={true}
                category="training"
                type="resources"
                content="educational materials and guides"
                className="p-lg"
              >
                <h4 className={cn("text-body-lg font-rajdhani font-bold mb-4", textColor)}>
                  Resources
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Firearms Training", href: "/training", icon: Shield },
                    { name: "Safety Courses", href: "/training?type=safety", icon: CrosshairSimple },
                    { name: "Range Directory", href: "/directory?type=ranges", icon: MapPin },
                    { name: "Guides & Articles", href: "/guides", icon: Globe },
                    { name: "Legal Resources", href: "/intel", icon: Shield },
                    { name: "Equipment Reviews", href: "/armory", icon: Users }
                  ].map((resource) => {
                    const Icon = resource.icon
                    return (
                      <li key={resource.name}>
                        <a 
                          href={resource.href}
                          className={cn(
                            "flex items-center gap-2 text-body-base transition-colors duration-200 group font-rajdhani", 
                            mutedColor,
                            linkHoverColor
                          )}
                        >
                          <Icon weight="bold" className="h-5 w-5 transition-transform group-hover:scale-110" />
                          <span>{resource.name}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </Card>
              
              {/* Support */}
              <Card
                variant="tactical" tacticalTheme="home"
                tacticalTheme="intel"
                showCategoryIcon={true}
                category="support"
                type="help"
                content="customer support and assistance"
                className="p-lg"
              >
                <h4 className={cn("text-body-lg font-rajdhani font-bold mb-4", textColor)}>
                  Support
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Help Center", href: "/help", icon: Question },
                    { name: "Contact Us", href: "/contact", icon: Envelope },
                    { name: "Privacy Policy", href: "/privacy", icon: Shield },
                    { name: "Terms of Service", href: "/terms", icon: Globe },
                    { name: "Cookie Policy", href: "/cookies", icon: Shield },
                    { name: "Accessibility", href: "/accessibility", icon: Heart }
                  ].map((support) => {
                    const Icon = support.icon
                    return (
                      <li key={support.name}>
                        <a 
                          href={support.href}
                          className={cn(
                            "flex items-center gap-2 text-body-base transition-colors duration-200 group font-rajdhani", 
                            mutedColor,
                            linkHoverColor
                          )}
                        >
                          <Icon weight="bold" className="h-5 w-5 transition-transform group-hover:scale-110" />
                          <span>{support.name}</span>
                        </a>
                      </li>
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
          <CaretUp weight="bold" className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  )
}
