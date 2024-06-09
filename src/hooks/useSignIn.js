import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth.js";
import { POST_SIGNIN_QUERY_KEY } from "../config/queryKeys.js";
import { signInQuery } from "../services/userService";
import { useNavigate, useLocation } from "react-router-dom";

export const useSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/booking";

  const { signIn } = useAuth();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationKey: [POST_SIGNIN_QUERY_KEY],
    mutationFn: signInQuery,
    onSuccess: (response) => {
      signIn({
        user: response.user,
      });

      navigate(from, { replace: true });
    },
    onError: (error) => {
      if (error.response) {
        error.message =
          error.response.data.message || "Unknown error occurred.";
      } else {
        error.message = "Network error occurred!";
      }
    },
  });

  return { mutate, isLoading, isError, error };
};
