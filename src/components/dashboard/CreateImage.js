import { useState } from "react";

export default function CreateImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [aiText, setAiText] = useState("");
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
        <button className="rounded-md p-2 px-6 text-xs bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
          Generate
        </button>
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

        <div className="bg-black/20 w-96 h-96 sm:w-64 sm:h-64 relative"></div>
      </div>
    </div>
  );
}
