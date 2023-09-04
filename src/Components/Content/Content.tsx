import React, { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { usePrice } from "../../hooks/useSelector";

import {
  startPriceListening,
  stopPriceListening,
} from "../../Redux/priceSlice";
import s from "./Content.module.css";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import GetBlock from "./GetBlockOfContent/GetBlock";
import SendBlock from "./SendBlockOfContent/SendBlock";

const Content: React.FC = (props: any) => {
  const price = usePrice();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startPriceListening());
    return () => {
      dispatch(stopPriceListening());
    };
  }, []);

  return (
    <div className={s.wrapper}>
      <div>
        <span>{Math.abs(price.p)}</span>
        <br />
        <span>{props.price}</span>
      </div>
      <div className={s.attention}>
        <div className={s.titleOne}>
          <span>Внимание!</span>
        </div>
        <div className={s.description}>
          <span>
            Уважаемые клиенты, сумма к получению фиксируется, если изменение
            курса было не более чем на 0.3%.Если сумма к получению изменилась,
            более чем на 0.3%, заявка будет пересчитана или произведен возврат
            согласно правилам сайта. Комиссия за возврат криптовалюты вычитается
            из полученной суммы.
          </span>
        </div>
      </div>
      <SendBlock />
      <GetBlock />
      <CustomerInfo />
      <div className={s.personInfo}>
        <div className={s.getTitle}>
          <span>Обмен</span>
        </div>
        <div className={s.change}>
          <ol>
            <li>
              Заполните все поля представленной формы. Нажмите кнопку
              «Обменять».
            </li>
            <li>
              Ознакомьтесь с условиями договора на оказание услуг обмена, если
              вы принимаете их, поставьте галочку в соответствующем поле и
              нажмите кнопку «Создать заявку».
            </li>
            <li>
              Оплатите заявку. Для этого следует совершить перевод необходимой
              суммы, следуя инструкциям на нашем сайте.
            </li>
            <li>
              После выполнения указанных действий, система переместит Вас на
              страницу «Состояние заявки», где будет указан статус вашего
              перевода.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Content;
