'use client'

import React from 'react'
import { BuildingOfficeIcon, ChatBubbleBottomCenterTextIcon, PlusIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline';

/**
 * Advanced Events Content Section using Layout Pattern 1: Scroll-Driven Reveal Theater
 * 
 * Features:
 * - Scroll-driven animations (August 2025 CSS)
 * - Left-aligned chunky typography system
 * - Mathematical spacing with golden ratio
 * - Container queries for true component responsiveness
 * - Progressive enhancement with fallbacks
 */
export function EventsContentSectionAdvanced() {
  return (
    <section className="py-mobile-2xl sm:py-4xl bg-background border-y border-border/30 layout-scroll-theater content-visibility-auto">
      <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
        <div className="max-w-7xl mx-auto">
          
          {/* Layout Pattern 1: Scroll-Driven Reveal Theater */}
          <div className="layout-container-adaptive">
            <div className="adaptive-content grid items-start gap-golden">
              
              {/* Left Column - Scroll-Revealing Content */}
              <div className="scroll-reveal-content">
                
                {/* Chunky Header System */}
                <div className="chunky-header mb-[var(--spacing-fluid-md)]">
                  <h2 className="chunky-h2">
                    Idaho's Complete Firearms Events Hub
                  </h2>
                  <h3 className="chunky-h3">
                    Connecting shooters across the Gem State through competition, training, and community
                  </h3>
                </div>

                {/* Descriptive Content with Mathematical Spacing */}
                <div className="space-y-[var(--spacing-lg)]">
                  <p className="text-body-lg text-muted-foreground leading-relaxed max-w-3xl">
                    From USPSA competitions at Boise ranges to precision rifle matches in the Idaho wilderness, 
                    our comprehensive events calendar connects you with authentic shooting opportunities across the state. 
                  </p>
                  
                  <p className="text-body-base text-muted-foreground leading-relaxed max-w-3xl">
                    Whether you're a seasoned competitor seeking your next challenge or a new shooter looking for 
                    beginner-friendly training, you'll find verified events hosted by Idaho's most trusted ranges, 
                    clubs, and organizations. Every listing is community-verified and includes detailed information 
                    about skill requirements, equipment needs, and registration details.
                  </p>
                </div>

                {/* Community Engagement CTA */}
                <div className="mt-[var(--spacing-2xl)]">
                  <p className="text-sm text-muted-foreground mb-[var(--spacing-base)]">
                    Built by Idaho gun owners, for Idaho gun owners. Help us grow the community.
                  </p>
                </div>

              </div>

              {/* Right Column - Action Cards with Container Queries */}
              <div className="container-query-component">
                <div className="space-y-[var(--spacing-lg)]">
                  
                  {/* "How You Can Help" Header */}
                  <div className="scroll-reveal-content" style={{"--animation-delay": "0.2s"} as React.CSSProperties}>
                    <h3 className="font-rajdhani font-semibold text-heading-lg text-card-foreground">
                      How you can help:
                    </h3>
                  </div>
                  
                  {/* Advanced Grid with Container Query Responsiveness */}
                  <div className="grid grid-cols-1 gap-[var(--spacing-base)]">
                    
                    {/* Submit Event - Scroll Reveal with Stagger */}
                    <div className="scroll-reveal-content group" style={{"--animation-delay": "0.3s"} as React.CSSProperties}>
                      <div className="p-[var(--spacing-lg)] bg-card rounded-xs border border-border/50 hover:border-nav-events/30 transition-all duration-300 hover:shadow-whisper">
                        <div className="flex items-start gap-[var(--spacing-base)]">
                          <div className="w-12 h-12 bg-nav-events/10 rounded-xs flex items-center justify-center group-hover:bg-nav-events/20 transition-colors duration-200 flex-shrink-0">
                            <PlusIcon className="h-5 w-5 text-nav-events" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-rajdhani font-semibold text-body-lg text-card-foreground mb-xs">
                              Submit Event
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Share competitions, training, or community shoots you discover at ranges and clubs
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Join Community - Scroll Reveal with Stagger */}
                    <div className="scroll-reveal-content group" style={{"--animation-delay": "0.4s"} as React.CSSProperties}>
                      <div className="p-[var(--spacing-lg)] bg-card rounded-xs border border-border/50 hover:border-sagebrush-green/30 transition-all duration-300 hover:shadow-whisper">
                        <div className="flex items-start gap-[var(--spacing-base)]">
                          <div className="w-12 h-12 bg-sagebrush-green/10 rounded-xs flex items-center justify-center group-hover:bg-sagebrush-green/20 transition-colors duration-200 flex-shrink-0">
                            <UsersIcon className="h-5 w-5 text-sagebrush-green" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-rajdhani font-semibold text-body-lg text-card-foreground mb-xs">
                              Join Community
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Create your shooter profile and connect with other Idaho firearms enthusiasts
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ListBulletIcon Business - Scroll Reveal with Stagger */}
                    <div className="scroll-reveal-content group" style={{"--animation-delay": "0.5s"} as React.CSSProperties}>
                      <div className="p-[var(--spacing-lg)] bg-card rounded-xs border border-border/50 hover:border-sandy-ochre/30 transition-all duration-300 hover:shadow-whisper">
                        <div className="flex items-start gap-[var(--spacing-base)]">
                          <div className="w-12 h-12 bg-sandy-ochre/10 rounded-xs flex items-center justify-center group-hover:bg-sandy-ochre/20 transition-colors duration-200 flex-shrink-0">
                            <BuildingOfficeIcon className="h-5 w-5 text-sandy-ochre" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-rajdhani font-semibold text-body-lg text-card-foreground mb-xs">
                              List Your Business
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Register your range, shop, or training facility with our community
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Report Issues - Scroll Reveal with Stagger */}
                    <div className="scroll-reveal-content group" style={{"--animation-delay": "0.6s"} as React.CSSProperties}>
                      <div className="p-[var(--spacing-lg)] bg-card rounded-xs border border-border/50 hover:border-rusty-orange/30 transition-all duration-300 hover:shadow-whisper">
                        <div className="flex items-start gap-[var(--spacing-base)]">
                          <div className="w-12 h-12 bg-rusty-orange/10 rounded-xs flex items-center justify-center group-hover:bg-rusty-orange/20 transition-colors duration-200 flex-shrink-0">
                            <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-rusty-orange" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-rajdhani font-semibold text-body-lg text-card-foreground mb-xs">
                              Report Issues
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Help us maintain accurate event information and improve the platform
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Progressive Enhancement Indicators */}
          <div className="mt-[var(--spacing-2xl)] text-center">
            {/* Show enhancement level based on browser support */}
            <div className="supports-container-queries text-xs text-muted-foreground/50">
              ✨ Enhanced with Container Queries + Scroll-Driven Animations
            </div>
            <div className="no-container-queries text-xs text-muted-foreground/50">
              📱 Responsive with CSS Grid + Flexbox fallbacks
            </div>
          </div>

        </div>
      </div>
      
      {/* Advanced styling with mathematical spacing */}
      <style jsx>{`
        .scroll-reveal-content {
          animation-delay: var(--animation-delay, 0s);
        }
        
        /* Container query responsive adjustments */
        @container component (max-width: 500px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* Enhanced scroll animations for supported browsers */
        @supports (animation-timeline: view()) {
          .scroll-reveal-content {
            animation: scroll-reveal-enhanced both linear;
            animation-timeline: view();
            animation-range: entry 0% cover 40%;
          }
        }
        
        @keyframes scroll-reveal-enhanced {
          from {
            transform: translateX(-60px) scale(0.95);
            opacity: 0;
            filter: blur(2px);
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
            filter: blur(0);
          }
        }
        
        /* Fallback for browsers without scroll-driven animations */
        @supports not (animation-timeline: view()) {
          .scroll-reveal-content {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}