import React, { useState, useEffect } from "react";
import Booking from "../components/Booking";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import moment from "moment";
import { BookingApi } from "../api/bookingsApi";

const { RangePicker } = DatePicker;

function BookingsScreen() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
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
      setFilteredBookings(data);
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

    const filteredBookings = bookings.filter((booking) =>
      booking.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredBookings(filteredBookings);
  }

  const filterByDate = (dates) => {
    if (!dates || !dates.length) {
      setFilteredBookings(bookings);
      return;
    }
    const from = moment(dates[0].$d).format("YYYY-MM-DD");
    const to = moment(dates[1].$d).format("YYYY-MM-DD");

    console.log("*** from to", from, to);
    var tempBookings = [];

    for (const booking of bookings) {
      const bValidFrom = moment(booking.validFrom).format("YYYY-MM-DD");
      const bValidTo = moment(booking.validTo).format("YYYY-MM-DD");

      if (
        (moment(bValidFrom).isBetween(from, to) &&
          moment(bValidTo).isBetween(from, to)) ||
        from === bValidFrom ||
        to === bValidTo
      ) {
        tempBookings.push(booking);
      }
    }
    setFilteredBookings(tempBookings);
  };

  return (
    <div>
      <div className="filter-wrapper">
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
        </div>
        <div className="date">
          <div>
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
          </div>
        </div>
      </div>

      <div className="flex-container">
        {loading ? (
          <center>
            <Loader />
          </center>
        ) : error ? (
          <Error />
        ) : (
          filteredBookings.map((booking) => {
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
