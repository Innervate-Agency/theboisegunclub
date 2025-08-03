import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  // TBGC Design System V5: Stripe-inspired sophisticated shadows
  "relative flex flex-col rounded-card bg-card text-card-foreground transition-all duration-150 ease-out",
  {
    variants: {
      variant: {
        // Default: Clean with good shadows - theme aware
        default: "bg-card shadow-flat hover:shadow-md",
        
        // Elevated: More prominent - theme aware
        elevated: "bg-card shadow-flat hover:shadow-md hover:-translate-y-1",
        
        // Interactive: Clickable feedback - consistent shadows
        interactive: "bg-card shadow-flat hover:shadow-md hover:-translate-y-0.5 cursor-pointer",
        
        // Premium: Consistent default shadows with gradient accent instead of rings
        premium: "bg-card shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-brass-yellow/4 before:via-transparent before:to-copper-orange/3 before:rounded-card before:pointer-events-none",
        
        // Glass: Modern glassmorphism - consistent shadows
        glass: "mica-card shadow-flat hover:shadow-md transition-shadow duration-200",
        
        // Outlined: Strategic restraint - subtle shadow instead of ring
        outlined: "bg-card shadow-flat hover:shadow-md bg-gradient-to-br from-card/98 to-card/95",
        
        // Subtle: Muted backgrounds - theme aware
        subtle: "bg-muted hover:bg-card hover:shadow-flat",
        
        // Fire: The "fucking great" gradient accent - theme aware
        fire: "bg-card shadow-flat hover:shadow-md hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Blue: Blue to green fire gradient 
        "fire-blue": "bg-card shadow-flat hover:shadow-md hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Purple: Purple to cobalt fire gradient
        "fire-purple": "bg-card shadow-flat hover:shadow-md hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-purple after:to-ayu-blue after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Green: Green variants fire gradient
        "fire-green": "bg-card shadow-flat hover:shadow-md hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-green after:to-clubhouse-lawn-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2"
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
        className={cn("flex flex-col space-y-sm p-md", className)}
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
        className={cn("p-md", className)}
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
        className={cn("flex items-center gap-xs p-md pt-0", className)}
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
