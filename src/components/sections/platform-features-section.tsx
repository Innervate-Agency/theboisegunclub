'use client'

import { PlatformFeatureCard, platformFeatures } from '@/components/ui/platform-feature-card'
import { DynamicHeroOverhang } from '@/components/ui/dynamic-loader'

export function PlatformFeaturesSection() {
  return (
    <section className="relative pb-3xl bg-background">
      {/* Overhang Navigation - paper effect extending up and down */}
      <div className="relative -mt-20 z-30">
        <div className="max-w-[1200px] mx-auto px-lg">
          <div className="bg-light-peachy dark:bg-gruvbox-bg-dark rounded-t-3xl pb-2" style={{borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}}>
            <DynamicHeroOverhang />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-lg pt-4">
        <div className="text-center space-y-xl mb-2xl">
          <h2 className="font-rajdhani font-bold text-3xl sm:text-4xl text-foreground">
            Six Pillars of Our Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built by Idaho gun owners, for Idaho gun owners. Each pillar represents our commitment to serving the Treasure Valley firearms community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {platformFeatures.map((feature, index) => (
            <PlatformFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              helpText={feature.helpText}
              borderColor={feature.borderColor}
              iconBgColor={feature.iconBgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}