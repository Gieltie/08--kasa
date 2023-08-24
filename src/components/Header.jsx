import { NavLink } from "react-router-dom";
import logo from "../images/logo-kasa.png";

export default function Header() {
  return (
    <header className="header">
      <img 
        className="header__logo"
        src={logo} 
        alt="logo kasa"
      />
      <nav className="header__navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "header__navigation--link active" : "header__navigation--link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "header__navigation--link active" : "header__navigation--link")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
