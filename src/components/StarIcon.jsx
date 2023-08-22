import starActive from "../images/star-active.png"
import starInactive from "../images/star-inactive.png"

export default function Star() {
    return (
        <div>
            <img src={starActive} alt="active" />
            <img src={starInactive} alt="desactive" />
        </div>
    )
}