import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-all duration-150 ease-out overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-stone-100 text-gray-900 border-stone-200 hover:bg-stone-200",
        premium: "bg-yellow-100 text-yellow-900 border-yellow-200 hover:bg-yellow-200 shadow-sm",
        elite: "bg-yellow-200 text-yellow-900 border-yellow-300 hover:bg-yellow-300 shadow-md",
        glass: "backdrop-blur-sm bg-white/80 border-gray-200 text-gray-900 shadow-sm",
        success: "bg-green-100 text-green-900 border-green-200 hover:bg-green-200",
        warning: "bg-amber-100 text-amber-900 border-amber-200 hover:bg-amber-200",
        error: "bg-red-100 text-red-900 border-red-200 hover:bg-red-200",
        info: "bg-blue-100 text-blue-900 border-blue-200 hover:bg-blue-200",
        outline: "text-gray-700 border-gray-300 hover:bg-gray-50",
        destructive: "bg-red-100 text-red-900 border-red-200 hover:bg-red-200"
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
