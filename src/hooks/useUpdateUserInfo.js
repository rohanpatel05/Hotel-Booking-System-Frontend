import { useMutation } from "@tanstack/react-query";
import { PUT_UPDATEUSERINFO_QUERY_KEY } from "../config/queryKeys.js";
import { updateUserInfo } from "../services/userService.js";

export const useUpdateUserInfo = () => {
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationKey: [PUT_UPDATEUSERINFO_QUERY_KEY],
    mutationFn: updateUserInfo,
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
