import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import gif from "../../Assets/giphy.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillDownCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

function Home() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array ensures that the effect runs only once during mount

  function showScrollIcon() {
    const scrolled = window.scrollY;
    return scrolled <= 200;
  }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> DAO DUY THONG </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={gif}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "1700px" }}
              />
            </Col>
          </Row>
          <Row className={`scroll-icon ${showScrollIcon ? "" : "hide-scroll-icon"}`}>
            <p> </p>
          </Row>
          <Row className={`scroll-icon ${showScrollIcon ? "" : "hide-scroll-icon"}`}>
            <p> </p>
          </Row>
          <Row className={`scroll-icon ${showScrollIcon ? "" : "hide-scroll-icon"}`}>
            <p> </p>
          </Row>
          <Row className={`scroll-icon ${showScrollIcon ? "" : "hide-scroll-icon"}`}>
            <p> </p>
          </Row>
          

        </Container>
        <Row className={`scroll-icon ${showScrollIcon ? "" : "hide-scroll-icon"}`}>
          <AiFillDownCircle size={35} color="purple" />
        </Row>


      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
