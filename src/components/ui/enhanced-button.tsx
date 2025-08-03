import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';

// TBGC Enhanced Button - Complete Design System Application
const enhancedButtonVariants = cva(
  // STRATEGIC RESTRAINT: Shadow-first foundation with functional focus states only
  "inline-flex items-center justify-center font-noto-sans font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brass-yellow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        // Default: Clean shadow hierarchy - no decorative borders
        default: "bg-primary text-primary-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5",
        
        // Primary: Brand gradient with consistent shadows
        primary: "bg-gradient-to-r from-brass-yellow to-copper-orange text-gunmetal-black shadow-flat hover:shadow-md hover:-translate-y-0.5 font-semibold",
        
        // Secondary: Walnut-themed with shadow depth
        secondary: "bg-walnut-stock text-nickel-white shadow-flat hover:shadow-md hover:-translate-y-0.5 hover:bg-walnut-stock/90",
        
        // Outline: Sophisticated shadow-based outline with subtle background on hover
        outline: "bg-transparent text-brass-yellow shadow-flat hover:bg-brass-yellow/10 hover:shadow-md hover:text-brass-yellow ring-1 ring-brass-yellow/30 hover:ring-brass-yellow/50",
        
        // Ghost: Pure transparent approach
        ghost: "bg-transparent text-foreground hover:bg-muted hover:text-foreground hover:shadow-flat",
        
        // Glass: Mica effect with consistent shadows - no borders
        glass: "mica-overlay text-foreground shadow-flat hover:shadow-md backdrop-blur-sm",
        
        // Fire: Center-positioned gradient accent like VendorCard
        fire: "bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Fire Blue: Center-positioned cool gradient
        "fire-blue": "bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Destructive: Shadow-first with enhanced depth
        destructive: "bg-muzzle-flash text-nickel-white shadow-flat hover:shadow-md hover:-translate-y-0.5 hover:bg-muzzle-flash/90",
        
        // Success: Shadow-first approach
        success: "bg-bore-sight-green text-nickel-white shadow-flat hover:shadow-md hover:-translate-y-0.5 hover:bg-bore-sight-green/90",
        
        // Warning: Clean shadow hierarchy
        warning: "bg-sight-gold text-gunmetal-black shadow-flat hover:shadow-md hover:-translate-y-0.5 hover:bg-sight-gold/90",
      },
      size: {
        // Proper sizing system using design tokens
        xs: "h-6 px-xs py-xs text-caption gap-xs",           // Micro buttons
        sm: "h-8 px-sm py-md text-caption gap-md",      // Inside cards/forms (Stripe pattern)
        default: "h-10 px-base py-xs.5 text-body-sm gap-xs",  // General usage
        lg: "h-12 px-md py-sm text-body gap-xs",       // Hero/primary actions
        xl: "h-14 px-lg py-base text-body-lg gap-xs.5",       // Call-to-action buttons
        icon: "h-10 w-10 p-0",                      // Square icon buttons
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-button",      // --radius-sm
        default: "rounded-card", // --radius-base (boxy with slight curve)
        lg: "rounded-large",      // --radius-lg  
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

export interface EnhancedButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  asChild?: boolean;
}

export const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(enhancedButtonVariants({ variant, size, radius }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export { enhancedButtonVariants };
