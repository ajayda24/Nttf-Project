import { RiGalleryLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { BiImageAdd } from "react-icons/bi";
import { BsArrowThroughHeart } from "react-icons/bs";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserSelectedPage } from "@/store/userSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const [selectHomeButton, setSelectHomeButton] = useState(false);
  const [selectGalleryButton, setSelectGalleryButton] = useState(false);
  const [selectAddButton, setSelectAddButton] = useState(false);
  const [selectLikeButton, setSelectLikeButton] = useState(false);
  const [selectChatButton, setSelectChatButton] = useState(false);

  const userState = useSelector((state) => state.user);

  const selectPageButton = (btn) => {
    btn == "home" && setSelectHomeButton(true);
    btn == "gallery" && setSelectGalleryButton(true);
    btn == "add" && setSelectAddButton(true);
    btn == "like" && setSelectLikeButton(true);
    btn == "chat" && setSelectChatButton(true);
  };
  useEffect(() => {
    setSelectHomeButton(false);
    setSelectGalleryButton(false);
    setSelectAddButton(false);
    setSelectLikeButton(false);
    setSelectChatButton(false);
    selectPageButton(userState.userSelectedPage);
  }, [userState]);
  return (
    <div className="flex justify-center min-w-full">
      <div className="z-40 fixed bottom-0 sm:bottom-5 min-w-full sm:min-w-fit p-3 px-8 sm:rounded-md bg-white/10 flex gap-8 sm:gap-16 justify-evenly items-center">
        <GoHome
          className={`${
            selectHomeButton ? "text-red-500" : "text-white"
          } text-2xl`}
          onClick={() => dispatch(changeUserSelectedPage("home"))}
        />
        <RiGalleryLine
          className={`${
            selectGalleryButton ? "text-red-500" : "text-white"
          } text-2xl`}
          onClick={() => dispatch(changeUserSelectedPage("gallery"))}
        />
        <BiImageAdd
          className={`${
            selectAddButton ? "text-red-500" : "text-white"
          } text-2xl`}
          onClick={() => dispatch(changeUserSelectedPage("add"))}
        />
        {selectLikeButton && (
          <BsArrowThroughHeart
            className={`${
              selectLikeButton ? "text-red-500" : "text-white"
            } text-2xl`}
          />
        )}
        {!selectLikeButton && (
          <MdFavoriteBorder
            className={`${
              selectLikeButton ? "text-red-500" : "text-white"
            } text-2xl`}
            onClick={() => dispatch(changeUserSelectedPage("like"))}
          />
        )}

        <HiOutlineChatAlt2
          className={`${
            selectChatButton ? "text-red-500" : "text-white"
          } text-2xl`}
          onClick={() => dispatch(changeUserSelectedPage("chat"))}
        />
      </div>
    </div>
  );
}
