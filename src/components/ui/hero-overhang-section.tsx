'use client'

import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { BanknotesIcon, BookOpenIcon, BuildingStorefrontIcon, ChatBubbleBottomCenterTextIcon, IdentificationIcon, MapIcon, PlusCircleIcon, ShieldCheckIcon, TicketIcon, UsersIcon } from '@heroicons/react/24/outline';

const heroOverhangVariants = cva(
  "relative mx-auto w-full",
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
      icon: <TicketIcon className="h-8 w-8" />, 
      label: "Events", 
      colorClass: "nav-events",
      hoverColor: "hover:text-nav-events",
      glowColor: "hover:shadow-nav-events/50"
    },
    { 
      href: "/directory", 
      icon: <BookOpenIcon className="h-8 w-8" />, 
      label: "Directory", 
      colorClass: "nav-directory",
      hoverColor: "hover:text-nav-directory",
      glowColor: "hover:shadow-nav-directory/50"
    },
    { 
      href: "/armory", 
      icon: <ShieldCheckIcon className="h-8 w-8" />, 
      label: "Armory", 
      colorClass: "nav-armory",
      hoverColor: "hover:text-nav-armory",
      glowColor: "hover:shadow-nav-armory/50"
    },
    { 
      href: "/intel", 
      icon: <MapIcon className="h-8 w-8" />, 
      label: "Intel", 
      colorClass: "nav-intel",
      hoverColor: "hover:text-nav-intel",
      glowColor: "hover:shadow-nav-intel/50"
    },
    { 
      href: "/buysell", 
      icon: <BuildingStorefrontIcon className="h-8 w-8" />, 
      label: "Buy & Sell", 
      colorClass: "nav-buysell",
      hoverColor: "hover:text-nav-buysell",
      glowColor: "hover:shadow-nav-buysell/50"
    },
    { 
      href: "/forums", 
      icon: <UsersIcon className="h-8 w-8" />, 
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
          className="overflow-hidden transition-all duration-500"
        >
          {/* Top accent line for paper effect */}
          <div className="h-1 bg-gradient-to-r from-transparent via-sandy-ochre/30 to-transparent" />
          
          {/* Navigation Buttons - Responsive scaling while maintaining single row */}
          <div className="grid grid-cols-6 h-16 sm:h-20 md:h-24 lg:h-26">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative overflow-hidden bg-card border-r border-border/10 last:border-r-0 group transition-all duration-500 hover:shadow-inset hover:bg-muted/30 active:scale-95"
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
                
                <div className="relative z-10 flex flex-col items-center justify-center h-full py-1 px-1 sm:py-2 sm:px-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[0.98]">
                  {/* Icon - Responsive sizing */}
                  <div 
                    className="transition-all duration-300 delay-75 text-muted-foreground/70 group-hover:scale-110 mb-0.5 sm:mb-1"
                    style={{
                      color: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      setTimeout(() => {
                        if (e.currentTarget && e.currentTarget.style) {
                          e.currentTarget.style.color = `var(--${item.colorClass})`
                        }
                      }, 150)
                    }}
                    onMouseLeave={(e) => {
                      if (e.currentTarget && e.currentTarget.style) {
                        e.currentTarget.style.color = ''
                      }
                    }}
                  >
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className: "h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 transition-colors duration-300"
                    })}
                  </div>
                  
                  {/* Text - Responsive typography */}
                  <div 
                    className="text-xs sm:text-sm md:text-base lg:text-lg font-rajdhani font-semibold text-card-foreground transition-colors duration-300 delay-100 text-center leading-tight"
                    onMouseEnter={(e) => {
                      setTimeout(() => {
                        if (e.currentTarget && e.currentTarget.style) {
                          e.currentTarget.style.color = `var(--${item.colorClass})`
                        }
                      }, 200)
                    }}
                    onMouseLeave={(e) => {
                      if (e.currentTarget && e.currentTarget.style) {
                        e.currentTarget.style.color = ''
                      }
                    }}
                  >
                    {item.label.toUpperCase()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Removed bottom accent for inverted U effect */}
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