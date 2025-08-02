import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const productShowcaseCardVariants = cva(
  // TBGC Design System: Strategic restraint with sophisticated animations
  "group relative overflow-hidden rounded-lg bg-card text-card-foreground transition-all duration-500 ease-out cursor-pointer",
  {
    variants: {
      variant: {
        // Default: Clean professional showcase
        default: "shadow-sm hover:shadow-lg border border-border/20",
        
        // Premium: Copper-orange gradient splash
        premium: "shadow-sm hover:shadow-lg border border-copper-orange/20 relative after:absolute after:inset-0 after:bg-gradient-to-br after:from-copper-orange/3 after:via-transparent after:to-brass-yellow/2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none",
        
        // Elite: Blue gradient splash  
        elite: "shadow-sm hover:shadow-lg border border-ayu-blue/20 relative after:absolute after:inset-0 after:bg-gradient-to-br after:from-ayu-blue/4 after:via-transparent after:to-scope-blue/3 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none",
        
        // Success: Green gradient splash
        success: "shadow-sm hover:shadow-lg border border-rifling-green/20 relative after:absolute after:inset-0 after:bg-gradient-to-br after:from-rifling-green/3 after:via-transparent after:to-clubhouse-lawn-green/2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none"
      },
      size: {
        default: "w-full max-w-sm",
        wide: "w-full max-w-md", 
        full: "w-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface ProductShowcaseCardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof productShowcaseCardVariants> {
  title: string
  description: string
  imageSlot?: React.ReactNode
  stats?: {
    label: string
    value: string
  }[]
  ctaText?: string
  onLearnMore?: () => void
}

const ProductShowcaseCard = React.forwardRef<HTMLDivElement, ProductShowcaseCardProps>(
  ({ className, variant, size, title, description, imageSlot, stats, ctaText = "Learn more", onLearnMore, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(productShowcaseCardVariants({ variant, size }), className)}
        onClick={onLearnMore}
        {...props}
      >
        {/* Image Area with Gradient Splash Background */}
        <div className="relative h-48 bg-muted/30 rounded-t-lg flex items-center justify-center overflow-hidden">
          {/* Animated Gradient Splash Behind Image - Stripe-style */}
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-95 group-hover:scale-100",
            variant === "premium" && "bg-gradient-to-br from-copper-orange/30 via-brass-yellow/20 to-copper-orange/25",
            variant === "elite" && "bg-gradient-to-br from-ayu-blue/30 via-ayu-purple/20 to-scope-blue/25", 
            variant === "success" && "bg-gradient-to-br from-rifling-green/30 via-clubhouse-lawn-green/20 to-rifling-green/25",
            variant === "default" && "bg-gradient-to-br from-primary/15 via-muted/20 to-primary/10"
          )} />
          
          {/* Image Frame - Always visible with subtle styling */}
          <div className="relative z-10 w-32 h-32 rounded-lg bg-card border border-border/50 flex items-center justify-center shadow-sm">
            {imageSlot || (
              <div className="w-16 h-16 rounded bg-muted flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-muted-foreground/20" />
              </div>
            )}
          </div>
        </div>

        {/* Content Area - Slides up on hover */}
        <div className="relative p-[var(--space-md)]">
          {/* Stats - Always visible */}
          {stats && stats.length > 0 && (
            <div className="flex gap-[var(--space-md)] mb-[var(--space-base)]">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Main Content Container - Slides up on hover */}
          <div className="transform transition-transform duration-300 ease-out group-hover:-translate-y-3">
            <h3 className="text-xl font-rajdhani font-semibold mb-[var(--space-xs)] text-card-foreground">{title}</h3>
            <p className="text-muted-foreground mb-[var(--space-base)] text-sm leading-relaxed">{description}</p>
          </div>

          {/* CTA Button - Appears on hover with slide up animation */}
          <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-75">
            <div className="flex items-center gap-[var(--space-xs)] text-sm font-medium text-copper-orange hover:text-copper-orange/80 transition-colors cursor-pointer">
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    )
  }
)
ProductShowcaseCard.displayName = "ProductShowcaseCard"

export { ProductShowcaseCard, productShowcaseCardVariants }
export type { ProductShowcaseCardProps }