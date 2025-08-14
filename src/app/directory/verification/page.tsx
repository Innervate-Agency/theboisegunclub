'use client'

import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Shield, FileText, AlertTriangle, XCircle } from 'lucide-react'

export default function VerificationPage() {
  return (
    <>
      <SiteNavigation variant="premium" sticky={true} />
      <div className="min-h-screen bg-background theme-directory">
        <div className="container mx-auto max-w-4xl py-2xl px-md">
          <div className="space-y-lg">
            <div className="text-center">
              <Shield className="mx-auto h-12 w-12 text-nav-directory" />
              <h1 className="font-rajdhani text-4xl font-bold mt-base">Our Verification Process</h1>
              <p className="text-lg text-muted-foreground mt-sm">
                Building a trusted community of firearms professionals in the Treasure Valley.
              </p>
            </div>

            <Card className="mica shadow-present rounded-xs">
              <CardHeader>
                <CardTitle className="font-rajdhani text-2xl">The Idaho Steward Standard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-md text-lg">
                <p>
                  Here in Idaho, we value straight talk and a firm handshake. We believe that when a man or woman hangs a shingle out, they ought to stand by their word. That's the principle behind our FFL verification process. It ain't some fancy algorithm from back East; it's a common-sense approach to making sure the folks you do business with are who they say they are.
                </p>
                <p>
                  We take the time to check two key things for every single business listed in our directory. First, we look at the federal records from the ATF to make sure they have a valid Federal Firearms License. That's the baseline. But we don't stop there. We then cross-reference that with the Idaho Secretary of State's records to make sure they're registered and in good standing to do business right here in our state. It's about accountability, plain and simple.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-lg">
              <Card className="mica shadow-present rounded-xs">
                <CardHeader>
                  <CardTitle className="font-rajdhani text-xl flex items-center gap-sm">
                    <FileText className="text-nav-directory" />
                    Federal & State Records
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-sm">
                  <p>We start with the official list of Federal Firearms Licensees from the ATF. Then, we verify that the business is also registered and in good standing with the Idaho Secretary of State. This two-step process ensures that every FFL listed is not only federally licensed but also legally recognized to operate in Idaho.</p>
                </CardContent>
              </Card>
              <Card className="mica shadow-present rounded-xs">
                <CardHeader>
                  <CardTitle className="font-rajdhani text-xl flex items-center gap-sm">
                    <CheckCircle className="text-sagebrush-green" />
                    Verification Levels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-sm">
                  <p>We use a clear and transparent system to show you our confidence in each listing. From 'Fully Verified' to 'ATF Record Only', we provide the information you need to make an informed decision. We believe in transparency, and our verification levels reflect that commitment.</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="font-rajdhani text-3xl font-bold text-center mb-lg">Our Verification Tiers</h2>
              <div className="space-y-md">
                <Card className="mica shadow-present rounded-xs">
                  <CardContent className="pt-base flex items-start gap-base">
                    <CheckCircle className="h-8 w-8 text-sagebrush-green flex-shrink-0 mt-xs" />
                    <div>
                      <h3 className="font-rajdhani font-bold text-xl">Fully Verified</h3>
                      <p className="text-muted-foreground">These businesses have an active ATF license, an active registration with the Idaho Secretary of State, and a verifiable public presence like a storefront or an active website. This is our highest level of confidence.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mica shadow-present rounded-xs">
                  <CardContent className="pt-base flex items-start gap-base">
                    <Shield className="h-8 w-8 text-slate-blue flex-shrink-0 mt-xs" />
                    <div>
                      <h3 className="font-rajdhani font-bold text-xl">ATF/SOS Verified</h3>
                      <p className="text-muted-foreground">These businesses have an active ATF license and an active registration with the Idaho Secretary of State, but may not have a significant public presence. This is common for home-based FFLs or specialized manufacturers.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mica shadow-present rounded-xs">
                  <CardContent className="pt-base flex items-start gap-base">
                    <AlertTriangle className="h-8 w-8 text-warning-amber flex-shrink-0 mt-xs" />
                    <div>
                      <h3 className="font-rajdhani font-bold text-xl">ATF Record Only - Unverified</h3>
                      <p className="text-muted-foreground">These businesses appear on the ATF list but lack a corresponding active registration with the Idaho Secretary of State. This is a red flag, and we recommend further due diligence before engaging with these businesses.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mica shadow-present rounded-xs">
                  <CardContent className="pt-base flex items-start gap-base">
                    <XCircle className="h-8 w-8 text-canyon-clay flex-shrink-0 mt-xs" />
                    <div>
                      <h3 className="font-rajdhani font-bold text-xl">Inactive/Closed</h3>
                      <p className="text-muted-foreground">These businesses have an expired FFL and/or a dissolved state business registration. They are confirmed to be non-operational as FFLs.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter currentPage="directory" />
    </>
  )
}
