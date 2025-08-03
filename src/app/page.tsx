'use client'

import { MegaHero } from '@/components/ui/mega-hero'
import { FeatureGrid } from '@/components/ui/feature-grid'
import { SiteFooter } from '@/components/ui/site-footer'
import { SectionDivider } from '@/components/ui/section-divider'
import AnimatedSplashCard from '@/components/ui/AnimatedSplashCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, Calendar, ShoppingCart, Share2, Bell, Building2, Target, Users 
} from 'lucide-react'

// Feature cards for the splash section
const splashFeatures = [
  {
    icon: Search,
    title: "Find Local Experts",
    description: "Complete directory of gun shops, ranges, instructors, and gunsmiths throughout the valley."
  },
  {
    icon: Calendar,
    title: "Never Miss Out",
    description: "All shooting events, competitions, and training from every club in the valley."
  },
  {
    icon: ShoppingCart,
    title: "Book & Buy",
    description: "Training, gunsmithing, gear - book services and buy accessories in one place."
  },
  {
    icon: Share2,
    title: "Connect & Share",
    description: "Discussion, tips, and classifieds - the social hub for Treasure Valley."
  },
  {
    icon: Bell,
    title: "Stay Informed",
    description: "Idaho gun laws, safety guides, reviews, and comprehensive firearms information."
  },
  {
    icon: Building2,
    title: "Build The Brand",
    description: "High-quality support and new revenue generation for participating vendors."
  }
]


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="px-[var(--space-md)] py-[var(--space-3xl)]">
        <div className="max-w-6xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="mb-[var(--space-xl)]">
            <Badge className="bg-brass-yellow text-gunmetal-black px-[var(--space-lg)] py-[var(--space-sm)] text-sm font-rajdhani font-bold uppercase tracking-wide">
              Coming Soon
            </Badge>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-rajdhani font-bold text-gunmetal-black tracking-tight leading-none mb-[var(--space-lg)]">
            THE BOISE<br />GUN CLUB
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl font-rajdhani font-medium text-case-hardened uppercase tracking-wider mb-[var(--space-xl)]">
            A Treasure Valley Firearm & Firearm Sport Collective
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg font-noto-sans text-case-hardened leading-relaxed max-w-4xl mx-auto">
            The comprehensive digital hub uniting ALL Treasure Valley firearms communities. Featuring unified events, all regional businesses, and connecting enthusiasts, families, and professionals across Idaho's premier firearms region.
          </p>
        </div>
      </section>
      
      {/* Feature Cards Grid */}
      <section className="px-[var(--space-md)] py-[var(--space-2xl)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-xl)]">
            
            <AnimatedSplashCard>
              <div className="text-center">
                <Badge className="mb-[var(--space-base)] bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30 text-xs">
                  Directory Included
                </Badge>
                <Search className="h-12 w-12 text-brass-yellow mx-auto mb-[var(--space-base)]" />
                <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-sm)]">
                  Find Local Experts
                </h3>
                <p className="text-sm font-noto-sans text-case-hardened leading-relaxed mb-[var(--space-base)]">
                  Complete directory of gun shops, ranges, instructors, and gunsmiths throughout the valley.
                </p>
                <Button variant="ghost" size="sm" className="text-xs text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                  Learn More
                </Button>
              </div>
            </AnimatedSplashCard>

            <AnimatedSplashCard>
              <div className="text-center">
                <Badge className="mb-[var(--space-base)] bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30 text-xs">
                  Event Listings
                </Badge>
                <Calendar className="h-12 w-12 text-brass-yellow mx-auto mb-[var(--space-base)]" />
                <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-sm)]">
                  Never Miss Out
                </h3>
                <p className="text-sm font-noto-sans text-case-hardened leading-relaxed mb-[var(--space-base)]">
                  All shooting events, competitions, and training from every club in the valley.
                </p>
                <Button variant="ghost" size="sm" className="text-xs text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                  Learn More
                </Button>
              </div>
            </AnimatedSplashCard>

            <AnimatedSplashCard>
              <div className="text-center">
                <Badge className="mb-[var(--space-base)] bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30 text-xs">
                  Service Marketplace
                </Badge>
                <ShoppingCart className="h-12 w-12 text-brass-yellow mx-auto mb-[var(--space-base)]" />
                <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-sm)]">
                  Book & Buy
                </h3>
                <p className="text-sm font-noto-sans text-case-hardened leading-relaxed mb-[var(--space-base)]">
                  Training, gunsmithing, gear - book services and buy accessories in one place.
                </p>
                <Button variant="ghost" size="sm" className="text-xs text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                  Learn More
                </Button>
              </div>
            </AnimatedSplashCard>

            <AnimatedSplashCard>
              <div className="text-center">
                <Badge className="mb-[var(--space-base)] bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30 text-xs">
                  Community Forum
                </Badge>
                <Share2 className="h-12 w-12 text-brass-yellow mx-auto mb-[var(--space-base)]" />
                <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-sm)]">
                  Connect & Share
                </h3>
                <p className="text-sm font-noto-sans text-case-hardened leading-relaxed mb-[var(--space-base)]">
                  Discussion, tips, and classifieds - the social hub for Treasure Valley.
                </p>
                <Button variant="ghost" size="sm" className="text-xs text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                  Learn More
                </Button>
              </div>
            </AnimatedSplashCard>

            <AnimatedSplashCard>
              <div className="text-center">
                <Badge className="mb-[var(--space-base)] bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30 text-xs">
                  Content Engine
                </Badge>
                <Bell className="h-12 w-12 text-brass-yellow mx-auto mb-[var(--space-base)]" />
                <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-sm)]">
                  Stay Informed
                </h3>
                <p className="text-sm font-noto-sans text-case-hardened leading-relaxed mb-[var(--space-base)]">
                  Idaho gun laws, safety guides, reviews, and comprehensive firearms information.
                </p>
                <Button variant="ghost" size="sm" className="text-xs text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                  Learn More
                </Button>
              </div>
            </AnimatedSplashCard>

            <AnimatedSplashCard>
              <div className="text-center">
                <Badge className="mb-[var(--space-base)] bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30 text-xs">
                  Vendor Support
                </Badge>
                <Building2 className="h-12 w-12 text-brass-yellow mx-auto mb-[var(--space-base)]" />
                <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-sm)]">
                  Build The Brand
                </h3>
                <p className="text-sm font-noto-sans text-case-hardened leading-relaxed mb-[var(--space-base)]">
                  High-quality support and new revenue generation for participating vendors.
                </p>
                <Button variant="ghost" size="sm" className="text-xs text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black">
                  Learn More
                </Button>
              </div>
            </AnimatedSplashCard>

          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="px-[var(--space-md)] py-[var(--space-3xl)] bg-gradient-hero-warm">
        <div className="max-w-2xl mx-auto">
          <AnimatedSplashCard className="text-center">
            <div className="space-y-[var(--space-lg)]">
              <div>
                <h2 className="text-2xl md:text-3xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                  Get Notified When We Launch
                </h2>
                <p className="text-base font-noto-sans text-case-hardened">
                  Be the first to gain when Boise's greatest firearms community platform goes live. Get the inside scoop on the exclusive opening events and early access.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-[var(--space-base)] max-w-md mx-auto">
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white border-brass-yellow/30 focus:border-brass-yellow"
                />
                <Button className="bg-brass-yellow text-gunmetal-black hover:bg-copper-orange font-rajdhani font-semibold whitespace-nowrap">
                  Get In Touch
                </Button>
              </div>
            </div>
          </AnimatedSplashCard>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="px-[var(--space-md)] py-[var(--space-3xl)]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-[var(--space-lg)]">
            <h2 className="text-xl font-rajdhani font-bold text-gunmetal-black">
              The Vision
            </h2>
            <div className="space-y-[var(--space-base)] text-sm font-noto-sans text-case-hardened leading-relaxed">
              <p>
                The Boise Gun Club is transforming into Treasure Valley's first comprehensive firearms community platform. What started as a local club will become a digital ecosystem that connects gun shops, enthusiasts from every organization and sporting discipline across Idaho's premier region.
              </p>
              <p>
                Our platform will feature a true unified calendar - from BGC trap shoots to Capitol City competition, Complete Success Academy training, community forum, service marketplace, and educational resource center. From finding local gunsmith to coordinating community events.
              </p>
              <p>
                The club itself will remain BGC's distinct club unified calendar and core principles. Together, families, and enthusiasts from every discipline can find supportive, safety-focused community that serve professionals and enthusiasts from every firearms community in Treasure Valley, that unite safety 1st principles and family-friendly values.
              </p>
            </div>
            
            <div className="flex justify-between items-center pt-[var(--space-lg)] border-t border-brass-yellow/20">
              <div className="text-xs font-noto-sans text-case-hardened">
                © 2025 TheBoiseGunClub. All rights reserved.
              </div>
              <div className="text-xs font-noto-sans text-case-hardened">
                Proudly serving Idaho's firearms community.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}