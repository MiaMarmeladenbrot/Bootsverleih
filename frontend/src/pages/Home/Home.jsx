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
      <section className="overview">
        <Link to="/boats">
          <div className="our-boats">
            <div>
              <h2>Unsere Boote</h2>
              <h2>{allBoats.length}</h2>
            </div>
          </div>
        </Link>

        <Link to="/reservations">
          <div className="our-res">
            <div>
              <h2>Unsere Reservierungen</h2>
              <h2>{allReservations.length}</h2>
            </div>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default Home;
