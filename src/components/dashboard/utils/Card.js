import { useState } from "react";
import UserIcon from "./UserIcon";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import nFormatter from "@/utils/numberFormatter";
import { useRouter } from "next/router";

export default function Card() {
  const router = useRouter();
  const [image, setImage] = useState({
    imageId: "",
    userLiked: false,
    likes: 1950,
    imageUrl: "",
    userImage: "",
    uid: "1234",
    username: "",
  });
  const reactImage = () => {
    // fetch update image
    setImage((prevState) => {
      if (prevState.userLiked) {
        return { ...prevState, userLiked: false, likes: +prevState.likes - 1 };
      } else {
        return { ...prevState, userLiked: true, likes: +prevState.likes + 1 };
      }
    });
  };

  const userProfileClick = () => {
    router.push(`/users/${image.uid}`);
  };

  return (
    <div className="bg-black/20 w-64 h-64 relative">
      <div className="absolute bottom-0 p-2 px-3 min-w-full bg-black/30 flex justify-between items-center">
        <UserIcon gotoProfile={userProfileClick} />
        <div className="flex gap-2">
          <p>{nFormatter(image.likes)}</p>
          {image.userLiked ? (
            <MdOutlineFavorite
              className="text-red-500 text-2xl"
              onClick={reactImage}
            />
          ) : (
            <MdFavoriteBorder
              className="text-red-500 text-2xl"
              onClick={reactImage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
