import { useState } from "react";
import UserIcon from "./UserIcon";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import nFormatter from "@/utils/numberFormatter";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { changeUserSelectedPage } from "@/store/userSlice";

export default function Card(props) {
  const dispatch = useDispatch();

  const [doneDoubleTap, setDoneDoubleTap] = useState(false);
  const [displayLove, setDisplayLove] = useState(false);
  const {
    imageId,
    userLiked = false,
    likes = 1950,
    imageUrl = "",
    userImage = "",
    uid = "1234",
    username = "zyx",
  } = props;
  const router = useRouter();
  const [image, setImage] = useState({
    imageId: imageId,
    userLiked: userLiked,
    likes: likes,
    imageUrl: imageUrl,
    userImage: userImage,
    uid: uid,
    username: username,
  });
  const reactImage = () => {
    // fetch update image
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
    dispatch(changeUserSelectedPage(["userprofile", image.uid]));
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
      {displayLove && (
        <MdOutlineFavorite className="text-red-500/80 text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
      )}
      <div className="absolute bottom-0 p-2 px-3 min-w-full bg-black/30 flex justify-between items-center ">
        <UserIcon gotoProfile={userProfileClick} />
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
