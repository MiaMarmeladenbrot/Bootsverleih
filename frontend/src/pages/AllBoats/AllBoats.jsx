import "./AllBoats.css";
import { fetchAllBoatsContext } from "../../context/Context";
import { useContext } from "react";
import DeleteBoat from "../../components/DeleteBoat/DeleteBoat";
import AddBoat from "../../components/AddBoat/AddBoat";
import { Link } from "react-router-dom";
import EditBoat from "../../components/EditBoat/EditBoat";

const AllBoats = () => {
  // global context for all boats
  const { allBoats } = useContext(fetchAllBoatsContext);

  return (
    <>
      <section className="all-boats">
        {allBoats?.map((boat) => (
          <div className="single-boat" key={boat._id}>
            <Link to={`/boats/${boat._id}`}>
              <img src="/img/seegelboot.jpeg" alt="Segelboot" />

              <h2>{boat.boatName}</h2>
              <p>Typ: {boat.boatType}</p>
              <p>Material: {boat.material}</p>
              <p>Baujahr: {boat.constructionYear}</p>
              <p>Seriennummer: {boat.serialNumber}</p>
              <p>
                Zuletzt geändert am: {new Date(boat.updatedAt).toLocaleString()}
              </p>
            </Link>
            <div className="change-boat">
              <EditBoat boat={boat} />
              <DeleteBoat boatId={boat._id} />
            </div>
          </div>
        ))}
      </section>

      {/* form to add a boat */}
      <AddBoat />
    </>
  );
};

export default AllBoats;
