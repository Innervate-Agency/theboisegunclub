'use client'

import React from 'react'
import { Badge } from './badge'
import { Button } from './button'
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
  Target,
  Building2,
  MapPin,
  Filter,
  Award,
  Plus,
  Shield,
  Zap
} from 'lucide-react'

interface DirectorySidebarProps {
  selectedType: string
  selectedTier: string
  onTypeChange: (type: string) => void
  onTierChange: (tier: string) => void
  businessTypeFilters: Array<{
    id: string
    label: string
    icon: any
    count?: number
  }>
  tierFilters: Array<{
    id: string
    label: string
    count?: number
  }>
  totalBusinesses: number
}

export function DirectorySidebar({ 
  selectedType, 
  selectedTier, 
  onTypeChange, 
  onTierChange, 
  businessTypeFilters, 
  tierFilters,
  totalBusinesses 
}: DirectorySidebarProps) {
  return (
    <Sidebar variant="inset" className="border-none shadow-elevated hover:shadow-prominent transition-all duration-300">
      <SidebarHeader className="border-b px-sm py-xs">
        <div className="flex items-center space-x-3">
          <div className="flex size-8 items-center justify-center rounded-xs bg-nav-directory">
            <Building2 className="size-4 text-primary-foreground" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <h2 className="text-body-sm font-semibold font-rajdhani">Directory Filters</h2>
            <p className="text-xs text-muted-foreground">Find local businesses</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-xs py-sm">
        {/* Business Type Filters */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-micro text-xs font-semibold font-rajdhani text-nav-directory mb-tiny group-data-[collapsible=icon]:hidden">
            BUSINESS TYPE
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-1">
            {businessTypeFilters.map((filter) => (
              <SidebarMenuItem key={filter.id}>
                <SidebarMenuButton 
                  className={`w-full justify-start text-body-sm transition-all duration-200 ${
                    selectedType === filter.id 
                      ? 'bg-nav-directory/10 text-nav-directory font-medium' 
                      : 'hover:bg-nav-directory/5'
                  }`}
                  onClick={() => onTypeChange(filter.id)}
                  tooltip={filter.label}
                >
                  {React.createElement(filter.icon, { 
                    weight: "bold", 
                    className: "mr-xs size-4" 
                  })}
                  <span className="group-data-[collapsible=icon]:hidden">{filter.label}</span>
                  {filter.count && (
                    <Badge 
                      variant={selectedType === filter.id ? "default" : "secondary"} 
                      className="ml-auto text-xs group-data-[collapsible=icon]:hidden"
                    >
                      {filter.count}
                    </Badge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Tier Filters */}
        <SidebarGroup className="mt-base">
          <SidebarGroupLabel className="px-micro text-xs font-semibold font-rajdhani text-nav-directory mb-tiny group-data-[collapsible=icon]:hidden">
            MEMBERSHIP TIER
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-1">
            {tierFilters.map((filter) => (
              <SidebarMenuItem key={filter.id}>
                <SidebarMenuButton 
                  className={`w-full justify-start text-body-sm transition-all duration-200 ${
                    selectedTier === filter.id 
                      ? 'bg-nav-directory/10 text-nav-directory font-medium' 
                      : 'hover:bg-nav-directory/5'
                  }`}
                  onClick={() => onTierChange(filter.id)}
                  tooltip={filter.label}
                >
                  <Award className="mr-xs size-4" />
                  <span className="group-data-[collapsible=icon]:hidden">{filter.label}</span>
                  {filter.count && (
                    <Badge 
                      variant={selectedTier === filter.id ? "default" : "secondary"} 
                      className="ml-auto text-xs group-data-[collapsible=icon]:hidden"
                    >
                      {filter.count}
                    </Badge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* List Your Business CTA */}
        <SidebarGroup className="mt-base">
          <SidebarGroupLabel className="px-micro text-xs font-semibold font-rajdhani text-muted-foreground mb-tiny group-data-[collapsible=icon]:hidden">
            JOIN DIRECTORY
          </SidebarGroupLabel>
          <div className="px-micro group-data-[collapsible=icon]:hidden">
            <div className="space-y-base p-sm bg-nav-directory/5 rounded-xs border border-nav-directory/20">
              <div className="space-y-xs text-center">
                <Target className="size-6 text-nav-directory mx-auto" />
                <h4 className="font-rajdhani font-bold text-sm text-card-foreground">
                  List Your Business
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join Idaho's premier firearms directory and connect with thousands of responsible gun owners.
                </p>
              </div>
              <Button size="sm" className="w-full shadow-none">
                <Plus className="size-3 mr-xs" />
                Get Listed
              </Button>
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-sm py-xs group-data-[collapsible=icon]:hidden">
        <div className="text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>{totalBusinesses}+ businesses</span>
            <Badge variant="outline" size="sm">
              <Shield className="size-2 mr-micro" />
              Verified
            </Badge>
          </div>
          <p className="mt-micro">Updated daily</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}