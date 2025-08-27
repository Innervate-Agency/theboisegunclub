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
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // For self-signed certs
      },
      debug: process.env.NODE_ENV === 'development', // Enable debugging only in development
    });

    // Email content
    const mailOptions = {
      from: `"TBGC Contact Form" <steve@boisegunclub.com>`,
      to: 'business@boisegunclub.com',
      replyTo: email,
      subject: `[TBGC Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: var(--color-light-peachy); color: var(--color-shared-dark);">
          <h2 style="color: var(--color-sandy-ochre); border-bottom: 2px solid var(--color-sandy-ochre); padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: var(--color-card-surface); padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: var(--color-card-surface); padding: 20px; border-left: 4px solid var(--color-sandy-ochre); margin: 20px 0;">
            <h3 style="margin-top: 0; color: var(--color-shared-dark);">ChatBubbleBottomCenterTextIcon:</h3>
            <p style="line-height: 1.6; color: var(--color-shared-dark);">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--color-pale-stone); color: var(--color-dried-clay); font-size: 14px;">
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

ChatBubbleBottomCenterTextIcon:
${message}

---
Sent from The Boise Gun Club contact form
Reply directly to this email to respond to ${name}
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorCode = error && typeof error === 'object' && 'code' in error ? String(error.code) : undefined;
    const errorResponse = error && typeof error === 'object' && 'response' in error ? String(error.response) : undefined;
    
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
  }
