import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { BookingApi } from "../api/bookingsApi";
import { PackagesApi } from "../api/packagesApi";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function AdminPackageList() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await PackagesApi.getAllPackages()).data;
        setPackages(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const onClick = () => navigate("/admin/new-package");

  return (
    <div className="table-container">
      <div className="heading-button">
        <h3>Packages</h3>
        <Button onClick={onClick}>Add new package</Button>
      </div>

      {loading && <Loader />}

      <table className="bs packages-list">
        <thead>
          <tr>
            <th>Package Id:</th>
            <th>Region Id:</th>
            <th>Agent Id:</th>
            <th>Agency Uuid:</th>
            <th>Package Code:</th>
            <th>Name:</th>
            <th>Description:</th>
            <th>Valid From:</th>
            <th>Valid To:</th>
            <th>Created At:</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id}>
              <td data-label="Package Id:">{pkg.id}</td>
              <td data-label="Region Id:">{pkg.regionId}</td>
              <td data-label="Agent Id:">{pkg.agentId}</td>
              <td data-label="Agency Uuid:">{pkg.agencyUuid}</td>
              <td data-label="Package Code:">{pkg.packageCode}</td>
              <td data-label="Name:">{pkg.name}</td>
              <td data-label="Description:">{pkg.description}</td>
              <td data-label="Valid From:">{pkg.validFrom}</td>
              <td data-label="Valid To:">{pkg.validTo}</td>
              <td data-label="Created At:">{pkg.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
    </div>
  );
}
