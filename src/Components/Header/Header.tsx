import React from "react";
import s from "./Header.module.css";
import logo from "../../Images/cryptobulls.svg";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="pt-4 " collapseOnSelect expand="lg">
        <Container
          className={s.container}
          style={{ margin: "0 auto", maxWidth: "1200px", width: "100%" }}
        >
          <Navbar.Brand href="/">
            <img src={logo} height="70" width="70" className={s.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={s.toggle}
          />
          <Navbar.Collapse id="responsive-navbar-nav" className={s.menu}>
            <Nav className={s.menu1}>
              <Nav.Link
                className={s.link}
                style={{
                  color: "aliceblue",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                <Link className={s.service} to={"/rules"}>
                  О сервисе
                </Link>
              </Nav.Link>
              <Nav.Link
                className={s.link}
                style={{
                  color: "aliceblue",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                <Link to={"/amlpolicy"} className={s.aml}>
                  AML/KYC политика{" "}
                </Link>
              </Nav.Link>

              <Nav.Link
                className={s.link}
                style={{
                  color: "aliceblue",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                <Link className={s.contacts} to={"/contacts"}>
                  Контакты
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
