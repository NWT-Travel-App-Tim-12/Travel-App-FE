import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { PackagesApi } from "../api/packagesApi";

export function AdminCurrencyList() {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await PackagesApi.getAllCurrencies()).data;
        setCurrencies(data);
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
      <h3>Currencies</h3>

      {loading && <Loader />}

      <table className="bs">
        <thead>
          <tr>
            <th>ID:</th>
            <th>Name:</th>
          </tr>
        </thead>
        <tbody>
          {currencies?.length > 0 &&
            currencies.map((currency) => {
              return (
                <tr key={currency.id}>
                  <td data-label="Currency ID:">{currency.id}</td>
                  <td data-label="Name:">{currency.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
