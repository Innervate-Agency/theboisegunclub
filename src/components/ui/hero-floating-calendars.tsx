'use client'

import { MotionDiv } from '@/components/ui/optimized-motion'
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

interface FloatingCalendarsProps {
  className?: string
}

export function FloatingCalendars({ className }: FloatingCalendarsProps) {
  const calendars = [
    {
      id: 1,
      position: "left-[20%] top-[20%]",
      size: "w-8 h-8",
      opacity: [0.2, 0.3, 0.2],
      rotate: [0, 10, 0],
      motion: { y: [0, -12, 0] },
      duration: 4,
      delay: 0.6
    },
    {
      id: 2,
      position: "right-[15%] top-[25%]",
      size: "w-6 h-6",
      opacity: [0.15, 0.25, 0.15],
      rotate: [0, -8, 0],
      motion: { x: [0, 8, 0] },
      duration: 3.5,
      delay: 0.7
    },
    {
      id: 3,
      position: "left-[12%] top-[50%]",
      size: "w-5 h-5",
      opacity: [0.1, 0.2, 0.1],
      rotate: [0, 15, 0],
      motion: { scale: [0.8, 1, 0.8] },
      duration: 5,
      delay: 0.8
    },
    {
      id: 4,
      position: "right-[22%] top-[55%]",
      size: "w-7 h-7",
      opacity: [0.25, 0.35, 0.25],
      rotate: [0, -12, 0],
      motion: { y: [0, 10, 0] },
      duration: 3,
      delay: 0.9
    },
    {
      id: 5,
      position: "left-[25%] top-[75%]",
      size: "w-4 h-4",
      opacity: [0.08, 0.18, 0.08],
      rotate: [0, 20, 0],
      motion: { x: [0, -6, 0] },
      duration: 4.5,
      delay: 1.1
    }
  ]

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {calendars.map(calendar => (
        <MotionDiv
          key={calendar.id}
          className={`absolute ${calendar.position} ${calendar.size} text-rusty-orange/40`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: calendar.opacity,
            rotate: calendar.rotate,
            scale: [0.8, 1, 0.8],
            ...calendar.motion
          }}
          transition={{
            duration: calendar.duration,
            delay: calendar.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <CalendarDaysIcon weight="bold" className="w-full h-full" />
        </MotionDiv>
      ))}
    </div>
  )
}