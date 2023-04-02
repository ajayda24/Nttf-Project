import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { auth } from '@/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'

export default function useAuthentication() {
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth)
  useEffect(() => {
    if (!loading) {
      if (error || !user) {
        router.push('/login')
      }
    }
  }, [user, loading, error, router])
  if (loading || !user) {
    return [null, true]
  } else if (user && !error) {
    return [user, false]
  }
}
