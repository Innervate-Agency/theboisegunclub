"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { ExternalLink, MapPin, Clock, Phone, Star, Users, Shield } from "lucide-react"

const facilityCardVariants = cva(
  "group relative overflow-hidden transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        // STRATEGIC RESTRAINT: Shadow-first approach like VendorCard
        default: "bg-card shadow-flat hover:shadow-md",
        featured: "bg-gradient-to-br from-brass-yellow/5 via-copper-orange/5 to-walnut-stock/5 shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        premium: "bg-gradient-to-br from-blued-steel/10 via-case-hardened/10 to-blued-steel/10 shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-ayu-blue after:to-case-hardened after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        compact: "bg-card shadow-flat hover:shadow-md"
      },
      size: {
        default: "p-md",
        compact: "p-base",
        large: "p-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface FacilityCardProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof facilityCardVariants> {
  title: string
  description: string
  icon?: string
  linkText?: string
  link?: string
  businessType?: string
  rating?: number
  reviewCount?: number
  location?: string
  hours?: string
  phone?: string
  badges?: string[]
  isFeatured?: boolean
  isVerified?: boolean
  onViewDetails?: () => void
}

export default function FacilityCard({
  className,
  title,
  description,
  icon,
  linkText = "View Details",
  link,
  businessType,
  rating,
  reviewCount,
  location,
  hours,
  phone,
  badges,
  isFeatured = false,
  isVerified = false,
  variant,
  size,
  onViewDetails,
  ...props
}: FacilityCardProps) {
  const handleClick = () => {
    if (onViewDetails) {
      onViewDetails()
    } else if (link) {
      window.location.href = link
    }
  }

  const getBusinessTypeIcon = (type?: string) => {
    switch (type?.toLowerCase()) {
      case 'gun shop':
      case 'gunshop':
        return <Shield className="h-4 w-4" />
      case 'shooting range':
      case 'range':
        return <Users className="h-4 w-4" />
      case 'instructor':
      case 'training':
        return <Star className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

  return (
    <Card 
      className={cn(
        facilityCardVariants({ variant: isFeatured ? "featured" : variant, size }), 
        className
      )} 
      {...props}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="default" className="bg-brass-yellow text-gunmetal-black font-medium">
            Featured
          </Badge>
        </div>
      )}

      {/* Verified badge */}
      {isVerified && (
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="success">
            <Shield className="h-3 w-3 mr-[var(--space-xs)]" />
            Verified
          </Badge>
        </div>
      )}

      <CardHeader className="space-y-[var(--space-base)]">
        <div className="flex items-start gap-base">
          {/* Business Icon/Image */}
          <div className="flex-shrink-0">
            {icon ? (
              <div className="w-12 h-12 rounded-card overflow-hidden shadow-flat">
                <img 
                  src={icon} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 bg-brass-yellow/10 rounded-card flex items-center justify-center shadow-flat">
                {getBusinessTypeIcon(businessType)}
              </div>
            )}
          </div>

          {/* Business Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-xs">
              <CardTitle className="text-body-lg font-rajdhani font-bold text-gunmetal-black group-hover:text-brass-yellow transition-colors">
                {title}
              </CardTitle>
            </div>
            
            {businessType && (
              <p className="text-body-sm text-case-hardened font-medium mt-[var(--space-xs)]">
                {businessType}
              </p>
            )}

            {/* Rating */}
            {rating && (
              <div className="flex items-center gap-xs mt-[var(--space-xs)]">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(rating) ? "text-brass-yellow fill-current" : "text-muted-foreground"
                      )}
                    />
                  ))}
                </div>
                <span className="text-body-sm text-case-hardened">
                  {rating.toFixed(1)} {reviewCount && `(${reviewCount} reviews)`}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-[var(--space-base)]">
        {/* Description */}
        <CardDescription className="text-case-hardened leading-relaxed">
          {description}
        </CardDescription>

        {/* Contact Info */}
        {(location || hours || phone) && (
          <div className="space-y-[var(--space-xs)] text-body-sm">
            {location && (
              <div className="flex items-center gap-xs text-case-hardened">
                <MapPin className="h-4 w-4 text-brass-yellow" />
                <span>{location}</span>
              </div>
            )}
            {hours && (
              <div className="flex items-center gap-xs text-case-hardened">
                <Clock className="h-4 w-4 text-brass-yellow" />
                <span>{hours}</span>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-xs text-case-hardened">
                <Phone className="h-4 w-4 text-brass-yellow" />
                <span>{phone}</span>
              </div>
            )}
          </div>
        )}

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-xs">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="info" 
                className="text-caption"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-[var(--space-xs)]">
          <Button
            variant="secondary"
            size="sm"
            className="w-full group-hover:bg-brass-yellow/10 group-hover:border-brass-yellow/50 transition-colors"
            onClick={handleClick}
          >
            {linkText}
            <ExternalLink className="h-4 w-4 ml-[var(--space-xs)]" />
          </Button>
        </div>
      </CardContent>

      {/* Strategic restraint: Gradient accent now handled by variants */}
    </Card>
  )
}

export { FacilityCard }
