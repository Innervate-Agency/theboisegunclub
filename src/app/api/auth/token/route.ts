import { NextRequest, NextResponse } from 'next/server'
import { authAPI } from '@/lib/auth'

/**
 * OAuth2 Token Endpoint for NodeBB Integration
 * Exchanges authorization codes for access tokens
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      grant_type, 
      code, 
      redirect_uri, 
      client_id, 
      client_secret 
    } = body

    // Validate grant type
    if (grant_type !== 'authorization_code') {
      return NextResponse.json(
        { error: 'unsupported_grant_type' },
        { status: 400 }
      )
    }

    // Validate client credentials
    if (client_id !== 'boise-gunclub-main') {
      return NextResponse.json(
        { error: 'invalid_client' },
        { status: 401 }
      )
    }

    // In production, validate client_secret against stored value
    // For now, we'll use a simple check
    if (!client_secret || client_secret !== process.env.OAUTH_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'invalid_client' },
        { status: 401 }
      )
    }

    // Validate and decode authorization code
    if (!code) {
      return NextResponse.json(
        { error: 'invalid_request', error_description: 'Missing authorization code' },
        { status: 400 }
      )
    }

    let authCodeData
    try {
      authCodeData = JSON.parse(atob(code))
    } catch {
      return NextResponse.json(
        { error: 'invalid_grant', error_description: 'Invalid authorization code' },
        { status: 400 }
      )
    }

    // Validate authorization code
    if (authCodeData.type !== 'auth_code') {
      return NextResponse.json(
        { error: 'invalid_grant', error_description: 'Invalid code type' },
        { status: 400 }
      )
    }

    if (authCodeData.expires < Date.now()) {
      return NextResponse.json(
        { error: 'invalid_grant', error_description: 'Authorization code expired' },
        { status: 400 }
      )
    }

    if (authCodeData.clientId !== client_id) {
      return NextResponse.json(
        { error: 'invalid_grant', error_description: 'Client ID mismatch' },
        { status: 400 }
      )
    }

    if (authCodeData.redirectUri !== redirect_uri) {
      return NextResponse.json(
        { error: 'invalid_grant', error_description: 'Redirect URI mismatch' },
        { status: 400 }
      )
    }

    // Generate access token for the user
    const user = await authAPI.getUserById(authCodeData.userId)
    if (!user) {
      return NextResponse.json(
        { error: 'invalid_grant', error_description: 'User not found' },
        { status: 400 }
      )
    }

    // Generate access and refresh tokens
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    return NextResponse.json({
      access_token: accessToken,
      token_type: 'Bearer',
      expires_in: 3600, // 1 hour
      refresh_token: refreshToken,
      scope: 'read write'
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'server_error', error_description: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * Generate access token
 */
function generateAccessToken(user: any): string {
  const payload = {
    sub: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    forum_user_id: user.forumUserId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour
    type: 'access_token'
  }

  // In production, use proper JWT signing with RS256
  return btoa(JSON.stringify(payload))
}

/**
 * Generate refresh token
 */
function generateRefreshToken(user: any): string {
  const payload = {
    sub: user.id,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (30 * 24 * 3600), // 30 days
    type: 'refresh_token'
  }

  // In production, use proper JWT signing
  return btoa(JSON.stringify(payload))
}