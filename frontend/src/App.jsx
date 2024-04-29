import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { backendURL } from "./api/api";
import {
  fetchAllBoatsContext,
  fetchAllReservationsContext,
} from "./context/Context";
import AllBoats from "./pages/AllBoats/AllBoats";
import AllReservations from "./pages/AllReservations/AllReservations";
import Header from "./components/Header/Header";
import BoatDetails from "./pages/BoatDetails/BoatDetails";

function App() {
  const [allBoats, setAllBoats] = useState([]);
  const [allReservations, setAllReservations] = useState([]);
  useEffect(() => {
    fetch(`${backendURL}/api/v1/boats`)
      .then((res) => res.json())
      .then((data) => setAllBoats(data))
      .catch((err) => console.log("Failed to fetch all boats", err));
  }, []);
  useEffect(() => {
    fetch(`${backendURL}/api/v1/reservations`)
      .then((res) => res.json())
      .then((data) => setAllReservations(data))
      .catch((err) => console.log("Failed to fetch all boats", err));
  }, []);

  return (
    <>
      <fetchAllBoatsContext.Provider value={{ allBoats, setAllBoats }}>
        <fetchAllReservationsContext.Provider
          value={{ allReservations, setAllReservations }}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/boats" element={<AllBoats />} />
              <Route path="/reservations" element={<AllReservations />} />
              <Route path="/boats/:boatId" element={<BoatDetails />} />
            </Routes>
          </BrowserRouter>
        </fetchAllReservationsContext.Provider>
      </fetchAllBoatsContext.Provider>
    </>
  );
}

export default App;
