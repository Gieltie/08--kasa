export default function SheetInfo(props) {
    return (
        <div className="description">
            <div className="description__info">
                <h1 className="description__info--title">{props.title}</h1>
                <p className="description__info--location">{props.location}</p>
                <ul className="description__info--tags">
                    {props.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <div className="description__host">
                <div className="description__host--info">
                    <p>{props.name}</p>
                    <img src={props.picture} alt={props.name} />
                </div>
                <ul className="description__host--stars">
                    {[1, 2, 3, 4, 5].map((number, index) => (
                        <li key={index} className={props.rating >= number ? "star-filled" : ""}><i className="fa-solid fa-star"></i></li>
                        ))}
                </ul>
            </div>
        </div>
    )
}