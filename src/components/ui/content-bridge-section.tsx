'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

interface Benefit {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface Category {
  name: string
  count: string
  trend?: string
  href?: string
}

interface TrustIndicator {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}

interface SidebarCard {
  title: string
  description: string
  features: string[]
  buttonText: string
  buttonHref?: string
  accent?: string
}

interface ContentBridgeSectionProps {
  // Main content
  sectionTitle: string
  sectionIcon: React.ComponentType<{ className?: string }>
  sectionDescription: string
  benefits: Benefit[]
  
  // Categories section
  categoriesTitle: string
  categoriesIcon: React.ComponentType<{ className?: string }>
  categories: Category[]
  
  // Trust indicators
  trustIndicators: TrustIndicator[]
  
  // Sidebar cards
  primaryCard: SidebarCard
  statsCard: {
    title: string
    stats: Array<{
      label: string
      value: string
      color: string
    }>
  }
  
  // Styling
  accentColor?: string
  className?: string
}

export function ContentBridgeSection({
  sectionTitle,
  sectionIcon: SectionIcon,
  sectionDescription,
  benefits,
  categoriesTitle,
  categoriesIcon: CategoriesIcon,
  categories,
  trustIndicators,
  primaryCard,
  statsCard,
  accentColor = 'nav-events',
  className = ''
}: ContentBridgeSectionProps) {
  return (
    <section className={`py-3xl bg-gradient-to-b from-background to-muted/20 ${className}`}>
      <div className="container mx-auto max-w-site px-mobile-sm sm:px-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
          
          {/* Sidebar - NOW ON LEFT */}
          <div className="lg:order-1 space-y-xl">
            {/* Primary CTA Card */}
            <Card className={`mica-card border-${accentColor}/30 overflow-hidden bgc-shadow-present hover:bgc-shadow-elevated transition-all duration-300`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${accentColor}/20 to-${accentColor}/10 rounded-bl-full`}></div>
              <CardContent className="p-lg relative z-10">
                <h3 className="font-rajdhani h4-component text-card-foreground mb-sm">
                  {primaryCard.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-lg">
                  {primaryCard.description}
                </p>
                <div className="space-y-xs mb-lg">
                  {primaryCard.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-xs text-sm">
                      <CheckBadgeIcon className={`h-4 w-4 text-${accentColor}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full bg-${accentColor} hover:bg-${accentColor}/90 text-white font-rajdhani font-bold gap-xs`}>
                  {primaryCard.buttonText}
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="mica-card bgc-shadow-whisper hover:bgc-shadow-present transition-all duration-300">
              <CardContent className="p-lg">
                <h3 className="font-rajdhani text-lg font-bold text-card-foreground mb-base">
                  {statsCard.title}
                </h3>
                <div className="space-y-base">
                  {statsCard.stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className={`font-rajdhani font-bold text-${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - NOW ON RIGHT */}
          <div className="lg:col-span-2 lg:order-2 space-y-2xl">
            {/* Section Benefits */}
            <div>
              <div className="flex items-center gap-sm mb-lg">
                <SectionIcon className={`h-5 w-5 text-${accentColor}`} />
                <h2 className="font-rajdhani h3-subsection text-card-foreground">
                  {sectionTitle}
                </h2>
              </div>
              <p className="text-muted-foreground mb-xl leading-relaxed">
                {sectionDescription}
              </p>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-base">
                    <div className="shrink-0">
                      <div className={`w-10 h-10 rounded-xs bg-${accentColor}/10 flex items-center justify-center`}>
                        <benefit.icon className={`h-5 w-5 text-${accentColor}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-card-foreground mb-xs">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Section - 4 Boxes in Content Column */}
            <div>
              <div className="flex items-center gap-sm mb-lg">
                <CategoriesIcon className={`h-5 w-5 text-${accentColor}`} />
                <h2 className="font-rajdhani h3-subsection text-card-foreground">
                  {categoriesTitle}
                </h2>
              </div>
              {/* 4 Boxes Grid - Better balanced in content column */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-base">
                {categories.slice(0, 4).map((category, index) => (
                  <Card 
                    key={index} 
                    className="mica-card bgc-shadow-whisper hover:bgc-shadow-present transition-all duration-300 cursor-pointer group"
                  >
                    <CardContent className="p-base">
                      <div className="flex items-center justify-between mb-xs">
                        <span className={`text-sm font-medium text-card-foreground group-hover:text-${accentColor} transition-colors`}>
                          {category.name}
                        </span>
                        {category.trend && (
                          <Badge className="bg-sagebrush-green/10 text-sagebrush-green border-sagebrush-green/20 text-[10px]">
                            {category.trend}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center">
                        <span className={`text-xl font-rajdhani font-bold text-${accentColor}`}>
                          {category.count}
                        </span>
                        <span className="text-xs text-muted-foreground ml-xs">items</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-base pt-xl border-t border-border">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-xs">
                  <indicator.icon className={`h-4 w-4 text-${accentColor}`} />
                  <span className="text-sm text-muted-foreground">
                    <span className="font-bold text-card-foreground">{indicator.value}</span> {indicator.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}