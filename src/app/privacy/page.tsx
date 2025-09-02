// 🚧 MOCK PAGE - NEEDS POLISHING/LEGAL REVIEW 🚧
// This page was automatically generated to resolve broken links
// TODO: Replace with proper legal content reviewed by attorney

import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Privacy Policy - The Boise Gun Club',
  description: 'Privacy policy and data protection information for The Boise Gun Club platform.',
}

export default function PrivacyPage() {
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
            This privacy policy is a placeholder created to resolve broken links. 
            It requires proper legal review and completion before production use.
          </p>
        </div>

        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <ShieldCheckIcon className="h-8 w-8 text-slate-blue" />
            <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
              Privacy Policy
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Privacy Policy
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Your privacy matters to us. This policy outlines how we collect, use, and protect 
            your information when you use The Boise Gun Club platform.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <div className="space-y-2xl">
            <section>
              <h2 className="h2-section text-card-foreground">Information We Collect</h2>
              <p className="body-regular text-muted-foreground">
                We collect information you provide directly, such as when you create an account, 
                contact us, or participate in community discussions. This may include your name, 
                email address, and any content you submit.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">How We Use Your Information</h2>
              <p className="body-regular text-muted-foreground">
                We use your information to provide our services, communicate with you, 
                and improve our platform. We never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Data Security</h2>
              <p className="body-regular text-muted-foreground">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Idaho State Compliance</h2>
              <p className="body-regular text-muted-foreground">
                As an Idaho-focused platform, we comply with applicable state and federal 
                privacy laws, including requirements related to firearms-related businesses.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Contact Us</h2>
              <p className="body-regular text-muted-foreground">
                If you have questions about this privacy policy, please contact us at{' '}
                <a href="mailto:privacy@theboisegunclub.com" className="text-slate-blue hover:text-slate-blue/80">
                  privacy@theboisegunclub.com
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Back Links */}
        <div className="mt-3xl text-center">
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <Link href="/legal">
              <button className="bg-slate-blue text-white hover:bg-slate-blue/90 px-base py-sm rounded-xs">
                View All Legal Documents
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-slate-blue/30 text-slate-blue hover:bg-slate-blue hover:text-white px-base py-sm rounded-xs">
                Contact Legal Team
              </button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}