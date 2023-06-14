import React, { useState, useEffect } from "react";
import Package from "../components/Package";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { PackagesApi } from "../api/packagesApi";
import moment from "moment";

import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

function PackagesScreen() {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [dates, setDates] = useState(null);
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
      setFilteredPackages(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  }

  function filterBySearch() {
    if (!searchKey && !dates) {
      // If the search key is empty, display all packages
      fetchData();
      return;
    }
    if (!searchKey && dates) {
      filterByDate(dates);
      return;
    }

    const packagesToFilter = (dates ? filteredPackages : packages).filter(
      (pkg) => pkg.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredPackages(packagesToFilter);
  }

  const filterByDate = (dates) => {
    const packagesToFilter = searchKey ? filteredPackages : packages;
    if (!dates || !dates.length) {
      setFilteredPackages(packagesToFilter);
      setDates(null);
      return;
    }
    setDates(dates);
    const from = moment(dates[0].$d).format("YYYY-MM-DD");
    const to = moment(dates[1].$d).format("YYYY-MM-DD");

    console.log("*** from to", from, to);
    var tempPackages = [];

    for (const pkg of packagesToFilter) {
      const bValidFrom = moment(pkg.validFrom).format("YYYY-MM-DD");
      const bValidTo = moment(pkg.validTo).format("YYYY-MM-DD");

      if (
        (moment(bValidFrom).isBetween(from, to) &&
          moment(bValidTo).isBetween(from, to)) ||
        from === bValidFrom ||
        to === bValidTo
      ) {
        tempPackages.push(pkg);
      }
    }
    setFilteredPackages(tempPackages);
  };
  return (
    <div>
      <div className="filter-wrapper">
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
        </div>
        <div className="date">
          <div>
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
          </div>
        </div>
      </div>

      <div className="grid-container">
        {loading ? (
          <center>
            <Loader />
          </center>
        ) : error ? (
          <Error />
        ) : (
          filteredPackages.map((pkg) => {
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
