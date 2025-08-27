import { NextRequest, NextResponse } from 'next/server'
import { authAPI } from '@/lib/auth'

/**
 * OAuth2 User Info Endpoint for NodeBB Integration
 * Returns user information for authenticated requests
 */
export async function GET(request: NextRequest) {
  try {
    // Get access token from Authorization header
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'invalid_token', error_description: 'Missing or invalid authorization header' },
        { status: 401 }
      )
    }

    const accessToken = authHeader.substring(7) // Remove 'Bearer ' prefix

    // Validate and decode access token
    let tokenData
    try {
      tokenData = JSON.parse(atob(accessToken))
    } catch {
      return NextResponse.json(
        { error: 'invalid_token', error_description: 'Invalid access token format' },
        { status: 401 }
      )
    }

    // Validate token type and expiration
    if (tokenData.type !== 'access_token') {
      return NextResponse.json(
        { error: 'invalid_token', error_description: 'Invalid token type' },
        { status: 401 }
      )
    }

    if (tokenData.exp < Math.floor(Date.now() / 1000)) {
      return NextResponse.json(
        { error: 'invalid_token', error_description: 'Access token expired' },
        { status: 401 }
      )
    }

    // Get current user data (in case anything has changed)
    const user = await authAPI.getCurrentUser(tokenData.sub)
    if (!user) {
      return NextResponse.json(
        { error: 'invalid_token', error_description: 'User not found' },
        { status: 401 }
      )
    }

    // Return user information in NodeBB-compatible format
    return NextResponse.json({
      // Standard OAuth2/OpenID Connect fields
      sub: user.id,
      email: user.email,
      email_verified: true,
      name: user.username,
      preferred_username: user.username,
      
      // Custom fields for NodeBB
      id: user.id,
      username: user.username,
      displayname: user.username,
      picture: user.avatar || null,
      
      // Role and permissions
      role: user.role,
      groups: getUserGroups(user.role),
      
      // Forum-specific data
      forum_user_id: user.forumUserId,
      
      // Metadata
      created_at: user.createdAt,
      last_active: user.lastActive,
      
      // Profile data
      profile: {
        location: 'Treasure Valley, Idaho',
        website: null,
        bio: null
      }
    })

  } catch (error) {
    console.error('User info endpoint error:', error)
    return NextResponse.json(
      { error: 'server_error', error_description: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * Map user roles to NodeBB groups
 */
function getUserGroups(role: string): string[] {
  switch (role) {
    case 'admin':
      return ['administrators', 'Global Moderators', 'verified']
    case 'moderator':
      return ['Global Moderators', 'verified']
    case 'member':
      return ['verified']
    default:
      return ['registered-users']
  }
}

/**
 * Handle user profile updates (if needed)
 */
export async function PATCH(request: NextRequest) {
  try {
    // Get access token
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'invalid_token' },
        { status: 401 }
      )
    }

    const accessToken = authHeader.substring(7)
    
    // Validate token (same logic as GET)
    let tokenData
    try {
      tokenData = JSON.parse(atob(accessToken))
    } catch {
      return NextResponse.json(
        { error: 'invalid_token' },
        { status: 401 }
      )
    }

    if (tokenData.type !== 'access_token' || tokenData.exp < Math.floor(Date.now() / 1000)) {
      return NextResponse.json(
        { error: 'invalid_token' },
        { status: 401 }
      )
    }

    // Get update data
    const body = await request.json()
    const { avatar, last_active } = body

    // Update user data (simplified for demo)
    // In production, you'd update the database
    console.log(`User ${tokenData.sub} profile update:`, { avatar, last_active })

    return NextResponse.json({
      success: true,
      message: 'Profile updated'
    })

  } catch (error) {
    console.error('User update error:', error)
    return NextResponse.json(
      { error: 'server_error' },
      { status: 500 }
    )
  }
}