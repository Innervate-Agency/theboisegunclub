// 🚧 MOCK PAGE - NEEDS POLISHING 🚧
import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Events Help - The Boise Gun Club',
  description: 'Help guide for finding and participating in Idaho firearms events.',
}

export default function EventsHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <BookOpenIcon className="h-8 w-8 text-slate-blue" />
            <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">Events Help</Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">Events & Registration Help</h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Complete guide to finding, registering for, and participating in Idaho firearms events.
          </p>
        </div>
        <div className="text-center">
          <p className="body-regular text-muted-foreground mb-lg">This page is under construction.</p>
          <Link href="/help"><button className="bg-slate-blue text-white hover:bg-slate-blue/90 px-base py-sm rounded-xs">Back to Help Center</button></Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}