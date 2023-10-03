import React from "react";
import s from "./Header.module.css";
import logo from "../../Images/cryptobulls.svg";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="pt-4 " collapseOnSelect expand="lg">
        <Container className={s.container}>
          <Navbar.Brand href="/">
            <img src={logo} height="70" width="70" className={s.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={s.toggle}
          />
          <Navbar.Collapse id="responsive-navbar-nav" className={s.menu}>
            <Nav className={s.menu1}>
              <Nav.Link className={s.link} href="/">
                {" "}
                О сервисе{" "}
              </Nav.Link>
              <Nav.Link className={s.link} href="/">
                {" "}
                AML/KYC политика{" "}
              </Nav.Link>
              <Nav.Link className={s.link} href="/">
                {" "}
                Правила сайта{" "}
              </Nav.Link>
              <Nav.Link className={s.link} href="/">
                {" "}
                Контакты{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

{
  /* <div className={s.wrapper}>
<div className={s.logo}>
  <a href="">
    <img src={logo} alt="" />
  </a>
</div>
<div className={s.links}>
  <a href="">О сервисе</a>
  <a href="">AML/KYC политика</a>
  <a href="">Правила сайта</a>
  <a href="">Контакты</a>
</div>
</div> */
}
