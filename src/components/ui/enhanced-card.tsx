import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

// TBGC Enhanced Card - Comprehensive Design System Application
const enhancedCardVariants = cva(
  // STRATEGIC RESTRAINT: Shadow-first foundation aligned with VendorCard principles
  "relative overflow-hidden transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        // Default: Clean shadow hierarchy
        default: "bg-card text-card-foreground shadow-flat hover:shadow-md",
        
        // Premium: Consistent shadows with strategic gradient accent
        premium: "bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/4 before:via-transparent before:to-rusty-orange/3 before:rounded-card before:pointer-events-none",
        
        // Elite: Consistent shadows with enhanced visual impact via background  
        elite: "bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-rusty-orange/6 before:via-transparent before:to-sandy-ochre/4 before:rounded-card before:pointer-events-none",
        
        // Glass: Modern mica effect with consistent shadows
        glass: "mica-card text-card-foreground shadow-flat hover:shadow-md backdrop-blur-sm relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        
        // Glass Premium: Enhanced mica with strategic accent
        "glass-premium": "mica-card-premium text-card-foreground shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        
        // Fire: Center-positioned gradient accent
        fire: "bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        
        // Fire Blue: Cool gradient with center positioning
        "fire-blue": "bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-ayu-green after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        
        // Muted: Subtle variant with clean shadows
        muted: "bg-muted text-muted-foreground shadow-flat hover:shadow-md hover:bg-card",
        
        // Interactive: Clickable with shadow feedback
        interactive: "bg-card text-card-foreground shadow-flat hover:shadow-md cursor-pointer",
      },
      size: {
        // Proper spacing system application
        xs: "p-sm",      // --space-xs equivalent  
        sm: "p-base",      // --space-sm equivalent
        default: "p-md", // --space-md equivalent (24px)
        lg: "p-lg",      // --space-lg equivalent  
        xl: "p-12",     // --space-xl equivalent
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-button",       // --radius-sm
        default: "rounded-card",  // --radius-base (boxy with slight curve)
        lg: "rounded-large",       // --radius-lg
        full: "rounded-overlay",    // --radius-2xl
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default", 
      radius: "default"
    }
  }
);

export interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof enhancedCardVariants> {}

export function EnhancedCard({
  className,
  variant,
  size,
  radius,
  children,
  ...props
}: EnhancedCardProps) {
  return (
    <div
      className={cn(enhancedCardVariants({ variant, size, radius }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Header component with proper typography hierarchy
export type EnhancedCardHeaderProps = React.HTMLAttributes<HTMLDivElement>

export function EnhancedCardHeader({ className, children, ...props }: EnhancedCardHeaderProps) {
  return (
    <div 
      className={cn("space-y-(--space-xs) mb-(--space-md)", className)} // Using spacing system
      {...props}
    >
      {children}
    </div>
  );
}

// Title with Rajdhani font (header typography)
export type EnhancedCardTitleProps = React.HTMLAttributes<HTMLHeadingElement>

export function EnhancedCardTitle({ className, children, ...props }: EnhancedCardTitleProps) {
  return (
    <h3 
      className={cn("text-body-lg font-rajdhani font-bold text-foreground leading-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

// Description with Noto Sans (body typography)
export type EnhancedCardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

export function EnhancedCardDescription({ className, children, ...props }: EnhancedCardDescriptionProps) {
  return (
    <p 
      className={cn("text-body-sm font-noto-sans text-muted-foreground leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

// Content area - NO PADDING (follows Stripe pattern)
export type EnhancedCardContentProps = React.HTMLAttributes<HTMLDivElement>

export function EnhancedCardContent({ className, children, ...props }: EnhancedCardContentProps) {
  return (
    <div className={cn("flex-1", className)} {...props}>
      {children}
    </div>
  );
}

// Footer with proper spacing
export type EnhancedCardFooterProps = React.HTMLAttributes<HTMLDivElement>

export function EnhancedCardFooter({ className, children, ...props }: EnhancedCardFooterProps) {
  return (
    <div 
      className={cn("mt-(--space-md) pt-(--space-base)", className)} // Strategic restraint: removed border divider
      {...props}
    >
      {children}
    </div>
  );
}

export { enhancedCardVariants };
