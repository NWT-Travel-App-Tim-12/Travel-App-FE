import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { UserApi } from "../api/userApi";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function AdminAgencyList() {
  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await UserApi.getAllAgencies()).data;
        setAgencies(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const onClick = () => navigate("/admin/new-agency");

  return (
    <div className="table-container">
      <div className="heading-button">
        <h3>Agencies</h3>
        <Button onClick={onClick}>Add new agency</Button>
      </div>

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
