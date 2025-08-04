import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  // Base: Strategic restraint with clean theme-aware design
  "relative w-full rounded-card px-md py-base text-body-sm grid has-[>svg]:grid-cols-[1.5rem_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-1 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current transition-colors duration-150 ease-out",
  {
    variants: {
      variant: {
        // Default: Clean theme-aware background
        default: "bg-card text-card-foreground border border-border",
        
        // Info: Idaho palette - scope blue tones
        info: "bg-scope-blue/10 text-scope-blue border border-scope-blue/30 [&>svg]:text-scope-blue dark:bg-scope-blue/20 dark:text-cerakote-blue dark:border-scope-blue/40 dark:[&>svg]:text-cerakote-blue",
        
        // Success: Idaho palette - rifling green tones  
        success: "bg-rifling-green/10 text-rifling-green border border-rifling-green/30 [&>svg]:text-rifling-green dark:bg-bore-sight-green/20 dark:text-bore-sight-green dark:border-rifling-green/40 dark:[&>svg]:text-bore-sight-green",
        
        // Warning: Idaho palette - sight gold tones
        warning: "bg-sight-gold/10 text-sight-gold border border-sight-gold/30 [&>svg]:text-sight-gold dark:bg-recoil-pad/20 dark:text-sight-gold dark:border-sight-gold/40 dark:[&>svg]:text-recoil-pad",
        
        // Destructive: Idaho palette - safety red tones
        destructive: "bg-safety-red/10 text-safety-red border border-safety-red/30 [&>svg]:text-safety-red dark:bg-muzzle-flash/20 dark:text-safety-red dark:border-safety-red/40 dark:[&>svg]:text-muzzle-flash",
      },
      size: {
        sm: "px-sm py-xs text-body-sm",
        default: "px-md py-base text-body-sm", 
        lg: "px-lg py-md text-body-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface AlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, size }), className)}
      {...props}
    />
  )
)

Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight text-body leading-none",
        className
      )}
      {...props}
    />
  )
)

AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="alert-description"
      className={cn(
        "col-start-2 text-body-sm leading-relaxed [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
)

AlertDescription.displayName = "AlertDescription"

export { 
  Alert, 
  AlertTitle, 
  AlertDescription,
  alertVariants,
}
