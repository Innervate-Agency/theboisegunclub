import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// TBGC Enhanced Input - Complete Design System Application
const enhancedInputVariants = cva(
  // Foundation: Flat elements inside containers (Stripe pattern) + proper typography
  "flex w-full min-w-0 border bg-transparent font-noto-sans transition-stripe-fast outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground selection:bg-brass-yellow selection:text-gunmetal-black shadow-flat",
  {
    variants: {
      variant: {
        // Default: Clean input with proper focus states
        default: "bg-input border-border text-foreground hover:border-border/80 focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20",
        
        // Filled: Muted background variant
        filled: "bg-muted border-border/60 text-foreground hover:bg-input hover:border-border/80 focus-visible:bg-input focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20",
        
        // Ghost: Transparent with subtle hover
        ghost: "bg-transparent border-transparent text-foreground hover:bg-muted/50 focus-visible:bg-muted/30 focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20",
        
        // Glass: Mica effect with backdrop blur (flat shadow)
        glass: "mica-overlay border-border/30 text-foreground hover:border-border/50 hover:bg-card/30 focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20 backdrop-blur-sm",
        
        // Premium: Brass-accented with subtle glow
        premium: "bg-input border-brass-yellow/20 text-foreground hover:border-brass-yellow/40 focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20 focus-visible:shadow-brass",
        
        // Elite: Copper-accented with stronger effects
        elite: "bg-input border-copper-orange/20 text-foreground hover:border-copper-orange/40 focus-visible:border-copper-orange focus-visible:ring-3 focus-visible:ring-copper-orange/20 focus-visible:shadow-copper",
      },
      size: {
        // Proper sizing using design tokens
        sm: "h-8 px-3 py-1 text-sm",         // 32px - compact
        default: "h-10 px-3 py-2 text-sm",  // 40px - standard  
        lg: "h-12 px-4 py-3 text-base",     // 48px - large
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",      // --radius-sm
        default: "rounded-md", // --radius-base
        lg: "rounded-lg",      // --radius-lg
        full: "rounded-full",  // --radius-full
      },
      status: {
        default: "",
        // Error: Muzzle flash red with focus states
        error: "border-muzzle-flash focus-visible:border-muzzle-flash focus-visible:ring-muzzle-flash/20 aria-invalid:border-muzzle-flash aria-invalid:ring-muzzle-flash/20",
        // Success: Bore sight green  
        success: "border-bore-sight-green focus-visible:border-bore-sight-green focus-visible:ring-bore-sight-green/20",
        // Warning: Sight gold
        warning: "border-sight-gold focus-visible:border-sight-gold focus-visible:ring-sight-gold/20"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default", 
      radius: "default",
      status: "default"
    }
  }
);

export interface EnhancedInputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof enhancedInputVariants> {}

export const EnhancedInput = React.forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ className, variant, size, radius, status, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          enhancedInputVariants({ variant, size, radius, status }),
          disabled && "cursor-not-allowed opacity-50 pointer-events-none",
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

EnhancedInput.displayName = "EnhancedInput";

export { enhancedInputVariants };
