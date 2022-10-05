import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">Devs</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Nico</Nav.Link>
          <Nav.Link href="#features">Guille</Nav.Link>
          <Nav.Link href="#pricing">Gonza</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
