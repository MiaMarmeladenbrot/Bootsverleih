import "./AllReservations.css";
import { fetchAllReservationsContext } from "../../context/Context";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { backendURL } from "../../api/api";
const AllReservations = () => {
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );
    // const [boatDetails, setBoatDetails] = useState([]);

    // useEffect(() => {
    //   fetch(`${backendURL}/api/v1/boats/${reservation.boatId}`)
    //     .then((res) => res.json())
    //     .then((data) => setBoatDetails(data))
    //     .catch((err) => console.log("Fail to fetch Boat Details", err));
    // }, []); ---> Bootsnamen rendern?

  return (
    <section className="all-reservations">
      {allReservations.map((reservation) => (
        <div key={reservation._id}>
          <Link to={`/boats/${reservation.boatId}`}>
            Zur Bootsseite: {reservation.boatId}
          </Link>
          <p>{reservation.startDate}</p>
          <p>{reservation.endDate}</p>
        </div>
      ))}
    </section>
  );
};

export default AllReservations;
