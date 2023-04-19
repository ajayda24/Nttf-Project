import React from "react";
import { CgSpinner } from "react-icons/cg";

export default function Spinner({ text, stopSpin }) {
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
      <h1 className=" flex justify-center items-center gap-2">
        <p>{text || "Loading"}</p>
        {!stopSpin && <CgSpinner className="animate-spin" />}
      </h1>
    </div>
  );
}
