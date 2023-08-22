import Card from "./Card";
import data from "../datas/logements.json";

export default function Gallery() {
  const cards = data.map((item) => {
    return <Card 
              title={item.title} 
              cover={item.cover} 
              id={item.id}
              key={item.id}
    />;
  });
  return <section className="gallery">{cards}</section>;
}
