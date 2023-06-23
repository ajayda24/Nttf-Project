import React from "react";
import { useSelector } from "react-redux";

export default function Error() {
  const { error } = useSelector((state) => state.user);
  if (error.state) {
    return (
      <div className="w-[90%] sm:w-96 h-16 bg-red-600 text-white flex justify-center items-center absolute top-16 z-50  left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-md transition-transform">
        <p>{error.message || "Something went wrong!"}</p>
      </div>
    );
  }
}
