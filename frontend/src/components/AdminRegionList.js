import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { PackagesApi } from "../api/packagesApi";

export function AdminRegionList() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="table-container">
      <h3>Regions</h3>
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
