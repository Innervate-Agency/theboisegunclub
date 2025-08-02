'use client'

import { useState } from 'react'
import { PageHero } from '@/components/ui/page-hero'
import { SiteFooter } from '@/components/ui/site-footer'
import { NavigationFusion } from '@/components/ui/navigation-fusion'
import { NewThemeToggle } from '@/components/ui/NewThemeToggle'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter 
} from '@/components/ui/dialog'
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, 
  DropdownMenuSeparator, DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from '@/components/ui/select'
import { 
  Popover, PopoverContent, PopoverTrigger 
} from '@/components/ui/popover'
import { 
  Tooltip, TooltipContent, TooltipTrigger 
} from '@/components/ui/tooltip'
import { 
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger 
} from '@/components/ui/sheet'
import { Home, Settings, User, Target, Calendar, Menu, ChevronDown, Info } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
  { label: 'Demo', href: '/components-demo', icon: <Target className="h-4 w-4" />, active: true },
  { label: 'Directory', href: '/directory', icon: <User className="h-4 w-4" /> },
  { label: 'Events', href: '/events', icon: <Calendar className="h-4 w-4" /> }
]

export default function ComponentsDemoPage() {
  const [selectedValue, setSelectedValue] = useState('')
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <NavigationFusion 
          items={navItems}
          variant="glass"
          orientation="horizontal"
        />
      </div>

      {/* Theme Toggle */}
      <NewThemeToggle variant="floating" />

      {/* Page Hero */}
      <PageHero
        title="Components Demo"
        subtitle="Testing overlay components with solid backgrounds"
        backgroundPreset="warm"
        primaryAction={{ text: "Test Components", href: "#demo" }}
      />

      {/* Demo Section */}
      <section id="demo" className="py-[var(--space-2xl)]">
        <div className="max-w-4xl mx-auto px-[var(--space-md)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
            
            {/* Dialog Demo */}
            <Card className="p-[var(--space-md)]">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">Dialog</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-brass-yellow text-gunmetal-black hover:bg-copper-orange">
                    Open Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-rajdhani">Dialog Title</DialogTitle>
                    <DialogDescription className="font-noto-sans">
                      This dialog should have a solid white background with proper text contrast.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-[var(--space-base)]">
                    <p className="text-sm text-case-hardened font-noto-sans">
                      Content goes here. The background should be completely opaque and readable.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="secondary">Cancel</Button>
                    <Button className="bg-brass-yellow text-gunmetal-black hover:bg-copper-orange">Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Card>

            {/* Dropdown Menu Demo */}
            <Card className="p-[var(--space-md)]">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">Dropdown Menu</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="w-full">
                    Options <ChevronDown className="ml-[var(--space-xs)] h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel className="font-rajdhani">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-[var(--space-xs)] h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-[var(--space-xs)] h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Card>

            {/* Select Demo */}
            <Card className="p-[var(--space-md)]">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">Select</h3>
              <Select value={selectedValue} onValueChange={setSelectedValue}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                  <SelectItem value="option4">Option 4</SelectItem>
                </SelectContent>
              </Select>
            </Card>

            {/* Popover Demo */}
            <Card className="p-[var(--space-md)]">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">Popover</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary" className="w-full">
                    Open Popover
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-[var(--space-xs)]">
                    <h4 className="font-rajdhani font-semibold">Popover Content</h4>
                    <p className="text-sm text-case-hardened font-noto-sans">
                      This popover should have a solid background and be clearly readable.
                    </p>
                    <Button size="sm" className="w-full bg-brass-yellow text-gunmetal-black hover:bg-copper-orange">
                      Action Button
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </Card>

            {/* Tooltip Demo */}
            <Card className="p-[var(--space-md)]">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">Tooltip</h3>
              <div className="flex justify-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="secondary">
                      <Info className="h-4 w-4" />
                      Hover me
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This tooltip has a solid dark background</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>

            {/* Sheet Demo */}
            <Card className="p-[var(--space-md)]">
              <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">Sheet</h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary" className="w-full">
                    <Menu className="mr-[var(--space-xs)] h-4 w-4" />
                    Open Sheet
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="font-rajdhani">Sheet Title</SheetTitle>
                    <SheetDescription className="font-noto-sans">
                      This sheet should have a solid background.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-[var(--space-base)] space-y-[var(--space-base)]">
                    <Button className="w-full bg-brass-yellow text-gunmetal-black hover:bg-copper-orange">
                      Primary Action
                    </Button>
                    <Button variant="secondary" className="w-full">
                      Secondary Action
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </Card>

          </div>

          {/* Status Section */}
          <div className="mt-[var(--space-2xl)] p-[var(--space-lg)] bg-gradient-card-warm rounded-lg border border-brass-yellow/20">
            <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
              Component Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-base)] text-sm font-noto-sans">
              <div className="space-y-[var(--space-xs)]">
                <div className="flex items-center gap-[var(--space-xs)]">
                  <div className="w-3 h-3 bg-rifling-green rounded-full"></div>
                  <span>Dialog - Fixed solid backgrounds</span>
                </div>
                <div className="flex items-center gap-[var(--space-xs)]">
                  <div className="w-3 h-3 bg-rifling-green rounded-full"></div>
                  <span>Dropdown Menu - Fixed hover states</span>
                </div>
                <div className="flex items-center gap-[var(--space-xs)]">
                  <div className="w-3 h-3 bg-rifling-green rounded-full"></div>
                  <span>Select - Fixed transparent backgrounds</span>
                </div>
              </div>
              <div className="space-y-[var(--space-xs)]">
                <div className="flex items-center gap-[var(--space-xs)]">
                  <div className="w-3 h-3 bg-rifling-green rounded-full"></div>
                  <span>Popover - Solid white background</span>
                </div>
                <div className="flex items-center gap-[var(--space-xs)]">
                  <div className="w-3 h-3 bg-rifling-green rounded-full"></div>
                  <span>Tooltip - Dark background with contrast</span>
                </div>
                <div className="flex items-center gap-[var(--space-xs)]">
                  <div className="w-3 h-3 bg-rifling-green rounded-full"></div>
                  <span>Sheet - Fixed sheet backgrounds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}