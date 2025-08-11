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
        default: "bg-(--color-dark-chocolate) text-(--color-crisp-off-white)",
        glass: "bg-(--color-dark-chocolate)/90 backdrop-blur-sm text-(--color-crisp-off-white)",
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
  const textColor = isMinimal ? "text-(--color-shared-dark)" : "text-(--color-crisp-off-white)"
  const mutedColor = isMinimal ? "text-(--color-sandy-ochre)" : "text-(--color-warm-stone)"
  
  return (
    <footer className={cn(siteFooterVariants({ variant }), className)} {...props}>
      <div className="max-w-site mx-auto px-(--spacing-md)">
        {/* Main Footer Content */}
        <div className="py-(--spacing-3xl)">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-(--spacing-2xl)">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-(--spacing-xs) mb-(--spacing-sm)">
                <Target className={cn("h-(--icon-lg) w-(--icon-lg)", isMinimal ? "icon-primary" : "text-(--color-sandy-ochre)")} />
                <h3 className={cn("text-heading-sm font-rajdhani font-bold", textColor)}>
                  Boise Gun Club
                </h3>
              </div>
              <p className={cn("text-body-sm leading-relaxed mb-(--spacing-base)", mutedColor)}>
                Treasure Valley's premier firearms community hub. Connecting enthusiasts, 
                businesses, and ranges across the region since 2017.
              </p>
              <div className="space-y-(--spacing-xs)">
                <div className={cn("flex items-center gap-(--spacing-xs) text-body-sm", mutedColor)}>
                  <MapPin className="h-(--icon-sm) w-(--icon-sm)" />
                  <span>Boise, Idaho</span>
                </div>
                <div className={cn("flex items-center gap-(--spacing-xs) text-body-sm", mutedColor)}>
                  <Phone className="h-(--icon-sm) w-(--icon-sm)" />
                  <span>(208) 555-GUNS</span>
                </div>
                <div className={cn("flex items-center gap-(--spacing-xs) text-body-sm", mutedColor)}>
                  <Mail className="h-(--icon-sm) w-(--icon-sm)" />
                  <span>info@boisegunclub.com</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className={cn("text-body-lg font-rajdhani font-bold mb-(--spacing-base)", textColor)}>
                Quick Links
              </h4>
              <ul className="space-y-(--spacing-xs)">
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
                        "text-body-sm hover:text-(--color-sandy-ochre) transition-colors duration-200", 
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
              <h4 className={cn("text-body-lg font-rajdhani font-bold mb-(--spacing-base)", textColor)}>
                Services
              </h4>
              <ul className="space-y-(--spacing-xs)">
                {[
                  { name: "Firearms Training", icon: Shield },
                  { name: "Safety Courses", icon: Target },
                  { name: "Competition Events", icon: Users },
                  { name: "Private Lessons", icon: Calendar }
                ].map((service) => {
                  const Icon = service.icon
                  return (
                    <li key={service.name} className={cn("flex items-center gap-(--spacing-xs) text-body-sm", mutedColor)}>
                      <Icon className="h-(--icon-xs) w-(--icon-xs)" />
                      <span>{service.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            
            {/* Newsletter Signup */}
            {showNewsletter && (
              <div>
                <h4 className={cn("text-body-lg font-rajdhani font-bold mb-(--spacing-base)", textColor)}>
                  Stay Connected
                </h4>
                <p className={cn("text-body-sm mb-(--spacing-base)", mutedColor)}>
                  Get the latest news, events, and exclusive member benefits.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-(--spacing-sm)">
                  <div className="flex gap-(--spacing-xs)">
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
                          : "bg-(--color-rich-loam) border-(--color-warm-stone) text-(--color-crisp-off-white)"
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubscribing}
                      className="bg-(--color-sandy-ochre) text-(--color-shared-dark) hover:bg-(--color-rusty-orange) font-rajdhani font-semibold"
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
          "border-t py-(--spacing-md)", 
          isMinimal ? "border-border" : "border-(--color-warm-stone)"
        )}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-(--spacing-base)">
            {/* Copyright */}
            <div className={cn("text-body-sm", mutedColor)}>
              © {new Date().getFullYear()} Boise Gun Club. All rights reserved.
            </div>
            
            {/* Social Links */}
            {showSocial && (
              <div className="flex items-center gap-(--spacing-base)">
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
                        "p-(--spacing-xs) rounded-(--radius-base) transition-all duration-200 hover:scale-110",
                        isMinimal 
                          ? "text-(--color-sandy-ochre) hover:text-(--color-rusty-orange) hover:bg-(--color-sandy-ochre)/10" 
                          : "text-(--color-warm-stone) hover:text-(--color-sandy-ochre) hover:bg-(--color-sandy-ochre)/10"
                      )}
                      title={social.label}
                    >
                      <Icon className="h-(--icon-sm) w-(--icon-sm)" />
                    </a>
                  )
                })}
              </div>
            )}
            
            {/* Legal Links */}
            <div className="flex items-center gap-(--spacing-base)">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-caption hover:text-(--color-sandy-ochre) transition-colors duration-200", 
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
