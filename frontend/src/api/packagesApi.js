import { axiosInstance } from "./axiosInstance";

// packages
const getAllPackages = async () => await axiosInstance.get("/packages");

const getPackageById = async (id) => await axiosInstance.get(`/packages/${id}`);

const postPackage = async (pkg) => await axiosInstance.post(`/packages`, pkg);

// regions
const getAllRegions = async () => await axiosInstance.get("/regions");

const postRegion = async (region) =>
  await axiosInstance.post(`/regions`, region);

const getRegionById = async (id) => await axiosInstance.get(`/regions/${id}`);

// places
const getAllPlaces = async () => await axiosInstance.get("/places");

// services
const getAllServices = async () => await axiosInstance.get("/services");

// itineraries
const getAllItineraries = async () => await axiosInstance.get("/itineraries");

const getItinerariesByIds = async (ids) =>
  await axiosInstance.get(
    `/itineraries?${ids.map((id) => `id=${id}`).join("&")}`
  );
// currency
const getCurrencyById = async (id) =>
  await axiosInstance.get(`/currencies/${id}`);

const postCurrency = async (currency) =>
  await axiosInstance.post(`/currencies`, currency);

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
  postRegion,
  getAllItineraries,
  getItinerariesByIds,
  postCurrency,
};
