'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Textarea } from "./textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const contactFormVariants = cva(
  "w-full max-w-2xl",
  {
    variants: {
      variant: {
        default: "bg-card border border-border rounded-card shadow-flat",
        glass: "mica-card border-border/20 rounded-card shadow-elevated",
        minimal: "bg-transparent border-0 shadow-none"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface ContactFormProps 
  extends Omit<React.ComponentProps<"div">, 'onSubmit'>,
    VariantProps<typeof contactFormVariants> {
  title?: string
  subtitle?: string
  description?: string
  formType?: 'contact' | 'business-inquiry' | 'event-submission' | 'directory-listing' | 'membership' | 'event' | 'lesson'
  showContactInfo?: boolean
  onSubmit?: (data: FormData) => void
}

export function ContactForm({
  className,
  title = "Contact Us",
  subtitle,
  description,
  variant,
  formType = 'contact',
  showContactInfo = true,
  onSubmit,
  ...props
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (onSubmit) {
      onSubmit(formData)
    } else {
      console.log('Form submitted:', Object.fromEntries(formData))
    }
    
    setIsSubmitting(false)
  }

  const getFormFields = () => {
    const baseFields = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
          <div className="space-y-[var(--space-xs)]">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              required
            />
          </div>
          <div className="space-y-[var(--space-xs)]">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="space-y-[var(--space-xs)]">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="space-y-[var(--space-xs)]">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(208) 555-0123"
          />
        </div>
      </>
    )

    switch (formType) {
      case 'business-inquiry':
        return (
          <>
            {baseFields}
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                name="businessName"
                placeholder="Your Business Name"
                required
              />
            </div>
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="businessType">Business Type *</Label>
              <Select name="businessType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gun-shop">Gun Shop</SelectItem>
                  <SelectItem value="shooting-range">Shooting Range</SelectItem>
                  <SelectItem value="instructor">Firearms Instructor</SelectItem>
                  <SelectItem value="gunsmith">Gunsmith</SelectItem>
                  <SelectItem value="training-facility">Training Facility</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="message">Tell us about your business *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe your services, location, and how you'd like to be featured in our directory..."
                rows={4}
                required
              />
            </div>
          </>
        )

      case 'event-submission':
        return (
          <>
            {baseFields}
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="eventName">Event Name *</Label>
              <Input
                id="eventName"
                name="eventName"
                placeholder="Your Event Name"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
              <div className="space-y-[var(--space-xs)]">
                <Label htmlFor="eventDate">Event Date *</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  required
                />
              </div>
              <div className="space-y-[var(--space-xs)]">
                <Label htmlFor="eventTime">Event Time</Label>
                <Input
                  id="eventTime"
                  name="eventTime"
                  type="time"
                />
              </div>
            </div>
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="eventLocation">Location *</Label>
              <Input
                id="eventLocation"
                name="eventLocation"
                placeholder="Event location or address"
                required
              />
            </div>
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="message">Event Description *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe your event, requirements, pricing, and any special information..."
                rows={4}
                required
              />
            </div>
          </>
        )

      case 'membership':
      case 'lesson':
        return (
          <>
            {baseFields}
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="experience">Experience Level</Label>
              <Select name="experience">
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert/Instructor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="interests">Areas of Interest</Label>
              <Textarea
                id="interests"
                name="interests"
                placeholder="What disciplines or training areas are you interested in? (e.g., pistol, rifle, competition shooting, home defense, etc.)"
                rows={3}
              />
            </div>
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us more about your goals, questions, or specific needs..."
                rows={4}
              />
            </div>
          </>
        )

      default:
        return (
          <>
            {baseFields}
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this regarding?"
              />
            </div>
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                rows={4}
                required
              />
            </div>
          </>
        )
    }
  }

  const getSubmitButtonText = () => {
    switch (formType) {
      case 'business-inquiry':
        return 'Submit Business Inquiry'
      case 'event-submission':
        return 'Submit Event'
      case 'membership':
        return 'Apply for Membership'
      case 'lesson':
        return 'Book Training Session'
      case 'event':
        return 'Register for Event'
      default:
        return 'Send Message'
    }
  }

  return (
    <div className={cn(contactFormVariants({ variant }), className)} {...props}>
      <Card className={variant === 'minimal' ? 'border-0 shadow-none' : ''}>
        <CardHeader className="text-center">
          <CardTitle className="text-heading-md font-rajdhani font-bold text-gunmetal-black">
            {title}
          </CardTitle>
          {subtitle && (
            <CardDescription className="text-case-hardened font-medium">
              {subtitle}
            </CardDescription>
          )}
          {description && (
            <p className="text-body-sm text-case-hardened leading-relaxed mt-[var(--space-xs)]">
              {description}
            </p>
          )}
        </CardHeader>

        <CardContent className="space-y-[var(--space-md)]">
          <form onSubmit={handleSubmit} className="space-y-[var(--space-md)]">
            {getFormFields()}

            <Button
              type="submit"
              className="w-full"
              variant="flat"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-card mr-[var(--space-xs)]" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-[var(--space-xs)]" />
                  {getSubmitButtonText()}
                </>
              )}
            </Button>
          </form>

          {showContactInfo && (
            <div className="border-t border-border pt-[var(--space-md)]">
              <h3 className="font-rajdhani font-bold text-gunmetal-black mb-[var(--space-base)]">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-base text-body-sm">
                <div className="flex items-center gap-sm">
                  <div className="p-xs bg-brass-yellow/10 rounded-input">
                    <Phone className="h-4 w-4 text-brass-yellow" />
                  </div>
                  <div>
                    <p className="font-medium text-gunmetal-black">Phone</p>
                    <p className="text-case-hardened">(208) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-sm">
                  <div className="p-xs bg-brass-yellow/10 rounded-input">
                    <Mail className="h-4 w-4 text-brass-yellow" />
                  </div>
                  <div>
                    <p className="font-medium text-gunmetal-black">Email</p>
                    <p className="text-case-hardened">info@boisegunclub.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-sm">
                  <div className="p-xs bg-brass-yellow/10 rounded-input">
                    <MapPin className="h-4 w-4 text-brass-yellow" />
                  </div>
                  <div>
                    <p className="font-medium text-gunmetal-black">Location</p>
                    <p className="text-case-hardened">Boise, Idaho</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-sm">
                  <div className="p-xs bg-brass-yellow/10 rounded-input">
                    <Clock className="h-4 w-4 text-brass-yellow" />
                  </div>
                  <div>
                    <p className="font-medium text-gunmetal-black">Response Time</p>
                    <p className="text-case-hardened">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
