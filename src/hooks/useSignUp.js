import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth.js";
import { POST_SIGNUP_QUERY_KEY } from "../config/queryKeys.js";
import { signUpQuery } from "../services/userService";

export const useSignUp = () => {
  const { signUp } = useAuth();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationKey: [POST_SIGNUP_QUERY_KEY],
    mutationFn: signUpQuery,
    onSuccess: (response) => {
      signUp({
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
