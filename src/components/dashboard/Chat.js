import { useState } from "react";
import UserIcon from "./utils/UserIcon";
import { IoSendSharp } from "react-icons/io5";

export default function Chat() {
  const [allChats, setAllChats] = useState([
    {
      uid: "",
      userImg: "",
      username: "",
      chat: "hello",
      chatId: "",
      currentUser: true,
    },
    {
      uid: "",
      userImg: "",
      username: "",
      chat: "how are u?",
      chatId: "",
      currentUser: false,
    },
    {
      uid: "",
      userImg: "",
      username: "",
      chat: "fine bro.",
      chatId: "",
      currentUser: true,
    },
    {
      uid: "",
      userImg: "",
      username: "",
      chat: "Did you see my new image?",
      chatId: "",
      currentUser: false,
    },
    {
      uid: "",
      userImg: "",
      username: "",
      chat: "Yes, it is awesome.",
      chatId: "",
      currentUser: true,
    },
    {
      uid: "",
      userImg: "",
      username: "",
      chat: "Thanks",
      chatId: "",
      currentUser: false,
    },
    {
      uid: "",
      userImg: "",
      username: "",
      chat: "Waiting for another epic!",
      chatId: "",
      currentUser: true,
    },
  ]);
  const [chatText, setChatText] = useState("");
  const sendChat = () => {
    // fetch update chat array
    setAllChats((p) => [...p, { currentUser: true, chat: chatText }]);
    setChatText("");
  };
  return (
    <div className="p-2 text-white">
      <div className="bg-black/20 w-full sm:w-96 sm:mx-auto  h-[80vh] relative flex flex-col justify-between p-2 overflow-hidden">
        <h2 className="text-center p-2">Chat</h2>
        <div className=" bg-black/20 w-full h-[80vh] overflow-y-scroll  sm:scrollbar-thin sm:scrollbar-thumb-[#12141d]/90 sm:scrollbar-track-[#12141D] mb-12">
          <div className="flex flex-col gap-[3px] p-1 py-2">
            {allChats.map((c, i) => (
              <UserChat currentUser={c.currentUser} key={i} chat={c.chat} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-[96%] p-1 bg-black flex items-center justify-evenly gap-2">
          <div className="form-control w-full max-w-xs ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-md input-ghost focus:bg-opacity-5 focus:text-white input-bordered w-full max-w-xs "
              value={chatText}
              onChange={(e) => setChatText(e.target.value)}
            />
          </div>
          <IoSendSharp className="text-2xl" onClick={sendChat} />
        </div>
      </div>
    </div>
  );
}

const UserChat = ({ currentUser, chat }) => {
  return (
    <div className={`flex `}>
      <div
        className={`flex justify-evenly items-center gap-2 w-full ${
          !currentUser ? "flex-row-reverse" : "flex-row "
        }`}
      >
        <UserIcon />
        <p
          className={`${
            !currentUser ? "bg-slate-700/30" : "bg-teal-600/40"
          } w-[80%] min-h-12 max-h-fit  gap-2 p-2  rounded-md `}
        >
          {chat}
        </p>
      </div>
    </div>
  );
};
