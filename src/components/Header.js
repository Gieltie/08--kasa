import "../sass/Header.scss";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img src="./images/Logo-kasa.png" className="header--logo" />
      <nav className="header--nav">
        <a href="#accueil">Accueil</a>
        <a href="#propos">A Propos</a>
      </nav>
    </header>
  );
}
