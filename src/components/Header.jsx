import { NavLink } from "react-router-dom";
import logo from "../images/logo-kasa.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo kasa" />
      <nav className="header--nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
