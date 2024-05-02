import { backendURL } from "../../api/api";
import {
  fetchAllBoatsContext,
  fetchAllReservationsContext,
} from "../../context/Context";
import { useContext, useState } from "react";

const DeleteBoat = ({ boatId }) => {
  // global context for all boats
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);

  // global context for all reservations
  const { allReservations } = useContext(fetchAllReservationsContext);

  // state for error message to user
  const [error, setError] = useState("");

  // state to toggle delete-confirm-box
  const [toggleDelete, setToggleDelete] = useState(false);

  // function to check, if you really want to delete this boat - only if there are no reservations for the boat
  const checkDeleteBoat = () => {
    const filterReservedBoats = allReservations.filter(
      (res) => res.boatId === boatId
    );

    if (filterReservedBoats.length > 0) {
      return setError(
        "Das Boot ist reserviert und kann nicht gelöscht werden."
      );
    }

    setToggleDelete(true);
  };

  // function to delete a boat (after you confirmed it via toggled div-box-button)
  const deleteBoat = () => {
    fetch(`${backendURL}/api/v1/boats/${boatId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) =>
        setAllBoats(allBoats.filter((boat) => boat._id !== data._id))
      )
      .catch((err) => console.log("Could not delete Boat", err));
  };

  return (
    <>
      <svg
        onClick={checkDeleteBoat}
        xmlns="http://www.w3.org/2000/svg"
        width={"15px"}
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
      {error.length > 0 ? <p className="error">{error}</p> : ""}

      <div className={toggleDelete ? "check-delete show" : "check-delete hide"}>
        <p>Willst du dieses Boot wirklich löschen?</p>
        <button onClick={deleteBoat}>ja</button>
        <button onClick={() => setToggleDelete(false)}>nein</button>
      </div>
    </>
  );
};

export default DeleteBoat;
