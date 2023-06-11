import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { PackagesApi } from "../api/packagesApi";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function AdminRegionList() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await PackagesApi.getAllRegions()).data;
        setRegions(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const onClick = () => navigate("/admin/new-region");

  return (
    <div className="table-container">
      <div className="heading-button">
        <h3>Regions</h3>
        <Button onClick={onClick}>Add new region</Button>
      </div>
      {loading && <Loader />}

      <table className="bs">
        <thead>
          <tr>
            <th>Name: </th>
            <th>Notes: </th>
            <th>Currency: </th>
          </tr>
        </thead>
        <tbody>
          {regions.length > 0 &&
            regions.map((rgn) => {
              return (
                <tr key={rgn.id}>
                  <td data-label="Name: ">{rgn.name}</td>
                  <td data-label="Notes: ">{rgn.notes}</td>
                  <td data-label="Currency: ">{rgn.currencyId}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
