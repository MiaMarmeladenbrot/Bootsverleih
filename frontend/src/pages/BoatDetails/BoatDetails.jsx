import "./BoatDetails.css";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendURL } from "../../api/api";
const BoatDetails = () => {
  const [boatDetails, setBoatDetails] = useState([]);
  const { boatId } = useParams();

  useEffect(() => {
    fetch(`${backendURL}/api/v1/boats/${boatId}`)
      .then((res) => res.json())
      .then((data) => setBoatDetails(data))
      .catch((err) => console.log("Fail to fetch Boat Details", err));
  }, []);
  console.log(boatDetails);
  return (
    <section className="boat-details">
      <h2>{boatDetails.boatName}</h2>
      <p>Typ: {boatDetails.boatType}</p>
      <p>Material: {boatDetails.material}</p>
      <p>Baujahr: {boatDetails.constructionYear}</p>
      <p>Seriennummer: {boatDetails.serialNumber}</p>
    </section>
    // Components Edit Details
    // Show all reservations for boatId
  );
};

export default BoatDetails;