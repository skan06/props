import React from "react";
import { Container,Nav,Navbar } from "react-bootstrap";

export default function Navbr(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">about us</Nav.Link>
          <Nav.Link href="#pricing">blog</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}
