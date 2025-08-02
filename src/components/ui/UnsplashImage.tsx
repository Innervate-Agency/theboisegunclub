'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { ImageIcon } from 'lucide-react'

interface BaseImageProps {
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  loading?: 'lazy' | 'eager'
  fill?: boolean
  fallback?: string
  onLoad?: () => void
  onError?: () => void
}

// Base optimized image component
export default function LocalImage({
  alt,
  width = 600,
  height = 400,
  className,
  priority = false,
  quality = 85,
  loading = 'lazy',
  fill = false,
  fallback = '/images/hero-bg.webp',
  onLoad,
  onError,
  ...props
}: BaseImageProps) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)
  const [imageSrc, setImageSrc] = React.useState(fallback)
  
  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }
  
  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    onError?.()
  }
  
  if (hasError) {
    return (
      <div 
        className={cn(
          "bg-gradient-card-warm border border-brass-yellow/20 rounded-lg flex items-center justify-center",
          className
        )}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      >
        <div className="text-center space-y-[var(--space-xs)]">
          <ImageIcon className="icon-xl icon-muted mx-auto" />
          <p className="text-sm text-case-hardened font-noto-sans">Image unavailable</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Loading Placeholder */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gradient-card-warm border border-brass-yellow/20 rounded-lg flex items-center justify-center z-10"
          style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
        >
          <div className="animate-pulse space-y-[var(--space-xs)] text-center">
            <ImageIcon className="icon-lg icon-muted mx-auto" />
            <p className="text-xs text-case-hardened font-noto-sans">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Optimized Image */}
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        {...props}
      />
    </div>
  )
}

// Hero-specific image component
export function HeroImage({
  alt = "Boise Gun Club Hero Image",
  width = 1200,
  height = 600,
  priority = true,
  quality = 95,
  className,
  ...props
}: Partial<BaseImageProps>) {
  return (
    <LocalImage
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      className={cn("rounded-xl shadow-lg", className)}
      fallback="/images/hero-bg.webp"
      {...props}
    />
  )
}

// Event-specific image component
export function EventImage({
  alt = "Gun Club Event",
  width = 800,
  height = 500,
  priority = false,
  quality = 85,
  className,
  ...props
}: Partial<BaseImageProps>) {
  return (
    <LocalImage
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      className={cn("rounded-lg", className)}
      fallback="/images/events.jpg"
      {...props}
    />
  )
}

// Training-specific image component
export function TrainingImage({
  alt = "Firearms Training Session",
  width = 600,
  height = 400,
  priority = false,
  quality = 85,
  className,
  ...props
}: Partial<BaseImageProps>) {
  return (
    <LocalImage
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      className={cn("rounded-lg", className)}
      fallback="/images/training.jpg"
      {...props}
    />
  )
}

// Membership-specific image component
export function MembershipImage({
  alt = "Club Membership Benefits",
  width = 400,
  height = 300,
  priority = false,
  quality = 85,
  className,
  ...props
}: Partial<BaseImageProps>) {
  return (
    <LocalImage
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      className={cn("rounded-lg", className)}
      fallback="/images/membership.jpg"
      {...props}
    />
  )
}
