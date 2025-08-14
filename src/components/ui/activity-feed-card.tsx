'use client'

import { Card } from './card'

interface ActivityFeedCardProps {
  icon: React.ComponentType<{ className?: string; weight?: string }>
  iconColor: string
  iconBgColor: string
  title: string
  description: string
  timeAgo: string
  className?: string
}

export function ActivityFeedCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
  timeAgo,
  className
}: ActivityFeedCardProps) {
  return (
    <Card className={`shadow-whisper hover:shadow-present transition-all duration-200 ${className}`}>
      <div className="flex items-start gap-base p-base">
        <div className={`w-8 h-8 rounded-full ${iconBgColor} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`h-4 w-4 ${iconColor}`} weight="bold" />
        </div>
        <div className="flex-1 space-y-xs">
          <div className="flex items-center justify-between">
            <p className="font-medium text-card-foreground text-sm">{title}</p>
            <span className="text-xs text-muted-foreground">{timeAgo}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </Card>
  )
}