'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EnvelopeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface FooterNewsletterProps {
  className?: string
}

export function FooterNewsletter({ className }: FooterNewsletterProps) {
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

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Newsletter Subscription */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <EnvelopeIcon className="h-6 w-6 text-rusty-orange" />
          <h3 className="font-rajdhani font-bold text-xl text-card-foreground">
            Stay Connected
          </h3>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          Get updates on new events, dealer reviews, and Idaho firearms community news.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button 
            type="submit" 
            disabled={!newsletterEmail.trim() || isSubscribing}
            className="w-full bg-rusty-orange text-white hover:bg-rusty-orange/90 font-rajdhani font-bold"
          >
            {isSubscribing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Subscribing...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4" />
                Subscribe to Newsletter
              </div>
            )}
          </Button>
        </form>
      </div>

      {/* Site MagnifyingGlassIcon */}
      <div className="space-y-4 pt-6 border-t border-border">
        <div className="flex items-center gap-3">
          <MagnifyingGlassIcon className="h-6 w-6 text-rusty-orange" />
          <h3 className="font-rajdhani font-bold text-xl text-card-foreground">
            Quick MagnifyingGlassIcon
          </h3>
        </div>
        <form onSubmit={handleSearch} className="space-y-4">
          <Input
            type="text"
            placeholder="MagnifyingGlassIcon dealers, events, guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
          <Button 
            type="submit" 
            variant="outline"
            disabled={!searchQuery.trim() || isSearching}
            className="w-full border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-white font-rajdhani font-bold"
          >
            {isSearching ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-rusty-orange/30 border-t-rusty-orange rounded-full animate-spin" />
                Searching...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon className="h-4 w-4" />
                MagnifyingGlassIcon Community
              </div>
            )}
          </Button>
        </form>
      </div>

      <div className="pt-2">
        <p className="text-xs text-muted-foreground">
          Connect with Idaho's growing firearms community through verified businesses and authentic events.
        </p>
      </div>
    </div>
  )
}