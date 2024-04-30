import "./AllReservations.css";
import { fetchAllReservationsContext } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ReservationCard from "../../components/ReservationCard/ReservationCard";
import AddReservation from "../../components/AddReservation/AddReservation";

import "./AllReservations.css";

const AllReservations = () => {
  // global fetch all reservations
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );

  return (
    <section className="all-reservations">
      <article>
        {allReservations.map((reservation) => (
          <ReservationCard key={reservation._id} reservation={reservation} />
        ))}
      </article>
      <AddReservation />
    </section>
  );
};

export default AllReservations;
