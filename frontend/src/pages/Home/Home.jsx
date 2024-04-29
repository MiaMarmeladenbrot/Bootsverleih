import Header from "../../components/Header/Header";
import {
  fetchAllBoatsContext,
  fetchAllReservationsContext,
} from "../../context/Context";
import { useContext, useState } from "react";
import "./Home.css";

const Home = () => {
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );
  console.log(allBoats);
  console.log(allReservations);
  return (
    <section className="home">
      <h1>Home</h1>
      <section className="overview">
        <div>
          <h2>Unsere Boote</h2>
          <p>{allBoats.length}</p>
        </div>
        <div>
          <h2>Unsere Reservierungen</h2>
          <p>{allReservations.length}</p>
        </div>
      </section>
    </section>
  );
};

export default Home;
