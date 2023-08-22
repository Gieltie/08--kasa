import { NavLink } from "react-router-dom";


export default function Card(props) {
  console.log(props.id)
  return (
    <NavLink
      to={`/item/${props.id}`}
      
      className="card" 
    >
      <img src={props.cover} alt={props.title} className="card__image" />
      <p className="card__text">{props.title}</p>
    </NavLink>
  );
}
