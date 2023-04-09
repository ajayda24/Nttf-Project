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

export default function DashboardPage() {
  const [user, loading] = useAuthentication();
  const { userSelectedPage } = useSelector((state) => state.user);

  if (loading || !user) {
    return <Spinner />;
  }
  const { photoURL, uid, email, displayName } = user;
  return (
    <div className=" flex flex-col   min-h-screen min-w-full bg-[#12141D] relative  p-2 sm:p-5 select-none">
      <Navbar photoURL={photoURL} uid={uid} name={displayName} />
      {userSelectedPage == "home" && <Home />}
      {userSelectedPage == "gallery" && <Gallery />}
      {userSelectedPage == "add" && <CreateImage />}
      {userSelectedPage == "favourites" && <Favourites />}
      {userSelectedPage == "chat" && <Chat />}
      <Footer />
    </div>
  );
}
