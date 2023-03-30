import useAuthentication from '@/hooks/useAuthentication'
import { useSelector } from 'react-redux'

export default function DashboardPage() {
  const { authId } = useSelector((state) => state.auth)
  useAuthentication()
  return <div>Dashboard - {authId}</div>
}
