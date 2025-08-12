import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  // Base: Strategic restraint with clean theme-aware design
  "relative w-full rounded-sm px-md py-base text-body-sm grid has-[>svg]:grid-cols-[1.5rem_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-1 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current transition-colors duration-150 ease-out",
  {
    variants: {
      variant: {
        // Default: Clean theme-aware background with whisper shadow
        default: "bg-card text-card-foreground border border-border shadow-whisper",
        
        // Info: Bogus Basin palette - info river blue tones
        info: "bg-info-river/10 text-info-river border border-info-river/30 [&>svg]:text-info-river shadow-whisper hover:shadow-present",
        
        // Success: Bogus Basin palette - sagebrush green tones  
        success: "bg-sagebrush-green/10 text-sagebrush-green border border-sagebrush-green/30 [&>svg]:text-sagebrush-green shadow-whisper hover:shadow-present",
        
        // Warning: Bogus Basin palette - warning amber tones
        warning: "bg-warning-amber/10 text-warning-amber border border-warning-amber/30 [&>svg]:text-warning-amber shadow-whisper hover:shadow-present",
        
        // Destructive: Bogus Basin palette - canyon clay red tones
        destructive: "bg-canyon-clay/10 text-canyon-clay border border-canyon-clay/30 [&>svg]:text-canyon-clay shadow-whisper hover:shadow-present",
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
