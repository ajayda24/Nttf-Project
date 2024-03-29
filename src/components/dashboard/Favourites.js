import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Card from "./utils/Card";
import { serverUrl } from "@/utils/constants";

export default function Favourites({ email }) {
  const [images, setImages] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [noImages, setNoImages] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`${serverUrl}/api/user/getUserLikedPosts/?email=${email}`)
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
      });
  }, []);
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      <h2>Favourites</h2>
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
          text={noImages ? "No Favourites in your collection." : "Loading "}
          stopSpin={noImages}
        />
      )}
    </div>
  );
}
