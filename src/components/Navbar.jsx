import { Navbar, Nav, Container } from "react-bootstrap";
import { FaMoon } from "react-icons/fa";

function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        {/* Left Logo */}
        <Navbar.Brand href="#about" className="text-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="logo"
            width="30"
            className="me-2"
          />
          Vishnu
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center Nav */}
          <Nav className="mx-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Right Theme Button */}
          <Nav>
            <Nav.Link href="#">
              <FaMoon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
