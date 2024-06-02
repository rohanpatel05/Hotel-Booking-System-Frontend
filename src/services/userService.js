import axiosInstance from "../config/axiosInstance";

export const userUrlEndpoint = "/user";

export const signUpQuery = async (signUpBody) => {
  const { data } = await axiosInstance.post(`/signup`, signUpBody);
  return data;
};

export const signInQuery = async (signInBody) => {
  const { data } = await axiosInstance.post(`/login`, signInBody);
  return data;
};

export const signOutQuery = async (accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await axiosInstance.post(`/logout`, {}, config);
  return data;
};

export const refreshTokenQuery = async (refreshBody) => {
  const { data } = await axiosInstance.post(`/refresh`, refreshBody);
  return data;
};

export const getUserInfo = async (userId) => {
  const { data } = await axiosInstance.get(
    `${userUrlEndpoint}/user-info/${userId}`
  );
  return data;
};

export const updateUserInfo = async ({ accessToken, userId, userInfoBody }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await axiosInstance.put(
    `${userUrlEndpoint}/update-profile/${userId}`,
    userInfoBody,
    config
  );

  return data;
};

export const updatePassword = async ({
  accessToken,
  userId,
  updatePasswordBody,
}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data } = await axiosInstance.put(
    `${userUrlEndpoint}/change-password/${userId}`,
    updatePasswordBody,
    config
  );

  return data;
};
