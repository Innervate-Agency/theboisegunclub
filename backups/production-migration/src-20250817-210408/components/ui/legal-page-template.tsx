'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { 
  ChevronRight, ArrowLeft, Scale, Shield, FileText, 
  Clock, Mail, Phone, ExternalLink
} from 'lucide-react'
import Link from 'next/link'

interface LegalPageTemplateProps {
  title: string
  description: string
  lastUpdated: string
  effectiveDate: string
  contactEmail?: string
  contactPhone?: string
  children: React.ReactNode
  relatedPages?: Array<{
    title: string
    href: string
    description: string
  }>
}

export default function LegalPageTemplate({
  title,
  description,
  lastUpdated,
  effectiveDate,
  contactEmail = "legal@boiseguncollective.com",
  contactPhone,
  children,
  relatedPages = []
}: LegalPageTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-card to-muted/50">
      <SiteNavigation />
      
      {/* Legal Page Hero */}
      <section className="relative overflow-hidden px-md py-lg border-b border-border">
        <div className="container mx-auto max-w-site relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-xs text-sm text-muted-foreground mb-base">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/legal" className="hover:text-foreground transition-colors">
              Legal
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{title}</span>
          </div>
          
          {/* Back Button */}
          <div className="mb-lg">
            <Link href="/">
              <Button variant="ghost" className="gap-xs">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Page Header - Left Side */}
            <div className="lg:col-span-2 space-y-lg">
              {/* Legal Badge */}
              <div className="flex items-center gap-base">
                <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
                  <Scale className="h-4 w-4 mr-xs" />
                  Legal Document
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Version 1.0
                </Badge>
              </div>
              
              {/* Title and Description */}
              <div className="space-y-base">
                <h1 className="font-rajdhani text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {title}
                </h1>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
              
              {/* Legal Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-base p-base bg-muted/50 rounded-xs border">
                <div className="flex items-center gap-xs">
                  <Clock className="h-4 w-4 text-slate-blue" />
                  <div className="text-body-sm">
                    <span className="text-muted-foreground">Effective Date:</span>
                    <span className="ml-xs font-medium">{effectiveDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-xs">
                  <FileText className="h-4 w-4 text-slate-blue" />
                  <div className="text-body-sm">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span className="ml-xs font-medium">{lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Card - Right Side */}
            <div className="lg:col-span-1">
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani text-heading-sm flex items-center gap-xs">
                    <Shield className="h-5 w-5 text-slate-blue" />
                    Legal Questions?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-base">
                  <p className="text-body-sm text-muted-foreground">
                    If you have questions about this document or need legal clarification, please contact us.
                  </p>
                  <div className="space-y-base">
                    <div className="flex items-center gap-xs">
                      <Mail className="h-4 w-4 text-slate-blue" />
                      <a 
                        href={`mailto:${contactEmail}`}
                        className="text-body-sm text-slate-blue hover:underline"
                      >
                        {contactEmail}
                      </a>
                    </div>
                    {contactPhone && (
                      <div className="flex items-center gap-xs">
                        <Phone className="h-4 w-4 text-slate-blue" />
                        <a 
                          href={`tel:${contactPhone}`}
                          className="text-body-sm text-slate-blue hover:underline"
                        >
                          {contactPhone}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="pt-base border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <strong>Boise Gun Collective, LLC</strong><br />
                      Idaho Limited Liability Company
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="py-xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
            {/* Legal Content */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-rajdhani prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-body-base prose-p:leading-relaxed
                prose-a:text-slate-blue prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-slate-blue/30
                prose-blockquote:bg-muted/50 prose-blockquote:px-base prose-blockquote:py-sm
                prose-code:bg-muted prose-code:px-xs prose-code:py-micro prose-code:rounded-xs
                prose-ol:text-body-base prose-ul:text-body-base
                prose-li:text-body-base prose-li:leading-relaxed">
                {children}
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-lg">
              {/* Table of Contents */}
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani text-heading-sm">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-xs">
                  <p className="text-body-sm text-muted-foreground mb-base">
                    Use your browser's scroll or find function to navigate this document.
                  </p>
                  <div className="space-y-xs text-body-sm">
                    <div className="text-muted-foreground">Common sections:</div>
                    <ul className="space-y-xs text-slate-blue">
                      <li>• Overview</li>
                      <li>• Your Rights</li>
                      <li>• Our Obligations</li>
                      <li>• Contact Information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {/* Related Legal Pages */}
              {relatedPages.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani text-heading-sm">Related Legal Documents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-base">
                    {relatedPages.map((page) => (
                      <Link key={page.href} href={page.href}>
                        <div className="p-base border border-border rounded-xs hover:bg-muted/50 transition-colors cursor-pointer">
                          <div className="font-medium text-body-sm text-slate-blue hover:underline">
                            {page.title}
                          </div>
                          <p className="text-xs text-muted-foreground mt-xs">
                            {page.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
              
              {/* Legal Notice */}
              <Card className="shadow-present border-rusty-orange/20">
                <CardContent className="p-base">
                  <div className="text-center space-y-xs">
                    <div className="text-xs text-muted-foreground">Legal Notice</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      This document constitutes a legally binding agreement. 
                      By using our services, you agree to these terms.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  )
}