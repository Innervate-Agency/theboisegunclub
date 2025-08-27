/**
 * Authentication utilities for Boise Gun Club
 * Handles JWT tokens, user sessions, and forum integration
 */

// Types for our authentication system
export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  role: 'admin' | 'moderator' | 'member' | 'guest'
  forumUserId?: string
  createdAt: string
  lastActive: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  forumSession?: string
}

// Mock user data for development - replace with real API calls
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'gunsmith_mike',
    email: 'mike@example.com',
    avatar: '/images/avatars/mike.jpg',
    role: 'admin',
    forumUserId: 'forum_user_1',
    createdAt: '2024-01-15T10:30:00Z',
    lastActive: new Date().toISOString()
  },
  {
    id: '2',
    username: 'range_master_sara',
    email: 'sara@example.com',
    avatar: '/images/avatars/sara.jpg',
    role: 'moderator',
    forumUserId: 'forum_user_2',
    createdAt: '2024-02-20T14:15:00Z',
    lastActive: new Date().toISOString()
  }
]

// Authentication API functions - these will connect to your NodeBB OAuth2 setup
export const authAPI = {
  // Login user with credentials
  async login(email: string, password: string): Promise<{ user: User; token: string } | null> {
    // This will call your VPS OAuth2 endpoint
    // For now, mock authentication
    const mockUser = mockUsers.find(u => u.email === email)
    if (mockUser) {
      const token = generateMockJWT(mockUser)
      return { user: mockUser, token }
    }
    return null
  },

  // Register new user
  async register(username: string, email: string, password: string): Promise<{ user: User; token: string } | null> {
    // This will create user on both main site and NodeBB forum
    const newUser: User = {
      id: Date.now().toString(),
      username,
      email,
      role: 'member',
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString()
    }
    const token = generateMockJWT(newUser)
    return { user: newUser, token }
  },

  // Get current user from token
  async getCurrentUser(token: string): Promise<User | null> {
    try {
      // In real implementation, verify JWT token
      const decoded = decodeMockJWT(token)
      return mockUsers.find(u => u.id === decoded.userId) || null
    } catch {
      return null
    }
  },

  // Logout user
  async logout(token: string): Promise<boolean> {
    // This will clear sessions on both main site and NodeBB
    return true
  },

  // Get forum session URL for seamless forum access
  async getForumSessionUrl(token: string): Promise<string | null> {
    const user = await this.getCurrentUser(token)
    if (user?.forumUserId) {
      // Return URL with auth token for forum login
      return `https://boisegunclub.com/forums/auth/external?token=${token}&redirect=/`
    }
    return null
  }
}

// JWT utilities (mock implementation for development)
function generateMockJWT(user: User): string {
  // In production, use proper JWT library with your secret
  const payload = {
    userId: user.id,
    username: user.username,
    role: user.role,
    forumUserId: user.forumUserId,
    exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  }
  return btoa(JSON.stringify(payload))
}

function decodeMockJWT(token: string): any {
  try {
    return JSON.parse(atob(token))
  } catch {
    throw new Error('Invalid token')
  }
}

// Local storage utilities
export const tokenStorage = {
  set(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('boise_auth_token', token)
    }
  },

  get(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('boise_auth_token')
    }
    return null
  },

  remove(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('boise_auth_token')
    }
  }
}

// Role-based permissions
export const permissions = {
  canAccessAdminPanel: (user: User | null) => user?.role === 'admin',
  canModerate: (user: User | null) => ['admin', 'moderator'].includes(user?.role || ''),
  canCreateEvents: (user: User | null) => ['admin', 'moderator', 'member'].includes(user?.role || ''),
  canAccessForum: (user: User | null) => user !== null,
}