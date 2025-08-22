'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline';

const testimonialCarouselVariants = cva(
  "w-full py-16",
  {
    variants: {
      variant: {
        default: "bg-card",
        warm: "bg-gradient-hero-warm",
        branded: "bg-gradient-card-warm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface Testimonial {
  name: string
  role: string
  content: string
  rating?: number
  avatar?: string
  company?: string
}

export interface TestimonialCarouselProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof testimonialCarouselVariants> {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function TestimonialCarousel({
  className,
  title,
  subtitle, 
  testimonials,
  variant,
  autoPlay = true,
  autoPlayInterval = 5000,
  ...props
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlayPaused, setIsAutoPlayPaused] = React.useState(false)
  
  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || isAutoPlayPaused || testimonials.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoPlayInterval)
    
    return () => clearInterval(interval)
  }, [autoPlay, isAutoPlayPaused, testimonials.length, autoPlayInterval])
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }
  
  if (!testimonials.length) return null
  
  const currentTestimonial = testimonials[currentIndex]

  if (!currentTestimonial) {
    return null;
  }
  
  return (
    <section 
      className={cn(testimonialCarouselVariants({ variant }), className)}
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => setIsAutoPlayPaused(false)}
      {...props}
    >
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
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-rajdhani font-bold text-foreground">
                {title}
              </h2>
            )}
          </div>
        )}
        
        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-card text-card-foreground rounded-xs p-lg md:p-micro2 shadow-present hover:shadow-elevated transition-shadow duration-200">
            {/* Quote Icon */}
            <div className="absolute -top-sm left-8">
              <div className="bg-sandy-ochre rounded-full p-sm">
                <Quote className="icon-md text-foreground" />
              </div>
            </div>
            
            {/* Rating */}
            {currentTestimonial.rating && (
              <div className="flex items-center gap-xs mb-4 justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className={cn(
                      "icon-sm",
                      i < currentTestimonial.rating! 
                        ? "text-sandy-ochre fill-sandy-ochre" 
                        : "text-muted-foreground"
                    )}
                  />
                ))}
              </div>
            )}
            
            {/* Content */}
            <blockquote className="text-center mb-4">
              <p className="text-responsive-lg md:text-responsive-xl text-foreground font-noto-sans leading-relaxed italic">
                "{currentTestimonial.content}"
              </p>
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-center gap-base">
              {currentTestimonial.avatar && (
                <div className="w-12 h-12 rounded-pill bg-muted overflow-hidden">
                  <Image 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="text-center">
                <div className="font-rajdhani font-bold text-foreground">
                  {currentTestimonial.name}
                </div>
                <div className="text-body-sm text-muted-foreground font-noto-sans">
                  {currentTestimonial.role}
                  {currentTestimonial.company && (
                    <span> • {currentTestimonial.company}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-micro/2 -translate-y-1/2 bg-card hover:bg-sandy-ochre shadow-none"
                onClick={goToPrevious}
              >
                <ChevronLeftIcon className="icon-sm" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-micro/2 -translate-y-1/2 bg-card hover:bg-sandy-ochre shadow-none"
                onClick={goToNext}
              >
                <ChevronRightIcon className="icon-sm" />
              </Button>
            </>
          )}
        </div>
        
        {/* Dots Indicator */}
        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-xs mt-(--spacing-lg)">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "size-2 rounded-full transition-all duration-200",
                  index === currentIndex 
                    ? "bg-sandy-ochre w-8" 
                    : "bg-muted hover:bg-muted/80"
                )}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
