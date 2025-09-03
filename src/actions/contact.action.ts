'use server'

import { contactSchema, type ContactFormState, type ContactFormData } from '@/schemas/contact.schema'
import type { ZodError } from 'zod'

// Helper to safely extract string from FormData
function getFormString(formData: FormData, key: string): string | null {
  const value = formData.get(key)
  return typeof value === 'string' ? value : null
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const rawData = {
      name: getFormString(formData, 'name'),
      email: getFormString(formData, 'email'),
      phone: getFormString(formData, 'phone') || undefined,
      subject: getFormString(formData, 'subject'),
      message: getFormString(formData, 'message'),
      inquiryType: getFormString(formData, 'inquiryType') || 'general',
      consent: formData.get('consent') === 'on'
    }

    const parsed = contactSchema.safeParse(rawData)
    
    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {}
      const zodError = parsed.error as ZodError
      
      zodError.issues.forEach((error) => {
        const field = error.path[0] as string
        if (!fieldErrors[field]) fieldErrors[field] = []
        fieldErrors[field].push(error.message)
      })

      return {
        success: false,
        message: 'Please fix the errors below.',
        errors: fieldErrors,
        values: rawData as Partial<ContactFormData>
      }
    }

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      success: true,
      message: '✅ Thank you! We\'ll get back to you within 24 hours.',
      errors: {},
      values: {}
    }

  } catch {
    const formValues = Object.fromEntries(formData)
    return {
      success: false,
      message: 'An error occurred. Please try again.',
      values: formValues as Partial<ContactFormData>
    }
  }
}
