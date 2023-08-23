import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <NavLink
      to={`/item/${props.id}`}
      className="card"
    >
      <img 
        className="card__image" 
        src={props.cover} 
        alt={props.title}
      />
      <p className="card__text">
        {props.title}
      </p>
    </NavLink>
  );
}
