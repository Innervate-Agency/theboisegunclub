'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ChevronDown, Settings, User, LogOut, Bell, Search } from 'lucide-react'

interface GlassmorphismExamplesProps {
  className?: string
}

export function GlassmorphismExamples({ className }: GlassmorphismExamplesProps) {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [showToast, setShowToast] = React.useState(false)

  return (
    <div className={cn("w-full max-w-site mx-auto p-lg", className)}>
      
      {/* Hero Section with Background for Glass Effects */}
      <div 
        className="relative p-micro2 rounded-overlay overflow-hidden mb-(--spacing-xl)"
        style={{
          background: `
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F2CB05' fill-opacity='0.15'%3E%3Cpath d='M20 20m-lg 0a8,8 0 1,1 16,0a8,8 0 1,1 -16,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F28705' fill-opacity='0.08'%3E%3Cpath d='M40 40m-micro6 0a16,16 0 1,1 32,0a16,16 0 1,1 -32,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
            radial-gradient(circle at 25% 25%, rgba(242, 203, 5, 0.20) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(242, 135, 5, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(91, 155, 213, 0.10) 0%, transparent 70%),
            linear-gradient(135deg, var(--color-range-white) 0%, var(--color-card-surface) 50%, var(--color-warning-amber) 100%)
          `
        }}
      >
        <div className="text-center space-y-(--spacing-md)">
          <h1 className="text-heading-xl font-rajdhani font-bold text-dark-chocolate">
            Real-World Glassmorphism Examples
          </h1>
          <p className="text-body-lg text-warning-amber font-noto-sans max-w-3xl mx-auto">
            See how Windows 11 Mica effects work in practical UI components. 
            Glass only works when there's content behind it to blur.
          </p>
          
          {/* Interactive Demo Buttons */}
          <div className="flex flex-wrap justify-center gap-base pt-(--spacing-base)">
            <div className="relative">
              <Button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="gap-xs"
              >
                User Menu <ChevronDown className="size-4" />
              </Button>
              
              {/* Dropdown with Mica Glass */}
              {showDropdown && (
                <div className="absolute top-full mt-(--spacing-xs) right-0 w-64 mica-dropdown rounded-sm shadow-elevated border border-sandy-ochre/20 z-50">
                  <div className="p-base space-y-(--spacing-sm)">
                    <div className="flex items-center gap-sm pb-(--spacing-xs) border-b border-border">
                      <div className="size-8 bg-sandy-ochre/20 rounded-full flex items-center justify-center">
                        <User className="size-4 text-sandy-ochre" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">John Doe</p>
                        <p className="text-caption text-muted-foreground">Premium Member</p>
                      </div>
                    </div>
                    
                    <button className="w-full flex items-center gap-sm p-xs rounded-input hover:bg-card/20 text-left">
                      <Settings className="size-4 text-muted-foreground" />
                      <span className="text-body-sm">Account Settings</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-sm p-xs rounded-input hover:bg-card/20 text-left">
                      <Bell className="size-4 text-muted-foreground" />
                      <span className="text-body-sm">Notifications</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-sm p-xs rounded-input hover:bg-card/20 text-left text-safety-red">
                      <LogOut className="size-4" />
                      <span className="text-body-sm">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <Button 
              onClick={() => setShowModal(true)}
              variant="secondary"
            >
              Open Modal
            </Button>
            
            <Button 
              onClick={() => setShowToast(true)}
              variant="secondary"
            >
              Show Toast
            </Button>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-lg left-8 w-48 h-48 bg-sandy-ochre/25 rounded-full blur-2xl" />
        <div className="absolute bottom-lg right-8 w-32 h-32 bg-rusty-orange/20 rounded-full blur-xl" />
        <div className="absolute top-micro/2 left-1/4 w-56 h-28 bg-scope-blue/15 rounded-full blur-2xl" />
        <div className="absolute top-sm right-1/4 w-24 h-24 bg-rifling-green/15 rounded-full blur-xl" />
        <div className="absolute bottom-micro6 left-1/3 w-36 h-36 bg-ember-glow/20 rounded-full blur-2xl" />
        
        {/* Additional Pattern Elements */}
        <div className="absolute top-micro2 right-12 w-16 h-16 border-2 border-sandy-ochre/30 rounded-sm rotate-45" />
        <div className="absolute bottom-micro2 left-12 w-20 h-20 border-2 border-rusty-orange/25 rounded-full" />
        <div className="absolute top-micro/3 right-1/3 w-12 h-12 bg-gradient-to-br from-sandy-ochre/20 to-rusty-orange/15 rounded-sm rotate-12" />
      </div>

      {/* Component Examples Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        
        {/* Search Bar with Glass */}
        <div className="relative">
          <div 
            className="absolute inset-0 rounded-xs opacity-80"
            style={{
              background: `
                url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F2CB05' fill-opacity='0.12'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                radial-gradient(circle at 30% 20%, rgba(242, 203, 5, 0.25) 0%, transparent 60%),
                radial-gradient(circle at 70% 80%, rgba(242, 135, 5, 0.18) 0%, transparent 60%),
                var(--gradient-mesh-warm)
              `
            }}
          />
          <div className="relative p-md space-y-(--spacing-base)">
            <h3 className="text-heading-sm font-rajdhani font-bold text-dark-chocolate">
              Glass Search Component
            </h3>
            
            <div className="mica-overlay p-base rounded-sm border border-card/20">
              <div className="flex items-center gap-sm">
                <Search className="size-5 text-muted-foreground" />
                <input 
                  placeholder="Search firearms, ranges, events..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
                <Badge variant="outline" className="text-caption">⌘K</Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Notification Cards */}
        <div className="relative">
          <div 
            className="absolute inset-0 rounded-xs opacity-80"
            style={{
              background: `
                url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235B9BD5' fill-opacity='0.10'%3E%3Cpath d='M12.5 12.5m-base 0a5,5 0 1,1 10,0a5,5 0 1,1 -10,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                radial-gradient(circle at 20% 30%, rgba(91, 155, 213, 0.22) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(185, 155, 96, 0.18) 0%, transparent 50%),
                var(--gradient-mesh-cool)
              `
            }}
          />
          <div className="relative p-md space-y-(--spacing-base)">
            <h3 className="text-heading-sm font-rajdhani font-bold text-dark-chocolate">
              Glass Notification Cards
            </h3>
            
            <div className="space-y-(--spacing-sm)">
              <div className="mica-toast p-base rounded-sm border border-card/20">
                <div className="flex items-start gap-sm">
                  <div className="size-2 bg-rifling-green rounded-full mt-(--spacing-xs)" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Training Reminder</p>
                    <p className="text-body-sm text-muted-foreground">CCW class starts in 30 minutes</p>
                  </div>
                </div>
              </div>
              
              <div className="mica-toast p-base rounded-sm border border-card/20">
                <div className="flex items-start gap-sm">
                  <div className="size-2 bg-sandy-ochre rounded-full mt-(--spacing-xs)" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">New Event Posted</p>
                    <p className="text-body-sm text-muted-foreground">Monthly competition signup open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-base">
          {/* Enhanced Backdrop with Pattern */}
          <div 
            className="absolute inset-0 backdrop-blur-sm"
            style={{
              background: `
                url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M50 50m-tiny0 0a20,20 0 1,1 40,0a20,20 0 1,1 -40,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                radial-gradient(circle at 30% 20%, rgba(0, 0, 0, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.3) 0%, transparent 50%),
                rgba(0, 0, 0, 0.25)
              `
            }}
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal */}
          <Card className="mica-modal relative z-10 w-full max-w-md shadow-elite">
            <CardContent className="p-md space-y-(--spacing-base)">
              <h3 className="text-heading-sm font-rajdhani font-bold text-foreground">
                Glass Modal Example
              </h3>
              <p className="text-muted-foreground">
                This modal uses the mica-modal class for strong backdrop blur while 
                maintaining visual connection to the background content.
              </p>
              <div className="flex gap-sm pt-(--spacing-base)">
                <Button size="sm" className="flex-1">Confirm</Button>
                <Button 
                  size="sm" 
                  variant="secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-md right-6 z-50">
          <div className="mica-toast p-base rounded-sm shadow-elevated border border-sandy-ochre/20 min-w-80">
            <div className="flex items-start gap-sm">
              <div className="size-6 bg-rifling-green/20 rounded-full flex items-center justify-center">
                <div className="size-2 bg-rifling-green rounded-full" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Glass Effect Active!</p>
                <p className="text-body-sm text-muted-foreground">
                  This toast notification demonstrates the mica-toast glass effect.
                </p>
              </div>
              <button 
                onClick={() => setShowToast(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
