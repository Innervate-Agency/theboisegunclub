'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowDownTrayIcon, FunnelIcon, HeartIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'

const galleryGridVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "bg-card",
        warm: "bg-gradient-hero-warm",
        glass: "mica-card"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface GalleryImage {
  id: string
  src: string
  alt: string
  category?: string
  featured?: boolean
  likes?: number
  downloads?: number
  width?: number
  height?: number
}

export interface GalleryGridProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof galleryGridVariants> {
  title?: string
  subtitle?: string
  images: GalleryImage[]
  showFilters?: boolean
  showStats?: boolean
  onImageClick?: (image: GalleryImage) => void
  onLike?: (imageId: string) => void
  onDownload?: (imageId: string) => void
}

export function GalleryGrid({
  className,
  title,
  subtitle,
  images,
  variant,
  showFilters = true,
  showStats = true,
  onImageClick,
  onLike,
  onDownload,
  ...props
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = React.useState<string>('all')
  const [viewMode, setViewMode] = React.useState<'grid' | 'masonry' | 'list'>('grid')
  const [likedImages, setLikedImages] = React.useState<Set<string>>(new Set())
  
  // Get unique categories
  const categories = React.useMemo(() => {
    const cats = images.map(img => img.category).filter(Boolean) as string[]
    return ['all', ...Array.from(new Set(cats))]
  }, [images])
  
  // Filter images based on active filter
  const filteredImages = React.useMemo(() => {
    if (activeFilter === 'all') return images
    return images.filter(img => img.category === activeFilter)
  }, [images, activeFilter])
  
  const handleLike = (imageId: string) => {
    setLikedImages(prev => {
      const newSet = new Set(prev)
      if (newSet.has(imageId)) {
        newSet.delete(imageId)
      } else {
        newSet.add(imageId)
      }
      return newSet
    })
    onLike?.(imageId)
  }
  
  return (
    <div className={cn(galleryGridVariants({ variant }), "py-16", className)} {...props}>
      <div className="max-w-site mx-auto px-md">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-4">
            {subtitle && (
              <p className="text-body-sm font-rajdhani font-semibold text-rusty-orange mb-4 tracking-wide uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-rajdhani font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
          </div>
        )}
        
        {/* Filters & View Controls */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-base mb-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-xs">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "font-rajdhani font-semibold capitalize",
                    activeFilter === category 
                      ? "bg-rusty-orange text-card-foreground hover:bg-recoil-pad" 
                      : "border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-card-foreground"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* View Mode Controls */}
            <div className="flex items-center gap-xs">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'secondary'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className="border-rusty-orange/30"
              >
                <Squares2X2Icon className="icon-sm" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'secondary'}
                size="icon"
                onClick={() => setViewMode('list')}
                className="border-rusty-orange/30"
              >
                <ListBulletIcon className="icon-sm" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Gallery Grid */}
        <div className={cn(
          viewMode === 'grid' && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md",
          viewMode === 'masonry' && "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-md",
          viewMode === 'list' && "flex flex-col gap-base"
        )}>
          {filteredImages.map((image) => {
            const isLiked = likedImages.has(image.id)
            const isFeatured = image.featured
            
            return (
              <div
                key={image.id}
                className={cn(
                  "group relative bg-card text-card-foreground border-border rounded-sm overflow-hidden shadow-flat hover:shadow-present transition-all duration-200 cursor-pointer",
                  viewMode === 'masonry' && "break-inside-avoid mb-4",
                  viewMode === 'list' && "flex gap-base p-base",
                  isFeatured && "ring-2 ring-rusty-orange/50"
                )}
                onClick={() => onImageClick?.(image)}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-tiny left-2 z-10">
                    <div className="bg-rusty-orange text-card-foreground text-caption font-rajdhani font-bold px-xs py-xs rounded">
                      Featured
                    </div>
                  </div>
                )}
                
                {/* Image */}
                <div className={cn(
                  "relative overflow-hidden",
                  viewMode === 'list' ? "w-24 h-24 flex-shrink-0" : "aspect-square"
                )}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes={viewMode === 'list' ? "96px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-xs">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(image.id)
                      }}
                      className={cn(
                        "bg-card/90 border-0 shadow-flat",
                        isLiked && "bg-rusty-orange text-card-foreground"
                      )}
                    >
                      <HeartIcon className={cn("icon-sm", isLiked && "fill-current")} />
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        onDownload?.(image.id)
                      }}
                      className="bg-card/90 border-0 shadow-flat"
                    >
                      <ArrowDownTrayIcon className="icon-sm" />
                    </Button>
                  </div>
                </div>
                
                {/* Content */}
                <div className={cn(
                  "p-base",
                  viewMode === 'list' && "flex-1"
                )}>
                  <div className="space-y-4">
                    <h3 className="font-rajdhani font-semibold text-card-foreground group-hover:text-rusty-orange transition-colors duration-200">
                      {image.alt}
                    </h3>
                    
                    {image.category && (
                      <p className="text-caption text-muted-foreground font-noto-sans uppercase tracking-wide">
                        {image.category}
                      </p>
                    )}
                    
                    {/* Stats */}
                    {showStats && (image.likes !== undefined || image.downloads !== undefined) && (
                      <div className="flex items-center gap-base text-caption text-muted-foreground">
                        {image.likes !== undefined && (
                          <div className="flex items-center gap-xs">
                            <HeartIcon className="icon-xs" />
                            <span>{image.likes}</span>
                          </div>
                        )}
                        {image.downloads !== undefined && (
                          <div className="flex items-center gap-xs">
                            <ArrowDownTrayIcon className="icon-xs" />
                            <span>{image.downloads}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <FunnelIcon className="icon-2xl icon-muted mx-auto mb-4" />
            <h3 className="text-body-lg font-rajdhani font-bold text-card-foreground mb-4">
              No images found
            </h3>
            <p className="text-muted-foreground font-noto-sans">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
