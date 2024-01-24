import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"; // Import Col from react-bootstrap
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV.pdf";
import cvpng from "../../Assets/../Assets/CV.png";
import { AiOutlineDownload, AiOutlineFundView } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { SiCodereview } from "react-icons/si";
import DownButton from "../DownButton";
import CVfind from "../../Assets/../Assets/resume_detail.png";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" id="resume" >
        <Row style={{paddingTop:"0px", marginTop:"0px"}}>
          <p className="resume-title" style={{ fontSize: "2.5em" }}>
            My <span className="purple" style={{fontStyle:"bold"}}> Resume</span>
          </p>
          <br />
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" ,marginBottom:"50px"}}>
          <Col md={7} style={{ textAlign: "center", paddingLeft: "50px" }}>
            <p> Resume Preview </p>
            <img src={cvpng} alt="resume" style={{ maxWidth: "80%", marginLeft: "50px" }} />
          </Col>
          <Col md={5} style={{ alignSelf: "center", paddingRight: "50px", textAlign: "center" }}>
            <Row className="align-items-center justify-content-center">
              <img src={CVfind} style={{ maxWidth: "55%" }} alt="resume details" />
            </Row>
            <Row className="align-items-center justify-content-center" style={{ marginTop: "20px" }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px", paddingTop: "10px", marginTop: "20px", maxHeight: "50px" }}
              >
                <SiCodereview />
                &nbsp;View full resume
              </Button>
            </Row>
          </Col>
        </Row>
        <DownButton scrollToElement="contactme" offsetElement="200"/>
      </Container>
    </div>
  );
}

export default ResumeNew;
