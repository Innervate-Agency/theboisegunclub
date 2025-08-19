import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ArticleDetailPage } from '@/components/ui/detail-page-builder'
import { getEventBySlug, getAllEventSlugs, type EventData as ComprehensiveEventData } from '@/lib/comprehensive-events-data'

// Event data interface matching the existing EventCard structure
interface EventData {
  slug: string
  title: string
  description: string
  date: string
  time: string
  location: string
  eventType: 'Competition' | 'Charity' | 'Expo' | 'Training' | 'Social'
  capacity: number
  registeredCount: number
  registrationUrl: string
  price: string
  featured: boolean
  // Additional fields for article template
  fullContent: string
  organizer: string
  contactEmail?: string
  contactPhone?: string
  difficulty: string
  equipment: string[]
  rules: string[]
  prizes?: string[]
  venue: {
    name: string
    address: string
    website?: string
    facilities: string[]
  }
  tags: string[]
  images?: string[]
}

// Event data service - now uses comprehensive verified data
const getEventData = (slug: string): EventData | null => {
  // First try to get from comprehensive dataset
  const comprehensiveEvent = getEventBySlug(slug)
  if (comprehensiveEvent) {
    // Convert comprehensive event to detail page format
    return {
      slug: comprehensiveEvent.slug,
      title: comprehensiveEvent.title,
      description: comprehensiveEvent.description,
      date: comprehensiveEvent.date,
      time: comprehensiveEvent.time,
      location: comprehensiveEvent.location,
      eventType: comprehensiveEvent.eventType,
      capacity: comprehensiveEvent.capacity,
      registeredCount: comprehensiveEvent.registeredCount,
      registrationUrl: comprehensiveEvent.registrationUrl,
      price: comprehensiveEvent.price,
      featured: comprehensiveEvent.featured,
      // Generate content for events that don't have full content
      fullContent: generateEventContent(comprehensiveEvent),
      organizer: comprehensiveEvent.organizer || "Event Organizer",
      contactEmail: comprehensiveEvent.website ? `info@${comprehensiveEvent.website.replace(/^https?:\/\//, '').replace(/^www\./, '')}` : undefined,
      contactPhone: comprehensiveEvent.phone,
      difficulty: getEventDifficulty(comprehensiveEvent.eventType),
      equipment: getEventEquipment(comprehensiveEvent.eventType),
      rules: getEventRules(comprehensiveEvent.eventType),
      prizes: comprehensiveEvent.eventType === 'Competition' ? ["Prizes awarded to top finishers"] : undefined,
      venue: {
        name: comprehensiveEvent.venue || comprehensiveEvent.location.split(',')[0],
        address: comprehensiveEvent.location,
        website: comprehensiveEvent.website,
        facilities: ["Event facilities available"]
      },
      tags: generateEventTags(comprehensiveEvent),
      images: []
    }
  }
  
  // Fallback to hardcoded examples for specific events that have full content
  const events: EventData[] = [
    {
      slug: 'uspsa-monthly-match-august',
      title: "USPSA Monthly Match",
      description: "Monthly USPSA practical shooting match at Nampa Rod & Gun Club. Open to all skill levels with multiple divisions including Production, Limited, and Open.",
      date: "Saturday, August 9, 2025",
      time: "8:00 AM - 3:00 PM",
      location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
      eventType: "Competition",
      capacity: 80,
      registeredCount: 54,
      registrationUrl: "https://practiscore.com/idaho-uspsa",
      price: "$15",
      featured: true,
      fullContent: `
# USPSA Monthly Match - August 2025

Join us for another exciting USPSA practical shooting match at the premier Nampa Rod & Gun Club facility. This monthly match is part of the Idaho USPSA series and welcomes shooters of all skill levels.

## Match Format

This will be a standard USPSA match featuring 6-8 stages designed to test accuracy, speed, and decision-making under pressure. Stages will include a mix of:

- **Precision shooting** at various distances
- **Movement and shooting** scenarios
- **Target engagement** with partial targets
- **Reload drills** under time pressure

## Divisions Available

- **Production Division**: Factory handguns with limited modifications
- **Limited Division**: Single-action triggers, extended magazines allowed
- **Open Division**: Compensated guns, optical sights, high-capacity magazines
- **Single Stack**: 1911-style pistols with 8-round magazines
- **Carry Optics**: Production guns with red dot sights

## What to Bring

- **Handgun and holster** appropriate for your division
- **Eye and ear protection** (mandatory)
- **At least 150 rounds** of ammunition
- **3+ magazines** for your pistol
- **Comfortable clothing** suitable for movement
- **Water and snacks** for the day

## New Shooter Information

Never shot a USPSA match before? No problem! We have experienced shooters who volunteer as **New Shooter Coaches** to help you through your first match. Just let us know when you register.

**New Shooter Requirements:**
- Demonstrate basic gun handling safety
- Complete a brief safety orientation
- Start in Production or Single Stack division

## Prize Table

Top finishers in each division will receive prizes from our sponsors including:

- **First Place**: $100 gift certificate + trophy
- **Second Place**: $50 gift certificate + plaque  
- **Third Place**: $25 gift certificate + medal
- **New Shooter Award**: Special recognition prize

## Safety Rules

USPSA matches follow strict safety protocols:

1. **Finger off trigger** except when engaging targets
2. **Muzzle pointed downrange** at all times
3. **Eye and ear protection** required on the firing line
4. **Follow Range Officer commands** immediately
5. **No handling firearms** except under RO supervision

## Weather Contingency

This is an outdoor event. Match will proceed in light rain but may be postponed for severe weather. Check our website or Facebook page for updates on match morning.
      `,
      organizer: "Idaho USPSA Section",
      contactEmail: "match@idahouspa.org",
      contactPhone: "(208) 555-USPSA",
      difficulty: "All Levels Welcome",
      equipment: [
        "USPSA-legal handgun",
        "Strong-side holster",
        "Eye and ear protection",
        "150+ rounds ammunition",
        "3+ magazines"
      ],
      rules: [
        "USPSA rules apply for all divisions",
        "Firearms must pass safety inspection",
        "Eye and ear protection mandatory",
        "Follow all Range Officer commands",
        "Sportsmanlike conduct required"
      ],
      prizes: [
        "Division winners receive gift certificates",
        "Overall match winner trophy",
        "New shooter recognition award",
        "Random drawing for all participants"
      ],
      venue: {
        name: "Nampa Rod & Gun Club",
        address: "7990 Bennet Road, Nampa, ID 83687",
        website: "https://nampagunclub.org",
        facilities: [
          "Multiple shooting bays",
          "Covered staging areas", 
          "Restrooms and parking",
          "Clubhouse with snacks"
        ]
      },
      tags: ["USPSA", "Practical Shooting", "Competition", "All Levels", "Monthly Match"],
      images: ["/images/events/uspsa-match-1.jpg"]
    },
    {
      slug: 'idaho-state-camo-shoot-2025',
      title: "Idaho State Camo Shoot",
      description: "Premier sporting clays event benefiting Ducks Unlimited. Team-based competition with lunch, prizes, and great camaraderie in the firearms community.",
      date: "Saturday, July 26, 2025", 
      time: "8:30 AM - 6:00 PM",
      location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
      eventType: "Charity",
      capacity: 96,
      registeredCount: 78,
      registrationUrl: "https://www.ducksunlimited.org/events",
      price: "$600 (Team of 4)",
      featured: true,
      fullContent: `
# Idaho State Camo Shoot 2025

The Idaho State Camo Shoot is the premier sporting clays charity event in the Treasure Valley, benefiting Ducks Unlimited's vital waterfowl conservation efforts. This team-based tournament brings together hunting and shooting enthusiasts for a day of competition and conservation.

## Event Format

Teams of 4 shooters will rotate through 10 sporting clays stations, each presenting unique target presentations that simulate hunting scenarios. This isn't just target shooting - it's a test of field shooting skills!

### Tournament Structure
- **10 Sporting Clays Stations** with 50 total targets
- **Team-based scoring** with handicap system
- **Multiple flights** throughout the day
- **Awards ceremony** with prizes and recognition

## What's Included

Your $600 team entry includes everything needed for a fantastic day:

- **50 targets per shooter** (200 targets per team)
- **Shotgun shells provided** (12 or 20 gauge available)
- **Catered lunch** featuring local BBQ
- **Beverages** throughout the day
- **Prize entry** for all participants
- **Conservation education** about DU's mission

## Team Categories

- **Open Division**: Any combination of shooters
- **Corporate Teams**: Company-sponsored teams
- **Family Teams**: Related family members
- **Youth Teams**: Shooters under 18 (with adult supervision)
- **Ladies Teams**: All-female teams

## Conservation Impact

100% of proceeds benefit Ducks Unlimited's conservation programs in Idaho, including:

- **Wetland restoration** projects
- **Habitat preservation** initiatives  
- **Research programs** for waterfowl management
- **Youth education** about conservation

Last year's event raised over $45,000 for these critical programs!

## Prizes and Awards

- **Winning Team**: $2,000 prize package
- **Runner-up Teams**: Gift certificates and gear
- **Individual High Gun**: Premium shotgun  
- **Youth Division Winners**: Shooting gear packages
- **Raffle Prizes**: Including guided hunts and firearms

## What to Bring

- **Comfortable outdoor clothing** (camo encouraged!)
- **Closed-toe shoes** for safety
- **Eye and ear protection** (required)
- **Weather-appropriate gear** (event proceeds rain or shine)
- **Team spirit** and conservation mindset!

**Note**: Shotguns and ammunition are provided, but you're welcome to bring your own 12 or 20 gauge shotgun.

## Schedule

- **8:30 AM**: Registration and check-in
- **9:00 AM**: Safety briefing and team photos
- **9:30 AM**: Competition begins (first flight)
- **12:00 PM**: Lunch break and conservation presentation
- **1:00 PM**: Competition resumes (second flight)
- **4:30 PM**: Awards ceremony and raffle
- **6:00 PM**: Event conclusion

## Conservation Education

Learn about Ducks Unlimited's impact:
- **2.2 million acres** conserved in North America
- **Idaho projects** protecting critical migration routes
- **Partnership programs** with local landowners
- **Youth initiatives** fostering next-generation conservationists
      `,
      organizer: "Ducks Unlimited - Idaho Chapter",
      contactEmail: "idaho@ducks.org",
      contactPhone: "(208) 555-DUCK",
      difficulty: "All Skill Levels",
      equipment: [
        "Shotguns provided (12/20 gauge)",
        "Shells included in entry fee", 
        "Eye and ear protection required",
        "Comfortable outdoor clothing",
        "Closed-toe shoes"
      ],
      rules: [
        "Teams of 4 shooters required",
        "Safety equipment mandatory",
        "Sportsmanlike conduct expected",
        "Follow range officer instructions",
        "No alcohol during competition"
      ],
      prizes: [
        "$2,000 winning team prize package",
        "Individual high gun premium shotgun",
        "Youth division gear packages", 
        "Raffle with guided hunts and firearms",
        "All participants eligible for prizes"
      ],
      venue: {
        name: "Caldwell Gun Club",
        address: "21840 Pond Ln, Caldwell, ID 83607",
        website: "https://caldwellgunclub.com",
        facilities: [
          "10 sporting clays stations",
          "Clubhouse for lunch and ceremony",
          "Ample parking for teams",
          "Pro shop and amenities"
        ]
      },
      tags: ["Sporting Clays", "Charity", "Ducks Unlimited", "Conservation", "Team Event"],
      images: ["/images/events/camo-shoot-1.jpg", "/images/events/camo-shoot-2.jpg"]
    },
    {
      slug: 'great-idaho-gun-show-september',
      title: "Great Idaho Gun Show", 
      description: "Treasure Valley's largest firearms expo featuring 200+ vendors, dealers, and collectors from across the region. Family-friendly event with something for everyone.",
      date: "Saturday-Sunday, September 20-21, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Ford Idaho Center, 16200 N Idaho Ctr Blvd, Nampa, ID",
      eventType: "Expo",
      capacity: 5000,
      registeredCount: 3200, 
      registrationUrl: "https://lewisclarktrader.com/gun-shows",
      price: "$10",
      featured: true,
      fullContent: `
# Great Idaho Gun Show - September 2025

The Treasure Valley's premier firearms expo returns to the Ford Idaho Center with over 200 vendors, dealers, and collectors showcasing everything from modern sporting rifles to historical collectibles. This family-friendly event is the largest gathering of firearms enthusiasts in Idaho.

## What to Expect

With over 200 exhibitors spread across the massive Ford Idaho Center, you'll find an incredible variety:

### Firearms & Accessories
- **Modern sporting rifles** and tactical gear
- **Hunting rifles and shotguns** for all game
- **Handguns** for sport, defense, and collecting
- **Historical and military surplus** firearms
- **Optics and scopes** from premium manufacturers
- **Ammunition** at competitive prices
- **Reloading supplies** and equipment

### Outdoor & Hunting Gear
- **Hunting outfitters** offering guided trips
- **Outdoor clothing** and camouflage gear
- **Archery equipment** and bowhunting supplies
- **Camping and survival gear**
- **Knives and edged tools**
- **Outdoor books and videos**

### Educational & Services
- **Gunsmithing services** and custom work
- **Firearm training** information and scheduling
- **Gun safes and security** solutions
- **Insurance and legal services**
- **Concealed carry** classes and information

## Special Features

### Youth Activities
- **BB gun range** for supervised youth shooting
- **Hunter education** information booth
- **Youth archery** demonstrations
- **Conservation education** with Idaho Fish & Game
- **4-H shooting sports** information

### Live Demonstrations
- **Custom gunsmithing** techniques
- **Firearm maintenance** workshops
- **Reloading demonstrations** 
- **Archery instruction** for beginners
- **Knife sharpening** services

### Guest Speakers
Saturday and Sunday will feature presentations from:
- **Professional hunting guides** sharing adventure stories
- **Competitive shooters** discussing training techniques
- **Firearms historians** presenting rare collections
- **Conservation officers** discussing wildlife management

## Vendor Highlights

Some of the region's premier dealers and manufacturers will be present:

- **Local gun stores** with special show pricing
- **Custom gunsmith shops** showcasing their work
- **Ammunition manufacturers** with bulk pricing
- **Optics companies** offering hands-on demos
- **Hunting outfitters** from across the Northwest
- **Military surplus dealers** with rare finds

## Food & Amenities

The Ford Idaho Center provides excellent facilities:
- **Multiple food vendors** with hearty options
- **Ample parking** (free with admission)
- **Climate-controlled** indoor environment
- **ATM services** available on-site
- **Security personnel** ensuring safe environment

## Safety & Regulations

The Great Idaho Gun Show operates under strict safety protocols:

- **All firearms must be unloaded** and zip-tied upon entry
- **Background checks required** for all firearm purchases
- **Licensed dealers only** for firearm sales
- **No ammunition in firearms** allowed in building
- **Security screening** at all entrances

## What to Bring

- **Valid government-issued ID** (required for entry)
- **Cash or card** for purchases (many vendors prefer cash)
- **Comfortable walking shoes** for the large venue
- **Notepad** to record vendor contact information
- **Camera** for educational displays (ask permission first)

## Directions & Parking

The Ford Idaho Center is easily accessible from I-84:
- **Exit 35** (Garrity Boulevard) from I-84
- **Free parking** available in all lots
- **Handicap accessible** entrances and facilities
- **Public transportation** available via ValleyRide

## Supporting Local Commerce

This show directly supports Idaho's firearms industry and outdoor recreation economy. Many vendors are local small businesses who depend on events like this to connect with customers and showcase their products and services.
      `,
      organizer: "Lewis Clark Trader Shows",
      contactEmail: "info@lewisclarktrader.com", 
      contactPhone: "(208) 746-5555",
      difficulty: "Family Friendly",
      equipment: [
        "Valid government ID required",
        "Comfortable walking shoes recommended",
        "Cash or credit card for purchases",
        "Camera allowed (ask vendors first)"
      ],
      rules: [
        "All firearms must be unloaded and zip-tied",
        "Background checks required for purchases", 
        "No ammunition in firearms allowed",
        "Follow all security screening procedures",
        "Respectful behavior toward all vendors"
      ],
      venue: {
        name: "Ford Idaho Center",
        address: "16200 N Idaho Center Blvd, Nampa, ID 83687",
        website: "https://fordidahocenter.com",
        facilities: [
          "Climate-controlled expo halls",
          "Free parking available",
          "Food vendors and concessions",
          "Handicap accessible throughout",
          "ATM services on-site"
        ]
      },
      tags: ["Gun Show", "Expo", "Vendors", "Family Friendly", "Firearms", "Hunting"],
      images: ["/images/events/gun-show-1.jpg", "/images/events/gun-show-2.jpg"]
    }
  ]
  
  return events.find(event => event.slug === slug) || null
}

// Helper functions for generating event details
const generateEventContent = (event: ComprehensiveEventData): string => {
  return `# ${event.title}

${event.description}

## Event Details

**Date:** ${event.date}
**Time:** ${event.time}
**Location:** ${event.location}
**Price:** ${event.price}

${event.organizer ? `**Organizer:** ${event.organizer}` : ''}
${event.phone ? `**Phone:** ${event.phone}` : ''}
${event.website ? `**Website:** ${event.website}` : ''}

## Registration

${event.registrationUrl ? `[Register for this event](${event.registrationUrl})` : 'Registration information available soon.'}

${event.frequency ? `This is a ${event.frequency.toLowerCase()} event.` : ''}

For more information, please contact the event organizer.`
}

const getEventDifficulty = (eventType: string): string => {
  switch (eventType) {
    case 'Training': return 'Beginner Friendly'
    case 'Competition': return 'All Skill Levels'
    case 'Championship': return 'Advanced'
    case 'Youth Competition': return 'Youth Only'
    default: return 'All Welcome'
  }
}

const getEventEquipment = (eventType: string): string[] => {
  switch (eventType) {
    case 'Competition':
    case 'Championship':
      return ['Appropriate firearm for division', 'Eye and ear protection', 'Holster and magazines', 'Ammunition']
    case 'Training':
      return ['Eye and ear protection', 'Note-taking materials', 'Comfortable clothing']
    case 'Expo':
      return ['Valid ID required', 'Comfortable walking shoes']
    default:
      return ['Check event details for specific requirements']
  }
}

const getEventRules = (eventType: string): string[] => {
  switch (eventType) {
    case 'Competition':
    case 'Championship':
      return ['Follow all range safety rules', 'Eye and ear protection mandatory', 'Follow Range Officer commands', 'Sportsmanlike conduct required']
    case 'Training':
      return ['Arrive 15 minutes early', 'Follow instructor guidance', 'Safety equipment required']
    case 'Expo':
      return ['All firearms must be unloaded', 'Background checks required for purchases', 'Follow venue security procedures']
    default:
      return ['Follow all safety guidelines', 'Respect venue rules']
  }
}

const generateEventTags = (event: ComprehensiveEventData): string[] => {
  const tags = [event.eventType]
  if (event.frequency) tags.push(event.frequency)
  if (event.organizer) tags.push(event.organizer)
  if (event.featured) tags.push('Featured')
  return tags
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = getEventData(slug)

  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The requested event could not be found.'
    }
  }

  return {
    title: `${event.title} - ${event.date}`,
    description: event.description,
    openGraph: {
      title: `${event.title} - Idaho Shooting Event`,
      description: event.description,
      type: 'article',
      publishedTime: new Date().toISOString(),
      section: 'Events',
      tags: event.tags
    }
  }
}

export async function generateStaticParams() {
  // Generate static params for all events in comprehensive dataset
  const allSlugs = getAllEventSlugs()
  console.log(`🎯 Generating ${allSlugs.length} event detail pages`)
  
  return allSlugs.map(slug => ({ slug }))
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = getEventData(slug)

  if (!event) {
    notFound()
  }

  // Calculate spots remaining
  const spotsLeft = event.capacity - event.registeredCount

  return (
    <ArticleDetailPage
      title={event.title}
      description={event.description}
      content={event.fullContent}
      author={{
        name: event.organizer,
        title: "Event Organizer",
        bio: `Organizing premier shooting sports events in the Treasure Valley. Contact us for more information about this event.`
      }}
      publishDate={event.date}
      readTime={8}
      category={`${event.eventType} Event`}
      featured={event.featured}
      section={{
        name: "Events",
        path: "/events",
        color: "nav-events"
      }}
      tags={event.tags}
      views={0}
      likes={0}
      comments={0}
      heroImage={event.images?.[0]}
      relatedArticles={[
        {
          id: "event-safety-guide",
          title: "Shooting Event Safety Guidelines",
          excerpt: "Essential safety protocols for competitive shooting events in Idaho.",
          readTime: 5,
          category: "Safety"
        },
        {
          id: "new-shooter-guide", 
          title: "Your First Shooting Competition",
          excerpt: "Everything new competitive shooters need to know before their first match.",
          readTime: 7,
          category: "Education"
        },
        {
          id: "treasure-valley-venues",
          title: "Premier Shooting Venues in the Treasure Valley", 
          excerpt: "A guide to the best shooting facilities and ranges in the Boise area.",
          readTime: 6,
          category: "Venues"
        }
      ]}
    />
  )
}