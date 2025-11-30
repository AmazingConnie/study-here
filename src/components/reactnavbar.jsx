import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

{/*Basic Navbar*/}
function TopNavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">StudyHere</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Search</Nav.Link>
            <Nav.Link href="#link">Reserve</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;