import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Stripe-style HoverArrow component
const HoverArrow: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={cn("HoverArrow inline-block", className)} 
    width="10" 
    height="10" 
    viewBox="0 0 10 10" 
    aria-hidden="true"
  >
    <g fillRule="evenodd">
      <path className="HoverArrow__linePath" d="M0 5h7" stroke="currentColor" strokeWidth="1" fill="none" />
      <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1" fill="none" />
    </g>
  </svg>
)

const buttonVariants = cva(
  // Clean, modern foundation - inspired by actual ClickUp/Stripe buttons
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative font-noto-sans",
  {
    variants: {
      variant: {
        // Default: Clean white with more sophisticated shadow depth
        default: "bg-white text-gray-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-gray-400 border border-gray-200 hover:border-gray-300",
        
        // Primary: More prominent white with deeper shadow
        primary: "bg-white text-gray-900 shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:ring-gray-400 border border-gray-300 hover:border-gray-400",
        
        // Secondary: Subtle gray background with better depth
        secondary: "bg-gray-50 text-gray-900 shadow-sm hover:shadow-md hover:bg-gray-100 hover:-translate-y-0.5 focus-visible:ring-gray-400 border border-gray-200 hover:border-gray-300",
        
        // Accent: Clean white with brass accent border and dark text for accessibility
        accent: "bg-white text-gunmetal-black shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-brass-yellow/50 border-2 border-brass-yellow/30 hover:border-brass-yellow/50 hover:bg-brass-yellow/5",
        
        // Success: Clean white with green accent border and dark text
        success: "bg-white text-gunmetal-black shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-rifling-green/50 border-2 border-rifling-green/30 hover:border-rifling-green/50 hover:bg-rifling-green/5",
        
        // Destructive: Clean white with red accent border and dark text  
        destructive: "bg-white text-gunmetal-black shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-safety-red/50 border-2 border-safety-red/30 hover:border-safety-red/50 hover:bg-safety-red/5",
        
        // Glass: Windows 11 Mica-inspired glassmorphism with noise effect
        glass: "bg-white/20 backdrop-blur-md text-gunmetal-black shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-brass-yellow/50 border border-white/30 hover:border-white/50 hover:bg-white/30 mica-glass",
        
        // Solid variants - fun, colorful, no shadows, with interactive effects
        "solid-accent": "bg-brass-yellow text-gunmetal-black hover:bg-copper-orange focus-visible:ring-brass-yellow/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-success": "bg-rifling-green text-nickel-white hover:bg-bore-sight-green focus-visible:ring-rifling-green/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-destructive": "bg-safety-red text-nickel-white hover:bg-muzzle-flash focus-visible:ring-safety-red/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-primary": "bg-scope-blue text-nickel-white hover:bg-trigger-blue focus-visible:ring-scope-blue/50 border-0 transition-all duration-200 stripe-arrow",
        
        // Ghost: Minimal with subtle hover (like both sites use for tertiary actions)
        ghost: "text-gray-700 hover:bg-gray-50 hover:shadow-xs focus-visible:ring-gray-400 border-0",
        
        // Link: Simple text, no shadow
        link: "text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline focus-visible:ring-blue-400 border-0"
      },
      size: {
        xs: "px-2.5 py-1.5 text-xs h-7 gap-1",
        sm: "px-3 py-2 text-sm h-9 gap-1.5",
        default: "px-4 py-2.5 text-sm h-10 gap-2",
        lg: "px-6 py-3 text-base h-12 gap-2",
        xl: "px-8 py-4 text-lg h-14 gap-2.5",
        icon: "h-10 w-10 p-0"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        default: "rounded-lg",
        lg: "rounded-xl",
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
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isSolidVariant = variant?.startsWith('solid-')
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, rounded }),
          loading && "cursor-wait",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent opacity-60" />
          </div>
        )}
        <span className={cn("flex items-center", loading && "invisible")}>
          {children}
          {isSolidVariant && !loading && (
            <HoverArrow className="ml-2" />
          )}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }