import { useMutation } from "@tanstack/react-query";
import { POST_PAYMENTINTENT_QUERY_KEY } from "../config/queryKeys.js";
import { paymentIntentQuery } from "../services/paymentService.js";

export const usePaymentIntent = () => {
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationKey: [POST_PAYMENTINTENT_QUERY_KEY],
    mutationFn: paymentIntentQuery,
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
