'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heart, Download, Filter, Grid3X3, List } from 'lucide-react'
import Image from 'next/image'

const galleryGridVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "bg-white",
        warm: "bg-gradient-hero-warm",
        glass: "bg-white/80 backdrop-blur-sm"
      },
      layout: {
        grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
        masonry: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6",
        list: "flex flex-col gap-4"
      }
    },
    defaultVariants: {
      variant: "default",
      layout: "grid"
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
  layout,
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
    <div className={cn(galleryGridVariants({ variant }), "py-12", className)} {...props}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {subtitle && (
              <p className="text-sm font-rajdhani font-semibold text-copper-orange mb-2 tracking-wide uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-gunmetal-black mb-4">
                {title}
              </h2>
            )}
          </div>
        )}
        
        {/* Filters & View Controls */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "font-rajdhani font-semibold capitalize",
                    activeFilter === category 
                      ? "bg-brass-yellow text-gunmetal-black hover:bg-copper-orange" 
                      : "border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* View Mode Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className="border-brass-yellow/30"
              >
                <Grid3X3 className="icon-sm" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className="border-brass-yellow/30"
              >
                <List className="icon-sm" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Gallery Grid */}
        <div className={cn(
          viewMode === 'grid' && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
          viewMode === 'masonry' && "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6",
          viewMode === 'list' && "flex flex-col gap-4"
        )}>
          {filteredImages.map((image) => {
            const isLiked = likedImages.has(image.id)
            const isFeatured = image.featured
            
            return (
              <div
                key={image.id}
                className={cn(
                  "group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer",
                  viewMode === 'masonry' && "break-inside-avoid mb-6",
                  viewMode === 'list' && "flex gap-4 p-4",
                  isFeatured && "ring-2 ring-brass-yellow/50"
                )}
                onClick={() => onImageClick?.(image)}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-2 left-2 z-10">
                    <div className="bg-brass-yellow text-gunmetal-black text-xs font-rajdhani font-bold px-2 py-1 rounded">
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
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(image.id)
                      }}
                      className={cn(
                        "bg-white/90 border-0 shadow-sm",
                        isLiked && "bg-safety-red text-white"
                      )}
                    >
                      <Heart className={cn("icon-sm", isLiked && "fill-current")} />
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation()
                        onDownload?.(image.id)
                      }}
                      className="bg-white/90 border-0 shadow-sm"
                    >
                      <Download className="icon-sm" />
                    </Button>
                  </div>
                </div>
                
                {/* Content */}
                <div className={cn(
                  "p-4",
                  viewMode === 'list' && "flex-1"
                )}>
                  <div className="space-y-2">
                    <h3 className="font-rajdhani font-semibold text-gunmetal-black group-hover:text-brass-yellow transition-colors duration-200">
                      {image.alt}
                    </h3>
                    
                    {image.category && (
                      <p className="text-xs text-case-hardened font-noto-sans uppercase tracking-wide">
                        {image.category}
                      </p>
                    )}
                    
                    {/* Stats */}
                    {showStats && (image.likes !== undefined || image.downloads !== undefined) && (
                      <div className="flex items-center gap-4 text-xs text-case-hardened">
                        {image.likes !== undefined && (
                          <div className="flex items-center gap-1">
                            <Heart className="icon-xs" />
                            <span>{image.likes}</span>
                          </div>
                        )}
                        {image.downloads !== undefined && (
                          <div className="flex items-center gap-1">
                            <Download className="icon-xs" />
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
          <div className="text-center py-12">
            <Filter className="icon-2xl icon-muted mx-auto mb-4" />
            <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-2">
              No images found
            </h3>
            <p className="text-case-hardened font-noto-sans">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
