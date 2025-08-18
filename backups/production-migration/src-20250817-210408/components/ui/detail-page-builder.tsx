'use client'

import * as React from 'react'
import DetailPageTemplate from './detail-page-template'
import { 
  ArticleContent, 
  BusinessContent, 
  LocationContent, 
  ProductContent 
} from './detail-content-types'
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
  relatedArticles = []
}: ArticlePageProps) {
  const articleContent = ArticleContent({
    content,
    author,
    publishDate,
    readTime,
    views,
    likes,
    comments,
    relatedArticles
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

  if (isVerified) {
    badges.push({
      label: '✓ Verified',
      className: 'bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30'
    })
  }

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