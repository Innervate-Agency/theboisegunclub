import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { VendorCard } from '../../components/ui/VendorCard'

const meta: Meta<typeof VendorCard> = {
  title: 'Design System/Molecules/VendorCardStrategic',
  component: VendorCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Strategic VendorCard - Purposeful Design Hierarchy

This version demonstrates **intentional design choices** with clear business value progression:

## Design Strategy
- **FREE**: Clean minimalism - content focused
- **COPPER**: ONE strategic accent (copper badge)
- **SILVER**: Enhanced metallic presence
- **GOLD**: Premium fire treatment (ONLY tier with fire)

## Visual Hierarchy
Each tier should make the next one obviously more valuable, driving subscription upgrades through strategic design choices.
        `
      }
    }
  },
  argTypes: {
    tier: {
      control: 'select',
      options: ['free', 'copper', 'silver', 'gold'],
      description: 'Strategic tier progression'
    }
  }
}

export default meta
type Story = StoryObj<typeof VendorCard>

// Strategic business examples
const strategicBusinesses = {
  basic: {
    businessName: "Basic Firearms",
    businessType: "Local Gun Shop", 
    description: "Simple, professional firearms dealer serving the community.",
    address: "123 Main St, Boise, ID",
    phone: "(208) 555-0100",
    rating: 4.2,
    reviewCount: 45
  },
  enhanced: {
    businessName: "Enhanced Outfitters", 
    businessType: "Tactical Equipment Dealer",
    description: "Professional tactical gear and training equipment supplier with verified credentials.",
    address: "456 State St, Meridian, ID",
    phone: "(208) 555-0200", 
    rating: 4.5,
    reviewCount: 89,
    specialties: ["Tactical Gear", "Training Equipment"]
  },
  featured: {
    businessName: "Featured Defense",
    businessType: "Premium Firearms Dealer",
    description: "Featured dealer with enhanced placement and customer review system.",
    address: "789 Eagle Rd, Boise, ID", 
    phone: "(208) 555-0300",
    rating: 4.7,
    reviewCount: 156,
    specialties: ["Custom Builds", "Premium Service", "Expert Consultation"]
  },
  premium: {
    businessName: "Premium Arms Co",
    businessType: "Elite Firearms Specialist", 
    description: "Premium dealer with fire gradient styling, sponsorship features, and monthly lead tracking.",
    address: "1000 Premium Blvd, Meridian, ID",
    phone: "(208) 555-0400",
    rating: 4.9,
    reviewCount: 278,
    specialties: ["Custom Rifles", "Competition Arms", "Collector Items", "VIP Service"]
  }
}

// Individual tier examples showing strategic progression
export const Free_CleanMinimal: Story = {
  args: {
    ...strategicBusinesses.basic,
    tier: 'free',
    isVerified: false,
    specialties: []
  }
}

export const Copper_OneAccent: Story = {
  args: {
    ...strategicBusinesses.enhanced,
    tier: 'copper',
    isVerified: true
  }
}

export const Silver_MetallicPresence: Story = {
  args: {
    ...strategicBusinesses.featured,
    tier: 'silver', 
    isVerified: true,
    featured: true
  }
}

export const Gold_PremiumFire: Story = {
  args: {
    ...strategicBusinesses.premium,
    tier: 'gold',
    isVerified: true,
    isSponsored: true,
    featured: true,
    monthlyLeads: 42
  }
}

// Strategic comparison showing clear value progression
export const StrategicHierarchy: Story = {
  render: () => (
    <div className="space-y-lg">
      <div className="text-center mb-lg">
        <h2 className="font-rajdhani font-bold text-display-md mb-xs">Strategic Design Hierarchy</h2>
        <p className="text-muted-foreground">Each tier should make the next one obviously more valuable</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="space-y-base">
          <div className="text-center">
            <h3 className="font-rajdhani font-bold text-body-sm text-muted-foreground">FREE - $0</h3>
            <p className="text-caption text-muted-foreground">Clean minimalism</p>
          </div>
          <VendorCard
            {...strategicBusinesses.basic}
            tier="free"
            isVerified={false}
            specialties={[]}
          />
        </div>
        
        <div className="space-y-base">
          <div className="text-center">
            <h3 className="font-rajdhani font-bold text-body-sm text-copper-orange">COPPER - $49</h3>
            <p className="text-caption text-muted-foreground">One strategic accent</p>
          </div>
          <VendorCard
            {...strategicBusinesses.enhanced}
            tier="copper"
            isVerified={true}
          />
        </div>
        
        <div className="space-y-base">
          <div className="text-center">
            <h3 className="font-rajdhani font-bold text-body-sm text-stainless-steel">SILVER - $99</h3>
            <p className="text-caption text-muted-foreground">Metallic presence</p>
          </div>
          <VendorCard
            {...strategicBusinesses.featured}
            tier="silver"
            isVerified={true}
            featured={true}
          />
        </div>
        
        <div className="space-y-base">
          <div className="text-center">
            <h3 className="font-rajdhani font-bold text-body-sm text-brass-yellow">GOLD - $199</h3>
            <p className="text-caption text-muted-foreground">Premium fire treatment</p>
          </div>
          <VendorCard
            {...strategicBusinesses.premium}
            tier="gold"
            isVerified={true}
            isSponsored={true}
            featured={true}
            monthlyLeads={42}
          />
        </div>
      </div>
      
      <div className="text-center text-body-sm text-muted-foreground">
        <p>Notice how each tier makes the next one look obviously better - that's strategic design!</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Strategic tier comparison showing purposeful design hierarchy that encourages upgrades.'
      }
    }
  }
}
