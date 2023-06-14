import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./../../contextAPI/context.js";

const Header = () => {
  const test = ({ isActive }) => {
    if (isActive) {
      return {
        backgroundColor: "#b45b35",
        borderRadius: "3px 0px",
      };
    }
  };
  const { auth, changeAuth } = useContext(authContext);

  const routes = [auth ? "logout" : "login", "register", "movies", "favorite"];
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="p-2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {routes.map((route) => {
                return (
                  <NavLink
                    key={route}
                    style={test}
                    className={`text-decoration-none  p-2 m-1 ${styles.styles}`}
                    to={`/${route}`}
                  >
                    {route}
                  </NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
