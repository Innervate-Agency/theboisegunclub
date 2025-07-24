import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

// Additional badge components for specific use cases
function ClassificationBadge({
  classification,
  className,
  ...props
}: React.ComponentProps<"span"> & { classification: string }) {
  const getVariant = (classification: string) => {
    switch (classification.toLowerCase()) {
      case 'master':
      case 'expert':
        return 'default'
      case 'sharpshooter':
      case 'marksman':
        return 'secondary'
      default:
        return 'outline'
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
        return 'default'
      case 'pending':
      case 'in-progress':
        return 'secondary'
      case 'inactive':
      case 'rejected':
      case 'cancelled':
        return 'destructive'
      default:
        return 'outline'
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
    if (percentage >= 90) return 'default'
    if (percentage >= 70) return 'secondary'
    if (percentage >= 50) return 'outline'
    return 'destructive'
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
