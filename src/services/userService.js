import axiosInstance from "../config/axiosInstance";

export const userUrlEndpoint = "/user";

export const signUp = async (signUpBody) => {
  const { data } = await axiosInstance.post(`/signup`, signUpBody);
  return data;
};

export const signIn = async (signInBody) => {
  const { data } = await axiosInstance.post(`/login`, signInBody);
  return data;
};
