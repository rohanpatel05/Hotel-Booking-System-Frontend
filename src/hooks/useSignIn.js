import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth.js";
import { POST_SIGNIN_QUERY_KEY } from "../config/queryKeys.js";
import { signInQuery } from "../services/userService";

export const useSignIn = () => {
  const { signIn } = useAuth();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationKey: [POST_SIGNIN_QUERY_KEY],
    mutationFn: signInQuery,
    onSuccess: (response) => {
      signIn({
        accessToken: response.accessToken,
        accessTokenExpiration: response.accessTokenExpiration,
        refreshToken: response.refreshToken,
        refreshTokenExpiration: response.refreshTokenExpiration,
        user: response.user,
      });
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
