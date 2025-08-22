'use client'

import React from 'react'
import { Button } from './button'
import { Badge } from './badge'
import { Input } from './input'

interface FormField {
  type: 'input' | 'select' | 'textarea'
  name: string
  placeholder?: string
  options?: string[] // for select fields
  className?: string
  required?: boolean
}

interface FormSectionProps {
  title: string
  subtitle?: string
  description?: string
  badge?: {
    text: string
    className?: string
  }
  fields: FormField[]
  submitText: string
  submitNote?: string
  onSubmit?: (formData: FormData) => void
  className?: string
  background?: 'default' | 'warm' | 'muted'
}

export function FormSection({
  title,
  subtitle,
  description,
  badge,
  fields,
  submitText,
  submitNote,
  onSubmit,
  className = "",
  background = 'warm'
}: FormSectionProps) {
  const backgroundClasses = {
    default: '',
    warm: 'bg-gradient-hero-warm rounded-xs border border-sandy-ochre/20',
    muted: 'bg-muted/50 rounded-xs border border-border'
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSubmit) {
      const formData = new FormData(e.currentTarget)
      onSubmit(formData)
    }
  }

  const renderField = (field: FormField, index: number) => {
    const baseClassName = field.className || "bg-card border-sandy-ochre/30 focus:border-sandy-ochre"
    
    switch (field.type) {
      case 'input':
        return (
          <Input
            key={index}
            name={field.name}
            placeholder={field.placeholder}
            className={baseClassName}
            required={field.required}
          />
        )
      case 'select':
        return (
          <select
            key={index}
            name={field.name}
            className={`px-base py-xs border border-sandy-ochre/30 rounded-xs bg-card text-body-sm font-noto-sans ${baseClassName}`}
            required={field.required}
          >
            <option>{field.placeholder}</option>
            {field.options?.map((option, optIndex) => (
              <option key={optIndex} value={option}>{option}</option>
            ))}
          </select>
        )
      case 'textarea':
        return (
          <textarea
            key={index}
            name={field.name}
            placeholder={field.placeholder}
            className={`w-full px-base py-xs border border-sandy-ochre/30 rounded-xs bg-card text-body-sm font-noto-sans min-h-[100px] focus:border-sandy-ochre focus:outline-none ${baseClassName}`}
            required={field.required}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={`${backgroundClasses[background]} p-xl ${className}`}>
      <div className="text-center mb-lg">
        {badge && (
          <Badge className={badge.className}>
            {badge.text}
          </Badge>
        )}
        <h3 className="text-heading-xl font-rajdhani font-bold text-dark-chocolate mb-base">
          {title}
        </h3>
        {subtitle && (
          <h4 className="text-body-lg font-rajdhani font-medium text-warning-amber mb-base">
            {subtitle}
          </h4>
        )}
        {description && (
          <p className="text-body-lg text-warning-amber font-noto-sans max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-base">
        {fields.map((field, index) => {
          // Handle grid layouts for certain field patterns
          if (field.name.includes('grid-2')) {
            const gridFields = fields.slice(index, index + 2).filter(f => f.name.includes('grid-2'))
            if (gridFields.length === 2) {
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-base">
                  {gridFields.map((gridField, gridIndex) => renderField({
                    ...gridField,
                    name: gridField.name.replace('-grid-2', '')
                  }, gridIndex))}
                </div>
              )
            }
          }
          
          // Skip fields that were already rendered in grid
          if (field.name.includes('grid-2') && index > 0 && fields[index - 1].name.includes('grid-2')) {
            return null
          }
          
          return renderField(field, index)
        })}
        
        <div className="text-center pt-base">
          <Button variant="flat" className="bg-sandy-ochre text-dark-chocolate hover:bg-rusty-orange font-rajdhani font-semibold">
            {submitText}
          </Button>
          {submitNote && (
            <p className="text-body-sm text-warning-amber mt-xs">
              {submitNote}
            </p>
          )}
        </div>
      </form>
    </div>
  )
}