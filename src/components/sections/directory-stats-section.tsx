'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AcademicCapIcon, BuildingStorefrontIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';

/**
 * DirectoryStatsSection - Pure Content Component
 * 
 * Stripped of all layout concerns (section wrapper, background, padding, containers)
 * Layout component will handle all structural decisions
 */
export function DirectoryStatsSection() {
  const stats = [
    {
      icon: BuildingStorefrontIcon,
      number: '594',
      label: 'Licensed FFLs',
      description: 'Verified dealers across Idaho',
      color: 'text-sandy-ochre'
    },
    {
      icon: MapPinIcon,
      number: '127',
      label: 'Shooting Ranges',
      description: 'Indoor and outdoor facilities',
      color: 'text-rusty-orange'
    },
    {
      icon: AcademicCapIcon,
      number: '89',
      label: 'Certified Trainers',
      description: 'NRA and state certified instructors',
      color: 'text-slate-blue'
    },
    {
      icon: UsersIcon,
      number: '2,400+',
      label: 'Community Members',
      description: 'Active Idaho gun owners',
      color: 'text-canyon-clay'
    }
  ]

  return (
    <>
      <div className="text-center space-y-xl mb-2xl">
        <h2 className="font-rajdhani font-bold text-3xl sm:text-4xl text-foreground">
          Treasure Valley's Largest Directory
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Privacy-filtered, community-verified directory of Idaho's firearms businesses and services. Real data from real Idaho gun owners.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-whisper hover:shadow-present transition-all duration-300 text-center">
            <CardContent className="p-lg space-y-base">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-muted rounded-xs flex items-center justify-center">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              
              <div className="space-y-xs">
                <div className={`font-rajdhani font-black text-3xl ${stat.color}`}>
                  {stat.number}
                </div>
                <h3 className="font-rajdhani font-bold text-lg text-card-foreground">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-base">
        <p className="text-muted-foreground">
          All businesses verified for privacy compliance and commercial operation status
        </p>
        <Button className="font-rajdhani font-semibold bg-sandy-ochre text-dark-chocolate hover:bg-sandy-ochre/90">
          Browse Directory
        </Button>
      </div>
    </>
  )
}