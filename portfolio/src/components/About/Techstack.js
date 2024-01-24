import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiMysql,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

function Techstack() {
  return (
    <Container id="tech">
    <Row style={{ justifyContent: "center", paddingBottom: "50px" } }>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
