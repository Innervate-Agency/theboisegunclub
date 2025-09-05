import { NextRequest, NextResponse } from 'next/server'
import { authAPI } from '@/lib/auth'

/**
 * OAuth2 Authorization Endpoint for NodeBB Integration
 * This endpoint handles the authorization flow for NodeBB forum integration
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  // OAuth2 parameters
  const clientId = searchParams.get('client_id')
  const redirectUri = searchParams.get('redirect_uri')
  const responseType = searchParams.get('response_type')
  const state = searchParams.get('state')
  const scope = searchParams.get('scope')

  // Validate required OAuth2 parameters
  if (!clientId || !redirectUri || responseType !== 'code') {
    return NextResponse.json(
      { error: 'invalid_request', error_description: 'Missing or invalid OAuth2 parameters' },
      { status: 400 }
    )
  }

  // Validate client_id (this should match what you configure in NodeBB)
  if (clientId !== 'boise-gunclub-main') {
    return NextResponse.json(
      { error: 'invalid_client', error_description: 'Invalid client_id' },
      { status: 401 }
    )
  }

  // Check if user is authenticated
  const authHeader = request.headers.get('authorization')
  const token = authHeader?.replace('Bearer ', '') || 
               request.cookies.get('boise_auth_token')?.value

  if (!token) {
    // User not authenticated - redirect to login page with return URL
    const loginUrl = new URL('/auth/login', request.url.includes('ngrok') ? request.url : 'http://localhost:3000')
    loginUrl.searchParams.set('redirect_uri', redirectUri)
    loginUrl.searchParams.set('state', state || '')
    loginUrl.searchParams.set('client_id', clientId)
    
    return NextResponse.redirect(loginUrl.toString())
  }

  // Verify token and get user
  const user = await authAPI.getCurrentUser(token)
  if (!user) {
    // Invalid token - redirect to login
    const loginUrl = new URL('/auth/login', request.url.includes('ngrok') ? request.url : 'http://localhost:3000')
    loginUrl.searchParams.set('redirect_uri', redirectUri)
    loginUrl.searchParams.set('state', state || '')
    loginUrl.searchParams.set('client_id', clientId)
    
    return NextResponse.redirect(loginUrl.toString())
  }

  // Generate authorization code (in production, store this temporarily)
  const authCode = generateAuthCode(user.id, clientId, redirectUri)

  // Redirect back to NodeBB with authorization code
  const callbackUrl = new URL(redirectUri)
  callbackUrl.searchParams.set('code', authCode)
  if (state) {
    callbackUrl.searchParams.set('state', state)
  }

  return NextResponse.redirect(callbackUrl.toString())
}

/**
 * Handle POST requests for authorization (form submission)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password, client_id, redirect_uri, state } = body

    // Validate client
    if (client_id !== 'boise-gunclub-main') {
      return NextResponse.json(
        { error: 'invalid_client' },
        { status: 401 }
      )
    }

    // Attempt login
    const result = await authAPI.login(username, password)
    if (!result) {
      return NextResponse.json(
        { error: 'access_denied', error_description: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate authorization code
    const authCode = generateAuthCode(result.user.id, client_id, redirect_uri)

    return NextResponse.json({
      code: authCode,
      state,
      redirect_uri
    })

  } catch {
    return NextResponse.json(
      { error: 'server_error', error_description: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * Generate a temporary authorization code
 * In production, store this in a database with expiration
 */
function generateAuthCode(userId: string, clientId: string, redirectUri: string): string {
  const payload = {
    userId,
    clientId,
    redirectUri,
    expires: Date.now() + (10 * 60 * 1000), // 10 minutes
    type: 'auth_code'
  }
  
  // In production, use proper JWT signing
  return btoa(JSON.stringify(payload))
}