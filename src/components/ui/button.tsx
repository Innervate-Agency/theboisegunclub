import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-noto-sans font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-present hover:shadow-elevated",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-present hover:shadow-elevated",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-whisper hover:shadow-present",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-whisper hover:shadow-present",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-rusty-orange to-sandy-ochre text-white shadow-commanding hover:shadow-hero transition-all duration-300 ease-out hover:scale-105",
        glass: "bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-elevated hover:shadow-prominent hover:bg-white/20",
        flat: "bg-transparent text-foreground hover:bg-muted/50",

        // Fire Variants
        fire: "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 hover:after:h-1",
        "fire-blue": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-slate-blue after:to-info-river after:transition-all after:duration-300 hover:after:h-1",
        "fire-green": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-sagebrush-green after:to-lodgepole-green after:transition-all after:duration-300 hover:after:h-1",
        "fire-purple": "shadow-commanding hover:shadow-hero relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-foothills-purple after:to-canyon-clay after:transition-all after:duration-300 hover:after:h-1",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-xs px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }