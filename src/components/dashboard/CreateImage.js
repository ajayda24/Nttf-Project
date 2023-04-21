import { serverUrl } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { CgSpinner } from "react-icons/cg";

export default function CreateImage({ userImage, email }) {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [aiText, setAiText] = useState("");
  const [aiImage, setAiImage] = useState("");

  const generateImage = async () => {
    setImageLoading(true);
    try {
      const response = await fetch(`${serverUrl}/api/user/postNewImage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: aiText,
          userImage,
          email,
          tags: [],
        }),
      });
      const result = await response.json();
      const { imageUrl } = result.data;
      if (imageUrl) {
        setImageLoaded(true);
        setTimeout(() => {
          setImageLoading(false);
        }, 1000);
        setAiImage(imageUrl);
      }
    } catch (error) {
      setImageLoaded(false);
      setImageLoading(false);
    }
  };
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      <div className="flex flex-col items-center gap-3 justify-center">
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text text-white">
              Enter your creativite sentence!
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost focus:opacity-90 input-bordered w-full max-w-xs  focus:font-bold "
            value={aiText}
            onChange={(e) => setAiText(e.target.value)}
          />
        </div>
        {imageLoading ? (
          <h1 className=" flex justify-center items-center gap-2 rounded-md p-2 px-6 text-xs bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
            <p>Loading</p>
            <CgSpinner className="animate-spin" />
          </h1>
        ) : (
          <button
            className="rounded-md p-2 px-6 text-xs bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] "
            onClick={generateImage}
          >
            Generate
          </button>
        )}
      </div>
      <div className="flex flex-col items-center gap-3 justify-center mt-10 p-3">
        {imageLoaded ? (
          <div className="flex flex-col  text-center">
            <h2 className="">Added to Community</h2>
            <h3 className="text-sm">Team AI Ultra</h3>
          </div>
        ) : (
          <h2>AI will take care everything!</h2>
        )}

        <div className="bg-black/20 w-96 h-96 sm:w-64 sm:h-64 relative">
          {imageLoaded && (
            <Image
              alt="AI Image"
              src={aiImage}
              width={512}
              height={512}
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
