import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
        <a href="">Лого</a>
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
