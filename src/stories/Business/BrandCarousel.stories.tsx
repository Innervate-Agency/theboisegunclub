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
        logo: <div className="flex items-center gap-xs"><Target className="w-6 h-6" /><span className="font-bold">IPA</span></div>,
        stats: [
          { label: "Competition shooters trained", value: "500+" },
          { label: "National championships won", value: "25" },
          { label: "Instructors certified", value: "18" },
          { label: "Years of excellence", value: "12" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Target className="w-32 h-32 text-white/30" />
        </div>,
        overlayTitle: "See how Idaho Precision Academy became the Northwest's premier training facility",
        overlayDescription: "From local competitions to national championships",
        gradientColor: 'blue',
        productsUsed: [
          { name: "Competition Training", icon: <Target className="icon-xs" />, color: "bg-ayu-blue" },
          { name: "Safety Protocols", icon: <Shield className="icon-xs" />, color: "bg-ayu-yellow" }
        ]
      },
      {
        companyName: "TREASURE VALLEY GUNWORKS",
        logo: <div className="flex items-center gap-xs"><Settings className="w-6 h-6" /><span className="font-bold">TVG</span></div>,
        stats: [
          { label: "Custom builds completed", value: "1,200+" },
          { label: "Customer satisfaction", value: "99.8%" },
          { label: "Master gunsmiths", value: "6" },
          { label: "Specialty services", value: "15+" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Settings className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Discover how Treasure Valley Gunworks built Idaho's finest custom shop",
        overlayDescription: "Precision craftsmanship meets modern technology",
        gradientColor: 'teal',
        productsUsed: [
          { name: "Custom Manufacturing", icon: <Settings className="icon-xs" />, color: "bg-ayu-teal" },
          { name: "Quality Control", icon: <Award className="icon-xs" />, color: "bg-ayu-blue" }
        ]
      },
      {
        companyName: "BOISE TACTICAL COLLECTIVE",
        logo: <div className="flex items-center gap-xs"><Shield className="w-6 h-6" /><span className="font-bold">BTC</span></div>,
        stats: [
          { label: "Law enforcement trained", value: "800+" },
          { label: "Training hours delivered", value: "50,000+" },
          { label: "Active instructors", value: "12" },
          { label: "Course modules", value: "28" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Shield className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Learn how Boise Tactical Collective became Idaho's top law enforcement trainer",
        overlayDescription: "Professional training programs with real-world results",
        gradientColor: 'green',
        productsUsed: [
          { name: "Tactical Training", icon: <Shield className="icon-xs" />, color: "bg-ayu-green" },
          { name: "Equipment Testing", icon: <Zap className="icon-xs" />, color: "bg-ayu-purple" }
        ]
      },
      {
        companyName: "MOUNTAIN PRECISION OPTICS",
        logo: <div className="flex items-center gap-xs"><Zap className="w-6 h-6" /><span className="font-bold">MPO</span></div>,
        stats: [
          { label: "Scopes calibrated", value: "2,500+" },
          { label: "Long-range specialists", value: "8" },
          { label: "Precision records", value: "3,000yd+" },
          { label: "Competition wins", value: "150+" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Zap className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "See how Mountain Precision Optics became the West's go-to scope experts",
        overlayDescription: "When precision matters, experience counts",
        gradientColor: 'purple',
        productsUsed: [
          { name: "Optics Calibration", icon: <Zap className="icon-xs" />, color: "bg-ayu-purple" },
          { name: "Precision Testing", icon: <Target className="icon-xs" />, color: "bg-ayu-orange" }
        ]
      },
      {
        companyName: "IDAHO DEFENSE INDUSTRIES",
        logo: <div className="flex items-center gap-xs"><Award className="w-6 h-6" /><span className="font-bold">IDI</span></div>,
        stats: [
          { label: "Defense contracts", value: "45+" },
          { label: "Manufacturing capacity", value: "10,000/mo" },
          { label: "Quality certifications", value: "12" },
          { label: "R&D investments", value: "$2.5M" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Award className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Discover how Idaho Defense Industries powers national security",
        overlayDescription: "Advanced manufacturing meets Idaho craftsmanship",
        gradientColor: 'red',
        productsUsed: [
          { name: "Defense Manufacturing", icon: <Award className="icon-xs" />, color: "bg-ayu-red" },
          { name: "Quality Assurance", icon: <Shield className="icon-xs" />, color: "bg-ayu-blue" }
        ]
      },
      {
        companyName: "TREASURE VALLEY TRAINING",
        logo: <div className="flex items-center gap-xs"><Users className="w-6 h-6" /><span className="font-bold">TVT</span></div>,
        stats: [
          { label: "Students graduated", value: "3,200+" },
          { label: "Course completion rate", value: "98.5%" },
          { label: "Certified instructors", value: "24" },
          { label: "Training facilities", value: "4" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Users className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Learn how Treasure Valley Training educates Idaho's next generation",
        overlayDescription: "Comprehensive firearms education for all skill levels",
        gradientColor: 'yellow',
        productsUsed: [
          { name: "Educational Programs", icon: <Users className="icon-xs" />, color: "bg-ayu-yellow" },
          { name: "Safety Certification", icon: <Shield className="icon-xs" />, color: "bg-ayu-green" }
        ]
      }
    ],
    partnerLogos: [
      { name: "Glock", logo: <div className="font-bold text-display-sm">GLOCK</div> },
      { name: "Sig Sauer", logo: <div className="font-bold text-body-lg">SIG SAUER</div> },
      { name: "Smith & Wesson", logo: <div className="font-bold text-body-lg">S&W</div> },
      { name: "Ruger", logo: <div className="font-bold text-display-sm">RUGER</div> },
      { name: "Daniel Defense", logo: <div className="font-bold text-body-sm">DANIEL DEFENSE</div> },
      { name: "Leupold", logo: <div className="font-bold text-body-lg">LEUPOLD</div> }
    ]
  },
}

export const LaunchPhase: Story = {
  args: {
    variant: 'subtle',
    showcases: [
      {
        companyName: "COMING SOON",
        logo: <div className="text-body-lg font-bold text-white">TBGC</div>,
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
        logo: <div className="text-body-lg font-bold text-white">???</div>,
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
      { name: "Local Partners", logo: <div className="text-body-sm opacity-60">LOCAL PARTNERS</div> },
      { name: "Training Orgs", logo: <div className="text-body-sm opacity-60">TRAINING ORGS</div> },
      { name: "Gun Stores", logo: <div className="text-body-sm opacity-60">GUN STORES</div> },
      { name: "Ranges", logo: <div className="text-body-sm opacity-60">RANGES</div> },
      { name: "Your Logo", logo: <div className="text-body-sm opacity-40">YOUR LOGO HERE</div> }
    ]
  },
}