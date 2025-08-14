import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { HoverArrow, PlusMinusToggle, XOToggle, ChevronRotate } from "./micro-animations"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 font-noto-sans",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 font-noto-sans",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground font-noto-sans",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-noto-sans",
        ghost: "hover:bg-accent hover:text-accent-foreground font-noto-sans",
        link: "text-primary underline-offset-4 hover:underline font-noto-sans",
        premium: "bg-gradient-to-r from-rusty-orange to-sandy-ochre text-white transition-all duration-300 ease-out hover:scale-105 font-rajdhani",
        glass: "bg-popover/10 backdrop-blur-sm text-foreground border border-border/20 hover:bg-popover/20 font-noto-sans",
        flat: "bg-transparent text-foreground hover:bg-muted/50 font-noto-sans",

        // Tactical Variants - All use Rajdhani font
        "tactical-primary": "bg-dark-chocolate text-crisp-off-white font-rajdhani font-bold uppercase tracking-wider shadow-elevated hover:shadow-hero transform hover:-translate-y-0.5 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-rusty-orange after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
        "tactical-secondary": "bg-transparent text-dark-chocolate font-rajdhani font-bold uppercase tracking-wider border-2 border-dark-chocolate/30 hover:border-dark-chocolate hover:bg-dark-chocolate/5 transform hover:-translate-y-0.5 transition-all",
        "tactical-glass": "bg-card/10 backdrop-blur-md text-foreground font-rajdhani font-bold uppercase tracking-wider border border-border/30 shadow-present hover:shadow-elevated hover:bg-card/20 transform hover:-translate-y-0.5",
        "tactical-accent": "bg-rusty-orange text-crisp-off-white font-rajdhani font-bold uppercase tracking-wider shadow-elevated hover:shadow-prominent transform hover:-translate-y-0.5 hover:bg-rusty-orange/90",

        // Solid Variants
        "solid-primary": "bg-slate-blue text-white hover:bg-slate-blue/90 font-noto-sans",
        "solid-accent": "bg-rusty-orange text-white hover:bg-rusty-orange/90 font-noto-sans",
        
        // Micro Variant
        micro: "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-card-foreground text-xs px-tiny py-micro h-7 font-noto-sans",

        // Fire Variants
        fire: "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 hover:after:h-1 font-rajdhani",
        "fire-blue": "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-slate-blue after:to-info-river after:transition-all after:duration-300 hover:after:h-1 font-rajdhani",
        "fire-green": "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-sagebrush-green after:to-lodgepole-green after:transition-all after:duration-300 hover:after:h-1 font-rajdhani",
        "fire-purple": "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-foothills-purple after:to-canyon-clay after:transition-all after:duration-300 hover:after:h-1 font-rajdhani",

        // Enhanced Variants
        "glass": "bg-white/10 text-foreground border border-white/20 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-150 font-noto-sans",
        "hover-lift": "transition-all duration-200 ease-out hover:transform hover:-translate-y-1 hover:shadow-prominent active:transform active:-translate-y-0.5 active:shadow-elevated focus:outline-none focus:shadow-present disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none font-noto-sans",
      },
      size: {
        default: "h-10 px-sm py-tiny rounded-xs",
        sm: "h-9 rounded-xs px-xs",
        lg: "h-11 rounded-xs px-lg",
        xl: "h-12 rounded-xs px-xl text-heading-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  animationType?: 'arrow' | 'plus-minus' | 'x-o' | 'chevron' | 'none'
  animationState?: boolean | string
  animationDirection?: 'up' | 'down' | 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false, 
    animationType,
    animationState = false,
    animationDirection = 'right',
    children, 
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Smart animation detection - solid variants default to arrow unless specified
    // BUT: never show animations when asChild is true (Slot component expects single child)
    const shouldShowAnimation = !loading && !asChild && animationType !== 'none'
    const detectedAnimationType = animationType || (
      variant?.includes('solid') ? 'arrow' : undefined
    )
    
    // Render appropriate animation component
    const renderAnimation = () => {
      if (!shouldShowAnimation || !detectedAnimationType) return null
      
      const isActive = typeof animationState === 'boolean' 
        ? animationState 
        : animationState === 'up' || animationState === 'expanded'
      
      switch (detectedAnimationType) {
        case 'arrow':
          return <HoverArrow isActive={isActive} className="ml-tiny" />
        case 'plus-minus':
          return <PlusMinusToggle isActive={isActive} className="ml-tiny" />
        case 'x-o':
          return <XOToggle isActive={isActive} className="ml-tiny" />
        case 'chevron':
          return <ChevronRotate isActive={isActive} direction={animationDirection} className="ml-tiny" />
        default:
          return null
      }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {asChild ? (
          // When asChild is true, ONLY render children (Slot expects single child)
          children
        ) : (
          // Normal button rendering with loading spinner and animations
          <>
            {loading ? <Loader2 className="mr-tiny size-4 animate-spin" /> : null}
            {children}
            {renderAnimation()}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
