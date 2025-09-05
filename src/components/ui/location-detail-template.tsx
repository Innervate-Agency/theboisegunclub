'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { WeatherLocationCard } from '@/components/ui/weather-location-card'
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, ArrowUpIcon, CalendarDaysIcon, CameraIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, CurrencyDollarIcon, CursorArrowRaysIcon, ExclamationTriangleIcon, GlobeAltIcon, InformationCircleIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'

interface LocationAmenity {
  name: string
  available: boolean
  description?: string
}

interface LocationDetailTemplateProps {
  name: string
  type: string
  description: string
  address: string
  coordinates: string
  lat: number
  lng: number
  access: string
  hours: string
  restrictions?: string
  amenities: string[]
  distanceFromBoise: number
  difficulty: string
  category: string
  verified: boolean
  elevation: number
  bestWindConditions: string
  lastUpdated: string
  weatherPriority: 'high' | 'medium' | 'low'
  phone?: string
  website?: string
  images?: string[]
  reviews?: Array<{
    author: string
    rating: number
    comment: string
    date: string
  }>
  tips?: string[]
  regulations?: string[]
  nearbyLocations?: Array<{
    name: string
    type: string
    distance: number
    slug: string
  }>
}

export default function LocationDetailTemplate({
  name,
  type,
  description,
  address,
  coordinates,
  lat,
  lng,
  access,
  hours,
  restrictions,
  amenities,
  distanceFromBoise,
  difficulty,
  category,
  verified,
  elevation,
  bestWindConditions,
  lastUpdated,
  weatherPriority,
  phone,
  website,
  images = [],
  reviews = [],
  tips = [],
  regulations = [],
  nearbyLocations = []
}: LocationDetailTemplateProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-sagebrush-green'
      case 'moderate': return 'text-golden'
      case 'difficult': return 'text-rusty-orange'
      default: return 'text-muted-foreground'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return CheckCircleIcon
      case 'moderate': return ExclamationTriangleIcon
      case 'difficult': return ExclamationTriangleIcon
      default: return InformationCircleIcon
    }
  }

  const DifficultyIcon = getDifficultyIcon(difficulty)

  return (
    <div className="theme-intel min-h-screen">
      <SiteNavigation />
      
      {/* Location Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-card to-muted/50 px-md py-lg">
        <div className="container mx-auto max-w-site relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-xs text-sm text-muted-foreground mb-base">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <Link href="/intel" className="hover:text-nav-intel transition-colors">
              Intel
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-nav-intel font-medium">{name}</span>
          </div>
          
          {/* Back Button */}
          <div className="mb-lg">
            <Link href="/intel">
              <Button variant="ghost" className="gap-xs">
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Intel Map
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Location Header - Left Side */}
            <div className="lg:col-span-2 space-y-lg">
              {/* Category and Verification */}
              <div className="flex items-center gap-base flex-wrap">
                <Badge className={`bg-nav-intel/20 text-nav-intel border-nav-intel/30`}>
                  {category}
                </Badge>
                <Badge variant="status-info" className={getDifficultyColor(difficulty)}>
                  <DifficultyIcon className="h-3 w-3 mr-xs" />
                  {difficulty}
                </Badge>
                {verified && (
                  <Badge className="bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30">
                    <ShieldCheckIcon className="h-3 w-3 mr-xs" />
                    Verified
                  </Badge>
                )}
              </div>
              
              {/* Title and Type */}
              <div>
                <h1 className="font-rajdhani text-3xl md:h1-primary text-foreground leading-tight">
                  {name}
                </h1>
                <p className="text-body-lg text-nav-intel mt-xs font-medium">
                  {type}
                </p>
              </div>
              
              {/* Description */}
              <p className="text-body-base text-foreground leading-relaxed">
                {description}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
                <div className="text-center p-base bg-muted/50 rounded-xs">
                  <Mountain className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
                  <div className="text-body-sm font-medium">{elevation}ft</div>
                  <div className="text-xs text-muted-foreground">Elevation</div>
                </div>
                <div className="text-center p-base bg-muted/50 rounded-xs">
                  <Car className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
                  <div className="text-body-sm font-medium">{distanceFromBoise}mi</div>
                  <div className="text-xs text-muted-foreground">From Boise</div>
                </div>
                <div className="text-center p-base bg-muted/50 rounded-xs">
                  <CursorArrowRaysIcon className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
                  <div className="text-body-sm font-medium">{amenities.length}</div>
                  <div className="text-xs text-muted-foreground">Amenities</div>
                </div>
                <div className="text-center p-base bg-muted/50 rounded-xs">
                  <StarIcon className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
                  <div className="text-body-sm font-medium">{reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : 'N/A'}</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-base flex-wrap">
                <Button className="bg-nav-intel text-gruvbox-bg-dark hover:bg-nav-intel/90 font-rajdhani font-bold gap-xs"
                >
                  <ArrowUpIcon className="h-4 w-4" />
                  Get Directions
                </Button>
                {phone && (
                  <Button variant="outline" className="gap-xs">
                    <PhoneIcon className="h-4 w-4" />
                    Call
                  </Button>
                )}
                {website && (
                  <Button variant="outline" className="gap-xs">
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    Website
                  </Button>
                )}
              </div>
            </div>
            
            {/* Weather Card - Right Side */}
            <div className="lg:col-span-1">
              <WeatherLocationCard
                locationName={name}
                lat={lat}
                lng={lng}
                priority={weatherPriority}
                className="h-full"
              />
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
              {/* Location Details */}
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani">Location Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-base">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
                    <div className="space-y-base">
                      <div className="flex items-start gap-base">
                        <MapPinIcon className="h-5 w-5 text-nav-intel mt-xs flex-shrink-0" />
                        <div>
                          <div className="font-medium text-body-sm">Address</div>
                          <div className="text-body-sm text-muted-foreground">{address}</div>
                          <div className="text-xs text-muted-foreground mt-xs">{coordinates}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-base">
                        <ClockIcon className="h-5 w-5 text-nav-intel mt-xs flex-shrink-0" />
                        <div>
                          <div className="font-medium text-body-sm">Hours</div>
                          <div className="text-body-sm text-muted-foreground">{hours}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-base">
                      <div className="flex items-start gap-base">
                        <CurrencyDollarIcon className="h-5 w-5 text-nav-intel mt-xs flex-shrink-0" />
                        <div>
                          <div className="font-medium text-body-sm">Access</div>
                          <div className="text-body-sm text-muted-foreground">{access}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-base">
                        <WindIcon className="h-5 w-5 text-nav-intel mt-xs flex-shrink-0" />
                        <div>
                          <div className="font-medium text-body-sm">Best Conditions</div>
                          <div className="text-body-sm text-muted-foreground">{bestWindConditions}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {restrictions && (
                    <div className="p-base bg-rusty-orange/10 border border-rusty-orange/20 rounded-xs">
                      <div className="flex items-start gap-base">
                        <ExclamationTriangleIcon className="h-5 w-5 text-rusty-orange mt-xs flex-shrink-0" />
                        <div>
                          <div className="font-medium text-body-sm text-rusty-orange">Important Restrictions</div>
                          <div className="text-body-sm text-foreground mt-xs">{restrictions}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Amenities */}
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani">Available Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-xs">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-xs py-xs">
                        <CheckCircleIcon className="h-4 w-4 text-sagebrush-green flex-shrink-0" />
                        <span className="text-body-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Tips */}
              {tips.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani">Insider Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-base">
                      {tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-base">
                          <CursorArrowRaysIcon className="h-4 w-4 text-nav-intel mt-xs flex-shrink-0" />
                          <span className="text-body-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              
              {/* Reviews */}
              {reviews.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani">Recent Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-base">
                    {reviews.slice(0, 3).map((review, index) => (
                      <div key={index} className="p-base border border-border rounded-xs">
                        <div className="flex items-center justify-between mb-xs">
                          <div className="font-medium text-body-sm">{review.author}</div>
                          <div className="flex items-center gap-xs">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating
                                      ? 'fill-golden text-golden'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-body-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1 space-y-lg">
              {/* Quick Actions */}
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani text-heading-sm">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-base">
                  <Button variant="outline" className="w-full justify-start gap-xs">
                    <CameraIcon className="h-4 w-4" />
                    Submit Photos
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-xs">
                    <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                    Leave Review
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-xs">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    Report Issue
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-xs">
                    <InformationCircleIcon className="h-4 w-4" />
                    Update InformationCircleIcon
                  </Button>
                </CardContent>
              </Card>
              
              {/* Nearby Locations */}
              {nearbyLocations.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <CardTitle className="font-rajdhani text-heading-sm">Nearby Locations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-base">
                    {nearbyLocations.map((location) => (
                      <Link key={location.slug} href={`/intel/locations/${location.slug}`}>
                        <div className="p-base border border-border rounded-xs hover:bg-muted/50 transition-colors cursor-pointer">
                          <div className="font-medium text-body-sm">{location.name}</div>
                          <div className="flex items-center justify-between mt-xs">
                            <span className="text-xs text-muted-foreground">{location.type}</span>
                            <span className="text-xs text-nav-intel">{location.distance}mi</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
              
              {/* Last Updated */}
              <Card className="shadow-present">
                <CardContent className="p-base">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Last Updated</div>
                    <div className="text-body-sm font-medium">{new Date(lastUpdated).toLocaleDateString()}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <SiteFooter currentPage="intel" />
    </div>
  )
}