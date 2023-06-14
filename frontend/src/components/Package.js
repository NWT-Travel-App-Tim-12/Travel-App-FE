import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PackagesApi } from "../api/packagesApi";

import { UserContext } from "../App";

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

  const value = useContext(UserContext);
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

          {value?.user ? (
            <Link to={`/package/${id}`}>
              <div className="loc-btn">
                <button className="view">Book Now</button>
              </div>
            </Link>
          ) : (
            <Link to={`/login`}>
              <div className="loc-btn">
                <button className="view">Book Now</button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default Package;
