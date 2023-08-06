export default function Card(props) {
  /* console.log(props) */
  return (
    <li className="card" key={props.id}>
      <img src={props.cover} alt={props.title} className="card__image" />
      <p className="card__text">{props.title}</p>
    </li>
  );
}
