import React from "react";
import s from "./Header.module.css";
import logo from "../../Images/cryptobulls.svg";

const Header = () => {
  return (
    <div className={s.wrapper}>
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
    </div>
  );
};

export default Header;
