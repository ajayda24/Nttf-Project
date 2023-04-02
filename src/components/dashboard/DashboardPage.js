import useAuthentication from '@/hooks/useAuthentication'
import { useRouter } from 'next/router'
import Spinner from '../Spinner'
import Navbar from './Navbar'

export default function DashboardPage() {
  const router = useRouter()
  const [user, loading] = useAuthentication()
  if (loading) {
    return <Spinner />
  }
  const { photoURL, uid, email, displayName } = user
  return (
    <div className=' flex justify-center  min-h-screen min-w-full bg-[#12141D] relative overflow-x-hidden p-5'>
      <Navbar photoURL={photoURL} uid={uid} name={displayName} />
    </div>
  )
}
