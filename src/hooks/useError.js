import { useDispatch } from "react-redux";
import { setError } from "@/store/userSlice";
import { useCallback } from "react";

function CreateError(message) {
  const dispatch = useDispatch();

  const setError = useCallback(() => {
    dispatch(
      setError({
        state: true,
        message: message,
      })
    );
    setTimeout(() => {
      dispatch(
        setError({
          state: false,
          message: "",
        })
      );
    }, 2000);
  }, [dispatch, message]);

  return setError;
}

export default CreateError;
