import React, { useState, useEffect } from "react";

import About from "../Section/About/About";
import Exp from "../Section/Experience/Exp";
import Footer from "../Section/Footer/Footer";
import Header from "../Section/Header/Header";
import Nav from "../Section/Nav/Nav";
import Projects from "../Section/Projects/Projects";
import Fun from "../Section/Fun/Fun";

const HomePage = (props) => {
  const [inView, setInView] = useState("");
  const [section] = useState(props.section);

  useEffect(() => {
    let scrollTo = document.getElementById(section);
    if (scrollTo) scrollTo.scrollIntoView();
  }, [section]);

  return (
    <>
      <Nav inView={inView} />
      <Header setInView={setInView} />
      <About setInView={setInView} />
      <Exp setInView={setInView} />
      <Projects setInView={setInView} />
      <Fun setInView={setInView} />
      <Footer />
    </>
  );
};

const Home = (props) => {
  return (
    <div>
      <HomePage section={props.section} />
    </div>
  );
};

export default Home;
