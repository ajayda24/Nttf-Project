import useAuthentication from "@/hooks/useAuthentication";
import Spinner from "../Spinner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Home from "./Home";
import Gallery from "./Gallery";
import Favourites from "./Favourites";
import CreateImage from "./CreateImage";
import Chat from "./Chat";
import UserProfile from "./UserProfile";
import { useEffect } from "react";
import { serverUrl } from "../../utils/constants";

export default function DashboardPage() {
  const [user, loading] = useAuthentication();
  useEffect(() => {
    if (user) {
      const { photoURL, uid, email, displayName, providerData } = user;
      const provider = providerData[0];
      fetch(`${serverUrl}/api/user/postUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          photoURL,
          uid,
          email: email || provider.email,
          displayName,
          provider,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);
  const { userSelectedPage } = useSelector((state) => state.user);

  if (loading || !user) {
    return <Spinner />;
  }
  let { photoURL, uid, email, displayName } = user;
  if (!email) {
    email = user.providerData[0].email;
  }
  return (
    <div className=" flex flex-col   min-h-screen min-w-full bg-[#12141D] relative  p-2 sm:p-5 select-none">
      <Navbar photoURL={photoURL} uid={uid} name={displayName} />
      {userSelectedPage == "home" && <Home />}
      {userSelectedPage == "gallery" && <Gallery email={email} />}
      {userSelectedPage == "add" && <CreateImage />}
      {userSelectedPage == "favourites" && <Favourites email={email} />}
      {userSelectedPage == "chat" && <Chat />}
      {userSelectedPage[0] == "userprofile" && <UserProfile />}
      <Footer />
    </div>
  );
}
