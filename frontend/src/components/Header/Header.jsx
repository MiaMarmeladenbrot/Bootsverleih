import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <h1>Boaty</h1>
        </Link>
        <div className="nav-right">
          <Link to={"/boats"}>
            <p>All Boats</p>
          </Link>
          <Link>
            <p>Add a Boat</p>
          </Link>
          <Link to={"/reservations"}>
            <p>All Reservations</p>
          </Link>
          <Link>
            <p>Add Reservation</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
