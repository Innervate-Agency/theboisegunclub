'use client'

import * as React from 'react'
import Link from 'next/link'
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { FlipText } from "./flip-text"

const pianoKeyVariants = cva(
  "relative overflow-hidden font-rajdhani cursor-pointer w-full h-full group rounded-none border-r border-border/20 last:border-r-0 bg-card transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "shadow-present",
      },
      size: {
        default: "py-4 px-3",
        compact: "py-3 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const pianoTextVariants = cva(
  "relative z-10 font-rajdhani font-bold letter-spacing-wide transition-all duration-300 ease-out",
  {
    variants: {
      size: {
        default: "text-lg",
        compact: "text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

interface PianoKeyProps extends React.ComponentProps<"button">, VariantProps<typeof pianoKeyVariants> {
  href: string
  icon: React.ReactNode
  label: string
  colorClass: string
  asChild?: boolean
}

const PianoKey = React.forwardRef<HTMLButtonElement, PianoKeyProps>(
  ({ className, variant, size, href, icon, label, colorClass, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const [isHovered, setIsHovered] = React.useState(false)
    
    const isExternal = href.startsWith('http')
    
    // Map colorClass to CSS custom property value
    const getColorValue = (colorClass: string) => {
      const colorMap: Record<string, string> = {
        'nav-events': 'var(--nav-events)',
        'nav-directory': 'var(--nav-directory)',
        'nav-armory': 'var(--nav-armory)',
        'nav-intel': 'var(--nav-intel)',
        'nav-marketplace': 'var(--nav-marketplace)',
        'nav-forums': 'var(--nav-forums)'
      }
      return colorMap[colorClass] || 'var(--primary)'
    }
    
    const buttonContent = (
      <Comp
        className={cn(
          pianoKeyVariants({ variant, size, className }),
          "hover:shadow-elevated hover:transform hover:-translate-y-1"
        )}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center gap-1 justify-center h-full">
          {/* Icon */}
          <div className="transition-all duration-300 ease-out text-muted-foreground/70 group-hover:text-white group-hover:scale-110 mb-1">
            {icon}
          </div>
          
          {/* Text with horizontal flip animation */}
          <FlipText
            text={label}
            variant="horizontal"
            color={getColorValue(colorClass)}
            staggerDelay={80}
            isActive={isHovered}
            className="text-lg font-bold"
          />
        </div>
      </Comp>
    )

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {buttonContent}
        </a>
      )
    }

    return (
      <Link href={href} className="block">
        {buttonContent}
      </Link>
    )
  }
)
PianoKey.displayName = "PianoKey"

interface PianoKeyNavigationProps {
  className?: string
  items: Array<{
    href: string
    icon: React.ReactNode
    label: string
    colorClass: string
  }>
  variant?: VariantProps<typeof pianoKeyVariants>['variant']
  size?: VariantProps<typeof pianoKeyVariants>['size']
}

const PianoKeyNavigation = React.forwardRef<HTMLDivElement, PianoKeyNavigationProps>(
  ({ className, items, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-6 w-full gap-0", className)}
        {...props}
      >
        {items.map((item, index) => (
          <PianoKey
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
            colorClass={item.colorClass}
            variant={variant}
            size={size}
          />
        ))}
      </div>
    )
  }
)
PianoKeyNavigation.displayName = "PianoKeyNavigation"

export { PianoKeyNavigation, PianoKey, pianoKeyVariants }