import React, { useState, useEffect } from "react";
import Booking from "../components/Bookings";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { BookingApi } from "../api/bookingsApi";

function BookingsScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const data = (await BookingApi.getAllBookings()).data;
      setBookings(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  }

  function filterBySearch() {
    if (!searchKey) {
      // If the search key is empty, display all Bookings
      fetchData();
      return;
    }

    const filteredBookings = bookings.filter((location) =>
      location.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setBookings(filteredBookings);
  }

  return (
    <div>
      <div className="loc-search">
        <input
          className="loc-input"
          type="text"
          placeholder="Search your bookings"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          onKeyUp={filterBySearch}
        />
        <i className="fa-solid fa-location-crosshairs"></i>
      </div>

      <div className="flex-container">
        {loading ? (
          <center>
            <Loader />
          </center>
        ) : error ? (
          <Error />
        ) : (
          bookings.map((booking) => {
            return (
              <div className="item" key={booking.id}>
                <Booking booking={booking} />
              </div>
            );
          })
        )}

        <div></div>
      </div>
    </div>
  );
}

export default BookingsScreen;
