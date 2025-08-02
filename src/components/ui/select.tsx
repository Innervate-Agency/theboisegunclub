"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

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

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-[var(--space-xs)] rounded-md border bg-transparent px-[var(--space-sm)] py-[var(--space-xs)] text-[var(--text-sm)] whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[var(--input-height-base)] data-[size=sm]:h-[var(--input-height-sm)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-[var(--space-xs)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:h-[var(--icon-sm)] [&_svg:not([class*='size-'])]:w-[var(--icon-sm)]",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="h-[var(--icon-sm)] w-[var(--icon-sm)] opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "mica-dropdown text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md",
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
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-[var(--space-xs)] py-[var(--space-xs)] text-[var(--text-xs)]", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-brass-yellow/10 focus:text-brass-yellow hover:bg-brass-yellow/10 hover:text-brass-yellow [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-[var(--space-xs)] rounded-sm py-[var(--space-xs)] pr-[var(--space-lg)] pl-[var(--space-xs)] text-[var(--text-sm)] outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-[var(--space-xs)] transition-colors duration-150",
        className
      )}
      {...props}
    >
      <span className="absolute right-[var(--space-xs)] flex h-[var(--icon-sm)] w-[var(--icon-sm)] items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-[var(--icon-sm)] w-[var(--icon-sm)]" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

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
      <ChevronUpIcon className="h-[var(--icon-sm)] w-[var(--icon-sm)]" />
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
      <ChevronDownIcon className="h-[var(--icon-sm)] w-[var(--icon-sm)]" />
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
}
