// 🚧 MOCK PAGE - NEEDS POLISHING 🚧
// This page was automatically generated to resolve broken links
// TODO: Add comprehensive firearms safety information and Idaho-specific guidelines

import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Safety Guidelines - The Boise Gun Club',
  description: 'Firearms safety guidelines and best practices for the Idaho community.',
}

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        {/* MOCK PAGE NOTICE */}
        <div className="bg-sandy-ochre/10 border border-sandy-ochre/30 rounded-sm p-base mb-2xl">
          <div className="flex items-center gap-sm mb-sm">
            <ExclamationTriangleIcon className="h-5 w-5 text-sandy-ochre" />
            <span className="h6-micro text-sandy-ochre">MOCK PAGE - NEEDS SAFETY EXPERT REVIEW</span>
          </div>
          <p className="body-small text-muted-foreground">
            This safety guide is a placeholder. It requires review by certified safety 
            instructors and Idaho-specific legal compliance verification.
          </p>
        </div>

        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <ShieldCheckIcon className="h-8 w-8 text-ayu-green" />
            <Badge className="bg-ayu-green/20 text-ayu-green border-ayu-green/30">
              Safety First
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Firearms Safety Guidelines
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Safety is our top priority. These guidelines help ensure responsible 
            firearms handling and Idaho legal compliance.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <div className="space-y-2xl">
            <section>
              <h2 className="h2-section text-card-foreground">The Four Fundamental Rules</h2>
              <div className="space-y-base">
                <div className="flex items-start gap-sm">
                  <div className="w-8 h-8 bg-ayu-green/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="body-small text-ayu-green font-bold">1</span>
                  </div>
                  <p className="body-regular text-muted-foreground">
                    <strong>Treat every firearm as if it were loaded</strong> - Never assume a firearm is unloaded.
                  </p>
                </div>
                <div className="flex items-start gap-sm">
                  <div className="w-8 h-8 bg-ayu-green/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="body-small text-ayu-green font-bold">2</span>
                  </div>
                  <p className="body-regular text-muted-foreground">
                    <strong>Never point at anything you don't intend to destroy</strong> - Always be aware of muzzle direction.
                  </p>
                </div>
                <div className="flex items-start gap-sm">
                  <div className="w-8 h-8 bg-ayu-green/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="body-small text-ayu-green font-bold">3</span>
                  </div>
                  <p className="body-regular text-muted-foreground">
                    <strong>Keep your finger off the trigger</strong> - Until your sights are on target and ready to shoot.
                  </p>
                </div>
                <div className="flex items-start gap-sm">
                  <div className="w-8 h-8 bg-ayu-green/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="body-small text-ayu-green font-bold">4</span>
                  </div>
                  <p className="body-regular text-muted-foreground">
                    <strong>Be sure of your target and what's beyond it</strong> - Consider backdrop and potential ricochets.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Idaho-Specific Considerations</h2>
              <p className="body-regular text-muted-foreground">
                Idaho has specific laws regarding firearms carry, storage, and use. Always stay current 
                with state and local regulations, especially regarding public lands shooting and transportation.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Range Safety</h2>
              <p className="body-regular text-muted-foreground">
                When visiting Idaho shooting ranges, follow all posted range rules, wear appropriate 
                eye and ear protection, and respect range officers' instructions at all times.
              </p>
            </section>
          </div>
        </div>

        {/* Back Links */}
        <div className="mt-3xl text-center">
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <Link href="/help">
              <button className="bg-ayu-green text-white hover:bg-ayu-green/90 px-base py-sm rounded-xs">
                Back to Help Center
              </button>
            </Link>
            <Link href="/armory">
              <button className="border border-ayu-green/30 text-ayu-green hover:bg-ayu-green hover:text-white px-base py-sm rounded-xs">
                Browse Armory Guides
              </button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}