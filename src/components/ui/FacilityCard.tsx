"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { ExternalLink, MapPin, Clock, Phone, Star, Users, Shield } from "lucide-react"

const facilityCardVariants = cva(
  "group relative overflow-hidden transition-all duration-200 ease-out hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-card border-border shadow-sm",
        featured: "bg-gradient-to-br from-brass-yellow/5 via-copper-orange/5 to-walnut-stock/5 border border-brass-yellow/30 shadow-md",
        premium: "bg-gradient-to-br from-blued-steel/10 via-case-hardened/10 to-blued-steel/10 border border-case-hardened/30 shadow-lg",
        compact: "bg-card border-border shadow-sm"
      },
      size: {
        default: "p-6",
        compact: "p-4",
        large: "p-8"
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
          <Badge variant="secondary" className="bg-clubhouse-lawn-green/10 text-clubhouse-lawn-green border-clubhouse-lawn-green/30">
            <Shield className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        </div>
      )}

      <CardHeader className="space-y-4">
        <div className="flex items-start gap-4">
          {/* Business Icon/Image */}
          <div className="flex-shrink-0">
            {icon ? (
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-border">
                <img 
                  src={icon} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 bg-brass-yellow/10 rounded-lg flex items-center justify-center border border-brass-yellow/20">
                {getBusinessTypeIcon(businessType)}
              </div>
            )}
          </div>

          {/* Business Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg font-rajdhani font-bold text-gunmetal-black group-hover:text-brass-yellow transition-colors">
                {title}
              </CardTitle>
            </div>
            
            {businessType && (
              <p className="text-sm text-case-hardened font-medium mt-1">
                {businessType}
              </p>
            )}

            {/* Rating */}
            {rating && (
              <div className="flex items-center gap-2 mt-2">
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
                <span className="text-sm text-case-hardened">
                  {rating.toFixed(1)} {reviewCount && `(${reviewCount} reviews)`}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <CardDescription className="text-case-hardened leading-relaxed">
          {description}
        </CardDescription>

        {/* Contact Info */}
        {(location || hours || phone) && (
          <div className="space-y-2 text-sm">
            {location && (
              <div className="flex items-center gap-2 text-case-hardened">
                <MapPin className="h-4 w-4 text-brass-yellow" />
                <span>{location}</span>
              </div>
            )}
            {hours && (
              <div className="flex items-center gap-2 text-case-hardened">
                <Clock className="h-4 w-4 text-brass-yellow" />
                <span>{hours}</span>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-2 text-case-hardened">
                <Phone className="h-4 w-4 text-brass-yellow" />
                <span>{phone}</span>
              </div>
            )}
          </div>
        )}

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs bg-card border-scope-blue/30 text-card-foreground"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-brass-yellow/10 group-hover:border-brass-yellow/50 transition-colors"
            onClick={handleClick}
          >
            {linkText}
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brass-yellow to-copper-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Card>
  )
}
