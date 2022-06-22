import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <section>
      <Container fluid className="contact-section">
        <h1>
          <span className="purple">CONTACT</span>
        </h1>
        <Row className="contact-details">
          <Col sm={6}>
            <div>
              <h3>Phone</h3>
              <p className="purple">+91 9876543210</p>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <h3>Skype Id</h3>
              <p className="purple">johndoe@john.com</p>
            </div>
          </Col>
          <Col sm={12}>
            <div>
              <h3>Email</h3>
              <p className="purple">johndoe@john.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
