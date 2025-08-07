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

// Default TBGC showcases - match partner logo count and colors
const defaultShowcases = [
  {
    companyName: "GLOCK",
    logo: "GLOCK" as React.ReactNode,
    stats: [
      { label: "Models available", value: "50+" },
      { label: "Law enforcement agencies", value: "2,500+" },
      { label: "Years of innovation", value: "35" },
      { label: "Countries served", value: "100+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Glock became the world's most trusted handgun",
    overlayDescription: "Austrian engineering meets American excellence",
    gradientColor: 'blue' as const,
    productsUsed: [
      { name: "Striker-fired pistols", icon: <Target className="icon-xs" />, color: "bg-ayu-blue" }
    ]
  },
  {
    companyName: "SMITH & WESSON",
    logo: "S&W" as React.ReactNode,
    stats: [
      { label: "Years in business", value: "170+" },
      { label: "Revolvers produced", value: "15M+" },
      { label: "Police departments", value: "3,000+" },
      { label: "Military contracts", value: "50+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Smith & Wesson defined American firearms",
    overlayDescription: "From the Wild West to modern law enforcement",
    gradientColor: 'teal' as const,
    productsUsed: [
      { name: "Revolvers & Pistols", icon: <Shield className="icon-xs" />, color: "bg-ayu-teal" }
    ]
  },
  {
    companyName: "RUGER",
    logo: "RUGER" as React.ReactNode,
    stats: [
      { label: "Firearms produced", value: "20M+" },
      { label: "Years of innovation", value: "75" },
      { label: "Product lines", value: "12" },
      { label: "Patents held", value: "400+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Ruger built America's favorite sporting arms",
    overlayDescription: "Precision engineering for hunters and sport shooters",
    gradientColor: 'green' as const,
    productsUsed: [
      { name: "Sporting rifles", icon: <Award className="icon-xs" />, color: "bg-ayu-green" }
    ]
  },
  {
    companyName: "DANIEL DEFENSE",
    logo: "DD" as React.ReactNode,
    stats: [
      { label: "Military contracts", value: "25+" },
      { label: "Quality certifications", value: "100%" },
      { label: "Years serving military", value: "20" },
      { label: "Rail systems deployed", value: "500K+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Daniel Defense redefined tactical excellence",
    overlayDescription: "Military-grade precision for professional users",
    gradientColor: 'purple' as const,
    productsUsed: [
      { name: "Tactical systems", icon: <Settings className="icon-xs" />, color: "bg-ayu-purple" }
    ]
  },
  {
    companyName: "LEUPOLD",
    logo: "LEUPOLD" as React.ReactNode,
    stats: [
      { label: "Scopes calibrated", value: "10M+" },
      { label: "Precision records", value: "3,000yd+" },
      { label: "Competition wins", value: "500+" },
      { label: "Long-range specialists", value: "150+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Leupold became the precision optics leader",
    overlayDescription: "Oregon-made optics for the world's best shooters",
    gradientColor: 'red' as const,
    productsUsed: [
      { name: "Precision optics", icon: <Zap className="icon-xs" />, color: "bg-ayu-red" }
    ]
  },
  {
    companyName: "SIG SAUER",
    logo: "SIG" as React.ReactNode,
    stats: [
      { label: "Military adoptions", value: "40+" },
      { label: "Law enforcement", value: "8,000+" },
      { label: "Years of excellence", value: "160" },
      { label: "Innovation awards", value: "100+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how SIG Sauer earned global military trust",
    overlayDescription: "Swiss precision engineering for critical missions",
    gradientColor: 'yellow' as const,
    productsUsed: [
      { name: "Military systems", icon: <Users className="icon-xs" />, color: "bg-ayu-yellow" }
    ]
  }
]

const defaultPartnerLogos = [
  { name: "Glock", icon: Target, gradientColor: 'blue' as const },
  { name: "Smith & Wesson", icon: Shield, gradientColor: 'teal' as const },
  { name: "Ruger", icon: Award, gradientColor: 'green' as const },
  { name: "Daniel Defense", icon: Settings, gradientColor: 'purple' as const },
  { name: "Leupold", icon: Zap, gradientColor: 'red' as const },
  { name: "Sig Sauer", icon: Users, gradientColor: 'yellow' as const }
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
  
  // Auto-switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [showcases.length])
  
  const currentShowcase = showcases[currentIndex]
  
  const gradientClasses = {
    blue: 'bg-ayu-blue/70',
    teal: 'bg-ayu-teal/70',
    green: 'bg-ayu-green/70', 
    purple: 'bg-ayu-purple/70',
    red: 'bg-ayu-red/70',
    yellow: 'bg-ayu-yellow/70'
  }
  
  const borderClasses = {
    blue: 'border-ayu-blue/60',
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
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-2xl items-center">
          
          {/* Left stats panel - OUTSIDE the card, changes with carousel */}
          <div className="lg:col-span-1 space-y-lg">
            <div className="space-y-sm">
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
              <div className="pt-sm">
                <div className="text-body-sm font-medium text-muted-foreground mb-xs">
                  Products used
                </div>
                <div className="space-y-xs">
                  {currentShowcase.productsUsed.map((product, index) => (
                    <div key={index} className="flex items-center gap-xs">
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
            <div className="relative rounded-overlay overflow-hidden shadow-elevated h-96">
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
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 text-foreground font-bold shadow-lg border border-white/20">
                {currentShowcase.logo}
              </div>
              
              {/* Overlay text content - ALWAYS LIGHT FOR CONTRAST ON COLORED OVERLAYS */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-rajdhani font-bold mb-6 leading-tight text-white drop-shadow-lg">
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
      <div className="mt-4xl text-center">
        <p className="text-body-sm text-muted-foreground mb-2xl">
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
                    bg: "bg-ayu-blue/20",
                    icon: "text-ayu-blue",
                    text: "text-ayu-blue"
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
                    bg: "bg-brass-yellow/20",
                    icon: "text-brass-yellow", 
                    text: "text-brass-yellow"
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