import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";


// This is Bootstrap navigation bar. "Buttons" ar linked to adresses
function BootBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Electricity Prices</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Prices
            </Nav.Link>
            <Nav.Link as={Link} to="/HappyHour">
              HappyHour
            </Nav.Link>
            <Nav.Link as={Link} to="/Settings">
              Settings
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
export default BootBar;
