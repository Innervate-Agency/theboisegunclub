'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Check, X, Minus, Star, Crown, Target } from 'lucide-react'

const pricingCardVariants = cva(
  "relative overflow-hidden transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-card border-border shadow-sm hover:shadow-md",
        compact: "bg-card border-border shadow-sm",
        detailed: "bg-card border-border shadow-lg",
        fusion: "mica-card-premium border-scope-blue/30 shadow-lg"
      },
      popular: {
        true: "border-scope-blue shadow-lg scale-105 z-10",
        false: ""
      },
      recommended: {
        true: "ring-2 ring-scope-blue/50",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      popular: false,
      recommended: false
    }
  }
)

interface PricingFeature {
  name: string
  included: boolean | number | string
  description?: string
}

interface PricingPlan {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    annually: number
    setup?: number
  }
  icon?: React.ComponentType<{ className?: string }>
  features: PricingFeature[]
  popular?: boolean
  recommended?: boolean
  badge?: string
  color?: string
  ctaText: string
  ctaVariant: 'default' | 'outline' | 'secondary' | 'ghost' | 'accent'
}

export interface PricingCardProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof pricingCardVariants> {
  plan: PricingPlan
  isAnnual?: boolean
  showFeatures?: boolean
  onSelectPlan?: (planId: string) => void
}

export function PricingCard({
  className,
  plan,
  variant,
  popular = plan.popular,
  recommended = plan.recommended,
  isAnnual = false,
  showFeatures = true,
  onSelectPlan,
  ...props
}: PricingCardProps) {
  const price = isAnnual ? plan.price.annually : plan.price.monthly
  const monthlyPrice = isAnnual ? plan.price.annually / 12 : plan.price.monthly
  const savings = isAnnual ? (plan.price.monthly * 12) - plan.price.annually : 0

  const Icon = plan.icon || Target

  const renderFeatureValue = (feature: PricingFeature) => {
    if (feature.included === true) {
      return <Check className="h-4 w-4 text-rifling-green" />
    }
    if (feature.included === false) {
      return <X className="h-4 w-4 text-case-hardened" />
    }
    if (typeof feature.included === 'number') {
      return <span className="text-sm font-medium text-gunmetal-black">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-sm font-medium text-brass-yellow">∞</span>
    }
    if (feature.included === 'limited') {
      return <Minus className="h-4 w-4 text-sight-gold" />
    }
    return <span className="text-xs text-case-hardened">{feature.included}</span>
  }

  return (
    <div
      className={cn(pricingCardVariants({ variant, popular, recommended }), className)}
      {...props}
    >
      <Card className="border-0 shadow-none h-full">
        {/* Popular badge */}
        {popular && plan.badge && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <Badge variant="default" className="bg-brass-yellow text-gunmetal-black font-medium px-3 py-1 text-xs">
              <Star className="h-3 w-3 mr-1" />
              {plan.badge}
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pb-4 pt-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-brass-yellow/10 rounded-full">
              <Icon className="h-6 w-6 text-brass-yellow" />
            </div>
          </div>
          
          <CardTitle className="text-xl font-rajdhani font-bold text-foreground">
            {plan.name}
          </CardTitle>
          
          <CardDescription className="text-case-hardened">
            {plan.description}
          </CardDescription>
          
          <div className="mt-4">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-rajdhani font-bold text-foreground">
                ${monthlyPrice.toFixed(0)}
              </span>
              <span className="text-sm text-case-hardened">/month</span>
            </div>
            
            {isAnnual && (
              <div className="text-xs text-case-hardened mt-1">
                Billed annually (${price}/year)
                {savings > 0 && (
                  <div className="text-bore-sight-green font-medium">
                    Save ${savings} per year
                  </div>
                )}
              </div>
            )}
            
            {plan.price.setup && plan.price.setup > 0 && (
              <div className="text-xs text-case-hardened mt-1">
                + ${plan.price.setup} setup fee
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button
            className="w-full"
            variant="flat"
            size="sm"
            onClick={() => onSelectPlan?.(plan.id)}
          >
            {plan.ctaText}
          </Button>

          {showFeatures && (
            <div className="space-y-3">
              <h4 className="font-rajdhani font-bold text-gunmetal-black text-sm">
                What's included:
              </h4>
              <div className="space-y-2">
                {plan.features.slice(0, 5).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {renderFeatureValue(feature)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gunmetal-black leading-snug">
                        {feature.name}
                      </p>
                      {feature.description && (
                        <p className="text-xs text-case-hardened leading-snug">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export interface PricingTableProps {
  plans: PricingPlan[]
  showAnnualDiscount?: boolean
  showFeatureComparison?: boolean
  variant?: 'default' | 'compact' | 'detailed'
  onSelectPlan?: (planId: string) => void
}

export function PricingTable({
  plans,
  showAnnualDiscount = true,
  showFeatureComparison = true,
  variant = 'default',
  onSelectPlan
}: PricingTableProps) {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <div className="w-full space-y-8">
      {/* Annual toggle */}
      {showAnnualDiscount && (
        <div className="flex justify-center">
          <div className="flex items-center gap-4 p-1 bg-gray-100 rounded-lg">
            <button
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-150",
                !isAnnual ? "bg-white text-gunmetal-black shadow-sm" : "text-case-hardened"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 relative",
                isAnnual ? "bg-white text-gunmetal-black shadow-sm" : "text-case-hardened"
              )}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>
      )}

      {/* Pricing cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            variant={variant}
            isAnnual={isAnnual}
            showFeatures={!showFeatureComparison}
            onSelectPlan={onSelectPlan}
          />
        ))}
      </div>

      {/* Feature comparison table */}
      {showFeatureComparison && (
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-rajdhani font-bold text-gunmetal-black">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-6 py-4 text-center">
                      <div className="font-rajdhani font-bold text-gunmetal-black">
                        {plan.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {plans[0]?.features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gunmetal-black">
                      {plans[0].features[featureIndex]?.name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {renderFeatureValue(plan.features[featureIndex])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )

  function renderFeatureValue(feature?: PricingFeature) {
    if (!feature) return <X className="h-4 w-4 text-muted-foreground mx-auto" />
    
    if (feature.included === true) {
      return <Check className="h-4 w-4 text-bore-sight-green mx-auto" />
    }
    if (feature.included === false) {
      return <X className="h-4 w-4 text-muted-foreground mx-auto" />
    }
    if (typeof feature.included === 'number') {
      return <span className="text-sm font-medium text-gunmetal-black">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-sm font-medium text-brass-yellow">∞</span>
    }
    if (feature.included === 'limited') {
      return <Minus className="h-4 w-4 text-amber-500 mx-auto" />
    }
    return <span className="text-xs text-case-hardened">{feature.included}</span>
  }
}

export interface PricingFusionProps {
  plans: PricingPlan[]
  showAnnualDiscount?: boolean
  showFeatureComparison?: boolean
  onSelectPlan?: (planId: string) => void
}

export function PricingFusion({
  plans,
  showAnnualDiscount = true,
  showFeatureComparison = true,
  onSelectPlan
}: PricingFusionProps) {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <div className="w-full space-y-8 p-8 bg-solid-brand-warm rounded-xl border border-brass-yellow/20 hover-gradient-warm">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-rajdhani font-bold text-foreground">
          Choose Your Membership
        </h2>
        <p className="text-case-hardened max-w-2xl mx-auto">
          Select the perfect membership plan for your shooting needs. All memberships include access to our state-of-the-art facilities and expert instruction.
        </p>
      </div>

      {/* Annual toggle */}
      {showAnnualDiscount && (
        <div className="flex justify-center">
          <div className="flex items-center gap-4 p-1 mica-card rounded-lg border border-brass-yellow/20">
            <button
              className={cn(
                "px-6 py-3 rounded-md text-sm font-medium transition-all duration-150",
                !isAnnual ? "bg-brass-yellow text-gunmetal-black shadow-sm" : "text-case-hardened hover:text-gunmetal-black"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </button>
            <button
              className={cn(
                "px-6 py-3 rounded-md text-sm font-medium transition-all duration-150 relative",
                isAnnual ? "bg-brass-yellow text-gunmetal-black shadow-sm" : "text-case-hardened hover:text-gunmetal-black"
              )}
              onClick={() => setIsAnnual(true)}
            >
              Annual Billing
              <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>
      )}

      {/* Pricing cards grid - fusion style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            variant="fusion"
            isAnnual={isAnnual}
            showFeatures={!showFeatureComparison}
            onSelectPlan={onSelectPlan}
            className={cn(
              "transform transition-all duration-200 hover:scale-105",
              plan.popular && "lg:scale-110"
            )}
          />
        ))}
      </div>

      {/* Feature comparison with fusion styling */}
      {showFeatureComparison && (
        <div className="mica-card rounded-xl border border-brass-yellow/20 p-6 overflow-x-auto">
          <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-6 text-center">
            Feature Comparison
          </h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-brass-yellow/20">
                <th className="px-4 py-3 text-left text-sm font-rajdhani font-bold text-gunmetal-black">
                  Features
                </th>
                {plans.map((plan) => (
                  <th key={plan.id} className="px-4 py-3 text-center">
                    <div className="font-rajdhani font-bold text-gunmetal-black">
                      {plan.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans[0]?.features.map((_, featureIndex) => (
                <tr key={featureIndex} className="border-b border-gray-100 hover:bg-brass-yellow/5">
                  <td className="px-4 py-3 text-sm font-medium text-gunmetal-black">
                    {plans[0].features[featureIndex]?.name}
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-4 py-3 text-center">
                      {renderFeatureValueFusion(plan.features[featureIndex])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )

  function renderFeatureValueFusion(feature?: PricingFeature) {
    if (!feature) return <X className="h-4 w-4 text-muted-foreground mx-auto" />
    
    if (feature.included === true) {
      return <Check className="h-4 w-4 text-bore-sight-green mx-auto" />
    }
    if (feature.included === false) {
      return <X className="h-4 w-4 text-muted-foreground mx-auto" />
    }
    if (typeof feature.included === 'number') {
      return <span className="text-sm font-medium text-gunmetal-black">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-sm font-medium text-brass-yellow">∞</span>
    }
    if (feature.included === 'limited') {
      return <Minus className="h-4 w-4 text-amber-500 mx-auto" />
    }
    return <span className="text-xs text-case-hardened">{feature.included}</span>
  }
}
