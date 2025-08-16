'use client'

import { Card, CardContent } from './card'
import { Button } from './button'
import { Badge } from './badge'
import Image from 'next/image'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { 
  Tag,
  Storefront,
  MapPin,
  Star,
  Phone,
  Calendar,
  Package,
  ShoppingBag,
  Target,
  Crosshair,
  Binoculars,
  TrendDown as TrendingDown
} from '@phosphor-icons/react'

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
  imageUrl?: string
  slug?: string
  href?: string
  manufacturer?: string
  model?: string
}

const marketplaceDealCardVariants = cva(
  "transition-all duration-300 group relative overflow-hidden hover:scale-[1.02] cursor-pointer min-w-[320px]",
  {
    variants: {
      featured: {
        true: "shadow-elevated hover:shadow-commanding",
        false: "shadow-present hover:shadow-prominent"
      },
      size: {
        compact: "h-auto",
        standard: "h-auto", 
        spacious: "h-auto"
      }
    },
    defaultVariants: {
      featured: false,
      size: "standard"
    }
  }
)

interface MarketplaceDealCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof marketplaceDealCardVariants> {
  deal: MarketplaceDeal
  showContact?: boolean
  featured?: boolean
  size?: 'compact' | 'standard' | 'spacious'
}

export function MarketplaceDealCard({
  deal,
  showContact = true,
  featured = false,
  size = "standard",
  className,
  ...props
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

  // Generate product slug and href
  const generateSlug = (title: string, manufacturer?: string): string => {
    const fullTitle = manufacturer ? `${manufacturer} ${title}` : title
    return fullTitle.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }
  
  const productHref = deal.href || `/marketplace/${deal.slug || generateSlug(deal.title, deal.manufacturer)}`
  
  // Get category gradient for hero section
  const getCategoryGradient = (category: string) => {
    if (category.includes('Firearms')) return 'card-gradient-firearms'
    if (category.includes('Ammunition')) return 'card-gradient-ammunition'
    if (category.includes('Optics')) return 'card-gradient-optics'
    if (category.includes('Accessories')) return 'card-gradient-accessories'
    return 'card-gradient-marketplace'
  }
  
  // Get small category icon for gradient overlay
  const getCategoryIcon = (category: string) => {
    const iconClass = "size-6 text-white/80"
    if (category.includes('Firearms')) return <Target weight="bold" className={iconClass} />
    if (category.includes('Ammunition')) return <Package weight="bold" className={iconClass} />
    if (category.includes('Optics')) return <Binoculars weight="bold" className={iconClass} />
    if (category.includes('Accessories')) return <Crosshair weight="bold" className={iconClass} />
    return <ShoppingBag weight="bold" className={iconClass} />
  }
  
  const discountPercentage = Math.round(deal.discount)

  return (
    <Link href={productHref} className="block">
      <Card className={cn(marketplaceDealCardVariants({ featured: deal.isFeatured || featured, size }), className)} {...props}>
        <CardContent className="p-0 space-y-0">
        {/* Boise Landscape Gradient Product Hero Section */}
        <div className={cn(
          "relative h-48 overflow-hidden",
          deal.imageUrl ? "" : getCategoryGradient(deal.category)
        )}>
          {deal.imageUrl ? (
            <Image 
              src={deal.imageUrl} 
              alt={deal.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <>
              {/* Subtle overlay for gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Small contextual icon - bottom right */}
              <div className="absolute bottom-sm right-sm">
                {getCategoryIcon(deal.category)}
              </div>
              
              {/* Subtle texture particles for tactical feel */}
              <div className="absolute top-4 right-8 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-8 right-4 w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </>
          )}
          
          {/* Enhanced Discount Badge - Top Left */}
          {discountPercentage > 0 && (
            <div className="absolute top-sm left-sm">
              <div className="bg-black/60 backdrop-blur-sm text-white px-sm py-xs rounded-xs font-rajdhani font-bold text-sm flex items-center gap-xs border border-white/20">
                <TrendingDown className="size-3" weight="bold" />
                {discountPercentage}% OFF
              </div>
            </div>
          )}
          
          {/* Enhanced Availability Badge - Top Right */}
          <div className="absolute top-sm right-sm">
            <Badge 
              variant={getAvailabilityBadgeVariant(deal.availability)} 
              size="sm"
              className="bg-black/40 backdrop-blur-sm border-white/20 text-white"
            >
              {deal.availability}
            </Badge>
          </div>
          
          {/* Enhanced Featured Badge - Bottom Left */}
          {deal.isFeatured && (
            <div className="absolute bottom-sm left-sm">
              <Badge 
                variant="elite" 
                size="sm"
                className="bg-black/60 backdrop-blur-sm border-white/20 text-white"
              >
                <Star className="size-3 mr-xs" weight="fill" />
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        {/* Enhanced Content Section */}
        <div className="p-lg space-y-lg">
          {/* Header with Better Typography */}
          <div className="space-y-sm">
            <div className="flex items-center gap-xs flex-wrap">
              <Badge variant={getCategoryBadgeVariant(deal.category)} size="sm">
                {deal.category}
              </Badge>
              <Badge variant={getConditionBadgeVariant(deal.condition)} size="sm">
                {deal.condition}
              </Badge>
            </div>
            
            <div className="space-y-xs">
              {deal.manufacturer && (
                <p className="text-sm text-nav-marketplace font-medium uppercase tracking-wide">
                  {deal.manufacturer}
                </p>
              )}
              <h3 className="font-rajdhani font-bold text-xl text-card-foreground leading-tight group-hover:text-nav-marketplace transition-colors duration-200">
                {deal.title}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {deal.description}
            </p>
          </div>

          {/* Enhanced Pricing Section */}
          <div className="bg-muted/30 p-sm rounded-xs">
            <div className="flex items-center justify-between">
              <div className="space-y-xs">
                <p className="font-rajdhani font-bold text-2xl text-nav-marketplace">
                  {formatPrice(deal.salePrice)}
                </p>
                {deal.originalPrice > deal.salePrice && (
                  <p className="text-sm text-muted-foreground line-through">
                    {formatPrice(deal.originalPrice)}
                  </p>
                )}
              </div>
              {deal.originalPrice > deal.salePrice && (
                <div className="text-center px-sm py-xs bg-sagebrush-green/10 rounded-xs border border-sagebrush-green/20">
                  <p className="text-xs text-sagebrush-green font-medium uppercase tracking-wide">You Save</p>
                  <p className="font-rajdhani font-bold text-lg text-sagebrush-green">
                    {formatPrice(deal.originalPrice - deal.salePrice)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Business Info */}
          <div className="space-y-sm">
            <div className="flex items-center gap-sm">
              <Storefront className="size-4 text-nav-marketplace" weight="bold" />
              <span className="font-medium text-card-foreground">{deal.business}</span>
              {deal.isVerified && (
                <Badge variant="nav-marketplace" size="sm">
                  ✓ Verified
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-sm text-sm">
              <MapPin className="size-4 text-nav-marketplace" weight="bold" />
              <span className="text-muted-foreground">{deal.location}</span>
            </div>

            {deal.rating && deal.reviewCount && (
              <div className="flex items-center gap-sm text-sm">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      weight={i < Math.floor(deal.rating!) ? 'fill' : 'regular'}
                      className={cn(
                        "size-3",
                        i < Math.floor(deal.rating!) ? "text-nav-marketplace fill-nav-marketplace" : "text-muted-foreground"
                      )}
                    />
                  ))}
                </div>
                <span className="font-medium text-nav-marketplace">{deal.rating}</span>
                <span className="text-muted-foreground">({deal.reviewCount})</span>
              </div>
            )}
          </div>

          {/* Enhanced Expiration Alert */}
          {deal.expiresAt && (
            <div className="flex items-center gap-sm p-sm bg-destructive/10 border border-destructive/20 rounded-xs">
              <Calendar className="size-4 text-destructive" weight="bold" />
              <span className="text-sm text-destructive font-medium">
                🔥 Deal expires {deal.expiresAt}
              </span>
            </div>
          )}

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-sm pt-sm border-t border-border">
            <Button 
              className="flex-1 bg-nav-marketplace hover:bg-nav-marketplace/90 text-white font-rajdhani font-bold"
              size="sm"
              animationType="arrow"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(productHref, '_blank')
              }}
            >
              {deal.availability === 'Last Few' ? '🔥 Buy Now - Last Few!' : 'View Deal'}
            </Button>
            
            {showContact && deal.phone && (
              <Button 
                variant="outline"
                size="sm"
                className="font-rajdhani font-bold border-nav-marketplace/30 text-nav-marketplace hover:bg-nav-marketplace hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(`tel:${deal.phone}`, '_self')
                }}
              >
                <Phone className="size-4 mr-xs" weight="bold" />
                Call
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  )
}