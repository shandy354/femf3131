import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer pb-2 pt-3">
        <Container>
          <Row>
            <Col>
              <h4 calssName="fw-bold tex-white">@CopyRight2025</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
