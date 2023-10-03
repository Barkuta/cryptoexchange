import React from "react";
import s from "./Header.module.css";
import logo from "../../Images/cryptobulls.svg";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="pt-4 " collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="70"
              width="70"
              className="d-inline-block alighn-top ms-4"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-sm-end flex-grow-1 pe-3 fs-5 gap-4 ">
              <Nav.Link className="text-white" href="/">
                {" "}
                О сервисе{" "}
              </Nav.Link>
              <Nav.Link className="text-white" href="/">
                {" "}
                AML/KYC политика{" "}
              </Nav.Link>
              <Nav.Link className="text-white" href="/">
                {" "}
                Правила сайта{" "}
              </Nav.Link>
              <Nav.Link className="text-white" href="/">
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
