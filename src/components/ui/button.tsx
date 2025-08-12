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
        // Default: Present baseline with elevated interactions (NO BORDER)
        default: "bg-card text-card-foreground shadow-present hover:shadow-elevated focus-visible:ring-rusty-orange",
        
        // Primary: Elevated prominence with commanding interactions (NO BORDER)  
        primary: "bg-card text-card-foreground shadow-elevated hover:shadow-prominent focus-visible:ring-rusty-orange",
        
        // Secondary: Whisper subtlety with present interactions (NO BORDER)
        secondary: "bg-muted text-card-foreground shadow-whisper hover:shadow-present hover:bg-muted/80 focus-visible:ring-rusty-orange",
        
        // Accent: Present with tactical copper accenting
        accent: "bg-rusty-orange/10 text-rusty-orange shadow-present hover:shadow-elevated focus-visible:ring-rusty-orange/50 hover:bg-rusty-orange/20",
        
        // Success: Present with tactical green accenting
        success: "bg-sagebrush-green/10 text-sagebrush-green shadow-present hover:shadow-elevated focus-visible:ring-sagebrush-green/50 hover:bg-sagebrush-green/20",
        
        // Destructive: Present with tactical red accenting  
        destructive: "bg-canyon-clay/10 text-canyon-clay shadow-present hover:shadow-elevated focus-visible:ring-canyon-clay/50 hover:bg-canyon-clay/20",
        
        // Outline: Clean theme-aware with border
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",

        // Glass: Elevated glassmorphism with tactical transparency
        glass: "mica-overlay text-card-foreground shadow-elevated hover:shadow-prominent focus-visible:ring-rusty-orange/50 hover:bg-card/25 transition-all duration-200",
        
        // Solid variants - elevated standalone buttons with shadows  
        "solid-accent": "bg-rusty-orange text-crisp-off-white shadow-present hover:shadow-elevated hover:bg-ember-glow focus-visible:ring-rusty-orange/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-success": "bg-sagebrush-green text-crisp-off-white shadow-present hover:shadow-elevated hover:bg-lodgepole-green focus-visible:ring-sagebrush-green/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-destructive": "bg-canyon-clay text-crisp-off-white shadow-present hover:shadow-elevated hover:bg-canyon-clay/90 focus-visible:ring-canyon-clay/50 border-0 transition-all duration-200 stripe-arrow",
        "solid-primary": "bg-slate-blue text-crisp-off-white shadow-present hover:shadow-elevated hover:bg-slate-blue/90 focus-visible:ring-slate-blue/50 border-0 transition-all duration-200 stripe-arrow",
        
        // Ghost: Whisper subtlety with tactical hover
        ghost: "text-muted-foreground hover:bg-muted hover:shadow-whisper focus-visible:ring-rusty-orange border-0",
        
        // Flat: No shadows - perfect for card interiors (Stripe flat design)
        flat: "bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20 focus-visible:ring-rusty-orange/50 border-0 transition-colors duration-150",
        
        // Link: Text-only, minimal presence
        link: "text-rusty-orange hover:text-recoil-pad underline-offset-4 hover:underline focus-visible:ring-rusty-orange border-0",
        
        // Micro: Small action buttons with no shadows and Stripe-style micro-animations
        micro: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-accent/50 focus-visible:ring-rusty-orange/50 border border-border/40 transition-all duration-200 group",
        
        // Fire: Commanding presence with tactical gradient accents
        fire: "bg-card text-card-foreground shadow-commanding hover:shadow-hero focus-visible:ring-rusty-orange transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-rusty-orange after:to-rusty-orange after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Blue: Commanding with cool tactical gradients
        "fire-blue": "bg-card text-card-foreground shadow-commanding hover:shadow-hero focus-visible:ring-slate-blue transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-slate-blue after:to-info-river after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Purple: Commanding with purple tactical gradients  
        "fire-purple": "bg-card text-card-foreground shadow-commanding hover:shadow-hero focus-visible:ring-foothills-purple transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-foothills-purple after:to-slate-blue after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Green: Commanding with green tactical gradients
        "fire-green": "bg-card text-card-foreground shadow-commanding hover:shadow-hero focus-visible:ring-sagebrush-green transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-sagebrush-green after:to-lodgepole-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2"
      },
      size: {
        // Use our component sizing tokens from the design system (globals.css)
        sm: "h-[var(--button-height-sm)] px-sm py-xs text-caption gap-xs", // 32px - Stripe pattern
        default: "h-[var(--button-height-base)] px-base py-sm text-body-sm gap-xs", // 40px - General usage
        lg: "h-[var(--button-height-lg)] px-md py-sm text-body gap-xs", // 48px - Hero/primary actions
        xl: "h-[var(--button-height-xl)] px-lg py-base text-body-lg gap-sm", // 56px - Call-to-action buttons
        icon: "h-[var(--button-height-base)] w-[var(--button-height-base)] p-0" // Square icon button
      },
      rounded: {
        none: "rounded-xs",
        sm: "rounded-xs",
        default: "rounded-xs",
        lg: "rounded-md",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "none"
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
      
      const animationClassName = "ml-xs"
      
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