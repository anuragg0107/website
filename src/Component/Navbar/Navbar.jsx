import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <>
      <div className='header-top'>
        <Container fluid>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              <span style={{ paddingTop: "5px" }}>
                <FontAwesomeIcon icon={faPhoneVolume} style={{ paddingLeft: "20px", paddingRight: "10px", color: "#FFFFFF" }} />
                24x7 Technical Support <span style={{ paddingLeft: "10px" }}>+91-1234567890</span>
              </span>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ paddingRight: "15px", color: "#FFFFFF" }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ paddingRight: "15px", color: "#FFFFFF" }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={{ paddingRight: "15px", color: "#FFFFFF" }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{ paddingRight: "15px", color: "#FFFFFF" }} />
              </a>
            </div>
          </div>
        </Container>
      </div>
      <Navbar style={{paddingLeft:"10px",paddingRight:"10px"}} expand="lg">
          <Navbar.Brand href="/">
            <Image
              src="http://sarkaarinfotech.com/sarkaar_files/logo-color.png"
              alt="logo"
              width="100"
              height="30"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/services">Service</Nav.Link>
              <Nav.Link href="/demo">Demo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
