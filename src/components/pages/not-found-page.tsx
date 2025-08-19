'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowLeftIcon as ArrowLeft, 
  HomeIcon as Home, 
  MagnifyingGlassIcon as Search, 
  MapIcon as Map, 
  BookOpenIcon as BookOpen, 
  ShieldCheckIcon as Shield, 
  PlusCircleIcon as Target, 
  ExclamationTriangleIcon as AlertTriangle, 
  CompassIcon as Compass
} from '@heroicons/react/24/outline'

interface QuickNavCard {
  href: string
  icon: React.ElementType
  title: string
  description: string
  theme: string
}

const quickNavCards: QuickNavCard[] = [
  {
    href: '/intel',
    icon: Map,
    title: 'Range Intel',
    description: 'Find shooting locations and range conditions',
    theme: 'intel'
  },
  {
    href: '/guides',
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Idaho gun laws and safety guides',
    theme: 'guides'
  },
  {
    href: '/armory',
    icon: Shield,
    title: 'The Armory',
    description: 'Equipment reviews and tactical guides',
    theme: 'armory'
  },
  {
    href: '/directory',
    icon: Compass,
    title: 'Business Directory',
    description: 'Find verified Idaho firearms dealers',
    theme: 'directory'
  }
]

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-card to-muted/50">
      {/* 404 Hero Section */}
      <section className="relative overflow-hidden px-container py-section-2xl">
        <div className="container mx-auto max-w-site relative z-10">
          <div className="text-center space-y-section-lg">
            {/* 404 Display */}
            <div className="space-y-content-lg">
              <div className="relative">
                <h1 className="font-rajdhani text-9xl md:text-[12rem] font-black text-muted-foreground/20 select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-rusty-orange/10 p-content-md rounded-full border-2 border-rusty-orange/20">
                    <Target className="h-16 w-16 text-rusty-orange rotate-45" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-content-base">
                <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
                  <AlertTriangle className="h-4 w-4 mr-xs" />
                  Target Not Found
                </Badge>
                <h2 className="font-rajdhani text-3xl md:text-5xl font-bold text-card-foreground">
                  Off Target, Partner
                </h2>
                <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Looks like you've wandered into uncharted territory. The page you're looking for has gone missing from our digital range. 
                  Let's get you back on target with the Treasure Valley firearms community.
                </p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-content-base justify-center">
              <Link href="/">
                <Button size="lg" className="bg-nav-home text-white hover:bg-nav-home/90 font-rajdhani font-bold gap-xs">
                  <Home className="h-4 w-4" />
                  Back to Home Base
                </Button>
              </Link>
              <Link href="/directory">
                <Button variant="outline" size="lg" className="gap-xs">
                  <Search className="h-4 w-4" />
                  Find Dealers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Navigation Cards */}
      <section className="px-container pb-section-2xl">
        <div className="container mx-auto max-w-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-grid-base">
            {quickNavCards.map((card) => {
              const Icon = card.icon
              return (
                <Link key={card.href} href={card.href}>
                  <Card 
                    variant="tactical" 
                    tacticalTheme="default" 
                    className={`group border-nav-${card.theme}/30`}
                  >
                    <CardContent className="p-content-lg text-center space-y-content-base">
                      <div className={`bg-nav-${card.theme}/20 p-content-base rounded-xs w-fit mx-auto`}>
                        <Icon className={`h-8 w-8 text-nav-${card.theme}`} />
                      </div>
                      <div>
                        <h3 className={`font-rajdhani font-bold text-heading-sm text-nav-${card.theme} group-hover:text-nav-${card.theme}/80 transition-colors`}>
                          {card.title}
                        </h3>
                        <p className="text-body-sm text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}