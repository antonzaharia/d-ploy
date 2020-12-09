import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import arrowdown from '../images/arrow-down.svg'

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Container className="footer-container">
          <br /><br /><br /><br />
          <ListGroup className="list">
            <ListGroup.Item><a className="footer-link" href="/">Marketplace</a></ListGroup.Item>
            <ListGroup.Item><a className="footer-link" href="/">Pricing</a></ListGroup.Item>
            <ListGroup.Item><a className="footer-link" href="/">How it Works</a></ListGroup.Item>
          </ListGroup>
          <ListGroup className="list">
            <ListGroup.Item><a className="footer-link" href="/">Terms of Service</a></ListGroup.Item>
            <ListGroup.Item><a className="footer-link" href="/">Privacy</a></ListGroup.Item>
            <ListGroup.Item><a className="footer-link" href="/">Contact us</a></ListGroup.Item>
          </ListGroup>
          <ListGroup className="list">
            <ListGroup.Item><a className="footer-link" href="/">Create Account</a></ListGroup.Item>
            <ListGroup.Item><a className="footer-link" href="/">Login</a></ListGroup.Item>
            <ListGroup.Item><a className="footer-link" href="/">For Developers</a></ListGroup.Item>
          </ListGroup>
          
          <ListGroup className="list-icons">
              <a href="/" className="english">English <img src={arrowdown} alt="arrow" className="arrow-down"/></a>
              <div className="list-icon-dir">
              <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="/"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
          </ListGroup>
          </Container>
          
        <div className="footer-bottom">
          <hr style={{ borderColor: "#484848" }} />
          <p>D-Ploy &copy; 2020</p>
        </div>
    </Container>
  );
}