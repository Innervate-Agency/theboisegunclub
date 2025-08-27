'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { motion } from "framer-motion"

// Create properly typed motion components using LazyMotion-compatible m
const MotionDiv = motion.div
const MotionNav = motion.nav
const MotionP = motion.p
const MotionH1 = motion.h1

const zigzagHeroVariants = cva(
  "relative w-full min-h-[600px] overflow-hidden",
  {
    variants: {
      gradient: {
        events: "bg-gradient-to-br from-nav-events via-nav-marketplace to-nav-home", // FireIcon gradient
        directory: "bg-gradient-to-br from-nav-directory via-nav-forums to-nav-home", // Professional earth
        armory: "bg-gradient-to-br from-nav-armory via-nav-intel to-nav-events", // Teal to orange fire
        intel: "bg-gradient-to-br from-nav-intel via-nav-directory to-nav-armory", // Military analytical 
        marketplace: "bg-gradient-to-br from-nav-marketplace via-nav-home to-nav-events", // Golden commerce energy
      },
      layout: {
        left: "text-left",
        right: "text-right flex-row-reverse"
      }
    },
    defaultVariants: {
      gradient: "events",
      layout: "left"
    }
  }
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
}

const cardVariants = {
  hidden: { x: 60, opacity: 0, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

export interface ZigzagHeroProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof zigzagHeroVariants> {
  title: string
  subtitle?: string
  description: string
  breadcrumbs?: Array<{ label: string; href?: string }>
  badges?: Array<{ label: string; variant?: 'default' | 'secondary' | 'outline' }>
  primaryAction?: { label: string; href?: string; onClick?: () => void }
  secondaryAction?: { label: string; href?: string; onClick?: () => void }
  featuredCard?: React.ReactNode
  stats?: Array<{ label: string; value: string; icon?: React.ComponentType<{ className?: string }> }>
}

export function ZigzagHero({
  className,
  gradient,
  layout,
  title,
  subtitle,
  description,
  breadcrumbs,
  badges,
  primaryAction,
  secondaryAction,
  featuredCard,
  stats,
  ...props
}: ZigzagHeroProps) {
  const isRightLayout = layout === 'right'
  
  return (
    <section
      className={cn(zigzagHeroVariants({ gradient, layout }), className)}
      {...props}
    >
      {/* Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      
      {/* Animated Background Pattern */}
      <MotionDiv 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="relative z-10 max-w-site mx-auto px-base py-24">
        <div className={cn(
          "grid lg:grid-cols-2 gap-micro6 items-center min-h-[400px]",
          isRightLayout && "lg:grid-cols-2"
        )}>
          
          {/* Content Section */}
          <MotionDiv 
            className={cn(
              "space-y-lg",
              isRightLayout ? "lg:order-2 text-right" : "lg:order-1 text-left"
            )}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumbs */}
            {breadcrumbs && (
              <MotionNav 
                variants={itemVariants}
                className={cn("flex items-center gap-tiny text-body-sm", isRightLayout ? "justify-end" : "justify-start")}
              >
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <span className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {crumb.href ? (
                        <a href={crumb.href} className="hover:underline">
                          {crumb.label}
                        </a>
                      ) : (
                        crumb.label
                      )}
                    </span>
                    {index < breadcrumbs.length - 1 && (
                      <span className="text-primary-foreground/50">/</span>
                    )}
                  </React.Fragment>
                ))}
              </MotionNav>
            )}
            
            {/* Badges */}
            {badges && (
              <MotionDiv 
                variants={itemVariants}
                className={cn("flex flex-wrap gap-xs", isRightLayout ? "justify-end" : "justify-start")}
              >
                {badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant={badge.variant || 'default'}
                    className="bg-accent/20 text-accent-foreground border-border/30 hover:bg-accent/30"
                  >
                    {badge.label}
                  </Badge>
                ))}
              </MotionDiv>
            )}
            
            {/* Subtitle */}
            {subtitle && (
              <MotionP 
                variants={itemVariants}
              className="text-primary-foreground/90 font-rajdhani font-medium text-heading-lg tracking-wide"
              >
                {subtitle}
              </MotionP>
            )}
            
            {/* Title */}
            <MotionH1 
              variants={itemVariants}
              className="font-rajdhani font-bold text-heading-4xl md:text-display-lg lg:text-7xl text-primary-foreground leading-tight tracking-tight"
            >
              {title}
            </MotionH1>
            
            {/* Description */}
            <MotionP 
              variants={itemVariants}
              className="text-body-xl text-primary-foreground/90 leading-relaxed max-w-2xl"
            >
              {description}
            </MotionP>
            
            {/* Action Buttons */}
            {(primaryAction || secondaryAction) && (
              <MotionDiv 
                variants={itemVariants}
                className={cn("flex flex-wrap gap-sm", isRightLayout ? "justify-end" : "justify-start")}
              >
                {primaryAction && (
                  <Button variant="outline"
                    className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold px-lg py-base text-heading-lg shadow-commanding"
                    onClick={primaryAction.onClick}
                  >
                    {primaryAction.label}
                  </Button>
                )}
                {secondaryAction && (
                  <Button variant="outline"
                    className="border-border/50 text-foreground hover:bg-accent/10 font-semibold px-lg py-base text-heading-lg"
                    onClick={secondaryAction.onClick}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </MotionDiv>
            )}
            
            {/* Stats */}
            {stats && (
              <MotionDiv 
                variants={itemVariants}
                className={cn("grid grid-cols-3 gap-lg pt-8", isRightLayout ? "text-right" : "text-left")}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-tiny">
                    {stat.icon && (
                      <stat.icon className="size-8 text-primary-foreground/80 mx-auto" />
                    )}
                    <div className="text-heading-2xl font-rajdhani font-bold text-primary-foreground">
                      {stat.value}
                    </div>
                    <div className="text-body-sm text-primary-foreground/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </MotionDiv>
            )}
          </MotionDiv>
          
          {/* Featured Card Section */}
          {featuredCard && (
            <MotionDiv 
              className={cn(
                "flex justify-center items-center",
                isRightLayout ? "lg:order-1" : "lg:order-2"
              )}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <MotionDiv
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
              >
                {featuredCard}
              </MotionDiv>
            </MotionDiv>
          )}
        </div>
      </div>
    </section>
  )
}

export default ZigzagHero
