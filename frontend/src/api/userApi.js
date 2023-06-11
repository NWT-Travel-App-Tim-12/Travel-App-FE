import { axiosInstance } from "./axiosInstance";

const getAllUsers = async () => await axiosInstance.get("/users");

const getAllAgencies = async () => await axiosInstance.get("/agencies");

export const UserApi = {
  getAllUsers,
  getAllAgencies,
};
