import axiosInstance from "../config/axiosInstance";

export const bookingUrlEndpoint = "/booking";

export const checkAvailability = async (checkAvailabilityBody) => {
  const { data } = await axiosInstance.post(
    `${bookingUrlEndpoint}/checkAvailability`,
    checkAvailabilityBody
  );
  return data;
};

export const createBooking = async ({ accessToken, createBookingBody }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await axiosInstance.post(
    `${bookingUrlEndpoint}/book`,
    createBookingBody,
    config
  );

  return data;
};
