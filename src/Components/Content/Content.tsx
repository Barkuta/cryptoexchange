import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { IShippingFields } from "../../app.interface";
import { useAppDispatch } from "../../hooks/hooks";
import { getTickerInfo } from "./Assets";
import s from "./Content.module.css";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import GetBlockWithSwitcher from "./GetBlockOfContent/GetBlockContainer";
import SendBlock from "./SendBlockOfContent/SendBlock";
import btc from "../../Images/Bitcoin-Logo.png";
import { event } from "jquery";

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
    p: any;
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
  errors: FieldErrors<IShippingFields>;
};

const Content: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(props.startPriceListening);
    return () => {
      dispatch(props.stopPriceListening);
    };
  }, []);

  let [price, setPrice] = useState(0);
  let [consist, setConsist] = useState(true);

  let prevWsPrice = 0;

  let wsPrice = props.websocketPrice.p;

  setInterval(() => setPrice(wsPrice), 800);

  let changeColor = () => {
    if (wsPrice > price) {
      return true;
    } else if (wsPrice < price) {
      return consist;
    }
  };

  return (
    // <span>{props.price}</span>
    <form onSubmit={props.handleSubmit(props.onSubmit)} className={s.wrapper}>
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
        errors={props.errors}
      />
      <GetBlockWithSwitcher
        count={props.count}
        price={props.price}
        getPriceThunk={props.getPriceThunk}
        coinIdSend={props.coinIdSend}
        coinIdGet={props.coinIdGet}
        switcher={props.switcher}
        errors={props.errors}
        register={props.register}
        switchFn={function () {
          throw new Error("Function not implemented.");
        }}
      />
      <CustomerInfo
        switcher={props.switcher}
        register={props.register}
        errors={props.errors}
      />
      <div>
        <button
          className={s.submitButton}
          onClick={() => {
            props.setValue("total_price", String(props.switchFn()));
            props.setValue(
              "ticker1",
              String(getTickerInfo(".SendBlock_select__current__IwlkI"))
            );
            props.setValue(
              "ticker2",
              String(getTickerInfo(".GetBlock_select2__current__vsVe1"))
            );
          }}
        >
          Обменять
        </button>
      </div>
      <div className={s.ChangeTitle}>
        <span>Обмен</span>
        <div className={s.changeInfo}>
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
      <div className={s.cardWrapper}>
        <div className={s.card}>
          <div className={s.infoCardContainer}>
            <div className={s.cardImg}>
              <img src={btc} alt="" />
            </div>
            <div className={s.cardTicker}>
              <span>BTC/USDT</span>
            </div>
            <div className={s.priceTicker}>
              <span className={changeColor() ? s.green : s.red}>
                {Math.abs(wsPrice)}
              </span>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.infoCardContainer}>
            <div className={s.cardImg}>
              <img src={btc} alt="" />
            </div>
            <div className={s.cardTicker}>
              <span>BTC/USDT</span>
            </div>
            <div className={s.priceTicker}>
              <span className={changeColor() ? s.green : s.red}>
                {Math.abs(wsPrice)}
              </span>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.infoCardContainer}>
            <div className={s.cardImg}>
              <img src={btc} alt="" />
            </div>
            <div className={s.cardTicker}>
              <span>BTC/USDT</span>
            </div>
            <div className={s.priceTicker}>
              <span className={changeColor() ? s.green : s.red}>
                {Math.abs(wsPrice)}
              </span>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.infoCardContainer}>
            <div className={s.cardImg}>
              <img src={btc} alt="" />
            </div>
            <div className={s.cardTicker}>
              <span>BTC/USDT</span>
            </div>
            <div className={s.priceTicker}>
              <span className={changeColor() ? s.green : s.red}>
                {Math.abs(wsPrice)}
              </span>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.infoCardContainer}>
            <div className={s.cardImg}>
              <img src={btc} alt="" />
            </div>
            <div className={s.cardTicker}>
              <span>BTC/USDT</span>
            </div>
            <div className={s.priceTicker}>
              <span className={changeColor() ? s.green : s.red}>
                {Math.abs(wsPrice)}
              </span>
            </div>
          </div>
        </div>

        {/* <span>{Math.abs(props.websocketPrice.p)}</span> */}
      </div>
    </form>
  );
};

export default Content;
