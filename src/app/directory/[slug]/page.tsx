import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { BusinessDetailTemplate } from '@/components/ui/business-detail-template'

// Business data interface
interface BusinessData {
  slug: string
  businessName: string
  businessType: string
  description: string
  fullDescription: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  website?: string
  email?: string
  hours: string
  
  // Social proof & verification
  isVerified: boolean
  verificationStatus: string
  googlePlaceId?: string
  rating?: number
  reviewCount?: number
  
  // Services & specialties
  services: string[]
  specialties: string[]
  certifications: string[]
  
  // Tier information
  tier: 'free' | 'copper' | 'silver' | 'gold'
  isSponsored?: boolean
  
  // Additional details
  yearEstablished?: number
  employeeCount?: string
  serviceArea: string[]
  paymentMethods: string[]
  
  // Images and gallery
  logo?: string
  images: string[]
  
  // Related businesses
  relatedBusinesses?: Array<{
    businessName: string
    businessType: string
    slug: string
    tier: string
  }>
}

// Business data service - this would come from a database in production
const getBusinessData = (slug: string): BusinessData | null => {
  const businesses: BusinessData[] = [
    {
      slug: 'nampa-rod-gun-club',
      businessName: "Nampa Rod & Gun Club",
      businessType: "Shooting Range",
      description: "Idaho's premier private shooting club with 100+ year history serving the Treasure Valley firearms community.",
      fullDescription: `
# Nampa Rod & Gun Club

Founded in 1908, the Nampa Rod & Gun Club stands as one of Idaho's oldest and most respected shooting organizations. With over a century of dedication to the shooting sports, we've built a reputation for excellence, safety, and community that spans generations of Treasure Valley shooters.

## Our Facility

Located on 200 acres of pristine high desert terrain, our club offers unparalleled shooting opportunities:

### Range Facilities
- **Pistol Range**: 50-yard covered positions with electronic target retrieval
- **Rifle Range**: 100, 200, and 300-yard positions with precision target systems
- **Skeet Range**: Championship-level skeet facility with voice-activated release
- **Trap Range**: 16-yard and handicap positions for competitive trap shooting
- **Sporting Clays**: 15-station course through natural terrain challenges

### Clubhouse & Amenities
- **Meeting Hall**: Accommodates 150+ for events and competitions
- **Pro Shop**: Full selection of ammunition, targets, and accessories
- **Gunsmith Services**: On-site professional gunsmithing and repairs
- **Secure Storage**: Member gun storage lockers available
- **Parking**: Ample parking including RV spaces for traveling competitors

## Membership Benefits

### Training & Education
- **NRA Certified Instruction**: Multiple disciplines available
- **Youth Programs**: Introducing next generation to shooting sports
- **Hunter Safety**: Idaho Fish & Game certified courses
- **Competitive Training**: Precision shooting technique development
- **Women's Programs**: Ladies-only training sessions and events

### Competition Opportunities
- **USPSA Matches**: Monthly practical shooting competitions
- **Bullseye Leagues**: Traditional precision pistol competitions
- **Trap & Skeet Leagues**: Seasonal shotgun competitions
- **Rifle Matches**: High power and small bore precision events
- **Youth Competitions**: Developing tomorrow's champions

### Community & Conservation
- **Conservation Projects**: Habitat restoration and wildlife management
- **Scholarship Programs**: Supporting youth education and development
- **Community Events**: Public education and outreach programs
- **Veteran Support**: Special programs for military and law enforcement

## Safety First

Safety is our absolute priority. All members and guests must demonstrate competency and follow our comprehensive safety protocols:

- **Range Safety Officers**: Trained staff supervise all shooting activities
- **Safety Training**: Mandatory orientation for all new members
- **Equipment Standards**: All firearms and ammunition must meet club specifications
- **Emergency Procedures**: Comprehensive medical emergency response protocols

## Membership Information

We welcome shooters of all skill levels who share our commitment to safe, responsible firearms use:

### Membership Types
- **Individual Membership**: Full club privileges for single member
- **Family Membership**: Includes spouse and children under 18
- **Youth Membership**: Special rates for shooters under 21
- **Senior Membership**: Reduced rates for members 65+
- **Life Membership**: One-time payment for lifetime privileges

### Application Process
1. **Application Submission**: Complete membership application
2. **Background Check**: Standard screening for all applicants
3. **Sponsor Requirement**: Two current members must sponsor application
4. **Safety Orientation**: Mandatory safety training and range orientation
5. **Approval**: Board review and membership approval

## Events & Competitions

Throughout the year, we host numerous events that bring together the shooting community:

### Annual Events
- **Spring Turkey Shoot**: Traditional fun shoot with prizes
- **Summer Picnic**: Family event with shooting games and BBQ
- **Fall Competition**: Championship-level precision shooting event
- **Winter Awards Banquet**: Celebrating member achievements

### Weekly Activities
- **Monday Night Pistol**: Informal practice and social shooting
- **Wednesday Trap League**: Competitive trap shooting season
- **Saturday Morning Youth**: Junior shooter development program
- **Sunday Rifle Practice**: Long-range precision shooting

## Conservation & Education

As stewards of Idaho's shooting sports heritage, we're committed to:

### Wildlife Conservation
- **Habitat Projects**: Restoring native bird and game habitat
- **Research Support**: Partnering with Idaho Fish & Game on studies
- **Funding Conservation**: Proceeds from events support local projects

### Public Education
- **School Programs**: Teaching firearm safety in educational settings
- **Hunter Education**: Certified instructor-led courses
- **Media Relations**: Promoting positive image of responsible gun ownership
      `,
      address: "7990 Bennet Road",
      city: "Nampa",
      state: "ID",
      zip: "83687",
      phone: "(208) 466-3647",
      website: "https://nampagunclub.org",
      email: "info@nampagunclub.org",
      hours: "Wednesday-Sunday: 9AM-6PM, Monday-Tuesday: Closed",
      
      isVerified: true,
      verificationStatus: "Idaho Fish & Game Licensed Range - Full Verification",
      googlePlaceId: "ChIJd7Xjt_-PrlQR6Zl2WGQbEoQ",
      rating: 4.7,
      reviewCount: 124,
      
      services: [
        "Member Shooting Privileges",
        "Guest Day Passes", 
        "Competition Hosting",
        "Training Classes",
        "Event Venue Rental",
        "Gunsmith Services",
        "Equipment Sales"
      ],
      specialties: [
        "USPSA Competition",
        "Precision Rifle Training",
        "Trap & Skeet Leagues",
        "Youth Development",
        "Hunter Safety Education"
      ],
      certifications: [
        "NRA Certified Range",
        "Idaho Fish & Game Licensed",
        "USPSA Match Certification",
        "Youth Safety Program Certified"
      ],
      
      tier: "gold",
      isSponsored: true,
      
      yearEstablished: 1908,
      employeeCount: "5-10",
      serviceArea: ["Treasure Valley", "Canyon County", "Ada County", "Gem County"],
      paymentMethods: ["Cash", "Check", "Credit Card", "Member Account"],
      
      logo: "/images/businesses/nampa-gun-club-logo.jpg",
      images: [
        "/images/businesses/nampa-gun-club-1.jpg",
        "/images/businesses/nampa-gun-club-2.jpg",
        "/images/businesses/nampa-gun-club-3.jpg"
      ],
      
      relatedBusinesses: [
        {
          businessName: "Caldwell Gun Club",
          businessType: "Shooting Range",
          slug: "caldwell-gun-club",
          tier: "silver"
        },
        {
          businessName: "Independence Indoor Shooting",
          businessType: "Indoor Range",
          slug: "independence-indoor-shooting",
          tier: "gold"
        }
      ]
    },
    {
      slug: 'independence-indoor-shooting',
      businessName: "Independence Indoor Shooting",
      businessType: "Indoor Range & Retail",
      description: "The Northwest's largest indoor shooting facility with 100-yard range, full retail store, and comprehensive training programs.",
      fullDescription: `
# Independence Indoor Shooting

Independence Indoor Shooting represents the pinnacle of indoor shooting facilities in the Pacific Northwest. Our state-of-the-art facility combines cutting-edge technology with comprehensive services to provide an unmatched shooting experience for enthusiasts of all skill levels.

## World-Class Facilities

### Range Systems
- **100-Yard Indoor Range**: The only 100-yard indoor range in the Northwest
- **25-Yard Tactical Range**: Dynamic shooting scenarios with moveable barriers
- **25-Yard Precision Range**: Climate-controlled environment for accuracy training
- **Advanced Ventilation**: HEPA filtration and positive air pressure systems
- **Target Systems**: Electronic target retrieval and wireless monitoring
- **Sound Suppression**: Engineered acoustics for comfortable shooting

### Technology Integration
- **Camera Systems**: HD cameras for shot analysis and training
- **Timing Systems**: Electronic shot timers for competitive training
- **Lighting Control**: Adjustable LED lighting for various training scenarios
- **Climate Control**: Consistent temperature and humidity year-round

## Comprehensive Services

### Retail Store
- **Firearms Sales**: Extensive selection from leading manufacturers
- **Ammunition**: Bulk and specialty ammunition for all calibers
- **Accessories**: Optics, holsters, and tactical gear
- **Reloading Supplies**: Complete reloading components and equipment
- **Custom Services**: Special orders and hard-to-find items

### Training Academy
- **Concealed Carry Classes**: Idaho Enhanced CCW certification
- **Marksmanship Training**: Fundamental and advanced shooting techniques
- **Tactical Courses**: Defensive shooting and scenario-based training
- **Youth Programs**: Safe introduction to shooting sports
- **Corporate Training**: Team building and group instruction

### Professional Services
- **Gunsmithing**: Full-service repair and customization
- **Cerakote Application**: Professional firearm finishing
- **Laser Engraving**: Custom engraving and personalization
- **Consultation**: Expert advice on firearms selection and training

## Membership Benefits

### Range Access
- **Priority Booking**: Members get priority lane reservations
- **Extended Hours**: Early and late access for members
- **Guest Privileges**: Bring friends and family at member rates
- **Equipment Storage**: Secure storage for member firearms

### Training Discounts
- **Class Discounts**: Reduced rates on all training programs
- **Private Instruction**: One-on-one coaching at member rates
- **Advanced Courses**: Access to specialized training not open to public

### Retail Benefits
- **Member Pricing**: Discounts on firearms, ammunition, and accessories
- **Special Orders**: Priority handling and reduced fees
- **Product Testing**: Try before you buy on select items

## Community Involvement

### Law Enforcement Support
- **Training Partnerships**: Working with local agencies
- **Equipment Testing**: Providing facilities for gear evaluation
- **Qualification Courses**: Hosting official law enforcement quals

### Competitive Shooting
- **Match Hosting**: Regular competitive events
- **Team Sponsorship**: Supporting local shooting teams
- **Equipment Testing**: Product evaluation for competitive shooters

### Education & Outreach
- **School Programs**: Firearm safety education
- **Public Seminars**: Monthly educational presentations
- **Media Relations**: Promoting responsible gun ownership
      `,
      address: "2701 S Vista Ave",
      city: "Meridian", 
      state: "ID",
      zip: "83705",
      phone: "(208) 888-3845",
      website: "https://independenceindoor.com",
      email: "info@independenceindoor.com",
      hours: "Monday-Saturday: 10AM-9PM, Sunday: 10AM-6PM",
      
      isVerified: true,
      verificationStatus: "Federal Firearms License Verified - Premium Facility",
      googlePlaceId: "ChIJexample2_independence_indoor",
      rating: 4.9,
      reviewCount: 287,
      
      services: [
        "Indoor Range Rental",
        "Firearm Sales", 
        "Training Classes",
        "Gunsmith Services",
        "Equipment Rental",
        "Private Instruction",
        "Corporate Events"
      ],
      specialties: [
        "100-Yard Indoor Range",
        "Tactical Training",
        "CCW Certification",
        "Youth Programs",
        "Competition Prep",
        "Professional Gunsmithing"
      ],
      certifications: [
        "Federal Firearms License",
        "Idaho CCW Instructor Certified",
        "NRA Training Counselor",
        "Professional Gunsmith Certified"
      ],
      
      tier: "gold",
      isSponsored: true,
      
      yearEstablished: 2015,
      employeeCount: "15-25",
      serviceArea: ["Treasure Valley", "Ada County", "Canyon County", "Elmore County"],
      paymentMethods: ["Cash", "Credit Card", "Debit Card", "Financing Available"],
      
      logo: "/images/businesses/independence-indoor-logo.jpg",
      images: [
        "/images/businesses/independence-indoor-1.jpg",
        "/images/businesses/independence-indoor-2.jpg",
        "/images/businesses/independence-indoor-3.jpg",
        "/images/businesses/independence-indoor-4.jpg"
      ],
      
      relatedBusinesses: [
        {
          businessName: "Sportsman's Warehouse",
          businessType: "Outdoor Retail",
          slug: "sportsmans-warehouse-meridian",
          tier: "silver"
        },
        {
          businessName: "Trigger Time Gun Range",
          businessType: "Indoor Range",
          slug: "trigger-time-gun-range",
          tier: "copper"
        }
      ]
    }
  ]
  
  return businesses.find(business => business.slug === slug) || null
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const business = getBusinessData(slug)

  if (!business) {
    return {
      title: 'Business Not Found',
      description: 'The requested business could not be found.'
    }
  }

  return {
    title: `${business.businessName} - ${business.businessType}`,
    description: business.description,
    openGraph: {
      title: `${business.businessName} - Idaho Firearms Business`,
      description: business.description,
      type: 'business.business',
      images: business.images.length > 0 ? [business.images[0]] : undefined
    }
  }
}

export async function generateStaticParams() {
  // In production, this would fetch all business slugs from your data source
  return [
    { slug: 'nampa-rod-gun-club' },
    { slug: 'independence-indoor-shooting' },
    { slug: 'caldwell-gun-club' },
    { slug: 'sportsmans-warehouse-meridian' },
    { slug: 'trigger-time-gun-range' }
  ]
}

export default async function BusinessDetailPage({ params }: Props) {
  const { slug } = await params
  const business = getBusinessData(slug)

  if (!business) {
    notFound()
  }

  return <BusinessDetailTemplate {...business} />
}