'use client'

import * as React from 'react'
import DetailPageTemplate from './detail-page-template'
import { 
  ArticleContent, 
  BusinessContent, 
  LocationContent, 
  ProductContent 
} from './detail-content-types'
import { EventInfoBar } from './event-info-bar'
import { Globe, Mail, Phone } from 'lucide-react'

// Helper functions to build detail pages for each content type

interface DetailPageSection {
  name: string
  path: string
  color: string
}

// ===== ARTICLE PAGE BUILDER =====
interface ArticlePageProps {
  title: string
  description?: string
  content: string
  author: {
    name: string
    avatar?: string
    bio?: string
    title?: string
  }
  publishDate: string
  readTime: number
  category: string
  featured?: boolean
  section: DetailPageSection
  views?: number
  likes?: number
  comments?: number
  tags?: string[]
  heroImage?: string
  relatedArticles?: Array<{
    id: string
    title: string
    excerpt: string
    readTime: number
    category: string
  }>
  eventEngagement?: {
    eventId: string
    eventTitle: string
    eventDate: string
    eventLocation: string
    eventUrl: string
    registrationUrl?: string
    capacity: number
    registeredCount: number
    price: string
    featured?: boolean
    eventType: string
  }
}

export function ArticleDetailPage({
  title,
  description,
  content,
  author,
  publishDate,
  readTime,
  category,
  featured = false,
  section,
  views = 0,
  likes = 0,
  comments = 0,
  tags = [],
  heroImage,
  relatedArticles = [],
  eventEngagement
}: ArticlePageProps) {
  // Generate event content first if there's event engagement data
  let eventContent: any = null
  let eventInfoSection: React.ReactNode = null
  
  if (eventEngagement) {
    // Generate sample event data for EventInfoBar
    const eventDate = new Date(eventEngagement.eventDate)
    const formattedDate = eventDate.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    // Generate context-aware content based on event type
    const getEventContent = () => {
      const baseContent = {
        whatToBring: ['Valid ID', 'Eye and ear protection', 'Comfortable clothing'],
        requirements: ['18+ or parental supervision', 'Basic safety knowledge'],
        tags: [eventEngagement.eventType, 'Idaho Event']
      }

      switch (eventEngagement.eventType.toLowerCase()) {
        case 'competition':
          return {
            ...baseContent,
            agenda: [
              'Registration and check-in',
              'Safety briefing and rules',
              'Competition stages',
              'Awards ceremony'
            ],
            whatToBring: [
              'Competition-legal firearm',
              'Holster and magazines', 
              'Eye and ear protection',
              'Ammunition (150+ rounds)',
              'Water and snacks'
            ],
            requirements: [
              'Valid range safety certification',
              'Competition experience recommended',
              'All safety equipment mandatory'
            ],
            tags: [eventEngagement.eventType, 'Competition', 'USPSA', 'Idaho']
          }
        
        case 'charity':
          return {
            ...baseContent,
            agenda: [
              'Check-in and team registration',
              'Conservation presentation',
              'Sporting clays competition',
              'Lunch and awards ceremony'
            ],
            whatToBring: [
              'Comfortable outdoor clothing',
              'Closed-toe shoes',
              'Eye and ear protection',
              'Weather-appropriate gear',
              'Team spirit!'
            ],
            requirements: [
              'Team of 4 required',
              'Conservation mindset encouraged',
              'All skill levels welcome'
            ],
            tags: [eventEngagement.eventType, 'Conservation', 'Charity', 'Team Event']
          }
        
        case 'expo':
          return {
            ...baseContent,
            agenda: [
              'Vendor exhibits and displays',
              'Educational presentations',
              'Product demonstrations',
              'Special guest speakers'
            ],
            whatToBring: [
              'Valid government ID',
              'Comfortable walking shoes',
              'Notepad for vendor info',
              'Cash or credit card'
            ],
            requirements: [
              'Valid ID required for entry',
              'All firearms must be unloaded',
              'Background checks for purchases'
            ],
            tags: [eventEngagement.eventType, 'Vendors', 'Education', 'Family Friendly']
          }
        
        case 'training':
          return {
            ...baseContent,
            agenda: [
              'Welcome and introductions',
              'Theoretical instruction',
              'Hands-on practice',
              'Q&A and certification'
            ],
            whatToBring: [
              'Eye and ear protection',
              'Note-taking materials',
              'Appropriate firearm (if required)',
              'Comfortable clothing for range'
            ],
            requirements: [
              'Basic firearm familiarity',
              'Safety equipment mandatory',
              'Arrive 15 minutes early'
            ],
            tags: [eventEngagement.eventType, 'Education', 'Safety', 'Certification']
          }
        
        default:
          return {
            ...baseContent,
            agenda: [
              'Event check-in',
              'Welcome and introductions',
              'Main activities',
              'Closing and wrap-up'
            ],
            tags: [eventEngagement.eventType, 'Community', 'Idaho']
          }
      }
    }

    eventContent = getEventContent()

    eventInfoSection = (
      <EventInfoBar
        eventTitle={eventEngagement.eventTitle}
        eventDate={formattedDate}
        eventLocation={eventEngagement.eventLocation}
        eventType={eventEngagement.eventType}
        price={eventEngagement.price}
        capacity={eventEngagement.capacity}
        registeredCount={eventEngagement.registeredCount}
        agenda={eventContent.agenda}
        whatToBring={eventContent.whatToBring}
        requirements={eventContent.requirements}
        tags={eventContent.tags}
      />
    )
  }

  // Now create article content with event preparation data
  const articleContent = ArticleContent({
    content,
    author,
    publishDate,
    readTime,
    views,
    likes,
    comments,
    relatedArticles,
    eventEngagement,
    eventPreparation: eventContent
  })

  return (
    <DetailPageTemplate
      header={{
        meta: {
          title,
          description,
          featured,
          tags,
          badges: [
            { label: category, className: `bg-${section.color}/20 text-${section.color} border-${section.color}/30` }
          ]
        },
        section,
        actions: []
      }}
      content={{
        type: 'article',
        content: articleContent.mainContent
      }}
      sidebar={{
        sections: articleContent.sidebarSections
      }}
      heroImage={heroImage}
      heroContent={articleContent.heroContent}
      reviewsSection={eventInfoSection}
    />
  )
}

// ===== BUSINESS PAGE BUILDER =====
interface BusinessPageProps {
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
  yearEstablished?: number
  employeeCount?: string
  isVerified: boolean
  verificationStatus: string
  rating?: number
  reviewCount?: number
  services: string[]
  specialties: string[]
  certifications: string[]
  serviceArea: string[]
  paymentMethods: string[]
  tier: 'free' | 'copper' | 'silver' | 'gold'
  isSponsored?: boolean
  logo?: string
  images?: string[]
  googlePlaceId?: string
  relatedBusinesses?: Array<{
    businessName: string
    businessType: string
    slug: string
    tier: string
  }>
}

export function BusinessDetailPage(props: BusinessPageProps) {
  const {
    businessName,
    businessType,
    description,
    website,
    email,
    phone,
    isVerified,
    verificationStatus,
    tier,
    isSponsored,
    logo,
    images = []
  } = props

  const section: DetailPageSection = {
    name: 'Directory',
    path: '/directory',
    color: 'nav-directory'
  }

  const businessContent = BusinessContent(props)

  const badges = [
    { label: businessType, className: 'bg-nav-directory/20 text-nav-directory border-nav-directory/30' }
  ]

  // Note: Verified badge removed - now handled by verification status component above title

  if (tier !== 'free') {
    badges.push({
      label: `${tier.charAt(0).toUpperCase() + tier.slice(1)} Member`,
      className: tier === 'gold' ? 'bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30' :
                 tier === 'silver' ? 'bg-slate-blue/20 text-slate-blue border-slate-blue/30' :
                 'bg-walnut-stock/20 text-walnut-stock border-walnut-stock/30'
    })
  }

  if (isSponsored) {
    badges.push({
      label: '⭐ Sponsored',
      className: 'bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30'
    })
  }

  const actions = []
  
  if (website) {
    actions.push({
      label: 'Visit Website',
      icon: Globe,
      href: website,
      variant: 'default',
      size: 'lg',
      className: 'bg-nav-directory text-white hover:bg-nav-directory/90 font-rajdhani font-bold'
    })
  }

  actions.push({
    label: 'Call',
    icon: Phone,
    href: `tel:${phone}`,
    variant: 'outline',
    size: 'lg'
  })

  if (email) {
    actions.push({
      label: 'Email',
      icon: Mail,
      href: `mailto:${email}`,
      variant: 'outline',
      size: 'lg'
    })
  }

  return (
    <DetailPageTemplate
      header={{
        meta: {
          title: businessName,
          description,
          badges
        },
        section,
        actions
      }}
      content={{
        type: 'business',
        content: businessContent.mainContent
      }}
      sidebar={{
        sections: businessContent.sidebarSections
      }}
      heroImage={images[0]}
      heroContent={businessContent.heroContent}
      verification={{
        isVerified,
        verificationStatus
      }}
      reviewsSection={businessContent.reviewsSection}
    />
  )
}

// ===== LOCATION PAGE BUILDER =====
interface LocationPageProps {
  name: string
  type: string
  description: string
  fullContent: string
  address: string
  coordinates: string
  access: string
  hours: string
  restrictions?: string
  amenities: string[]
  distanceFromBoise: number
  difficulty: string
  elevation: number
  bestWindConditions?: string
  phone?: string
  website?: string
  tips: string[]
  regulations: string[]
  reviews?: Array<{
    author: string
    rating: number
    comment: string
    date: string
  }>
  tags?: string[]
}

export function LocationDetailPage(props: LocationPageProps) {
  const { name, type, description, website, phone, tags = [] } = props

  const section: DetailPageSection = {
    name: 'Intel',
    path: '/intel',
    color: 'nav-intel'
  }

  const locationContent = LocationContent(props)

  const actions = []

  if (website) {
    actions.push({
      label: 'Visit Website',
      icon: Globe,
      href: website,
      variant: 'outline',
      size: 'lg'
    })
  }

  if (phone) {
    actions.push({
      label: 'Call',
      icon: Phone,
      href: `tel:${phone}`,
      variant: 'outline',
      size: 'lg'
    })
  }

  return (
    <DetailPageTemplate
      header={{
        meta: {
          title: name,
          description,
          tags,
          badges: [
            { label: type, className: 'bg-nav-intel/20 text-nav-intel border-nav-intel/30' }
          ]
        },
        section,
        actions
      }}
      content={{
        type: 'location',
        content: locationContent.mainContent
      }}
      sidebar={{
        sections: locationContent.sidebarSections
      }}
      heroContent={locationContent.heroContent}
    />
  )
}

// ===== PRODUCT PAGE BUILDER =====
interface ProductPageProps {
  title: string
  description: string
  price: number
  originalPrice?: number
  condition: string
  brand: string
  model: string
  caliber?: string
  category: string
  subcategory: string
  specifications: Record<string, string>
  features: string[]
  vendor: {
    name: string
    rating: number
    address: string
    phone: string
    verified: boolean
  }
  inStock: boolean
  quantity: number
  images: string[]
  tags?: string[]
}

export function ProductDetailPage(props: ProductPageProps) {
  const { title, description, category, images, tags = [] } = props

  const section: DetailPageSection = {
    name: 'Marketplace',
    path: '/marketplace',
    color: 'nav-marketplace'
  }

  const productContent = ProductContent(props)

  return (
    <DetailPageTemplate
      header={{
        meta: {
          title,
          description,
          tags,
          badges: [
            { label: category, className: 'bg-nav-marketplace/20 text-nav-marketplace border-nav-marketplace/30' }
          ]
        },
        section,
        actions: []
      }}
      content={{
        type: 'product',
        content: productContent.mainContent
      }}
      sidebar={{
        sections: productContent.sidebarSections
      }}
      heroImage={images[0]}
      heroContent={productContent.heroContent}
    />
  )
}