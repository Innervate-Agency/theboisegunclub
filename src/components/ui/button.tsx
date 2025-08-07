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

// Plus/Minus toggle animation for expand/collapse states
const PlusMinusToggle: React.FC<{ className?: string; isExpanded?: boolean }> = ({ className, isExpanded = false }) => (
  <svg 
    className={cn("PlusMinusToggle inline-block transition-all duration-300", className)} 
    width="10" 
    height="10" 
    viewBox="0 0 10 10" 
    aria-hidden="true"
  >
    <g fillRule="evenodd">
      <path 
        className="PlusMinusToggle__horizontal" 
        d="M2 5h6" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round"
      />
      <path 
        className={cn(
          "PlusMinusToggle__vertical transition-all duration-300 origin-center",
          isExpanded ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
        )}
        d="M5 2v6" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round"
      />
    </g>
  </svg>
)

// X/O toggle animation for on/off states
const XOToggle: React.FC<{ className?: string; isActive?: boolean }> = ({ className, isActive = false }) => (
  <svg 
    className={cn("XOToggle inline-block", className)} 
    width="10" 
    height="10" 
    viewBox="0 0 10 10" 
    aria-hidden="true"
  >
    <g fillRule="evenodd">
      {isActive ? (
        // O shape when active
        <circle 
          cx="5" 
          cy="5" 
          r="3" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          className="transition-all duration-300 animate-in fade-in-0 zoom-in-75"
        />
      ) : (
        // X shape when inactive
        <g className="transition-all duration-300 animate-in fade-in-0 zoom-in-75">
          <path d="M2 2l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      )}
    </g>
  </svg>
)

// Chevron rotation for sort/direction states
const ChevronRotate: React.FC<{ className?: string; direction?: 'up' | 'down' | 'left' | 'right' }> = ({ 
  className, 
  direction = 'right' 
}) => {
  const rotationClass = {
    'up': '-rotate-90',
    'down': 'rotate-90', 
    'left': 'rotate-180',
    'right': 'rotate-0'
  }[direction]

  return (
    <svg 
      className={cn("ChevronRotate inline-block transition-transform duration-300", rotationClass, className)} 
      width="10" 
      height="10" 
      viewBox="0 0 10 10" 
      aria-hidden="true"
    >
      <path 
        d="M3 2l4 3-4 3" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

const buttonVariants = cva(
  // Foundation: Use our comprehensive spacing system and typography hierarchy
  "inline-flex items-center justify-center whitespace-nowrap font-medium font-noto-sans relative transition-stripe-fast focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Default: Clean theme-aware with sophisticated shadow depth (NO BORDER)
        default: "bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-copper-orange",
        
        // Primary: More prominent theme-aware with deeper shadow (NO BORDER)
        primary: "bg-card text-card-foreground shadow-md hover:shadow-elevated hover:-translate-y-1 focus-visible:ring-copper-orange",
        
        // Secondary: Subtle theme-aware background with better depth (NO BORDER)
        secondary: "bg-muted text-card-foreground shadow-flat hover:shadow-md hover:bg-muted/80 hover:-translate-y-0.5 focus-visible:ring-copper-orange",
        
        // Accent: Clean theme-aware with copper accent background
        accent: "bg-copper-orange/10 text-copper-orange shadow-flat hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-copper-orange/50 hover:bg-copper-orange/20",
        
        // Success: Clean theme-aware with green accent background
        success: "bg-rifling-green/10 text-rifling-green shadow-flat hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-rifling-green/50 hover:bg-rifling-green/20",
        
        // Destructive: Clean theme-aware with safety red accent background
        destructive: "bg-safety-red/10 text-safety-red shadow-flat hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-safety-red/50 hover:bg-safety-red/20",
        
        // Outline: Clean theme-aware with border
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",

        // Glass: Windows 11 Mica-inspired glassmorphism (borderless for clean look)
        glass: "mica-overlay text-card-foreground shadow-md hover:shadow-elevated hover:-translate-y-0.5 focus-visible:ring-brass-yellow/50 hover:bg-card/25 transition-all duration-200",
        
        // Solid variants - fun, colorful, no shadows, with interactive effects
        "solid-accent": "bg-brass-yellow text-primary hover:bg-copper-orange focus-visible:ring-brass-yellow/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-success": "bg-rifling-green text-card-foreground hover:bg-bore-sight-green focus-visible:ring-rifling-green/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-destructive": "bg-copper-orange text-card-foreground hover:bg-recoil-pad focus-visible:ring-copper-orange/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-primary": "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/50 border-0 transition-all duration-200 stripe-arrow",
        
        // Ghost: Minimal with subtle hover (theme-aware)
        ghost: "text-muted-foreground hover:bg-muted hover:shadow-xs focus-visible:ring-copper-orange border-0",
        
        // Flat: No shadows, perfect for inside cards/forms (Stripe-like design system)
        flat: "bg-copper-orange/10 text-copper-orange hover:bg-copper-orange/20 focus-visible:ring-copper-orange/50 border-0 transition-colors duration-150",
        
        // Link: Simple text, no shadow
        link: "text-copper-orange hover:text-recoil-pad underline-offset-4 hover:underline focus-visible:ring-copper-orange border-0",
        
        // Fire: The "fucking great" gradient with bottom accent bar
        fire: "bg-card text-card-foreground shadow-md hover:shadow-elevated hover:-translate-y-1 focus-visible:ring-copper-orange transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Blue: Blue to green fire gradient 
        "fire-blue": "bg-card text-card-foreground shadow-md hover:shadow-elevated hover:-translate-y-1 focus-visible:ring-ayu-blue transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Purple: Purple to cobalt fire gradient
        "fire-purple": "bg-card text-card-foreground shadow-md hover:shadow-elevated hover:-translate-y-1 focus-visible:ring-ayu-purple transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-purple after:to-ayu-blue after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Green: Green variants fire gradient
        "fire-green": "bg-card text-card-foreground shadow-md hover:shadow-elevated hover:-translate-y-1 focus-visible:ring-ayu-green transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-green after:to-clubhouse-lawn-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2"
      },
      size: {
        // Use our component sizing tokens from the design system
        sm: "h-8 px-sm py-xs text-caption gap-xs", // For inside cards/forms - Stripe pattern
        default: "h-10 px-base py-sm text-body-sm gap-xs", // General usage
        lg: "h-12 px-md py-sm text-body gap-xs", // Hero/primary actions
        xl: "h-14 px-lg py-base text-body-lg gap-sm", // Call-to-action buttons
        icon: "h-10 w-10 p-0"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-button",
        default: "rounded-card",
        lg: "rounded-large",
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
  // Micro-animation props
  animationType?: 'arrow' | 'plus-minus' | 'x-o' | 'chevron' | 'none'
  animationState?: boolean | 'up' | 'down' | 'left' | 'right'  // For toggles or chevron direction
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, loading = false, children, disabled, animationType, animationState, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isSolidVariant = variant?.startsWith('solid-')
    
    // Determine which micro-animation to show
    const renderMicroAnimation = () => {
      if (loading || !animationType || animationType === 'none') return null
      
      const animationClassName = "ml-[var(--space-xs)]"
      
      switch (animationType) {
        case 'arrow':
          return <HoverArrow className={animationClassName} />
        case 'plus-minus':
          return <PlusMinusToggle className={animationClassName} isExpanded={Boolean(animationState)} />
        case 'x-o':
          return <XOToggle className={animationClassName} isActive={Boolean(animationState)} />
        case 'chevron':
          const direction = typeof animationState === 'string' ? animationState : 'right'
          return <ChevronRotate className={animationClassName} direction={direction as 'up' | 'down' | 'left' | 'right'} />
        default:
          return null
      }
    }
    
    // Default to arrow for solid variants if no animationType specified
    const shouldShowAnimation = animationType || (isSolidVariant && !loading)
    const defaultAnimationType = animationType || (isSolidVariant ? 'arrow' : 'none')
    
    if (asChild) {
      // When using asChild, wrap everything in a single element for Slot
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
          <span className="relative flex items-center">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent opacity-60" />
              </div>
            )}
            <span className={cn("flex items-center", loading && "invisible")}>
              {children}
              {shouldShowAnimation && renderMicroAnimation()}
            </span>
          </span>
        </Comp>
      )
    }
    
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
          {shouldShowAnimation && renderMicroAnimation()}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, HoverArrow, PlusMinusToggle, XOToggle, ChevronRotate }