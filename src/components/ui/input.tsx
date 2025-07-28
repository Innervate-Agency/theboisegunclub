import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  // Foundation classes inspired by Stripe's sophisticated input design
  "flex w-full min-w-0 rounded-md border bg-transparent text-base transition-stripe-fast outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-case-hardened selection:bg-brass-yellow selection:text-gunmetal-black font-noto-sans",
  {
    variants: {
      variant: {
        default: "bg-range-white border-case-hardened/30 text-blued-steel shadow-flat hover:border-case-hardened/50 focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20",
        filled: "bg-shooting-bench border-case-hardened/20 text-blued-steel shadow-flat hover:bg-range-white hover:border-case-hardened/40 focus-visible:bg-range-white focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20",
        ghost: "bg-transparent border-transparent text-blued-steel hover:bg-shooting-bench/50 focus-visible:bg-shooting-bench/30 focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20",
        glass: "bg-white/20 backdrop-blur-sm border-white/30 text-blued-steel shadow-glass hover:border-white/50 hover:bg-white/30 focus-visible:border-brass-yellow focus-visible:ring-3 focus-visible:ring-brass-yellow/20 mica-glass"
      },
      size: {
        sm: "h-8 px-3 py-1 text-sm",
        default: "h-10 px-3 py-2 text-sm md:text-base",
        lg: "h-12 px-4 py-3 text-base"
      },
      status: {
        default: "",
        error: "border-safety-red focus-visible:border-safety-red focus-visible:ring-safety-red/20 aria-invalid:border-safety-red aria-invalid:ring-safety-red/20",
        success: "border-rifling-green focus-visible:border-rifling-green focus-visible:ring-rifling-green/20",
        warning: "border-sight-gold focus-visible:border-sight-gold focus-visible:ring-sight-gold/20"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      status: "default"
    }
  }
)

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, status, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          inputVariants({ variant, size, status }),
          disabled && "cursor-not-allowed opacity-50 pointer-events-none",
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// Enhanced input with label and description support
export interface InputGroupProps extends React.ComponentProps<"div"> {
  label?: string
  description?: string
  error?: string
  required?: boolean
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, label, description, error, required, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      >
        {label && (
          <label className="text-sm font-medium text-blued-steel font-noto-sans">
            {label}
            {required && <span className="text-safety-red ml-1">*</span>}
          </label>
        )}
        {children}
        {description && !error && (
          <p className="text-xs text-case-hardened leading-relaxed">
            {description}
          </p>
        )}
        {error && (
          <p className="text-xs text-safety-red leading-relaxed flex items-center gap-1">
            <svg className="h-3 w-3 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V8a.5.5 0 01.5-.5z" />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)
InputGroup.displayName = "InputGroup"

export { Input, InputGroup, inputVariants }