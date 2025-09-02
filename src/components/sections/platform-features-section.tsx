'use client'

import { PlatformFeatureCard, platformFeatures } from '@/components/ui/platform-feature-card'

/**
 * PlatformFeaturesSection - Pure Content Component
 * 
 * BEFORE (Layout Concerns):
 * - Background colors and spacing
 * - Container and padding decisions
 * - Section wrapper with styling
 * 
 * AFTER (Pure Content):
 * - Only business logic and content structure
 * - No styling decisions whatsoever
 * - Truly reusable across different layouts
 */
export function PlatformFeaturesSection() {
  return (
    <>
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
    </>
  )
}