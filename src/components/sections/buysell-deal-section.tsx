'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BanknotesIcon, BuildingStorefrontIcon, TagIcon } from '@heroicons/react/24/outline';

/**
 * BuySellDealSection - Pure Content Component
 * 
 * Stripped of all layout concerns (section wrapper, background, padding, containers)
 * Layout component will handle all structural decisions
 */
export function BuySellDealSection() {
  const featuredDeals = [
    {
      business: 'Meridian Pawn & Gun',
      deal: '15% off all used handguns',
      category: 'Firearms',
      validUntil: 'Aug 31, 2025',
      location: 'Meridian, ID',
      verified: true
    },
    {
      business: 'Boise Tactical Supply', 
      deal: 'Free shipping on orders $150+',
      category: 'Accessories',
      validUntil: 'Sep 15, 2025',
      location: 'Boise, ID',
      verified: true
    },
    {
      business: 'Northwest Armory',
      deal: 'Buy 2 training courses, get 1 free',
      category: 'Training',
      validUntil: 'Sep 30, 2025',
      location: 'Nampa, ID',
      verified: true
    }
  ]

  return (
    <>
      <div className="text-center space-y-xl mb-2xl">
        <h2 className="font-rajdhani font-bold text-3xl sm:text-4xl text-foreground">
          Local Buy & Sell Deals
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Exclusive deals from trusted Idaho firearms businesses. No corporate middleman, just direct connections with local dealers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
        {featuredDeals.map((deal, index) => (
          <Card key={index} className="shadow-whisper hover:shadow-present transition-all duration-300">
            <CardContent className="p-lg space-y-base">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-sm">
                  <BanknotesIcon className="h-5 w-5 text-warm-stone" />
                  <Badge variant="warm-stone" size="sm">
                    Deal
                  </Badge>
                </div>
                {deal.verified && (
                  <Badge variant="sagebrush-green" size="sm">
                    Verified
                  </Badge>
                )}
              </div>
              
              <div className="space-y-sm">
                <h3 className="font-rajdhani font-bold text-lg text-card-foreground">
                  {deal.business}
                </h3>
                <p className="font-medium text-warm-stone">
                  {deal.deal}
                </p>
              </div>
              
              <div className="flex items-center gap-sm text-sm text-muted-foreground">
                <TagIcon className="h-4 w-4" />
                <span>{deal.category}</span>
              </div>
              
              <div className="flex items-center gap-sm text-sm text-muted-foreground">
                <BuildingStorefrontIcon className="h-4 w-4" />
                <span>{deal.location}</span>
              </div>
              
              <div className="pt-sm border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Valid until {deal.validUntil}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-base">
        <p className="text-muted-foreground">
          All deals verified by community members and business owners
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-base">
          <Button className="font-rajdhani font-semibold bg-warm-stone text-crisp-off-white hover:bg-warm-stone/90">
            View All Deals
          </Button>
          <Button variant="outline" className="font-rajdhani font-semibold">
            Submit a Deal
          </Button>
        </div>
      </div>
    </>
  )
}