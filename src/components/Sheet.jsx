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

  return (
    <main className="sheet-wrap">
      <Carousel 
        logement={currentItem.pictures}
        title={currentItem.title}
      />
      
      <LocationInfo title={currentItem.title}/>

      <HostInfo />

      <section className="collapse-wrap">
        <Collapse label="Description">
          <p>{currentItem.description}</p>
        </Collapse>
        
        <Collapse label="Equipements">
          <ul>{currentItem.equipments.map ((equipement, index) => (
            <li key={index}>{equipement}</li>
            ))}</ul>
        </Collapse>
      </section>
    </main>
  )
}
