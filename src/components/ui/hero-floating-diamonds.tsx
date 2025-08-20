'use client'

import { MotionDiv } from '@/components/ui/optimized-motion'
import { Diamond } from '@phosphor-icons/react'

interface FloatingDiamondsProps {
  className?: string
}

export function FloatingDiamonds({ className }: FloatingDiamondsProps) {
  const diamonds = [
    {
      id: 1,
      position: "left-[20%] top-[20%]",
      size: "w-8 h-8",
      opacity: [0.2, 0.3, 0.2],
      rotate: [-28, -20, -28],
      motion: { y: [0, -10, 0] },
      duration: 4,
      delay: 0.6
    },
    {
      id: 2,
      position: "right-[20%] top-[18%]",
      size: "w-6 h-6",
      opacity: [0.15, 0.25, 0.15],
      rotate: [-28, -35, -28],
      motion: { x: [0, 5, 0] },
      duration: 3.5,
      delay: 0.7
    },
    {
      id: 3,
      position: "left-[15%] top-[45%]",
      size: "w-5 h-5",
      opacity: [0.1, 0.2, 0.1],
      rotate: [-28, -15, -28],
      motion: { scale: [0.8, 1, 0.8] },
      duration: 5,
      delay: 0.8
    },
    {
      id: 4,
      position: "right-[18%] top-[50%]",
      size: "w-7 h-7",
      opacity: [0.25, 0.35, 0.25],
      rotate: [-28, -40, -28],
      motion: { y: [0, 8, 0] },
      duration: 3,
      delay: 0.9
    },
    {
      id: 5,
      position: "left-[35%] top-[35%]",
      size: "w-4 h-4",
      opacity: [0.08, 0.15, 0.08],
      rotate: [-28, -45, -28],
      motion: { x: [0, -8, 0], y: [0, 5, 0] },
      duration: 6,
      delay: 1.2
    },
    {
      id: 6,
      position: "right-[32%] top-[32%]",
      size: "w-6 h-6",
      opacity: [0.12, 0.2, 0.12],
      rotate: [-28, -10, -28],
      motion: { x: [0, 6, 0], scale: [1, 1.1, 1] },
      duration: 4.5,
      delay: 1.5
    }
  ]

  return (
    <div className={className}>
      {diamonds.map((diamond) => (
        <MotionDiv
          key={diamond.id}
          initial={{ opacity: 0, rotate: -28, ...diamond.motion }}
          animate={{ 
            opacity: diamond.opacity,
            rotate: diamond.rotate,
            ...diamond.motion
          }}
          transition={{ 
            duration: diamond.duration, 
            delay: diamond.delay, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute ${diamond.position}`}
        >
          <Diamond 
            className={`${diamond.size} text-crisp-off-white/60 shadow-elevated`} 
          />
        </MotionDiv>
      ))}
    </div>
  )
}