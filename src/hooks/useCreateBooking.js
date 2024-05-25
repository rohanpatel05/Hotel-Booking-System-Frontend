import { useMutation } from "@tanstack/react-query";
import { POST_CREATEBOOKING_QUERY_KEY } from "../config/queryKeys";
import { createBooking } from "../services/bookingService";

export const useCreateBooking = () => {
  return useMutation({
    mutationKey: [POST_CREATEBOOKING_QUERY_KEY],
    mutationFn: createBooking,
  });
};
