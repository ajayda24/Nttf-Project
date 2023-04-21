import { useEffect, useState } from "react";
import UserIcon from "./UserIcon";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import nFormatter from "@/utils/numberFormatter";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { changeUserSelectedPage } from "@/store/userSlice";
import Image from "next/image";
import { serverUrl } from "@/utils/constants";

export default function Card(props) {
  const dispatch = useDispatch();

  const [doneDoubleTap, setDoneDoubleTap] = useState(false);
  const [displayLove, setDisplayLove] = useState(false);
  const {
    postId,
    userLiked,
    likes,
    imageUrl,
    userImage,
    email,
    updateImageLikes,
    currentUserEmail,
  } = props;
  const [imageLiked, setImageLiked] = useState(userLiked);
  const router = useRouter();
  const [image, setImage] = useState(props);

  const reactImage = async () => {
    setImageLiked((p) => !p);
    fetch(`${serverUrl}/api/user/postReactImage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        like: !imageLiked,
        email: currentUserEmail,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    setImage((prevState) => {
      if (prevState.userLiked) {
        setDoneDoubleTap(false);
        return { ...prevState, userLiked: false, likes: +prevState.likes - 1 };
      } else {
        setDoneDoubleTap(true);

        return { ...prevState, userLiked: true, likes: +prevState.likes + 1 };
      }
    });
  };

  const userProfileClick = () => {
    dispatch(changeUserSelectedPage(["userprofile", image.email]));
  };
  const likeOnDoubleTap = (e) => {
    setDisplayLove(true);
    setTimeout(() => {
      setDisplayLove(false);
    }, 300);
    if (!doneDoubleTap) {
      setDoneDoubleTap(true);
      reactImage();
    }
  };

  return (
    <div
      className="bg-black/20 w-96 h-96 sm:w-64 sm:h-64 relative"
      onDoubleClick={likeOnDoubleTap}
    >
      <div className="bg-black/20 w-96 h-96 sm:w-64 sm:h-64 relative">
        <Image
          alt="AI Image"
          src={image.imageUrl}
          width={512}
          height={512}
          priority
        />
      </div>
      {displayLove && (
        <MdOutlineFavorite className="text-red-500/80 text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
      )}

      <div className="absolute bottom-0 p-2 px-3 min-w-full bg-black/90 flex justify-between items-center ">
        <UserIcon
          gotoProfile={userProfileClick}
          name={email}
          photoUrl={userImage}
        />
        <div className="flex gap-2 select-none">
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
