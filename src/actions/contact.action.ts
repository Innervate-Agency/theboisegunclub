'use server'

import { contactSchema, type ContactFormState } from '@/schemas/contact.schema'

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const rawData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || undefined,
      subject: formData.get('subject'),
      message: formData.get('message'),
      inquiryType: formData.get('inquiryType') || 'general',
      consent: formData.get('consent') === 'on'
    }

    const parsed = contactSchema.safeParse(rawData)
    
    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {}
      parsed.error.errors.forEach((error) => {
        const field = error.path[0] as string
        if (!fieldErrors[field]) fieldErrors[field] = []
        fieldErrors[field].push(error.message)
      })

      return {
        success: false,
        message: 'Please fix the errors below.',
        errors: fieldErrors,
        values: rawData
      }
    }

    // Simulate email sending
    console.log('📧 Contact form submitted:', parsed.data)
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      success: true,
      message: '✅ Thank you! We\'ll get back to you within 24 hours.',
      errors: {},
      values: {}
    }

  } catch (error) {
    return {
      success: false,
      message: 'An error occurred. Please try again.',
      values: Object.fromEntries(formData)
    }
  }
}
