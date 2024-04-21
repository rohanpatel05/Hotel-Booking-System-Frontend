import axiosInstance from "../config/axiosInstance.js";

export const roomUrlEndpoint = "/room";

export const fetchRooms = async () => {
  const { data } = await axiosInstance.get(`${roomUrlEndpoint}`);
  return data;
};
