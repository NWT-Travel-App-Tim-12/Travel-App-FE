import { axiosInstance } from "./axiosInstance";

const getAllBookings = async () => await axiosInstance.get("/bookings");

export const BookingApi = {
  getAllBookings,
};
