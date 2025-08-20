'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { ReviewsDisplay } from '@/components/ui/reviews-display'
import MdxContent from '@/components/molecules/MdxContent'
import { 
  ChevronRightIcon, ArrowLeftIcon, MapPinIcon, ClockIcon, PhoneIcon, ExternalLinkIcon,
  StarIcon, ShieldCheckIcon, CheckCircleIcon, GlobeAltIcon, EnvelopeIcon, CalendarIcon, UserGroupIcon,
  AcademicCapIcon, TargetIcon, BuildingStorefrontIcon, WrenchScrewdriverIcon, CreditCardIcon, TagIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

interface BusinessDetailTemplateProps {
  slug: string
  businessName: string
  businessType: string
  description: string
  fullDescription: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  website?: string
  email?: string
  hours: string
  
  // Social proof & verification
  isVerified: boolean
  verificationStatus: string
  googlePlaceId?: string
  rating?: number
  reviewCount?: number
  
  // Services & specialties
  services: string[]
  specialties: string[]
  certifications: string[]
  
  // Tier information
  tier: 'free' | 'copper' | 'silver' | 'gold'
  isSponsored?: boolean
  
  // Additional details
  yearEstablished?: number
  employeeCount?: string
  serviceArea: string[]
  paymentMethods: string[]
  
  // Images and gallery
  logo?: string
  images: string[]
  
  // Related businesses
  relatedBusinesses?: Array<{
    businessName: string
    businessType: string
    slug: string
    tier: string
  }>
}

export function BusinessDetailTemplate({
  businessName,
  businessType,
  description,
  fullDescription,
  address,
  city,
  state,
  zip,
  phone,
  website,
  email,
  hours,
  isVerified,
  verificationStatus,
  googlePlaceId,
  rating,
  reviewCount,
  services,
  specialties,
  certifications,
  tier,
  isSponsored,
  yearEstablished,
  employeeCount,
  serviceArea,
  paymentMethods,
  logo,
  images = [],
  relatedBusinesses = []
}: BusinessDetailTemplateProps) {
  const [reviewsData, setReviewsData] = React.useState<any>(null)
  const [loadingReviews, setLoadingReviews] = React.useState(false)
  
  // Load reviews function
  const loadReviews = React.useCallback(async () => {
    if (!googlePlaceId || loadingReviews) return
    
    setLoadingReviews(true)
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          placeId: googlePlaceId, 
          businessName 
        })
      })
      
      if (response.ok) {
        const data = await response.json()
        setReviewsData(data)
      }
    } catch (error) {
      console.error('Failed to load reviews:', error)
    } finally {
      setLoadingReviews(false)
    }
  }, [googlePlaceId, businessName, loadingReviews])

  // Auto-load reviews if we have a place ID
  React.useEffect(() => {
    if (googlePlaceId) {
      loadReviews()
    }
  }, [googlePlaceId, loadReviews])

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'gold': return 'text-rusty-orange'
      case 'silver': return 'text-slate-blue'
      case 'copper': return 'text-walnut-stock'
      default: return 'text-muted-foreground'
    }
  }

  const getTierBadgeVariant = (tier: string) => {
    switch (tier) {
      case 'gold': return 'elite'
      case 'silver': return 'foothills-purple'
      case 'copper': return 'warm-stone'
      default: return 'default'
    }
  }

  const fullAddress = `${address}, ${city}, ${state} ${zip}`

  return (
    <div className="theme-directory min-h-screen">
      <SiteNavigation />
      
      {/* Business Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-card to-muted/50 px-md pt-mobile-2xl sm:pt-3xl pb-mobile-lg sm:pb-lg">
        <div className="container mx-auto max-w-site relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-xs text-sm text-muted-foreground mb-base">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <Link href="/directory" className="hover:text-nav-directory transition-colors">
              Directory
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-nav-directory font-medium">{businessName}</span>
          </div>
          
          {/* Back Button */}
          <div className="mb-lg">
            <Link href="/directory">
              <Button variant="ghost" className="gap-xs">
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Directory
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Business Header - Left Side */}
            <div className="lg:col-span-2 space-y-lg">
              {/* Business Logo and Name */}
              <div className="flex items-start gap-base">
                {logo && (
                  <div className="w-16 h-16 rounded-xs overflow-hidden flex-shrink-0 bg-muted">
                    <Image
                      src={logo}
                      alt={`${businessName} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h1 className="font-rajdhani text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {businessName}
                  </h1>
                  <p className="text-body-lg text-nav-directory mt-xs font-medium">
                    {businessType}
                  </p>
                  {yearEstablished && (
                    <p className="text-body-sm text-muted-foreground mt-xs">
                      Established {yearEstablished}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Badges and Verification */}
              <div className="flex items-center gap-base flex-wrap">
                <Badge className={`bg-nav-directory/20 text-nav-directory border-nav-directory/30`}>
                  {businessType}
                </Badge>
                {isVerified && (
                  <Badge className="bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30">
                    <ShieldCheckIcon className="h-3 w-3 mr-xs" />
                    Verified
                  </Badge>
                )}
                {tier !== 'free' && (
                  <Badge variant={getTierBadgeVariant(tier)} className="capitalize">
                    <AcademicCapIcon className="h-3 w-3 mr-xs" />
                    {tier} Member
                  </Badge>
                )}
                {isSponsored && (
                  <Badge variant="elite">
                    <StarIcon className="h-3 w-3 mr-xs" />
                    Sponsored
                  </Badge>
                )}
              </div>
              
              {/* Description */}
              <p className="text-body-base text-foreground leading-relaxed">
                {description}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
                {rating && (
                  <div className="text-center p-base bg-muted/50 rounded-xs">
                    <StarIcon className="h-5 w-5 text-nav-directory mx-auto mb-xs" />
                    <div className="text-body-sm font-medium">{rating.toFixed(1)}</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                )}
                {reviewCount && (
                  <div className="text-center p-base bg-muted/50 rounded-xs">
                    <UserGroupIcon className="h-5 w-5 text-nav-directory mx-auto mb-xs" />
                    <div className="text-body-sm font-medium">{reviewCount}</div>
                    <div className="text-xs text-muted-foreground">Reviews</div>
                  </div>
                )}
                <div className="text-center p-base bg-muted/50 rounded-xs">
                  <TargetIcon className="h-5 w-5 text-nav-directory mx-auto mb-xs" />
                  <div className="text-body-sm font-medium">{services.length}</div>
                  <div className="text-xs text-muted-foreground">Services</div>
                </div>
                <div className="text-center p-base bg-muted/50 rounded-xs">
                  <CheckCircleIcon className="h-5 w-5 text-nav-directory mx-auto mb-xs" />
                  <div className="text-body-sm font-medium">{certifications.length}</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-base flex-wrap">
                {website && (
                  <Button 
                    size="lg" 
                    className="bg-nav-directory text-gruvbox-bg-dark hover:bg-nav-directory/90 font-rajdhani font-bold gap-xs"
                    asChild
                  >
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      <GlobeAltIcon className="h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="lg" className="gap-xs" asChild>
                  <a href={`tel:${phone}`}>
                    <PhoneIcon className="h-4 w-4" />
                    Call
                  </a>
                </Button>
                {email && (
                  <Button variant="outline" size="lg" className="gap-xs" asChild>
                    <a href={`mailto:${email}`}>
                      <EnvelopeIcon className="h-4 w-4" />
                      Email
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            {/* Contact Info Card - Right Side */}
            <div className="lg:col-span-1">
              <Card className="shadow-present h-full">
                <CardHeader>
                  <CardTitle className="font-rajdhani">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-base">
                  <div className="flex items-start gap-base">
                    <MapPinIcon className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
                    <div>
                      <div className="font-medium text-body-sm">Address</div>
                      <div className="text-body-sm text-muted-foreground">{fullAddress}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-base">
                    <PhoneIcon className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
                    <div>
                      <div className="font-medium text-body-sm">Phone</div>
                      <div className="text-body-sm text-muted-foreground">{phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-base">
                    <ClockIcon className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
                    <div>
                      <div className="font-medium text-body-sm">Hours</div>
                      <div className="text-body-sm text-muted-foreground">{hours}</div>
                    </div>
                  </div>
                  {employeeCount && (
                    <div className="flex items-start gap-base">
                      <UserGroupIcon className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
                      <div>
                        <div className="font-medium text-body-sm">Team Size</div>
                        <div className="text-body-sm text-muted-foreground">{employeeCount} employees</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="py-xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Main Information - Left Side */}
            <div className="lg:col-span-2 space-y-xl">
              {/* Full Description */}
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani">About {businessName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-rajdhani prose-headings:font-bold
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                    prose-p:text-body-base prose-p:leading-relaxed
                    prose-a:text-nav-directory prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-blockquote:border-l-4 prose-blockquote:border-nav-directory/30
                    prose-blockquote:bg-muted/50 prose-blockquote:px-base prose-blockquote:py-sm
                    prose-ul:text-body-base prose-li:text-body-base">
                    <MdxContent source={fullDescription} />
                  </div>
                </CardContent>
              </Card>
              
              {/* Services */}
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani">Services Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-xs">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-xs py-xs">
                        <CheckCircleIcon className="h-4 w-4 text-sagebrush-green flex-shrink-0" />
                        <span className="text-body-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Reviews */}
              {reviewsData ? (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani">Customer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ReviewsDisplay 
                      reviewsData={reviewsData}
                      showHeader={false}
                      variant="default"
                      autoPlay={false}
                    />
                  </CardContent>
                </Card>
              ) : googlePlaceId && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani">Customer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      onClick={loadReviews}
                      disabled={loadingReviews}
                      className="w-full"
                    >
                      {loadingReviews ? 'Loading reviews...' : 'Load customer reviews'}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1 space-y-lg">
              {/* Specialties */}
              {specialties.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani text-heading-sm">Specialties</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-xs">
                    {specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="mr-xs mb-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              )}
              
              {/* Certifications */}
              {certifications.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani text-heading-sm">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-xs">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-xs py-xs">
                        <AcademicCapIcon className="h-4 w-4 text-nav-directory flex-shrink-0" />
                        <span className="text-body-sm">{cert}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
              
              {/* Service Area */}
              {serviceArea.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani text-heading-sm">Service Area</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-xs">
                    {serviceArea.map((area, index) => (
                      <div key={index} className="flex items-center gap-xs py-xs">
                        <MapPinIcon className="h-4 w-4 text-nav-directory flex-shrink-0" />
                        <span className="text-body-sm">{area}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
              
              {/* Payment Methods */}
              {paymentMethods.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani text-heading-sm">Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-xs">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="flex items-center gap-xs py-xs">
                        <CreditCardIcon className="h-4 w-4 text-nav-directory flex-shrink-0" />
                        <span className="text-body-sm">{method}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
              
              {/* Related Businesses */}
              {relatedBusinesses.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani text-heading-sm">Related Businesses</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-base">
                    {relatedBusinesses.map((business) => (
                      <Link key={business.slug} href={`/directory/${business.slug}`}>
                        <div className="p-base border border-border rounded-xs hover:bg-muted/50 transition-colors cursor-pointer">
                          <div className="font-medium text-body-sm">{business.businessName}</div>
                          <div className="flex items-center justify-between mt-xs">
                            <span className="text-xs text-muted-foreground">{business.businessType}</span>
                            <Badge variant={getTierBadgeVariant(business.tier)} className="text-xs capitalize">
                              {business.tier}
                            </Badge>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <SiteFooter currentPage="directory" />
    </div>
  )
}