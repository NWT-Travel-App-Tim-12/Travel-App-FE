import React from "react";
import { Link } from "react-router-dom";
import { PackagesApi } from "../api/packagesApi";

function Package({ pkg }) {
  const {
    id,
    regionId,
    url,
    agentId,
    agencyUuid,
    packageCode,
    name,
    description,
    validFrom,
    validTo,
    createdAt,
  } = pkg;

  const [region, setRegion] = React.useState({});

  const fetchData = async () => {
    const data = (await PackagesApi.getRegionById(regionId)).data;
    setRegion(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="grid-item">
        <img src={url} alt="img.jpg" />

        <div className="overlay">
          <h2>{name}</h2>
          <p className="text">Region: {region?.name}</p>
          <p className="text">
            From: {validFrom} To: {validTo}
          </p>
          <Link to={`/package/${id}`}>
            <div className="loc-btn">
              <button className="view">Book Now</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Package;
