import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-base px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border border-border bg-background text-foreground hover:bg-muted/50",
        secondary: "border border-secondary/30 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border border-destructive/30 bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input text-foreground hover:bg-accent hover:text-accent-foreground",
        success: "border border-bore-sight-green/30 bg-bore-sight-green/10 text-bore-sight-green hover:bg-bore-sight-green/20",
        warning: "border border-sight-gold/30 bg-sight-gold/10 text-sight-gold hover:bg-sight-gold/20",
        info: "border border-scope-blue/30 bg-scope-blue/10 text-scope-blue hover:bg-scope-blue/20",
        premium: "border border-sandy-ochre/30 bg-sandy-ochre/10 text-sandy-ochre hover:bg-sandy-ochre/20",
        elite: "border border-rusty-orange/30 bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20",
        flat: "border-transparent bg-muted text-muted-foreground",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }