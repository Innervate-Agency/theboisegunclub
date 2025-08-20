'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon as Search, XMarkIcon as X } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface SiteSearchProps {
  className?: string
}

export function SiteSearch({ className }: SiteSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    
    // Simulate search functionality - replace with actual search implementation
    setTimeout(() => {
      // Navigate to search results page or handle search
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
      setIsSearching(false)
    }, 500)
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const quickSearches = [
    'Gun ranges near me',
    'FFL dealers Boise',
    'Shooting competitions',
    'Idaho gun laws',
    'Training courses',
    'Gun shows 2025'
  ]

  return (
    <Card className={`border-rusty-orange/20 ${className}`}>
      <CardHeader className="pb-4">
        <CardTitle className="font-rajdhani font-bold text-xl text-rusty-orange flex items-center gap-2">
          <Search className="h-5 w-5" />
          Search Our Community
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <form onSubmit={handleSearch} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dealers, events, guides..."
              className="w-full pl-4 pr-10 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-rusty-orange/50 focus:border-rusty-orange transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-rusty-orange transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          
          <Button 
            type="submit" 
            disabled={!searchQuery.trim() || isSearching}
            className="w-full bg-rusty-orange text-white hover:bg-rusty-orange/90 disabled:opacity-50 font-rajdhani font-bold"
          >
            {isSearching ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Searching...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search Community
              </div>
            )}
          </Button>
        </form>

        <div className="space-y-3">
          <h4 className="font-rajdhani font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Quick Searches
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {quickSearches.map((query, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(query)}
                className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-rusty-orange hover:bg-rusty-orange/10 rounded-sm transition-colors border border-transparent hover:border-rusty-orange/20"
              >
                {query}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Can't find what you're looking for? <button className="text-rusty-orange hover:underline">Contact our community</button>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}