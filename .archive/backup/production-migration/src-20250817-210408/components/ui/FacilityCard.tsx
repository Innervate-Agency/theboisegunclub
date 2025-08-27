"use client"

import * as React from "react"
import Image from 'next/image';
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
        default: "bg-card shadow-present hover:shadow-elevated",
        featured: "bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-sm",
        premium: "bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-present hover:shadow-elevated  relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-sm",
        compact: "bg-card shadow-present hover:shadow-elevated"
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
  extends React.HTMLAttributes<HTMLDivElement>,
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
        return <Shield className="size-4" />
      case 'shooting range':
      case 'range':
        return <Users className="size-4" />
      case 'instructor':
      case 'training':
        return <Star className="size-4" />
      default:
        return <MapPin className="size-4" />
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
      {isFeatured && (
        <div className="absolute top-sm right-4 z-10">
          <Badge variant="premium">
            Featured
          </Badge>
        </div>
      )}

      {isVerified && (
        <div className="absolute top-sm left-4 z-10">
          <Badge variant="success">
            <Shield className="size-3 mr-xs" />
            Verified
          </Badge>
        </div>
      )}

      <CardHeader className="space-y-base">
        <div className="flex items-start gap-base">
          <div className="flex-shrink-0">
            {icon ? (
              <div className="w-12 h-12 rounded-sm overflow-hidden shadow-present">
                <Image 
                  src={icon} 
                  alt={title}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shadow-present">
                {getBusinessTypeIcon(businessType)}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-xs">
              <CardTitle className="text-heading-lg font-rajdhani font-bold text-foreground group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
            </div>
            
            {businessType && (
              <p className="text-body-sm text-muted-foreground font-medium mt-xs">
                {businessType}
              </p>
            )}

            {rating && (
              <div className="flex items-center gap-xs mt-xs">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "size-4",
                        i < Math.floor(rating) ? "text-primary fill-current" : "text-muted-foreground"
                      )}
                    />
                  ))}
                </div>
                <span className="text-body-sm text-muted-foreground">
                  {rating.toFixed(1)} {reviewCount && `(${reviewCount} reviews)`}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-base">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>

        {(location || hours || phone) && (
          <div className="space-y-xs text-body-sm">
            {location && (
              <div className="flex items-center gap-xs text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                <span>{location}</span>
              </div>
            )}
            {hours && (
              <div className="flex items-center gap-xs text-muted-foreground">
                <Clock className="size-4 text-primary" />
                <span>{hours}</span>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-xs text-muted-foreground">
                <Phone className="size-4 text-primary" />
                <span>{phone}</span>
              </div>
            )}
          </div>
        )}

        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-xs">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="info" 
                className="text-body-xs"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}

        <div className="pt-xs">
          <Button
            variant="secondary"
            size="sm"
            className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors"
            onClick={handleClick}
          >
            {linkText}
            <ExternalLink className="size-4 ml-xs" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export { FacilityCard }
