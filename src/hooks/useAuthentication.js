import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, getRedirectResult } from "@/utils/firebase";
import { useAuthState, useIdToken } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

export default function useAuthentication(forwardUrl) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!loading) {
      if (error || !user) {
        router.push("/login");
      } else if (user) {
        const { photoURL, uid, email, displayName } = user;
        dispatch(
          setUser({
            photoUrl: photoURL,
            uid,
            email: email || user.providerData[0].email,
            name: displayName,
          })
        );
        router.push(forwardUrl || "/dashboard");
      }
    }
  }, [user, loading, error]);
  if (loading && !user) {
    return [null, true];
  } else if (loading) {
    return [null, true];
  } else if (user && !error) {
    return [user, false];
  } else {
    return [null, false];
  }
}
