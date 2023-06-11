import React, { useState, useEffect } from "react";
import { PackagesApi } from "../api/packagesApi";
import { Button, Form, Alert } from "react-bootstrap";
import Input from "antd/es/input/Input";

export const AddNewRegionScreen = () => {
  const [formData, setFormData] = useState({
    regionId: "",
    currencyId: "",
    superRegionId: "",
    name: "",
    notes: "",
    createdAt: new Date().toISOString(),
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    regionOptions: [],
    currencyOptions: [],
    superRegionOptions: [],
  });

  const [formSubmited, setFormSubmited] = useState(false);

  async function fetchData() {
    try {
      const regionResponse = await PackagesApi.getAllRegions();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        regionOptions: regionResponse.data,
      }));

      const currencyResponse = await PackagesApi.getAllCurrencies();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        currencyOptions: currencyResponse.data,
      }));

      const superRegionResponse = await PackagesApi.getAllSuperRegions();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        superRegionOptions: superRegionResponse.data,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const submitData = async () => {
    const resp = await PackagesApi.postRegion(formData);
    if (resp.statusText === "Created") setFormSubmited(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData();
    console.log(formData);
  };

  if (formSubmited)
    return (
      <Alert
        key={"succes"}
        variant={"success"}
        style={{
          width: "20rem",
          margin: "auto",
        }}
      >
        Region created
      </Alert>
    );

  return (
    <div className="">
      <h4>Add new region</h4>
      <div className="col-md-5 add-new-package">
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="regionId">Region:</label>
            <Form.Select
              id="regionId"
              name="regionId"
              value={formData.regionId}
              onChange={handleChange}
            >
              <option value="">Choose region</option>
              {dropdownOptions.regionOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          <div>
            <label htmlFor="currencyId">Currency:</label>
            <Form.Select
              id="currencyId"
              name="currencyId"
              value={formData.currencyId}
              onChange={handleChange}
            >
              <option value="">Choose currency</option>
              {dropdownOptions.currencyOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          <div>
            <label htmlFor="superRegionId">Super Region:</label>
            <Form.Select
              id="superRegionId"
              name="superRegionId"
              value={formData.superRegionId}
              onChange={handleChange}
            >
              <option value="">Choose super region</option>
              {dropdownOptions.superRegionOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="notes">Notes:</label>
            <Input
              type="text"
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
