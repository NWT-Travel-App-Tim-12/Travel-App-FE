import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { PackagesApi } from "../api/packagesApi";
import { UserApi } from "../api/userApi";

export function AdminAgencyList() {
  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await UserApi.getAllAgencies()).data;
        setAgencies(data);
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
      <h3>Agencies</h3>

      {loading && <Loader />}

      <table className="bs">
        <thead>
          <tr>
            <th>Agency ID:</th>
            <th>Administrator ID:</th>
            <th>Name:</th>
            <th>Address:</th>
            <th>Short name:</th>
          </tr>
        </thead>
        <tbody>
          {agencies?.length > 0 &&
            agencies.map((agency) => {
              return (
                <tr key={agency.id}>
                  <td data-label="Agency ID:">{agency.id}</td>
                  <td data-label="Administrator ID:">{agency.administrator}</td>
                  <td data-label="Name:">{agency.name}</td>
                  <td data-label="Address:">{agency.address}</td>
                  <td data-label="Short name:">{agency.agencyShortName}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
