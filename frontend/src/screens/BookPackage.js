import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { Button, Form } from "react-bootstrap";
import Error from "../components/Error";
import moment from "moment";
// import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { PackagesApi } from "../api/packagesApi";

function BookPackage() {
  let { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pkg, setPkg] = useState({});
  const [region, setRegion] = useState({});
  const [currency, setCurrency] = useState({});
  const [services, setServices] = useState([]);

  const totalDays = () => {
    const firstDate = moment(pkg.validFrom);
    const lastDate = moment(pkg.validTo);
    return moment.duration(lastDate.diff(firstDate)).asDays() + 1;
  };

  const [totalAmount, setTotalAmount] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const packageResponse = (await PackagesApi.getPackageById(id)).data;
      setPkg(packageResponse);
      const regionResponse = (
        await PackagesApi.getRegionById(packageResponse.regionId)
      ).data;
      console.log(regionResponse);
      setRegion(regionResponse.currencyId);
      const currencyResponse = (
        await PackagesApi.getCurrencyById(regionResponse.currencyId)
      ).data;
      setCurrency(currencyResponse);
      console.log(currencyResponse);
      setServices((await PackagesApi.getAllServices()).data);
      console.log((await PackagesApi.getAllServices()).data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    // if (!localStorage.getItem("currentUser")) {
    //   window.location.href = "/register";
    // }

    fetchData();
  }, []);

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  async function onToken(token) {
    // console.log(token);
    // const bookingDetails = {
    //   userid: JSON.parse(localStorage.getItem("currentUser"))._id,
    //   pkg.fromDate,
    //   pkg.toDate,
    //   totalAmount,
    //   totalDays,
    //   token,
    // };
    // try {
    //   setLoading(true);
    //   await axios.post("/api/bookings/bookplace", bookingDetails);
    //   setLoading(false);
    //   Swal.fire(
    //     "Congratulations",
    //     "Your Room Booked Successfully",
    //     "success"
    //   ).then((result) => {
    //     window.location.href = "/profile";
    //   });
    // } catch (error) {
    //   setLoading(false);
    //   Swal.fire("Oops", "Something went wrong", "error");
    // }
  }
  return (
    <div>
      {loading ? (
        <Loader />
      ) : pkg ? (
        <div>
          <div className="details">
            <div className="booking-row bs">
              <div className="left">
                <img src={pkg.url} alt="img" />
              </div>
              <div className="right">
                <div className="cont" style={{ textAlign: "left" }}>
                  <h1>Package Details</h1>
                  <hr />
                  <h4>{pkg.name}</h4>
                  <b>
                    <p>From Date: {pkg.validFrom}</p>
                    <p>To Date: {pkg.validTo}</p>
                  </b>
                  <b>
                    <p>Total days: {totalDays()}</p>
                    <hr />
                    <p>Total Amount: {totalAmount}</p>
                  </b>
                </div>
                <div className="services">
                  <Form>
                    <Form.Group>
                      {services?.map((service) => (
                        <Form.Check
                          key={service.id}
                          type="checkbox"
                          label={service.name}
                          name={service.id}
                          checked={checkedItems.id}
                          onChange={handleCheckboxChange}
                        />
                      ))}
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <p></p>
              <Button style={{ float: "right" }}>Book package</Button>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
      <br />
    </div>
  );
}

export default BookPackage;
