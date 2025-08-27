'use client'

import React from 'react'
import { Button } from './button'
import { Input } from './input'
import { Badge } from './badge'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface FilterOption {
  value: string
  label: string
  count?: number
}

interface FilterGroup {
  label: string
  options: FilterOption[]
  activeValue: string
  onChange: (value: string) => void
}

interface SearchFilterBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  placeholder?: string
  filters?: FilterOption[] | FilterGroup[]
  activeFilter?: string
  onFilterChange?: (filter: string) => void
  showSearch?: boolean
  additionalActions?: React.ReactNode
  className?: string
}

export function SearchFilterBar({
  searchQuery,
  onSearchChange,
  placeholder = "MagnifyingGlassIcon...",
  filters = [],
  activeFilter = "all",
  onFilterChange,
  showSearch = true,
  additionalActions,
  className = ""
}: SearchFilterBarProps) {
  // Check if filters is an array of FilterGroup or FilterOption
  const isFilterGroups = filters.length > 0 && 'options' in filters[0]

  return (
    <div className={`space-y-lg ${className}`}>
      {/* MagnifyingGlassIcon Bar */}
      {showSearch && (
        <div className="flex flex-col md:flex-row gap-base">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={placeholder}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          {additionalActions}
        </div>
      )}

      {/* Filter Groups or Simple Filters */}
      {filters.length > 0 && (
        <div className="space-y-lg">
          {isFilterGroups ? (
            // Handle FilterGroup[]
            (filters as FilterGroup[]).map((group, index) => (
              <div key={index} className="space-y-base">
                <h3 className="font-rajdhani text-body-lg font-bold text-card-foreground">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-xs">
                  {group.options.map((option) => (
                    <Button
                      key={option.value}
                      variant={group.activeValue === option.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => group.onChange(option.value)}
                      className={group.activeValue === option.value ? 
                        "bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange" : 
                        "border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
                      }
                    >
                      {option.label}
                      <Badge variant="outline" className="ml-xs">
                        {option.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Handle FilterOption[] (backward compatibility)
            onFilterChange && (
              <div className="flex flex-wrap gap-sm">
                {(filters as FilterOption[]).map((filter) => (
                  <Badge
                    key={filter.value}
                    variant={activeFilter === filter.value ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-200 ${
                      activeFilter === filter.value 
                        ? "shadow-present" 
                        : "hover:shadow-whisper"
                    }`}
                    onClick={() => onFilterChange(filter.value)}
                  >
                    {filter.label}
                    {filter.count !== undefined && (
                      <span className="ml-xs opacity-70">({filter.count})</span>
                    )}
                  </Badge>
                ))}
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}