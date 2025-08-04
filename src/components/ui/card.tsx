import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  // TBGC Design System: Strategic restraint with clean theme-aware design
  "relative flex flex-col rounded-card bg-card text-card-foreground transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        // Default: Clean baseline with shadow system (strategic restraint)
        default: "bg-card text-card-foreground shadow-sm hover:shadow-md",
        
        // Elevated: Subtle elevation with strategic restraint
        elevated: "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5",
        
        // Interactive: Clickable feedback with clear affordance
        interactive: "bg-card text-card-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer hover:bg-card/95",
        
        // Premium: Strategic copper-brass accent (inspired by VendorCard copper tier)
        premium: "bg-card text-card-foreground shadow-sm hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-brass-yellow/4 before:via-transparent before:to-copper-orange/3 before:rounded-card before:pointer-events-none",
        
        // Glass: Windows 11 Mica glassmorphism
        glass: "mica-card shadow-sm hover:shadow-md transition-all duration-200",
        
        // Outlined: Exception - explicit outline variant can use borders per design system policy
        outlined: "bg-transparent text-card-foreground border border-border hover:bg-card/50 hover:shadow-sm",
        
        // Subtle: Muted appearance
        subtle: "bg-muted text-card-foreground shadow-xs hover:shadow-sm hover:bg-card",
        
        // Fire: Premium fire gradient (inspired by VendorCard gold tier)
        fire: "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Blue: Idaho palette blue fire gradient 
        "fire-blue": "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Green: Idaho palette green fire gradient
        "fire-green": "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-green after:to-clubhouse-lawn-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2",
        
        // Fire Red: Idaho palette red fire gradient
        "fire-red": "bg-card text-card-foreground shadow-md hover:shadow-lg hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-copper-orange after:to-safety-red after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:h-2"
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
        className={cn("flex flex-col space-y-2 p-6", className)}
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
        className={cn("p-6 pt-0", className)}
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
        className={cn("flex items-center p-6 pt-0", className)}
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
