'use client'

import { useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const searchParams = useSearchParams()
  
  const redirectUri = searchParams.get('redirect_uri')
  const state = searchParams.get('state')
  const clientId = searchParams.get('client_id')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    console.log('Submitting login:', { username, clientId, redirectUri })

    try {
      const response = await fetch('/api/auth/authorize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          client_id: clientId,
          redirect_uri: redirectUri,
          state: state,
        }),
      })

      console.log('Response status:', response.status)
      
      if (response.ok) {
        const result = await response.json()
        console.log('Auth result:', result)
        
        // Redirect back to NodeBB with the authorization code
        const callbackUrl = new URL(redirectUri!)
        callbackUrl.searchParams.set('code', result.code)
        if (state) {
          callbackUrl.searchParams.set('state', state)
        }
        
        console.log('Redirecting to:', callbackUrl.toString())
        window.location.href = callbackUrl.toString()
      } else {
        const errorData = await response.json()
        console.error('Login error:', errorData)
        alert('Login failed: ' + (errorData.error_description || 'Unknown error'))
      }
    } catch (err) {
      console.error('Network error:', err)
      alert('Network error occurred')
    }
  }

  const fillDemoCredentials = () => {
    const usernameInput = document.getElementById('username') as HTMLInputElement
    const passwordInput = document.getElementById('password') as HTMLInputElement
    
    if (usernameInput) usernameInput.value = 'mike@example.com'
    if (passwordInput) passwordInput.value = 'demo123'
  }

  const fillAdminCredentials = () => {
    const usernameInput = document.getElementById('username') as HTMLInputElement
    const passwordInput = document.getElementById('password') as HTMLInputElement
    
    if (usernameInput) usernameInput.value = 'admin'
    if (passwordInput) passwordInput.value = 'GT0qjBZFfvvJtpwTsVWZaKTy@H7hS0W!'
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Boise Gun Club - Login</h1>
      <p>Sign in to continue to Forums</p>
      <p><small>Authorize NodeBB forum access</small></p>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
            Email / Username:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            style={{ 
              width: '300px', 
              padding: '8px', 
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            placeholder="Enter your email or username"
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            style={{ 
              width: '300px', 
              padding: '8px', 
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            placeholder="Enter your password"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Sign in
          </button>
        </div>

        <div style={{ borderTop: '1px solid #ccc', paddingTop: '15px' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>For testing, use demo credentials:</p>
          <button
            type="button"
            onClick={fillDemoCredentials}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f0f0f0',
              color: '#333',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Use Demo Account (mike@example.com)
          </button>
          <button
            type="button"
            onClick={fillAdminCredentials}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px',
              width: '100%'
            }}
          >
            Use Admin Account (admin)
          </button>
        </div>
      </form>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', fontSize: '12px' }}>
        <p><strong>Client ID:</strong> {clientId}</p>
        <p><strong>Redirecting to:</strong> {redirectUri}</p>
        <p><strong>State:</strong> {state}</p>
      </div>
    </div>
  )
}
