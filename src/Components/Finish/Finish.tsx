import s from "./Finish.module.css";

import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import { TypeArray } from "../Infoboard/Infoboard";
import { useActions } from "../../hooks/useActions";

export type PropsType = {
  isFetching: boolean;
};

const Finish: React.FC<PropsType> = (props: PropsType) => {
  const [info, setInfo] = useState<TypeArray>({
    id: 0,
    count: "",
    total_price: "",
    wallet: "",
    email: "",
    ticker1: "",
    ticker2: "",
    memo: "",
    created_at: "",
  });

  useEffect(() => {
    {
      getInfoDescription();
    }
  }, []);

  const { toggleIsFetching } = useActions();

  const getInfoDescription = () => {
    toggleIsFetching(true);
    axios.get("http://localhost:8888/api/info/").then((response) => {
      setInfo(response.data.id);
      toggleIsFetching(false);
    });
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.text}>
          <span>{`Заявка №${info} принята в обработку!`}</span>
        </div>
        <div className={s.text2}>
          <span>
            Мы обработаем Вашу заявку после зачисления средств на наш счет.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Finish;
