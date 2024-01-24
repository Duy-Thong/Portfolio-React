import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import gif from "../../Assets/giphy.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillDownCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMessage } from "react-icons/ai";
import ChillCode from "../../Assets/ChillCode.mp4";
import DownButton from "../DownButton";
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
  return (

    <Container fluid className="home-section" id="home"  >
      <Container fluid>
        <Container className="home-content" style={{
          paddingTop: "-100px", marginTop: "-50px", marginBottom: "0px"
        }} >
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize: "2.5em" }} className="heading">
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

            <Col md={6} style={{ paddingBottom: 20 }}>
              <img src={gif} className="img-fluid" alt="home pic" style={{ width: "90%", height: '90%' }} />
            </Col>
          </Row>

        </Container>
        <DownButton scrollToElement="home2" offsetElement="0" />
      </Container>

      <Home2 />
      <Particle />

    </Container>
  );
}

export default Home;
