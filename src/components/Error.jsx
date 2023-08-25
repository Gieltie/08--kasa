import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <main className="error">
      <h1 className="error__code">404</h1>
      <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="error__link">
        Retourner sur la page d’accueil
      </NavLink>
    </main>
  );
}
