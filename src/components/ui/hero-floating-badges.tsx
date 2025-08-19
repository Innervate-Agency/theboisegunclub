'use client'

import { MotionDiv } from '@/components/ui/optimized-motion'
import { 
  ShieldCheckIcon as Shield,
  BuildingStorefrontIcon as Storefront,
  StarIcon as Star,
  TrophyIcon as Trophy,
  UsersIcon as Users
} from '@heroicons/react/24/outline'

interface DirectoryFloatingBadgesProps {
  className?: string
}

export function DirectoryFloatingBadges({ className }: DirectoryFloatingBadgesProps) {
  const badges = [
    {
      id: 1,
      icon: Shield,
      position: "left-[18%] top-[22%]",
      size: "w-8 h-8",
      opacity: [0.2, 0.35, 0.2],
      rotate: [0, 12, 0],
      motion: { y: [0, -15, 0] },
      duration: 4.2,
      delay: 0.5,
      color: "text-nav-directory/50"
    },
    {
      id: 2,
      icon: Storefront,
      position: "right-[14%] top-[28%]",
      size: "w-7 h-7",
      opacity: [0.18, 0.28, 0.18],
      rotate: [0, -10, 0],
      motion: { x: [0, 10, 0] },
      duration: 3.8,
      delay: 0.7,
      color: "text-nav-directory/40"
    },
    {
      id: 3,
      icon: Star,
      position: "left-[15%] top-[52%]",
      size: "w-6 h-6",
      opacity: [0.15, 0.25, 0.15],
      rotate: [0, 18, 0],
      motion: { scale: [0.9, 1.1, 0.9] },
      duration: 5.2,
      delay: 0.9,
      color: "text-sandy-ochre/50"
    },
    {
      id: 4,
      icon: Trophy,
      position: "right-[20%] top-[58%]",
      size: "w-8 h-8",
      opacity: [0.22, 0.32, 0.22],
      rotate: [0, -15, 0],
      motion: { y: [0, 12, 0] },
      duration: 3.2,
      delay: 1.1,
      color: "text-nav-directory/45"
    },
    {
      id: 5,
      icon: Users,
      position: "left-[22%] top-[78%]",
      size: "w-5 h-5",
      opacity: [0.12, 0.22, 0.12],
      rotate: [0, 25, 0],
      motion: { x: [0, -8, 0] },
      duration: 4.8,
      delay: 1.3,
      color: "text-nav-directory/35"
    }
  ]

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {badges.map(badge => {
        const Icon = badge.icon
        return (
          <MotionDiv
            key={badge.id}
            className={`absolute ${badge.position} ${badge.size} ${badge.color}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: badge.opacity,
              rotate: badge.rotate,
              scale: [0.8, 1, 0.8],
              ...badge.motion
            }}
            transition={{
              duration: badge.duration,
              delay: badge.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-full h-full" />
          </MotionDiv>
        )
      })}
    </div>
  )
}