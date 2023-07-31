import React from "react";
import "../sass/App.scss";
import Header from "./Header";
import Banner from "./Banner";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}
