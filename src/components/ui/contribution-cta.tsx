'use client'

import { Card, CardContent } from './card'
import { Button } from './button'
import { Badge } from './badge'
import { CameraIcon, ChatBubbleBottomCenterTextIcon, PencilIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';

interface ContributionItem {
  icon: React.ComponentType<{ className?: string; weight?: string }>
  title: string
  description: string
  actionText: string
  iconColor?: string
  iconBgColor?: string
}

interface ContributionCTAProps {
  title?: string
  subtitle?: string
  contributions?: ContributionItem[]
  className?: string
}

const defaultContributions: ContributionItem[] = [
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: "Share Your Experience",
    description: "Post in our community forums about local ranges, events, or firearm experiences.",
    actionText: "Join Forums",
    iconColor: "text-slate-blue",
    iconBgColor: "bg-slate-blue/20"
  },
  {
    icon: CameraIcon,
    title: "Submit Range Photos",
    description: "Help others with real-time conditions at Black's Creek, Morley Nelson, and local ranges.",
    actionText: "Upload Photos",
    iconColor: "text-sagebrush-green", 
    iconBgColor: "bg-sagebrush-green/20"
  },
  {
    icon: PencilIcon,
    title: "Write Reviews",
    description: "Review local FFLs, trainers, and services to help fellow gun owners make informed choices.",
    actionText: "Write Review",
    iconColor: "text-canyon-clay",
    iconBgColor: "bg-canyon-clay/20"
  },
  {
    icon: StarIcon,
    title: "Recommend Businesses",
    description: "Know a great gunsmith or training instructor? Help us build the most complete directory.",
    actionText: "Suggest Business",
    iconColor: "text-rusty-orange",
    iconBgColor: "bg-rusty-orange/20"
  }
]

export function ContributionCTA({
  title = "How You Can Help Build This",
  subtitle = "This platform thrives on community knowledge. Every contribution makes it stronger for all Idaho gun owners.",
  contributions = defaultContributions,
  className
}: ContributionCTAProps) {
  return (
    <Card className={`shadow-present bg-card text-card-foreground ${className}`}>
      <CardContent className="p-lg space-y-lg">
        {/* Header */}
        <div className="text-center space-y-base">
          <div className="flex items-center justify-center gap-xs mb-base">
            <UsersIcon className="h-6 w-6 text-rusty-orange" weight="bold" />
            <Badge variant="rusty-orange" size="sm">Community Built</Badge>
          </div>
          <h2 className="font-rajdhani font-bold text-heading-2xl text-card-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Contribution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {contributions.map((contribution, index) => {
            const Icon = contribution.icon
            return (
              <div key={index} className="space-y-base">
                <div className="flex items-start gap-base">
                  <div className={`w-10 h-10 ${contribution.iconBgColor} rounded-xs flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-5 w-5 ${contribution.iconColor}`} weight="bold" />
                  </div>
                  <div className="space-y-sm flex-1">
                    <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground">
                      {contribution.title}
                    </h3>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {contribution.description}
                    </p>
                    <Button 
                      variant="micro" 
                      size="sm"
                      animationType="arrow"
                      className="mt-sm"
                    >
                      {contribution.actionText}
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Community Call-to-Action */}
        <div className="text-center pt-base border-t border-border">
          <div className="flex items-center justify-center gap-xs mb-sm">
            <UsersIcon className="h-4 w-4 text-muted-foreground" weight="bold" />
            <span className="text-body-sm text-muted-foreground">Built by Idaho gun owners, for Idaho gun owners</span>
          </div>
          <Button 
            variant="outline" animationType="arrow"
            className="font-rajdhani font-bold"
          >
            Join the Community
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}