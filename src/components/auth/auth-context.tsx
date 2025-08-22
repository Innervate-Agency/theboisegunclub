'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, AuthState, authAPI, tokenStorage } from '@/lib/auth'

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>
  register: (username: string, email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
  getForumUrl: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    forumSession: undefined
  })

  // Initialize auth state on mount
  useEffect(() => {
    initializeAuth()
  }, [])

  const initializeAuth = async () => {
    try {
      const token = tokenStorage.get()
      if (token) {
        const user = await authAPI.getCurrentUser(token)
        if (user) {
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
            forumSession: token
          })
          return
        } else {
          // Invalid token, clear it
          tokenStorage.remove()
        }
      }
    } catch (error) {
      tokenStorage.remove()
    } finally {
      setAuthState(prev => ({ ...prev, isLoading: false }))
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }))
      
      const result = await authAPI.login(email, password)
      if (result) {
        tokenStorage.set(result.token)
        setAuthState({
          user: result.user,
          isAuthenticated: true,
          isLoading: false,
          forumSession: result.token
        })
        return true
      }
      
      setAuthState(prev => ({ ...prev, isLoading: false }))
      return false
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }))
      return false
    }
  }

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }))
      
      const result = await authAPI.register(username, email, password)
      if (result) {
        tokenStorage.set(result.token)
        setAuthState({
          user: result.user,
          isAuthenticated: true,
          isLoading: false,
          forumSession: result.token
        })
        return true
      }
      
      setAuthState(prev => ({ ...prev, isLoading: false }))
      return false
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }))
      return false
    }
  }

  const logout = async (): Promise<void> => {
    try {
      const token = tokenStorage.get()
      if (token) {
        await authAPI.logout(token)
      }
    } catch (error) {
    } finally {
      tokenStorage.remove()
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        forumSession: undefined
      })
    }
  }

  const refreshUser = async (): Promise<void> => {
    const token = tokenStorage.get()
    if (token) {
      try {
        const user = await authAPI.getCurrentUser(token)
        if (user) {
          setAuthState(prev => ({ ...prev, user }))
        }
      } catch (error) {
      }
    }
  }

  const getForumUrl = async (): Promise<string | null> => {
    const token = tokenStorage.get()
    if (token) {
      return await authAPI.getForumSessionUrl(token)
    }
    return null
  }

  const contextValue: AuthContextType = {
    ...authState,
    login,
    register,
    logout,
    refreshUser,
    getForumUrl
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}