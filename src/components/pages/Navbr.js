import React, { Component } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../../assets/logo1.jpeg";

import daftarTanaman from "./daftarTanaman";
import Detail from "./Detil_Tanaman";
import LoginAdmin from "./loginAdmin";
import Homepage from "./Homepage";
import HomeAdmin from "./homeAdmin";
import Add from "./AddTanaman";
export default class Navbr extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="sticky-top">
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-4">
                  <img src={logo} />
                </Navbar.Brand>

                <div class=""></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
                  <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="mx-3">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/DaftarTanaman" className="mx-3">
                      Daftar Tanaman
                    </Nav.Link>
                    <Nav.Link as={Link} to="/loginAdmin" className="mx-3">
                      Admin
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>

          <div>
            <Switch>
              <Route path="/" exact component={Homepage} />
              {/* <Route path="/daftartanaman"><daftarTanaman /></Route> */}
              <Route path="/DaftarTanaman" component={daftarTanaman} />
              <Route path="/item/:url" component={Detail} />
              <Route path="/loginAdmin" component={LoginAdmin} />
              <Route path="/homeAdmin" component={HomeAdmin} />
              <Route path="/Add" component={Add} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
