'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { WesternDivider } from '@/components/ui/western-dividers'

const sectionContainerVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        hero: "section-hero",
        content: "section-content", 
        cta: "section-cta",
        feature: "section-feature",
        stats: "section-stats"
      },
      background: {
        none: "",
        background: "bg-background",
        card: "bg-card",
        muted: "bg-muted",
        "muted-subtle": "bg-muted-subtle",
        "muted-soft": "bg-muted-soft",
        "gradient-primary": "bg-gradient-buysell-events",
        "gradient-secondary": "bg-gradient-home-movement",
        "gradient-intel": "bg-gradient-intel-hero",
        accent: "bg-accent",
        destructive: "bg-destructive"
      },
      spacing: {
        none: "",
        sm: "py-lg",
        md: "py-xl", 
        lg: "py-2xl",
        xl: "py-3xl"
      }
    },
    defaultVariants: {
      variant: "content",
      background: "none",
      spacing: "lg"
    }
  }
)

export interface SectionContainerProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionContainerVariants> {
  // Divider configuration
  topDivider?: 'bruno-sand-dunes' | 'snake-river-canyon' | 'frank-church-wilderness' | 'sawtooth-peaks'
  bottomDivider?: 'bruno-sand-dunes' | 'snake-river-canyon' | 'frank-church-wilderness' | 'sawtooth-peaks'
  dividerColor?: string
  
  // Content wrapper configuration
  containerize?: boolean
  containerClassName?: string
  
  // Section identification for theme system
  sectionId?: string
}

/**
 * SectionContainer - Handles all section-level styling and structure
 * 
 * This compound component prevents style conflicts by:
 * - Controlling ALL backgrounds, spacing, and dividers in one place
 * - Providing consistent container wrapping
 * - Establishing clear section boundaries that can't interfere
 * - Integrating with theme-specific CSS classes
 * 
 * Usage:
 *   <SectionContainer 
 *     variant="hero" 
 *     background="gradient-primary"
 *     bottomDivider="bruno-sand-dunes"
 *     spacing="xl"
 *   >
 *     <ContentComponent />
 *   </SectionContainer>
 */
export function SectionContainer({ 
  variant,
  background,
  spacing,
  topDivider,
  bottomDivider,
  dividerColor,
  containerize = true,
  containerClassName,
  sectionId,
  className,
  children,
  ...props 
}: SectionContainerProps) {
  const sectionRef = React.useRef<HTMLElement>(null)
  
  // Register section with page theme context if available
  React.useEffect(() => {
    if (sectionId) {
      // Could integrate with PageContainer context here
    }
  }, [sectionId])
  
  const content = containerize ? (
    <div className={cn(
      "container mx-auto px-lg",
      containerClassName
    )}>
      {children}
    </div>
  ) : children
  
  return (
    <>
      {/* Top Divider */}
      {topDivider && (
        <WesternDivider 
          variant={topDivider}
          color={dividerColor}
          className="relative z-10"
        />
      )}
      
      <section 
        ref={sectionRef}
        id={sectionId}
        className={cn(
          sectionContainerVariants({ variant, background, spacing }),
          className
        )}
        data-section={variant}
        {...props}
      >
        {content}
      </section>
      
      {/* Bottom Divider */}
      {bottomDivider && (
        <WesternDivider 
          variant={bottomDivider}
          color={dividerColor}
          className="relative z-10"
        />
      )}
    </>
  )
}

/**
 * Specialized section containers for common use cases
 */

export function HeroSection({ children, ...props }: Omit<SectionContainerProps, 'variant'>) {
  return (
    <SectionContainer 
      variant="hero"
      spacing="none"
      containerize={false}
      {...props}
    >
      {children}
    </SectionContainer>
  )
}

export function ContentSection({ children, ...props }: Omit<SectionContainerProps, 'variant'>) {
  return (
    <SectionContainer 
      variant="content"
      background="background"
      spacing="xl"
      {...props}
    >
      {children}
    </SectionContainer>
  )
}

export function FeatureSection({ children, ...props }: Omit<SectionContainerProps, 'variant'>) {
  return (
    <SectionContainer 
      variant="feature"
      background="muted-subtle"
      spacing="xl"
      bottomDivider="bruno-sand-dunes"
      {...props}
    >
      {children}
    </SectionContainer>
  )
}

export function CTASection({ children, ...props }: Omit<SectionContainerProps, 'variant'>) {
  return (
    <SectionContainer 
      variant="cta"
      background="gradient-primary"
      spacing="xl"
      {...props}
    >
      {children}
    </SectionContainer>
  )
}

export function StatsSection({ children, ...props }: Omit<SectionContainerProps, 'variant'>) {
  return (
    <SectionContainer 
      variant="stats"
      background="card"
      spacing="lg"
      topDivider="snake-river-canyon"
      bottomDivider="frank-church-wilderness"
      {...props}
    >
      {children}
    </SectionContainer>
  )
}