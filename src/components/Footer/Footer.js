import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <Row className="about-wrapper">
            <Col Col xs={10} sm={6} md={5} lg={5}>
              <p>
                For over 65 years, Schwan's Home Service has been delivering
                high-quality, family-pleasing foods that are flash-frozen for
                freshness and flavor and conveniently delivered to your door.
              </p>
            </Col>
          </Row>
        </div>
        <div className="footer">
          <Row className="foot-links">
            <Col xs={10} sm={3} md={3} lg={2}>
              <h4>CAMPAIGNS</h4>
              <h5>Create a campaign</h5>
              <h5>Find a campaign</h5>
            </Col>
            <Col xs={10} sm={3} md={3} lg={2}>
              <h4>HELP</h4>

              <h5>How It Works</h5>
              <h5>Terms {"&"} Conditions</h5>
            </Col>
            <Col xs={10} sm={3} md={3} lg={2}>
              <h4>ABOUT</h4>

              <h5>Schwan's Cares</h5>
              <h5>As Seen In</h5>
              <h5>Facebook</h5>
              <h5>Twitter</h5>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
