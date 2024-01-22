import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV.pdf";
import cvpng from "../../Assets/../Assets/CV.png";
import { AiOutlineDownload, AiOutlineFundView } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { SiCodereview } from "react-icons/si";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div>
      <Container fluid className="resume-section" id="resume">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <p className="resume-title" style={{ textAlign: "center", fontSize: "2.5em" }}>My <span className="purple"> Resume</span></p>
          <br />
          <p> Resume Preview </p>
          <img src={cvpng} alt="resume" style={{ maxWidth: "750px" }} />
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", paddingTop: "10px", marginTop: "20px" }}
          >
            <SiCodereview />
            &nbsp;View full resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
