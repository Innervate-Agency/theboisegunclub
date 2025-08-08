import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { VendorCard } from '../../components/ui/VendorCard'

const meta: Meta<typeof VendorCard> = {
  title: 'Design System/Molecules/VendorCard',
  component: VendorCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# VendorCard - TBGC Business Directory Component

The **VendorCard** component showcases the complete TBGC design system with strategic tier progression for vendor subscriptions. Built specifically for the Treasure Valley firearms marketplace.

## Strategic Pricing Tiers
- **FREE** ($0): Clean minimalism - content focused
- **COPPER** ($49/mo): ONE strategic accent (copper badge) - enhanced presence
- **SILVER** ($99/mo): Enhanced metallic presence - featured placement & reviews  
- **GOLD** ($199/mo): Premium fire treatment (ONLY tier with fire) - sponsorship & gradients

## Design System Features
- Strategic restraint - each tier makes the next obviously more valuable
- Fire gradient animations on Gold tier ONLY
- Proper Stripe-inspired shadow hierarchy with strategic restraint
- TBGC 26-color palette integration (scope-blue, rifling-green, etc.)
- Responsive typography with Rajdhani/Noto Sans
- Component state utilities from globals.css

## Visual Hierarchy Philosophy
Each tier should drive subscription upgrades through intentional design choices, not visual noise.
        `
      }
    }
  },
  argTypes: {
    tier: {
      control: 'select',
      options: ['free', 'copper', 'silver', 'gold'],
      description: 'Vendor subscription tier'
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg']
    },

    isSponsored: {
      control: 'boolean',
      description: 'Show sponsored badge (Gold tier only)'
    },
    isVerified: {
      control: 'boolean', 
      description: 'Show verified badge'
    }
  }
}

export default meta
type Story = StoryObj<typeof VendorCard>

// Sample business data for realistic demos
const sampleBusinesses = {
  gunShop: {
    businessName: "Boise Firearms Depot", 
    businessType: "Firearms Dealer & Gunsmith",
    description: "Full-service firearms dealer specializing in tactical gear, custom builds, and professional gunsmithing services. Family-owned since 1987.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    address: "1234 State Street, Boise, ID 83702",
    phone: "(208) 555-0123",
    website: "https://boisefirearmsdepot.com",
    hours: "Mon-Sat 9AM-6PM, Sun 10AM-4PM",
    rating: 4.8,
    reviewCount: 247,
    specialties: ["Custom Builds", "NFA Items", "Gunsmithing", "Tactical Gear"]
  },
  range: {
    businessName: "Eagle Eye Shooting Range",
    businessType: "Indoor Shooting Range", 
    description: "State-of-the-art 25-lane indoor range with climate control, advanced ventilation, and tactical training courses.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    address: "5678 Eagle Road, Meridian, ID 83646", 
    phone: "(208) 555-0456",
    website: "https://eagleeyerange.com",
    hours: "Daily 8AM-10PM",
    rating: 4.6,
    reviewCount: 189,
    specialties: ["CCW Classes", "Tactical Training", "Youth Programs", "Competition"]
  },
  gunsmith: {
    businessName: "Mountain West Gunsmithing",
    businessType: "Custom Gunsmith",
    description: "Precision gunsmithing and custom rifle builds. Specializing in long-range precision rifles and historical restorations.",
    address: "910 Industrial Way, Nampa, ID 83687",
    phone: "(208) 555-0789", 
    website: "https://mountainwestgunsmithing.com",
    hours: "Tue-Fri 9AM-5PM, Sat by appointment",
    rating: 4.9,
    reviewCount: 67,
    specialties: ["Custom Rifles", "Barrel Work", "Trigger Jobs", "Restoration"]
  }
}

export const FreeTier: Story = {
  args: {
    ...sampleBusinesses.gunShop,
    tier: 'free',
    isVerified: false,
    specialties: [], // No specialties shown on free tier
    monthlyLeads: undefined
  }
}

export const CopperTier: Story = {
  args: {
    ...sampleBusinesses.range,
    tier: 'copper', 
    isVerified: true,
    monthlyLeads: undefined
  }
}

export const SilverTier: Story = {
  args: {
    ...sampleBusinesses.gunsmith,
    tier: 'silver',
    isVerified: true
  }
}

export const GoldTier: Story = {
  args: {
    ...sampleBusinesses.gunShop,
    tier: 'gold',
    isVerified: true,
    isSponsored: true,
    monthlyLeads: 42,
    specialties: ["Premium Builds", "NFA Specialist", "Law Enforcement", "Training"]
  }
}

// Showcase all tiers together
export const AllTiers: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg p-lg">
      <div className="space-y-base">
        <h3 className="font-rajdhani font-bold text-body-lg text-center">FREE TIER</h3>
        <VendorCard
          {...sampleBusinesses.gunShop}
          tier="free"
          isVerified={false}
          specialties={[]}
        />
      </div>
      
      <div className="space-y-base">
        <h3 className="font-rajdhani font-bold text-body-lg text-center text-rusty-orange">COPPER - $49/mo</h3>
        <VendorCard
          {...sampleBusinesses.range}
          tier="copper"
          isVerified={true}
        />
      </div>
      
      <div className="space-y-base"> 
        <h3 className="font-rajdhani font-bold text-body-lg text-center text-stainless-steel">SILVER - $99/mo</h3>
        <VendorCard
          {...sampleBusinesses.gunsmith}
          tier="silver"
          isVerified={true}
          
        />
      </div>
      
      <div className="space-y-base">
        <h3 className="font-rajdhani font-bold text-body-lg text-center text-sandy-ochre">GOLD - $199/mo</h3>
        <VendorCard
          {...sampleBusinesses.gunShop}
          tier="gold"
          isVerified={true}
          isSponsored={true}
          
          monthlyLeads={42}
          specialties={["Premium Builds", "NFA Specialist", "Law Enforcement", "Training"]}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete pricing tier comparison showing the value progression from FREE to GOLD subscriptions.'
      }
    }
  }
}

// Business Context Examples
export const FFLDealer: Story = {
  args: {
    businessName: "Treasure Valley FFL",
    businessType: "Federal Firearms Licensed Dealer",
    description: "Licensed FFL dealer offering transfer services, background checks, and firearms sales. Quick turnaround and competitive rates.",
    tier: 'silver',
    address: "123 Main Street, Boise, ID 83702",
    phone: "(208) 555-0147",
    website: "https://treasurevalleyffl.com", 
    hours: "Mon-Fri 10AM-6PM, Sat 9AM-4PM",
    rating: 4.7,
    reviewCount: 156,
    isVerified: true,
    specialties: ["FFL Transfers", "Background Checks", "Competitive Rates", "Quick Service"]
  }
}

export const TrainingAcademy: Story = {
  args: {
    businessName: "Idaho Tactical Academy",
    businessType: "Firearms Training & Education",
    description: "Professional firearms training for all skill levels. NRA certified instructors, CCW classes, and advanced tactical courses.",
    tier: 'gold',
    address: "456 Training Boulevard, Meridian, ID 83646",
    phone: "(208) 555-0258",
    website: "https://idahotactical.com",
    hours: "Classes scheduled Mon-Sat", 
    rating: 4.9,
    reviewCount: 203,
    isVerified: true,
    isSponsored: true,
    monthlyLeads: 67,
    specialties: ["CCW Classes", "Advanced Tactical", "NRA Certified", "Corporate Training"]
  }
}

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="space-y-lg">
      {/* Mobile: Single column */}
      <div className="md:hidden space-y-base">
        <VendorCard {...sampleBusinesses.gunShop} tier="gold" isSponsored={true}  monthlyLeads={42} />
        <VendorCard {...sampleBusinesses.range} tier="silver" isVerified={true} />
        <VendorCard {...sampleBusinesses.gunsmith} tier="copper" isVerified={true} />
      </div>
      
      {/* Tablet: 2 columns */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-lg">
        <VendorCard {...sampleBusinesses.gunShop} tier="gold" isSponsored={true}  monthlyLeads={42} />
        <VendorCard {...sampleBusinesses.range} tier="silver" isVerified={true} />
        <VendorCard {...sampleBusinesses.gunsmith} tier="copper" isVerified={true} />
        <VendorCard {...sampleBusinesses.gunShop} tier="free" isVerified={false} specialties={[]} />
      </div>
      
      {/* Desktop: 3 columns */} 
      <div className="hidden lg:grid grid-cols-3 gap-lg">
        <VendorCard {...sampleBusinesses.gunShop} tier="gold" isSponsored={true}  monthlyLeads={42} />
        <VendorCard {...sampleBusinesses.range} tier="silver" isVerified={true}  />
        <VendorCard {...sampleBusinesses.gunsmith} tier="copper" isVerified={true} />
        <VendorCard {...sampleBusinesses.gunShop} tier="free" isVerified={false} specialties={[]} />
        <VendorCard {...sampleBusinesses.range} tier="copper" isVerified={true} />
        <VendorCard {...sampleBusinesses.gunsmith} tier="silver" isVerified={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout demonstrating how VendorCards adapt to different screen sizes and maintain proper spacing.'
      }
    }
  }
}

// Strategic tier progression - showing business value hierarchy
export const StrategicTierProgression: Story = {
  render: () => (
    <div className="space-y-lg max-w-7xl">
      <div className="text-center mb-lg">
        <h2 className="font-rajdhani font-bold text-display-md mb-xs">Strategic Design Hierarchy</h2>
        <p className="text-muted-foreground">Each tier should make the next one obviously more valuable - driving subscription upgrades through intentional design choices.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="space-y-base">
          <div className="text-center">
            <h3 className="font-rajdhani font-bold text-body-lg text-muted-foreground">FREE</h3>
            <p className="text-caption text-muted-foreground mb-xs">$0/month</p>
            <p className="text-caption text-muted-foreground">Clean minimalism</p>
          </div>
          <VendorCard
            businessName="Basic Firearms"
            businessType="Local Gun Shop"  
            description="Simple, professional firearms dealer serving the community."
            address="123 Main St, Boise, ID"
            phone="(208) 555-0100"
            rating={4.2}
            reviewCount={45}
            tier="free"
            isVerified={false}
            specialties={[]}
          />
        </div>
        
        <div className="space-y-base">
          <div className="text-center">
            <h3 className="font-rajdhani font-bold text-body-lg text-rusty-orange">COPPER</h3>
            <p className="text-caption text-muted-foreground mb-xs">$49/month</p>
            <p className="text-caption text-muted-foreground">One strategic accent</p>
          </div>
          <VendorCard
            businessName="Enhanced Outfitters"
            businessType="Outdoor Gear & Firearms"
            description="Quality gear with enhanced visibility and customer analytics."
            address="456 Valley Rd, Meridian, ID"
            phone="(208) 555-0200"
            rating={4.5}
            reviewCount={127}
            tier="copper"
            isVerified={true}
            specialties={["Outdoor Gear", "Hunting Supplies"]}
          />
        </div>
        
        <div className="space-y-base">
          <div className="text-center">
            <h3 className="font-rajdhani font-bold text-body-lg text-scope-blue">SILVER</h3>
            <p className="text-caption text-muted-foreground mb-xs">$99/month</p>
            <p className="text-caption text-muted-foreground">Enhanced metallic presence</p>
          </div>
          <VendorCard
            businessName="Featured Firearms Co"
            businessType="Premium Dealer"
            description="Featured placement with enhanced customer engagement and review management."
            address="789 Professional Ave, Boise, ID"
            phone="(208) 555-0300"
            rating={4.7}
            reviewCount={203}
            tier="silver"
            isVerified={true}
            
            specialties={["Premium Firearms", "Custom Services", "Expert Consultation"]}
          />
        </div>
        
        <div className="space-y-base">
          <div className="text-center">
            <h3 className="font-rajdhani font-bold text-body-lg text-sandy-ochre">GOLD</h3>
            <p className="text-caption text-muted-foreground mb-xs">$199/month</p>
            <p className="text-caption text-muted-foreground">Premium fire treatment</p>
          </div>
          <VendorCard
            businessName="Elite Arms Collective"
            businessType="Premium Collection"
            description="Maximum impact sponsorship with fire gradients, enhanced Mica effects, and VIP treatment."
            address="1000 Executive Blvd, Boise, ID"
            phone="(208) 555-0400"
            rating={4.9}
            reviewCount={567}
            tier="gold"
            isVerified={true}
            isSponsored={true}
            
            monthlyLeads={42}
            specialties={["Custom Rifles", "Competition Arms", "Collector Items", "VIP Service"]}
          />
        </div>
      </div>
      
      <div className="text-center mt-lg p-md bg-muted/50 rounded-card">
        <p className="text-body-sm text-muted-foreground">
          <strong>Strategic Restraint Philosophy:</strong> Each tier uses intentional design enhancements to create clear value progression, 
          encouraging upgrades through visual hierarchy rather than excessive decoration.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Strategic tier progression showing how each subscription level provides clear visual value over the previous tier, driving business upgrades through intentional design choices.'
      }
    }
  }
}
