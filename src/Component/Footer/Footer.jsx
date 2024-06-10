import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{backgroundColor:"#e80566"}}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>
            Continually myocardinate inexpensive catalysts for change with seamless initiatives.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={{color:"#fff",textDecoration:"none"}}>Home</a></li>
              <li><a href="/" style={{color:"#fff",textDecoration:"none"}}>About Us</a></li>
              <li><a href="/" style={{color:"#fff",textDecoration:"none"}}>Services</a></li>
              <li><a href="/" style={{color:"#fff",textDecoration:"none"}}>Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <address>
              Bharwarkua Street, <br />
              Inodre,Madhya Pradesh, 485001 <br />
              <a href="tel:+1234567890" style={{color:"#fff",textDecoration:"none"}}>+91-1234567890</a>
            </address>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            <p className="text-center">&copy; 2024 Global Infotech. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
