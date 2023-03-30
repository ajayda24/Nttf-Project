import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function useAuthentication() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const { isAuthenticated } = useSelector((state) => state.auth)
  console.log(isAuthenticated)
  useEffect(() => {
    if (isAuthenticated == false) {
      // window.location = '/login'
      router.push('/login')
    } else {
      setIsLoading(false)
    }
  }, [isAuthenticated, router])
  if (isLoading) {
    return <div>Loading...</div>
  }
}
