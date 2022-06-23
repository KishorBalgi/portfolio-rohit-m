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
              description="MatchSquare isthe B2B e-commerce Wholesale Marketplace that provides a curated product experience
              business community who want to sell new andunique Products.
              Designed and developed High-level Web design for listing products pages using reactJs and redux.
              Worked on creating custom reusable components for the application in the multiple areas.
              "
              link="https://www.matchsquare.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={telemed2u}
              isBlog={false}
              title="TELEMED2U"
              description="TeleMed2U is a multi-specialty group of board-certified physicians that supplies its clients with real-time
              access tointeract video calling consultation with Doctor and MultiplePatients.
              At TeleMed2U, I had developed video calling application using twilio to communicate provider with
              multiple participants.
              Worked with theSocket nodes in the video application for handling multiple incoming requests."
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
