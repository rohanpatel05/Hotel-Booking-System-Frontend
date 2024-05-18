import axiosInstance from "../config/axiosInstance";

export const paymentUrlEndpoint = "/payment";

export const paymentIntentQuery = async (accessToken, paymentIntentBody) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await axiosInstance.post(
    `${paymentUrlEndpoint}/intent`,
    paymentIntentBody,
    config
  );
  return data;
};
