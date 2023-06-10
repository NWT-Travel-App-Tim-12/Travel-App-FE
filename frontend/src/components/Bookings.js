import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Booking({ booking }) {
  return (
    <div className="">
      {/* <div className="booking-item">
        <div className="booking-image">
          <img src={booking.url} alt="img.jpg" />
        </div>

        <div className="">
          <h2>{booking.name}</h2>
          <p>Reviews: {booking.reviews}</p>
          <p className="text">Paid {booking.paid}</p>
        </div>
      </div> */}
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={booking.url} />
        <Card.Body>
          <Card.Title>{booking.name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default Booking;
