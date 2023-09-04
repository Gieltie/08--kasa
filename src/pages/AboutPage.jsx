import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import data from "../datas/aPropos.json";
import image from "../images/img-banner2.png";

export default function AboutPage() {
  const collapsePropos = data.map((item) => {
    return (
      <Collapse 
        id={item.id}
        label={item.title}
      >
        <p>{item.discription}</p>
      </Collapse>
      )
    })
  
  return (
    <div className="content--wrap">
      <Header />
      <Banner
        image={image}
        alt="panoramique de montagne"
      />
      <section className="collapse__container--about">
        {collapsePropos}
      </section>
      <Footer />
    </div>
  );
}
