export default function Banner(props) {
  return (
    <section className='banner'>
      <img src={props.image} alt={props.alt} className='banner__img'/>
      <h1 className="banner__text">{props.title}</h1>
    </section>
  );
}
