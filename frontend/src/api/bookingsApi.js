import { axiosInstance } from "./axiosInstance";
import { Session } from "./sessionStorage";

const getAllBookings = async () => {
  const user = Session.getUser();
  console.log(user);
  return await axiosInstance.get(`/bookings?userId=${user?.id}`);
};

const getBookingById = async (id) =>
  await axiosInstance.get("/bookings?id=" + id);

const postBooking = async (booking) =>
  await axiosInstance.post("/bookings", booking);

const putBooking = async (booking) =>
  await axiosInstance.put("/bookings/" + booking.id, booking);

export const BookingApi = {
  getAllBookings,
  postBooking,
  getBookingById,
  putBooking,
};
