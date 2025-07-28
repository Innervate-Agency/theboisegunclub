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
        default: "bg-gunmetal-black text-nickel-white",
        glass: "bg-gunmetal-black/90 backdrop-blur-sm text-nickel-white",
        minimal: "bg-white border-t border-gray-200 text-gunmetal-black"
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
  const textColor = isMinimal ? "text-gunmetal-black" : "text-nickel-white"
  const mutedColor = isMinimal ? "text-case-hardened" : "text-stainless-steel"
  
  return (
    <footer className={cn(siteFooterVariants({ variant }), className)} {...props}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Target className={cn("icon-lg", isMinimal ? "icon-primary" : "text-brass-yellow")} />
                <h3 className={cn("text-xl font-rajdhani font-bold", textColor)}>
                  Boise Gun Club
                </h3>
              </div>
              <p className={cn("text-sm leading-relaxed mb-4", mutedColor)}>
                Treasure Valley's premier firearms community hub. Connecting enthusiasts, 
                businesses, and ranges across the region since 2017.
              </p>
              <div className="space-y-2">
                <div className={cn("flex items-center gap-2 text-sm", mutedColor)}>
                  <MapPin className="icon-sm" />
                  <span>Boise, Idaho</span>
                </div>
                <div className={cn("flex items-center gap-2 text-sm", mutedColor)}>
                  <Phone className="icon-sm" />
                  <span>(208) 555-GUNS</span>
                </div>
                <div className={cn("flex items-center gap-2 text-sm", mutedColor)}>
                  <Mail className="icon-sm" />
                  <span>info@boisegunclub.com</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className={cn("text-lg font-rajdhani font-bold mb-4", textColor)}>
                Quick Links
              </h4>
              <ul className="space-y-2">
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
                        "text-sm hover:text-brass-yellow transition-colors duration-200", 
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
              <h4 className={cn("text-lg font-rajdhani font-bold mb-4", textColor)}>
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "Firearms Training", icon: Shield },
                  { name: "Safety Courses", icon: Target },
                  { name: "Competition Events", icon: Users },
                  { name: "Private Lessons", icon: Calendar }
                ].map((service) => {
                  const Icon = service.icon
                  return (
                    <li key={service.name} className={cn("flex items-center gap-2 text-sm", mutedColor)}>
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
                <h4 className={cn("text-lg font-rajdhani font-bold mb-4", textColor)}>
                  Stay Connected
                </h4>
                <p className={cn("text-sm mb-4", mutedColor)}>
                  Get the latest news, events, and exclusive member benefits.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className={cn(
                        "flex-1 text-sm",
                        isMinimal 
                          ? "bg-white border-gray-300" 
                          : "bg-carbon-fiber border-tactical-gray text-titanium-white"
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubscribing}
                      className="bg-brass-yellow text-gunmetal-black hover:bg-copper-orange font-rajdhani font-semibold"
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
          "border-t py-6", 
          isMinimal ? "border-gray-200" : "border-tactical-gray"
        )}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className={cn("text-sm", mutedColor)}>
              © {new Date().getFullYear()} Boise Gun Club. All rights reserved.
            </div>
            
            {/* Social Links */}
            {showSocial && (
              <div className="flex items-center gap-4">
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
                        "p-2 rounded-lg transition-all duration-200 hover:scale-110",
                        isMinimal 
                          ? "text-case-hardened hover:text-brass-yellow hover:bg-brass-yellow/10" 
                          : "text-stainless-steel hover:text-brass-yellow hover:bg-brass-yellow/10"
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
            <div className="flex items-center gap-4">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs hover:text-brass-yellow transition-colors duration-200", 
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
