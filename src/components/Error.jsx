import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <h1 className="error__code">404</h1>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <div className="error__link">
        <NavLink to="/" className="error__link--text">
          Retourner sur la page d’accueil
        </NavLink>
      </div>
    </div>
  );
}
