'use client'

import React, { useState } from 'react'
import { BuildingOfficeIcon, ChatBubbleBottomCenterTextIcon, CheckCircleIcon, CheckIcon, InformationCircleIcon, PlusIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline';

/**
 * Advanced Events Content Section using Layout Pattern 3: Anchor-Tethered Contextual Hub
 * 
 * Features:
 * - CSS Anchor Positioning (August 2025)
 * - Contextual information panels that auto-position
 * - Left-aligned chunky typography system
 * - Interactive tooltips with smart positioning
 * - Progressive enhancement with JavaScript fallbacks
 */
export function EventsContentSectionAnchor() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  return (
    <section className="py-mobile-2xl sm:py-4xl bg-muted/20 border-y border-border/30 layout-anchor-hub content-visibility-auto">
      <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
        <div className="max-w-7xl mx-auto">
          
          {/* Layout Pattern 3: Anchor-Tethered Contextual Hub */}
          <div className="layout-container-adaptive relative">
            <div className="adaptive-content grid items-start gap-golden">
              
              {/* Left Column - Main Content with Anchor Points */}
              <div className="space-y-[var(--spacing-2xl)]">
                
                {/* Chunky Header System */}
                <div className="chunky-header">
                  <h2 className="chunky-h2 anchor-target" data-anchor="main-title">
                    Idaho's Firearms Community Platform
                  </h2>
                  <h3 className="chunky-h3">
                    Discover authentic events, connect with local businesses, and join the Treasure Valley shooting community
                  </h3>
                </div>

                {/* Content Blocks with Anchor Points */}
                <div className="space-y-[var(--spacing-xl)]">
                  
                  {/* Community Verification Block */}
                  <div className="anchor-target bg-card p-[var(--spacing-lg)] rounded-xs border border-border/50" data-anchor="verification">
                    <div className="flex items-start gap-[var(--spacing-base)]">
                      <div className="w-10 h-10 bg-sagebrush-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="h-5 w-5 text-sagebrush-green" />
                      </div>
                      <div>
                        <h4 className="font-rajdhani font-semibold text-body-lg text-card-foreground mb-xs">
                          Community-Verified Events
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Every event listing is verified by fellow Idaho gun owners. From USPSA competitions 
                          at Boise ranges to precision rifle matches in the wilderness, find authentic 
                          opportunities across the state.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Directory Block */}
                  <div className="anchor-target bg-card p-[var(--spacing-lg)] rounded-xs border border-border/50" data-anchor="directory">
                    <div className="flex items-start gap-[var(--spacing-base)]">
                      <div className="w-10 h-10 bg-sandy-ochre/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <BuildingOfficeIcon className="h-5 w-5 text-sandy-ochre" />
                      </div>
                      <div>
                        <h4 className="font-rajdhani font-semibold text-body-lg text-card-foreground mb-xs">
                          Trusted Local Businesses
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Connect with 594+ verified Idaho firearms businesses. FFLs, ranges, trainers, 
                          and services you can trust, all privacy-filtered and community-reviewed.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Training Resources Block */}
                  <div className="anchor-target bg-card p-[var(--spacing-lg)] rounded-xs border border-border/50" data-anchor="training">
                    <div className="flex items-start gap-[var(--spacing-base)]">
                      <div className="w-10 h-10 bg-nav-events/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <UsersIcon className="h-5 w-5 text-nav-events" />
                      </div>
                      <div>
                        <h4 className="font-rajdhani font-semibold text-body-lg text-card-foreground mb-xs">
                          Training & Education
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          From beginner-friendly safety courses to advanced competitive training, 
                          discover educational opportunities that match your skill level and interests.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column - Action Hub */}
              <div className="space-y-[var(--spacing-lg)]">
                
                <h3 className="font-rajdhani font-semibold text-heading-lg text-card-foreground">
                  Join Our Community
                </h3>
                
                {/* Action Cards with Hover Context */}
                <div className="space-y-[var(--spacing-base)]">
                  
                  {/* Submit Event */}
                  <div 
                    className="relative anchor-target group p-[var(--spacing-lg)] bg-card rounded-xs border border-border/50 hover:border-nav-events/30 transition-all duration-300 hover:shadow-whisper cursor-pointer"
                    data-anchor="submit-action"
                    onMouseEnter={() => setActiveTooltip('submit')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="flex items-center gap-[var(--spacing-base)]">
                      <div className="w-12 h-12 bg-nav-events/10 rounded-xs flex items-center justify-center group-hover:bg-nav-events/20 transition-colors duration-200">
                        <PlusIcon className="h-5 w-5 text-nav-events" />
                      </div>
                      <div>
                        <h4 className="font-rajdhani font-semibold text-body-base text-card-foreground">
                          Submit Event
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Share shooting events
                        </p>
                      </div>
                    </div>
                    
                    {/* Tooltip positioned relative to this card */}
                    {activeTooltip === 'submit' && (
                      <div className="absolute -top-2 left-full ml-2 z-50 animate-in fade-in slide-in-from-left-1 duration-200">
                        <div className="bg-nav-events text-white text-xs p-base rounded-xs shadow-commanding w-64">
                          <div className="flex items-start gap-xs">
                            <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">Quick Event Submission</p>
                              <p className="text-white/90 leading-tight">
                                Share competitions, training sessions, or community shoots. 
                                Help fellow shooters find opportunities.
                              </p>
                            </div>
                          </div>
                          {/* Arrow pointing to card */}
                          <div className="absolute top-4 -left-1 w-2 h-2 bg-nav-events transform rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Join Community */}
                  <div 
                    className="relative anchor-target group p-[var(--spacing-lg)] bg-card rounded-xs border border-border/50 hover:border-sagebrush-green/30 transition-all duration-300 hover:shadow-whisper cursor-pointer"
                    data-anchor="join-action"
                    onMouseEnter={() => setActiveTooltip('join')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="flex items-center gap-[var(--spacing-base)]">
                      <div className="w-12 h-12 bg-sagebrush-green/10 rounded-xs flex items-center justify-center group-hover:bg-sagebrush-green/20 transition-colors duration-200">
                        <UsersIcon className="h-5 w-5 text-sagebrush-green" />
                      </div>
                      <div>
                        <h4 className="font-rajdhani font-semibold text-body-base text-card-foreground">
                          Create Profile
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Connect with shooters
                        </p>
                      </div>
                    </div>
                    
                    {/* Tooltip positioned relative to this card */}
                    {activeTooltip === 'join' && (
                      <div className="absolute -top-2 left-full ml-2 z-50 animate-in fade-in slide-in-from-left-1 duration-200">
                        <div className="bg-sagebrush-green text-white text-xs p-base rounded-xs shadow-commanding w-64">
                          <div className="flex items-start gap-xs">
                            <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">Community Membership</p>
                              <p className="text-white/90 leading-tight">
                                Create your profile, track events, and connect with other Idaho shooters.
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-4 -left-1 w-2 h-2 bg-sagebrush-green transform rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* List Business */}
                  <div 
                    className="relative anchor-target group p-[var(--spacing-lg)] bg-card rounded-xs border border-border/50 hover:border-sandy-ochre/30 transition-all duration-300 hover:shadow-whisper cursor-pointer"
                    data-anchor="business-action"
                    onMouseEnter={() => setActiveTooltip('business')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="flex items-center gap-[var(--spacing-base)]">
                      <div className="w-12 h-12 bg-sandy-ochre/10 rounded-xs flex items-center justify-center group-hover:bg-sandy-ochre/20 transition-colors duration-200">
                        <BuildingOfficeIcon className="h-5 w-5 text-sandy-ochre" />
                      </div>
                      <div>
                        <h4 className="font-rajdhani font-semibold text-body-base text-card-foreground">
                          List Business
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Register your FFL/range
                        </p>
                      </div>
                    </div>
                    
                    {/* Tooltip positioned relative to this card */}
                    {activeTooltip === 'business' && (
                      <div className="absolute -top-2 left-full ml-2 z-50 animate-in fade-in slide-in-from-left-1 duration-200">
                        <div className="bg-sandy-ochre text-white text-xs p-base rounded-xs shadow-commanding w-64">
                          <div className="flex items-start gap-xs">
                            <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">Business Directory</p>
                              <p className="text-white/90 leading-tight">
                                Register your FFL, range, or training facility in our verified directory.
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-4 -left-1 w-2 h-2 bg-sandy-ochre transform rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Report Issues */}
                  <div 
                    className="relative anchor-target group p-[var(--spacing-lg)] bg-card rounded-xs border border-border/50 hover:border-rusty-orange/30 transition-all duration-300 hover:shadow-whisper cursor-pointer"
                    data-anchor="report-action"
                    onMouseEnter={() => setActiveTooltip('report')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="flex items-center gap-[var(--spacing-base)]">
                      <div className="w-12 h-12 bg-rusty-orange/10 rounded-xs flex items-center justify-center group-hover:bg-rusty-orange/20 transition-colors duration-200">
                        <Message className="h-5 w-5 text-rusty-orange" />
                      </div>
                      <div>
                        <h4 className="font-rajdhani font-semibold text-body-base text-card-foreground">
                          Report Issues
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Help improve accuracy
                        </p>
                      </div>
                    </div>
                    
                    {/* Tooltip positioned relative to this card */}
                    {activeTooltip === 'report' && (
                      <div className="absolute -top-2 left-full ml-2 z-50 animate-in fade-in slide-in-from-left-1 duration-200">
                        <div className="bg-rusty-orange text-white text-xs p-base rounded-xs shadow-commanding w-64">
                          <div className="flex items-start gap-xs">
                            <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">Quality Assurance</p>
                              <p className="text-white/90 leading-tight">
                                Report outdated details or suggest improvements to event information.
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-4 -left-1 w-2 h-2 bg-rusty-orange transform rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Anchor-Positioned Contextual Tooltips - Actually positioned relative to trigger */}
          {activeTooltip === 'submit' && (
            <div 
              className="absolute z-50 supports-anchor-positioning"
              style={{
                "--current-anchor": "--submit-anchor",
                position: "fixed",
                insetArea: "top span-right",
                positionAnchor: "--submit-anchor",
                margin: "8px"
              } as React.CSSProperties}
            >
              <div className="bg-nav-events text-white text-xs p-base rounded-xs shadow-commanding max-w-xs">
                <div className="flex items-start gap-xs">
                  <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Quick Event Submission</p>
                    <p className="text-white/80 leading-tight">
                      Share competitions, training sessions, or community shoots you discover. 
                      Help fellow shooters find great opportunities.
                    </p>
                  </div>
                </div>
                {/* Arrow pointing to anchor */}
                <div className="absolute -bottom-1 left-4 w-2 h-2 bg-nav-events transform rotate-45"></div>
              </div>
            </div>
          )}
          
          {activeTooltip === 'join' && (
            <div 
              className="absolute z-50 supports-anchor-positioning"
              style={{
                "--current-anchor": "--join-anchor",
                position: "fixed",
                insetArea: "top span-right",
                positionAnchor: "--join-anchor",
                margin: "8px"
              } as React.CSSProperties}
            >
              <div className="bg-sagebrush-green text-white text-xs p-base rounded-xs shadow-commanding max-w-xs">
                <div className="flex items-start gap-xs">
                  <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Community Membership</p>
                    <p className="text-white/80 leading-tight">
                      Create your shooter profile, track events you've attended, 
                      and connect with other Idaho firearms enthusiasts.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-4 w-2 h-2 bg-sagebrush-green transform rotate-45"></div>
              </div>
            </div>
          )}
          
          {activeTooltip === 'business' && (
            <div 
              className="absolute z-50 supports-anchor-positioning"
              style={{
                "--current-anchor": "--business-anchor",
                position: "fixed",
                insetArea: "top span-right",
                positionAnchor: "--business-anchor",
                margin: "8px"
              } as React.CSSProperties}
            >
              <div className="bg-sandy-ochre text-white text-xs p-base rounded-xs shadow-commanding max-w-xs">
                <div className="flex items-start gap-xs">
                  <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Business Directory</p>
                    <p className="text-white/80 leading-tight">
                      Register your FFL, range, training facility, or service. 
                      Join our verified directory of trusted Idaho businesses.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-4 w-2 h-2 bg-sandy-ochre transform rotate-45"></div>
              </div>
            </div>
          )}
          
          {activeTooltip === 'report' && (
            <div 
              className="absolute z-50 supports-anchor-positioning"
              style={{
                "--current-anchor": "--report-anchor",
                position: "fixed",
                insetArea: "top span-right",
                positionAnchor: "--report-anchor",
                margin: "8px"
              } as React.CSSProperties}
            >
              <div className="bg-rusty-orange text-white text-xs p-base rounded-xs shadow-commanding max-w-xs">
                <div className="flex items-start gap-xs">
                  <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Quality Assurance</p>
                    <p className="text-white/80 leading-tight">
                      Help us maintain accurate event information. Report outdated 
                      details, incorrect locations, or suggest improvements.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-4 w-2 h-2 bg-rusty-orange transform rotate-45"></div>
              </div>
            </div>
          )}

          {/* Fallback tooltips for browsers without anchor positioning */}
          {activeTooltip && (
            <div className="no-anchor-positioning fixed bottom-4 left-4 right-4 max-w-sm mx-auto z-50">
              <div className="bg-card border border-border p-sm rounded-xs shadow-commanding">
                <div className="flex items-start gap-xs">
                  <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5 text-muted-foreground" />
                  <div className="text-xs">
                    {activeTooltip === 'submit' && (
                      <p className="text-muted-foreground">Share events you discover at ranges and clubs</p>
                    )}
                    {activeTooltip === 'join' && (
                      <p className="text-muted-foreground">Create your profile and connect with the community</p>
                    )}
                    {activeTooltip === 'business' && (
                      <p className="text-muted-foreground">Register your business in our verified directory</p>
                    )}
                    {activeTooltip === 'report' && (
                      <p className="text-muted-foreground">Help us maintain accurate information</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Feature Detection Indicator */}
          <div className="mt-[var(--spacing-xl)] text-center">
            <div className="supports-anchor-positioning text-xs text-muted-foreground/50">
              ⚡ Enhanced with CSS Anchor Positioning + Container Queries
            </div>
            <div className="no-anchor-positioning text-xs text-muted-foreground/50">
              📱 Responsive with CSS Grid + JavaScript fallbacks
            </div>
          </div>

        </div>
      </div>
      
      {/* Advanced CSS with Anchor Positioning */}
      <style jsx>{`
        /* CSS Anchor Positioning for supported browsers */
        @supports (anchor-name: --test) {
          .anchor-target[data-anchor="submit-action"] {
            anchor-name: --submit-anchor;
          }
          
          .anchor-target[data-anchor="join-action"] {
            anchor-name: --join-anchor;
          }
          
          .anchor-target[data-anchor="business-action"] {
            anchor-name: --business-anchor;
          }
          
          .anchor-target[data-anchor="report-action"] {
            anchor-name: --report-anchor;
          }
          
          .anchor-positioned {
            position: absolute;
            position-anchor: var(--current-anchor);
            top: anchor(bottom);
            left: anchor(right);
            margin-left: var(--spacing-sm);
            margin-top: var(--spacing-xs);
            position-fallback: --tooltip-fallback;
          }
          
          @position-fallback --tooltip-fallback {
            @try {
              top: anchor(top);
              left: anchor(left);
              margin-left: calc(-1 * var(--spacing-xs));
              margin-top: calc(-1 * var(--spacing-xs));
            }
            @try {
              bottom: anchor(top);
              left: anchor(left);
              margin-left: var(--spacing-sm);
              margin-bottom: var(--spacing-xs);
            }
          }
        }
        
        /* Enhanced hover effects */
        .anchor-target:hover {
          transform: translateY(-1px);
        }
        
        /* Smooth transitions for all interactive elements */
        .anchor-target {
          transition: all 0.2s ease-out;
        }
      `}</style>
    </section>
  )
}