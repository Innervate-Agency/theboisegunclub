'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EnvelopeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils'

interface FooterUnifiedSectionProps {
  className?: string
  variant?: 'newsletter' | 'search-subscribe'
  layout?: 'stacked' | 'grid'
}

export function FooterUnifiedSection({ 
  className, 
  variant = 'newsletter',
  layout = variant === 'newsletter' ? 'stacked' : 'grid'
}: FooterUnifiedSectionProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return

    setIsSubscribing(true)
    
    // Real newsletter signup - send to community email
    const subject = encodeURIComponent('Newsletter Subscription Request')
    const body = encodeURIComponent(
      `I would like to subscribe to The Boise Gun Club newsletter.\n\nEmail: ${newsletterEmail}\n\nThank you!`
    )
    const mailtoUrl = `mailto:info@boiseguncollective.com?subject=${subject}&body=${body}`
    
    window.open(mailtoUrl, '_blank')
    
    setTimeout(() => {
      setIsSubscribing(false)
      setNewsletterEmail('')
    }, 1000)
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    
    // Navigate to search results page
    setTimeout(() => {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
      setIsSearching(false)
    }, 500)
  }

  const containerClasses = cn(
    layout === 'stacked' ? 'space-y-8' : 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    className
  )

  const formSpacing = layout === 'stacked' ? 'space-y-4' : 'space-y-3'

  return (
    <div className={containerClasses}>
      {/* Newsletter Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="h-5 w-5 text-sandy-ochre" />
          <h3 className="font-rajdhani font-bold text-lg text-foreground">
            Join the Community
          </h3>
        </div>
        
        <p className="text-base text-muted-foreground leading-relaxed">
          Stay informed with weekly updates on new dealers, upcoming events, and firearms legislation in Idaho.
        </p>
        
        <form onSubmit={handleNewsletterSubmit} className={formSpacing}>
          <div className="flex gap-2">
            <Input 
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              disabled={isSubscribing}
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={isSubscribing || !newsletterEmail.trim()}
              className="shrink-0"
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>
      </div>

      {/* Search Section */}
      <div className={cn(
        "space-y-4",
        layout === 'stacked' && "pt-6 border-t border-border"
      )}>
        <div className="flex items-center gap-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-sandy-ochre" />
          <h3 className="font-rajdhani font-bold text-lg text-foreground">
            Quick Search
          </h3>
        </div>
        
        {variant === 'search-subscribe' && (
          <p className="text-base text-muted-foreground leading-relaxed">
            Find dealers, events, guides, and resources across Idaho's firearms community.
          </p>
        )}
        
        <form onSubmit={handleSearch} className={formSpacing}>
          <div className="flex gap-2">
            <Input 
              type="text"
              placeholder="Search dealers, events, guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isSearching}
              className="flex-1"
            />
            <Button 
              type="submit" 
              variant="glass"
              disabled={isSearching || !searchQuery.trim()}
              className="shrink-0"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </form>
      </div>

      {/* Footer text - only for newsletter variant */}
      {variant === 'newsletter' && (
        <div className="pt-2">
          <p className="text-xs text-muted-foreground">
            Connect with Idaho's growing firearms community through verified businesses and authentic events.
          </p>
        </div>
      )}
    </div>
  )
}

// Backwards compatibility exports
export function FooterNewsletter(props: Omit<FooterUnifiedSectionProps, 'variant'>) {
  return <FooterUnifiedSection {...props} variant="newsletter" />
}

export function FooterSearchSubscribe(props: Omit<FooterUnifiedSectionProps, 'variant'>) {
  return <FooterUnifiedSection {...props} variant="search-subscribe" />
}
