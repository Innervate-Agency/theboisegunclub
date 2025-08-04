export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, altchaPayload } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Verify ALTCHA payload
    if (!altchaPayload) {
      return NextResponse.json(
        { error: 'CAPTCHA verification required' },
        { status: 400 }
      );
    }

    // Dynamic import of altcha-lib for server-side verification
    let verifySolution;
    try {
      const altchaLib = await import('altcha-lib');
      verifySolution = altchaLib.verifySolution;
    } catch (importError) {
      console.error('Failed to import altcha-lib:', importError);
      return NextResponse.json(
        { error: 'CAPTCHA service unavailable' },
        { status: 500 }
      );
    }

    // Verify the ALTCHA payload
    try {
      const isValid = await verifySolution(altchaPayload, process.env.ALTCHA_HMAC_KEY || 'your-secret-hmac-key');
      
      if (!isValid) {
        return NextResponse.json(
          { error: 'Invalid CAPTCHA verification' },
          { status: 400 }
        );
      }
    } catch (verifyError) {
      console.error('ALTCHA verification error:', verifyError);
      return NextResponse.json(
        { error: 'CAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Using static import for better TypeScript/production compatibility
    
    // Create transporter for Stalwart SMTP
    const transporter = nodemailer.createTransport({
      host: '154.53.56.203',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: 'steve@boisegunclub.com',
        pass: 'GYqP%4c1jW6B*TC6&$0G%z7PbxfD*vxZpvdTQECa9jA9UeZyjge$QVGwQPD%6EAN',
      },
      tls: {
        rejectUnauthorized: false, // For self-signed certs
      },
      debug: true, // Enable debugging for troubleshooting
    });

    // Email content
    const mailOptions = {
      from: `"TBGC Contact Form" <steve@boisegunclub.com>`,
      to: 'business@boisegunclub.com',
      replyTo: email,
      subject: `[TBGC Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B8860B; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #B8860B; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>Sent from The Boise Gun Club contact form</p>
            <p>Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from The Boise Gun Club contact form
Reply directly to this email to respond to ${name}
      `,
    };

    // Send email
    console.log('Attempting to send email to:', 'business@boisegunclub.com');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorCode = (error as any)?.code;
    const errorResponse = (error as any)?.response;
    
    console.error('Contact form error details:', {
      message: errorMessage,
      code: errorCode,
      response: errorResponse,
      stack: errorStack
    });
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}