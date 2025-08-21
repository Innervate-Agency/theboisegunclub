'use client'

import { PlatformValueCard, platformValueCards } from '@/components/ui/platform-value-card'

export function PlatformValuesSection() {
  return (
    <section className="py-3xl bg-background">
      <div className="container mx-auto px-lg">
        <div className="text-center space-y-xl mb-2xl">
          <h2 className="font-rajdhani font-bold text-3xl sm:text-4xl text-foreground">
            Why Choose The Boise Gun Club
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built by Idaho gun owners, for Idaho gun owners. No corporate agenda, no coastal politics, just authentic connections in the Treasure Valley firearms community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {platformValueCards.map((valueCard, index) => (
            <PlatformValueCard
              key={index}
              icon={valueCard.icon}
              title={valueCard.title}
              description={valueCard.description}
              benefits={valueCard.benefits}
              badgeText={valueCard.badgeText}
              badgeVariant={valueCard.badgeVariant}
              iconColor={valueCard.iconColor}
              iconBgColor={valueCard.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}