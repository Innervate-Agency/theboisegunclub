import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  // TBGC Design System: Square tactical aesthetic with dramatic shadow hierarchy
  "relative flex flex-col rounded-none bg-card text-card-foreground transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        // SEMANTIC SHADOW HIERARCHY: Stripe-inspired depth system for content cards
        // Default: Present - established baseline for content visibility
        default: "bg-card text-card-foreground shadow-present hover:shadow-elevated",
        
        // Elevated: Enhanced presence for important content
        elevated: "bg-card text-card-foreground shadow-elevated hover:shadow-prominent",
        
        // Interactive: Clear clickable affordance with tactical feedback
        interactive: "bg-card text-card-foreground shadow-present hover:shadow-elevated cursor-pointer hover:bg-card/95",
        
        // Premium: Prominent depth with strategic copper-brass accent
        premium: "bg-card text-card-foreground shadow-prominent hover:shadow-commanding relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/4 before:via-transparent before:to-rusty-orange/3 before:rounded-none before:pointer-events-none",
        
        // Glass: Elevated glassmorphism for modern content display
        glass: "mica-card shadow-elevated hover:shadow-prominent transition-all duration-200",
        
        // Outlined: Exception - minimal whisper shadow for outlined variants
        outlined: "bg-transparent text-card-foreground border border-border hover:bg-card/50 hover:shadow-whisper",
        
        // Subtle: Ghost-level subtle presence for secondary content
        subtle: "bg-muted text-card-foreground shadow-ghost hover:shadow-whisper hover:bg-card",
        
        // Fire: Commanding presence with premium tactical gradient
        fire: "bg-card text-card-foreground shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:rounded-b-none after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Blue: Commanding with cool tactical gradients
        "fire-blue": "bg-card text-card-foreground shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-slate-blue after:to-ayu-green after:rounded-b-none after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Green: Commanding with green tactical gradients
        "fire-green": "bg-card text-card-foreground shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-green after:to-sagebrush-green after:rounded-b-none after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Red: Commanding with red tactical gradients
        "fire-red": "bg-card text-card-foreground shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-rusty-orange after:to-safety-red after:rounded-b-none after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2"
      },
      size: {
        sm: "",              // Subcomponents handle their own padding
        default: "",         // Subcomponents handle their own padding  
        lg: ""               // Subcomponents handle their own padding
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-xs p-md", className)}
        {...props}
      />
    )
  }
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<"h3">>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("font-rajdhani font-bold text-body-lg leading-tight", className)}
        {...props}
      />
    )
  }
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.ComponentProps<"p">>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("font-noto-sans text-body-sm text-muted-foreground leading-relaxed", className)}
        {...props}
      />
    )
  }
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-md pt-0", className)}
        {...props}
      />
    )
  }
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center p-md pt-0", className)}
        {...props}
      />
    )
  }
)
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants
}
