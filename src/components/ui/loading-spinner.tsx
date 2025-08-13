import * as React from "react"
import { Diamond } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
  sm: "size-4",
  md: "size-6", 
  lg: "size-8",
  xl: "h-12 w-12"
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
  return (
    <Diamond 
      className={cn("animate-spin text-current", sizeClasses[size], className)} 
      weight="bold" 
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