import { axiosInstanceProtected } from "../config/axiosInstances";

export const paymentUrlEndpoint = "/payment";

export const paymentIntentQuery = async (paymentIntentBody) => {
  const { data } = await axiosInstanceProtected.post(
    `${paymentUrlEndpoint}/intent`,
    paymentIntentBody
  );

  return data;
};
