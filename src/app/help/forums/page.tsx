// 🚧 MOCK PAGE - NEEDS POLISHING 🚧
import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = { title: 'Forums Help - The Boise Gun Club', description: 'Guide to community forums and discussions.' }

export default function ForumsHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-ayu-teal" />
            <Badge className="bg-ayu-teal/20 text-ayu-teal border-ayu-teal/30">Forums</Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">Forums & Community Help</h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">Getting the most out of community discussions and knowledge sharing.</p>
        </div>
        <div className="text-center">
          <p className="body-regular text-muted-foreground mb-lg">This page is under construction.</p>
          <Link href="/forums"><button className="bg-ayu-teal text-white hover:bg-ayu-teal/90 px-base py-sm rounded-xs">Visit Forums</button></Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}