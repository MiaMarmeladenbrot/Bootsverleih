import "./AllBoats.css";
import { fetchAllBoatsContext } from "../../context/Context";
import { useContext, useState } from "react";
import { backendURL } from "../../api/api";
import DeleteBoat from "../../components/DeleteBoat/DeleteBoat";
const AllBoats = () => {
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);

  console.log(allBoats);

  return (
    <section className="all-boats">
      {allBoats?.map((boat) => (
        <div key={boat._id}>
          <h2>{boat.boatName}</h2>
          <p>Typ: {boat.boatType}</p>
          <p>Material: {boat.material}</p>
          <p>Baujahr: {boat.constructionYear}</p>
          <p>Seriennummer: {boat.serialNumber}</p>
          <DeleteBoat boatId={boat._id} />
        </div>
      ))}
    </section>
  );
};

export default AllBoats;
