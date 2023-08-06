import Card from "./Card";
import data from "../datas/logements.json";

export default function Gallery() {
  const cards = data.map((item) => {
    return <Card 
              title={item.title} 
              cover={item.cover} 
              key={item.id} 
    />;
  });
  return <ul className="gallery">{cards}</ul>;
}
