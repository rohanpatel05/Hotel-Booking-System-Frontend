import { axiosInstancePublic } from "../config/axiosInstances";

export const roomUrlEndpoint = "/room";

export const fetchRooms = async () => {
  const { data } = await axiosInstancePublic.get(`${roomUrlEndpoint}`);
  return data;
};
