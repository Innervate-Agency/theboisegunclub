'use client'

import { motion } from 'framer-motion'
import { MapPin, Building2, Users } from '@phosphor-icons/react'

interface TrustIndicator {
  icon: React.ComponentType<{ className?: string; weight?: string }>
  value: string
  label: string
}

interface TrustIndicatorsProps {
  indicators?: TrustIndicator[]
  className?: string
}

const defaultIndicators: TrustIndicator[] = [
  {
    icon: MapPin,
    value: "8",
    label: "Locations"
  },
  {
    icon: Building2,
    value: "150+",
    label: "Businesses"
  },
  {
    icon: Users,
    value: "5K+",
    label: "Members"
  }
]

export function TrustIndicators({ 
  indicators = defaultIndicators,
  className 
}: TrustIndicatorsProps) {
  return (
    <motion.div 
      className={`flex flex-wrap justify-center gap-md text-dark-chocolate/60 text-sm font-rajdhani ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      {indicators.map((indicator, index) => {
        const Icon = indicator.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            className="flex items-center gap-xs"
          >
            <Icon className="h-4 w-4" weight="bold" />
            <span className="font-bold">{indicator.value}</span>
            <span>{indicator.label}</span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}