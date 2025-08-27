import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { CategoryIcon, type CategoryIconComponentProps } from "@/components/ui/category-icons"

const cardVariants = cva(
  // TBGC Design System: Square tactical aesthetic with dramatic shadow hierarchy
  "relative flex flex-col rounded-sm bg-card text-card-foreground transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        // SEMANTIC SHADOW HIERARCHY: Stripe-inspired depth system for content cards
        // Default: Clean baseline
        default: "",
        
        // Elevated: Enhanced presence for clickable important content  
        elevated: "cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-0",
        
        // Interactive: Clear clickable affordance with lift effect
        interactive: "cursor-pointer hover:bg-card/95 transition-all duration-200 hover:-translate-y-1 active:translate-y-0",
        
        // Premium: Strategic copper-brass accent
        premium: "relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-rusty-orange/50 after:to-sandy-ochre/50",
        
        // Glass: Glassmorphism for modern content display
        glass: "bg-card border border-border/30",
        
        // Outlined: Minimal outlined variant
        outlined: "bg-transparent border border-border hover:bg-card/50",
        
        // Subtle: Ghost-level subtle presence for secondary content
        subtle: "bg-muted/50 hover:bg-muted",
        
        // FireIcon: Premium tactical gradient
        fire: "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",
        
        // FireIcon Blue: Cool tactical gradients
        "fire-blue": "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-slate-blue after:to-info-river after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",
        
        // FireIcon Green: Green tactical gradients
        "fire-green": "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-sagebrush-green after:to-lodgepole-green after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",
        
        // FireIcon Red: Red tactical gradients  
        "fire-red": "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-canyon-clay after:to-rusty-orange after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",

        // FireIcon Purple: Purple tactical gradients
        "fire-purple": "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-foothills-purple after:to-canyon-clay after:opacity-0 hover:opacity-100 after:transition-all after:duration-300 after:ease-out",
        
        // Tactical: Ghost state with invisible borders that appear on interaction
        tactical: "border-2 border-transparent bg-card group relative overflow-visible transition-all duration-300 ease-out",
        
        // Tactical + Surface combinations for events  
        "tactical-events": "bg-nav-events/5 group relative overflow-visible transition-all duration-300 ease-out",
        
        // Semantic Surface Backgrounds - using rich Boise color palette (no shadows)
        "surface-light": "bg-aged-paper/80 border border-aged-paper hover:bg-aged-paper",
        "surface-warm": "bg-parchment/70 border border-parchment/50 hover:bg-parchment/90", 
        "surface-cool": "bg-card-surface/80 border border-card-surface/50 hover:bg-card-surface",
        "surface-muted": "bg-muted/60 border border-muted hover:bg-muted/80",
        "surface-tactical": "bg-gruvbox-bg-dark/90 border border-gruvbox-bg-dark hover:bg-gruvbox-bg-dark",
        
        // Context-aware semantic surfaces (no shadows)
        "surface-events": "bg-nav-events/5 border border-nav-events/20 hover:bg-nav-events/10",
        "surface-directory": "bg-nav-directory/5 border border-nav-directory/20 hover:bg-nav-directory/10",
        "surface-armory": "bg-nav-armory/5 border border-nav-armory/20 hover:bg-nav-armory/10",
        "surface-marketplace": "bg-nav-marketplace/5 border border-nav-marketplace/20 hover:bg-nav-marketplace/10"
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
    VariantProps<typeof cardVariants> {
  // Tactical card props
  tacticalTheme?: 'home' | 'events' | 'directory' | 'armory' | 'intel' | 'marketplace' | 'forums' | 'default'
  showCategoryIcon?: boolean
  category?: string
  type?: string
  content?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, tacticalTheme = 'default', showCategoryIcon = false, category, type, content, ...props }, ref) => {
    const isTactical = variant === 'tactical' || variant?.startsWith('tactical-')
    
    const themeColorMap = {
      home: {
        border: 'border-nav-home',
        hoverBorder: 'hover:border-nav-home/50',
        text: 'text-nav-home',
        bg: 'bg-nav-home/40',
      },
      events: {
        border: 'border-nav-events',
        hoverBorder: 'hover:border-nav-events/50',
        text: 'text-nav-events',
        bg: 'bg-nav-events/40',
      },
      directory: {
        border: 'border-nav-directory',
        hoverBorder: 'hover:border-nav-directory/50',
        text: 'text-nav-directory',
        bg: 'bg-nav-directory/40',
      },
      armory: {
        border: 'border-nav-armory',
        hoverBorder: 'hover:border-nav-armory/50',
        text: 'text-nav-armory',
        bg: 'bg-nav-armory/40',
      },
      intel: {
        border: 'border-nav-intel',
        hoverBorder: 'hover:border-nav-intel/50',
        text: 'text-nav-intel',
        bg: 'bg-nav-intel/40',
      },
      marketplace: {
        border: 'border-nav-marketplace',
        hoverBorder: 'hover:border-nav-marketplace/50',
        text: 'text-nav-marketplace',
        bg: 'bg-nav-marketplace/40',
      },
      forums: {
        border: 'border-nav-forums',
        hoverBorder: 'hover:border-nav-forums/50',
        text: 'text-nav-forums',
        bg: 'bg-nav-forums/40',
      },
      default: {
        border: 'border-border',
        hoverBorder: 'hover:border-border/50',
        text: 'text-border',
        bg: 'bg-border/40',
      },
    }

    const themeClasses = themeColorMap[tacticalTheme] || themeColorMap.default
    
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, size }),
          isTactical && [
            // Focus states for accessibility
            'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-ring',
            // Smooth transitions (will be disabled on reduced motion)
            'transition-all duration-300 ease-out',
            // Tactical interactions
            'cursor-pointer active:scale-[0.98] hover:scale-[1.01]'
          ],
          className
        )}
        {...props}
      >
        {/* Tactical Border Elements (only for tactical variant) */}
        {isTactical && (
          <>
            {/* Corner brackets - larger than navbar version */}
            <div className={cn('absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 opacity-0 group-hover:opacity-100 transition-all duration-200', themeClasses.border)} />
            <div className={cn('absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-all duration-200', themeClasses.border)} />
            <div className={cn('absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 opacity-0 group-hover:opacity-100 transition-all duration-200', themeClasses.border)} />
            
            {/* Bottom-right corner with document cutout */}
            <div className={'absolute bottom-0 right-0 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200'}>
              <div 
                className={cn('w-full h-full border-2', themeClasses.border)}
                style={{
                  clipPath: 'polygon(0 0, 60% 0, 100% 40%, 100% 100%, 0 100%)'
                }}
              />
            </div>
            
            {/* Tactical latches/clasps */}
            <div className={cn('absolute top-1 right-1 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-200', themeClasses.bg)} />
            <div className={cn('absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-200', themeClasses.bg)} />
          </>
        )}
        
        {/* Category Icon (top-right corner) */}
        {isTactical && showCategoryIcon && (
          <div className="absolute top-2 right-2 z-10">
            <CategoryIcon
              category={category}
              type={type}
              content={content}
              size="default"
              opacity={0.4}
              className={cn(themeClasses.text, 'group-hover:opacity-70 transition-opacity duration-200')}
            />
          </div>
        )}
        
        {/* Card content wrapper */}
        <div className={cn(isTactical && "relative z-10")}>
          {props.children}
        </div>
      </div>
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