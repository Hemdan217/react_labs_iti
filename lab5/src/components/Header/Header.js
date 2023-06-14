import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { authContext } from "./../../contextAPI/context.js";

const Header = () => {
  const favoriteMovies = useSelector((state) => state.favorite);
  const test = ({ isActive }) => {
    if (isActive) {
      return {
        backgroundColor: "#b45b35",
        borderRadius: "3px 0px",
      };
    }
  };

  const { auth, lang, changeLang } = useContext(authContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  const routes = [auth ? "logout" : "login", "register", "movies", "favorite"];

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="p-2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {routes.map((route, index) => {
                return (
                  <NavLink
                    key={route}
                    style={test}
                    className={`text-decoration-none  p-2 m-1 ${styles.styles}`}
                    to={`/${route}`}
                  >
                    {route !== "favorite"
                      ? t(route)
                      : `${route} ${
                          favoriteMovies.length ? favoriteMovies.length : ""
                        }`}
                  </NavLink>
                );
              })}
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeLang();
                }}
              >
                {lang == "eng" ? "English" : "اللغة العربية"}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
