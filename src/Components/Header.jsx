import { FaUserAlt, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";

const Header = () => {
  return (
    <header>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">SHOPPERS</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  SHOPPERS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/admin">ADMIN</Nav.Link>
                </Nav>
                <div
                  className="d-flex align-items-center gap-2 "
                  style={{ color: "indigo" }}
                >
                  <FaUserAlt cursor="pointer" />
                  <FaRegHeart cursor="pointer" />
                  <FaShoppingCart cursor="pointer" />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
};

export default Header;
