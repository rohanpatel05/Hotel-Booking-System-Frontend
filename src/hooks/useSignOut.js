import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth.js";
import { POST_SIGNOUT_QUERY_KEY } from "../config/queryKeys.js";
import { signOutQuery } from "../services/userService.js";
import { useNavigate, useLocation } from "react-router-dom";

export const useSignOut = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signOut } = useAuth();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationKey: [POST_SIGNOUT_QUERY_KEY],
    mutationFn: signOutQuery,
    onSuccess: () => {
      signOut();
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
