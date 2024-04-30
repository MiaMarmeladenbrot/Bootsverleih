import "./BoatDetails.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendURL } from "../../api/api";
import { fetchAllReservationsContext } from "../../context/Context";
import DeleteBoat from "../../components/DeleteBoat/DeleteBoat";
import EditBoat from "../../components/EditBoat/EditBoat";
import ReservationCard from "../../components/ReservationCard/ReservationCard";

const BoatDetails = () => {
  // global context for fetching all reservations
  const { allReservations } = useContext(fetchAllReservationsContext);

  // state for details of each boat
  const [boatDetails, setBoatDetails] = useState([]);

  // state for all reservations of this boat
  const [boatReservations, setBoatReservations] = useState([]);

  // get id of the boat from url
  const { boatId } = useParams();

  // filter all reservations to find all reservations for this boat
  useEffect(() => {
    const filterReservations = allReservations.filter(
      (reservation) => reservation.boatId === boatDetails._id
    );
    setBoatReservations(filterReservations);
  }, [boatDetails]);

  // fetch boat details of this boat
  useEffect(() => {
    fetch(`${backendURL}/api/v1/boats/${boatId}`)
      .then((res) => res.json())
      .then((data) => setBoatDetails(data))
      .catch((err) => console.log("Fail to fetch Boat Details", err));
  }, []);

  return (
    <>
      <section className="boat-details">
        <img src="/img/seegelboot.jpeg" alt="Segelboot" />
        <section>
          <article>
            <h2>{boatDetails.boatName}</h2>
            <p>Typ: {boatDetails.boatType}</p>
            <p>Material: {boatDetails.material}</p>
            <p>Baujahr: {boatDetails.constructionYear}</p>
            <p>Seriennummer: {boatDetails.serialNumber}</p>

            <div>
              <EditBoat boat={boatDetails} />
              <DeleteBoat boatId={boatDetails._id} />
            </div>
          </article>

          <h2>Reservierungen</h2>
          {boatReservations?.map((item) => (
            <ReservationCard key={item._id} reservation={item} />
          ))}
        </section>
      </section>
    </>
  );
};

export default BoatDetails;
