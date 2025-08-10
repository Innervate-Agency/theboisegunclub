'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Import commonly used Lucide icons for firearms/outdoor/business context
import {
  // Core Business Icons
  Building2, MapPin, Phone, Mail, Globe, Clock, Users, Star,
  
  // Firearms/Outdoor Related
  Target, Crosshair, Shield, Award, Trophy, Compass, Map,
  
  // Navigation & UI
  Home, Menu, Search, Filter, ChevronDown, ChevronRight, ArrowRight, ArrowLeft,
  Plus, Minus, X, Check, Info, AlertTriangle, AlertCircle,
  
  // Social & Communication
  MessageCircle, Heart, Share2, Bookmark, ThumbsUp, Eye,
  
  // Business & Shopping
  ShoppingCart, CreditCard, DollarSign, Package, Truck, Calendar,
  
  // Technical
  Settings, Edit, Trash2, Download, Upload, Copy, ExternalLink,
  
  // Weather & Environment
  Sun, Moon, Cloud, CloudRain, Wind, Mountain, Trees
} from 'lucide-react'

const iconShowcaseVariants = cva(
  "flex items-center justify-center rounded-card border transition-all duration-200 ease-out",
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
      <div className="text-center space-y-(--space-xs)">
        <Icon className="mx-auto icon-lg text-dark-chocolate" />
        <div className="space-y-(--space-micro)">
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
        { icon: MapPin, name: "MapPin", category: "location" },
        { icon: Phone, name: "Phone", category: "contact" },
        { icon: Mail, name: "Mail", category: "contact" },
        { icon: Globe, name: "Globe", category: "web" },
        { icon: Clock, name: "Clock", category: "time" },
        { icon: Users, name: "Users", category: "people" },
        { icon: Star, name: "Star", category: "rating" }
      ]
    },
    {
      name: "Firearms & Outdoor",
      icons: [
        { icon: Target, name: "Target", category: "shooting" },
        { icon: Crosshair, name: "Crosshair", category: "shooting" },
        { icon: Shield, name: "Shield", category: "safety" },
        { icon: Award, name: "Award", category: "achievement" },
        { icon: Trophy, name: "Trophy", category: "competition" },
        { icon: Compass, name: "Compass", category: "navigation" },
        { icon: Map, name: "Map", category: "location" },
        { icon: Mountain, name: "Mountain", category: "outdoor" }
      ]
    },
    {
      name: "Navigation & UI",
      icons: [
        { icon: Home, name: "Home", category: "navigation" },
        { icon: Menu, name: "Menu", category: "interface" },
        { icon: Search, name: "Search", category: "action" },
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
        { icon: ShoppingCart, name: "ShoppingCart", category: "commerce" },
        { icon: CreditCard, name: "CreditCard", category: "payment" },
        { icon: DollarSign, name: "DollarSign", category: "money" },
        { icon: Package, name: "Package", category: "shipping" },
        { icon: Truck, name: "Truck", category: "delivery" },
        { icon: Calendar, name: "Calendar", category: "time" },
        { icon: Settings, name: "Settings", category: "admin" },
        { icon: Edit, name: "Edit", category: "action" }
      ]
    }
  ]

  return (
    <div className={cn("w-full py-(--space-xl)", className)} {...props}>
      <div className="max-w-site mx-auto px-md">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-(--space-xl)">
            {title && (
              <h2 className="text-heading-lg md:text-heading-xl font-rajdhani font-bold text-dark-chocolate mb-(--space-sm)">
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
            <div key={categoryIndex} className="space-y-(--space-md)">
              <h3 className="text-heading-sm font-rajdhani font-bold text-dark-chocolate border-b border-border pb-(--space-xs)">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-base">
                {category.icons.map((iconItem, iconIndex) => (
                  <IconShowcaseItem
                    key={iconIndex}
                    icon={iconItem.icon}
                    name={iconItem.name}
                    category={iconItem.category}
                    variant={categoryIndex % 2 === 0 ? "default" : "primary"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Examples */}
        <div className="mt-(--space-2xl) p-lg bg-gradient-card-warm rounded-card border border-sandy-ochre/20">
          <h3 className="text-heading-sm font-rajdhani font-bold text-dark-chocolate mb-(--space-md)">
            Design System Integration Examples
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Primary Usage */}
            <div className="space-y-(--space-sm)">
              <h4 className="font-rajdhani font-semibold text-dark-chocolate">Primary Actions</h4>
              <div className="flex items-center gap-sm p-sm bg-card rounded border">
                <Target className="icon-lg icon-primary" />
                <span className="text-body-sm font-noto-sans">Professional line icons</span>
              </div>
            </div>

            {/* Secondary Usage */}
            <div className="space-y-(--space-sm)">
              <h4 className="font-rajdhani font-semibold text-dark-chocolate">Secondary Actions</h4>
              <div className="flex items-center gap-sm p-sm bg-card rounded border">
                <Users className="icon-lg icon-secondary" />
                <span className="text-body-sm font-noto-sans">Clean, consistent design</span>
              </div>
            </div>

            {/* Accent Usage */}
            <div className="space-y-(--space-sm)">
              <h4 className="font-rajdhani font-semibold text-dark-chocolate">Accent Elements</h4>
              <div className="flex items-center gap-sm p-sm bg-card rounded border">
                <Award className="icon-lg icon-accent" />
                <span className="text-body-sm font-noto-sans">Idaho Firearms Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}