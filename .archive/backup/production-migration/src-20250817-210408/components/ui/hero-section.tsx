'use client'

import React from 'react'
import { PageHeader } from './page-header'

interface HeroSectionProps {
  title: React.ReactNode
  subtitle: string
  badge?: string
  icon?: React.ElementType
  children?: React.ReactNode
}

export function HeroSection({ title, subtitle, badge, icon, children }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-directory-hero px-md py-xl">
      <div className="container mx-auto max-w-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="lg:col-span-1">
            <PageHeader title={title} subtitle={subtitle} badge={badge} icon={icon} />
          </div>
          {children && <div className="lg:col-span-1">{children}</div>}
        </div>
      </div>
    </section>
  )
}
