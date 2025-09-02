// 🚧 MOCK PAGE - NEEDS POLISHING 🚧
import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { CommandLineIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = { title: 'Technical Support - The Boise Gun Club', description: 'Technical troubleshooting and platform assistance.' }

export default function TechnicalHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <CommandLineIcon className="h-8 w-8 text-ayu-purple" />
            <Badge className="bg-ayu-purple/20 text-ayu-purple border-ayu-purple/30">Technical</Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">Technical Support</h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">Troubleshooting, account issues, and platform technical assistance.</p>
        </div>
        <div className="text-center">
          <p className="body-regular text-muted-foreground mb-lg">This page is under construction.</p>
          <Link href="/support"><button className="bg-ayu-purple text-white hover:bg-ayu-purple/90 px-base py-sm rounded-xs">Visit Support Center</button></Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}