import React, { useState, useEffect } from "react";
import Package from "../components/Package";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { PackagesApi } from "../api/packagesApi";

function PackagesScreen() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const data = (await PackagesApi.getAllPackages()).data;
      setPackages(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  }

  function filterBySearch() {
    if (!searchKey) {
      // If the search key is empty, display all packages
      fetchData();
      return;
    }

    const filteredPackages = packages.filter((pkg) =>
      pkg.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setPackages(filteredPackages);
  }

  return (
    <div>
      <div className="loc-search">
        <input
          className="loc-input"
          type="text"
          placeholder="Search offers"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          onKeyUp={filterBySearch}
        />
        <i className="fa-solid fa-location-crosshairs"></i>
      </div>

      <div className="grid-container">
        {loading ? (
          <center>
            <Loader />
          </center>
        ) : error ? (
          <Error />
        ) : (
          packages.map((pkg) => {
            return (
              <div className="item" key={Date.now + Math.random()}>
                <Package pkg={pkg} />
              </div>
            );
          })
        )}

        <div></div>
      </div>
    </div>
  );
}

export default PackagesScreen;
