import { useMutation } from "@tanstack/react-query";
import { PUT_CHANGEPASSWORD_QUERY_KEY } from "../config/queryKeys.js";
import { updatePassword } from "../services/userService.js";

export const useUpdatePassword = () => {
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationKey: [PUT_CHANGEPASSWORD_QUERY_KEY],
    mutationFn: updatePassword,
    onError: (error) => {
      if (error.response) {
        error.message =
          error.response.data.message || "Unknown error occurred.";
      } else {
        error.message = "Network error occurred!";
      }
    },
  });

  return { mutate, data, isLoading, isError, error };
};
