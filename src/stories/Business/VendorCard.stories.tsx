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

The **VendorCard** component showcases the complete TBGC design system with 4 pricing tiers for vendor subscriptions. Built specifically for the Treasure Valley firearms marketplace.

## Pricing Tiers
- **FREE**: Basic directory listing
- **COPPER** ($49/mo): Enhanced with photos & analytics  
- **SILVER** ($99/mo): Featured placement & reviews
- **GOLD** ($199/mo): Premium with sponsorship & fire gradients

## Design System Features
- Fire gradient animations on Gold tier
- Proper Stripe-inspired shadow hierarchy 
- TBGC 26-color palette integration
- Responsive typography with Rajdhani/Noto Sans
- Component state utilities from globals.css
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
    featured: {
      control: 'boolean',
      description: 'Enhanced hover animations'
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
    isVerified: true,
    featured: true,
    monthlyLeads: undefined
  }
}

export const GoldTier: Story = {
  args: {
    ...sampleBusinesses.gunShop,
    tier: 'gold',
    isVerified: true,
    isSponsored: true,
    featured: true,
    monthlyLeads: 42,
    specialties: ["Premium Builds", "NFA Specialist", "Law Enforcement", "Training"]
  }
}

// Showcase all tiers together
export const AllTiers: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-lg)] p-[var(--space-lg)]">
      <div className="space-y-[var(--space-base)]">
        <h3 className="font-rajdhani font-bold text-lg text-center">FREE TIER</h3>
        <VendorCard
          {...sampleBusinesses.gunShop}
          tier="free"
          isVerified={false}
          specialties={[]}
        />
      </div>
      
      <div className="space-y-[var(--space-base)]">
        <h3 className="font-rajdhani font-bold text-lg text-center text-copper-orange">COPPER - $49/mo</h3>
        <VendorCard
          {...sampleBusinesses.range}
          tier="copper"
          isVerified={true}
        />
      </div>
      
      <div className="space-y-[var(--space-base)]"> 
        <h3 className="font-rajdhani font-bold text-lg text-center text-stainless-steel">SILVER - $99/mo</h3>
        <VendorCard
          {...sampleBusinesses.gunsmith}
          tier="silver"
          isVerified={true}
          featured={true}
        />
      </div>
      
      <div className="space-y-[var(--space-base)]">
        <h3 className="font-rajdhani font-bold text-lg text-center text-brass-yellow">GOLD - $199/mo</h3>
        <VendorCard
          {...sampleBusinesses.gunShop}
          tier="gold"
          isVerified={true}
          isSponsored={true}
          featured={true}
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
    featured: true,
    monthlyLeads: 67,
    specialties: ["CCW Classes", "Advanced Tactical", "NRA Certified", "Corporate Training"]
  }
}

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="space-y-[var(--space-lg)]">
      {/* Mobile: Single column */}
      <div className="md:hidden space-y-[var(--space-base)]">
        <VendorCard {...sampleBusinesses.gunShop} tier="gold" isSponsored={true} featured={true} monthlyLeads={42} />
        <VendorCard {...sampleBusinesses.range} tier="silver" isVerified={true} />
        <VendorCard {...sampleBusinesses.gunsmith} tier="copper" isVerified={true} />
      </div>
      
      {/* Tablet: 2 columns */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-[var(--space-lg)]">
        <VendorCard {...sampleBusinesses.gunShop} tier="gold" isSponsored={true} featured={true} monthlyLeads={42} />
        <VendorCard {...sampleBusinesses.range} tier="silver" isVerified={true} />
        <VendorCard {...sampleBusinesses.gunsmith} tier="copper" isVerified={true} />
        <VendorCard {...sampleBusinesses.gunShop} tier="free" isVerified={false} specialties={[]} />
      </div>
      
      {/* Desktop: 3 columns */} 
      <div className="hidden lg:grid grid-cols-3 gap-[var(--space-lg)]">
        <VendorCard {...sampleBusinesses.gunShop} tier="gold" isSponsored={true} featured={true} monthlyLeads={42} />
        <VendorCard {...sampleBusinesses.range} tier="silver" isVerified={true} featured={true} />
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
