import React, { useState } from "react";
import { PackagesApi } from "../api/packagesApi";
import { Button, Alert } from "react-bootstrap";
import Input from "antd/es/input/Input";

export const AddNewCurrencyScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitData = async () => {
    const resp = await PackagesApi.postCurrency(formData);
    if (resp.statusText === "Created") setFormSubmitted(true);
  };

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

  if (formSubmitted)
    return (
      <Alert
        key={"success"}
        variant={"success"}
        style={{
          width: "20rem",
          margin: "auto",
        }}
      >
        Currency created
      </Alert>
    );

  return (
    <div className="">
      <h4>Add new currency</h4>
      <div className="col-md-5 add-new-package">
        <hr />
        <form onSubmit={handleSubmit}>
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

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
