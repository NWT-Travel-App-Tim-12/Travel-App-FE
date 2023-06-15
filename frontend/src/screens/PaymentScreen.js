import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Input from "antd/es/input/Input";
import { BookingApi } from "../api/bookingsApi";
import { useNavigate, useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

function PaymentScreen() {
  const { bookingId } = useParams();
  const [bookingData, setBookingData] = useState({});
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [loader, setLoader] = useState(false);
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    fetchBookingData();

    async function fetchBookingData() {
      try {
        const bookingResponse = (await BookingApi.getBookingById(bookingId))
          .data[0];
        console.log(bookingResponse);
        setBookingData(bookingResponse);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoader(true);
    await BookingApi.putBooking({ ...bookingData, paid: true });
    setTimeout(() => {
      setLoader(false);
      navigate("/bookings");
    }, 1000);
    console.log("Payment processed!");
  };

  return (
    <div className="col-md-5 add-new-form">
      <h4>Payment Screen</h4>
      <hr />
      {bookingData && (
        <div style={{ flexDirection: "column" }}>
          <h5>Booking Data</h5>
          <p>Booking Code: {bookingData.bookingCode}</p>
          <p>Name: {bookingData.name}</p>
        </div>
      )}
      <Form onSubmit={handlePayment}>
        <Form.Group>
          <Form.Label>Card Number:</Form.Label>
          <Input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={{ width: "55%" }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Expiry Date:</Form.Label>
          <Input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            style={{ width: "55%" }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>CVV:</Form.Label>
          <Input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={{ width: "55%" }}
          />
        </Form.Group>
        <Button type="submit">Pay Now</Button>
      </Form>
      {loader && (
        <div className="payment-loader">
          <TailSpin
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
}

export default PaymentScreen;
