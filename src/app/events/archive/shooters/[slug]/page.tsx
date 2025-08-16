import { Metadata } from 'next'
import { ShooterProfileTemplate, type ShooterProfile } from '@/components/ui/shooter-profile-template'
import { notFound } from 'next/navigation'

// Sample shooter profiles for demonstration
const sampleProfiles: Record<string, ShooterProfile> = {
  'mike-thompson': {
    id: 'mike-thompson',
    name: 'Mike Thompson',
    location: 'Boise, Idaho',
    yearsActive: 8,
    classification: {
      uspsa: 'A Class',
      idpa: 'Expert',
      steelChallenge: 'Master'
    },
    stats: {
      eventsEntered: 47,
      wins: 12,
      topThree: 28,
      averageFinish: '3rd',
      favoriteStage: 'Long Range Precision'
    },
    recentEvents: [
      {
        name: 'USPSA Action Pistol Championship',
        date: '2024-07-15',
        division: 'Open Division',
        finish: '2nd Place',
        score: '156.42'
      },
      {
        name: 'Steel Challenge Monthly',
        date: '2024-06-20',
        division: 'Centerfire Pistol',
        finish: '1st Place',
        score: '89.73'
      },
      {
        name: 'IDPA Defensive Pistol Match',
        date: '2024-05-18',
        division: 'CDP',
        finish: '4th Place',
        score: '142.88'
      }
    ],
    achievements: [
      {
        title: 'Steel Challenge Division Winner',
        date: '2024-06-20',
        event: 'Steel Challenge Monthly',
        type: 'win'
      },
      {
        title: 'USPSA A Class Classification',
        date: '2024-03-15',
        event: 'USPSA Classifier Match',
        type: 'classification'
      },
      {
        title: 'Regional Championship Podium',
        date: '2023-09-10',
        event: 'Northwest Regional USPSA',
        type: 'podium'
      }
    ],
    preferences: {
      primaryDivision: 'USPSA Open',
      secondaryDivision: 'Steel Challenge',
      favoriteVenue: 'Boise Gun Club',
      shootingStyle: 'Aggressive, calculated risks'
    }
  },
  'sarah-rodriguez': {
    id: 'sarah-rodriguez',
    name: 'Sarah Rodriguez',
    location: 'Meridian, Idaho',
    yearsActive: 5,
    classification: {
      idpa: 'Expert',
      uspsa: 'B Class',
      threeGun: 'Tactical'
    },
    stats: {
      eventsEntered: 32,
      wins: 8,
      topThree: 19,
      averageFinish: '2nd',
      favoriteStage: 'Technical Movement'
    },
    recentEvents: [
      {
        name: 'IDPA Defensive Pistol Match',
        date: '2024-07-10',
        division: 'CDP',
        finish: '1st Place',
        score: '134.22'
      },
      {
        name: '3-Gun Nation Match',
        date: '2024-06-25',
        division: 'Tactical Division',
        finish: '3rd Place',
        score: '298.15'
      }
    ],
    achievements: [
      {
        title: 'IDPA CDP Division Winner',
        date: '2024-07-10',
        event: 'IDPA Monthly Match',
        type: 'win'
      },
      {
        title: 'Expert Classification',
        date: '2024-01-20',
        event: 'IDPA Classifier',
        type: 'classification'
      }
    ],
    preferences: {
      primaryDivision: 'IDPA CDP',
      secondaryDivision: '3-Gun Tactical',
      favoriteVenue: 'Capital City Arms',
      shootingStyle: 'Precise, methodical approach'
    }
  }
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const profile = sampleProfiles[params.slug]
  
  if (!profile) {
    return {
      title: 'Shooter Not Found | Idaho Shooting Sports Archive',
    }
  }

  return {
    title: `${profile.name} | Idaho Shooting Sports Archive`,
    description: `Shooting profile for ${profile.name} - ${profile.yearsActive} years competing, ${profile.stats.wins} wins, ${profile.stats.topThree} podium finishes. View performance history, achievements, and statistics.`,
  }
}

export async function generateStaticParams() {
  return Object.keys(sampleProfiles).map((slug) => ({
    slug,
  }))
}

export default function ShooterProfilePage({ params }: PageProps) {
  const profile = sampleProfiles[params.slug]

  if (!profile) {
    notFound()
  }

  return (
    <ShooterProfileTemplate 
      profile={profile}
      isPublic={true}
      isOwner={false}
    />
  )
}