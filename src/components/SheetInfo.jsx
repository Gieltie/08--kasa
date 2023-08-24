export default function LocationInfo(props) {
    return (
        <div className='description'>
            <div className='description__title'>
                <h1>{props.title}</h1>
                <p>{props.location}</p>
                <ul>
                    {props.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <div className='description__host'>
                <div className='description__host--img'>
                    <p>{props.name}</p>
                    <img src={props.picture} alt="Photo de profil" />
                </div>
                <ul>
                    {[1, 2, 3, 4, 5].map((number, index) => (
                        <li key={index} className={props.rating >= number ? "full" : ""}><i className="fa-solid fa-star"></i></li>
                        ))}
                </ul>
            </div>
        </div>
    )
}