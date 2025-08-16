'use client'

import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { 
  Ticket,
  AddressBook,
  Shield,
  MapTrifold,
  Storefront,
  Users
} from '@phosphor-icons/react'

const heroOverhangVariants = cva(
  "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full pointer-events-none z-30",
  {
    variants: {
      variant: {
        default: "max-w-[1200px]",
        wide: "max-w-7xl",
        full: "max-w-none"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface HeroOverhangSectionProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof heroOverhangVariants> {
  showGlow?: boolean
}

export function HeroOverhangSection({
  className,
  variant,
  showGlow = true,
  ...props
}: HeroOverhangSectionProps) {
  // Navigation items configuration (excluding Home since this is on homepage)
  const navigationItems = [
    { 
      href: "/events", 
      icon: <Ticket className="h-8 w-8" weight="bold" />, 
      label: "Events", 
      colorClass: "nav-events",
      hoverColor: "hover:text-nav-events",
      glowColor: "hover:shadow-nav-events/50"
    },
    { 
      href: "/directory", 
      icon: <AddressBook className="h-8 w-8" weight="bold" />, 
      label: "Directory", 
      colorClass: "nav-directory",
      hoverColor: "hover:text-nav-directory",
      glowColor: "hover:shadow-nav-directory/50"
    },
    { 
      href: "/armory", 
      icon: <Shield className="h-8 w-8" weight="bold" />, 
      label: "Armory", 
      colorClass: "nav-armory",
      hoverColor: "hover:text-nav-armory",
      glowColor: "hover:shadow-nav-armory/50"
    },
    { 
      href: "/intel", 
      icon: <MapTrifold className="h-8 w-8" weight="bold" />, 
      label: "Intel", 
      colorClass: "nav-intel",
      hoverColor: "hover:text-nav-intel",
      glowColor: "hover:shadow-nav-intel/50"
    },
    { 
      href: "/marketplace", 
      icon: <Storefront className="h-8 w-8" weight="bold" />, 
      label: "Marketplace", 
      colorClass: "nav-marketplace",
      hoverColor: "hover:text-nav-marketplace",
      glowColor: "hover:shadow-nav-marketplace/50"
    },
    { 
      href: "/forums", 
      icon: <Users className="h-8 w-8" weight="bold" />, 
      label: "Forums", 
      colorClass: "nav-forums",
      hoverColor: "hover:text-nav-forums",
      glowColor: "hover:shadow-nav-forums/50"
    }
  ]

  return (
    <section
      className={cn(heroOverhangVariants({ variant }), className)}
      {...props}
    >
      <div>
        {/* Piano Key Navigation Container */}
        <div 
          className="mica bg-card rounded-md overflow-hidden pointer-events-auto transition-all duration-500"
          style={{
            boxShadow: 'var(--dynamic-shadow, 0 50px 100px -20px rgba(0, 0, 0, 0.25))'
          } as React.CSSProperties}
        >
          {/* Optional top accent line */}
          <div className="h-1 bg-gradient-to-r from-transparent via-sandy-ochre/50 to-transparent" />
          
          {/* Navigation Buttons */}
          <div className="grid grid-cols-6 h-26">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative overflow-hidden bg-card border-r border-border/10 last:border-r-0 group transition-all duration-500 hover:shadow-inset hover:bg-muted/30 active:scale-95"
                onMouseEnter={(e) => {
                  // Set the dynamic shadow color for the big container - subtle and diffused
                  const container = e.currentTarget.closest('[style*="--dynamic-shadow"]') as HTMLElement
                  if (container) {
                    container.style.setProperty('--dynamic-shadow', `0 50px 120px -40px rgba(var(--${item.colorClass}-rgb), 0.15)`)
                  }
                }}
                onMouseLeave={(e) => {
                  // Reset to default shadow
                  const container = e.currentTarget.closest('[style*="--dynamic-shadow"]') as HTMLElement
                  if (container) {
                    container.style.setProperty('--dynamic-shadow', '0 50px 100px -20px rgba(0, 0, 0, 0.25)')
                  }
                }}
              >
                {/* Colored bottom border on hover */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[7px] transition-all duration-500 z-20"
                  style={{
                    background: `var(--${item.colorClass})`,
                    boxShadow: `0 8px 32px -8px var(--${item.colorClass})`,
                    marginBottom: '-1px'
                  }}
                />
                
                <div className="relative z-10 flex flex-col items-center justify-center h-full py-2 px-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[0.98]">
                  {/* Icon */}
                  <div 
                    className="transition-all duration-300 delay-75 text-muted-foreground/70 group-hover:scale-110 mb-1"
                    style={{
                      color: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      setTimeout(() => {
                        e.currentTarget.style.color = `var(--${item.colorClass})`
                      }, 150)
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ''
                    }}
                  >
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className: "h-8 w-8 transition-colors duration-300"
                    })}
                  </div>
                  
                  {/* Text */}
                  <div 
                    className="text-lg font-rajdhani font-semibold text-card-foreground transition-colors duration-300 delay-100"
                    onMouseEnter={(e) => {
                      setTimeout(() => {
                        e.currentTarget.style.color = `var(--${item.colorClass})`
                      }, 200)
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ''
                    }}
                  >
                    {item.label.toUpperCase()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Optional bottom accent line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
      </div>
      
      {/* Subtle reflection effect underneath */}
      <div 
        className="absolute top-full left-1/2 -translate-x-1/2 w-4/5 h-8 opacity-20 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, 
            rgba(var(--card-rgb), 0.3) 0%, 
            transparent 100%
          )`,
          filter: 'blur(4px)',
          borderRadius: '50%'
        }}
      />
    </section>
  )
}