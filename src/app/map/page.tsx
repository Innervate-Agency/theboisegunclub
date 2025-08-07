'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import StatCard from '@/components/ui/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Search, MapPin, Filter, Plus, ArrowRight, 
  Navigation, Mountain, Trees, Shield, Users, 
  Star, Eye, Flag, Compass, Info
} from 'lucide-react'

// Idaho shooting locations database
const shootingLocations = [
  // BLM/Public Lands
  {
    name: "Snake River Birds of Prey National Conservation Area",
    type: "BLM Land",
    description: "Popular shooting area south of Boise with designated shooting zones. Check current closures and fire restrictions.",
    address: "South of Kuna, ID",
    coordinates: "43.2661° N, 116.4170° W",
    access: "Free",
    restrictions: "Seasonal closures during nesting season (Feb 1 - July 31 in some areas)",
    amenities: ["Parking Area", "Multiple Shooting Positions", "Desert Terrain"],
    rating: 4.2,
    reviews: 89,
    difficulty: "Easy",
    category: "Public Land",
    verified: true,
    lastUpdated: "2025-01-10"
  },
  {
    name: "Lucky Peak Shooting Area",
    type: "Public Shooting Area",
    description: "Established shooting area near Lucky Peak Reservoir with backstops and designated firing lines.",
    address: "Near Lucky Peak Dam, ID",
    coordinates: "43.5139° N, 116.0653° W",
    access: "Free",
    restrictions: "No shooting during high fire danger. Respect wildlife closures.",
    amenities: ["Improved Backstops", "Parking", "Trash Receptacles"],
    rating: 4.5,
    reviews: 156,
    difficulty: "Easy",
    category: "Designated Area",
    verified: true,
    lastUpdated: "2024-12-15"
  },
  {
    name: "Owyhee Mountains Shooting Areas",
    type: "BLM/Public Land",
    description: "Multiple dispersed shooting locations in the Owyhee Mountains. Remote area requiring 4WD access.",
    address: "Southwest of Boise, ID",
    coordinates: "43.0000° N, 116.8000° W",
    access: "Free",
    restrictions: "4WD required. Check fire restrictions. No camping during fire season.",
    amenities: ["Natural Backstops", "Remote Location", "Multiple Spots"],
    rating: 4.7,
    reviews: 67,
    difficulty: "Moderate",
    category: "Remote/4WD",
    verified: true,
    lastUpdated: "2024-11-20"
  },
  {
    name: "Table Rock Road Shooting Area",
    type: "Public Land", 
    description: "Popular easily accessible shooting spot with natural backstops. Can get crowded on weekends.",
    address: "Table Rock Road, Boise, ID",
    coordinates: "43.6424° N, 116.1339° W",
    access: "Free",
    restrictions: "Respect private property boundaries. Clean up after shooting.",
    amenities: ["Easy Access", "Natural Backstops", "Close to Town"],
    rating: 3.8,
    reviews: 134,
    difficulty: "Easy",
    category: "Popular Spot",
    verified: true,
    lastUpdated: "2024-12-08"
  },
  {
    name: "Swan Falls Road Dispersed Areas",
    type: "BLM Land",
    description: "Multiple informal shooting locations along Swan Falls Road. Variable quality and safety.",
    address: "Swan Falls Road, South of Kuna, ID",
    coordinates: "43.2341° N, 116.3678° W",
    access: "Free",
    restrictions: "Extremely high fire danger in summer. Seasonal wildlife closures possible.",
    amenities: ["Multiple Locations", "Desert Setting", "Variable Conditions"],
    rating: 3.9,
    reviews: 78,
    difficulty: "Easy to Moderate",
    category: "Dispersed",
    verified: false,
    lastUpdated: "2024-10-15"
  },
  {
    name: "Boise National Forest - Scattered Locations",
    type: "National Forest",
    description: "Various shooting opportunities on forest service land. Higher elevation, seasonal access.",
    address: "Various locations north and east of Boise",
    coordinates: "43.8000° N, 115.9000° W",
    access: "Free",
    restrictions: "Seasonal road closures. Fire restrictions common in summer. Check with USFS.",
    amenities: ["Forested Setting", "Higher Elevation", "Cooler Temperatures"],
    rating: 4.3,
    reviews: 45,
    difficulty: "Moderate to Difficult",
    category: "Forest Service",
    verified: true,
    lastUpdated: "2024-09-30"
  }
]

const locationTypes = [
  { label: "All Locations", value: "all", count: shootingLocations.length },
  { label: "BLM/Public Land", value: "Public Land", count: shootingLocations.filter(l => l.category.includes("Public") || l.category.includes("BLM")).length },
  { label: "Designated Areas", value: "Designated Area", count: shootingLocations.filter(l => l.category === "Designated Area").length },
  { label: "Forest Service", value: "Forest Service", count: shootingLocations.filter(l => l.category === "Forest Service").length },
  { label: "Remote/4WD", value: "Remote/4WD", count: shootingLocations.filter(l => l.category === "Remote/4WD").length }
]

const difficultyLevels = [
  { label: "All Difficulty", value: "all", count: shootingLocations.length },
  { label: "Easy Access", value: "Easy", count: shootingLocations.filter(l => l.difficulty === "Easy").length },
  { label: "Moderate", value: "Moderate", count: shootingLocations.filter(l => l.difficulty.includes("Moderate")).length },
  { label: "Difficult", value: "Difficult", count: shootingLocations.filter(l => l.difficulty.includes("Difficult")).length }
]

function LocationCard({ location }: { location: typeof shootingLocations[0] }) {
  const categoryColors = {
    "Public Land": "bg-rifling-green/20 text-rifling-green border-rifling-green/30",
    "Designated Area": "bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30",
    "Forest Service": "bg-scope-blue/20 text-scope-blue border-scope-blue/30",
    "Remote/4WD": "bg-copper-orange/20 text-copper-orange border-copper-orange/30",
    "Popular Spot": "bg-case-hardened/20 text-case-hardened border-case-hardened/30",
    "Dispersed": "bg-ayu-purple/20 text-ayu-purple border-ayu-purple/30"
  }

  const difficultyColors = {
    "Easy": "bg-clubhouse-lawn-green/20 text-clubhouse-lawn-green border-clubhouse-lawn-green/30",
    "Moderate": "bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30",
    "Difficult": "bg-safety-red/20 text-safety-red border-safety-red/30"
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-base">
        <div className="flex items-start justify-between gap-base mb-xs">
          <div className="flex gap-xs">
            <Badge className={categoryColors[location.category as keyof typeof categoryColors]}>
              {location.category}
            </Badge>
            <Badge className={difficultyColors[location.difficulty.split(' ')[0] as keyof typeof difficultyColors]}>
              {location.difficulty}
            </Badge>
          </div>
          {location.verified && (
            <Badge className="bg-clubhouse-lawn-green/20 text-clubhouse-lawn-green border-clubhouse-lawn-green/30">
              <Shield className="h-3 w-3 mr-xs" />
              Verified
            </Badge>
          )}
        </div>
        
        <CardTitle className="font-rajdhani text-xl font-bold text-card-foreground group-hover:text-brass-yellow transition-colors duration-200 leading-tight">
          {location.name}
        </CardTitle>
        
        <div className="flex items-center gap-xs text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-brass-yellow" />
          <span>{location.address}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-base">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {location.description}
        </p>
        
        <div className="space-y-xs text-sm">
          <div className="flex items-center gap-xs">
            <Navigation className="h-4 w-4 text-brass-yellow" />
            <span className="font-medium">Coordinates:</span>
            <span className="text-muted-foreground font-mono text-xs">{location.coordinates}</span>
          </div>
          
          <div className="flex items-center gap-xs">
            <Flag className="h-4 w-4 text-brass-yellow" />
            <span className="font-medium">Access:</span>
            <span className="text-muted-foreground">{location.access}</span>
          </div>
        </div>
        
        <div className="space-y-xs">
          <h4 className="font-medium text-sm">Amenities:</h4>
          <div className="flex flex-wrap gap-xs">
            {location.amenities.map((amenity) => (
              <Badge key={amenity} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
          </div>
        </div>
        
        {location.restrictions && (
          <div className="p-xs bg-safety-red/10 rounded-md border border-safety-red/20">
            <div className="flex items-start gap-xs">
              <Info className="h-4 w-4 text-safety-red mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-safety-red text-sm">Restrictions:</h4>
                <p className="text-xs text-safety-red/80">{location.restrictions}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-xs border-t border-border">
          <div className="flex items-center gap-base text-xs text-muted-foreground">
            <div className="flex items-center gap-xs">
              <Star className="h-3 w-3 fill-brass-yellow text-brass-yellow" />
              <span>{location.rating}</span>
            </div>
            <div className="flex items-center gap-xs">
              <Users className="h-3 w-3" />
              <span>{location.reviews} reviews</span>
            </div>
            <div className="flex items-center gap-xs">
              <Eye className="h-3 w-3" />
              <span>Updated {new Date(location.lastUpdated).toLocaleDateString()}</span>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="text-brass-yellow hover:text-copper-orange">
            View Details
            <ArrowRight className="h-3 w-3 ml-xs" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MapPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredLocations = shootingLocations.filter(location => {
    const matchesType = selectedType === "all" || 
      location.category === selectedType ||
      (selectedType === "Public Land" && (location.category.includes("Public") || location.category.includes("BLM")))
    
    const matchesDifficulty = selectedDifficulty === "all" || 
      location.difficulty.toLowerCase().includes(selectedDifficulty.toLowerCase())
    
    const matchesSearch = searchQuery === "" || 
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.type.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesType && matchesDifficulty && matchesSearch
  })

  // Sort by verified first, then by rating
  const sortedLocations = filteredLocations.sort((a, b) => {
    if (a.verified && !b.verified) return -1
    if (!a.verified && b.verified) return 1
    return b.rating - a.rating
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gunmetal-black/95 to-tactical-gray/90 px-md py-6xl">
        <div className="absolute inset-0 bg-gradient-to-br from-brass-yellow/5 via-transparent to-copper-orange/8 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-lg">
            <Badge className="bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30">
              <Compass className="h-4 w-4 mr-xs" />
              Shooting Locations
            </Badge>
            <h1 className="font-rajdhani text-6xl md:text-7xl font-bold text-range-white leading-tight">
              Idaho Shooting <span className="text-brass-yellow">Map</span>
            </h1>
            <p className="text-body-lg text-range-white/80 max-w-3xl mx-auto">
              Community-driven map of legal shooting locations across Idaho. From BLM land to designated shooting areas - discover places to practice and enjoy the sport safely.
            </p>
            
            <div className="flex flex-wrap justify-center gap-base">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-brass-yellow to-copper-orange text-gunmetal-black hover:from-copper-orange hover:to-brass-yellow font-rajdhani font-bold"
              >
                <Plus className="h-5 w-5 mr-xs" />
                Submit Location
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black"
              >
                View Interactive Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4xl bg-muted/50">
        <div className="container mx-auto max-w-6xl px-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
            <StatCard
              title="Total Locations"
              value="127+"
              label="Identified"
              variant="default"
              trend="up"
              trendValue={`${15}%`}
            />
            <StatCard
              title="Verified Spots"
              value={shootingLocations.filter(l => l.verified).length.toString()}
              label="Community Verified"
              variant="default"
              trend="up"
              trendValue={`${89}%`}
            />
            <StatCard
              title="BLM/Public Areas"
              value="45+"
              label="Free Access"
              variant="default"
              trend="up"
              trendValue={`${100}%`}
            />
            <StatCard
              title="User Reviews"
              value="650+"
              label="Community Input"
              variant="default"
              trend="up"
              trendValue={`${4.3}`}
            />
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-6xl px-md">
          <div className="space-y-xl">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-base">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search locations, areas, or features..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-xs">
                <Button variant="outline" className="gap-xs">
                  <MapPin className="h-4 w-4" />
                  Near Me
                </Button>
                <Button variant="outline" className="gap-xs">
                  <Filter className="h-4 w-4" />
                  Advanced
                </Button>
              </div>
            </div>

            {/* Location Type Filters */}
            <div className="space-y-base">
              <h3 className="font-rajdhani text-lg font-bold text-card-foreground">
                Filter by Location Type
              </h3>
              <div className="flex flex-wrap gap-xs">
                {locationTypes.map((type) => (
                  <Button
                    key={type.value}
                    variant={selectedType === type.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type.value)}
                    className={selectedType === type.value ? 
                      "bg-brass-yellow text-gunmetal-black hover:bg-copper-orange" : 
                      "border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black"
                    }
                  >
                    {type.label}
                    <Badge variant="secondary" className="ml-xs">
                      {type.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filters */}
            <div className="space-y-base">
              <h3 className="font-rajdhani text-lg font-bold text-card-foreground">
                Filter by Access Difficulty
              </h3>
              <div className="flex flex-wrap gap-xs">
                {difficultyLevels.map((level) => (
                  <Button
                    key={level.value}
                    variant={selectedDifficulty === level.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(level.value)}
                    className={selectedDifficulty === level.value ? 
                      "bg-brass-yellow text-gunmetal-black hover:bg-copper-orange" : 
                      "border-brass-yellow/30 text-brass-yellow hover:bg-brass-yellow hover:text-gunmetal-black"
                    }
                  >
                    {level.label}
                    <Badge variant="secondary" className="ml-xs">
                      {level.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="pb-6xl">
        <div className="container mx-auto max-w-6xl px-md">
          <div className="space-y-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">
                Shooting Locations
              </h2>
              <div className="text-muted-foreground">
                {sortedLocations.length} {sortedLocations.length === 1 ? 'location' : 'locations'} found
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
              {sortedLocations.map((location, index) => (
                <LocationCard key={index} location={location} />
              ))}
            </div>

            {sortedLocations.length === 0 && (
              <div className="text-center py-6xl">
                <div className="space-y-base">
                  <div className="text-6xl">🗺️</div>
                  <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
                    No locations found
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Try adjusting your search criteria or browse all locations to discover great shooting spots in Idaho.
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedType("all")
                      setSelectedDifficulty("all")
                      setSearchQuery("")
                    }}
                    className="bg-brass-yellow text-gunmetal-black hover:bg-copper-orange"
                  >
                    Show All Locations
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-6xl bg-gradient-to-br from-gunmetal-black/95 to-tactical-gray/90">
        <div className="container mx-auto max-w-4xl px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-safety-red/20 text-safety-red border-safety-red/30">
              <Shield className="h-4 w-4 mr-xs" />
              Safety First
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-range-white">
              Shoot <span className="text-brass-yellow">Responsibly</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg text-left max-w-3xl mx-auto">
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-range-white">Before You Go:</h3>
                <ul className="space-y-xs text-range-white/80">
                  <li className="flex items-center gap-xs">• Check current fire restrictions</li>
                  <li className="flex items-center gap-xs">• Verify seasonal closures</li>
                  <li className="flex items-center gap-xs">• Bring adequate backstop if needed</li>
                  <li className="flex items-center gap-xs">• Pack out all trash and targets</li>
                </ul>
              </div>
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-range-white">Safety Rules:</h3>
                <ul className="space-y-xs text-range-white/80">
                  <li className="flex items-center gap-xs">• Follow the four fundamental rules</li>
                  <li className="flex items-center gap-xs">• Be aware of your surroundings</li>
                  <li className="flex items-center gap-xs">• Respect private property</li>
                  <li className="flex items-center gap-xs">• Report unsafe conditions</li>
                </ul>
              </div>
            </div>
            <Button 
              size="xl" 
              className="bg-gradient-to-r from-brass-yellow to-copper-orange text-gunmetal-black hover:from-copper-orange hover:to-brass-yellow font-rajdhani font-bold"
            >
              Submit New Location
              <ArrowRight className="h-5 w-5 ml-xs" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}