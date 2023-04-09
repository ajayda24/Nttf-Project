import Image from "next/image";
import { useState } from "react";

export default function UserIcon({ name = "ZYX", photoUrl, gotoProfile }) {
  const [userImgErr, setUserImgErr] = useState(false);

  return (
    <div
      className="rounded-full p-[2px] text-xs  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] w-7 h-7  flex justify-center items-center text-slate-300"
      onClick={gotoProfile}
    >
      {photoUrl ? (
        <Image
          className="rounded-full"
          src={photoUrl}
          alt="user"
          width={100}
          height={100}
        />
      ) : (
        <div className="w-6 h-6  rounded-full text-center bg-[#12141D]/90 flex justify-center items-center select-none">
          <p className="text-base font-bold cursor-pointer">{name[0]}</p>
        </div>
      )}
    </div>
  );
}
