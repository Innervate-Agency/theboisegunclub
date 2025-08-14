'use client'

import React from 'react'
import { Badge } from './badge'

interface PageHeaderProps {
  title: React.ReactNode
  subtitle: string
  badge?: string
  icon?: React.ElementType
}

export function PageHeader({ title, subtitle, badge, icon: Icon }: PageHeaderProps) {
  return (
    <div className="space-y-lg">
      {badge && Icon && (
        <Badge variant="nav-directory" className="font-rajdhani">
          <Icon weight="bold" className="h-4 w-4 mr-xs" />
          {badge}
        </Badge>
      )}
      <h1 className="font-rajdhani text-4xl lg:text-5xl font-bold text-foreground leading-none">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {subtitle}
      </p>
    </div>
  )
}
