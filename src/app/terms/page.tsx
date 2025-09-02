// 🚧 MOCK PAGE - NEEDS POLISHING/LEGAL REVIEW 🚧
// This page was automatically generated to resolve broken links
// TODO: Replace with proper legal content reviewed by attorney

import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { DocumentTextIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Terms of Service - The Boise Gun Club',
  description: 'Terms of service and user agreement for The Boise Gun Club platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        {/* MOCK PAGE NOTICE */}
        <div className="bg-sandy-ochre/10 border border-sandy-ochre/30 rounded-sm p-base mb-2xl">
          <div className="flex items-center gap-sm mb-sm">
            <ExclamationTriangleIcon className="h-5 w-5 text-sandy-ochre" />
            <span className="h6-micro text-sandy-ochre">MOCK PAGE - NEEDS LEGAL REVIEW</span>
          </div>
          <p className="body-small text-muted-foreground">
            These terms of service are a placeholder created to resolve broken links. 
            They require proper legal review and completion before production use.
          </p>
        </div>

        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <DocumentTextIcon className="h-8 w-8 text-rusty-orange" />
            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
              Terms of Service
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Terms of Service
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of The Boise Gun Club platform and outline 
            the rights and responsibilities of all community members.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <div className="space-y-2xl">
            <section>
              <h2 className="h2-section text-card-foreground">Acceptance of Terms</h2>
              <p className="body-regular text-muted-foreground">
                By accessing and using The Boise Gun Club platform, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Community Standards</h2>
              <p className="body-regular text-muted-foreground">
                Our platform is built for the Idaho firearms community. We expect all users to 
                engage respectfully, follow all applicable firearms laws, and prioritize safety 
                in all discussions and activities.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Prohibited Activities</h2>
              <p className="body-regular text-muted-foreground">
                Users may not engage in illegal activities, harassment, spam, or any behavior 
                that violates federal, state, or local firearms regulations.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Limitation of Liability</h2>
              <p className="body-regular text-muted-foreground">
                The Boise Gun Club platform is provided "as is" without warranties. We are not 
                liable for any damages arising from use of our services.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Idaho Law Governance</h2>
              <p className="body-regular text-muted-foreground">
                These terms are governed by Idaho state law. Any disputes will be resolved 
                in Idaho courts.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Contact Information</h2>
              <p className="body-regular text-muted-foreground">
                Questions about these terms should be directed to{' '}
                <a href="mailto:legal@theboisegunclub.com" className="text-rusty-orange hover:text-rusty-orange/80">
                  legal@theboisegunclub.com
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Back Links */}
        <div className="mt-3xl text-center">
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <Link href="/legal">
              <button className="bg-rusty-orange text-white hover:bg-rusty-orange/90 px-base py-sm rounded-xs">
                View All Legal Documents
              </button>
            </Link>
            <Link href="/privacy">
              <button className="border border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-white px-base py-sm rounded-xs">
                Privacy Policy
              </button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}