import axiosInstance from "../config/axiosInstance";

export const bookingUrlEndpoint = "/booking";

export const checkAvailability = async (checkAvailabilityBody) => {
  const { data } = await axiosInstance.post(
    `${bookingUrlEndpoint}/check-availability`,
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

export const fetchReservations = async (accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data } = await axiosInstance.get(
    `${bookingUrlEndpoint}/by-user`,
    config
  );
  return data;
};
