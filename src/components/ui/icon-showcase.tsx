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
  "flex items-center justify-center rounded-lg border transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 hover:border-brass-yellow/30 hover:bg-brass-yellow/5",
        primary: "bg-brass-yellow/10 border-brass-yellow/30 hover:bg-brass-yellow/20",
        secondary: "bg-copper-orange/10 border-copper-orange/30 hover:bg-copper-orange/20",
        accent: "bg-scope-blue/10 border-scope-blue/30 hover:bg-scope-blue/20"
      },
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4"
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
      <div className="text-center space-y-2">
        <Icon className="mx-auto icon-lg text-gunmetal-black" />
        <div className="space-y-1">
          <div className="text-xs font-rajdhani font-semibold text-gunmetal-black">{name}</div>
          <div className="text-xs text-case-hardened">{category}</div>
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
    <div className={cn("w-full py-12", className)} {...props}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-gunmetal-black mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-case-hardened font-noto-sans">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Icon Categories */}
        <div className="space-y-12">
          {iconCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black border-b border-gray-200 pb-2">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
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
        <div className="mt-16 p-8 bg-gradient-card-warm rounded-lg border border-brass-yellow/20">
          <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-6">
            Design System Integration Examples
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Usage */}
            <div className="space-y-3">
              <h4 className="font-rajdhani font-semibold text-gunmetal-black">Primary Actions</h4>
              <div className="flex items-center gap-3 p-3 bg-white rounded border">
                <Target className="icon-lg icon-primary" />
                <span className="text-sm font-noto-sans">Professional line icons</span>
              </div>
            </div>

            {/* Secondary Usage */}
            <div className="space-y-3">
              <h4 className="font-rajdhani font-semibold text-gunmetal-black">Secondary Actions</h4>
              <div className="flex items-center gap-3 p-3 bg-white rounded border">
                <Users className="icon-lg icon-secondary" />
                <span className="text-sm font-noto-sans">Clean, consistent design</span>
              </div>
            </div>

            {/* Accent Usage */}
            <div className="space-y-3">
              <h4 className="font-rajdhani font-semibold text-gunmetal-black">Accent Elements</h4>
              <div className="flex items-center gap-3 p-3 bg-white rounded border">
                <Award className="icon-lg icon-accent" />
                <span className="text-sm font-noto-sans">Idaho Firearms Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}