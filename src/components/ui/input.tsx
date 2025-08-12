import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Eye, EyeOff, AlertCircle } from "lucide-react"

const inputVariants = cva(
  "flex h-10 w-full rounded-xs border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        filled: "bg-muted",
        ghost: "border-transparent hover:bg-muted/50",
        glass: "bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70",
      },
      size: {
        sm: "h-9 px-2",
        default: "h-10 px-3 py-2",
        lg: "h-11 px-4",
      },
      status: {
        default: "",
        error: "border-destructive text-destructive placeholder:text-destructive/70",
        success: "border-success text-success placeholder:text-success/70",
        warning: "border-warning text-warning placeholder:text-warning/70",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      status: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, status, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPassword = type === "password"

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev)
    }

    return (
      <div className="relative w-full">
        <input
          type={isPassword && showPassword ? "text" : type}
          className={cn(inputVariants({ variant, size, status }), className)}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  error?: string
  required?: boolean
  icon?: React.ReactNode
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, label, description, error, required, icon, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid gap-tiny", className)} {...props}>
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && <div className="absolute left-3">{icon}</div>}
          <div className={cn("w-full", icon ? "pl-10" : "")}>{children}</div>
        </div>
        {description && !error && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {error && (
          <p className="text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            {error}
          </p>
        )}
      </div>
    )
  }
)
InputGroup.displayName = "InputGroup"

export { Input, InputGroup, inputVariants }
