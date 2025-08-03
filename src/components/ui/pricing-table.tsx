'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Check, X, Minus, Star, Target } from 'lucide-react'

const pricingCardVariants = cva(
  "relative overflow-hidden transition-all duration-300 ease-out bg-card text-card-foreground rounded-[var(--radius-lg)] group",
  {
    variants: {
      variant: {
        // FREE TIER: Clean baseline foundation matching VendorCard free tier
        default: "shadow-flat hover:shadow-md",
        
        // COMPACT: Streamlined version with consistent shadows
        compact: "shadow-flat hover:shadow-md",
        
        // DETAILED: Enhanced with subtle background treatment
        detailed: "shadow-flat hover:shadow-md bg-gradient-to-br from-card/98 via-card/95 to-card/98",
        
        // FUSION: Premium glassmorphism matching VendorCard gold tier
        fusion: "shadow-flat hover:shadow-md bg-gradient-to-br from-range-white/95 via-titanium-white/90 to-range-white/95 dark:from-night-sight/95 dark:via-tactical-gray/90 dark:to-night-sight/95 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-brass-yellow/10 before:via-transparent before:to-copper-orange/8 dark:before:from-brass-yellow/14 dark:before:to-copper-orange/12 before:rounded-card before:pointer-events-none"
      },
      popular: {
        // Popular cards get copper-orange accent bar like VendorCard copper tier
        true: "shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out after:w-full after:rounded-b-lg scale-105 z-10",
        false: ""
      },
      recommended: {
        // Recommended gets brass-yellow overlay like VendorCard gold tier
        true: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-brass-yellow/8 before:via-transparent before:to-copper-orange/6 dark:before:from-brass-yellow/12 dark:before:to-copper-orange/10 before:rounded-card before:pointer-events-none",
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
      return <span className="text-body-sm font-medium text-gunmetal-black">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-body-sm font-medium text-brass-yellow">∞</span>
    }
    if (feature.included === 'limited') {
      return <Minus className="h-4 w-4 text-sight-gold" />
    }
    return <span className="text-caption text-case-hardened">{feature.included}</span>
  }

  return (
    <div
      className={cn(pricingCardVariants({ variant, popular, recommended }), className)}
      {...props}
    >
      <Card className="border-0 shadow-none h-full">
        {/* Popular badge */}
        {popular && plan.badge && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <Badge variant="default" className="bg-brass-yellow text-gunmetal-black font-medium px-md py-sm text-caption shadow-md">
              <Star className="h-3 w-3 mr-xs" />
              {plan.badge}
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pb-base pt-xl">
          <div className="flex justify-center mb-base">
            <div className="p-sm bg-brass-yellow/10 rounded-full">
              <Icon className="h-6 w-6 text-brass-yellow" />
            </div>
          </div>
          
          <CardTitle className="text-heading-sm font-rajdhani font-bold text-foreground">
            {plan.name}
          </CardTitle>
          
          <CardDescription className="text-case-hardened">
            {plan.description}
          </CardDescription>
          
          <div className="mt-base">
            <div className="flex items-baseline justify-center gap-xs">
              <span className="text-heading-lg font-rajdhani font-bold text-foreground">
                ${monthlyPrice.toFixed(0)}
              </span>
              <span className="text-body-sm text-case-hardened">/month</span>
            </div>
            
            {isAnnual && (
              <div className="text-caption text-case-hardened mt-xs">
                Billed annually (${price}/year)
                {savings > 0 && (
                  <div className="text-bore-sight-green font-medium">
                    Save ${savings} per year
                  </div>
                )}
              </div>
            )}
            
            {plan.price.setup && plan.price.setup > 0 && (
              <div className="text-caption text-case-hardened mt-xs">
                + ${plan.price.setup} setup fee
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-md">
          <Button
            className="w-full"
            variant="flat"
            size="sm"
            onClick={() => onSelectPlan?.(plan.id)}
          >
            {plan.ctaText}
          </Button>

          {showFeatures && (
            <div className="space-y-sm">
              <h4 className="font-rajdhani font-bold text-gunmetal-black text-body-sm">
                What's included:
              </h4>
              <div className="space-y-xs">
                {plan.features.slice(0, 5).map((feature, index) => (
                  <div key={index} className="flex items-start gap-sm">
                    <div className="flex-shrink-0 mt-tiny">
                      {renderFeatureValue(feature)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body-sm font-medium text-gunmetal-black leading-snug">
                        {feature.name}
                      </p>
                      {feature.description && (
                        <p className="text-caption text-case-hardened leading-snug">
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
    <div className="w-full space-y-2xl">
      {/* Annual toggle */}
      {showAnnualDiscount && (
        <div className="flex justify-center">
          <div className="flex items-center gap-base p-xs bg-muted rounded-card">
            <button
              className={cn(
                "px-base py-xs rounded-input text-body-sm font-medium transition-all duration-150",
                !isAnnual ? "bg-card text-card-foreground shadow-flat" : "text-muted-foreground"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-base py-xs rounded-input text-body-sm font-medium transition-all duration-150 relative",
                isAnnual ? "bg-card text-card-foreground shadow-flat" : "text-muted-foreground"
              )}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <Badge className="absolute -top-2 -right-2 bg-clubhouse-lawn-green text-card text-caption">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>
      )}

      {/* Pricing cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg lg:gap-xl">
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
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr>
                  <th className="px-md py-base text-left text-body-sm font-rajdhani font-bold text-gunmetal-black">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-md py-base text-center">
                      <div className="font-rajdhani font-bold text-gunmetal-black">
                        {plan.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {plans[0]?.features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="hover:bg-muted/30">
                    <td className="px-md py-base text-body-sm font-medium text-gunmetal-black">
                      {plans[0].features[featureIndex]?.name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-md py-base text-center">
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
      return <span className="text-body-sm font-medium text-gunmetal-black">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-body-sm font-medium text-brass-yellow">∞</span>
    }
    if (feature.included === 'limited') {
      return <Minus className="h-4 w-4 text-brass-yellow mx-auto" />
    }
    return <span className="text-caption text-case-hardened">{feature.included}</span>
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
    <div className="w-full space-y-2xl p-lg bg-solid-brand-warm rounded-large border border-brass-yellow/20 hover-gradient-warm">
      <div className="text-center space-y-[base]">
        <h2 className="text-heading-lg font-rajdhani font-bold text-foreground">
          Choose Your Membership
        </h2>
        <p className="text-case-hardened max-w-2xl mx-auto">
          Select the perfect membership plan for your shooting needs. All memberships include access to our state-of-the-art facilities and expert instruction.
        </p>
      </div>

      {/* Annual toggle */}
      {showAnnualDiscount && (
        <div className="flex justify-center">
          <div className="flex items-center gap-base p-xs mica-card rounded-card border border-brass-yellow/20">
            <button
              className={cn(
                "px-md py-sm rounded-input text-body-sm font-medium transition-all duration-150",
                !isAnnual ? "bg-brass-yellow text-gunmetal-black shadow-flat" : "text-case-hardened hover:text-gunmetal-black"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </button>
            <button
              className={cn(
                "px-md py-sm rounded-input text-body-sm font-medium transition-all duration-150 relative",
                isAnnual ? "bg-brass-yellow text-gunmetal-black shadow-flat" : "text-case-hardened hover:text-gunmetal-black"
              )}
              onClick={() => setIsAnnual(true)}
            >
              Annual Billing
              <Badge className="absolute -top-2 -right-2 bg-clubhouse-lawn-green text-card text-caption">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>
      )}

      {/* Pricing cards grid - fusion style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg lg:gap-xl">
        {plans.map((plan) => (
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
        <div className="mica-card rounded-large border border-brass-yellow/20 p-md overflow-x-auto">
          <h3 className="text-heading-sm font-rajdhani font-bold text-gunmetal-black mb-[md] text-center">
            Feature Comparison
          </h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-brass-yellow/20">
                <th className="px-base py-sm text-left text-body-sm font-rajdhani font-bold text-gunmetal-black">
                  Features
                </th>
                {plans.map((plan) => (
                  <th key={plan.id} className="px-base py-sm text-center">
                    <div className="font-rajdhani font-bold text-gunmetal-black">
                      {plan.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans[0]?.features.map((_, featureIndex) => (
                <tr key={featureIndex} className="border-b border-border hover:bg-brass-yellow/5">
                  <td className="px-base py-sm text-body-sm font-medium text-gunmetal-black">
                    {plans[0].features[featureIndex]?.name}
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-base py-sm text-center">
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
      return <span className="text-body-sm font-medium text-gunmetal-black">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-body-sm font-medium text-brass-yellow">∞</span>
    }
    if (feature.included === 'limited') {
      return <Minus className="h-4 w-4 text-brass-yellow mx-auto" />
    }
    return <span className="text-caption text-case-hardened">{feature.included}</span>
  }
}
