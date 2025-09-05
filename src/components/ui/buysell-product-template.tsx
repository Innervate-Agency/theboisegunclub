'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { ArrowLeftIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, ExclamationTriangleIcon, EyeIcon, HeartIcon, MapPinIcon, PhoneIcon, ShareIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import Link from 'next/link'

interface ProductVendor {
  name: string
  rating: number
  address: string
  phone: string
  verified?: boolean
  responseTime?: string
}

interface BuySellProductTemplateProps {
  id: string | number
  title: string
  description: string
  category: string
  subcategory?: string
  price: number
  originalPrice?: number
  condition: string
  caliber?: string
  brand: string
  model: string
  vendor: ProductVendor
  inStock: boolean
  quantity?: number
  lastUpdated: string
  images: string[]
  features?: string[]
  tags?: string[]
  views?: number
  inquiries?: number
  featured?: boolean
  specifications?: Record<string, string>
  relatedProducts?: Array<{
    id: string | number
    title: string
    price: number
    image?: string
    vendor: string
  }>
}

export default function BuySellProductTemplate({
  id,
  title,
  description,
  category,
  subcategory,
  price,
  originalPrice,
  condition,
  caliber,
  brand,
  model,
  vendor,
  inStock,
  quantity = 1,
  lastUpdated,
  images,
  features = [],
  tags = [],
  views = 0,
  inquiries = 0,
  featured = false,
  specifications = {},
  relatedProducts = []
}: BuySellProductTemplateProps) {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0)
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <div className="theme-buysell min-h-screen">
      <SiteNavigation />
      
      {/* Product Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-card to-muted/50 px-md py-lg">
        <div className="container mx-auto max-w-site relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-xs text-sm text-muted-foreground mb-base">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <Link href="/buysell" className="hover:text-nav-buysell transition-colors">
              Buy & Sell
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <Link href={`/buysell?category=${category}`} className="hover:text-nav-buysell transition-colors">
              {category}
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-nav-buysell font-medium">{title}</span>
          </div>
          
          {/* Back Button */}
          <div className="mb-base">
            <Link href="/buysell">
              <Button variant="ghost" className="gap-xs">
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Buy & Sell
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Main Product Content */}
      <main className="py-xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            {/* Product Images - Left Side */}
            <div className="space-y-base">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xs bg-muted">
                <Image
                  src={images[selectedImageIndex] || '/images/buysell/placeholder.jpg'}
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                {featured && (
                  <Badge className="absolute top-base left-base bg-rusty-orange text-gruvbox-bg-dark">
                    Featured
                  </Badge>
                )}
                {discount > 0 && (
                  <Badge className="absolute top-base right-base bg-sagebrush-green text-gruvbox-bg-dark">
                    -{discount}%
                  </Badge>
                )}
              </div>
              
              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex gap-xs overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xs overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index 
                          ? 'border-nav-buysell' 
                          : 'border-border hover:border-nav-buysell/50'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${title} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Details - Right Side */}
            <div className="space-y-lg">
              {/* Header */}
              <div className="space-y-base">
                {/* Category and Tags */}
                <div className="flex items-center gap-base flex-wrap">
                  <Badge className="bg-nav-buysell/20 text-nav-buysell border-nav-buysell/30">
                    {category}
                  </Badge>
                  {subcategory && (
                    <Badge variant="status-info">
                      {subcategory}
                    </Badge>
                  )}
                  {tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Title and Brand */}
                <div>
                  <h1 className="font-rajdhani text-3xl md:h1-primary text-foreground leading-tight">
                    {title}
                  </h1>
                  <p className="text-body-lg text-muted-foreground mt-xs">
                    {brand} {model} {caliber && `• ${caliber}`}
                  </p>
                </div>
                
                {/* Price */}
                <div className="flex items-baseline gap-base">
                  <span className="font-rajdhani h2-section text-nav-buysell">
                    ${price.toLocaleString()}
                  </span>
                  {originalPrice && originalPrice > price && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                {/* Stock Status */}
                <div className="flex items-center gap-base">
                  <div className={`flex items-center gap-xs ${inStock ? 'text-sagebrush-green' : 'text-rusty-orange'}`}>
                    {inStock ? (
                      <CheckCircleIcon className="h-4 w-4" />
                    ) : (
                      <ExclamationTriangleIcon className="h-4 w-4" />
                    )}
                    <span className="font-medium">
                      {inStock ? `In Stock${quantity > 1 ? ` (${quantity} available)` : ''}` : 'Out of Stock'}
                    </span>
                  </div>
                  <Badge variant="status-info" className="text-xs">
                    {condition}
                  </Badge>
                </div>
              </div>
              
              {/* Description */}
              <div className="space-y-base">
                <h3 className="font-rajdhani font-bold text-heading-sm">Description</h3>
                <p className="text-body-base text-foreground leading-relaxed">
                  {description}
                </p>
              </div>
              
              {/* Features */}
              {features.length > 0 && (
                <div className="space-y-base">
                  <h3 className="font-rajdhani font-bold text-heading-sm">Features</h3>
                  <ul className="space-y-xs">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-xs text-body-sm">
                        <CheckCircleIcon className="h-4 w-4 text-sagebrush-green flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="space-y-base">
                <div className="flex gap-base">
                  <Button className="flex-1 bg-nav-buysell text-gruvbox-bg-dark hover:bg-nav-buysell/90 font-rajdhani font-bold"
                    disabled={!inStock}
                  >
                    <ChatBubbleBottomCenterTextIcon className="h-4 w-4 mr-xs" />
                    Contact Seller
                  </Button>
                  <Button variant="outline" className="gap-xs">
                    <HeartIcon className="h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" className="gap-xs">
                    <ShareIcon className="h-4 w-4" />
                    Share
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-base text-sm text-muted-foreground">
                  {views > 0 && (
                    <div className="flex items-center gap-xs">
                      <EyeIcon className="h-4 w-4" />
                      <span>{views} views</span>
                    </div>
                  )}
                  {inquiries > 0 && (
                    <div className="flex items-center gap-xs">
                      <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                      <span>{inquiries} inquiries</span>
                    </div>
                  )}
                  <div className="flex items-center gap-xs">
                    <ClockIcon className="h-4 w-4" />
                    <span>Updated {new Date(lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Information Tabs */}
          <div className="mt-2xl space-y-xl">
            {/* Specifications */}
            {Object.keys(specifications).length > 0 && (
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani">Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-xs border-b border-border">
                        <span className="font-medium text-body-sm">{key}:</span>
                        <span className="text-body-sm text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Vendor Information */}
            <Card className="shadow-present">
              <CardHeader>
                <CardTitle className="font-rajdhani">Seller Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-base">
                <div className="flex items-start gap-base">
                  <div className="w-12 h-12 bg-nav-buysell/20 rounded-xs flex items-center justify-center">
                    <BuildingOffice2Icon className="h-6 w-6 text-nav-buysell" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-base mb-xs">
                      <h4 className="font-rajdhani font-bold text-heading-sm">{vendor.name}</h4>
                      {vendor.verified && (
                        <Badge className="bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30 text-xs">
                          <ShieldCheckIcon className="h-3 w-3 mr-xs" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-xs mb-xs">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(vendor.rating)
                                ? 'fill-golden text-golden'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {vendor.rating.toFixed(1)} rating
                      </span>
                    </div>
                    <div className="space-y-xs text-sm text-muted-foreground">
                      <div className="flex items-center gap-xs">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{vendor.address}</span>
                      </div>
                      <div className="flex items-center gap-xs">
                        <PhoneIcon className="h-4 w-4" />
                        <span>{vendor.phone}</span>
                      </div>
                      {vendor.responseTime && (
                        <div className="flex items-center gap-xs">
                          <ClockIcon className="h-4 w-4" />
                          <span>Responds within {vendor.responseTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <Card className="shadow-present">
                <CardHeader>
                  <CardTitle className="font-rajdhani">Related Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
                    {relatedProducts.slice(0, 3).map((product) => (
                      <Card key={product.id} className="border hover:shadow-elevated transition-shadow cursor-pointer">
                        <CardContent className="p-base space-y-xs">
                          {product.image && (
                            <div className="aspect-video overflow-hidden rounded-xs bg-muted">
                              <Image
                                src={product.image}
                                alt={product.title}
                                width={200}
                                height={150}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <h5 className="font-medium text-body-sm line-clamp-2">{product.title}</h5>
                          <div className="flex items-center justify-between">
                            <span className="font-rajdhani font-bold text-nav-buysell">
                              ${product.price.toLocaleString()}
                            </span>
                            <span className="text-xs text-muted-foreground">{product.vendor}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <SiteFooter currentPage="buysell" />
    </div>
  )
}