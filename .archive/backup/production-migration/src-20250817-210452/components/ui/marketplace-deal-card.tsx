'use client'

import { Badge } from './badge'
import { Button } from './button'
import { UnifiedArchiveCard } from './unified-archive-card'
import { cn } from '@/lib/utils'
import { 
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

// Removed: Using unified card variants instead

interface MarketplaceDealCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
  
  const discountPercentage = Math.round(deal.discount)

  // Header badges
  const headerBadges = (
    <>
      <Badge variant={getCategoryBadgeVariant(deal.category)} size="sm">
        {deal.category}
      </Badge>
      <Badge variant={getConditionBadgeVariant(deal.condition)} size="sm">
        {deal.condition}
      </Badge>
      <Badge 
        variant={getAvailabilityBadgeVariant(deal.availability)} 
        size="sm"
      >
        {deal.availability}
      </Badge>
      {deal.isFeatured && (
        <Badge variant="elite" size="sm">
          <Star className="size-3 mr-xs" weight="fill" />
          Featured
        </Badge>
      )}
    </>
  )

  // Hero content with discount and category info
  const heroContent = (
    <>
      {discountPercentage > 0 && (
        <div className="absolute top-sm left-sm">
          <div className="bg-black/60 backdrop-blur-sm text-white px-sm py-xs rounded-xs font-rajdhani font-bold text-sm flex items-center gap-xs border border-white/20">
            <TrendingDown className="size-3" weight="bold" />
            {discountPercentage}% OFF
          </div>
        </div>
      )}
      
      {/* Category icon overlay */}
      <div className="absolute bottom-sm right-sm">
        {deal.category.includes('Firearms') && <Target weight="bold" className="size-6 text-white/80" />}
        {deal.category.includes('Ammunition') && <Package weight="bold" className="size-6 text-white/80" />}
        {deal.category.includes('Optics') && <Binoculars weight="bold" className="size-6 text-white/80" />}
        {deal.category.includes('Accessories') && <Crosshair weight="bold" className="size-6 text-white/80" />}
        {!deal.category.includes('Firearms') && !deal.category.includes('Ammunition') && !deal.category.includes('Optics') && !deal.category.includes('Accessories') && (
          <ShoppingBag weight="bold" className="size-6 text-white/80" />
        )}
      </div>
    </>
  )

  // Content sections
  const contentSections = [
    // Manufacturer info
    deal.manufacturer && (
      <p className="text-sm text-nav-marketplace font-medium uppercase tracking-wide">
        {deal.manufacturer}
      </p>
    ),
    
    // Pricing section
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
    </div>,

    // Business info
    <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
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
  ].filter(Boolean)

  // Footer content for expiration
  const footerContent = deal.expiresAt && (
    <div className="flex items-center gap-sm p-sm bg-destructive/10 border border-destructive/20 rounded-xs">
      <Calendar className="size-4 text-destructive" weight="bold" />
      <span className="text-sm text-destructive font-medium">
        🔥 Deal expires {deal.expiresAt}
      </span>
    </div>
  )

  return (
    <UnifiedArchiveCard
      title={deal.title}
      href={productHref}
      theme="marketplace"
      size={size}
      featured={deal.isFeatured || featured}
      className={className}
      heroContent={heroContent}
      heroImage={deal.imageUrl}
      heroGradientCategory={deal.category}
      headerBadges={headerBadges}
      description={deal.description}
      contentSections={contentSections}
      footerContent={footerContent}
      primaryAction={{
        label: deal.availability === 'Last Few' ? '🔥 Buy Now - Last Few!' : 'View Deal',
        onClick: () => window.open(productHref, '_blank')
      }}
      secondaryAction={showContact && deal.phone ? {
        label: 'Call',
        onClick: () => window.open(`tel:${deal.phone}`, '_self')
      } : undefined}
      {...props}
    />
  )
}