'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HoverArrow } from "@/components/ui/micro-animations"
import { 
  MapPin, Phone, Envelope, Globe, FacebookLogo, InstagramLogo,
  XLogo, YoutubeLogo, CrosshairSimple, Shield, Users, Calendar,
  CaretUp, DiscordLogo, Question, Heart
} from '@phosphor-icons/react'

const siteFooterVariants = cva(
  "w-full mt-auto rounded-none shadow-elevated",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-t border-border",
        dark: "bg-dark-chocolate text-crisp-off-white border-t border-border-bark",
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
  showSocial?: boolean
  currentPage?: 'home' | 'events' | 'directory' | 'armory' | 'intel' | 'marketplace' | 'forums'
}

export function SiteFooter({
  className,
  variant,
  showNewsletter = true,
  showSocial = true,
  currentPage = 'home',
  ...props
}: SiteFooterProps) {
  const [newsletterEmail, setNewsletterEmail] = React.useState("")
  const [isSubscribing, setIsSubscribing] = React.useState(false)
  const [showBackToTop, setShowBackToTop] = React.useState(false)
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 1000))
    
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
  
  // Page-specific accent colors
  const getAccentColor = () => {
    const colorMap = {
      home: 'bg-[var(--nav-home)]',
      events: 'bg-[var(--nav-events)]', 
      directory: 'bg-[var(--nav-directory)]',
      armory: 'bg-[var(--nav-armory)]',
      intel: 'bg-[var(--nav-intel)]',
      marketplace: 'bg-[var(--nav-marketplace)]',
      forums: 'bg-[var(--nav-forums)]'
    }
    return colorMap[currentPage] || colorMap.home
  }
  
  const isDark = variant === "dark"
  const textColor = "text-foreground"
  const mutedColor = "text-muted-foreground"
  const linkHoverColor = isDark ? "hover:text-rusty-orange" : "hover:text-slate-blue"
  
  return (
    <>
      <footer className={cn(siteFooterVariants({ variant }), className)} {...props}>
        {/* Page-specific accent bar */}
        <div className={cn("h-1", getAccentColor())} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter CTA Section */}
          {showNewsletter && (
            <div className="py-12 border-b border-border text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className={cn("text-2xl font-rajdhani font-bold mb-2", textColor)}>
                  Stay on Target
                </h2>
                <p className={cn("text-lg mb-6 font-rajdhani", mutedColor)}>
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
                    className={cn(
                      "font-rajdhani font-semibold group whitespace-nowrap",
                      isDark ? "bg-rusty-orange text-shared-dark hover:bg-ember-glow" : "bg-slate-blue text-white hover:bg-slate-blue/90"
                    )}
                  >
                    {isSubscribing ? "Subscribing..." : "Subscribe"}
                    {!isSubscribing && <HoverArrow className="ml-2 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground font-rajdhani">
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
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Brand & Contact */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <CrosshairSimple weight="bold" className={cn("h-8 w-8", isDark ? "text-sandy-ochre" : "text-slate-blue")} />
                  <h3 className={cn("text-xl font-rajdhani font-bold", textColor)}>
                    BGC
                  </h3>
                </div>
                <p className={cn("text-sm leading-relaxed mb-6 font-rajdhani", mutedColor)}>
                  Treasure Valley's premier firearms community hub. Connecting enthusiasts, businesses, and ranges across the region.
                </p>
                <div className="space-y-3">
                  <a href="tel:+12085556867" className={cn("flex items-center gap-3 text-sm transition-colors font-rajdhani", mutedColor, linkHoverColor)}>
                    <Phone weight="bold" className="h-4 w-4" />
                    <span>(208) 555-GUNS</span>
                  </a>
                  <a href="mailto:info@boiseguncollective.com" className={cn("flex items-center gap-3 text-sm transition-colors font-rajdhani", mutedColor, linkHoverColor)}>
                    <Envelope weight="bold" className="h-4 w-4" />
                    <span>info@boiseguncollective.com</span>
                  </a>
                  <div className={cn("flex items-center gap-3 text-sm font-rajdhani", mutedColor)}>
                    <MapPin weight="bold" className="h-4 w-4" />
                    <span>Boise, Idaho</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className={cn("text-base font-rajdhani font-bold mb-4", textColor)}>
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {[
                    { name: "Business Directory", href: "/directory" },
                    { name: "Events Calendar", href: "/events" },
                    { name: "Marketplace", href: "/marketplace" },
                    { name: "The Armory", href: "/the-armory" },
                    { name: "Training Hub", href: "/training" },
                    { name: "Intel Center", href: "/intel" }
                  ].map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className={cn(
                          "text-sm transition-colors duration-200 font-rajdhani", 
                          mutedColor,
                          linkHoverColor
                        )}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Resources */}
              <div>
                <h4 className={cn("text-base font-rajdhani font-bold mb-4", textColor)}>
                  Resources
                </h4>
                <ul className="space-y-2">
                  {[
                    { name: "Firearms Training", href: "/training", icon: Shield },
                    { name: "Safety Courses", href: "/training?type=safety", icon: CrosshairSimple },
                    { name: "Range Directory", href: "/directory?type=ranges", icon: MapPin },
                    { name: "Guides & Articles", href: "/guides", icon: Globe },
                    { name: "Legal Resources", href: "/intel", icon: Shield },
                    { name: "Equipment Reviews", href: "/the-armory", icon: Users }
                  ].map((resource) => {
                    const Icon = resource.icon
                    return (
                      <li key={resource.name}>
                        <a 
                          href={resource.href}
                          className={cn(
                            "flex items-center gap-2 text-sm transition-colors duration-200 group font-rajdhani", 
                            mutedColor,
                            linkHoverColor
                          )}
                        >
                          <Icon weight="bold" className="h-4 w-4 transition-transform group-hover:scale-110" />
                          <span>{resource.name}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
              {/* Community */}
              <div>
                <h4 className={cn("text-base font-rajdhani font-bold mb-4", textColor)}>
                  Community
                </h4>
                <ul className="space-y-2">
                  {[
                    { name: "Forums", href: "/forums", icon: Users },
                    { name: "Discord Server", href: "#", icon: DiscordLogo },
                    { name: "Events Calendar", href: "/events", icon: Calendar },
                    { name: "Member Directory", href: "/directory?type=members", icon: Users },
                    { name: "Competitions", href: "/events?type=competition", icon: CrosshairSimple },
                    { name: "Partnerships", href: "/partnerships", icon: Heart }
                  ].map((community) => {
                    const Icon = community.icon
                    return (
                      <li key={community.name}>
                        <a 
                          href={community.href}
                          className={cn(
                            "flex items-center gap-2 text-sm transition-colors duration-200 group font-rajdhani", 
                            mutedColor,
                            linkHoverColor
                          )}
                        >
                          <Icon weight="bold" className="h-4 w-4 transition-transform group-hover:scale-110" />
                          <span>{community.name}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
              {/* Support */}
              <div>
                <h4 className={cn("text-base font-rajdhani font-bold mb-4", textColor)}>
                  Support
                </h4>
                <ul className="space-y-2">
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
                            "flex items-center gap-2 text-sm transition-colors duration-200 group font-rajdhani", 
                            mutedColor,
                            linkHoverColor
                          )}
                        >
                          <Icon weight="bold" className="h-4 w-4 transition-transform group-hover:scale-110" />
                          <span>{support.name}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className={cn("text-sm font-rajdhani font-medium", mutedColor)}>
                Copyright © 2025 - Boise Gun Collective, LLC - All rights reserved
              </div>
              
              {/* Social Links */}
              {showSocial && (
                <div className="flex items-center gap-4">
                  {[
                    { icon: FacebookLogo, label: "Facebook", href: "#" },
                    { icon: InstagramLogo, label: "Instagram", href: "#" },
                    { icon: XLogo, label: "X (Twitter)", href: "#" },
                    { icon: YoutubeLogo, label: "YouTube", href: "#" },
                    { icon: DiscordLogo, label: "Discord", href: "#" }
                  ].map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={cn(
                          "p-2 rounded-sm transition-all duration-200 hover:scale-110 group",
                          mutedColor,
                          linkHoverColor,
                          "hover:bg-muted/50"
                        )}
                        title={social.label}
                      >
                        <Icon weight="bold" className="h-5 w-5 transition-transform group-hover:rotate-6" />
                      </a>
                    )
                  })}
                </div>
              )}
              
              {/* Legal Links */}
              <div className="flex items-center gap-4 text-xs font-rajdhani">
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
              ? "bg-rusty-orange text-shared-dark hover:bg-ember-glow" 
              : "bg-slate-blue text-white hover:bg-slate-blue/90"
          )}
          title="Back to top"
        >
          <CaretUp weight="bold" className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  )
}
