import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required").min(3, "Subject must be at least 3 characters"),
  message: z.string().min(1, "Message is required").min(10, "Message must be at least 10 characters"),
  inquiryType: z.enum(["general", "membership", "training", "events"]).default("general"),
  consent: z.boolean().refine((val) => val === true, "You must agree to the terms"),
})

export type ContactFormData = z.infer<typeof contactSchema>

export interface ContactFormState {
  success?: boolean
  message?: string
  errors?: Partial<Record<keyof ContactFormData, string[]>>
  values?: Partial<ContactFormData>
}

export const initialContactFormState: ContactFormState = {
  success: false,
  message: '',
  errors: {},
  values: {}
}
