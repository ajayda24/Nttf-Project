import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Card from "./utils/Card";

export default function Home() {
  const [images, setImages] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    // fetch gallery images
    setTimeout(() => {
      setImageLoaded(true);
    }, 500);
  }, []);
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      <h2>Trending</h2>
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

      {imageLoaded && (
        <>
          <h2>Recently Added</h2>
          <div className="p-5 flex justify-evenly flex-wrap gap-5 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </>
      )}
    </div>
  );
}
