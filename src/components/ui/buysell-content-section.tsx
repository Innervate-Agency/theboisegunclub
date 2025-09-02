'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowPathIcon, CheckBadgeIcon, ClockIcon, CreditCardIcon, ShieldCheckIcon, SparklesIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export function BuySellContentSection() {
  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: "Verified Dealers",
      description: "All sellers are licensed Idaho FFLs with verified credentials"
    },
    {
      icon: TruckIcon,
      title: "Local Pickup",
      description: "Save on shipping with in-store pickup at 470+ locations"
    },
    {
      icon: CreditCardIcon,
      title: "Secure Payments",
      description: "Protected transactions with buyer guarantee program"
    },
    {
      icon: ArrowPathIcon,
      title: "Easy Returns",
      description: "30-day return policy on eligible items"
    }
  ]

  const categories = [
    { name: "Firearms", count: "2,847", trend: "+12%" },
    { name: "Ammunition", count: "15,432", trend: "+8%" },
    { name: "Optics", count: "892", trend: "+15%" },
    { name: "Accessories", count: "3,291", trend: "+22%" },
    { name: "Services", count: "147", trend: "+5%" },
    { name: "Training", count: "89", trend: "+18%" }
  ]

  return (
    <section className="py-3xl bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-site px-mobile-sm sm:px-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-2xl">
            {/* Why Shop Local */}
            <div>
              <div className="flex items-center gap-sm mb-lg">
                <UserGroupIcon className="h-5 w-5 text-nav-buysell" />
                <h2 className="font-rajdhani h3-subsection text-card-foreground">
                  Why Shop The Idaho Buy & Sell
                </h2>
              </div>
              <p className="text-muted-foreground mb-xl leading-relaxed">
                Connect directly with Idaho's premier firearms dealers, custom builders, and service providers. 
                Our buysell features exclusive deals from 470+ verified FFLs across the Treasure Valley, 
                offering everything from custom builds to bulk ammunition with local pickup options.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-base">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-xs bg-nav-buysell/10 flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-nav-buysell" />
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

            {/* Featured Categories */}
            <div>
              <div className="flex items-center gap-sm mb-lg">
                <CheckBadgeIcon className="h-5 w-5 text-nav-buysell" />
                <h2 className="font-rajdhani h3-subsection text-card-foreground">
                  Popular Categories
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-sm">
                {categories.map((category, index) => (
                  <Card key={index} className="mica-card hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-base">
                      <div className="flex items-center justify-between mb-xs">
                        <span className="text-sm font-medium text-card-foreground group-hover:text-nav-buysell transition-colors">
                          {category.name}
                        </span>
                        <Badge className="bg-sagebrush-green/10 text-sagebrush-green border-sagebrush-green/20 text-[10px]">
                          {category.trend}
                        </Badge>
                      </div>
                      <span className="text-xl font-rajdhani font-bold text-nav-buysell">
                        {category.count}
                      </span>
                      <span className="text-xs text-muted-foreground ml-xs">items</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-base pt-xl border-t border-border">
              <div className="flex items-center gap-xs">
                <CheckBadgeIcon className="h-4 w-4 text-nav-buysell" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-bold text-card-foreground">100%</span> Verified Sellers
                </span>
              </div>
              <div className="flex items-center gap-xs">
                <TruckIcon className="h-4 w-4 text-nav-buysell" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-bold text-card-foreground">2-Day</span> Average Shipping
                </span>
              </div>
              <div className="flex items-center gap-xs">
                <ShieldCheckIcon className="h-4 w-4 text-nav-buysell" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-bold text-card-foreground">30-Day</span> Buyer Protection
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-xl">
            {/* Seller CTA */}
            <Card className="mica-card border-nav-buysell/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-nav-buysell/20 to-nav-buysell/10 rounded-bl-full"></div>
              <CardContent className="p-lg relative z-10">
                <h3 className="font-rajdhani h4-component text-card-foreground mb-sm">
                  Become a Seller
                </h3>
                <p className="text-sm text-muted-foreground mb-lg">
                  ListBulletIcon your products and services to reach thousands of Idaho gun owners.
                </p>
                <div className="space-y-xs mb-lg">
                  <div className="flex items-center gap-xs text-sm">
                    <CheckBadgeIcon className="h-4 w-4 text-nav-buysell" />
                    <span>Free basic listings</span>
                  </div>
                  <div className="flex items-center gap-xs text-sm">
                    <CheckBadgeIcon className="h-4 w-4 text-nav-buysell" />
                    <span>Featured placement options</span>
                  </div>
                  <div className="flex items-center gap-xs text-sm">
                    <CheckBadgeIcon className="h-4 w-4 text-nav-buysell" />
                    <span>Direct customer contact</span>
                  </div>
                </div>
                <Button className="w-full bg-nav-buysell hover:bg-nav-buysell/90 text-white font-rajdhani font-bold">
                  Start Selling
                </Button>
              </CardContent>
            </Card>

            {/* Deal Stats */}
            <Card className="mica-card">
              <CardContent className="p-lg">
                <h3 className="font-rajdhani text-lg font-bold text-card-foreground mb-base">
                  Today's Activity
                </h3>
                <div className="space-y-base">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">New Listings</span>
                    <span className="font-rajdhani font-bold text-nav-buysell">47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Active Deals</span>
                    <span className="font-rajdhani font-bold text-rusty-orange">182</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Items Sold</span>
                    <span className="font-rajdhani font-bold text-sagebrush-green">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Savings</span>
                    <span className="font-rajdhani font-bold text-weathered-gold">18%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}