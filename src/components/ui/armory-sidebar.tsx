'use client'

import React from 'react'
import { Badge } from './badge'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './sidebar'
import {
  BookOpen,
  Scale,
  Target,
  MapPin,
  Globe,
  Shield,
  FileText,
  Users,
  Wrench
} from 'lucide-react'

export function ArmorySidebar() {
  return (
    <Sidebar variant="inset" className="border-none shadow-elevated hover:shadow-prominent transition-all duration-300">
      <SidebarHeader className="border-b px-sm py-xs">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xs bg-foothills-purple">
            <Shield className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <h2 className="text-body-sm font-semibold font-rajdhani">The Armory</h2>
            <p className="text-xs text-muted-foreground">Information Hub</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-xs py-sm">
        {/* Idaho Content */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-micro text-xs font-semibold font-rajdhani text-foothills-purple mb-tiny group-data-[collapsible=icon]:hidden">
            IDAHO CONTENT
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-1">
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full justify-start text-body-sm hover:bg-foothills-purple/10" tooltip="Idaho Laws">
                <Scale className="mr-xs h-4 w-4" />
                <span className="group-data-[collapsible=icon]:hidden">Idaho Laws</span>
                <Badge variant="secondary" className="ml-auto text-xs group-data-[collapsible=icon]:hidden">12</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full justify-start text-body-sm hover:bg-foothills-purple/10" tooltip="Buying Guides">
                <FileText className="mr-xs h-4 w-4" />
                <span className="group-data-[collapsible=icon]:hidden">Buying Guides</span>
                <Badge variant="secondary" className="ml-auto text-xs group-data-[collapsible=icon]:hidden">8</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full justify-start text-body-sm hover:bg-foothills-purple/10" tooltip="Safety Training">
                <Shield className="mr-xs h-4 w-4" />
                <span className="group-data-[collapsible=icon]:hidden">Safety Training</span>
                <Badge variant="secondary" className="ml-auto text-xs group-data-[collapsible=icon]:hidden">15</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Local Resources */}
        <SidebarGroup className="mt-base">
          <SidebarGroupLabel className="px-micro text-xs font-semibold font-rajdhani text-foothills-purple mb-tiny group-data-[collapsible=icon]:hidden">
            LOCAL RESOURCES
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-1">
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full justify-start text-body-sm hover:bg-foothills-purple/10" tooltip="Shooting Ranges">
                <MapPin className="mr-xs h-4 w-4" />
                <span className="group-data-[collapsible=icon]:hidden">Shooting Ranges</span>
                <Badge variant="secondary" className="ml-auto text-xs group-data-[collapsible=icon]:hidden">18</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full justify-start text-body-sm hover:bg-foothills-purple/10" tooltip="Training Facilities">
                <Target className="mr-xs h-4 w-4" />
                <span className="group-data-[collapsible=icon]:hidden">Training Facilities</span>
                <Badge variant="secondary" className="ml-auto text-xs group-data-[collapsible=icon]:hidden">12</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full justify-start text-body-sm hover:bg-foothills-purple/10" tooltip="Local FFLs">
                <Users className="mr-xs h-4 w-4" />
                <span className="group-data-[collapsible=icon]:hidden">Local FFLs</span>
                <Badge variant="secondary" className="ml-auto text-xs group-data-[collapsible=icon]:hidden">34</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Coming Soon */}
        <SidebarGroup className="mt-base">
          <SidebarGroupLabel className="px-micro text-xs font-semibold font-rajdhani text-muted-foreground mb-tiny group-data-[collapsible=icon]:hidden">
            COMING SOON
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-1">
            <SidebarMenuItem>
              <SidebarMenuButton disabled className="w-full justify-start text-body-sm opacity-50" tooltip="Firearm Database">
                <Globe className="mr-xs h-4 w-4" />
                <span className="group-data-[collapsible=icon]:hidden">Firearm Database</span>
                <Badge variant="outline" className="ml-auto text-xs group-data-[collapsible=icon]:hidden">12K+</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton disabled className="w-full justify-start text-body-sm opacity-50" tooltip="Maintenance Guides">
                <Wrench className="mr-xs h-4 w-4" />
                <span className="group-data-[collapsible=icon]:hidden">Maintenance Guides</span>
                <Badge variant="outline" className="ml-auto text-xs group-data-[collapsible=icon]:hidden">Soon</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-sm py-xs group-data-[collapsible=icon]:hidden">
        <div className="text-xs text-muted-foreground">
          <p>540K+ Idaho gun owners</p>
          <p className="mt-micro">Updated daily</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
