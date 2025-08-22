'use client'


import { ArrowTrendingUpIcon, ArrowUpIcon, CameraIcon, ChartBarIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, ChevronRightIcon, CursorArrowRaysIcon, ExclamationTriangleIcon, FunnelIcon, GlobeAltIcon, ListBulletIcon, MagnifyingGlassIcon, MapPinIcon, NewspaperIcon, PlusIcon, RectangleGroupIcon, RectangleStackIcon, ShareIcon, ShieldCheckIcon, Squares2X2Icon, StarIcon, TableCellsIcon, ViewColumnsIcon, WindowIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SectionDivider } from '@/components/ui/section-divider'
import { WeatherConditionsTicker } from '@/components/ui/weather-conditions-ticker'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { EmptyState } from '@/components/ui/empty-state'
import { CardSkeleton } from '@/components/ui/card-skeleton'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { cn } from '@/lib/utils'
import { shootingLocations, getLocationStats, featuredWeatherLocations } from '@/lib/intel-locations-data'



interface IntelPageContentProps {
  liveWeatherConditions: any[]
  allWeatherData: any[]
}

export function IntelPageContent({ liveWeatherConditions: initialLive, allWeatherData: initialAll }: IntelPageContentProps) {
  const locationStats = getLocationStats()
  const [liveWeatherConditions, setLiveWeatherConditions] = useState(initialLive)
  const [allWeatherData, setAllWeatherData] = useState(initialAll)
  const [isLoadingWeather, setIsLoadingWeather] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    let isMounted = true
    
    // Fetch weather data client-side with proper cleanup
    const fetchWeatherData = async () => {
      if (liveWeatherConditions.length > 0 || !isMounted) return // Skip if we already have data or unmounted
      
      try {
        setIsLoadingWeather(true)
        
        // Add delay to prevent race conditions during navigation
        await new Promise(resolve => setTimeout(resolve, 100))
        
        if (!isMounted) return // Check again after delay
        
        // Fetch weather for featured locations (for the ticker)
        const response = await fetch('/api/weather/multiple', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ locations: featuredWeatherLocations })
        })
        
        if (!isMounted) return // Check before processing response
        
        if (response.ok) {
          const data = await response.json()
          if (isMounted) {
            setLiveWeatherConditions(data.weather || [])
          }
        } else {
        }
      } catch (error) {
        // Set fallback data to prevent component crashes
        if (isMounted) {
          setLiveWeatherConditions([])
        }
      } finally {
        if (isMounted) {
          setIsLoadingWeather(false)
        }
      }
    }

    // Slight delay to prevent immediate execution during navigation
    const timeoutId = setTimeout(fetchWeatherData, 200)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [])

  // Filter configuration for locations using the unified system
  const filters = useCardPageFilters({
    items: shootingLocations,
    initialTab: 'all',
    initialSortBy: 'distance',
    initialViewMode: 'grid',
    initialItemsPerPage: 12,
    perPageOptions: [8, 12, 24, 48],
    enableInfiniteScroll: false,
    
    // Search filter function
    searchFilter: (location, query) => {
      const searchTerms = query.toLowerCase()
      return (
        location.name.toLowerCase().includes(searchTerms) ||
        location.description.toLowerCase().includes(searchTerms) ||
        location.type.toLowerCase().includes(searchTerms) ||
        location.category.toLowerCase().includes(searchTerms) ||
        location.access?.toLowerCase().includes(searchTerms) ||
        location.difficulty.toLowerCase().includes(searchTerms)
      )
    },
    
    // Tab filter function
    tabFilter: (location, activeTab) => {
      switch (activeTab) {
        case 'public': return location.category === 'Public Range'
        case 'blm': return location.category === 'BLM Land'
        case 'indoor': return location.category === 'Indoor Range'
        case 'verified': return location.verified
        case 'nearby': return location.distanceFromBoise <= 15
        default: return true
      }
    },
    
    // Custom filters for advanced filtering
    customFilters: {
      difficulty: (location, selectedDifficulties) => {
        if (selectedDifficulties.length === 0) return true
        return selectedDifficulties.includes(location.difficulty)
      },
      category: (location, selectedCategories) => {
        if (selectedCategories.length === 0) return true
        return selectedCategories.some(cat => {
          switch(cat) {
            case 'blm': return location.category === 'BLM Land'
            case 'public': return location.category === 'Public Range'
            case 'indoor': return location.category === 'Indoor Range'
            case 'forest': return location.category === 'Forest Service'
            case 'municipal': return location.category === 'Municipal Range'
            default: return false
          }
        })
      },
      distance: (location, selectedRanges) => {
        if (selectedRanges.length === 0) return true
        return selectedRanges.some(range => {
          switch (range) {
            case 'under15': return location.distanceFromBoise <= 15
            case '15to30': return location.distanceFromBoise > 15 && location.distanceFromBoise <= 30
            case '30to60': return location.distanceFromBoise > 30 && location.distanceFromBoise <= 60
            case 'over60': return location.distanceFromBoise > 60
            default: return true
          }
        })
      },
      access: (location, selectedAccess) => {
        if (selectedAccess.length === 0) return true
        return selectedAccess.some(access => 
          location.access?.toLowerCase().includes(access.toLowerCase())
        )
      },
      verification: (location, selectedVerification) => {
        if (selectedVerification.length === 0) return true
        return selectedVerification.some(status => {
          if (status === 'verified') return location.verified
          if (status === 'unverified') return !location.verified
          return true
        })
      }
    },
    
    // Sort functions
    sortFunctions: {
      distance: (a, b) => a.distanceFromBoise - b.distanceFromBoise,
      alphabetical: (a, b) => a.name.localeCompare(b.name),
      difficulty: (a, b) => {
        const difficultyOrder = { 'Easy': 1, 'Moderate': 2, 'Difficult': 3 }
        return (difficultyOrder[a.difficulty] || 99) - (difficultyOrder[b.difficulty] || 99)
      },
      elevation: (a, b) => b.elevation - a.elevation,
      rating: (a, b) => (b.rating || 0) - (a.rating || 0)
    }
  })

  // Filter color mapping for locations
  const getFilterColor = (category: string, type: string): string => {
    switch (category) {
      case 'category':
        if (type === 'blm') return 'bg-sandy-ochre'
        if (type === 'public') return 'bg-nav-intel'
        if (type === 'indoor') return 'bg-slate-blue'
        if (type === 'forest') return 'bg-sagebrush-green'
        return 'bg-muted'
      case 'difficulty':
        if (type === 'easy') return 'bg-sagebrush-green'
        if (type === 'moderate') return 'bg-sandy-ochre'
        if (type === 'difficult') return 'bg-rusty-orange'
        return 'bg-muted'
      case 'distance':
        if (type === 'under15') return 'bg-nav-intel'
        if (type === '15to30') return 'bg-slate-blue'
        if (type === '30to60') return 'bg-sandy-ochre'
        if (type === 'over60') return 'bg-rusty-orange'
        return 'bg-muted'
      case 'access':
        if (type === 'free') return 'bg-sagebrush-green'
        if (type === 'fee') return 'bg-sandy-ochre'
        if (type === 'membership') return 'bg-nav-intel'
        return 'bg-muted'
      default:
        return 'bg-muted'
    }
  }

  // Modern filter sidebar configuration for shooting locations
  const filterSections = [
    {
      id: 'category',
      title: 'Location Type',
      maxVisible: 5,
      collapsible: true,
      options: [
        { id: 'blm', label: 'BLM Land', count: shootingLocations.filter(l => l.category === 'BLM Land').length, color: getFilterColor('category', 'blm') },
        { id: 'public', label: 'Public Range', count: shootingLocations.filter(l => l.category === 'Public Range').length, color: getFilterColor('category', 'public') },
        { id: 'indoor', label: 'Indoor Range', count: shootingLocations.filter(l => l.category === 'Indoor Range').length, color: getFilterColor('category', 'indoor') },
        { id: 'forest', label: 'Forest Service', count: shootingLocations.filter(l => l.category === 'Forest Service').length, color: getFilterColor('category', 'forest') },
        { id: 'municipal', label: 'Municipal Range', count: shootingLocations.filter(l => l.category === 'Municipal Range').length, color: getFilterColor('category', 'municipal') }
      ]
    },
    {
      id: 'difficulty',
      title: 'Access Difficulty',
      maxVisible: 3,
      collapsible: true,
      options: [
        { id: 'Easy', label: 'Easy Access', count: shootingLocations.filter(l => l.difficulty === 'Easy').length, color: getFilterColor('difficulty', 'easy') },
        { id: 'Moderate', label: 'Moderate', count: shootingLocations.filter(l => l.difficulty === 'Moderate').length, color: getFilterColor('difficulty', 'moderate') },
        { id: 'Difficult', label: 'Difficult/4WD', count: shootingLocations.filter(l => l.difficulty === 'Difficult').length, color: getFilterColor('difficulty', 'difficult') }
      ]
    },
    {
      id: 'distance',
      title: 'Distance from Boise',
      maxVisible: 4,
      collapsible: true,
      options: [
        { id: 'under15', label: 'Under 15 miles', count: shootingLocations.filter(l => l.distanceFromBoise <= 15).length, color: getFilterColor('distance', 'under15') },
        { id: '15to30', label: '15-30 miles', count: shootingLocations.filter(l => l.distanceFromBoise > 15 && l.distanceFromBoise <= 30).length, color: getFilterColor('distance', '15to30') },
        { id: '30to60', label: '30-60 miles', count: shootingLocations.filter(l => l.distanceFromBoise > 30 && l.distanceFromBoise <= 60).length, color: getFilterColor('distance', '30to60') },
        { id: 'over60', label: 'Over 60 miles', count: shootingLocations.filter(l => l.distanceFromBoise > 60).length, color: getFilterColor('distance', 'over60') }
      ]
    },
    {
      id: 'access',
      title: 'Access Type',
      maxVisible: 3,
      collapsible: true,
      options: [
        { id: 'free', label: 'Free Access', count: shootingLocations.filter(l => l.access?.toLowerCase().includes('free')).length, color: getFilterColor('access', 'free') },
        { id: 'fee', label: 'Fee Required', count: shootingLocations.filter(l => l.access?.toLowerCase().includes('fee')).length, color: getFilterColor('access', 'fee') },
        { id: 'membership', label: 'Membership', count: shootingLocations.filter(l => l.access?.toLowerCase().includes('member')).length, color: getFilterColor('access', 'membership') }
      ]
    },
    {
      id: 'verification',
      title: 'Verification Status',
      maxVisible: 2,
      collapsible: false,
      options: [
        { id: 'verified', label: 'Verified', count: shootingLocations.filter(l => l.verified).length, color: 'bg-sagebrush-green' },
        { id: 'unverified', label: 'Unverified', count: shootingLocations.filter(l => !l.verified).length, color: 'bg-muted' }
      ]
    }
  ]

  // Filter handlers for ModernFilterSidebar
  const handleFilterChange = (sectionId: string, optionId: string) => {
    // Special handling for verification filter
    if (sectionId === 'verification') {
      const isVerified = optionId === 'verified'
      filters.updateFilters('verified', isVerified.toString(), false)
    } else {
      filters.updateFilters(sectionId, optionId)
    }
  }

  const handleClearSection = (sectionId: string) => {
    filters.clearFilterSection(sectionId)
  }

  const handleClearAll = () => {
    filters.clearAllFilters()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Map Hero - Content Left, Card Right (Layout 1) */}
      <section className="relative overflow-hidden bg-gradient-intel-hero px-md py-lg">
        {/* Topographic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('/images/Heroes/tbgc-intel-hero-background.webp')",
            backgroundPosition: 'center right'
          }}
        ></div>
        <div className="container mx-auto max-w-site relative z-10">
          <div className="hero-grid-layout">
            {/* Content - Left side - 2/3 width */}
            <div className="h-full flex flex-col justify-center space-y-mobile-lg sm:space-y-lg py-mobile-md sm:py-md">
              {/* Top Header - Icon, Breadcrumbs & Badges Chunk */}
              <div className="flex items-center gap-base">
                <div className="bg-card/10 p-base rounded-xs border border-border">
                  <GlobeAltIcon className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-base">
                  {/* Breadcrumbs */}
                  <div className="flex items-center gap-xs text-sm text-white/60">
                    <span>Home</span>
                    <ChevronRightIcon className="h-4 w-4" />
                    <span className="text-white font-medium">Intel</span>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-xs">
                    <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                      <MapPinIcon className="h-4 w-4 mr-xs" />
                      Shooting Locations
                    </Badge>
                    <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                      <ShieldCheckIcon className="h-4 w-4 mr-xs" />
                      Verified Areas
                    </Badge>
                    <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                      <MapPinIcon className="h-4 w-4 mr-xs" />
                      BLM & Forest Service
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Titles - H1 & H2 Butt Buddies */}
              <div className="space-y-xs">
                <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                  Idaho Shooting Locations & <span className="text-white">Ranges Map</span>
                </h1>
                <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                  BLM Land & Public Shooting Areas Near Boise
                </h2>
              </div>
              
              {/* Chunky Description */}
              <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
                Find legal shooting locations across Idaho including BLM land, Forest Service areas, and designated ranges. Community-verified locations with access requirements and safety information.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-base">
                <Button 
                  variant="solid-primary" className="bg-nav-intel text-white hover:bg-white hover:text-nav-intel font-rajdhani font-bold"
                >
                  <PlusIcon className="h-4 w-4 mr-xs" />
                  Submit Location
                </Button>
                <Button 
                  variant="outline" className="border-border text-white hover:bg-card hover:text-nav-intel"
                >
                  View Interactive Map
                </Button>
              </div>
            </div>
            
            {/* Featured Location Card - Right side - 1/3 width */}
            <div className="py-mobile-md sm:py-md">
              <div className="relative h-full">
                <Card className="mica border-nav-intel/30 shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                  {/* Hero Image Background */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full bg-nav-intel/10 opacity-20 rounded-xs" />
                    <div className="absolute inset-0 bg-gradient-to-br from-nav-intel/10 to-nav-intel/30" />
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-intel/20 to-nav-intel/10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-intel to-nav-intel"></div>
                  
                  <CardHeader className="pb-xs relative z-10">
                    <div className="flex items-center justify-between mb-xs">
                      <div className="flex items-center gap-xs">
                        <Badge variant="outline" size="xs">
                          UNVERIFIED
                        </Badge>
                      </div>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <StarIcon className="h-3 w-3 fill-nav-intel text-nav-intel" />
                        <span>4.5</span>
                      </div>
                    </div>
                    
                    <div className="space-y-xs">
                      <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">Lucky Peak Area</h3>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <MapPinIcon className="h-3 w-3 text-nav-intel" />
                        <span>Near Lucky Peak Dam, ID</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-base relative z-10">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      Established shooting area with improved backstops and designated firing lines. Popular with locals and well-maintained.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <ArrowUpIcon className="h-3 w-3 text-nav-intel" />
                        <span>Free Access</span>
                      </div>
                      <Button 
                        variant="solid-primary"
                        className="bg-gradient-to-r from-nav-intel to-nav-intel text-gruvbox-bg-dark hover:from-nav-intel hover:to-nav-intel font-rajdhani font-bold text-xs"
                        size="sm"
                      >
                        VIEW DETAILS
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Conditions Ticker - Live Data with Caching */}
      {isLoadingWeather ? (
        <section className="py-xs bg-nav-intel/5 border-b">
          <div className="container mx-auto max-w-site px-md">
            <div className="flex items-center justify-center space-x-base h-4">
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-nav-intel"></div>
              <span className="text-xs text-nav-intel font-rajdhani font-semibold">Loading weather conditions...</span>
            </div>
          </div>
        </section>
      ) : liveWeatherConditions.length > 0 ? (
        <WeatherConditionsTicker conditions={liveWeatherConditions} />
      ) : (
        <section className="py-xs bg-muted/30 border-b">
          <div className="container mx-auto max-w-site px-md">
            <div className="text-center text-muted-foreground h-4">
              <span className="text-xs font-rajdhani">Weather data temporarily unavailable</span>
            </div>
          </div>
        </section>
      )}



      {/* Shooting Locations Gallery - Unified Filter System */}
      <section className="py-mobile-2xl sm:py-4xl bg-background/50">
        <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
          <div className="flex flex-col lg:flex-row gap-mobile-lg sm:gap-2xl max-w-[1920px] mx-auto">
            
            {/* Left Sidebar - Modern Filter System (Desktop) */}
            <aside className="hidden lg:block w-80">
              <div className="space-y-6 sticky top-4">
                <div className="space-y-lg">
                  <Badge variant="outline" size="default">
                    Featured Locations
                  </Badge>
                  <h2 className="font-rajdhani text-4xl font-bold text-card-foreground leading-tight">
                    Idaho Shooting <span className="text-nav-intel">Locations</span>
                  </h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    Verified shooting areas across Idaho with detailed access information and community feedback.
                  </p>
                </div>
                
                {/* Modern Filter Sidebar */}
                <ModernFilterSidebar
                  sections={filterSections}
                  selectedFilters={filters.selectedFilters}
                  onFilterChange={handleFilterChange}
                  onClearSection={handleClearSection}
                  onClearAll={handleClearAll}
                  totalResults={filters.totalResults}
                  filteredResults={filters.filteredResults}
                />
              </div>
            </aside>
            
            {/* Mobile Filter Sidebar */}
            <ModernFilterSidebar
              sections={filterSections}
              selectedFilters={filters.selectedFilters}
              onFilterChange={handleFilterChange}
              onClearSection={handleClearSection}
              onClearAll={handleClearAll}
              totalResults={filters.totalResults}
              filteredResults={filters.filteredResults}
              isMobile={true}
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
            
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Search and Category Controls */}
              <div className="mb-xl space-y-lg">
                {/* Search Bar with Mobile Filter Toggle */}
                <div className="flex gap-base">
                  <div className="relative flex-1 max-w-2xl">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      placeholder="Search locations, access types, or amenities..."
                      className="w-full pl-10 h-12 text-body-base bg-background border border-border rounded-xs px-base focus:outline-none focus:ring-2 focus:ring-nav-intel/50"
                      value={filters.searchQuery}
                      onChange={(e) => filters.setSearchQuery(e.target.value)}
                    />
                  </div>
                  {/* Mobile Filter Toggle */}
                  <Button
                    variant="outline"
                    size="default"
                    className="lg:hidden gap-xs"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <FunnelIcon className="h-4 w-4" />
                    Filters
                    {Object.values(filters.selectedFilters).flat().length > 0 && (
                      <Badge variant="outline" size="sm" className="ml-xs">
                        {Object.values(filters.selectedFilters).flat().length}
                      </Badge>
                    )}
                  </Button>
                </div>

              </div>

              {/* Results Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base sm:gap-xl mb-xl sm:mb-2xl lg:mb-3xl">
                <div>
                  <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                    {filters.filteredItems.length} Locations Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filters.activeTab !== 'all' ? 'Filtered results' : 'All shooting areas across Idaho'}
                  </p>
                </div>
                
                {/* View Controls with Multi-View Mode */}
                <div className="flex items-center gap-sm sm:gap-base">
                  {/* Enhanced View Mode Toggle - Multiple Layouts */}
                  <div className="hidden sm:flex items-center border rounded-xs overflow-x-auto">
                    <Button
                      variant={filters.viewMode === 'compact' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('compact')}
                      className="rounded-none"
                      title="Compact - 4-6 items per row"
                    >
                      <Squares2X2Icon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'dense' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('dense')}
                      className="rounded-none"
                      title="Dense Grid - Maximum items"
                    >
                      <ListBulletIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('grid')}
                      className="rounded-none"
                      title="Standard Grid"
                    >
                      <Squares2X2Icon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'card' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('card')}
                      className="rounded-none"
                      title="Large Cards"
                    >
                      <RectangleGroupIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'masonry' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('masonry')}
                      className="rounded-none"
                      title="Masonry Layout"
                    >
                      <RectangleStackIcon className="size-4" />
                    </Button>
                    <Button
                      variant={filters.viewMode === 'table' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => filters.setViewMode('table')}
                      className="rounded-none"
                      title="Table View"
                    >
                      <TableCellsIcon className="size-4" />
                    </Button>
                  </div>
                  
                  {/* Sort Dropdown */}
                  <select 
                    className="bg-background border border-border rounded-xs px-base py-xs text-sm font-rajdhani"
                    value={filters.sortBy}
                    onChange={(e) => filters.setSortBy(e.target.value)}
                  >
                    <option value="distance">Sort by Distance</option>
                    <option value="alphabetical">Sort A-Z</option>
                    <option value="difficulty">Sort by Difficulty</option>
                    <option value="elevation">Sort by Elevation</option>
                    <option value="rating">Sort by Rating</option>
                  </select>
                </div>
              </div>

              {/* Location Cards Grid - Dynamic Layout Based on View Mode */}
              {filters.isLoading ? (
                <CardSkeleton 
                  viewMode={filters.viewMode} 
                  count={filters.itemsPerPage} 
                  className={filters.getGridClassName()}
                />
              ) : (
                <div className={filters.getGridClassName()}>
                  {filters.paginatedItems.length > 0 ? (
                    filters.paginatedItems.map((location, index) => {
                  const locationSlug = location.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').trim().replace(/^-|-$/g, '')
                  
                  // Get location type gradient
                  const getLocationGradient = (category: string) => {
                    if (category.includes('Public')) return 'card-gradient-public'
                    if (category.includes('BLM')) return 'card-gradient-blm'
                    if (category.includes('Indoor')) return 'card-gradient-indoor'
                    if (category.includes('Municipal')) return 'card-gradient-municipal'
                    return 'card-gradient-intel'
                  }
                  
                  
                  return (
                    <Link key={location.name} href={`/intel/locations/${locationSlug}`} className="block">
                      <div 
                        className={cn(
                          "transition-all duration-300 group relative overflow-hidden cursor-pointer rounded-xs",
                          "bg-card text-card-foreground border border-border p-lg",
                          "shadow-ghost hover:shadow-present",
                          "tactical-underline-base tactical-underline-intel"
                        )}
                      >
                      
                      {/* Tactical Hero Section - Matching EventCard */}
                      <div className={cn(
                        "relative mb-lg -m-lg h-32 overflow-hidden border-b border-white/10",
                        getLocationGradient(location.category)
                      )}>
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        
                        {/* Tactical Action Buttons - top right */}
                        <div className="absolute top-sm right-sm flex gap-xs">
                          <button
                            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-intel hover:border-nav-intel transition-all duration-200"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              // Share location
                            }}
                            title="Share location"
                          >
                            <ShareIcon className="h-4 w-4 text-white" />
                          </button>
                          
                          <button
                            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-intel hover:border-nav-intel transition-all duration-200"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              // Bookmark location
                            }}
                            title="Bookmark location"
                          >
                            <StarIcon className="h-4 w-4 text-white" />
                          </button>
                        </div>
                        
                        {/* Distance badge overlay */}
                        <div className="absolute top-sm left-sm">
                          <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
                            <div className="text-center">
                              <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
                                {location.distanceFromBoise}
                              </div>
                              <div className="font-rajdhani font-black text-lg text-white leading-none">
                                MI
                              </div>
                              <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
                                Away
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        
                        {/* Subtle texture particles */}
                        <div className="absolute top-2 right-6 w-0.5 h-0.5 bg-card/30 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-8 w-0.5 h-0.5 bg-card/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <div className="absolute top-6 right-12 w-0.5 h-0.5 bg-card/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                      </div>
                      
                      <div className="space-y-md">
                        {/* Header - Matching EventCard Typography */}
                        <div className="space-y-sm">
                          <div className="space-y-0">
                            <h2 className="font-rajdhani font-bold text-xl text-card-foreground leading-tight line-clamp-2 group-hover:text-nav-intel transition-colors duration-200">
                              {location.name}
                            </h2>
                            <h3 className="font-noto-serif text-base text-muted-foreground leading-tight">
                              {location.type} • {location.access}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {location.description}
                        </p>

                        {/* Smart Badges - Verification and Difficulty */}
                        <div className="flex flex-wrap gap-xs">
                          {location.verified && (
                            <Badge variant="outline" size="sm">
                              <ShieldCheckIcon className="w-3 h-3 mr-xs" />
                              Verified
                            </Badge>
                          )}
                          <Badge variant="outline" size="sm">
                            {location.difficulty}
                          </Badge>
                          <Badge variant="outline" size="sm">
                            {location.type}
                          </Badge>
                        </div>

                        {/* Info Grid - Matching EventCard */}
                        <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
                          <div className="flex items-center gap-sm text-sm">
                            <MapPinIcon className="size-4 flex-shrink-0 text-nav-intel" />
                            <span className="font-medium text-card-foreground">{location.distanceFromBoise} mi away</span>
                          </div>
                          <div className="flex items-center gap-sm text-sm">
                            <ArrowUpIcon className="size-4 flex-shrink-0 text-nav-intel" />
                            <span className="text-muted-foreground">{location.access}</span>
                          </div>
                          <div className="flex items-center gap-sm text-sm">
                            <GlobeAltIcon className="size-4 flex-shrink-0 text-nav-intel" />
                            <span className="text-muted-foreground">{location.difficulty} difficulty</span>
                          </div>
                          <div className="flex items-center gap-sm text-sm">
                            <ArrowTrendingUpIcon className="size-4 flex-shrink-0 text-nav-intel" />
                            <span className="text-muted-foreground">{location.elevation}ft elevation</span>
                          </div>
                        </div>

                        {/* CTA Button - Matching EventCard */}
                        <div className="pt-sm">
                          <Button 
                            size="sm"
                            variant="outline"
                            className="w-full border-nav-intel/30 text-nav-intel group-hover:bg-nav-intel group-hover:text-white group-hover:border-nav-intel transition-all duration-300 font-rajdhani font-bold" 
                            animationType="arrow"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                      </div>
                    </Link>
                  )
                })
              ) : (
                <EmptyState
                  icon={MapPin}
                  title="No locations found"
                  description="Try adjusting your filters or search terms"
                  onAction={
                    <Button
                      variant="outline"
                      onClick={() => {
                        filters.setSearchQuery('')
                        filters.setActiveTab('all')
                      }}
                    >
                      Clear Filters
                    </Button>
                  }
                />
              )}
            </div>
          )}
              
              {/* Pagination or Load More */}
              {!filters.isLoading && filters.filteredItems.length > filters.itemsPerPage && (
                <div className="mt-xl flex justify-center">
                  <div className="flex items-center gap-xs">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => filters.setCurrentPage(Math.max(1, filters.currentPage - 1))}
                      disabled={filters.currentPage === 1}
                    >
                      Previous
                    </Button>
                    <span className="px-base text-sm text-muted-foreground">
                      Page {filters.currentPage} of {Math.ceil(filters.filteredItems.length / filters.itemsPerPage)}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => filters.setCurrentPage(Math.min(Math.ceil(filters.filteredItems.length / filters.itemsPerPage), filters.currentPage + 1))}
                      disabled={filters.currentPage >= Math.ceil(filters.filteredItems.length / filters.itemsPerPage)}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="sights" spacing="none" />

      {/* Community Activity - Full Width, Left Aligned */}
      <section className="py-4xl bg-gradient-to-br from-nav-intel/5 to-nav-intel/10">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Content - Left aligned */}
            <div className="lg:col-span-1 space-y-base">
              <div>
                <Badge variant="outline" size="default">
                  Live Updates
                </Badge>
                <h2 className="font-rajdhani text-3xl font-bold text-card-foreground mt-base">
                  Community <span className="text-nav-intel">Activity</span>
                </h2>
                <p className="text-muted-foreground mt-base">
                  Real-time updates from our community including new locations, safety alerts, and verified information.
                </p>
              </div>
              
              {/* Verification Stats - Honest Numbers */}
              <div className="grid grid-cols-3 gap-xs">
                <div className="bg-card/50 p-xs rounded-sm text-center border border-nav-intel/20">
                  <p className="text-lg font-bold text-nav-intel font-rajdhani">{locationStats.verifiedLocations}</p>
                  <p className="text-xs text-muted-foreground">Verified</p>
                </div>
                <div className="bg-card/50 p-xs rounded-sm text-center border border-nav-intel/20">
                  <p className="text-lg font-bold text-warning-clay font-rajdhani">{locationStats.totalLocations - locationStats.verifiedLocations}</p>
                  <p className="text-xs text-muted-foreground">Need Review</p>
                </div>
                <div className="bg-card/50 p-xs rounded-sm text-center border border-nav-intel/20">
                  <p className="text-lg font-bold text-nav-intel font-rajdhani">0</p>
                  <p className="text-xs text-muted-foreground">In Progress</p>
                </div>
              </div>
            </div>
            
            {/* Activity Feed - Right side */}
            <div className="lg:col-span-2 space-y-base">
              <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                <div className="flex items-start gap-base p-base">
                  <div className="w-8 h-8 rounded-full bg-nav-intel/20 flex items-center justify-center flex-shrink-0">
                    <PlusIcon className="h-4 w-4 text-nav-intel" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-xs">
                      <p className="font-medium text-card-foreground text-sm">New location submitted: Table Rock Area</p>
                      <span className="text-xs text-muted-foreground">2h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Waiting for community verification</p>
                  </div>
                </div>
              </Card>
              
              <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                <div className="flex items-start gap-base p-base">
                  <div className="w-8 h-8 rounded-full bg-warning-clay/20 flex items-center justify-center flex-shrink-0">
                    <CameraIcon className="h-4 w-4 text-warning-clay" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-xs">
                      <p className="font-medium text-card-foreground text-sm">Photos needed: Snake River Area</p>
                      <span className="text-xs text-muted-foreground">6h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Help verify access conditions and backstops</p>
                  </div>
                </div>
              </Card>
              
              <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                <div className="flex items-start gap-base p-base">
                  <div className="w-8 h-8 rounded-full bg-warning-clay/20 flex items-center justify-center flex-shrink-0">
                    <ExclamationTriangleIcon className="h-4 w-4 text-warning-clay" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-xs">
                      <p className="font-medium text-card-foreground text-sm">6 locations need verification</p>
                      <span className="text-xs text-muted-foreground">1d ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Community help needed to verify safety and access info</p>
                  </div>
                </div>
              </Card>
              
              {/* Contribute Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-xs mt-base">
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate">
                  <PlusIcon className="h-3 w-3 mr-xs" />
                  Submit
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate">
                  <CameraIcon className="h-3 w-3 mr-xs" />
                  Photos
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate">
                  <ChatBubbleLeftRightIcon className="h-3 w-3 mr-xs" />
                  Review
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-dark-chocolate">
                  <ExclamationTriangleIcon className="h-3 w-3 mr-xs" />
                  Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-4xl bg-gradient-to-br from-dark-chocolate/95 to-warm-stone/90">
        <div className="container mx-auto max-w-site px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-canyon-clay/20 text-canyon-clay border-canyon-clay/30">
              <ShieldCheckIcon className="h-4 w-4 mr-xs" />
              Safety First
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-crisp-off-white">
              Shoot <span className="text-rusty-orange">Responsibly</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg text-left max-w-3xl mx-auto">
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-crisp-off-white">Before You Go:</h3>
                <ul className="space-y-xs text-crisp-off-white/80">
                  <li className="flex items-center gap-xs">• Check current fire restrictions</li>
                  <li className="flex items-center gap-xs">• Verify seasonal closures</li>
                  <li className="flex items-center gap-xs">• Bring adequate backstop if needed</li>
                  <li className="flex items-center gap-xs">• Pack out all trash and targets</li>
                </ul>
              </div>
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-crisp-off-white">Safety Rules:</h3>
                <ul className="space-y-xs text-crisp-off-white/80">
                  <li className="flex items-center gap-xs">• Follow the four fundamental rules</li>
                  <li className="flex items-center gap-xs">• Be aware of your surroundings</li>
                  <li className="flex items-center gap-xs">• Respect private property</li>
                  <li className="flex items-center gap-xs">• Report unsafe conditions</li>
                </ul>
              </div>
            </div>
            <Button 
              variant="solid-accent"
              size="xl" 
              className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
            >
              Submit New Location
            </Button>
          </div>
        </div>
      </section>

        {/* Trust Indicators - Real Location Data */}
        <section className="py-xl section-bg-intel-premium section-skew-subtle">
          <div className="container mx-auto max-w-site px-md text-center">
            <h2 className="text-heading-xl font-rajdhani font-bold text-card-foreground mb-base">
              Idaho's Premier Shooting Intelligence Hub
            </h2>
            <TrustIndicators className="mb-lg" />
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time conditions, verified locations, and community-contributed intel for safe and responsible shooting across Idaho's public lands.
            </p>
          </div>
        </section>

        {/* Community Contribution CTA */}
        <section className="py-4xl section-bg-sharp">
          <div className="container mx-auto max-w-site px-md">
            <ContributionCTA />
          </div>
        </section>
    </div>
  )
}