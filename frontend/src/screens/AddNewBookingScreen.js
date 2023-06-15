import React, { useState, useEffect } from "react";
import { PackagesApi } from "../api/packagesApi";
import { Button, Form, Alert } from "react-bootstrap";
import Input from "antd/es/input/Input";
import { BookingApi } from "../api/bookingsApi";
import { useParams } from "react-router-dom";
import { Session } from "../api/sessionStorage";

export const AddNewBookingScreen = () => {
  const [formData, setFormData] = useState({
    id: "",
    bookingCode: "",
    name: "",
    description: "",
    regionNote: "",
    userId: Session.getUser()?.id,
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

  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState({
    regionOptions: [],
    packageOptions: [],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { id } = useParams();

  async function fetchData() {
    try {
      const regionResponse = await PackagesApi.getAllRegions();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        regionOptions: regionResponse.data,
      }));

      const packageResponse = await PackagesApi.getAllPackages();
      setDropdownOptions((prevOptions) => ({
        ...prevOptions,
        packageOptions: packageResponse.data,
      }));

      const pkg = (await PackagesApi.getPackageById(id)).data;
      setFormData({
        ...formData,
        ...pkg,
        name: formData.name,
        packageId: pkg.id,
        startAt: pkg.validFrom,
        createdAt: pkg.createdAt,
        id: "",
      });
      const servicesRespones = (await PackagesApi.getAllServices()).data;
      setServiceList(servicesRespones);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedServices([...selectedServices, value]);
    } else {
      setSelectedServices((selectedServices) =>
        selectedServices.filter((service) => service !== value)
      );
    }
  };
  const submitData = async () => {
    const resp = await BookingApi.postBooking(formData);
    if (resp.statusText === "Created") {
      setFormSubmitted(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Opciono, koristite "smooth" za glatko animirano scrolanje, ili "auto" za trenutno scrolanje
      });
    }
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
    <div>
      <h4>Add new booking</h4>
      <div className="col-md-7 add-new-form">
        <hr />
        <div className="booking-image">
          <img src={formData.url} alt="img" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="add-new-booking">
            <div className="add-new-booking-left">
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
                  disabled
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="userId">Region:</label>
                <Form.Select
                  disabled
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
                <label htmlFor="packageId">Package:</label>
                <Form.Select
                  disabled
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
                <label htmlFor="passengerNumber">Passengers:</label>
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
                  disabled
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
                  disabled
                  type="date"
                  id="createdAt"
                  name="createdAt"
                  value={formData.createdAt}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="add-new-booking-right">
              <h4>Choose services:</h4>
              {serviceList.map((service) => {
                console.log(
                  "*** ",
                  selectedServices.includes(service.id.toString())
                );
                return (
                  <Form.Check
                    key={service.id}
                    type="checkbox"
                    id={`service-${service.id}`}
                    label={service.name}
                    value={service.id}
                    name={service.id}
                    checked={selectedServices.includes(service.id.toString())}
                    onChange={handleCheckboxChange}
                  />
                );
              })}
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
