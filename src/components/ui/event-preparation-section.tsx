'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline'

interface EventPreparationSectionProps {
  agenda?: string[]
  whatToBring?: string[]
  requirements?: string[]
  tags?: string[]
  className?: string
}

export function EventPreparationSection({
  agenda = [],
  whatToBring = [],
  requirements = [],
  tags = [],
  className
}: EventPreparationSectionProps) {
  // Don't render if no preparation data is available
  if (agenda.length === 0 && whatToBring.length === 0 && requirements.length === 0 && tags.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-xl", className)}>
      <div className="text-center">
        <h2 className="font-rajdhani text-3xl font-bold text-foreground mb-base">Event Preparation</h2>
        <p className="text-muted-foreground">Everything you need to know to make the most of this event</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
        
        {/* Left Column */}
        <div className="space-y-lg">
          {/* What to Bring */}
          {whatToBring.length > 0 && (
            <div className="bg-card p-lg rounded-none border border-border/30 shadow-present">
              <div className="flex items-start gap-base">
                <WrenchScrewdriverIcon className="h-6 w-6 text-nav-events flex-shrink-0 mt-xs" />
                <div className="flex-1">
                  <h3 className="font-rajdhani text-xl font-bold text-foreground mb-base">What to Bring</h3>
                  <ul className="space-y-sm">
                    {whatToBring.map((item, index) => (
                      <li key={index} className="text-body-sm text-muted-foreground flex items-start gap-xs">
                        <span className="w-2 h-2 bg-nav-events rounded-full flex-shrink-0 mt-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Event Schedule */}
          {agenda.length > 0 && (
            <div className="bg-card p-lg rounded-none border border-border/30 shadow-present">
              <div className="flex items-start gap-base">
                <ClockIcon className="h-6 w-6 text-nav-events flex-shrink-0 mt-xs" />
                <div className="flex-1">
                  <h3 className="font-rajdhani text-xl font-bold text-foreground mb-base">Event Schedule</h3>
                  <ul className="space-y-sm">
                    {agenda.map((item, index) => (
                      <li key={index} className="text-body-sm text-muted-foreground flex items-start gap-xs">
                        <span className="w-2 h-2 bg-nav-events rounded-full flex-shrink-0 mt-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-lg">
          {/* Requirements */}
          {requirements.length > 0 && (
            <div className="bg-card p-lg rounded-none border border-border/30 shadow-present">
              <div className="flex items-start gap-base">
                <ExclamationTriangleIcon className="h-6 w-6 text-warning-clay flex-shrink-0 mt-xs" />
                <div className="flex-1">
                  <h3 className="font-rajdhani text-xl font-bold text-foreground mb-base">Requirements</h3>
                  <ul className="space-y-sm">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="text-body-sm text-muted-foreground flex items-start gap-xs">
                        <span className="w-2 h-2 bg-warning-clay rounded-full flex-shrink-0 mt-xs" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Event Categories */}
          {tags.length > 0 && (
            <div className="bg-card p-lg rounded-none border border-border/30 shadow-present">
              <div className="flex items-start gap-base">
                <TagIcon className="h-6 w-6 text-nav-events flex-shrink-0 mt-xs" />
                <div className="flex-1">
                  <h3 className="font-rajdhani text-xl font-bold text-foreground mb-base">Event Categories</h3>
                  <div className="flex flex-wrap gap-sm">
                    {tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="text-sm bg-nav-events/10 text-nav-events border-nav-events/30 px-base py-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}