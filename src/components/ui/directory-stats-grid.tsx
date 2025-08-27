'use client'

import { Card, CardContent } from './card'
import { BuildingOffice2Icon, CursorArrowRaysIcon, MapPinIcon, ShieldCheckIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useDirectoryStats } from '@/hooks/useRealStats'

interface StatItem {
  icon: React.ComponentType<{ className?: string; weight?: string }>
  title: string
  value: string
  subtitle: string
  color?: string
}

interface DirectoryStatsGridProps {
  stats?: StatItem[]
  className?: string
}

export function DirectoryStatsGrid({ 
  stats,
  className 
}: DirectoryStatsGridProps) {
  // Use real directory stats if none provided
  const realDirectoryStats = useDirectoryStats()
  
  // Default icons that pair with real stats
  const defaultIcons = [BuildingOffice2Icon, CursorArrowRaysIcon, ShieldCheckIcon, UsersIcon]
  
  // Combine real stats with icons
  const statsToRender = stats || realDirectoryStats.map((stat, index) => ({
    icon: defaultIcons[index],
    ...stat
  }))

  return (
    <div className={`grid grid-cols-2 gap-base ${className}`}>
      {statsToRender.map((stat, index) => (
        <Card key={index} className="shadow-whisper hover:shadow-present transition-all duration-300">
          <CardContent className="p-base text-center">
            <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-xs`} weight="bold" />
            <h3 className="font-rajdhani font-bold text-card-foreground mb-xs">{stat.title}</h3>
            <p className={`text-heading-xl font-bold ${stat.color} font-rajdhani`}>{stat.value}</p>
            <p className="text-body-xs text-muted-foreground">{stat.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}