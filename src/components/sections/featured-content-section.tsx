'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  CalendarIcon, 
  DocumentTextIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/outline'

export function FeaturedContentSection() {
  const featuredContent = [
    {
      type: 'Event',
      title: 'USPSA Monthly Match',
      description: 'Join us for our monthly USPSA match at Boise Valley Practical Shooters. All skill levels welcome.',
      date: 'Aug 24, 2025',
      location: 'Meridian, ID',
      icon: CalendarIcon,
      badgeText: 'This Weekend',
      badgeVariant: 'rusty-orange'
    },
    {
      type: 'Article',
      title: 'Idaho Concealed Carry Laws 2025',
      description: 'Complete guide to Idaho\'s constitutional carry laws and when you still need a permit.',
      date: 'Aug 20, 2025',
      location: 'Legal Guide',
      icon: DocumentTextIcon,
      badgeText: 'Updated',
      badgeVariant: 'sagebrush-green'
    },
    {
      type: 'Training',
      title: 'Basic Pistol Safety Course',
      description: 'NRA certified basic pistol course covering safety, fundamentals, and marksmanship.',
      date: 'Aug 30, 2025',
      location: 'Boise, ID',
      icon: AcademicCapIcon,
      badgeText: 'Spots Available',
      badgeVariant: 'slate-blue'
    }
  ]

  return (
    <section className="py-3xl bg-muted/30">
      <div className="container mx-auto px-lg">
        <div className="text-center space-y-xl mb-2xl">
          <h2 className="font-rajdhani font-bold text-3xl sm:text-4xl text-foreground">
            Featured Content
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest events, articles, and training opportunities in the Treasure Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
          {featuredContent.map((content, index) => (
            <Card key={index} className="shadow-whisper hover:shadow-present transition-all duration-300">
              <CardContent className="p-lg space-y-base">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-sm">
                    <content.icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">{content.type}</span>
                  </div>
                  <Badge variant={content.badgeVariant} size="sm">
                    {content.badgeText}
                  </Badge>
                </div>
                
                <h3 className="font-rajdhani font-bold text-xl text-card-foreground">
                  {content.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{content.date}</span>
                  <span>{content.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="font-rajdhani font-semibold">
            View All Content
          </Button>
        </div>
      </div>
    </section>
  )
}