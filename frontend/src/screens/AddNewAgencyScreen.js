import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import Input from "antd/es/input/Input";
import { UserApi } from "../api/userApi";
import { useNavigate } from "react-router-dom";

export const AddNewAgencyScreen = () => {
  const [formData, setFormData] = useState({
    administrator: 0,
    name: "",
    address: "",
    agencyShortName: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    administrators: [],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  async function fetchData() {
    try {
      const administratorsResponse = await UserApi.getAllAdministrators();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        administrators: administratorsResponse.data,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const submitData = async () => {
    const resp = await UserApi.postAgency(formData);
    if (resp.statusText === "Created") setFormSubmitted(true);
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
        Agency created
      </Alert>
    );

  return (
    <div className="">
      <h4>Add new agency</h4>
      <div className="col-md-5 add-new-form">
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="administrator">Administrator:</label>
            <Form.Select
              id="administrator"
              name="administrator"
              value={formData.administrator}
              onChange={handleChange}
            >
              <option value="">Choose administrator</option>
              {dropdownOptions.administrators.map((administrator) => (
                <option key={administrator.id} value={administrator.id}>
                  {administrator.firstName} {administrator.lastName}
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
            <label htmlFor="address">Address:</label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="agencyShortName">Agency Short Name:</label>
            <Input
              type="text"
              id="agencyShortName"
              name="agencyShortName"
              value={formData.agencyShortName}
              onChange={handleChange}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
