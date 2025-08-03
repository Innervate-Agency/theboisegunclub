"use client"

import React, { useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const brandShowcaseVariants = cva(
  "relative w-full",
  {
    variants: {
      variant: {
        default: "bg-background",
        subtle: "bg-muted/20",
        branded: "bg-gradient-to-br from-background via-muted/10 to-background",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface BrandShowcaseProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof brandShowcaseVariants> {
  showcases?: {
    companyName: string
    logo: React.ReactNode
    stats: { label: string; value: string }[]
    heroImage: string | React.ReactNode
    overlayTitle: string
    overlayDescription: string
    gradientColor: 'blue' | 'orange' | 'green' | 'purple' | 'cobalt'
  }[]
  partnerLogos?: { name: string; logo: React.ReactNode }[]
}

// Default TBGC showcases - simplified for troubleshooting
const defaultShowcases = [
  {
    companyName: "MOUNTAIN WEST FIREARMS",
    logo: "MWF" as React.ReactNode,
    stats: [
      { label: "Locations across Idaho", value: "8" },
      { label: "Satisfied customers", value: "10,000+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Mountain West Firearms built Idaho's premier firearms network",
    overlayDescription: "From a single shop to 8 locations serving the entire state",
    gradientColor: 'blue' as const
  }
]

const defaultPartnerLogos = [
  { name: "Glock", logo: "GLOCK" as React.ReactNode },
  { name: "Smith & Wesson", logo: "S&W" as React.ReactNode },
  { name: "Ruger", logo: "RUGER" as React.ReactNode }
]

export function BrandCarousel({ 
  className, 
  variant,
  showcases = defaultShowcases,
  partnerLogos = defaultPartnerLogos,
  ...props 
}: BrandShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcases.length)
  }
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcases.length) % showcases.length)
  }
  
  const currentShowcase = showcases[currentIndex]
  
  const gradientClasses = {
    blue: 'bg-ayu-blue/50',
    orange: 'bg-copper-orange/50',
    green: 'bg-ayu-green/50', 
    purple: 'bg-ayu-purple/50',
    cobalt: 'bg-ayu-cobalt/50'
  }
  
  return (
    <div className={cn(brandShowcaseVariants({ variant }), className)} {...props}>
      {/* Main layout container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-[var(--space-2xl)] items-center">
          
          {/* Left stats panel - OUTSIDE the card, changes with carousel */}
          <div className="lg:col-span-1 space-y-[var(--space-lg)]">
            <div className="space-y-[var(--space-sm)]">
              {currentShowcase.stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-[var(--space-sm)]">
                  <div className="text-heading-lg font-bold text-card-foreground">
                    {stat.value}
                  </div>
                  <div className="text-body-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-[var(--space-sm)]">
              <div className="text-body-sm font-medium text-muted-foreground mb-[var(--space-xs)]">
                Products used
              </div>
              <div className="space-y-[var(--space-xs)]">
                <div className="flex items-center gap-[var(--space-xs)]">
                  <div className="w-3 h-3 rounded bg-primary" />
                  <span className="text-body-sm text-card-foreground">Range Management</span>
                </div>
                <div className="flex items-center gap-[var(--space-xs)]">
                  <div className="w-3 h-3 rounded bg-copper-orange" />
                  <span className="text-body-sm text-card-foreground">Safety Training</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main showcase card - takes up 3/4 of the width */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-overlay overflow-hidden shadow-elevated h-96">
              {/* Solid color background - 50% opacity */}
              <div className={cn(
                "absolute inset-0 transition-colors duration-500",
                gradientClasses[currentShowcase.gradientColor]
              )} />
              
              {/* Hero content area */}
              <div className="absolute inset-0 flex items-center justify-center">
                {typeof currentShowcase.heroImage === 'string' ? (
                  <img 
                    src={currentShowcase.heroImage} 
                    alt={currentShowcase.companyName}
                    className="w-full h-full object-cover opacity-30"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {currentShowcase.heroImage}
                  </div>
                )}
              </div>
              
              {/* Company logo */}
              <div className="absolute top-[var(--space-lg)] right-[var(--space-lg)] bg-black/20 backdrop-blur-sm rounded-card p-[var(--space-sm)]">
                {currentShowcase.logo}
              </div>
              
              {/* Overlay text content - WHITE TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-[var(--space-2xl)]">
                <h2 className="text-heading-md md:text-heading-lg font-rajdhani font-bold mb-[var(--space-sm)] leading-tight text-card-foreground">
                  {currentShowcase.overlayTitle}
                </h2>
                <p className="text-card-foreground/90 mb-[var(--space-sm)] text-body">
                  {currentShowcase.overlayDescription}
                </p>
                <button className="text-body-sm font-medium text-card-foreground hover:text-card-foreground/80 transition-colors">
                  Read their story →
                </button>
              </div>
            </div>
        
        {/* Navigation arrows */}
        {showcases.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-[var(--space-sm)] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md hover:shadow-elevated transition-shadow flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-[var(--space-sm)] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md hover:shadow-elevated transition-shadow flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
        
        {/* Dots indicator */}
        {showcases.length > 1 && (
          <div className="flex justify-center gap-[var(--space-xs)] mt-[var(--space-lg)]">
            {showcases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
        )}
          </div>
        </div>
      </div>
      
      {/* Partner logos strip */}
      <div className="mt-[var(--space-4xl)] text-center">
        <p className="text-body-sm text-muted-foreground mb-[var(--space-2xl)]">
          Trusted by industry leaders
        </p>
        <div className="flex items-center justify-center gap-[var(--space-3xl)] opacity-60 hover:opacity-80 transition-opacity">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="text-muted-foreground">
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}