'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeftIcon, BanknotesIcon, BookOpenIcon, BuildingStorefrontIcon, ChatBubbleBottomCenterTextIcon, CursorArrowRaysIcon, ExclamationTriangleIcon, HomeIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon, PlusCircleIcon, ShieldCheckIcon, TicketIcon, UsersIcon } from '@heroicons/react/24/outline';
import { SiteSearch } from '@/components/ui/site-search'

interface QuickNavCard {
  href: string
  icon: React.ElementType
  title: string
  description: string
  theme: string
}

const quickNavCards: QuickNavCard[] = [
  {
    href: '/events',
    icon: TicketIcon,
    title: 'Events',
    description: 'Competitions & Training',
    theme: 'events'
  },
  {
    href: '/directory',
    icon: MapIcon,
    title: 'Directory',
    description: 'Local Dealers & Services',
    theme: 'directory'
  },
  {
    href: '/armory',
    icon: ShieldCheckIcon,
    title: 'The Armory',
    description: 'Equipment & Reviews',
    theme: 'armory'
  },
  {
    href: '/intel',
    icon: Map,
    title: 'Intel',
    description: 'Range Conditions & Weather',
    theme: 'intel'
  },
  {
    href: '/buysell',
    icon: BuildingStorefrontIcon,
    title: 'Buy & Sell',
    description: 'Buy & Sell Gear',
    theme: 'buysell'
  },
  {
    href: '/forums',
    icon: UsersIcon,
    title: 'Forums',
    description: 'Community Discussion',
    theme: 'forums'
  }
]

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-card to-muted/50">
      {/* 404 Hero Section */}
      <section className="relative overflow-hidden px-6 py-16">
        <div className="container mx-auto max-w-[1440px] relative z-10">
          <div className="text-center space-y-12">
            {/* 404 Display */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="font-rajdhani text-9xl md:text-[12rem] font-black text-muted-foreground/20 select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-rusty-orange/10 p-content-md rounded-full border-2 border-rusty-orange/20">
                    <CursorArrowRaysIcon className="h-16 w-16 text-rusty-orange rotate-45" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
                  CursorArrowRaysIcon Not Found
                </Badge>
                <h2 className="font-rajdhani text-3xl md:text-5xl font-bold text-card-foreground">
                  Off CursorArrowRaysIcon, Partner
                </h2>
                <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Looks like you've wandered into uncharted territory. The page you're looking for has gone missing from our digital range. 
                  Let's get you back on target with the Treasure Valley firearms community.
                </p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-rusty-orange text-white hover:bg-rusty-orange/90 font-rajdhani font-bold gap-2">
                  <HomeIcon className="h-4 w-4" />
                  Back to Home Base
                </Button>
              </Link>
              <Link href="/directory">
                <Button variant="outline" className="border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-white gap-2">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  Find Dealers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation and MagnifyingGlassIcon Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Navigation Links Column */}
            <div className="space-y-4">
              <h3 className="font-rajdhani font-bold text-xl text-card-foreground mb-6">
                Explore Our Community
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickNavCards.map((card) => {
                  const Icon = card.icon
                  return (
                    <Link key={card.href} href={card.href}>
                      <Card 
                        variant="tactical" 
                        tacticalTheme="default" 
                        className={`group border-nav-${card.theme}/30 hover:border-nav-${card.theme}/50 transition-colors`}
                      >
                        <CardContent className="p-4 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className={`bg-nav-${card.theme}/20 p-2 rounded-sm group-hover:bg-nav-${card.theme}/30 transition-colors`}>
                              <Icon className={`h-5 w-5 text-nav-${card.theme}`} />
                            </div>
                            <div>
                              <h4 className={`font-rajdhani font-bold text-nav-${card.theme} group-hover:text-nav-${card.theme}/80 transition-colors`}>
                                {card.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {card.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* MagnifyingGlassIcon Component Column */}
            <div className="space-y-4">
              <h3 className="font-rajdhani font-bold text-xl text-card-foreground mb-6">
                Find What You Need
              </h3>
              <SiteSearch />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}