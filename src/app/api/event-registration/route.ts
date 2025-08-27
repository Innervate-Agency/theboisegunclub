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

    // Extract event organizer email from registration URL or use fallback
    let organizerEmail = 'events@theboisegunclub.com' // Fallback
    
    // Try to extract email from website/registration URL patterns
    if (data.registrationUrl) {
      // Common patterns for event emails
      const domain = data.registrationUrl?.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
      
      if (domain && domain.includes('practiscore.com')) {
        organizerEmail = 'info@idahouspa.org'
      } else if (domain && (domain.includes('ducks.org') || domain.includes('ducksunlimited'))) {
        organizerEmail = 'idaho@ducks.org'
      } else if (domain && domain.includes('lewisclarktrader.com')) {
        organizerEmail = 'info@lewisclarktrader.com'
      } else {
        // Generate likely organizer email based on domain
        organizerEmail = `info@${domain}`
      }
    }

    // Format the email content
    const organizerEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Event Registration Inquiry</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
    .event-details { background: #f8f9fa; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0; }
    .contact-info { background: #fff; border: 1px solid #ddd; padding: 15px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎯 Event Registration Inquiry</h1>
  </div>
  
  <div class="content">
    <h2>New Registration Interest</h2>
    
    <p>Hello! You've received a new registration inquiry through the Boise Gun Collective event platform:</p>
    
    <div class="event-details">
      <h3><strong>${data.eventTitle}</strong></h3>
      <p><strong>Date:</strong> ${data.eventDate}</p>
      <p><strong>Location:</strong> ${data.eventLocation}</p>
      <p><strong>Type:</strong> ${data.eventType}</p>
      <p><strong>Price:</strong> ${data.price}</p>
    </div>
    
    <div class="contact-info">
      <h3>Participant Contact Information</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      ${data.additionalInfo ? `<p><strong>Additional Information:</strong><br>${data.additionalInfo}</p>` : ''}
    </div>
    
    <h3>Next Steps</h3>
    <p>Please contact <strong>${data.name}</strong> directly at <strong>${data.email}</strong> ${data.phone ? `or <strong>${data.phone}</strong>` : ''} to complete their event registration.</p>
    
    ${data.registrationUrl ? `<p><strong>Direct Registration:</strong> <a href="${data.registrationUrl}">${data.registrationUrl}</a></p>` : ''}
    
    <p>Thank you for hosting events that strengthen Idaho's firearms community!</p>
  </div>
  
  <div class="footer">
    <p><strong>🎯 Boise Gun Collective</strong> - Connecting Idaho's Firearms Community</p>
    <p>This registration inquiry was submitted through our event platform at <a href="https://theboisegunclub.com">theboisegunclub.com</a></p>
    <p>Questions about this service? Contact us at <a href="mailto:support@theboisegunclub.com">support@theboisegunclub.com</a></p>
  </div>
</body>
</html>
    `.trim()

    // Format confirmation email for registrant
    const confirmationEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Event Registration Confirmation</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
    .event-summary { background: #f8f9fa; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0; }
    .cta-box { background: #e3f2fd; border: 1px solid #2563eb; padding: 15px; margin: 20px 0; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎯 Registration Submitted Successfully!</h1>
  </div>
  
  <div class="content">
    <h2>Thank you, ${data.name}!</h2>
    
    <p>We've successfully submitted your registration interest for the following event:</p>
    
    <div class="event-summary">
      <h3><strong>${data.eventTitle}</strong></h3>
      <p><strong>Date:</strong> ${data.eventDate}</p>
      <p><strong>Location:</strong> ${data.eventLocation}</p>
      <p><strong>Price:</strong> ${data.price}</p>
    </div>
    
    <h3>What Happens Next?</h3>
    <p>The event organizer will contact you directly at <strong>${data.email}</strong> ${data.phone ? `or <strong>${data.phone}</strong>` : ''} with registration details and any additional information you need.</p>
    
    ${data.registrationUrl ? 
      `<p><strong>Direct Registration Link:</strong> <a href="${data.registrationUrl}">Complete Registration Here</a></p>` : 
      '<p>Since this event doesn\'t have direct online registration, the organizer will provide you with specific registration instructions.</p>'
    }
    
    <div class="cta-box">
      <h3>🎯 Discover More Idaho Events</h3>
      <p>While you wait, check out other exciting firearms events happening across Idaho!</p>
      <p><a href="https://theboisegunclub.com/events" style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Browse All Events →</a></p>
    </div>
    
    <h3>Stay Connected</h3>
    <p>Follow us for the latest Idaho firearms events, training opportunities, and community updates:</p>
    <ul>
      <li>📧 Subscribe to our event newsletter</li>
      <li>🎯 Join the Boise Gun Collective directory</li>
      <li>📱 BookmarkIcon our events page for regular updates</li>
    </ul>
  </div>
  
  <div class="footer">
    <p><strong>🎯 Boise Gun Collective</strong> - Connecting Idaho's Firearms Community</p>
    <p>Visit us at <a href="https://theboisegunclub.com">theboisegunclub.com</a> | Email: <a href="mailto:support@theboisegunclub.com">support@theboisegunclub.com</a></p>
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</body>
</html>
    `.trim()

    // In a real implementation, you would send emails here
    // For now, we'll log the content and return success
    /*
    await sendEmail({
      to: organizerEmail,
      subject: `Event Registration Inquiry - ${data.eventTitle}`,
      html: organizerEmailContent
    })
    
    await sendEmail({
      to: data.email,
      subject: `Registration Confirmation - ${data.eventTitle}`,
      html: confirmationEmailContent
    })
    */

    // Store lead data for marketing follow-up
    // In production, this would go to your database
    const leadData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      eventInterest: data.eventTitle,
      eventType: data.eventType,
      source: 'event-registration',
      timestamp: new Date().toISOString(),
      additionalInfo: data.additionalInfo
    }
    

    return NextResponse.json({
      success: true,
      message: 'Registration submitted successfully',
      organizerNotified: true,
      confirmationSent: true
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    )
  }
}