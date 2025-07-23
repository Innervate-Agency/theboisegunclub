// See EXTRACT_component-pattern.tsx for full content. Use as a template for new UI components.

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border border-border shadow-sm hover:shadow-md",
        premium: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-premium border border-leonard-yellow/20 hover:shadow-elite hover:scale-[1.02] transition-normal group",
        elite: "bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-elite border-2 border-leonard-yellow/30 animate-shimmer hover:scale-[1.05] transition-normal group",
        glass: "border-white/20 bg-card/10 backdrop-blur-sm text-card hover:bg-card/20 hover:border-white/30",
        outline: "border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md"
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

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  { className, variant, size, asChild = false, ...props }, ref
) => {
  const Comp = asChild ? "span" : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonProps }
