import * as React from "react"
import { LoadingTumbleweed } from "./idaho-tumbleweed"
import { cn } from "@/lib/utils"

export interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

// Map old size props to new tumbleweed sizes
const sizeMapping = {
  sm: "micro" as const,
  md: "default" as const,
  lg: "large" as const,
  xl: "hero" as const
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
  return (
    <LoadingTumbleweed 
      className={cn("text-current", className)}
      size={sizeMapping[size]}
    />
  )
}

export function LoadingSpinnerWithText({ 
  text = "Loading...", 
  className,
  size = "md" 
}: LoadingSpinnerProps & { text?: string }) {
  return (
    <div className={cn("flex items-center gap-tiny", className)}>
      <LoadingSpinner size={size} />
      <span className="text-body-sm text-muted-foreground">{text}</span>
    </div>
  )
}