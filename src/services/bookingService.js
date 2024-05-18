import axiosInstance from "../config/axiosInstance";

export const bookingUrlEndpoint = "/booking";

export const checkAvailability = async (checkAvailabilityBody) => {
  const { data } = await axiosInstance.post(
    `${bookingUrlEndpoint}/checkAvailability`,
    checkAvailabilityBody
  );
  return data;
};
