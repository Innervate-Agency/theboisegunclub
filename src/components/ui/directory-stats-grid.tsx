'use client'

import { Card, CardContent } from './card'
import { HiOutlineOfficeBuilding as Building2, HiOutlineLocationMarker as Target, HiOutlineUserGroup as Users, HiOutlineShieldCheck as Shield } from 'react-icons/hi'

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
  // Default stats if none provided
  const defaultStats = [
    {
      icon: Building2,
      title: "Gun Stores",
      value: "45+",
      subtitle: "Licensed Dealers",
      color: "text-sagebrush-green"
    },
    {
      icon: Target,
      title: "Ranges", 
      value: "28+",
      subtitle: "Shooting Facilities",
      color: "text-sagebrush-green"
    },
    {
      icon: Shield,
      title: "Trainers",
      value: "32+", 
      subtitle: "Certified Instructors",
      color: "text-sagebrush-green"
    },
    {
      icon: Users,
      title: "Services",
      value: "12+",
      subtitle: "Specialized Services", 
      color: "text-sagebrush-green"
    }
  ]

  const statsToRender = stats || defaultStats

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