import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { BrandCarousel } from '@/components/ui/brand-carousel'
import { BoltIcon, Cog6ToothIcon, CursorArrowRaysIcon, ShieldCheckIcon, Cog6ToothIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline';

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
        logo: <div className="flex items-center gap-xs"><CursorArrowRaysIcon className="w-6 h-6" /><span className="font-bold">IPA</span></div>,
        stats: [
          { label: "Competition shooters trained", value: "500+" },
          { label: "National championships won", value: "25" },
          { label: "Instructors certified", value: "18" },
          { label: "Years of excellence", value: "12" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <CursorArrowRaysIcon className="w-32 h-32 text-white/30" />
        </div>,
        overlayTitle: "See how Idaho Precision Academy became the Northwest's premier training facility",
        overlayDescription: "From local competitions to national championships",
        gradientColor: 'blue',
        productsUsed: [
          { name: "Competition Training", icon: <CursorArrowRaysIcon className="icon-xs" />, color: "bg-slate-blue" },
          { name: "Safety Protocols", icon: <ShieldCheckIcon className="icon-xs" />, color: "bg-ayu-yellow" }
        ]
      },
      {
        companyName: "TREASURE VALLEY GUNWORKS",
        logo: <div className="flex items-center gap-xs"><Cog6ToothIcon className="w-6 h-6" /><span className="font-bold">TVG</span></div>,
        stats: [
          { label: "Custom builds completed", value: "1,200+" },
          { label: "Customer satisfaction", value: "99.8%" },
          { label: "Master gunsmiths", value: "6" },
          { label: "Specialty services", value: "15+" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <Cog6ToothIcon className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Discover how Treasure Valley Gunworks built Idaho's finest custom shop",
        overlayDescription: "Precision craftsmanship meets modern technology",
        gradientColor: 'teal',
        productsUsed: [
          { name: "Custom Manufacturing", icon: <Cog6ToothIcon className="icon-xs" />, color: "bg-ayu-teal" },
          { name: "Quality Control", icon: <TrophyIcon className="icon-xs" />, color: "bg-slate-blue" }
        ]
      },
      {
        companyName: "BOISE TACTICAL COLLECTIVE",
        logo: <div className="flex items-center gap-xs"><ShieldCheckIcon className="w-6 h-6" /><span className="font-bold">BTC</span></div>,
        stats: [
          { label: "Law enforcement trained", value: "800+" },
          { label: "Training hours delivered", value: "50,000+" },
          { label: "Active instructors", value: "12" },
          { label: "Course modules", value: "28" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <ShieldCheckIcon className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Learn how Boise Tactical Collective became Idaho's top law enforcement trainer",
        overlayDescription: "Professional training programs with real-world results",
        gradientColor: 'green',
        productsUsed: [
          { name: "Tactical Training", icon: <ShieldCheckIcon className="icon-xs" />, color: "bg-ayu-green" },
          { name: "Equipment Testing", icon: <BoltIcon className="icon-xs" />, color: "bg-ayu-purple" }
        ]
      },
      {
        companyName: "MOUNTAIN PRECISION OPTICS",
        logo: <div className="flex items-center gap-xs"><BoltIcon className="w-6 h-6" /><span className="font-bold">MPO</span></div>,
        stats: [
          { label: "Scopes calibrated", value: "2,500+" },
          { label: "Long-range specialists", value: "8" },
          { label: "Precision records", value: "3,000yd+" },
          { label: "Competition wins", value: "150+" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <BoltIcon className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "See how Mountain Precision Optics became the West's go-to scope experts",
        overlayDescription: "When precision matters, experience counts",
        gradientColor: 'purple',
        productsUsed: [
          { name: "Optics Calibration", icon: <BoltIcon className="icon-xs" />, color: "bg-ayu-purple" },
          { name: "Precision Testing", icon: <CursorArrowRaysIcon className="icon-xs" />, color: "bg-ayu-orange" }
        ]
      },
      {
        companyName: "IDAHO DEFENSE INDUSTRIES",
        logo: <div className="flex items-center gap-xs"><TrophyIcon className="w-6 h-6" /><span className="font-bold">IDI</span></div>,
        stats: [
          { label: "Defense contracts", value: "45+" },
          { label: "Manufacturing capacity", value: "10,000/mo" },
          { label: "Quality certifications", value: "12" },
          { label: "R&D investments", value: "$2.5M" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <TrophyIcon className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Discover how Idaho Defense Industries powers national security",
        overlayDescription: "Advanced manufacturing meets Idaho craftsmanship",
        gradientColor: 'red',
        productsUsed: [
          { name: "Defense Manufacturing", icon: <TrophyIcon className="icon-xs" />, color: "bg-ayu-red" },
          { name: "Quality Assurance", icon: <ShieldCheckIcon className="icon-xs" />, color: "bg-slate-blue" }
        ]
      },
      {
        companyName: "TREASURE VALLEY TRAINING",
        logo: <div className="flex items-center gap-xs"><UsersIcon className="w-6 h-6" /><span className="font-bold">TVT</span></div>,
        stats: [
          { label: "Students graduated", value: "3,200+" },
          { label: "Course completion rate", value: "98.5%" },
          { label: "Certified instructors", value: "24" },
          { label: "Training facilities", value: "4" }
        ],
        heroImage: <div className="w-full h-full flex items-center justify-center">
          <UsersIcon className="w-32 h-32 text-white/40" />
        </div>,
        overlayTitle: "Learn how Treasure Valley Training educates Idaho's next generation",
        overlayDescription: "Comprehensive firearms education for all skill levels",
        gradientColor: 'yellow',
        productsUsed: [
          { name: "Educational Programs", icon: <UsersIcon className="icon-xs" />, color: "bg-ayu-yellow" },
          { name: "Safety Certification", icon: <ShieldCheckIcon className="icon-xs" />, color: "bg-ayu-green" }
        ]
      }
    ],
    partnerLogos: [
      { name: "Glock", icon: CursorArrowRaysIcon, gradientColor: 'blue' as const },
      { name: "Sig Sauer", icon: ShieldCheckIcon, gradientColor: 'teal' as const },
      { name: "Smith & Wesson", icon: Award, gradientColor: 'green' as const },
      { name: "Ruger", icon: Settings, gradientColor: 'purple' as const },
      { name: "Daniel Defense", icon: Zap, gradientColor: 'red' as const },
      { name: "Leupold", icon: UsersIcon, gradientColor: 'yellow' as const }
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
          <UsersIcon className="w-32 h-32 text-white/30" />
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
          <TrophyIcon className="w-32 h-32 text-white/30" />
        </div>,
        overlayTitle: "See how your business could be featured right here",
        overlayDescription: "Partner with TBGC and reach Treasure Valley's firearms community",
        gradientColor: 'orange'
      }
    ],
    partnerLogos: [
      { name: "Local Partners", icon: UsersIcon, gradientColor: 'blue' as const },
      { name: "Training Orgs", icon: ShieldCheckIcon, gradientColor: 'teal' as const },
      { name: "Gun Stores", icon: Award, gradientColor: 'green' as const },
      { name: "Ranges", icon: Settings, gradientColor: 'purple' as const },
      { name: "Your Logo", icon: Zap, gradientColor: 'red' as const }
    ]
  },
}