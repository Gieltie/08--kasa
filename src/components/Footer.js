import "../sass/Footer.scss";
import React from "react";
import logo from "../images/logo-white.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo kasa" className="footer--logo" />
      <p className="footer--text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
