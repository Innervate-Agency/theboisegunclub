import { 
  AcademicCapIcon,
  CheckBadgeIcon, 
  ClockIcon, 
  MapPinIcon, 
  ShieldCheckIcon, 
  TicketIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

import { getUpcomingEvents } from '@/lib/comprehensive-events-data'

// Calculate real events stats from comprehensive events data
const upcomingEventsData = getUpcomingEvents()
const totalEvents = upcomingEventsData.length
const competitionEvents = upcomingEventsData.filter(e => e.eventType === 'Competition').length
const trainingEvents = upcomingEventsData.filter(e => e.eventType === 'Training').length
const expoEvents = upcomingEventsData.filter(e => e.eventType === 'Expo').length
const socialEvents = upcomingEventsData.filter(e => e.eventType === 'Social').length
const charityEvents = upcomingEventsData.filter(e => e.eventType === 'Charity').length

export const eventsContentBridge = {
  sectionTitle: "Why Attend Idaho Events",
  sectionIcon: UserGroupIcon,
  sectionDescription: "Join Idaho's vibrant shooting sports community with events ranging from competitive matches to educational clinics. Our event calendar features authentic competitions, training courses, and social gatherings hosted by verified Idaho organizations.",
  benefits: [
    {
      icon: ShieldCheckIcon,
      title: "Verified Events",
      description: "All events are verified with real organizers and authentic competition details"
    },
    {
      icon: MapPinIcon,
      title: "Local Access",
      description: "Events throughout Idaho from Treasure Valley to wilderness locations"
    },
    {
      icon: TicketIcon,
      title: "Easy Registration",
      description: "Direct links to official event registration and contact information"
    },
    {
      icon: AcademicCapIcon,
      title: "Skill Building",
      description: "Training events and clinics for all skill levels from beginner to expert"
    }
  ],
  categoriesTitle: "Event Categories",
  categoriesIcon: CheckBadgeIcon,
  categories: [
    { name: "Competitions", count: competitionEvents.toString(), trend: "Active" },
    { name: "Training", count: trainingEvents.toString(), trend: "Growing" },
    { name: "Expos", count: expoEvents.toString(), trend: "Popular" },
    { name: "Other", count: (totalEvents - competitionEvents - trainingEvents - expoEvents - socialEvents - charityEvents).toString(), trend: "Various" }
  ],
  trustIndicators: [
    { icon: CheckBadgeIcon, label: "Verified Organizers", value: "100%" },
    { icon: ClockIcon, label: "Average Notice", value: "30 Days" },
    { icon: MapPinIcon, label: "Statewide Coverage", value: "Idaho" }
  ],
  primaryCard: {
    title: "Host an Event",
    description: "Share your shooting sports event with Idaho's firearms community.",
    features: [
      "Free event listings",
      "Direct participant contact",
      "Calendar integration",
      "Social media promotion"
    ],
    buttonText: "Submit Event"
  },
  statsCard: {
    title: "",
    stats: []
  },
  accentColor: "nav-events"
}