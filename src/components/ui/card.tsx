// See EXTRACT_component-pattern.tsx for full content. Use as a template for new UI components.

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm transition-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border border-border shadow-sm hover:shadow-md",
        premium: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-premium border border-leonard-yellow/20 hover:shadow-elite hover:scale-[1.02] transition-normal group",
        elite: "bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-elite border-2 border-leonard-yellow/30 animate-shimmer hover:scale-[1.05] transition-normal group",
        glass: "border-white/20 bg-card/10 backdrop-blur-sm text-card hover:bg-card/20 hover:border-white/30"
      },
      size: {
        sm: "p-3",
        default: "p-4",
        lg: "p-6",
        xl: "p-8"
      },
      hover: {
        none: "",
        subtle: "hover:shadow-md",
        lifted: "hover:shadow-lg hover:-translate-y-1"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "subtle",
    },
  }
)

interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((
  { className, variant, size, hover, asChild = false, ...props }, ref
) => {
  const Comp = asChild ? "span" : "div"

  return (
    <Comp
      className={cn(cardVariants({ variant, size, hover }), className)}
      ref={ref}
      {...props}
    />
  )
})
Card.displayName = "Card"

export { Card, cardVariants }
export type { CardProps }
