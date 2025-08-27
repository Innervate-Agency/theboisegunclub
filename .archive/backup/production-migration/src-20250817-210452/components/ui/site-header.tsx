'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import { 
  Calendar, 
  Building, 
  BookOpen, 
  MapPin, 
  ShoppingCart, 
  Users, 
  SignIn,
  List,
  X
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container mx-auto max-w-site px-md">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-base">
            <Link href="/" className="flex items-center gap-xs">
              <div className="size-8 rounded-sm bg-gradient-logo flex items-center justify-center">
                <span className="text-dark-chocolate font-rajdhani font-bold text-body-sm">TBG</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-rajdhani font-bold text-heading-lg text-card-foreground">THE BOISE</span>
                <span className="font-rajdhani font-bold text-heading-lg text-primary ml-xs">GUN CLUB</span>
              </div>
            </Link>
            <Badge variant="default" className="hidden md:block text-body-xs text-muted-foreground">
              Community Platform
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Events */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-xs">
                  <Calendar className="size-4" />
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-base p-lg w-[400px]">
                    <div className="space-y-xs">
                      <h4 className="font-rajdhani font-bold text-card-foreground">Upcoming Events</h4>
                      <p className="text-body-sm text-muted-foreground">Competitions, training, and community events</p>
                    </div>
                    <div className="grid gap-xs">
                      <NavigationMenuLink href="/events" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">All Events</div>
                        <p className="text-body-xs text-muted-foreground">Browse all upcoming events</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/events?category=competition" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">Competitions</div>
                        <p className="text-body-xs text-muted-foreground">USPSA, IDPA, and local matches</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/events?category=training" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">Training Events</div>
                        <p className="text-body-xs text-muted-foreground">Education and skill development</p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Directory */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-xs">
                  <Building className="size-4" />
                  Directory
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-base p-lg w-[400px]">
                    <div className="space-y-xs">
                      <h4 className="font-rajdhani font-bold text-card-foreground">Business Directory</h4>
                      <p className="text-body-sm text-muted-foreground">Local firearms businesses and services</p>
                    </div>
                    <div className="grid gap-xs">
                      <NavigationMenuLink href="/directory" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">All Businesses</div>
                        <p className="text-body-xs text-muted-foreground">Complete Treasure Valley directory</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/directory?type=dealer" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">FFL Dealers</div>
                        <p className="text-body-xs text-muted-foreground">Licensed firearms dealers</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/directory?type=range" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">Shooting Ranges</div>
                        <p className="text-body-xs text-muted-foreground">Indoor and outdoor facilities</p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Guides */}
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "gap-xs")} href="/guides">
                  <BookOpen className="size-4" />
                  Guides
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Map */}
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "gap-xs")} href="/intel">
                  <MapPin className="size-4" />
                  Map
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Marketplace */}
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "gap-xs")} href="/marketplace">
                  <ShoppingCart className="size-4" />
                  Marketplace
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Community */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-xs">
                  <Users className="size-4" />
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-base p-lg w-[300px]">
                    <div className="space-y-xs">
                      <h4 className="font-rajdhani font-bold text-card-foreground">Connect & Share</h4>
                      <p className="text-body-sm text-muted-foreground">Join the conversation</p>
                    </div>
                    <div className="grid gap-xs">
                      <NavigationMenuLink href="/forums" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">Forums</div>
                        <p className="text-body-xs text-muted-foreground">Community discussions</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/about" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">About TBGC</div>
                        <p className="text-body-xs text-muted-foreground">Our mission and story</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/contact" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-body-sm font-medium">Contact Us</div>
                        <p className="text-body-xs text-muted-foreground">Get in touch</p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center gap-base">
            <Button variant="outline" size="sm" className="hidden md:flex gap-xs">
              <SignIn className="size-4" />
              Sign In
            </Button>
            <Button size="sm" className="hidden md:block bg-gradient-fire hover:bg-gradient-logo text-primary-foreground font-rajdhani font-bold transition-all duration-300">
              Join TBGC
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="size-5" /> : <List className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-base border-t border-border/40">
            <nav className="space-y-base">
              <Link href="/events" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <Calendar className="size-4" />
                Events
              </Link>
              <Link href="/directory" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <Building className="size-4" />
                Directory
              </Link>
              <Link href="/guides" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <BookOpen className="size-4" />
                Guides
              </Link>
              <Link href="/intel" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <MapPin className="size-4" />
                Map
              </Link>
              <Link href="/marketplace" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <ShoppingCart className="size-4" />
                Marketplace
              </Link>
              <Link href="/forums" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <Users className="size-4" />
                Forums
              </Link>
              <div className="pt-base border-t border-border/40 flex flex-col gap-xs">
                <Button variant="outline" size="sm" className="justify-start gap-xs">
                  <SignIn className="size-4" />
                  Sign In
                </Button>
                <Button size="sm" className="justify-start bg-gradient-fire hover:bg-gradient-logo text-primary-foreground font-rajdhani font-bold transition-all duration-300">
                  Join TBGC
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}