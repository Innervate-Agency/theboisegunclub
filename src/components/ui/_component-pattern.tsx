// See EXTRACT_component-pattern.tsx for full content. Use as a template for new UI components.

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "inline-flex items-center justify-center transition-stripe-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border border-border shadow-flat hover:shadow-md",
        premium: "bg-fire-orange text-card-foreground shadow-premium border border-sandy-ochre/20 hover:shadow-elite hover:scale-[1.02] transition-stripe-normal group animate-fire-unfurl",
        elite: "bg-fire-animated text-card-foreground shadow-elite border-2 border-sandy-ochre/30 animate-fire-pulse hover:scale-[1.05] transition-stripe-normal group",
        glass: "border-card/20 bg-card/10 backdrop-blur-sm text-card hover:bg-card/20 hover:border-card/30"
      },
      size: {
        sm: "px-sm py-md text-body-sm",
        default: "px-base py-xs",
        lg: "px-md py-sm text-body-lg",
        xl: "px-lg py-base text-heading-sm"
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
