import { axiosInstance } from "./axiosInstance";

const getAllUsers = async () => await axiosInstance.get("/users");

const getAllAgencies = async () => await axiosInstance.get("/agencies");

const getAllAdministrators = async () =>
  await axiosInstance.get("/users?role=admin");

const postAgency = async (agency) =>
  await axiosInstance.post("/agencies", agency);

const postUser = async (user) => await axiosInstance.post("/users", user);

const getUserById = async (id) => await axiosInstance.get(`/users?id=${id}`);

const getUserByEmail = async (email) =>
  await axiosInstance.get(`/users?email=${email}`);

export const UserApi = {
  getAllUsers,
  getAllAgencies,
  getAllAdministrators,
  postAgency,
  postUser,
  getUserById,
  getUserByEmail,
};
