import Header from "../../components/Header/Header";
import {
  fetchAllBoatsContext,
  fetchAllReservationsContext,
} from "../../context/Context";
import { useContext, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { allBoats, setAllBoats } = useContext(fetchAllBoatsContext);
  const { allReservations, setAllReservations } = useContext(
    fetchAllReservationsContext
  );

  return (
    <section className="home">
      <h1>Home</h1>
      <section className="overview">
        <Link to="/boats">
          <div>
            <h2>Unsere Boote</h2>
            <p>{allBoats.length}</p>
          </div>
        </Link>

        <Link to="/reservations">
          <div>
            <h2>Unsere Reservierungen</h2>
            <p>{allReservations.length}</p>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default Home;
