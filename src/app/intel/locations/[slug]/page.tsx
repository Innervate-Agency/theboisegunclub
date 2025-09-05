import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { LocationDetailPage } from '@/components/ui/detail-page-builder'

// Mock location data service - in production, this would fetch from a database
const getLocationData = (slug: string) => {
  const locations = [
    {
      slug: 'blacks-creek-public-range',
      name: "Black's Creek Public Shooting Range",
      type: "Public Range",
      description: "Idaho's largest and most frequented public shooting range, owned by Idaho Fish & Game and operated by the non-profit EE-DA-HOW Long Rifle & Pistol Club. Located southeast of Boise, this premier facility serves the entire Treasure Valley shooting community.",
      address: "2420 E Kuna-Mora Rd, Kuna, ID 83634",
      coordinates: "43.4629° N, 116.1559° W",
      lat: 43.4629,
      lng: -116.1559,
      access: "Free Public Access",
      hours: "Seasonal hours: Extended summer schedule June 1 - October 31",
      restrictions: "Strict ammunition rules enforced: No armor-piercing, tracer, incendiary, or steel-core ammunition. Exploding targets prohibited.",
      amenities: [
        "36 shooting benches (5-200 yard distances)",
        "500-meter long-range facility (select days)",
        "Main range with multiple distance options",
        "Covered shooting positions",
        "Restrooms and parking",
        "CursorArrowRaysIcon stands provided",
        "Range safety officers on duty"
      ],
      distanceFromBoise: 18.5,
      difficulty: "Easy",
      category: "Public Range",
      verified: true,
      elevation: 2654,
      bestWindConditions: "Early morning before wind picks up",
      lastUpdated: "2025-01-15",
      weatherPriority: "high" as const,
      phone: "(208) 334-3700",
      website: "https://idfg.idaho.gov/hunting/shooting-ranges",
      tips: [
        "Arrive early - this is Idaho's most popular public range",
        "Summer months (June-October) have extended hours and days",
        "500-meter range available on select days - call ahead",
        "Bring your own targets or purchase on-site",
        "Consider visiting weekdays to avoid crowds"
      ],
      regulations: [
        "EyeIcon and ear protection mandatory at all times",
        "No armor-piercing, tracer, incendiary, or steel-core ammunition",
        "No exploding targets permitted",
        "Follow all range commands immediately",
        "No rapid fire or full-auto firing modes"
      ],
      reviews: [
        {
          author: "Mike Thompson",
          rating: 5,
          comment: "Best public range in Idaho. The 500-meter range is incredible when it's open. Well-run facility with knowledgeable staff.",
          date: "2025-01-10"
        },
        {
          author: "Sarah Johnson", 
          rating: 4,
          comment: "Great facility but gets very busy on weekends. The covered benches are a lifesaver in summer. Worth the drive from Boise.",
          date: "2025-01-08"
        },
        {
          author: "David Chen",
          rating: 5,
          comment: "Free access to this quality of facility is amazing. The EE-DA-HOW club does an excellent job managing operations.",
          date: "2025-01-05"
        }
      ],
      nearbyLocations: [
        {
          name: "Independence Indoor Shooting",
          type: "Indoor Range",
          distance: 8.2,
          slug: "independence-indoor"
        },
        {
          name: "Snake River Birds of Prey Area",
          type: "BLM Dispersed",
          distance: 12.3,
          slug: "snake-river-birds-prey"
        }
      ]
    },
    {
      slug: 'snake-river-birds-prey',
      name: "Snake River Birds of Prey Area",
      type: "BLM Dispersed",
      description: "Expansive BLM area with multiple established shooting positions. Excellent natural backstops and varied terrain for different disciplines.",
      address: "Kuna-Swan Falls Rd, south of Kuna, ID",
      coordinates: "43.2661° N, 116.4170° W",
      lat: 43.2661,
      lng: -116.4170,
      access: "Free BLM Land",
      hours: "Daylight hours year-round",
      restrictions: "No shooting within 150 yards of roads, trails, or waterways. Respect wildlife closures during nesting season (Feb 1 - July 31).",
      amenities: [
        "Natural terrain backstops",
        "Multiple shooting positions",
        "Long-range opportunities",
        "4WD access roads",
        "Dispersed camping allowed",
        "Wildlife viewing opportunities"
      ],
      distanceFromBoise: 25.8,
      difficulty: "Moderate",
      category: "BLM Dispersed",
      verified: true,
      elevation: 2395,
      bestWindConditions: "Early morning before 9 AM",
      lastUpdated: "2025-01-12",
      weatherPriority: "high" as const,
      tips: [
        "Bring a spotting scope for long-range shooting verification",
        "4WD recommended for accessing better shooting positions",
        "Pack out all trash - Leave No Trace principles apply",
        "Check BLM website for seasonal closures",
        "Bring plenty of water - no facilities available"
      ],
      regulations: [
        "No shooting within 150 yards of roads or trails",
        "Respect seasonal wildlife closures",
        "No glass targets or containers",
        "Pack out all trash and spent casings",
        "No fires during fire restrictions"
      ],
      reviews: [
        {
          author: "Jake Martinez",
          rating: 4,
          comment: "Great for long-range practice. Natural terrain provides excellent backstops. Can get windy in the afternoons.",
          date: "2025-01-07"
        },
        {
          author: "Lisa Anderson",
          rating: 5,
          comment: "Love the freedom of BLM land. Plenty of space and great views. Just remember to clean up after yourself.",
          date: "2024-12-28"
        }
      ],
      nearbyLocations: [
        {
          name: "Black's Creek Public Shooting Range",
          type: "Public Range", 
          distance: 12.3,
          slug: "blacks-creek-public-range"
        }
      ]
    },
    {
      slug: 'independence-indoor',
      name: "Independence Indoor Shooting",
      type: "Indoor Range",
      description: "The region's largest and most modern indoor facility, positioned as a comprehensive destination for firearms enthusiasts. Features the only 100-yard indoor range in the Northwest with advanced technology and full-service amenities.",
      address: "2701 S Vista Ave, Meridian, ID 83705",
      coordinates: "43.5684° N, 116.2494° W",
      lat: 43.5684,
      lng: -116.2494,
      access: "$20-$30 per shooter (range dependent)",
      hours: "Mon-Sat: 10AM-9PM, SunIcon: 10AM-6PM",
      restrictions: "EyeIcon and ear protection required. Range ammunition only. No steel-core or armor-piercing. Age restrictions for unsupervised minors.",
      amenities: [
        "25-yard static range with private stalls",
        "25-yard tactical range for movement training",
        "100-yard indoor range (only in Northwest)",
        "Climate-controlled with HEPA filtration",
        "Wheelchair accessible",
        "Large retail pro shop",
        "Rental firearms available",
        "Full Auto Experience with machine guns",
        "Full-service gunsmithing department",
        "Certified Cerakote application",
        "Laser engraving services",
        "Training academy with classes"
      ],
      distanceFromBoise: 3.2,
      difficulty: "Easy",
      category: "Indoor Range",
      verified: true,
      elevation: 2785,
      bestWindConditions: "N/A - Indoor facility",
      lastUpdated: "2025-01-15",
      weatherPriority: "low" as const,
      phone: "(208) 888-3845",
      website: "https://independenceindoor.com",
      tips: [
        "Members receive priority check-in during busy times",
        "100-yard range costs $30 vs $20 for 25-yard ranges",
        "Cameras available for target viewing on long range",
        "Training academy offers CCW classes",
        "Pro shop has extensive inventory and competitive prices"
      ],
      regulations: [
        "EyeIcon and ear protection mandatory",
        "Range ammunition only - no reloads",
        "No steel-core or armor-piercing ammunition",
        "Firearms must remain pointed downrange",
        "Follow all range officer commands"
      ],
      reviews: [
        {
          author: "Jennifer Williams",
          rating: 5,
          comment: "Amazing facility! The 100-yard indoor range is incredible. Staff is professional and the climate control makes it comfortable year-round.",
          date: "2025-01-12"
        },
        {
          author: "Tom Rodriguez",
          rating: 5,
          comment: "Best indoor range I've ever used. The tactical range is great for defensive training. Gunsmith services are top-notch too.",
          date: "2025-01-09"
        },
        {
          author: "Rebecca Smith",
          rating: 4,
          comment: "High-quality facility with excellent amenities. A bit pricey but worth it for the experience and equipment quality.",
          date: "2025-01-06"
        }
      ],
      nearbyLocations: [
        {
          name: "Black's Creek Public Shooting Range",
          type: "Public Range",
          distance: 8.2,
          slug: "blacks-creek-public-range"
        },
        {
          name: "George Nourse Park Range",
          type: "Municipal Range",
          distance: 5.1,
          slug: "george-nourse-park"
        }
      ]
    }
  ]
  
  return locations.find(location => location.slug === slug)
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationData(slug)

  if (!location) {
    return {
      title: 'Location Not Found',
      description: 'The requested shooting location could not be found.'
    }
  }

  return {
    title: `${location.name} - Idaho Shooting Location`,
    description: location.description,
    openGraph: {
      title: `${location.name} - ${location.type}`,
      description: location.description
    }
  }
}

export async function generateStaticParams() {
  // In production, this would fetch all location slugs from your data source
  return [
    { slug: 'blacks-creek-public-range' },
    { slug: 'snake-river-birds-prey' },
    { slug: 'george-nourse-park' },
    { slug: 'independence-indoor' },
    { slug: 'caldwell-shotgun-complex' }
  ]
}

export default async function LocationDetailPageRoute({ params }: Props) {
  const { slug } = await params
  const location = getLocationData(slug)

  if (!location) {
    notFound()
  }

  // Transform location data to match LocationDetailPage props
  const transformedLocation = {
    ...location,
    fullContent: `# ${location.name}

${location.description}

## Access Information
- **Type**: ${location.type}
- **Address**: ${location.address}
- **Coordinates**: ${location.coordinates}
- **Distance from Boise**: ${location.distanceFromBoise} miles
- **Elevation**: ${location.elevation} feet

## Access & Hours
${location.access}
${location.hours}

${location.restrictions ? `## Restrictions
${location.restrictions}` : ''}

## Best Conditions
${location.bestWindConditions}

## What to Expect
This location offers ${location.amenities.length} different amenities and features for shooters.
`,
    tags: [location.type, location.category, location.difficulty]
  }

  return <LocationDetailPage {...transformedLocation} params={params} />
}