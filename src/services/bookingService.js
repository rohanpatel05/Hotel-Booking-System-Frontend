import {
  axiosInstanceProtected,
  axiosInstancePublic,
} from "../config/axiosInstances";

export const bookingUrlEndpoint = "/booking";

export const checkAvailability = async (checkAvailabilityBody) => {
  const { data } = await axiosInstancePublic.post(
    `${bookingUrlEndpoint}/check-availability`,
    checkAvailabilityBody
  );
  return data;
};

export const createBooking = async (createBookingBody) => {
  const { data } = await axiosInstanceProtected.post(
    `${bookingUrlEndpoint}/book`,
    createBookingBody
  );
  return data;
};

export const fetchReservations = async () => {
  const { data } = await axiosInstanceProtected.get(
    `${bookingUrlEndpoint}/by-user`
  );
  return data;
};
