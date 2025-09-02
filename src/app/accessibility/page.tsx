// 🚧 MOCK PAGE - NEEDS POLISHING/LEGAL REVIEW 🚧
// This page was automatically generated to resolve broken links
// TODO: Replace with proper accessibility audit and content review

import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { HeartIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Accessibility Statement - The Boise Gun Club',
  description: 'Accessibility commitment and information for The Boise Gun Club platform.',
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        {/* MOCK PAGE NOTICE */}
        <div className="bg-sandy-ochre/10 border border-sandy-ochre/30 rounded-sm p-base mb-2xl">
          <div className="flex items-center gap-sm mb-sm">
            <ExclamationTriangleIcon className="h-5 w-5 text-sandy-ochre" />
            <span className="h6-micro text-sandy-ochre">MOCK PAGE - NEEDS ACCESSIBILITY AUDIT</span>
          </div>
          <p className="body-small text-muted-foreground">
            This accessibility statement is a placeholder created to resolve broken links. 
            It requires proper accessibility audit and completion before production use.
          </p>
        </div>

        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <HeartIcon className="h-8 w-8 text-rusty-orange" />
            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
              Accessibility
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Accessibility Statement
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            We are committed to ensuring The Boise Gun Club platform is accessible to 
            all members of the Idaho firearms community, including people with disabilities.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <div className="space-y-2xl">
            <section>
              <h2 className="h2-section text-card-foreground">Our Commitment</h2>
              <p className="body-regular text-muted-foreground">
                We strive to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards 
                and continuously work to improve the accessibility of our platform for all users.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Accessibility Features</h2>
              <div className="space-y-base">
                <ul className="space-y-sm">
                  <li className="body-regular text-muted-foreground flex items-start gap-sm">
                    <span className="text-rusty-orange">•</span>
                    <span>Keyboard navigation support throughout the platform</span>
                  </li>
                  <li className="body-regular text-muted-foreground flex items-start gap-sm">
                    <span className="text-rusty-orange">•</span>
                    <span>Alternative text for images and icons</span>
                  </li>
                  <li className="body-regular text-muted-foreground flex items-start gap-sm">
                    <span className="text-rusty-orange">•</span>
                    <span>High contrast color schemes and readable fonts</span>
                  </li>
                  <li className="body-regular text-muted-foreground flex items-start gap-sm">
                    <span className="text-rusty-orange">•</span>
                    <span>Screen reader compatibility</span>
                  </li>
                  <li className="body-regular text-muted-foreground flex items-start gap-sm">
                    <span className="text-rusty-orange">•</span>
                    <span>Mobile-friendly responsive design</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Known Limitations</h2>
              <p className="body-regular text-muted-foreground">
                We are continuously working to identify and resolve accessibility barriers. 
                Some features may still present challenges for users with certain disabilities.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Feedback and Support</h2>
              <p className="body-regular text-muted-foreground">
                If you encounter accessibility barriers or need assistance, please contact us. 
                Your feedback helps us improve our platform for everyone.
              </p>
            </section>

            <section>
              <h2 className="h2-section text-card-foreground">Contact Information</h2>
              <p className="body-regular text-muted-foreground">
                For accessibility-related questions or assistance, please contact us at{' '}
                <a href="mailto:accessibility@theboisegunclub.com" className="text-rusty-orange hover:text-rusty-orange/80">
                  accessibility@theboisegunclub.com
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Back Links */}
        <div className="mt-3xl text-center">
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <Link href="/help">
              <button className="bg-rusty-orange text-white hover:bg-rusty-orange/90 px-base py-sm rounded-xs">
                Help Center
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-white px-base py-sm rounded-xs">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}