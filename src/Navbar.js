import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Brand Logo" />
          <h1>RevRide</h1>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/10-final-project-samudraam" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/10-final-project-samudraam/motorcycles" end>
                Motorcycles
              </NavLink>
            </li>
            <li>
              <NavLink to="/10-final-project-samudraam/about" end>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
