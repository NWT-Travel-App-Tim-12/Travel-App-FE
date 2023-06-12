import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { PackagesApi } from "../api/packagesApi";

export function AdminItineraryList() {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await PackagesApi.getAllItineraries()).data;
        setItineraries(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h3>Itineraries</h3>

      {loading && <Loader />}

      <table className="bs">
        <thead>
          <tr>
            <th>Booking ID:</th>
            <th>Service ID:</th>
            <th>Date:</th>
            <th>Day:</th>
            <th>Capacity:</th>
            <th>Region:</th>
            <th>Note:</th>
            <th>Service Type:</th>
          </tr>
        </thead>
        <tbody>
          {itineraries?.length > 0 &&
            itineraries.map((itinerary) => {
              return (
                <tr key={itinerary.bookingId}>
                  <td data-label="Booking ID:">{itinerary.bookingId}</td>
                  <td data-label="Service ID:">{itinerary.serviceId}</td>
                  <td data-label="Date:">{itinerary.date}</td>
                  <td data-label="Day:">{itinerary.day}</td>
                  <td data-label="Capacity:">{itinerary.capacity}</td>
                  <td data-label="Region:">{itinerary.region}</td>
                  <td data-label="Note:">{itinerary.note}</td>
                  <td data-label="Service Type:">{itinerary.serviceType}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
