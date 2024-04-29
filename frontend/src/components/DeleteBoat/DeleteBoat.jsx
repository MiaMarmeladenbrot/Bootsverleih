import { backendURL } from "../../api/api";
import { fetchAllBoatsContext } from "../../context/Context";
import { useContext, useState } from "react";
const DeleteBoat = ({ boatId }) => {
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);
  const deleteBoat = () => {
    fetch(`${backendURL}/api/v1/boats/${boatId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) =>
        setAllBoats(allBoats.filter((boat) => boat._id !== data._id))
      )
      .catch((err) => console.log("Could not delete Boat", err));
  };
  console.log(boatId);
  console.log(allBoats);
  return (
    <svg
      onClick={deleteBoat}
      xmlns="http://www.w3.org/2000/svg"
      width={"15px"}
      viewBox="0 0 448 512"
    >
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  );
};

export default DeleteBoat;
