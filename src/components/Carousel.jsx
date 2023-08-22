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

    return (
        <div className="carousel">
            <img src={props.logement[currentPicture]} alt={props.id} className="carousel__image"/>
            <img src={ArrowLeft} alt='Fléche gauche' onClick={previousPicture} className="carousel__arrow-left"></img>
            <img src={ArrowRight} alt="Fléche droite " onClick={nextPicture} className="carousel__arrow-right"></img>
            <div className="carousel__counter">{currentPicture + 1}/{props.logement.length}</div>
        </div>
        )
}