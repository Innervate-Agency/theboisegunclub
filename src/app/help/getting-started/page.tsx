// 🚧 MOCK PAGE - NEEDS POLISHING 🚧
// This page was automatically generated to resolve broken links
// TODO: Expand with comprehensive getting started guide

import { Metadata } from 'next'
import Link from 'next/link'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { AcademicCapIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Getting Started Guide - The Boise Gun Club',
  description: 'Complete guide to getting started with The Boise Gun Club platform.',
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        {/* MOCK PAGE NOTICE */}
        <div className="bg-sandy-ochre/10 border border-sandy-ochre/30 rounded-sm p-base mb-2xl">
          <div className="flex items-center gap-sm mb-sm">
            <ExclamationTriangleIcon className="h-5 w-5 text-sandy-ochre" />
            <span className="h6-micro text-sandy-ochre">MOCK PAGE - NEEDS CONTENT EXPANSION</span>
          </div>
          <p className="body-small text-muted-foreground">
            This getting started guide is a placeholder. It needs comprehensive content 
            covering platform features and Idaho firearms community information.
          </p>
        </div>

        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <AcademicCapIcon className="h-8 w-8 text-rusty-orange" />
            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
              Getting Started
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Getting Started Guide
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Welcome to The Boise Gun Club! This guide will help you navigate our platform 
            and connect with Idaho's firearms community.
          </p>
        </div>

        {/* Quick Start Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-3xl">
          {[
            {
              step: '1',
              title: 'Explore the Directory',
              description: 'Find verified Idaho firearms businesses, ranges, and services near you.'
            },
            {
              step: '2',
              title: 'Check Events',
              description: 'Discover competitions, training, and community events across the state.'
            },
            {
              step: '3',
              title: 'Join Discussions',
              description: 'Participate in forums and connect with fellow Idaho gun owners.'
            }
          ].map((item) => (
            <Card key={item.step} className="mica-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-rusty-orange/20 rounded-sm flex items-center justify-center mx-auto mb-sm">
                  <span className="h4-component text-rusty-orange font-bold">{item.step}</span>
                </div>
                <CardTitle className="h4-component text-card-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-small text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Features */}
        <div className="space-y-2xl">
          <section>
            <h2 className="h2-section text-card-foreground mb-base">Platform Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {[
                { feature: 'Business Directory', description: '594+ verified Idaho firearms businesses' },
                { feature: 'Event Calendar', description: '130+ competitions and training events' },
                { feature: 'Community Forums', description: 'Idaho-focused discussions and advice' },
                { feature: 'Intel Center', description: 'Range conditions and weather information' },
                { feature: 'Buy & Sell', description: 'Local deals and marketplace connections' },
                { feature: 'The Armory', description: 'Safety guides and legal information' }
              ].map((item) => (
                <div key={item.feature} className="flex items-start gap-sm">
                  <CheckCircleIcon className="h-5 w-5 text-ayu-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="h5-small text-card-foreground">{item.feature}</h3>
                    <p className="body-small text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Next Steps */}
        <div className="mt-3xl text-center">
          <h2 className="h3-subsection text-card-foreground mb-base">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <Link href="/directory">
              <button className="bg-rusty-orange text-white hover:bg-rusty-orange/90 px-base py-sm rounded-xs">
                Browse Directory
              </button>
            </Link>
            <Link href="/events">
              <button className="border border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-white px-base py-sm rounded-xs">
                View Events
              </button>
            </Link>
            <Link href="/help">
              <button className="border border-slate-blue/30 text-slate-blue hover:bg-slate-blue hover:text-white px-base py-sm rounded-xs">
                More Help Topics
              </button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}