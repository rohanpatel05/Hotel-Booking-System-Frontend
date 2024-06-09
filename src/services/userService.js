import { axiosInstanceProtected } from "../config/axiosInstances";

export const userUrlEndpoint = "/user";

export const signUpQuery = async (signUpBody) => {
  const { data } = await axiosInstanceProtected.post("/signup", signUpBody);
  return data;
};

export const signInQuery = async (signInBody) => {
  const { data } = await axiosInstanceProtected.post("/signin", signInBody);
  return data;
};

export const signOutQuery = async () => {
  const { data } = await axiosInstanceProtected.post("/signout");
  return data;
};

export const refreshQuery = async () => {
  const { data } = await axiosInstanceProtected.post("/refresh");
  return data;
};

export const getUserInfo = async () => {
  const { data } = await axiosInstanceProtected.get(
    `${userUrlEndpoint}/user-info`
  );
  return data;
};

export const updateUserInfo = async (userInfoBody) => {
  const { data } = await axiosInstanceProtected.put(
    `${userUrlEndpoint}/update-profile`,
    userInfoBody
  );
  return data;
};

export const updatePassword = async (updatePasswordBody) => {
  const { data } = await axiosInstanceProtected.put(
    `${userUrlEndpoint}/change-password`,
    updatePasswordBody
  );
  return data;
};
