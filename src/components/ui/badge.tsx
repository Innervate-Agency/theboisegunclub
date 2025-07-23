import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-stripe-fast focus:outline-none focus:ring-2 focus:ring-scope-blue focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-case-hardened text-range-white hover:bg-case-hardened/80",
        premium:
          "border-transparent bg-brass-yellow text-blued-steel hover:bg-brass-yellow/80 shadow-sm",
        elite:
          "border-transparent bg-gradient-to-r from-brass-yellow to-copper-orange text-blued-steel hover:shadow-md shadow-sm",
        verified:
          "border-transparent bg-rifling-green/20 text-rifling-green border-rifling-green/30 hover:bg-rifling-green/30",
        secondary:
          "border-transparent bg-shooting-bench text-case-hardened hover:bg-shooting-bench/80",
        destructive:
          "border-transparent bg-red-500 text-range-white hover:bg-red-500/80",
        outline:
          "text-case-hardened border-case-hardened/30 hover:bg-shooting-bench hover:text-blued-steel",
        glass:
          "border-case-hardened/20 bg-range-white/80 text-case-hardened backdrop-blur-sm hover:bg-range-white/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }