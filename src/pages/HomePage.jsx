import Header from "../components/Header";
import Banner from "../components/Banner";
//import Footer from "../components/Footer";
//import Gallery from "../components/Gallery";
import image from "../images/img-banner.png"

export default function HomePage() {
  return (
    <div>
      <Header />
      <Banner
            image={image}
            alt="photo de montagne"
            title="Chez vous, partout et ailleurs"
          />
      {/* <Gallery /> */}
      {/* <Footer /> */}
    </div>
  );
}
