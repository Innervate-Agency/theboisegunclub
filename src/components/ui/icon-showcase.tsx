'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Import commonly used Lucide icons for firearms/outdoor/business context
import { CalendarDaysIcon, CurrencyDollarIcon, CursorArrowRaysIcon, GlobeAltIcon, MapPinIcon, ShieldCheckIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline';

const iconShowcaseVariants = cva(
  "flex items-center justify-center rounded-sm border transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-card border-border hover:border-sandy-ochre/30 hover:bg-sandy-ochre/5",
        primary: "bg-sandy-ochre/10 border-sandy-ochre/30 hover:bg-sandy-ochre/20",
        secondary: "bg-rusty-orange/10 border-rusty-orange/30 hover:bg-rusty-orange/20",
        accent: "bg-scope-blue/10 border-scope-blue/30 hover:bg-scope-blue/20"
      },
      size: {
        sm: "p-xs",
        md: "p-sm",
        lg: "p-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

interface IconShowcaseItemProps extends VariantProps<typeof iconShowcaseVariants> {
  icon: React.ComponentType<{ className?: string }>
  name: string
  category: string
  className?: string
}

function IconShowcaseItem({ icon: Icon, name, category, variant, size, className }: IconShowcaseItemProps) {
  return (
    <div className={cn(iconShowcaseVariants({ variant, size }), className)}>
      <div className="text-center space-y-4">
        <Icon className="mx-auto icon-lg text-dark-chocolate" />
        <div className="space-y-4">
          <div className="text-caption font-rajdhani font-semibold text-dark-chocolate">{name}</div>
          <div className="text-caption text-warning-amber">{category}</div>
        </div>
      </div>
    </div>
  )
}

export interface IconShowcaseProps extends React.ComponentProps<"div"> {
  title?: string
  subtitle?: string
}

export function IconShowcase({ className, title, subtitle, ...props }: IconShowcaseProps) {
  const iconCategories = [
    {
      name: "Core Business",
      icons: [
        { icon: Building2, name: "Building2", category: "business" },
        { icon: MapPinIcon, name: "MapPinIcon", category: "location" },
        { icon: Phone, name: "Phone", category: "contact" },
        { icon: Mail, name: "Mail", category: "contact" },
        { icon: GlobeAltIcon, name: "Globe", category: "web" },
        { icon: ClockIcon, name: "ClockIcon", category: "time" },
        { icon: UsersIcon, name: "UsersIcon", category: "people" },
        { icon: StarIcon, name: "StarIcon", category: "rating" }
      ]
    },
    {
      name: "Firearms & Outdoor",
      icons: [
        { icon: CursorArrowRaysIcon, name: "CursorArrowRaysIcon", category: "shooting" },
        { icon: Crosshair, name: "Crosshair", category: "shooting" },
        { icon: ShieldCheckIcon, name: "ShieldCheckIcon", category: "safety" },
        { icon: Award, name: "Award", category: "achievement" },
        { icon: TrophyIcon, name: "TrophyIcon", category: "competition" },
        { icon: MapIcon, name: "MapIcon", category: "navigation" },
        { icon: Map, name: "Map", category: "location" },
        { icon: Mountain, name: "Mountain", category: "outdoor" }
      ]
    },
    {
      name: "Navigation & UI",
      icons: [
        { icon: Home, name: "Home", category: "navigation" },
        { icon: Menu, name: "Menu", category: "interface" },
        { icon: MagnifyingGlassIcon, name: "MagnifyingGlassIcon", category: "action" },
        { icon: Filter, name: "Filter", category: "action" },
        { icon: ChevronDown, name: "ChevronDown", category: "direction" },
        { icon: ChevronRight, name: "ChevronRight", category: "direction" },
        { icon: ArrowRight, name: "ArrowRight", category: "direction" },
        { icon: Plus, name: "Plus", category: "action" }
      ]
    },
    {
      name: "Business & Shopping",
      icons: [
        { icon: ShoppingCartIcon, name: "ShoppingCartIcon", category: "commerce" },
        { icon: CreditCard, name: "CreditCard", category: "payment" },
        { icon: CurrencyDollarIcon, name: "CurrencyDollarIcon", category: "money" },
        { icon: ArchiveBoxIcon, name: "ArchiveBoxIcon", category: "shipping" },
        { icon: Truck, name: "Truck", category: "delivery" },
        { icon: CalendarDaysIcon, name: "CalendarDaysIcon", category: "time" },
        { icon: Settings, name: "Settings", category: "admin" },
        { icon: Edit, name: "Edit", category: "action" }
      ]
    }
  ]

  return (
    <div className={cn("w-full py-16", className)} {...props}>
      <div className="max-w-site mx-auto px-md">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-4">
            {title && (
              <h2 className="text-heading-lg md:text-heading-xl font-rajdhani font-bold text-dark-chocolate mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-body-lg text-warning-amber font-noto-sans">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Icon Categories */}
        <div className="space-y-xl">
          {iconCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-heading-sm font-rajdhani font-bold text-dark-chocolate border-b border-border pb-(--spacing-xs)">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-base">
                {category.icons.map((iconItem, iconIndex) => (
                  <IconShowcaseItem
                    key={iconIndex}
                    icon={iconItemotion.icon}
                    name={iconItemotion.name}
                    category={iconItemotion.category}
                    variant={categoryIndex % 2 === 0 ? "default" : "primary"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Examples */}
        <div className="mt-(--spacing-2xl) p-lg bg-gradient-card-warm rounded-sm border border-sandy-ochre/20">
          <h3 className="text-heading-sm font-rajdhani font-bold text-dark-chocolate mb-4">
            Design System Integration Examples
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Primary Usage */}
            <div className="space-y-4">
              <h4 className="font-rajdhani font-semibold text-dark-chocolate">Primary Actions</h4>
              <div className="flex items-center gap-sm p-sm bg-card rounded border">
                <CursorArrowRaysIcon className="icon-lg icon-primary" />
                <span className="text-body-sm font-noto-sans">Professional line icons</span>
              </div>
            </div>

            {/* Secondary Usage */}
            <div className="space-y-4">
              <h4 className="font-rajdhani font-semibold text-dark-chocolate">Secondary Actions</h4>
              <div className="flex items-center gap-sm p-sm bg-card rounded border">
                <UsersIcon className="icon-lg icon-secondary" />
                <span className="text-body-sm font-noto-sans">Clean, consistent design</span>
              </div>
            </div>

            {/* Accent Usage */}
            <div className="space-y-4">
              <h4 className="font-rajdhani font-semibold text-dark-chocolate">Accent Elements</h4>
              <div className="flex items-center gap-sm p-sm bg-card rounded border">
                <TrophyIcon className="icon-lg icon-accent" />
                <span className="text-body-sm font-noto-sans">Idaho Firearms Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}