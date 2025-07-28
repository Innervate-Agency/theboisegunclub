import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  // TBGC Design System V5: Stripe-inspired sophisticated shadows
  "relative flex flex-col rounded-lg border bg-card text-card-foreground transition-all duration-150 ease-out",
  {
    variants: {
      variant: {
        // Default: Clean with good shadows - theme aware
        default: "bg-card border-border shadow-sm hover:shadow-lg",
        
        // Elevated: More prominent - theme aware
        elevated: "bg-card border-border shadow-md hover:shadow-xl hover:-translate-y-1",
        
        // Interactive: Clickable feedback - theme aware
        interactive: "bg-card border-border shadow-sm hover:shadow-lg hover:-translate-y-0.5 cursor-pointer",
        
        // Premium: Gold accent - theme aware
        premium: "bg-card border-brass-yellow/30 shadow-md hover:shadow-xl hover:border-brass-yellow/50 hover:-translate-y-1",
        
        // Glass: Modern glassmorphism - theme aware
        glass: "bg-card/80 border-border/30 shadow-lg backdrop-blur-sm hover:bg-card/90 hover:shadow-xl",
        
        // Outlined: Clean borders - theme aware
        outlined: "bg-card border-border hover:shadow-sm",
        
        // Subtle: Muted backgrounds - theme aware
        subtle: "bg-muted border-border hover:bg-card hover:shadow-sm"
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
        className={cn("flex flex-col space-y-1.5 p-6", className)}
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
        className={cn(
          "font-semibold leading-none tracking-tight text-card-foreground text-lg",
          className
        )}
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
        className={cn("text-sm text-muted-foreground", className)}
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
        className={cn("px-6 pb-6", className)}
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
        className={cn("flex items-center px-6 pb-6 pt-0", className)}
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