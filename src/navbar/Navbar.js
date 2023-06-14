import '../styles.css'
import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpg";

export function Navbar() {
  return (
    <ul className="navbar">
      <li style={{ float: "left" }}>
        <NavLink to="/" className="navlink" style={{ padding: "0" }}>
          <img
            src={logo}
            alt="home"
            style={{ height: "37px", width: "auto", padding: "0" }}
          ></img>
        </NavLink>
      </li>
      <li style={{ float: "right" }}>
        <NavLink
          to="/browse"
          className="navlink"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#cbcbcb" } : {}
          }
        >
          Browse
        </NavLink>
      </li>
      <li style={{ float: "right" }}>
        <NavLink
          to="/create"
          className="navlink"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#cbcbcb" } : {}
          }
        >
          Create
        </NavLink>
      </li>
      <li style={{ float: "right" }}>
        <NavLink
          to="/collection"
          className="navlink"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#cbcbcb" } : {}
          }
        >
          My Collection
        </NavLink>
      </li>
    </ul>
  );
}
