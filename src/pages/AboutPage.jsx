import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Footer from "../components/Footer";

import image from "../images/img-banner2.png";

export default function AboutPage() {
  return (
    <main className="content-wrap">
      <Header />
      <Banner
            image={image}
            alt="panoramique de montagne"
          />
      <About />
      <Footer />
    </main>
  );
}
