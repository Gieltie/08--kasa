import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../sass/App.scss";
import React from "react";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
