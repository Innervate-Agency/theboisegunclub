import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { BrandCarousel } from '@/components/ui/brand-carousel'
import { Target, Shield, Zap, Award, Users, Settings } from 'lucide-react'

const meta: Meta<typeof BrandCarousel> = {
  title: 'Design System/Organisms/BrandCarousel',
  component: BrandCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stripe-style brand showcase with rich visuals, stats sidebar, and gradient overlays. Shows customer success stories and partner logos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'branded'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultShowcase: Story = {
  args: {
    variant: 'default',
  },
}

export const CustomShowcase: Story = {
  args: {
    variant: 'branded',
    showcases: [
      {
        companyName: "IDAHO PRECISION ACADEMY",
        logo: <div className="flex items-center gap-[var(--space-xs)]"><Target className="w-6 h-6" /><span className="font-bold">IPA</span></div>,
        stats: [
          { label: "Competition shooters trained", value: "500+" },
          { label: "National championships won", value: "25" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Target className="w-32 h-32 text-white/30" />
        </div>,
        overlayTitle: "See how Idaho Precision Academy became the Northwest's premier training facility",
        overlayDescription: "From local competitions to national championships",
        gradientColor: 'blue'
      },
      {
        companyName: "TREASURE VALLEY GUNWORKS",
        logo: <div className="flex items-center gap-[var(--space-xs)]"><Settings className="w-6 h-6" /><span className="font-bold">TVG</span></div>,
        stats: [
          { label: "Custom builds completed", value: "1,200+" },
          { label: "Customer satisfaction", value: "99.8%" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Settings className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Discover how Treasure Valley Gunworks built Idaho's finest custom shop",
        overlayDescription: "Precision craftsmanship meets modern technology",
        gradientColor: 'orange'
      },
      {
        companyName: "BOISE TACTICAL COLLECTIVE",
        logo: <div className="flex items-center gap-[var(--space-xs)]"><Shield className="w-6 h-6" /><span className="font-bold">BTC</span></div>,
        stats: [
          { label: "Law enforcement trained", value: "800+" },
          { label: "Training hours delivered", value: "50,000+" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Shield className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Learn how Boise Tactical Collective became Idaho's top law enforcement trainer",
        overlayDescription: "Professional training programs with real-world results",
        gradientColor: 'green'
      }
    ],
    partnerLogos: [
      { name: "Glock", logo: <div className="font-bold text-xl">GLOCK</div> },
      { name: "Sig Sauer", logo: <div className="font-bold text-lg">SIG SAUER</div> },
      { name: "Smith & Wesson", logo: <div className="font-bold text-lg">S&W</div> },
      { name: "Ruger", logo: <div className="font-bold text-xl">RUGER</div> },
      { name: "Daniel Defense", logo: <div className="font-bold text-sm">DANIEL DEFENSE</div> },
      { name: "Leupold", logo: <div className="font-bold text-lg">LEUPOLD</div> }
    ]
  },
}

export const LaunchPhase: Story = {
  args: {
    variant: 'subtle',
    showcases: [
      {
        companyName: "COMING SOON",
        logo: <div className="text-lg font-bold text-white">TBGC</div>,
        stats: [
          { label: "Partner inquiries", value: "25+" },
          { label: "Pre-launch signups", value: "150+" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Users className="w-32 h-32 text-white/30" />
        </div>,
        overlayTitle: "Be the first to join Treasure Valley's premier firearms network",
        overlayDescription: "Connect with local businesses, training organizations, and fellow enthusiasts",
        gradientColor: 'blue'
      },
      {
        companyName: "YOUR BUSINESS HERE",
        logo: <div className="text-lg font-bold text-white">???</div>,
        stats: [
          { label: "Partnership benefits", value: "∞" },
          { label: "Growth potential", value: "100%" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Award className="w-32 h-32 text-white/30" />
        </div>,
        overlayTitle: "See how your business could be featured right here",
        overlayDescription: "Partner with TBGC and reach Treasure Valley's firearms community",
        gradientColor: 'orange'
      }
    ],
    partnerLogos: [
      { name: "Local Partners", logo: <div className="text-sm opacity-60">LOCAL PARTNERS</div> },
      { name: "Training Orgs", logo: <div className="text-sm opacity-60">TRAINING ORGS</div> },
      { name: "Gun Stores", logo: <div className="text-sm opacity-60">GUN STORES</div> },
      { name: "Ranges", logo: <div className="text-sm opacity-60">RANGES</div> },
      { name: "Your Logo", logo: <div className="text-sm opacity-40">YOUR LOGO HERE</div> }
    ]
  },
}