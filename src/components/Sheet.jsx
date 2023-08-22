import { Navigate, useParams } from "react-router-dom"
import Carousel from "./Carousel"
import Collapse from "./Collapse"
import Star from "./StarIcon"
import data from "../datas/logements.json"

export default function Sheet() {
  const { id } = useParams()
  const currentItem = data.find((item) => item.id === id)

  if (!currentItem){
    return <Navigate to="/error"/>
  }
  //const equipements = 
  //const tags = currentItem.tags
  //const pictures = pictures
  //const cover = currentItem.discription
  return (
    <div>
      <Carousel logement={currentItem.pictures}/>
      <Collapse title="Description" content={currentItem.description}/>
      <Collapse title="Equipements" content={currentItem.equipments}/>
      <Star />
      <h1>{currentItem.equipments}</h1>
    </div>
  )
}
