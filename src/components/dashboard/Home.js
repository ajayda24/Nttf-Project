import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Card from "./utils/Card";
import { serverUrl } from "@/utils/constants";

export default function Home({ email }) {
  const [images, setImages] = useState([]);
  const [trendingImages, setTrendingImages] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  // console.log(images);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`${serverUrl}/api/user/getAllPosts?email=${email}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setImages(res.data);
        setImageLoaded(true);
      })
      .catch((err) => {
        setImageLoaded(false);
        console.log(err);
      });
    fetch(`${serverUrl}/api/user/getAllTrendingPosts?email=${email}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTrendingImages(res.data);
        setImageLoaded(true);
      })
      .catch((err) => {
        setImageLoaded(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      <h2>Trending</h2>
      {imageLoaded ? (
        <div className="p-5 flex justify-evenly flex-wrap gap-5 ">
          {trendingImages.map((i) => (
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
        <Spinner />
      )}

      {imageLoaded && (
        <>
          <h2>Recently Added</h2>
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
        </>
      )}
    </div>
  );
}
