import { useMutation } from "@tanstack/react-query";
import { POST_CHECKAVAILABILITY_QUERY_KEY } from "../config/queryKeys.js";
import { checkAvailability } from "../services/bookingService.js";

export const useCheckAvailability = () => {
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationKey: [POST_CHECKAVAILABILITY_QUERY_KEY],
    mutationFn: checkAvailability,
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
