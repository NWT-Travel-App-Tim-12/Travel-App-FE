import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { Button } from "antd";
import { PackagesApi } from "../api/packagesApi";

export function AdminCurrencyList() {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await PackagesApi.getAllCurrencies()).data;
        setCurrencies(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const onClick = () => navigate("/admin/new-currency");

  return (
    <div className="table-container">
      <div className="heading-button">
        <h3>Currencies</h3>
        <Button onClick={onClick}>Add new currency</Button>
      </div>

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
