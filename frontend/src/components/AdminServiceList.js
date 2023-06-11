import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { UserApi } from "../api/userApi";
import { PackagesApi } from "../api/packagesApi";

export function AdminServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await PackagesApi.getAllServices()).data;
        setServices(data);
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
      <h3>Services</h3>

      {loading && <Loader />}

      <table className="bs">
        <thead>
          <tr>
            <th>ID:</th>
            <th>Name:</th>
          </tr>
        </thead>
        <tbody>
          {services?.length > 0 &&
            services.map((service) => {
              return (
                <tr key={service.id}>
                  <td data-label="Service ID:">{service.id}</td>
                  <td data-label="Name:">{service.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
