import React from "react"
import ArrowLeft from "../images/arrow_left.png"
import ArrowRight from "../images/arrow_right.png"

export default function Carousel(props) {
    const [currentPicture, setCurrentPicture] = React.useState(0)

    function nextPicture() {
        setCurrentPicture(prevPicture => 
        prevPicture === props.logement.length - 1 ? 0 : prevPicture + 1)
    }

    function previousPicture() {
        setCurrentPicture(prevPicture => 
        prevPicture === 0 ? props.logement.length - 1 : prevPicture - 1)
    }

    if (props.logement.length === 1) {
        return (
            <section className="carousel">
                <img 
                    className="carousel__image"
                    src={props.logement[currentPicture]} 
                    alt={"Image(s): " + props.title}
                />
            </section>
        );
    }

    return (
        <section className="carousel">
            <img 
                className="carousel__image"
                src={props.logement[currentPicture]} 
                alt={"Image(s): " + props.title} 
            />
            <img 
                className="carousel__arrow-left"
                src={ArrowLeft} 
                alt="Fléche gauche" 
                onClick={previousPicture} 
            />
            <img 
                className="carousel__arrow-right"
                src={ArrowRight} 
                alt="Fléche droite" 
                onClick={nextPicture} 
            />
            <span className="carousel__counter">
                {currentPicture + 1}/{props.logement.length}
            </span>
        </section>
        )
}