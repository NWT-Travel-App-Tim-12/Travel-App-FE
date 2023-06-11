import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { BookingApi } from "../api/bookingsApi";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function AdminBookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await BookingApi.getAllBookings()).data;
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    }
    fetchData();
  }, []);

  const onClick = () => navigate("/admin/new-booking");

  return (
    <div className="table-container">
      <div className="heading-button">
        <h3>Bookings</h3>
        <Button onClick={onClick}>Add new booking</Button>
      </div>

      {loading && <Loader />}

      <table className="bs bookings-list">
        <thead>
          <tr>
            <th>ID:</th>
            <th>Booking Code:</th>
            <th>Name:</th>
            <th>Description:</th>
            <th>Region Note:</th>
            <th>User ID:</th>
            <th>Package ID:</th>
            <th>Days:</th>
            <th>Cost:</th>
            <th>Passengers:</th>
            <th>Paid:</th>
            <th>Start At:</th>
            <th>Created At:</th>
            {/* <th>Itineraries:</th> */}
            <th>Reviews:</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 &&
            bookings.map((booking) => {
              return (
                <tr key={booking.id}>
                  <td data-label="ID:">{booking.id}</td>
                  <td data-label="Booking Code:">{booking.bookingCode}</td>
                  <td data-label="Name:">{booking.name}</td>
                  <td data-label="Description:">{booking.description}</td>
                  <td data-label="Region Note:">{booking.regionNote}</td>
                  <td data-label="User ID:">{booking.userId}</td>
                  <td data-label="Package ID:">{booking.packageId}</td>
                  <td data-label="Number of Days:">{booking.numberOfDays}</td>
                  <td data-label="Cost:">{booking.cost}</td>
                  <td data-label="Passenger Number:">
                    {booking.passengerNumber}
                  </td>
                  <td data-label="Paid:">{booking.paid ? "Yes" : "No"}</td>
                  <td data-label="Start At:">{booking.startAt}</td>
                  <td data-label="Created At:">{booking.createdAt}</td>
                  {/* <td data-label="Itineraries:">{booking.itineraries}</td> */}
                  <td data-label="Reviews:">{booking.reviews}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
