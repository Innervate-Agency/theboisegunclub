'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BoltIcon, ClockIcon, FireIcon, SparklesIcon, TagIcon, TrophyIcon } from '@heroicons/react/24/outline';

interface DealAlert {
  title: string
  business: string
  discount: string
  timeAgo: string
  type: 'new' | 'hot' | 'ending' | 'featured'
}

const dealAlerts: DealAlert[] = [
  { title: "Glock 19 Gen 5", business: "Impact Guns", discount: "15% OFF", timeAgo: "2 min ago", type: "hot" },
  { title: "AR-15 Build Kit", business: "Idaho Arms", discount: "$200 OFF", timeAgo: "5 min ago", type: "new" },
  { title: "Cerakote Service", business: "Independence Indoor", discount: "20% OFF", timeAgo: "10 min ago", type: "featured" },
  { title: "Sig Sauer P365", business: "Sportsman's", discount: "$75 OFF", timeAgo: "15 min ago", type: "hot" },
  { title: "Training Package", business: "Snake River", discount: "Buy 2 Get 1", timeAgo: "20 min ago", type: "ending" },
  { title: "Optics Sale", business: "D&B Supply", discount: "Up to 30%", timeAgo: "25 min ago", type: "new" },
  { title: "Ammo Bulk Deal", business: "Impact Guns", discount: "Free Shipping", timeAgo: "30 min ago", type: "hot" },
  { title: "Custom Build", business: "AllTerra Arms", discount: "$300 OFF", timeAgo: "35 min ago", type: "featured" }
]

export function MarketplaceTicker() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dealAlerts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  const getIcon = (type: string) => {
    switch (type) {
      case 'hot': return Fire
      case 'new': return Sparkle
      case 'ending': return Clock
      case 'featured': return Trophy
      default: return Tag
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case 'hot': return 'text-rusty-orange border-rusty-orange/30 bg-rusty-orange/10'
      case 'new': return 'text-sagebrush-green border-sagebrush-green/30 bg-sagebrush-green/10'
      case 'ending': return 'text-sandy-ochre border-sandy-ochre/30 bg-sandy-ochre/10'
      case 'featured': return 'text-nav-marketplace border-nav-marketplace/30 bg-nav-marketplace/10'
      default: return 'text-muted-foreground border-border bg-muted/10'
    }
  }

  const visibleDeals = [
    dealAlerts[currentIndex],
    dealAlerts[(currentIndex + 1) % dealAlerts.length],
    dealAlerts[(currentIndex + 2) % dealAlerts.length],
    dealAlerts[(currentIndex + 3) % dealAlerts.length],
    dealAlerts[(currentIndex + 4) % dealAlerts.length],
    dealAlerts[(currentIndex + 5) % dealAlerts.length],
    dealAlerts[(currentIndex + 6) % dealAlerts.length],
    dealAlerts[(currentIndex + 7) % dealAlerts.length]
  ]

  return (
    <div 
      className="bg-gradient-to-r from-nav-marketplace/5 via-background to-nav-marketplace/5 border-y border-border/50 py-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto max-w-site px-mobile-sm sm:px-md">
        <div className="flex items-center gap-base">
          <div className="flex items-center gap-xs shrink-0">
            <Lightning className="h-4 w-4 text-nav-marketplace animate-pulse" />
            <span className="text-xs font-rajdhani font-bold uppercase text-nav-marketplace">Live Deals</span>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-xl overflow-x-auto scrollbar-hide"
              >
                {visibleDeals.map((deal, index) => {
                  const Icon = getIcon(deal.type)
                  return (
                    <div 
                      key={`${deal.title}-${index}`}
                      className="flex items-center gap-sm shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <div className={`flex items-center gap-xs px-xs py-[2px] rounded-xs border ${getColor(deal.type)}`}>
                        <Icon className="h-3 w-3" />
                        <span className="text-[10px] font-bold uppercase">{deal.type}</span>
                      </div>
                      <div className="flex items-center gap-xs">
                        <span className="text-sm font-medium text-card-foreground">{deal.title}</span>
                        <span className="text-xs text-muted-foreground">@{deal.business}</span>
                        <span className="text-sm font-bold text-nav-marketplace">{deal.discount}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{deal.timeAgo}</span>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}