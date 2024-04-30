import "./BoatDetails.css";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendURL } from "../../api/api";
import DeleteBoat from "../../components/DeleteBoat/DeleteBoat";
import EditBoat from "../../components/EditBoat/EditBoat";
import { fetchAllReservationsContext } from "../../context/Context";
import ReservationCard from "../../components/ReservationCard/ReservationCard";
const BoatDetails = () => {
  const [boatDetails, setBoatDetails] = useState([]);
  const [boatReservations, setBoatReservations] = useState([]);
  const { boatId } = useParams();
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );

  useEffect(() => {
    const filterReservations = allReservations.filter(
      (reservation) => reservation.boatId === boatDetails._id
    );
    setBoatReservations(filterReservations);
  }, [boatDetails]);
  console.log(boatReservations);

  useEffect(() => {
    fetch(`${backendURL}/api/v1/boats/${boatId}`)
      .then((res) => res.json())
      .then((data) => setBoatDetails(data))
      .catch((err) => console.log("Fail to fetch Boat Details", err));
  }, []);

  return (
    <section className="boat-details">
      <h2>{boatDetails.boatName}</h2>
      <p>Typ: {boatDetails.boatType}</p>
      <p>Material: {boatDetails.material}</p>
      <p>Baujahr: {boatDetails.constructionYear}</p>
      <p>Seriennummer: {boatDetails.serialNumber}</p>
      <DeleteBoat boatId={boatDetails._id} />
      <EditBoat boat={boatDetails} />
      <h2>Reservierungen</h2>
      {boatReservations?.map((item) => (
        <ReservationCard key={item._id} reservation={item} />
      ))}
    </section>

    // Show all reservations for boatId
  );
};

export default BoatDetails;
