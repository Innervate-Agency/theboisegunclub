import * as React from "react"
import { ArrowRight, Plus, Minus, X, Circle, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Play, Pause, Eye, EyeOff, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AnimationProps {
  className?: string
  isActive?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
}

// Stripe-style arrow for navigation/actions
export function HoverArrow({ className, isActive = false }: AnimationProps) {
  return (
    <ArrowRight 
      className={cn(
        "size-4 transition-transform duration-300",
        isActive && "translate-x-1",
        className
      )} 
    />
  )
}

// Smooth plus ↔ minus for expand/collapse states
export function PlusMinusToggle({ className, isActive = false }: AnimationProps) {
  return (
    <div className={cn("relative size-4", className)}>
      <Plus 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
        )} 
      />
      <Minus 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "rotate-0 opacity-100" : "rotate-45 opacity-0"
        )} 
      />
    </div>
  )
}

// Clean X ↔ O transformation for on/off toggles
export function XOToggle({ className, isActive = false }: AnimationProps) {
  return (
    <div className={cn("relative size-4", className)}>
      <X 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
        )} 
      />
      <Circle 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "scale-75 opacity-0" : "scale-100 opacity-100"
        )} 
      />
    </div>
  )
}

// Rotating chevron for sort/direction indicators
export function ChevronRotate({ className, isActive = false, direction = 'up' }: AnimationProps) {
  const ChevronIcon = direction === 'up' ? ChevronUp : 
                     direction === 'down' ? ChevronDown :
                     direction === 'left' ? ChevronLeft : ChevronRight

  return (
    <ChevronIcon 
      className={cn(
        "size-4 transition-transform duration-300",
        isActive && (
          direction === 'up' ? "rotate-180" :
          direction === 'down' ? "rotate-180" :
          direction === 'left' ? "rotate-180" :
          "rotate-180"
        ),
        className
      )} 
    />
  )
}

// Arrow progression: > to >> for urgency/processing states
export function ArrowToDoubleArrow({ className, isActive = false }: AnimationProps) {
  return (
    <div className={cn("relative size-4", className)}>
      <ArrowRight 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "translate-x-1 opacity-60" : "translate-x-0 opacity-100"
        )} 
      />
      <ArrowRight 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
        )} 
      />
    </div>
  )
}

// Zero to X for empty/null to error states
export function ZeroToX({ className, isActive = false }: AnimationProps) {
  return (
    <div className={cn("relative size-4", className)}>
      <Circle 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
        )} 
      />
      <X 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-75"
        )} 
      />
    </div>
  )
}

// Play/Pause toggle for media controls
export function PlayPauseToggle({ className, isActive = false }: AnimationProps) {
  return (
    <div className={cn("relative size-4", className)}>
      <Play 
        className={cn(
          "absolute inset-0 size-4 fill-current transition-all duration-300",
          isActive ? "opacity-0 scale-75" : "opacity-100 scale-100"
        )} 
      />
      <Pause 
        className={cn(
          "absolute inset-0 size-4 fill-current transition-all duration-300",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
        )} 
      />
    </div>
  )
}

// Eye visibility toggle
export function EyeToggle({ className, isActive = false }: AnimationProps) {
  return (
    <div className={cn("relative size-4", className)}>
      <Eye 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
        )} 
      />
      <EyeOff 
        className={cn(
          "absolute inset-0 size-4 transition-all duration-300",
          isActive ? "opacity-0 scale-75" : "opacity-100 scale-100"
        )} 
      />
    </div>
  )
}

// Check transition for completion states
export function CheckTransition({ className, isActive = false }: AnimationProps) {
  return (
    <div className={cn("relative size-4", className)}>
      <div className={cn(
        "absolute inset-0 transition-all duration-300",
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
      )}>
        <div className="size-4 rounded-sm bg-sagebrush-green flex items-center justify-center">
          <Check className="size-3 text-white" strokeWidth={3} />
        </div>
      </div>
      <div className={cn(
        "absolute inset-0 transition-all duration-300",
        isActive ? "opacity-0 scale-75" : "opacity-100 scale-100"
      )}>
        <div className="size-4 rounded-sm border-2 border-current" />
      </div>
    </div>
  )
}

// Loading dots for processing states
export function LoadingDots({ className, speed = 'normal' }: AnimationProps) {
  const duration = speed === 'fast' ? '0.8s' : speed === 'slow' ? '1.4s' : '1s'
  
  return (
    <div className={cn("flex gap-1", className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1 h-1 bg-current rounded-full animate-pulse"
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: duration
          }}
        />
      ))}
    </div>
  )
}

// Pulse ring for active/recording states
export function PulseRing({ className, isActive = false }: AnimationProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="size-4 rounded-full bg-current" />
      {isActive && (
        <div className="absolute inset-0 size-4 rounded-full bg-current animate-ping opacity-30" />
      )}
    </div>
  )
}