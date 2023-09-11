import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { IShippingFields } from "../../app.interface";
import { useAppDispatch } from "../../hooks/hooks";
import s from "./Content.module.css";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import GetBlockWithSwitcher from "./GetBlockOfContent/GetBlockContainer";
import SendBlock from "./SendBlockOfContent/SendBlock";

type PropsType = {
  price: number;
  count: number;
  getPriceThunk: () => void;
  coinIdSend: string;
  coinIdGet: string;
  switcher: boolean;
  startPriceListening: () => void;
  stopPriceListening: () => void;
  switchFn: () => any;
  websocketPrice: {
    e: string | null;
    E: number | null;
    s: string | null;
    t: number | null;
    p: number;
    q: string | null;
    b: number | null;
    a: number | null;
    T: number | null;
    m: boolean | null;
    M: boolean | null;
  };
  register: UseFormRegister<IShippingFields>;
  handleSubmit: UseFormHandleSubmit<IShippingFields, undefined>;
  setValue: UseFormSetValue<IShippingFields>;
  onSubmit: SubmitHandler<IShippingFields>;
};

const Content: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(props.startPriceListening);
    return () => {
      dispatch(props.stopPriceListening);
    };
  }, []);

  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)} className={s.wrapper}>
      <div>
        <span>{Math.abs(props.websocketPrice.p)}</span>
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
      <SendBlock
        getPriceThunk={props.getPriceThunk}
        coinIdSend={props.coinIdSend}
        coinIdGet={props.coinIdGet}
        register={props.register}
      />
      <GetBlockWithSwitcher
        count={props.count}
        price={props.price}
        getPriceThunk={props.getPriceThunk}
        coinIdSend={props.coinIdSend}
        coinIdGet={props.coinIdGet}
        switcher={props.switcher}
        register={props.register}
        switchFn={function () {
          throw new Error("Function not implemented.");
        }}
      />
      <CustomerInfo switcher={props.switcher} register={props.register} />

      <button
        onClick={() => props.setValue("total_price", String(props.switchFn()))}
      >
        IT
      </button>

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
    </form>
  );
};

export default Content;
