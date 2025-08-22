'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { XMarkIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-sm border p-sm [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-sm [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive text-destructive [&>svg]:text-destructive",
        success: "border-accent text-accent [&>svg]:text-accent",
        warning: "border-secondary text-secondary [&>svg]:text-secondary",
        info: "border-primary text-primary [&>svg]:text-primary",
        premium: "border-primary text-primary [&>svg]:text-primary relative before:absolute before:inset-0 before:bg-gradient-logo before:opacity-10 before:rounded before:pointer-events-none",
        elite: "border-primary text-primary [&>svg]:text-primary relative before:absolute before:inset-0 before:bg-gradient-intel-hero before:opacity-10 before:rounded before:pointer-events-none",
      },
      size: {
        sm: "px-xs py-tiny text-body-xs",
        default: "p-sm text-body-sm",
        lg: "p-md text-body-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  dismissible?: boolean
  onDismiss?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, dismissible = false, onDismiss, children, ...props }, ref) => {
    const [isDismissed, setIsDismissed] = React.useState(false)

    const handleDismiss = () => {
      setIsDismissed(true)
      if (onDismiss) {
        onDismiss()
      }
    }

    if (isDismissed) {
      return null
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute top-tiny right-2 p-micro rounded-xs hover:bg-muted/50"
          >
            <XMarkIcon className="size-4" />
          </button>
        )}
      </div>
    )
  }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-micro font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-body-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }