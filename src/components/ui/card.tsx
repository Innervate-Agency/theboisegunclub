import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  // TBGC Design System V5: Stripe-inspired sophisticated shadows
  "relative flex flex-col rounded-lg bg-card text-card-foreground transition-all duration-150 ease-out",
  {
    variants: {
      variant: {
        // Default: Clean with good shadows - theme aware
        default: "bg-card shadow-sm hover:shadow-lg",
        
        // Elevated: More prominent - theme aware
        elevated: "bg-card shadow-md hover:shadow-xl hover:-translate-y-1",
        
        // Interactive: Clickable feedback - theme aware
        interactive: "bg-card shadow-sm hover:shadow-lg hover:-translate-y-0.5 cursor-pointer",
        
        // Premium: Gold accent - theme aware
        premium: "bg-card shadow-md hover:shadow-xl hover:-translate-y-1 ring-1 ring-brass-yellow/20 hover:ring-brass-yellow/40",
        
        // Glass: Modern glassmorphism - theme aware
        glass: "mica-card shadow-lg hover:shadow-xl transition-shadow duration-200",
        
        // Outlined: Clean borders - theme aware
        outlined: "bg-card hover:shadow-sm ring-1 ring-border",
        
        // Subtle: Muted backgrounds - theme aware
        subtle: "bg-muted hover:bg-card hover:shadow-sm",
        
        // Fire: The "fucking great" gradient accent - theme aware
        fire: "bg-card shadow-md hover:shadow-xl hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:rounded-b-lg after:transition-all after:duration-200 hover:after:h-2"
      },
      size: {
        sm: "",           // Components handle their own padding
        default: "",      // Components handle their own padding
        lg: ""            // Components handle their own padding
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
        className={cn("flex flex-col space-y-3 p-[var(--card-padding)]", className)}
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
        className={cn("card-title", className)}
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
        className={cn("card-body", className)}
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
        className={cn("px-[var(--card-padding)] pb-[var(--card-padding)]", className)}
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
        className={cn("flex items-center gap-2 px-[var(--card-padding)] pb-[var(--card-padding)] pt-0", className)}
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
export type { CardProps }