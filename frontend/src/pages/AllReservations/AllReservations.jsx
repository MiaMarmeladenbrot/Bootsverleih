import "./AllReservations.css";
import { fetchAllReservationsContext } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ReservationCard from "../../components/ReservationCard/ReservationCard";

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
        <ReservationCard key={reservation._id} reservation={reservation} />
      ))}
    </section>
  );
};

export default AllReservations;
