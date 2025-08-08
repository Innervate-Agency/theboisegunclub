'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  MapPin, Phone, Mail, Globe, Facebook, Instagram, 
  Twitter, Youtube, Target, Shield, Users, Calendar 
} from 'lucide-react'

const siteFooterVariants = cva(
  "w-full mt-auto",
  {
    variants: {
      variant: {
        default: "bg-dark-chocolate text-nickel-white",
        glass: "bg-dark-chocolate/90 backdrop-blur-sm text-nickel-white",
        minimal: "bg-card text-card-foreground"
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
}

export function SiteFooter({
  className,
  variant,
  showNewsletter = true,
  showSocial = true,
  ...props
}: SiteFooterProps) {
  const [newsletterEmail, setNewsletterEmail] = React.useState("")
  const [isSubscribing, setIsSubscribing] = React.useState(false)
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setNewsletterEmail("")
    setIsSubscribing(false)
  }
  
  const isMinimal = variant === "minimal"
  const textColor = isMinimal ? "text-dark-chocolate" : "text-nickel-white"
  const mutedColor = isMinimal ? "text-warning-amber" : "text-stainless-steel"
  
  return (
    <footer className={cn(siteFooterVariants({ variant }), className)} {...props}>
      <div className="max-w-6xl mx-auto px-md">
        {/* Main Footer Content */}
        <div className="py-[var(--space-3xl)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-2xl)]">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-xs mb-[var(--space-sm)]">
                <Target className={cn("icon-lg", isMinimal ? "icon-primary" : "text-sandy-ochre")} />
                <h3 className={cn("text-heading-sm font-rajdhani font-bold", textColor)}>
                  Boise Gun Club
                </h3>
              </div>
              <p className={cn("text-body-sm leading-relaxed mb-[var(--space-base)]", mutedColor)}>
                Treasure Valley's premier firearms community hub. Connecting enthusiasts, 
                businesses, and ranges across the region since 2017.
              </p>
              <div className="space-y-[var(--space-xs)]">
                <div className={cn("flex items-center gap-xs text-body-sm", mutedColor)}>
                  <MapPin className="icon-sm" />
                  <span>Boise, Idaho</span>
                </div>
                <div className={cn("flex items-center gap-xs text-body-sm", mutedColor)}>
                  <Phone className="icon-sm" />
                  <span>(208) 555-GUNS</span>
                </div>
                <div className={cn("flex items-center gap-xs text-body-sm", mutedColor)}>
                  <Mail className="icon-sm" />
                  <span>info@boisegunclub.com</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className={cn("text-body-lg font-rajdhani font-bold mb-[var(--space-base)]", textColor)}>
                Quick Links
              </h4>
              <ul className="space-y-[var(--space-xs)]">
                {[
                  { name: "Business Directory", href: "/directory" },
                  { name: "Events Calendar", href: "/events" },
                  { name: "Training Programs", href: "/training" },
                  { name: "Range Schedules", href: "/ranges" },
                  { name: "Community Forum", href: "/forum" },
                  { name: "Membership", href: "/membership" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className={cn(
                        "text-body-sm hover:text-sandy-ochre transition-colors duration-200", 
                        mutedColor
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className={cn("text-body-lg font-rajdhani font-bold mb-[var(--space-base)]", textColor)}>
                Services
              </h4>
              <ul className="space-y-[var(--space-xs)]">
                {[
                  { name: "Firearms Training", icon: Shield },
                  { name: "Safety Courses", icon: Target },
                  { name: "Competition Events", icon: Users },
                  { name: "Private Lessons", icon: Calendar }
                ].map((service) => {
                  const Icon = service.icon
                  return (
                    <li key={service.name} className={cn("flex items-center gap-xs text-body-sm", mutedColor)}>
                      <Icon className="icon-xs" />
                      <span>{service.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            
            {/* Newsletter Signup */}
            {showNewsletter && (
              <div>
                <h4 className={cn("text-body-lg font-rajdhani font-bold mb-[var(--space-base)]", textColor)}>
                  Stay Connected
                </h4>
                <p className={cn("text-body-sm mb-[var(--space-base)]", mutedColor)}>
                  Get the latest news, events, and exclusive member benefits.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-[var(--space-sm)]">
                  <div className="flex gap-xs">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className={cn(
                        "flex-1 text-body-sm",
                        isMinimal 
                          ? "bg-card border-border" 
                          : "bg-carbon-fiber border-warm-stone text-titanium-white"
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubscribing}
                      className="bg-sandy-ochre text-dark-chocolate hover:bg-rusty-orange font-rajdhani font-semibold"
                    >
                      {isSubscribing ? "..." : "Join"}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={cn(
          "border-t py-md", 
          isMinimal ? "border-border" : "border-warm-stone"
        )}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-base">
            {/* Copyright */}
            <div className={cn("text-body-sm", mutedColor)}>
              © {new Date().getFullYear()} Boise Gun Club. All rights reserved.
            </div>
            
            {/* Social Links */}
            {showSocial && (
              <div className="flex items-center gap-base">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Youtube, label: "YouTube" },
                  { icon: Globe, label: "Website" }
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href="#"
                      className={cn(
                        "p-xs rounded-card transition-all duration-200 hover:scale-110",
                        isMinimal 
                          ? "text-warning-amber hover:text-sandy-ochre hover:bg-sandy-ochre/10" 
                          : "text-stainless-steel hover:text-sandy-ochre hover:bg-sandy-ochre/10"
                      )}
                      title={social.label}
                    >
                      <Icon className="icon-sm" />
                    </a>
                  )
                })}
              </div>
            )}
            
            {/* Legal Links */}
            <div className="flex items-center gap-base">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-caption hover:text-sandy-ochre transition-colors duration-200", 
                    mutedColor
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
