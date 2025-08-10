"use client"

import React, { useState, useEffect } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Target, Shield, Settings, Award, Zap, Users } from 'lucide-react'

const brandShowcaseVariants = cva(
  "relative w-full",
  {
    variants: {
      variant: {
        default: "bg-background",
        subtle: "bg-muted/20",
        branded: "bg-gradient-to-br from-background via-muted/10 to-background",
        "launch-phase": "bg-transparent",
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
    gradientColor: 'blue' | 'teal' | 'green' | 'purple' | 'red' | 'yellow'
    productsUsed?: { name: string; icon: React.ReactNode; color: string }[]
  }[]
  partnerLogos?: { name: string; icon: React.ComponentType<any>; gradientColor: 'blue' | 'teal' | 'green' | 'purple' | 'red' | 'yellow' }[]
}

import { defaultShowcases, defaultPartnerLogos } from '@/lib/data/brand-carousel-data';

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
  
  // Auto-switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [showcases.length])
  
  const currentShowcase = showcases[currentIndex]
  
  const gradientClasses = {
    blue: 'bg-slate-blue/70',
    teal: 'bg-ayu-teal/70',
    green: 'bg-ayu-green/70', 
    purple: 'bg-ayu-purple/70',
    red: 'bg-ayu-red/70',
    yellow: 'bg-ayu-yellow/70'
  }
  
  const borderClasses = {
    blue: 'border-slate-blue/60',
    teal: 'border-ayu-teal/60',
    green: 'border-ayu-green/60',
    purple: 'border-ayu-purple/60',
    red: 'border-ayu-red/60',
    yellow: 'border-ayu-yellow/60'
  }
  
  const backgroundImages = [
    '/images/PixelHeat/halfton-heat-FLAT-01.webp',
    '/images/PixelHeat/halfton-heat-FLAT-02.webp',
    '/images/PixelHeat/halfton-heat-FLAT-03.webp',
    '/images/PixelHeat/halfton-heat-FLAT-04.webp',
    '/images/PixelHeat/halfton-heat-FLAT-05.webp',
    '/images/PixelHeat/halfton-heat-FLAT-06.webp'
  ]
  
  return (
    <div className={cn(brandShowcaseVariants({ variant }), className)} {...props}>
      {/* Main layout container */}
      <div className="relative max-w-site mx-auto">
        <div className="grid lg:grid-cols-4 gap-[--space-2xl] items-center">
          
          {/* Left stats panel - OUTSIDE the card, changes with carousel */}
          <div className="lg:col-span-1 space-y-[--space-lg]">
            <div className="space-y-[--space-sm]">
              {currentShowcase.stats.map((stat, index) => (
                <div key={index} className={cn(
                  "border-l-2 pl-4 transition-colors duration-500",
                  borderClasses[currentShowcase.gradientColor]
                )}>
                  <div className="text-heading-lg font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-body-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {currentShowcase.productsUsed && (
              <div className="pt-[--space-sm]">
                <div className="text-body-sm font-medium text-muted-foreground mb-[--space-xs]">
                  Products used
                </div>
                <div className="space-y-[--space-xs]">
                  {currentShowcase.productsUsed.map((product, index) => (
                    <div key={index} className="flex items-center gap-[--space-xs]">
                      <div className={cn("p-1 rounded", product.color)}>
                        {product.icon}
                      </div>
                      <span className="text-body-sm text-foreground">{product.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Main showcase card - takes up 3/4 of the width */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-[--radius-xl] overflow-hidden shadow-elevated h-96">
              {/* Background image - like Stripe */}
              <div className="absolute inset-0">
                <img 
                  src={backgroundImages[currentIndex % backgroundImages.length]} 
                  alt="Background texture"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Ayu gradient overlay - Stripe style with readable text area */}
              <div className={cn(
                "absolute inset-0 transition-colors duration-500",
                gradientClasses[currentShowcase.gradientColor]
              )} />
              
              {/* Additional text readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Hero content area - keep for additional icons if needed */}
              <div className="absolute inset-0 flex items-center justify-center">
                {typeof currentShowcase.heroImage !== 'string' && (
                  <div className="w-full h-full flex items-center justify-center">
                    {currentShowcase.heroImage}
                  </div>
                )}
              </div>
              
              {/* Company logo - better positioning */}
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 text-foreground font-bold shadow-elevated border border-white/20">
                {currentShowcase.logo}
              </div>
              
              {/* Overlay text content - ALWAYS LIGHT FOR CONTRAST ON COLORED OVERLAYS */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-rajdhani font-bold mb-6 leading-tight text-white drop-shadow-elevated">
                    {currentShowcase.overlayTitle}
                  </h2>
                  <p className="text-xl text-white/95 mb-8 leading-relaxed font-noto-sans drop-shadow-md">
                    {currentShowcase.overlayDescription}
                  </p>
                  <button className="text-lg font-medium text-white/95 hover:text-white transition-colors group flex items-center gap-3 drop-shadow-md">
                    Read their story 
                    <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
                  </button>
                </div>
              </div>
            </div>
        
        
          </div>
        </div>
      </div>
      
      {/* Partner logos strip - clickable with large icons */}
      <div className="mt-[--space-4xl] text-center">
        <p className="text-body-sm text-muted-foreground mb-(--space-2xl)">
          Trusted by industry leaders
        </p>
        <div className="flex items-center justify-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
          {partnerLogos.map((partner, index) => {
            const IconComponent = partner.icon
            const isActive = index === currentIndex
            
            // Simple color mapping for each gradient
            const getColorClasses = (gradientColor: string, isActive: boolean) => {
              if (!isActive) {
                return {
                  bg: "bg-muted/20 hover:bg-muted/40",
                  icon: "text-muted-foreground",
                  text: "text-muted-foreground"
                }
              }
              
              switch (gradientColor) {
                case 'blue':
                  return {
                    bg: "bg-slate-blue/20",
                    icon: "text-slate-blue",
                    text: "text-slate-blue"
                  }
                case 'teal':
                  return {
                    bg: "bg-ayu-teal/20", 
                    icon: "text-ayu-teal",
                    text: "text-ayu-teal"
                  }
                case 'green':
                  return {
                    bg: "bg-ayu-green/20",
                    icon: "text-ayu-green", 
                    text: "text-ayu-green"
                  }
                case 'purple':
                  return {
                    bg: "bg-ayu-purple/20",
                    icon: "text-ayu-purple",
                    text: "text-ayu-purple"
                  }
                case 'red':
                  return {
                    bg: "bg-ayu-red/20",
                    icon: "text-ayu-red",
                    text: "text-ayu-red"
                  }
                case 'yellow':
                  return {
                    bg: "bg-ayu-yellow/20",
                    icon: "text-ayu-yellow",
                    text: "text-ayu-yellow"
                  }
                default:
                  return {
                    bg: "bg-sandy-ochre/20",
                    icon: "text-sandy-ochre", 
                    text: "text-sandy-ochre"
                  }
              }
            }
            
            const colors = getColorClasses(partner.gradientColor, isActive)
            
            return (
              <button
                key={index}
                onClick={() => {
                  if (index < showcases.length) {
                    setCurrentIndex(index)
                  }
                }}
                className={cn(
                  "flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105",
                  isActive ? "transform scale-110" : "hover:text-foreground"
                )}
                disabled={index >= showcases.length}
              >
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
                  colors.bg
                )}>
                  <IconComponent className={cn("w-6 h-6 transition-colors", colors.icon)} />
                </div>
                <span className={cn("text-xs font-medium transition-colors", colors.text)}>
                  {partner.name.toUpperCase()}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

BrandCarousel.displayName = "BrandCarousel"