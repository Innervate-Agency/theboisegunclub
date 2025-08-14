'use client'

import React from 'react'
import { Button } from './button'

interface EmptyStateProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  actionText?: string
  onAction?: () => void
  iconColor?: string
  actionColor?: string
  className?: string
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionText,
  onAction,
  iconColor = "text-muted-foreground",
  actionColor,
  className = ""
}: EmptyStateProps) {
  return (
    <div className={`text-center py-6xl col-span-full ${className}`}>
      <div className="space-y-base">
        <div className={`mx-auto w-fit rounded-full bg-muted/30 p-lg`}>
          <Icon className={`h-12 w-12 ${iconColor}`} />
        </div>
        <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {description}
        </p>
        {actionText && onAction && (
          <Button
            onClick={onAction}
            className={`shadow-elevated hover:shadow-hero ${actionColor || ''}`}
            animationType="x-o"
          >
            {actionText}
          </Button>
        )}
      </div>
    </div>
  )
}