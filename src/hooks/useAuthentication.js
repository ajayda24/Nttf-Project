import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { auth } from "@/utils/firebase"
import { useAuthState, useIdToken } from "react-firebase-hooks/auth"

export default function useAuthentication() {
  const router = useRouter()
  // const [user, loading, error] = useAuthState(auth)
  const [user, loading, error] = useIdToken(auth, {
    onUserChanged: (e) => console.log(e),
  })
  // console.log(user, loading, error)
  useEffect(() => {
    if (!loading) {
      if (error || !user) {
        router.push("/login")
      } else if (user) {
        router.push("/dashboard")
      }
    }
  }, [user, loading, error])
  if (loading && !user) {
    return [null, true]
  } else if (loading) {
    return [null, true]
  } else if (user && !error) {
    return [user, false]
  } else {
    return [null, false]
  }
}
