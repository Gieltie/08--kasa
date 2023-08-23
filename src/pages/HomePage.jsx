import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import image from "../images/img-banner.png"

export default function HomePage() {
  return (
    <div className="content-wrap">
      <Header />
      <Banner
            image={image}
            alt="photo de falaises"
            title="Chez vous, partout et ailleurs"
          />
      <Gallery />
      <Footer />
    </div>
  );
}
