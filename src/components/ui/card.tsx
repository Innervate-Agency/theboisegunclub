import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  // TBGC Design System: Square tactical aesthetic with dramatic shadow hierarchy
  "relative flex flex-col rounded-sm bg-card text-card-foreground transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        // SEMANTIC SHADOW HIERARCHY: Stripe-inspired depth system for content cards
        // Default: Present - established baseline for content visibility (static cards)
        default: "shadow-present",
        
        // Elevated: Enhanced presence for clickable important content
        elevated: "shadow-elevated hover:shadow-hero cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:shadow-prominent",
        
        // Interactive: Clear clickable affordance with dramatic lift effect
        interactive: "shadow-elevated hover:shadow-hero cursor-pointer hover:bg-card/95 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:shadow-prominent",
        
        // Premium: Prominent depth with strategic copper-brass accent
        premium: "shadow-prominent hover:shadow-commanding relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-rusty-orange/50 after:to-sandy-ochre/50",
        
        // Glass: Elevated glassmorphism for modern content display
        glass: "mica-card shadow-elevated hover:shadow-prominent",
        
        // Outlined: Exception - minimal whisper shadow for outlined variants
        outlined: "bg-transparent border border-border hover:bg-card/50 hover:shadow-whisper",
        
        // Subtle: Ghost-level subtle presence for secondary content
        subtle: "bg-muted/50 shadow-ghost hover:shadow-whisper hover:bg-muted",
        
        // Fire: Commanding presence with premium tactical gradient
        fire: "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",
        
        // Fire Blue: Commanding with cool tactical gradients
        "fire-blue": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-slate-blue after:to-info-river after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",
        
        // Fire Green: Commanding with green tactical gradients
        "fire-green": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-sagebrush-green after:to-lodgepole-green after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",
        
        // Fire Red: Commanding with red tactical gradients  
        "fire-red": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-canyon-clay after:to-rusty-orange after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",

        // Fire Purple: Commanding with purple tactical gradients
        "fire-purple": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-foothills-purple after:to-canyon-clay after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out"
      },
      size: {
        sm: "p-sm",
        default: "p-md",
        lg: "p-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
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

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-sm", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-rajdhani font-semibold text-body-xl leading-tight tracking-tighter", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-body-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("pt-sm", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center pt-sm", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }