'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '../lib/api' // ✅ use the configured axios instance

export function useAuth({ redirectIfNotAuthenticated = true, adminOnly = false } = {}) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      if (redirectIfNotAuthenticated) router.push('/login')
      setLoading(false)
      return
    }

    api
      .get('/me')
      .then((res) => {
        if (adminOnly && res.data.role !== 'admin') {
          router.push('/') // redirect if not admin
          return
        }
        setUser(res.data)
        setLoading(false)
      })
      .catch(() => {
        localStorage.removeItem('token')
        if (redirectIfNotAuthenticated) router.push('/login')
        setLoading(false)
      })
  }, [router, redirectIfNotAuthenticated, adminOnly])

  return { user, loading }
}
