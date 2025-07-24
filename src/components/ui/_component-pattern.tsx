// See EXTRACT_component-pattern.tsx for full content. Use as a template for new UI components.

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"

const componentVariants = cva(
  "inline-flex items-center justify-center transition-stripe-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border border-border shadow-sm hover:shadow-md",
        premium: "bg-gradient-to-r from-brass-yellow to-copper-orange text-black shadow-premium border border-brass-yellow/20 hover:shadow-elite hover:scale-[1.02] transition-stripe-normal group",
        elite: "bg-gradient-to-r from-brass-yellow via-copper-orange to-brass-yellow bg-[length:200%_100%] text-black shadow-elite border-2 border-brass-yellow/30 animate-shimmer hover:scale-[1.05] transition-stripe-normal group",
        glass: "border-white/20 bg-card/10 backdrop-blur-sm text-card hover:bg-card/20 hover:border-white/30"
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        default: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ComponentProps extends React.ComponentProps<"div">, VariantProps<typeof componentVariants> {
  asChild?: boolean
}

function ExampleComponent({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps) {
  const Comp = asChild ? "span" : "div"

  return (
    <Comp
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { ExampleComponent, componentVariants }
export type { ComponentProps }
