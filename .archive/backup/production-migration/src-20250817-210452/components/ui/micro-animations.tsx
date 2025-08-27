import * as React from "react"
import { ArrowRight, Plus, Minus, X, Circle, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AnimationProps {
  className?: string
  isActive?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
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