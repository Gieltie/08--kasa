import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="header--nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
    </nav>
  );
}
