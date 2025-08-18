import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReviewsDisplay } from '@/components/ui/reviews-display'
import MdxContent from '@/components/molecules/MdxContent'
import { 
  Calendar, Clock, Eye, Heart, MessageCircle, User, Tag,
  MapPin, Phone, Globe, Mail, CheckCircle, Star, Shield,
  Award, Target, Users, CreditCard, DollarSign,
  Package, Truck, FileText, AlertTriangle as Warning
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// ===== ARTICLE CONTENT =====
interface ArticleAuthor {
  name: string
  avatar?: string
  bio?: string
  title?: string
}

interface ArticleContentProps {
  content: string
  author: ArticleAuthor
  publishDate: string
  readTime: number
  views?: number
  likes?: number
  comments?: number
  relatedArticles?: Array<{
    id: string
    title: string
    excerpt: string
    readTime: number
    category: string
  }>
}

export function ArticleContent({ 
  content, 
  author, 
  publishDate, 
  readTime, 
  views = 0, 
  likes = 0, 
  comments = 0,
  relatedArticles = []
}: ArticleContentProps) {
  const heroContent = (
    <>
      {/* Author and Meta */}
      <div className="flex flex-wrap items-center gap-base text-sm text-muted-foreground">
        <div className="flex items-center gap-xs">
          <User className="h-4 w-4" />
          <span className="font-medium">{author.name}</span>
          {author.title && <span>• {author.title}</span>}
        </div>
        <div className="flex items-center gap-xs">
          <Calendar className="h-4 w-4" />
          <span>{new Date(publishDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        <div className="flex items-center gap-xs">
          <Clock className="h-4 w-4" />
          <span>{readTime} min read</span>
        </div>
        {views > 0 && (
          <div className="flex items-center gap-xs">
            <Eye className="h-4 w-4" />
            <span>{views.toLocaleString()} views</span>
          </div>
        )}
      </div>
      
      {/* Engagement Stats */}
      {(likes > 0 || comments > 0) && (
        <div className="flex items-center gap-base">
          {likes > 0 && (
            <div className="flex items-center gap-xs text-sm text-muted-foreground">
              <Heart className="h-4 w-4" />
              <span>{likes}</span>
            </div>
          )}
          {comments > 0 && (
            <div className="flex items-center gap-xs text-sm text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
              <span>{comments}</span>
            </div>
          )}
        </div>
      )}
    </>
  )

  const mainContent = (
    <article>
      <div className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-rajdhani prose-headings:font-bold
        prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
        prose-p:text-body-base prose-p:leading-relaxed
        prose-a:text-rusty-orange prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground prose-strong:font-semibold
        prose-blockquote:border-l-4 prose-blockquote:border-rusty-orange/30
        prose-blockquote:bg-muted/50 prose-blockquote:px-base prose-blockquote:py-sm
        prose-code:bg-muted prose-code:px-xs prose-code:py-micro prose-code:rounded-xs
        prose-table:border-collapse prose-th:border prose-th:border-border
        prose-td:border prose-td:border-border prose-th:bg-muted/50
        prose-th:px-base prose-th:py-sm prose-td:px-base prose-td:py-sm">
        <MdxContent source={content} />
      </div>
    </article>
  )

  const sidebarSections = [
    {
      id: 'author',
      title: 'About the Author',
      content: (
        <div className="space-y-base">
          <div className="flex items-center gap-base">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
            <div>
              <div className="font-medium text-body-sm">{author.name}</div>
              {author.title && (
                <div className="text-xs text-muted-foreground">{author.title}</div>
              )}
            </div>
          </div>
          {author.bio && (
            <p className="text-body-sm text-muted-foreground">{author.bio}</p>
          )}
        </div>
      )
    }
  ]

  if (relatedArticles.length > 0) {
    sidebarSections.push({
      id: 'related',
      title: 'Related Articles',
      content: (
        <div className="space-y-base">
          {relatedArticles.slice(0, 3).map((article) => (
            <div key={article.id} className="space-y-xs">
              <h4 className="text-body-sm font-medium leading-snug hover:text-rusty-orange transition-colors cursor-pointer">
                {article.title}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-base text-xs text-muted-foreground">
                <Badge variant="outline" className="text-[10px] px-xs py-micro">
                  {article.category}
                </Badge>
                <span>{article.readTime} min</span>
              </div>
            </div>
          ))}
        </div>
      )
    })
  }

  return { heroContent, mainContent, sidebarSections }
}

// ===== BUSINESS CONTENT =====
interface BusinessContentProps {
  businessName: string
  businessType: string
  fullDescription: string
  phone: string
  email?: string
  website?: string
  address: string
  city: string
  state: string
  zip: string
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
  logo?: string
  googlePlaceId?: string
  relatedBusinesses?: Array<{
    businessName: string
    businessType: string
    slug: string
    tier: string
  }>
}

export function BusinessContent({
  businessName,
  businessType,
  fullDescription,
  phone,
  email,
  website,
  address,
  city,
  state,
  zip,
  hours,
  yearEstablished,
  employeeCount,
  isVerified,
  verificationStatus,
  rating,
  reviewCount,
  services,
  specialties,
  certifications,
  serviceArea,
  paymentMethods,
  tier,
  logo,
  googlePlaceId,
  relatedBusinesses = []
}: BusinessContentProps) {
  const [reviewsData, setReviewsData] = React.useState<any>(null)
  const [loadingReviews, setLoadingReviews] = React.useState(false)

  const fullAddress = `${address}, ${city}, ${state} ${zip}`

  const heroContent = (
    <>
      {/* Business Logo and Details */}
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
          <p className="text-body-lg text-nav-directory font-medium">
            {businessType}
          </p>
          {yearEstablished && (
            <p className="text-body-sm text-muted-foreground mt-xs">
              Established {yearEstablished}
            </p>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
        {rating && (
          <div className="text-center p-base bg-muted/50 rounded-xs">
            <Star className="h-5 w-5 text-nav-directory mx-auto mb-xs" />
            <div className="text-body-sm font-medium">{rating.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>
        )}
        {reviewCount && (
          <div className="text-center p-base bg-muted/50 rounded-xs">
            <Users className="h-5 w-5 text-nav-directory mx-auto mb-xs" />
            <div className="text-body-sm font-medium">{reviewCount}</div>
            <div className="text-xs text-muted-foreground">Reviews</div>
          </div>
        )}
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <Target className="h-5 w-5 text-nav-directory mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{services.length}</div>
          <div className="text-xs text-muted-foreground">Services</div>
        </div>
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <CheckCircle className="h-5 w-5 text-nav-directory mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{certifications.length}</div>
          <div className="text-xs text-muted-foreground">Certifications</div>
        </div>
      </div>
    </>
  )

  const mainContent = (
    <div className="space-y-xl">
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
                <CheckCircle className="h-4 w-4 text-sagebrush-green flex-shrink-0" />
                <span className="text-body-sm">{service}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const sidebarSections = [
    {
      id: 'contact',
      title: 'Contact Information',
      content: (
        <div className="space-y-base">
          <div className="flex items-start gap-base">
            <MapPin className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
            <div>
              <div className="font-medium text-body-sm">Address</div>
              <div className="text-body-sm text-muted-foreground">{fullAddress}</div>
            </div>
          </div>
          <div className="flex items-start gap-base">
            <Phone className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
            <div>
              <div className="font-medium text-body-sm">Phone</div>
              <div className="text-body-sm text-muted-foreground">{phone}</div>
            </div>
          </div>
          <div className="flex items-start gap-base">
            <Clock className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
            <div>
              <div className="font-medium text-body-sm">Hours</div>
              <div className="text-body-sm text-muted-foreground">{hours}</div>
            </div>
          </div>
          {employeeCount && (
            <div className="flex items-start gap-base">
              <Users className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
              <div>
                <div className="font-medium text-body-sm">Team Size</div>
                <div className="text-body-sm text-muted-foreground">{employeeCount} employees</div>
              </div>
            </div>
          )}
        </div>
      )
    }
  ]

  // Add conditional sidebar sections
  if (specialties.length > 0) {
    sidebarSections.push({
      id: 'specialties',
      title: 'Specialties',
      content: (
        <div className="space-y-xs">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="mr-xs mb-xs">
              {specialty}
            </Badge>
          ))}
        </div>
      )
    })
  }

  if (certifications.length > 0) {
    sidebarSections.push({
      id: 'certifications',
      title: 'Certifications',
      content: (
        <div className="space-y-xs">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-xs py-xs">
              <Award className="h-4 w-4 text-nav-directory flex-shrink-0" />
              <span className="text-body-sm">{cert}</span>
            </div>
          ))}
        </div>
      )
    })
  }

  return { heroContent, mainContent, sidebarSections }
}

// ===== LOCATION CONTENT =====
interface LocationContentProps {
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
}

export function LocationContent({
  name,
  type,
  description,
  fullContent,
  address,
  coordinates,
  access,
  hours,
  restrictions,
  amenities,
  distanceFromBoise,
  difficulty,
  elevation,
  bestWindConditions,
  phone,
  website,
  tips,
  regulations,
  reviews = []
}: LocationContentProps) {
  const heroContent = (
    <>
      {/* Location Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <MapPin className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{distanceFromBoise} mi</div>
          <div className="text-xs text-muted-foreground">From Boise</div>
        </div>
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <Target className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{difficulty}</div>
          <div className="text-xs text-muted-foreground">Difficulty</div>
        </div>
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <Warning className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{elevation} ft</div>
          <div className="text-xs text-muted-foreground">Elevation</div>
        </div>
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <CheckCircle className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{amenities.length}</div>
          <div className="text-xs text-muted-foreground">Amenities</div>
        </div>
      </div>
    </>
  )

  const mainContent = (
    <div className="space-y-xl">
      {/* Full Description */}
      <Card className="shadow-present">
        <CardHeader>
          <CardTitle className="font-rajdhani">Location Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-rajdhani prose-headings:font-bold
            prose-p:text-body-base prose-p:leading-relaxed">
            <MdxContent source={fullContent} />
          </div>
        </CardContent>
      </Card>
      
      {/* Amenities */}
      <Card className="shadow-present">
        <CardHeader>
          <CardTitle className="font-rajdhani">Amenities & Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xs">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-xs py-xs">
                <CheckCircle className="h-4 w-4 text-sagebrush-green flex-shrink-0" />
                <span className="text-body-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const sidebarSections = [
    {
      id: 'access',
      title: 'Access Information',
      content: (
        <div className="space-y-base">
          <div>
            <div className="font-medium text-body-sm">Address</div>
            <div className="text-body-sm text-muted-foreground">{address}</div>
          </div>
          <div>
            <div className="font-medium text-body-sm">Coordinates</div>
            <div className="text-body-sm text-muted-foreground">{coordinates}</div>
          </div>
          <div>
            <div className="font-medium text-body-sm">Access</div>
            <div className="text-body-sm text-muted-foreground">{access}</div>
          </div>
          <div>
            <div className="font-medium text-body-sm">Hours</div>
            <div className="text-body-sm text-muted-foreground">{hours}</div>
          </div>
          {bestWindConditions && (
            <div>
              <div className="font-medium text-body-sm">Best Conditions</div>
              <div className="text-body-sm text-muted-foreground">{bestWindConditions}</div>
            </div>
          )}
        </div>
      )
    }
  ]

  if (tips.length > 0) {
    sidebarSections.push({
      id: 'tips',
      title: 'Tips & Recommendations',
      content: (
        <div className="space-y-xs">
          {tips.map((tip, index) => (
            <div key={index} className="text-body-sm text-muted-foreground">
              • {tip}
            </div>
          ))}
        </div>
      )
    })
  }

  return { heroContent, mainContent, sidebarSections }
}

// ===== PRODUCT CONTENT =====
interface ProductContentProps {
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
}

export function ProductContent({
  title,
  description,
  price,
  originalPrice,
  condition,
  brand,
  model,
  caliber,
  category,
  subcategory,
  specifications,
  features,
  vendor,
  inStock,
  quantity,
  images
}: ProductContentProps) {
  const heroContent = (
    <>
      {/* Product Info */}
      <div className="space-y-base">
        <div className="flex items-center gap-base">
          <Badge className="bg-nav-marketplace/20 text-nav-marketplace border-nav-marketplace/30">
            {category}
          </Badge>
          <Badge variant="outline">{condition}</Badge>
          {!inStock && (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>
        
        <div className="flex items-baseline gap-base">
          <span className="text-3xl font-rajdhani font-bold text-nav-marketplace">
            ${price.toLocaleString()}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </>
  )

  const mainContent = (
    <div className="space-y-xl">
      {/* Product Description */}
      <Card className="shadow-present">
        <CardHeader>
          <CardTitle className="font-rajdhani">Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-body-base leading-relaxed">{description}</p>
        </CardContent>
      </Card>
      
      {/* Specifications */}
      <Card className="shadow-present">
        <CardHeader>
          <CardTitle className="font-rajdhani">Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-sm border-b border-border last:border-0">
                <span className="font-medium text-body-sm">{key}</span>
                <span className="text-body-sm text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Features */}
      {features.length > 0 && (
        <Card className="shadow-present">
          <CardHeader>
            <CardTitle className="font-rajdhani">Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xs">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-xs py-xs">
                  <CheckCircle className="h-4 w-4 text-sagebrush-green flex-shrink-0" />
                  <span className="text-body-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )

  const sidebarSections = [
    {
      id: 'vendor',
      title: 'Seller Information',
      content: (
        <div className="space-y-base">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-body-sm">{vendor.name}</div>
              <div className="text-body-sm text-muted-foreground">{vendor.address}</div>
            </div>
            {vendor.verified && (
              <Badge variant="outline" className="text-xs">
                <Shield className="h-3 w-3 mr-xs" />
                Verified
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-xs">
            <Star className="h-4 w-4 text-nav-marketplace" />
            <span className="text-body-sm font-medium">{vendor.rating}</span>
            <span className="text-xs text-muted-foreground">rating</span>
          </div>
          
          <div className="space-y-xs">
            <Button 
              size="sm" 
              className="w-full bg-nav-marketplace text-white hover:bg-nav-marketplace/90"
            >
              Contact Seller
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Phone className="h-4 w-4 mr-xs" />
              {vendor.phone}
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 'availability',
      title: 'Availability',
      content: (
        <div className="space-y-base">
          <div className="flex items-center justify-between">
            <span className="text-body-sm">Status:</span>
            <Badge variant={inStock ? "default" : "destructive"}>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>
          {inStock && (
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Quantity:</span>
              <span className="text-body-sm font-medium">{quantity} available</span>
            </div>
          )}
        </div>
      )
    }
  ]

  return { heroContent, mainContent, sidebarSections }
}