import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // Dynamic import of altcha-lib for server-side challenge generation
    const altchaLib = await import('altcha-lib');
    
    const hmacKey = process.env.ALTCHA_HMAC_KEY || 'your-secret-hmac-key';
    
    // Generate a challenge
    const challenge = await altchaLib.createChallenge({
      hmacKey,
      maxNumber: 100000, // Maximum number for the challenge
      saltLength: 12,    // Length of the salt
      algorithm: 'SHA-256'
    });
    
    return NextResponse.json(challenge);
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate challenge' },
      { status: 500 }
    );
  }
}