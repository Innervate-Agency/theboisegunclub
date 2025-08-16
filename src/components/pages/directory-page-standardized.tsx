'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { VendorCard } from '@/components/ui/VendorCard'
import { CardPageLayout } from '@/components/ui/card-page-layout'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { FeaturedEventSpotlight } from '@/components/ui/featured-event-spotlight'
import { 
  AddressBook, Shield, Target, Users, MapPin, Star, 
  Phone, CheckCircle, Plus, ArrowRight, CaretRight,
  Trophy, Lightning as Zap, ChatCircle, Wrench, ShoppingBag,
  GraduationCap, Crown, Medal
} from '@phosphor-icons/react'

// Business data type
interface BusinessData {
  businessName: string
  businessType: string
  description: string
  address: string
  phone: string
  website: string
  hours: string
  tier: 'gold' | 'silver' | 'bronze' | 'standard'
  specialties: string[]
  isVerified: boolean
  isSponsored: boolean
  imageUrl?: string
  slug: string
  category: 'Range' | 'Gunsmith' | 'Training' | 'Retail' | 'Club' | 'Service'
  rating?: number
  reviewCount?: number
  featured?: boolean
}

// Sample business data - extracted from existing directory
const directoryListings: BusinessData[] = [
  {
    businessName: "Independence Indoor Shooting",
    businessType: "Premier Indoor Shooting Range",
    description: "The region's largest and most modern indoor facility. Three ranges, including a 100-yard range, retail pro shop, and full-service gunsmithing.",
    address: "2749 E Gala Ct, Meridian, ID 83642",
    phone: "(208) 576-4867",
    website: "https://www.iishooting.com/",
    hours: "Mon-Sat: 10AM-8PM, Sun: 10AM-6PM",
    tier: "gold",
    specialties: ["100-Yard Indoor Range", "Tactical Range", "Gunsmithing", "Retail Pro Shop", "Training Academy"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/independence-indoor.jpg",
    slug: "independence-indoor-shooting",
    category: "Range",
    rating: 4.8,
    reviewCount: 234,
    featured: true
  },
  {
    businessName: "Precision Rifle Works",
    businessType: "Custom Precision Shop",
    description: "Specialized in long-range precision rifles, custom bolt actions, and competition rifle builds. Award-winning gunsmith with 20+ years experience.",
    address: "456 Precision Ave, Eagle, ID 83616",
    phone: "(208) 555-0987",
    website: "https://precisionrifle.com",
    hours: "Tue-Fri: 9AM-6PM, Sat: 9AM-3PM",
    tier: "gold",
    specialties: ["Precision Rifles", "Custom Bolt Actions", "Competition Builds", "Load Development", "Cerakote"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/precision-rifle.jpg",
    slug: "precision-rifle-works",
    category: "Gunsmith",
    rating: 4.9,
    reviewCount: 89,
    featured: true
  },
  {
    businessName: "Nampa Rod & Gun Club",
    businessType: "Private Shooting Club",
    description: "Idaho's premier private shooting club with 100+ year history serving the Treasure Valley firearms community. Multiple ranges, competitions, and training programs.",
    address: "7990 Bennet Road, Nampa, ID 83687",
    phone: "(208) 466-3647",
    website: "https://nampagunclub.org",
    hours: "Wednesday-Sunday: 9AM-6PM, Monday-Tuesday: Closed",
    tier: "gold",
    specialties: ["USPSA Competition", "Precision Rifle Training", "Trap & Skeet Leagues", "Youth Development", "Hunter Safety Education"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/nampa-gun-club.jpg",
    slug: "nampa-rod-gun-club",
    category: "Club",
    rating: 4.7,
    reviewCount: 156,
    featured: true
  },
  {
    businessName: "Double Tapp Range",
    businessType: "Indoor/Outdoor Range",
    description: "Multi-purpose range facility offering indoor and outdoor ranges, training programs, and equipment rental in the heart of Nampa.",
    address: "1234 Range Road, Nampa, ID 83651",
    phone: "(208) 555-0123",
    website: "https://doubletapp.com",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    tier: "silver",
    specialties: ["Indoor Range", "Outdoor Range", "Training Programs", "Equipment Rental", "Birthday Parties"],
    isVerified: true,
    isSponsored: false,
    slug: "double-tapp-range",
    category: "Range",
    rating: 4.6,
    reviewCount: 78,
    featured: false
  },
  {
    businessName: "Caldwell Gun Club",
    businessType: "Shooting Sports Club",
    description: "Established shooting club featuring trap, skeet, and sporting clays. Home to major competitions and charity events throughout the year.",
    address: "21840 Pond Ln, Caldwell, ID 83607",
    phone: "(208) 459-3471",
    website: "https://caldwellgunclub.com",
    hours: "Wed-Sun: 9AM-Dusk, Mon-Tue: Closed",
    tier: "silver",
    specialties: ["Trap & Skeet", "Sporting Clays", "Charity Events", "Competition Hosting", "Youth Programs"],
    isVerified: true,
    isSponsored: false,
    slug: "caldwell-gun-club",
    category: "Club",
    rating: 4.5,
    reviewCount: 112,
    featured: false
  },
  {
    businessName: "Treasure Valley Armory",
    businessType: "Firearms Retailer",
    description: "Full-service firearms dealer specializing in tactical and sporting firearms, ammunition, and accessories. Expert staff and competitive pricing.",
    address: "567 Commerce St, Boise, ID 83702",
    phone: "(208) 555-0456",
    website: "https://tvarmory.com",
    hours: "Mon-Fri: 10AM-7PM, Sat: 10AM-6PM, Sun: 12PM-5PM",
    tier: "silver",
    specialties: ["Tactical Firearms", "Sporting Arms", "Ammunition", "Optics", "Accessories"],
    isVerified: true,
    isSponsored: false,
    slug: "treasure-valley-armory",
    category: "Retail",
    rating: 4.4,
    reviewCount: 203,
    featured: false
  }
]

export function DirectoryPageStandardized() {
  // Activity feed data for directory
  const activityFeedData = [
    {
      icon: Shield,
      iconColor: "text-nav-directory",
      iconBgColor: "bg-nav-directory/20",
      title: "New Business Verified",
      description: "Black Rifle Precision added to verified vendor list",
      timeAgo: "2h ago"
    },
    {
      icon: Star,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20",
      title: "5-Star Review",
      description: "Independence Indoor Shooting receives another perfect rating",
      timeAgo: "4h ago"
    },
    {
      icon: Wrench,
      iconColor: "text-warm-stone",
      iconBgColor: "bg-warm-stone/20",
      title: "Service Update",
      description: "Precision Arms now offering same-day sight installation",
      timeAgo: "6h ago"
    }
  ]

  // Directory category stats
  const directoryCategoryStats = [
    { icon: Target, title: "Shooting Ranges", value: "8", subtitle: "Active locations", color: "text-nav-directory" },
    { icon: ShoppingBag, title: "Gun Stores", value: "27", subtitle: "Retail partners", color: "text-nav-directory" },
    { icon: Wrench, title: "Gunsmiths", value: "12", subtitle: "Service providers", color: "text-nav-directory" },
    { icon: GraduationCap, title: "Training Centers", value: "9", subtitle: "Education facilities", color: "text-nav-directory" },
    { icon: Users, title: "Gun Clubs", value: "6", subtitle: "Member organizations", color: "text-nav-directory" },
    { icon: CheckCircle, title: "FFLs", value: "18", subtitle: "Licensed dealers", color: "text-nav-directory" }
  ]

  // Filter configuration
  const filters = useCardPageFilters({
    items: directoryListings,
    initialTab: 'all',
    initialSortBy: 'featured',
    initialViewMode: 'card', // Card view is better for business listings
    itemsPerPage: 12,
    
    // Search filter function
    searchFilter: (business, query) => {
      const searchTerms = query.toLowerCase()
      return (
        business.businessName.toLowerCase().includes(searchTerms) ||
        business.businessType.toLowerCase().includes(searchTerms) ||
        business.description.toLowerCase().includes(searchTerms) ||
        business.address.toLowerCase().includes(searchTerms) ||
        business.specialties.some(specialty => specialty.toLowerCase().includes(searchTerms))
      )
    },
    
    // Tab filter function
    tabFilter: (business, activeTab) => {
      switch (activeTab) {
        case 'ranges': return business.category === 'Range'
        case 'gunsmiths': return business.category === 'Gunsmith'
        case 'training': return business.category === 'Training'
        case 'retail': return business.category === 'Retail'
        case 'clubs': return business.category === 'Club'
        case 'verified': return business.isVerified
        case 'featured': return business.featured || false
        default: return true
      }
    },
    
    // Custom filters
    customFilters: {
      tier: (business, selectedTiers) => selectedTiers.includes(business.tier),
      category: (business, selectedCategories) => selectedCategories.includes(business.category.toLowerCase()),
      verification: (business, selectedOptions) => {
        if (selectedOptions.includes('verified')) return business.isVerified
        if (selectedOptions.includes('sponsored')) return business.isSponsored
        return true
      },
      location: (business, selectedLocations) => {
        const city = business.address.split(',')[1]?.trim().toLowerCase() || ''
        return selectedLocations.some(loc => city.includes(loc))
      }
    },
    
    // Sort functions
    sortFunctions: {
      featured: (a, b) => {
        // Featured first, then by tier, then by name
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        const tierOrder = { gold: 0, silver: 1, bronze: 2, standard: 3 }
        const tierDiff = tierOrder[a.tier] - tierOrder[b.tier]
        if (tierDiff !== 0) return tierDiff
        return a.businessName.localeCompare(b.businessName)
      },
      alphabetical: (a, b) => a.businessName.localeCompare(b.businessName),
      rating: (a, b) => (b.rating || 0) - (a.rating || 0),
      tier: (a, b) => {
        const tierOrder = { gold: 0, silver: 1, bronze: 2, standard: 3 }
        return tierOrder[a.tier] - tierOrder[b.tier]
      },
      location: (a, b) => a.address.localeCompare(b.address)
    }
  })

  // Hero content
  const heroContent = (
    <div className="container mx-auto max-w-site relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
        {/* Content - Left side */}
        <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
          <div className="flex items-center gap-base">
            <div className="bg-card/10 p-base rounded-xs border border-border">
              <AddressBook weight="bold" className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-base">
              <div className="flex items-center gap-xs text-sm text-white/60">
                <span>Home</span>
                <CaretRight className="h-4 w-4" />
                <span className="text-white font-medium">Directory</span>
              </div>
              <div className="flex flex-wrap gap-xs">
                <Badge className="bg-card/10 text-white border-border rounded-xs">
                  <Shield weight="bold" className="h-4 w-4 mr-xs" />
                  Verified
                </Badge>
                <Badge className="bg-card/10 text-white border-border rounded-xs">
                  <Target weight="bold" className="h-4 w-4 mr-xs" />
                  Ranges
                </Badge>
                <Badge className="bg-card/10 text-white border-border rounded-xs">
                  <Wrench weight="bold" className="h-4 w-4 mr-xs" />
                  Services
                </Badge>
              </div>
            </div>
          </div>
          <div className="space-y-xs">
            <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
              Treasure Valley Firearms Directory
            </h1>
            <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
              Verified Ranges, Gunsmiths, and Services Across Idaho
            </h2>
          </div>
          <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
            Connect with Idaho's premier firearms businesses. From indoor ranges to custom gunsmiths, find verified, trusted services in your area.
          </p>
          <div className="flex gap-base">
            <Button size="lg" className="bg-white text-nav-directory hover:bg-crisp-off-white font-rajdhani font-bold" animationType="plus-minus">
              <Plus className="h-4 w-4 mr-xs" />
              List Business
            </Button>
            <Button variant="outline" size="lg" className="border-border text-white hover:bg-white hover:text-nav-directory" animationType="arrow">
              View Map
            </Button>
          </div>
        </div>

        {/* Featured Business Card - Right side */}
        <div className="lg:col-span-1 py-md min-h-[400px]">
          <div className="relative h-full">
            {directoryListings.find(b => b.featured) && (
              <VendorCard
                businessName={directoryListings.find(b => b.featured)!.businessName}
                businessType={directoryListings.find(b => b.featured)!.businessType}
                description={directoryListings.find(b => b.featured)!.description}
                address={directoryListings.find(b => b.featured)!.address}
                phone={directoryListings.find(b => b.featured)!.phone}
                website={directoryListings.find(b => b.featured)!.website}
                hours={directoryListings.find(b => b.featured)!.hours}
                tier={directoryListings.find(b => b.featured)!.tier}
                specialties={directoryListings.find(b => b.featured)!.specialties}
                isVerified={directoryListings.find(b => b.featured)!.isVerified}
                isSponsored={directoryListings.find(b => b.featured)!.isSponsored}
                href={`/directory/${directoryListings.find(b => b.featured)!.slug}`}
                className="h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <CardPageLayout
      pageTitle="Directory"
      pageSubtitle="Treasure Valley Firearms Directory"
      pageColor="directory"
      heroContent={heroContent}
      searchQuery={filters.searchQuery}
      onSearchChange={filters.setSearchQuery}
      searchPlaceholder="Search businesses, services, or locations..."
      
      quickTabs={[
        { id: 'all', label: 'All Businesses', count: directoryListings.length, icon: AddressBook },
        { id: 'ranges', label: 'Ranges', count: directoryListings.filter(b => b.category === 'Range').length, icon: Target },
        { id: 'gunsmiths', label: 'Gunsmiths', count: directoryListings.filter(b => b.category === 'Gunsmith').length, icon: Wrench },
        { id: 'training', label: 'Training', count: directoryListings.filter(b => b.category === 'Training').length, icon: GraduationCap },
        { id: 'retail', label: 'Retail', count: directoryListings.filter(b => b.category === 'Retail').length, icon: ShoppingBag },
        { id: 'clubs', label: 'Clubs', count: directoryListings.filter(b => b.category === 'Club').length, icon: Users },
        { id: 'verified', label: 'Verified', count: directoryListings.filter(b => b.isVerified).length, icon: CheckCircle },
        { id: 'featured', label: 'Featured', count: directoryListings.filter(b => b.featured).length }
      ]}
      activeTab={filters.activeTab}
      onTabChange={filters.setActiveTab}
      
      filterSections={[
        {
          title: 'Business Type',
          filters: [
            { id: 'range', label: 'Shooting Ranges', icon: Target, count: directoryListings.filter(b => b.category === 'Range').length },
            { id: 'gunsmith', label: 'Gunsmiths', icon: Wrench, count: directoryListings.filter(b => b.category === 'Gunsmith').length },
            { id: 'training', label: 'Training', icon: GraduationCap, count: directoryListings.filter(b => b.category === 'Training').length },
            { id: 'retail', label: 'Retail', icon: ShoppingBag, count: directoryListings.filter(b => b.category === 'Retail').length },
            { id: 'club', label: 'Clubs', icon: Users, count: directoryListings.filter(b => b.category === 'Club').length }
          ],
          selectedFilters: filters.selectedFilters.category || [],
          onFilterChange: (filterId) => filters.updateFilters('category', filterId),
          multiSelect: true
        },
        {
          title: 'Membership Tier',
          filters: [
            { id: 'gold', label: 'Gold Partners', icon: Crown, count: directoryListings.filter(b => b.tier === 'gold').length },
            { id: 'silver', label: 'Silver Members', icon: Medal, count: directoryListings.filter(b => b.tier === 'silver').length },
            { id: 'bronze', label: 'Bronze Members', icon: Medal, count: directoryListings.filter(b => b.tier === 'bronze').length },
            { id: 'standard', label: 'Standard', count: directoryListings.filter(b => b.tier === 'standard').length }
          ],
          selectedFilters: filters.selectedFilters.tier || [],
          onFilterChange: (filterId) => filters.updateFilters('tier', filterId),
          multiSelect: true
        },
        {
          title: 'Location',
          filters: [
            { id: 'boise', label: 'Boise', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('boise')).length },
            { id: 'meridian', label: 'Meridian', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('meridian')).length },
            { id: 'nampa', label: 'Nampa', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('nampa')).length },
            { id: 'caldwell', label: 'Caldwell', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('caldwell')).length },
            { id: 'eagle', label: 'Eagle', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('eagle')).length }
          ],
          selectedFilters: filters.selectedFilters.location || [],
          onFilterChange: (filterId) => filters.updateFilters('location', filterId),
          multiSelect: true
        },
        {
          title: 'Verification',
          filters: [
            { id: 'verified', label: 'Verified Business', icon: CheckCircle, count: directoryListings.filter(b => b.isVerified).length },
            { id: 'sponsored', label: 'Sponsored', icon: Star, count: directoryListings.filter(b => b.isSponsored).length }
          ],
          selectedFilters: filters.selectedFilters.verification || [],
          onFilterChange: (filterId) => filters.updateFilters('verification', filterId),
          multiSelect: true
        }
      ]}
      
      viewMode={filters.viewMode}
      onViewModeChange={filters.setViewMode}
      sortOptions={[
        { id: 'featured', label: 'Featured First', icon: Star },
        { id: 'alphabetical', label: 'Name', icon: AddressBook },
        { id: 'rating', label: 'Rating', icon: Star },
        { id: 'tier', label: 'Tier', icon: Trophy },
        { id: 'location', label: 'Location', icon: MapPin }
      ]}
      activeSortId={filters.sortBy}
      onSortChange={filters.setSortBy}
      
      totalResults={filters.totalResults}
      filteredResults={filters.filteredResults}
      
      statsSection={
        <>
          <TrustIndicators />
          <div className="mt-4xl">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Business Categories</h3>
            <DirectoryStatsGrid stats={directoryCategoryStats} />
          </div>
        </>
      }
      ctaSection={
        <div className="space-y-4xl">
          {/* Activity Feed Section with angled background */}
          <div className="section-skew-up bg-card/50 py-3xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Directory Activity</h3>
              <div className="space-y-base">
                {activityFeedData.map((activity, index) => (
                  <ActivityFeedCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <ContributionCTA />
          
          {/* Featured Event cross-promotion */}
          <div className="section-skew-down bg-gradient-to-br from-nav-directory/10 to-nav-directory/5 py-3xl">
            <FeaturedEventSpotlight 
              eventTitle="Range Day at Independence Indoor"
              eventType="Demo Day"
              date="March 22, 2025"
              time="10:00 AM - 4:00 PM"
              location="Meridian, ID"
              venue="Independence Indoor Shooting"
              description="Try the latest firearms from top manufacturers. Free admission, ammo available for purchase."
              participantCount={32}
              maxParticipants={100}
              difficulty="All Levels"
              isFeatured={true}
              isUpcoming={true}
            />
          </div>
        </div>
      }
    >
      {/* Fixed column layout: max 3 columns instead of 5 */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg`}>
        {filters.paginatedItems.length > 0 ? (
          filters.paginatedItems.map((business, index) => (
            <VendorCard
              key={`${business.businessName}-${index}`}
              businessName={business.businessName}
              businessType={business.businessType}
              description={business.description}
              address={business.address}
              phone={business.phone}
              website={business.website}
              hours={business.hours}
              tier={business.tier}
              specialties={business.specialties}
              isVerified={business.isVerified}
              isSponsored={business.isSponsored}
              href={`/directory/${business.slug}`}
              className="mica transition-all duration-300 rounded-xs"
            />
          ))
        ) : (
          <div className="col-span-full">
            <EmptyState 
              title="No Businesses Found"
              description="Try adjusting your search terms or filters to find businesses."
              action={
                <Button onClick={filters.clearAllFilters}>
                  Clear All Filters
                </Button>
              }
            />
          </div>
        )}
      </div>
    </CardPageLayout>
  )
}