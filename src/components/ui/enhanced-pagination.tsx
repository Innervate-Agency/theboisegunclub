'use client'

import React, { useMemo } from 'react'
import { Button } from './button'
import { Badge } from './badge'
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export type PaginationVariant = 'full' | 'minimal' | 'compact' | 'infinite'

export interface EnhancedPaginationProps {
  // Core pagination
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  
  // Items info
  totalItems: number
  itemsPerPage: number
  filteredItems: number
  
  // Variants & styling
  variant?: PaginationVariant
  showItemsInfo?: boolean
  showJumpToPage?: boolean
  className?: string
  
  // Per-page options
  perPageOptions?: number[]
  onPerPageChange?: (perPage: number) => void
  
  // Loading state
  isLoading?: boolean
  
  // Advanced features
  onFirstPage?: () => void
  onLastPage?: () => void
  enableKeyboardNavigation?: boolean
}

export function EnhancedPagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  filteredItems,
  variant = 'full',
  showItemsInfo = true,
  showJumpToPage = false,
  className,
  perPageOptions = [12, 24, 48, 96],
  onPerPageChange,
  isLoading = false,
  onFirstPage,
  onLastPage,
  enableKeyboardNavigation = true
}: EnhancedPaginationProps) {

  // Calculate pagination range
  const paginationRange = useMemo(() => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }, [currentPage, totalPages])

  // Calculate items range for display
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, filteredItems)

  // Keyboard navigation effect
  React.useEffect(() => {
    if (!enableKeyboardNavigation) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return // Don't interfere with form inputs
      }

      switch (e.key) {
        case 'ArrowLeft':
        case 'h':
          if (currentPage > 1) {
            e.preventDefault()
            onPageChange(currentPage - 1)
          }
          break
        case 'ArrowRight':
        case 'l':
          if (currentPage < totalPages) {
            e.preventDefault()
            onPageChange(currentPage + 1)
          }
          break
        case 'Home':
          if (currentPage > 1) {
            e.preventDefault()
            onFirstPage ? onFirstPage() : onPageChange(1)
          }
          break
        case 'End':
          if (currentPage < totalPages) {
            e.preventDefault()
            onLastPage ? onLastPage() : onPageChange(totalPages)
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, totalPages, onPageChange, onFirstPage, onLastPage, enableKeyboardNavigation])

  // Don't render if no pagination needed
  if (totalPages <= 1 && variant !== 'infinite') {
    return null
  }

  // Minimal variant - just arrows and page info
  if (variant === 'minimal') {
    return (
      <div className={cn("flex items-center justify-between gap-base", className)}>
        {showItemsInfo && (
          <div className="text-sm text-muted-foreground">
            Showing {startItem}-{endItem} of {filteredItems} results
          </div>
        )}
        <div className="flex items-center gap-xs">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1 || isLoading}
            className="gap-xs"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
          <Badge variant="outline" className="font-rajdhani font-bold">
            {currentPage} of {totalPages}
          </Badge>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages || isLoading}
            className="gap-xs"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  // Compact variant - condensed for mobile
  if (variant === 'compact') {
    return (
      <div className={cn("flex flex-col gap-sm", className)}>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {startItem}-{endItem} of {filteredItems}
          </div>
          <div className="flex items-center gap-xs">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1 || isLoading}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <span className="text-sm font-rajdhani font-bold px-sm">
              {currentPage}/{totalPages}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages || isLoading}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {onPerPageChange && (
          <div className="flex items-center justify-center gap-xs">
            <span className="text-xs text-muted-foreground">Per page:</span>
            {perPageOptions.map((option) => (
              <Button
                key={option}
                variant={itemsPerPage === option ? "default" : "ghost"}
                size="sm"
                onClick={() => onPerPageChange(option)}
                className="h-6 px-xs text-xs"
              >
                {option}
              </Button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Infinite variant - for infinite scroll
  if (variant === 'infinite') {
    return (
      <div className={cn("flex flex-col items-center gap-sm py-lg", className)}>
        {isLoading && (
          <div className="flex items-center gap-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Loading more...</span>
          </div>
        )}
        {showItemsInfo && (
          <div className="text-sm text-muted-foreground text-center">
            Showing {endItem} of {filteredItems} results
          </div>
        )}
      </div>
    )
  }

  // Full variant - complete pagination with all features
  return (
    <div className={cn("space-y-base", className)}>
      {/* Top row - Items info and per-page selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base">
        {showItemsInfo && (
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{startItem}-{endItem}</span> of{' '}
            <span className="font-medium">{filteredItems}</span> results
            {filteredItems !== totalItems && (
              <span className="text-muted-foreground/75"> (filtered from {totalItems} total)</span>
            )}
          </div>
        )}

        {onPerPageChange && (
          <div className="flex items-center gap-xs">
            <span className="text-sm text-muted-foreground">Show:</span>
            {perPageOptions.map((option) => (
              <Button
                key={option}
                variant={itemsPerPage === option ? "default" : "outline"}
                size="sm"
                onClick={() => onPerPageChange(option)}
                className="h-8 px-sm text-sm font-rajdhani"
                disabled={isLoading}
              >
                {option}
              </Button>
            ))}
            <span className="text-sm text-muted-foreground">per page</span>
          </div>
        )}
      </div>

      {/* Main pagination */}
      <Pagination className={cn(isLoading && "pointer-events-none opacity-50")}>
        <PaginationContent>
          {/* First page button */}
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onFirstPage ? onFirstPage() : onPageChange(1)}
              disabled={currentPage <= 1 || isLoading}
              className="gap-xs"
              title="First page (Home)"
            >
              <ChevronsLeft className="h-4 w-4" />
              <span className="hidden md:inline">First</span>
            </Button>
          </PaginationItem>

          {/* Previous button */}
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => onPageChange(currentPage - 1)}
              className={cn(
                currentPage <= 1 && "pointer-events-none opacity-50",
                "cursor-pointer"
              )}
            />
          </PaginationItem>

          {/* Page numbers */}
          {paginationRange.map((page, index) => (
            <PaginationItem key={index}>
              {page === '...' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => onPageChange(page as number)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* Next button */}
          <PaginationItem>
            <PaginationNext 
              onClick={() => onPageChange(currentPage + 1)}
              className={cn(
                currentPage >= totalPages && "pointer-events-none opacity-50",
                "cursor-pointer"
              )}
            />
          </PaginationItem>

          {/* Last page button */}
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onLastPage ? onLastPage() : onPageChange(totalPages)}
              disabled={currentPage >= totalPages || isLoading}
              className="gap-xs"
              title="Last page (End)"
            >
              <span className="hidden md:inline">Last</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Keyboard navigation hint */}
      {enableKeyboardNavigation && (
        <div className="text-xs text-muted-foreground text-center">
          Use arrow keys, Home/End, or H/L to navigate
        </div>
      )}
    </div>
  )
}

export default EnhancedPagination