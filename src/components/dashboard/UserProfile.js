import { useEffect, useState } from "react";
import Card from "./utils/Card";
import Spinner from "../Spinner";
import UserIcon from "./utils/UserIcon";
import { useSelector } from "react-redux";
import { serverUrl } from "@/utils/constants";

export default function UserProfile({ email, fullName, photoUrl }) {
  const { userSelectedPage } = useSelector((state) => state.user);
  console.log(userSelectedPage);
  const [noImages, setNoImages] = useState(false);
  const [images, setImages] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    fetch(`${serverUrl}/api/user/getUserPosts/?email=${email}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setImages(res.data);
        if (res.data.length >= 1) {
          setImageLoaded(true);
        } else {
          setNoImages(true);
        }
      })
      .catch((err) => {
        setImageLoaded(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      <div className="flex items-center gap-2">
        <UserIcon name={fullName} photoUrl={photoUrl} />
        <h2>{fullName}</h2>
      </div>
      {imageLoaded ? (
        <div className="p-5 flex justify-evenly flex-wrap gap-5 ">
          {images.map((i) => (
            <Card
              key={i.postId}
              postId={i.postId}
              userLiked={i.userLiked}
              likes={i.likes}
              imageUrl={i.imageUrl}
              userImage={i.userImage}
              email={i.email}
              currentUserEmail={email}
            />
          ))}
        </div>
      ) : (
        <Spinner
          text={noImages ? "User doesnot have any images." : "Loading "}
          stopSpin={noImages}
        />
      )}
    </div>
  );
}
