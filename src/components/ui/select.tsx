"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Context for passing size to SelectContent and its children
const SelectSizeContext = React.createContext<"sm" | "default" | "lg">("default")

const selectTriggerVariants = cva(
  // Base: Strategic restraint with clean theme-aware design
  "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-xs rounded-input border bg-transparent px-sm py-xs text-body-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-xs [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:h-icon-sm [&_svg:not([class*='size-'])]:w-icon-sm",
  {
    variants: {
      variant: {
        default: "bg-background border-border hover:bg-accent/50",
        premium: "bg-background border-brass-yellow/30 hover:bg-brass-yellow/10 focus-visible:border-brass-yellow",
        glass: "mica-card border-border/50 hover:bg-background/80",
        outline: "bg-transparent border-border hover:bg-accent/50",
        filled: "bg-muted border-transparent hover:bg-muted/80",
      },
      size: {
        sm: "h-[var(--input-height-sm)] px-xs py-xs text-body-sm",
        default: "h-[var(--input-height-base)] px-sm py-xs text-body-sm", 
        lg: "h-12 px-md py-sm text-body-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const selectContentVariants = cva(
  // Base: Improved text contrast for Windows 11 Mica background
  "mica-dropdown text-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-input",
  {
    variants: {
      size: {
        sm: "text-body-sm",
        default: "text-body-sm", 
        lg: "text-body-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const selectItemVariants = cva(
  // Base: Better contrast and size-responsive styling
  "focus:bg-accent/80 focus:text-accent-foreground hover:bg-accent/80 hover:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-xs rounded-button outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 transition-colors duration-150",
  {
    variants: {
      size: {
        sm: "py-xs pr-[var(--space-md)] pl-[var(--space-xs)] text-body-sm min-h-[28px]",
        default: "py-xs pr-[var(--space-lg)] pl-[var(--space-xs)] text-body-sm min-h-[32px]",
        lg: "py-sm pr-[var(--space-lg)] pl-[var(--space-sm)] text-body-base min-h-[40px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const selectLabelVariants = cva(
  // Base: Size-responsive labels with better contrast
  "text-muted-foreground px-xs py-xs font-medium",
  {
    variants: {
      size: {
        sm: "text-caption",
        default: "text-caption",
        lg: "text-body-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

export interface SelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  leftIcon?: React.ReactNode
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, variant, size = "default", leftIcon, children, ...props }, ref) => (
  <SelectSizeContext.Provider value={size || "default"}>
    <SelectPrimitive.Trigger
      ref={ref}
      data-slot="select-trigger"
      className={cn(selectTriggerVariants({ variant, size }), className)}
      {...props}
    >
      {leftIcon && (
        <span className="shrink-0 text-muted-foreground [&_svg]:h-icon-sm [&_svg]:w-icon-sm">
          {leftIcon}
        </span>
      )}
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="h-icon-sm w-icon-sm opacity-50 shrink-0" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  </SelectSizeContext.Provider>
))

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentProps<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => {
  const size = React.useContext(SelectSizeContext)
  
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        data-slot="select-content"
        className={cn(
          selectContentVariants({ size }),
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-[var(--space-micro)]",
            position === "popper" &&
              "h-radix-select-trigger-height w-full min-w-radix-select-trigger-width scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
})

SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentProps<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  const size = React.useContext(SelectSizeContext)
  
  return (
    <SelectPrimitive.Label
      ref={ref}
      data-slot="select-label"
      className={cn(selectLabelVariants({ size }), className)}
      {...props}
    />
  )
})

SelectLabel.displayName = SelectPrimitive.Label.displayName

export interface SelectItemProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {
  icon?: React.ReactNode
}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, icon, ...props }, ref) => {
  const size = React.useContext(SelectSizeContext)
  
  return (
    <SelectPrimitive.Item
      ref={ref}
      data-slot="select-item"
      className={cn(selectItemVariants({ size }), className)}
      {...props}
    >
      {icon && (
        <span className="shrink-0 text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">
          {icon}
        </span>
      )}
      <SelectPrimitive.ItemText className="flex-1">{children}</SelectPrimitive.ItemText>
      <span className="absolute right-[var(--space-xs)] flex h-icon-sm w-icon-sm items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-icon-sm w-icon-sm" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
})

SelectItem.displayName = SelectPrimitive.Item.displayName

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-[var(--space-micro)] my-[var(--space-micro)] h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-[var(--space-micro)]",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="h-icon-sm w-icon-sm" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-[var(--space-micro)]",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="h-icon-sm w-icon-sm" />
    </SelectPrimitive.ScrollDownButton>
  )
}

// Additional select components for specific use cases
function ClassificationSelect({
  value,
  onValueChange,
  placeholder = "Select classification...",
  className,
  ...props
}: React.ComponentProps<typeof Select> & {
  placeholder?: string
  className?: string
}) {
  const classifications = [
    { value: "master", label: "Master" },
    { value: "expert", label: "Expert" },
    { value: "sharpshooter", label: "Sharpshooter" },
    { value: "marksman", label: "Marksman" },
    { value: "unclassified", label: "Unclassified" },
  ]

  return (
    <Select value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Classifications</SelectLabel>
          {classifications.map((classification) => (
            <SelectItem key={classification.value} value={classification.value}>
              {classification.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function RangeSelect({
  value,
  onValueChange,
  placeholder = "Select range...",
  className,
  ...props
}: React.ComponentProps<typeof Select> & {
  placeholder?: string
  className?: string
}) {
  const ranges = [
    { value: "indoor-25", label: "Indoor 25 Yard" },
    { value: "indoor-50", label: "Indoor 50 Yard" },
    { value: "outdoor-100", label: "Outdoor 100 Yard" },
    { value: "outdoor-200", label: "Outdoor 200 Yard" },
    { value: "pistol", label: "Pistol Range" },
    { value: "trap", label: "Trap Range" },
    { value: "skeet", label: "Skeet Range" },
  ]

  return (
    <Select value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Ranges</SelectLabel>
          {ranges.map((range) => (
            <SelectItem key={range.value} value={range.value}>
              {range.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  ClassificationSelect,
  RangeSelect,
  selectTriggerVariants,
  selectContentVariants,
  selectItemVariants,
  selectLabelVariants,
}
