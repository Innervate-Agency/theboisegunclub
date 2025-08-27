'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, BuildingOfficeIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon, PlusIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline';

export function EventsContentSection() {
  return (
    <section className="py-mobile-xl sm:py-2xl bg-muted/30 border-y border-border/50">
      <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Two Column Layout - Icons Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-mobile-xl sm:gap-2xl items-start">
            
            {/* Left Column - 2x2 Card Grid */}
            <div className="grid grid-cols-2 gap-base order-2 lg:order-1">
              
              {/* Submit Event */}
              <div className="group p-base bg-card rounded-xs border border-border/50 hover:border-nav-events/30 transition-all duration-200 hover:shadow-whisper">
                <div className="flex flex-col items-center text-center space-y-sm">
                  <div className="w-10 h-10 bg-nav-events/10 rounded-full flex items-center justify-center group-hover:bg-nav-events/20 transition-colors duration-200">
                    <PlusIcon className="h-5 w-5 text-nav-events" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-semibold text-sm text-card-foreground">Submit Event</h4>
                    <p className="text-xs text-muted-foreground leading-tight">
                      Share competitions, training, or community shoots
                    </p>
                  </div>
                </div>
              </div>

              {/* Create Account */}
              <div className="group p-base bg-card rounded-xs border border-border/50 hover:border-sagebrush-green/30 transition-all duration-200 hover:shadow-whisper">
                <div className="flex flex-col items-center text-center space-y-sm">
                  <div className="w-10 h-10 bg-sagebrush-green/10 rounded-full flex items-center justify-center group-hover:bg-sagebrush-green/20 transition-colors duration-200">
                    <UsersIcon className="h-5 w-5 text-sagebrush-green" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-semibold text-sm text-card-foreground">Join Community</h4>
                    <p className="text-xs text-muted-foreground leading-tight">
                      Create your shooter profile and connect with others
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Account */}
              <div className="group p-base bg-card rounded-xs border border-border/50 hover:border-sandy-ochre/30 transition-all duration-200 hover:shadow-whisper">
                <div className="flex flex-col items-center text-center space-y-sm">
                  <div className="w-10 h-10 bg-sandy-ochre/10 rounded-full flex items-center justify-center group-hover:bg-sandy-ochre/20 transition-colors duration-200">
                    <BuildingOfficeIcon className="h-5 w-5 text-sandy-ochre" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-semibold text-sm text-card-foreground">List Your Business</h4>
                    <p className="text-xs text-muted-foreground leading-tight">
                      Register your range, shop, or training facility
                    </p>
                  </div>
                </div>
              </div>

              {/* Corrections */}
              <div className="group p-base bg-card rounded-xs border border-border/50 hover:border-rusty-orange/30 transition-all duration-200 hover:shadow-whisper">
                <div className="flex flex-col items-center text-center space-y-sm">
                  <div className="w-10 h-10 bg-rusty-orange/10 rounded-full flex items-center justify-center group-hover:bg-rusty-orange/20 transition-colors duration-200">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-rusty-orange" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-semibold text-sm text-card-foreground">Report Issues</h4>
                    <p className="text-xs text-muted-foreground leading-tight">
                      Help us maintain accurate event information
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Content */}
            <div className="space-y-lg order-1 lg:order-2">
              {/* Heading and Subtitle - Left Aligned with Tight Spacing */}
              <div className="space-y-1">
                <h2 className="font-rajdhani font-bold text-heading-xl sm:text-heading-2xl text-card-foreground">
                  Idaho's Complete Firearms Events Hub
                </h2>
                <h3 className="font-noto-serif text-heading-base sm:text-heading-lg text-muted-foreground">
                  Connecting shooters across the Gem State through competition, training, and community
                </h3>
              </div>

              {/* Paragraph */}
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                From USPSA competitions at Boise ranges to precision rifle matches in the Idaho wilderness, 
                our comprehensive events calendar connects you with authentic shooting opportunities across the state. 
                Whether you're a seasoned competitor seeking your next challenge or a new shooter looking for 
                beginner-friendly training, you'll find verified events hosted by Idaho's most trusted ranges, 
                clubs, and organizations. Every listing is community-verified and includes detailed information 
                about skill requirements, equipment needs, and registration details.
              </p>

              {/* Community Engagement ChatBubbleBottomCenterTextIcon */}
              <div className="pt-base">
                <p className="text-sm text-muted-foreground/80 font-medium">
                  Built by Idaho gun owners, for Idaho gun owners. Help us grow the community.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}