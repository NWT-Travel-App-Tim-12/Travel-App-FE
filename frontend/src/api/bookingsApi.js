import { axiosInstance } from "./axiosInstance";

const getAllBookings = async () => await axiosInstance.get("/bookings");

const postBooking = async (booking) =>
  await axiosInstance.post("/bookings", booking);

export const BookingApi = {
  getAllBookings,
  postBooking,
};
