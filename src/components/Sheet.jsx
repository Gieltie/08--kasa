import { Navigate, useParams } from "react-router-dom"
import Carousel from "./Carousel"
import Collapse from "./Collapse"
import data from "../datas/logements.json"
import HostInfo from "./HostInfo"
import LocationInfo from "./LocationInfo"

export default function Sheet() {
  const { id } = useParams()
  const currentItem = data.find((item) => item.id === id)

  if (!currentItem){
    return <Navigate to="/error"/>
  }
  //const equipements = 
  //const tags = currentItem.tags
  //const pictures = currentItem.pictures
  //const cover = currentItem.discription
  console.log(currentItem)
  return (
    <div>
      <Carousel logement={currentItem.pictures} />
      
      <LocationInfo title={currentItem.title}/>

      <HostInfo />

      <div>
        <Collapse
          label="Description">
          <p>{currentItem.description}</p>
        </Collapse>
        
        <Collapse
          label="Equipements">
          <ul>{currentItem.equipments.map ((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}</ul>
        </Collapse>
      </div>
    </div>
  )
}
