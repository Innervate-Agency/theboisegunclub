'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { CheckIcon, MinusIcon, StarIcon, XMarkIcon } from '@heroicons/react/24/outline';

const pricingCardVariants = cva(
  // BASE: Clean professional foundation for all tiers - LITERAL COPY from VendorCard
  "relative overflow-hidden transition-all duration-300 bg-card text-card-foreground rounded-(--radius-lg) group",
  {
    variants: {
      tier: {
        // FREE: Clean baseline - standard floating card
        free: "shadow-present hover:shadow-elevated",
        
        // COPPER: Enhanced presence - important content
        copper: "shadow-elevated hover:shadow-prominent bg-rusty-orange/[0.02] hover:bg-rusty-orange/[0.03] relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-walnut-stock after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        
        // SILVER: Prominent presence with glassmorphism
        silver: "relative shadow-prominent hover:shadow-commanding bg-gradient-to-br from-card/98 via-card/95 to-card/98 before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-blue/6 before:via-transparent before:to-scope-blue/4 dark:before:from-slate-blue/8 dark:before:to-scope-blue/6 before:rounded-sm before:pointer-events-none after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-warm-stone after:transition-all after:duration-300 after:ease-out after:z-10 hover:after:w-full after:rounded-b-lg",
        
        // GOLD: Hero presence - jump off the page
        gold: "relative shadow-commanding hover:shadow-hero bg-gradient-to-br from-range-white/95 via-titanium-white/90 to-range-white/95 dark:from-night-sight/95 dark:via-warm-stone/90 dark:to-night-sight/95 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/10 before:via-transparent before:to-rusty-orange/8 dark:before:from-sandy-ochre/14 dark:before:to-rusty-orange/12 before:rounded-sm before:pointer-events-none after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out after:z-10 hover:after:w-full after:rounded-b-lg"
      },
      size: {
        sm: "p-base",
        md: "p-lg", 
        lg: "p-xl"
      }
    },
    defaultVariants: {
      tier: "free",
      size: "md"
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
  tier?: 'free' | 'copper' | 'silver' | 'gold'
  popular?: boolean
  recommended?: boolean
}

export function PricingCard({
  className,
  plan,
  tier,
  size,
  isAnnual = false,
  showFeatures = true,
  onSelectPlan,
  ...props
}: PricingCardProps) {
  const price = isAnnual ? plan.price.annually : plan.price.monthly
  const monthlyPrice = isAnnual ? plan.price.annually / 12 : plan.price.monthly
  const savings = isAnnual ? (plan.price.monthly * 12) - plan.price.annually : 0

  const Icon = plan.icon || CursorArrowRaysIcon

  const renderFeatureValue = (feature: PricingFeature) => {
    if (feature.included === true) {
      return <CheckIcon className="size-4 text-rifling-green" />
    }
    if (feature.included === false) {
      return <XMarkIcon className="size-4 text-warning-amber" />
    }
    if (typeof feature.included === 'number') {
      return <span className="text-body-sm font-medium text-dark-chocolate">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-body-sm font-medium text-rusty-orange">∞</span>
    }
    if (feature.included === 'limited') {
      return <MinusIcon className="size-4 text-sight-gold" />
    }
    return <span className="text-caption text-warning-amber">{feature.included}</span>
  }

  return (
    <div
      className={cn(pricingCardVariants({ tier, size }), className)}
      {...props}
    >
      <Card className="border-0 shadow-none h-full">
        {/* Popular badge */}
        {plan.popular && plan.badge && (
          <div className="absolute -top-xs left-1/2 transform -translate-x-1/2 z-20">
            <Badge variant="status-info" className="bg-rusty-orange text-nickel-white font-medium px-md py-sm text-caption">
              <StarIcon className="size-3 mr-xs" />
              {plan.badge}
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pb-base pt-xl">
          <div className="flex justify-center mb-base">
            <div className="p-sm bg-rusty-orange/10 rounded-full">
              <Icon className="size-6 text-rusty-orange" />
            </div>
          </div>
          
          <CardTitle className="text-heading-sm font-rajdhani font-bold text-foreground">
            {plan.name}
          </CardTitle>
          
          <CardDescription className="text-warning-amber">
            {plan.description}
          </CardDescription>
          
          <div className="mt-base">
            <div className="flex items-baseline justify-center gap-xs">
              <span className="text-heading-lg font-rajdhani font-bold text-foreground">
                ${monthlyPrice.toFixed(0)}
              </span>
              <span className="text-body-sm text-warning-amber">/month</span>
            </div>
            
            {isAnnual && (
              <div className="text-caption text-warning-amber mt-xs">
                Billed annually (${price}/year)
                {savings > 0 && (
                  <div className="text-bore-sight-green font-medium">
                    Save ${savings} per year
                  </div>
                )}
              </div>
            )}
            
            {plan.price.setup && plan.price.setup > 0 && (
              <div className="text-caption text-warning-amber mt-xs">
                + ${plan.price.setup} setup fee
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-md">
          <Button
            className="w-full shadow-none"
            variant="ghost"
            size="sm"
            onClick={() => onSelectPlan?.(plan.id)}
          >
            {plan.ctaText}
          </Button>

          {showFeatures && (
            <div className="space-y-sm">
              <h4 className="font-rajdhani font-bold text-dark-chocolate text-body-sm">
                What's included:
              </h4>
              <div className="space-y-xs">
                {plan.features.slice(0, 5).map((feature, index) => (
                  <div key={index} className="flex items-start gap-sm">
                    <div className="flex-shrink-0 mt-tiny">
                      {renderFeatureValue(feature)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body-sm font-medium text-dark-chocolate leading-snug">
                        {feature.name}
                      </p>
                      {feature.description && (
                        <p className="text-caption text-warning-amber leading-snug">
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
          <div className="flex items-center gap-base p-xs bg-muted rounded-sm">
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
              <Badge className="absolute -top-tiny -right-2 bg-sagebrush-green text-card text-caption">
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
            isAnnual={isAnnual}
            showFeatures={!showFeatureComparison}
            onSelectPlan={onSelectPlan}
          />
        ))}
      </div>

      {/* Feature comparison table */}
      {showFeatureComparison && plans && plans.length > 0 && (() => {
        const firstPlan = plans[0];
        if (!firstPlan || !firstPlan.features) return null;
        return (
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-border">
                <thead>
                  <tr>
                    <th className="px-md py-base text-left text-body-sm font-rajdhani font-bold text-dark-chocolate">
                      Features
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="px-md py-base text-center">
                        <div className="font-rajdhani font-bold text-dark-chocolate">
                          {plan.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {firstPlan.features.map((_, featureIndex) => (
                    <tr key={featureIndex} className="hover:bg-muted/30">
                      <td className="px-md py-base text-body-sm font-medium text-dark-chocolate">
                        {firstPlan.features[featureIndex]?.name}
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
        )
      })()}
    </div>
  )

  function renderFeatureValue(feature?: PricingFeature) {
    if (!feature) return <XMarkIcon className="size-4 text-muted-foreground mx-auto" />
    
    if (feature.included === true) {
      return <CheckIcon className="size-4 text-bore-sight-green mx-auto" />
    }
    if (feature.included === false) {
      return <XMarkIcon className="size-4 text-muted-foreground mx-auto" />
    }
    if (typeof feature.included === 'number') {
      return <span className="text-body-sm font-medium text-dark-chocolate">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-body-sm font-medium text-rusty-orange">∞</span>
    }
    if (feature.included === 'limited') {
      return <MinusIcon className="size-4 text-rusty-orange mx-auto" />
    }
    return <span className="text-caption text-warning-amber">{feature.included}</span>
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
    <div className="w-full space-y-2xl p-lg bg-solid-brand-warm rounded-xs border border-rusty-orange/20 hover-gradient-warm">
      <div className="text-center space-y-base">
        <h2 className="text-heading-lg font-rajdhani font-bold text-foreground">
          Choose Your Membership
        </h2>
        <p className="text-warning-amber max-w-2xl mx-auto">
          Select the perfect membership plan for your shooting needs. All memberships include access to our state-of-the-art facilities and expert instruction.
        </p>
      </div>

      {/* Annual toggle */}
      {showAnnualDiscount && (
        <div className="flex justify-center">
          <div className="flex items-center gap-base p-xs mica-card rounded-sm border border-rusty-orange/20">
            <button
              className={cn(
                "px-md py-sm rounded-input text-body-sm font-medium transition-all duration-150",
                !isAnnual ? "bg-rusty-orange text-dark-chocolate shadow-flat" : "text-warning-amber hover:text-dark-chocolate"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </button>
            <button
              className={cn(
                "px-md py-sm rounded-input text-body-sm font-medium transition-all duration-150 relative",
                isAnnual ? "bg-rusty-orange text-dark-chocolate shadow-flat" : "text-warning-amber hover:text-dark-chocolate"
              )}
              onClick={() => setIsAnnual(true)}
            >
              Annual Billing
              <Badge className="absolute -top-tiny -right-2 bg-sagebrush-green text-card text-caption">
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
      {showFeatureComparison && plans && plans.length > 0 && (() => {
        const firstPlan = plans[0];
        if (!firstPlan || !firstPlan.features) return null;
        return (
          <div className="mica-card rounded-xs border border-rusty-orange/20 p-md overflow-x-auto">
            <h3 className="text-heading-sm font-rajdhani font-bold text-dark-chocolate mb-[md] text-center">
              Feature Comparison
            </h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-rusty-orange/20">
                  <th className="px-base py-sm text-left text-body-sm font-rajdhani font-bold text-dark-chocolate">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-base py-sm text-center">
                      <div className="font-rajdhani font-bold text-dark-chocolate">
                        {plan.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {firstPlan.features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-border hover:bg-rusty-orange/5">
                    <td className="px-base py-sm text-body-sm font-medium text-dark-chocolate">
                      {firstPlan.features[featureIndex]?.name}
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
        )
      })()}
    </div>
  )

  function renderFeatureValueFusion(feature?: PricingFeature) {
    if (!feature) return <XMarkIcon className="size-4 text-muted-foreground mx-auto" />
    
    if (feature.included === true) {
      return <CheckIcon className="size-4 text-bore-sight-green mx-auto" />
    }
    if (feature.included === false) {
      return <XMarkIcon className="size-4 text-muted-foreground mx-auto" />
    }
    if (typeof feature.included === 'number') {
      return <span className="text-body-sm font-medium text-dark-chocolate">{feature.included}</span>
    }
    if (feature.included === 'unlimited') {
      return <span className="text-body-sm font-medium text-rusty-orange">∞</span>
    }
    if (feature.included === 'limited') {
      return <MinusIcon className="size-4 text-rusty-orange mx-auto" />
    }
    return <span className="text-caption text-warning-amber">{feature.included}</span>
  }
}
