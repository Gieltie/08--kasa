import logo from "../images/logo-white.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
