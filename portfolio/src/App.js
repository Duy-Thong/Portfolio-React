import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Certs from "./components/Certificate/Certs";
import ContactUs from "./components/Contact";
import Practicle from "../src/components/Particle";
function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Helmet>
        <title>DuyThong | Portfolio</title>
      </Helmet>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Practicle />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Certs />
        <Resume />
        <ContactUs />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
