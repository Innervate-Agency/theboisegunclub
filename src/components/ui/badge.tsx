import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-[var(--space-xs)] py-[var(--space-tiny)] text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-[var(--space-xs)] [&>svg]:pointer-events-none transition-all duration-[var(--timing-normal)] ease-out overflow-hidden relative",
  {
    variants: {
      variant: {
        default: "bg-muted text-card-foreground hover:bg-muted/80",
        premium: "bg-brass-yellow/10 text-brass-yellow hover:bg-brass-yellow/20 relative",
        elite: "bg-copper-orange/10 text-copper-orange hover:bg-copper-orange/20 relative",
        glass: "mica-overlay text-card-foreground",
        success: "bg-rifling-green/10 text-rifling-green hover:bg-rifling-green/20",
        warning: "bg-sight-gold/10 text-sight-gold hover:bg-sight-gold/20",
        error: "bg-safety-red/10 text-safety-red hover:bg-safety-red/20",
        info: "bg-scope-blue/10 text-scope-blue hover:bg-scope-blue/20",
        outline: "text-muted-foreground hover:bg-muted ring-1 ring-border/30 hover:ring-border/50",
        destructive: "bg-muzzle-flash/10 text-muzzle-flash hover:bg-muzzle-flash/20"
      },
      size: {
        sm: "px-[var(--space-xs)] py-[var(--space-tiny)] text-xs h-5",
        default: "px-[var(--space-sm)] py-[var(--space-tiny)] text-xs h-6",
        lg: "px-[var(--space-base)] py-[var(--space-xs)] text-sm h-8",
        xl: "px-[var(--space-base)] py-[var(--space-sm)] text-sm h-10"
      },
      animate: {
        true: "hover:scale-105 active:scale-95"
      },
      pulse: {
        true: "animate-pulse"
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
  icon?: React.ReactNode
  shimmer?: boolean
  dismissible?: boolean
  onDismiss?: () => void
}

function Badge({
  className,
  variant,
  size,
  asChild = false,
  icon,
  shimmer = false,
  dismissible = false,
  onDismiss,
  animate,
  pulse,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size, animate, pulse }),
        shimmer && "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:animate-[shimmer_1.5s_ease-in-out] before:transition-transform",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-[var(--space-tiny)] shrink-0 hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors duration-[var(--timing-fast)]"
          aria-label="Remove badge"
        >
          <X className="h-2.5 w-2.5" />
        </button>
      )}
    </Comp>
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
