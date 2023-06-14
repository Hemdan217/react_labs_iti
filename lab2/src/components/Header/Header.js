import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="p-2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <span
                className="badge badge-secondary"
                style={{ color: "white" }}
              >
                <NavLink className="text-decoration-none" to="/login">
                  Login
                </NavLink>
              </span>
              <span
                className="badge badge-secondary"
                style={{ color: "white" }}
              >
                <NavLink className="text-decoration-none" to="/register">
                  Register
                </NavLink>
              </span>

              <span
                className="badge badge-secondary"
                style={{ color: "white" }}
              >
                <NavLink className="text-decoration-none" to="/todo">
                  Todo
                </NavLink>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
