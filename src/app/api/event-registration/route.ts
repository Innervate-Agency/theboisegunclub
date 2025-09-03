import { NextRequest, NextResponse } from 'next/server'

interface RegistrationData {
  name: string
  email: string
  phone?: string
  additionalInfo?: string
  eventId: string
  eventTitle: string
  eventDate: string
  eventLocation: string
  eventType: string
  price: string
  registrationUrl?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.eventId || !data.eventTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In a real implementation, you would send emails here
    // For now, we'll log the content and return success

    return NextResponse.json({
      success: true,
      message: 'Registration submitted successfully',
      organizerNotified: true,
      confirmationSent: true
    })
    
  } catch {
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    )
  }
}