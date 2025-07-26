import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-stripe-fast overflow-hidden font-noto-sans",
  {
    variants: {
      variant: {
        default: "bg-shooting-bench text-blued-steel border-case-hardened/20 hover:bg-shooting-bench/80",
        premium: "bg-gradient-premium text-gunmetal-black border-brass-yellow/30 shadow-premium hover:shadow-elite mica-premium",
        elite: "bg-gradient-elite text-gunmetal-black border-brass-yellow/40 shadow-elite animate-shimmer mica-elite",
        glass: "backdrop-blur-sm bg-shooting-bench/20 border-brass-yellow/30 text-blued-steel",
        success: "bg-rifling-green text-nickel-white border-transparent hover:bg-rifling-green/90",
        warning: "bg-sight-gold text-gunmetal-black border-transparent hover:bg-sight-gold/90",
        error: "bg-safety-red text-nickel-white border-transparent hover:bg-safety-red/90",
        info: "bg-scope-blue text-nickel-white border-transparent hover:bg-scope-blue/90",
        outline: "text-blued-steel border-case-hardened hover:bg-shooting-bench",
        destructive: "bg-safety-red text-nickel-white border-transparent hover:bg-safety-red/90"
      },
      size: {
        sm: "px-2 py-0.5 text-xs h-5",
        default: "px-2.5 py-0.5 text-xs h-6",
        lg: "px-3 py-1 text-sm h-7",
        xl: "px-4 py-1.5 text-sm h-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

// Firearms-specific badge components
function ClassificationBadge({
  classification,
  className,
  ...props
}: React.ComponentProps<"span"> & { classification: string }) {
  const getVariant = (classification: string) => {
    switch (classification.toLowerCase()) {
      case 'master':
      case 'aa':
        return 'elite' as const
      case 'a':
      case 'expert':
        return 'premium' as const
      case 'b':
      case 'sharpshooter':
        return 'success' as const
      case 'c':
      case 'marksman':
        return 'info' as const
      case 'd':
      case 'novice':
        return 'warning' as const
      default:
        return 'outline' as const
    }
  }

  return (
    <Badge
      variant={getVariant(classification)}
      className={className}
      {...props}
    >
      {classification}
    </Badge>
  )
}

function StatusBadge({
  status,
  className,
  ...props
}: React.ComponentProps<"span"> & { status: string }) {
  const getVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'approved':
      case 'completed':
        return 'success' as const
      case 'premium':
      case 'elite':
        return 'premium' as const
      case 'pending':
      case 'trial':
      case 'in-progress':
        return 'warning' as const
      case 'inactive':
      case 'expired':
        return 'outline' as const
      case 'suspended':
      case 'rejected':
      case 'cancelled':
        return 'destructive' as const
      default:
        return 'default' as const
    }
  }

  return (
    <Badge
      variant={getVariant(status)}
      className={className}
      {...props}
    >
      {status}
    </Badge>
  )
}

function ScoreBadge({
  score,
  maxScore,
  className,
  ...props
}: React.ComponentProps<"span"> & { score: number; maxScore?: number }) {
  const percentage = maxScore ? (score / maxScore) * 100 : score
  
  const getVariant = (percentage: number) => {
    if (percentage >= 95) return 'elite' as const
    if (percentage >= 85) return 'premium' as const
    if (percentage >= 75) return 'success' as const
    if (percentage >= 60) return 'info' as const
    if (percentage >= 40) return 'warning' as const
    return 'error' as const
  }

  return (
    <Badge
      variant={getVariant(percentage)}
      className={className}
      {...props}
    >
      {maxScore ? `${score}/${maxScore}` : score}
    </Badge>
  )
}

export { Badge, badgeVariants, ClassificationBadge, StatusBadge, ScoreBadge }
export type { BadgeProps }
