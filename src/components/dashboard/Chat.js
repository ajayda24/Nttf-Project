import { useState } from "react";
import UserIcon from "./utils/UserIcon";
import { IoSendSharp } from "react-icons/io5";

export default function Chat() {
  const currentUser = "ajaydtrevor@gmail.com";
  const [allChats, setAllChats] = useState([
    {
      uid: "",
      userImg: "",
      username: "Saved Messages",
      email: "ajaydtrevor@gmail.com",
      chats: [
        {
          chatId: "1",
          email: "sankeerthvk03@gmail.com",
          chat: "Hello",
          currentUser: true,
        },
        {
          chatId: "2",
          email: "sankeerthvk03@gmail.com",
          chat: "Hi",
          currentUser: false,
        },
        {
          chatId: "10",
          email: "sankeerthvk03@gmail.com",
          chat: "I saw your new post. It was amazing",
          currentUser: false,
        },
        {
          chatId: "11",
          email: "sankeerthvk03@gmail.com",
          chat: "Thanks bro.",
          currentUser: true,
        },
        {
          chatId: "3",
          email: "amalragvc7@gmail.com",
          chat: "How was my new Picture?",
          currentUser: true,
        },
        {
          chatId: "4",
          email: "amalragvc7@gmail.com",
          chat: "It's fine, waiting for another epic.",
          currentUser: false,
        },
        {
          chatId: "5",
          email: "ajaydtrevor@gmail.com",
          chat: "Hi",
          currentUser: true,
        },
        {
          chatId: "6",
          email: "ajaydtrevor@gmail.com",
          chat: "I saved my messages here.",
          currentUser: true,
        },
      ],
    },
    {
      uid: "",
      userImg: "",
      username: "Sankeerth VK",
      currentUser: false,
      email: "sankeerthvk03@gmail.com",
      chats: [
        {
          chatId: "1",
          email: "ajaydtrevor@gmail.com",
          chat: "Hello",
          currentUser: false,
        },
        {
          chatId: "2",
          email: "ajaydtrevor@gmail.com",
          chat: "Hi",
          currentUser: true,
        },
        {
          chatId: "3",
          email: "ajaydtrevor@gmail.com",
          chat: "I saw your new post. It was amazing",
          currentUser: true,
        },
        {
          chatId: "3",
          email: "ajaydtrevor@gmail.com",
          chat: "Thanks bro.",
          currentUser: false,
        },
      ],
    },
    {
      uid: "",
      userImg: "",
      username: "Amalrag VC",
      email: "amalragvc7@gmail.com",
      chats: [
        {
          chatId: "3",
          email: "ajaydtrevor@gmail.com",
          chat: "How was my new Picture?",
          currentUser: true,
        },
        {
          chatId: "4",
          email: "ajaydtrevor@gmail.com",
          chat: "It's fine, waiting for another epic.",
          currentUser: false,
        },
      ],
    },
  ]);
  const [chatText, setChatText] = useState("");
  const sendChat = (currentUser, selectedUser) => {
    // fetch update chat array
    const getCurrentUserChats = allChats.find((e) => e.email === selectedUser);
    const getOtherChats = allChats.filter((e) => e.email !== selectedUser);
    getCurrentUserChats.chats.push({
      chatId: "3",
      email: currentUser,
      chat: chatText,
      currentUser: true,
    });
    setAllChats((p) => [getCurrentUserChats, ...getOtherChats]);
    setChatText("");
  };

  const userProfileClick = (email) => {
    dispatch(changeUserSelectedPage(["userprofile", email]));
  };
  const [selectedUser, setSelectedUser] = useState("ajaydtrevor@gmail.com");
  return (
    <div className="p-2 text-white shadow-2xl">
      <div className="bg-black/20 w-full sm:max-w-sm lg:max-w-4xl sm:mx-auto  h-[80vh] p-1">
        <div className="flex gap-1 h-[78vh]">
          <div className="bg-white/5 shadow-2xl flex-auto w-2/5 h-full">
            <h2 className="text-center p-2 ">All Chats</h2>
            <div className="bg-black/10 max-h-full h-full">
              {allChats.map((user, i) => {
                return (
                  <div
                    key={i}
                    className="p-4 flex  items-center gap-2 bg-black/10"
                    onClick={() => setSelectedUser(user.email)}
                  >
                    <UserIcon
                      gotoProfile={() => userProfileClick(user.email)}
                      name={user.email}
                      photoUrl={user.userImg}
                    />
                    {user.username}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative bg-white/5 shadow-2xl flex-auto w-3/5  h-full">
            <h2 className="text-center p-2">
              {allChats.find((e) => e.email === selectedUser).username}
            </h2>
            <div className="p-3 flex flex-col ">
              {allChats
                .find((e) => e.email === selectedUser)
                .chats.map((chat, i) => {
                  if (chat.email === currentUser) {
                    return (
                      <div
                        key={i}
                        className={`chat ${
                          !chat.currentUser ? "chat-start" : "chat-end"
                        }`}
                      >
                        <div className="chat-bubble">{chat.chat}</div>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="absolute bottom-0 w-full p-1 px-3 bg-black/50 flex items-center justify-between gap-2">
              <div className="form-control w-full  ">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-md input-ghost focus:bg-opacity-5 focus:text-white input-bordered w-full  "
                  value={chatText}
                  onChange={(e) => setChatText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendChat(currentUser, selectedUser);
                    }
                  }}
                />
              </div>
              <IoSendSharp
                className="text-3xl"
                onClick={() => sendChat(currentUser, selectedUser)}
              />
            </div>
          </div>
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
