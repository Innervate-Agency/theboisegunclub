/**
 * Master CalendarDaysIcon of Firearms Events in Treasure Valley, Idaho
 * Comprehensive event listings from August 17, 2025 - December 31, 2026
 * All dates verified and sourced from official venue calendars
 */

export interface EventData {
  title: string
  description: string
  date: string
  time: string
  endDate?: string
  endTime?: string
  location: string
  address: string
  eventType: 'Competition' | 'Charity' | 'Gun Show' | 'Training' | 'Social' | 'Recurring'
  category: 'Competitive Match' | 'Training & Education' | 'Gun Show' | 'Community Meetup' | 'Charity/Benefit Event'
  capacity?: number
  registeredCount?: number
  registrationUrl?: string
  contactPhone?: string
  contactEmail?: string
  price: string
  featured: boolean
  slug: string
  hostingOrganization: string
  recurringSchedule?: 'Weekly' | 'Monthly' | 'Annual'
  recurringDay?: string
  season?: string
  fflRequired?: boolean
  equipmentProvided?: boolean
  beginnerFriendly?: boolean
}

// Recurring Weekly Events
export const recurringWeeklyEvents: EventData[] = [
  // Monday Events
  {
    title: "Steel Challenge Match",
    description: "Weekly competitive steel shooting match with multiple divisions. First-timers shoot FREE! No entries accepted after 7:00 PM.",
    date: "Every Monday",
    time: "4:00 PM",
    endTime: "8:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Recurring",
    category: "Competitive Match",
    price: "First gun $7, Second gun $6, Juniors/Staff/Law Enforcement $5, First-timers FREE",
    featured: true,
    slug: "steel-challenge-monday",
    hostingOrganization: "NRAGC Steel Challenge",
    registrationUrl: "https://practiscore.com/clubs/nragc-steel-challenge",
    recurringSchedule: "Weekly",
    recurringDay: "Monday",
    season: "April through September",
    beginnerFriendly: true,
    equipmentProvided: false
  },
  {
    title: "Juniors Program Rifle Practice",
    description: "Youth-focused rifle training program for developing young shooters in a safe, educational environment.",
    date: "Every Monday",
    time: "5:30 PM",
    endTime: "8:30 PM (or 30 min before sunset)",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Recurring",
    category: "Training & Education",
    price: "Contact club for pricing",
    featured: false,
    slug: "juniors-rifle-practice-monday",
    hostingOrganization: "Nampa Rod & Gun Club",
    registrationUrl: "https://nragc.com/",
    recurringSchedule: "Weekly",
    recurringDay: "Monday",
    beginnerFriendly: true,
    equipmentProvided: true
  },

  // Tuesday Events
  {
    title: "Steel Challenge Tuesday Match",
    description: "Mid-week steel challenge shooting competition at Black's Creek Public Range. Open to all skill levels.",
    date: "Every Tuesday",
    time: "4:00 PM (setup begins)",
    endTime: "7:30-8:00 PM",
    location: "Black's Creek Public Shooting Range",
    address: "2420 E Kuna-Mora Road, Kuna, ID 83634",
    eventType: "Recurring",
    category: "Competitive Match",
    price: "Contact for pricing",
    featured: false,
    slug: "steel-challenge-tuesday",
    hostingOrganization: "EE-DA-HOW Long Rifle & Pistol Club & Boise Steel Challenge",
    registrationUrl: "https://facebook.com/blackscreekrange",
    recurringSchedule: "Weekly",
    recurringDay: "Tuesday",
    season: "Through September",
    beginnerFriendly: true
  },
  {
    title: "Armed Women of America",
    description: "Women's firearms training and education group focused on safety, proficiency, and empowerment through firearms knowledge.",
    date: "Every Tuesday",
    time: "5:30 PM",
    endTime: "8:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Recurring",
    category: "Training & Education",
    price: "Contact club for pricing",
    featured: true,
    slug: "armed-women-america-tuesday",
    hostingOrganization: "Armed Women of America - Nampa Chapter",
    registrationUrl: "https://nragc.com/",
    recurringSchedule: "Weekly",
    recurringDay: "Tuesday",
    beginnerFriendly: true
  },

  // Wednesday Events
  {
    title: "NRA/CMP High Power Practice",
    description: "High power rifle practice sessions for competitive shooting development and skill improvement.",
    date: "Every Wednesday",
    time: "5:30 PM",
    endTime: "8:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Recurring",
    category: "Training & Education",
    price: "Contact for pricing",
    featured: false,
    slug: "nra-cmp-high-power-wednesday",
    hostingOrganization: "Nampa Rod & Gun Club",
    registrationUrl: "https://nragc.com/",
    recurringSchedule: "Weekly",
    recurringDay: "Wednesday"
  },

  // Thursday Events
  {
    title: "Junior Shooters Program",
    description: "Youth shooting program designed to teach firearm safety, marksmanship, and responsible gun handling to young shooters.",
    date: "Every Thursday",
    time: "3:00 PM",
    endTime: "7:30 PM",
    location: "Parma Rod & Gun Club",
    address: "1420 Boehm Lane, Parma, ID 83660",
    eventType: "Recurring",
    category: "Training & Education",
    price: "Contact club for pricing",
    featured: true,
    slug: "junior-shooters-thursday",
    hostingOrganization: "Parma Rod & Gun Club",
    registrationUrl: "http://www.parmarng.org/",
    recurringSchedule: "Weekly",
    recurringDay: "Thursday",
    beginnerFriendly: true,
    equipmentProvided: true
  }
]

// Recurring Monthly Events
export const recurringMonthlyEvents: EventData[] = [
  {
    title: "USPSA Match",
    description: "United States Practical Shooting Association match featuring dynamic shooting scenarios and multiple divisions.",
    date: "First Saturday of each month",
    time: "Setup 8:30 AM, Shooting begins 9:00 AM",
    endTime: "Approximately 3:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Recurring",
    category: "Competitive Match",
    price: "Adults $15, Juniors $5 (NRGC members get $5 discount)",
    featured: true,
    slug: "uspsa-match-first-saturday",
    hostingOrganization: "Idaho Society of Practical Shooters (ISPS)",
    registrationUrl: "https://practiscore.com/clubs/idaho-society-of-practical-shooters",
    recurringSchedule: "Monthly",
    recurringDay: "First Saturday",
    beginnerFriendly: false
  },
  {
    title: "NRAGC Rimfire Challenge",
    description: "Precision rimfire shooting competition featuring various stages and skill levels. Great for developing fundamentals.",
    date: "First Sunday of each month",
    time: "9:00 AM",
    endTime: "1:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Recurring",
    category: "Competitive Match",
    price: "NRAGC members $5, Non-members $6 first gun or two for $11",
    featured: true,
    slug: "nragc-rimfire-challenge",
    hostingOrganization: "NRAGC Rimfire Challenge",
    registrationUrl: "https://practiscore.com/clubs/nragc_rimfire_challenge",
    recurringSchedule: "Monthly",
    recurringDay: "First Sunday",
    beginnerFriendly: true
  },
  {
    title: "IDPA Match",
    description: "International Defensive Pistol Association match focusing on practical defensive shooting skills and scenarios.",
    date: "Second Saturday of each month",
    time: "8:00 AM",
    endTime: "2:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Recurring",
    category: "Competitive Match",
    price: "Contact hutch2178@aol.com",
    featured: true,
    slug: "idpa-match-second-saturday",
    hostingOrganization: "Nampa Rod & Gun Club",
    registrationUrl: "https://www.idpa.com/clubs/nampa-rod-and-gun-club/",
    contactEmail: "hutch2178@aol.com",
    recurringSchedule: "Monthly",
    recurringDay: "Second Saturday",
    beginnerFriendly: false
  },
  {
    title: "NRL22 Precision Rimfire Match",
    description: "National Rifle League .22 caliber precision shooting match featuring challenging stages and long-range shooting.",
    date: "Second Sunday of each month",
    time: "Setup 7:30 AM, Shooting 8:30 AM",
    endTime: "1:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Recurring",
    category: "Competitive Match",
    price: "$15 cash only",
    featured: true,
    slug: "nrl22-precision-rimfire",
    hostingOrganization: "NRAGC NRL22",
    registrationUrl: "https://practiscore.com/clubs/nragc-nrl22",
    recurringSchedule: "Monthly",
    recurringDay: "Second Sunday",
    beginnerFriendly: false
  }
]

// Specific Date Events - 2025
export const events2025: EventData[] = [
  // August 2025
  {
    title: "VFW Post 10043 Gun Show",
    description: "Local gun show featuring vendors, collectors, and firearms dealers from across Idaho and the Pacific Northwest.",
    date: "August 23, 2025",
    time: "9:00 AM",
    endDate: "August 24, 2025",
    endTime: "3:00 PM",
    location: "VFW Post",
    address: "Lewiston, ID",
    eventType: "Gun Show",
    category: "Gun Show",
    price: "Information not available",
    featured: false,
    slug: "vfw-gun-show-august-2025",
    hostingOrganization: "VFW Post 10043",
    beginnerFriendly: true,
    fflRequired: true
  },
  {
    title: "Long Gong Challenge",
    description: "Precision rifle competition featuring long-range steel targets and challenging shooting positions.",
    date: "August 23, 2025",
    time: "9:00 AM",
    endTime: "2:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Competition",
    category: "Competitive Match",
    price: "$30",
    featured: true,
    slug: "long-gong-challenge-august-2025",
    hostingOrganization: "Nampa Rod & Gun Club",
    registrationUrl: "https://practiscore.com/clubs/nragc_long_gong_challenge",
    beginnerFriendly: false
  },

  // September 2025
  {
    title: "2025 Idaho IDPA State Championship",
    description: "The premier defensive pistol shooting championship for Idaho, featuring top competitors from across the region.",
    date: "September 5, 2025",
    time: "8:00 AM",
    endDate: "September 6, 2025",
    endTime: "5:00 PM",
    location: "Nampa Rod & Gun Club",
    address: "7990 Bennett Road, Nampa, ID 83686",
    eventType: "Competition",
    category: "Competitive Match",
    capacity: 150,
    price: "$125",
    featured: true,
    slug: "idaho-idpa-state-championship-2025",
    hostingOrganization: "IDPA/Nampa Rod & Gun Club",
    registrationUrl: "https://www.idpa.com/clubs/nampa-rod-and-gun-club/",
    beginnerFriendly: false
  },
  {
    title: "Appleseed Event",
    description: "Revolutionary War history and marksmanship clinic focusing on traditional American marksmanship skills.",
    date: "September 6, 2025",
    time: "8:00 AM",
    endDate: "September 7, 2025",
    endTime: "5:00 PM",
    location: "Parma Rod & Gun Club",
    address: "1420 Boehm Lane, Parma, ID 83660",
    eventType: "Training",
    category: "Training & Education",
    price: "Contact organizers",
    featured: true,
    slug: "appleseed-event-september-2025",
    hostingOrganization: "Revolutionary War Veterans Association",
    registrationUrl: "https://appleseedinfo.org/",
    beginnerFriendly: true,
    equipmentProvided: false
  },
  {
    title: "Post Falls Gun Show",
    description: "Popular regional gun show featuring dealers, collectors, and firearms enthusiasts from across the Inland Northwest.",
    date: "September 13, 2025",
    time: "9:00 AM",
    endDate: "September 14, 2025",
    endTime: "3:00 PM",
    location: "Greyhound Park & Event Center",
    address: "5100 Riverbend Ave, Post Falls, ID 83854",
    eventType: "Gun Show",
    category: "Gun Show",
    price: "Admission $10",
    featured: true,
    slug: "post-falls-gun-show-september-2025",
    hostingOrganization: "Lewis Clark Trader",
    registrationUrl: "https://gunshowtrader.com/gun-shows/post-falls-gun-show/",
    beginnerFriendly: true,
    fflRequired: true
  },
  {
    title: "Boise Gun Show",
    description: "Major Treasure Valley gun show at Ford Idaho Center featuring hundreds of vendors and thousands of firearms.",
    date: "September 20, 2025",
    time: "9:00 AM",
    endDate: "September 21, 2025",
    endTime: "3:00 PM",
    location: "Ford Idaho Center",
    address: "16200 N Idaho Ctr Blvd, Nampa, ID 83687",
    eventType: "Gun Show",
    category: "Gun Show",
    capacity: 5000,
    price: "Admission $10",
    featured: true,
    slug: "boise-gun-show-september-2025",
    hostingOrganization: "Lewis Clark Trader",
    registrationUrl: "https://gunshowtrader.com/gun-shows/boise-gun-show/",
    beginnerFriendly: true,
    fflRequired: true
  }
]

// Specific Date Events - 2026
export const events2026: EventData[] = [
  // January 2026
  {
    title: "Great Idaho Gun Show (15th Anniversary Ruger Display Show)",
    description: "Special 15th anniversary gun show featuring exclusive Ruger display and Idaho's largest gun show celebration.",
    date: "January 4, 2026",
    time: "9:00 AM",
    endDate: "January 5, 2026",
    endTime: "3:00 PM",
    location: "Ford Idaho Center",
    address: "16200 N Idaho Ctr Blvd, Nampa, ID 83687",
    eventType: "Gun Show",
    category: "Gun Show",
    capacity: 8000,
    price: "Admission $10",
    featured: true,
    slug: "great-idaho-gun-show-2026",
    hostingOrganization: "Lewis Clark Trader",
    registrationUrl: "https://www.fordidahocenter.com/events/",
    beginnerFriendly: true,
    fflRequired: true
  },

  // March 2026
  {
    title: "Idaho Sportsman Show",
    description: "Premier outdoor recreation expo featuring firearms, hunting gear, fishing equipment, and outdoor recreation vendors.",
    date: "March 5, 2026",
    time: "5:00 PM (Thursday)",
    endDate: "March 8, 2026",
    endTime: "4:00 PM (Sunday)",
    location: "Expo Idaho",
    address: "5610 N Glenwood St, Boise, ID 83714",
    eventType: "Gun Show",
    category: "Gun Show",
    capacity: 15000,
    price: "Adults $7, Seniors (62+) $6, Children 12 & under FREE",
    featured: true,
    slug: "idaho-sportsman-show-2026",
    hostingOrganization: "Spectra Productions",
    registrationUrl: "https://www.idahosportsmanshow.com/",
    beginnerFriendly: true,
    fflRequired: false
  },

  // June 2026
  {
    title: "13th Annual High Desert 3 Gun Championship",
    description: "Premier multi-gun championship featuring rifle, pistol, and shotgun stages across multiple days of competition.",
    date: "June 12, 2026",
    time: "8:00 AM",
    endDate: "June 14, 2026",
    endTime: "5:00 PM",
    location: "Parma Rod & Gun Club",
    address: "1420 Boehm Lane, Parma, ID 83660",
    eventType: "Competition",
    category: "Competitive Match",
    capacity: 200,
    price: "Approximately $300 (includes lunch all 3 days)",
    featured: true,
    slug: "high-desert-3-gun-championship-2026",
    hostingOrganization: "Parma Rod and Gun Club",
    registrationUrl: "https://practiscore.com",
    beginnerFriendly: false
  }
]

// Training Courses (Ongoing)
export const ongoingTrainingCourses: EventData[] = [
  {
    title: "Enhanced Concealed Carry Courses",
    description: "Regular monthly enhanced concealed carry permit courses offered by multiple certified instructors across Idaho.",
    date: "Multiple dates monthly",
    time: "Varies by provider",
    location: "Multiple Idaho locations",
    address: "Boise area (specific location TBD upon registration)",
    eventType: "Training",
    category: "Training & Education",
    price: "Contact for pricing",
    featured: true,
    slug: "enhanced-concealed-carry-courses",
    hostingOrganization: "Multiple Providers",
    contactPhone: "(208) 229-4677",
    contactEmail: "info@afaidaho.com",
    beginnerFriendly: true,
    equipmentProvided: true
  },
  {
    title: "Women's Firearms Training Programs",
    description: "Specialized training programs designed specifically for women, covering basic pistol skills, defensive techniques, and safety.",
    date: "Ongoing",
    time: "Various times",
    location: "Multiple Idaho locations",
    address: "Various locations across Idaho",
    eventType: "Training",
    category: "Training & Education",
    price: "Varies by program",
    featured: true,
    slug: "womens-firearms-training",
    hostingOrganization: "Multiple Providers",
    beginnerFriendly: true,
    equipmentProvided: true
  }
]

// Combined arrays
export const allRecurringEvents: EventData[] = [
  ...recurringWeeklyEvents,
  ...recurringMonthlyEvents
]

export const allSpecificEvents: EventData[] = [
  ...events2025,
  ...events2026
]

export const allTrainingCourses: EventData[] = [
  ...ongoingTrainingCourses
]

export const allEvents: EventData[] = [
  ...allRecurringEvents,
  ...allSpecificEvents,
  ...allTrainingCourses
]

// Event statistics
export const eventStats = {
  totalEvents: allEvents.length,
  recurringEvents: allRecurringEvents.length,
  specificEvents: allSpecificEvents.length,
  trainingCourses: allTrainingCourses.length,
  competitions: allEvents.filter(event => event.category === 'Competitive Match').length,
  gunShows: allEvents.filter(event => event.category === 'Gun Show').length,
  trainingEvents: allEvents.filter(event => event.category === 'Training & Education').length,
  beginnerFriendlyEvents: allEvents.filter(event => event.beginnerFriendly === true).length,
  featuredEvents: allEvents.filter(event => event.featured === true).length
}