'use client'

import { Card, CardContent } from './card'
import { Button } from './button'
import { Badge } from './badge'
import { 
  Tag,
  Storefront,
  MapPin,
  Star,
  Phone,
  Calendar
} from '@phosphor-icons/react'
import { FiTrendingDown as TrendingDown } from 'react-icons/fi'

interface MarketplaceDeal {
  title: string
  business: string
  location: string
  originalPrice: number
  salePrice: number
  discount: number
  description: string
  category: string
  condition: 'New' | 'Used' | 'Refurbished'
  availability: 'In Stock' | 'Limited' | 'Last Few'
  expiresAt?: string
  rating?: number
  reviewCount?: number
  phone?: string
  isVerified?: boolean
  isFeatured?: boolean
}

interface MarketplaceDealCardProps {
  deal: MarketplaceDeal
  showContact?: boolean
  className?: string
}

export function MarketplaceDealCard({
  deal,
  showContact = true,
  className
}: MarketplaceDealCardProps) {
  const getCategoryBadgeVariant = (category: string) => {
    if (category.includes('Ammunition')) return 'rusty-orange'
    if (category.includes('Firearms')) return 'slate-blue'
    if (category.includes('Accessories')) return 'sagebrush-green'
    if (category.includes('Optics')) return 'canyon-clay'
    if (category.includes('Training')) return 'warm-stone'
    return 'default'
  }

  const getAvailabilityBadgeVariant = (availability: string) => {
    switch (availability) {
      case 'In Stock': return 'sagebrush-green'
      case 'Limited': return 'rusty-orange' 
      case 'Last Few': return 'canyon-clay'
      default: return 'default'
    }
  }

  const getConditionBadgeVariant = (condition: string) => {
    switch (condition) {
      case 'New': return 'slate-blue'
      case 'Used': return 'warm-stone'
      case 'Refurbished': return 'canyon-clay'
      default: return 'default'
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const discountPercentage = Math.round(deal.discount)

  return (
    <Card className={`shadow-whisper hover:shadow-present transition-all duration-300 group ${className}`}>
      <CardContent className="p-lg space-y-lg">
        {/* Header */}
        <div className="space-y-base">
          <div className="flex items-start justify-between gap-base">
            <div className="space-y-sm flex-1">
              <div className="flex items-center gap-sm flex-wrap">
                <Badge variant={getCategoryBadgeVariant(deal.category)} size="sm">
                  {deal.category}
                </Badge>
                <Badge variant={getConditionBadgeVariant(deal.condition)} size="sm">
                  {deal.condition}
                </Badge>
                {deal.isFeatured && (
                  <Badge variant="elite" size="sm">
                    <Star className="h-3 w-3 mr-xs" weight="bold" />
                    Featured
                  </Badge>
                )}
              </div>
              
              <h3 className="font-rajdhani font-bold text-body-xl text-card-foreground leading-tight group-hover:text-rusty-orange transition-colors duration-200">
                {deal.title}
              </h3>
            </div>

            <div className="text-right space-y-xs">
              <Badge variant={getAvailabilityBadgeVariant(deal.availability)} size="sm">
                {deal.availability}
              </Badge>
              {discountPercentage > 0 && (
                <div className="flex items-center gap-xs">
                  <TrendingDown className="h-4 w-4 text-sagebrush-green" weight="bold" />
                  <span className="font-rajdhani font-bold text-body-lg text-sagebrush-green">
                    {discountPercentage}% OFF
                  </span>
                </div>
              )}
            </div>
          </div>

          <p className="text-body-sm text-muted-foreground leading-relaxed">
            {deal.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="space-y-sm">
          <div className="flex items-center gap-base">
            <div className="space-y-xs">
              <p className="font-rajdhani font-bold text-heading-2xl text-card-foreground">
                {formatPrice(deal.salePrice)}
              </p>
              {deal.originalPrice > deal.salePrice && (
                <p className="text-body-sm text-muted-foreground line-through">
                  {formatPrice(deal.originalPrice)}
                </p>
              )}
            </div>
            {deal.originalPrice > deal.salePrice && (
              <div className="text-center p-sm bg-sagebrush-green/10 rounded-xs">
                <p className="text-body-xs text-sagebrush-green font-medium">You Save</p>
                <p className="font-rajdhani font-bold text-body-lg text-sagebrush-green">
                  {formatPrice(deal.originalPrice - deal.salePrice)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Business Info */}
        <div className="space-y-sm">
          <div className="flex items-center gap-sm">
            <Storefront className="h-4 w-4 text-slate-blue" weight="bold" />
            <span className="font-medium text-card-foreground">{deal.business}</span>
            {deal.isVerified && (
              <Badge variant="slate-blue" size="sm">
                Verified
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-sm text-body-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" weight="bold" />
            <span className="text-muted-foreground">{deal.location}</span>
          </div>

          {deal.rating && deal.reviewCount && (
            <div className="flex items-center gap-sm text-body-sm">
              <Star className="h-4 w-4 text-rusty-orange" weight="bold" />
              <span className="font-medium text-card-foreground">{deal.rating}</span>
              <span className="text-muted-foreground">({deal.reviewCount} reviews)</span>
            </div>
          )}
        </div>

        {/* Expiration */}
        {deal.expiresAt && (
          <div className="flex items-center gap-sm p-sm bg-rusty-orange/10 rounded-xs">
            <Calendar className="h-4 w-4 text-rusty-orange" weight="bold" />
            <span className="text-body-sm text-rusty-orange font-medium">
              Deal expires {deal.expiresAt}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-sm pt-base border-t border-border">
          <Button 
            className="flex-1 bg-rusty-orange hover:bg-rusty-orange/90 text-crisp-off-white font-rajdhani font-bold"
            size="lg"
            animationType="arrow"
          >
            View Deal
          </Button>
          
          {showContact && deal.phone && (
            <Button 
              variant="outline"
              size="lg"
              className="font-rajdhani font-bold"
            >
              <Phone className="h-4 w-4 mr-sm" weight="bold" />
              Call
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}