'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface NotificationBadgeProps {
  count: number
  variant?: 'primary' | 'secondary' | 'destructive' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  showZero?: boolean
  animate?: boolean
  className?: string
}

export function NotificationBadge({
  count,
  variant = 'primary',
  size = 'md',
  showZero = false,
  animate = true,
  className
}: NotificationBadgeProps) {
  // Don't render if count is 0 and showZero is false
  if (count === 0 && !showZero) return null

  // Format count display (e.g., 99+ for numbers over 99)
  const displayCount = count > 99 ? '99+' : count.toString()

  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'min-w-[16px] h-4 text-[10px] px-1',
      dot: 'w-2 h-2'
    },
    md: {
      container: 'min-w-[18px] h-[18px] text-[11px] px-1.5',
      dot: 'w-2.5 h-2.5'
    },
    lg: {
      container: 'min-w-[20px] h-5 text-xs px-2',
      dot: 'w-3 h-3'
    }
  }

  // Variant configurations with Boise landscape colors
  const variantConfig = {
    primary: {
      bg: 'bg-nav-events',
      text: 'text-white',
      border: 'border-nav-events',
      pulse: 'animate-pulse'
    },
    secondary: {
      bg: 'bg-weathered-gold',
      text: 'text-gruvbox-bg-dark',
      border: 'border-weathered-gold',
      pulse: 'animate-pulse'
    },
    destructive: {
      bg: 'bg-rusty-orange',
      text: 'text-white',
      border: 'border-rusty-orange',
      pulse: 'animate-pulse'
    },
    success: {
      bg: 'bg-sagebrush-green',
      text: 'text-white',
      border: 'border-sagebrush-green',
      pulse: 'animate-pulse'
    },
    warning: {
      bg: 'bg-sandy-ochre',
      text: 'text-gruvbox-bg-dark',
      border: 'border-sandy-ochre',
      pulse: 'animate-pulse'
    }
  }

  const sizeClasses = sizeConfig[size]
  const variantClasses = variantConfig[variant]

  // Show just a dot for count of 0 (when showZero is true)
  if (count === 0 && showZero) {
    return (
      <div
        className={cn(
          "rounded-full border-2 border-background",
          sizeClasses.dot,
          'bg-muted-foreground/50',
          className
        )}
      />
    )
  }

  return (
    <Badge
      variant="outline"
      className={cn(
        // Base styling
        "rounded-full border-2 border-background font-rajdhani font-bold",
        "flex items-center justify-center leading-none",
        "shadow-whisper",
        
        // Size classes
        sizeClasses.container,
        
        // Variant classes
        variantClasses.bg,
        variantClasses.text,
        variantClasses.border,
        
        // Animation
        animate && count > 0 && "animate-bounce",
        
        // Custom classes
        className
      )}
    >
      {displayCount}
    </Badge>
  )
}

// Specialized notification badges for different types
export function MessageNotificationBadge({ count, className }: { count: number; className?: string }) {
  return (
    <NotificationBadge
      count={count}
      variant="primary"
      size="sm"
      className={className}
    />
  )
}

export function ForumNotificationBadge({ count, className }: { count: number; className?: string }) {
  return (
    <NotificationBadge
      count={count}
      variant="secondary"
      size="sm"
      className={className}
    />
  )
}

export function AlertNotificationBadge({ count, className }: { count: number; className?: string }) {
  return (
    <NotificationBadge
      count={count}
      variant="destructive"
      size="md"
      animate={true}
      className={className}
    />
  )
}

// Pulse indicator for active states (typing, online, etc.)
export function PulseIndicator({ 
  variant = 'success', 
  size = 'sm',
  className 
}: { 
  variant?: 'success' | 'warning' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  className?: string 
}) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  }

  const variantClasses = {
    success: 'bg-sagebrush-green',
    warning: 'bg-sandy-ochre',
    primary: 'bg-nav-events'
  }

  return (
    <div className={cn("relative", className)}>
      {/* Main dot */}
      <div 
        className={cn(
          "rounded-full",
          sizeClasses[size],
          variantClasses[variant]
        )}
      />
      
      {/* Pulse rings */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full animate-ping opacity-75",
          variantClasses[variant]
        )}
      />
      <div 
        className={cn(
          "absolute inset-0 rounded-full animate-ping opacity-50 animation-delay-75",
          variantClasses[variant]
        )}
      />
    </div>
  )
}