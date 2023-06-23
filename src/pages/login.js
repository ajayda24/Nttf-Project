import AuthPage from "@/components/AuthPage";
import Error from "@/components/Error";
import { useSelector } from "react-redux";

export default function Login() {
  const { error } = useSelector((state) => state.user);
  return (
    <>
      {error.state && <Error />}
      <AuthPage />
    </>
  );
}
