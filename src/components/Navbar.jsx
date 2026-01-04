import { Navbar, Nav, Container } from "react-bootstrap";
import { FaMoon } from "react-icons/fa";

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className="custom-navbar"
    >
      <Container>
        {/* Left Logo */}
        <Navbar.Brand href="#about" className="d-flex align-items-center">
          <img
            src="/logo.jpg"   /* keep image inside public folder */
            alt="Vishnu Vardhan Logo"
            width="50"
            height="50"
            className="me-2"
          />
          <span className="fw-bold text-white">Vishnu Vardhan</span>
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center Nav */}
          <Nav className="mx-auto text-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Right Theme Button */}
          <Nav>
            <Nav.Link className="theme-toggle">
              <FaMoon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
