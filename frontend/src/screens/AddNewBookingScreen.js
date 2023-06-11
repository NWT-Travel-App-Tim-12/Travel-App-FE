import React, { useState, useEffect } from "react";
import { PackagesApi } from "../api/packagesApi";
import { Button, Form, Alert } from "react-bootstrap";
import Input from "antd/es/input/Input";
import { UserApi } from "../api/userApi";
import { BookingApi } from "../api/bookingsApi";

export const AddNewBookingScreen = () => {
  const [formData, setFormData] = useState({
    id: "",
    bookingCode: "",
    name: "",
    description: "",
    regionNote: "",
    userId: "",
    packageId: "",
    numberOfDays: 0,
    cost: 0,
    passengerNumber: 0,
    paid: false,
    startAt: "",
    createdAt: "",
    itineraries: "",
    reviews: "",
    url: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    regionOptions: [],
    userOptions: [],
    packageOptions: [],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  async function fetchData() {
    try {
      const regionResponse = await PackagesApi.getAllRegions();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        regionOptions: regionResponse.data,
      }));

      const userResponse = await UserApi.getAllUsers();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        userOptions: userResponse.data,
      }));

      const packageResponse = await PackagesApi.getAllPackages();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        packageOptions: packageResponse.data,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const submitData = async () => {
    const resp = await BookingApi.postBooking(formData);
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
        Booking created
      </Alert>
    );

  return (
    <div className="">
      <h4>Add new booking</h4>
      <div className="col-md-5 add-new-package">
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="bookingCode">Booking Code:</label>
            <Input
              type="text"
              id="bookingCode"
              name="bookingCode"
              value={formData.bookingCode}
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
            <label htmlFor="regionNote">Region Note:</label>
            <Input
              type="text"
              id="regionNote"
              name="regionNote"
              value={formData.regionNote}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="userId">Region:</label>
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
            <label htmlFor="userId">User:</label>
            <Form.Select
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
            >
              <option value="">Choose user</option>
              {dropdownOptions.userOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.firstName} {option.lastName}
                </option>
              ))}
            </Form.Select>
          </div>

          <div>
            <label htmlFor="packageId">Package:</label>
            <Form.Select
              id="packageId"
              name="packageId"
              value={formData.packageId}
              onChange={handleChange}
            >
              <option value="">Choose package</option>
              {dropdownOptions.packageOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          <div>
            <label htmlFor="numberOfDays">Number of Days:</label>
            <Input
              type="number"
              id="numberOfDays"
              name="numberOfDays"
              value={formData.numberOfDays}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="cost">Cost:</label>
            <Input
              type="number"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="passengerNumber">Passenger Number:</label>
            <Input
              type="number"
              id="passengerNumber"
              name="passengerNumber"
              value={formData.passengerNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="paid">Paid:</label>
            <Form.Check
              type="checkbox"
              id="paid"
              name="paid"
              checked={formData.paid}
              onChange={(e) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  paid: e.target.checked,
                }));
              }}
            />
          </div>

          <div>
            <label htmlFor="startAt">Start At:</label>
            <Input
              type="date"
              id="startAt"
              name="startAt"
              value={formData.startAt}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="createdAt">Created At:</label>
            <Input
              type="date"
              id="createdAt"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="url">Image URL:</label>
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
