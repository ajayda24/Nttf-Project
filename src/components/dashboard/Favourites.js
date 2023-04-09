import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Card from "./utils/Card";

export default function Favourites() {
  const [images, setImages] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // fetch gallery images
    setTimeout(() => {
      setImageLoaded(true);
    }, 500);
  }, []);
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      <h2>Favourites</h2>
      {imageLoaded ? (
        <div className="p-5 flex justify-evenly flex-wrap gap-5 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
