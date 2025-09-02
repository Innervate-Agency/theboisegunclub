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
  title: 'Cookie Policy - The Boise Gun Club',
  description: 'Cookie policy and tracking information for The Boise Gun Club platform.',
}

export default function CookiesPage() {
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
            This cookie policy is a placeholder created to resolve broken links. 
            It requires proper legal review and completion before production use.
          </p>
        </div>

        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <DocumentTextIcon className="h-8 w-8 text-ayu-green" />
            <Badge className="bg-ayu-green/20 text-ayu-green border-ayu-green/30">
              Cookie Policy
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Cookie Policy
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            This policy explains how we use cookies and similar tracking technologies 
            on The Boise Gun Club platform.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <div className="space-y-2xl">
            <section>
              <h2 className="h2-section text-card-foreground">What Are Cookies</h2>
              <p className="body-regular text-muted-foreground">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better user experience and understand how our site is used.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Types of Cookies We Use</h2>
              <div className="space-y-base">
                <div>
                  <h3 className="h4-component text-card-foreground">Essential Cookies</h3>
                  <p className="body-regular text-muted-foreground">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="h4-component text-card-foreground">Analytics Cookies</h3>
                  <p className="body-regular text-muted-foreground">
                    We use these to understand how visitors interact with our website and improve our services.
                  </p>
                </div>
                <div>
                  <h3 className="h4-component text-card-foreground">Functional Cookies</h3>
                  <p className="body-regular text-muted-foreground">
                    These enable enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Managing Cookies</h2>
              <p className="body-regular text-muted-foreground">
                You can control and manage cookies through your browser settings. Note that disabling 
                cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Third-Party Services</h2>
              <p className="body-regular text-muted-foreground">
                We may use third-party services for analytics and functionality. These services 
                may set their own cookies in accordance with their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Contact Us</h2>
              <p className="body-regular text-muted-foreground">
                If you have questions about our cookie policy, please contact us at{' '}
                <a href="mailto:privacy@theboisegunclub.com" className="text-ayu-green hover:text-ayu-green/80">
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
              <button className="bg-ayu-green text-white hover:bg-ayu-green/90 px-base py-sm rounded-xs">
                View All Legal Documents
              </button>
            </Link>
            <Link href="/privacy">
              <button className="border border-ayu-green/30 text-ayu-green hover:bg-ayu-green hover:text-white px-base py-sm rounded-xs">
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