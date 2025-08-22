'use client'

import React from 'react'
import { Card, CardContent } from './card'
import { LucideIcon } from '@heroicons/react/24/outline';

interface InfoCardProps {
  icon: LucideIcon
  iconColor?: string
  title: string
  description: string
  className?: string
  layout?: 'horizontal' | 'vertical'
}

export function InfoCard({
  icon: Icon,
  iconColor = "text-slate-blue",
  title,
  description,
  className = "",
  layout = 'horizontal'
}: InfoCardProps) {
  return (
    <Card className={`mica shadow-present rounded-xs ${className}`}>
      <CardContent className={layout === 'horizontal' ? "pt-base flex items-start gap-base" : "pt-base text-center space-y-base"}>
        <Icon className={`h-8 w-8 ${iconColor} ${layout === 'horizontal' ? 'flex-shrink-0 mt-xs' : 'mx-auto'}`} />
        <div className={layout === 'horizontal' ? '' : 'space-y-sm'}>
          <h3 className="font-rajdhani font-bold text-body-xl font-rajdhani">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}