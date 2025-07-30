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
        // Default: Clean theme-aware with sophisticated shadow depth (NO BORDER)
        default: "bg-card text-card-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-copper-orange",
        
        // Primary: More prominent theme-aware with deeper shadow (NO BORDER)
        primary: "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:ring-copper-orange",
        
        // Secondary: Subtle theme-aware background with better depth (NO BORDER)
        secondary: "bg-muted text-card-foreground shadow-sm hover:shadow-md hover:bg-muted/80 hover:-translate-y-0.5 focus-visible:ring-copper-orange",
        
        // Accent: Clean theme-aware with copper accent background
        accent: "bg-copper-orange/10 text-copper-orange shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-copper-orange/50 hover:bg-copper-orange/20",
        
        // Success: Clean theme-aware with green accent background
        success: "bg-rifling-green/10 text-rifling-green shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-rifling-green/50 hover:bg-rifling-green/20",
        
        // Destructive: Clean theme-aware with safety red accent background
        destructive: "bg-safety-red/10 text-safety-red shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-safety-red/50 hover:bg-safety-red/20",
        
        // Glass: Windows 11 Mica-inspired glassmorphism (borderless for clean look)
        glass: "mica-overlay text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-brass-yellow/50 hover:bg-white/25 transition-all duration-200",
        
        // Solid variants - fun, colorful, no shadows, with interactive effects
        "solid-accent": "bg-brass-yellow text-primary hover:bg-copper-orange focus-visible:ring-brass-yellow/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-success": "bg-rifling-green text-white hover:bg-bore-sight-green focus-visible:ring-rifling-green/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-destructive": "bg-copper-orange text-white hover:bg-recoil-pad focus-visible:ring-copper-orange/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-primary": "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/50 border-0 transition-all duration-200 stripe-arrow",
        
        // Ghost: Minimal with subtle hover (theme-aware)
        ghost: "text-muted-foreground hover:bg-muted hover:shadow-xs focus-visible:ring-copper-orange border-0",
        
        // Flat: No shadows, perfect for inside cards/forms (Stripe-like design system)
        flat: "bg-brass-yellow text-primary hover:bg-copper-orange focus-visible:ring-brass-yellow/50 transition-colors duration-150",
        
        // Link: Simple text, no shadow
        link: "text-copper-orange hover:text-recoil-pad underline-offset-4 hover:underline focus-visible:ring-copper-orange border-0",
        
        // Fire: The "fucking great" gradient with bottom accent bar
        fire: "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:ring-copper-orange transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Blue: Blue to green fire gradient 
        "fire-blue": "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:ring-ayu-blue transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Purple: Purple to cobalt fire gradient
        "fire-purple": "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:ring-ayu-purple transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-purple after:to-ayu-blue after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Green: Green variants fire gradient
        "fire-green": "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:ring-ayu-green transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-green after:to-clubhouse-lawn-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2"
      },
      size: {
        xs: "px-2 py-1 text-xs h-6 gap-1",
        sm: "h-[var(--button-height-sm)] px-3 py-1.5 text-xs gap-1.5", // For inside cards/forms - Stripe pattern
        default: "h-[var(--button-height-base)] px-4 py-2.5 text-sm gap-2", // General usage
        lg: "h-[var(--button-height-lg)] px-6 py-3 text-base gap-2", // Hero/primary actions
        xl: "h-[var(--button-height-xl)] px-8 py-4 text-lg gap-2.5", // Call-to-action buttons
        icon: "h-[var(--button-height-base)] w-[var(--button-height-base)] p-0"
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