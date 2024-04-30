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
            <p>Alle Boote</p>
          </Link>

          <Link to={"/reservations"}>
            <p>Alle Reservierungen</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
