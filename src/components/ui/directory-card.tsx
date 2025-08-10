import React from 'react'
import { Card } from '@/components/ui/card'

// Placeholder directory card component
export interface DirectoryCardProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function DirectoryCard({ title, description, children }: DirectoryCardProps) {
  return (
    <Card className="p-(--card-padding)">
      <h3 className="text-(--card-title-size) font-semibold mb-(--space-xs)">{title}</h3>
      {description && <p className="text-muted-foreground mb-(--space-sm)">{description}</p>}
      {children}
    </Card>
  )
}
