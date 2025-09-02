// 🚧 MOCK PAGE - NEEDS POLISHING 🚧
import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Community Guidelines - The Boise Gun Club',
  description: 'Community standards and guidelines for The Boise Gun Club platform.',
}

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <ShieldCheckIcon className="h-8 w-8 text-rusty-orange" />
            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">Guidelines</Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">Community Guidelines</h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Community standards, safety protocols, and best practices for platform participation.
          </p>
        </div>
        <div className="text-center">
          <p className="body-regular text-muted-foreground mb-lg">This page is under construction.</p>
          <Link href="/help"><button className="bg-rusty-orange text-white hover:bg-rusty-orange/90 px-base py-sm rounded-xs">Back to Help Center</button></Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}