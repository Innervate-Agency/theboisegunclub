'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, CheckBadgeIcon, SparklesIcon } from '@heroicons/react/24/outline'

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
    <section className={`pt-6xl pb-5xl bg-gradient-to-b from-background to-muted/20 ${className}`}>
      <div className="container mx-auto max-w-site px-mobile-sm sm:px-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
          
          {/* Sidebar - NOW ON LEFT */}
          <div className="lg:order-1 space-y-xl">
            {/* Enhanced CTA Card - High Impact & Tactical */}
            <Card className={`border-${accentColor}/40 overflow-hidden bg-background hover:bgc-shadow-present transition-all duration-500 h-full group`}>
              {/* Enhanced gradient overlay with tactical pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${accentColor}/20 via-${accentColor}/10 to-transparent`}></div>
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-${accentColor}/25 to-transparent rounded-bl-2xl`}></div>
              
              {/* Tactical accent line - Full orange gradient */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-rusty-orange via-weathered-gold to-sandy-ochre"></div>
              
              <CardContent className="p-2xl relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  {/* Enhanced title with meaningful subtitle */}
                  <div className="mb-lg">
                    <h3 className="font-rajdhani text-3xl font-bold text-card-foreground leading-tight group-hover:text-card-foreground/90 transition-colors">
                      {primaryCard.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide -mt-1">
                      Connect with Idaho's Shooting Community
                    </p>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-2xl leading-relaxed font-medium">
                    {primaryCard.description}
                  </p>
                  
                  {/* Enhanced feature list with better spacing */}
                  <div className="space-y-lg">
                    {primaryCard.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-base group/feature">
                        <div className={`p-1 rounded-xs bg-${accentColor}/15 group-hover/feature:bg-${accentColor}/25 transition-colors`}>
                          <CheckBadgeIcon className={`h-5 w-5 text-${accentColor} flex-shrink-0`} />
                        </div>
                        <span className="text-base leading-relaxed font-medium text-card-foreground/90 group-hover/feature:text-card-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced CTA button with tactical styling */}
                <div className="mt-2xl">
                  <Button size="lg" className={`w-full bg-transparent hover:bg-rusty-orange text-${accentColor} hover:text-white font-rajdhani font-bold text-lg py-5 transition-all duration-300 group/btn border border-rusty-orange hover:border-rusty-orange uppercase`}>
                    <span className="flex items-center justify-center gap-base">
                      {primaryCard.buttonText}
                      <ArrowRightIcon className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                  
                  {/* Impact indicator */}
                  <div className="text-center mt-base">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Join Idaho's Premier Community
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card - Only render if it has content */}
            {statsCard.title && statsCard.stats.length > 0 && (
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
            )}
          </div>

          {/* Main Content - NOW ON RIGHT */}
          <div className="lg:col-span-2 lg:order-2 space-y-2xl">
            {/* Section Benefits */}
            <div>
              <div className="mb-lg">
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

            {/* Categories Section - Only render if it has content */}
            {categoriesTitle && categories.length > 0 && (
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
            )}

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