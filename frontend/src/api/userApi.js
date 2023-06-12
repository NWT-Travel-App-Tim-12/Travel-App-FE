import { axiosInstance } from "./axiosInstance";

const getAllUsers = async () => await axiosInstance.get("/users");

const getAllAgencies = async () => await axiosInstance.get("/agencies");

const getAllAdministrators = async () =>
  await axiosInstance.get("/users?role=admin");

const postAgency = async (agency) =>
  await axiosInstance.post("/agencies", agency);

export const UserApi = {
  getAllUsers,
  getAllAgencies,
  getAllAdministrators,
  postAgency,
};
