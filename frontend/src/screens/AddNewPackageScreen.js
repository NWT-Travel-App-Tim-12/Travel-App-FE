import React, { useState, useEffect } from "react";
import { PackagesApi } from "../api/packagesApi";
import { UserApi } from "../api/userApi";
import { Button, Form } from "react-bootstrap";
import Input from "antd/es/input/Input";

export const AddNewPackageScreen = () => {
  const [formData, setFormData] = useState({
    regionId: "",
    agentId: "",
    packageCode: "",
    name: "",
    description: "",
    validFrom: "",
    validTo: "",
    createdAt: "",
    url: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    regionOptions: [],
    agentOptions: [],
  });

  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const regionResponse = await PackagesApi.getAllRegions();
        setDropdownOptions((prevOptions) => ({
          ...prevOptions,
          regionOptions: regionResponse.data,
        }));

        const agentResponse = await UserApi.getAllUsers();
        setDropdownOptions((prevOptions) => ({
          ...prevOptions,
          agentOptions: agentResponse.data,
        }));

        setFormData((prevFormData) => ({
          ...prevFormData,
          createdAt: new Date().toISOString(),
        }));
      } catch (error) {
        console.log(error);
      }
    }
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
    PackagesApi.postPackage(formData);
    console.log(formData);
  };

  return (
    <div className="">
      <h4>Add new package</h4>
      <div className="col-md-5 add-new-package">
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="regionId">Region:</label>
            <Form.Select
              type="input"
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
            <label htmlFor="agentId">Agent:</label>
            <Form.Select
              id="agentId"
              name="agentId"
              value={formData.agentId}
              onChange={handleChange}
            >
              <option value="">Choose agent</option>
              {dropdownOptions.agentOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.firstName} {option.lastName}
                </option>
              ))}
            </Form.Select>
          </div>
          <div>
            <label htmlFor="packageCode">Package Code:</label>
            <Input
              type="text"
              id="packageCode"
              name="packageCode"
              value={formData.packageCode}
              onChange={handleChange}
            />
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
            <label htmlFor="description">Description:</label>
            <Input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="validFrom">Valid From:</label>
            <Input
              type="date"
              id="validFrom"
              name="validFrom"
              value={formData.validFrom}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="validTo">Valid To:</label>
            <Input
              type="date"
              id="validTo"
              name="validTo"
              value={formData.validTo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="url">Image url:</label>
            <Input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
