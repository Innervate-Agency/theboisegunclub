import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// TBGC Enhanced Input - Complete Design System Application
const enhancedInputVariants = cva(
  // Foundation: Flat elements inside containers (Stripe pattern) + proper typography
  "flex w-full min-w-0 border bg-transparent font-noto-sans transition-stripe-fast outline-none file:border-0 file:bg-transparent file:text-body-sm file:font-medium placeholder:text-muted-foreground selection:bg-sandy-ochre selection:text-dark-chocolate",
  {
    variants: {
      variant: {
        // Default: Clean input with proper focus states
        default: "bg-input border-border text-foreground hover:border-border/80 focus-visible:border-sandy-ochre focus-visible:ring-3 focus-visible:ring-sandy-ochre/20",
        
        // Filled: Muted background variant
        filled: "bg-muted border-border/60 text-foreground hover:bg-input hover:border-border/80 focus-visible:bg-input focus-visible:border-sandy-ochre focus-visible:ring-3 focus-visible:ring-sandy-ochre/20",
        
        // Ghost: Transparent with subtle hover
        ghost: "bg-transparent border-transparent text-foreground hover:bg-muted/50 focus-visible:bg-muted/30 focus-visible:border-sandy-ochre focus-visible:ring-3 focus-visible:ring-sandy-ochre/20",
        
        // Glass: Mica effect with backdrop blur (flat shadow)
        glass: "mica-overlay border-border/30 text-foreground hover:border-border/50 hover:bg-card/30 focus-visible:border-sandy-ochre focus-visible:ring-3 focus-visible:ring-sandy-ochre/20 backdrop-blur-sm",
        
        // Premium: Brass-accented variant
        premium: "bg-input border-sandy-ochre/20 text-foreground hover:border-sandy-ochre/40 focus-visible:border-sandy-ochre focus-visible:ring-3 focus-visible:ring-sandy-ochre/20",
        
        // Elite: Copper-accented variant
        elite: "bg-input border-rusty-orange/20 text-foreground hover:border-rusty-orange/40 focus-visible:border-rusty-orange focus-visible:ring-3 focus-visible:ring-rusty-orange/20",
      },
      size: {
        // Proper sizing using design tokens
        sm: "h-8 px-sm py-xs text-body-sm",         // 32px - compact
        default: "h-10 px-sm py-xs text-body-sm",  // 40px - standard  
        lg: "h-12 px-base py-sm text-body",     // 48px - large
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",      // --radius-sm
        default: "rounded-input", // --radius-base
        lg: "rounded-sm",      // --radius-lg
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
