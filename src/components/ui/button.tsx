import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { Diamond } from "@phosphor-icons/react"
import { HoverArrow, PlusMinusToggle, XOToggle, ChevronRotate } from "./micro-animations"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-noto-sans font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-present hover:shadow-elevated",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-present hover:shadow-elevated",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-whisper hover:shadow-present",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-whisper hover:shadow-present",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-rusty-orange to-sandy-ochre text-white shadow-commanding hover:shadow-hero transition-all duration-300 ease-out hover:scale-105",
        glass: "bg-popover/10 backdrop-blur-sm text-foreground border border-border/20 shadow-elevated hover:shadow-prominent hover:bg-popover/20",
        flat: "bg-transparent text-foreground hover:bg-muted/50",

        // Solid Variants
        "solid-primary": "bg-slate-blue text-white hover:bg-slate-blue/90 shadow-present hover:shadow-elevated",
        "solid-accent": "bg-rusty-orange text-white hover:bg-rusty-orange/90 shadow-present hover:shadow-elevated",
        
        // Micro Variant
        micro: "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-card-foreground shadow-whisper hover:shadow-present text-xs px-tiny py-micro h-7",

        // Fire Variants
        fire: "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 hover:after:h-1",
        "fire-blue": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-slate-blue after:to-info-river after:transition-all after:duration-300 hover:after:h-1",
        "fire-green": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-sagebrush-green after:to-lodgepole-green after:transition-all after:duration-300 hover:after:h-1",
        "fire-purple": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-foothills-purple after:to-canyon-clay after:transition-all after:duration-300 hover:after:h-1",
      },
      size: {
        default: "h-button-lg px-sm py-tiny",
        sm: "h-button rounded-sm px-xs"
        lg: "h-11 rounded-xs px-lg"
        xl: "h-12 rounded-xs px-xl text-heading-lg"
        icon: "h-button-lg w-10",
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
            {loading ? <Diamond className="mr-tiny size-4 animate-spin" weight="bold" /> : null}
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
