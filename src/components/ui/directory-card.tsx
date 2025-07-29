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
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && <p className="text-muted-foreground mb-4">{description}</p>}
      {children}
    </Card>
  )
}
