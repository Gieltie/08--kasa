import logo from "../images/logo-white.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img 
        className="footer__logo"
        src={logo} 
        alt="logo kasa" 
      />
      <p className="footer__text">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}
