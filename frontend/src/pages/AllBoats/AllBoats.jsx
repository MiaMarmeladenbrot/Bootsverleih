import "./AllBoats.css";
import { fetchAllBoatsContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import DeleteBoat from "../../components/DeleteBoat/DeleteBoat";
import AddBoat from "../../components/AddBoat/AddBoat";
import { Link } from "react-router-dom";
import EditBoat from "../../components/EditBoat/EditBoat";
const AllBoats = () => {
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);

  return (
    <section className="all-boats">
      {/* Show all boats */}
      {allBoats?.map((boat) => (
        <div key={boat._id}>
          <Link to={`/boats/${boat._id}`}>
            <h2>{boat.boatName}</h2>
            <p>Typ: {boat.boatType}</p>
            <p>Material: {boat.material}</p>
            <p>Baujahr: {boat.constructionYear}</p>
            <p>Seriennummer: {boat.serialNumber}</p>
            <p>
              Zuletzt geändert am: {new Date(boat.updatedAt).toLocaleString()}
            </p>
          </Link>
          <DeleteBoat boatId={boat._id} />
          <EditBoat boat={boat} />
        </div>
      ))}

      {/* form to add a boat */}
      <AddBoat />
    </section>
  );
};

export default AllBoats;
