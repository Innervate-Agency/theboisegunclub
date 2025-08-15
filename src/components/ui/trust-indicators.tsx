'use client'

import { motion } from 'framer-motion'
import { MapPin, Buildings as Building2, Users } from '@phosphor-icons/react'
import { useTrustIndicators } from '@/hooks/useRealStats'

interface TrustIndicator {
  icon: React.ComponentType<{ className?: string; weight?: string }>
  value: string
  label: string
}

interface TrustIndicatorsProps {
  indicators?: TrustIndicator[]
  className?: string
}

// Default icons that pair with real stats
const defaultIcons = [MapPin, Building2, Users]

export function TrustIndicators({ 
  indicators,
  className 
}: TrustIndicatorsProps) {
  // Use real stats if no custom indicators provided
  const realStats = useTrustIndicators()
  
  // Combine real stats with default icons
  const finalIndicators = indicators || realStats.map((stat, index) => ({
    icon: defaultIcons[index],
    value: stat.value,
    label: stat.label
  }))
  return (
    <motion.div 
      className={`flex flex-wrap justify-center gap-md text-dark-chocolate/60 text-body-sm font-rajdhani ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      {finalIndicators.map((indicator, index) => {
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
            <span className="font-rajdhani font-bold">{indicator.value}</span>
            <span>{indicator.label}</span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}