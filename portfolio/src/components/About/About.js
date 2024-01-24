import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Softskills from "./Softskills";
import { AiFillDownCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import DownButton from "../DownButton";
function About() {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  const handleScroll = () => {
    // Xác định vị trí cuộn và ẩn hiển thị của icon
    const scrolled = window.scrollY;
    if (scrolled > 200) {
      setShowScrollIcon(false);
    } else {
      setShowScrollIcon(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              More About <strong className="purple">Myself</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <DownButton scrollToElement="tech" offsetElement={-110} style={{paddingTop: "-10px"}} />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack id="tech"/>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          Other
          <strong className="purple"> Tools </strong>
          
        </h1>
        <Softskills />

        <Github />
        <DownButton scrollToElement="projects" offsetElement={-30}  />
      </Container>
      
    </Container>
  );
}

export default About;

