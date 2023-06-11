import { axiosInstance } from "./axiosInstance";

// packages
const getAllPackages = async () => await axiosInstance.get("/packages");

const getPackageById = async (id) => await axiosInstance.get(`/packages/${id}`);

const postPackage = async (pkg) => await axiosInstance.post(`/packages`, pkg);

// regions
const getAllRegions = async () => await axiosInstance.get("/regions");

const getRegionById = async (id) => await axiosInstance.get(`/regions/${id}`);

// places
const getAllPlaces = async () => await axiosInstance.get("/places");

// services
const getAllServices = async () => await axiosInstance.get("/services");

// currency
const getCurrencyById = async (id) =>
  await axiosInstance.get(`/currencies/${id}`);

const getAllCurrencies = async () => await axiosInstance.get("/currencies");

export const PackagesApi = {
  getAllPackages,
  getRegionById,
  getAllPlaces,
  getPackageById,
  getCurrencyById,
  getAllServices,
  getAllRegions,
  getAllCurrencies,
  postPackage,
};
