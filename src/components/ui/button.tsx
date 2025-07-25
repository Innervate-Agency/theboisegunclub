import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden transition-stripe-fast",
  {
    variants: {
      variant: {
        default: "bg-shooting-bench text-blued-steel border border-case-hardened/20 shadow-sm hover:shadow-md",
        premium: "bg-gradient-premium text-gunmetal-black shadow-premium hover:shadow-elite hover:scale-[1.02] mica-premium",
        elite: "bg-gradient-elite text-gunmetal-black shadow-elite animate-shimmer hover:scale-[1.05] mica-elite",
        glass: "backdrop-blur-sm bg-shooting-bench/10 border-brass-yellow/20 text-blued-steel hover:bg-shooting-bench/20",
        destructive: "bg-safety-red text-nickel-white shadow-sm hover:bg-safety-red/90",
        outline: "border-2 border-brass-yellow text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black",
        ghost: "text-blued-steel hover:bg-shooting-bench hover:text-blued-steel"
      },
      size: {
        sm: "px-3 py-1.5 text-sm h-8",
        default: "px-4 py-2 text-base h-10",
        lg: "px-6 py-3 text-lg h-12",
        xl: "px-8 py-4 text-xl h-14"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        default: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }