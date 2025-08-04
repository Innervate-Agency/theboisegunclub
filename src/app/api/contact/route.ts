import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Dynamic import of nodemailer to avoid build issues
    const nodemailer = await import('nodemailer');
    
    // Create transporter for Stalwart SMTP
    const transporter = nodemailer.default.createTransport({
      host: '154.53.56.203',
      port: 587, // or 25, 465 depending on your Stalwart config
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your Stalwart email user
        pass: process.env.SMTP_PASS, // Your Stalwart email password
      },
      tls: {
        rejectUnauthorized: false, // For self-signed certs if needed
      },
    });

    // Email content
    const mailOptions = {
      from: `"TBGC Contact Form" <noreply@boisegunclub.com>`,
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
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}