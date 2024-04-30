import { useContext, useState } from "react";
import { backendURL } from "../../api/api";
import {
  fetchAllBoatsContext,
  fetchAllReservationsContext,
} from "../../context/Context";

const AddReservation = () => {
  // global fetch for all boats
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);

  // global fetch for all reservations
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );

  // states for input fields
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [boatId, setBoatId] = useState("");

  // state for error message
  const [error, setError] = useState("");

  // function to add a reservation
  const addReservation = (e) => {
    e.preventDefault();

    if (new Date() > startDate || startDate > endDate) {
      return setError("Kein valides Datum");
    }

    const newReservation = {
      startDate,
      endDate,
      boatId,
    };

    fetch(`${backendURL}/api/v1/boats/${boatId}/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReservation),
    })
      .then((res) => res.json())
      .then((data) => setAllReservations([data, ...allReservations]))
      .catch((err) => console.log(err));
  };

  return (
    <form className="boat-form">
      <h2>Reservierung hinzufügen</h2>

      <input
        type="date"
        required
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
      />

      <input
        type="date"
        required
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
      />

      <select
        name="boat"
        id="boat"
        required
        onChange={(e) => setBoatId(e.target.value)}
        value={boatId}
      >
        <option value="">Welches Boot?</option>
        {allBoats.map((boat) => (
          <option key={boat._id} value={boat._id}>
            {boat.boatName}
          </option>
        ))}
      </select>

      {error.length > 0 ? <p>{error}</p> : ""}

      <button onClick={addReservation}>Reservierung hinzufügen</button>
    </form>
  );
};

export default AddReservation;
