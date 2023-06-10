import { axiosInstance } from "./axiosInstance";

const getAllPackages = async () => await axiosInstance.get("/packages");

const getPackageById = async (id) => await axiosInstance.get(`/packages/${id}`);

const getRegionById = async (id) => await axiosInstance.get(`/regions/${id}`);

const getAllPlaces = async () => await axiosInstance.get("/places");

const getAllServices = async () => await axiosInstance.get("/services");

const getCurrencyById = async (id) =>
  await axiosInstance.get(`/currencies/${id}`);

export const PackagesApi = {
  getAllPackages,
  getRegionById,
  getAllPlaces,
  getPackageById,
  getCurrencyById,
  getAllServices,
};
