import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppRoutes = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default AppRoutes;
