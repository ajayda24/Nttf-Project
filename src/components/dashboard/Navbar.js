import { auth } from "@/utils/firebase";
import Image from "next/image";
import { useState } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { GiNestedHexagons } from "react-icons/gi";
import Spinner from "../Spinner";
import { useRouter } from "next/router";

export default function Navbar({ photoURL, uid, name }) {
  const [userImgErr, setUserImgErr] = useState(false);
  const [signOut, loading, error] = useSignOut(auth);
  const router = useRouter();
  if (loading) {
    return <Spinner />;
  }

  const userSignOut = async () => {
    const success = await signOut();
    if (success) {
      router.push("/login");
    }
  };
  return (
    <nav className="min-w-full h-fit flex  justify-between items-center px-2 sm:px-6  text-white ">
      <ul className="">
        <li className="font-medium flex items-center justify-evenly gap-3">
          <GiNestedHexagons />
          <a href="#">AI ULTRA</a>
        </li>
      </ul>
      <div className="flex gap-10">
        <div className="rounded-full p-[2px] text-xs  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] w-9 h-9  flex justify-center items-center dropdown dropdown-bottom dropdown-end">
          {!userImgErr ? (
            <Image
              tabIndex={0}
              className="rounded-full"
              src={photoURL}
              alt="user"
              width={100}
              height={100}
              onError={() => setUserImgErr(true)}
            />
          ) : (
            <div
              tabIndex={0}
              className="w-8 h-8  rounded-full text-center bg-[#12141D]/80 flex justify-center items-center "
            >
              <p className="text-xl font-black cursor-pointer">{name[0]}</p>
            </div>
          )}
          <ul
            tabIndex={0}
            className="dropdown-content menu m-1 p-2 shadow-2xl bg-base-200 rounded-box w-52 text-black text-sm font-semibold"
          >
            <li>
              <p>{name}</p>
            </li>
            <li>
              <p onClick={userSignOut}>Sign Out</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
