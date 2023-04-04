import useAuthentication from "@/hooks/useAuthentication"
import Spinner from "../Spinner"
import Navbar from "./Navbar"

import { GiArtificialHive } from "react-icons/gi"
import { TfiGallery } from "react-icons/tfi"
import { HiOutlineChatAlt2 } from "react-icons/hi"

export default function DashboardPage() {
  const [user, loading] = useAuthentication()
  if (loading || !user) {
    return <Spinner />
  }
  const { photoURL, uid, email, displayName } = user
  return (
    <div className=" flex justify-center  min-h-screen min-w-full bg-[#12141D] relative overflow-x-hidden p-5">
      <Navbar photoURL={photoURL} uid={uid} name={displayName} />
      <div className="z-40 fixed bottom-0 sm:bottom-5 min-w-full sm:min-w-fit p-3 px-8 sm:rounded-md bg-white/10 flex gap-16 justify-evenly items-center">
        <TfiGallery color="white" size={"1.7rem"} className="" />
        <GiArtificialHive color="white" size={"1.7rem"} />
        <HiOutlineChatAlt2 color="white" size={"1.7rem"} />
      </div>
    </div>
  )
}
