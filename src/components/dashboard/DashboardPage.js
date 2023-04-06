import useAuthentication from "@/hooks/useAuthentication";
import Spinner from "../Spinner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Home from "./Home";

export default function DashboardPage() {
  const [user, loading] = useAuthentication();
  const { userSelectedPage } = useSelector((state) => state.user);

  if (loading || !user) {
    return <Spinner />;
  }
  const { photoURL, uid, email, displayName } = user;
  return (
    <div className=" flex flex-col   min-h-screen min-w-full bg-[#12141D] relative overflow-x-hidden p-5">
      <Navbar photoURL={photoURL} uid={uid} name={displayName} />
      <Home />
      <Footer />
    </div>
  );
}
