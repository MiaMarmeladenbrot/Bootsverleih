import { useContext, useEffect, useState } from "react";
import { backendURL } from "../../api/api";
import {
  fetchAllBoatsContext,
  fetchAllReservationsContext,
} from "../../context/Context";

const AddReservation = () => {
  // global fetch for all boats
  const { allBoats } = useContext(fetchAllBoatsContext);

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

  // - ==================
  // # Idee, um vorab zu prüfen, welche Boote zu welchen Zeiten reserviert sind und dann nur entsprechend verfügbare Boote anzuzeigen
  // state for all boats to save the filtered boats in and map this instead of allBoats for select/options
  const [notReservedBoats, setNotReservedBoats] = useState([]);

  // console.log(startDate);
  // console.log(new Date(startDate).toLocaleDateString());
  // console.log(endDate);
  // console.log(allReservations);

  // erst mal nur das genaue Datum rausfiltern für Startdatum und Enddatum:
  const filteredDates = allReservations.filter(
    (res) =>
      new Date(res.startDate).toLocaleDateString() ===
        new Date(startDate).toLocaleDateString() ||
      new Date(res.endDate).toLocaleDateString() ===
        new Date(endDate).toLocaleDateString()
  );
  console.log("filteredDates", filteredDates); // funzt! findet alle Reservierungen, die das eingegebene Startdatum oder Enddatum als Datum enthalten

  // boatIds aus dem gefundenen array der filteredData mit allBoats abgleichen und nur die Boote rausfiltern, die nicht in filteredData.boatId enthalten sind
  // # das funzt noch nicht ... Ergebnis enthält trotzdem das rausgefilterte Boot ...
  useEffect(() => {
    const filterBoats = allBoats.filter(
      (boat) => boat._id !== filteredDates.boatId
    );

    setNotReservedBoats(filterBoats);
  }, [startDate, endDate]);

  console.log("all boats", allBoats);
  console.log("notReservedBoats", notReservedBoats);

  //- ====================

  // function to add a reservation - only if the date is later than today and startDate is before endDate
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
        // onChange={changeStart}
        value={startDate}
      />

      <input
        type="date"
        required
        onChange={(e) => setEndDate(e.target.value)}
        // onChange={changeEnd}
        value={endDate}
      />

      <select
        name="boat"
        id="boat"
        required
        onChange={(e) => setBoatId(e.target.value)}
        value={boatId}
      >
        <option value="">Verfügbare Boote</option>
        {notReservedBoats.map((boat) => (
          <option key={boat._id} value={boat._id}>
            {boat.boatName}
          </option>
        ))}
      </select>

      {/* error message to user if date is in the past or startdate is after enddate */}
      {error.length > 0 ? <p className="error">{error}</p> : ""}

      <button onClick={addReservation}>Reservierung hinzufügen</button>
    </form>
  );
};

export default AddReservation;
