import "../sass/Header.scss";
import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src="./images/Logo-kasa.png"
        alt="Logo kasa"
        className="header--logo"
      />
      <nav className="header--nav">
        <Link to="/" className="link">
          Accueil
        </Link>
        <Link to="/about" className="link">
          A Propos
        </Link>
      </nav>
    </header>
  );
}
