import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { PackagesApi } from "../api/packagesApi";

function Booking({ booking }) {
  const {
    description,
    url,
    name,
    startAt,
    paid,
    reviews,
    packageId,
    passengerNumber,
    numberOfDays,
    cost,
  } = booking;

  const [pkg, setPkg] = React.useState({});
  const [region, setRegion] = React.useState({});

  const fetchData = async () => {
    const data = (await PackagesApi.getPackageById(packageId)).data;
    setPkg(data);
    console.log(data);
    const regionData = (await PackagesApi.getRegionById(data.regionId)).data;
    setRegion(regionData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          style={{
            maxHeight: "14rem",
          }}
          src={url}
        />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>{name}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            <small className="text-muted">Package name: </small> {pkg?.name}
            <br />
            <small className="text-muted">Starts at: </small> {startAt}
            <br />
            <small className="text-muted">Number of days: </small>{" "}
            {numberOfDays}
            <br />
            <small className="text-muted">Region: </small> {region?.name}
            <br />
            <small className="text-muted">Passenger number: </small>{" "}
            {passengerNumber}
            <br />
            <small className="text-muted">Reviews: </small> {reviews}
            <br />
            <small className="text-muted">Cost: </small> {cost} $
            <br />
            <small className="text-muted">Paid: </small>{" "}
            {paid ? (
              <CheckCircleOutlined color="green" />
            ) : (
              <CloseCircleOutlined color="red" />
            )}
            <br />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{description} </small>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default Booking;
