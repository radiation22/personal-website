import React from "react";
import Recomandation from "../Recmonandations/Recomandation";
import Experience from "../Experiences/Experience";
import About from "../About/About";
import Quote from "../Quote/Quote";
import Inventions from "../Inventions/Inventions";
import Work from "../Work/Work";
import Navbar from "../Navbar/Navbar";
import Invention from "../Inventions/Invention";
import Topbar from "../Topbar/Topbar";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="lg:pr-2">
      <Navbar></Navbar>
      <Topbar></Topbar>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Work></Work>
      <Quote></Quote>
      <Inventions></Inventions>
      <Recomandation></Recomandation>
      <Contact></Contact>
    </div>
  );
};

export default Home;
