import { useEffect, useState } from "react";
import Card from "./utils/Card";
import Spinner from "../Spinner";
import UserIcon from "./utils/UserIcon";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const { userSelectedPage } = useSelector((state) => state.user);
  console.log(userSelectedPage);
  const [images, setImages] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // fetch particular user images
    setTimeout(() => {
      setImageLoaded(true);
    }, 500);
  }, []);
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      <div className="flex items-center gap-2">
        <UserIcon name="ZYX" />
        <h2>User name</h2>
      </div>
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
