import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

// TBGC Enhanced Badge - Complete Design System Application
const enhancedBadgeVariants = cva(
  // Foundation: Flat elements (Stripe pattern) + proper typography
  "inline-flex items-center justify-center font-noto-sans font-medium w-fit whitespace-nowrap shrink-0 transition-stripe-fast overflow-hidden shadow-flat",
  {
    variants: {
      variant: {
        // Default: Muted background
        default: "bg-muted text-card-foreground hover:bg-muted/80",
        
        // Primary: Blued steel (TBGC primary color)
        primary: "bg-blued-steel text-nickel-white hover:bg-blued-steel/90",
        
        // Secondary: Walnut stock
        secondary: "bg-walnut-stock text-nickel-white hover:bg-walnut-stock/90",
        
        // Premium: Brass yellow with proper contrast
        premium: "bg-brass-yellow text-gunmetal-black hover:bg-brass-yellow/90 font-semibold",
        
        // Elite: Copper orange with white text
        elite: "bg-copper-orange text-nickel-white hover:bg-copper-orange/90 font-semibold",
        
        // Glass: Mica effect with backdrop blur - strategic restraint, no border
        glass: "mica-overlay text-card-foreground hover:bg-card/10 backdrop-blur-sm",
        
        // Success: Bore sight green (enhanced ayu-green)
        success: "bg-bore-sight-green text-nickel-white hover:bg-bore-sight-green/90",
        
        // Warning: Sight gold  
        warning: "bg-sight-gold text-gunmetal-black hover:bg-sight-gold/90",
        
        // Error: Muzzle flash red
        error: "bg-muzzle-flash text-nickel-white hover:bg-muzzle-flash/90",
        
        // Info: Cerakote blue (enhanced ayu-blue)  
        info: "bg-cerakote-blue text-nickel-white hover:bg-cerakote-blue/90",
        
        // Outline: Subtle brass accent - strategic restraint with lighter ring
        outline: "text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black ring-1 ring-brass-yellow/30 hover:ring-brass-yellow/50",
        
        // Fire: Gradient accent that unfurls from left
        fire: "bg-card text-card-foreground hover:bg-card/90 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Fire Blue: Cool gradient accent
        "fire-blue": "bg-card text-card-foreground hover:bg-card/90 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-green after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Destructive: Alias for error (shadcn compatibility)
        destructive: "bg-muzzle-flash text-nickel-white hover:bg-muzzle-flash/90"
      },
      size: {
        // Proper sizing using design tokens
        xs: "px-[var(--space-xs)] py-[var(--space-tiny)] text-xs h-5 gap-[var(--space-xs)]",      // Extra small
        sm: "px-[var(--space-xs)] py-[var(--space-tiny)] text-xs h-5 gap-[var(--space-xs)]",      // Small  
        default: "px-[var(--space-sm)] py-[var(--space-tiny)] text-xs h-6 gap-[var(--space-xs)]", // Standard
        lg: "px-[var(--space-base)] py-[var(--space-xs)] text-sm h-8 gap-[var(--space-md)]",      // Large
        xl: "px-[var(--space-base)] py-[var(--space-md)] text-sm h-8 gap-[var(--space-md)]",    // Extra large
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",      // --radius-sm  
        default: "rounded-md", // --radius-base (boxy with slight curve)
        lg: "rounded-lg",      // --radius-lg
        full: "rounded-full",  // --radius-full
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default"
    }
  }
);

export interface EnhancedBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof enhancedBadgeVariants> {
  asChild?: boolean;
}

export function EnhancedBadge({
  className,
  variant,
  size,
  radius,
  asChild = false,
  ...props
}: EnhancedBadgeProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={cn(enhancedBadgeVariants({ variant, size, radius }), className)}
      {...props}
    />
  );
}

// Specialized badge variants for common use cases

// Classification Badge (for firearm classifications)
export interface ClassificationBadgeProps extends Omit<EnhancedBadgeProps, 'variant'> {
  classification: 'pistol' | 'rifle' | 'shotgun' | 'nfa' | 'antique';
}

export function ClassificationBadge({ classification, ...props }: ClassificationBadgeProps) {
  const getVariant = (type: string) => {
    switch (type) {
      case 'pistol': return 'primary';
      case 'rifle': return 'success';  
      case 'shotgun': return 'warning';
      case 'nfa': return 'elite';
      case 'antique': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <EnhancedBadge 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
      variant={getVariant(classification) as any}
      {...props}
    >
      {classification.toUpperCase()}
    </EnhancedBadge>
  );
}

// Status Badge (for membership, availability, etc.)
export interface StatusBadgeProps extends Omit<EnhancedBadgeProps, 'variant'> {
  status: 'active' | 'inactive' | 'pending' | 'verified' | 'premium' | 'elite';
}

export function StatusBadge({ status, ...props }: StatusBadgeProps) {
  const getVariant = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'default';
      case 'pending': return 'warning';
      case 'verified': return 'info';
      case 'premium': return 'premium';
      case 'elite': return 'elite';
      default: return 'default';
    }
  };

  return (
    <EnhancedBadge 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
      variant={getVariant(status) as any}
      {...props}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </EnhancedBadge>
  );
}

// Score Badge (for shooting scores with percentage-based styling)
export interface ScoreBadgeProps extends Omit<EnhancedBadgeProps, 'variant'> {
  score: number;
  maxScore?: number;
}

export function ScoreBadge({ score, maxScore, ...props }: ScoreBadgeProps) {
  const getVariant = (percentage: number) => {
    if (percentage >= 90) return 'elite';
    if (percentage >= 80) return 'premium'; 
    if (percentage >= 70) return 'success';
    if (percentage >= 60) return 'warning';
    return 'error';
  };

  const percentage = maxScore ? (score / maxScore) * 100 : score;

  return (
    <EnhancedBadge 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
      variant={getVariant(percentage) as any}
      {...props}
    >
      {maxScore ? `${score}/${maxScore}` : score}
    </EnhancedBadge>
  );
}

export { enhancedBadgeVariants };
