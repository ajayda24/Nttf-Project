import useAuthentication from '@/hooks/useAuthentication'
import { useRouter } from 'next/router'
import Spinner from './Spinner'

export default function DashboardPage() {
  const router = useRouter()
  const [user, loading] = useAuthentication()
  if (loading) {
    return <Spinner />
  }
  return (
    <div className=' flex justify-center items-center min-h-screen min-w-full bg-[#12141D] relative overflow-x-hidden p-5'></div>
  )
}
