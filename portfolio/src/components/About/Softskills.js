import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
 
    DiIllustrator,
    DiPhotoshop,

} from "react-icons/di";
import {
    SiSolidity,
    SiAdobelightroom,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { AiFillCamera } from "react-icons/ai";
function Softskills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillCamera />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAdobelightroom />
          </Col>

          
    </Row>
  );
}

export default Softskills;
