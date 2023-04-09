export default function CreateImage() {
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      {/* <h2>Create Image</h2> */}
      <div className="flex flex-col items-center gap-3 justify-center">
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text text-white">
              Enter your creativity here!
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost focus:opacity-90 input-bordered w-full max-w-xs text-black focus:font-bold "
          />
        </div>
        <button className="rounded-md p-2 px-6 text-xs bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
          Generate
        </button>
      </div>
      <div className="flex flex-col items-center gap-3 justify-center mt-10 p-3">
        <h2>AI will take care everything!</h2>

        <div className="bg-black/20 w-72 h-72 sm:w-64 sm:h-64 relative"></div>
      </div>
    </div>
  );
}
