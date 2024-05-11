import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth.js";
import { POST_REFERSH_QUERY_KEY } from "../config/queryKeys.js";
import { refreshTokenQuery } from "../services/userService.js";

export const useRefresh = () => {
  const { refreshAccessToken, signOut } = useAuth();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationKey: [POST_REFERSH_QUERY_KEY],
    mutationFn: refreshTokenQuery,
    onSuccess: (response) => {
      refreshAccessToken({
        accessToken: response.accessToken,
        accessTokenExpiration: response.accessTokenExpiration,
      });
    },
    onError: (error) => {
      console.error("Error refreshing token:", error);
      signOut();
    },
  });

  return { mutate, isLoading, isError, error };
};
