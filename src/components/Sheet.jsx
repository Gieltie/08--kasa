import { Navigate, useParams } from "react-router-dom"
import data from "../datas/logements.json"
import Carousel from "./Carousel"
import SheetInfo from "./SheetInfo"
import Collapse from "./Collapse"

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
      
      <SheetInfo 
        title={currentItem.title} 
        description={currentItem.description} 
        location={currentItem.location} 
        name={currentItem.host.name} 
        tags={currentItem.tags} 
        picture={currentItem.host.picture} 
        rating={currentItem.rating}
      />

      <section className="collapse__container--sheet">
        <Collapse label="Description">
          <p>{currentItem.description}</p>
        </Collapse>
        
        <Collapse label="Equipements">
          <ul>
            {currentItem.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  )
}
