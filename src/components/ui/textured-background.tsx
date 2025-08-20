'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { getTextureStyle, TEXTURE_PRESETS, type TextureOptions, getMaskingStyle, type MaskingOptions } from '@/utils/tacticalTextures'

interface TexturedBackgroundProps {
  /** Preset texture configuration */
  preset?: keyof typeof TEXTURE_PRESETS
  /** Custom texture pattern function */
  customPattern?: (options: TextureOptions) => string
  /** Custom texture options */
  textureOptions?: TextureOptions
  /** Custom masking configuration */
  maskingOptions?: MaskingOptions
  /** Overall opacity multiplier */
  opacity?: number
  /** Additional CSS classes */
  className?: string
  /** Children to render over the texture */
  children?: React.ReactNode
  /** Whether to render as overlay (absolute positioning) */
  asOverlay?: boolean
}

/**
 * TexturedBackground Component
 * Provides a sophisticated textured background using tactical geometric patterns
 * Can be used as a background or overlay for any component
 */
export function TexturedBackground({
  preset = 'eventCard',
  customPattern,
  textureOptions,
  maskingOptions,
  opacity = 1,
  className,
  children,
  asOverlay = false
}: TexturedBackgroundProps) {
  const textureStyle = React.useMemo(() => {
    if (customPattern && textureOptions) {
      // Custom pattern with options
      const pattern = customPattern(textureOptions)
      const masking = maskingOptions ? getMaskingStyle(maskingOptions) : {}
      
      return {
        backgroundImage: pattern,
        opacity: opacity,
        ...masking
      }
    } else if (preset) {
      // Use preset configuration
      return getTextureStyle(preset, opacity)
    }
    
    return {}
  }, [preset, customPattern, textureOptions, maskingOptions, opacity])

  const baseClasses = asOverlay 
    ? "absolute inset-0 pointer-events-none" 
    : "relative w-full h-full"

  if (children && !asOverlay) {
    // Container mode - texture as background
    return (
      <div className={cn("relative", className)}>
        <div 
          className="absolute inset-0" 
          style={textureStyle}
          aria-hidden="true"
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }

  // Overlay mode or standalone texture
  return (
    <div 
      className={cn(baseClasses, className)}
      style={textureStyle}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}

/**
 * Pre-configured texture background components for common use cases
 */

export function FooterTexture({ className, ...props }: Omit<TexturedBackgroundProps, 'preset'>) {
  return (
    <TexturedBackground 
      preset="footer" 
      asOverlay 
      className={cn("z-0", className)} 
      {...props} 
    />
  )
}

export function PremiumCardTexture({ className, ...props }: Omit<TexturedBackgroundProps, 'preset'>) {
  return (
    <TexturedBackground 
      preset="premiumCard" 
      asOverlay 
      className={cn("z-0", className)} 
      {...props} 
    />
  )
}

export function EventCardTexture({ className, ...props }: Omit<TexturedBackgroundProps, 'preset'>) {
  return (
    <TexturedBackground 
      preset="eventCard" 
      asOverlay 
      className={cn("z-0", className)} 
      {...props} 
    />
  )
}

export function CompetitionCardTexture({ className, ...props }: Omit<TexturedBackgroundProps, 'preset'>) {
  return (
    <TexturedBackground 
      preset="competitionCard" 
      asOverlay 
      className={cn("z-0", className)} 
      {...props} 
    />
  )
}

export function DirectoryCardTexture({ className, ...props }: Omit<TexturedBackgroundProps, 'preset'>) {
  return (
    <TexturedBackground 
      preset="directoryCard" 
      asOverlay 
      className={cn("z-0", className)} 
      {...props} 
    />
  )
}

export function NavigationTexture({ className, ...props }: Omit<TexturedBackgroundProps, 'preset'>) {
  return (
    <TexturedBackground 
      preset="navigation" 
      asOverlay 
      className={cn("z-0", className)} 
      {...props} 
    />
  )
}

/**
 * Hook for getting texture styles directly (for inline styling)
 */
export function useTextureStyle(
  preset: keyof typeof TEXTURE_PRESETS, 
  opacity = 1
): React.CSSProperties {
  return React.useMemo(() => getTextureStyle(preset, opacity), [preset, opacity])
}