import Link from "next/link";
import Image from "next/image";

import { GiNestedHexagons } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

import loginLogo from "../../public/assets/images/login.svg";

import { auth } from "../utils/firebase";

import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Spinner from "./Spinner";
import useAuthentication from "@/hooks/useAuthentication";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setError } from "@/store/userSlice";
import { CgSpinner } from "react-icons/cg";

export default function AuthPage() {
  const dispatch = useDispatch();
  const [loginLoading, setLoginLoading] = useState(null);
  const [signInWithGoogle, usg, lg, eg] = useSignInWithGoogle(auth);
  const [signInWithFacebook, usf, lf, ef] = useSignInWithFacebook(auth);
  const [signInWithGithub, usgi, lgi, egi] = useSignInWithGithub(auth);

  const [user, loading] = useAuthentication();

  const socialSignUp = async (provider) => {
    setLoginLoading(provider);

    setTimeout(() => {
      if (!user) {
        dispatch(
          setError({
            state: true,
            message: "This email already exist in different social media.",
          })
        );
        setTimeout(() => {
          dispatch(
            setError({
              state: false,
              message: "",
            })
          );
          setLoginLoading(null);
        }, 5000);
      }
    }, 5000);
    if (provider == "google") {
      signInWithGoogle()
        .then((u) => {
          console.log(u, usg, lg, eg);
        })
        .catch((err) => console.log(err));
    }
    if (provider == "facebook") {
      signInWithFacebook()
        .then((u) => {
          console.log(u, usf, lf, ef);
        })
        .catch((err) => console.log(err));
    }
    if (provider == "github") {
      signInWithGithub()
        .then((u) => {
          console.log(u, usgi, lgi, egi);
        })
        .catch((err) => console.log(err));
    }
  };

  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return (
      <div className=" flex justify-center items-center min-h-screen min-w-full bg-[#12141D] relative overflow-x-hidden p-5">
        <div className="w-full sm:w-80 h-2/3 sm:h-2/4 bg-white/10 text-center text-white p-4 text-xl flex flex-col justify-start shadow-2xl">
          <h3 className="text-left text-base flex  items-center gap-1 pb-5">
            <GiNestedHexagons />
            <Link href="/">AI ULTRA</Link>
          </h3>
          <h3 className="text-lg text-sky-200 px-6">
            Welcome back you have been missed!
          </h3>
          <Image
            className="mx-auto"
            src={loginLogo}
            alt="Login Logo"
            width={200}
            priority
          />
          <button
            className="bg-white shadow-lg font-bold text-black text-base px-6 gap-3 py-2 flex  items-center  rounded-md"
            onClick={() => socialSignUp("google")}
            // onClick={() => signInWithGoogle()}
          >
            <FcGoogle size={"1.3rem"} />
            {loginLoading == "google" ? (
              <p className="flex gap-3 items-center justify-center">
                Loading <CgSpinner className="animate-spin" />
              </p>
            ) : (
              <p> Continue with Google</p>
            )}
          </button>
          <button
            className="bg-blue-700 shadow-lg font-bold text-white text-base px-6 gap-3 py-2 flex  items-center mt-5 rounded-md"
            // onClick={() => signInWithFacebook()}
            onClick={() => socialSignUp("facebook")}
            id="sign-in-phone"
          >
            <FaFacebook size={"1.5rem"} color="white" />
            {loginLoading == "facebook" ? (
              <p className="flex gap-3 items-center justify-center">
                Loading <CgSpinner className="animate-spin" />
              </p>
            ) : (
              <p> Continue with Facebook</p>
            )}
          </button>
          <button
            className="shadow-lg font-bold text-white bg-black text-base px-6 gap-3 py-2 flex  items-center mt-5 rounded-md"
            // onClick={() => signInWithGithub()}
            onClick={() => socialSignUp("github")}
          >
            <FaGithub size={"1.5rem"} />
            {loginLoading == "github" ? (
              <p className="flex gap-3 items-center justify-center">
                Loading <CgSpinner className="animate-spin" />
              </p>
            ) : (
              <p> Continue with Github</p>
            )}
          </button>
        </div>
      </div>
    );
  }
}
