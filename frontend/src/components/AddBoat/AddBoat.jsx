import { useContext, useState } from "react";
import "./AddBoat.css";
import { backendURL } from "../../api/api";
import { fetchAllBoatsContext } from "../../context/Context";

const AddBoat = () => {
  // states for input fields
  const [name, setName] = useState("");
  const [typ, setTyp] = useState("");
  const [material, setMaterial] = useState("");
  const [baujahr, setBaujahr] = useState("");
  const [seriennummer, setSeriennummer] = useState("");

  // state for error message
  const [error, setError] = useState("");

  // global fetch for all boats
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);

  // function to add a boat - only if all input fields are filled
  const addBoat = (e) => {
    e.preventDefault();

    if (
      name.length <= 0 ||
      typ.length <= 0 ||
      material.length <= 0 ||
      baujahr.length <= 0 ||
      seriennummer.length <= 0
    )
      return setError("Bitte befülle alle Felder.");

    const newBoat = {
      boatName: name,
      constructionYear: baujahr,
      serialNumber: seriennummer,
      material,
      boatType: typ,
    };

    fetch(`${backendURL}/api/v1/boats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBoat),
    })
      .then((res) => res.json())
      .then((data) => setAllBoats([...allBoats, data]))
      .catch((err) => console.log(err));

    setName("");
    setTyp("");
    setMaterial("");
    setBaujahr("");
    setSeriennummer("");
    setError("");
  };

  return (
    <section className="add-boat-wrapper">
      <form className="boat-form">
        <h2>Boot hinzufügen</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          name="typ"
          id="typ"
          onChange={(e) => setTyp(e.target.value)}
          value={typ}
          defaultValue={""}
        >
          <option value="" disabled>
            Typ
          </option>
          <option value="Segelboot">Segelboot</option>
          <option value="Tretboot">Tretboot</option>
          <option value="Luftkissenboot">Luftkissenboot</option>
          <option value="Geisterschiff">Geisterschiff</option>
          <option value="Containerschiff">Containerschiff</option>
        </select>

        <select
          name="material"
          id="material"
          onChange={(e) => setMaterial(e.target.value)}
          value={material}
          defaultValue={""}
        >
          <option value="" disabled>
            Material
          </option>
          <option value="Holz">Holz</option>
          <option value="GFK">GFK</option>
          <option value="Pappe">Pappe</option>
          <option value="Seelen">Seelen</option>
        </select>

        <input
          type="number"
          placeholder="Baujahr"
          onChange={(e) => setBaujahr(e.target.value)}
          value={baujahr}
        />

        <input
          type="number"
          placeholder="Seriennummer"
          onChange={(e) => setSeriennummer(e.target.value)}
          value={seriennummer}
        />

        {/* error message to user if an input field is empty */}
        {error.length > 0 ? <p className="error">{error}</p> : ""}

        <button onClick={addBoat}>Boot hinzufügen</button>
      </form>
    </section>
  );
};

export default AddBoat;
