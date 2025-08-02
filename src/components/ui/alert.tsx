import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg px-[var(--space-md)] py-[var(--space-base)] text-sm grid has-[>svg]:grid-cols-[1.5rem_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-1 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current transition-all duration-150 ease-out shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        info: "bg-scope-blue/5 text-scope-blue [&>svg]:text-scope-blue",
        success: "bg-rifling-green/5 text-rifling-green [&>svg]:text-rifling-green",
        warning: "bg-sight-gold/5 text-sight-gold [&>svg]:text-sight-gold",
        destructive: "bg-safety-red/5 text-safety-red [&>svg]:text-safety-red",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight text-base",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-[var(--space-xs)] text-sm opacity-90 [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
