import React from "react";
import About from "../About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

import HomeName from "./HomeName";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <div>
      <HomeName></HomeName>
      <About></About>
      <Projects></Projects>
      <ContactUs></ContactUs>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
