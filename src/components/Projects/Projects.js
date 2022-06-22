import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import matchSquare from "../../Assets/Projects/matchSquare.jpg";
import arizonalottery from "../../Assets/Projects/arizonalottery.jpg";
import telemed2u from "../../Assets/Projects/telemed2u.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">PROJECTS</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              img={matchSquare}
              isBlog={false}
              title="MatchSquare"
              description="MatchSquare is the Wholesale Marketplace that provides a curated product experience for the independent retail community who want new and unique Health, Wellness, and Lifestyle products. "
              link="https://www.matchsquare.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={telemed2u}
              isBlog={false}
              title="TELEMED2U"
              description="TeleMed2U is a multi-specialty group of board-certified physicians that supplies its clients with real-time access to physician specialists through the use of telemedicine. "
              link="https://www.telemed2u.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={arizonalottery}
              isBlog={false}
              title="ARIZONA-LOTTERY"
              description="The Arizona Lottery operates entirely from the revenue it generates through the sale of its products; it doesn’t receive any general fund dollars from the State. Proceeds from sales of Lottery tickets, nearly $3.4 million per week, fund a variety of vital state programs"
              link="https://www.arizonalottery.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              img={Demo}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
