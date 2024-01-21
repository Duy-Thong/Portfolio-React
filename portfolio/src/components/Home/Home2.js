import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/somedia.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,

} from "react-icons/ai";
import { TiSocialFlickrCircular } from "react-icons/ti";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a student studying information technology at PTIT (Posts
                    and Telecommunications Institute of Technology), Hanoi, Vietnam.  
              <br />
              <br />I am
                    passionate about finding creative solutions to 
              <i>
                <b className="purple"> real world
                    problems. </b>
              </i>
              <br />
              <br />
              I especially enjoy applying technology to tasks
                    that I realize can be automated.
                  <br />
              Whenever possible, I also learn new things and use them to improve my skills, both technical and soft.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/The-White-Bear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/duythong27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:duythong.ptit@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/d_d_thong/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.flickr.com/photos/188231367@N03/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <TiSocialFlickrCircular />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
