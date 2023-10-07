import s from "./Contacts.module.css";

import React, { useEffect, useState, memo } from "react";

export type PropsType = {};

const Contacts: React.FC<PropsType> = (props: PropsType) => {
  return (
    <div className={s.wrapper}>
      <div className={s.contacts}>
        <span>Служба поддержки:</span>
      </div>
      <div className={s.tg}>
        <span>Написать:</span>
        <br />
        <a href="#"> Telegram</a>
      </div>
      <div className={s.tg}>
        <span>E-mail</span>
        <br />
        <a href="#">name@klkl.kl</a>
      </div>
    </div>
  );
};

export default Contacts;
