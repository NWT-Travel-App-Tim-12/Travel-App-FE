import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Input from "antd/es/input/Input";
import { BookingApi } from "../api/bookingsApi";
import { useParams } from "react-router-dom";

function PaymentScreen() {
    const { bookingId } = useParams(); 
  const [bookingData, setBookingData] = useState({});
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    fetchBookingData();

    async function fetchBookingData() {
      try {
        const bookingResponse = await BookingApi.getAllBookings(); // Replace with your API call
        setBookingData(bookingResponse.data.find(v => v.id == bookingId));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    // Perform payment processing logic here
    console.log("Payment processed!");
  };

  return (
    <div className="col-md-5 add-new-package">
      <h4>Payment Screen</h4>
      <hr />
      {bookingData && (
        <div>
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
    </div>
  );
}

export default PaymentScreen;
